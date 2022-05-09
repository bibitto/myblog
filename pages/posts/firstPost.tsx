import { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";

const firstPost: React.FC<AppProps> = ()=> {
    return (
        <>
            <Head>
                <title>最初の投稿</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>saisyonotoukou</h1>
            <Link href="/">ホームへ戻る</Link>
        </>
    );
};

export default firstPost