import '../globals.css';
import { Alexandria } from 'next/font/google';

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Layout({ children }) {
  return (
    <div className={alexandria.className}>
      {children}
    </div>
  );
}
