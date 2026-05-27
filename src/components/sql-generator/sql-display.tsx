"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SqlDisplay() {
  return (
    // 生成済み SQL と実行状態を表示する出力エリア（現時点はプレースホルダー表示）
    <Card className="bg-slate-900 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-slate-100 text-lg">生成結果</CardTitle>
        {/* API 連携前のためステータスは固定で「待機中」 */}
        <Badge variant="outline" className="text-slate-400 border-slate-600">
          待機中
        </Badge>
      </CardHeader>
      <CardContent>
        {/* SQL 未生成時にも高さを確保して、レイアウトのガタつきを防ぐ */}
        <div className="bg-slate-800 rounded-lg p-4 min-h-[200px] flex items-center justify-center">
          <p className="text-slate-500 text-sm text-center">
            SQLが生成されるとここに表示されます
            <br />
            <span className="text-xs">（シンタックスハイライトはDay3で追加）</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}