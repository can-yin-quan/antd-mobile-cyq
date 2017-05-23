webpackJsonp([46,147],{5:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(5),s(26)},26:function(n,a){},238:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),e=t(p),o=s(6),c=t(o),l=s(2),u=t(l),k=s(4),i=t(k),r=s(3),g=t(r),m="/Users/frankwang/Workspace/antd-mobile-cyq/components/badge/index.web.tsx",d=s(1),f=t(d),b=s(7),h=t(b),x=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var p=0,t=Object.getOwnPropertySymbols(n);p<t.length;p++)a.indexOf(t[p])<0&&(s[t[p]]=n[t[p]]);return s},y=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,g["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.className,p=s.prefixCls,o=s.children,l=s.text,u=s.size,k=s.overflowCount,i=s.dot,r=s.corner,g=s.hot,d=x(s,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);k=k,l="number"==typeof l&&l>k?k+"+":l,i&&(l="");var b=(0,h["default"])((n={},(0,c["default"])(n,p+"-dot",i),(0,c["default"])(n,p+"-dot-large",i&&"large"===u),(0,c["default"])(n,p+"-text",!i&&!r),(0,c["default"])(n,p+"-corner",r),(0,c["default"])(n,p+"-corner-large",r&&"large"===u),n)),y=(0,h["default"])((a={},(0,c["default"])(a,t,!!t),(0,c["default"])(a,p,!0),(0,c["default"])(a,p+"-not-a-wrapper",!o),(0,c["default"])(a,p+"-corner-wrapper",r),(0,c["default"])(a,p+"-hot",!!g),(0,c["default"])(a,p+"-corner-wrapper-large",r&&"large"===u),a));return f["default"].createElement("span",{className:y,__source:{fileName:m,lineNumber:36}},o,(l||i)&&f["default"].createElement("sup",(0,e["default"])({className:b},d,{__source:{fileName:m,lineNumber:38}}),l))},a}(f["default"].Component);a["default"]=y,y.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},n.exports=a["default"]},239:function(n,a,s){"use strict";s(5),s(283)},283:function(n,a){},479:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003\u3002"]],"en-US":[["p","Usage cases."]]},meta:{order:4,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> BadgeDemo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Extra</span> <span class="token attr-name">content"</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> background<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'inline-block\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Dot Badge<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">77</span><span class="token punctuation">}</span> overflowCount<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">55</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n    <span class="token operator">></span>\n      Content\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4fc3\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">corner</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>corner-badge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Use corner prop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>special-badge<span class="token punctuation">"</span></span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4fc3\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Custom corner\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Extra<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>text number <span class="token number">0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'new\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      Marketing<span class="token punctuation">:</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u51cf<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u60e0<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u514d<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u53cd<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>HOT<span class="token punctuation">"</span></span> <span class="token attr-name">hot</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      Customize\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5238<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.06rem\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>NEW<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 0.06rem\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#21b68a\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u7f34\u8d39<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n        padding<span class="token punctuation">:</span> <span class="token string">\'0 0.06rem\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n        borderRadius<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span>\n        border<span class="token punctuation">:</span> <span class="token string">\'1px solid #f19736\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BadgeDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(16),s(32)),p=n(t),e=(s(239),s(238)),o=n(e),c=function(){return a.createElement(p["default"],null,a.createElement(p["default"].Item,{extra:"Extra content",arrow:"horizontal"},a.createElement(o["default"],{dot:!0},a.createElement("span",{style:{width:"0.52rem",height:"0.52rem",background:"#ddd",display:"inline-block"}})),a.createElement("span",{style:{marginLeft:12}},"Dot Badge")),a.createElement(p["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",extra:a.createElement(o["default"],{text:77,overflowCount:55}),arrow:"horizontal"},"Content"),a.createElement(p["default"].Item,null,a.createElement(o["default"],{text:"\u4fc3",corner:!0},a.createElement("div",{className:"corner-badge"},"Use corner prop"))),a.createElement(p["default"].Item,{className:"special-badge",extra:a.createElement(o["default"],{text:"\u4fc3"})},"Custom corner"),a.createElement(p["default"].Item,{extra:"Extra",arrow:"horizontal"},a.createElement(o["default"],{text:0,style:{marginLeft:12}},"text number 0"),a.createElement(o["default"],{text:"new",style:{marginLeft:12}})),a.createElement(p["default"].Item,null,"Marketing:",a.createElement(o["default"],{text:"\u51cf",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"\u60e0",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"\u514d",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"\u53cd",hot:!0,style:{marginLeft:12}}),a.createElement(o["default"],{text:"HOT",hot:!0,style:{marginLeft:12}})),a.createElement(p["default"].Item,null,"Customize",a.createElement(o["default"],{text:"\u5238",style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#f19736",borderRadius:2}}),a.createElement(o["default"],{text:"NEW",style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#21b68a",borderRadius:2}}),a.createElement(o["default"],{text:"\u81ea\u52a8\u7f34\u8d39",style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}})))};return a.createElement(c,null)},style:".corner-badge {\n  height: 100px;\n  width: 400px;\n}\n.special-badge .am-list-line {\n  padding-right: 0;\n}\n.special-badge .am-list-line .am-list-extra {\n  padding: 0;\n  height: 100%;\n}\n.special-badge .am-badge {\n  transform: rotate(45deg);\n  transform-origin: right bottom;\n  right: 0;\n  top: 0.26rem;\n  width: 1rem;\n}\n.special-badge .am-badge-text {\n  border-radius: 0.02rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.corner-badge</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">400</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-list-line</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-list-line</span> <span class="token class">.am-list-extra</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-badge</span> </span><span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">45</span>deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform-origin</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0.26</span>rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">1</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.special-badge</span> <span class="token class">.am-badge-text</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">0.02</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},657:function(n,a,s){n.exports={basic:s(479)}}});