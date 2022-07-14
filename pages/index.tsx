import type { NextPage } from 'next';
import { posts } from '../lib/notion';
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
        <div>
            <Layout>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                    <Link href={'about/'}>
                        <div className="border-2 rounded text-center shadow hover:shadow-indigo-500/40 hover:opacity-50 cursor-pointer">
                            <h2 className="mb-3 mt-5 text-2xl">ABOUT ME</h2>
                            <p className="mr-10 ml-10 mb-6">
                                This is myself introduction.
                                <br />
                                Please read this page to understand the personality of `bibitto`.
                            </p>
                        </div>
                    </Link>
                    <Link href={'posts/'}>
                        <div className="border-2 rounded text-center shadow hover:shadow-indigo-500/40 hover:opacity-50 cursor-pointer">
                            <h2 className="mb-3 mt-5 text-2xl">BLOG</h2>
                            <p className="mr-10 ml-10 mb-6">
                                This is my blog posts page.
                                <br />I will share my notices, ideas, daily memos, and so on in my blog.
                            </p>
                        </div>
                    </Link>
                    <Link href={'outputs/'}>
                        <div className="border-2 rounded text-center shadow hover:shadow-indigo-500/40 hover:opacity-50 cursor-pointer">
                            <h2 className="mb-3 mt-5 text-2xl">OUTPUTS</h2>
                            <p className="mr-10 ml-10 mb-6">
                                This is my apps introduction.
                                <br />
                                If you are interested in my outputs, please visit this page!
                            </p>
                        </div>
                    </Link>
                    <Link href={'contact/'}>
                        <div className="border-2 rounded text-center shadow hover:shadow-indigo-500/40 hover:opacity-50 cursor-pointer">
                            <h2 className="mb-3 mt-5 text-2xl">CONTACT</h2>
                            <p className="mr-10 ml-10 mb-6">
                                This is the contact form.
                                <br />
                                Please use this if you have a job invitation or a small question!
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
