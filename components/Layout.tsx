import Head from "next/head";
import Image from "next/image";
import { ReactNode } from 'react';
import styles from "./layout.module.css";
import utilStyles from "/styles/utils.module.css"

interface Props {
    children?: ReactNode;
}

export const siteTitle = "Next.js blog";

const Layout = ({ children }:Props) => {


    const name = "ビビッと"
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.icon" />
            </Head>
            <header className={styles.header}>
                <Image 
                    src="/images/bibitto_icon.jpeg" 
                    alt="" 
                    width={200}
                    height={200}
                    className={utilStyles.borderCircle}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>

            <main>{children}</main>
        </div>
    );
}

export default Layout;