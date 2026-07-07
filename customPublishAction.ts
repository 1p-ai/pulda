import {useDocumentOperation} from 'sanity'
import type {DocumentActionComponent, DocumentActionProps} from 'sanity'

export const CustomPublishAction: DocumentActionComponent = (props: DocumentActionProps) => {
  // Sanity의 기본 발행 액션을 가져옵니다.
  const {publish} = useDocumentOperation(props.id, props.type)

  // 기본 액션의 라벨, 비활성화 상태 등을 그대로 사용합니다.
  const originalPublishAction = publish

  if (!originalPublishAction) {
    return null
  }

  const onHandle = () => {
    // SEO 필드처럼 권장되지만 필수는 아닌 항목을 확인합니다.
    const seoTitle = props.draft?.seoTitle || props.published?.seoTitle
    const seoDescription = props.draft?.seoDescription || props.published?.seoDescription

    let message = '이 문서를 발행하시겠습니까?'
    const warnings = []

    if (!seoTitle) {
      warnings.push('SEO 제목이 비어 있습니다.')
    }
    if (!seoDescription) {
      warnings.push('SEO 설명이 비어 있습니다.')
    }

    if (warnings.length > 0) {
      message += '\n\n[확인 필요]\n- ' + warnings.join('\n- ')
    }

    if (window.confirm(message)) {
      // 사용자가 확인을 누르면 실제 발행을 실행합니다.
      originalPublishAction.execute()
    }
  }

  return {...originalPublishAction, onHandle}
}