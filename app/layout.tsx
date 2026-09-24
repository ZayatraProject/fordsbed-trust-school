import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '../components/site-header';
import { Footer } from '../components/footer';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
export const metadata: Metadata = { title: 'Fordsbed Trust School | Nurturing future leaders', description: 'A holistic CBC learning community in Lusaka, Zambia.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${jakarta.variable} ${playfair.variable}`}><SiteHeader />{children}<Footer /></body></html>; }
