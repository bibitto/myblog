import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { posts, post, blocks } from '../lib/notion';
import Link from 'next/link';
import Layout from '../components/Layout';

export async function getServerSideProps() {
    let { results } = await posts();
    return {
        props: {
            posts: results,
        },
    };
}

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ビビッとのBlog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/bibitto_icon.jpeg" />
            </Head>

            <Layout>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                    <Link href={'about/'}>
                        <div className="border rounded text-center shadow hover:shadow-indigo-500/40">
                            <h2 className="mb-3 mt-5 text-2xl">ABOUT ME</h2>
                            <p className="mr-10 ml-10 mb-5">
                                This is myself introduction.
                                <br />
                                Please read this topic to understand the personality of `bibitto`.
                            </p>
                        </div>
                    </Link>
                    <Link href={'posts/'}>
                        <div className="border rounded text-center shadow hover:shadow-indigo-500/40">
                            <h2 className="mb-3 mt-5 text-2xl">MY POSTS</h2>
                            <p className="mr-10 ml-10 mb-5">
                                This is my blog posts page.
                                <br />I will share my notices, ideas, daily memos, and so on in my blog.
                            </p>
                        </div>
                    </Link>
                    <Link href={'apps/'}>
                        <div className="border rounded text-center shadow hover:shadow-indigo-500/40">
                            <h2 className="mb-3 mt-5 text-2xl">MY APPS</h2>
                            <p className="mr-10 ml-10 mb-5">
                                This is my apps introduction.
                                <br />
                                If you are interested in my outputs, please visit this page!
                            </p>
                        </div>
                    </Link>
                    <Link href={'contact/'}>
                        <div className="border rounded text-center shadow hover:shadow-indigo-500/40">
                            <h2 className="mb-3 mt-5 text-2xl">CONTACT ME</h2>
                            <p className="mr-10 ml-10 mb-5">
                                This is the form to contact me.
                                <br />
                                Please use this form if you have a job invitation or a small question!
                            </p>
                        </div>
                    </Link>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
function databaseId(databaseId: any, arg1: string) {
    throw new Error('Function not implemented.');
}
