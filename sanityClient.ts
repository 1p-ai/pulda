import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  // .env 파일에서 환경 변수를 불러옵니다.
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: '2026-07-07', // 최신 API 버전을 사용하세요.
  useCdn: false, // 개발 중에는 false로 설정하여 최신 데이터를 바로 확인합니다.
  perspective: 'published',
  token: import.meta.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

/**
 * Sanity 이미지 객체를 URL로 변환하는 헬퍼 함수입니다.
 * @param source Sanity 이미지 소스 객체
 * @returns 이미지 URL 빌더 인스턴스
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}