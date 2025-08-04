import Main from '../layout/Main/main';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps, router }) {
    const showSidebar = router.pathname.startsWith('/components');

    return (
        <Main showSidebar={showSidebar}>
            <Component {...pageProps} />
        </Main>
    );
}
