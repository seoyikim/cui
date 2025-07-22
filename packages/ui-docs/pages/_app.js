import Main from '../layout/main/main';
import '../styles/main.scss';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    );
}
