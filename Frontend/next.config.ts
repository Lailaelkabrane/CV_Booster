const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/cv_booster/:path*",
        destination: "/:path*",
      },
    ];
  },
};