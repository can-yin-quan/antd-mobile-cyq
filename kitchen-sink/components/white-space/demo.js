webpackJsonp([47,147],{5:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},18:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(6),e=t(p),o=s(2),c=t(o),l=s(4),u=t(l),i=s(3),k=t(i),r="/Users/lichao/Documents/github/antd-mobile-cyq/components/white-space/index.web.tsx",d=s(1),g=t(d),m=s(8),f=t(m),h=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.style,c=a.onClick,l=(0,f["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return g["default"].createElement("div",{className:l,style:o,onClick:c,__source:{fileName:r,lineNumber:11}})},a}(g["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},19:function(n,a,s){"use strict";s(5),s(24)},24:function(n,a){},634:function(n,a,s){n.exports={content:[["p","\u4e0a\u4e0b\u7559\u767d ",["code","<WhiteSpace size='md' />"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/white-space/demo/basic.md",id:"components-white-space-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> PlaceHolder <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ebebef\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#bbb\'</span><span class="token punctuation">,</span>\n    textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token string">\'0.6rem\'</span><span class="token punctuation">,</span>\n    lineHeight<span class="token punctuation">:</span> <span class="token string">\'0.6rem\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">{...props}</span>\n  <span class="token punctuation">></span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> WhiteSpaceExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpaceExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(19),s(18)),p=n(t),e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},o=function(n){return a.createElement("div",e({style:{backgroundColor:"#ebebef",color:"#bbb",textAlign:"center",height:"0.6rem",lineHeight:"0.6rem",width:"100%"}},n),"Block")},c=function(){return a.createElement("div",null,a.createElement(p["default"],{size:"xs"}),a.createElement(o,null),a.createElement(p["default"],{size:"sm"}),a.createElement(o,null),a.createElement(p["default"],null),a.createElement(o,null),a.createElement(p["default"],{size:"lg"}),a.createElement(o,null),a.createElement(p["default"],{size:"xl"}),a.createElement(o,null))};return a.createElement(c,null)}}},705:function(n,a,s){n.exports={basic:s(634)}}});