import './globals.css';

export const metadata = {
  title: 'Lviv Sightseeings',
  description: 'Discover the beauty of Lviv',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
