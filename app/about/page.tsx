import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于 HKMFBL - 免费在线开发工具集',
  description: 'HKMFBL 是一个免费的在线开发工具平台，提供 JSON 格式化、Base64 编解码、UUID 生成等 12 款实用工具，所有工具均在浏览器本地运行，保护用户数据隐私。',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">关于 HKMFBL</h1>

      <div className="prose prose-slate max-w-none">
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">我们的使命</h2>
          <p className="text-slate-600 leading-relaxed">
            HKMFBL 致力于为全球开发者提供安全、免费、高效的在线工具。我们相信，好的工具不应该有门槛——无论是经济门槛还是技术门槛。
            每一个工具都经过精心设计，确保在浏览器本地运行，您的数据永远不会离开您的设备。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">产品特色</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔒', title: '隐私优先', desc: '所有计算在本地完成，数据不上传服务器' },
              { icon: '⚡', title: '极速响应', desc: '无需等待服务器处理，毫秒级即时返回结果' },
              { icon: '💰', title: '永久免费', desc: '所有工具无限制免费使用，无广告干扰核心功能' },
              { icon: '🌐', title: '跨平台支持', desc: '支持 Chrome、Firefox、Safari、Edge 等主流浏览器' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">工具列表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            目前 HKMFBL 提供以下 12 款在线工具，持续更新中：
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
            <li>✓ JSON 在线格式化与校验</li>
            <li>✓ CSV 转 JSON 转换器</li>
            <li>✓ Unix 时间戳转换器</li>
            <li>✓ Base64 编解码工具</li>
            <li>✓ UUID v4 批量生成器</li>
            <li>✓ URL 编解码工具</li>
            <li>✓ 图片在线压缩工具</li>
            <li>✓ 二维码生成器</li>
            <li>✓ 字数统计工具</li>
            <li>✓ Markdown 实时预览编辑器</li>
            <li>✓ Cron 表达式生成器</li>
            <li>✓ JWT Token 解码器</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">联系我们</h2>
          <p className="text-slate-600 leading-relaxed">
            如果您有任何建议、问题或合作意向，欢迎通过以下方式联系我们：
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              邮箱：<a href="mailto:contact@hkmfbl.top" className="underline">contact@hkmfbl.top</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
