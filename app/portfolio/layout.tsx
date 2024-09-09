import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Johnny Quezada - Projects",
  description: "Johnny Quezada - Portfolio | Projects",
  keywords: [    
    'Teacher pro',
    'Trainme App',
    'Website Portfolios',
    'Mobile App Portfolios',
    'Website Projects',
    'Mobile App Projects'
  ],
  openGraph: {
    title: "Johnny Quezada - Projects",
    description: "Johnny Quezada - Portfolio | Projects",
    url: "https://johnny-portfolio-seven.vercel.app/portfolio",
    siteName: "Johnny Quezada - Portfolio",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: 'Johnny Quezada - Portfolio',
  //   description: "Johnny Quezada - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | React Native ",
  //   site: "@NatnaelEngeda",
  //   images: ['/portfolio-seo-image.jpg'],
  //   creator: "@NatnaelEngeda",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
};