(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logoDiscover.679a5cc1.svg"},,,function(e,t,a){e.exports=a.p+"static/media/LogoAmericanExpress.9a21cee9.svg"},function(e,t,a){e.exports=a.p+"static/media/logoVisa.bc40cc4c.svg"},function(e,t,a){e.exports=a.p+"static/media/logoMasterCard.7565fd91.svg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),i=a.n(o),l=(a(17),a(18),a(19),a(20),a(1)),r=a(2),s=a(4),m=a(3),u=a(5),v=a(6),p=a.n(v),h=a(9),d=a.n(h),g=a(10),E=a.n(g),f=a(11),b=a.n(f),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.focos.foco_numero_t?"seleccionado":"",t=this.props.focos.foco_titular_t?"contName seleccionado":"contName",a=this.props.focos.foco_vencimiento_t?"contDate seleccionado":"contDate",n=this.props.focos.foco_cvc_t?"flip desac vuelta":"flip desac",o=p.a,i=String(this.props.numero_tarjeta);if(i.length>0)switch(i.substring(0,1)){case"3":o=d.a;break;case"4":o=E.a;break;case"5":var l=i.substr(0,2);o="51"===l||"52"===l||"53"===l||"54"===l?b.a:p.a;break;default:o=p.a}return c.a.createElement("div",{className:n,id:"contenedor"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"tRight"},c.a.createElement("img",{src:o,className:"logo",id:"logo",alt:"logo"})),c.a.createElement("div",{className:"divCol8 contTarjeta"},c.a.createElement("div",{className:"col8"},c.a.createElement("input",{type:"text",id:"noTarjeta1",name:"noTarjeta1",className:e,value:this.props.numero_tarjeta,readOnly:!0})),c.a.createElement("div",{className:"col8"},"\xa0"),c.a.createElement("div",{className:"col6"},c.a.createElement("div",{id:"contName",className:t},"Card Holder",c.a.createElement("br",null),c.a.createElement("input",{type:"text",id:"txtNombre1",value:this.props.titular,readOnly:!0}))),c.a.createElement("div",{className:"col2"},c.a.createElement("div",{className:a,id:"contDate"},"Expires",c.a.createElement("div",{className:"divFecha"},c.a.createElement("div",null,c.a.createElement("input",{type:"text",id:"fechaMes1",value:this.props.vencimiento.mes,readOnly:!0})),c.a.createElement("div",null,c.a.createElement("input",{type:"text",id:"fechaYear1",value:this.props.vencimiento.anio,readOnly:!0}))))))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"contTarjetaBack"},c.a.createElement("div",null,"CVC",c.a.createElement("input",{type:"text",id:"noCVC1",value:this.props.numero_cvc,readOnly:!0})),c.a.createElement("div",null,c.a.createElement("img",{src:p.a,className:"logoBack",alt:"logo discover"})))))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={numero_tarjeta:"",titular:"",vencimiento:{mes:"MM",anio:"YY"},numero_cvc:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onFocus",value:function(e){this.props.pageCallBackFocusF(e.target.id)}},{key:"handleChange",value:function(e){switch(e.target.id){case"noTarjeta":this.setState({numero_tarjeta:e.target.value}),this.props.pageCallBackNumeroT(e.target.value);break;case"txtNombre":this.setState({titular:e.target.value}),this.props.pageCallBackTitularT(e.target.value);break;case"fechaMes":this.setState({vencimiento:{mes:e.target.value,anio:this.state.vencimiento.anio}}),this.props.pageCallBackVencimientoT({mes:e.target.value,anio:this.state.vencimiento.anio});break;case"fechaYear":this.setState({vencimiento:{mes:this.state.vencimiento.mes,anio:e.target.value}}),this.props.pageCallBackVencimientoT({mes:this.state.vencimiento.mes,anio:e.target.value});break;case"noCVC":this.setState({numero_cvc:e.target.value}),this.props.pageCallBackCvcT(e.target.value)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"formularios"},c.a.createElement("div",{className:"divCol"},c.a.createElement("div",{className:"col12"},"Card Number",c.a.createElement("br",null),c.a.createElement("input",{type:"number",id:"noTarjeta",value:this.state.numero_tarjeta,onChange:this.handleChange.bind(this),onFocus:this.onFocus.bind(this),onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,16)}})),c.a.createElement("div",{className:"col12"},"Card Name",c.a.createElement("br",null),c.a.createElement("input",{type:"text",id:"txtNombre",name:"txtNombre",value:this.state.titular,onChange:this.handleChange.bind(this),onFocus:this.onFocus.bind(this)})),c.a.createElement("div",{className:"col4"},"Expiration Date",c.a.createElement("br",null),c.a.createElement("select",{id:"fechaMes",value:this.state.vencimiento.mes,onChange:this.handleChange.bind(this),onFocus:this.onFocus.bind(this)},c.a.createElement("option",{value:"MM"},"Month"),c.a.createElement("option",{value:"01"},"01"),c.a.createElement("option",{value:"02"},"02"),c.a.createElement("option",{value:"03"},"03"),c.a.createElement("option",{value:"04"},"04"),c.a.createElement("option",{value:"05"},"05"),c.a.createElement("option",{value:"06"},"06"),c.a.createElement("option",{value:"07"},"07"),c.a.createElement("option",{value:"08"},"08"),c.a.createElement("option",{value:"09"},"09"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"11"},"11"),c.a.createElement("option",{value:"12"},"12"))),c.a.createElement("div",{className:"col4"},"\xa0",c.a.createElement("br",null),c.a.createElement("select",{id:"fechaYear",value:this.state.vencimiento.anio,onChange:this.handleChange.bind(this),onFocus:this.onFocus.bind(this)},c.a.createElement("option",{value:"YY"},"Year"),c.a.createElement("option",{value:"19"},"2019"),c.a.createElement("option",{value:"20"},"2020"),c.a.createElement("option",{value:"21"},"2021"),c.a.createElement("option",{value:"22"},"2022"))),c.a.createElement("div",{className:"col4"},"CVC",c.a.createElement("br",null),c.a.createElement("input",{type:"number",id:"noCVC",value:this.state.numero_cvc,onChange:this.handleChange.bind(this),onFocus:this.onFocus.bind(this),onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,3)}}))),c.a.createElement("div",null,c.a.createElement("input",{type:"submit",className:"btn",value:"Submit"})))}}]),t}(c.a.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).callBackNumeroT=function(e){var t=e.length,n=e+a.state.formato_tarjeta.substring(t);n=n.substring(0,4)+"  "+n.substring(4,8).toString().replace(/\d(?=\d{0})/g,"*")+"   "+n.substring(8,12).toString().replace(/\d(?=\d{0})/g,"*")+"  "+n.substring(12,16),a.setState({numero_tarjeta:n})},a.callBackTitularT=function(e){a.setState({titular:e})},a.callBackVencimientoT=function(e){a.setState({vencimiento:e})},a.callBackCvcT=function(e){a.setState({numero_cvc:e})},a.CallBackFocusF=function(e){var t=!1,n=!1,c=!1,o=!1;switch(e){case"noTarjeta":t=!0;break;case"txtNombre":n=!0;break;case"fechaMes":case"fechaYear":c=!0;break;case"noCVC":o=!0}a.setState({focos:{foco_numero_t:t,foco_titular_t:n,foco_vencimiento_t:c,foco_cvc_t:o}})},a.state={formato_tarjeta:"################",numero_tarjeta:"#### #### #### ####",titular:"AD SOYAD",vencimiento:{mes:"MM",anio:"YY"},numero_cvc:"",focos:{foco_numero_t:!1,foco_titular_t:!1,foco_vencimiento_t:!1,foco_cvc_t:!1}},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"page"},c.a.createElement(C,{numero_tarjeta:this.state.numero_tarjeta,titular:this.state.titular,vencimiento:this.state.vencimiento,numero_cvc:this.state.numero_cvc,focos:this.state.focos}),c.a.createElement(k,{pageCallBackNumeroT:this.callBackNumeroT,pageCallBackTitularT:this.callBackTitularT,pageCallBackVencimientoT:this.callBackVencimientoT,pageCallBackCvcT:this.callBackCvcT,pageCallBackFocusF:this.CallBackFocusF}))}}]),t}(c.a.Component);var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(_,null))};a(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.b53a56e2.chunk.js.map