(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,r){},8:function(e,t,r){"use strict";r.r(t);var s=r(3),a=r(4),n=r(6),c=r(5),i=r(1),u=r.n(i),l=r(7),d=r.n(l),j=(r(13),r(0));function h(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var o=function(e){Object(n.a)(r,e);var t=Object(c.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e="Next player: "+(this.state.xIsNext?"X":"O");return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"UPDATED!"}),Object(j.jsx)("p",{children:"UPDATED2!"}),Object(j.jsx)("div",{className:"status",children:e}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(u.a.Component),b=function(e){Object(n.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(o,{})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{}),Object(j.jsx)("ol",{})]})]})}}]),r}(u.a.Component);d.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.5a5d12a4.chunk.js.map