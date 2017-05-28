---
title: 2015 for wkwkrnht、二度目のアップデート
author: wkwkrnht
type: post
date: 2016-04-24T11:19:21+00:00
excerpt: 2015 for wkwkrnht(Twenty Fifteenベースの子テーマ)の二度目の安定版の話
url: /sitemanagement/wordpress/theme/267/
onesignal_meta_box_present:
  - 1
cwp_meta_box_check:
  - No

---
AMPのデバックをメインにずっといじってました。いつものようにリスト化すると、

  * AMPのバリテーションエラーを解消
  * ブログカード(はてな・embed.ly)を生成するショートコード追加
  * 上記に伴いURL直書きの挙動をノーマルに
  * シェアボタンからプッシュ通知登録ボタンを消したうえで、Pinterestへのシェアボタンを追加などの整理
  * ヘッダー内に著者のGoogle＋ページを出力するように
  * ソーシャルナビゲーション内でonesignalとpush.dog、push7.jpのURLを登録するとベル(push7.jpは雷)が表示されるように
  * feed.lyもソーシャルナビゲーション内でそれっぽく表示されるように
  * スクリーンショットとQRコード生成を、URLベースで行うショートコードを追加
  * Disqusウィジェットを追加
  * author.phpで”あの”長いプロフィール情報が表示されるように(本当に入力内容を表示するだけです)
  * ようやくモバイル表示でのシェアボタンの表示調整をしました

こんな感じかな。まああとは、Githubにソース公開してるから読んでください。モチベーションが続けば、2015 by wkwkrnhtとして親テーマ化の後に、カスタマイザー対応なんかをしていければいいなと思います。