"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function UUIDGeneratorPage() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generate = useCallback(() => {
    const list = Array.from({ length: count }, () =>
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      })
    );
    setUuids(list);
  }, [count]);

  const copyOne = (uuid: string, index: number) => {
    navigator.clipboard.writeText(uuid);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
  };

  return (
    <ToolPage title="UUID 生成器" description="批量生成 UUID v4，支持自定义数量，一键复制">
      <div className="space-y-4">
        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">数量：</label>
            <select
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              {[1, 5, 10, 20, 50, 100].map((n) => (
                <option key={n} value={n}>{n} 个</option>
              ))}
            </select>
          </div>
          <button onClick={generate} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
            生成
          </button>
          <button onClick={copyAll} disabled={uuids.length === 0} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-sm font-medium transition-colors ml-auto">
            复制全部
          </button>
        </div>

        {uuids.length > 0 && (
          <div className="space-y-2">
            {uuids.map((uuid, i) => (
              <div key={uuid} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-400 w-6">{i + 1}</span>
                <code className="flex-1 font-mono text-sm text-slate-700">{uuid}</code>
                <button
                  onClick={() => copyOne(uuid, i)}
                  className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                >
                  {copiedIndex === i ? "已复制" : "复制"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPage>
  );
}
