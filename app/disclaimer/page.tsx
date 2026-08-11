import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免责声明 - HKMFBL",
  description: "HKMFBL 免责声明，使用网站服务前请阅读。",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">免责声明</h1>
      <p className="text-sm text-slate-500 mb-8">最后更新日期：2026 年 8 月</p>

      <div className="prose-custom max-w-none space-y-6 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">一、内容仅供参考</h2>
          <p>
            HKMFBL 提供的所有在线工具均按"现状"提供，仅供技术参考和辅助使用。我们不对工具的输出结果
            的准确性、完整性、适用性做任何明示或暗示的保证。用户使用工具产生的任何后果由用户自行承担。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">二、数据安全性</h2>
          <p>
            我们的工具均在用户浏览器本地运行，数据不会上传到我们的服务器。但用户仍需注意：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>请勿在公共电脑上处理敏感或机密数据</li>
            <li>部分工具可能使用浏览器缓存，建议定期清理</li>
            <li>我们不对用户设备上的数据丢失或损坏承担责任</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">三、第三方广告</h2>
          <p>
            本网站使用 Google AdSense 等第三方广告服务展示广告。广告内容由广告主提供，不代表 HKMFBL 的观点或立场。
            我们不对广告内容的准确性、合法性负责，点击广告产生的任何交易风险由用户自行承担。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">四、链接责任</h2>
          <p>
            本网站可能包含指向第三方网站的链接。这些链接仅为方便用户提供，不代表我们对第三方内容的认可或担保。
            访问第三方网站的风险由用户自行承担。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">五、服务中断</h2>
          <p>
            因系统维护、升级、网络故障或不可抗力等原因可能导致服务暂时中断。我们将尽力减少中断时间，
            但不保证服务永不中断，也不对因此造成的不便承担责任。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">六、法律适用</h2>
          <p>
            本免责声明适用中华人民共和国法律。如本声明的任何条款与法律法规相抵触，以法律法规为准，
            其余条款继续有效。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">七、联系方式</h2>
          <p>
            如对本免责声明有任何疑问，请发送邮件至{" "}
            <a href="mailto:contact@hkmfbl.top" className="text-blue-600 underline">contact@hkmfbl.top</a>
          </p>
        </div>
      </div>
    </div>
  );
}
