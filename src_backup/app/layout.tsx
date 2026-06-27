import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yuzhang Liu | Data Scientist & Applied AI Engineer",
    template: "%s | Yuzhang Liu",
  },
  description:
    "Portfolio of Yuzhang Liu, a data scientist and applied AI engineer working across machine learning, LLM applications, databases, and enterprise systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Yuzhang Liu | Data Scientist & Applied AI Engineer",
    description:
      "Machine learning, applied AI, data infrastructure, and enterprise workflow projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
