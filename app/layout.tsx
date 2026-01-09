import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://sanforddinkins.com"),
  title: {
    default: "Sanford Dinkins, PE | Civil Engineer & Systems Designer",
    template: "%s | Sanford Dinkins, PE",
  },
  description:
    "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
  keywords: [
    "Sanford Dinkins",
    "Sanford Dinkins PE",
    "Civil Engineer",
    "Professional Engineer",
    "Site Civil Engineering",
    "Land Development",
    "Engineering Automation",
    "Systems Design",
    "Civil Billing",
    "Engineering Workflow",
    "PE License",
    "Civil Engineering Consultant",
  ],
  authors: [{ name: "Sanford Dinkins" }],
  creator: "Sanford Dinkins",
  publisher: "Sanford Dinkins",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanforddinkins.com",
    siteName: "Sanford Dinkins, PE",
    title: "Sanford Dinkins, PE | Civil Engineer & Systems Designer",
    description:
      "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanford Dinkins, PE - Civil Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanford Dinkins, PE | Civil Engineer & Systems Designer",
    description:
      "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanford Dinkins",
    jobTitle: "Professional Engineer (PE)",
    description:
      "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
    url: "https://sanforddinkins.com",
    email: "sbdinkins@gmail.com",
    knowsAbout: [
      "Civil Engineering",
      "Site Development",
      "Land Development",
      "Engineering Automation",
      "Systems Design",
      "Civil Billing",
      "Engineering Workflow",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "Professional Engineer (PE)",
    },
    sameAs: [
      "https://linkedin.com",
      "https://github.com",
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
