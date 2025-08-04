/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['ui-core'],
    // Netlify 배포를 위한 설정
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
