const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true, // ⬅️ BITNO za Apache server
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  
  // 301 Redirects - SEO Migration (stare rute -> nove rute)
  // NAPOMENA: redirects() ne radi sa output: 'export'
  // Ovi redirects će raditi samo ako deploy-ujete na Vercel/Netlify
  // Za Apache/Nginx server koristiti: public/.htaccess ili nginx_redirects.conf
  async redirects() {
    return [
      // Stare HTML stranice -> nove rute
      {
        source: '/Submissions.html',
        destination: '/submissions',
        permanent: true,
      },
      {
        source: '/submissions.html',
        destination: '/submissions',
        permanent: true,
      },
      {
        source: '/Committees.html',
        destination: '/committees',
        permanent: true,
      },
      {
        source: '/committees.html',
        destination: '/committees',
        permanent: true,
      },
      {
        source: '/Registration.html',
        destination: '/registration',
        permanent: true,
      },
      {
        source: '/registration.html',
        destination: '/registration',
        permanent: true,
      },
      {
        source: '/Topics.html',
        destination: '/topics',
        permanent: true,
      },
      {
        source: '/topics.html',
        destination: '/topics',
        permanent: true,
      },
      {
        source: '/Event-Info.html',
        destination: '/event-info',
        permanent: true,
      },
      {
        source: '/event-info.html',
        destination: '/event-info',
        permanent: true,
      },
      {
        source: '/Sponsors.html',
        destination: '/sponsors',
        permanent: true,
      },
      {
        source: '/sponsors.html',
        destination: '/sponsors',
        permanent: true,
      },
      {
        source: '/Ethics.html',
        destination: '/ethics',
        permanent: true,
      },
      {
        source: '/ethics.html',
        destination: '/ethics',
        permanent: true,
      },
      // Past conferences
      {
        source: '/past-conferences/2024.html',
        destination: '/past-conferences/2024',
        permanent: true,
      },
      {
        source: '/past-conferences/2024/gallery.html',
        destination: '/past-conferences/2024/gallery',
        permanent: true,
      },
      // Index
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
