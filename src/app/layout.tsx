import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 画面全体で共通利用するフォント設定（body に className として適用）
const inter = Inter({ subsets: ["latin"] });

// App Router 全ページ共通のメタ情報。<head> に自動反映される。
export const metadata: Metadata = {
  title: "SQL Generator & Optimizer",
  description: "自然言語からSQLを生成・最適化するツール",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 全ページ共通の HTML 骨組み。個別ページは children として差し込まれる。
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}