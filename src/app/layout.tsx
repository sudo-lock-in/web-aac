import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web AAC | Communication board",
  description: "A free and open-source AAC communication board.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
