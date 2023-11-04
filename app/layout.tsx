import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

/* You can use this file to add css rules to all the routes in your application, such as css reset rules, site-wide styles for HTML elements like links, and more. */
/* it's usually a good practice to add the global cssto the top-level component.  */
/* in nextjs this is the root layout  */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
