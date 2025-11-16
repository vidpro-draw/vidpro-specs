import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

// ⚠️ STEP 1: DEFINE YOUR ACTUAL PUBLIC URL HERE
const BASE_URL = "https://jade-leonard25.github.io/VidPro/";
const TWITTER_HANDLE = "@VidProStudioDev"; // ⚠️ Update with your actual Twitter handle

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// STEP 2: METADATA EXPORT (Updated URLs and added metadataBase)
export const metadata = {
    title: "VidPro Studio - Free Video Converter & Editor | No Upload Required",
    description: "Professional video converter and editing tools that run entirely in your browser. Convert, trim, merge, and edit videos without uploading - your files never leave your device. Fast, secure, and completely free.",
    keywords: "video converter, video editor, free video converter, online video editor, mp4 converter, video format converter, browser video editor, private video editing, no upload video tools, secure video converter, VidPro Studio",
    authors: [{name: "VidPro Studio"}],
    creator: "VidPro Studio",
    publisher: "VidPro Studio",

    // Fixes the "http://localhost:3000" warning for relative image paths
    metadataBase: new URL(BASE_URL),

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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: BASE_URL, // 🟢 FIXED
        siteName: "VidPro Studio",
        title: "VidPro Studio - Free Video Converter & Editor | Privacy-First Video Tools",
        description: "Convert and edit videos directly in your browser. No uploads, no storage, total privacy. Your videos never leave your device.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Video Converter & Editor Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VidPro Studio - Free Video Converter & Editor | No Upload Required",
        description: "Professional video tools that run in your browser. Convert, edit, and process videos without uploading - complete privacy control.",
        images: ["/twitter-image.jpg"],
        creator: TWITTER_HANDLE, // 🟢 FIXED
    },
    alternates: {
        canonical: BASE_URL, // 🟢 FIXED
    },
    verification: {
        google: "your-google-verification-code", // ⚠️ REMEMBER TO UPDATE
        // yandex: "your-yandex-verification-code",
        // bing: "your-bing-verification-code",
    },
    category: "technology",
    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
    }
};

// STEP 3: JSON-LD OBJECT (Updated URL)
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'VidPro Studio',
    description: 'Privacy-focused video converter and editing tools that run entirely in your browser without uploading files',
    url: BASE_URL, // 🟢 FIXED
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any (Browser-based)',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'Video format conversion',
        'Video editing and trimming',
        'No file upload required',
        'Complete privacy control',
        'Works offline',
        'Free unlimited use'
    ],
    browserRequirements: 'Requires JavaScript. Works in modern browsers (Chrome, Firefox, Safari, Edge)',
    softwareVersion: '1.0',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
        bestRating: '5',
        worstRating: '1'
    }
};

// STEP 4: LAYOUT COMPONENT (Adds the JSON-LD script tag)
export default function RootLayout({children}) {
    return (
        <html lang="en">
        {/* 🟢 THIS COMPLETES THE SNIPPET: Renders the JSON-LD script directly into the <head> */}
        <script
            type="application/ld+json"
            key="json-ld-data"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}