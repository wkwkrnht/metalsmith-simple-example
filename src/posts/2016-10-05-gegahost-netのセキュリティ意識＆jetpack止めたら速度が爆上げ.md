---
title: gegahost.netのセキュリティ意識＆Jetpack止めたら速度が爆上げペース
author: wkwkrnht
type: post
date: 2016-10-05T10:03:47+00:00
url: /sitemanagement/wordpress/piugin/556/
snapFB:
  - 
  - 
snap_MYURL:
  - 
  - 
snapEdIT:
  - 1
  - 1
snapTW:
  - 
  - 
snapWP:
  - 's:126:"a:1:{i:0;a:4:{s:11:"isPrePosted";s:1:"1";s:8:"isPosted";s:1:"1";s:4:"pgID";s:3:"611";s:5:"pDate";s:19:"2016-11-03 09:52:49";}}";'
  - 's:126:"a:1:{i:0;a:4:{s:11:"isPrePosted";s:1:"1";s:8:"isPosted";s:1:"1";s:4:"pgID";s:3:"611";s:5:"pDate";s:19:"2016-11-03 09:52:49";}}";'

---
<div class="ogp-blogcard">
  <div id="ogp-blogcard-share-" class="ogp-blogcard-share none">
    <a href="javascript:void(0)" class="ogp-blogcard-share-close" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-').classList.toggle('none');document.getElementById('ogp-blogcard-share-').classList.toggle('block');">×</a> 
    
    <ul>
      <li>
        <a href="https://twitter.com/share?url=&text=" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://www.facebook.com/share.php?u=" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://getpocket.com/edit?url=&title=" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-get-pocket" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://b.hatena.ne.jp/add?mode=confirm&url=&title=" target="_blank" rel="noopener" tabindex="0">B!</a>
      </li>
    </ul>
  </div>
  
  <blockquote class="ogp-blogcard-main" cite="">
    <img class="ogp-blogcard-img" src="" /> <a href="" target="_blank" rel="noopener" tabindex="0" title="" class="ogp-blogcard-info"> 
    
    <h2 class="ogp-blogcard-title">
    </h2>
    
    <p class="ogp-blogcard-description">
    </p></a>
  </blockquote>
  
  <a href="javascript:void(0)" class="ogp-blogcard-share-toggle" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-').classList.toggle('none');document.getElementById('ogp-blogcard-share-').classList.toggle('block');"><i class="fa fa-2x fa-share-alt"></i></a>
</div>

先日、こんな記事を書きました。そこで、ちょっと思い出したことがあるので、記録に残しておきたいと思います。

  1. 被XSS禁止
  2. scriptタグを含む文章を、Wordpress経由では保存不可
  3. EWWW Image Optimizerは使えない(exec()が使えない)
  4. アップロードサイズは、10MBまで

これらは、おそらく非公開情報です。さらに、最後以外は実際に使ってみないとわからないものです。以前、<a href="http://wkwkrnht.gegahost.net/sitemanagement/serverhostingservice/18" target="_blank" rel="noopener">こんな記事</a>でべた褒めしていますが、こんな罠もあるのでご注意を。特に一番上は、どうにもならないものなので諦めが肝心です。

## Jetpackのお話

Jetpackとは、Wordpressにおける何でも屋。投稿時共有やサイトマップ作成、モバイル向けテーマなど様々な機能を提供しています。それゆえ、読み込みされるものを制御するには、一々functions.phpにコードを付け足す始末でした。その上、サイト解析用のコンポネートは複数読み込まれる始末。そんな訳で、使用していたのが、

  1. サイト解析機能
  2. 投稿と同時にSNS共有する機能
  3. サイトマップ作成機能

の三つのみだったため、それぞれ移行しました。移行先のプラグイン・サービスは、

[appbox wordpress social-networks-auto-poster-facebook-twitter-g]
  
[appbox wordpress google-sitemap-generator]
  


<div class="ogp-blogcard">
  <div id="ogp-blogcard-share-https://www.monitoring-plus.jp/" class="ogp-blogcard-share none">
    <a href="javascript:void(0)" class="ogp-blogcard-share-close" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-https://www.monitoring-plus.jp/').classList.toggle('none');document.getElementById('ogp-blogcard-share-https://www.monitoring-plus.jp/').classList.toggle('block');">×</a> 
    
    <ul>
      <li>
        <a href="https://twitter.com/share?url=https%3A%2F%2Fwww.monitoring-plus.jp%2F&text=MonitoringPlus" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwww.monitoring-plus.jp%2F" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://getpocket.com/edit?url=https%3A%2F%2Fwww.monitoring-plus.jp%2F&title=MonitoringPlus" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-get-pocket" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fwww.monitoring-plus.jp%2F&title=MonitoringPlus" target="_blank" rel="noopener" tabindex="0">B!</a>
      </li>
    </ul>
  </div>
  
  <blockquote class="ogp-blogcard-main" cite="https://www.monitoring-plus.jp/">
    <img class="ogp-blogcard-img" src="https://www.monitoring-plus.jp/assets/img/og_img_top.png" /> <a href="https://www.monitoring-plus.jp/" target="_blank" rel="noopener" tabindex="0" title="MonitoringPlus" class="ogp-blogcard-info"> 
    
    <h2 class="ogp-blogcard-title">
      MonitoringPlus
    </h2>
    
    <p class="ogp-blogcard-description">
      モニタリングプラスは誰でも簡単に無料でWeb監視を行うことが出来ます。Webサイトの死活監視（サイトが落ちてないかチェック）や反応速度などのサイトチェックをして、アラートを通知します。純国産のサイト監視ツールで、安心してご利用いただけるサービスです。
    </p></a>
  </blockquote>
  
  <a href="javascript:void(0)" class="ogp-blogcard-share-toggle" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-https://www.monitoring-plus.jp/').classList.toggle('none');document.getElementById('ogp-blogcard-share-https://www.monitoring-plus.jp/').classList.toggle('block');"><i class="fa fa-2x fa-share-alt"></i></a>
</div>

どれもポピュラーなものですね。ほかに、詳しい記事があるはずなので省略。これで、サイト読み込みが若干早くなり、ページスピードテストの点数も上がりました。ぜひ、計ってみてください。NoAdsの実力が見れますから。海外サーバーである分、できる限りの高速化を重ねていきたいと思います。

### ついでに導入したプラグイン

[appbox wordpress minify-html-markup]