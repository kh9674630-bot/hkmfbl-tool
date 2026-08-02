"use client";

import { useState, useCallback, useRef } from "react";
import ToolPage from "@/components/ToolPage";

export default function ImageCompressorPage() {
  const [preview, setPreview] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [quality, setQuality] = useState(0.8);
  const [format, setFormat] = useState<"image/jpeg" | "image/png" | "image/webp">("image/jpeg");
  const [result, setResult] = useState<string>("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const compress = useCallback(async () => {
    if (!preview) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL(format, quality);
      setResult(dataUrl);
      setCompressedSize(Math.round(dataUrl.length * 0.75));
    };
    img.src = preview;
  }, [preview, format, quality]);

  const download = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = `compressed_${fileName}`;
    a.click();
  };

  const saveRatio = originalSize > 0 ? Math.round((1 - compressedSize / originalSize) * 100) : 0;

  return (
    <ToolPage title="图片在线压缩" description="前端压缩图片，支持 JPG/PNG/WebP 格式，保护隐私不上传">
      <div className="space-y-4">
        <div className="flex gap-3 items-center flex-wrap">
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFile} className="hidden" />
          <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors">
            选择图片
          </button>
          <button onClick={compress} disabled={!preview} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium transition-colors">
            压缩
          </button>
          {result && (
            <button onClick={download} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium transition-colors">
              下载压缩图片
            </button>
          )}
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">格式：</label>
            <select value={format} onChange={(e) => setFormat(e.target.value as any)} className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">
              <option value="image/jpeg">JPEG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WebP</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">质量：</label>
            <input type="range" min={0.1} max={1} step={0.1} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-32" />
            <span className="text-sm text-slate-500 w-12">{Math.round(quality * 100)}%</span>
          </div>
        </div>

        {fileName && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">原始图片 ({(originalSize / 1024).toFixed(1)} KB)</p>
              <img src={preview} alt="原始" className="w-full rounded-lg border border-slate-200" />
            </div>
            {result && (
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">
                  压缩后 ({(compressedSize / 1024).toFixed(1)} KB)
                  <span className="ml-2 text-green-600 font-semibold">节省 {saveRatio}%</span>
                </p>
                <img src={result} alt="压缩后" className="w-full rounded-lg border border-slate-200" />
              </div>
            )}
          </div>
        )}
      </div>
    </ToolPage>
  );
}
