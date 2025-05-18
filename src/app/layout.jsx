import './globals.css';
import { Alexandria } from 'next/font/google';

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Lviv Sightseeings',
  description: 'Discover the beauty of Lviv',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alexandria.className}>
        {children}
      </body>
    </html>
  );
}
