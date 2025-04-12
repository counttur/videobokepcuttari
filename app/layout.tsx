import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
    metadataBase: new URL("https://videobokepcuttari.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'Vx9au_qEDcmjB-53MaQ8-1jiNpsXXUyltTZXBHYX18o',
        yandex: 'b7e3b21382a29ef7',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "logo": "https://videobokepcuttari.pages.dev/favicon.ico",
        "url": "https://videobokepcuttari.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://videobokepcuttari.pages.dev"
            },
            "foundingDate":"2025-04-10"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://videobokepcuttari.pages.dev",
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://videobokepcuttari.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
