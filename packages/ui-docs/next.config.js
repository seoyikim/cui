/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['ui-core'],
    experimental: {
        esmExternals: 'loose'
    },
    webpack: (config, { isServer }) => {
        // ui-core 패키지의 JSX 파일 처리
        config.module.rules.push({
            test: /\.jsx?$/,
            include: /packages\/ui-core/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        });

        return config;
    },
    // Netlify 배포를 위한 설정
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
