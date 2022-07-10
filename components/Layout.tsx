import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Layout.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <header className="flex-col inline-block align-middle w-full mb-10">
                <div className="flex justify-center">
                    <Image src="/images/bibitto_icon.jpeg" alt="" width={200} height={200} className="rounded-full" />
                </div>

                <h1 className="font-bold text-2xl text-center">{name}</h1>
                <div className="flex justify-center gap-10">
                    <Link href="https://github.com/bibitto">
                        <GitHubIcon className="w-8 h-8" />
                    </Link>
                    <Link href="https://twitter.com/Deep_in_Crypto">
                        <TwitterIcon className="w-8 h-8" />
                    </Link>
                </div>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default Layout;
