"use client";

import { useState, useCallback } from "react";
import { marked } from "marked";
import ToolPage from "@/components/ToolPage";

export default function MarkdownPreviewPage() {
  const [md, setMd] = useState("# 欢迎使用 Markdown 预览编辑器\n\n开始编辑左侧内容，右侧实时预览。\n\n## 功能特性\n\n- **粗体文本** 和 *斜体文本*\n- [链接示例](https://hkmfbl.top)\n- `行内代码` 支持\n- 多行代码块：\n\n\`\`\`javascript\nconsole.log(\"Hello HKMFBL!\");\n\`\`\`\n\n| 表头1 | 表头2 |\n|-------|-------|\n| 单元格1 | 单元格2 |\n\n1. 有序列表项一\n2. 有序列表项二\n\n> 引用块示例\n\n---\n\n开始写作吧！");
  const [html, setHtml] = useState("");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const updateHtml = useCallback((input: string) => {
    setMd(input);
    setHtml(marked.parse(input) as string);
  }, []);

  const copyHtml = () => {
    navigator.clipboard.writeText(html);
  };

  return (
    <ToolPage title="Markdown 预览编辑器" description="左侧编辑 Markdown，右侧实时预览，支持导出 HTML">
      <div className="space-y-4">
        <div className="flex gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "preview" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500"}`}
          >
            预览
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "code" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500"}`}
          >
            HTML 代码
          </button>
          <button onClick={copyHtml} disabled={!html} className="ml-auto px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 transition-colors">
            复制 HTML
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" style={{ height: "500px" }}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Markdown 输入</label>
            <textarea
              className="tool-input !h-full !min-h-0"
              value={md}
              onChange={(e) => updateHtml(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">预览 / HTML</label>
            {activeTab === "preview" ? (
              <div
                className="tool-output !h-full !min-h-0 !overflow-y-auto prose prose-sm max-w-none p-4"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <pre className="tool-output !h-full !min-h-0">{html}</pre>
            )}
          </div>
        </div>
      </div>
    </ToolPage>
  );
}
