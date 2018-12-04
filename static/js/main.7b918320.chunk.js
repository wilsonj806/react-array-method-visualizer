(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"showMapReact",function(){return j}),a.d(r,"showForEach",function(){return O});var n=a(0),c=a.n(n),s=a(10),i=a.n(s),o=a(7),l=a(8),d=a(1),u=a(2),h=a(4),m=a(3),p=a(5),f=a(6),y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return void 0===this.props.children?null:(void 0===this.props.btnType&&(e="btn--std"),c.a.createElement("button",{className:"btn ".concat(this.props.btnType," ").concat(e),onClick:this.props.onClick},this.props.children));var e}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).renderHeading=function(e){switch(e){case 0:return"Initial State";case 1:return"Array.map( )";case 2:return"Array.filter( )";case 3:return"Array.forEach( )";case 4:return"Array.some( )"}},a.handleBtn=function(){0===a.state.arrayInstance.length&&(a.setState({arrayInstance:a.props.arrayData,isclicked:!a.state.isclicked,isRendering:!a.state.isRendering}),console.dir(a.props.showMapReact))},a.renderArray=function(){return a.props.arrayData.length<1&&0===a.props.keyVal?"Please submit values":0===a.props.keyVal||a.props.arrayData.length>0?"[ ".concat(a.props.arrayData," ]"):void 0},a.processArray=function(){if(0!==a.props.keyVal){var e="[ ".concat(a.state.arrayInstance.toString()," ]");return c.a.createElement("p",{className:"card__text"},e)}},a.resetInstanceArray=function(){a.setState({arrayInstance:[]})},a.initialState={arrayInstance:[],isclicked:!1,isRendering:!1},a.state=a.initialState,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){!1===this.state.isclicked||this.setState({isclicked:!1})}},{key:"render",value:function(){var e,t,a=this,r=this.props,n=r.keyVal;return!0!==this.state.isclicked&&!0!==this.state.isRendering||(e=this.processArray(n)),0!==n&&(t=c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{onClick:function(){return a.handleBtn()}},"Begin Computation"),c.a.createElement(y,{btnType:"btn--reset",onClick:function(){return a.resetInstanceArray()}},"Reset"))),c.a.createElement("div",{className:"card ".concat(r.cardType),key:n},c.a.createElement("h2",{className:"card__heading"},this.renderHeading(n)),c.a.createElement("div",{className:"card__content"},c.a.createElement("p",{className:"card__text"},this.renderArray()),e,c.a.createElement("div",{className:"ctr--btn"},t)))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value,r=parseInt(t,10);isNaN(r)||""===t||t.length>4||a.setState({number:r})},a.submitForm=function(){a.props.handleSubmit(a.state.number),a.setState(a.initialState)},a.initialState={number:""},a.state=a.initialState,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ctr--form"},c.a.createElement("form",{id:"form",className:"form"},c.a.createElement("h2",{className:"heading"},"Initialize Array"),c.a.createElement("input",{type:"text",name:"entry",value:e,onChange:this.handleChange}),c.a.createElement("input",{className:"btn btn--std",form:"form",type:"button",value:"Submit",onClick:this.submitForm}),c.a.createElement("button",{className:"btn btn--reset",type:"button",onClick:this.props.resetArrays},"Reset")),this.props.children))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).renderFromState=function(e){var t=a.props,r=t.renderState;!0===r.map&&e.push(t.renderCard(t.numArr[0])),!0===r.filter&&e.push(t.renderCard(t.numArr[1])),!0===r.forEach&&e.push(t.renderCard(t.numArr[2]))},a.intialState={index:0},a.state=a.initialState,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=[];return"ctr--cards"===e.className&&t.push(e.renderCard(0)),this.renderFromState(t),c.a.createElement("div",{className:"ctr--cards"},t)}}]),t}(n.Component),v=(a(16),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).numArr=[1,2,3,4,5,6,7,8],a.handleSubmit=function(e){""!==e&&a.setState({array:Object(l.a)(a.state.array).concat([e])})},a.resetArrays=function(){a.setState({array:[],toRender:Object(o.a)({},a.initialState.toRender)})},a.handleCardAdd=function(e){switch(e){case 1:a.setState({toRender:Object(o.a)({},a.state.toRender,{map:!a.state.toRender.map})});break;case 2:a.setState({toRender:Object(o.a)({},a.state.toRender,{filter:!a.state.toRender.filter})});break;case 3:a.setState({toRender:Object(o.a)({},a.state.toRender,{forEach:!a.state.toRender.forEach})})}},a.handleCardId=function(e){switch(e){case 0:return"card--init";case 1:return"card--map";case 2:return"card--filter";case 3:return"card--forEach";case 4:return"card--some";case 5:return"card--find";case 6:return"card--findIndex"}},a.renderCard=function(e){console.dir(Object(f.a)(Object(f.a)(a)));var t=a.state;return c.a.createElement(b,{key:e,keyVal:e,cardType:a.handleCardId(e),arrayData:t.array,resetState:t.resetNow,onResetClick:function(){return a.resetArray()},showMapReact:a.props.arrMethods.showMapReact})},a.initialState={toRender:{map:!1,filter:!1,forEach:!1,some:!1,sort:!1,find:!1},array:[],resetNow:!1},a.state=a.initialState,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("main",null,c.a.createElement(E,{handleSubmit:this.handleSubmit,resetArrays:this.resetArrays},c.a.createElement("div",{className:"ctr--btn"},c.a.createElement(y,{key:1,onClick:function(){return e.handleCardAdd(1)}},"Array.map( )"),c.a.createElement(y,{key:2,onClick:function(){return e.handleCardAdd(2)}},"Array.filter( )"),c.a.createElement(y,{key:3,onClick:function(){return e.handleCardAdd(3)}},"Array.forEach( )"))),c.a.createElement(k,{numArr:this.numArr,className:"ctr--cards",renderCard:this.renderCard,renderState:this.state.toRender}))}}]),t}(n.Component));function j(e,t,a){var r,n,c;if(console.log("hi"),null===this)throw new TypeError("this is null or not defined");if(!this.state)throw new TypeError("this is not a React component");var s=Object(t),i=s.length>>>0;if("function"!==typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(r=arguments[1]),n=new Array(i),c=0;c<i;){var o,d;c in s&&(o=s[c],d=a.call(r,o,c,s),n[c]=d),c++,this.setState({key:Object(l.a)(n)})}return n}function O(e,t,a){console.log("hi")}i.a.render(c.a.createElement(v,{arrMethods:r}),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.7b918320.chunk.js.map