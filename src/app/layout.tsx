import "./globals.css";

export const metadata = {
  title: "T2DM Decision Trainer",
  description: "Clinical decision practice for T2DM medication selection"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}