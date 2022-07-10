import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { post, posts, blocks } from '../../lib/notion';
import styles from '../../styles/Home.module.css';
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

interface Props {
    id: string;
    post: any;
    blocks: [any];
}

const renderBlock = (block: any): JSX.Element => {
    const type = block.type;

    switch (type) {
        case 'heading_1':
            return <h1>{block[type]?.rich_text[0]?.plain_text} </h1>;

        case 'heading_2':
            return <h2>{block[type]?.rich_text[0]?.plain_text}</h2>;

        case 'heading_3':
            return <h3>{block[type]?.rich_text[0]?.plain_text}</h3>;
        case 'image':
            return (
                <div>
                    <Image src={block[type]?.file.url} width={600} height={400} alt="" />
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

const Post: NextPage<Props> = ({ id, post, blocks }) => {
    return (
        <div className={styles.container}>
            <Layout>
                {blocks?.map((block, index) => {
                    return (
                        <div key={index} className={styles.blogPageContent}>
                            {renderBlock(block)}
                        </div>
                    );
                })}
                <div>
                    <nav>
                        <Link href="/">
                            <a>Homeに戻る</a>
                        </Link>
                    </nav>
                </div>
            </Layout>
        </div>
    );
};

export default Post;
