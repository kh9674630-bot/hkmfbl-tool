"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = useCallback(() => {
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
      setError("");
    } catch (e) {
      setError(mode === "encode" ? "输入包含非法字符" : "Base64 格式无效");
      setOutput("");
    }
  }, [input, mode]);

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <ToolPage title="Base64 在线编解码" description="文本与 Base64 互相转换，支持中文，即时翻译">
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
            <label className="block text-sm font-medium text-slate-700 mb-2">{mode === "encode" ? "原文" : "Base64 字符串"}</label>
            <textarea
              className="tool-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === "encode" ? "输入要编码的文本，支持中文" : "粘贴 Base64 字符串"}
              rows={10}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{mode === "encode" ? "Base64 结果" : "解码结果"}</label>
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
