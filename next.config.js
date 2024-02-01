/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "picsum.photos", "i.ibb.co"],
  },
  async redirects() {
    return [
      {
        source: "/members",
        destination: "/coming-soon",
        permanent: true,
      },
      {
        source: "/auth/register",
        destination: "/coming-soon",
        permanent: true,
      },
      // {
      //   source: "/auth/login",
      //   destination: "/coming-soon",
      //   permanent: true,
      // },
      // {
      //   source: "/dashboard/payment-confirm",
      //   destination: "/coming-soon",
      //   permanent: true,
      // },
      
      {
        source: "/contactus",
        destination: "/coming-soon",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
