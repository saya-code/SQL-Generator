import { ChatForm } from "@/components/sql-generator/chat-form";
import { SqlDisplay } from "@/components/sql-generator/sql-display";

export default function Home() {
  return (
    // メイン画面: 入力フォームと生成結果エリアを 1 ページに配置する。
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* ヘッダー */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            SQL Generator & Optimizer
          </h1>
          <p className="text-slate-400 text-sm">
            自然言語でSQLを生成し、インデックス提案まで行います
          </p>
        </header>

        {/* 入力（ChatForm）と出力（SqlDisplay）を縦並びで表示 */}
        <div className="space-y-6">
          <ChatForm />
          <SqlDisplay />
        </div>
      </div>
    </main>
  );
}