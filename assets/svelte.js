function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}let s;function f(t){s=t}const i=[],l=[],a=[],d=[],p=Promise.resolve();let $=!1;function h(t){a.push(t)}let g=!1;const m=new Set;function b(){if(!g){g=!0;do{for(let t=0;t<i.length;t+=1){const e=i[t];f(e),y(e.$$)}for(f(null),i.length=0;l.length;)l.pop()();for(let t=0;t<a.length;t+=1){const e=a[t];m.has(e)||(m.add(e),e())}a.length=0}while(i.length);for(;d.length;)d.pop()();$=!1,g=!1,m.clear()}}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(h)}}const _=new Set;function x(t,e){-1===t.$$.dirty[0]&&(i.push(t),$||($=!0,p.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function k(c,i,l,a,d,p,$=[-1]){const g=s;f(c);const m=i.props||{},y=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:$,skip_bound:!1};let k=!1;if(y.ctx=l?l(c,m,((t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),k&&x(c,t)),e})):[],y.update(),k=!0,o(y.before_update),y.fragment=!!a&&a(y.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);y.fragment&&y.fragment.l(t),t.forEach(u)}else y.fragment&&y.fragment.c();i.intro&&((v=c.$$.fragment)&&v.i&&(_.delete(v),v.i(w))),function(t,n,c){const{fragment:u,on_mount:s,on_destroy:f,after_update:i}=t.$$;u&&u.m(n,c),h((()=>{const n=s.map(e).filter(r);f?f.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(h)}(c,i.target,i.anchor),b()}var v,w;f(g)}function v(e){let n;return{c(){var t,e,o,r;t="div",n=document.createElement(t),n.textContent="Testing 1 2 3",e=n,o="class",null==(r="test tw-font-bold svelte-9kzpmi")?e.removeAttribute(o):e.getAttribute(o)!==r&&e.setAttribute(o,r)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class w extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),k(this,t,null,v,c,{})}}const E=document.getElementById("header");E&&new w({target:E,hydrate:!1});