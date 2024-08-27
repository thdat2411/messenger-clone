/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
        swcPlugins:[
            ["next-superjson-plugin", {}]
        ]
    },
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
            },
            {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
            },
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
            },
          ],
    }
};

export default nextConfig;
