import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Johnny Quezada - Skills",
  description: "Johnny Quezada - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | React Native ",
  keywords: [
    'Skills',
    'Habilidades',
    'Website Skills',
    'Reactjs Skills',
    'React Native Skills',
    'Nodejs Skills',
    'Nextjs Skills'
  ],
  openGraph: {
    title: "Johnny Quezada- Skills",
    description: "Johnny Quezada - Skills ",
    url: "https://johnny-portfolio-seven.vercel.app/skills",
    siteName: "Johnny Quezada - Portfolio",
    images: [
      {
        url: "/skills-seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: 'Johnny Quezada - Skills',
  //   description: "Johnny Quezada - Software Developer | Fullstack Developer | Mobile App Developer | Reactjs | Nodejs | Flutter ",
  //   site: "@NatnaelEngeda",
  //   images: ['/skills-seo-image.jpg'],
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