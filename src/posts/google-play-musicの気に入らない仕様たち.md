---
title: Google Play Musicの気に入らない仕様たち
author: wkwkrnht
type: post
date: 2017-03-25T12:22:53+00:00
url: /google-play-music/2292/
snap_isAutoPosted:
  - 1
snapEdIT:
  - 1
snapWP:
  - |
    s:298:"a:1:{i:0;a:9:{s:2:"do";s:1:"1";s:10:"msgTFormat";s:7:"%TITLE%";s:9:"msgFormat";s:21:"%URL%
    %HTAGS%
    %IMG%";s:9:"isAutoURL";s:1:"A";s:8:"urlToUse";s:0:"";s:8:"isPosted";s:1:"1";s:4:"pgID";s:3:"783";s:7:"postURL";s:37:"https://wkwkrnht.wordpress.com/?p=783";s:5:"pDate";s:19:"2017-03-25 12:23:06";}}";
snapFB:
  - |
    s:410:"a:1:{i:0;a:11:{s:2:"do";s:1:"1";s:9:"msgFormat";s:38:"更新:%URL% - %TITLE%
    %HTAGS%
    %IMG%";s:8:"postType";s:1:"I";s:9:"isAutoImg";s:1:"A";s:8:"imgToUse";s:0:"";s:9:"isAutoURL";s:1:"A";s:8:"urlToUse";s:0:"";s:8:"isPosted";s:1:"1";s:4:"pgID";s:33:"1191820534203303_1407289542656400";s:7:"postURL";s:63:"http://www.facebook.com/1191820534203303/posts/1407289542656400";s:5:"pDate";s:19:"2017-03-25 12:23:09";}}";
snapTW:
  - |
    s:386:"a:1:{i:0;a:11:{s:2:"do";s:1:"1";s:9:"msgFormat";s:38:"更新:%TITLE% - %URL%
    %HCATS%
    %IMG%";s:8:"attchImg";s:1:"1";s:9:"isAutoImg";s:1:"A";s:8:"imgToUse";s:0:"";s:9:"isAutoURL";s:1:"A";s:8:"urlToUse";s:0:"";s:8:"isPosted";s:1:"1";s:4:"pgID";s:18:"845612015074750465";s:7:"postURL";s:54:"https://twitter.com/wkwkrnht/status/845612015074750465";s:5:"pDate";s:19:"2017-03-25 12:23:09";}}";

---
<div class="ogp-blogcard">
  <div id="ogp-blogcard-share-https://play.google.com/store/music" class="ogp-blogcard-share none">
    <a href="javascript:void(0)" class="ogp-blogcard-share-close" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-https://play.google.com/store/music').classList.toggle('none');document.getElementById('ogp-blogcard-share-https://play.google.com/store/music').classList.toggle('block');">×</a> 
    
    <ul>
      <li>
        <a href="https://twitter.com/share?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fmusic&text=Google Play の音楽" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fmusic" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://getpocket.com/edit?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fmusic&title=Google Play の音楽" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-get-pocket" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fmusic&title=Google Play の音楽" target="_blank" rel="noopener" tabindex="0">B!</a>
      </li>
    </ul>
  </div>
  
  <blockquote class="ogp-blogcard-main" cite="https://play.google.com/store/music">
    <img class="ogp-blogcard-img" src="" /> <a href="https://play.google.com/store/music" target="_blank" rel="noopener" tabindex="0" title="Google Play の音楽" class="ogp-blogcard-info"> 
    
    <h2 class="ogp-blogcard-title">
      Google Play の音楽
    </h2>
    
    <p class="ogp-blogcard-description">
      無料ラジオを聴くことができます（米国とカナダのみ）。また、最大 50,000 曲を保存でき、定期購入すれば 3,500 万曲を広告なしで聴いたり、オフラインで再生したりできます。
    </p></a>
  </blockquote>
  
  <a href="javascript:void(0)" class="ogp-blogcard-share-toggle" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-https://play.google.com/store/music').classList.toggle('none');document.getElementById('ogp-blogcard-share-https://play.google.com/store/music').classList.toggle('block');"><i class="fa fa-2x fa-share-alt"></i></a>
</div>

<a href="" title="ここ" target="_blank" rel="noopener">ここ</a>に書いた通り、SCV32のワナに嵌ってしまった<a href="http://twitter.com/wkwkrnht" target="_blank" rel="noopener nofollow">@wkwkrnht</a>です。それの検証の最中、音楽ファイルをいつものSDカード以外に復元する必要があり、復元元としてGoogle Play Musicを選んだのですが、これが失敗でした。という話です。元々、Google Play musicは、何かあったとき用にCDから取り込んだ全音楽ファイルと、クーポンで買った音源とが保存されていました。ようは、私にとって手持ちの全音源のバックアップとなっていました。もちろん無料プランです。これらを前提として書いていきますね。<aside class="toc" role="navigation"> <a href="javascript:void(0);" tabindex="0" class="toc-toggle" onclick="document.getElementById("toc-inner").classList.toggle("none");document.getElementById("toc-inner").classList.toggle("block");">∨</a> 

## 問題の数々 {.toc-title}

<ol id="toc-inner" class="toc-list block">
  <li>
    <a href="#toc1" tabindex="0">問答無用、強制的にアーティストベースでのファイル分類</a>
  </li>
  <ol>
    <li>
      <a href="#toc2" tabindex="0">同じアルバムなのに違うアルバムと認識される事態</a>
    </li>
    <li>
      <a href="#toc3" tabindex="0">フォルダー名ぶつ切り事件</a>
    </li>
    <li>
      <a href="#toc4" tabindex="0">まとめ</a>
    </li>
  </ol>
</ol></aside> 

## 問答無用、強制的にアーティストベースでのファイル分類

処理場の都合なんですかね。アーティストで分類してから、その下にアルバム名で分類されるという具合です。まあ、違うアーティストで、同名アルバムがあって、それが違うアルバムだった場合、賢い実装だと思いますが、違うアーティストが一つのアルバムを作る場合とどちらが多いのでしょうか。というか、機械学習を取り入れるなら、真っ先にここでしょう。ここで、同じアルバムを認識して、それを基にきちんとフォルダ分けをする。これだけでだいぶUXが上がると思いますよ。

## 同じアルバムなのに違うアルバムと認識される事態

たぶん、これは上記の仕様からモロに煽りを受けたものだと思われます。上記の仕様のせいで、同じアルバムなのに、違うフォルダーに保存されているため、再生アプリ側が誤認識するという具合でして。それと同時に、アルバムアーティストも変更となっているかのせいも高いため、そちらも原因だと思われます。結果として、手作業でフォルダー統合し、アルバムアーティストも直さなければいけません。

## フォルダー名ぶつ切り事件

これも処理上の都合だと思いますけれども、ある一定の文字数を超えたアルバムは、単語に関係なくバッサリと切られていて、それがフォルダー名として使われていました。○○ 青盤とかの下何文字でバージョン分けしている場合、見分けがつかなくなるという仕様ですね。これは、制作者に対して敬意がないというかかんというか、という感じでして。実務上も十二分に不便ですね。タグ上では、全部残されているのがまだ救いですけれども。さすがに、これはどうかなと思う次第です。

## まとめ

これらの仕様を全部体験できるのが、けいおんのCome with Me!なので、ぜひ試していただきたいですね。十中八九、この仕様を決定した人に対して、怒りを覚えますから。少なくとも私はそうでした。向こうから言わせれば、ちゃんとクラウド経由で聞いてくれよ。ということなのでしょうが、わざわざトラフィックを増やすことでもないですし、スリープタイマーの階層も深いので、プレイヤーを使いたいとも思いませんし。というわけで、邦楽やコントリビュートアルバムなんかを聞く方々は気を付けた方がいいかと思います。真面目に、修正に数時間かかりますから。