---
emoji: "👍"
title: Astro.js + Github Actions + Cloudflare Pagesでサイトを作った
draft: false
tags: ["astro", "github", "cloudflare"]
uploadAt: 2024-10-23
---
# 個人サイト作った！！

## 動機

流石にこの年になって一回もフロントエンド書いたことないのはまずい気がしたから

## 技術選定

Next.jsとかReactとかいろいろ考えたけど普通に考えてブログとやってること紹介しかしない~~貧相な~~サイトにするつもりで検討開始。

適当に調べるとAstroっていうフレームワークがblazing fastでいい感じらしいからノリで決めました

Github PagesとCloudflare Pagesは迷ったけど、個人的にCloudflareが好きなので後者にしました

Cloudflare Workersとか大好きです

デザイン関係は、TailwindCSS + DaisyUIにしました。

MUIとかと迷ったけど、TailwindCSSっぽくライブラリのコンポーネント（？）を埋め込められるのが個人的に好きだった。

## 苦労したこと

デザイン書くのはTailwindCSSとDaisyUIドキュメントとにらめっこしながらなんとかなったんですけど、レスポンシブル対応にするのがすんげーーーーめんどくさかった

裏を返せばそれ以外には無いんじゃないかって感じですね

Astro.jsさんめちゃめちゃ書きやすかったです。

## Github Actions

これ絶対一発でいい感じに動かないから毎回何回もプッシュしてるんですよね

どうにかしたい

## ソースコード

https://github.com/Kigou-No1/kigou.me にあるので煮るなり焼くなりしてください。

文字通り初めてHTMLやらCSSに触ったのでプロパティの使い方がかなり変だと思いますがゆるしてください

# これから

開発するときの備忘録とか見たいな感じで使えたらいいなーって思ってます

あと記事一覧の上にある検索バーは飾りです（？？？？？？

そのうちなんとかします
