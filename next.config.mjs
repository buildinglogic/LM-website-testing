/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 301 PERMANENT REDIRECTS  (preserves 2 years of Google ranking authority)
  //
  // Rule: old Wix URL  →  new Next.js URL
  // Google will transfer "page authority" from the old to the new.
  // Old bookmarks, LinkedIn posts, emails – all still work.
  // ─────────────────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // ── Career / Careers  ─────────────────────────────────────────────────
      { source: '/career',              destination: '/careers',                 permanent: true },
      { source: '/career/vacany',       destination: '/careers',                 permanent: true },
      { source: '/job-application',     destination: '/careers',                 permanent: true },

      // ── Demo / Booking  ───────────────────────────────────────────────────
      { source: '/book-online',         destination: '/book-demo',               permanent: true },
      { source: '/book-online/:path*',  destination: '/book-demo',               permanent: true },

      // ── Company & About  ──────────────────────────────────────────────────
      { source: '/about-4',             destination: '/company',                 permanent: true },
      { source: '/about-4-1',           destination: '/company',                 permanent: true },
      { source: '/about-4-2',           destination: '/company',                 permanent: true },
      { source: '/about',               destination: '/company',                 permanent: true },

      // ── Founder Profile  ─────────────────────────────────────────────────
      { source: '/company/founder-profile', destination: '/company/founder',     permanent: true },

      // ── Giving Back  ─────────────────────────────────────────────────────
      { source: '/company/givingback',  destination: '/company/giving-back',     permanent: true },

      // ── Products  ─────────────────────────────────────────────────────────
      { source: '/products',            destination: '/#products',               permanent: true },
      { source: '/products/tradeveda',  destination: '/#products',               permanent: true },
      { source: '/products/patramai',   destination: '/#products',               permanent: true },
      { source: '/beyondtradeveda',     destination: '/#products',               permanent: true },

      // ── Legal  ───────────────────────────────────────────────────────────
      { source: '/terms-of-service',    destination: '/legal/terms',             permanent: true },
      { source: '/legal',               destination: '/legal/privacy-policy',    permanent: true },

      // ── Blog / Posts  ─────────────────────────────────────────────────────
      { source: '/blogs',               destination: '/newsletter',              permanent: true },
      { source: '/post/:slug*',         destination: '/newsletter',              permanent: true },
      { source: '/blog-categories-sitemap.xml', destination: '/',               permanent: false },

      // ── Other old Wix pages  ─────────────────────────────────────────────
      { source: '/press-and-media',     destination: '/company',                 permanent: true },
      { source: '/news',                destination: '/newsletter',              permanent: true },
      { source: '/trade-news',          destination: '/newsletter',              permanent: true },
      { source: '/podcasts',            destination: '/newsletter',              permanent: true },
      { source: '/videos',              destination: '/',                        permanent: true },
      { source: '/plans-pricing',       destination: '/book-demo',               permanent: true },
      { source: '/ai-hackathon',        destination: '/',                        permanent: true },
      { source: '/developertools',      destination: '/',                        permanent: true },

      // ── Wix internal pages (should never be public) ───────────────────────
      { source: '/general-1',           destination: '/',                        permanent: true },
      { source: '/general-8',           destination: '/',                        permanent: true },
      { source: '/general-clean-3',     destination: '/',                        permanent: true },
      { source: '/about-4-2',           destination: '/company',                 permanent: true },
      { source: '/thank-you-new',       destination: '/',                        permanent: true },
      { source: '/members',             destination: '/',                        permanent: true },
      { source: '/forum',               destination: '/',                        permanent: true },
      { source: '/discussionforum',     destination: '/',                        permanent: true },
      { source: '/company/copy-of-contact-us', destination: '/book-demo',       permanent: true },
    ]
  },
}

export default nextConfig

