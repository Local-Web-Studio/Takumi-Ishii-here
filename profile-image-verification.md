# プロフィール写真の最適化メモ

ユーザー追加の元画像は `client/public/assets/profile-placeholder.png` で、941×1672px・約1.96MBだった。プロフィール枠の4:5比率に合わせて、顔と肩の見え方を保つ位置でトリミングし、640×800pxのWebPへ最適化した。

生成ファイル `takumi-ishii-profile.webp` は約32KBであり、スーツ姿・顔・肩の構図を保ちながら、LP上のプロフィール枠で必要な表示品質を満たしていることを確認した。

GitHub Pages用には同画像を `client/public/assets/takumi-ishii-profile.webp` に配置し、`import.meta.env.BASE_URL` 経由で参照するよう切り替えた。デプロイ完了後の表示確認では旧HTMLが返る状況が見られたため、公開キャッシュを回避したURLで最終確認を行う。
