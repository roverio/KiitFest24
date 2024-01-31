/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/members",
        destination: "/coming-soon",
        permanent: true,
      },
      {
        source: "/auth/signup",
        destination: "/coming-soon",
        permanent: true,
      },
      {
        source: "/auth/login",
        destination: "/coming-soon",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
