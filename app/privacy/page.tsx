import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策 - HKMFBL',
  description: 'HKMFBL 隐私政策：我们如何在浏览器本地处理您的数据，保护您的隐私安全。',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">隐私政策</h1>
      <p className="text-sm text-slate-500 mb-8">最后更新日期：2026年8月2日</p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p>
          HKMFBL（以下简称"我们"）非常重视用户的隐私安全。本隐私政策说明了我们如何收集、使用和保护您的个人信息。
          请您在使用我们的服务前仔细阅读本政策。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">一、数据本地处理原则</h2>
        <p>
          我们的所有工具均在您的浏览器本地运行。这意味着：<strong>您的数据永远不会上传到我们的服务器</strong>。
          无论是 JSON 数据、图片文件还是其他输入内容，所有处理都在您的设备上完成，我们无从知晓您的数据内容。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">二、我们收集的信息</h2>
        <p>我们仅收集以下两类信息：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>日志数据：</strong>服务器自动记录的访问日志，包括 IP 地址、浏览器类型、访问时间和页面，仅用于网站运营分析和故障排查。</li>
          <li><strong>Cookie：</strong>我们使用必要的 Cookie 来保障网站基本功能，如语言偏好设置。我们不会使用追踪 Cookie 或第三方广告 Cookie。</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">三、Google AdSense</h2>
        <p>
          我们使用 Google AdSense 服务投放广告。Google AdSense 可能会使用 Cookie 和类似技术投放个性化广告。
          您可以访问 <a href="https://www.google.com/settings/ads" className="text-blue-600 underline">Google 广告设置</a> 管理您的广告偏好。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">四、数据安全</h2>
        <p>
          虽然我们无法访问您的工具输入数据，但我们采取合理措施保护网站本身的安全，包括使用 HTTPS 加密传输和定期更新安全技术。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">五、第三方链接</h2>
        <p>
          我们的网站可能包含指向第三方网站的链接。我们对这些第三方网站的隐私实践不负责任，建议您阅读其隐私政策。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">六、政策的变更</h2>
        <p>
          我们可能会不时更新本隐私政策。重大变更时，我们会在网站首页发布公告。建议您定期查看本页面以了解最新政策。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">七、联系我们</h2>
        <p>
          如您对本隐私政策有任何疑问，请通过 <a href="mailto:contact@hkmfbl.top" className="text-blue-600 underline">contact@hkmfbl.top</a> 联系我们。
        </p>
      </div>
    </div>
  );
}
