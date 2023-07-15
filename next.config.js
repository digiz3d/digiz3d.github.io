/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  output: 'export',
  compiler: { removeConsole: true },
  reactStrictMode: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
