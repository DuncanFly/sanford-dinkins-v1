import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanforddinkins.com"),
  title: "Sanford Dinkins, PE | Civil Engineer",
  description:
    "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
  generator: "v0.app",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "AYc-DS789zobKZHzY6mhzFDOhJGbzaGXIPigYKSv_RM",
  },

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sanforddinkins.com",
    siteName: "Sanford Dinkins, PE",
    title: "Sanford Dinkins, PE | Civil Engineer",
    description:
      "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanford Dinkins, PE | Civil Engineer",
    description:
      "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
  },
}

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.sanforddinkins.com/#person",
      name: "Sanford Dinkins",
      jobTitle: "Professional Engineer",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        name: "Professional Engineer (PE)",
      },
      knowsAbout: [
        "Civil Engineering",
        "Land Development",
        "Site Civil Engineering",
        "Grading and Drainage",
        "Stormwater Management",
        "Engineering Automation",
        "Software Development",
        "Systems Architecture",
      ],
      url: "https://www.sanforddinkins.com",
      sameAs: ["https://github.com/DuncanFly"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.sanforddinkins.com/#service",
      name: "Sanford Dinkins, PE - Engineering Services",
      provider: {
        "@id": "https://www.sanforddinkins.com/#person",
      },
      serviceType: "Civil Engineering",
      areaServed: "United States",
      description:
        "Professional civil engineering services specializing in site civil land development, grading, drainage, stormwater management, utilities coordination, and permitting.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sanforddinkins.com/#website",
      url: "https://www.sanforddinkins.com",
      name: "Sanford Dinkins, PE",
      description:
        "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
      publisher: {
        "@id": "https://www.sanforddinkins.com/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.sanforddinkins.com/#webpage",
      url: "https://www.sanforddinkins.com",
      name: "Sanford Dinkins, PE | Civil Engineer",
      isPartOf: {
        "@id": "https://www.sanforddinkins.com/#website",
      },
      about: {
        "@id": "https://www.sanforddinkins.com/#person",
      },
      description:
        "Licensed Professional Engineer specializing in site civil land development, with parallel experience designing scalable digital systems and tools.",
      inLanguage: "en-US",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
