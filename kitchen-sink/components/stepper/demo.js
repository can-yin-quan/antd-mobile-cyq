webpackJsonp([36,147],{5:function(n,s,t){"use strict";t(13),t(12)},12:function(n,s){},13:function(n,s){},16:function(n,s,t){"use strict";t(5),t(25)},21:function(n,s){"use strict";s.__esModule=!0,s["default"]=function(n,s){var t={};for(var a in n)s.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}},25:function(n,s){},32:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}s.__esModule=!0;var e=t(120),o=a(e);s["default"]=function(){function n(n,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o["default"])(n,a.key,a)}}return function(s,t,a){return t&&n(s.prototype,t),a&&n(s,a),s}}()},259:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=t(7),o=a(e),p=t(6),u=a(p),c=t(2),i=a(c),l=t(4),r=a(l),d=t(3),f=a(d),k="/Users/lichao/Documents/github/antd-mobile-cyq/components/stepper/index.web.tsx",h=t(1),m=a(h),v=t(8),g=a(v),b=t(300),w=a(b),y=t(23),x=a(y),N=function(n,s){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&s.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,a=Object.getOwnPropertySymbols(n);e<a.length;e++)s.indexOf(a[e])<0&&(t[a[e]]=n[a[e]]);return t},C=function(n){function s(){return(0,i["default"])(this,s),(0,r["default"])(this,n.apply(this,arguments))}return(0,f["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.className,e=s.showNumber,p=N(s,["className","showNumber"]),c=(0,g["default"])((n={},(0,u["default"])(n,a,!!a),(0,u["default"])(n,"showNumber",!!e),n));return m["default"].createElement(w["default"],(0,o["default"])({upHandler:m["default"].createElement(x["default"],{type:t(330),size:"xxs",__source:{fileName:k,lineNumber:21}}),downHandler:m["default"].createElement(x["default"],{type:t(329),size:"xxs",__source:{fileName:k,lineNumber:21}})},p,{ref:"inputNumber",className:c,__source:{fileName:k,lineNumber:21}}))},s}(m["default"].Component);s["default"]=C,C.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1,useTouch:!0},n.exports=s["default"]},260:function(n,s,t){"use strict";t(5),t(292)},292:function(n,s){},299:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=t(21),o=a(e),p=t(2),u=a(p),c=t(32),i=a(c),l=t(4),r=a(l),d=t(3),f=a(d),k=t(1),h=a(k),m=t(11),v=a(m),g=t(39),b=a(g),w=function(n){function s(){return(0,u["default"])(this,s),(0,r["default"])(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return(0,f["default"])(s,n),(0,i["default"])(s,[{key:"render",value:function(){var n=this.props,s=n.prefixCls,t=n.disabled,a=(0,o["default"])(n,["prefixCls","disabled"]);return h["default"].createElement(b["default"],{disabled:t,activeClassName:s+"-handler-active"},h["default"].createElement("span",a))}}]),s}(k.Component);w.propTypes={prefixCls:v["default"].string,disabled:v["default"].bool},s["default"]=w,n.exports=s["default"]},300:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(){}function o(n){n.preventDefault()}Object.defineProperty(s,"__esModule",{value:!0});var p=t(6),u=a(p),c=t(7),i=a(c),l=t(1),r=a(l),d=t(11),f=a(d),k=t(34),h=a(k),m=t(8),v=a(m),g=t(301),b=a(g),w=t(299),y=a(w),x=(0,h["default"])({propTypes:{focusOnUpDown:f["default"].bool,onChange:f["default"].func,onKeyDown:f["default"].func,onKeyUp:f["default"].func,prefixCls:f["default"].string,disabled:f["default"].bool,onFocus:f["default"].func,onBlur:f["default"].func,readOnly:f["default"].bool,max:f["default"].number,min:f["default"].number,step:f["default"].oneOfType([f["default"].number,f["default"].string]),upHandler:f["default"].node,downHandler:f["default"].node,useTouch:f["default"].bool,formatter:f["default"].func,parser:f["default"].func,onMouseEnter:f["default"].func,onMouseLeave:f["default"].func,onMouseOver:f["default"].func,onMouseOut:f["default"].func},mixins:[b["default"]],getDefaultProps:function(){return{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentWillUpdate:function(){try{this.start=this.refs.input.selectionStart,this.end=this.refs.input.selectionEnd}catch(n){}},componentDidUpdate:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.refs.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.refs.input.setSelectionRange(this.start,this.end):this.focus()}},onKeyDown:function N(n){if(38===n.keyCode){var s=this.getRatio(n);this.up(n,s),this.stop()}else if(40===n.keyCode){var t=this.getRatio(n);this.down(n,t),this.stop()}var N=this.props.onKeyDown;if(N){for(var a=arguments.length,e=Array(a>1?a-1:0),o=1;o<a;o++)e[o-1]=arguments[o];N.apply(void 0,[n].concat(e))}},onKeyUp:function C(n){this.stop();var C=this.props.onKeyUp;if(C){for(var s=arguments.length,t=Array(s>1?s-1:0),a=1;a<s;a++)t[a-1]=arguments[a];C.apply(void 0,[n].concat(t))}},getRatio:function(n){var s=1;return n.metaKey||n.ctrlKey?s=.1:n.shiftKey&&(s=10),s},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},formatWrapper:function(n){return this.props.formatter?this.props.formatter(n):n},render:function(){var n,s=(0,i["default"])({},this.props),t=s.prefixCls,a=s.disabled,p=s.readOnly,c=s.useTouch,l=(0,v["default"])((n={},(0,u["default"])(n,t,!0),(0,u["default"])(n,s.className,!!s.className),(0,u["default"])(n,t+"-disabled",a),(0,u["default"])(n,t+"-focused",this.state.focused),n)),d="",f="",k=this.state.value;if(k)if(isNaN(k))d=t+"-handler-up-disabled",f=t+"-handler-down-disabled";else{var h=Number(k);h>=s.max&&(d=t+"-handler-up-disabled"),h<=s.min&&(f=t+"-handler-down-disabled")}var m=!s.readOnly&&!s.disabled,g=void 0;g=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value),void 0!==g&&null!==g||(g="");var b=void 0,w=void 0;c?(b={onTouchStart:m&&!d?this.up:e,onTouchEnd:this.stop},w={onTouchStart:m&&!f?this.down:e,onTouchEnd:this.stop}):(b={onMouseDown:m&&!d?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop},w={onMouseDown:m&&!f?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop});var x=this.formatWrapper(g),N=!!d||a||p,C=!!f||a||p;return r["default"].createElement("div",{className:l,style:s.style,onMouseEnter:s.onMouseEnter,onMouseLeave:s.onMouseLeave,onMouseOver:s.onMouseOver,onMouseOut:s.onMouseOut},r["default"].createElement("div",{className:t+"-handler-wrap"},r["default"].createElement(y["default"],(0,i["default"])({ref:"up",disabled:N,prefixCls:t,unselectable:"unselectable"},b,{role:"button","aria-label":"Increase Value","aria-disabled":!!N,className:t+"-handler "+t+"-handler-up "+d}),this.props.upHandler||r["default"].createElement("span",{unselectable:"unselectable",className:t+"-handler-up-inner",onClick:o})),r["default"].createElement(y["default"],(0,i["default"])({ref:"down",disabled:C,prefixCls:t,unselectable:"unselectable"},w,{role:"button","aria-label":"Decrease Value","aria-disabled":!!C,className:t+"-handler "+t+"-handler-down "+f}),this.props.downHandler||r["default"].createElement("span",{unselectable:"unselectable",className:t+"-handler-down-inner",onClick:o}))),r["default"].createElement("div",{className:t+"-input-wrap",role:"spinbutton","aria-valuemin":s.min,"aria-valuemax":s.max,"aria-valuenow":k},r["default"].createElement("input",{type:s.type,placeholder:s.placeholder,onClick:s.onClick,className:t+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:m?this.onKeyDown:e,onKeyUp:m?this.onKeyUp:e,autoFocus:s.autoFocus,maxLength:s.maxLength,readOnly:s.readOnly,disabled:s.disabled,max:s.max,min:s.min,name:s.name,onChange:this.onChange,ref:"input",value:x})))}});s["default"]=x,n.exports=s["default"]},301:function(n,s){"use strict";function t(){}function a(n){return n.replace(/[^\w\.-]+/g,"")}Object.defineProperty(s,"__esModule",{value:!0});var e=200,o=600;s["default"]={getDefaultProps:function(){return{max:1/0,min:-(1/0),step:1,style:{},onChange:t,onKeyDown:t,onFocus:t,onBlur:t,parser:a}},getInitialState:function(){var n=void 0,s=this.props;return n="value"in s?s.value:s.defaultValue,n=this.toNumber(n),{inputValue:this.toPrecisionAsStep(n),value:n,focused:s.autoFocus}},componentWillReceiveProps:function(n){"value"in n&&this.setState({inputValue:n.value,value:n.value})},componentWillUnmount:function(){this.stop()},onChange:function(n){var s=this.props.parser(this.getValueFromEvent(n).trim());this.setState({inputValue:s}),this.props.onChange(this.toNumberWhenUserInput(s))},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){for(var s=this,t=arguments.length,a=Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];this.setState({focused:!1});var o=this.getCurrentValidValue(this.state.inputValue);n.persist(),this.setValue(o,function(){var t;(t=s.props).onBlur.apply(t,[n].concat(a))})},getCurrentValidValue:function(n){var s=n,t=this.props;return""===s?s="":this.isNotCompleteNumber(s)?s=this.state.value:(s=Number(s),s<t.min&&(s=t.min),s>t.max&&(s=t.max)),this.toNumber(s)},setValue:function(n,s){var t=this.isNotCompleteNumber(parseFloat(n,10))?void 0:parseFloat(n,10),a=t!==this.state.value;"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},s):this.setState({value:t,inputValue:this.toPrecisionAsStep(n)},s),a&&this.props.onChange(t)},getPrecision:function(n){var s=n.toString();if(s.indexOf("e-")>=0)return parseInt(s.slice(s.indexOf("e-")+2),10);var t=0;return s.indexOf(".")>=0&&(t=s.length-s.indexOf(".")-1),t},getMaxPrecision:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=this.props.step,a=this.getPrecision(s),e=this.getPrecision(t),o=this.getPrecision(n);return n?Math.max(o,a+e):a+e},getPrecisionFactor:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=this.getMaxPrecision(n,s);return Math.pow(10,t)},toPrecisionAsStep:function(n){if(this.isNotCompleteNumber(n)||""===n)return n;var s=Math.abs(this.getMaxPrecision(n));return s?Number(n).toFixed(s):n.toString()},isNotCompleteNumber:function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},toNumber:function(n){return this.isNotCompleteNumber(n)?n:Number(n)},toNumberWhenUserInput:function(n){return(/\.\d*0$/.test(n)||n.length>16)&&this.state.focused?n:this.toNumber(n)},upStep:function(n,s){var t=this.props,a=t.step,e=t.min,o=this.getPrecisionFactor(n,s),p=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((o*n+o*a*s)/o).toFixed(p):e===-(1/0)?a:e,this.toNumber(u)},downStep:function(n,s){var t=this.props,a=t.step,e=t.min,o=this.getPrecisionFactor(n,s),p=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((o*n-o*a*s)/o).toFixed(p):e===-(1/0)?-a:e,this.toNumber(u)},step:function(n,s){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;s&&s.preventDefault();var a=this.props;if(!a.disabled){var e=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(e)){var o=this[n+"Step"](e,t);o>a.max?o=a.max:o<a.min&&(o=a.min),this.setValue(o),this.setState({focused:!0})}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,s,t){var a=this;n.persist&&n.persist(),this.stop(),this.step("down",n,s),this.autoStepTimer=setTimeout(function(){a.down(n,s,!0)},t?e:o)},up:function(n,s,t){var a=this;n.persist&&n.persist(),this.stop(),this.step("up",n,s),this.autoStepTimer=setTimeout(function(){a.up(n,s,!0)},t?e:o)}},n.exports=s["default"]},329:function(n,s,t){var a=t(17),e='<symbol viewBox="0 0 30 2" id="minus" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>Rectangle</title> <desc>Created with Sketch.</desc> <defs/> <g id="minus_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect id="minus_Rectangle" fill="#000000" x="0" y="0" width="30" height="2"/> </g> </symbol>';n.exports=a.add(e,"minus")},330:function(n,s,t){var a=t(17),e='<symbol viewBox="0 0 30 30" id="plus" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>Combined Shape</title> <desc>Created with Sketch.</desc> <defs/> <g id="plus_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14,14 L0,14 L0,16 L14,16 L14,30 L16,30 L16,16 L30,16 L30,14 L16,14 L16,-1.77635684e-15 L14,-2.14375088e-15 L14,14 Z" id="plus_Combined-Shape" fill="#000000"/> </g> </symbol>';n.exports=a.add(e,"plus")},598:function(n,s,t){n.exports={content:[["p","\u6570\u5b57\u8f93\u5165\u6846\u3002"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u6f14\u793a\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        <span class="token function">\u663e\u793a\u6570\u503c</span><span class="token punctuation">(</span>\u9ed8\u8ba4\u4f7f\u7528 TouchEvent<span class="token punctuation">,</span> <span class="token keyword">for</span> Mobile<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val1<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">useTouch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        <span class="token function">\u663e\u793a\u6570\u503c</span><span class="token punctuation">(</span>\u4f7f\u7528 MouseEvent<span class="token punctuation">,</span> <span class="token keyword">for</span> PC<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        \u7981\u7528\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var t=Object.getOwnPropertyNames(s),a=0;a<t.length;a++){var e=t[a],o=Object.getOwnPropertyDescriptor(s,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function a(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):s(n,t))}var p=t(1),u=(t(9),t(16),t(31)),c=n(u),i=(t(260),t(259)),l=n(i),r=function(n){function s(t){a(this,s);var o=e(this,n.call(this,t));return o.onChange=function(n){o.setState({val:n})},o.onChange1=function(n){o.setState({val1:n})},o.state={val:3,val1:2},o}return o(s,n),s.prototype.render=function(){return p.createElement(c["default"],{renderHeader:function(){return"\u6f14\u793a"}},p.createElement(c["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange}),wrap:!0},"\u663e\u793a\u6570\u503c(\u9ed8\u8ba4\u4f7f\u7528 TouchEvent, for Mobile)"),p.createElement(c["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val1,onChange:this.onChange1,useTouch:!1}),wrap:!0},"\u663e\u793a\u6570\u503c(\u4f7f\u7528 MouseEvent, for PC)"),p.createElement(c["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"\u7981\u7528"))},s}(p.Component);return p.createElement(r,null)}}},694:function(n,s,t){n.exports={basic:t(598)}}});