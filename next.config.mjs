/** @type {import('next').NextConfig} */
const nextConfig = {
    // Mandatory for GitHub Pages
    output: 'export',

    // Must match your GitHub repo name
    basePath: '/VidPro',

    // Mandatory for static export to prevent image breakage
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
