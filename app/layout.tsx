import type { Metadata } from 'next'
import './globals.css'
import './styles/loading-style.css'
import './styles/underline-style.css'
import Header from './layouts/Header'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png'
  },
  title: 'Johnny Quezada | Portfolio',
  category: 'Technology',
  description: 'Johnny Quezada - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs ',
  applicationName: 'Next.js',
 // metadataBase: new URL('https://www.natnaelengeda.tech/'),
  keywords: [
    'Software Development',
    'Fullstack Development',
    'Reactjs',
    'Nodejs',
    'Frontend Developer',
    'Nicaragua Developer',
    'Nestjs Developer',
    'Software Developer in Nicaragua',
    'Reactjs Developer in Nicaragua',
    'Nicaragua',
    'Johnny Quezada',
    'John Quezada',
    
  ],
  creator: 'Johnny Quezada',
  authors: [
    {
      name: 'Johnny Quezada',
     // url: 'https://www.natnaelengeda.tech/'
    }
  ],
  publisher: "Johnny Quezada",
  openGraph: {
    title: 'Johnny Quezada',
    description: "Johnny Quezada - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs ",
    //url: "https://www.natnaelengeda.tech/",
    siteName: "Johnny Quezada - Portfolio",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: 'Natnael Engeda',
  //   description: "Natnael Engeda - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
  //   site: "@NatnaelEngeda",
  //   images: ['/seo-image.jpg'],
  //   creator: "@NatnaelEngeda",
  // },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['johnnyqm5@gmail.com',
       // 'https://www.natnaelengeda.tech/'
      ]
    }
  },
  appleWebApp: {
    title: 'Johnny Quezada - Portfolio',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/logo.png'
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {/* <NextUIProvider> */}
        <Header />
        <main className='w-full min-h-screen gradient_background pt-10 md:pt-28'>
          {children}
          <SpeedInsights />
        </main>
        {/* </NextUIProvider> */}
      </body>
    </html>
  )
}
