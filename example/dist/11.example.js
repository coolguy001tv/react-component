webpackJsonp([11],{32:function(e,t,n){var a=React.createClass({displayName:"Example",onClickHandler:function(e){RUI.DialogManager.alert("click:"+e,"提示")},render:function(){return React.createElement("div",{className:"example-button"},React.createElement("h2",{className:"title"},"按钮",React.createElement("span",null,"Button")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement(RUI.Button,{className:"primary"},"主题"),React.createElement(RUI.Button,null,"按钮"),React.createElement(RUI.Button,{onClick:this.onClickHandler},"点击"),React.createElement(RUI.Button,{onClick:this.onClickHandler,disable:!0},"禁用")),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("pre",null,n(71))))}});e.exports=a},71:function(e,t){e.exports='var Example = React.createClass({\n    onClickHandler:function(e) {\n        RUI.DialogManager.alert("click:" + e, "提示");\n    },\n    render:function() {\n        return <div className="example-button">\n            <h2 className="title">按钮<span>Button</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <RUI.Button className="primary">主题</RUI.Button>\n                <RUI.Button>按钮</RUI.Button>\n                <RUI.Button onClick={this.onClickHandler}>点击</RUI.Button>\n                <RUI.Button onClick={this.onClickHandler} disable={true}>禁用</RUI.Button>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <pre>\n                    {require(\'raw!./button.js\')}\n                </pre>\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});