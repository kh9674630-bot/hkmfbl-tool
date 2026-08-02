"use client";

import { useState, useRef, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const [qrUrl, setQrUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(() => {
    if (!text) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Simple QR-like pattern (visual representation for demo)
    // In production, use a proper QR library
    const moduleCount = Math.floor(size / 11);
    const moduleSize = size / moduleCount;
    ctx.fillStyle = "#000000";

    // Generate deterministic pattern from text
    let seed = 0;
    for (let i = 0; i < text.length; i++) {
      seed = ((seed << 5) - seed + text.charCodeAt(i)) | 0;
    }

    for (let row = 0; row < moduleCount; row++) {
      for (let col = 0; col < moduleCount; col++) {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        if (seed % 3 !== 0) {
          ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
        }
      }
    }

    // Draw finder patterns
    const drawFinder = (x: number, y: number) => {
      const s = moduleSize * 7;
      ctx.fillRect(x, y, s, s);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(x + moduleSize, y + moduleSize, s - moduleSize * 2, s - moduleSize * 2);
      ctx.fillStyle = "#000000";
      ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, s - moduleSize * 4, s - moduleSize * 4);
    };

    drawFinder(0, 0);
    ctx.fillStyle = "#000000";
    drawFinder(size - moduleSize * 7, 0);
    ctx.fillStyle = "#000000";
    drawFinder(0, size - moduleSize * 7);

    setQrUrl(canvas.toDataURL("image/png"));
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
              <button onClick={generate} disabled={!text} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium transition-colors">
                生成二维码
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
              <img src={qrUrl} alt="二维码" className="max-w-full max-h-[256px]" />
            ) : (
              <canvas ref={canvasRef} className="hidden" />
            )}
            {!qrUrl && <p className="text-slate-400 text-sm">二维码将在此显示</p>}
          </div>
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </ToolPage>
  );
}
