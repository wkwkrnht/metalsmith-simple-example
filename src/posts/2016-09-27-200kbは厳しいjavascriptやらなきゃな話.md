---
title: '200KBは厳しい&javascriptやらなきゃな話'
author: wkwkrnht
type: post
date: 2016-09-26T15:22:03+00:00
url: /sitemanagement/accelerated/497/
snapWP:
  - 's:323:"a:1:{i:0;a:10:{s:2:"do";s:1:"1";s:11:"SNAPformatT";s:15:"%TITLE% %HTAGS%";s:10:"SNAPformat";s:46:"<a class="embedly-card" href="%URL%">%URL%</a>";s:9:"isAutoImg";s:1:"A";s:8:"imgToUse";s:0:"";s:4:"doWP";s:1:"1";s:11:"isPrePosted";s:1:"1";s:8:"isPosted";s:1:"1";s:4:"pgID";s:3:"629";s:5:"pDate";s:19:"2016-11-03 10:01:36";}}";'
  - 's:323:"a:1:{i:0;a:10:{s:2:"do";s:1:"1";s:11:"SNAPformatT";s:15:"%TITLE% %HTAGS%";s:10:"SNAPformat";s:46:"<a class="embedly-card" href="%URL%">%URL%</a>";s:9:"isAutoImg";s:1:"A";s:8:"imgToUse";s:0:"";s:4:"doWP";s:1:"1";s:11:"isPrePosted";s:1:"1";s:8:"isPosted";s:1:"1";s:4:"pgID";s:3:"629";s:5:"pDate";s:19:"2016-11-03 10:01:36";}}";'
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

---
いやあ、この前のWordCamp Tokyoでそんな話があったと聞いて。
  


<div class="ogp-blogcard">
  <div id="ogp-blogcard-share-http://www.slideshare.net/takehora/wordpress-66116820" class="ogp-blogcard-share none">
    <a href="javascript:void(0)" class="ogp-blogcard-share-close" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-http://www.slideshare.net/takehora/wordpress-66116820').classList.toggle('none');document.getElementById('ogp-blogcard-share-http://www.slideshare.net/takehora/wordpress-66116820').classList.toggle('block');">×</a> 
    
    <ul>
      <li>
        <a href="https://twitter.com/share?url=http%3A%2F%2Fwww.slideshare.net%2Ftakehora%2Fwordpress-66116820&text=レスポンシブデザイン前提のWordPressの表示速度高速化の考え方" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://www.facebook.com/share.php?u=http%3A%2F%2Fwww.slideshare.net%2Ftakehora%2Fwordpress-66116820" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://getpocket.com/edit?url=http%3A%2F%2Fwww.slideshare.net%2Ftakehora%2Fwordpress-66116820&title=レスポンシブデザイン前提のWordPressの表示速度高速化の考え方" target="_blank" rel="noopener" tabindex="0"><i class="fa fa-get-pocket" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="http://b.hatena.ne.jp/add?mode=confirm&url=http%3A%2F%2Fwww.slideshare.net%2Ftakehora%2Fwordpress-66116820&title=レスポンシブデザイン前提のWordPressの表示速度高速化の考え方" target="_blank" rel="noopener" tabindex="0">B!</a>
      </li>
    </ul>
  </div>
  
  <blockquote class="ogp-blogcard-main" cite="http://www.slideshare.net/takehora/wordpress-66116820">
    <img class="ogp-blogcard-img" src="https://cdn.slidesharecdn.com/ss_thumbnails/wordpress-160917082458-thumbnail-4.jpg?cb=1474129718" /> <a href="http://www.slideshare.net/takehora/wordpress-66116820" target="_blank" rel="noopener" tabindex="0" title="レスポンシブデザイン前提のWordPressの表示速度高速化の考え方" class="ogp-blogcard-info"> 
    
    <h2 class="ogp-blogcard-title">
      レスポンシブデザイン前提のWordPressの表示速度高速化の考え方
    </h2>
    
    <p class="ogp-blogcard-description">
      スマートフォンが普及するに伴い、マルチデバイス対応のWebサイトが求められています。その要望に応えるために、レスポンシブデザインを前提にWordPressでサイト構築することが一般的になっています。しかし、デスクトップサイトで使用するファイルをそのままに利用するレスポンシブデザインでは、その容量の大きさが、携帯網を経&
    </p></a>
  </blockquote>
  
  <a href="javascript:void(0)" class="ogp-blogcard-share-toggle" tabindex="0" onclick="document.getElementById('ogp-blogcard-share-http://www.slideshare.net/takehora/wordpress-66116820').classList.toggle('none');document.getElementById('ogp-blogcard-share-http://www.slideshare.net/takehora/wordpress-66116820').classList.toggle('block');"><i class="fa fa-2x fa-share-alt"></i></a>
</div>

いやあスライド見たら、はっきり書いてありますね。モバイル向けページは、200KB以内にページサイズを抑えろって。ココのブログは、広告も張ってないのでまだ目指しやすいのですが、そうなると、私が今作ってるテーマに目が行くわけですよね。それ以外は、画像の最適化かページキャッシュなのだから。それで、まだスタイルも中途半端なもので、そんな中で高速化は限りあるわけで。[appbox wordpress minify-html-markup]こんなの導入してみましたけど、これでさえ限界もあるわけで。そう考えると、本当にq-azはすごいなぁと。私も、そこまでもっていきたいなぁ。そのためにも、もうちょっと関数の依存関係見直したり、lightboxやアイコンフォントの当て方なんかも考えなきゃいけないなぁと思ったり。普通に、動作環境はEdge、Firefox、Chrome、Safari辺りに絞っている。だからこそ、もっとCSSも簡略化できるはずなのは確かだし、.eotファイルなんて読み込まなくてもいいのはその通りで。まあただの愚痴っちゃあ、愚痴なんですけど。海外サーバーを使う身として、それぐらいは頑張りたいなと。GTmetrixのデフォで測ってみるとロスは少ないけど、日本ではpingが不利すぎだし。CDNでも借りたらそれだけで満足できそうw

## javascriptに移ろう

こちらもWordCamp Tokyoのセッションネタ。







こんな感じです。要約すると、WordpressでもJSONベースのAPI構築できるようになるから、Wordpressは本来のCMSとしての動きのみに使えるよね。だから、もう他のことはjavascriptで出来るんだし、コダワリは捨てよーぜ。な感じ。これも衝撃だったなぁ。もちろんプラグインの存在は知っていって、javascriptの偉大さも感じていて、私の思っている地球一周先を行かれていた感じでしたね。ちょっとブレはありますけど、でも次のサイトも、PHPベースなのは変わらず。そこに、初めましてのPHPライブラリとJSONの扱いというに点があるから、それをステップにしようかなと。次は、それベースでサイト表示もjavascriptベースに、ツイートを、スクレイピングをって。どんどんリライトしていけば、ちょっとは、このセッションの紹介事例に近づけるかなと。それでも、スクレイピングは自動的に行うにはCronジョブしか方法が……。気合とハッスルが足りるかどうか。そのためにも、いったんこっちのブログのコンテンツを落ち着かせないとというのもありまして。書きたいけど書いてないネタが、ちらほらあるんですよね。それ書かないと。そんな感じで、今日はとりあえず寝ます。