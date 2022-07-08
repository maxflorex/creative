import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppWrapper } from '../components/Utils/AppContext';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Navigation/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <AppWrapper>
            <div className='min-h-screen overflow-hidden'>
                <Component {...pageProps} />
                <Footer />
            </div>
        // </AppWrapper>
    );
}

export default MyApp;
