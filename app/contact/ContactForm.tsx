"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `姓名：${form.name}`,
      `邮箱：${form.email}`,
      `类型：${form.subject}`,
      ``,
      `内容：`,
      form.message,
    ].join('\n');
    const mailtoLink = `mailto:contact@hkmfbl.top?subject=${encodeURIComponent(`[网站反馈] ${form.subject}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">联系我们</h1>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-green-700 text-sm">✅ 您的邮件已准备好，请检查邮件客户端。感谢您的反馈！</p>
        </div>
      )}

      <div className="space-y-8">
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">快速反馈</h2>
          <p className="text-blue-700 text-sm mb-4">填写下方表单，系统会自动打开您的邮件客户端发送反馈。</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">您的姓名 <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="请输入姓名"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">邮箱地址 <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="请输入邮箱"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">反馈类型 <span className="text-red-500">*</span></label>
            <select
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            >
              <option value="">请选择类型</option>
              <option value="工具建议">工具功能建议</option>
              <option value="Bug反馈">Bug 反馈</option>
              <option value="合作意向">合作意向</option>
              <option value="其他">其他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">反馈内容 <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="请描述您的反馈内容..."
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            发送反馈
          </button>
        </form>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">常见问题</h2>
          <div className="space-y-4">
            {[
              { q: '工具是否收费？', a: '所有工具完全免费，无任何隐藏费用。' },
              { q: '我的数据安全吗？', a: '是的，所有工具在浏览器本地运行，数据不会上传到任何服务器。' },
              { q: '可以推荐新工具吗？', a: '当然可以！欢迎通过上方表单告诉我们您希望添加的工具。' },
              { q: '发现 Bug 怎么办？', a: '请使用上方表单提交 Bug 反馈，附上操作步骤和截图。' },
            ].map((faq, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-medium text-slate-900 text-sm mb-1">{faq.q}</p>
                <p className="text-sm text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
