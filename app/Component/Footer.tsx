export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6 px-6 text-sm mt-2 text-gray-700 bg-[url('/img/footer.jpg')] bg-cover bg-center">
            <div className="max-w-5xl mx-auto space-y-3">
                <div className="text-base font-semibold text-gray-800">
                    Contact Us
                </div>

                <div className="leading-relaxed">
                    中山大學電資大樓 智慧生醫信號分析實驗室 工EC9012-1室<br />
                    高雄市鼓山區蓮海路70號 9012-1室
                </div>

                <div className="gap-2 text-gray-600">
                    <div>TEL：886-7-552-5252</div>

                    <a
                        href="mailto:liabsi.nsysu@gmail.com"
                        className="hover:underline"
                    >
                        Email Us
                    </a>
                </div>
            </div>
        </footer>
    )
}