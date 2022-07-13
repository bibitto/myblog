import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { post, posts, blocks } from '../../lib/notion';
import Layout from '../../components/Layout';

interface IParams extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    let { id } = ctx.params as IParams;
    let page_result = await post(id);
    let { results } = await blocks(id);
    return {
        props: {
            id,
            post: page_result,
            blocks: results,
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    let { results } = await posts();
    return {
        paths: results?.map((post) => {
            return {
                params: {
                    id: post.id,
                },
            };
        }),
        fallback: false,
    };
};

const renderBlock = (block: any): JSX.Element => {
    const type = block.type;

    switch (type) {
        case 'heading_1':
            return <h1 className="text-4xl">{block[type]?.rich_text[0]?.plain_text} </h1>;

        case 'heading_2':
            return <h2 className="text-3xl">{block[type]?.rich_text[0]?.plain_text}</h2>;

        case 'heading_3':
            return <h3 className="text-2xl">{block[type]?.rich_text[0]?.plain_text}</h3>;
        case 'image':
            return (
                <div>
                    <Image src={block[type]?.file.url} width={400} height={300} alt="" />
                    <br />
                    <small>{block[type]?.caption[0]?.plain_text}</small>
                </div>
            );
        case 'bulleted_list_item':
            return (
                <ul>
                    <li>{block[type]?.rich_text[0]?.plain_text}</li>
                </ul>
            );
        case 'paragraph':
            return <p>{block[type]?.rich_text[0]?.plain_text} </p>;
        default:
            return <p>Undefined type </p>;
    }
};

interface Props {
    id: string;
    post: any;
    blocks: [any];
}

const Post: NextPage<Props> = ({ blocks }) => {
    return (
        <div className="text-center">
            <Layout>
                {blocks?.map((block, index) => {
                    return (
                        <div key={index} className="mt-1">
                            {renderBlock(block)}
                        </div>
                    );
                })}
                <div className="mt-10">
                    <Link href="/posts">
                        <div>
                            <button className="rounded-lg p-1 font-bold border-2 shadow hover:shadow-indigo-500/40 hover:opacity-50">
                                ブログ一覧
                            </button>
                        </div>
                    </Link>
                </div>
            </Layout>
        </div>
    );
};

export default Post;
