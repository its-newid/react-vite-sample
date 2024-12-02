import { defineConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            displayName: mode === 'development', // 개발 환경에서만 컴포넌트 이름 표시
                            fileName: mode === 'development', // 개발 환경에서만 파일명 표시
                            pure: true, // 불필요한 스타일 재생성 방지
                            namespace: 'react-vite-sample', // style class에 namespace 추가
                        },
                    ],
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src', // '@'를 '/src' 디렉토리로 매핑하여 경로를 간단하게 사용
        },
    },
    build: {
        emptyOutDir: true, // 빌드 시 출력 디렉토리를 비워서 이전 빌드 파일 제거. 이는 깨끗한 빌드를 보장하여, 이전 빌드의 잔여 파일로 인한 문제를 방지

        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].[hash].js`, // 엔트리 파일의 이름 형식을 지정하여, 파일 이름에 해시를 추가함으로써 캐싱을 최적화
                chunkFileNames: `assets/[name].[hash].js`, // 청크 파일의 이름 형식을 지정하여, 동일한 방식으로 캐싱을 최적화
                assetFileNames: `assets/[name].[hash].[ext]`, // 에셋 파일의 이름 형식을 지정하여, 이미지나 폰트 등의 파일도 캐싱을 최적화
            },
            cssCodeSplit: mode === 'production', // 프로덕션 모드에서 CSS를 별도의 파일로 분리하여, 필요한 CSS만 로드함으로써 성능을 최적화
            cssMinify: mode === 'production', // 프로덕션 모드에서 CSS를 압축하여 파일 크기를 줄여, 네트워크 전송 시간을 줄임
            modulePreload: {
                polyfill: true, // 모듈 프리로드를 위한 폴리필을 추가하여, 구형 브라우저에서도 모듈 프리로드 기능을 사용할 수 있도록 함
            },
            target: 'es2015', // 빌드된 코드의 타겟 ECMAScript 버전을 ES2015로 설정하여, 최신 JavaScript 기능을 사용할 수 있게 합
        },

        server: {
            port: 3000, // 개발 서버가 실행될 포트를 3000으로 설정, vite 처음 기본 설정은 5173인데 임의로 변경
            host: true, // 서버가 로컬 네트워크에서 접근 가능하도록 설정
            cors: mode === 'development', // 개발 모드에서 CORS를 활성화하여, 다른 도메인에서의 요청을 허용
        },

        preview: {
            port: 4173, // 프리뷰 서버가 실행될 포트를 4173으로 설정
            host: true, // 프리뷰 서버가 로컬 네트워크에서 접근 가능하도록 설정
            cors: false, // 프리뷰 모드에서는 CORS를 비활성화
        },
    },
}));
