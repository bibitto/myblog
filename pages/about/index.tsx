import Layout from '../../components/Layout';

const index = () => {
    return (
        <Layout>
            <div className="flex-col text-center">
                <div className="pt-2 pb-7">
                    <h2 className="text-2xl">経歴</h2>
                    <p>九州大学工学部4年生 (休学中)</p>
                    <p>専攻：複雑系、ゲーム理論、MAS</p>
                    <p>
                        インターン：
                        <a
                            href="https://standard-dx.com/"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            AIベンチャー
                        </a>
                        、
                        <a href="https://coinpost.jp/" className="underline hover:underline-offset-2 decoration-black">
                            CoinPost
                        </a>
                        、
                        <a
                            href="https://www.ango-ya.org/"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            暗号屋
                        </a>
                    </p>
                </div>
                <div className="pt-2 pb-7">
                    <h2 className="text-2xl">趣味</h2>
                    <p>運動：フットサル、筋トレ、散歩</p>
                    <p>音楽(ライブ)：ハルカミライ、マカえん、RADなど</p>
                    <p>その他：サウナ、麻雀、ギター</p>
                </div>
                <div className="pt-2 pb-7">
                    <h2 className="text-2xl">熱狂</h2>
                    <p>ブロックチェーン (Web3.0)</p>
                    <p>アンチ中央集権、D(分散性)の意思を継ぐ者です</p>
                    <p>
                        好きな言葉は「
                        <a
                            href="https://www.usv.com/writing/2016/08/fat-protocols/"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            Fat Protocols
                        </a>
                        」
                    </p>
                </div>
                <div className="pt-2 pb-7">
                    <h2 className="text-2xl">技術スタック</h2>
                    <p>フロントエンド：React,Next,TypeScript</p>
                    <p>バックエンド：Go (勉強中)</p>
                    <p>ブロックチェーン：Solidity</p>
                    <p>機械学習：Python (TensorFlow, PyTorch)</p>
                </div>
                <div className="pt-2 pb-7">
                    <h2 className="text-2xl">コミュニティ</h2>
                    <p>
                        コアメンバー：
                        <a
                            href="https://twitter.com/kyuushuuweb3"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            Crypto9
                        </a>
                        、
                        <a
                            href="https://twitter.com/web3UpDrum"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            UpDrum
                        </a>
                    </p>
                    <p>
                        その他：
                        <a
                            href="https://twitter.com/_42crypto"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            42Crypto
                        </a>
                        、
                        <a
                            href="https://app.shiftbase.xyz/"
                            className="underline hover:underline-offset-2 decoration-black"
                        >
                            UNCHAIN
                        </a>
                        、
                        <a href="https://hait-lab.com/" className="underline hover:underline-offset-2 decoration-black">
                            HAIT Lab
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default index;
