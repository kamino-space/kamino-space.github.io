(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{JsxW:function(t,i,a){},W9wB:function(t,i,a){},ZdLS:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"bangumi"},[a("ModuleTemplate",{attrs:{title:"Bangumi",subTitle:"共计追番: "+t.data.count+" 部  数据来自 Bilibili",url:"https://space.bilibili.com/"+t.mikuConfig.bilibiliId,loading:t.loading}},[t.loading?a("ul",{staticClass:"bangumi-list",attrs:{slot:"body"},slot:"body"},t._l(t.data.result,function(i,e){return a("li",{key:e},[a("a",{attrs:{href:i.share_url,target:"_blank"}},[a("img",{staticClass:"cover",attrs:{src:t.mikuConfig.bilibiliProxy.replace(/{url}/,i.cover),title:i.title}})]),a("div",{staticClass:"info"})])})):t._e()])],1)},l=[],s=(a("VRzm"),a("bwKy")),n={data:function(){return{data:{},loading:!1}},mounted:function(){var t=this,i=this.$store.get("miku_bangumi");i?(this.data=i,this.loading=!0):this.$http.get("https://https://api.isdut.cn/proxy/cn?url=http://space.bilibili.com/ajax/Bangumi/getList?page=1&pagesize=100&mid="+this.mikuConfig.bilibiliId).then(function(i){console.log(i.data.data),t.data=i.data.data,t.$store.set("miku_bangumi",t.data,(new Date).getTime()+864e5),t.loading=!0}).catch(function(t){alert("获取数据失败: "+t)})},components:{ModuleTemplate:s["a"]}},r=n,o=(a("ncZn"),a("KHd+")),u=Object(o["a"])(r,e,l,!1,null,"152ddbe0",null);i["default"]=u.exports},bwKy:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"title"},[a("div",{staticClass:"l"},[t._v(t._s(t.title)+" "),a("a",{attrs:{href:t.url}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":"1950","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("path",{attrs:{d:"M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z",fill:"","p-id":"1951"}})])])]),a("div",{staticClass:"r"},[t._v(t._s(t.subTitle))])]),t.loading?t._e():a("vue-loading",{staticClass:"loading",attrs:{type:"spiningDubbles",color:"#38b7ea",size:{width:"50px",height:"50px"}}}),t._t("body")],2)},l=[],s={props:{title:{default:"暂无数据",required:!1,type:String},subTitle:{default:"暂无数据",required:!1,type:String},url:{default:"",required:!1,type:String},loading:{default:!1,required:!1,type:Boolean}}},n=s,r=(a("op6Z"),a("KHd+")),o=Object(r["a"])(n,e,l,!1,null,"02ea16a4",null);i["a"]=o.exports},ncZn:function(t,i,a){"use strict";var e=a("W9wB"),l=a.n(e);l.a},op6Z:function(t,i,a){"use strict";var e=a("JsxW"),l=a.n(e);l.a}}]);
//# sourceMappingURL=4.2ddb88a8.js.map