#!/bin/bash
set -e

cd site

# sanity 패키지 제거로 decompress CVE 차단 문제 해소됨
# node_modules가 없을 때만 설치
if [ ! -d "node_modules" ]; then
  npm install --ignore-scripts
fi
