import type { Metadata } from "next";
import "./global.css";
export const metadata: Metadata = {
  title: "Portfolio - Huynh Hung",
  description: "Build by huynhhung",
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
  },
};
// Fetch cookies for auth

export default async function RootLayout({
  children,
}: {
  children: React.JSX.Element;
}) {
  return (
    <html lang="en">
      <body
        className="bg-gray-900 text-white"
        style={{ margin: 0 }}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
