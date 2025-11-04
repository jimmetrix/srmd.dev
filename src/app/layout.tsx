/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarmad Allawi",
  description:
    "Web Developer and Designer based in Baghdad, Iraq.",
  icons: {
    icon: [
      { url: "/icons/sd16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/sd32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/sd48.png", sizes: "48x48", type: "image/png" },

    ],
    apple: [
      { url: "/icons/sd180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/sd.svg",
        color: "#000000",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="srmd.dev"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}


