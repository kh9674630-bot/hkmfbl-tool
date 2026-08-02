"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function TimestampConverterPage() {
  const [timestamp, setTimestamp] = useState("");
  const [unit, setUnit] = useState<"second" | "millisecond">("second");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const convert = useCallback(() => {
    const ts = parseInt(timestamp, 10);
    if (isNaN(ts)) {
      setError("请输入有效的数字");
      setResult("");
      return;
    }
    const ms = unit === "second" ? ts * 1000 : ts;
    const date = new Date(ms);
    if (isNaN(date.getTime())) {
      setError("时间戳超出有效范围");
      setResult("");
      return;
    }
    setResult(date.toLocaleString("zh-CN", { hour12: false }));
    setError("");
  }, [timestamp, unit]);

  const now = () => {
    const ts = Math.floor(Date.now() / 1000);
    setTimestamp(String(ts));
    setResult(new Date(ts * 1000).toLocaleString("zh-CN", { hour12: false }));
    setError("");
  };

  const copy = () => {
    if (result) navigator.clipboard.writeText(result);
  };

  return (
    <ToolPage title="时间戳转换器" description="Unix 时间戳与可读时间互转，支持秒/毫秒，一键获取当前时间戳">
      <div className="space-y-4">
        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">单位：</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as "second" | "millisecond")}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="second">秒 (s)</option>
              <option value="millisecond">毫秒 (ms)</option>
            </select>
          </div>
          <button onClick={now} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 text-sm font-medium transition-colors">
            获取当前时间
          </button>
          <button onClick={convert} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
            转换
          </button>
          <button onClick={copy} disabled={!result} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-sm font-medium transition-colors ml-auto">
            复制结果
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">时间戳</label>
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="输入 Unix 时间戳，例如: 1722566400"
            className="tool-input !min-h-[52px] !resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">转换结果</label>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-900 font-mono text-sm">
            {result || "—"}
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
