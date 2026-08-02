import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们 - HKMFBL',
  description: '如有任何建议、问题或合作意向，欢迎通过邮箱联系我们。',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">联系我们</h1>

      <div className="space-y-8">
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">联系方式</h2>
          <p className="text-blue-700 mb-2">
            邮箱：<a href="mailto:contact@hkmfbl.top" className="underline font-medium">contact@hkmfbl.top</a>
          </p>
          <p className="text-blue-600 text-sm">我们通常在 1-3 个工作日内回复您的邮件。</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">常见问题</h2>
          <div className="space-y-4">
            {[
              { q: '工具是否收费？', a: '所有工具完全免费，无任何隐藏费用。' },
              { q: '我的数据安全吗？', a: '是的，所有工具在浏览器本地运行，数据不会上传到任何服务器。' },
              { q: '可以推荐新工具吗？', a: '当然可以！欢迎通过邮件告诉我们您希望添加的工具。' },
              { q: '发现 Bug 怎么办？', a: '请通过邮件描述问题，附上操作步骤和截图，我们会尽快修复。' },
            ].map((faq, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-medium text-slate-900 text-sm mb-1">{faq.q}</p>
                <p className="text-sm text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">工具反馈</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            如果您在使用任何工具时遇到问题，或者有功能改进建议，请发送邮件至
            <code className="mx-1 px-2 py-0.5 bg-slate-100 rounded text-sm">contact@hkmfbl.top</code>
            ，我们会在收到反馈后尽快处理。
          </p>
        </div>
      </div>
    </div>
  );
}
