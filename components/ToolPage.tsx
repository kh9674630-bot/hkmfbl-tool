interface ToolPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolPage({ title, description, children }: ToolPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}
