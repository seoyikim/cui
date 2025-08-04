/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['ui-core'],
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
