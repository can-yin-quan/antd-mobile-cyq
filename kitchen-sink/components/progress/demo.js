webpackJsonp([40,147],{5:function(n,s,a){"use strict";a(13),a(12)},12:function(n,s){},13:function(n,s){},15:function(n,s,a){"use strict";a(20)},20:function(n,s){},29:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function e(n){return p(n.type)&&E(n.props.children)?y["default"].cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(E(n)&&(n=n.split("").join(" ")),y["default"].createElement("span",{__source:{fileName:g,lineNumber:28}},n)):n}Object.defineProperty(s,"__esModule",{value:!0});var o=a(7),c=t(o),l=a(6),u=t(l),i=a(2),r=t(i),k=a(4),d=t(k),f=a(3),m=t(f),g="/Users/lichao/Documents/github/antd-mobile-cyq/components/button/index.web.tsx",h=a(1),y=t(h),b=a(8),v=t(b),w=a(23),N=t(w),x=a(39),_=t(x),j=function(n,s){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&s.indexOf(t)<0&&(a[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var p=0,t=Object.getOwnPropertySymbols(n);p<t.length;p++)s.indexOf(t[p])<0&&(a[t[p]]=n[t[p]]);return a},O=/^[\u4e00-\u9fa5]{2}$/,E=O.test.bind(O),C=function(n){function s(){return(0,r["default"])(this,s),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.children,t=s.className,p=s.prefixCls,o=s.type,l=s.size,i=s.inline,r=s.across,k=s.disabled,d=s.icon,f=s.loading,m=s.activeStyle,h=s.onClick,b=j(s,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick"]),w=(n={},(0,u["default"])(n,t,t),(0,u["default"])(n,p,!0),(0,u["default"])(n,p+"-primary","primary"===o),(0,u["default"])(n,p+"-ghost","ghost"===o),(0,u["default"])(n,p+"-warning","warning"===o),(0,u["default"])(n,p+"-small","small"===l),(0,u["default"])(n,p+"-inline",i),(0,u["default"])(n,p+"-across",r),(0,u["default"])(n,p+"-disabled",k),(0,u["default"])(n,p+"-loading",f),n),x=f?"loading":d,O=y["default"].Children.map(a,e);return x&&(w[p+"-icon"]=!0),y["default"].createElement(_["default"],{activeClassName:m?p+"-active":void 0,disabled:k,activeStyle:m,__source:{fileName:g,lineNumber:53}},y["default"].createElement("a",(0,c["default"])({role:"button",className:(0,v["default"])(w)},b,{onClick:k?void 0:h,__source:{fileName:g,lineNumber:54}}),x?y["default"].createElement(N["default"],{type:x,size:"small"===l?"xxs":"md",__source:{fileName:g,lineNumber:55}}):null,O))},s}(y["default"].Component);C.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},s["default"]=C,n.exports=s["default"]},30:function(n,s,a){"use strict";a(5),a(15),a(38)},38:function(n,s){},417:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var p=a(6),e=t(p),o=a(2),c=t(o),l=a(4),u=t(l),i=a(3),r=t(i),k="/Users/lichao/Documents/github/antd-mobile-cyq/components/progress/index.web.tsx",d=a(1),f=t(d),m=a(8),g=t(m),h=a(22),y=t(h),b=function(n){function s(){return(0,c["default"])(this,s),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(s,n),s.prototype.componentWillReceiveProps=function(){this.noAppearTransition=!0},s.prototype.componentDidMount=function(){var n=this;this.props.appearTransition&&setTimeout(function(){n.refs.bar.style.width=n.props.percent+"%"},10)},s.prototype.render=function(){var n,s=this.props,a=s.className,t=s.prefixCls,p=s.position,o=s.unfilled,c=s.style,l=void 0===c?{}:c,u={width:this.noAppearTransition||!this.props.appearTransition?this.props.percent+"%":0,height:0},i=(0,g["default"])((n={},(0,e["default"])(n,a,a),(0,e["default"])(n,t+"-outer",!0),(0,e["default"])(n,t+"-fixed-outer","fixed"===p),(0,e["default"])(n,t+"-hide-outer","hide"===o),n));return f["default"].createElement("div",{className:i,__source:{fileName:k,lineNumber:27}},f["default"].createElement("div",{ref:"bar",className:t+"-bar",style:(0,y["default"])({},l,u),__source:{fileName:k,lineNumber:28}}))},s}(f["default"].Component);s["default"]=b,b.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:"show",appearTransition:!1},n.exports=s["default"]},418:function(n,s,a){"use strict";a(5),a(769)},569:function(n,s,a){n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Progress<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyProgress</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    percent<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> percent<span class="token punctuation">:</span> p <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> percent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token attr-name">unfilled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hide<span class="token punctuation">"</span></span> <span class="token attr-name">appearTransition</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token operator">%</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token punctuation">)</span><span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyProgress</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],e=Object.getOwnPropertyDescriptor(s,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function e(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var o=a(1),c=(a(9),a(30),a(29)),l=n(c),u=(a(418),a(417)),i=n(u),r=function(n){function s(){var a,e,o;t(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=e=p(this,n.call.apply(n,[this].concat(l))),e.state={percent:50},e.add=function(){var n=e.state.percent+10;e.state.percent>=100&&(n=0),e.setState({percent:n})},o=a,p(e,o)}return e(s,n),s.prototype.render=function(){var n=this.state.percent;return o.createElement("div",{className:"progress-container"},o.createElement(i["default"],{percent:30,position:"fixed"}),o.createElement("div",{style:{height:36}}),o.createElement(i["default"],{percent:40,position:"normal",unfilled:"hide",appearTransition:!0}),o.createElement("div",{className:"show-info"},o.createElement("div",{className:"progress"},o.createElement(i["default"],{percent:n,position:"normal"})),o.createElement("div",null,n,"%")),o.createElement(l["default"],{inline:!0,style:{marginTop:20},onClick:this.add},"(+-)10"))},s}(o.Component);return o.createElement(r,null)},style:".show-info {\n  margin-top: 0.36rem;\n  display: flex;\n  align-items: center;\n}\n.show-info .progress {\n  margin-right: 0.1rem;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.show-info</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">0.36</span>rem<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.show-info</span> <span class="token class">.progress</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0.1</span>rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},685:function(n,s,a){n.exports={basic:a(569)}},769:function(n,s){}});