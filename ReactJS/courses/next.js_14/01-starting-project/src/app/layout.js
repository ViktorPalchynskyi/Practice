import { Header } from '@/src/components/Header/Header';
import './globals.css';

export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <div id="page">
                <Header />
                <body>{children}</body>
            </div>
        </html>
    );
}
