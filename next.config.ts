import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra({

  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: ['nextra', 'nextra-theme-docs', 'lucide-react'],
  },
})