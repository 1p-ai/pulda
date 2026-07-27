#!/bin/bash
set -e

cd site

# node_modules가 없을 때만 설치 시도 (postinstall/scripts 제외로 보안 차단 우회)
if [ ! -d "node_modules" ]; then
  npm install --prefer-offline --ignore-scripts
fi
