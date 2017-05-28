---
title: 2015 for wkwkrnhtの大規模アップデート
author: wkwkrnht
type: post
date: 2016-03-28T13:13:36+00:00
url: /sitemanagement/wordpress/theme/226/
onesignal_meta_box_present:
  - 1
  - 1
  - 1
onesignal_send_notification:
  - 
  - 
  - 
cwp_meta_box_check:
  - No
  - No
  - No
snap_MYURL:
  - 
  - 
snapEdIT:
  - 1
  - 1
snapFB:
  - 
  - 
snapTW:
  - 
  - 
snapWP:
  - 's:212:"a:1:{i:0;a:6:{s:2:"do";s:1:"1";s:11:"SNAPformatT";s:15:"%TITLE% %HTAGS%";s:10:"SNAPformat";s:46:"<a class="embedly-card" href="%URL%">%URL%</a>";s:9:"isAutoImg";s:1:"A";s:8:"imgToUse";s:0:"";s:4:"doWP";s:1:"1";}}";'
  - 's:212:"a:1:{i:0;a:6:{s:2:"do";s:1:"1";s:11:"SNAPformatT";s:15:"%TITLE% %HTAGS%";s:10:"SNAPformat";s:46:"<a class="embedly-card" href="%URL%">%URL%</a>";s:9:"isAutoImg";s:1:"A";s:8:"imgToUse";s:0:"";s:4:"doWP";s:1:"1";}}";'

---
<http://wkwkrnht.gegahost.net/sitemanagement/wordpress/theme/179>{.embedly-card}
  
実はですね、公開後も黙々とブログも書かずにずっといじってました。<strike>(てへぺろ)</strike>そのおかげで、

  * ブログカードをはてな経由からEmbed.ly経由に変更
  * 同時にEmbed.lyで共有できるように
  * ソーシャルナビでツイログとついフィールがアイコンフォントで表示できるように
  * ログインボタンとか管理者に必要なメニューが表示されるように
  * AMP対応(？)
  * ソースコードハイライトに対応(by highlight.js)
  * アイコンフォントを純正からFont Awsomeに変更

が実装されました。<strike>(だから、ブログ書けって！)</strike>まだスタイルなど微調整が済んでないので、早めに済ませたいところです。上から二つ目のものは、新しくできたベルの隣にあるボタンのことでこの記事の埋め込みコードが自動的に排出されるようになっています。ぜひとも活用してください。そのほか、新しくamp.phpを<a href="http://twitter.com/tokumewi" target="_blank" rel="noopener nofollow">@tokumewi</a>さんのサイト(<a href="http://creatorclip.info/2016/02/wordpress-accelerated-mobile-pages/" target="_blank" rel="noopener">該当記事</a>)をガッツリ使いながらつくりました。固定ページと投稿ページのURL末尾に/?ampだの/?amp=1とつけると体験できると思います。AMPぺージのデザインは未完成なので、いい案を募集中です。また、AMPでもブログカードが使えるぽいのですが、英語力不足で該当ドキュメントが読めないのでまだ実装できてないのが歯がゆいです。次の安定版(≒こちらのサイトのテーマ)では、Mediumにあるという共有方法をなんとか実装してみたいです。