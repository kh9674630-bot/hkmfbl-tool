"use client";

import { useState, useCallback } from "react";
import QRCode from "qrcode";
import ToolPage from "@/components/ToolPage";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async () => {
    if (!text) return;
    setLoading(true);
    try {
      const dataUrl = await QRCode.toDataURL(text, { width: size, margin: 1 });
      setQrUrl(dataUrl);
    } catch {
      setQrUrl("");
    } finally {
      setLoading(false);
    }
  }, [text, size]);

  const download = () => {
    if (!qrUrl) return;
    const a = document.createElement("a");
    a.href = qrUrl;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <ToolPage title="二维码生成器" description="输入文本或 URL，一键生成二维码，支持下载 PNG 格式">
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">输入内容</label>
              <textarea
                className="tool-input !min-h-[120px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="输入 URL 或任意文本..."
                rows={4}
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-slate-600">尺寸：</label>
              <select value={size} onChange={(e) => setSize(Number(e.target.value))} className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">
                <option value={128}>128 × 128</option>
                <option value={256}>256 × 256</option>
                <option value={512}>512 × 512</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={generate}
                disabled={!text || loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium transition-colors"
              >
                {loading ? "生成中..." : "生成二维码"}
              </button>
              {qrUrl && (
                <button onClick={download} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium transition-colors">
                  下载 PNG
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200 min-h-[256px]">
            {qrUrl ? (
              <img src={qrUrl} alt="二维码" className="max-w-full max-h-[256px] rounded" />
            ) : (
              <p className="text-slate-400 text-sm">二维码将在此显示</p>
            )}
          </div>
        </div>
      </div>
    </ToolPage>
  );
}
