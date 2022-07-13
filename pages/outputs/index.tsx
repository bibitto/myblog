import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';

const index = () => {
    return (
        <div>
            <Layout>
                <div className="grid ml-8 mr-8 gap-10 md:grid-cols-2 grid-cols-1 grid-rows-3">
                    <div className="border-2 rounded-lg shadow hover:shadow-indigo-500/40 text-center hover:opacity-50 cursor-pointer">
                        <Link href="/">
                            <Image
                                className="rounded-t"
                                src="/images/blog.png"
                                alt="app_image"
                                width={700}
                                height={550}
                            />
                        </Link>
                        <Link href="/">
                            <p className="font-bold">Blog Site</p>
                        </Link>
                        <small className="text-zinc-400">with TypeScript,Next,NotionAPI</small>
                    </div>
                    <div className="border-2 rounded-lg shadow hover:shadow-indigo-500/40 text-center hover:opacity-50 cursor-pointer">
                        <Link href="https://nft-minter-frontend-4eqn5pqng-bibitto.vercel.app/">
                            <Image
                                className="rounded-t"
                                src="/images/NFT_Minter.png"
                                alt="app_image"
                                width={700}
                                height={550}
                            />
                        </Link>
                        <Link href="https://nft-minter-frontend-4eqn5pqng-bibitto.vercel.app/">
                            <p className="font-bold">NFT Minter</p>
                        </Link>
                        <small className="text-zinc-400">with React,Solidity,Alchemy on Goerli</small>
                    </div>
                    <div className="border-2 rounded-lg shadow hover:shadow-indigo-500/40 text-center hover:opacity-50 cursor-pointer">
                        <Link href="https://my-wave-portal-app-two.vercel.app/">
                            <Image
                                className="rounded-t"
                                src="/images/Wave_Portal.png"
                                alt="app_image"
                                width={700}
                                height={550}
                            />
                        </Link>
                        <Link href="https://my-wave-portal-app-two.vercel.app/">
                            <p className="font-bold">Wave Portal</p>
                        </Link>
                        <small className="text-zinc-400">with React,Solidity,Alchemy on Goerli</small>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default index;
