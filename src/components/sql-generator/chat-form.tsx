"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 選択 UI に表示する DB 候補。value は将来 API に渡す識別子として使う想定。
const DB_TYPES = [
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
] as const;

// 入力文字数の上限（セキュリティ設計書より）
const MAX_INPUT_LENGTH = 2000;

export function ChatForm() {
  return (
    // SQL 生成に必要な入力をまとめるフォーム領域（現時点は見た目のみ）
    <Card className="bg-slate-900 border-slate-700">
      <CardHeader>
        <CardTitle className="text-slate-100 text-lg">SQLを生成する</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* DB種別選択 */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            データベース
          </label>
          {/* defaultValue により初期表示は PostgreSQL */}
          <Select defaultValue="postgresql">
            <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-100 w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DB_TYPES.map((db) => (
                <SelectItem key={db.value} value={db.value}>
                  {db.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 自然言語入力 */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            要件を日本語で入力
          </label>
          <Textarea
            placeholder="例: usersテーブルから30日以内に登録したユーザーを、注文数が多い順に上位10件取得したい"
            maxLength={MAX_INPUT_LENGTH}
            className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-500 min-h-[120px] resize-none"
          />
          {/* 入力上限を明示して、ユーザーが送信前に量を調整しやすくする */}
          <p className="text-xs text-slate-500 mt-1 text-right">
            最大 {MAX_INPUT_LENGTH} 文字
          </p>
        </div>

        {/* スキーマ定義（任意） */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            スキーマ定義（任意）
          </label>
          <Textarea
            placeholder="CREATE TABLE users (&#10;  id BIGINT PRIMARY KEY,&#10;  name VARCHAR(255)&#10;);"
            maxLength={MAX_INPUT_LENGTH}
            className="bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-500 min-h-[80px] font-mono text-sm resize-none"
          />
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          // Day2 で送信処理を実装するまで誤操作を防ぐために無効化
          disabled
        >
          SQLを生成する（Day2で実装）
        </Button>
      </CardContent>
    </Card>
  );
}