/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.corendonresources.com",
      "www.corendon.nl",
      "sundio-media.azureedge.net",
      "prodblogsunweb2020store.blob.core.windows.net",
      "www.vakantiediscounter.nl",
    ],
  },
};

module.exports = nextConfig;
