/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "picsum.photos", "i.ibb.co"],
  },
  async redirects() {
    return [
    
    ];
  },
};

module.exports = nextConfig;
