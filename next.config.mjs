/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dustycl.github.io' : '',
  assetPrefix: isProd ? '/dustycl.github.io/' : '',
  
};


export default nextConfig;
