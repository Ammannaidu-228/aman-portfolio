import './globals.css';
import  ThemeProvider  from './components/ThemeProvider';
import Navbar from './components/Navbar';
// import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Aman — SDE2 Portfolio',
  description: 'Portfolio site — MERN / Next.js / AWS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <ThemeProvider>
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}