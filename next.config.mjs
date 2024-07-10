/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "www.shutterstock.com",
      "res.cloudinary.com",
      "localhost",
      "190.60.174.91",
    ],
  },
};

export default nextConfig;
