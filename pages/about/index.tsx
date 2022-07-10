import Link from 'next/link';
import Layout from '../../components/Layout';

const index = () => {
    return (
        <div>
            <Layout>
                <Link href="/">ホームへ</Link>
            </Layout>
        </div>
    );
};

export default index;
