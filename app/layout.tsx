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
  title: "Sanford Dinkins, PE | Professional Civil Engineer & Engineering Automation Systems Designer",
  description:
    "Licensed Professional Engineer (PE) specializing in site civil engineering, land development, grading, drainage, and stormwater management. Parallel expertise in engineering workflow automation, billing systems, and technical tools for civil firms.",
  generator: "v0.app",
  keywords: [
    "Professional Engineer",
    "Civil Engineer PE",
    "Site Civil Engineering",
    "Land Development Engineer",
    "Grading and Drainage Design",
    "Stormwater Management",
    "Engineering Automation",
    "Civil Engineering Software",
    "Engineering Workflow Systems",
    "QuickBooks Engineering Integration",
  ],

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
    title: "Sanford Dinkins, PE | Professional Civil Engineer & Engineering Automation Systems Designer",
    description:
      "Licensed Professional Engineer (PE) specializing in site civil engineering, land development, grading, drainage, and stormwater management. Parallel expertise in engineering workflow automation, billing systems, and technical tools for civil firms.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanford Dinkins, PE | Professional Civil Engineer & Engineering Automation Systems Designer",
    description:
      "Licensed Professional Engineer (PE) specializing in site civil engineering, land development, grading, drainage, and stormwater management. Parallel expertise in engineering workflow automation.",
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
      jobTitle: "Professional Civil Engineer",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        name: "Professional Engineer (PE)",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Professional Civil Engineer",
        occupationalCategory: "Civil Engineering",
        responsibilities: [
          "Land development design",
          "Site civil engineering",
          "Grading and drainage design",
          "Stormwater management systems",
          "Utilities coordination",
          "Engineering workflow automation",
          "Systems architecture and design",
        ],
        skills: [
          "Site Civil Engineering",
          "Land Development",
          "Grading and Drainage",
          "Stormwater Management",
          "Engineering Automation",
          "Software Development",
          "Systems Architecture",
          "API Integration",
          "QuickBooks Integration",
        ],
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
      sameAs: ["https://github.com/DuncanFly", "https://sdinkins.com"],
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
      name: "Sanford Dinkins, PE | Professional Civil Engineer & Engineering Automation Systems Designer",
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
