"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function CSVToJsonPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [error, setError] = useState("");

  const convert = useCallback(() => {
    try {
      const lines = input.trim().split("\n");
      if (lines.length < 2) {
        setError("CSV 至少需要表头和一行数据");
        return;
      }
      const headers = lines[0].split(delimiter).map((h) => h.trim().replace(/^"|"$/g, ""));
      const data = lines.slice(1).filter((l) => l.trim()).map((line) => {
        const values = line.split(delimiter).map((v) => v.trim().replace(/^"|"$/g, ""));
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => {
          obj[h] = values[i] !== undefined ? values[i] : "";
        });
        return obj;
      });
      setOutput(JSON.stringify(data, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input, delimiter]);

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolPage title="CSV 转 JSON" description="CSV 数据一键转换为 JSON 数组，支持自定义分隔符">
      <div className="space-y-4">
        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">分隔符：</label>
            <select
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value=",">逗号 (,)</option>
              <option value=";">分号 (;)</option>
              <option value="\t">Tab</option>
              <option value="|">管道 (|)</option>
            </select>
          </div>
          <button onClick={convert} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
            转换
          </button>
          <button onClick={copy} disabled={!output} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-sm font-medium transition-colors ml-auto">
            复制结果
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">CSV 输入</label>
            <textarea
              className="tool-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`name,age,city\n张三,25,北京\n李四,30,上海`}
              rows={12}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">JSON 输出</label>
            <pre className="tool-output">{output}</pre>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            ⚠️ {error}
          </div>
        )}
      </div>
    </ToolPage>
  );
}
