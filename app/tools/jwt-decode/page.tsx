"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function JWTDecodePage() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState<Record<string, unknown> | null>(null);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState("");
  const [copiedPart, setCopiedPart] = useState("");

  const decode = useCallback(() => {
    try {
      const parts = token.trim().split(".");
      if (parts.length !== 3) {
        setError("JWT 应由三个部分组成，用点号分隔");
        setHeader(null);
        setPayload(null);
        return;
      }
      const headerJson = atob(parts[0]);
      const payloadJson = atob(parts[1]);
      const h = JSON.parse(headerJson);
      const p = JSON.parse(payloadJson);
      setHeader(h);
      setPayload(p);
      setError("");
    } catch (e) {
      setError("解码失败，请检查 JWT 格式是否正确");
      setHeader(null);
      setPayload(null);
    }
  }, [token]);

  const copy = (text: string, part: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPart(part);
    setTimeout(() => setCopiedPart(""), 1500);
  };

  return (
    <ToolPage title="JWT 解码器" description="解析 JWT Token，查看 Header 和 Payload 内容，验证签名状态">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">JWT Token</label>
          <textarea
            className="tool-input"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            rows={4}
          />
        </div>

        <button onClick={decode} disabled={!token} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium transition-colors">
          解码
        </button>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            ⚠️ {error}
          </div>
        )}

        {header && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-slate-700">Header</h3>
                <button onClick={() => copy(JSON.stringify(header, null, 2), "header")} className="text-xs text-blue-600 hover:text-blue-700">
                  {copiedPart === "header" ? "已复制" : "复制"}
                </button>
              </div>
              <pre className="tool-output !min-h-[120px]">{JSON.stringify(header, null, 2)}</pre>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-slate-700">Payload</h3>
                <button onClick={() => copy(JSON.stringify(payload, null, 2), "payload")} className="text-xs text-blue-600 hover:text-blue-700">
                  {copiedPart === "payload" ? "已复制" : "复制"}
                </button>
              </div>
              <pre className="tool-output !min-h-[120px]">{JSON.stringify(payload, null, 2)}</pre>
            </div>
          </div>
        )}

        {header && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              ⚠️ <strong>安全提示：</strong>此工具仅做解码展示，不验证 JWT 签名。生产环境中请务必使用服务端验证签名。
            </p>
          </div>
        )}
      </div>
    </ToolPage>
  );
}
