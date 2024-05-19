'use client';

import { Provider } from 'react-redux';
import '@/app/globals.scss';
import { store } from './store';
import { ThemeContextProvider } from './context/ThemeContext/ThemeContextProvider';
import { Layout } from './components/Layout/Layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
            <ThemeContextProvider>
                <Layout>
                   { children }
                </Layout>
            </ThemeContextProvider>
        </Provider>
      </body>
    </html>
  );
}
