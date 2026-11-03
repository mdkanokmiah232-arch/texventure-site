import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The in-house instant quote calculator was retired in favour of the
      // external quote app. Keep the old URL working for bookmarks and backlinks.
      {
        source: "/instant-quote",
        destination: "https://quote.texventure.com/",
        permanent: true,
      },
      {
        source: "/instant-quote/",
        destination: "https://quote.texventure.com/",
        permanent: true,
      },
      // The in-house enquiry form was retired too — everything now runs through the
      // external quote app. Keep old bookmarks, ads and backlinks working.
      {
        source: "/get-a-quote",
        destination: "https://quote.texventure.com/",
        permanent: true,
      },
      {
        source: "/get-a-quote/",
        destination: "https://quote.texventure.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
