import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Layout.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

interface Props {
    children?: ReactNode;
}

export const siteTitle = 'Next.js blog';

const Layout = ({ children }: Props) => {
    const name = 'ビビッと';
    return (
        <div className={styles.container}>
            <Head>
                <title>ビビッとのBlog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/bibitto_icon.jpeg" />
            </Head>
            <header className="flex-col inline-block align-middle w-full mb-10">
                <div className="flex justify-center">
                    <Image src="/images/bibitto_icon.jpeg" alt="" width={200} height={200} className="rounded-full" />
                </div>

                <h1 className="font-bold text-2xl text-center mt-1">{name}</h1>
                <div className="flex justify-center gap-10 mt-2">
                    <Link href="https://github.com/bibitto">
                        <div className="w-10 h-10">
                            {/* divタグで囲ってみる*/}
                            <GitHubIcon className="w-10 h-10 hover:animate-bounce cursor-pointer" />
                        </div>
                    </Link>
                    <Link href="/">
                        <HomeIcon className="w-10 h-10 hover:animate-bounce cursor-pointer" />
                    </Link>
                    <Link href="https://twitter.com/Deep_in_Crypto">
                        <TwitterIcon className="w-10 h-10 hover:animate-bounce cursor-pointer" />
                    </Link>
                </div>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default Layout;
