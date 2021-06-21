(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{435:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"localstorage存储相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage存储相关"}},[t._v("#")]),t._v(" localStorage存储相关")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#r-get"}},[t._v("get")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-del"}},[t._v("set")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("增")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-del"}},[t._v("del")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-setexpired"}},[t._v("setExpired")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置带过期时间的数据")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-getexpired"}},[t._v("getExpired")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取带过期时间的数据")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-clearallexpired"}},[t._v("clearAllExpired")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("清除所有过期时间")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-clearall"}},[t._v("clearAll")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("清空所有内容")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#r-each"}},[t._v("each")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("遍历所有数据")])])])]),t._v(" "),a("h3",{attrs:{id:"r-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-get"}},[t._v("#")]),t._v(" R.get")]),t._v(" "),a("blockquote",[a("p",[t._v("获取储存的值，可批量获取")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t 1. "),a("code",[t._v("value")]),t._v(" {string | array} 存储的key，多条则传递数组")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("any")])]),t._v(" "),a("p",[t._v("​\t单条则返回设置对应的值"),a("code",[t._v("value")]),t._v("，多条返回一个"),a("code",[t._v("object")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.单条获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 张三")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多条获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => {userName: "张三", age: 20, sex: "男"}')]),t._v("\n")])])]),a("h3",{attrs:{id:"r-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-set"}},[t._v("#")]),t._v(" R.set")]),t._v(" "),a("blockquote",[a("p",[t._v("设置存储内容，支持多条写入")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("value1")]),t._v(" {string | object} 存储的key，如果传入"),a("code",[t._v("object")]),t._v("则为多条，请忽略"),a("code",[t._v("value2")]),t._v("参数")]),t._v(" "),a("li",[a("code",[t._v("value2")]),t._v(" {any} 存储的value，如果第一个参数为对象，则该参数不生效setExpired")])]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("void")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.单条写入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhangsan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多条写入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhangsan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  job"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JAVA开发"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-del"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-del"}},[t._v("#")]),t._v(" R.del")]),t._v(" "),a("blockquote",[a("p",[t._v("删除一条或多条数据")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1.  "),a("code",[t._v("value")]),t._v(" {string | array} 删除数据的key，多条则为数组")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("void")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.单条删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.多条删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"job"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-setexpired"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-setexpired"}},[t._v("#")]),t._v(" R.setExpired")]),t._v(" "),a("blockquote",[a("p",[t._v("写入一条带过期时间的数据")])]),t._v(" "),a("p",[a("font",{staticStyle:{"font-weight":"bold"},attrs:{color:"#ff5722"}},[t._v("注意： 如果使用了此方法写入数据，那么获取也得使用 "),a("code",[t._v("getExpire()")]),t._v(" 来获取数据")])],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("value1")]),t._v(" {string} 字段key;")]),t._v(" "),a("li",[a("code",[t._v("value2")]),t._v(" {any} 字段值value")]),t._v(" "),a("li",[a("code",[t._v("value3")]),t._v(" {number} 过期时间，单位: (毫秒)；")])]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("void")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.写入一条带过期时间的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhangsan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3秒后过期")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.获取数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "zhangsan"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.过期后获取数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-getexpired"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-getexpired"}},[t._v("#")]),t._v(" R.getExpired")]),t._v(" "),a("blockquote",[a("p",[t._v("获取一条在有效过期时间内的数据")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t1. "),a("code",[t._v("value")]),t._v(" {string} 字段key")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("any")])]),t._v(" "),a("p",[t._v("​\t如果值过期了则返回 "),a("code",[t._v("false")]),t._v("， 否则返回对应的值"),a("code",[t._v("value")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.写入一条带过期时间的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhangsan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3秒后过期")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1秒后获取值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => zhangsan")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4秒后获取值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-clearallexpired"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-clearallexpired"}},[t._v("#")]),t._v(" R.clearAllExpired")]),t._v(" "),a("blockquote",[a("p",[t._v("清除所有设置过期时间的值")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAllExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t无")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("any")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAllExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空所有设置了过期时间的值")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-clearall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-clearall"}},[t._v("#")]),t._v(" R.clearAll")]),t._v(" "),a("blockquote",[a("p",[t._v("清空所有数据")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("p",[t._v("​\t无")]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("void")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.设置数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "张三"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.清空所有")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => null")]),t._v("\n")])])]),a("h3",{attrs:{id:"r-each"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-each"}},[t._v("#")]),t._v(" R.each")]),t._v(" "),a("blockquote",[a("p",[t._v("遍历所有存储的值")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("value")]),t._v(" {function} 回调函数，形参有"),a("code",[t._v("key")]),t._v(" 、"),a("code",[t._v("value")]),t._v("两个参数")])]),t._v(" "),a("p",[a("strong",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("​\t"),a("code",[t._v("void")])]),t._v(" "),a("p",[a("strong",[t._v("例子：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do sth...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);