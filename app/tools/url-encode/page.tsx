"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function URLEncodePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = useCallback(() => {
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
      setError("");
    } catch (e) {
      setError("解码失败，请检查输入是否为有效的 URL 编码");
      setOutput("");
    }
  }, [input, mode]);

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolPage title="URL 编解码" description="URL 编码与解码，自动处理特殊字符，支持中文参数">
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setMode("encode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "encode" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            编码
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "decode" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            解码
          </button>
          <button onClick={process} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
            {mode === "encode" ? "编码" : "解码"}
          </button>
          <button onClick={copy} disabled={!output} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-sm font-medium transition-colors ml-auto">
            复制结果
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{mode === "encode" ? "原始 URL / 文本" : "URL 编码字符串"}</label>
            <textarea
              className="tool-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === "encode" ? "输入 URL 或文本，例如: https://hkmfbl.top?name=张三" : "粘贴 %E5%BC%A0%E4%B8%89 这类编码字符串"}
              rows={8}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">结果</label>
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
