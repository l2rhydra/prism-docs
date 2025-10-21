import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { cache } from 'react'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'

// Cache the page map to avoid rebuilding on every navigation
const getCachedPageMap = cache(async () => {
  return await getPageMap()
})
 
export const metadata = {
  title: {
    default: 'Prism Scripts Documentation',
    template: '%s | Prism Scripts'
  },
  description: 'Documentation for Prism Script\'s FiveM resources',
  keywords: ['FiveM', 'Prism Scripts', 'Documentation', 'Resources', 'Game Development'],
  authors: [{ name: 'Prism Scripts' }],
  creator: 'Prism Scripts',
  publisher: 'Prism Scripts',
  
  // Open Graph metadata for Discord, Facebook, LinkedIn, etc.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.prismscripts.net',
    siteName: 'Prism Scripts Docs',
    title: 'Prism Scripts Documentation',
    description: 'Documentation for Prism Script\'s FiveM resources',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Prism Scripts Documentation',
        type: 'image/png',
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Prism Scripts Documentation',
    description: 'Documentation for Prism Script\'s FiveM resources',
    images: ['/banner.png'],
    creator: '@prismscripts', // Replace with your actual Twitter handle if you have one
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (optional - add your verification codes if needed)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
}
 
const banner =  <></>  //<Banner storageKey="prism-banner">Checkout our new banking system! 🎉</Banner>
const navbar = (
  <Navbar
    logo={<div>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9135 0.00735851C21.4857 0.907865 22.1332 1.7588 22.6274 2.70888C25.5692 8.36338 24.8628 15.2091 19.2575 18.8235C13.7874 22.3501 6.20796 21.7579 0.0526714 20.8156L0.138391 20.6694C6.23481 17.2285 12.1691 13.216 16.3616 7.51141C18.0631 5.19611 19.1821 2.83951 20.5954 0.385323C20.6419 0.304257 20.8216 -0.0556356 20.9135 0.00735851Z" fill="#BEEE11"/>
        <path d="M0.00103279 23.1396C1.10919 22.9801 2.21735 22.7921 3.33222 22.6749C9.59079 22.0166 18.075 22.3522 22.062 28.0072C25.2315 32.503 24.2984 38.4958 21.5234 42.9301C21.4072 43.116 20.9559 43.8559 20.8376 43.9489C20.7824 43.9923 20.7942 44.0238 20.7323 43.9489C19.0453 41.1415 17.4625 38.2489 15.4388 35.6615C12.1381 31.4409 8.00704 28.1513 3.50728 25.2861L0 23.1396H0.00103279Z" fill="#BEEE11"/>
        <path d="M43.9969 23.1913C44.032 23.2285 43.7583 23.5532 43.7139 23.6049C39.1382 28.899 34.5946 34.5612 29.3326 39.1727C27.375 40.8885 25.3038 42.4876 23.1877 44C23.2853 41.8969 23.8667 39.8006 24.5804 37.8286C26.381 32.8547 30.4759 25.7363 35.442 23.4402C38.2134 22.1586 41.1335 22.2634 43.9969 23.1913Z" fill="#BEEE11"/>
        <path d="M43.9969 20.8667C43.2869 21.0856 42.565 21.2891 41.8296 21.4109C32.905 22.884 27.5795 13.4427 24.9041 6.37132C24.1327 4.33227 23.467 2.18066 23.2388 0.00787486L26.0732 2.0526C32.9463 7.15978 38.1096 14.0329 43.686 20.4304C43.7434 20.4959 44.0279 20.8243 43.9969 20.8667Z" fill="#BEEE11"/>
      </svg>
    </div>}
    
  />
)
const footer = <></>
 
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
      className="dark"
      data-theme="dark"
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <PerformanceMonitor />
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getCachedPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}