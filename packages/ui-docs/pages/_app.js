import Layout from '../layout/Layout/layout';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
