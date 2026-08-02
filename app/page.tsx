import Link from 'next/link';

const tools = [
  {
    href: '/tools/json-formatter',
    title: 'JSON 在线格式化',
    desc: 'JSON 格式化、校验、压缩、树形视图，支持高亮显示',
    icon: '{}',
    category: '格式转换',
  },
  {
    href: '/tools/csv-to-json',
    title: 'CSV 转 JSON',
    desc: 'CSV 数据一键转换为 JSON 格式，支持自定义分隔符',
    icon: '⇄',
    category: '格式转换',
  },
  {
    href: '/tools/timestamp-converter',
    title: '时间戳转换',
    desc: 'Unix 时间戳与可读时间互转，支持毫秒/秒，批量转换',
    icon: '⏱',
    category: '开发工具',
  },
  {
    href: '/tools/base64-encode',
    title: 'Base64 编解码',
    desc: '文本和图片的 Base64 编码与解码，即时转换',
    icon: 'B64',
    category: '格式转换',
  },
  {
    href: '/tools/uuid-generator',
    title: 'UUID 生成器',
    desc: '批量生成 UUID v4，支持自定义数量，一键复制',
    icon: '⊞',
    category: '开发工具',
  },
  {
    href: '/tools/url-encode',
    title: 'URL 编解码',
    desc: 'URL 编码与解码，处理特殊字符，支持批量转换',
    icon: '🔗',
    category: '格式转换',
  },
  {
    href: '/tools/image-compressor',
    title: '图片在线压缩',
    desc: '前端压缩图片，支持 JPG/PNG/WebP，保护隐私不上传',
    icon: '🗜',
    category: '图片工具',
  },
  {
    href: '/tools/qr-generator',
    title: '二维码生成器',
    desc: '文本、URL 一键生成二维码，支持自定义大小和颜色',
    icon: '◫',
    category: '图片工具',
  },
  {
    href: '/tools/word-counter',
    title: '字数统计工具',
    desc: '实时统计中文字数、英文单词、字符数、行数、段落数',
    icon: 'Aa',
    category: '文本工具',
  },
  {
    href: '/tools/md-preview',
    title: 'Markdown 预览编辑器',
    desc: '左侧编辑 Markdown，右侧实时预览，支持导出 HTML',
    icon: 'M↓',
    category: '文本工具',
  },
  {
    href: '/tools/cron-generator',
    title: 'Cron 表达式生成器',
    desc: '可视化生成 Cron 表达式，支持秒/分/时/日/月/周',
    icon: '⚙',
    category: '开发工具',
  },
  {
    href: '/tools/jwt-decode',
    title: 'JWT 解码器',
    desc: '解析 JWT Token，查看 Header、Payload，验证签名状态',
    icon: '🔐',
    category: '开发工具',
  },
];

const categories = ['格式转换', '开发工具', '图片工具', '文本工具'];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              免费在线开发工具集
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              12 款实用工具，全部在浏览器端运行
              <br />
              无需上传数据，保护您的隐私安全
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#tools"
                className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                浏览全部工具
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-colors border border-blue-400"
              >
                了解更多
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 max-w-lg mx-auto mt-16 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">12+</div>
              <div className="text-blue-200 text-sm mt-1">免费工具</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200 text-sm mt-1">浏览器运行</div>
            </div>
            <div>
              <div className="text-3xl font-bold">0</div>
              <div className="text-blue-200 text-sm mt-1">数据上传</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">全部工具</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              从格式转换到开发辅助，一站式解决您的日常开发需求
            </p>
          </div>

          {categories.map((cat) => {
            const catTools = tools.filter((t) => t.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h3 className="text-lg font-semibold text-slate-700 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full inline-block" />
                  {cat}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {catTools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all group"
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{tool.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">为什么选择 HKMFBL 在线工具？</h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600">
            <div>
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-slate-900 mb-2">数据安全</h3>
              <p className="text-sm leading-relaxed">所有工具均在浏览器本地运行，您的数据永远不会上传到服务器，彻底保护隐私。</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-slate-900 mb-2">快速高效</h3>
              <p className="text-sm leading-relaxed">无需注册、无需下载，打开即用。秒级响应，让您的开发流程更加顺畅。</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-slate-900 mb-2">完全免费</h3>
              <p className="text-sm leading-relaxed">所有工具永久免费使用，无任何功能限制，无需付费解锁高级功能。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">常见问题</h2>
          <div className="space-y-4">
            {[
              {
                q: 'HKMFBL 的工具是否免费？',
                a: '是的，所有工具完全免费，无任何隐藏收费。我们希望通过免费提供实用工具来服务开发者社区。',
              },
              {
                q: '我的数据会被上传到服务器吗？',
                a: '不会。所有工具都在您的浏览器本地运行，数据不会离开您的设备，确保您的数据隐私安全。',
              },
              {
                q: '支持哪些浏览器？',
                a: '支持所有主流现代浏览器，包括 Chrome、Firefox、Safari、Edge 等。建议使用最新版本的浏览器以获得最佳体验。',
              },
              {
                q: '可以离线使用吗？',
                a: '部分工具在首次加载后可以离线使用。建议保持网络连接以获得最佳体验。',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
