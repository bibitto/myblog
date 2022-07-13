import Layout from '../../components/Layout';
import { useMail } from '../../hooks/useMail';

const Contact = () => {
    const { setName, setMail, setMemo, setSubject, setContent, sendMail } = useMail();
    const resetValues = () => {
        document.contactForm.reset();
    };
    return (
        <div>
            <Layout>
                <div className="text-center mt-5">
                    <p className="text-3xl">✋CONTACT FORM</p>
                    <p className="mt-2">質問や仕事のお誘いなどあれば気軽にご連絡ください。</p>
                </div>
                <form name="contactForm" className="grid grid-rows-5 grid-flow-col gap-6 mx-5 mt-10 px-10">
                    <label className="block">
                        <input
                            type="text"
                            className="w-full block rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=" 名前"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <input
                            type="text"
                            className="w-full block rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=" 連絡先（メール）"
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </label>
                    <label className="block row-span-3">
                        <textarea
                            rows={6}
                            className="w-full block rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=" 備考"
                            onChange={(e) => setMemo(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <input
                            type="text"
                            className="w-full block rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=" 件名"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </label>
                    <label className="block row-span-4">
                        <textarea
                            rows={8}
                            className="w-full block rounded-md border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pb-2"
                            placeholder=" 内容"
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </label>
                </form>
                <div className="mt-12 text-center">
                    <button
                        type="button"
                        onClick={async () => {
                            await sendMail();
                            console.log('send mail!!');
                            resetValues();
                            console.log('reset from!!');
                            const message = 'メールの完了に成功しました。返信をお待ちください。';
                            alert(message);
                        }}
                        className="bg-blue-400 hover:opacity-50 text-white rounded px-4 py-2 select-none"
                    >
                        Send
                    </button>
                </div>
            </Layout>
        </div>
    );
};

export default Contact;
