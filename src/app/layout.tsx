import { BackgroundLayout } from "@/components/BackgroundLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundLayout>
          {children}
        </BackgroundLayout>
      </body>
    </html>
  );
} 