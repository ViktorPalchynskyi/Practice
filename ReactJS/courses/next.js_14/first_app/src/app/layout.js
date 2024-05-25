import './globals.css';

export const metadata = {
    title: 'NextJS Course App',
    description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Layout</h1>
                {children}
            </body>
        </html>
    );
}
