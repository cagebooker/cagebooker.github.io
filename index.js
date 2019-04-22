function showtime(){

  var nowdate = new Date();
  var h = nowdate.getHours();
  var m = nowdate.getMinutes();
  var s = nowdate.getSeconds();

  document.getElementById("time").innerHTML = 'Time：'+h+':'+m+":"+s;
  setTimeout("showtime()",1000);
};


// document.getElementsByClassName(".noteDiv")[0].onC = createDiv();
// document.getElementsByClassName("noteDiv").addEventListener("onClick",createDiv());
var note1 = document.getElementsByClassName("noteDiv")[0];
note1.onclick = function(){createDiv()};
// var backDiv = document.getElementById("backDiv");
// back.onclick = function(){removeDiv()};
// backDiv.addEventListener("click", removeDiv);


for (let i = 0; i <28; i++) {
   var note = document.getElementsByClassName("noteDiv")[i];
   note.onclick = function(){createDiv(i)};
}

function createDiv(num){
    
    if ( page == 0 ) {
        var div = document.createElement("div");
        div.id = "outputPage";

        document.body.appendChild(div);
        // div.innerHTML = "是不是要加入Title、段落<br />\
        // 111<br />111<br />111<br />111<br />111<br />111<br />\
        // 111<br />111<br />111<br />111<br />111<br />111<br />\
        // 111<br />111<br />111<br />111<br />111<br />111<br />\
        // 111<br />111<br />111<br />111<br />111<br />111<br />\
        // 111<br />111<br />111<br />111<br />111<br />111<br />\
        // 111<br />111<br /><h1 style='color:red'>123</h1>";
        div.innerHTML = keyNote[num];
        var btn = document.createElement("i");
        btn.className = "fas fa-times fa-2x";
        btn.style.zIndex = "2000";
        document.body.appendChild(btn);
        //document.querySelector("#outputPage").appendChild(btn);
        btn.onclick = removeDiv;
        page = 1;

        //test
        var backDiv = document.createElement("div");
        backDiv.id = "backDiv";
        document.body.appendChild(backDiv);
        backDiv.onclick = function(){removeDiv()};
    }
    
}

// document.getElementById("#outputPage").addEventListener("click",removeDiv);

function removeDiv(){

    if (page == 1) {
        var div = document.getElementById("outputPage");
        document.body.removeChild(div);
        var btn = document.getElementsByClassName("fas fa-times fa-2x")[0];
        document.body.removeChild(btn);
        page = 0;
        var backDiv = document.getElementById("backDiv");
        document.body.removeChild(backDiv);
    }
    
};

// icon color adjust
var iconColor = ["#e74c3c","green","purple","#f1c40f","#0984e3","#222f3e"]
for (let i = 0; i <6; i++) {
    var iconText = document.getElementsByClassName("iconText")[i];
    var icon = document.getElementsByClassName("icon")[i];
    icon.onmouseover = function(){sideText(i)};
    icon.onmouseout = function(){RemoveColor(i)};
}
function sideText(i) {
    document.getElementsByClassName("iconText")[i].style.color = iconColor[i];
    document.getElementsByClassName("iconText")[i].style.transition = "color 0.3s";
}
function RemoveColor(i){
    document.getElementsByClassName("iconText")[i].style.color = "#bdc3c7";
}

// Note 文字整理
// &nbsp;&bull;&nbsp;&nbsp; title的點點，請複製
//<br /><br />&nbsp;&nbsp;&nbsp;參考連結：
var keyNote = 
["<h2>Sublime & Emmet</h2>\
<br />&nbsp;&bull;&nbsp;&nbsp;Sublime是我們將會使用的文字編輯器。\
<br />&nbsp;&bull;&nbsp;&nbsp;而Emmet是讓你減少編寫 HTML / CSS 時間的Sublime外掛程式。請使用。\
<br /><br /><h5>Sublime</h5>\
「 Sublime Text 」文字編輯器使用介面基本簡單，Sublime優點是有很多可裝載的外掛程式\
，每個人可以根據自己使用上的需求，安裝其所需的外掛，達到很好的coding效率。<br />閱讀下方參考連結後，完成以下步驟即可。\
<br />\
<br />&nbsp;&nbsp;&nbsp;步驟一：下載及安裝 sublime text\
<br />&nbsp;&nbsp;&nbsp;步驟二：Sublime的外掛管理程式 - package control\
<br />&nbsp;&nbsp;&nbsp;步驟三：指令面板使用 - Command Palette\
<br />&nbsp;&nbsp;&nbsp;步驟四：安裝「Emmet」外掛\
<br />&nbsp;&nbsp;&nbsp;步驟五：簡單設置HTML檔案<br />\
<br />&nbsp;&nbsp;&nbsp;參考連結：<br />\
&nbsp;&nbsp;&nbsp;版一：<a href='http://www.flycan.com/article/free-resource/sublime-text-setup-2060.html' target='_blank'>安裝教學上</a>、\
<a href='http://www.flycan.com/article/free-resource/sublime-text-setup-2-2077.html' target='_blank'>安裝教學下</a>\
<br />&nbsp;&nbsp;&nbsp;版二：<a href='https://blog.miniasp.com/post/2014/01/06/Useful-tool-Sublime-Text-3-Quick-Start' target='_blank'>安裝教學</a>\
<br /><br /><h5>Emmet</h5> \
&nbsp;&nbsp;&nbsp;Emmet外掛的基礎用法：<br />\
&nbsp;&nbsp;&nbsp;1. 在sublime中輸入 HTML 元素名稱，並加上 CSS 選擇器規則<br />\
&nbsp;&nbsp;&nbsp;2. 全部輸入完之後，按 Tab 鍵，就會自動產生 HTML 碼<br />\
<br />\
請參考圖文教學\
<a href='https://pjchender.blogspot.com/2016/07/emmet.html' target='_blank'>Emmet基礎</a>！\
這邊額外講一下，如果你還沒學習過HTML、CSS的話，看過連結後腦中有概念就好囉，等到之後熟悉程式語法後再來使用。\
<br />\
<br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;版一：<a href='https://pjchender.blogspot.com/2016/07/emmet.html' target='_blank'>基礎</a>\
<br />&nbsp;&nbsp;&nbsp;版二：<a href='https://www.wfublog.com/2017/08/emmet-sublime-text.html' target='_blank'>中階</a>\
\
<br /><br /><br />\
<h5>補充</h5>\
&nbsp;&nbsp;&nbsp;其他好用的Sublime外掛：<br />\
&nbsp;&nbsp;&nbsp;1. Emmet LiveStyle：\
<a href='https://blog.kkbruce.net/2014/01/f2e-power-tool-emmet-livestyle.html#.XLVX1-szbs0' target='_blank'>教學</a>\
<br />\
&nbsp;&nbsp;&nbsp;2. HTML-CSS-JS Prettify：待研究項目 <br />\
&nbsp;&nbsp;&nbsp;（排版優化的外掛，如果自己就習慣排版應該就不需要了？）\
"
, //第一篇text editor and IDE 結束
"<h1>This is title</h1>",//第二篇
"<h2 style='color:red'>This is h2 title</h2>",//第三篇
"<h2>iTerm2</h2>\
<br />未來在寫 code ，無論是寫哪一種程式語言、或是哪一種開發環境，都會需要透過Terminal執行一些命令\
，最常用的像是cd, ls, git, ssh, rsync, mkdir指令之類等等。今天介紹 iTerm2來取代系統內建的Terminal，\
而使用iTerm2的優勢如下：\
<br /><br />&nbsp;&nbsp;&nbsp;1. Terminal設定可以個人化\
<br />&nbsp;&nbsp;&nbsp;2. 介面比較好看，更易於操作\
<br />&nbsp;&nbsp;&nbsp;3. Terminal中可以開多個分頁，像瀏覽器一樣\
\
<br /><br />&nbsp;&bull;&nbsp;&nbsp;不懂 Terminal 並不影響你學習程式，可以開始寫作品時再來弄懂 Terminal 的操作！\
<br />&nbsp;&bull;&nbsp;&nbsp;如果你不知道什麼是Terminal的請\
<a href='https://gitbook.tw/chapters/command-line/command-line.html' target='_blank'>點我</a>\
，趕快認識Terminal和基礎操作！\
\
<br />\
\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;推薦：<a href='https://andy6804tw.github.io/2018/01/01/iterm2-zsh-intro/' target='_blank'>安裝與設定 iTerm2</a>\
<br />&nbsp;&nbsp;&nbsp;版一：<a href='https://courses.growthschool.com/courses/path-to-rails-developer/lectures/744466' target='_blank'>安裝與設定 iTerm2</a>\
<br />&nbsp;&nbsp;&nbsp;版二：<a href='http://huli.logdown.com/posts/402147-iterm2-zsh-better-environment' target='_blank'>安裝與設定 iTerm2</a>\
<br />&nbsp;&nbsp;&nbsp;版三：<a href='https://github.com/robbyrussell/oh-my-zsh' target='_blank'>github 英文版</a>\
<br />&nbsp;&nbsp;&nbsp;iTerm2官網：<a href='https://www.iterm2.com/' target='_blank'>官網</a>\
<br />&nbsp;&nbsp;&nbsp;Terminal基礎指令：<a href='https://www.minwt.com/mac/14653.html' target='_blank'>Terminal常用語法教學</a>\
<br /><br />\
<h5>zsh + oh-my-zsh</h5>\
<br />zsh 和 oh-my-zsh是 iTerm2 的外掛程式，是用來美化 iTerm2 的介面，包含上顏色、Terminal的排版等等等，\
如果不要使用也不影響喔，你可以選擇跳過，但如果你很在意介面的美觀，就閱讀下方連結，跟著文章操作就行了!\
\
\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;版一：<a href='https://andy6804tw.github.io/2018/01/01/iterm2-zsh-intro/' target='_blank'>iTerm2美化 - zsh</a>\
<br />&nbsp;&nbsp;&nbsp;版二：<a href='https://medium.com/@hazelwu/%E7%94%A8oh-my-zsh%E6%8A%8Aiterm%E8%AE%8A%E7%BE%8E%E7%BE%8E-8a18daa8eac' target='_blank'>iTerm2美化 - zsh</a>\
<br />&nbsp;&nbsp;&nbsp;版三：<a href='https://pjchender.blogspot.com/2017/02/mac-terminal-iterm-2-oh-my-zsh.html' target='_blank'>iTerm2美化 - zsh</a>\
",//第四篇 3rd party terminal
"<h2>HTML Tag</h2>\
什麼是網頁？網頁是 HTML 檔案在瀏覽器讀取出來的結果，而 HTML 檔案是由 HTML Tag（元素、element）組成的，\
所以，認識 HTML tag 並在檔案中以正確語法寫出來，就能完成一個非常基本的網頁。<br />\
<br />首先<br />\
&nbsp;&bull;&nbsp;&nbsp;認識簡單的 HTML 檔案<br />\
&nbsp;&bull;&nbsp;&nbsp;HTML Tag 的寫法<br />\
&nbsp;&bull;&nbsp;&nbsp;網頁通常的結構<br />\
&nbsp;&bull;&nbsp;&nbsp;常見 HTML Tag 名稱：文字、超連結、圖片、按鈕等等<br />\
&nbsp;&bull;&nbsp;&nbsp;表單的結構與製作<br /><br />\
<h5>心得</h5>\
HTML 是個好學的語言，只要跟著 W3C 裡面的instruction走，就沒問題了。<br />以下是 Check list ，裡面是超基礎的Tag，一定要記熟，\
就當作學習的檢視。另外，在 W3C 學的時候，並不用每個語法和Tag都記起來，只要留下印象就好，到時候有需要用再回來查就行了！<br /><br />\
\
&nbsp;&bull;&nbsp;&nbsp;Check list：html body head script h1~6 link p span div button form input img\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;W3C HTML：<a href='https://www.w3schools.com/html/default.asp' target='_blank'>點我</a>\
\
\
",//第五篇 Semantic HTML5 element 結束
"<h2 id='test' style='display:inline'>CSS</h2>&nbsp;&nbsp;&nbsp;<h5 style='display:inline'>Cascading Style Sheets</h5>\
\
\
\
<br /><br /><h5>概念</h5>\
CSS 是用來定義 HTML 的 element 的在網頁中如何被顯示出來。是用來美化網頁的語言。\
\
<br /><br />\
<h5>心得</h5>\
網頁的美化主要可大致分成三部分「文字裝飾」、「排版」、「響應式」來學習，依序順序來學，過程中你不需要每個語法都背下來\
才代表你學完了，因為CSS的語法實在太多了，所以最後你要能習慣直接上網查資料，知道哪邊找到資料就足夠了。下方會稍微整理一些資訊！\
<br /><br />我在學的時候是直接在w3school這個網站一頁一頁看的，這網站資料最完整 \
<a href='https://www.w3schools.com/css/default.asp' target='_blank'>W3C 官網</a>，如果是新手記得看下方\
的基礎語法，以及CSS的Selector喔！\
\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;<a href='https://www.w3schools.com/css/css_intro.asp'target='_blank'>CSS Introduction</a>\
<br />&nbsp;&nbsp;&nbsp;<a href='https://www.w3schools.com/css/css_syntax.asp'target='_blank'>基礎 Syntax and Selector</a>\
<br />&nbsp;&nbsp;&nbsp;<a href='https://www.w3schools.com/css/css_howto.asp' target='_blank'>3種 CSS 插入 HTML 的方式</a>\
\
\
<br /><br /><br /><h5>文字裝飾</h5>\
這邊的學習比較單調，就是直接上 W3C 找資料然後練習，裡面講解很清楚，而且有很多範例可以參考，以下是簡單區分，你大概都要使用過一遍\
，有些上手即可。<br /><br />\
&nbsp;&bull;&nbsp;&nbspHTML element調整：長寬、透明度、行高、背景顏色、邊框等等<br />\
&nbsp;&bull;&nbsp;&nbspelement裡文字調整：大小、顏色、粗細、字體<br />\
&nbsp;&bull;&nbsp;&nbsp特效：element旋轉、移動、動畫等等<br />\
&nbsp;&bull;&nbsp;&nbsp超連結相關設定<br />\
<br />&nbsp;&nbsp;&nbsp;<a href='https://www.w3schools.com/css/default.asp' target='_blank'>W3C 官網</a>\
\
\
<br /><br /><h5>排版</h5>\
CSS最困難的部分之一就是正確的排版！ <br />在學習語法之前要先有個概念：每個 HTML Tag在 CSS 中都有不同的預設值，\
例如預設的文字大小、預設的間距、預設的框格模型….等。當我們在寫 CSS 的時候，必須要先了解這些預設值的存在，\
才能夠明確的掌控網頁該如何調整排版。（連結在下）<br /><br />\
不過，大部份的人會使用另一種方法來解決，就是先把這些預設值歸 0 ，\
然後再重新寫上需要的 CSS 屬性，這一招是目前大家認為比較好的解決方案。（缺方法）\
\
<br /><br />\
CSS 排版大概可分成三種方式，都要學會，這邊只先介紹傳統定位，另外兩種後面會提到，條列在下方：<br /><br />\
&nbsp;&bull;&nbsp;&nbsp;傳統定位：CSS的 display + position + float 屬性<br />\
&nbsp;&bull;&nbsp;&nbsp;一維排列：CSS的 flexbox 屬性<br />\
&nbsp;&bull;&nbsp;&nbsp;二維排列：CSS的 grid system 屬性 <br />\
\
\
\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;排版：<a href='http://zh-tw.learnlayout.com/' target='_blank'>超推CSS</a>、\
<a href='https://zhuanlan.zhihu.com/p/46757975' target='_blank'>比較一二維排列</a>\
\
<br />&nbsp;&nbsp;&nbsp;CSS 預設值：<a href='http://www.flycan.com/article/css/w3c-html-4-css-386.html' target='_blank'>點我</a>\
<br />&nbsp;&nbsp;&nbsp;解決傳統定位的問題：<a href='http://zh-tw.learnlayout.com/box-sizing.html' target='_blank'>box-sizing</a>\
<br />\
<br /><br /><h5>傳統定位</h5>\
CSS 的排版可以簡單想像成，把空白的網頁用一個一個的HTML element填進去，所以，首先你要知道每個element的size，再來，你要知道\
 element 編排的規則是什麼，之後就可以開始練習排版。\
而傳統定位一定要很熟悉以下三個CSS property!<br /><br />\
1. Display：HTML element的原始size。每個HTML element都有一個預設的display值，\
而幾乎所有元素都簡單分為 block 或 inline 或 inline-block 三種。<br /><br />\
&nbsp;&bull;&nbsp;&nbsp;block：element寬度為固定一行，下一個 element排列時會從下一行開始。<br />\
&nbsp;&bull;&nbsp;&nbsp;inline：element內有多長的內容，這個element就多寬。<br />\
&nbsp;&bull;&nbsp;&nbsp;inline-block：可設定長寬的inline，不會換行。<br />\
&nbsp;&bull;&nbsp;&nbsp;HTML element 預設的 display 是哪種請點連結閱讀 \
<a href='https://www.w3schools.com/css/css_display_visibility.asp' target='_blank'>點我</a><br />\
<br />2. position：這個 property 定義了 element 的定位方式，為了複雜的版面設計，所以衍生了4種的定位方式，給大家混合使用，\
不是很簡單，但以下兩個連結說明的很清楚，請閱讀 \
<a href='http://zh-tw.learnlayout.com/position.html'target='_blank'>完整</a>、\
<a href='https://www.w3schools.com/css/css_positioning.asp'target='_blank'>W3C</a><br /> \
<br />&nbsp;&bull;&nbsp;&nbsp;static：static 是預設值。而是照著瀏覽器預設的配置自動排版在頁面上。\
<br />&nbsp;&bull;&nbsp;&nbsp;relative：和 static 相似，只是可以用 top、left、right、bottom 移動 element位置。\
<br />&nbsp;&bull;&nbsp;&nbsp;absolute：element 定位在外面一層元素的相對位置上。\
<br />&nbsp;&bull;&nbsp;&nbsp;fixed：element 會固定在瀏覽器上視窗的位置，而不是 HTML 文件上的位置。<br />\
<br />3. float：通常是給圖片置左或置右時用的，產生「文繞圖」的效果。但是，這種方法常會造成 element 大小改變，也影響\
排版的習慣，未來比較少用傳統排版方式，詳細請點閱讀連結 。\
<a href='https://www.w3schools.com/css/css_float.asp'target='_blank'>W3C</a>\
\
<br /><br /><br /><h5>響應式 Responsive Layout</h5>\
<br />下一個主題會詳細講。\
\
\
\
\
\
\
\
\
\
"
,//第六篇 Basic CSS
"以CSS作版面配置取代使用table 版面配置<br />",//第七篇 Flexbox & CSS grid
"<h5>好像可以被sass取代</h5>\
\
\
\
\
\
\
\
\
\
",//第八篇 CSS Variable
"",//第九篇 Browser Dev Tool
"<h2>Viewport</h2>\
<h5>概念</h5>\
什麼是RWD？ Responsive Web Design 響應式網頁設計，是為了讓網頁或是 web app 能夠在各種不同裝置上都可以正確的被顯示的技術。下方是基本概念。<br /><br />\
&nbsp;&nbsp;&nbsp;1. RWD 讓你寫的網頁能在各式裝置上看起來很棒。<br />\
&nbsp;&nbsp;&nbsp;2. RWD 這個技術，純粹使用了 HTML 和 CSS。<br />\
&nbsp;&nbsp;&nbsp;3. RWD 不是 javascript 的程式。<br />\
<br /><h5>Set Viewport</h5>\
設定 viewport 的方法是在 &lt;head&gt; 中插入 &lt;meta name=”viewport”&gt; 這個 Tag。細節請看 W3C 介紹。\
<br />另外，有幾點 RWD 的小概念要先建立的，如下：<br />\
<br />&nbsp;&bull;&nbsp;&nbsp;不要定義寬度很大的 element，在小螢幕中容易跑版。\
<br />&nbsp;&bull;&nbsp;&nbsp;不要讓內容依照特定的螢幕版面設計。\
<br />&nbsp;&bull;&nbsp;&nbsp;用 CSS 的 media query 針對不同的螢幕大小來設計頁面。\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;W3C：<a href='https://www.w3schools.com/css/css_rwd_viewport.asp' target='_blank'>W3C</a>\
<br />&nbsp;&nbsp;&nbsp;內容很棒：<a href='https://medium.com/frochu/html-meta-viewport-setting-69fbb06ed3d8' target='_blank'>點我</a>\
\
\
\
\
",//第十篇 set viewport結束
"",//第十一篇 Fuild width
"<h2>Media Query</h2>\
<h5>概念</h5>\
media query 是利用 CSS 的 @media 屬性，用來區分螢幕不同大小，執行對應到的 CSS 程式碼。詳細直接看 W3C 的介紹即可。<br /><br />\
&nbsp;&bull;&nbsp;&nbsp;設計網站先從手機版的開始設計。<br />\
<br />\
<h5>螢幕區分點</h5>\
目前螢幕裝置有太多不同大小，所以沒辦法針對每個設計，所以有基本的區分點，大家先依照這個區分方式設計。<br />\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;W3C：<a href='https://www.w3schools.com/css/css_rwd_mediaqueries.asp' target='_blank'>Media Query</a>\
\
",//第十二篇 Media Queryr 結束
"<h2>RWD 文字大小設定</h2>\
<h5>px、em、rem 和 %</h5>\
文字在網頁上的單位有幾種，你得清楚各種文字單位的定義，以及他們的特性為何，才能選擇你要的。\
一般設計師都使用px，但是 rem 在這邊才是適合 RWD 的設計方式，可以閱讀參考連結。以下簡介各種單位的定義。<br />\
<br />\
&nbsp;&bull;&nbsp;&nbsp;px：絕對單位，代表螢幕中每個「點」( pixel )。<br />\
&nbsp;&bull;&nbsp;&nbsp;em：相對單位，每個子元素透過「倍數」乘以父元素的 px 值。<br />\
&nbsp;&bull;&nbsp;&nbsp;rem：相對單位，每個元素透過「倍數」乘以根元素的 px 值。<br />\
&nbsp;&bull;&nbsp;&nbsp;%：相對單位，每個子元素透過「百分比」乘以父元素的 px 值。<br />\
<br />\
<h5>rem 與 em 該如何抉擇呢？</h5>\
&nbsp;&bull;&nbsp;&nbsp;選擇 em <br />\
em 的文字大小基準取決於父層的文字大小，所以建議使用在限制區域的內容、元件等等。<br />\
<br />\
&nbsp;&bull;&nbsp;&nbsp;選擇 rem <br />\
rem 的文字基準取決於最外層的 html 文字大小，很適合用在整體的尺寸大小切換，以 RWD 響應式網頁來說，可以依據不同的尺寸，統一切換整體網頁的文字大小。\
<br /><br />&nbsp;&nbsp;&nbsp;參考連結：\
<br />&nbsp;&nbsp;&nbsp;oxxo大神： <a href='https://www.oxxostudio.tw/articles/201809/css-font-size.html' target='_blank'>點我</a>\
<br />&nbsp;&nbsp;&nbsp;六角學院： <a href='https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/' target='_blank'>點我</a>\
",//第十三篇 rem over px 結束
"<a href='https://www.appcoda.com.tw/git-xcode/' target='_blank'>https://www.appcoda.com.tw/git-xcode/</a>\
<br /><a href='https://gitbook.tw/' target='_blank'>git 超詳細教學</a>\
<br /><a href='https://blog.longwin.com.tw/2009/05/git-learn-initial-command-2009/' target='_blank'>git 指令集</a>\
\
\
\
\
",//第十四篇 Mobile first, stacked columns
"",//第十五篇 Resgister a domain name
"",//第十六篇 Managed shared hosting or VPS
"",//第十七篇 FRP,SFTP File Upload
"",//第十八篇 Static Hosting
"",//第十九篇 Structured CSS
"",//第二十篇 Variable
"",//第二十一篇 Nested CSS
"",//第二十二篇 Mixins & Function
"",//第二十三篇 inheritance
"",//第二十四篇 Data type, function...
"",//第二十五篇 DOM manipulation & Event
"",//第二十六篇 JSON
"",//第二十七篇 Fetch API
"",//第二十八篇 ES6+
"\
\
\
\
\
\
\
\
",//第二十九篇 
"",]


