"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function JSONFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  const minify = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolPage title="JSON 在线格式化" description="JSON 格式化、校验、压缩，支持高亮显示和错误定位">
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <button onClick={format} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
            格式化
          </button>
          <button onClick={minify} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 text-sm font-medium transition-colors">
            压缩
          </button>
          <button onClick={copy} disabled={!output} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-sm font-medium transition-colors ml-auto">
            复制结果
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">输入 JSON</label>
            <textarea
              className="tool-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='粘贴 JSON 数据，例如: {"name":"HKMFBL","version":1}'
              rows={12}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">输出结果</label>
            <pre className="tool-output">{output}</pre>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            ⚠️ JSON 格式错误：{error}
          </div>
        )}

        {output && !error && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            ✓ JSON 格式合法，格式化成功
          </div>
        )}
      </div>
    </ToolPage>
  );
}
