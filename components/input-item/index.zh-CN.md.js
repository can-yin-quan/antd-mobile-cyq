webpackJsonp([131,163],{506:function(t,d){t.exports={content:["section",["p","\u7528\u4e8e\u63a5\u53d7\u5355\u884c\u6587\u672c\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u652f\u6301\u901a\u8fc7\u952e\u76d8\u6216\u8005\u526a\u5207\u677f\u8f93\u5165\u6587\u672c\u3002"]],["li",["p","\u901a\u8fc7\u5149\u6807\u53ef\u4ee5\u5728\u6c34\u5e73\u65b9\u5411\u8fdb\u884c\u79fb\u52a8\u3002"]],["li",["p","\u5bf9\u7279\u5b9a\u683c\u5f0f\u7684\u6587\u672c\u8fdb\u884c\u5904\u7406\uff0ceg\uff1a\u9690\u85cf\u5bc6\u7801\u3002"]]]],meta:{category:"Components",type:"Data Entry",title:"InputItem",subtitle:"\u6587\u672c\u8f93\u5165",filename:"components/input-item/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","type"],["td","\u94f6\u884c\u5361",["code","bankCard"],",\u624b\u673a\u53f7",["code","phone"],"\uff08\u6b64\u65f6\u6700\u5927\u957f\u5ea6\u56fa\u5b9a\u4e3a11,",["code","maxLength"],"\u8bbe\u7f6e\u65e0\u6548\uff09,\u5bc6\u7801",["code","password"],", \u6570\u5b57",["code","number"],"\uff08\u5c3d\u91cf\u5524\u8d77\u6570\u5b57\u952e\u76d8\uff09"],["td","String"],["td",["code","text"]]],["tr",["td","value"],["td","value \u503c(\u53d7\u63a7\u4e0e\u5426\u53c2\u8003",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html"},"https://facebook.github.io/react/docs/forms.html"],")"],["td","String"],["td","\u65e0"]],["tr",["td","defaultValue"],["td","\u8bbe\u7f6e\u521d\u59cb\u9ed8\u8ba4\u503c"],["td","String"],["td","-"]],["tr",["td","placeholder"],["td","placeholder"],["td","String"],["td","''"]],["tr",["td","editable"],["td","\u662f\u5426\u53ef\u7f16\u8f91"],["td","bool"],["td","true"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","bool"],["td","false"]],["tr",["td","clear"],["td","\u662f\u5426\u5e26\u6e05\u9664\u529f\u80fd(\u4ec5",["code","editable"],"\u4e3a",["code","true"],",",["code","disabled"],"\u4e3a",["code","false"],",",["code","value"],"\u8bbe\u7f6e\u624d\u751f\u6548)"],["td","bool"],["td","false"]],["tr",["td","maxLength"],["td","\u6700\u5927\u957f\u5ea6"],["td","number"],["td","\u65e0"]],["tr",["td","onChange"],["td","change \u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","-"]],["tr",["td","onBlur"],["td","blur \u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","-"]],["tr",["td","onFocus"],["td","focus \u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","-"]],["tr",["td","error"],["td","\u62a5\u9519\u6837\u5f0f"],["td","bool"],["td","false"]],["tr",["td","onErrorClick"],["td","\u70b9\u51fb\u62a5\u9519 icon \u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(e: Object): void"],["td","\u65e0"]],["tr",["td","extra"],["td","\u53f3\u8fb9\u6ce8\u91ca"],["td","string or node"],["td","''"]],["tr",["td","onExtraClick"],["td","extra \u70b9\u51fb\u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(e: Object): void"],["td","\u65e0"]],["tr",["td","labelNumber"],["td","\u5b9a\u5bbd\u679a\u4e3e\u503c\uff1a",["code","num * @input-label-width: 34px"],"\uff0c\u53ef\u7528",["code","2-7"],"\u4e4b\u95f4\u7684\u6570\u5b57\uff0c\u4e00\u822c(\u4e0d\u80fd\u4fdd\u8bc1\u5168\u90e8)\u80fd\u5bf9\u5e94\u663e\u793a\u51fa\u76f8\u5e94\u4e2a\u6570\u7684\u4e2d\u6587\u6587\u5b57(\u4e0d\u8003\u8651\u82f1\u6587\u5b57\u7b26)"],["td","number"],["td",["code","5"]]],["tr",["td","autoFocus"],["td","\u9875\u9762\u521d\u59cb\u5316\u65f6Input\u81ea\u52a8\u83b7\u53d6\u5149\u6807,\u6bcf\u4e2a\u9875\u9762\u53ea\u6709\u4e00\u4e2aInput\u7684autpFocus\u4f1a\u751f\u6548\u3002\uff08\u4e0d\u4fdd\u8bc1\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u751f\u6548\uff09"],["td","bool"],["td","false"]],["tr",["td","focused"],["td","\u9875\u9762\u8fd0\u884c\u8fc7\u7a0b\u4e2d,Input\u83b7\u53d6\u5149\u6807,\u5f53Input\u83b7\u53d6\u5149\u6807\uff08",["code","focused"],"\u66f4\u65b0\u4e3atrue\uff09\u540e\uff0c\u9700\u8981\u5728",["code","onFocus"],"\u6216\u8005",["code","onBlur"],"\u65f6\u518d\u6b21\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3afalse\u3002"],["td","bool"],["td","false"]],["tr",["td","updatePlaceholder (",["code","web only"],")"],["td","\u5f53\u6e05\u9664\u5185\u5bb9\u65f6\uff0c\u662f\u5426\u5c06\u6e05\u9664\u524d\u7684\u5185\u5bb9\u66ff\u6362\u5230 placeholder \u4e2d"],["td","bool"],["td","false"]],["tr",["td","prefixListCls (",["code","web only"],")"],["td","\u5217\u8868 className \u524d\u7f00"],["td","String"],["td",["code","am-list"]]],["tr",["td","name (",["code","web only"],")"],["td","input \u7684 name"],["td","String"],["td","\u65e0"]]]],["blockquote",["p","\u66f4\u591a\u5c5e\u6027\u8bf7\u53c2\u8003 react-native TextInput (",["a",{title:null,href:"http://facebook.github.io/react-native/docs/textinput.html"},"http://facebook.github.io/react-native/docs/textinput.html"],")"]]]}}});