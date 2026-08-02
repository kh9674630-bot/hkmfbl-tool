"use client";

import { useState, useCallback } from "react";
import ToolPage from "@/components/ToolPage";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useCallback(() => {
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const lines = text ? text.split("\n").length : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const words = text.trim()
      ? text.trim().split(/\s+/).length
      : 0;
    const sentences = text ? (text.match(/[。！？.!?]+/g) || []).length : 0;
    return { chars, charsNoSpace, lines, paragraphs, chineseChars, words, sentences };
  }, [text]);

  const s = stats();

  return (
    <ToolPage title="字数统计工具" description="实时统计中文字数、英文单词、字符数、行数、段落数">
      <div className="space-y-4">
        <textarea
          className="tool-input !min-h-[280px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="在此输入或粘贴文本，统计数据将实时显示..."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "中文字符", value: s.chineseChars, color: "text-blue-600" },
            { label: "英文单词", value: s.words, color: "text-green-600" },
            { label: "总字符数", value: s.chars, color: "text-purple-600" },
            { label: "不含空格", value: s.charsNoSpace, color: "text-orange-600" },
            { label: "行数", value: s.lines, color: "text-pink-600" },
            { label: "段落数", value: s.paragraphs, color: "text-teal-600" },
            { label: "句子数", value: s.sentences, color: "text-indigo-600" },
            { label: "预计阅读", value: `${Math.ceil(s.words / 200)} 分钟`, color: "text-yellow-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </ToolPage>
  );
}
