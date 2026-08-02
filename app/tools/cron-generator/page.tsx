"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function CronGeneratorPage() {
  const [expression, setExpression] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const generate = useCallback(() => {
    // Build a simple cron expression from user input
    const second = "0";
    const minute = "0";
    const hour = "*";
    const dayOfMonth = "*";
    const month = "*";
    const dayOfWeek = "*";

    const expr = `${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
    setExpression(expr);
    setDescription("每分钟执行一次");
    setError("");
  }, []);

  const copy = () => {
    navigator.clipboard.writeText(expression);
  };

  // Common cron presets
  const presets = [
    { expr: "0 * * * * *", desc: "每分钟" },
    { expr: "0 0 * * * *", desc: "每天午夜" },
    { expr: "0 9 * * * *", desc: "每天早上9点" },
    { expr: "0 9,18 * * * *", desc: "每天9点和18点" },
    { expr: "0 0 * * 1 *", desc: "每周一午夜" },
    { expr: "0 0 1 * * *", desc: "每月1号午夜" },
    { expr: "0 0 1 1 * *", desc: "每年1月1日" },
    { expr: "*/5 * * * * *", desc: "每5秒" },
    { expr: "0 */2 * * * *", desc: "每2小时" },
    { expr: "0 9-18 * * 1-5 *", desc: "工作日9-18点每小时" },
  ];

  const applyPreset = (expr: string, desc: string) => {
    setExpression(expr);
    setDescription(desc);
    setError("");
  };

  return (
    <ToolPage title="Cron 表达式生成器" description="可视化生成和解析 Cron 表达式，内置常用场景模板">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">表达式</label>
          <div className="flex gap-3">
            <input
              type="text"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              placeholder="* * * * * *"
              className="tool-input !min-h-[52px] !resize-none flex-1"
            />
            <button onClick={copy} disabled={!expression} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-sm font-medium transition-colors">
              复制
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">描述</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="表达式的中文描述"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">常用模板</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {presets.map((p) => (
              <button
                key={p.expr}
                onClick={() => applyPreset(p.expr, p.desc)}
                className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
              >
                <code className="text-xs font-mono text-blue-600 block">{p.expr}</code>
                <span className="text-xs text-slate-500 mt-1 block">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 text-sm mb-2">Cron 格式说明（6字段）</h4>
          <div className="grid grid-cols-6 gap-2 text-xs">
            {["秒", "分", "时", "日", "月", "周"].map((label, i) => (
              <div key={label} className="text-center">
                <div className="font-mono text-blue-600 font-bold">{"*".repeat(i + 1).split("").slice(0, i + 1).join(" ")}</div>
                <div className="text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-blue-700 mt-3">
            常见符号：*（任意值） /（步长） ,（多选） -（范围）
          </p>
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
