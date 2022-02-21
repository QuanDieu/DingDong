System.register("chunks:///_virtual/playerController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,r,s,p,a,c,l,h,u,d,f,C,y,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.defineProperty,i=t.assertThisInitialized,r=t.initializerDefineProperty},function(t){s=t.cclegacy,p=t._decorator,a=t.Node,c=t.Prefab,l=t.input,h=t.Input,u=t.Collider2D,d=t.Contact2DType,f=t.director,C=t.Vec3,y=t.instantiate,v=t.Component}],execute:function(){var b,m,T,g,k,P,w,_,B;s._RF.push({},"511e3Qa4MhH6bvxKscum7wT","playerController",void 0);var U=p.ccclass,D=p.property;t("playerController",(b=U("playerController"),m=D(a),T=D(a),g=D({type:c}),b((w=e((P=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),p=0;p<n;p++)s[p]=arguments[p];return e=t.call.apply(t,[this].concat(s))||this,o(i(e),"moveUp",void 0),o(i(e),"speed",300),r(i(e),"CheckPoint1",w,i(e)),r(i(e),"CheckPoint2",_,i(e)),r(i(e),"blockPrefab",B,i(e)),e}n(e,t);var s=e.prototype;return s.start=function(){this.moveUp=!1,l.on(h.EventType.TOUCH_START,this.onTouchStart,this),l.on(h.EventType.TOUCH_END,this.onTouchEnd,this)},s.update=function(){var t=this.getComponent(u);t&&t.on(d.BEGIN_CONTACT,this.onBeginContact,this),this.movingControl()},s.onBeginContact=function(t,e,n){e==this.CheckPoint1.getComponent(u)?this.moveUp=!0:e==this.CheckPoint2.getComponent(u)?this.moveUp=!1:f.loadScene("new")},s.movingControl=function(){if(1==this.moveUp){var t=new C(this.node.position.x,this.node.position.y+.05*this.speed,0);this.node.position=t}else{var e=new C(this.node.position.x,this.node.position.y-.05*this.speed,0);this.node.position=e}},s.onTouchStart=function(t){this.speed=150,this.spawnBlock()},s.onTouchEnd=function(t){this.speed=300,this.spawnBlock()},s.spawnBlock=function(){var t=y(this.blockPrefab);t.parent=this.node.parent,t.position=new C(this.node.position.x-600,this.node.position.y,0)},e}(v)).prototype,"CheckPoint1",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=e(P.prototype,"CheckPoint2",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(P.prototype,"blockPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=P))||k));s._RF.pop()}}}));

System.register("chunks:///_virtual/Block.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,r,c,a,s,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,a=t.Node,s=t.Vec3,l=t.Component}],execute:function(){var p,u,f,y,d;r._RF.push({},"5ecf4vJvSxK4b3KWaXTaa2i","Block",void 0);var h=c.ccclass,v=c.property;t("Block",(p=h("Block"),u=v(a),p((d=e((y=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r))||this,i(n(e),"player",d,n(e)),e}o(e,t);var r=e.prototype;return r.start=function(){},r.update=function(t){var e=new s(this.node.position.x+24,this.node.position.y,this.node.position.z);this.node.position=e},e}(l)).prototype,"player",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./playerController.ts","./Block.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});