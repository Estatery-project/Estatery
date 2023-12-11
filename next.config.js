/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{appDir: true},
    images: {
        domains: ['ik.imagekit.io'],
      },
}

module.exports = nextConfig
