/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "picsum.photos", "i.ibb.co"],
  },
};

module.exports = nextConfig;

// async redirects() {
//   return [
//     {
//       source: "/events",
//       destination: "/coming-soon",
//       permanent: true,
//     },
//     {
//       source: "/events/:slug",
//       destination: "/coming-soon",
//       permanent: true,
//     },
//     {
//       source: "/members",
//       destination: "/coming-soon",
//       permanent: true,
//     },
//     {
//       source: "/auth/signup",
//       destination: "/coming-soon",
//       permanent: true,
//     },
//     {
//       source: "/auth/login",
//       destination: "/coming-soon",
//       permanent: true,
//     },
//   ];
// }
