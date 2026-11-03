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
    ];
  },
};

export default nextConfig;
