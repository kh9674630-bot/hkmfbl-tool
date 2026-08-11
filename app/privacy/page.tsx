import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '隐私政策 - HKMFBL',
  description: 'HKMFBL 隐私政策：我们如何保护您的数据和隐私，以及第三方广告处理方式。',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">隐私政策</h1>
      <p className="text-sm text-slate-500 mb-8">最后更新日期：2026 年 8 月 4 日</p>

      <div className="prose-custom max-w-none space-y-6 text-slate-600">
        <p>
          HKMFBL（以下简称"我们"或"本站"）非常重视用户的隐私安全。本隐私政策说明了我们如何收集、使用、存储和
          保护您的个人信息，以及我们在网站上展示第三方广告时的数据处理方式。请您在使用我们的服务前仔细阅读本政策。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">一、数据本地处理原则</h2>
        <p>
          HKMFBL 提供的所有在线工具（包括 JSON 格式化、CSV 转 JSON、时间戳转换、Base64 编解码、UUID 生成、
          图片压缩、二维码生成、字计数等）均在您的浏览器端运行。这意味着：<strong>您的数据永远不会上传到我们的服务器</strong>。
          无论是 JSON 数据、图片文件还是其他输入内容，所有处理都在您的设备上完成，我们无从知晓、存储或访问您的数据内容。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">二、我们收集的信息</h2>
        <p>
          尽管工具数据在本地处理，我们仍会收集以下信息以确保网站正常运行和安全：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>日志数据：</strong>服务器自动记录的访问信息，包括您的 IP 地址、浏览器类型、访问时间、
            访问的页面和请求的文件。这些数据用于网站运营分析、安全监控和故障排查，不会与您的个人身份信息关联。</li>
          <li><strong>Cookie：</strong>我们使用两类 Cookie：</li>
        </ul>
        <ul className="list-disc pl-6 space-y-2 ml-8">
          <li><strong>必要 Cookie：</strong>用于保障网站基本功能，如 Cookie 同意状态的记住。</li>
          <li><strong>分析 Cookie：</strong>我们使用 Cloudflare Analytics 等分析工具了解网站使用情况，这些工具可能收集匿名化的访问数据。</li>
        </ul>
        <p>
          您可以通过浏览器设置管理 Cookie，但禁用必要 Cookie 可能影响网站功能。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">三、Google AdSense 和第三方广告</h2>
        <p>
          HKMFBL 网站使用 Google AdSense 服务投放广告。AdSense 是由 Google 公司提供的在线广告服务，它会
          根据网站内容和用户兴趣展示相关广告。
        </p>
        <p><strong>AdSense 的数据处理方式：</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookie 使用：</strong>Google AdSense 会在您的设备上放置 Cookie（如用于个性化广告），以便
            向您展示您可能感兴趣的广告，并统计广告表现。</li>
          <li><strong>数据收集：</strong>Google AdSense 可能收集您的 IP 地址、浏览行为和设备信息等，用于广告个性化和防欺诈。</li>
          <li><strong>数据共享：</strong>AdSense 会将处理后的广告数据与 Google 的其他服务共享，用于优化广告系统。</li>
        </ul>
        <p>
          作为网站运营方，<strong>我们不会通过 AdSense 收集您的个人信息</strong>，也无法访问或控制 AdSense 收集的数据。
          Google AdSense 的数据处理遵循 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" className="text-blue-600 underline">
            Google 合作伙伴站点隐私政策
          </a>。
        </p>
        <p>
          如果您希望管理 Google AdSense 的个人化广告设置，可以访问 <a href="https://www.google.com/settings/ads" target="_blank" className="text-blue-600 underline">
            Google 广告设置页面
          </a>。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">四、Cookie 同意管理（合规要求）</h2>
        <p>
          为了遵守欧盟 GDPR、ePrivacy 等法律法规，本网站提供 Cookie 同意管理功能。当您首次访问网站时，
          底部会弹出 Cookie 同意提示条，提供以下选项：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>接受全部：</strong>允许所有 Cookie（包括分析 Cookie 和广告 Cookie），关闭提示条。</li>
          <li><strong>拒绝非必要：</strong>仅保留必要 Cookie，拒绝分析和广告 Cookie。</li>
          <li><strong>管理偏好：</strong>可进入 Cookie 设置页面，选择性地启用/禁用各类 Cookie。</li>
        </ul>
        <p>
          您的选择会通过 localStorage 记住，下次访问时不再显示提示条。您可以在浏览器设置中随时清除本地存储
          以重置同意状态。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">五、数据安全</h2>
        <p>
          虽然我们不存储用户的工具输入数据，但我们采取合理措施保护网站基础设施的安全，包括：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>HTTPS 加密：</strong>全站使用 HTTPS 加密传输，防止数据在传输过程中被窃听或篡改。</li>
          <li><strong>服务器安全：</strong>部署在 Cloudflare Pages 安全平台上，定期更新安全补丁。</li>
          <li><strong>访问控制：</strong>服务器访问受到严格限制，仅授权人员可管理部署。</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">六、第三方链接</h2>
        <p>
          我们的网站可能包含指向第三方网站（如 Google AdSense 设置页面、隐私政策页面等）的链接。
          我们对这些第三方网站的隐私实践和内容不负责任，建议您在访问第三方网站时阅读其隐私政策。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">七、用户权利</h2>
        <p>
          根据适用的隐私法律（如欧盟 GDPR），您享有以下权利：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>知情权：</strong>了解我们如何处理您的个人信息。</li>
          <li><strong>访问权：</strong>请求访问我们收集的有关您的个人数据。</li>
          <li><strong>更正权：</strong>要求更正不准确或不完整的个人信息。</li>
          <li><strong>删除权：</strong>要求删除您的个人信息（在适用情况下）。</li>
          <li><strong>撤回同意权：</strong>随时撤回对 Cookie 同意的同意，通过 Cookie 管理条选择拒绝非必要 Cookie。</li>
        </ul>
        <p>
          如需行使上述权利，请联系我们（见第九节）。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">八、政策的变更</h2>
        <p>
          我们可能会不时更新本隐私政策。重大变更时，我们会在网站首页发布公告，并更新本页面中的"最后更新
          日期"。建议您定期查看本页面以了解最新政策。持续使用本站即表示您同意更新后的隐私政策。
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">九、联系我们</h2>
        <p>
          如您对本隐私政策有任何疑问，或希望行使您的权利，请通过以下方式联系我们：<br />
          <strong>Email：</strong> <a href="mailto:contact@hkmfbl.top" target="_blank" className="text-blue-600 underline">contact@hkmfbl.top</a><br />
          <strong>网站：</strong> <a href="/contact" target="_blank" className="text-blue-600 underline">联系我们页面</a>
        </p>
        <p>
          我们将在收到请求后尽快回复，通常在 30 个工作日内。
        </p>
      </div>
    </div>
  );
}