/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "media.geeksforgeeks.org",
            "www.notion.io",
            "prod-files-secure.s3.us-west-2.amazonaws.com"
        ]
    }
};

export default nextConfig;
