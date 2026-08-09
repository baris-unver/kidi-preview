var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i=1e3,a=1001,o=1002,s=1003,c=1004,l=1005,u=1006,d=1007,f=1008,p=1009,m=1010,h=1011,g=1012,_=1013,v=1014,y=1015,b=1016,x=1017,S=1018,C=1020,w=35902,T=35899,E=1021,D=1022,O=1023,k=1026,ee=1027,te=1028,ne=1029,A=1030,re=1031,ie=1033,j=33776,ae=33777,oe=33778,se=33779,ce=35840,le=35841,ue=35842,de=35843,M=36196,fe=37492,pe=37496,me=37488,he=37489,ge=37490,_e=37491,ve=37808,ye=37809,be=37810,xe=37811,Se=37812,Ce=37813,we=37814,Te=37815,Ee=37816,De=37817,Oe=37818,ke=37819,Ae=37820,je=37821,Me=36492,Ne=36494,Pe=36495,Fe=36283,N=36284,Ie=36285,Le=36286,Re=2300,P=2301,ze=2302,F=2303,I=2400,Be=2401,Ve=2402,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,L(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=1234567,lt=Math.PI/180,ut=180/Math.PI;function dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(ct=e);let t=ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*lt}function Tt(e){return e*ut}function Et(e){return!(e&e-1)&&e!==0}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:lt,RAD2DEG:ut,generateUUID:dt,clamp:z,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new V,Ft=new Nt,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new H,Lt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return rt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return rt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Qe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new V,Xt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=a,i=a,o=u,s=f,c=O,l=p,d=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=dt(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case i:e.x-=Math.floor(e.x);break;case a:e.x=e.x<0?0:1;break;case o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case i:e.y-=Math.floor(e.y);break;case a:e.y=e.y<0?0:1;break;case o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:u,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:u,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*k+c*A,i[4]=a*S+o*E+s*ee+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*k+f*A,i[5]=l*S+u*E+d*ee+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*k+g*A,i[6]=p*S+m*E+h*ee+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*k+b*A,i[7]=_*S+v*E+y*ee+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/k;return e[0]=(o*O-s*D+c*E)*ee,e[1]=(r*D-n*O-i*E)*ee,e[2]=(m*S-h*x+g*b)*ee,e[3]=(d*x-u*S-f*b)*ee,e[4]=(s*T-a*O-c*w)*ee,e[5]=(t*O-r*T+i*w)*ee,e[6]=(h*y-p*S-g*v)*ee,e[7]=(l*S-d*y+f*v)*ee,e[8]=(a*D-o*T+c*C)*ee,e[9]=(n*T-t*D-i*C)*ee,e[10]=(p*x-m*y+g*_)*ee,e[11]=(u*y-l*x-f*_)*ee,e[12]=(o*w-a*E-s*C)*ee,e[13]=(t*E-n*w+r*C)*ee,e[14]=(m*v-p*b-h*_)*ee,e[15]=(l*b-u*v+d*_)*ee,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new V,an=new nn,on=new V(0,0,0),sn=new V(1,1,1),cn=new V,ln=new V,un=new V,dn=new nn,fn=new Nt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},hn=0,gn=new V,_n=new Nt,vn=new nn,yn=new V,bn=new V,xn=new V,Sn=new Nt,Cn=new V(1,0,0),wn=new V(0,1,0),Tn=new V(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new pn,r=new Nt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new H}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};An.DEFAULT_UP=new V(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ft(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=Nn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Bt.workingToColorSpace(Ln.copy(this),e),Math.round(z(Ln.r*255,0,255))*65536+Math.round(z(Ln.g*255,0,255))*256+Math.round(z(Ln.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ue){Bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=ht(Pn.h,Fn.h,t),r=ht(Pn.s,Fn.s,t),i=ht(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new W;W.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V,Yn=new V,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new V,new V,new V,new V,new V,new V,new V,new V],nr=new V,rr=new er,ir=new V,ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,fr=new V,pr=new V;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new V,gr=new B,_r=0,vr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=y,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new V,wr=new V,Tr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new nn,Or=new An,kr=new V,Ar=new er,jr=new er,Mr=new V,Nr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=0,Fr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ir=new V,Lr=new V,Rr=new V,zr=new V,Br=new V,Vr=new V,Hr=new V,Ur=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lr.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Lr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=zr.dot(this.direction),s=-zr.dot(Rr),c=zr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lr).addScaledVector(Rr,d),f}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);let n=Ir.dot(this.direction),r=Ir.dot(Ir)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,n,r,i){Br.subVectors(t,e),Vr.subVectors(n,e),Hr.crossVectors(Br,Vr);let a=this.direction.dot(Hr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zr.subVectors(this.origin,e);let s=o*this.direction.dot(Vr.crossVectors(zr,Vr));if(s<0)return null;let c=o*this.direction.dot(Br.cross(zr));if(c<0||s+c>a)return null;let l=-o*zr.dot(Hr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gr=new nn,Kr=new Ur,qr=new Tr,Jr=new V,Yr=new V,Xr=new V,Zr=new V,Qr=new V,$r=new V,ei=new V,ti=new V,ni=class extends An{constructor(e=new Nr,t=new Wr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$r.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qr.fromBufferAttribute(s,e),a?$r.addScaledVector(Qr,r):$r.addScaledVector(Qr.sub(t),r))}t.add($r)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),Kr.copy(e.ray).recast(e.near),!(qr.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(qr,Jr)===null||Kr.origin.distanceToSquared(Jr)>(e.far-e.near)**2))&&(Gr.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Gr),(n.boundingBox===null||Kr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ti.copy(s),ti.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ti);return l<n.near||l>n.far?null:{distance:l,point:ti.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yr),e.getVertexPosition(c,Xr),e.getVertexPosition(l,Zr);let u=ri(e,t,n,r,Yr,Xr,Zr,ei);if(u){let e=new V;$n.getBarycoord(ei,Yr,Xr,Zr,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};$n.getNormal(Yr,Xr,Zr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Xt{constructor(e=null,t=1,n=1,r,i,a,o,c,l=s,u=s,d,f){super(null,a,o,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=new V,si=new V,ci=new H,li=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=oi.subVectors(n,t).cross(si.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(oi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ci.getNormalMatrix(e),r=this.coplanarPoint(oi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ui=new Tr,di=new B(.5,.5),fi=new V,pi=class{constructor(e=new li,t=new li,n=new li,r=new li,i=new li,a=new li){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476+di.distanceTo(e.center),ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fi.x=r.normal.x>0?e.max.x:e.min.x,fi.y=r.normal.y>0?e.max.y:e.min.y,fi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mi=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hi=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class extends Xt{constructor(e,t,n=v,r,i,a,o=s,c=s,l,u=k,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},_i=class extends gi{constructor(e,t=v,n=301,r,i,a=s,o=s,c,l=k){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vi=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},G=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},yi=class e extends Nr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new V,g=new V;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new xr(o,3)),this.setAttribute(`normal`,new xr(s,3)),this.setAttribute(`uv`,new xr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},bi=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},K=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},q=class e extends K{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xi=class e extends Nr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new xr(i,3)),this.setAttribute(`normal`,new xr(i.slice(),3)),this.setAttribute(`uv`,new xr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Si=class e extends xi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ci=class e extends xi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},wi=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},J=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ti=class e extends Nr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Ei(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Oi(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Oi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Di(e){let t={};for(let n=0;n<e.length;n++){let r=Ei(e[n]);for(let e in r)t[e]=r[e]}return t}function Oi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ki(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ai(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var ji={clone:Ei,merge:Di},Mi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ni=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mi,this.fragmentShader=Ni,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=ki(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fi=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ii=class extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Li=class extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ri=class extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Vi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:I,endingEnd:I}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Hi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ui=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class extends Bi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Gi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ui(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Re:t=this.InterpolantFactoryMethodDiscrete;break;case P:t=this.InterpolantFactoryMethodLinear;break;case ze:t=this.InterpolantFactoryMethodSmooth;break;case F:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Re;case this.InterpolantFactoryMethodLinear:return P;case this.InterpolantFactoryMethodSmooth:return ze;case this.InterpolantFactoryMethodBezier:return F}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ze,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Gi.prototype.ValueTypeName=``,Gi.prototype.TimeBufferType=Float32Array,Gi.prototype.ValueBufferType=Float32Array,Gi.prototype.DefaultInterpolation=P;var Ki=class extends Gi{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName=`bool`,Ki.prototype.ValueBufferType=Array,Ki.prototype.DefaultInterpolation=Re,Ki.prototype.InterpolantFactoryMethodLinear=void 0,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}};qi.prototype.ValueTypeName=`color`;var Ji=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}};Ji.prototype.ValueTypeName=`number`;var Yi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Xi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Yi(this.times,this.values,this.getValueSize(),e)}};Xi.prototype.ValueTypeName=`quaternion`,Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Gi{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName=`string`,Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=Re,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}};Qi.prototype.ValueTypeName=`vector`;var $i=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ea=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ta=new nn,na=new V,ra=new V,ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=p,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;na.setFromMatrixPosition(e.matrixWorld),t.position.copy(na),ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ra),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aa=new V,oa=new Nt,sa=new V,ca=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(aa,oa,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},la=new V,ua=new B,da=new B,fa=class extends ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ut*2*Math.atan(Math.tan(lt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){la.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(la.x,la.y).multiplyScalar(-e/la.z),la.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(la.x,la.y).multiplyScalar(-e/la.z)}getViewSize(e,t){return this.getViewBounds(e,ua,da),t.subVectors(da,ua)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=class extends ia{constructor(){super(new fa(90,1,.5,500)),this.isPointLightShadow=!0}},ma=class extends $i{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new pa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ha=class extends ca{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ga=class extends ia{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_a=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new ga}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},va=class extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},ya=-90,ba=1,xa=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fa(ya,ba,e,t);r.layers=this.layers,this.add(r);let i=new fa(ya,ba,e,t);i.layers=this.layers,this.add(i);let a=new fa(ya,ba,e,t);a.layers=this.layers,this.add(a);let o=new fa(ya,ba,e,t);o.layers=this.layers,this.add(o);let s=new fa(ya,ba,e,t);s.layers=this.layers,this.add(s);let c=new fa(ya,ba,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sa=class extends fa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ca=`\\[\\]\\.:\\/`,wa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ta=`[^\\[\\]\\.:\\/]`,Ea=`[^`+Ca.replace(`\\.`,``)+`]`,Da=`((?:WC+[\\/:])*)`.replace(`WC`,Ta),Oa=`(WCOD+)?`.replace(`WCOD`,Ea),ka=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ta),Aa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ta),ja=RegExp(`^`+Da+Oa+ka+Aa+`$`),Ma=[`material`,`materials`,`bones`,`map`],Na=class{constructor(e,t,n){let r=n||Pa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(wa,``)}static parseTrackName(e){let t=ja.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ma.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pa.Composite=Na,Pa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Pa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Pa.prototype.GetterByBindingType=[Pa.prototype._getValue_direct,Pa.prototype._getValue_array,Pa.prototype._getValue_arrayElement,Pa.prototype._getValue_toArray],Pa.prototype.SetterByBindingTypeAndVersioning=[[Pa.prototype._setValue_direct,Pa.prototype._setValue_direct_setNeedsUpdate,Pa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pa.prototype._setValue_array,Pa.prototype._setValue_array_setNeedsUpdate,Pa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pa.prototype._setValue_arrayElement,Pa.prototype._setValue_arrayElement_setNeedsUpdate,Pa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pa.prototype._setValue_fromArray,Pa.prototype._setValue_fromArray_setNeedsUpdate,Pa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fa=new nn,Ia=class{constructor(e,t,n=0,r=1/0){this.ray=new Ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Fa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fa),this}intersectObject(e,t=!0,n=[]){return Ra(e,this,n,t),n.sort(La),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ra(e[r],this,n,t);return n.sort(La),n}};function La(e,t){return e.distance-t.distance}function Ra(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ra(r[e],t,n,!0)}}var za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,L(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Ba=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=z(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(z(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Va=class extends ot{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){L(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ha(e,t,n,r){let i=Ua(r);switch(n){case E:return e*t;case te:return e*t/i.components*i.byteLength;case ne:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case D:return e*t*3/i.components*i.byteLength;case O:return e*t*4/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case j:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:case de:return Math.max(e,16)*Math.max(t,8)/4;case ce:case ue:return Math.max(e,8)*Math.max(t,8)/2;case M:case fe:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pe:case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case je:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Me:case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Fe:case N:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ua(e){switch(e){case p:case m:return{byteLength:1,components:1};case g:case h:case b:return{byteLength:2,components:1};case x:case S:return{byteLength:2,components:4};case v:case _:case y:return{byteLength:4,components:1};case w:case T:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Wa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ga(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ka={basic:{uniforms:Di([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Di([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Di([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Di([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Di([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new W(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Di([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Di([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Di([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Di([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Di([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Di([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Di([X.common,X.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Di([X.lights,X.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ka.physical={uniforms:Di([Ka.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var qa={r:0,b:0,g:0},Ja=new nn,Ya=new H;Ya.set(-1,0,0,0,1,0,0,0,1);function Xa(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ni(new G(1,1,1),new Pi({name:`BackgroundCubeMaterial`,uniforms:Ei(Ka.backgroundCube.uniforms),vertexShader:Ka.backgroundCube.vertexShader,fragmentShader:Ka.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ja.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ya),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ni(new wi(2,2),new Pi({name:`BackgroundMaterial`,uniforms:Ei(Ka.background.uniforms),vertexShader:Ka.background.vertexShader,fragmentShader:Ka.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qa,Ai(e)),n.buffers.color.setClear(qa.r,qa.g,qa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Za(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $a(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function eo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new li,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var to=4,no=[.125,.215,.35,.446,.526,.582],ro=20,io=256,ao=new ha,oo=new W,so=null,co=0,lo=0,uo=!1,fo=new V,po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fo}=i;so=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,co,lo),this._renderer.xr.enabled=uo,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:u,minFilter:u,generateMipmaps:!1,type:b,format:O,colorSpace:We,depthBuffer:!1},r=ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mo(r)),this._blurMaterial=vo(r,e,t),this._ggxMaterial=_o(r,e,t)}return r}_compileMaterial(e){let t=new ni(new Nr,e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,r,i){let a=new fa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(oo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new G,new Wr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(oo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;go(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;go(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-to?n-d+to:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,go(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ao),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,go(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ao)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&R(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ro;m>ro&&L(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ro}`);let h=[],g=0;for(let e=0;e<ro;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];go(t,3*v*(r>_-to?r-_+to:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ao)}};function mo(e){let t=[],n=[],r=[],i=e,a=e-to+1+no.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-to?s=no[o-e+to-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Nr;h.setAttribute(`position`,new vr(f,3)),h.setAttribute(`uv`,new vr(p,2)),h.setAttribute(`faceIndex`,new vr(m,1)),r.push(new ni(h,null)),i>to&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ho(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function go(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function _o(e,t,n){return new Pi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:io,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vo(e,t,n){let r=new Float32Array(ro),i=new V(0,1,0);return new Pi({name:`SphericalGaussianBlur`,defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yo(){return new Pi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bo(){return new Pi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var So=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new mi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new G(5,5,5),i=new Pi({name:`CubemapFromEquirect`,uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ni(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=u),new xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Co(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new So(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new po(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new po(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function wo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function To(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Eo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Do(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Oo(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ko(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ao={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function jo(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new gi(t,n):void 0}),s=new $t(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}),c=new Nr;c.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let l=new Fi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ni(c,l),d=new ha(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Bt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Ao[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Mo=new Xt,No=new gi(1,1),Po=new en,Fo=new tn,Io=new mi,Lo=[],Ro=[],zo=new Float32Array(16),Bo=new Float32Array(9),Vo=new Float32Array(4);function Ho(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Lo[i];if(a===void 0&&(a=new Float32Array(i),Lo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Uo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Wo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Go(e,t){let n=Ro[t];n===void 0&&(n=new Int32Array(t),Ro[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ko(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uo(n,t))return;e.uniform2fv(this.addr,t),Wo(n,t)}}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Uo(n,t))return;e.uniform3fv(this.addr,t),Wo(n,t)}}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uo(n,t))return;e.uniform4fv(this.addr,t),Wo(n,t)}}function Xo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wo(n,t)}else{if(Uo(n,r))return;Vo.set(r),e.uniformMatrix2fv(this.addr,!1,Vo),Wo(n,r)}}function Zo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wo(n,t)}else{if(Uo(n,r))return;Bo.set(r),e.uniformMatrix3fv(this.addr,!1,Bo),Wo(n,r)}}function Qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wo(n,t)}else{if(Uo(n,r))return;zo.set(r),e.uniformMatrix4fv(this.addr,!1,zo),Wo(n,r)}}function $o(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uo(n,t))return;e.uniform2iv(this.addr,t),Wo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Uo(n,t))return;e.uniform3iv(this.addr,t),Wo(n,t)}}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uo(n,t))return;e.uniform4iv(this.addr,t),Wo(n,t)}}function rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uo(n,t))return;e.uniform2uiv(this.addr,t),Wo(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Uo(n,t))return;e.uniform3uiv(this.addr,t),Wo(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uo(n,t))return;e.uniform4uiv(this.addr,t),Wo(n,t)}}function ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(No.compareFunction=n.isReversedDepthBuffer()?518:515,a=No):a=Mo,n.setTexture2D(t||a,i)}function cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fo,i)}function ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Io,i)}function us(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Po,i)}function ds(e){switch(e){case 5126:return Ko;case 35664:return qo;case 35665:return Jo;case 35666:return Yo;case 35674:return Xo;case 35675:return Zo;case 35676:return Qo;case 5124:case 35670:return $o;case 35667:case 35671:return es;case 35668:case 35672:return ts;case 35669:case 35673:return ns;case 5125:return rs;case 36294:return is;case 36295:return as;case 36296:return os;case 35678:case 36198:case 36298:case 36306:case 35682:return ss;case 35679:case 36299:case 36307:return cs;case 35680:case 36300:case 36308:case 36293:return ls;case 36289:case 36303:case 36311:case 36292:return us}}function fs(e,t){e.uniform1fv(this.addr,t)}function ps(e,t){let n=Ho(t,this.size,2);e.uniform2fv(this.addr,n)}function ms(e,t){let n=Ho(t,this.size,3);e.uniform3fv(this.addr,n)}function hs(e,t){let n=Ho(t,this.size,4);e.uniform4fv(this.addr,n)}function gs(e,t){let n=Ho(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _s(e,t){let n=Ho(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vs(e,t){let n=Ho(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ys(e,t){e.uniform1iv(this.addr,t)}function bs(e,t){e.uniform2iv(this.addr,t)}function xs(e,t){e.uniform3iv(this.addr,t)}function Ss(e,t){e.uniform4iv(this.addr,t)}function Cs(e,t){e.uniform1uiv(this.addr,t)}function ws(e,t){e.uniform2uiv(this.addr,t)}function Ts(e,t){e.uniform3uiv(this.addr,t)}function Es(e,t){e.uniform4uiv(this.addr,t)}function Ds(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?No:Mo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Os(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fo,a[e])}function ks(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Io,a[e])}function As(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Po,a[e])}function js(e){switch(e){case 5126:return fs;case 35664:return ps;case 35665:return ms;case 35666:return hs;case 35674:return gs;case 35675:return _s;case 35676:return vs;case 5124:case 35670:return ys;case 35667:case 35671:return bs;case 35668:case 35672:return xs;case 35669:case 35673:return Ss;case 5125:return Cs;case 36294:return ws;case 36295:return Ts;case 36296:return Es;case 35678:case 36198:case 36298:case 36306:case 35682:return Ds;case 35679:case 36299:case 36307:return Os;case 35680:case 36300:case 36308:case 36293:return ks;case 36289:case 36303:case 36311:case 36292:return As}}var Ms=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ds(t.type)}},Ns=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=js(t.type)}},Ps=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fs=/(\w+)(\])?(\[|\.)?/g;function Is(e,t){e.seq.push(t),e.map[t.id]=t}function Ls(e,t,n){let r=e.name,i=r.length;for(Fs.lastIndex=0;;){let a=Fs.exec(r),o=Fs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Is(n,l===void 0?new Ms(s,e,t):new Ns(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ps(s),Is(n,e)),n=e}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ls(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bs=37297,Vs=0;function Hs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Us=new H;function Ws(e){Bt._getMatrix(Us,Bt.workingColorSpace,e);let t=`mat3( ${Us.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hs(e.getShaderSource(t),r)}return i}function Ks(e,t){let n=Ws(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var qs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Js(e,t){let n=qs[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ys=new V;function Xs(){return Bt.getLuminanceCoefficients(Ys),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ys.x.toFixed(4)}, ${Ys.y.toFixed(4)}, ${Ys.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ec).join(`
`)}function Qs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $s(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ec(e){return e!==``}function tc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rc=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(e){return e.replace(rc,oc)}var ac=new Map;function oc(e,t){let n=Y[t];if(n===void 0){let e=ac.get(t);if(e!==void 0)n=Y[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ic(n)}var sc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(e){return e.replace(sc,lc)}function lc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function uc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fc(e){return dc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var pc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function mc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:pc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var hc={302:`ENVMAP_MODE_REFRACTION`};function gc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _c={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_c[e.combine]||`ENVMAP_BLENDING_NONE`}function yc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fc(n),l=mc(n),u=gc(n),d=vc(n),f=yc(n),p=Zs(n),m=Qs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ec).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ec).join(`
`),_.length>0&&(_+=`
`)):(g=[uc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ec).join(`
`),_=[uc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Js(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Ks(`linearToOutputTexel`,n.outputColorSpace),Xs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ec).join(`
`)),o=ic(o),o=tc(o,n),o=nc(o,n),s=ic(s),s=tc(s,n),s=nc(s,n),o=cc(o),s=cc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=zs(i,i.VERTEX_SHADER,y),S=zs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Gs(i,x,`vertex`),n=Gs(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Rs(i,h),T=$s(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Bs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xc=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=xc++,this.code=e,this.usedTimes=0}};function wc(e){return e===1030||e===37490||e===36285}function Tc(e,t,n,r,i,a){let o=new mn,s=new Sc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=Ka[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,ee=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,N=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&wc(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:N&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(N&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ka[t];n=ji.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new bc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ec(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Dc),r.length>1&&r.sort(t||Oc),i.length>1&&i.sort(t||Oc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ac(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kc,e.set(t,[i])):n>=r.length?(i=new kc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Mc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Nc=0;function Pc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fc(e){let t=new jc,n=Mc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Pc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Nc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Ic(e){let t=new Fc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Lc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ic(e),t.set(n,[a])):r>=i.length?(a=new Ic(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bc=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Vc=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Hc=new nn,Uc=new V,Wc=new V;function Gc(e,t,n){let r=new pi,i=new B,a=new B,o=new Zt,c=new Li,l=new Ri,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Rc,fragmentShader:zc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Nr;g.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ni(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,d=t.length;l<d;l++){let d=t[l],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:A,type:b,minFilter:u,magFilter:u,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new gi(i.x,i.y,y),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=k,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s}else d.isPointLight?(p.map=new So(i.x),p.map.depthTexture=new _i(i.x,v)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new gi(i.x,i.y,v)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=k,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=u,p.map.depthTexture.magFilter=u):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Uc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Uc),Wc.copy(e.position),Wc.add(Bc[t]),e.up.copy(Vc[t]),e.lookAt(Wc),e.updateMatrixWorld(),n.makeTranslation(-Uc.x,-Uc.y,-Uc.z),Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,c,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(l,d,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new $t(i.x,i.y,{format:A,type:b})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kc(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Zt().fromArray(oe),le=new Zt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==k&&(A&&e.lineWidth(t),k=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(ee!==n||te!==r)&&(ee=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function I(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:I,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Be}}function qc(e,t,n,r,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ge:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t)}function ie(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&j(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function j(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function ae(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let he={[i]:e.REPEAT,[a]:e.CLAMP_TO_EDGE,[o]:e.MIRRORED_REPEAT},ge={[s]:e.NEAREST,[c]:e.NEAREST_MIPMAP_NEAREST,[l]:e.NEAREST_MIPMAP_LINEAR,[u]:e.LINEAR,[d]:e.LINEAR_MIPMAP_NEAREST,[f]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let a=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,p.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Se(t,i,a){let o=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(o=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(o=e.TEXTURE_3D);let s=ye(t,i),c=i.source;n.bindTexture(o,t.__webglTexture,e.TEXTURE0+a);let l=r.get(c);if(c.version!==l.__version||s===!0){if(n.activeTexture(e.TEXTURE0+a),!(typeof ImageBitmap<`u`&&i.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=i.colorSpace===``?null:Bt.getPrimaries(i.colorSpace),a=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment);let t=T(i.image,!1,p.maxTextureSize);t=Ie(i,t);let r=m.convert(i.format,i.colorSpace),u=m.convert(i.type),d=k(i.internalFormat,r,u,i.normalized,i.colorSpace,i.isVideoTexture);ve(o,i);let f,h=i.mipmaps,g=i.isVideoTexture!==!0,_=l.__version===void 0||s===!0,v=c.dataReady,y=ne(i,t);if(i.isDepthTexture)d=te(i.format===ee,i.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,null));else if(i.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data);i.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&xe(i,t,r,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,t.data)}else if(i.isCompressedTexture){if(i.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let a=0,o=h.length;a<o;a++)if(f=h[a],i.format!==1023){if(r!==null){if(g){if(v){if(i.layerUpdates.size>0){let t=Ha(f.width,f.height,i.format,i.type);for(let o of i.layerUpdates){let i=f.data.subarray(o*t/f.data.BYTES_PER_ELEMENT,(o+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,f.width,f.height,1,r,i)}i.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,r,u,f.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,a=h.length;t<a;t++)f=h[t],i.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(i.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(i.layerUpdates.size>0){let a=Ha(t.width,t.height,i.format,i.type);for(let o of i.layerUpdates){let i=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,u,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,r,u,t.data)}else if(i.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,r,u,t.data);else if(i.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,i,a,0,r,u,null),i>>=1,a>>=1}}}else if(i.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(i),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,u,f):n.texImage2D(e.TEXTURE_2D,t,d,r,u,f);i.generateMipmaps=!1}else if(g){if(_){let r=Le(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,r,u,t);E(i)&&D(o),l.__version=c.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function Ce(t,i,a){if(i.image.length!==6)return;let o=ye(t,i),s=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+a);let c=r.get(s);if(s.version!==c.__version||o===!0){n.activeTexture(e.TEXTURE0+a);let t=Bt.getPrimaries(Bt.workingColorSpace),r=i.colorSpace===``?null:Bt.getPrimaries(i.colorSpace),l=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=i.isCompressedTexture||i.image[0].isCompressedTexture,d=i.image[0]&&i.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=T(i.image[e],!0,p.maxCubemapSize):f[e]=d?i.image[e].image:i.image[e],f[e]=Ie(i,f[e]);let h=f[0],g=m.convert(i.format,i.colorSpace),_=m.convert(i.type),v=k(i.internalFormat,g,_,i.normalized,i.colorSpace),y=i.isVideoTexture!==!0,b=c.__version===void 0||o===!0,x=s.dataReady,S=ne(i,h);ve(e.TEXTURE_CUBE_MAP,i);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let a=C[r];i.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(C=i.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(i)&&D(e.TEXTURE_CUBE_MAP),c.__version=s.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function we(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=k(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Fe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Pe(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,(!s.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,A)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let c=s.__webglTexture,l=Pe(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Fe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)Fe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ee(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(i.__webglFramebuffer[0],t,0):Ee(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Te(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,i){let a=r.get(t);n!==void 0&&we(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&De(t)}function ke(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,re);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)we(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else we(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),ve(l,o),we(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),E(o)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),ve(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)we(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else we(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(je.push(c),Me.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Jc(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pi({vertexShader:Yc,fragmentShader:Xc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Zc,_={},y=t.getContextAttributes(),b=null,x=null,S=[],w=[],T=new B,E=null,D=new fa;D.viewport=new Zt;let te=new fa;te.viewport=new Zt;let ne=[D,te],A=new Sa,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getHandSpace()};function j(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<S.length;e++){let t=w[e];t!==null&&(w[e]=null,S[e].disconnect(t))}re=null,ie=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:k,a=y.stencil?C:v);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $t(d.textureWidth,d.textureHeight,{format:O,type:p,depthTexture:new gi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $t(f.framebufferWidth,f.framebufferHeight,{format:O,type:p,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let se=new V,ce=new V;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),A.near=te.near=D.near=t,A.far=te.far=D.far=n,(re!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,te.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,te):A.projectionMatrix.copy(D.projectionMatrix),de(e,A,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(e){return _[e]};let M=null;function fe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=ne[n];o===void 0&&(o=new fa,o.layers.enable(n),o.viewport=new Zt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new vi,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=w[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new Wa;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},$c=new nn,el=new H;el.set(-1,0,0,0,1,0,0,0,1);function tl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ai(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($c.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(el),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function nl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var rl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),il=null;function al(){return il===null&&(il=new ai(rl,16,16,A,b),il.name=`DFG_LUT`,il.minFilter=u,il.magFilter=u,il.wrapS=a,il.wrapT=a,il.generateMipmaps=!1,il.needsUpdate=!0),il}var ol=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=p}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let _=m,y=new Set([ie,re,ne]),w=new Set([p,v,g,C,x,S]),T=new Uint32Array(4),E=new Int32Array(4),D=new V,O=null,k=null,ee=[],te=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ue;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Zt,he=new Zt,ge=null,_e=new W(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Zt(0,0,ye,be),Te=new Zt(0,0,ye,be),Ee=!1,De=new pi,Oe=!1,ke=!1,Ae=new nn,je=new V,Me=new Zt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,z,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw R(`WebGLRenderer: `+e.message),e}let Le,Re,P,ze,F,I,Be,Ve,He,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,rt,at,ot,st;function ct(){Le=new wo(N),Le.init(),at=new Jc(N,Le),Re=new $a(N,Le,e,at),P=new Kc(N,Le),Re.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Do(N),F=new Ec,I=new qc(N,Le,P,F,Re,at,ze),Be=new Co(j),Ve=new Ga(N),ot=new Za(N,Ve),He=new To(N,Ve,ze,ot),We=new ko(N,He,Ve,ot,ze),et=new Oo(N,Re,I),Xe=new eo(F),Ge=new Tc(j,Be,Le,Re,ot,Xe),Ke=new tl(j,F),qe=new Ac,Je=new Lc(Le),Qe=new Xa(j,Be,P,We,h,s),Ze=new Gc(j,We,Re),st=new nl(N,ze,Re,P),nt=new Qa(N,Le,ze),rt=new Eo(N,Le,ze),ze.programs=Ge.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=qe,j.shadowMap=Ze,j.state=P,j.info=ze}ct(),_!==1009&&(A=new jo(_,t.width,t.height,o,r,i));let lt=new Qc(j,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(lt.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}A.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=y.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,z,!1),Qe.dispose(),qe.dispose(),Je.dispose(),F.dispose(),Be.dispose(),We.dispose(),ot.dispose(),st.dispose(),Ge.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,vt),lt.removeEventListener(`sessionend`,yt),bt.stop()};function ut(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),ae=!0}function dt(){tt(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ct(),ze.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function z(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),F.remove(e)}function mt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,n),e.side=0,e.needsUpdate=!0,Et(e,t,n),e.side=2):Et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Je.get(n),k.init(t),te.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ht(a,n,e),r.add(a)}else ht(t,n,e),r.add(t)}}),k=te.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new Wa;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,lt.setAnimationLoop(e),e===null?bt.stop():bt.start()},lt.addEventListener(`sessionstart`,vt),lt.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=A!==null&&(M===null||n)&&A.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Je.get(e,te.length),k.init(t),k.state.textureUnits=I.getTextureUnits(),te.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ye,t.reversedDepth),ke=this.localClippingEnabled,Oe=Xe.init(this.clippingPlanes,ke),O=qe.get(e,ee.length),O.init(),ee.push(O),lt.enabled===!0&&lt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,j.sortObjects)}xt(e,t,0,j.sortObjects),O.finish(),j.sortObjects===!0&&O.sort(Se,Ce,t.reversedDepth),Pe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Pe&&Qe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Xe.beginShadows();let i=k.state.shadowsArray;if(Ze.render(i,e,t),Oe===!0&&Xe.endShadows(),(r&&A.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Pe&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Pe&&Qe.render(e),St(O,e,t)}M!==null&&de===0&&(I.updateMultisampleRenderTarget(M),I.updateRenderTargetMipmap(M)),r&&A.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ot.resetDefaultState(),fe=-1,pe=null,te.pop(),te.length>0?(k=te[te.length-1],I.setTextureUnits(k.state.textureUnits),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,ee.pop(),O=ee.length>0?ee[ee.length-1]:null,oe!==null&&oe.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=We.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Me.z,o)}}else i.visible&&O.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?b:p,minFilter:f,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&Qe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,r),wt(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),j.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ge.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ne),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=kt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,I),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,I),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,I)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,I),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,I),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=al()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Rs.upload(N,Dt(v),E,I)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rs.upload(N,Dt(v),E,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,x),st.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(o.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,at.convert(l),at.convert(u),0);let f=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await it(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},sl={type:`change`},cl={type:`start`},ll={type:`end`},ul=new Ur,dl=new li,fl=Math.cos(70*Mt.DEG2RAD),pl=new V,ml=2*Math.PI,hl={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6,_l=class extends Va{constructor(e,t=null){super(e,t),this.state=hl.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:n.ROTATE,MIDDLE:n.DOLLY,RIGHT:n.PAN},this.touches={ONE:r.ROTATE,TWO:r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Nt,this._lastTargetPosition=new V,this._quat=new Nt().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ba,this._sphericalDelta=new Ba,this._scale=1,this._panOffset=new V,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new V,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yl.bind(this),this._onPointerDown=vl.bind(this),this._onPointerUp=bl.bind(this),this._onContextMenu=Dl.bind(this),this._onMouseWheel=Cl.bind(this),this._onKeyDown=wl.bind(this),this._onTouchStart=Tl.bind(this),this._onTouchMove=El.bind(this),this._onMouseDown=xl.bind(this),this._onMouseMove=Sl.bind(this),this._interceptControlDown=Ol.bind(this),this._interceptControlUp=kl.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sl),this.update(),this.state=hl.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;pl.copy(t).sub(this.target),pl.applyQuaternion(this._quat),this._spherical.setFromVector3(pl),this.autoRotate&&this.state===hl.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=ml:n>Math.PI&&(n-=ml),r<-Math.PI?r+=ml:r>Math.PI&&(r-=ml),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(pl.setFromSpherical(this._spherical),pl.applyQuaternion(this._quatInverse),t.copy(this.target).add(pl),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=pl.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new V(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new V(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=pl.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<fl?this.object.lookAt(this.target):(dl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(dl,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?ml/60/60*this.autoRotateSpeed:ml/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pl.setFromMatrixColumn(t,0),pl.multiplyScalar(-e),this._panOffset.add(pl)}_panUp(e,t){this.screenSpacePanning===!0?pl.setFromMatrixColumn(t,1):(pl.setFromMatrixColumn(t,0),pl.crossVectors(this.object.up,pl)),pl.multiplyScalar(e),this._panOffset.add(pl)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;pl.copy(r).sub(this.target);let i=pl.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ml*this._rotateDelta.x/t.clientHeight),this._rotateUp(ml*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ml*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ml*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ml*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ml*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ml*this._rotateDelta.x/t.clientHeight),this._rotateUp(ml*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function vl(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function yl(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function bl(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(ll),this.state=hl.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function xl(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=hl.DOLLY;break;case n.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=hl.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=hl.ROTATE}break;case n.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=hl.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=hl.PAN}break;default:this.state=hl.NONE}this.state!==hl.NONE&&this.dispatchEvent(cl)}function Sl(e){switch(this.state){case hl.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case hl.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case hl.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Cl(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===hl.NONE&&(e.preventDefault(),this.dispatchEvent(cl),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ll))}function wl(e){this.enabled!==!1&&this._handleKeyDown(e)}function Tl(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case r.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=hl.TOUCH_ROTATE;break;case r.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=hl.TOUCH_PAN;break;default:this.state=hl.NONE}break;case 2:switch(this.touches.TWO){case r.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=hl.TOUCH_DOLLY_PAN;break;case r.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=hl.TOUCH_DOLLY_ROTATE;break;default:this.state=hl.NONE}break;default:this.state=hl.NONE}this.state!==hl.NONE&&this.dispatchEvent(cl)}function El(e){switch(this._trackPointer(e),this.state){case hl.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case hl.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case hl.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case hl.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=hl.NONE}}function Dl(e){this.enabled!==!1&&e.preventDefault()}function Ol(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function kl(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Al=t({default:()=>Ll,durationTargetSec:()=>540,id:()=>jl,reviewWords:()=>Fl,scene:()=>Ml,steps:()=>Il,targetWords:()=>Pl,theme:()=>Nl,version:()=>1}),jl=`airport-01-up-up-up`,Ml=`airport`,Nl=`planes-and-going-places`,Pl=[`plane`,`ticket`,`bag`],Fl=[`sea`,`shell`,`crab`,`bird`],Il=[{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! What is that? So big!`},{type:`say`,who:`lulu`,emote:`happy`,text:`That is a plane!`,emphasis:[`plane`]},{type:`say`,who:`momo`,emote:`happy`,text:`The plane can go up! Up! Up!`,emphasis:[`plane`]},{type:`ask`,who:`lulu`,prompt:`Where is the plane?`,answerId:`plane`,retry:[`Oh! One more try!`,`Almost! Look again!`,`Hmm! One more look!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big white plane!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`plane`,durSec:1.6},{type:`echo`,who:`lulu`,word:`plane`,invite:`Say it with me! PLANE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! PLANE!`},{type:`chant`,who:`both`,lines:[`Up! Up! Up we go!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`A ticket! Here we go!`,emphasis:[`ticket`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The ticket is... blue?`,emphasis:[`ticket`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not blue! Yellow ticket!`,emphasis:[`ticket`]},{type:`ask`,who:`momo`,prompt:`Do you see the ticket?`,answerId:`ticket`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The yellow ticket!`},{type:`echo`,who:`momo`,word:`ticket`,invite:`Can you say it? TICKET!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! TICKET!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And here is my bag!`,emphasis:[`bag`]},{type:`say`,who:`momo`,emote:`happy`,text:`A shell is in the bag!`,emphasis:[`bag`]},{type:`ask`,who:`lulu`,prompt:`Can you find the bag?`,answerId:`bag`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The green bag!`},{type:`do`,action:`pickUp`,who:`lulu`,targetId:`bag`,durSec:1.3},{type:`echo`,who:`lulu`,word:`bag`,invite:`Say it with Momo! BAG!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! BAG!`},{type:`choice`,who:`lulu`,prompt:`The plane or the bag?`,options:[{id:`plane`,label:`Plane`},{id:`bag`,label:`Bag`}]},{type:`say`,who:`momo`,emote:`happy`,text:`Look! A little blue bird!`},{type:`ask`,who:`momo`,prompt:`Where is the bird?`,answerId:`bird`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little blue bird!`},{type:`say`,who:`lulu`,emote:`happy`,text:`The bird can go up like the plane!`},{type:`say`,who:`momo`,emote:`happy`,text:`Up and up! The big blue sea!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Bye bye, little crab!`},{type:`choice`,who:`momo`,prompt:`The bird or the plane?`,options:[{id:`bird`,label:`Bird`},{id:`plane`,label:`Plane`}]},{type:`finale`,line:`Plane, ticket, bag! Up we go!`},{type:`goto`,scene:`museum`,bridgeLabel:`To the museum!`}],Ll={id:jl,version:1,scene:Ml,theme:Nl,targetWords:Pl,reviewWords:Fl,durationTargetSec:540,steps:Il},Rl=t({default:()=>Gl,durationTargetSec:()=>540,id:()=>zl,reviewWords:()=>Ul,scene:()=>Bl,steps:()=>Wl,targetWords:()=>Hl,theme:()=>Vl,version:()=>1}),zl=`beach-01-splash-splash`,Bl=`beach`,Vl=`sea-and-sand`,Hl=[`sea`,`shell`,`crab`],Ul=[`lion`,`elephant`,`monkey`,`sand`,`ball`,`duck`],Wl=[{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! The sea! So blue!`,emphasis:[`sea`]},{type:`say`,who:`lulu`,emote:`happy`,text:`The sea is big and cold!`,emphasis:[`sea`]},{type:`ask`,who:`lulu`,prompt:`Do you see the sea?`,answerId:`sea`,retry:[`Hmm! One more look!`,`Almost! You can do it!`,`Try again! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big blue sea!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`sea`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`Splash! Splash! I like the sea!`},{type:`echo`,who:`momo`,word:`sea`,invite:`Can you say it? SEA!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SEA!`},{type:`chant`,who:`both`,lines:[`Splash! Splash! In the sea!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look down! A pretty shell!`,emphasis:[`shell`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The shell is... a ball?`,emphasis:[`shell`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not a ball! A shell!`,emphasis:[`shell`]},{type:`ask`,who:`momo`,prompt:`Where is the shell?`,answerId:`shell`,retry:[`Oh! Not this one!`,`Oh! One more try!`,`Almost! Look again!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The pretty shell!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`shell`,durSec:1.2},{type:`echo`,who:`lulu`,word:`shell`,invite:`Say it with Momo! SHELL!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SHELL!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A little red crab!`,emphasis:[`crab`]},{type:`say`,who:`momo`,emote:`happy`,text:`The crab can dig in the sand!`,emphasis:[`crab`]},{type:`ask`,who:`lulu`,prompt:`Can you find the crab?`,answerId:`crab`,retry:[`Look here, friend!`,`Hmm, not that one!`,`Not that one, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little red crab!`},{type:`echo`,who:`momo`,word:`crab`,invite:`You too! CRAB!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! CRAB!`},{type:`choice`,who:`lulu`,prompt:`The shell or the crab?`,options:[{id:`shell`,label:`Shell`},{id:`crab`,label:`Crab`}]},{type:`say`,who:`momo`,emote:`happy`,text:`The zoo! The big lion! So fun!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And the little monkey! Ha ha!`},{type:`say`,who:`momo`,emote:`happy`,text:`The elephant can splash too! Ha ha!`},{type:`ask`,who:`momo`,prompt:`Where is the sand?`,answerId:`sand`,retry:[`Almost! You can do it!`,`Try again! You can do it!`,`You can find it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! Warm yellow sand!`},{type:`do`,action:`kick`,who:`momo`,targetId:`ball`,durSec:1.2},{type:`say`,who:`lulu`,emote:`happy`,text:`The duck can splash too!`},{type:`choice`,who:`momo`,prompt:`The sea or the sand?`,options:[{id:`sea`,label:`Sea`},{id:`sand`,label:`Sand`}]},{type:`finale`,line:`Sea, sand and shell! What a day!`},{type:`goto`,scene:`airport`,bridgeLabel:`Off to the airport!`}],Gl={id:zl,version:1,scene:Bl,theme:Vl,targetWords:Hl,reviewWords:Ul,durationTargetSec:540,steps:Wl},Kl=t({default:()=>$l,durationTargetSec:()=>540,id:()=>ql,reviewWords:()=>Zl,scene:()=>Jl,steps:()=>Ql,targetWords:()=>Xl,theme:()=>Yl,version:()=>1}),ql=`cafe-01-something-sweet`,Jl=`cafe`,Yl=`sweet-and-warm`,Xl=[`cake`,`cookie`,`milk`],Zl=[`pizza`,`plate`,`spoon`,`bread`,`cup`],Ql=[{type:`say`,who:`lulu`,emote:`happy`,text:`Mmm! It is warm here.`},{type:`say`,who:`momo`,emote:`surprised`,text:`Look! A pink cake!`,emphasis:[`cake`]},{type:`say`,who:`lulu`,emote:`happy`,text:`The cake is pink! A red ball on top!`,emphasis:[`cake`]},{type:`ask`,who:`lulu`,prompt:`Where is the cake?`,answerId:`cake`,retry:[`Hmm! One more look!`,`Almost! You can do it!`,`Try again! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The pink cake!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`cake`,durSec:1.4},{type:`echo`,who:`momo`,word:`cake`,invite:`Say it with me! CAKE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! CAKE!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And look! A cookie!`,emphasis:[`cookie`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The cookie is... blue?`,emphasis:[`cookie`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not blue! A warm cookie!`,emphasis:[`cookie`]},{type:`ask`,who:`momo`,prompt:`Do you see the cookie?`,answerId:`cookie`,retry:[`Oh! Not this one!`,`Oh! One more try!`,`Almost! Look again!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The warm cookie!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`cookie`,durSec:1.2},{type:`echo`,who:`lulu`,word:`cookie`,invite:`Can you say it? COOKIE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! COOKIE!`},{type:`chant`,who:`both`,lines:[`Cake and cookie, please!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Milk is good with cake.`,emphasis:[`milk`]},{type:`ask`,who:`lulu`,prompt:`Can you find the milk?`,answerId:`milk`,retry:[`Look here, friend!`,`Hmm, not that one!`,`Not that one, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The cold white milk!`},{type:`echo`,who:`momo`,word:`milk`,invite:`Say it with Momo! MILK!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! MILK!`},{type:`choice`,who:`lulu`,prompt:`The cake or the cookie?`,options:[{id:`cake`,label:`Cake`},{id:`cookie`,label:`Cookie`}]},{type:`say`,who:`momo`,emote:`happy`,text:`Not pizza now! Ha ha!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Here is bread for tomorrow.`},{type:`ask`,who:`momo`,prompt:`Where is the bread?`,answerId:`bread`,retry:[`Almost! You can do it!`,`Try again! You can do it!`,`You can find it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The warm bread!`},{type:`say`,who:`momo`,emote:`happy`,text:`My cup is warm too!`},{type:`say`,who:`lulu`,emote:`happy`,text:`A plate and spoon for the cake!`},{type:`choice`,who:`momo`,prompt:`The milk or the cup?`,options:[{id:`milk`,label:`Milk`},{id:`cup`,label:`Cup`}]},{type:`finale`,line:`Sweet cake, warm cookie! Mmm!`},{type:`goto`,scene:`space`,bridgeLabel:`Look up! Off to the moon!`}],$l={id:ql,version:1,scene:Jl,theme:Yl,targetWords:Xl,reviewWords:Zl,durationTargetSec:540,steps:Ql},eu=t({default:()=>su,durationTargetSec:()=>540,id:()=>tu,reviewWords:()=>au,scene:()=>nu,steps:()=>ou,targetWords:()=>iu,theme:()=>ru,version:()=>1}),tu=`dentist-01-a-happy-smile`,nu=`dentist`,ru=`teeth-and-clean-smiles`,iu=[`tooth`,`toothbrush`,`cup`],au=[`tomato`,`carrot`,`basket`,`apple`,`milk`],ou=[{type:`say`,who:`lulu`,emote:`happy`,text:`Here it is! Look, Momo.`},{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! A big soft chair!`},{type:`ask`,who:`momo`,prompt:`Can you find the chair?`,answerId:`chair`,retry:[`Oh! Not this one!`,`Oh! One more try!`,`Almost! Look again!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big soft chair!`},{type:`do`,action:`sit`,who:`momo`,targetId:`chair`,durSec:1.6},{type:`say`,who:`momo`,emote:`happy`,text:`This chair is soft and big!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A big white tooth!`,emphasis:[`tooth`]},{type:`say`,who:`momo`,emote:`happy`,text:`The tooth is happy! It can smile!`,emphasis:[`tooth`]},{type:`ask`,who:`lulu`,prompt:`Where is the big white tooth?`,answerId:`tooth`,retry:[`Look here, friend!`,`Hmm, not that one!`,`Not that one, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big white tooth!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`tooth`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`I have teeth too! Look!`},{type:`echo`,who:`lulu`,word:`tooth`,invite:`Can you say it? TOOTH!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! TOOTH!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Now here is the toothbrush.`,emphasis:[`toothbrush`]},{type:`say`,who:`momo`,emote:`happy`,text:`The toothbrush is blue and little!`,emphasis:[`toothbrush`]},{type:`ask`,who:`momo`,prompt:`Do you see the toothbrush?`,answerId:`toothbrush`,retry:[`Almost! You can do it!`,`Try again! You can do it!`,`You can find it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The little blue toothbrush!`},{type:`do`,action:`give`,who:`lulu`,targetId:`toothbrush`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`I brush! Up and down!`},{type:`echo`,who:`momo`,word:`toothbrush`,invite:`Say it with me! TOOTHBRUSH!`,confirm:`I heard you! Great!`,neutral:`Good try! TOOTHBRUSH!`},{type:`chant`,who:`both`,lines:[`Brush, brush, brush!`,`Clean and white!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Now we wash. Here is the cup.`,emphasis:[`cup`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The cup has... warm water?`,emphasis:[`cup`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not warm! Cold water!`,emphasis:[`cup`]},{type:`ask`,who:`lulu`,prompt:`Help Momo! Find the cup!`,answerId:`cup`,retry:[`Oh! One more try!`,`Almost! Look again!`,`Hmm! One more look!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The cup with cold water!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`cup`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`I wash. The water is cold!`},{type:`echo`,who:`lulu`,word:`cup`,invite:`You too! CUP!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! CUP!`},{type:`choice`,who:`lulu`,prompt:`The mirror or the fish?`,options:[{id:`mirror`,label:`Mirror`},{id:`fish`,label:`Fish`}]},{type:`ask`,who:`momo`,prompt:`Can you find the mirror?`,answerId:`mirror`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The mirror! I see my smile!`},{type:`say`,who:`momo`,emote:`happy`,text:`My teeth are clean and white!`},{type:`say`,who:`lulu`,emote:`happy`,text:`You eat a carrot and a tomato.`},{type:`say`,who:`momo`,emote:`happy`,text:`An apple, bread and cheese in the basket!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Good food! Milk is good too.`},{type:`ask`,who:`lulu`,prompt:`Can you find the fish?`,answerId:`fish`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! The little orange fish!`},{type:`say`,who:`momo`,emote:`happy`,text:`The fish is happy. I am happy!`},{type:`choice`,who:`momo`,prompt:`The toy or the fish?`,options:[{id:`toy`,label:`Toy`},{id:`fish`,label:`Fish`}]},{type:`echo`,who:`momo`,word:`smile`,invite:`Can you say it? SMILE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SMILE!`},{type:`say`,who:`lulu`,emote:`happy`,text:`What a happy smile, Momo!`},{type:`finale`,line:`Clean teeth! Thank you, friend!`},{type:`goto`,scene:`zoo`,bridgeLabel:`To the zoo!`}],su={id:tu,version:1,scene:nu,theme:ru,targetWords:iu,reviewWords:au,durationTargetSec:540,steps:ou},cu=t({default:()=>hu,durationTargetSec:()=>540,id:()=>lu,reviewWords:()=>pu,scene:()=>uu,steps:()=>mu,targetWords:()=>fu,theme:()=>du,version:()=>1}),lu=`grocery-01-what-do-we-need`,uu=`grocery`,du=`food-and-choosing`,fu=[`apple`,`bread`,`cheese`],pu=[`swing`,`slide`,`sand`,`milk`,`book`],mu=[{type:`say`,who:`momo`,emote:`thinking`,text:`I am so hungry now!`},{type:`say`,who:`lulu`,emote:`happy`,text:`This is the shop. Look!`},{type:`ask`,who:`lulu`,prompt:`Can you find the cart?`,answerId:`cart`,retry:[`You can find it!`,`Look here, friend!`,`Hmm, not that one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big cart!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A red apple!`,emphasis:[`apple`]},{type:`say`,who:`momo`,emote:`happy`,text:`I like the apple!`,emphasis:[`apple`]},{type:`ask`,who:`lulu`,prompt:`Where is the red apple?`,answerId:`apple`,retry:[`Hmm! One more look!`,`Almost! You can do it!`,`Try again! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! A red apple for Momo!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`apple`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`Mmm! I can eat the apple!`},{type:`echo`,who:`lulu`,word:`apple`,invite:`Can you say it? APPLE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! APPLE!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Now look at the bread.`,emphasis:[`bread`]},{type:`say`,who:`momo`,emote:`surprised`,text:`The bread is big and warm!`,emphasis:[`bread`]},{type:`ask`,who:`momo`,prompt:`Help Momo! Find the bread!`,answerId:`bread`,retry:[`Oh! Not this one!`,`Oh! One more try!`,`Almost! Look again!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big warm bread!`},{type:`do`,action:`give`,who:`lulu`,targetId:`bread`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`Thank you! I like bread.`},{type:`echo`,who:`momo`,word:`bread`,invite:`Say it with Momo! BREAD!`,confirm:`I heard you! Great!`,neutral:`Good try! BREAD!`},{type:`choice`,who:`lulu`,prompt:`The apple or the banana?`,options:[{id:`apple`,label:`Apple`},{id:`banana`,label:`Banana`}]},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! Yellow cheese!`,emphasis:[`cheese`]},{type:`say`,who:`momo`,emote:`thinking`,text:`Cheese! It is... blue?`,emphasis:[`cheese`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not blue! Yellow cheese!`,emphasis:[`cheese`]},{type:`ask`,who:`lulu`,prompt:`Do you see the cheese?`,answerId:`cheese`,retry:[`Look here, friend!`,`Hmm, not that one!`,`Not that one, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! Yellow cheese! Thank you!`},{type:`do`,action:`pickUp`,who:`lulu`,targetId:`cheese`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`Cheese and bread! Yummy!`},{type:`echo`,who:`lulu`,word:`cheese`,invite:`You too! CHEESE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! CHEESE!`},{type:`chant`,who:`both`,lines:[`Apple, bread and cheese, please!`],repeat:2},{type:`say`,who:`lulu`,emote:`thinking`,text:`We can find one more!`},{type:`ask`,who:`momo`,prompt:`Where is the milk?`,answerId:`milk`,retry:[`Almost! You can do it!`,`Try again! You can do it!`,`You can find it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The cold white milk!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`milk`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`Milk, bread, apple and cheese!`},{type:`choice`,who:`momo`,prompt:`The cheese or the shelf?`,options:[{id:`cheese`,label:`Cheese`},{id:`shelf`,label:`Shelf`}]},{type:`say`,who:`lulu`,emote:`happy`,text:`You like the swing and the sand.`},{type:`say`,who:`momo`,emote:`happy`,text:`Yes! The swing and the slide!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And the soft yellow sand!`},{type:`ask`,who:`lulu`,prompt:`Can you find the shelf?`,answerId:`shelf`,retry:[`Oh! One more try!`,`Almost! Look again!`,`Hmm! One more look!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big shelf!`},{type:`say`,who:`momo`,emote:`happy`,text:`I can see my book now.`},{type:`echo`,who:`momo`,word:`shop`,invite:`Can you say it? SHOP!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SHOP!`},{type:`finale`,line:`Good shop day! Thank you, friend!`},{type:`goto`,scene:`market`,bridgeLabel:`To the market!`}],hu={id:lu,version:1,scene:uu,theme:du,targetWords:fu,reviewWords:pu,durationTargetSec:540,steps:mu},gu=t({default:()=>Cu,durationTargetSec:()=>540,id:()=>_u,reviewWords:()=>xu,scene:()=>vu,steps:()=>Su,targetWords:()=>bu,theme:()=>yu,version:()=>1}),_u=`home-01-hungry-evening`,vu=`home`,yu=`food-and-bedtime`,bu=[`milk`,`bed`,`teddy bear`],xu=[`ball`,`tree`,`flower`],Su=[{type:`say`,who:`momo`,emote:`thinking`,text:`I am so hungry!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! Milk on the table!`,emphasis:[`milk`]},{type:`say`,who:`momo`,emote:`thinking`,text:`Milk! It is... warm?`,emphasis:[`milk`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not warm! Cold milk!`,emphasis:[`milk`]},{type:`ask`,who:`lulu`,prompt:`Where is the milk?`,answerId:`milk`,retry:[`Not that one, friend!`,`Oh! Not this one!`,`Oh! One more try!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! Cold milk for Momo!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`milk`,durSec:1.2},{type:`say`,who:`momo`,emote:`happy`,text:`Mmm! The milk is cold!`},{type:`say`,who:`momo`,emote:`happy`,text:`More milk, please!`},{type:`do`,action:`give`,who:`lulu`,targetId:`milk`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`Thank you, Lulu!`},{type:`say`,who:`lulu`,emote:`surprised`,text:`Look! Your red ball!`,emphasis:[`ball`]},{type:`echo`,who:`lulu`,word:`ball`,invite:`Say it with Momo! BALL!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! BALL!`},{type:`do`,action:`kick`,who:`momo`,targetId:`ball`,durSec:1.2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look out the window!`},{type:`say`,who:`momo`,emote:`happy`,text:`I see the big tree!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And a yellow flower!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`window`,durSec:1.5},{type:`say`,who:`momo`,emote:`sleepy`,text:`I am sleepy now.`},{type:`say`,who:`lulu`,emote:`happy`,text:`Time for bed, Momo!`,emphasis:[`bed`]},{type:`say`,who:`lulu`,emote:`happy`,text:`The bed is soft and warm.`,emphasis:[`bed`]},{type:`ask`,who:`lulu`,prompt:`Do you see the bed?`,answerId:`bed`,retry:[`You can find it!`,`Look here, friend!`,`Hmm, not that one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The soft warm bed!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`bed`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`The bed is so soft!`},{type:`say`,who:`lulu`,emote:`surprised`,text:`Where is your teddy bear?`,emphasis:[`teddy bear`]},{type:`say`,who:`momo`,emote:`thinking`,text:`Where is my teddy bear?`},{type:`ask`,who:`lulu`,prompt:`Help Momo! Find the teddy bear!`,answerId:`teddy-bear`,retry:[`Hmm! One more look!`,`Almost! You can do it!`,`Try again! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`The teddy bear! Thank you, friend!`},{type:`do`,action:`give`,who:`lulu`,targetId:`teddy-bear`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`My teddy bear! Thank you!`},{type:`chant`,who:`both`,lines:[`Good night! Sleep well!`],repeat:1},{type:`say`,who:`lulu`,emote:`happy`,text:`Good night, Momo!`},{type:`say`,who:`momo`,emote:`sleepy`,text:`Good night, Lulu!`},{type:`do`,action:`sleep`,who:`momo`,targetId:`bed`,durSec:2},{type:`finale`,line:`Sleep well! See you tomorrow!`},{type:`goto`,scene:`school`,bridgeLabel:`To school tomorrow!`}],Cu={id:_u,version:1,scene:vu,theme:yu,targetWords:bu,reviewWords:xu,durationTargetSec:540,steps:Su},wu=t({default:()=>ju,durationTargetSec:()=>540,id:()=>Tu,reviewWords:()=>ku,scene:()=>Eu,steps:()=>Au,targetWords:()=>Ou,theme:()=>Du,version:()=>1}),Tu=`market-01-red-and-orange`,Eu=`market`,Du=`colors-and-counting`,Ou=[`tomato`,`carrot`,`basket`],ku=[`apple`,`bread`,`cheese`,`flower`,`tree`],Au=[{type:`say`,who:`lulu`,emote:`happy`,text:`Good morning! This is the market.`},{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! Red and orange and green!`},{type:`ask`,who:`lulu`,prompt:`Can you find the apple?`,answerId:`apple`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The red apple again!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A red tomato!`,emphasis:[`tomato`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The tomato is... orange?`,emphasis:[`tomato`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not orange! Red tomato!`,emphasis:[`tomato`]},{type:`ask`,who:`momo`,prompt:`Do you see the tomato?`,answerId:`tomato`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little red tomato!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`tomato`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`I like the tomato. It is soft.`},{type:`echo`,who:`lulu`,word:`tomato`,invite:`Can you say it? TOMATO!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! TOMATO!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Now look! An orange carrot!`,emphasis:[`carrot`]},{type:`say`,who:`momo`,emote:`happy`,text:`The carrot is big and orange!`,emphasis:[`carrot`]},{type:`ask`,who:`lulu`,prompt:`Where is the orange carrot?`,answerId:`carrot`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big orange carrot!`},{type:`do`,action:`pickUp`,who:`lulu`,targetId:`carrot`,durSec:1.3},{type:`say`,who:`momo`,emote:`happy`,text:`I can eat the carrot!`},{type:`echo`,who:`momo`,word:`carrot`,invite:`Say it with me! CARROT!`,confirm:`I heard you! Great!`,neutral:`Good try! CARROT!`},{type:`choice`,who:`lulu`,prompt:`The tomato or the carrot?`,options:[{id:`tomato`,label:`Tomato`},{id:`carrot`,label:`Carrot`}]},{type:`say`,who:`lulu`,emote:`thinking`,text:`Where can we go now?`},{type:`say`,who:`momo`,emote:`happy`,text:`Here! In the big basket!`,emphasis:[`basket`]},{type:`ask`,who:`lulu`,prompt:`Help Momo! Find the basket!`,answerId:`basket`,retry:[`Not that one, friend!`,`Oh! Not this one!`,`Oh! One more try!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big basket!`},{type:`do`,action:`give`,who:`momo`,targetId:`basket`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`One tomato in the basket.`},{type:`say`,who:`lulu`,emote:`happy`,text:`And one carrot! One, two!`},{type:`echo`,who:`lulu`,word:`basket`,invite:`You too! BASKET!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! BASKET!`},{type:`chant`,who:`both`,lines:[`One! Two! Three!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A pretty red flower!`},{type:`say`,who:`momo`,emote:`happy`,text:`And a big green tree!`},{type:`ask`,who:`momo`,prompt:`Can you find the flower?`,answerId:`flower`,retry:[`You can find it!`,`Look here, friend!`,`Hmm, not that one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! Pretty flower! Thank you!`},{type:`say`,who:`momo`,emote:`happy`,text:`The flower is for you, Lulu!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Thank you! We have bread and cheese here.`},{type:`say`,who:`momo`,emote:`happy`,text:`I like the swing, slide and sand.`},{type:`choice`,who:`momo`,prompt:`The basket or the crate?`,options:[{id:`basket`,label:`Basket`},{id:`crate`,label:`Crate`}]},{type:`ask`,who:`lulu`,prompt:`Can you find the crate?`,answerId:`crate`,retry:[`Hmm! One more look!`,`Almost! You can do it!`,`Try again! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little crate!`},{type:`say`,who:`momo`,emote:`happy`,text:`A tomato, a carrot, a basket!`},{type:`finale`,line:`What a pretty day! Thank you!`},{type:`goto`,scene:`dentist`,bridgeLabel:`Off to see the dentist!`}],ju={id:Tu,version:1,scene:Eu,theme:Du,targetWords:Ou,reviewWords:ku,durationTargetSec:540,steps:Au},Mu=t({default:()=>zu,durationTargetSec:()=>540,id:()=>Nu,reviewWords:()=>Lu,scene:()=>Pu,steps:()=>Ru,targetWords:()=>Iu,theme:()=>Fu,version:()=>1}),Nu=`museum-01-big-big-dinosaur`,Pu=`museum`,Fu=`old-wonderful-things`,Iu=[`dinosaur`,`picture`,`egg`],Lu=[`plane`,`ticket`,`bag`,`fish`,`bird`],Ru=[{type:`say`,who:`lulu`,emote:`happy`,text:`Shh! This is the museum.`},{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! What is THAT?`},{type:`say`,who:`lulu`,emote:`happy`,text:`That is a dinosaur!`,emphasis:[`dinosaur`]},{type:`ask`,who:`momo`,prompt:`Where is the dinosaur?`,answerId:`dinosaur`,retry:[`Not that one, friend!`,`Oh! Not this one!`,`Oh! One more try!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! The big big dinosaur!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`dinosaur`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`The dinosaur is so big!`,emphasis:[`dinosaur`]},{type:`echo`,who:`lulu`,word:`dinosaur`,invite:`You too! DINOSAUR!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! DINOSAUR!`},{type:`chant`,who:`both`,lines:[`Big, big dinosaur!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A big egg!`,emphasis:[`egg`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The egg is... little?`,emphasis:[`egg`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not little! A big dinosaur egg!`,emphasis:[`egg`]},{type:`ask`,who:`lulu`,prompt:`Do you see the egg?`,answerId:`egg`,retry:[`You can find it!`,`Look here, friend!`,`Hmm, not that one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big white egg!`},{type:`echo`,who:`momo`,word:`egg`,invite:`Say it with me! EGG!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! EGG!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And look at this picture!`,emphasis:[`picture`]},{type:`say`,who:`momo`,emote:`happy`,text:`A sun is in the picture!`,emphasis:[`picture`]},{type:`ask`,who:`momo`,prompt:`Can you find the picture?`,answerId:`picture`,retry:[`Hmm! One more look!`,`Almost! You can do it!`,`Try again! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The pretty picture!`},{type:`echo`,who:`lulu`,word:`picture`,invite:`Can you say it? PICTURE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! PICTURE!`},{type:`choice`,who:`lulu`,prompt:`The dinosaur or the egg?`,options:[{id:`dinosaur`,label:`Dinosaur`},{id:`egg`,label:`Egg`}]},{type:`say`,who:`momo`,emote:`happy`,text:`My bag and my ticket are here!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! An old fish!`},{type:`ask`,who:`lulu`,prompt:`Where is the fish?`,answerId:`fish`,retry:[`Oh! Not this one!`,`Oh! One more try!`,`Almost! Look again!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The old old fish!`},{type:`say`,who:`momo`,emote:`thinking`,text:`My plane is not SO big! Ha ha!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A gold bird!`},{type:`choice`,who:`momo`,prompt:`The fish or the bird?`,options:[{id:`fish`,label:`Fish`},{id:`bird`,label:`Bird`}]},{type:`finale`,line:`What a wonderful museum!`},{type:`goto`,scene:`science`,bridgeLabel:`Off we go! Come and see!`}],zu={id:Nu,version:1,scene:Pu,theme:Fu,targetWords:Iu,reviewWords:Lu,durationTargetSec:540,steps:Ru},Bu=t({default:()=>qu,durationTargetSec:()=>540,id:()=>Vu,reviewWords:()=>Gu,scene:()=>Hu,steps:()=>Ku,targetWords:()=>Wu,theme:()=>Uu,version:()=>1}),Vu=`park-01-a-sunny-day`,Hu=`park`,Uu=`park-and-play`,Wu=[`ball`,`tree`,`flower`],Gu=[],Ku=[{type:`say`,who:`momo`,emote:`happy`,text:`Hello! Hello! I am Momo!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Hello, friend! I am Lulu!`},{type:`say`,who:`momo`,emote:`happy`,text:`It is a sunny day!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`bench`,durSec:1.5},{type:`say`,who:`momo`,emote:`surprised`,text:`Look! What is that?`},{type:`say`,who:`lulu`,emote:`happy`,text:`That is a ball!`,emphasis:[`ball`]},{type:`say`,who:`momo`,emote:`thinking`,text:`A ball! It is... green?`,emphasis:[`ball`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not green! It is red!`,emphasis:[`ball`]},{type:`ask`,who:`lulu`,prompt:`Where is the red ball?`,answerId:`ball`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big red ball!`},{type:`do`,action:`kick`,who:`momo`,targetId:`ball`,durSec:1.2},{type:`say`,who:`momo`,emote:`happy`,text:`Wow! The ball is fun!`},{type:`chant`,who:`both`,lines:[`Bounce! Bounce! Red ball!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look at the big tree!`,emphasis:[`tree`]},{type:`say`,who:`momo`,emote:`surprised`,text:`The tree is so green!`,emphasis:[`tree`]},{type:`ask`,who:`momo`,prompt:`Help me! Find the tree!`,answerId:`tree`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! The big green tree!`},{type:`do`,action:`sit`,who:`momo`,targetId:`tree`,durSec:1.5},{type:`say`,who:`lulu`,emote:`happy`,text:`The tree is big and green.`},{type:`say`,who:`momo`,emote:`surprised`,text:`Look! A little flower!`,emphasis:[`flower`]},{type:`say`,who:`lulu`,emote:`happy`,text:`The flower is yellow!`,emphasis:[`flower`]},{type:`say`,who:`momo`,emote:`happy`,text:`I like the yellow flower!`},{type:`ask`,who:`lulu`,prompt:`Do you see the flower?`,answerId:`flower`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The pretty yellow flower!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`flower`,durSec:1.2},{type:`do`,action:`give`,who:`momo`,targetId:`flower`,durSec:1.5},{type:`say`,who:`lulu`,emote:`happy`,text:`Thank you, Momo!`},{type:`say`,who:`momo`,emote:`happy`,text:`The flower is for you!`},{type:`choice`,who:`lulu`,prompt:`Ball or flower?`,options:[{id:`ball`,label:`Ball`},{id:`flower`,label:`Flower`}]},{type:`say`,who:`momo`,emote:`happy`,text:`Yay! I like it too!`},{type:`say`,who:`momo`,emote:`thinking`,text:`Momo is hungry now!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Let's go home, Momo!`},{type:`finale`,line:`What a happy sunny day!`},{type:`goto`,scene:`home`,bridgeLabel:`Off we go home!`}],qu={id:Vu,version:1,scene:Hu,theme:Uu,targetWords:Wu,reviewWords:Gu,durationTargetSec:540,steps:Ku},Ju=t({default:()=>td,durationTargetSec:()=>540,id:()=>Yu,reviewWords:()=>$u,scene:()=>Xu,steps:()=>ed,targetWords:()=>Qu,theme:()=>Zu,version:()=>1}),Yu=`playground-01-come-and-play`,Xu=`playground`,Zu=`play-and-taking-turns`,Qu=[`swing`,`slide`,`sand`],$u=[`book`,`pencil`,`chair`,`ball`,`tree`],ed=[{type:`say`,who:`momo`,emote:`happy`,text:`Now we play! Let's go!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A big red swing!`,emphasis:[`swing`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The swing is... little?`,emphasis:[`swing`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not little! So big!`,emphasis:[`swing`]},{type:`ask`,who:`lulu`,prompt:`Can you find the swing?`,answerId:`swing`,retry:[`Oh! One more try!`,`Almost! Look again!`,`Hmm! One more look!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big red swing!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`swing`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`Up and down! Up and down!`},{type:`echo`,who:`lulu`,word:`swing`,invite:`Can you say it? SWING!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SWING!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Now look! A green slide!`,emphasis:[`slide`]},{type:`say`,who:`momo`,emote:`surprised`,text:`The slide is so big!`,emphasis:[`slide`]},{type:`ask`,who:`momo`,prompt:`Where is the green slide?`,answerId:`slide`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yay! The big green slide!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`slide`,durSec:1.6},{type:`say`,who:`momo`,emote:`happy`,text:`Wow! The slide is fun!`},{type:`echo`,who:`momo`,word:`slide`,invite:`Say it with Momo! SLIDE!`,confirm:`I heard you! Great!`,neutral:`Good try! SLIDE!`},{type:`chant`,who:`both`,lines:[`Up and down! Swing and slide!`],repeat:2},{type:`choice`,who:`lulu`,prompt:`The swing or the slide?`,options:[{id:`swing`,label:`Swing`},{id:`slide`,label:`Slide`}]},{type:`say`,who:`lulu`,emote:`happy`,text:`Look down! Yellow sand!`,emphasis:[`sand`]},{type:`say`,who:`momo`,emote:`happy`,text:`The sand is soft and warm.`,emphasis:[`sand`]},{type:`ask`,who:`lulu`,prompt:`Do you see the sand?`,answerId:`sand`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The soft yellow sand!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`sand`,durSec:1.4},{type:`say`,who:`momo`,emote:`happy`,text:`I can dig in the sand!`},{type:`echo`,who:`lulu`,word:`sand`,invite:`You too! SAND!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SAND!`},{type:`say`,who:`lulu`,emote:`thinking`,text:`Momo, where is your book?`},{type:`say`,who:`momo`,emote:`happy`,text:`My book is at school!`},{type:`say`,who:`lulu`,emote:`happy`,text:`My pencil and chair are at school.`},{type:`ask`,who:`momo`,prompt:`Help Momo! Find the ball!`,answerId:`ball`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! The little red ball!`},{type:`do`,action:`kick`,who:`momo`,targetId:`ball`,durSec:1.2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look at the big tree!`},{type:`choice`,who:`momo`,prompt:`The ball or the seesaw?`,options:[{id:`ball`,label:`Ball`},{id:`seesaw`,label:`Seesaw`}]},{type:`ask`,who:`lulu`,prompt:`Can you find the seesaw?`,answerId:`seesaw`,retry:[`Not that one, friend!`,`Oh! Not this one!`,`Oh! One more try!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! Up and down on the seesaw!`},{type:`do`,action:`sit`,who:`lulu`,targetId:`bench`,durSec:1.5},{type:`say`,who:`lulu`,emote:`happy`,text:`Sit with me. I am sleepy.`},{type:`say`,who:`momo`,emote:`happy`,text:`The swing, the slide, the sand!`},{type:`say`,who:`lulu`,emote:`sleepy`,text:`Now milk, teddy bear and bed!`},{type:`echo`,who:`momo`,word:`play`,invite:`Can you say it? PLAY!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! PLAY!`},{type:`finale`,line:`What a fun day! Thank you, friend!`},{type:`goto`,scene:`grocery`,bridgeLabel:`Off to the shop!`}],td={id:Yu,version:1,scene:Xu,theme:Zu,targetWords:Qu,reviewWords:$u,durationTargetSec:540,steps:ed},nd=t({default:()=>ld,durationTargetSec:()=>540,id:()=>rd,reviewWords:()=>sd,scene:()=>id,steps:()=>cd,targetWords:()=>od,theme:()=>ad,version:()=>1}),rd=`restaurant-01-pizza-please`,id=`restaurant`,ad=`dinner-together`,od=[`pizza`,`plate`,`spoon`],sd=[`robot`,`telescope`,`star`,`tomato`,`cup`],cd=[{type:`say`,who:`momo`,emote:`thinking`,text:`I am SO hungry now!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! Warm pizza!`,emphasis:[`pizza`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The pizza is... cold?`,emphasis:[`pizza`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not cold! Warm pizza!`,emphasis:[`pizza`]},{type:`ask`,who:`lulu`,prompt:`Where is the pizza?`,answerId:`pizza`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! Warm yummy pizza!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`pizza`,durSec:1.4},{type:`echo`,who:`momo`,word:`pizza`,invite:`Can you say it? PIZZA!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! PIZZA!`},{type:`chant`,who:`both`,lines:[`Pizza, pizza, yummy pizza!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Here is your plate.`,emphasis:[`plate`]},{type:`say`,who:`momo`,emote:`happy`,text:`Pizza on my plate! Yay!`,emphasis:[`plate`]},{type:`ask`,who:`momo`,prompt:`Do you see the plate?`,answerId:`plate`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The white plate!`},{type:`echo`,who:`lulu`,word:`plate`,invite:`Say it with Momo! PLATE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! PLATE!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And here is a spoon.`,emphasis:[`spoon`]},{type:`say`,who:`momo`,emote:`happy`,text:`A big spoon for me!`,emphasis:[`spoon`]},{type:`ask`,who:`lulu`,prompt:`Can you find the spoon?`,answerId:`spoon`,retry:[`Not that one, friend!`,`Oh! Not this one!`,`Oh! One more try!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little spoon!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`spoon`,durSec:1.2},{type:`echo`,who:`momo`,word:`spoon`,invite:`You too! SPOON!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SPOON!`},{type:`choice`,who:`lulu`,prompt:`Pizza or bread?`,options:[{id:`pizza`,label:`Pizza`},{id:`plate`,label:`Plate`}]},{type:`say`,who:`momo`,emote:`happy`,text:`The tomato is in the pizza!`},{type:`ask`,who:`momo`,prompt:`Where is the tomato?`,answerId:`tomato`,retry:[`You can find it!`,`Look here, friend!`,`Hmm, not that one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The red tomato!`},{type:`say`,who:`lulu`,emote:`happy`,text:`A robot can not eat! Ha ha!`},{type:`say`,who:`momo`,emote:`happy`,text:`A star in my telescope! Look!`},{type:`choice`,who:`momo`,prompt:`The spoon or the cup?`,options:[{id:`spoon`,label:`Spoon`},{id:`cup`,label:`Cup`}]},{type:`finale`,line:`Yummy pizza! Thank you!`},{type:`goto`,scene:`cafe`,bridgeLabel:`Cake time!`}],ld={id:rd,version:1,scene:id,theme:ad,targetWords:od,reviewWords:sd,durationTargetSec:540,steps:cd},ud=t({default:()=>_d,durationTargetSec:()=>540,id:()=>dd,reviewWords:()=>hd,scene:()=>fd,steps:()=>gd,targetWords:()=>md,theme:()=>pd,version:()=>1}),dd=`school-01-first-day`,fd=`school`,pd=`school-things`,md=[`book`,`pencil`,`chair`],hd=[`milk`,`bed`,`teddy bear`,`ball`,`tree`,`flower`],gd=[{type:`say`,who:`momo`,emote:`happy`,text:`Good morning, Lulu!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Good morning, Momo!`},{type:`say`,who:`momo`,emote:`surprised`,text:`Look! Our school!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A tree and a flower!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`door`,durSec:1.5},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A big book!`,emphasis:[`book`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The book is... red?`,emphasis:[`book`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not red! Blue book!`,emphasis:[`book`]},{type:`ask`,who:`lulu`,prompt:`Where is the big book?`,answerId:`book`,retry:[`Oh! Not this one!`,`Oh! One more try!`,`Almost! Look again!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big blue book!`},{type:`do`,action:`pickUp`,who:`momo`,targetId:`book`,durSec:1.2},{type:`say`,who:`momo`,emote:`happy`,text:`I like this book!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A little pencil!`,emphasis:[`pencil`]},{type:`say`,who:`momo`,emote:`happy`,text:`The pencil is red!`,emphasis:[`pencil`]},{type:`ask`,who:`momo`,prompt:`Do you see the pencil?`,answerId:`pencil`,retry:[`Look here, friend!`,`Hmm, not that one!`,`Not that one, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little red pencil!`},{type:`do`,action:`pickUp`,who:`lulu`,targetId:`pencil`,durSec:1.2},{type:`say`,who:`lulu`,emote:`happy`,text:`We draw with the pencil!`},{type:`chant`,who:`both`,lines:[`Draw and see! One, two, three!`],repeat:2},{type:`say`,who:`momo`,emote:`surprised`,text:`Where is my chair?`,emphasis:[`chair`]},{type:`say`,who:`lulu`,emote:`happy`,text:`The chair is by the desk!`,emphasis:[`chair`]},{type:`ask`,who:`lulu`,prompt:`Help Momo! Find the chair!`,answerId:`chair`,retry:[`Almost! You can do it!`,`Try again! You can do it!`,`You can find it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! That is your chair!`},{type:`do`,action:`sit`,who:`momo`,targetId:`chair`,durSec:1.5},{type:`say`,who:`momo`,emote:`happy`,text:`I sit on my chair!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Here is your milk!`,emphasis:[`milk`]},{type:`do`,action:`give`,who:`lulu`,targetId:`milk`,durSec:1.5},{type:`echo`,who:`lulu`,word:`milk`,invite:`You too! Say MILK!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! MILK!`},{type:`say`,who:`momo`,emote:`happy`,text:`Thank you! I like milk!`},{type:`choice`,who:`lulu`,prompt:`Ball or book?`,options:[{id:`ball`,label:`Ball`},{id:`book`,label:`Book`}]},{type:`say`,who:`momo`,emote:`happy`,text:`Yay! So fun!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Time to go home!`},{type:`say`,who:`momo`,emote:`sleepy`,text:`My bed and my teddy bear!`},{type:`finale`,line:`Book and pencil! Wonderful day!`},{type:`goto`,scene:`playground`,bridgeLabel:`Off to play!`}],_d={id:dd,version:1,scene:fd,theme:pd,targetWords:md,reviewWords:hd,durationTargetSec:540,steps:gd},vd=t({default:()=>Td,durationTargetSec:()=>540,id:()=>yd,reviewWords:()=>Cd,scene:()=>bd,steps:()=>wd,targetWords:()=>Sd,theme:()=>xd,version:()=>1}),yd=`science-01-hello-robot`,bd=`science`,xd=`things-that-move`,Sd=[`robot`,`telescope`,`star`],Cd=[`dinosaur`,`picture`,`egg`,`rocket`,`ball`],wd=[{type:`say`,who:`momo`,emote:`surprised`,text:`Look! It can move!`},{type:`say`,who:`lulu`,emote:`happy`,text:`That is a robot!`,emphasis:[`robot`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The robot is... a cat?`,emphasis:[`robot`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not a cat! A robot!`,emphasis:[`robot`]},{type:`ask`,who:`lulu`,prompt:`Where is the robot?`,answerId:`robot`,retry:[`Look here, friend!`,`Hmm, not that one!`,`Not that one, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The happy robot!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`robot`,durSec:1.5},{type:`echo`,who:`momo`,word:`robot`,invite:`Say it with Momo! ROBOT!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! ROBOT!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look in this! You can see far!`},{type:`say`,who:`momo`,emote:`surprised`,text:`A telescope! Wow!`,emphasis:[`telescope`]},{type:`ask`,who:`momo`,prompt:`Do you see the telescope?`,answerId:`telescope`,retry:[`Almost! You can do it!`,`Try again! You can do it!`,`You can find it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big blue telescope!`},{type:`do`,action:`hopTo`,who:`lulu`,targetId:`telescope`,durSec:1.4},{type:`say`,who:`lulu`,emote:`happy`,text:`I see a star! A little star!`,emphasis:[`star`]},{type:`ask`,who:`lulu`,prompt:`Can you find the star?`,answerId:`star`,retry:[`Oh! One more try!`,`Almost! Look again!`,`Hmm! One more look!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The yellow star!`},{type:`echo`,who:`lulu`,word:`star`,invite:`You too! STAR!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! STAR!`},{type:`chant`,who:`both`,lines:[`One, two, three... go!`],repeat:2},{type:`say`,who:`momo`,emote:`happy`,text:`Look! A little rocket!`},{type:`ask`,who:`momo`,prompt:`Where is the rocket?`,answerId:`rocket`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little red rocket!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Like the dinosaur picture! Ha ha!`},{type:`echo`,who:`momo`,word:`telescope`,invite:`Say it with me! TELESCOPE!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! TELESCOPE!`},{type:`choice`,who:`lulu`,prompt:`The robot or the rocket?`,options:[{id:`robot`,label:`Robot`},{id:`rocket`,label:`Rocket`}]},{type:`say`,who:`momo`,emote:`happy`,text:`The ball can go down! Look!`},{type:`do`,action:`kick`,who:`momo`,targetId:`ball`,durSec:1.2},{type:`say`,who:`lulu`,emote:`happy`,text:`Like a big egg! Ha ha!`},{type:`choice`,who:`momo`,prompt:`The star or the ball?`,options:[{id:`star`,label:`Star`},{id:`ball`,label:`Ball`}]},{type:`finale`,line:`Robot, star, telescope! Wow!`},{type:`goto`,scene:`restaurant`,bridgeLabel:`Time to eat!`}],Td={id:yd,version:1,scene:bd,theme:xd,targetWords:Sd,reviewWords:Cd,durationTargetSec:540,steps:wd},Ed=t({default:()=>Nd,durationTargetSec:()=>540,id:()=>Dd,reviewWords:()=>jd,scene:()=>Od,steps:()=>Md,targetWords:()=>Ad,theme:()=>kd,version:()=>1}),Dd=`space-01-to-the-moon`,Od=`space`,kd=`goodnight-universe`,Ad=[`rocket`,`moon`,`sun`],jd=[`cake`,`cookie`,`star`,`telescope`],Md=[{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! Look up! A star! And more!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And look! A big rocket!`,emphasis:[`rocket`]},{type:`say`,who:`momo`,emote:`happy`,text:`The rocket can go up! Up!`,emphasis:[`rocket`]},{type:`ask`,who:`lulu`,prompt:`Where is the rocket?`,answerId:`rocket`,retry:[`Oh! One more try!`,`Almost! Look again!`,`Hmm! One more look!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big red rocket!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`rocket`,durSec:1.5},{type:`echo`,who:`momo`,word:`rocket`,invite:`You too! ROCKET!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! ROCKET!`},{type:`chant`,who:`both`,lines:[`Rocket to the moon!`],repeat:2},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! The moon!`,emphasis:[`moon`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The moon is... cheese?`,emphasis:[`moon`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not cheese! The moon!`,emphasis:[`moon`]},{type:`ask`,who:`momo`,prompt:`Do you see the moon?`,answerId:`moon`,retry:[`Hmm, not that one!`,`Not that one, friend!`,`Oh! Not this one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The big white moon!`},{type:`echo`,who:`lulu`,word:`moon`,invite:`Say it with me! MOON!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! MOON!`},{type:`say`,who:`momo`,emote:`happy`,text:`Like a cookie! Like a cake!`},{type:`say`,who:`lulu`,emote:`happy`,text:`And that is the sun.`,emphasis:[`sun`]},{type:`say`,who:`momo`,emote:`happy`,text:`The sun is warm and yellow!`,emphasis:[`sun`]},{type:`ask`,who:`lulu`,prompt:`Can you find the sun?`,answerId:`sun`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The warm yellow sun!`},{type:`echo`,who:`momo`,word:`sun`,invite:`Can you say it? SUN!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! SUN!`},{type:`choice`,who:`lulu`,prompt:`The moon or the sun?`,options:[{id:`moon`,label:`Moon`},{id:`sun`,label:`Sun`}]},{type:`say`,who:`lulu`,emote:`happy`,text:`I see a star in the telescope!`},{type:`ask`,who:`momo`,prompt:`Where is the star?`,answerId:`star`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little gold star!`},{type:`say`,who:`momo`,emote:`happy`,text:`One star, two, three!`},{type:`say`,who:`lulu`,emote:`sleepy`,text:`I am sleepy now, Momo.`},{type:`say`,who:`momo`,emote:`sleepy`,text:`Good night, moon! Good night, sun!`},{type:`choice`,who:`momo`,prompt:`The rocket or the star?`,options:[{id:`rocket`,label:`Rocket`},{id:`star`,label:`Star`}]},{type:`chant`,who:`both`,lines:[`Good night! Sleep well!`],repeat:2},{type:`finale`,line:`Good night, little star! Sleep well!`}],Nd={id:Dd,version:1,scene:Od,theme:kd,targetWords:Ad,reviewWords:jd,durationTargetSec:540,steps:Md},Pd=t({default:()=>Bd,durationTargetSec:()=>540,id:()=>Fd,reviewWords:()=>Rd,scene:()=>`zoo`,steps:()=>zd,targetWords:()=>Ld,theme:()=>Id,version:()=>1}),Fd=`zoo-01-who-lives-here`,Id=`animals-and-their-names`,Ld=[`lion`,`elephant`,`monkey`],Rd=[`tooth`,`toothbrush`,`cup`,`duck`,`tree`],zd=[{type:`say`,who:`momo`,emote:`surprised`,text:`Wow! This is the zoo!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look! A big lion!`,emphasis:[`lion`]},{type:`say`,who:`momo`,emote:`surprised`,text:`The lion has a big tooth!`,emphasis:[`lion`]},{type:`ask`,who:`lulu`,prompt:`Where is the lion?`,answerId:`lion`,retry:[`Try again! You can do it!`,`You can find it!`,`Look here, friend!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Hooray! The big lion!`},{type:`do`,action:`hopTo`,who:`momo`,targetId:`lion`,durSec:1.5},{type:`say`,who:`momo`,emote:`thinking`,text:`A toothbrush for the lion? Ha ha!`},{type:`echo`,who:`lulu`,word:`lion`,invite:`Say it with Momo! LION!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! LION!`},{type:`say`,who:`lulu`,emote:`happy`,text:`Look up! A little monkey!`,emphasis:[`monkey`]},{type:`say`,who:`momo`,emote:`thinking`,text:`The monkey is... big?`,emphasis:[`monkey`]},{type:`say`,who:`lulu`,emote:`happy`,text:`Ha ha! Not big! Little monkey!`,emphasis:[`monkey`]},{type:`ask`,who:`momo`,prompt:`Do you see the monkey?`,answerId:`monkey`,retry:[`Almost! Look again!`,`Hmm! One more look!`,`Almost! You can do it!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little monkey!`},{type:`echo`,who:`momo`,word:`monkey`,invite:`You too! MONKEY!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! MONKEY!`},{type:`choice`,who:`lulu`,prompt:`The lion or the monkey?`,options:[{id:`lion`,label:`Lion`},{id:`monkey`,label:`Monkey`}]},{type:`say`,who:`lulu`,emote:`surprised`,text:`Now look! So big!`},{type:`say`,who:`momo`,emote:`surprised`,text:`An elephant! Wow!`,emphasis:[`elephant`]},{type:`ask`,who:`lulu`,prompt:`Can you find the elephant?`,answerId:`elephant`,retry:[`Not that one, friend!`,`Oh! Not this one!`,`Oh! One more try!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Wow! The big big elephant!`},{type:`do`,action:`hopTo`,who:`lulu`,targetId:`elephant`,durSec:1.5},{type:`say`,who:`lulu`,emote:`happy`,text:`The elephant is big and happy.`,emphasis:[`elephant`]},{type:`echo`,who:`lulu`,word:`elephant`,invite:`Say it with me! ELEPHANT!`,confirm:`I heard you! Wonderful!`,neutral:`Great try! ELEPHANT!`},{type:`chant`,who:`both`,lines:[`Big lion! Little monkey!`],repeat:2},{type:`say`,who:`momo`,emote:`happy`,text:`Look! The duck! Hello, duck!`},{type:`ask`,who:`momo`,prompt:`Where is the duck?`,answerId:`duck`,retry:[`You can find it!`,`Look here, friend!`,`Hmm, not that one!`],scaffold:[`glow`,`bounce`,`characterPoint`],praise:`Yes! The little yellow duck!`},{type:`say`,who:`lulu`,emote:`happy`,text:`I have milk in my cup.`},{type:`say`,who:`momo`,emote:`happy`,text:`The elephant is by the tree!`},{type:`choice`,who:`momo`,prompt:`The elephant or the duck?`,options:[{id:`elephant`,label:`Elephant`},{id:`duck`,label:`Duck`}]},{type:`say`,who:`lulu`,emote:`happy`,text:`What a happy zoo day!`},{type:`finale`,line:`The lion, the monkey, the elephant! Wow!`},{type:`goto`,scene:`beach`,bridgeLabel:`To the beach!`}],Bd={id:Fd,version:1,scene:`zoo`,theme:Id,targetWords:Ld,reviewWords:Rd,durationTargetSec:540,steps:zd},Vd=t({default:()=>Hd}),Hd=[`park-01-a-sunny-day`,`home-01-hungry-evening`,`school-01-first-day`,`playground-01-come-and-play`,`grocery-01-what-do-we-need`,`market-01-red-and-orange`,`dentist-01-a-happy-smile`,`zoo-01-who-lives-here`,`beach-01-splash-splash`,`airport-01-up-up-up`,`museum-01-big-big-dinosaur`,`science-01-hello-robot`,`restaurant-01-pizza-please`,`cafe-01-something-sweet`,`space-01-to-the-moon`],Ud=t({default:()=>qd,interactables:()=>Kd,mood:()=>Gd,scene:()=>Wd}),Wd=`airport`,Gd=`big sky, bigger machines`,Kd=[{id:`plane`,displayName:{en:`Plane`,tr:`Uçak`},collider:{type:`box`,scale:1.5},hopPoint:[.8,0,2.4],keepClearRadius:2},{id:`bag`,displayName:{en:`Bag`,tr:`Çanta`},collider:{type:`sphere`,scale:1.8},hopPoint:[-3.4,0,3.4],keepClearRadius:1.2},{id:`ticket`,displayName:{en:`Ticket`,tr:`Bilet`},collider:{type:`box`,scale:2},hopPoint:[-4.8,0,1.6],keepClearRadius:1.2},{id:`cart`,displayName:{en:`Cart`,tr:`Araba`},collider:{type:`box`,scale:1.6},hopPoint:[-1.6,0,4.4],keepClearRadius:1.4},{id:`bird`,displayName:{en:`Bird`,tr:`Kuş`},collider:{type:`sphere`,scale:2.2},hopPoint:[4.6,0,3.6],keepClearRadius:1.2}],qd={scene:Wd,mood:Gd,interactables:Kd},Jd=t({default:()=>Qd,interactables:()=>Zd,mood:()=>Xd,scene:()=>Yd}),Yd=`beach`,Xd=`warm sand, sparkling sea, salt air`,Zd=[{id:`sea`,displayName:{en:`Sea`,tr:`Deniz`},collider:{type:`box`,scale:1.5},hopPoint:[0,0,-1.6],keepClearRadius:1.6},{id:`boat`,displayName:{en:`Boat`,tr:`Tekne`},collider:{type:`box`,scale:1.6},hopPoint:[3.4,0,-1.4],keepClearRadius:1.5},{id:`shell`,displayName:{en:`Shell`,tr:`Deniz kabuğu`},collider:{type:`sphere`,scale:2.2},hopPoint:[-1.8,0,2.6],keepClearRadius:1},{id:`crab`,displayName:{en:`Crab`,tr:`Yengeç`},collider:{type:`sphere`,scale:2},hopPoint:[1.8,0,3.2],keepClearRadius:1.2},{id:`sand`,displayName:{en:`Sand`,tr:`Kum`},collider:{type:`box`,scale:1.5},hopPoint:[-3.8,0,3.4],keepClearRadius:1.5},{id:`ball`,displayName:{en:`Ball`,tr:`Top`},collider:{type:`sphere`,scale:1.9},hopPoint:[4.4,0,3.6],keepClearRadius:1.2},{id:`duck`,displayName:{en:`Duck`,tr:`Ördek`},collider:{type:`sphere`,scale:2},hopPoint:[-4.6,0,.6],keepClearRadius:1.2}],Qd={scene:Yd,mood:Xd,interactables:Zd},$d=t({default:()=>rf,interactables:()=>nf,mood:()=>tf,scene:()=>ef}),ef=`cafe`,tf=`sweet smells and window light`,nf=[{id:`cake`,displayName:{en:`Cake`,tr:`Pasta`},collider:{type:`sphere`,scale:1.9},hopPoint:[-2.2,0,2.2],keepClearRadius:1.3},{id:`cookie`,displayName:{en:`Cookie`,tr:`Kurabiye`},collider:{type:`sphere`,scale:2.2},hopPoint:[-.6,0,2.4],keepClearRadius:1},{id:`bread`,displayName:{en:`Bread`,tr:`Ekmek`},collider:{type:`box`,scale:1.9},hopPoint:[1,0,2.4],keepClearRadius:1.1},{id:`cup`,displayName:{en:`Cup`,tr:`Fincan`},collider:{type:`sphere`,scale:2},hopPoint:[2.6,0,2.2],keepClearRadius:1.1},{id:`milk`,displayName:{en:`Milk`,tr:`Süt`},collider:{type:`sphere`,scale:2},hopPoint:[4,0,2],keepClearRadius:1.1},{id:`table`,displayName:{en:`Table`,tr:`Masa`},collider:{type:`box`,scale:1.5},hopPoint:[-4.3,0,3.6],keepClearRadius:1.6}],rf={scene:ef,mood:tf,interactables:nf},af=t({default:()=>lf,interactables:()=>cf,mood:()=>sf,scene:()=>of}),of=`dentist`,sf=`warm cream and mint — a sunny room, never a clinic`,cf=[{id:`tooth`,displayName:{en:`Tooth`,tr:`Diş`},collider:{type:`sphere`,scale:1.8},hopPoint:[-2.6,0,1.6],keepClearRadius:1.2},{id:`toothbrush`,displayName:{en:`Toothbrush`,tr:`Diş fırçası`},collider:{type:`box`,scale:2},hopPoint:[-1.4,0,2.6],keepClearRadius:1},{id:`mirror`,displayName:{en:`Mirror`,tr:`Ayna`},collider:{type:`box`,scale:2},hopPoint:[-.2,0,2.6],keepClearRadius:1},{id:`cup`,displayName:{en:`Cup`,tr:`Bardak`},collider:{type:`sphere`,scale:2},hopPoint:[1,0,2.6],keepClearRadius:1},{id:`chair`,displayName:{en:`Chair`,tr:`Koltuk`},collider:{type:`box`,scale:1.5},hopPoint:[2.6,0,1],keepClearRadius:1.8},{id:`fish`,displayName:{en:`Fish`,tr:`Balık`},collider:{type:`box`,scale:1.6},hopPoint:[4.2,0,3],keepClearRadius:1.3},{id:`toy`,displayName:{en:`Toy`,tr:`Oyuncak`},collider:{type:`box`,scale:1.6},hopPoint:[-4,0,3.4],keepClearRadius:1.4},{id:`balloon`,displayName:{en:`Balloon`,tr:`Balon`},collider:{type:`sphere`,scale:1.8},hopPoint:[-3,0,2.5],keepClearRadius:1.2},{id:`teddy-bear`,displayName:{en:`Teddy bear`,tr:`Oyuncak ayı`},collider:{type:`sphere`,scale:2},hopPoint:[3.8,0,.8],keepClearRadius:1.2}],lf={scene:of,mood:sf,interactables:cf},uf=t({default:()=>mf,interactables:()=>pf,mood:()=>ff,scene:()=>df}),df=`grocery`,ff=`clean brights, full shelves, everything within reach`,pf=[{id:`cart`,displayName:{en:`Cart`,tr:`Alışveriş arabası`},collider:{type:`box`,scale:1.5},hopPoint:[0,0,4],keepClearRadius:1.6},{id:`apple`,displayName:{en:`Apple`,tr:`Elma`},collider:{type:`sphere`,scale:2.2},hopPoint:[-2.6,0,2.4],keepClearRadius:1},{id:`banana`,displayName:{en:`Banana`,tr:`Muz`},collider:{type:`sphere`,scale:2.2},hopPoint:[-1.2,0,2.4],keepClearRadius:1},{id:`bread`,displayName:{en:`Bread`,tr:`Ekmek`},collider:{type:`box`,scale:1.9},hopPoint:[1.4,0,2.4],keepClearRadius:1.1},{id:`cheese`,displayName:{en:`Cheese`,tr:`Peynir`},collider:{type:`sphere`,scale:2.1},hopPoint:[2.8,0,2.4],keepClearRadius:1},{id:`milk`,displayName:{en:`Milk`,tr:`Süt`},collider:{type:`sphere`,scale:2},hopPoint:[4.2,0,2.4],keepClearRadius:1.1},{id:`shelf`,displayName:{en:`Shelf`,tr:`Raf`},collider:{type:`box`,scale:1.5},hopPoint:[-4.4,0,.6],keepClearRadius:1.7},{id:`egg`,displayName:{en:`Egg`,tr:`Yumurta`},collider:{type:`sphere`,scale:2.2},hopPoint:[.1,0,2.4],keepClearRadius:1},{id:`orange`,displayName:{en:`Orange`,tr:`Portakal`},collider:{type:`box`,scale:1.6},hopPoint:[-2.9,0,3.3],keepClearRadius:1.2}],mf={scene:df,mood:ff,interactables:pf},hf=t({default:()=>yf,interactables:()=>vf,mood:()=>_f,scene:()=>gf}),gf=`home`,_f=`warm ambers`,vf=[{id:`milk`,displayName:{en:`Milk`,tr:`Süt`},collider:{type:`sphere`,scale:2},hopPoint:[.9,0,3.8],keepClearRadius:1.2},{id:`bed`,displayName:{en:`Bed`,tr:`Yatak`},collider:{type:`box`,scale:1.5},hopPoint:[-2.6,0,3.2],keepClearRadius:1.8},{id:`teddy-bear`,displayName:{en:`Teddy bear`,tr:`Oyuncak ayı`},collider:{type:`sphere`,scale:2},hopPoint:[-3.4,0,4.2],keepClearRadius:1.2},{id:`table`,displayName:{en:`Table`,tr:`Masa`},collider:{type:`box`,scale:1.5},hopPoint:[1.8,0,4.6],keepClearRadius:1.6},{id:`window`,displayName:{en:`Window`,tr:`Pencere`},collider:{type:`box`,scale:1.6},hopPoint:[3,0,2.6],keepClearRadius:1.5},{id:`lamp`,displayName:{en:`Lamp`,tr:`Lamba`},collider:{type:`sphere`,scale:1.7},hopPoint:[-1.6,0,-3.5],keepClearRadius:1.2},{id:`ball`,displayName:{en:`Ball`,tr:`Top`},collider:{type:`sphere`,scale:1.8},hopPoint:[.4,0,5],keepClearRadius:1.4},{id:`sofa`,displayName:{en:`Sofa`,tr:`Kanepe`},collider:{type:`box`,scale:1.5},hopPoint:[2.2,0,2.8],keepClearRadius:1.6},{id:`cat`,displayName:{en:`Cat`,tr:`Kedi`},collider:{type:`sphere`,scale:2.2},hopPoint:[-.4,0,1.6],keepClearRadius:1.1}],yf={scene:gf,mood:_f,interactables:vf},bf=t({default:()=>wf,interactables:()=>Cf,mood:()=>Sf,scene:()=>xf}),xf=`market`,Sf=`striped awnings, outdoors, piled colour`,Cf=[{id:`tomato`,displayName:{en:`Tomato`,tr:`Domates`},collider:{type:`sphere`,scale:2.2},hopPoint:[-2.4,0,2.6],keepClearRadius:1},{id:`carrot`,displayName:{en:`Carrot`,tr:`Havuç`},collider:{type:`sphere`,scale:2.2},hopPoint:[-1,0,2.6],keepClearRadius:1},{id:`apple`,displayName:{en:`Apple`,tr:`Elma`},collider:{type:`sphere`,scale:2.2},hopPoint:[.4,0,2.6],keepClearRadius:1},{id:`basket`,displayName:{en:`Basket`,tr:`Sepet`},collider:{type:`sphere`,scale:1.8},hopPoint:[2.6,0,3.4],keepClearRadius:1.2},{id:`flower`,displayName:{en:`Flower`,tr:`Çiçek`},collider:{type:`sphere`,scale:2},hopPoint:[4.4,0,2.2],keepClearRadius:1.2},{id:`crate`,displayName:{en:`Crate`,tr:`Kasa`},collider:{type:`box`,scale:1.7},hopPoint:[-4.4,0,3],keepClearRadius:1.3},{id:`watermelon`,displayName:{en:`Watermelon`,tr:`Karpuz`},collider:{type:`sphere`,scale:1.8},hopPoint:[1.8,0,3.7],keepClearRadius:1.2},{id:`corn`,displayName:{en:`Corn`,tr:`Mısır`},collider:{type:`sphere`,scale:2.2},hopPoint:[1.6,0,2.6],keepClearRadius:1},{id:`pumpkin`,displayName:{en:`Pumpkin`,tr:`Balkabağı`},collider:{type:`sphere`,scale:1.8},hopPoint:[-2.6,0,4.2],keepClearRadius:1.2}],wf={scene:xf,mood:Sf,interactables:Cf},Tf=t({default:()=>kf,interactables:()=>Of,mood:()=>Df,scene:()=>Ef}),Ef=`museum`,Df=`hushed halls, wonderful old things`,Of=[{id:`dinosaur`,displayName:{en:`Dinosaur`,tr:`Dinozor`},collider:{type:`box`,scale:1.5},hopPoint:[.4,0,2],keepClearRadius:2},{id:`picture`,displayName:{en:`Picture`,tr:`Resim`},collider:{type:`box`,scale:1.7},hopPoint:[-4.2,0,1.4],keepClearRadius:1.4},{id:`egg`,displayName:{en:`Egg`,tr:`Yumurta`},collider:{type:`sphere`,scale:2},hopPoint:[3.6,0,2.6],keepClearRadius:1.2},{id:`fish`,displayName:{en:`Fish`,tr:`Balık`},collider:{type:`box`,scale:1.6},hopPoint:[-3.2,0,3.8],keepClearRadius:1.3},{id:`bird`,displayName:{en:`Bird`,tr:`Kuş`},collider:{type:`sphere`,scale:2},hopPoint:[5,0,-2],keepClearRadius:1.2}],kf={scene:Ef,mood:Df,interactables:Of},Af=t({default:()=>Pf,interactables:()=>Nf,mood:()=>Mf,scene:()=>jf}),jf=`park`,Mf=`fresh greens and sky blue`,Nf=[{id:`ball`,displayName:{en:`Ball`,tr:`Top`},collider:{type:`sphere`,scale:1.8},hopPoint:[1.2,0,4.5],keepClearRadius:1.4},{id:`tree`,displayName:{en:`Tree`,tr:`Ağaç`},collider:{type:`box`,scale:1.5},hopPoint:[-3.2,0,2.8],keepClearRadius:2},{id:`flower`,displayName:{en:`Flower`,tr:`Çiçek`},collider:{type:`sphere`,scale:2},hopPoint:[2.8,0,3.4],keepClearRadius:1.2},{id:`bench`,displayName:{en:`Bench`,tr:`Bank`},collider:{type:`box`,scale:1.6},hopPoint:[-1.8,0,5],keepClearRadius:1.6},{id:`bush`,displayName:{en:`Bush`,tr:`Çalı`},collider:{type:`sphere`,scale:1.6},hopPoint:[4,0,2.2],keepClearRadius:1.5},{id:`pond`,displayName:{en:`Pond`,tr:`Gölet`},collider:{type:`box`,scale:1.5},hopPoint:[2.6,0,5],keepClearRadius:1.6},{id:`duck`,displayName:{en:`Duck`,tr:`Ördek`},collider:{type:`sphere`,scale:2},hopPoint:[2.9,0,3.9],keepClearRadius:1.2},{id:`kite`,displayName:{en:`Kite`,tr:`Uçurtma`},collider:{type:`box`,scale:1.6},hopPoint:[-2.5,0,3.9],keepClearRadius:1.4}],Pf={scene:jf,mood:Mf,interactables:Nf},Ff=t({default:()=>zf,interactables:()=>Rf,mood:()=>Lf,scene:()=>If}),If=`playground`,Lf=`bright rubber colours on soft green`,Rf=[{id:`swing`,displayName:{en:`Swing`,tr:`Salıncak`},collider:{type:`box`,scale:1.5},hopPoint:[-3.6,0,2.4],keepClearRadius:1.9},{id:`slide`,displayName:{en:`Slide`,tr:`Kaydırak`},collider:{type:`box`,scale:1.5},hopPoint:[3.3,0,2.6],keepClearRadius:1.9},{id:`sand`,displayName:{en:`Sand`,tr:`Kum`},collider:{type:`box`,scale:1.5},hopPoint:[.2,0,4.4],keepClearRadius:1.7},{id:`seesaw`,displayName:{en:`Seesaw`,tr:`Tahterevalli`},collider:{type:`box`,scale:1.5},hopPoint:[-1.4,0,.4],keepClearRadius:1.8},{id:`ball`,displayName:{en:`Ball`,tr:`Top`},collider:{type:`sphere`,scale:1.9},hopPoint:[2.2,0,4.6],keepClearRadius:1.2},{id:`bench`,displayName:{en:`Bench`,tr:`Bank`},collider:{type:`box`,scale:1.6},hopPoint:[4.4,0,4.4],keepClearRadius:1.5},{id:`tree`,displayName:{en:`Tree`,tr:`Ağaç`},collider:{type:`box`,scale:1.5},hopPoint:[-4.4,0,-1.2],keepClearRadius:2},{id:`bike`,displayName:{en:`Bike`,tr:`Bisiklet`},collider:{type:`box`,scale:1.6},hopPoint:[5,0,-.9],keepClearRadius:1.3}],zf={scene:If,mood:Lf,interactables:Rf},Bf=t({default:()=>Wf,interactables:()=>Uf,mood:()=>Hf,scene:()=>Vf}),Vf=`restaurant`,Hf=`checkered cloth, warm kitchen smells`,Uf=[{id:`pizza`,displayName:{en:`Pizza`,tr:`Pizza`},collider:{type:`sphere`,scale:1.9},hopPoint:[.2,0,2.6],keepClearRadius:1.4},{id:`plate`,displayName:{en:`Plate`,tr:`Tabak`},collider:{type:`sphere`,scale:2},hopPoint:[-1.6,0,2.8],keepClearRadius:1.1},{id:`spoon`,displayName:{en:`Spoon`,tr:`Kaşık`},collider:{type:`box`,scale:2.2},hopPoint:[1.8,0,3],keepClearRadius:1.1},{id:`cup`,displayName:{en:`Cup`,tr:`Bardak`},collider:{type:`sphere`,scale:2},hopPoint:[-3.2,0,2.2],keepClearRadius:1.1},{id:`table`,displayName:{en:`Table`,tr:`Masa`},collider:{type:`box`,scale:1.5},hopPoint:[-.4,0,4.2],keepClearRadius:1.7},{id:`chair`,displayName:{en:`Chair`,tr:`Sandalye`},collider:{type:`box`,scale:1.6},hopPoint:[2.6,0,4.6],keepClearRadius:1.4},{id:`tomato`,displayName:{en:`Tomato`,tr:`Domates`},collider:{type:`sphere`,scale:2.2},hopPoint:[4.2,0,1.4],keepClearRadius:1}],Wf={scene:Vf,mood:Hf,interactables:Uf},Gf=t({default:()=>Yf,interactables:()=>Jf,mood:()=>qf,scene:()=>Kf}),Kf=`school`,qf=`bright creams and blue`,Jf=[{id:`book`,displayName:{en:`Book`,tr:`Kitap`},collider:{type:`box`,scale:1.8},hopPoint:[1.4,0,4.2],keepClearRadius:1.2},{id:`pencil`,displayName:{en:`Pencil`,tr:`Kalem`},collider:{type:`sphere`,scale:2.2},hopPoint:[2.2,0,3.8],keepClearRadius:1},{id:`chair`,displayName:{en:`Chair`,tr:`Sandalye`},collider:{type:`box`,scale:1.6},hopPoint:[-1.6,0,3.9],keepClearRadius:1.5},{id:`desk`,displayName:{en:`Desk`,tr:`Sıra`},collider:{type:`box`,scale:1.5},hopPoint:[-2.4,0,4.6],keepClearRadius:1.7},{id:`door`,displayName:{en:`Door`,tr:`Kapı`},collider:{type:`box`,scale:1.5},hopPoint:[4.2,0,2.4],keepClearRadius:1.6},{id:`board`,displayName:{en:`Board`,tr:`Tahta`},collider:{type:`box`,scale:1.5},hopPoint:[0,0,2],keepClearRadius:1.8},{id:`bag`,displayName:{en:`Bag`,tr:`Çanta`},collider:{type:`sphere`,scale:1.8},hopPoint:[3.2,0,4.4],keepClearRadius:1.3},{id:`milk`,displayName:{en:`Milk`,tr:`Süt`},collider:{type:`sphere`,scale:2},hopPoint:[.8,0,4.8],keepClearRadius:1.2},{id:`ball`,displayName:{en:`Ball`,tr:`Top`},collider:{type:`sphere`,scale:1.8},hopPoint:[-3.6,0,3],keepClearRadius:1.4}],Yf={scene:Kf,mood:qf,interactables:Jf},Xf=t({default:()=>ep,interactables:()=>$f,mood:()=>Qf,scene:()=>Zf}),Zf=`science`,Qf=`things that move, spin and teach`,$f=[{id:`robot`,displayName:{en:`Robot`,tr:`Robot`},collider:{type:`box`,scale:1.6},hopPoint:[-2.6,0,1.8],keepClearRadius:1.5},{id:`telescope`,displayName:{en:`Telescope`,tr:`Teleskop`},collider:{type:`box`,scale:1.6},hopPoint:[3.2,0,1.2],keepClearRadius:1.5},{id:`rocket`,displayName:{en:`Rocket`,tr:`Roket`},collider:{type:`box`,scale:1.5},hopPoint:[.6,0,3.4],keepClearRadius:1.8},{id:`star`,displayName:{en:`Star`,tr:`Yıldız`},collider:{type:`sphere`,scale:1.9},hopPoint:[-4.8,0,3],keepClearRadius:1.3},{id:`ball`,displayName:{en:`Ball`,tr:`Top`},collider:{type:`sphere`,scale:1.9},hopPoint:[4.8,0,4],keepClearRadius:1.2}],ep={scene:Zf,mood:Qf,interactables:$f},tp=t({default:()=>ap,interactables:()=>ip,mood:()=>rp,scene:()=>np}),np=`space`,rp=`a warm night full of wonders`,ip=[{id:`rocket`,displayName:{en:`Rocket`,tr:`Roket`},collider:{type:`box`,scale:1.5},hopPoint:[.8,0,2.6],keepClearRadius:1.8},{id:`moon`,displayName:{en:`Moon`,tr:`Ay`},collider:{type:`sphere`,scale:1.8},hopPoint:[-3.6,0,1.8],keepClearRadius:1.4},{id:`star`,displayName:{en:`Star`,tr:`Yıldız`},collider:{type:`sphere`,scale:1.9},hopPoint:[3.8,0,2],keepClearRadius:1.3},{id:`sun`,displayName:{en:`Sun`,tr:`Güneş`},collider:{type:`sphere`,scale:1.8},hopPoint:[-5,0,3.4],keepClearRadius:1.4},{id:`telescope`,displayName:{en:`Telescope`,tr:`Teleskop`},collider:{type:`box`,scale:1.6},hopPoint:[4.8,0,4],keepClearRadius:1.5}],ap={scene:np,mood:rp,interactables:ip},op=t({default:()=>lp,interactables:()=>cp,mood:()=>sp,scene:()=>`zoo`}),sp=`leafy paths between friendly enclosures`,cp=[{id:`lion`,displayName:{en:`Lion`,tr:`Aslan`},collider:{type:`sphere`,scale:1.8},hopPoint:[-3,0,1.4],keepClearRadius:1.4},{id:`elephant`,displayName:{en:`Elephant`,tr:`Fil`},collider:{type:`box`,scale:1.5},hopPoint:[2.6,0,.8],keepClearRadius:1.6},{id:`monkey`,displayName:{en:`Monkey`,tr:`Maymun`},collider:{type:`sphere`,scale:2},hopPoint:[-.6,0,2.2],keepClearRadius:1.2},{id:`penguin`,displayName:{en:`Penguin`,tr:`Penguen`},collider:{type:`sphere`,scale:2},hopPoint:[4.6,0,3],keepClearRadius:1.2},{id:`duck`,displayName:{en:`Duck`,tr:`Ördek`},collider:{type:`sphere`,scale:2},hopPoint:[-4.6,0,3.8],keepClearRadius:1.2},{id:`tree`,displayName:{en:`Tree`,tr:`Ağaç`},collider:{type:`box`,scale:1.5},hopPoint:[-4.4,0,-2.8],keepClearRadius:1.8}],lp={scene:`zoo`,mood:sp,interactables:cp},up=t({comment:()=>dp,default:()=>pp,version:()=>1,words:()=>fp}),dp=`Child-facing vocabulary whitelist. Every word spoken or shown to the child MUST be here (hard rule 5). type: content = pedagogical vocabulary tracked by the ledger; function = grammar/glue words; name = character names. exposureMin applies to words used as episode targetWords (default 6).`,fp=[{word:`ball`,type:`content`,cefr:`pre-A1`,theme:`park`,exposureMin:6},{word:`tree`,type:`content`,cefr:`pre-A1`,theme:`nature`,exposureMin:6},{word:`flower`,type:`content`,cefr:`pre-A1`,theme:`nature`,exposureMin:6},{word:`milk`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`bed`,type:`content`,cefr:`pre-A1`,theme:`home`,exposureMin:6},{word:`teddy bear`,type:`content`,cefr:`pre-A1`,theme:`home`,exposureMin:6},{word:`book`,type:`content`,cefr:`pre-A1`,theme:`school`,exposureMin:6},{word:`pencil`,type:`content`,cefr:`pre-A1`,theme:`school`,exposureMin:6},{word:`chair`,type:`content`,cefr:`pre-A1`,theme:`school`,exposureMin:6},{word:`sunny`,type:`content`,cefr:`pre-A1`,theme:`weather`},{word:`day`,type:`content`,cefr:`pre-A1`,theme:`time`},{word:`big`,type:`content`,cefr:`pre-A1`,theme:`size`},{word:`little`,type:`content`,cefr:`pre-A1`,theme:`size`},{word:`red`,type:`content`,cefr:`pre-A1`,theme:`colors`},{word:`green`,type:`content`,cefr:`pre-A1`,theme:`colors`},{word:`yellow`,type:`content`,cefr:`pre-A1`,theme:`colors`},{word:`blue`,type:`content`,cefr:`pre-A1`,theme:`colors`},{word:`cold`,type:`content`,cefr:`pre-A1`,theme:`feel`},{word:`soft`,type:`content`,cefr:`pre-A1`,theme:`feel`},{word:`warm`,type:`content`,cefr:`pre-A1`,theme:`feel`},{word:`pretty`,type:`content`,cefr:`pre-A1`,theme:`feel`},{word:`hungry`,type:`content`,cefr:`pre-A1`,theme:`feelings`},{word:`sleepy`,type:`content`,cefr:`pre-A1`,theme:`feelings`},{word:`happy`,type:`content`,cefr:`pre-A1`,theme:`feelings`},{word:`fun`,type:`content`,cefr:`pre-A1`,theme:`feelings`},{word:`good`,type:`content`,cefr:`pre-A1`,theme:`feelings`},{word:`friend`,type:`content`,cefr:`pre-A1`,theme:`people`},{word:`home`,type:`content`,cefr:`pre-A1`,theme:`places`},{word:`school`,type:`content`,cefr:`pre-A1`,theme:`places`},{word:`table`,type:`content`,cefr:`pre-A1`,theme:`home`},{word:`window`,type:`content`,cefr:`pre-A1`,theme:`home`},{word:`desk`,type:`content`,cefr:`pre-A1`,theme:`school`},{word:`door`,type:`content`,cefr:`pre-A1`,theme:`home`},{word:`morning`,type:`content`,cefr:`pre-A1`,theme:`time`},{word:`night`,type:`content`,cefr:`pre-A1`,theme:`time`},{word:`time`,type:`content`,cefr:`pre-A1`,theme:`time`},{word:`tomorrow`,type:`content`,cefr:`pre-A1`,theme:`time`},{word:`look`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`find`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`like`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`go`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`see`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`say`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`sit`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`draw`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`sleep`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`try`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`heard`,type:`content`,cefr:`pre-A1`,theme:`verbs`},{word:`hello`,type:`function`},{word:`i`,type:`function`},{word:`am`,type:`function`},{word:`is`,type:`function`},{word:`it`,type:`function`},{word:`a`,type:`function`},{word:`the`,type:`function`},{word:`that`,type:`function`},{word:`this`,type:`function`},{word:`what`,type:`function`},{word:`where`,type:`function`},{word:`you`,type:`function`},{word:`your`,type:`function`},{word:`my`,type:`function`},{word:`our`,type:`function`},{word:`we`,type:`function`},{word:`us`,type:`function`},{word:`can`,type:`function`},{word:`do`,type:`function`},{word:`too`,type:`function`},{word:`so`,type:`function`},{word:`on`,type:`function`},{word:`out`,type:`function`},{word:`at`,type:`function`},{word:`by`,type:`function`},{word:`for`,type:`function`},{word:`and`,type:`function`},{word:`or`,type:`function`},{word:`with`,type:`function`},{word:`to`,type:`function`},{word:`now`,type:`function`},{word:`not`,type:`function`},{word:`one`,type:`function`},{word:`again`,type:`function`},{word:`more`,type:`function`},{word:`please`,type:`function`},{word:`here`,type:`function`},{word:`well`,type:`function`},{word:`yes`,type:`function`},{word:`thank`,type:`function`},{word:`off`,type:`function`},{word:`let's`,type:`function`},{word:`mmm`,type:`function`},{word:`hmm`,type:`function`},{word:`wow`,type:`function`},{word:`yay`,type:`function`},{word:`almost`,type:`function`},{word:`great`,type:`function`},{word:`wonderful`,type:`function`},{word:`yummy`,type:`function`},{word:`momo`,type:`name`},{word:`lulu`,type:`name`},{word:`swing`,type:`content`,cefr:`pre-A1`,theme:`playground`,exposureMin:6},{word:`slide`,type:`content`,cefr:`pre-A1`,theme:`playground`,exposureMin:6},{word:`sand`,type:`content`,cefr:`pre-A1`,theme:`playground`,exposureMin:6},{word:`seesaw`,type:`content`,cefr:`pre-A1`,theme:`playground`,exposureMin:6},{word:`tooth`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`teeth`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`toothbrush`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`brush`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`clean`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`mirror`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`cup`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`fish`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`toy`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`smile`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`open`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`water`,type:`content`,cefr:`pre-A1`,theme:`dentist`,exposureMin:6},{word:`cart`,type:`content`,cefr:`pre-A1`,theme:`shopping`,exposureMin:6},{word:`apple`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`banana`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`bread`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`cheese`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`shelf`,type:`content`,cefr:`pre-A1`,theme:`shopping`,exposureMin:6},{word:`shop`,type:`content`,cefr:`pre-A1`,theme:`shopping`,exposureMin:6},{word:`tomato`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`carrot`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`basket`,type:`content`,cefr:`pre-A1`,theme:`shopping`,exposureMin:6},{word:`crate`,type:`content`,cefr:`pre-A1`,theme:`shopping`,exposureMin:6},{word:`market`,type:`content`,cefr:`pre-A1`,theme:`shopping`,exposureMin:6},{word:`white`,type:`content`,cefr:`pre-A1`,theme:`colors`,exposureMin:6},{word:`orange`,type:`content`,cefr:`pre-A1`,theme:`colors`,exposureMin:6},{word:`play`,type:`content`,cefr:`pre-A1`,theme:`verbs`,exposureMin:6},{word:`jump`,type:`content`,cefr:`pre-A1`,theme:`verbs`,exposureMin:6},{word:`dig`,type:`content`,cefr:`pre-A1`,theme:`verbs`,exposureMin:6},{word:`eat`,type:`content`,cefr:`pre-A1`,theme:`verbs`,exposureMin:6},{word:`wash`,type:`content`,cefr:`pre-A1`,theme:`verbs`,exposureMin:6},{word:`help`,type:`content`,cefr:`pre-A1`,theme:`verbs`,exposureMin:6},{word:`up`,type:`content`,cefr:`pre-A1`,theme:`position`,exposureMin:6},{word:`down`,type:`content`,cefr:`pre-A1`,theme:`position`,exposureMin:6},{word:`two`,type:`content`,cefr:`pre-A1`,theme:`numbers`,exposureMin:6},{word:`three`,type:`content`,cefr:`pre-A1`,theme:`numbers`,exposureMin:6},{word:`dentist`,type:`content`,cefr:`pre-A1`,theme:`people`,exposureMin:6},{word:`me`,type:`function`,cefr:`pre-A1`},{word:`all`,type:`function`,cefr:`pre-A1`},{word:`an`,type:`function`,cefr:`pre-A1`},{word:`in`,type:`function`,cefr:`pre-A1`},{word:`are`,type:`function`,cefr:`pre-A1`},{word:`have`,type:`function`,cefr:`pre-A1`},{word:`has`,type:`function`,cefr:`pre-A1`},{word:`food`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`pond`,type:`content`,cefr:`pre-A1`,theme:`nature`,exposureMin:6},{word:`duck`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`kite`,type:`content`,cefr:`pre-A1`,theme:`toys`,exposureMin:6},{word:`bike`,type:`content`,cefr:`pre-A1`,theme:`toys`,exposureMin:6},{word:`sofa`,type:`content`,cefr:`pre-A1`,theme:`home`,exposureMin:6},{word:`cat`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`balloon`,type:`content`,cefr:`pre-A1`,theme:`toys`,exposureMin:6},{word:`egg`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`watermelon`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`corn`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`pumpkin`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`ha ha`,type:`function`,cefr:`pre-A1`},{word:`hooray`,type:`function`,cefr:`pre-A1`},{word:`bounce`,type:`function`,cefr:`pre-A1`},{word:`oh`,type:`function`,cefr:`pre-A1`},{word:`zoo`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`lion`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`elephant`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`monkey`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`penguin`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`sea`,type:`content`,cefr:`pre-A1`,theme:`nature`,exposureMin:6},{word:`beach`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`shell`,type:`content`,cefr:`pre-A1`,theme:`nature`,exposureMin:6},{word:`crab`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`boat`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`plane`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`ticket`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`airport`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`dinosaur`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`museum`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`picture`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`robot`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`telescope`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`rocket`,type:`content`,cefr:`pre-A1`,theme:`space`,exposureMin:6},{word:`moon`,type:`content`,cefr:`pre-A1`,theme:`space`,exposureMin:6},{word:`star`,type:`content`,cefr:`pre-A1`,theme:`space`,exposureMin:6},{word:`sun`,type:`content`,cefr:`pre-A1`,theme:`space`,exposureMin:6},{word:`pizza`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`plate`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`spoon`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`cake`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`cookie`,type:`content`,cefr:`pre-A1`,theme:`food`,exposureMin:6},{word:`bag`,type:`content`,cefr:`pre-A1`,theme:`things`,exposureMin:6},{word:`bird`,type:`content`,cefr:`pre-A1`,theme:`animals`,exposureMin:6},{word:`splash`,type:`content`,cefr:`pre-A1`,theme:`fun`,exposureMin:6},{word:`pink`,type:`content`,cefr:`pre-A1`,theme:`colors`,exposureMin:6},{word:`gold`,type:`content`,cefr:`pre-A1`,theme:`colors`,exposureMin:6},{word:`old`,type:`content`,cefr:`pre-A1`,theme:`feel`,exposureMin:6},{word:`sweet`,type:`content`,cefr:`pre-A1`,theme:`feel`,exposureMin:6},{word:`park`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`bye`,type:`function`,cefr:`pre-A1`},{word:`shh`,type:`function`,cefr:`pre-A1`},{word:`far`,type:`function`,cefr:`pre-A1`},{word:`there`,type:`function`,cefr:`pre-A1`},{word:`move`,type:`function`,cefr:`pre-A1`},{word:`top`,type:`function`,cefr:`pre-A1`},{word:`come`,type:`function`,cefr:`pre-A1`},{word:`playground`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`grocery`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`science`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`space`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`restaurant`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6},{word:`cafe`,type:`content`,cefr:`pre-A1`,theme:`places`,exposureMin:6}],pp={version:1,comment:dp,words:fp},mp=Object.assign({"/content/episodes/airport-01-up-up-up.episode.json":Al,"/content/episodes/beach-01-splash-splash.episode.json":Rl,"/content/episodes/cafe-01-something-sweet.episode.json":Kl,"/content/episodes/dentist-01-a-happy-smile.episode.json":eu,"/content/episodes/grocery-01-what-do-we-need.episode.json":cu,"/content/episodes/home-01-hungry-evening.episode.json":gu,"/content/episodes/market-01-red-and-orange.episode.json":wu,"/content/episodes/museum-01-big-big-dinosaur.episode.json":Mu,"/content/episodes/park-01-a-sunny-day.episode.json":Bu,"/content/episodes/playground-01-come-and-play.episode.json":Ju,"/content/episodes/restaurant-01-pizza-please.episode.json":nd,"/content/episodes/school-01-first-day.episode.json":ud,"/content/episodes/science-01-hello-robot.episode.json":vd,"/content/episodes/space-01-to-the-moon.episode.json":Ed,"/content/episodes/zoo-01-who-lives-here.episode.json":Pd}),hp=Object.assign({"/content/episodes/order.json":Vd}),gp=Object.assign({"/src/scenes/airport/manifest.json":Ud,"/src/scenes/beach/manifest.json":Jd,"/src/scenes/cafe/manifest.json":$d,"/src/scenes/dentist/manifest.json":af,"/src/scenes/grocery/manifest.json":uf,"/src/scenes/home/manifest.json":hf,"/src/scenes/market/manifest.json":bf,"/src/scenes/museum/manifest.json":Tf,"/src/scenes/park/manifest.json":Af,"/src/scenes/playground/manifest.json":Ff,"/src/scenes/restaurant/manifest.json":Bf,"/src/scenes/school/manifest.json":Gf,"/src/scenes/science/manifest.json":Xf,"/src/scenes/space/manifest.json":tp,"/src/scenes/zoo/manifest.json":op}),_p=(Object.values(Object.assign({"/content/vocabulary/wordlist.json":up}))[0]?.default.words??[]).filter(e=>e.type===`content`).map(e=>e.word),vp=new Map;for(let e of Object.values(mp))vp.set(e.default.id,e.default);var yp=Object.values(hp)[0]?.default??[...vp.keys()].sort();function bp(e){let t=vp.get(e);if(!t)throw Error(`unknown episode "${e}"`);return t}function xp(){let e=yp[0];if(!e)throw Error(`no episodes`);return bp(e)}function Sp(e){let t=yp[yp.indexOf(e)+1];return t?bp(t):null}var Cp=new Map(Object.values(gp).map(e=>[e.default.scene,e.default])),wp=`momo-lulu`,Tp=1,Ep=`kv`,Dp=`events`,Op=5e3;function kp(){return{profileId:Ap(),completed:[],lastEpisodeId:null,ledger:null}}function Ap(){let e=new Uint8Array(8);return crypto.getRandomValues(e),[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var jp=class e{db=null;memory=null;memoryEvents=[];static async open(){let t=new e;try{t.db=await Mp()}catch{t.db=null}return t}get persistent(){return this.db!==null}async loadState(){if(!this.db)return this.memory??=kp();let e=await Fp(this.db,Ep,`state`);if(e?.profileId)return{...kp(),...e};let t=kp();return await this.saveState(t),t}async saveState(e){if(!this.db){this.memory=e;return}await Ip(this.db,Ep,`state`,e)}async appendEvents(e){if(e.length){if(!this.db){this.memoryEvents.push(...e),this.memoryEvents.length>Op&&this.memoryEvents.splice(0,this.memoryEvents.length-Op);return}await zp(this.db,Dp,e,Op)}}async exportEvents(){return this.db?Lp(this.db,Dp):[...this.memoryEvents]}async clear(){this.memory=null,this.memoryEvents=[],this.db&&(await Rp(this.db,Ep),await Rp(this.db,Dp))}};function Mp(){return new Promise((e,t)=>{if(typeof indexedDB>`u`){t(Error(`no indexedDB`));return}let n=indexedDB.open(wp,Tp);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(Ep)||e.createObjectStore(Ep),e.objectStoreNames.contains(Dp)||e.createObjectStore(Dp,{autoIncrement:!0})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`indexedDB open failed`))})}function Np(e,t,n){return e.transaction(t,n).objectStore(t)}function Pp(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error??Error(`indexedDB request failed`))})}async function Fp(e,t,n){return Pp(Np(e,t,`readonly`).get(n))}async function Ip(e,t,n,r){await Pp(Np(e,t,`readwrite`).put(r,n))}async function Lp(e,t){return Pp(Np(e,t,`readonly`).getAll())}async function Rp(e,t){await Pp(Np(e,t,`readwrite`).clear())}async function zp(e,t,n,r){let i=Np(e,t,`readwrite`);for(let e of n)i.add(e);let a=await Pp(i.count());if(a>r){let e=i.openCursor(),t=a-r;await new Promise((n,r)=>{e.onsuccess=()=>{let r=e.result;if(!r||t<=0){n();return}r.delete(),t--,r.continue()},e.onerror=()=>r(e.error??Error(`cursor failed`))})}}function Bp(e){return e.replace(/[‘’]/g,`'`).replace(/[^\p{Letter}'\s]/gu,` `).toLowerCase().replace(/\s+/g,` `).trim()}function Vp(e,t){let n=` ${Bp(e)} `,r=` ${Bp(t)} `,i=0,a=n.indexOf(r);for(;a!==-1;)i++,a=n.indexOf(r,a+1);return i}function Hp(e){return Bp(e).replace(/ /g,`-`)}var Up=[`unknown`,`heard`,`recognized`,`echoed`,`produced`],Wp=2,Gp=2;function Kp(){return{heard:0,tappedCorrect:0,tappedScaffolded:0,echoed:0,echoSkipped:0,lastSeenEpisode:null,correctSessions:0,stage:`unknown`}}function qp(e){let t=e.tappedCorrect>=Wp&&e.correctSessions>=Gp;return t&&e.echoed>=1?`echoed`:t?`recognized`:e.heard>=1?`heard`:`unknown`}var Jp=class{words=new Map;byId=new Map;tracked;session;lastCorrectSession=new Map;constructor(e,t){this.tracked=e,this.session=t;for(let t of e)this.byId.set(Hp(t),t)}setSession(e){this.session=e}record(e){let t=this.resolve(e),n=this.words.get(t);return n||(n=Kp(),this.words.set(t,n)),n}resolve(e){return this.byId.get(Hp(e))??e.toLowerCase()}restage(e){let t=qp(e);Up.indexOf(t)>Up.indexOf(e.stage)&&(e.stage=t)}heardLine(e,t){for(let n of this.tracked){let r=Vp(e,n);if(r===0)continue;let i=this.record(n);i.heard+=r,i.lastSeenEpisode=t,this.restage(i)}}actedOn(e,t){let n=this.byId.get(e);if(!n)return;let r=this.record(n);r.heard+=1,r.lastSeenEpisode=t,this.restage(r)}tappedRight(e,t,n){let r=this.resolve(e),i=this.record(r);i.lastSeenEpisode=n,t?i.tappedScaffolded+=1:(i.tappedCorrect+=1,this.lastCorrectSession.get(r)!==this.session&&(i.correctSessions+=1,this.lastCorrectSession.set(r,this.session))),this.restage(i)}echoInvited(e,t,n){let r=this.record(e);r.lastSeenEpisode=n,t?r.echoSkipped+=1:r.echoed+=1,this.restage(r)}atLeast(e){let t=Up.indexOf(e);return[...this.words.entries()].filter(([,e])=>Up.indexOf(e.stage)>=t).map(([e])=>e).sort()}toJSON(){return{version:1,words:Object.fromEntries(this.words)}}load(e){if(!(!e||e.version!==1))for(let[t,n]of Object.entries(e.words))this.words.set(t,{...Kp(),...n}),n.correctSessions>0&&this.lastCorrectSession.set(t,`restored:${t}`)}},Yp=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xp={session_start:{},session_end:{durSec:`num`},episode_start:{episodeId:`id`},episode_complete:{episodeId:`id`},episode_abandon:{episodeId:`id`,stepIndex:`int`},step_result:{stepType:`id`,correct:`bool`,retries:`int`,scaffoldLevel:`int`},echo:{offered:`bool`,attempted:`bool`,skipped:`bool`,confidence:`num?`},replay:{episodeId:`id`},transition:{fromScene:`id`,toScene:`id`}};function Zp(e){if(typeof e!=`object`||!e)return[`event is not an object`];let t=e,n=t.name;if(typeof n!=`string`||!(n in Xp))return[`unknown event name "${String(n)}"`];let r=Xp[n],i=[];for(let e of Object.keys(t))e!==`name`&&!(e in r)&&i.push(`event "${n}": unknown field "${e}"`);for(let[e,a]of Object.entries(r)){let r=t[e],o=a.endsWith(`?`);if(r===void 0){o||i.push(`event "${n}": missing field "${e}"`);continue}let s=o?a.slice(0,-1):a;s===`bool`&&typeof r!=`boolean`&&i.push(`event "${n}": "${e}" must be boolean`),s===`num`&&(typeof r!=`number`||!Number.isFinite(r))&&i.push(`event "${n}": "${e}" must be a finite number`),s===`int`&&(typeof r!=`number`||!Number.isInteger(r))&&i.push(`event "${n}": "${e}" must be an integer`),s===`id`&&(typeof r!=`string`||!Yp.test(r))&&i.push(`event "${n}": "${e}" must be a kebab-case id (no free text — hard rule 8)`)}return i}var Qp=class{events=[];profile;session;now;rejected=[];constructor(e,t,n=()=>Date.now()){this.profile=e,this.session=t,this.now=n}emit(e){let t=Zp(e);if(t.length){this.rejected.push({event:e,problems:t});return}this.events.push({t:this.now(),session:this.session,profile:this.profile,event:e})}drain(){return this.events.splice(0,this.events.length)}};function $p(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Nr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=em(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=em(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function em(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new vr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var tm=new Map;function Z(e,t={}){let n=`${e}|${t.rough??.85}|${t.flat??!1}|${t.emissive??0}`,r=tm.get(n);return r||(r=new Ii({color:e,roughness:t.rough??.85,metalness:0,flatShading:t.flat??!1,emissive:t.emissive??0}),r.userData.shared=!0,tm.set(n,r)),r}function Q(e,t,n=0,r=0,i=0){let a=new ni(e,t);return a.position.set(n,r,i),a.castShadow=!0,a.receiveShadow=!0,a}function $(...e){let t=new U;return t.add(...e),t}function nm(e){e.traverse(e=>{if(e instanceof ni){e.geometry.dispose();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.userData.shared||e.dispose()}})}function rm(e){e.updateWorldMatrix(!0,!0);let t=new Map;e.traverse(e=>{if(!(e instanceof ni))return;let n=Array.isArray(e.material)?e.material[0]:e.material;if(!n)return;let r=e.geometry.clone().applyMatrix4(e.matrixWorld);for(let e of Object.keys(r.attributes))e!==`position`&&e!==`normal`&&r.deleteAttribute(e);t.has(n)||t.set(n,[]),t.get(n)?.push(r.toNonIndexed())});let n=new U;for(let[e,r]of t){let t=$p(r,!1);for(let e of r)e.dispose();if(!t)continue;let i=new ni(t,e);i.castShadow=!0,i.receiveShadow=!0,n.add(i)}return n}function im(e,t,n){let r=Z(n,{rough:1}),i=new ni(new wi(e,t),r);return i.receiveShadow=!0,i.castShadow=!1,i}function am(e=1){let t=$(Q(new K(.22,.34,1.6,7),Z(9132587,{flat:!0}),0,.8,0)),n=Z(4172366,{flat:!0});for(let[e,r,i,a]of[[0,2.2,0,1.05],[.75,1.8,.15,.7],[-.7,1.85,-.1,.72],[.1,1.7,.7,.6],[-.15,1.75,-.68,.62]])t.add(Q(new Si(a,1),n,e,r,i));let r=Z(14696506);for(let[e,n,i]of[[.5,2,.55],[-.55,2.1,.35],[.15,2.6,-.4]])t.add(Q(new J(.11,8,8),r,e,n,i));return t.scale.setScalar(e),t}function om(e=16765502,t=!1){let n=t?1.5:1,r=$(Q(new K(.045*n,.055*n,.9*n,6),Z(4037440),0,.45*n,0)),i=Z(5025872,{flat:!0}),a=Q(new J(.14*n,8,6),i,.16*n,.35*n,0);a.scale.set(1.4,.4,.8);let o=a.clone();o.position.x=-.16*n,o.position.y=.5*n,r.add(a,o);let s=Q(new J(.16*n,10,8),Z(9067040),0,.95*n,0);r.add(s);let c=Z(e);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=Q(new J(.13*n,8,6),c,Math.cos(t)*.24*n,.95*n,Math.sin(t)*.24*n);i.scale.set(1.2,.45,1.2),r.add(i)}return r}function sm(){return $(Q(new J(.42,20,16),Z(14826030,{rough:.5}),0,.42,0),Q(new J(.423,20,16,0,Math.PI*2,Math.PI*.42,Math.PI*.16),Z(16645629,{rough:.5}),0,.42,0),Q(new J(.425,20,16,0,Math.PI*2,0,Math.PI*.22),Z(16763198,{rough:.5}),0,.42,0))}function cm(){let e=Z(11105866,{flat:!0}),t=Z(7227946);return $(Q(new G(1.9,.09,.55),e,0,.5,0),Q(new G(1.9,.4,.08),e,0,.85,-.26),Q(new G(.08,.5,.5),t,-.85,.25,0),Q(new G(.08,.5,.5),t,.85,.25,0))}function lm(){let e=Z(3116862,{flat:!0}),t=$(Q(new Si(.5,1),e,0,.4,0),Q(new Si(.36,1),e,.42,.3,.1),Q(new Si(.3,1),e,-.38,.28,-.05)),n=Z(14041210);for(let[e,r,i]of[[.2,.62,.3],[-.25,.5,.28],[.45,.45,.28]])t.add(Q(new J(.055,8,8),n,e,r,i));return t}function um(){let e=new Ii({color:16777215,roughness:1}),t=$(Q(new J(.8,10,8),e,0,0,0),Q(new J(.55,10,8),e,.8,-.1,0),Q(new J(.5,10,8),e,-.75,-.12,.1));return t.traverse(e=>{e.castShadow=!1,e.receiveShadow=!1}),t}function dm(e){let t=new U,n=Z(13213802),r=Math.floor(e/.8);for(let i=0;i<=r;i++){let r=Q(new G(.09,.75,.09),n,-e/2+i*.8,.37,0),a=Q(new q(.09,.12,4),n,-e/2+i*.8,.8,0);t.add(r,a)}return t.add(Q(new G(e,.07,.05),n,0,.55,0)),t.add(Q(new G(e,.07,.05),n,0,.28,0)),t}function fm(e,t){let n=Q(new J(e,16,12),Z(t,{flat:!0}));return n.scale.y=.35,n.castShadow=!1,n}function pm(){let e=Q(new G(.34,.5,.34),Z(16514038,{rough:.6}),0,.25,0),t=Q(new G(.345,.16,.345),Z(4028632,{rough:.6}),0,.22,0),n=Q(new K(0,.24,.2,4),Z(16514038,{rough:.6}),0,.6,0);n.rotation.y=Math.PI/4;let r=Q(new K(.05,.05,.07,8),Z(16765502,{rough:.5}),0,.72,0),i=Q(new J(.055,8,8),Z(16777215,{rough:.3}),.13,.34,.178);return i.scale.set(.8,1.2,.4),$(e,t,n,r,i)}function mm(e=15764538){return $(Q(new K(.09,.07,.16,12),Z(e,{rough:.4}),0,.08,0),Q(new Ti(.05,.016,8,12),Z(e,{rough:.4}),.1,.08,0))}function hm(){let e=Z(10119743,{flat:!0}),t=$(Q(new G(1.35,.5,2.3),e,0,.25,0),Q(new G(1.35,.85,.1),e,0,.42,-1.15),Q(new G(1.35,.6,.1),e,0,.3,1.15),Q(new G(1.22,.18,2.1),Z(16249834,{rough:.95}),0,.58,0),Q(new G(1.24,.16,1.3),Z(14701899,{rough:.95}),0,.62,.42)),n=Q(new G(.62,.16,.4),Z(16711422,{rough:1}),0,.7,-.75);return n.rotation.x=-.12,t.add(n),t}function gm(){let e=Z(11565120,{rough:1}),t=Z(14729876,{rough:1}),n=Q(new J(.26,12,10),e,0,.28,0);n.scale.set(1,1.15,.85);let r=Q(new J(.2,12,10),e,0,.68,0),i=Q(new J(.1,10,8),t,0,.63,.15);i.scale.set(1.1,.8,.9);let a=$(n,r,i,Q(new J(.035,8,6),Z(3811866),0,.66,.24));for(let n of[-1,1]){let r=Q(new J(.08,8,8),e,n*.15,.86,0),i=Q(new J(.045,8,6),t,n*.15,.86,.04),o=Q(new J(.09,8,8),e,n*.28,.36,.05);o.scale.set(.8,1.5,.8),o.rotation.z=n*.5;let s=Q(new J(.1,8,8),e,n*.14,.08,.08);s.scale.set(.9,.8,1.4);let c=Q(new J(.03,8,6),Z(2829099,{rough:.3}),n*.08,.73,.17);a.add(r,i,o,s,c)}return a}function _m(){let e=Z(11896143,{flat:!0}),t=$(Q(new K(.85,.85,.08,16),e,0,.78,0));for(let e=0;e<4;e++){let n=e/4*Math.PI*2+Math.PI/4;t.add(Q(new K(.06,.05,.78,8),Z(9069112),Math.cos(n)*.55,.39,Math.sin(n)*.55))}return t}function vm(){let e=Z(16117990),t=$(Q(new G(1.5,.1,.12),e,0,.75,0),Q(new G(1.5,.1,.12),e,0,-.75,0),Q(new G(.1,1.6,.12),e,-.7,0,0),Q(new G(.1,1.6,.12),e,.7,0,0),Q(new G(.06,1.5,.08),e,0,0,0),Q(new G(1.4,.06,.08),e,0,0,0)),n=Q(new wi(1.34,1.44),new Wr({color:11461631}),0,0,-.03);n.castShadow=!1;let r=Q(new Si(.3,1),Z(4172366,{flat:!0}),-.3,-.25,-.02),i=Q(new J(.07,8,6),Z(16765502),.35,-.55,-.02);return t.add(n,r,i),t}function ym(){return $(Q(new K(.16,.2,.05,12),Z(8018490),0,.03,0),Q(new K(.03,.03,.85,8),Z(8018490),0,.45,0),Q(new q(.26,.3,12,1,!0),Z(16767114,{emissive:5583633}),0,.95,0))}function bm(e=14258026){let t=Q(new K(1.15,1.15,.03,24),Z(e,{rough:1}),0,.02,0);return t.castShadow=!1,t}function xm(){let e=Z(3108816,{rough:.6}),t=$(Q(new G(.62,.1,.8),e,0,.05,0),Q(new G(.56,.07,.74),Z(16777215,{rough:.9}),.02,.055,0),Q(new G(.08,.11,.8),Z(2051994),-.28,.055,0)),n=Q(new K(.12,.12,.015,5),Z(16763198),.06,.11,0);return t.add(n),t}function Sm(){return $(Q(new K(.055,.055,.85,6),Z(16756771,{rough:.6}),0,.52,0),Q(new K(.03,.055,.14,6),Z(15255712),0,.03,0),Q(new K(.004,.03,.06,6),Z(3355443),0,-.06,0),Q(new K(.06,.06,.09,8),Z(14211288,{rough:.3}),0,.97,0),Q(new J(.06,8,8),Z(15895202),0,1.03,0))}function Cm(e=14701899){let t=Z(e,{rough:.7}),n=Z(10119743),r=$(Q(new G(.5,.07,.5),t,0,.45,0),Q(new G(.5,.55,.07),t,0,.75,-.22));for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])r.add(Q(new K(.03,.03,.45,8),n,e,.22,t));return r}function wm(){let e=$(Q(new G(1.1,.07,.7),Z(13213802,{flat:!0}),0,.72,0));for(let[t,n]of[[-.48,-.28],[.48,-.28],[-.48,.28],[.48,.28]])e.add(Q(new K(.035,.035,.72,8),Z(9069112),t,.36,n));return e}function Tm(){return $(Q(new G(1,2.1,.1),Z(5284730,{rough:.6}),0,1.05,0),Q(new G(.7,.7,.04),Z(4360806),0,1.45,.05),Q(new J(.06,10,8),Z(16765502,{rough:.3}),.36,1,.08))}function Em(){let e=$(Q(new G(2.6,1.5,.08),Z(10119743),0,1.7,0),Q(new G(2.4,1.3,.06),Z(3038798,{rough:.95}),0,1.7,.03),Q(new G(2.5,.08,.14),Z(10119743),0,1,.05)),t=new Wr({color:16643800}),n=Q(new Ti(.16,.02,6,16),t,-.8,2,.07),r=Q(new Ti(.02,.02,4,4),t,0,0,0);r.visible=!1;let i=Q(new G(.4,.03,.02),t,.6,1.5,.07),a=Q(new G(.03,.3,.02),t,.42,1.65,.07),o=Q(new G(.03,.3,.02),t,.78,1.65,.07),s=Q(new G(.28,.03,.02),t,.51,1.86,.07);s.rotation.z=.6;let c=Q(new G(.28,.03,.02),t,.69,1.86,.07);return c.rotation.z=-.6,e.add(n,r,i,a,o,s,c),e}function Dm(){let e=Z(14041210,{rough:.7}),t=$(Q(new G(.5,.6,.25),e,0,.3,0),Q(new G(.5,.28,.27),Z(12070756,{rough:.7}),0,.5,.005),Q(new J(.045,8,8),Z(16765502,{rough:.3}),0,.4,.14));for(let e of[-1,1]){let n=Q(new G(.08,.5,.04),Z(9053264),e*.14,.32,-.15);n.rotation.x=.15,t.add(n)}return t}function Om(){let e=$(Q(new K(.28,.28,.06,20),Z(15905082),0,0,0),Q(new K(.23,.23,.062,20),Z(16645622),0,0,0)),t=Q(new G(.02,.065,.14),Z(3355443),0,.004,-.05),n=Q(new G(.02,.065,.09),Z(3355443),.035,.004,.02);return n.rotation.y=1.1,e.add(t,n),e.rotation.x=Math.PI/2,e}function km(){let e=Z(4028632),t=new U;for(let n of[-1,1])for(let r of[-1,1]){let i=Q(new K(.07,.08,2.3,8),e,n*.95,1.1,r*.45);i.rotation.x=r*-.19,i.rotation.z=n*-.06,t.add(i)}let n=Q(new K(.08,.08,2.1,8),e,0,2.18,0);n.rotation.z=Math.PI/2,t.add(n);let r=Z(10134187,{rough:.5});for(let e of[-.28,.28])t.add(Q(new K(.022,.022,1.3,6),r,e,1.53,0));let i=Q(new G(.78,.09,.34),Z(14701899),0,.85,0);return t.add(i),t}function Am(){let e=new U,t=Z(16763198),n=Q(new G(.86,.1,2.9),Z(4037440),0,.95,.55);n.rotation.x=.55,e.add(n);for(let n of[-.46,.46]){let r=Q(new G(.09,.26,2.9),t,n,1.06,.55);r.rotation.x=.55,e.add(r)}e.add(Q(new G(.9,.12,.7),Z(4028632),0,1.72,-.9));for(let n of[-.36,.36])e.add(Q(new K(.06,.06,1.8,8),t,n,.9,-1.35));for(let t=0;t<4;t++)e.add(Q(new G(.78,.07,.16),Z(14701899),0,.35+t*.42,-1.35));return e}function jm(){let e=Z(11565636),t=new U;for(let[n,r,i]of[[0,-1.05,0],[0,1.05,0],[-1.05,0,Math.PI/2],[1.05,0,Math.PI/2]]){let a=Q(new G(2.25,.3,.18),e,n,.15,r);a.rotation.y=i,t.add(a)}let n=Q(new G(2,.16,2),Z(15785120,{rough:1}),0,.14,0),r=Q(new J(.42,12,8),Z(15258262,{rough:1}),.35,.18,-.2);r.scale.set(1,.45,1);let i=Q(new K(.19,.15,.26,12),Z(14701899),-.5,.33,.35),a=Q(new G(.1,.5,.03),Z(4028632),-.1,.42,.5);return a.rotation.z=.4,t.add(n,r,i,a),t}function Mm(){let e=new U;e.add(Q(new K(.16,.28,.62,10),Z(10134187),0,.31,0));let t=Q(new G(3.1,.13,.42),Z(16763198),0,.68,0);t.rotation.z=.16,e.add(t);for(let[t,n]of[[-1.35,.44],[1.35,.92]])e.add(Q(new G(.36,.1,.42),Z(14701899),t,n+.09,0)),e.add(Q(new K(.045,.045,.34,8),Z(4028632),t,n+.3,0));return e}function Nm(){let e=Z(16645622,{rough:.45}),t=Q(new J(.34,14,12),e,0,.42,0);t.scale.set(1,.85,.95);let n=$(t);for(let t of[-.16,.16]){let r=Q(new q(.13,.4,10),e,t,.06,0);r.rotation.x=Math.PI,n.add(r)}let r=Z(2829099,{rough:.2});for(let e of[-.11,.11])n.add(Q(new J(.042,8,6),r,e,.5,.29));let i=Q(new Ti(.11,.022,6,12,Math.PI),r,0,.42,.29);return i.rotation.z=Math.PI,n.add(i),n}function Pm(){let e=$(Q(new G(.09,.62,.05),Z(4028632),0,.31,0),Q(new G(.13,.2,.06),Z(4028632),0,.7,0));for(let t=0;t<3;t++)e.add(Q(new G(.11,.09,.04),Z(16645622),0,.66+t*.06,.05));return e}function Fm(){let e=Q(new K(.26,.26,.05,18),Z(12159712),0,.62,0);e.rotation.x=Math.PI/2;let t=Q(new K(.21,.21,.055,18),Z(14216447,{rough:.12}),0,.62,.005);return t.rotation.x=Math.PI/2,$(e,t,Q(new G(.09,.42,.05),Z(12159712),0,.28,0))}function Im(e=15896890,t=16645622){let n=new U,r=Q(new J(.16,16,12),Z(e,{rough:.5}),0,0,0);r.scale.set(1.6,1,.55),n.add(r);for(let e of[-.06,.06]){let r=Q(new J(.163,12,10),Z(t,{rough:.5}),e,0,0);r.scale.set(.28,1.02,.57),n.add(r)}let i=Q(new q(.11,.22,3),Z(e,{rough:.5}),-.32,0,0);i.rotation.z=Math.PI/2,i.scale.z=.35;let a=Q(new q(.07,.14,3),Z(e,{rough:.5}),.02,.17,0);a.scale.z=.3,n.add(i,a);let o=Q(new J(.035,8,6),Z(16777215,{rough:.2}),.17,.04,.075),s=Q(new J(.018,6,6),Z(2236962,{rough:.2}),.19,.04,.095),c=Q(new J(.03,8,6),Z(14709082,{rough:.6}),.255,-.01,0);return n.add(o,s,c),n}function Lm(){let e=new U,t=new Ii({color:14217471,roughness:.05,metalness:0,transparent:!0,opacity:.16,side:2}),n=new Ii({color:5880038,roughness:.2,metalness:0,transparent:!0,opacity:.3}),r=new ni(new G(1.1,.72,.6),t);r.position.y=.36,r.castShadow=!1;let i=new ni(new G(1.04,.5,.55),n);i.position.y=.3,i.castShadow=!1;let a=Q(new G(1.04,.1,.55),Z(14072202,{rough:1}),0,.11,0);e.add(r,i,a);for(let[t,n,r]of[[-.35,.12,12165508],[.1,-.14,10521194],[.42,.1,12165508]])e.add(Q(new J(.05,8,6),Z(r,{rough:1}),t,.17,n));for(let[t,n]of[[.34,-.12],[.44,.02],[-.44,-.08]])e.add(Q(new q(.055,.3,6),Z(4172366,{flat:!0}),t,.3,n));let o=Q(new K(.09,.11,.24,8),Z(13616302,{rough:1}),-.28,.27,-.1),s=Q(new q(.11,.12,8),Z(14701899,{rough:.9}),-.28,.44,-.1);e.add(o,s);let c=Im(15896890);c.scale.setScalar(.85),c.position.set(.05,.38,.1);let l=Im(4886744,16769658);return l.scale.setScalar(.62),l.position.set(-.2,.28,-.05),e.add(c,l),e.userData.fish=[c,l],e}function Rm(e=7324904){let t=Z(e,{rough:.95}),n=Q(new G(.9,.24,1.35),t,0,.62,0),r=Q(new G(.9,.9,.22),t,0,1.02,-.66);r.rotation.x=-.32;let i=Q(new G(.56,.3,.2),Z(16763198,{rough:.95}),0,1.42,-.79);i.rotation.x=-.32;let a=$(n,r,i);for(let e of[-.55,.55])a.add(Q(new G(.14,.2,1),t,e,.72,.05));return a.add(Q(new K(.14,.22,.52,10),Z(10134187),0,.26,0)),a.add(Q(new K(.42,.42,.1,14),Z(10134187),0,.05,0)),a}function zm(){let e=Z(14053450),t=new U;for(let[n,r,i]of[[0,-.36,0],[0,.36,0],[-.5,0,Math.PI/2],[.5,0,Math.PI/2]]){let a=Q(new G(1.02,.5,.09),e,n,.25,r);a.rotation.y=i,t.add(a)}return[16763198,4028632,4037440,14701899].forEach((e,n)=>{let r=Q(new G(.2,.2,.2),Z(e),-.3+n*.2,.55+n%2*.16,n%2*.12-.06);r.rotation.y=n*.4,t.add(r)}),t}function Bm(){let e=Q(new J(.2,14,12),Z(14701899),0,.2,0);e.scale.set(1,.92,1);let t=Q(new K(.02,.025,.14,6),Z(7031338),0,.4,0),n=Q(new J(.09,8,6),Z(4172366,{flat:!0}),.08,.42,0);return n.scale.set(1,.3,.55),n.rotation.z=-.5,$(e,t,n)}function Vm(){let e=Z(16765502),t=new U;for(let n of[{x:-.19,y:.1,r:.055,rot:.75},{x:0,y:.19,r:.07,rot:0},{x:.19,y:.1,r:.055,rot:-.75}]){let r=Q(new K(n.r,n.r,.24,8),e,n.x,n.y,0);r.rotation.z=Math.PI/2+n.rot,t.add(r)}return t.add(Q(new q(.045,.1,6),Z(7031338),-.29,.03,0)),t}function Hm(){let e=Q(new J(.34,14,10),Z(13208138,{rough:1}),0,.22,0);e.scale.set(1.5,.72,.85);let t=$(e);for(let e=0;e<3;e++){let n=Q(new G(.05,.05,.42),Z(15250552,{rough:1}),-.22+e*.22,.44,0);n.rotation.y=.4,t.add(n)}return t}function Um(){let e=$(Q(new K(.46,.46,.36,12,1,!1,0,Math.PI/2.2),Z(16106818),0,.14,0));for(let[t,n]of[[.1,.16],[.2,.06],[.09,.05]])e.add(Q(new J(.05,8,6),Z(14724398),t,.2,n));return e}function Wm(){let e=Q(new J(.19,14,12),Z(14697787),0,.17,0);e.scale.set(1,.8,1);let t=$(e),n=Q(new J(.09,8,6),Z(4172366,{flat:!0}),0,.31,0);return n.scale.set(1.5,.3,1.5),t.add(n,Q(new K(.018,.018,.09,6),Z(4172366),0,.36,0)),t}function Gm(){let e=Q(new q(.12,.62,10),Z(15896890),0,.31,0);e.rotation.x=Math.PI;let t=$(e);for(let e=0;e<3;e++){let n=Q(new G(.06,.28,.02),Z(4172366,{flat:!0}),(e-1)*.06,.74,0);n.rotation.z=(e-1)*.35,t.add(n)}return t}function Km(){let e=Z(11565636,{rough:1}),t=new U;t.add(Q(new K(.36,.28,.34,14,1,!0),e,0,.17,0)),t.add(Q(new K(.29,.29,.04,14),e,0,.02,0));let n=Q(new Ti(.3,.028,6,14,Math.PI),e,0,.34,0);return t.add(n),t}function qm(){let e=Z(13210698,{rough:1}),t=new U;for(let[n,r,i]of[[0,-.3,0],[0,.3,0],[-.42,0,Math.PI/2],[.42,0,Math.PI/2]])for(let a=0;a<2;a++){let o=Q(new G(.86,.14,.06),e,n,.1+a*.2,r);o.rotation.y=i,t.add(o)}return t.add(Q(new G(.84,.05,.6),e,0,.03,0)),t}function Jm(){let e=Z(10134187,{rough:.4}),t=new U,n=Q(new G(.72,.46,1),Z(14214380,{rough:.5}),0,.62,0);t.add(n);for(let n=0;n<3;n++)t.add(Q(new G(.74,.03,1.02),e,0,.48+n*.18,0));t.add(Q(new K(.03,.03,.7,8),e,0,1,.52));for(let n of[-.3,.3]){t.add(Q(new K(.035,.035,.42,8),e,n,.2,.42)),t.add(Q(new K(.035,.035,.42,8),e,n,.2,-.42));for(let e of[.42,-.42]){let r=Q(new K(.1,.1,.06,10),Z(3815994),n,.1,e);r.rotation.z=Math.PI/2,t.add(r)}}return t}function Ym(){let e=Z(13210698,{rough:1}),t=new U;for(let n of[-.95,.95])t.add(Q(new G(.1,1.9,.6),e,n,.95,0));for(let n=0;n<3;n++)t.add(Q(new G(2,.09,.6),e,0,.35+n*.68,0));return[14701899,16763198,4037440,4028632,12159712,15896890].forEach((e,n)=>{let r=Math.floor(n/3);t.add(Q(new G(.24,.3,.24),Z(e),-.6+n%3*.6,.55+r*.68,0))}),t}function Xm(){let e=Z(10119738),t=new U;for(let n of[-1.5,1.5])for(let r of[-.7,.7])t.add(Q(new K(.07,.07,2.3,8),e,n,1.15,r));t.add(Q(new G(3.4,.1,1.7),e,0,.95,0));let n=[14701899,16645622];for(let e=0;e<6;e++){let r=Q(new G(.58,.07,1.9),Z(n[e%2]),-1.45+e*.58,2.4,0);r.rotation.x=.12,t.add(r)}return t}function Zm(){let e=new ni(new J(.9,12,10),new Wr({color:16769658}));return e.castShadow=!1,e}function Qm(e,t=15900730,n=0){let r=new U,i=Z(t),a=Q(new J(.09,8,6),i,-.08,0,0);a.scale.set(1.4,.2,1);let o=a.clone();return o.position.x=.08,r.add(a,o,Q(new J(.035,6,6),Z(3355443),0,0,0)),{root:r,update(t){r.position.set(e.x+Math.sin(t*6e-4+n)*2.2,e.y+Math.sin(t*.0013+n)*.4,e.z+Math.cos(t*4e-4+n)*1.6);let i=Math.abs(Math.sin(t*.02+n));a.rotation.z=i*.9,o.rotation.z=-i*.9}}}function $m(e=8,t=0){let n=new U,r=Q(new J(.09,8,6),Z(4868696),0,0,0);r.scale.set(1.6,.7,.7);let i=Q(new G(.5,.03,.12),Z(4868696),0,.04,0);return n.add(r,i),{root:n,update(r){let a=r*12e-5+t;n.position.set(Math.sin(a)*11,e+Math.sin(r*.001+t)*.5,-9+Math.cos(a)*3),n.rotation.y=a+Math.PI/2,i.rotation.x=Math.sin(r*.012+t)*.7}}}function eh(e,t=4){let n=new U,r=new Wr({color:15399167,transparent:!0,opacity:.55}),i=[];for(let e=0;e<t;e++){let t=new ni(new J(.028+e%3*.012,6,6),r);i.push(t),n.add(t)}return{root:n,update(t){i.forEach((n,r)=>{let i=(t*35e-5+r*.29)%1;n.position.set(e.x+Math.sin(t*.002+r*2.1)*.07,e.y+i*e.h,e.z+Math.cos(r*1.7)*.08),n.material.opacity=.55*(1-i)})}}}function th(e,t=6){let n=new U,r=new Wr({color:16777215,transparent:!0,opacity:.7}),i=[];for(let e=0;e<t;e++){let e=new ni(new J(.035,5,5),r);i.push(e),n.add(e)}return{root:n,update(t){i.forEach((n,r)=>{let i=t*18e-5+r*1.13;n.position.set(e.x+Math.sin(i)*e.r,.7+Math.sin(t*7e-4+r)*.5+r*.37%1*1.6,e.z+Math.cos(i*.8+r)*e.r)})}}}function nh(){let e=Q(new K(1.25,1.25,.06,22),Z(4892632,{rough:.25}),0,.03,0);e.scale.z=.8;let t=Q(new Ti(1.24,.09,8,22),Z(12165508,{rough:1}),0,.04,0);t.rotation.x=Math.PI/2,t.scale.y=.8;let n=$(e,t);for(let[e,t]of[[-1.05,.55],[1.1,-.4],[.4,.85]])n.add(Q(new J(.12,8,6),Z(10134187,{rough:1}),e,.08,t));for(let[e,t]of[[-.9,-.6],[-1.15,-.35]])n.add(Q(new K(.02,.03,.7,5),Z(4172366),e,.35,t)),n.add(Q(new J(.06,6,5),Z(9132587),e,.72,t));return n}function rh(e=1){let t=Q(new J(.22,14,10),Z(16765502,{rough:.7}),0,.2,0);t.scale.set(1.35,1,.9);let n=Q(new q(.1,.18,6),Z(16765502,{rough:.7}),-.3,.28,0);n.rotation.z=-.9;let r=Q(new J(.13,12,10),Z(16765502,{rough:.7}),.24,.46,0),i=Q(new q(.05,.12,8),Z(15896890),.38,.44,0);i.rotation.z=-Math.PI/2;let a=$(t,n,r,i);for(let e of[-.06,.06])a.add(Q(new J(.022,6,6),Z(2236962),.31,.5,e));let o=Q(new J(.12,8,6),Z(15911246,{rough:.7}),-.02,.24,.14);o.scale.set(1.3,.7,.5);let s=o.clone();return s.position.z=-.14,a.add(o,s),a.scale.setScalar(e),a}function ih(){let e=new U,t=Q(new q(.55,.9,4),Z(14701899,{rough:.6}),0,3.2,0);t.scale.z=.08,t.rotation.y=Math.PI/4;let n=Q(new q(.55,.7,4),Z(16763198,{rough:.6}),0,2.42,0);n.scale.z=.08,n.rotation.set(Math.PI,Math.PI/4,0),e.add(t,n);let r=Q(new K(.012,.012,1.73,4),Z(14211280),-.36,1.28,0);r.rotation.z=-.43;let i=Q(new K(.03,.03,.5,5),Z(9132587),-.72,.25,0);e.add(r,i);for(let t=0;t<3;t++){let n=Q(new G(.14,.05,.03),Z([4028632,4037440,12159712][t]),-.14-t*.18,2-t*.55+.35,0);n.rotation.z=.5,e.add(n)}return e}function ah(){let e=new U;for(let t=0;t<4;t++)for(let n=0;n<4;n++)e.add(Q(new G(.42,.02,.42),Z((t+n)%2?16645622:14701899,{rough:1}),-.63+t*.42,.012,-.63+n*.42));let t=Km();t.scale.setScalar(.8),t.position.set(.35,.02,-.3),e.add(t);let n=Bm();return n.scale.setScalar(.8),n.position.set(-.25,.02,.2),e.add(n),e}function oh(){let e=new U;e.add(Q(new K(.12,.16,.5,8),Z(10134187),0,.25,0));let t=new U,n=Q(new K(.95,.95,.08,18),Z(14701899),0,0,0);t.add(n);for(let e=0;e<4;e++){let n=Q(new G(.05,.4,.05),Z(16763198),Math.cos(e*Math.PI/2)*.7,.24,Math.sin(e*Math.PI/2)*.7);t.add(n);let r=Q(new G(.3,.05,.05),Z(4028632),Math.cos(e*Math.PI/2)*.7,.46,Math.sin(e*Math.PI/2)*.7);r.rotation.y=-e*Math.PI/2,t.add(r)}return t.position.y=.5,e.add(t),e.userData.disc=t,e}function sh(){let e=new U,t=Z(4037440);for(let n of[-.9,.9])for(let r of[-.5,.5])e.add(Q(new K(.06,.06,1.9,8),t,n,.95,r));for(let n of[-.5,.5]){let r=Q(new K(.05,.05,1.8,8),t,0,1.9,n);r.rotation.z=Math.PI/2,e.add(r)}for(let t=0;t<5;t++){let n=Q(new K(.04,.04,1,6),Z(16763198),-.8+t*.4,1.9,0);n.rotation.x=Math.PI/2,e.add(n)}return e}function ch(){let e=new U;return[16763198,9427396,15895202,12159712,8042728,16763198].forEach((t,n)=>{let r=Q(new G(.6,.015,.6),Z(t,{rough:1}),n%2==0?0:n%4==1?-.33:.33,.01,n*.66);e.add(r)}),e}function lh(){let e=new U,t=Z(3815994);for(let n of[-.45,.45]){let r=Q(new Ti(.28,.05,8,16),t,n,.3,0);e.add(r)}let n=Z(14701899,{rough:.5}),r=Q(new K(.035,.035,.9,6),n,0,.42,0);r.rotation.z=Math.PI/2-.25;let i=Q(new K(.03,.03,.42,6),n,-.3,.62,0),a=Q(new G(.24,.06,.12),Z(3815994),-.3,.85,0),o=Q(new K(.03,.03,.5,6),n,.42,.62,0),s=Q(new K(.025,.025,.4,6),Z(3815994),.42,.88,0);return s.rotation.x=Math.PI/2,e.add(r,i,a,o,s),e}function uh(e=4028632){let t=Z(e,{rough:.95}),n=$(Q(new G(2,.45,.9),t,0,.35,0),Q(new G(2,.7,.25),t,0,.75,-.34));for(let e of[-.95,.95])n.add(Q(new G(.22,.62,.9),t,e,.55,0));for(let e of[-.45,.45])n.add(Q(new G(.8,.18,.7),Z(7315432,{rough:.95}),e,.62,.02));let r=Q(new G(.4,.34,.14),Z(16763198,{rough:.95}),-.6,.85,-.2);return r.rotation.z=.2,n.add(r),n}function dh(){let e=Z(9075306,{rough:.95}),t=new U,n=Q(new J(.24,14,12),e,0,.26,0);n.scale.set(1,1.35,.9);let r=Q(new J(.17,12,10),Z(14208962,{rough:.95}),0,.24,.13);r.scale.set(.8,1.1,.6);let i=Q(new J(.16,14,12),e,0,.63,.05);t.add(n,r,i);for(let n of[-1,1]){let r=Q(new q(.06,.13,4),e,n*.09,.78,.03);r.rotation.z=n*-.15,t.add(r);let i=Q(new q(.032,.08,4),Z(16361098),n*.09,.77,.05);t.add(i),t.add(Q(new G(.05,.014,.02),Z(4864554),n*.06,.65,.19))}t.add(Q(new J(.025,6,6),Z(16361098),0,.6,.2));for(let e of[-1,1]){let n=Q(new J(.06,8,6),Z(14208962,{rough:.95}),e*.08,.06,.16);t.add(n)}let a=Q(new Ti(.16,.04,6,12,Math.PI*1.1),e,.2,.08,-.02);return a.rotation.x=Math.PI/2,t.add(a),t}function fh(){let e=new U,t=Z(10119743);for(let n of[-1,1]){let r=Q(new K(.035,.035,1.7,6),t,n*.4,.85,.1);r.rotation.z=n*.2,e.add(r)}let n=Q(new K(.035,.035,1.6,6),t,0,.8,-.35);n.rotation.x=-.35;let r=Q(new G(.95,.85,.05),Z(16645622,{rough:1}),0,1.05,.12);r.rotation.x=-.1,e.add(n,r);let i=Q(new K(.1,.1,.055,12),Z(16763198),.28,1.3,.13);i.rotation.x=Math.PI/2-.1;let a=Q(new G(.3,.22,.055),Z(14701899),-.2,.95,.145);a.rotation.x=-.1;let o=Q(new q(.2,.14,4),Z(9132587),-.2,1.12,.14);return o.rotation.set(-.1,Math.PI/4,0),e.add(i,a,o),e}function ph(){let e=new U,t=Z(10119743);for(let n of[-.4,.4])e.add(Q(new G(.06,.62,.08),t,n,.31,0));return e.add(Q(new G(.86,.06,.08),t,0,.62,0)),[14701899,4028632,4037440].forEach((t,n)=>{e.add(Q(new K(.015,.015,.74,4),Z(10134187),0,.16+n*.18,0).rotateZ(Math.PI/2));for(let r=0;r<4;r++)e.add(Q(new J(.055,8,6),Z(t,{rough:.5}),-.26+r*.13+n%2*.1,.16+n*.18,0))}),e}function mh(){let e=new U;e.add(Q(new K(.16,.22,.1,10),Z(10119743),0,.05,0)),e.add(Q(new K(.03,.03,.5,6),Z(10134187),0,.3,0));let t=Q(new J(.3,14,12),Z(4886744,{rough:.5}),0,.72,0);e.add(t);for(let[t,n,r,i]of[[.78,.2,1.3,.8],[.62,-.14,1,.7],[.86,-.1,.8,.5]]){let a=Q(new J(.3,10,8),Z(4037440,{rough:.6}),0,t,0);a.scale.set(.3*r,.2*i,1.005),a.position.z=n,e.add(a)}return e}function hh(e=14701899){let t=new U,n=Q(new J(.28,14,12),Z(e,{rough:.35}),0,1.65,0);n.scale.set(1,1.15,1);let r=Q(new q(.05,.08,6),Z(e,{rough:.35}),0,1.32,0),i=Q(new K(.008,.008,1.3,4),Z(14211280),0,.65,0);return t.add(n,r,i),t.userData.body=n,t}function gh(){let e=new U;e.add(Q(new G(.5,.09,.34),Z(13351060,{rough:1}),0,.045,0));for(let t=0;t<3;t++)for(let n=0;n<2;n++){let r=Q(new J(.06,10,8),Z(16643816,{rough:.8}),-.15+t*.15,.11,-.075+n*.15);r.scale.y=1.25,e.add(r)}return e}function _h(){let e=qm(),t=Z(15896890,{rough:.7});for(let[n,r,i]of[[-.2,.5,-.12],[.02,.5,.1],[.24,.5,-.08],[-.02,.5,-.18],[.1,.66,-.02],[-.12,.66,0]])e.add(Q(new J(.11,10,8),t,n,r,i));return e}function vh(){let e=new U,t=Q(new J(.34,16,12),Z(3115581,{rough:.55}),0,.32,0);t.scale.set(1.2,1,1),e.add(t);for(let t of[-.5,0,.5]){let n=Q(new J(.34,12,10),Z(2453297,{rough:.55}),t*.34,.32,0);n.scale.set(.14,1.01,1.01),e.add(n)}let n=new U,r=Q(new K(.26,.26,.12,14,1,!1,0,Math.PI/2),Z(14703179,{rough:.7}),0,0,0),i=Q(new K(.28,.28,.1,14,1,!0,0,Math.PI/2),Z(3115581,{rough:.55}),0,0,0);n.add(r,i);for(let[e,t]of[[.16,.5],[.2,.9],[.13,1.1]])n.add(Q(new J(.016,5,4),Z(2236962),Math.cos(t)*e,.065,Math.sin(t)*e));return n.rotation.set(0,.4,Math.PI/2),n.position.set(.62,.27,.1),e.add(n),e}function yh(){let e=new U,t=Q(new K(.09,.07,.5,10),Z(16765502,{rough:.8}),0,.25,0);e.add(t);for(let t=0;t<4;t++)for(let n=0;n<5;n++){let r=Q(new J(.024,5,4),Z(15911246,{rough:.8}),Math.cos(n*1.256+t)*.085,.08+t*.11,Math.sin(n*1.256+t)*.085);e.add(r)}for(let t of[-1,1]){let n=Q(new q(.07,.42,5),Z(4172366,{flat:!0}),t*.08,.2,0);n.rotation.z=t*.5,e.add(n)}return e}function bh(e=1){let t=new U,n=Z(15238702,{rough:.7});for(let e=0;e<5;e++){let r=Q(new J(.26,12,10),n,Math.cos(e*1.256)*.07,.24,Math.sin(e*1.256)*.07);r.scale.set(1,.9,1),t.add(r)}return t.add(Q(new K(.035,.05,.16,6),Z(7047738),0,.52,0)),t.scale.setScalar(e),t}function xh(){let e=new U;e.add(Q(new K(.04,.04,2.1,8),Z(10119743),0,1.05,0));let t=Q(new q(1.05,.5,10),Z(4037440,{rough:.8}),0,2.15,0);e.add(t);for(let t=0;t<5;t++){let n=Q(new q(1.06,.48,10,1,!1,t*1.256,.628),Z(16645622,{rough:.8}),0,2.14,0);e.add(n)}return e}function Sh(e,t,n){let r=[],i=new Wr({visible:!1});for(let a of e.interactables){let e=t.get(a.id);if(!e)continue;e.updateWorldMatrix(!0,!0);let o=new er().setFromObject(e),s=o.getCenter(new V),c=o.getSize(new V),l=Math.max(a.collider.scale,1.5),u;u=a.collider.type===`sphere`?new J(Math.max(c.x,c.y,c.z)/2*l,8,8):new G(c.x*l,c.y*l,c.z*l);let d=new ni(u,i);d.position.copy(s),d.userData.interactableId=a.id,e.userData.interactableId=a.id,n.add(d),r.push(d)}return r}function Ch(e){let t=e??null;for(;t;){let e=t.userData?.interactableId;if(e)return e;t=t.parent}return null}function wh(e,t){let n=[...e.interactables.values()],r=t.intersectObjects(n,!0)[0];if(r)return Ch(r.object);let i=t.intersectObjects(e.colliders,!1)[0];return i?Ch(i.object):null}function Th(e){return()=>{nm(e),e.removeFromParent()}}function Eh(e){let t=new U,n=new Map,r=Q(new K(14,14,.3,36),Z(7324767,{rough:1}),0,-.15,0);r.receiveShadow=!0,t.add(r);let i=new U;for(let[e,t,n,r]of[[-4,-3,2.6,8245354],[5,2,3.2,6535252],[2,-5,2.2,8245354]])i.add(Q(new K(n,n,.02,20),Z(r,{rough:1}),e,.01,t));let a=Q(new K(.9,.9,.02,16),Z(14467210,{rough:1}),0,.012,6);a.scale.set(1,1,4.5),i.add(a);let o=sm();o.position.set(1.2,0,3.4),n.set(`ball`,o);let s=am(1.25);s.position.set(-3.4,0,1.6),n.set(`tree`,s);let c=om(16765502,!0);c.position.set(2.9,0,2.3),n.set(`flower`,c);let l=cm();l.position.set(-1.4,0,4.2),l.rotation.y=.35,n.set(`bench`,l);let u=lm();u.position.set(4.4,0,.8),n.set(`bush`,u),t.add(o,s,c,l,u);let d=nh();d.position.set(4.2,0,4.6),n.set(`pond`,d);let f=rh();f.position.set(3.9,.06,4.3),f.rotation.y=.6,n.set(`duck`,f);let p=rh(.55);p.position.set(4.7,.06,4.9),p.rotation.y=-.8;let m=ih();m.position.set(-3.5,0,4.5),n.set(`kite`,m);let h=ah();h.position.set(-.2,0,6.2),h.rotation.y=.3,t.add(d,f,p,m,h);for(let[e,t,n]of[[-5.2,3.6,15895202],[-4.6,4.1,16777215],[-5.6,4.3,12159712],[5.6,4.6,15895202],[6,-2.8,16777215]]){let r=om(n);r.scale.setScalar(.7),r.position.set(e,0,t),i.add(r)}let g=dm(10);g.position.set(0,0,-6.5);let _=dm(10);_.position.set(-7,0,0),_.rotation.y=Math.PI/2,i.add(g,_),i.add(fm(6,9426044).translateX(-12).translateZ(-10),fm(8,8176748).translateX(11).translateZ(-12));for(let e of[-.7,.7])i.add(Q(new K(.07,.07,1.3,6),Z(10119738),e,.65,-6.5));let v=Q(new K(.05,.05,1.6,6),Z(10119738),0,1.25,-6.5);v.rotation.z=Math.PI/2,i.add(v),t.add(rm(i));let y=Zm();y.position.set(6.5,8.6,-11),t.add(y);let b=[];for(let[e,n,r]of[[-6,7.5,-8],[4,8.5,-10],[9,7,-6]]){let i=um();i.position.set(e,n,r),b.push(i),t.add(i)}let x=[Qm(new V(3.6,2.3,2.2),15900730,0),Qm(new V(-4.4,2.5,3.4),12159712,2.4),$m(8.2,0),th({x:0,z:3,r:4})];for(let e of x)t.add(e.root);return{name:`park`,root:t,bounds:{minX:-5.6,maxX:6.2,minZ:-5.2,maxZ:7.2},obstacles:[{x:-3.4,z:1.6,r:.55},{x:-1.4,z:4.2,r:.95},{x:4.4,z:.8,r:.6},{x:4.2,z:4.6,r:1.35}],interactables:n,colliders:Sh(e,n,t),skyColor:11461631,sky:{top:7126517,bottom:14283263},light:{sun:16773840,sunIntensity:2.8},fog:14283263,ambient(e){b.forEach((t,n)=>{t.position.x+=Math.sin(e*1e-4+n)*.002});for(let t of x)t.update(e);f.position.y=.06+Math.sin(e*.0016)*.02,p.position.y=.06+Math.sin(e*.0019+1)*.02,m.rotation.z=Math.sin(e*7e-4)*.08},dispose:Th(t)}}function Dh(e){let t=new U,n=new Map,r=Q(new G(12,.3,12),Z(13212259,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=im(12,5,15982528);i.position.set(0,2.5,-6);let a=im(12,5,15982528);a.position.set(-6,2.5,0),a.rotation.y=Math.PI/2,t.add(r,i,a);let o=new U;o.add(Q(new G(12,.35,.24),Z(11896143),0,.17,-5.94));for(let e=-5;e<=5;e+=2)o.add(Q(new G(.04,.005,12),Z(11896143,{rough:1}),e,.005,0));t.add(bm(14258026));let s=_m();s.position.set(1.9,0,-1.2),n.set(`table`,s);let c=pm();c.position.set(1.7,.82,-1.2),n.set(`milk`,c);let l=mm();l.position.set(2.4,.82,-.9);let u=hm();u.position.set(-3.4,0,-3.6),u.rotation.y=.5,n.set(`bed`,u);let d=gm();d.position.set(-4.4,0,-.6),d.rotation.y=.7,n.set(`teddy-bear`,d);let f=vm();f.position.set(2.6,2.4,-5.83),n.set(`window`,f);let p=ym();p.position.set(-1.6,0,-4.7),n.set(`lamp`,p);let m=sm();m.scale.setScalar(.8),m.position.set(.6,0,2.6),n.set(`ball`,m),t.add(s,c,l,u,d,f,p,m);let h=uh();h.position.set(3.6,0,1.6),h.rotation.y=-.6,n.set(`sofa`,h);let g=dh();g.position.set(-.7,.03,.4),g.rotation.y=.9,n.set(`cat`,g);let _=Q(new G(.42,.12,.3),Z(16643816,{rough:1}),.32,.62,-.62),v=Q(new G(1.04,.07,.5),Z(14181231,{rough:1}),0,.6,.42);u.add(_,v);let y=Q(new G(.34,.06,.26),Z(4028632,{rough:.9}),2.2,.03,2.9);y.rotation.y=.5,t.add(y),t.add(h,g);for(let[e,t]of[[-1.6,16643816],[.2,16643816]])o.add(Q(new G(.7,.9,.06),Z(10119743),e,2.7,-5.85)),o.add(Q(new G(.55,.75,.07),Z(t,{rough:.9}),e,2.7,-5.84));let b=Q(new K(.14,.14,.05,12),Z(16763198),-1.6,2.82,-5.8);b.rotation.x=Math.PI/2,o.add(b),o.add(Q(new G(.26,.2,.05),Z(14701899),-1.68,2.52,-5.8)),o.add(Q(new G(.24,.2,.05),Z(4037440),.12,2.55,-5.8));let x=Q(new q(.18,.14,4),Z(9132587),.12,2.72,-5.8);x.rotation.y=Math.PI/4,o.add(x);let S=Q(new K(.09,.09,.05,12),Z(15896890),.34,2.92,-5.8);S.rotation.x=Math.PI/2,o.add(S);for(let[e,t,n,r]of[[1.4,.15,2.2,14701899],[1.75,.15,2.35,4028632],[1.55,.45,2.28,16763198]])o.add(Q(new G(.3,.3,.3),Z(r,{rough:.7}),e,t,n));o.add(Q(new G(.5,.08,1.7),Z(10119743,{rough:1}),-5.62,1.5,2.2));for(let e of[1.4,3])o.add(Q(new G(.5,1.5,.08),Z(10119743,{rough:1}),-5.62,.75,e));for(let e of[.35,.95])o.add(Q(new G(.46,.07,1.55),Z(10119743,{rough:1}),-5.62,e,2.2));for(let e=0;e<8;e++){let t=Q(new G(.3,.34,.12),Z([14701899,4028632,4037440,16763198,12159712,15896890,9427396,14181231][e],{rough:.9}),-5.6,e<4?.58:1.18,1.55+e%4*.35);t.rotation.x=e%3==2?.12:0,o.add(t)}o.add(Q(new K(.12,.09,.18,8),Z(14053450),-5.62,1.63,1.6)),o.add(Q(new Si(.16,1),Z(4172366,{flat:!0}),-5.62,1.84,1.6)),t.add(rm(o));let C=Q(new G(.5,1.7,.08),Z(14715482,{rough:1}),1.65,2.4,-5.8);t.add(C);let w=Q(new J(.6,12,10),new Wr({color:16774872}),5.5,8.2,-10);w.castShadow=!1,t.add(w);let T=[[-3,8.8,-10.5],[1.5,9.4,-11],[8,9,-10]].map(([e,n,r])=>{let i=Q(new J(.09,6,6),new Wr({color:16777215}),e,n,r);return i.castShadow=!1,t.add(i),i}),E=new ma(16761466,12,8,1.8);return E.position.set(-1.6,1.2,-4.7),t.add(E),{name:`home`,root:t,bounds:{minX:-5,maxX:5.2,minZ:-5,maxZ:5.2},obstacles:[{x:-3.4,z:-3.6,r:1.25},{x:1.9,z:-1.2,r:.95},{x:-1.6,z:-4.7,r:.3},{x:3.6,z:1.6,r:1.15}],interactables:n,colliders:Sh(e,n,t),skyColor:3029596,sky:{top:1845063,bottom:10119814},light:{sun:10134232,sunIntensity:1.5,ambient:10133704,ambientIntensity:.9,hemiSky:8029368,hemiGround:6969930},ambient(e){C.rotation.y=Math.sin(e*9e-4)*.06,E.intensity=11.5+Math.sin(e*.004)*.5,T.forEach((t,n)=>t.scale.setScalar(1+Math.sin(e*.003+n*2.1)*.35)),g.scale.y=1+Math.sin(e*.0022)*.035},dispose:Th(t)}}function Oh(e){let t=new U,n=new Map,r=Q(new G(13,.3,12),Z(15259054,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=im(13,5,15332091);i.position.set(0,2.5,-6);let a=im(12,5,15332091);a.position.set(6.5,2.5,0),a.rotation.y=-Math.PI/2;let o=Q(new G(13,.5,.2),Z(8042728),0,1.1,-5.94);t.add(r,i,a,o);let s=Em();s.position.set(-1.4,.6,-5.8),n.set(`board`,s);let c=Tm();c.position.set(6.33,0,2.2),c.rotation.y=-Math.PI/2,n.set(`door`,c);let l=wm();l.position.set(-1.2,0,-1.6),n.set(`desk`,l);let u=xm();u.position.set(-1.35,.76,-1.6),u.rotation.y=.25,n.set(`book`,u);let d=mm(4028632);d.scale.setScalar(1.6),d.position.set(-.6,.755,-1.75);let f=Sm();f.scale.setScalar(.85),f.position.set(-.6,.86,-1.75),f.rotation.z=.12,n.set(`pencil`,f);let p=Cm();p.position.set(-1.3,0,-.55),p.rotation.y=Math.PI,n.set(`chair`,p);let m=Dm();m.position.set(2.9,0,-.8),m.rotation.y=-.5,n.set(`bag`,m);let h=wm();h.position.set(3.9,0,-4.4);let g=pm();g.position.set(3.9,.76,-4.4),n.set(`milk`,g);let _=sm();_.scale.setScalar(.8),_.position.set(-4.6,0,1.8),n.set(`ball`,_),t.add(s,c,l,u,d,f,p,m,h,g,_);let v=new U,y=wm();y.position.set(1.8,0,-2.4);let b=Cm(4037440);b.position.set(1.7,0,-1.35),b.rotation.y=Math.PI,v.add(y,b),[14701899,16763198,4037440,4028632,12159712].forEach((e,t)=>{let n=Q(t%3==0?new K(.14,.14,.05,16):t%3==1?new G(.24,.24,.05):new K(.16,.16,.05,3),Z(e),-4.4+t*.7,3.6,-5.82);t%3!=1&&(n.rotation.x=Math.PI/2),v.add(n)});for(let[e,t]of[[-2.2,16765502],[-.8,9427396],[.6,15895202]]){let n=Q(new G(.05,.6,.5),Z(16645622,{rough:1}),6.42,2.6,e),r=Q(new G(.06,.3,.28),Z(t,{rough:1}),6.41,2.55,e);v.add(n,r)}t.add(rm(v));let x=Om();x.position.set(2.6,3.6,-5.8),t.add(x);let S=x.children[2],C=x.children[3],w=new U;w.add(Q(new K(.02,.02,1.6,6),Z(10119743),0,0,0));let T=w.children[0];T.rotation.z=Math.PI/2,[14701899,4028632,16763198].forEach((e,t)=>{let n=-.6+t*.6;w.add(Q(new K(.008,.008,.4,4),Z(14211280),n,-.25,0));let r=t%2==0?new J(.11,8,6):new G(.18,.18,.18);w.add(Q(r,Z(e,{rough:.8}),n,-.52,0))}),w.position.set(4.6,3.4,-3.6),t.add(w);let E=fh();E.position.set(4.7,0,-.6),E.rotation.y=-.7;let D=ph();D.position.set(1.9,.75,-2.5),D.rotation.y=.15;let O=mh();O.position.set(-4.5,0,-5);let k=Q(new Ti(.14,.02,6,14),Z(16645622),-2.55,2.05,-5.66),ee=Q(new J(.022,6,6),Z(16645622),-2.6,2.09,-5.65),te=Q(new J(.022,6,6),Z(16645622),-2.5,2.09,-5.65),ne=Q(new Ti(.06,.015,5,10,Math.PI),Z(16645622),-2.55,2,-5.65);ne.rotation.z=Math.PI;let A=Q(new Ti(.1,.018,5,3),Z(16763198),-.75,2.3,-5.66);t.add(k,ee,te,ne,A),t.add(E,D,O);let re=Q(new K(.22,.16,.3,10),Z(14053450),5.6,.15,-5.2),ie=Q(new Si(.34,1),Z(4172366,{flat:!0}),5.6,.6,-5.2);return t.add(re,ie),{name:`school`,root:t,bounds:{minX:-5.4,maxX:5.4,minZ:-5,maxZ:5.2},obstacles:[{x:-1.2,z:-1.6,r:.75},{x:1.8,z:-2.4,r:.75},{x:3.9,z:-4.4,r:.75},{x:-1.3,z:-.55,r:.45},{x:1.7,z:-1.35,r:.45},{x:5.6,z:-5.2,r:.4},{x:4.7,z:-.6,r:.6},{x:-4.5,z:-5,r:.4}],interactables:n,colliders:Sh(e,n,t),skyColor:12576511,sky:{top:9425144,bottom:15529983},light:{sun:16775402,sunIntensity:2.7},ambient(e){ie.rotation.y=Math.sin(e*7e-4)*.15,w.rotation.y=e*3e-4,O.children[2].rotation.y=e*2e-4,S.rotation.y=-e*1e-4,C.rotation.y=1.1-e*83e-7},dispose:Th(t)}}function kh(e){let t=new U,n=new Map,r=Q(new G(26,.3,24),Z(8176739,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=Q(new K(7.4,7.4,.06,28),Z(14258026,{rough:1}),0,.02,1.6);t.add(r,i);let a=km();a.position.set(-3.4,0,.6),n.set(`swing`,a);let o=Am();o.position.set(3.4,0,.6),o.rotation.y=-.35,n.set(`slide`,o);let s=jm();s.position.set(.2,0,2.9),n.set(`sand`,s);let c=Mm();c.position.set(-1.2,0,-1.6),c.rotation.y=.4,n.set(`seesaw`,c);let l=sm();l.position.set(2.2,0,3.6),n.set(`ball`,l);let u=cm();u.position.set(4.6,0,3.6),u.rotation.y=-.5,n.set(`bench`,u);let d=am(1.15);d.position.set(-4.8,0,-2.6),n.set(`tree`,d),t.add(a,o,s,c,l,u,d);let f=oh();f.position.set(-4.6,0,3.6);let p=f.userData.disc,m=sh();m.position.set(.8,0,-3.8),m.rotation.y=.2;let h=ch();h.position.set(-2.6,.055,3.2),h.rotation.y=Math.PI-.15;let g=lh();g.position.set(6,.08,-1.6),g.rotation.set(0,.5,.14),n.set(`bike`,g),t.add(f,m,h,g);let _=new U,v=am(.9);v.position.set(5.4,0,-3.4),_.add(v);for(let[e,t]of[[-6,-4.2],[6.2,-1.4],[-6.4,1.8]]){let n=lm();n.position.set(e,0,t),_.add(n)}for(let[e,t,n]of[[-2.4,4.6,14701899],[1.6,5,12159712],[4,5.2,16765502],[-5.4,4.4,15895202],[6.1,4.8,16777215]]){let r=om(n);r.position.set(e,0,t),_.add(r)}let y=dm(20);y.position.set(0,0,-5.6),_.add(y),t.add(rm(_));let b=Zm();b.position.set(-6.4,8.8,-11),t.add(b);let x=[Qm(new V(-4.8,2.4,4.6),14701899,.5),Qm(new V(5.2,2.6,4),4028632,3.1),$m(8.6,1.2),th({x:.2,z:2.9,r:2.4})];for(let e of x)t.add(e.root);let S=[[-6,6.4,-8],[5,7.2,-9],[.5,6.8,-11]].map(([e,n,r])=>{let i=um();return i.position.set(e,n,r),t.add(i),i});return{name:`playground`,root:t,bounds:{minX:-6.8,maxX:6.8,minZ:-5,maxZ:6.2},obstacles:[{x:-3.4,z:.6,r:1},{x:3.4,z:.6,r:1.1},{x:.2,z:2.9,r:1.15},{x:-1.2,z:-1.6,r:.8},{x:4.6,z:3.6,r:.6},{x:-4.8,z:-2.6,r:.6},{x:5.4,z:-3.4,r:.5},{x:-4.6,z:3.6,r:1},{x:.8,z:-3.8,r:.85},{x:6,z:-1.6,r:.5}],interactables:n,colliders:Sh(e,n,t),skyColor:11066879,sky:{top:7652342,bottom:14480127},light:{sun:16773840,sunIntensity:2.8},fog:14480127,ambient(e){S.forEach((t,n)=>{t.position.x+=Math.sin(e*8e-5+n)*.004}),a.rotation.x=Math.sin(e*9e-4)*.02;for(let t of x)t.update(e);p.rotation.y=e*4e-4},dispose:Th(t)}}function Ah(e){let t=new U,n=new Map,r=Q(new G(14,.3,13),Z(15786696,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=im(14,5.4,16643816);i.position.set(0,2.7,-6.2);let a=im(13,5.4,16643816);a.position.set(-7,2.7,0),a.rotation.y=Math.PI/2;let o=Q(new G(14,.6,.2),Z(9427396),0,1.15,-6.14);t.add(r,i,a,o);let s=bm(9427396);s.position.set(0,.02,2.2),s.scale.setScalar(1.5),t.add(s);let c=Rm();c.position.set(2.4,0,-.6),c.rotation.y=-.5,n.set(`chair`,c);let l=Q(new K(.3,.36,.7,12),Z(14072202),-2.6,.35,.2),u=Nm();u.scale.setScalar(1.5),u.position.set(-2.6,.7,.2),n.set(`tooth`,u);let d=_m();d.position.set(-.4,0,1.4),d.scale.set(1.6,1,1);let f=Pm();f.scale.setScalar(1.3),f.position.set(-1.4,.76,1.4),f.rotation.z=.1,n.set(`toothbrush`,f);let p=Fm();p.scale.setScalar(1.15),p.position.set(-.2,.76,1.35),p.rotation.z=-.12,n.set(`mirror`,p);let m=mm(4028632);m.scale.setScalar(1.9),m.position.set(1,.78,1.4),n.set(`cup`,m);let h=Lm();h.scale.setScalar(1.25),h.position.set(4.4,.95,1.6),h.rotation.y=-.4;let g=Q(new G(1.5,.95,.9),Z(13210698),4.4,.48,1.6);g.rotation.y=-.4,n.set(`fish`,h);let _=zm();_.position.set(-4.4,0,2.6),_.rotation.y=.35,n.set(`toy`,_),t.add(l,u,d,f,p,m,c,g,h,_);let v=hh(14701899);v.position.set(-3.9,0,3.1),n.set(`balloon`,v);let y=v.userData.body,b=gm();b.scale.setScalar(.75),b.position.set(2.35,.72,-.45),b.rotation.y=-.5,n.set(`teddy-bear`,b),t.add(v,b);let x=vm();x.position.set(1.2,2.2,-6.15),x.scale.setScalar(1.3);let S=ym();S.position.set(5.6,0,-4.4);let C=Q(new K(.26,.2,.36,10),Z(14053450),-5.8,.18,-4.6),w=Q(new Si(.45,1),Z(4172366,{flat:!0}),-5.8,.8,-4.6);t.add(x,S,C,w);let T=new U;[9427396,16765502,12159712].forEach((e,t)=>{let n=Q(new G(.8,.8,.06),Z(e),-4.2+t*1.1,2.9,-6.1),r=Nm();r.scale.setScalar(.5),r.position.set(-4.2+t*1.1,2.72,-6.04),T.add(n,r)});let E=Q(new G(.8,.8,.06),Z(8042728),-.9,2.9,-6.1),D=Pm();D.scale.setScalar(.75),D.position.set(-.9,2.6,-6.03),T.add(E,D),t.add(rm(T));let O=eh({x:4.4,y:1.35,z:1.6,h:.5},5);t.add(O.root);let k=h.userData.fish??[];return{name:`dentist`,root:t,bounds:{minX:-6,maxX:6.2,minZ:-5.2,maxZ:5.4},obstacles:[{x:2.4,z:-.6,r:.95},{x:-.4,z:1.4,r:.85},{x:-2.6,z:.2,r:.5},{x:4.4,z:1.6,r:.85},{x:-4.4,z:2.6,r:.6},{x:-5.8,z:-4.6,r:.45},{x:5.6,z:-4.4,r:.4}],interactables:n,colliders:Sh(e,n,t),skyColor:13626111,sky:{top:10278132,bottom:15923967},light:{sun:16774886,ambient:14479594},ambient(e){w.rotation.y=Math.sin(e*6e-4)*.14,O.update(e),v.rotation.z=Math.sin(e*8e-4)*.07,y.position.y=1.65+Math.sin(e*.0011)*.04,k.forEach((t,n)=>{let r=e*(5e-4+n*2e-4)+n*2.5;t.position.x=.05+Math.sin(r)*.3,t.position.y=(n===0?.38:.28)+Math.sin(e*.0011+n)*.04,t.scale.x=Math.abs(t.scale.x)*(Math.cos(r)>=0?1:-1)})},dispose:Th(t)}}function jh(e){let t=new U,n=new Map,r=Q(new G(15,.3,13),Z(15262938,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=im(15,5.2,16644850);i.position.set(0,2.6,-6.2),t.add(r,i);let a=new U;for(let e=0;e<7;e++)a.add(Q(new G(1.6,.02,12),Z(e%2?14472904:15262938,{rough:1}),-4.8+e*1.6,.005,0));let o=Q(new G(9,.72,1.1),Z(13210698,{rough:1}),.8,.36,1.2),s=Q(new G(9.3,.1,1.3),Z(15259054,{rough:1}),.8,.76,1.2);t.add(o,s);let c=[[`apple`,Bm(),-2.6],[`banana`,Vm(),-1.2],[`bread`,Hm(),1.4],[`cheese`,Um(),2.8],[`milk`,pm(),4.2]];for(let[e,r,i]of c)r.position.set(i,.81,1.2),r.rotation.y=i*.12,n.set(e,r),t.add(r);let l=Ym();l.position.set(-4.6,0,-.6),l.rotation.y=.4,n.set(`shelf`,l);let u=Jm();u.position.set(0,0,3.4),u.rotation.y=.25,n.set(`cart`,u),t.add(l,u);let d=gh();d.scale.setScalar(1.4),d.position.set(.1,.81,1.2),d.rotation.y=.2,n.set(`egg`,d);let f=_h();f.position.set(-3.8,0,2.6),f.rotation.y=.4,n.set(`orange`,f),t.add(d,f),t.add(Q(new G(15,.5,.2),Z(15896890),0,1.05,-6.1));let p=Ym();p.position.set(5.2,0,-3.4),p.rotation.y=-.5,a.add(p);for(let[e,t]of[[-2.2,-3.6],[-.9,-3.9]]){let n=qm();n.position.set(e,0,t),a.add(n)}for(let[e,t,n]of[[-1.8,-3.9,.2],[-1,-3.7,-.3],[-1.45,-3.5,.1]]){let r=qm();r.position.set(e,0,t),r.rotation.y=n,a.add(r)}for(let[e,t,n]of[[-1.4,-3.5,.3],[-1.55,-3.45,-.4],[-1.3,-3.55,1.1]]){let r=Vm();r.scale.setScalar(1.15),r.position.set(e,.42,t),r.rotation.y=n,a.add(r)}[-4.2,-2.5,-.8,.9].forEach(e=>a.add(Q(new G(1.1,1,.08),Z(16643816,{rough:.9}),e,3.4,-6.08))),a.add(Q(new J(.24,12,10),Z(14701899,{rough:.7}),-4.2,3.4,-6)),a.add(Q(new J(.05,6,6),Z(4172366),-4.13,3.66,-6));let m=Q(new Ti(.2,.07,8,12,Math.PI),Z(16765502,{rough:.7}),-2.5,3.32,-6);m.rotation.z=Math.PI,a.add(m),a.add(Q(new G(.34,.5,.06),Z(16645622,{rough:.6}),-.8,3.4,-6)),a.add(Q(new G(.34,.16,.062),Z(4028632,{rough:.6}),-.8,3.56,-6));let h=Q(new K(.26,.26,.2,12,1,!1,0,Math.PI/2.2),Z(16106818),.78,3.3,-6);h.rotation.z=Math.PI/2,a.add(h);for(let e=0;e<3;e++)for(let t=0;t<=2-e;t++){let n=Q(new K(.13,.13,.3,12),Z(14214380,{rough:.4}),-5.6+t*.28+e*.14,.15+e*.31,3.4),r=Q(new K(.132,.132,.12,12),Z([14701899,4037440,16763198][(e+t)%3],{rough:.6}),-5.6+t*.28+e*.14,.15+e*.31,3.4);a.add(n,r)}for(let e=0;e<6;e++){let t=[14701899,4028632,4037440,12159712,15896890,16763198][e];a.add(Q(new G(.34,.5,.16),Z(t,{rough:.8}),1+e*.44,.55,-5.85)),a.add(Q(new G(.2,.2,.17),Z(16645622,{rough:.8}),1+e*.44,.62,-5.84))}a.add(Q(new G(3,.34,.5),Z(13210698,{rough:1}),2.1,.17,-5.8));for(let e=0;e<5;e++){let t=Q(new K(.09,.11,.42,10),Z(e%2?4172366:15896890,{rough:.3}),-3.6+e*.26,.55,-5.85),n=Q(new K(.035,.05,.16,8),Z(e%2?4172366:15896890,{rough:.3}),-3.6+e*.26,.83,-5.85);a.add(t,n)}a.add(Q(new G(1.6,.34,.5),Z(13210698,{rough:1}),-3.1,.17,-5.8));let g=Km();g.scale.setScalar(1.2),g.position.set(5.4,0,.6),a.add(g);for(let[e,t]of[[-.08,.05],[.1,-.04],[0,.12]]){let n=Q(new J(.11,8,6),Z(15250552,{rough:1}),5.4+e,.42,.6+t);n.scale.y=.7,a.add(n)}t.add(rm(a));let _=new U;_.add(Q(new G(2.3,2.3,.7),Z(11454424,{rough:.5}),0,1.15,-.05)),_.add(Q(new G(2.06,2.06,.6),Z(3823208,{rough:.8}),0,1.15,0));for(let e=0;e<3;e++)_.add(Q(new G(2,.05,.55),Z(14214380,{rough:.4}),0,.55+e*.62,.03));let v=[16645622,16769658,15895202,9427396,12159712];for(let e=0;e<5;e++)for(let t=0;t<3;t++)_.add(Q(new G(.3,.44,.3),Z(v[(e+t)%5],{rough:.6}),-.8+e*.4,.82+t*.62,.12)),t===2&&_.add(Q(new K(.06,.06,.1,8),Z(3823208,{rough:.5}),-.8+e*.4,1.1+t*.62,.12));return _.position.set(4.4,0,-5.65),t.add(_),{name:`grocery`,root:t,bounds:{minX:-6.4,maxX:6.4,minZ:-2.6,maxZ:5.4},obstacles:[{x:.8,z:1.2,r:1.4},{x:-4.6,z:-.6,r:.9},{x:5.2,z:-3.4,r:.9},{x:-1.5,z:-3.8,r:.9},{x:0,z:3.4,r:.7},{x:-3.8,z:2.6,r:.55},{x:4.4,z:-5.7,r:1},{x:-5.6,z:3.4,r:.5},{x:5.4,z:.6,r:.5}],interactables:n,colliders:Sh(e,n,t),skyColor:14676223,sky:{top:11721202,bottom:16054781},light:{sun:16446694,ambient:14871796,ambientIntensity:1.2},ambient(e){u.position.x=Math.sin(e*4e-4)*.06},dispose:Th(t)}}function Mh(e){let t=new U,n=new Map,r=Q(new G(26,.3,24),Z(13351060,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=Q(new G(26,.16,6),Z(8176739,{rough:1}),0,-.08,-7.5);t.add(r,i);let a=Xm();a.position.set(-.6,0,.4),t.add(a);let o=[[`tomato`,Wm(),-2.4,1],[`carrot`,Gm(),-1,1],[`apple`,Bm(),.4,1]];for(let[e,r,i,a]of o)r.position.set(i,a,.4),r.scale.setScalar(1.25),n.set(e,r),t.add(r);let s=Km();s.scale.setScalar(1.3),s.position.set(2.6,0,2.4),n.set(`basket`,s);let c=om(14701899,!0);c.position.set(4.4,0,1.2),c.scale.setScalar(1.3),n.set(`flower`,c);let l=qm();l.scale.setScalar(1.2),l.position.set(-4.4,0,2),l.rotation.y=.3,n.set(`crate`,l),t.add(s,c,l);let u=vh();u.position.set(2.6,0,4.3),n.set(`watermelon`,u);let d=yh();d.scale.setScalar(1.25),d.position.set(1,1.02,.4),d.rotation.z=Math.PI/2-.1,n.set(`corn`,d);let f=new U,p=bh(1.1);p.position.set(-2.8,0,4);let m=bh(.75);m.position.set(-2.1,0,4.4),f.add(p,m),n.set(`pumpkin`,f);let h=xh();h.position.set(4.9,0,4),t.add(u,d,f,h);let g=new U,_=Xm();_.position.set(5.6,0,-2.6),_.rotation.y=-.5,_.scale.setScalar(.9),g.add(_);for(let[e,t,n]of[[3.9,1.9,16765502],[4.9,1.6,12159712]]){let r=om(n);r.position.set(e,0,t),g.add(r)}for(let[e,t]of[[-5.6,.4],[-5.2,-1]]){let n=qm();n.position.set(e,0,t),g.add(n);for(let n=0;n<5;n++)g.add(Q(new J(.09,8,6),Z(n%2?9067176:5941320,{rough:.7}),e-.2+n%3*.2,.42+Math.floor(n/3)*.14,t-.1+n%2*.18))}let v=am(1.2);v.position.set(-6.6,0,-4.4);let y=am(.95);y.position.set(7,0,-5);let b=cm();b.position.set(.4,0,4.6);let x=dm(22);x.position.set(0,0,-6.4),g.add(v,y,b,x),t.add(rm(g));let S=Zm();S.position.set(6.4,9,-11),t.add(S);let C=new ma(16771520,5,7,1.6);C.position.set(-.6,2,.6),t.add(C);let w=[Qm(new V(5,2.4,1.2),14701899,1.1),Qm(new V(-4.6,2.6,2.2),16765502,4),$m(8.8,2.3),th({x:-.6,z:2,r:3})];for(let e of w)t.add(e.root);let T=[[-5,7.4,-9],[6,8,-10]].map(([e,n,r])=>{let i=um();return i.position.set(e,n,r),t.add(i),i});return{name:`market`,root:t,bounds:{minX:-6.2,maxX:6.4,minZ:-3.6,maxZ:5.6},obstacles:[{x:-.6,z:.4,r:1.6},{x:5.6,z:-2.6,r:1.3},{x:-4.4,z:2,r:.6},{x:-5.6,z:.4,r:.6},{x:-5.2,z:-1,r:.6},{x:.4,z:4.6,r:.6},{x:-6.6,z:-4.4,r:.6},{x:2.6,z:4.3,r:.5},{x:-2.5,z:4.2,r:.7},{x:4.9,z:4,r:.35}],interactables:n,colliders:Sh(e,n,t),skyColor:11066879,sky:{top:8374770,bottom:15985880},light:{sun:16771512,sunIntensity:2.9,hemiGround:11901546},fog:15985880,ambient(e){T.forEach((t,n)=>{t.position.x+=Math.sin(e*7e-5+n*2)*.004}),c.rotation.y=Math.sin(e*7e-4)*.12;for(let t of w)t.update(e)},dispose:Th(t)}}function Nh(e=1){let t=new U,n=Q(new K(.14,.22,1.9,7),Z(9067066,{flat:!0}),0,.95,0);n.rotation.z=.08,t.add(n);for(let[e,n,r]of[[0,0,1.15],[-.7,.3,.7],[.65,-.25,.75]]){let i=Q(new K(r,r*.75,.42,9),Z(5937994,{flat:!0}),e,2.05,n);t.add(i)}return t.scale.setScalar(e),t}function Ph(e=1){let t=new U;for(let e=0;e<5;e++){let n=e/5*Math.PI*2,r=Q(new J(.3,8,6),Z(e%2?4172366:3115581,{flat:!0}),Math.cos(n)*.22,.55,Math.sin(n)*.22);r.scale.set(.35,1.6,.7),r.rotation.set(Math.sin(n)*.5,0,-Math.cos(n)*.5),t.add(r)}return t.scale.setScalar(e),t}function Fh(){let e=Z(15249982,{rough:.85}),t=Z(13205806,{rough:.95}),n=new U,r=Q(new J(.42,14,12),e,0,.42,-.15);r.scale.set(1,.9,1.3),n.add(r);let i=Q(new J(.3,14,12),e,0,.72,.38);for(let e=0;e<8;e++){let r=e/8*Math.PI*2;n.add(Q(new J(.13,8,6),t,Math.cos(r)*.3,.72+Math.sin(r)*.3,.28))}n.add(i);for(let e of[-1,1])n.add(Q(new J(.05,6,6),t,e*.13,.95,.4)),n.add(Q(new J(.035,6,6),Z(2829099),e*.1,.78,.63));n.add(Q(new J(.05,6,6),Z(9067066),0,.68,.66));for(let t of[-1,1]){let r=Q(new J(.11,8,6),e,t*.2,.11,.35);r.scale.set(1,.6,1.3),n.add(r)}let a=Q(new K(.03,.03,.5,6),e,.15,.5,-.72);return a.rotation.x=.9,n.add(a,Q(new J(.06,6,6),t,.15,.72,-.9)),n}function Ih(){let e=Z(10135736,{rough:.9}),t=new U,n=Q(new J(.55,14,12),e,0,.62,-.2);n.scale.set(1.05,1,1.35);let r=Q(new J(.34,14,12),e,0,.85,.55);t.add(n,r);let i=Q(new K(.1,.085,.3,8),e,0,.68,.85);i.rotation.x=.5;let a=Q(new K(.085,.07,.28,8),e,0,.46,.98);a.rotation.x=.15;let o=Q(new K(.07,.055,.24,8),e,0,.26,1);o.rotation.x=-.25,t.add(i,a,o);for(let n of[-1,1]){let r=Q(new J(.22,10,8),e,n*.36,.9,.42);r.scale.set(.35,1,.8),t.add(r),t.add(Q(new J(.04,6,6),Z(2829099),n*.13,.95,.83));for(let r of[.25,-.55])t.add(Q(new K(.11,.13,.35,8),e,n*.3,.18,r))}return t}function Lh(){let e=Z(9067066,{rough:.9}),t=Z(15255976,{rough:.8}),n=new U,r=Q(new J(.2,12,10),e,0,.3,0);r.scale.set(1,1.2,.9);let i=Q(new J(.16,12,10),e,0,.62,.02),a=Q(new J(.12,10,8),t,0,.6,.1);a.scale.set(.9,.85,.6),n.add(r,i,a);for(let t of[-1,1]){n.add(Q(new J(.06,6,6),e,t*.16,.68,.02)),n.add(Q(new J(.022,6,6),Z(2829099),t*.045,.64,.2));let r=Q(new K(.04,.04,.34,6),e,t*.2,.36,.05);r.rotation.z=t*.6,n.add(r)}let o=Q(new Ti(.17,.03,6,12,Math.PI*1.3),e,-.16,.28,-.14);return o.rotation.y=Math.PI/2,n.add(o),n}function Rh(){let e=new U,t=Q(new J(.24,14,12),Z(2831424,{rough:.7}),0,.3,0);t.scale.set(1,1.35,.95);let n=Q(new J(.18,12,10),Z(16645622,{rough:.8}),0,.28,.09);n.scale.set(.85,1.25,.6),e.add(t,n);for(let t of[-1,1]){let n=Q(new J(.1,8,6),Z(2831424,{rough:.7}),t*.24,.32,0);n.scale.set(.4,1.2,.7),n.rotation.z=t*.35,e.add(n),e.add(Q(new J(.025,6,6),Z(16645622),t*.07,.62,.2)),e.add(Q(new J(.014,5,5),Z(2829099),t*.07,.62,.22));let r=Q(new J(.06,6,5),Z(15896890),t*.09,.03,.06);r.scale.set(1,.4,1.6),e.add(r)}let r=Q(new q(.045,.12,6),Z(15896890),0,.56,.24);return r.rotation.x=Math.PI/2,e.add(r),e}function zh(e){let t=new U,n=Z(10119738),r=Math.max(8,Math.round(e*6));for(let i=0;i<r;i++){let a=i/r*Math.PI*2;t.add(Q(new K(.04,.04,.5,5),n,Math.cos(a)*e,.25,Math.sin(a)*e))}let i=Q(new Ti(e,.03,6,r*2),n,0,.48,0);return i.rotation.x=Math.PI/2,t.add(i),t}function Bh(e){let t=new U,n=new Map,r=Q(new G(26,.3,24),Z(8832106,{rough:1}),0,-.15,0);r.receiveShadow=!0,t.add(r);let i=Q(new K(1.1,1.1,.02,16),Z(14467210,{rough:1}),.4,.012,4);i.scale.set(1,1,3.4),i.castShadow=!1,t.add(i);let a=Fh();a.position.set(-3.6,0,.2),a.rotation.y=.5,n.set(`lion`,a);let o=zh(1.5);o.position.set(-3.6,0,.2);let s=Ih();s.position.set(3.4,0,-.6),s.rotation.y=-.4,n.set(`elephant`,s);let c=zh(1.9);c.position.set(3.4,0,-.6);let l=new U,u=Q(new K(.16,.26,2.2,7),Z(8014382,{flat:!0}),0,1.1,0);u.rotation.z=-.12;let d=Q(new Si(1.05,1),Z(3115581,{flat:!0}),-.2,2.5,0);d.scale.set(1.3,.8,1.1);let f=Q(new K(.07,.09,1.3,6),Z(8014382,{flat:!0}),.6,1.9,.2);f.rotation.z=Math.PI/2-.3;let p=Q(new K(.025,.025,.65,5),Z(13220248),1.05,1.45,.25),m=Q(new Ti(.22,.07,8,14),Z(3815994,{rough:.9}),1.05,1,.25);l.add(u,d,f,p,m),l.position.set(-.6,0,.6);let h=Lh();h.position.set(.45,1.14,.86),h.rotation.y=.3,n.set(`monkey`,h);let g=Rh();g.position.set(4.8,.06,1.8),g.rotation.y=-.6,n.set(`penguin`,g);let _=Q(new K(1.3,1.3,.06,18),Z(15660794,{rough:.4}),4.8,.03,2),v=Q(new K(.5,.5,.07,14),Z(4892632,{rough:.25}),5.3,.035,2.5),y=Q(new K(1.05,1.05,.05,18),Z(4892632,{rough:.25}),-4.6,.025,3.1);y.scale.z=.8,t.add(y);let b=rh();b.position.set(-4.6,.06,2.9),b.rotation.y=.9,n.set(`duck`,b);let x=Nh(1.25);x.position.set(-5.4,0,-3.6),n.set(`tree`,x),t.add(a,o,s,c,l,h,g,_,v,b,x);let S=new U;for(let e=0;e<11;e++){let t=-6.5+e*1.3;if(Math.abs(t)<1.4)continue;let n=Q(new G(1.35,1.5,.8),Z(e%2?4164159:3504693,{flat:!0}),t,.75,-6.2);S.add(n)}for(let e of[-1.3,1.3])S.add(Q(new K(.12,.14,2.4,8),Z(10119738),e,1.2,-6.2));S.add(Q(new G(3.2,.55,.24),Z(14701899),0,2.6,-6.2));for(let[e,t,n]of[[-9,-9,1.4],[9.5,-8.5,1.1],[-11,-6,.9]]){let r=Nh(n);r.position.set(e,0,t),S.add(r)}for(let[e,t,n]of[[-6.2,-2.8,1.1],[6.4,-3.6,.9],[-5.9,5,1],[6.2,5.2,.8]]){let r=Ph(n);r.position.set(e,0,t),S.add(r)}S.add(Q(new K(.32,.36,.22,10),Z(10134187,{rough:.6}),-4.4,.11,-.5)),S.add(Q(new K(.27,.27,.23,10),Z(4892632,{rough:.3}),-4.4,.115,-.5));let C=Q(new J(.4,8,6),Z(14200928,{rough:1}),4.2,.2,-1.6);C.scale.set(1.4,.55,1.1),S.add(C),S.add(Q(new J(.22,7,5),Z(13214286,{rough:1}),3.7,.14,-1.3));for(let[e,t,n]of[[-2.2,1.6,15249982],[2,.9,10135736],[3.6,3.1,2831424]])S.add(Q(new K(.04,.05,.8,6),Z(10119738),e,.4,t)),S.add(Q(new G(.55,.4,.06),Z(15983820,{rough:.8}),e,.95,t)),S.add(Q(new J(.11,8,6),Z(n,{rough:.7}),e,.95,t+.05));S.add(Q(new G(1.5,.1,.45),Z(10119738,{rough:.9}),3.3,.5,4.9));for(let e of[-.6,.6])S.add(Q(new G(.12,.5,.4),Z(10119738,{rough:.9}),3.3+e,.25,4.9));S.add(Q(new K(.2,.16,.5,10),Z(4037440,{rough:.7}),4.4,.25,4.6));for(let e=0;e<6;e++)for(let t of[-1.35,1.35]){let n=Q(new K(.09,.09,.7,6),Z(9067066,{flat:!0}),.4+t,.08,1.2+e*1);n.rotation.x=Math.PI/2,S.add(n)}t.add(rm(S));let w=Zm();w.position.set(-6.2,8.8,-11),t.add(w);let T=[[-5,7.2,-9],[5.5,7.8,-10]].map(([e,n,r])=>{let i=um();return i.position.set(e,n,r),t.add(i),i}),E=[Qm(new V(-5.2,2.5,4.2),16765502,.8),$m(8.4,.6),th({x:.4,z:4,r:2.6})];for(let e of E)t.add(e.root);return{name:`zoo`,root:t,bounds:{minX:-6.6,maxX:6.6,minZ:-5.4,maxZ:6},obstacles:[{x:-3.6,z:.2,r:1.7},{x:3.4,z:-.6,r:2.1},{x:-.6,z:.6,r:.55},{x:4.8,z:2,r:1},{x:-5.4,z:-3.6,r:.6}],interactables:n,colliders:Sh(e,n,t),skyColor:11066879,sky:{top:7323890,bottom:14480100},light:{sun:16773840,sunIntensity:2.8},fog:14480100,ambient(e){T.forEach((t,n)=>{t.position.x+=Math.sin(e*8e-5+n)*.004});for(let t of E)t.update(e);h.rotation.z=Math.sin(e*.0012)*.08,s.rotation.y=-.4+Math.sin(e*6e-4)*.06,b.position.y=.03+Math.sin(e*.0016)*.02},dispose:Th(t)}}function Vh(e=1,t=.18){let n=new U;for(let e=0;e<5;e++){let r=Q(new K(.11-e*.012,.13-e*.012,.55,7),Z(11565636,{flat:!0}),Math.sin(t)*e*.45,.28+e*.5,0);r.rotation.z=-t,n.add(r)}let r=new V(Math.sin(t)*2.1,2.7,0);for(let e=0;e<6;e++){let t=e/6*Math.PI*2,i=Q(new J(.55,8,6),Z(e%2?4172366:3115581,{flat:!0}),r.x+Math.cos(t)*.55,r.y-.1,Math.sin(t)*.55);i.scale.set(1.3,.18,.45),i.rotation.y=-t,i.rotation.z=.25,n.add(i)}for(let[e,t]of[[.14,.1],[-.12,.14]])n.add(Q(new J(.11,8,6),Z(9067066),r.x+e,r.y-.28,t));return n.scale.setScalar(e),n}function Hh(){let e=new U,t=Q(new K(.045,.045,2.2,8),Z(14211280),0,1.1,0);e.add(t);let n=[14701899,16763198,4028632,16645622,15896890,9427396];for(let t=0;t<6;t++)e.add(Q(new q(1.05,.5,12,1,!1,t/6*Math.PI*2,Math.PI/3),Z(n[t],{rough:.8}),0,2.15,0));return e.add(Q(new J(.06,8,6),Z(14701899),0,2.48,0)),e.rotation.z=.35,e}function Uh(e=15896890){let t=new U;for(let n=0;n<5;n++){let r=n/5*Math.PI*2,i=Q(new J(.14,8,6),Z(e,{rough:.8}),Math.cos(r)*.16,.05,Math.sin(r)*.16);i.scale.set(1.6,.35,.6),i.rotation.y=-r,t.add(i)}return t.add(Q(new J(.12,8,6),Z(e,{rough:.8}),0,.06,0)),t}function Wh(){let e=Z(14701899,{rough:.7}),t=new U,n=Q(new K(.55,.35,.5,12,1,!1,0,Math.PI),e,0,.3,0);n.rotation.set(0,0,Math.PI/2),n.scale.set(1,2.2,1),t.add(n);let r=Q(new G(1.25,.08,.62),Z(10119738,{rough:.8}),0,.56,0),i=Q(new K(.04,.04,1.5,6),Z(10119738),0,1.3,0);t.add(r,i);let a=Q(new q(.55,1.1,3),Z(16645622,{rough:.8}),.28,1.35,0);return a.scale.z=.06,t.add(a),t}function Gh(){let e=Z(16109528,{rough:.5}),t=new U,n=Q(new J(.22,14,10),e,0,.1,0);n.scale.set(1,.4,.9),t.add(n);for(let e=-2;e<=2;e++){let n=Q(new J(.215,10,8),Z(15513800,{rough:.5}),0,.1,0);n.scale.set(.08,.42,.88),n.rotation.y=e*.35,t.add(n)}return t.add(Q(new J(.07,8,6),e,0,.08,-.22)),t}function Kh(){let e=Z(14705995,{rough:.6}),t=new U,n=Q(new J(.18,12,10),e,0,.14,0);n.scale.set(1.3,.7,1),t.add(n);for(let n of[-1,1]){let r=Q(new K(.03,.03,.2,6),e,n*.26,.22,.08);r.rotation.z=n*-.8;let i=Q(new J(.08,8,6),e,n*.36,.32,.1);i.scale.set(1,.8,.7),t.add(r,i);for(let r=0;r<3;r++){let i=Q(new K(.018,.018,.16,5),e,n*.2,.06,-.08+r*.09);i.rotation.z=n*-1.1,t.add(i)}t.add(Q(new K(.016,.016,.1,5),e,n*.06,.3,.12)),t.add(Q(new J(.03,6,6),Z(2829099),n*.06,.37,.12))}return t}function qh(){let e=Z(15258262,{rough:1}),t=new U;t.add(Q(new K(.5,.55,.5,12),e,0,.25,0));for(let[n,r]of[[-.42,.42],[.42,.42],[-.42,-.42],[.42,-.42]])t.add(Q(new K(.16,.18,.7,10),e,n,.35,r)),t.add(Q(new q(.19,.22,10),Z(14467210,{rough:1}),n,.8,r));t.add(Q(new K(.22,.24,.9,10),e,0,.45,0)),t.add(Q(new q(.26,.28,10),Z(14467210,{rough:1}),0,1.03,0)),t.add(Q(new K(.012,.012,.3,4),Z(10119738),0,1.3,0));let n=Q(new G(.14,.09,.02),Z(14701899),.08,1.38,0);return t.add(n),t}function Jh(e){let t=new U,n=new Map,r=Q(new G(26,.3,16),Z(15785120,{rough:1}),0,-.15,3.2);r.receiveShadow=!0;let i=Q(new G(26,.24,12),Z(4037336,{rough:.3}),0,-.14,-8.6),a=Q(new G(26,.02,12),Z(5945576,{rough:.15}),0,.005,-8.6);t.add(r,i,a);let o=Q(new G(26,.025,1.6),Z(4892632,{rough:.2}),0,.018,-3.2);o.castShadow=!1,t.add(o),n.set(`sea`,o);let s=[0,1,2].map(e=>{let n=Q(new G(26,.03,.22),Z(15661309,{rough:.4}),0,.02,-3.4-e*1.6);return n.castShadow=!1,t.add(n),n}),c=Wh();c.position.set(3.6,.05,-3.4),c.rotation.y=.4,n.set(`boat`,c);let l=Gh();l.scale.setScalar(1.3),l.position.set(-1.8,0,1.8),l.rotation.y=.5,n.set(`shell`,l);let u=Kh();u.scale.setScalar(1.2),u.position.set(1.8,0,2.4),n.set(`crab`,u);let d=qh();d.position.set(-3.9,0,2.6),d.rotation.y=.3,n.set(`sand`,d);let f=new U,p=Q(new J(.42,16,12),Z(16645622,{rough:.5}),0,.42,0);f.add(p);for(let[e,t]of[[14701899,0],[4028632,Math.PI/3],[16763198,-Math.PI/3]]){let n=Q(new J(.44,12,10),Z(e,{rough:.5}),0,.42,0);n.scale.set(.6,1,1),n.rotation.y=t,f.add(n)}f.position.set(4.5,0,2.8),n.set(`ball`,f);let m=rh();m.position.set(-4.4,.02,-.4),m.rotation.y=.8,n.set(`duck`,m),t.add(c,l,u,d,f,m);let h=new U,g=Vh(1.15,.2);g.position.set(-6.1,0,3.2);let _=Vh(.85,-.14);_.rotation.y=Math.PI*.7,_.position.set(6.2,0,4.8),h.add(g,_);let v=Hh();v.position.set(-5.4,0,4.6),h.add(v),h.add(Q(new K(.06,.08,1.2,6),Z(10119738),5.9,.6,-1.6));let y=Q(new Ti(.32,.1,8,16),Z(14701899,{rough:.6}),5.9,1.05,-1.55);h.add(y);for(let e of[0,Math.PI/2,Math.PI,Math.PI*1.5]){let t=Q(new G(.14,.22,.08),Z(16645622,{rough:.6}),5.9+Math.cos(e)*.32,1.05+Math.sin(e)*.32,-1.53);h.add(t)}let b=Uh();b.position.set(.4,0,5.4);let x=Uh(12159712);x.scale.setScalar(.7),x.position.set(3.4,0,5),h.add(b,x);let S=Q(new G(1.1,.03,1.8),Z(9427396,{rough:1}),-5.3,.03,2.4);S.rotation.y=.2,h.add(S);for(let e of[[-5.55,.05,2],[-5.05,.05,2.8]])h.add(Q(new G(1.06,.032,.24),Z(16645622,{rough:1}),e[0],e[1],e[2]));h.add(Q(new K(.16,.13,.24,10),Z(14701899),5.6,.12,4.4));let C=Q(new G(.09,.4,.03),Z(4028632),5.9,.2,4.6);C.rotation.z=.5,h.add(C);for(let[e,t,n]of[[.6,4.6,16109528],[-.9,5.2,16645622],[2.8,4.9,15513800]]){let n=Gh();n.scale.setScalar(.5),n.position.set(e,0,t),h.add(n)}t.add(rm(h));let w=Zm();w.position.set(5.8,8.6,-11),w.scale.setScalar(1.3),t.add(w);let T=[[-6,7,-10],[3,7.8,-11]].map(([e,n,r])=>{let i=um();return i.position.set(e,n,r),t.add(i),i}),E=[$m(8.2,.4),$m(7.4,2.8),th({x:0,z:3.4,r:3.2})];for(let e of E)t.add(e.root);return{name:`beach`,root:t,bounds:{minX:-6.6,maxX:6.6,minZ:-2.2,maxZ:6},obstacles:[{x:3.6,z:-3.4,r:1},{x:-3.9,z:2.6,r:.75},{x:-5.4,z:4.6,r:.4},{x:-6.1,z:3.2,r:.5},{x:6.2,z:4.8,r:.4}],interactables:n,colliders:Sh(e,n,t),skyColor:10410232,sky:{top:6076656,bottom:15398655},light:{sun:16773320,sunIntensity:3,hemiGround:13152392},fog:15398655,ambient(e){T.forEach((t,n)=>{t.position.x+=Math.sin(e*7e-5+n*2)*.004});for(let t of E)t.update(e);s.forEach((t,n)=>{let r=(e*25e-5+n*.33)%1;t.position.z=-6.6+r*2.6,t.scale.x=.9+Math.sin(r*Math.PI)*.1}),c.rotation.z=Math.sin(e*9e-4)*.05,c.position.y=.05+Math.sin(e*.0011)*.04,m.position.y=.02+Math.sin(e*.0014)*.03,u.position.x=1.8+Math.sin(e*7e-4)*.8},dispose:Th(t)}}function Yh(){let e=Z(16645622,{rough:.5}),t=Z(14701899,{rough:.5}),n=new U,r=Q(new J(.85,18,14),e,0,1.15,0);r.scale.set(1,.95,2.1),n.add(r);let i=Q(new J(.55,14,12),t,0,1.1,1.7);i.scale.set(1,.85,.7),n.add(i);for(let r of[-1,1]){let i=Q(new G(2.6,.12,.9),e,r*1.7,1.05,.1);i.rotation.z=r*.08,n.add(i);let a=Q(new K(.2,.2,.5,10),t,r*1.5,.88,.3);a.rotation.x=Math.PI/2,n.add(a);for(let e=0;e<4;e++)n.add(Q(new K(.09,.09,.03,10),Z(8308983,{rough:.3}),r*.84,1.35,.9-e*.55).rotateZ(Math.PI/2))}let a=Q(new G(.12,.9,.6),t,0,1.9,-1.75);a.rotation.x=-.25;let o=Q(new G(1.3,.1,.45),e,0,1.45,-1.75);n.add(a,o);for(let[e,t]of[[-.55,.6],[.55,.6],[0,1.5]]){n.add(Q(new K(.06,.06,.5,6),Z(10134187),e,.35,t));let r=Q(new K(.16,.16,.12,10),Z(3815994),e,.16,t);r.rotation.z=Math.PI/2,n.add(r)}return n}function Xh(){let e=new U,t=Q(new J(.16,12,10),Z(7317724,{rough:.7}),0,.2,0);t.scale.set(1,1.1,1.3);let n=Q(new J(.11,10,8),Z(7317724,{rough:.7}),0,.42,.12),r=Q(new q(.035,.09,6),Z(15896890),0,.4,.25);r.rotation.x=Math.PI/2;let i=Q(new q(.06,.22,5),Z(5935300,{rough:.7}),0,.24,-.24);i.rotation.x=-1.2,e.add(t,n,r,i);for(let t of[-1,1]){let n=Q(new J(.09,8,6),Z(5935300,{rough:.7}),t*.14,.22,0);n.scale.set(.45,.9,1.2),e.add(n),e.add(Q(new J(.018,5,5),Z(2829099),t*.05,.45,.2))}return e}function Zh(e){let t=new U,n=new Map,r=Q(new G(26,.3,24),Z(12107464,{rough:1}),0,-.15,0);r.receiveShadow=!0,t.add(r);let i=new U;i.add(Q(new G(26,.02,3.4),Z(6975608,{rough:1}),0,.012,-3.6));for(let e=0;e<9;e++)i.add(Q(new G(1.2,.022,.18),Z(16645622,{rough:.9}),-11+e*2.8,.02,-3.6));let a=Yh();a.position.set(1.2,0,0),a.rotation.y=.5,n.set(`plane`,a);let o=new U;o.add(Q(new G(.8,1.1,.4),Z(9427396,{rough:.5}),0,.72,0));for(let e of[-.25,.05,.35])o.add(Q(new G(.82,.06,.42),Z(5945504,{rough:.5}),0,.72+e,0));for(let e of[-.18,.18])o.add(Q(new K(.02,.02,.5,5),Z(10134187),e,1.5,-.12));o.add(Q(new G(.46,.06,.06),Z(10134187),0,1.76,-.12));for(let e of[-.28,.28]){let t=Q(new K(.08,.08,.07,10),Z(3815994),e,.1,.1);t.rotation.z=Math.PI/2,o.add(t)}o.add(Q(new K(.12,.12,.03,10),Z(16765502),.2,.95,.21).rotateX(Math.PI/2)),o.add(Q(new G(.24,.16,.03),Z(14701899),-.2,.55,.21)),o.position.set(-3.7,0,2.6),o.rotation.y=.4,n.set(`bag`,o);let s=new U;s.add(Q(new K(.06,.09,.9,8),Z(10134187),0,.45,0));let c=Q(new G(1,.62,.05),Z(16765502,{rough:.6}),0,1.15,0);c.rotation.z=.06,s.add(c),s.add(Q(new G(.3,.4,.055),Z(16645622,{rough:.6}),.28,1.15,.005)),s.add(Q(new G(.44,.1,.055),Z(14701899,{rough:.6}),-.18,1.28,.005)),s.position.set(-5,0,.6),s.rotation.y=.5,n.set(`ticket`,s);let l=new U;l.add(Q(new G(1.4,.1,.8),Z(4028632,{rough:.6}),0,.36,0)),l.add(Q(new K(.05,.05,.6,6),Z(10134187),.75,.62,0).rotateZ(.5));for(let[e,t,n]of[[-.3,.62,14701899],[.25,.62,4037440],[-.05,1.02,12159712]])l.add(Q(new G(.55,.4,.6),Z(n,{rough:.7}),e,t,0));for(let e of[-.5,.5])for(let t of[-.3,.3]){let n=Q(new K(.12,.12,.08,10),Z(3815994),e,.14,t);n.rotation.z=Math.PI/2,l.add(n)}l.position.set(-1.6,0,3.4),l.rotation.y=-.3,n.set(`cart`,l);let u=Xh();u.scale.setScalar(1.3),u.position.set(4.8,0,2.8),u.rotation.y=-.5,n.set(`bird`,u),t.add(a,o,s,l,u),i.add(Q(new G(13,2.6,.8),Z(14213352,{rough:.8}),-1.5,1.3,-6)),i.add(Q(new G(12.6,1,.84),Z(8042728,{rough:.3}),-1.5,1.55,-5.99));for(let e of[-4.5,-1.5,1.5])i.add(Q(new G(.9,1.4,.86),Z(5935300,{rough:.5}),e,.7,-5.98));let d=new U;for(let e of[-.9,.9])d.add(Q(new K(.06,.07,1.6,8),Z(10134187),e,.8,0));d.add(Q(new G(2.2,1.2,.1),Z(2831424,{rough:.6}),0,2.1,0)),[16765502,9427396,15895202,8042728].forEach((e,t)=>{d.add(Q(new G(.5,.16,.11),Z(e,{rough:.5}),-.7,2.5-t*.26,0)),d.add(Q(new G(1,.14,.11),Z(14213352,{rough:.5}),.3,2.5-t*.26,0))}),d.position.set(-5.6,0,-4),d.rotation.y=.5,i.add(d);for(let e=0;e<4;e++)i.add(Q(new G(.55,.08,.5),Z(4028632,{rough:.5}),-3.2+e*.7,.45,-4.8)),i.add(Q(new G(.55,.5,.08),Z(4028632,{rough:.5}),-3.2+e*.7,.75,-5.05));i.add(Q(new G(3,.06,.5),Z(10134187),-2.15,.38,-4.8));for(let e=0;e<9;e++)for(let t of[-2,-5.2])i.add(Q(new J(.07,6,5),Z(16769658,{emissive:6967824}),-11+e*2.8,.07,t));for(let[e,t,n,r]of[[-.2,.25,0,12159712],[.35,.25,.15,15896890],[.05,.72,.05,9427396]])i.add(Q(new G(.6,.45,.5),Z(r,{rough:.7}),-.2+e,t,4.6+n));let f=new U;f.add(Q(new K(.5,.7,3.6,10),Z(14213352,{rough:.8}),0,1.8,0)),f.add(Q(new K(1,1,.8,10),Z(8042728,{rough:.4}),0,4,0)),f.add(Q(new K(1.15,1.15,.18,10),Z(14213352,{rough:.8}),0,4.5,0)),f.position.set(5.6,0,-5.4),i.add(f),i.add(Q(new K(.04,.04,2.2,6),Z(10134187),-6,1.1,-5.2)),t.add(rm(i));let p=Q(new q(.22,1,8,1,!0),Z(15896890,{rough:.8}),-5.5,2.1,-5.2);p.rotation.z=Math.PI/2-.15,t.add(p);let m=Zm();m.position.set(6.2,8.8,-11),t.add(m);let h=[[-6,7.6,-10],[2,8.4,-11],[7,7,-9]].map(([e,n,r])=>{let i=um();return i.position.set(e,n,r),t.add(i),i}),g=[$m(8.6,.9),th({x:0,z:4,r:3})];for(let e of g)t.add(e.root);return{name:`airport`,root:t,bounds:{minX:-6.6,maxX:6.6,minZ:-1.8,maxZ:6},obstacles:[{x:1.2,z:0,r:2.2},{x:-1.6,z:3.4,r:.9},{x:-5,z:.6,r:.4},{x:-2.15,z:-4.8,r:1},{x:-5.6,z:-4,r:.7},{x:-.1,z:4.6,r:.7}],interactables:n,colliders:Sh(e,n,t),skyColor:10408693,sky:{top:6206702,bottom:15135999},light:{sun:16774880,sunIntensity:2.9},fog:15135999,ambient(e){h.forEach((t,n)=>{t.position.x+=Math.sin(e*9e-5+n)*.005});for(let t of g)t.update(e);p.rotation.z=Math.PI/2-.15+Math.sin(e*.002)*.12,u.rotation.y=-.5+Math.sin(e*.0011)*.3},dispose:Th(t)}}function Qh(){let e=Z(15788248,{rough:.8}),t=new U,n=Q(new K(.09,.07,2.6,8),e,0,1.35,-.2);n.rotation.x=Math.PI/2-.12,t.add(n);for(let n=0;n<5;n++){let r=Q(new Ti(.5-n*.04,.045,6,12,Math.PI),e,0,1.3-n*.03,.7-n*.42);r.rotation.z=Math.PI,t.add(r)}let r=Q(new K(.07,.09,1.1,8),e,0,1.95,1.05);r.rotation.x=.5,t.add(r);let i=Q(new J(.3,12,10),e,0,2.5,1.45);i.scale.set(.9,.85,1.15);let a=Q(new J(.18,10,8),e,0,2.3,1.62);a.scale.set(.75,.5,1.1),t.add(i,a);for(let n of[-1,1])t.add(Q(new K(.09,.09,.03,10),Z(4868696),n*.13,2.58,1.68).rotateX(Math.PI/2)),t.add(Q(new K(.09,.11,.85,8),e,n*.42,.55,.45)),t.add(Q(new K(.08,.1,.75,8),e,n*.4,.5,-.85)),t.add(Q(new J(.14,8,6),e,n*.42,.12,.5)),t.add(Q(new J(.13,8,6),e,n*.4,.12,-.9));for(let n=0;n<4;n++)t.add(Q(new K(.06-n*.01,.07-n*.01,.5,7),e,0,1.15-n*.16,-1.5-n*.42).rotateX(Math.PI/2-.3));return t.add(Q(new J(.08,8,6),Z(14701899,{rough:.6}),-.07,2.8,1.35)),t.add(Q(new J(.08,8,6),Z(14701899,{rough:.6}),.07,2.8,1.35)),t}function $h(e){let t=new U,n=new Map,r=Q(new G(15,.3,13),Z(14208962,{rough:.9}),0,-.15,0);r.receiveShadow=!0;let i=im(15,5.6,15262420);i.position.set(0,2.8,-6.2);let a=im(13,5.6,15262420);a.position.set(-7.4,2.8,0),a.rotation.y=Math.PI/2,t.add(r,i,a);let o=new U;o.add(Q(new G(15,.5,.2),Z(12101768),0,1.1,-6.14));let s=Q(new K(2.2,2.3,.24,20),Z(13220248,{rough:.9}),.4,.12,-.6);t.add(s);let c=Qh();c.position.set(.4,.24,-.6),c.rotation.y=.35,n.set(`dinosaur`,c),t.add(c);for(let e=0;e<7;e++){let t=e/7*Math.PI*2+.2;o.add(Q(new K(.05,.06,.62,8),Z(13215050,{rough:.4}),.4+Math.cos(t)*2.9,.31,-.6+Math.sin(t)*2.9));let n=(e+1)/7*Math.PI*2+.2,r=new V(.4+Math.cos(t)*2.9,.56,-.6+Math.sin(t)*2.9),i=new V(.4+Math.cos(n)*2.9,.56,-.6+Math.sin(n)*2.9),a=r.clone().lerp(i,.5),s=Q(new K(.035,.035,r.distanceTo(i)*1.02,6),Z(11024970,{rough:.8}),a.x,.5,a.z);s.lookAt(i.x,.56,i.z),s.rotateX(Math.PI/2),o.add(s)}for(let[e,t,n]of[[-6.2,-2.2,`vase`],[-5.8,4.4,`crystal`]]){if(o.add(Q(new G(.8,1,.8),Z(13220248,{rough:.9}),e,.5,t)),n===`vase`)o.add(Q(new K(.16,.24,.5,12),Z(8042728,{rough:.4}),e,1.27,t)),o.add(Q(new K(.22,.16,.18,12),Z(8042728,{rough:.4}),e,1.6,t));else{let n=Q(new Ci(.3),Z(12159712,{rough:.2}),e,1.35,t);n.rotation.y=.5,o.add(n)}o.add(Q(new G(.44,.16,.04),Z(15983820,{rough:.7}),e,.85,t+.42))}o.add(Q(new G(1.6,1,.7),Z(9075295,{rough:.9}),4.6,.5,4.4)),o.add(Q(new G(1.75,.08,.8),Z(13215050,{rough:.5}),4.6,1.05,4.4)),o.add(Q(new G(.4,.26,.05),Z(16765502,{rough:.6}),4.6,1.25,4.2));let l=new U;l.add(Q(new G(2.2,1.7,.1),Z(13215050,{rough:.5}),0,0,0)),l.add(Q(new G(1.9,1.4,.12),Z(10410224,{rough:.9}),0,0,.01)),l.add(Q(new J(.5,10,8),Z(8176739,{rough:1}),-.4,-.45,.08).rotateX(0));let u=Q(new K(.2,.2,.06,12),Z(16765502),.62,.42,.08);u.rotation.x=Math.PI/2,l.add(u),l.position.set(-4.2,2.6,-6.05),n.set(`picture`,l),t.add(l);let d=new U;d.add(Q(new K(.7,.8,.5,12),Z(13220248,{rough:.9}),0,.25,0));let f=Q(new J(.5,14,12),Z(16117724,{rough:.7}),0,1.05,0);f.scale.set(1,1.3,1),d.add(f);for(let[e,t,n]of[[.2,1.25,.28],[-.25,.95,.32],[.05,.75,.4]])d.add(Q(new J(.07,6,6),Z(14208176,{rough:.7}),e,t,n));d.position.set(3.9,0,1.6),n.set(`egg`,d),t.add(d);let p=new U;p.add(Q(new G(1.5,1.1,.16),Z(11576464,{rough:1}),0,0,0)),p.add(Q(new G(1.34,.94,.18),Z(12892322,{rough:1}),0,0,0));let m=Z(9076332,{rough:.9}),h=Q(new K(.035,.03,.8,6),m,0,.02,.1);h.rotation.z=Math.PI/2,p.add(h),p.add(Q(new J(.13,8,6),m,.48,.02,.1)),p.add(Q(new K(.05,.05,.02,8),Z(6971476),.5,.06,.19).rotateX(Math.PI/2));for(let e=0;e<5;e++){let t=Q(new K(.018,.014,.3-e*.03,5),m,.22-e*.15,.02,.1);p.add(t)}let g=Q(new q(.12,.22,3),m,-.52,.02,.1);g.rotation.z=-Math.PI/2,g.scale.z=.3,p.add(g),p.rotation.x=-.5,p.position.set(-3.6,1.15,2.8),p.rotation.y=.5;let _=Q(new G(1.3,.8,.7),Z(12101768,{rough:.9}),-3.6,.4,2.9);_.rotation.y=.5,n.set(`fish`,p),t.add(_,p);let v=new U;v.add(Q(new K(.28,.34,1.1,10),Z(13220248,{rough:.9}),0,.55,0));let y=Q(new J(.2,12,10),Z(13215050,{rough:.3}),0,1.35,0);y.scale.set(1,1.1,1.4),v.add(y),v.add(Q(new J(.13,10,8),Z(13215050,{rough:.3}),0,1.62,.16));let b=Q(new q(.04,.12,6),Z(13215050,{rough:.3}),0,1.6,.3);b.rotation.x=Math.PI/2,v.add(b);let x=Q(new q(.08,.3,5),Z(13215050,{rough:.3}),0,1.3,-.3);x.rotation.x=-1.1,v.add(x),v.position.set(5.9,0,-3),n.set(`bird`,v),t.add(v);for(let[e,t]of[[-2.4,15895202],[.2,9427396]])o.add(Q(new G(.1,1,.8),Z(13215050,{rough:.5}),-7.32,2.5,e)),o.add(Q(new G(.12,.8,.62),Z(t,{rough:.9}),-7.3,2.5,e));o.add(Q(new G(1.8,.18,.55),Z(11024970,{rough:.95}),2.2,.52,4.6));for(let e of[-.5,0,.5])o.add(Q(new J(.05,6,5),Z(13215050,{rough:.4}),2.2+e,.62,4.6));for(let e of[-.75,.75])o.add(Q(new K(.07,.1,.42,8),Z(13215050,{rough:.4}),2.2+e,.21,4.6));for(let e of[-6.6,6])o.add(Q(new K(.34,.4,4.6,12),Z(15789280,{rough:.5}),e,2.3,-5.6)),o.add(Q(new G(1,.3,1),Z(14999762,{rough:.5}),e,4.75,-5.6)),o.add(Q(new G(.95,.28,.95),Z(14999762,{rough:.5}),e,.14,-5.6));return t.add(rm(o)),{name:`museum`,root:t,bounds:{minX:-6.6,maxX:6.4,minZ:-5.2,maxZ:5.4},obstacles:[{x:.4,z:-.6,r:2.5},{x:3.9,z:1.6,r:.85},{x:-3.6,z:2.8,r:.85},{x:5.9,z:-3,r:.5},{x:2.2,z:4.6,r:.6},{x:-6.2,z:-2.2,r:.6},{x:-5.8,z:4.4,r:.6},{x:4.6,z:4.4,r:.95}],interactables:n,colliders:Sh(e,n,t),skyColor:14215408,sky:{top:12113128,bottom:15922414},light:{sun:16773852,sunIntensity:2.2,ambient:14736592,ambientIntensity:1.15},ambient(e){},dispose:Th(t)}}function eg(e=1){let t=new U,n=Q(new K(.42,.5,1.7,14),Z(16645622,{rough:.5}),0,1.15,0),r=Q(new q(.44,.7,14),Z(14701899,{rough:.5}),0,2.35,0);t.add(n,r);let i=Q(new K(.16,.16,.05,12),Z(8308983,{rough:.3}),0,1.35,.44);i.rotation.x=Math.PI/2;let a=Q(new Ti(.17,.035,8,14),Z(4028632,{rough:.5}),0,1.35,.46);t.add(i,a);for(let e=0;e<3;e++){let n=e/3*Math.PI*2+Math.PI/6,r=Q(new G(.1,.75,.5),Z(4028632,{rough:.5}),Math.cos(n)*.48,.45,Math.sin(n)*.48);r.rotation.y=-n,t.add(r)}return t.scale.setScalar(e),t}function tg(){let e=Z(9427396,{rough:.4}),t=new U;t.add(Q(new G(.7,.8,.5),e,0,.75,0)),t.add(Q(new G(.5,.42,.42),e,0,1.45,0));for(let n of[-1,1])t.add(Q(new K(.07,.07,.1,10),Z(16765502),n*.13,1.48,.22).rotateX(Math.PI/2)),t.add(Q(new G(.14,.5,.16),e,n*.5,.85,0)),t.add(Q(new G(.2,.3,.24),e,n*.18,.2,0));return t.add(Q(new G(.36,.08,.4),Z(14701899,{rough:.5}),0,1.02,.06)),t.add(Q(new K(.02,.02,.3,5),Z(10134187),0,1.8,0)),t.add(Q(new J(.05,8,6),Z(14701899),0,1.98,0)),t.add(Q(new G(.2,.03,.02),Z(2831424),0,1.34,.22)),t}function ng(){let e=new U;for(let t of[0,2.1,4.2]){let n=Q(new K(.045,.045,1.5,6),Z(10119738),Math.cos(t)*.4,.72,Math.sin(t)*.4);n.rotation.z=Math.cos(t)*.3,n.rotation.x=-Math.sin(t)*.3,e.add(n)}let t=Q(new K(.18,.24,1.5,12),Z(4028632,{rough:.4}),0,1.75,0);t.rotation.x=-.7;let n=Q(new K(.08,.08,.25,8),Z(16765502,{rough:.4}),0,1.25,.55);return n.rotation.x=-.7,e.add(t,n),e}function rg(e=16765502){let t=new U,n=Z(e,{rough:.4});for(let e=0;e<5;e++){let r=e/5*Math.PI*2-Math.PI/2,i=Q(new q(.16,.5,4),n,Math.cos(r)*.28,Math.sin(r)*.28,0);i.rotation.z=r+Math.PI/2,t.add(i)}return t.add(Q(new J(.2,10,8),n,0,0,0)),t}function ig(e){let t=new U,n=new Map,r=Q(new G(26,.3,24),Z(13159892,{rough:1}),0,-.15,0);r.receiveShadow=!0,t.add(r);let i=new U;for(let[e,t,n]of[[-3,1,9427396],[2.5,2.4,16765502],[0,-2,12159712]])i.add(Q(new K(1.6,1.6,.02,24),Z(n,{rough:.9}),e,.012,t));let a=tg();a.position.set(-3.2,0,.6),a.rotation.y=.4,n.set(`robot`,a);let o=a.children.find((e,t)=>t===4),s=ng();s.position.set(3.4,0,.2),s.rotation.y=-.5,n.set(`telescope`,s);let c=eg(.9);c.position.set(.6,.12,2.2),n.set(`rocket`,c);let l=Q(new K(.9,1,.12,14),Z(6975608,{rough:.9}),.6,.06,2.2);t.add(l);let u=rg();u.position.set(-4.9,1.5,2.2),n.set(`star`,u);let d=Q(new K(.05,.07,1.1,8),Z(10134187),-4.9,.55,2.2);t.add(d);let f=new U;for(let e=0;e<4;e++){let t=Q(new G(.9,.07,.36),Z(4028632,{rough:.5}),4.2+e*.42,1.25-e*.34,3.2);t.rotation.z=-.4,f.add(t)}f.add(Q(new K(.07,.09,1.4,8),Z(10134187),4.15,.7,3.2)),t.add(f);let p=sm();p.scale.setScalar(.85),p.position.set(5.7,0,3.35),n.set(`ball`,p),t.add(a,s,c,u,p);let m=new U;m.add(Q(new K(.07,.1,2.4,8),Z(10134187),0,1.2,0));let h=new U;for(let e=0;e<4;e++){let t=Q(new G(1,.16,.05),Z([14701899,16765502,4037440,12159712][e],{rough:.5}),0,0,0);t.rotation.z=e/4*Math.PI*2,t.translateX(.55),h.add(t)}h.position.set(0,2.5,0),m.add(h),m.position.set(-6,0,-3.8),t.add(m);let g=new U,_=Q(new Ti(1.1,.16,8,18,Math.PI*.55),Z(16645622,{rough:.4}),0,.15,0);_.rotation.set(Math.PI/2,0,.4),g.add(_);for(let e of[-.6,.55])g.add(Q(new K(.09,.12,.34,8),Z(9427396,{rough:.5}),e,.17,.15));g.position.set(5.4,.18,-2.8),g.rotation.y=-.6,t.add(g),t.add(rm(i));let v=Zm();v.position.set(-6.2,8.8,-11),t.add(v);let y=[[-4,7.4,-10],[5,8,-11]].map(([e,n,r])=>{let i=um();return i.position.set(e,n,r),t.add(i),i}),b=[$m(8.4,1.6),th({x:0,z:2.5,r:3})];for(let e of b)t.add(e.root);return{name:`science`,root:t,bounds:{minX:-6.6,maxX:6.6,minZ:-5,maxZ:6},obstacles:[{x:-3.2,z:.6,r:.8},{x:3.4,z:.2,r:.8},{x:.6,z:2.2,r:1.1},{x:-4.9,z:2.2,r:.4},{x:-6,z:-3.8,r:.45},{x:5.4,z:-2.8,r:.9},{x:4.8,z:3.2,r:.6}],interactables:n,colliders:Sh(e,n,t),skyColor:10672370,sky:{top:6995181,bottom:15267068},light:{sun:16774884,sunIntensity:2.8},fog:15267068,ambient(e){y.forEach((t,n)=>{t.position.x+=Math.sin(e*8e-5+n)*.004});for(let t of b)t.update(e);u.rotation.y=e*6e-4,o&&(o.rotation.z=Math.sin(e*.004)*.5-.3),s.rotation.y=-.5+Math.sin(e*3e-4)*.2,h.rotation.z=e*.0016},dispose:Th(t)}}function ag(e){let t=new U,n=new Map,r=Q(new G(26,.3,24),Z(4869738,{rough:1}),0,-.15,0);r.receiveShadow=!0,t.add(r);let i=new U;for(let e=0;e<8;e++){let t=e/8*Math.PI*2;i.add(Q(new J(.09,8,6),Z(16771488,{emissive:9071136}),Math.cos(t)*5.8,.1,Math.sin(t)*5.2))}let a=eg(1.35);a.position.set(.9,.14,.6),n.set(`rocket`,a);let o=Q(new K(1.3,1.45,.16,16),Z(6975632,{rough:.9}),.9,.08,.6);t.add(o,a);let s=new U;s.add(Q(new K(.4,.5,.5,12),Z(6975632,{rough:.9}),0,.25,0));let c=Q(new J(.75,18,14),Z(15262936,{rough:.9,emissive:2762784}),0,1.3,0);s.add(c);for(let[e,t,n,r]of[[.3,1.5,.55,.14],[-.35,1.2,.6,.1],[.1,1.05,.68,.08],[-.15,1.55,.52,.09]]){let i=Q(new K(r,r,.03,10),Z(13223092,{rough:1}),e,t,n);i.lookAt(new V(e*3,t+(t-1.3)*2,n*3)),s.add(i)}s.position.set(-3.8,0,.6),n.set(`moon`,s),t.add(s);let l=rg(16769658);l.scale.setScalar(1.3),l.position.set(3.9,1.7,.9),n.set(`star`,l);let u=Q(new K(.05,.08,1.2,8),Z(10134187),3.9,.6,.9);t.add(l,u);let d=new U;d.add(Q(new K(.45,.55,.4,12),Z(6975632,{rough:.9}),0,.2,0));let f=Q(new J(.6,16,12),Z(16765502,{rough:.6,emissive:6703632}),0,1.15,0);d.add(f);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=Q(new q(.09,.34,4),Z(15900730,{rough:.6,emissive:5582600}),Math.cos(t)*.82,1.15+Math.sin(t)*.82,0);n.rotation.z=t+Math.PI/2,d.add(n)}d.position.set(-5.2,0,2.6),n.set(`sun`,d),t.add(d);let p=new U;for(let e of[0,2.1,4.2]){let t=Q(new K(.045,.045,1.5,6),Z(10119738),Math.cos(e)*.4,.72,Math.sin(e)*.4);t.rotation.z=Math.cos(e)*.3,t.rotation.x=-Math.sin(e)*.3,p.add(t)}let m=Q(new K(.18,.24,1.5,12),Z(12159712,{rough:.4}),0,1.75,0);m.rotation.x=-.9,p.add(m),p.position.set(4.9,0,3.2),p.rotation.y=-.4,n.set(`telescope`,p),t.add(p);let h=[],g=(e,n,r,i,a,o)=>{let s=new U;if(s.add(Q(new J(.5*o,14,12),Z(i,{rough:.7}),0,0,0)),a){let e=Q(new Ti(.75*o,.07*o,6,20),Z(14203e3,{rough:.6}),0,0,0);e.rotation.x=Math.PI/2-.35,s.add(e)}return s.position.set(e,n,r),t.add(s),h.push(s),s};g(-4.5,6.4,-9,14701899,!1,.8),g(3.5,7.2,-10,14200928,!0,1.1),g(0,5.8,-11,7317724,!1,.6);let _=[];for(let e=0;e<26;e++){let n=Q(new J(.05+e%3*.02,5,5),Z(16774872,{emissive:10127952}),-12+e*1.9%24,4.5+e*2.3%6,-12+e*3.1%5);n.castShadow=!1,t.add(n),_.push(n)}return t.add(rm(i)),{name:`space`,root:t,bounds:{minX:-6.6,maxX:6.6,minZ:-5,maxZ:6},obstacles:[{x:.9,z:.6,r:1.6},{x:-3.8,z:.6,r:.75},{x:3.9,z:.9,r:.4},{x:-5.2,z:2.6,r:.7},{x:4.9,z:3.2,r:.8}],interactables:n,colliders:Sh(e,n,t),skyColor:1843783,sky:{top:1185588,bottom:4864618},light:{sun:10135784,sunIntensity:1.7,ambient:9081024,ambientIntensity:1.15,hemiSky:6976696,hemiGround:4866136},ambient(e){_.forEach((t,n)=>t.scale.setScalar(1+Math.sin(e*.003+n*1.7)*.35)),h.forEach((t,n)=>{t.position.x+=Math.sin(e*6e-5+n*2)*.003,t.rotation.y=e*3e-4*(n+1)}),l.rotation.y=e*5e-4},dispose:Th(t)}}function og(e=12862774){let t=new U,n=Z(e,{rough:.5});t.add(Q(new K(.3,.3,.06,14),n,0,.5,0));let r=Q(new Ti(.26,.035,8,16,Math.PI),n,0,.95,-.26);t.add(r);for(let e of[-.16,.16])t.add(Q(new K(.028,.028,.42,6),n,e,.72,-.26));for(let[e,r]of[[-.2,.2],[.2,.2],[-.2,-.2],[.2,-.2]]){let i=Q(new K(.03,.025,.5,6),n,e,.25,r);i.rotation.z=e*.15,i.rotation.x=-r*.15,t.add(i)}return t}function sg(){let e=new U;e.add(Q(new G(2.2,1,1.6),Z(11559994,{rough:.9}),0,.5,0));let t=Q(new J(.95,14,10,0,Math.PI*2,0,Math.PI/2),Z(14208184,{rough:.9}),0,1,0);e.add(t);let n=Q(new K(.42,.42,.3,14,1,!1,0,Math.PI),Z(4861984,{rough:1}),0,1.05,.78);n.rotation.set(Math.PI/2,0,Math.PI/2),e.add(n);let r=Q(new K(.34,.34,.1,12,1,!1,0,Math.PI),Z(15896890,{rough:.6,emissive:8010248}),0,.98,.8);r.rotation.set(Math.PI/2,0,Math.PI/2),e.add(r),e.add(Q(new K(.16,.2,.7,8),Z(11559994,{rough:.9}),0,2,-.3));let i=Q(new G(.3,.04,.42),Z(14200952,{rough:.9}),1.25,1.35,.3);i.rotation.z=.5;let a=Q(new K(.03,.03,1,6),Z(14200952,{rough:.9}),1.05,.7,.3);return a.rotation.z=.5,e.add(i,a),e}function cg(){let e=new U,t=Q(new K(.62,.66,.1,20),Z(14723168,{rough:.9}),0,.05,0),n=Q(new K(.54,.54,.105,20),Z(14178874,{rough:.8}),0,.055,0),r=Q(new K(.5,.5,.11,20),Z(16106818,{rough:.7}),0,.06,0);e.add(t,n,r);let i=Q(new K(.5,.5,.1,12,1,!1,0,Math.PI/4),Z(16106818,{rough:.7}),.75,.05,.35);i.rotation.y=.6,e.add(i);for(let[t,n]of[[-.2,.15],[.15,-.22],[.25,.2],[-.15,-.15],[0,.32]])e.add(Q(new K(.08,.08,.115,10),Z(12862774,{rough:.7}),t,.062,n));for(let[t,n]of[[-.3,-.05],[.32,-.05],[.05,-.35]])e.add(Q(new G(.07,.115,.07),Z(4037440,{rough:.7}),t,.062,n));return e}function lg(e){let t=new U,n=new Map,r=Q(new G(15,.3,13),Z(13212259,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=im(15,5.2,15983820);i.position.set(0,2.6,-6.2);let a=im(13,5.2,15983820);a.position.set(-7.4,2.6,0),a.rotation.y=Math.PI/2,t.add(r,i,a);let o=new U;o.add(Q(new G(15,.5,.2),Z(12862774),0,1.1,-6.14));let s=_m();s.scale.set(1.7,1.05,1.7),s.position.set(0,0,1.2),n.set(`table`,s),t.add(s);for(let e of[0,Math.PI/2]){let n=Q(new G(2.3,.02,.7),Z(14701899,{rough:1}),0,.87,1.2);n.rotation.y=e,t.add(n)}let c=cg();c.position.set(0,.88,1.2),n.set(`pizza`,c),t.add(c);let l=new U;l.add(Q(new K(.34,.26,.06,16),Z(16645622,{rough:.4}),0,.03,0)),l.add(Q(new K(.24,.24,.065,16),Z(15266036,{rough:.4}),0,.032,0)),l.position.set(-1.3,.87,1.75),n.set(`plate`,l),t.add(l);let u=new U,d=Q(new J(.13,10,8),Z(13159636,{rough:.3}),0,.03,.22);d.scale.set(1,.35,1.3),u.add(d),u.add(Q(new G(.07,.04,.5),Z(13159636,{rough:.3}),0,.02,-.14)),u.position.set(1.15,.87,1.6),u.rotation.y=.4,u.scale.setScalar(1.35),n.set(`spoon`,u),t.add(u);let f=mm(15896890);f.scale.setScalar(1.7),f.position.set(-.7,.88,.65),n.set(`cup`,f),t.add(f);let p=og(12862774);p.position.set(2.2,0,3.4),p.rotation.y=Math.PI+.4,n.set(`chair`,p),t.add(p);let m=og(4037440);m.position.set(-2.2,0,3.2),m.rotation.y=Math.PI-.4,o.add(m);let h=Q(new G(1,.7,.7),Z(10119738,{rough:1}),4.4,.35,.4);t.add(h);let g=Wm();g.scale.setScalar(1.3),g.position.set(4.4,.72,.4),n.set(`tomato`,g),t.add(g);for(let[e,t,n]of[[-4.6,.2,.3],[-4.2,4.2,-.4]]){let r=_m();r.scale.set(1.25,1,1.25),r.position.set(e,0,t),o.add(r),o.add(Q(new K(.55,.55,.02,12),Z(16645622,{rough:.9}),e,.84,t));for(let[n,r]of[[-.35,.15],[.35,-.1]])o.add(Q(new K(.2,.15,.04,12),Z(16645622,{rough:.4}),e+n,.86,t+r));o.add(Q(new K(.08,.06,.16,8),Z(15896890,{rough:.5}),e,.9,t));let i=og(13215050);i.position.set(e+1,0,t+.6),i.rotation.y=n+Math.PI*.8;let a=og(9427396);a.position.set(e-.9,0,t-.7),a.rotation.y=n-.4,o.add(i,a)}let _=new U;_.add(Q(new K(.22,.17,.14,12,1,!0),Z(11565636,{rough:1}),0,.07,0)),_.add(Q(new K(.18,.18,.03,12),Z(11565636,{rough:1}),0,.015,0));for(let[e,t]of[[-.06,.03],[.07,-.02],[0,.08]]){let n=Q(new J(.07,8,6),Z(15250552,{rough:1}),e,.14,t);n.scale.y=.7,_.add(n)}_.position.set(.55,.88,.75),t.add(_);for(let[e,t]of[[-.08,16645622],[.08,4864560]])o.add(Q(new K(.045,.055,.16,8),Z(t,{rough:.5}),-.5+e,.95,.55));let v=new U;v.add(Q(new G(.7,1.1,.5),Z(9067071,{rough:.9}),0,.55,0)),v.add(Q(new G(.8,.07,.6),Z(12862774,{rough:.7}),0,1.13,0)),v.add(Q(new K(.06,.05,.16,8),Z(8042728,{rough:.4}),.2,1.25,0)),v.add(Q(new J(.07,8,6),Z(14701899,{rough:.6}),.2,1.42,0)),v.position.set(5.2,0,4.2),v.rotation.y=-.6,t.add(v),o.add(Q(new G(3.2,.08,.4),Z(9067071,{rough:.9}),-2.2,2.5,-6));for(let e=0;e<4;e++){let t=Q(new K(.18,.18,.03,12),Z(16645622,{rough:.4}),-3.4+e*.8,2.72,-6.02);t.rotation.x=Math.PI/2-.2,o.add(t)}let y=sg();y.position.set(3.4,0,-5.2),t.add(y);let b=new ma(16751178,5,5,1.8);b.position.set(3.4,1.1,-4.2),t.add(b),o.add(Q(new G(1.4,1.7,.08),Z(4864560,{rough:.9}),-4.4,2.4,-6.1));let x=Q(new K(.4,.4,.06,16),Z(16106818,{rough:.7}),-4.4,2.6,-6.03);x.rotation.x=Math.PI/2,o.add(x),o.add(Q(new G(.8,.14,.06),Z(16645622,{rough:.8}),-4.4,1.85,-6.02)),t.add(rm(o));let S=eh({x:3.4,y:1.4,z:-4.4,h:.9},4);return t.add(S.root),{name:`restaurant`,root:t,bounds:{minX:-6.6,maxX:6.4,minZ:-5.2,maxZ:5.6},obstacles:[{x:0,z:1.2,r:1.45},{x:2.2,z:3.4,r:.5},{x:-2.2,z:3.2,r:.5},{x:4.4,z:.4,r:.7},{x:3.4,z:-5.2,r:1.4},{x:-4.6,z:.2,r:1.1},{x:-4.2,z:4.2,r:1.1},{x:5.2,z:4.2,r:.6}],interactables:n,colliders:Sh(e,n,t),skyColor:15259840,sky:{top:13215864,bottom:16049872},light:{sun:16768942,sunIntensity:2.2,ambient:15257776,ambientIntensity:1.2,hemiGround:9071178},ambient(e){S.update(e),u.rotation.y=.4+Math.sin(e*8e-4)*.05,b.intensity=4.6+Math.sin(e*.006)*.6},dispose:Th(t)}}function ug(){let e=new U;e.add(Q(new K(.4,.4,.3,18),Z(15250554,{rough:.8}),0,.15,0)),e.add(Q(new K(.41,.41,.1,18),Z(15910104,{rough:.7}),0,.33,0)),e.add(Q(new K(.28,.28,.22,16),Z(15910104,{rough:.7}),0,.5,0));for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.add(Q(new J(.05,8,6),Z(16645622,{rough:.6}),Math.cos(n)*.36,.4,Math.sin(n)*.36))}return e.add(Q(new J(.07,8,6),Z(14168138,{rough:.4}),0,.67,0)),e}function dg(){let e=new U,t=Q(new K(.2,.2,.06,14),Z(14197850,{rough:.9}),0,.03,0);e.add(t);for(let[t,n]of[[-.07,.05],[.06,-.06],[.08,.08],[-.04,-.1],[0,0]])e.add(Q(new J(.03,6,5),Z(4861984,{rough:.8}),t,.06,n));return e}function fg(e){let t=new U,n=new Map,r=Q(new G(15,.3,13),Z(14200968,{rough:1}),0,-.15,0);r.receiveShadow=!0;let i=im(15,5.2,16181976);i.position.set(0,2.6,-6.2);let a=im(13,5.2,16181976);a.position.set(7.4,2.6,0),a.rotation.y=-Math.PI/2,t.add(r,i,a);let o=new U;o.add(Q(new G(15,.5,.2),Z(12159712),0,1.1,-6.14));let s=Q(new G(7.6,.85,1.3),Z(10119743,{rough:.9}),.8,.42,1.4),c=Q(new G(7.9,.08,1.5),Z(15983820,{rough:.8}),.8,.89,1.4);t.add(s,c);let l=ug();l.scale.setScalar(1.15),l.position.set(-2,.93,1.4),n.set(`cake`,l);let u=new U;u.add(Q(new K(.34,.28,.05,16),Z(16645622,{rough:.4}),0,.025,0));let d=dg();d.scale.setScalar(1.3),d.position.set(0,.05,0),u.add(d);for(let[e,t]of[[-.22,.1],[.2,-.12]]){let n=dg();n.scale.setScalar(.8),n.position.set(e,.05,t),u.add(n)}u.position.set(-.5,.93,1.45),n.set(`cookie`,u);let f=Hm();f.position.set(1.1,.93,1.4),f.rotation.y=.4,n.set(`bread`,f);let p=new U;p.add(Q(new K(.3,.24,.04,16),Z(16645622,{rough:.4}),0,.02,0)),p.add(Q(new K(.17,.13,.24,14),Z(14181231,{rough:.4}),0,.16,0)),p.add(Q(new K(.145,.145,.02,12),Z(15983820,{rough:.6}),0,.28,0)),p.add(Q(new J(.05,8,6),Z(10119743,{rough:.6}),.04,.29,.02));let m=Q(new Ti(.09,.025,8,12,Math.PI),Z(14181231,{rough:.4}),.2,.16,0);m.rotation.z=-Math.PI/2,p.add(m),p.scale.setScalar(1.5),p.position.set(2.7,.93,1.35),n.set(`cup`,p);let h=new U;h.add(Q(new K(.14,.16,.4,12),Z(16054522,{rough:.25}),0,.2,0)),h.add(Q(new K(.08,.14,.14,12),Z(16054522,{rough:.25}),0,.47,0)),h.add(Q(new K(.085,.08,.1,12),Z(16054522,{rough:.25}),0,.58,0)),h.add(Q(new K(.09,.09,.03,12),Z(14701899,{rough:.5}),0,.64,0)),h.add(Q(new K(.145,.145,.12,12),Z(8042728,{rough:.4}),0,.2,.006)),h.scale.setScalar(1.35),h.position.set(4.1,.93,1.4),n.set(`milk`,h),t.add(l,u,f,p,h);let g=Q(new G(6.4,1,.9),Z(9067071,{rough:.9}),1.2,.5,-5.5),_=Q(new G(6.6,.07,1),Z(15983820,{rough:.7}),1.2,1.03,-5.5);t.add(g,_);let v=new U;v.add(Q(new G(1.1,.7,.6),Z(12862774,{rough:.35}),0,.42,0)),v.add(Q(new G(1.14,.1,.64),Z(10134187,{rough:.3}),0,.8,0)),v.add(Q(new G(1.14,.08,.64),Z(10134187,{rough:.3}),0,.06,0));for(let e of[-.28,.28])v.add(Q(new K(.07,.07,.12,8),Z(10134187,{rough:.3}),e,.22,.32)),v.add(Q(new K(.025,.025,.2,6),Z(2829099),e,.12,.42).rotateX(.5));let y=Q(new K(.02,.02,.3,6),Z(10134187,{rough:.3}),.62,.25,.2);y.rotation.z=-.5,v.add(y),v.add(Q(new K(.07,.05,.1,10),Z(16645622,{rough:.5}),-.28,.11,.32)),v.add(Q(new K(.08,.08,.18,10),Z(2829099,{rough:.5}),.38,.98,0)),v.position.set(.2,1.06,-5.45),t.add(v);for(let e=0;e<3;e++)for(let t=0;t<=2-e;t++)o.add(Q(new K(.085,.065,.14,10),Z(e%2?14181231:16645622,{rough:.5}),2.2+t*.2+e*.1,1.14+e*.15,-5.45));let b=new U;b.add(Q(new G(.6,.3,.5),Z(4864560,{rough:.6}),0,.15,0));let x=Q(new G(.5,.32,.05),Z(9427396,{rough:.3}),0,.45,-.1);x.rotation.x=-.3,b.add(x),b.position.set(3.9,1.06,-5.45),t.add(b);let S=Q(new K(.3,.3,.05,14),Z(16645622,{rough:.4}),-1.4,1.09,-5.45),C=new ni(new J(.28,12,8,0,Math.PI*2,0,Math.PI/2),new Ii({color:14217471,roughness:.1,transparent:!0,opacity:.25}));C.position.set(-1.4,1.12,-5.45);let w=Q(new K(.16,.16,.14,10,1,!1,0,Math.PI/2.5),Z(15910104,{rough:.7}),-1.4,1.16,-5.5);t.add(S,w,C),o.add(Q(new G(1.7,1.3,.08),Z(3820090,{rough:.9}),-3.6,3.1,-6.1)),o.add(Q(new G(1.85,1.45,.06),Z(9067071,{rough:.8}),-3.6,3.1,-6.13)),o.add(Q(new K(.16,.13,.2,10),Z(16645622,{rough:.9}),-4,3.3,-6.04)),o.add(Q(new K(.14,.14,.1,10),Z(15910104,{rough:.9}),-3.2,3.3,-6.04));for(let e of[0,-.22])o.add(Q(new G(.7,.06,.05),Z(16645622,{rough:.9}),-3.6,2.75+e,-6.04));for(let[e,t]of[[6.6,-4.6],[6.6,4.6]])o.add(Q(new K(.22,.17,.3,10),Z(14053450),e,.15,t)),o.add(Q(new Si(.34,1),Z(4172366,{flat:!0}),e,.62,t));let T=new U;T.add(Q(new K(.62,.62,.07,14),Z(15983820,{rough:.8}),0,.78,0)),T.add(Q(new K(.07,.1,.78,8),Z(10119743),0,.39,0)),T.position.set(-4.4,0,2.6),n.set(`table`,T),t.add(T);for(let[e,t]of[[-.9,.7],[.8,.8]])o.add(Q(new K(.26,.3,.5,10),Z(12159712,{rough:.8}),-4.4+e,.25,2.6+t));for(let[e,t]of[[-5,-1.8],[-4.8,5.3]]){o.add(Q(new K(.62,.62,.07,14),Z(15983820,{rough:.8}),e,.78,t)),o.add(Q(new K(.07,.1,.78,8),Z(10119743),e,.39,t)),o.add(Q(new K(.09,.07,.1,10),Z(14181231,{rough:.5}),e+.15,.86,t));for(let[n,r]of[[-.85,.5],[.8,.6]])o.add(Q(new K(.26,.3,.5,10),Z(12159712,{rough:.8}),e+n,.25,t+r))}for(let e of[1.7,2.5])o.add(Q(new G(5.4,.08,.5),Z(10119743,{rough:.9}),1.4,e,-5.9));for(let e=0;e<5;e++){let t=Q(new J(.22,10,8),Z(13208138,{rough:1}),-.6+e*1,1.85,-5.9);t.scale.set(1.4,.7,.8),o.add(t)}for(let e=0;e<4;e++)o.add(Q(new K(.14,.14,.3,10),Z([14181231,16763198,9427396,15896890][e],{rough:.5}),0+e*1.1,2.7,-5.9));for(let e=0;e<7;e++){let t=Q(new K(.55,.55,.5,12,1,!1,0,Math.PI),Z(e%2?14181231:16645622,{rough:.8}),-2.4+e*1.1,3.4,-5.95);t.rotation.set(0,0,Math.PI/2),o.add(t)}o.add(Q(new G(.1,2.2,2.6),Z(10119743,{rough:.8}),7.32,2.4,.2)),o.add(Q(new G(.12,1.9,2.3),Z(16771520,{rough:.3}),7.3,2.4,.2)),t.add(rm(o));let E=eh({x:2.7,y:1.15,z:1.35,h:.6},3),D=eh({x:.85,y:1.35,z:-5.25,h:.7},4);return t.add(E.root,D.root),{name:`cafe`,root:t,bounds:{minX:-6.6,maxX:6.6,minZ:-5.2,maxZ:5.6},obstacles:[{x:.8,z:1.4,r:1.2},{x:3.4,z:1.4,r:1.2},{x:-4.4,z:2.6,r:.85},{x:-5,z:-1.8,r:.85},{x:-4.8,z:5.3,r:.85},{x:1.2,z:-5.5,r:1.2},{x:4.2,z:-5.5,r:1.2}],interactables:n,colliders:Sh(e,n,t),skyColor:15786192,sky:{top:14203024,bottom:16314080},light:{sun:16769712,sunIntensity:2.4,ambient:15785156,ambientIntensity:1.2,hemiGround:10123866},ambient(e){E.update(e),D.update(e),l.rotation.y=e*4e-4},dispose:Th(t)}}var pg=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;function mg(){let e=Z(16765502,{rough:.95}),t=new U,n=Q(new J(.5,16,14),e,0,.5,0);n.scale.set(1,1.1,.95);let r=Q(new J(.18,10,8),e,-.48,.55,0);r.scale.set(.5,1.2,.8),r.rotation.z=.35;let i=r.clone();i.position.x=.48,i.rotation.z=-.35;let a=Z(15896890),o=Q(new J(.12,8,6),a,-.18,.05,.08);o.scale.set(1,.5,1.6);let s=o.clone();s.position.x=.18;for(let[e,n]of[[-.35,.5],[0,.7],[.35,.5]]){let r=Q(new J(.09,8,6),Z(15905082),0,.52,-.48);r.scale.set(.45,1.4,.5),r.rotation.set(-n,e,0),t.add(r)}t.add(n,r,i,o,s);let c=new U;c.position.set(0,1.15,0);let l=Q(new J(.38,16,14),e,0,0,0),u=Q(new q(.1,.18,8),Z(15896890),0,-.04,.38);u.rotation.x=Math.PI/2;let d=Q(new J(.09,8,6),Z(15905082),0,.36,0);d.scale.set(.5,1.3,.5),d.rotation.z=.3;let f=Z(16777215,{rough:.3}),p=Z(2829099,{rough:.2}),m=Q(new J(.1,10,8),f,-.15,.08,.3),h=m.clone();h.position.x=.15;let g=Q(new J(.05,8,6),p,0,0,.06),_=Z(16777215,{rough:.1});g.add(Q(new J(.016,6,6),_,.015,.02,.042));let v=g.clone(!0);m.add(g),h.add(v);let y=Z(16361098),b=Q(new J(.05,8,6),y,-.26,-.06,.26);b.scale.set(1,.6,.5);let x=b.clone();return x.position.x=.26,c.add(l,u,d,m,h,b,x),{root:$(t,c),body:t,head:c,eyeL:m,eyeR:h,mouth:u,sway:[{obj:d,axis:`z`,base:.3,amp:.09}]}}function hg(){let e=Z(15986148,{rough:1}),t=Z(15906502,{rough:1}),n=new U,r=Q(new J(.48,16,14),e,0,.5,0);r.scale.set(1,1.2,.95);let i=Q(new J(.3,12,10),Z(16777215,{rough:1}),0,.42,.26);i.scale.set(1,1.15,.5);let a=Q(new J(.14,8,8),Z(16777215,{rough:1}),0,.42,-.46),o=Q(new J(.14,8,8),e,-.44,.5,.05);o.scale.set(.6,1.2,.7),o.rotation.z=.3;let s=o.clone();s.position.x=.44,s.rotation.z=-.3;let c=Q(new J(.14,8,6),e,-.18,.06,.12);c.scale.set(1,.5,1.7);let l=c.clone();l.position.x=.18,n.add(r,i,a,o,s,c,l);let u=new U;u.position.set(0,1.2,0);let d=Q(new J(.36,16,14),e,0,0,0),f=Q(new J(.05,8,6),t,0,-.02,.35),p=Q(new yi(.09,.42,4,8),e,-.16,.52,0);p.rotation.z=.16;let m=Q(new yi(.045,.3,4,8),t,0,.02,.05);p.add(m);let h=p.clone();h.position.x=.16,h.rotation.z=-.16;let g=Z(16777215,{rough:.3}),_=Z(4864602,{rough:.2}),v=Q(new J(.09,10,8),g,-.14,.06,.29),y=v.clone();y.position.x=.14;let b=Q(new J(.045,8,6),_,0,0,.055),x=Z(16777215,{rough:.1});b.add(Q(new J(.014,6,6),x,.013,.018,.038)),v.add(b),y.add(b.clone(!0));let S=Q(new Ti(.055,.014,6,10,Math.PI),Z(13208210,{rough:.6}),0,-.1,.33);S.rotation.z=Math.PI;let C=Z(14208962,{rough:.8});for(let e of[-1,1])for(let t=0;t<3;t++){let n=Q(new G(.16,.006,.006),C,e*.14,-.02+(t-1)*.035,.31);n.rotation.y=e*-.35,n.rotation.z=e*(t-1)*-.12,u.add(n)}return u.add(d,f,S,p,h,v,y),{root:$(n,u),body:n,head:u,eyeL:v,eyeR:y,mouth:S,sway:[{obj:p,axis:`x`,base:0,amp:.05},{obj:h,axis:`x`,base:0,amp:.05}]}}var gg=class{id;root;parts;talking=!1;basePos=new V;pose=`stand`;tweens=[];targetYaw=0;emoteEyeY=1;shadow;confetti=[];constructor(e){this.id=e,this.parts=e===`momo`?mg():hg(),this.root=this.parts.root,this.root.name=e,this.shadow=new ni(new bi(.46,20),new Wr({color:1840140,transparent:!0,opacity:.22,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.root.add(this.shadow)}setEmote(e){this.emoteEyeY={happy:1,neutral:1,surprised:1.35,sleepy:.45,thinking:.8}[e],this.parts.head.rotation.z=e===`thinking`?.14:0}setTalking(e){this.talking=e,e||this.parts.mouth.scale.setScalar(1)}face(e,t=!1){let n=e.x-this.root.position.x,r=e.z-this.root.position.z;n*n+r*r<1e-6||(this.targetYaw=Math.atan2(n,r),t&&(this.root.rotation.y=this.targetYaw))}placeAt(e){this.root.position.copy(e),this.basePos.copy(e)}nudge(e,t){this.root.position.x+=e,this.root.position.z+=t,this.basePos.x+=e,this.basePos.z+=t}isMoving(){return this.tweens.length>0}tween(e,t){return new Promise(n=>this.tweens.push({t:0,dur:e,fn:t,done:n}))}async hopTo(e,t=1.6){this.pose=`stand`,this.parts.body.rotation.x=0;let n=this.root.position.clone(),r=e.clone();r.y=0,this.face(r);let i=n.distanceTo(r),a=Math.max(1,Math.round(i/1.1)),o=pg?.05:.45;await this.tween(t,e=>{this.root.position.lerpVectors(n,r,e);let t=Math.abs(Math.sin(e*Math.PI*a));this.root.position.y=t*o,pg||(this.parts.body.scale.y=.92+t*.16,this.parts.body.scale.x=1.06-t*.1,this.parts.body.scale.z=1.06-t*.1)}),this.parts.body.scale.setScalar(1),this.root.position.copy(r),this.basePos.copy(r)}async celebrate(e=1.4){this.burstConfetti();let t=pg?.08:.6;await this.tween(e,e=>{this.root.position.y=this.basePos.y+Math.abs(Math.sin(e*Math.PI*3))*t,this.parts.body.rotation.y=pg?0:Math.sin(e*Math.PI*4)*.25}),this.root.position.y=this.basePos.y,this.parts.body.rotation.y=0}burstConfetti(){if(pg)return;let e=[14701899,16763198,4037440,4028632,12159712];for(let t=0;t<12;t++){let n=new ni(new G(.09,.02,.13),Z(e[t%5]));n.position.set(0,1.3,0);let r=t/12*Math.PI*2+.4;this.confetti.push({m:n,vx:Math.cos(r)*(.7+t%3*.35),vy:2.4+t%4*.35,vz:Math.sin(r)*(.7+t%3*.35),spin:3+t%5}),this.root.add(n)}}async point(e,t=1.2){this.face(e),await this.tween(t,e=>{let t=Math.sin(Math.min(e*2,1)*Math.PI*.5)*.35;this.parts.body.rotation.x=t,this.parts.head.rotation.x=-t*.4}),this.parts.body.rotation.x=0,this.parts.head.rotation.x=0}sit(){this.pose=`sit`,this.root.position.y=-.18}async sleepPose(){this.pose=`sleep`,await this.tween(1,e=>{this.parts.body.rotation.x=-e*.9,this.parts.head.rotation.x=e*.4}),this.setEmote(`sleepy`)}headWorldPos(e){return this.parts.head.getWorldPosition(e)}update(e,t){let n=this.targetYaw-this.root.rotation.y;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;Math.abs(n)>.001&&(this.root.rotation.y+=n*Math.min(1,e*7));for(let t=this.tweens.length-1;t>=0;t--){let n=this.tweens[t];if(!n)continue;n.t+=e;let r=Math.min(n.t/n.dur,1);n.fn(r),r>=1&&(this.tweens.splice(t,1),n.done())}let r=this.id===`momo`?3400:4600,i=(t+(this.id===`momo`?0:1600))%r<110?.12:1;if(this.parts.eyeL.scale.y=this.emoteEyeY*i,this.parts.eyeR.scale.y=this.emoteEyeY*i,!pg)for(let e of this.parts.sway)e.obj.rotation[e.axis]=e.base+Math.sin(t*.0016+e.base)*e.amp;this.shadow.position.y=-this.root.position.y+.02;let a=Math.min(1,Math.max(0,this.root.position.y)*1.4);this.shadow.scale.setScalar(1-a*.45),this.shadow.material.opacity=.22*(1-a*.5),this.pose===`stand`&&!this.tweens.length&&!pg&&(this.root.position.y=this.basePos.y+Math.sin(t*.0024+(this.id===`momo`?0:1.7))*.035);for(let t=this.confetti.length-1;t>=0;t--){let n=this.confetti[t];n&&(n.vy-=6.5*e,n.m.position.x+=n.vx*e,n.m.position.y+=n.vy*e,n.m.position.z+=n.vz*e,n.m.rotation.x+=n.spin*e,n.m.rotation.z+=n.spin*.7*e,n.m.position.y<.04&&n.vy<0&&(n.m.removeFromParent(),n.m.geometry.dispose(),this.confetti.splice(t,1)))}if(this.talking){let e=1+Math.abs(Math.sin(t*.02))*.5;this.parts.mouth.scale.set(1,e,1),pg||(this.parts.head.rotation.y=Math.sin(t*.008)*.05)}}dispose(){nm(this.root),this.root.removeFromParent()}},_g=2.6,vg=2.2,yg=.9,bg=1.1,xg=3.5,Sg=.5,Cg=.3,wg={minX:-5,maxX:5,minZ:-5,maxZ:5},Tg=class{camera;chars;bounds=wg;obstacles=[];reserved=new Map;constructor(e,t){this.camera=e,this.chars=new Map(t.map(e=>[e.id,e]))}setBounds(e){this.bounds=e}setObstacles(e){this.obstacles=e}pushOutOfObstacles(e){for(let t=0;t<4;t++){let t=!1;for(let n of this.obstacles){let r=n.r+Sg,i=e.x-n.x,a=e.z-n.z,o=Math.hypot(i,a);o>=r||(o<1e-4?e.x=n.x+r:(e.x=n.x+i/o*r,e.z=n.z+a/o*r),t=!0)}if(this.clamp(e),!t)break}return e}firstBlocker(e,t){let n=new V().subVectors(t,e);n.y=0;let r=n.length();if(r<1e-4)return null;let i=n.clone().divideScalar(r),a=null,o=1/0;for(let t of this.obstacles){let n=t.r+Sg,s=new V(t.x-e.x,0,t.z-e.z),c=s.dot(i);c<=.05||c>=r-.05||Math.abs(-i.z*s.x+i.x*s.z)>=n||c<o&&(o=c,a=t)}return a}routeAround(e,t){let n=[],r=e.clone().setY(0);for(let e=0;e<3;e++){let e=this.firstBlocker(r,t);if(!e)break;let i=new V().subVectors(t,r).setY(0).normalize(),a=new V(-i.z,0,i.x),o=new V(e.x,0,e.z),s=e.r+Sg+Cg,c=a.dot(new V().subVectors(r,o))>=0?1:-1,l=null;for(let e of[c,-c]){let t=o.clone().addScaledVector(a,e*s);if(this.clamp(t),this.pushOutOfObstacles(t),!this.firstBlocker(r,t)){l=t;break}}if(!l)break;n.push(l),r=l}return n}clamp(e){return e.x=Math.min(Math.max(e.x,this.bounds.minX),this.bounds.maxX),e.z=Math.min(Math.max(e.z,this.bounds.minZ),this.bounds.maxZ),e.y=0,e}camPosFlat(){let e=new V;return this.camera.getWorldPosition(e),e.y=0,e}claimOf(e){let t=this.reserved.get(e);if(t)return t;let n=this.chars.get(e);return n?n.root.position.clone().setY(0):new V}inBounds(e){return e.x>=this.bounds.minX&&e.x<=this.bounds.maxX&&e.z>=this.bounds.minZ&&e.z<=this.bounds.maxZ}avoidOthers(e,t){for(let n=0;n<3;n++){let n=!1;for(let r of this.chars.keys()){if(r===e)continue;let i=this.claimOf(r);if(t.distanceTo(i)>=_g)continue;let a=t.clone().sub(i);if(a.y=0,a.lengthSq()<1e-6){let e=t.clone().sub(this.camPosFlat());a.set(-e.z,0,e.x),a.lengthSq()<1e-6&&a.set(1,0,0)}a.normalize();let o=i.clone().addScaledVector(a,_g);if(this.inBounds(o))t.copy(o);else{let e=Math.atan2(a.x,a.z),n=null;for(let r=1;r<=12;r++){for(let a of[1,-1]){let o=e+a*r*(Math.PI/12),s=new V(i.x+Math.sin(o)*_g,0,i.z+Math.cos(o)*_g);this.inBounds(s)&&(!n||s.distanceTo(t)<n.distanceTo(t))&&(n=s)}if(n)break}t.copy(n??this.clamp(o))}n=!0}if(this.clamp(t),!n)break}return t}containPair(e,t){let n=new V;for(let r of[`x`,`z`]){let i=r===`x`?this.bounds.minX:this.bounds.minZ,a=r===`x`?this.bounds.maxX:this.bounds.maxZ,o=Math.min(e[r],t[r]),s=Math.max(e[r],t[r]);s-o>a-i||(o<i?n[r]=i-o:s>a&&(n[r]=a-s))}e.add(n),t.add(n),this.clamp(e),this.clamp(t)}async move(e,t,n){let r=this.chars.get(e);if(!r)return;this.clamp(t),this.pushOutOfObstacles(t),this.avoidOthers(e,t),this.pushOutOfObstacles(t),this.reserved.set(e,t.clone());let i=[...this.routeAround(r.root.position,t),t],a=i.reduce((e,t,n)=>e+t.distanceTo(n===0?r.root.position:i[n-1]),0);for(let e=0;e<i.length;e++){let t=i[e],o=e===0?r.root.position:i[e-1],s=a>1e-4?t.distanceTo(o)/a:1/i.length;await r.hopTo(t,Math.max(.35,n*s))}this.reserved.delete(e)}async enter(e=new V(0,0,1.5)){let t=this.chars.get(`momo`),n=this.chars.get(`lulu`);if(!t||!n)return;this.reserved.clear(),t.placeAt(this.pushOutOfObstacles(new V(this.bounds.minX,0,this.bounds.maxZ))),n.placeAt(this.pushOutOfObstacles(new V(this.bounds.maxX,0,this.bounds.maxZ)));let[r,i]=this.flankPositions(e);await Promise.all([this.move(`momo`,r,2),this.move(`lulu`,i,2)]),this.faceChild()}flankPositions(e){let t=e.clone();t.y=0;let n=this.camPosFlat().sub(t);n.y=0,n.lengthSq()<1e-6&&n.set(0,0,1),n.normalize();let r=new V(-n.z,0,n.x),i=t.clone().addScaledVector(r,-2.2).addScaledVector(n,yg),a=t.clone().addScaledVector(r,vg).addScaledVector(n,yg);for(let e=0;e<3;e++)this.pushOutOfObstacles(i),this.pushOutOfObstacles(a),this.enforceSeparation(i,a),this.containPair(i,a);return[i,a]}async stageAsk(e){let[t,n]=this.flankPositions(e);await Promise.all([this.move(`momo`,t,1.4),this.move(`lulu`,n,1.4)]),this.faceChild()}async approach(e,t,n){let r=this.chars.get(e);if(!r)return;let i=t.clone();i.y=0;let a=this.camPosFlat().sub(i);a.y=0,a.lengthSq()<1e-6&&a.set(0,0,1),a.normalize();let o=new V(-a.z,0,a.x),s=i.clone().addScaledVector(a,bg).addScaledVector(o,.5);await this.move(e,s,n),r.face(t)}faceChild(){let e=this.camPosFlat();for(let t of this.chars.values())t.face(e)}stageDialogue(e){let t=this.chars.get(e);if(t){t.face(this.camPosFlat());for(let[n,r]of this.chars)n!==e&&r.face(t.root.position)}}faceEachOther(){let e=this.chars.get(`momo`),t=this.chars.get(`lulu`);!e||!t||(e.face(t.root.position),t.face(e.root.position))}update(e){let t=[...this.chars.values()];for(let n=0;n<t.length;n++)for(let r=n+1;r<t.length;r++){let i=t[n],a=t[r];if(!i||!a||i.isMoving()||a.isMoving())continue;let o=new V().subVectors(a.root.position,i.root.position);o.y=0;let s=o.length();if(s>=_g)continue;if(s<1e-4){let e=i.root.position.clone().sub(this.camPosFlat());o.set(-e.z,0,e.x),o.lengthSq()<1e-6&&o.set(1,0,0),o.normalize()}else o.divideScalar(s);let c=Math.min((_g-s)/2,xg*e);i.nudge(-o.x*c,-o.z*c),a.nudge(o.x*c,o.z*c)}for(let e of t){if(e.isMoving())continue;let t=e.root.position,n=this.pushOutOfObstacles(new V(t.x,0,t.z));(n.x!==t.x||n.z!==t.z)&&e.nudge(n.x-t.x,n.z-t.z)}}enforceSeparation(e,t){let n=e.distanceTo(t);if(n>=_g)return;let r=(_g-n)/2+.05,i=t.clone().sub(e);i.y=0,i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize(),e.addScaledVector(i,-r),t.addScaledVector(i,r)}},Eg={momo:`#f2a03a`,lulu:`#8a6fc0`},Dg={momo:`Momo`,lulu:`Lulu`},Og=class{bubble;subtitle;buttons;banner;stars;bubbleAnchor=null;constructor(e){let t=t=>{let n=document.createElement(`div`);return n.className=t,e.appendChild(n),n};this.bubble=t(`ml-bubble`),this.subtitle=t(`ml-subtitle`),this.buttons=t(`ml-buttons`),this.banner=t(`ml-banner`),this.stars=t(`ml-stars`),this.hideBubble(),this.banner.style.display=`none`,this.stars.style.display=`none`}showLine(e,t,n){this.bubble.innerHTML=`<span class="ml-speaker" style="color:${Eg[e]}">${Dg[e]}</span>${kg(t)}`,this.bubble.style.display=`block`,this.bubble.style.borderColor=Eg[e],this.bubbleAnchor=n,this.subtitle.textContent=t,this.subtitle.style.display=`block`,this.positionBubble()}hideBubble(){this.bubble.style.display=`none`,this.bubbleAnchor=null}positionBubble(){if(!this.bubbleAnchor||this.bubble.style.display===`none`)return;let e=this.bubbleAnchor();if(!e)return;let t=this.bubble.offsetWidth;this.bubble.style.left=`${Math.max(8,Math.min(innerWidth-t-8,e.x-t/2))}px`,this.bubble.style.top=`${Math.max(8,e.y-this.bubble.offsetHeight-24)}px`}showButtons(e,t=!1){return new Promise(n=>{this.buttons.innerHTML=``,this.buttons.style.display=`flex`;for(let r of e){let e=document.createElement(`button`);e.className=t?`ml-btn ml-btn-quiet`:`ml-btn`,e.textContent=r.label,e.onclick=()=>{this.hideButtons(),n(r.id)},this.buttons.appendChild(e)}})}hideButtons(){this.buttons.style.display=`none`,this.buttons.innerHTML=``}async showBanner(e,t=1800){this.banner.textContent=e,this.banner.style.display=`block`,await new Promise(e=>setTimeout(e,t)),this.banner.style.display=`none`}async showStars(){this.stars.innerHTML=`<span>⭐</span><span>⭐</span><span>⭐</span>`,this.stars.style.display=`flex`,await new Promise(e=>setTimeout(e,2600)),this.stars.style.display=`none`}static projector(e,t,n){return()=>{let r=t(n).project(e);return r.z>1?null:{x:(r.x+1)/2*innerWidth,y:(1-r.y)/2*innerHeight}}}};function kg(e){return e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]??e)}var Ag=`
  .ml-bubble { position: fixed; display: none; max-width: min(64vw, 420px); background: #fffdf6;
    border: 3px solid #f2a03a; border-radius: 18px; padding: 10px 16px; font: 600 clamp(16px, 2.6vw, 22px)/1.35 'Comic Sans MS', 'Segoe UI', system-ui, sans-serif;
    color: #4a3a2a; box-shadow: 0 6px 18px rgba(60,40,10,.18); pointer-events: none; z-index: 20; }
  .ml-speaker { display: block; font-size: .72em; letter-spacing: .04em; }
  .ml-subtitle { position: fixed; left: 50%; transform: translateX(-50%); bottom: 12px; max-width: 92vw;
    background: rgba(30,26,20,.72); color: #fff; border-radius: 12px; padding: 8px 18px;
    font: 500 clamp(15px, 2.4vw, 20px)/1.4 'Segoe UI', system-ui, sans-serif; z-index: 20; }
  .ml-buttons { position: fixed; display: none; left: 50%; transform: translateX(-50%); bottom: 64px;
    gap: 18px; z-index: 30; }
  .ml-btn { min-width: 132px; min-height: 64px; font: 700 22px 'Comic Sans MS', 'Segoe UI', system-ui, sans-serif;
    color: #4a3a2a; background: #ffe9b8; border: 4px solid #f2a03a; border-radius: 20px; padding: 10px 22px;
    cursor: pointer; box-shadow: 0 5px 0 #d6871f; }
  .ml-btn:active { transform: translateY(3px); box-shadow: 0 2px 0 #d6871f; }
  .ml-btn-quiet { background: #f2f2ee; border-color: #c9c9c0; box-shadow: 0 5px 0 #b0b0a6; font-size: 18px; min-height: 52px; }
  .ml-banner { position: fixed; display: none; left: 50%; top: 18%; transform: translateX(-50%);
    background: #fffdf6; border: 4px solid #8a6fc0; color: #4a3a5a; border-radius: 24px; padding: 16px 34px;
    font: 700 clamp(20px, 3.4vw, 30px) 'Comic Sans MS', 'Segoe UI', system-ui, sans-serif; z-index: 40;
    box-shadow: 0 8px 24px rgba(40,30,70,.25); }
  .ml-stars { position: fixed; display: none; inset: 0; align-items: center; justify-content: center;
    gap: 3vw; font-size: clamp(48px, 10vw, 110px); z-index: 40; pointer-events: none; }
  .ml-stars span { animation: ml-pop .7s ease both; }
  .ml-stars span:nth-child(2) { animation-delay: .25s; }
  .ml-stars span:nth-child(3) { animation-delay: .5s; }
  @keyframes ml-pop { 0% { transform: scale(0); } 70% { transform: scale(1.25); } 100% { transform: scale(1); } }
  @media (prefers-reduced-motion: reduce) { .ml-stars span { animation: none; } }
`,jg=650,Mg=8e3,Ng=1e4,Pg=class{playing=null;host;constructor(e){this.host=e}wait(e){return this.host.wait?this.host.wait(e):Fg(e)}progress(){return this.playing}char(e){let t=this.host.characters.get(e);if(!t)throw Error(`missing character ${e}`);return t}anchorFor(e){let t=this.char(e),n=new V;return Og.projector(this.host.camera,e=>t.headWorldPos(e),n)}objectOf(e){return this.host.scene().interactables.get(e)??null}worldPosOf(e){let t=this.objectOf(e);return t?new er().setFromObject(t).getCenter(new V):null}async line(e,t,n,r){let i=this.char(e);i.setEmote(n??`happy`),i.setTalking(!0),this.host.director.stageDialogue(e),this.host.ui.showLine(e,t,this.anchorFor(e)),this.playing&&this.host.ledger.heardLine(t,this.playing.episodeId);for(let e of r??[]){let t=this.objectOf(Hp(e));t&&this.host.fx.wiggle(t,1.6)}await this.host.speech.say(e,t),i.setTalking(!1),this.host.ui.hideBubble(),await this.wait(jg)}async play(e,t=!1){this.playing={episodeId:e.id,stepIndex:0},this.host.events.emit({name:`episode_start`,episodeId:e.id}),t&&this.host.events.emit({name:`replay`,episodeId:e.id}),await this.host.director.enter();for(let t=0;t<e.steps.length;t++)this.playing={episodeId:e.id,stepIndex:t},await this.step(e.steps[t]);this.host.events.emit({name:`episode_complete`,episodeId:e.id}),this.playing=null,this.host.ui.hideBubble(),this.host.speech.stop()}async step(e){switch(e.type){case`say`:return this.say(e);case`ask`:return this.ask(e);case`do`:return this.doAction(e);case`echo`:return this.echo(e);case`choice`:return this.choice(e);case`chant`:return this.chant(e);case`finale`:await this.line(`lulu`,e.line,`happy`),await Promise.all([this.char(`momo`).celebrate(),this.char(`lulu`).celebrate()]),await this.host.ui.showStars();return;case`goto`:{let t=this.host.scene().name;this.host.events.emit({name:`transition`,fromScene:t,toScene:e.scene}),await this.host.transitionTo(e.scene,e.bridgeLabel);return}}}async say(e){await this.line(e.who,e.text,e.emote,e.emphasis)}async ask(e){let t=this.worldPosOf(e.answerId),n=this.objectOf(e.answerId),r=e.who===`momo`?`lulu`:`momo`;t&&await this.host.director.stageAsk(t),await this.line(e.who,e.speak??e.prompt,`happy`);let i=0,a=-1,o=async()=>{if(!n)return;a=Math.min(a+1,e.scaffold.length-1);let i=e.scaffold[a];i===`glow`?this.host.fx.glow(n):i===`bounce`?this.host.fx.bounce(n):i===`characterPoint`&&t&&(await this.host.director.approach(r,t,1.4),await this.char(r).point(t))},s=()=>a>=e.scaffold.length-1,c=!0;for(;;){let t=await this.host.nextTap(Mg);if(t===e.answerId)break;if(t===null){if(!s())await this.line(e.who,e.speak??e.prompt,`happy`),await o();else{c=!1;break}}else{let t=e.retry[i%e.retry.length]??e.prompt;i++,await this.line(e.who,t,`happy`),i>=2&&await o()}}c&&this.playing&&this.host.ledger.tappedRight(e.answerId,a>=0,this.playing.episodeId),this.host.events.emit({name:`step_result`,stepType:`ask`,correct:c,retries:i,scaffoldLevel:a}),!c&&t&&await this.host.director.approach(r,t,1.4),n&&(this.host.fx.stop(n),this.host.fx.wiggle(n,1.6));let l=this.char(e.who);await Promise.all([this.line(e.who,e.praise,`happy`),l.celebrate()]),this.host.director.faceChild()}async doAction(e){let t=this.char(e.who),n=this.worldPosOf(e.targetId),r=this.objectOf(e.targetId),i=e.durSec??1.5;switch(this.playing&&this.host.ledger.actedOn(e.targetId,this.playing.episodeId),e.action){case`hopTo`:n&&await this.host.director.approach(e.who,n,i);return;case`kick`:n&&await this.host.director.approach(e.who,n,i*.6),r&&this.host.fx.wiggle(r,1),await this.wait(400);return;case`pickUp`:case`give`:n&&await this.host.director.approach(e.who,n,i*.7),r&&this.host.fx.wiggle(r,1.2),await this.wait(500),e.action===`give`&&this.host.director.faceEachOther();return;case`sit`:n&&await this.host.director.approach(e.who,n,i),t.sit(),this.host.director.faceChild();return;case`sleep`:n&&await this.host.director.approach(e.who,n,i*.7),await t.sleepPose();return}}async echo(e){await this.line(e.who,e.invite,`happy`);let t=this.objectOf(Hp(e.word));t&&this.host.fx.wiggle(t,1.6);let n=await Promise.race([this.host.ui.showButtons([{id:`skip`,label:`➜`}],!0),this.wait(3500).then(()=>`done`)]);this.host.ui.hideButtons();let r=n===`skip`;this.playing&&this.host.ledger.echoInvited(e.word,r,this.playing.episodeId),this.host.events.emit({name:`echo`,offered:!0,attempted:!r,skipped:r}),r||await this.line(e.who,e.neutral,`happy`)}async choice(e){await this.line(e.who,e.prompt,`happy`);let t=null;for(let n=0;n<2&&t===null;n++)t=await Promise.race([this.host.ui.showButtons(e.options),this.wait(Ng).then(()=>null)]),t===null&&n===0&&await this.line(e.who,e.prompt,`happy`);this.host.ui.hideButtons(),t??=e.options[0]?.id??null;let n=t?this.objectOf(t):null;n&&this.host.fx.wiggle(n,1.6),await this.wait(300)}async chant(e){let t=e.who===`both`?`lulu`:e.who;for(let n=0;n<(e.repeat??1);n++)for(let n of e.lines)await this.line(t,n,`happy`)}};function Fg(e){return new Promise(t=>setTimeout(t,e))}var Ig={momo:{prefer:[`zira`,`google us english`,`samantha`,`aria`,`jenny`,`female`],timbre:`light`,pitch:1.75,rate:1.02},lulu:{prefer:[`google uk english male`,`david`,`mark`,`daniel`,`guy`,`male`],timbre:`warm`,pitch:.78,rate:.84}},Lg=null;function Rg(){return speechSynthesis.getVoices().filter(e=>e.lang.toLowerCase().startsWith(`en`))}function zg(e,t){let n=e.name.toLowerCase(),r=0,i=t.prefer.findIndex(e=>n.includes(e));return i!==-1&&(r+=100-i*10),e.localService||(r+=25),(e.lang.toLowerCase()===`en-us`||e.lang.toLowerCase()===`en-gb`)&&(r+=5),r}function Bg(){if(Lg)return Lg;let e=Rg(),t={momo:null,lulu:null};if(!e.length)return t;let n=t=>[...e].sort((e,n)=>zg(n,Ig[t])-zg(e,Ig[t])),r=n(`momo`)[0]??null,i=n(`lulu`).find(e=>e.name!==r?.name)??null;return t.momo=r,t.lulu=i??r,Lg=t,t}typeof speechSynthesis<`u`&&(speechSynthesis.onvoiceschanged=()=>{Lg=null,Bg()});function Vg(e,t){if(typeof speechSynthesis>`u`)return new Promise(e=>setTimeout(e,t.length*60));speechSynthesis.cancel();let n=Ig[e],r=Bg()[e]??null;return new Promise(e=>{let i=new SpeechSynthesisUtterance(t);r&&(i.voice=r),i.pitch=Math.min(2,Math.max(0,n.pitch)),i.rate=n.rate*.9,i.volume=1;let a=!1,o=()=>{a||(a=!0,clearTimeout(s),e())};i.onend=o,i.onerror=o;let s=setTimeout(o,2e3+t.length*130);speechSynthesis.speak(i)})}function Hg(){typeof speechSynthesis<`u`&&speechSynthesis.cancel()}var Ug=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,Wg=class{active=[];start(e,t,n){this.stop(e);let r={obj:e,kind:t,t:0,until:n,baseY:e.position.y,baseScale:e.scale.clone(),swapped:new Map};t===`glow`&&this.swapInClones(r),this.active.push(r)}wiggle(e,t=1.2){this.start(e,`wiggle`,t)}glow(e){this.start(e,`glow`,1/0)}bounce(e){this.start(e,`bounce`,1/0)}stop(e){let t=this.active.findIndex(t=>t.obj===e);if(t===-1)return;let n=this.active[t];if(n){n.obj.position.y=n.baseY,n.obj.scale.copy(n.baseScale);for(let[e,t]of n.swapped){let n=Array.isArray(e.material)?e.material:[e.material];e.material=t;for(let e of n)e.dispose()}n.swapped.clear()}this.active.splice(t,1)}stopAll(){for(let e of[...this.active])this.stop(e.obj)}update(e){for(let t of[...this.active]){if(t.t+=e,t.t>=t.until){this.stop(t.obj);continue}let n=Ug?.25:1;switch(t.kind){case`wiggle`:t.obj.scale.copy(t.baseScale).multiplyScalar(1+Math.sin(t.t*14)*.06*n);break;case`glow`:{let e=(Math.sin(t.t*5)+1)/2,n=new W(.45*e,.35*e,0);for(let e of t.swapped.keys()){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e instanceof Ii&&e.emissive.copy(n)}break}case`bounce`:t.obj.position.y=t.baseY+Math.abs(Math.sin(t.t*5))*.28*n}}}swapInClones(e){e.obj.traverse(t=>{t instanceof ni&&(e.swapped.set(t,t.material),t.material=Array.isArray(t.material)?t.material.map(e=>e.clone()):t.material.clone())})}},Gg=252,Kg=148,qg=class{overlay;tiles=[];renderer;camera;cursor=0;pickResolve=null;visible=!1;constructor(e,t){this.overlay=document.createElement(`div`),this.overlay.className=`wm-overlay`;let n=document.createElement(`div`);n.className=`wm-title`,n.textContent=`Momo & Lulu`;let r=document.createElement(`div`);r.className=`wm-grid`,this.overlay.append(n,r),e.appendChild(this.overlay),this.renderer=new ol({antialias:!1}),this.renderer.setSize(Gg,Kg),this.camera=new fa(46,Gg/Kg,.1,120),this.camera.position.setFromSpherical(new Ba(13.5,.92,0)).add(new V(0,1,0)),this.camera.lookAt(0,1,0);for(let e of t){let t=document.createElement(`button`);t.className=`wm-card`;let n=document.createElement(`canvas`);n.width=Gg,n.height=Kg,n.className=`wm-canvas`;let i=document.createElement(`div`);i.className=`wm-name`,i.textContent=`${e.emoji} ${e.label}`,t.append(n,i),r.appendChild(t);let a={spec:e,card:t,ctx:n.getContext(`2d`),built:null,world:null};t.onclick=()=>{if(!this.pickResolve)return;let t=this.pickResolve;this.pickResolve=null,this.hide(),t(e.scene)},this.tiles.push(a)}this.hide()}choose(e){for(let t of this.tiles)t.card.classList.toggle(`wm-continue`,t.spec.scene===e);return this.overlay.style.display=`flex`,this.visible=!0,new Promise(e=>{this.pickResolve=e})}hide(){this.overlay.style.display=`none`,this.visible=!1}renderNext(e){if(!this.visible||this.tiles.length===0)return;let t=this.tiles[this.cursor%this.tiles.length];if(this.cursor++,!(!t||!t.ctx)){if(!t.built){t.built=t.spec.build(),t.world=new zn;let e=t.built.sky??{top:t.built.skyColor,bottom:t.built.skyColor};t.world.background=new W(e.bottom);let n=new _a(16774368,2.4);n.position.set(6,12,7),t.world.add(n,new va(13625599,1.3),t.built.root)}t.built.ambient(e),t.world&&(this.renderer.render(t.world,this.camera),t.ctx.drawImage(this.renderer.domElement,0,0,Gg,Kg))}}dispose(){for(let e of this.tiles)e.built?.dispose();this.renderer.dispose(),this.overlay.remove()}},Jg=`
  .wm-overlay { position: fixed; inset: 0; z-index: 44; display: none; flex-direction: column;
    align-items: center; overflow-y: auto; padding: 14px 10px 30px;
    background: linear-gradient(180deg, #6cbdf5 0%, #b8e4ff 45%, #d9f1e6 100%); }
  .wm-title { font: 800 clamp(26px, 4.5vw, 40px) 'Comic Sans MS', 'Segoe UI', system-ui, sans-serif;
    color: #fffdf6; text-shadow: 0 3px 0 rgba(60,60,120,.25); margin: 6px 0 14px; }
  .wm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px; width: min(96vw, 1180px); }
  .wm-card { position: relative; border: 5px solid #fffdf6; border-radius: 22px; padding: 0;
    overflow: hidden; cursor: pointer; background: #fffdf6;
    box-shadow: 0 8px 0 rgba(60,60,120,.18); transition: transform .12s ease;
    animation: wm-bob 3.2s ease-in-out infinite; }
  .wm-grid .wm-card:nth-child(3n) { animation-delay: -1.1s; }
  .wm-grid .wm-card:nth-child(3n+1) { animation-delay: -2.2s; }
  .wm-card:active { transform: scale(0.94); }
  .wm-card:hover { transform: scale(1.03); }
  .wm-canvas { display: block; width: 100%; height: auto; border-radius: 16px 16px 0 0; }
  .wm-name { font: 700 clamp(17px, 2.2vw, 22px) 'Comic Sans MS', 'Segoe UI', system-ui, sans-serif;
    color: #4a3a5a; padding: 7px 6px 9px; text-align: center; background: #fffdf6; }
  .wm-continue { border-color: #ffc93e; box-shadow: 0 8px 0 #d6871f; }
  .wm-continue .wm-name::after { content: ' ⭐'; }
  @media (prefers-reduced-motion: reduce) { .wm-card { animation: none; } }
  @keyframes wm-bob { 0%,100% { translate: 0 0; } 50% { translate: 0 -5px; } }
`,Yg={park:Eh,home:Dh,school:Oh,playground:kh,dentist:Ah,grocery:jh,market:Mh,zoo:Bh,beach:Jh,airport:Zh,museum:$h,science:ig,space:ag,restaurant:lg,cafe:fg},Xg=document.querySelector(`#app`);if(!Xg)throw Error(`#app missing`);var Zg=new ol({antialias:!0});Zg.setPixelRatio(Math.min(devicePixelRatio,2)),Zg.setSize(innerWidth,innerHeight),Zg.shadowMap.enabled=!0,Zg.shadowMap.type=2,Xg.appendChild(Zg.domElement);var Qg=document.createElement(`style`);Qg.textContent=Ag+Jg+`
  html, body { margin: 0; height: 100%; overflow: hidden; }
  canvas { display: block; touch-action: none; }
  .ml-iris { position: fixed; inset: 0; background: #2b2118; z-index: 50; pointer-events: none;
    opacity: 0; transition: opacity .55s ease; }
  .ml-iris.on { opacity: 1; pointer-events: all; }
`,document.head.appendChild(Qg);var $g=document.createElement(`div`);$g.className=`ml-iris`,document.body.appendChild($g);var e_=new zn,t_=new fa(46,innerWidth/innerHeight,.1,120);t_.position.set(0,5.2,11.5);var n_=new _a(16774368,2.6);n_.position.set(6,12,7),n_.castShadow=!0,n_.shadow.mapSize.set(1024,1024),n_.shadow.camera.left=-12,n_.shadow.camera.right=12,n_.shadow.camera.top=12,n_.shadow.camera.bottom=-12;var r_=new va(13625599,1.1),i_=new ea(12575743,10123850,.8);e_.add(n_,r_,i_);var a_=null;function o_(e,t){let n=document.createElement(`canvas`);n.width=2,n.height=256;let r=n.getContext(`2d`);if(!r){e_.background=new W(t);return}let i=r.createLinearGradient(0,0,0,256);i.addColorStop(0,`#${e.toString(16).padStart(6,`0`)}`),i.addColorStop(1,`#${t.toString(16).padStart(6,`0`)}`),r.fillStyle=i,r.fillRect(0,0,2,256),a_?.dispose(),a_=new hi(n),a_.colorSpace=Ue,e_.background=a_}var s_={sun:16774368,sunIntensity:2.6,ambient:13625599,ambientIntensity:1.1,hemiSky:12575743,hemiGround:10123850},c_=new _l(t_,Zg.domElement);c_.enablePan=!1,c_.enableDamping=!0,c_.dampingFactor=.08,c_.minDistance=5,c_.maxDistance=15,c_.minPolarAngle=.55,c_.maxPolarAngle=1.42,c_.target.set(0,1,0),c_.rotateSpeed=.55;var l_=new gg(`momo`),u_=new gg(`lulu`);e_.add(l_.root,u_.root);var d_=new Map([[`momo`,l_],[`lulu`,u_]]),f_=new Tg(t_,[l_,u_]),p_=new Wg,m_=new Og(document.body),h_={park:[`Park`,`🌳`],home:[`Home`,`🏠`],school:[`School`,`✏️`],playground:[`Playground`,`🛝`],grocery:[`Grocery`,`🍎`],market:[`Market`,`🍉`],dentist:[`Dentist`,`🦷`],zoo:[`Zoo`,`🦁`],beach:[`Beach`,`🌊`],airport:[`Airport`,`✈️`],museum:[`Museum`,`🦕`],science:[`Science`,`🤖`],restaurant:[`Restaurant`,`🍕`],cafe:[`Cafe`,`🍰`],space:[`Space`,`🚀`]},g_=yp.map(e=>{let t=bp(e).scene,[n,r]=h_[t]??[t,`⭐`],i=Yg[t],a=Cp.get(t);return{scene:t,label:n,emoji:r,build:()=>{if(!i||!a)throw Error(`no scene ${t}`);return i(a)}}}),__=new qg(document.body,g_),v_=null;function y_(e){p_.stopAll(),v_&&v_.dispose();let t=Yg[e],n=Cp.get(e);if(!t||!n)throw Error(`no scene "${e}"`);v_=t(n),e_.add(v_.root);let r=v_.sky??{top:v_.skyColor,bottom:v_.skyColor};o_(r.top,r.bottom);let i={...s_,...v_.light??{}};return n_.color.setHex(i.sun),n_.intensity=i.sunIntensity,r_.color.setHex(i.ambient),r_.intensity=i.ambientIntensity,i_.color.setHex(i.hemiSky),i_.groundColor.setHex(i.hemiGround),e_.fog=v_.fog===void 0?null:new Rn(v_.fog,28,70),f_.setBounds(v_.bounds),f_.setObstacles(v_.obstacles),v_}var b_=new Ia,x_=new B,S_=[],C_=null;Zg.domElement.addEventListener(`pointerdown`,e=>{C_={x:e.clientX,y:e.clientY}}),Zg.domElement.addEventListener(`pointerup`,e=>{if(!C_)return;let t=Math.hypot(e.clientX-C_.x,e.clientY-C_.y);if(C_=null,t>8||!v_||!S_.length)return;x_.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),b_.setFromCamera(x_,t_);let n=wh(v_,b_);if(n){let e=S_;S_=[];for(let t of e)t(n)}});var w_=await jp.open(),T_=await w_.loadState(),E_=`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,D_=new Qp(T_.profileId,E_),O_=new Jp(_p,E_);O_.load(T_.ledger);var k_=Date.now();async function A_(){T_.ledger=O_.toJSON(),await w_.saveState(T_),await w_.appendEvents(D_.drain())}{let e=document.createElement(`div`);e.style.cssText=`position:fixed;left:10px;bottom:8px;z-index:60;font:600 11px ui-monospace,monospace;color:#fff;background:rgba(30,26,20,.55);padding:3px 9px;border-radius:8px;pointer-events:none;`,e.textContent=`build c11b7d7 08-09 17:50`,document.body.appendChild(e),Object.assign(window,{momo:{ledger:()=>O_.toJSON(),state:()=>T_,events:()=>w_.exportEvents(),persistent:()=>w_.persistent,reset:async()=>{await w_.clear(),location.reload()},quality:()=>({level:R_,of:L_.length-1,...L_[R_]}),scenes:()=>Object.keys(Yg),visit:e=>{location.search=`?scene=${e}`}}})}var j_=new URLSearchParams(location.search),M_=j_.has(`fast`);M_&&console.warn(`momo: ?fast pacing — testing only, not representative of the real experience`);var N_=j_.get(`scene`),P_={scene:()=>{if(!v_)throw Error(`no scene`);return v_},camera:t_,ui:m_,director:f_,characters:d_,fx:p_,speech:{say:Vg,stop:Hg},events:D_,ledger:O_,wait:e=>I_(M_?Math.min(e,120):e),nextTap:e=>new Promise(t=>{S_.push(t),e&&setTimeout(()=>{let e=S_.indexOf(t);e!==-1&&(S_.splice(e,1),t(null))},e)}),transitionTo:async(e,t)=>{await m_.showBanner(t,1600),$g.classList.add(`on`),await I_(600),y_(e),c_.target.set(0,1,0),$g.classList.remove(`on`),await I_(600)}},F_=new Pg(P_);function I_(e){return new Promise(t=>setTimeout(t,e))}var L_=[{pixelRatio:Math.min(devicePixelRatio,2),shadows:!0},{pixelRatio:Math.min(devicePixelRatio,1.5),shadows:!0},{pixelRatio:1.25,shadows:!0},{pixelRatio:1,shadows:!0},{pixelRatio:1,shadows:!1}],R_=0,z_=0,B_=0;function V_(){let e=L_[R_];e&&(Zg.setPixelRatio(e.pixelRatio),Zg.setSize(innerWidth,innerHeight),Zg.shadowMap.enabled!==e.shadows&&(Zg.shadowMap.enabled=e.shadows,e_.traverse(e=>{if(e instanceof ni){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}})))}function H_(e){e>1/48?(z_+=1,B_=0):(z_=Math.max(0,z_-.25),B_+=1),z_>40&&R_<L_.length-1?(R_++,z_=0,B_=0,V_()):B_>900&&R_>0&&(R_--,B_=0,V_())}var U_=new za;Zg.setAnimationLoop(()=>{let e=U_.getDelta();H_(e);let t=Math.min(e,.05),n=performance.now();c_.update(),l_.update(t,n),u_.update(t,n),f_.update(t),p_.update(t),v_?.ambient(n),m_.positionBubble(),__.visible?__.renderNext(n):Zg.render(e_,t_)}),addEventListener(`resize`,()=>{t_.aspect=innerWidth/innerHeight,t_.updateProjectionMatrix(),V_()}),addEventListener(`pagehide`,()=>{let e=F_.progress();e&&D_.emit({name:`episode_abandon`,episodeId:e.episodeId,stepIndex:e.stepIndex}),D_.emit({name:`session_end`,durSec:Math.round((Date.now()-k_)/1e3)}),A_()});var W_=Object.keys(Yg),G_=e=>e.charAt(0).toUpperCase()+e.slice(1),K_=document.createElement(`button`);K_.className=`ml-nav`;var q_=null;K_.onclick=()=>q_?.();{let e=document.createElement(`style`);e.textContent=`
    .ml-nav { position: fixed; top: 14px; right: 14px; z-index: 45; display: none;
      min-height: 48px; padding: 10px 18px; border-radius: 16px; cursor: pointer;
      font: 700 17px 'Comic Sans MS', 'Segoe UI', system-ui, sans-serif;
      color: #4a3a5a; background: #fffdf6; border: 3px solid #8a6fc0;
      box-shadow: 0 4px 0 #6f57a0; }
    .ml-nav:active { transform: translateY(2px); box-shadow: 0 2px 0 #6f57a0; }
  `,document.head.appendChild(e),document.body.appendChild(K_)}async function J_(){let e=!1;for(q_=()=>{e=!0},K_.textContent=`🗺️`,K_.style.display=`block`;!e;){let t=await P_.nextTap(700);if(e||!t||!v_)continue;let n=Cp.get(v_.name)?.interactables.find(e=>e.id===t)?.displayName.en,r=v_.interactables.get(t);if(r&&p_.wiggle(r,1.4),!n)continue;let i=Math.random()<.5?`momo`:`lulu`,a=d_.get(i);a&&(f_.stageDialogue(i),m_.showLine(i,n,Og.projector(t_,e=>a.headWorldPos(e),new V)),Vg(i,n),setTimeout(()=>m_.hideBubble(),1800))}K_.style.display=`none`,q_=null,m_.hideBubble()}async function Y_(e){let t=Yg[e]?e:W_[0];for(Yg[e]||console.warn(`momo: no scene "${e}". Available: ${W_.join(`, `)}`),y_(t);;){let e=W_[(W_.indexOf(t)+1)%W_.length];K_.textContent=`${G_(e)} ➜`,await m_.showButtons([{id:`look`,label:`▶ Look around`},{id:`next`,label:`${G_(e)} ➜`}])===`look`&&(await f_.enter(),f_.faceChild(),await m_.showBanner(G_(t),1200),await J_()),await P_.transitionTo(e,`➜ ${G_(e)}`),t=e}}async function X_(){let e=!1,t=e=>{let t=yp.find(t=>bp(t).scene===e);return t?bp(t):null};for(;;){let n=T_.lastEpisodeId&&yp.includes(T_.lastEpisodeId)?bp(T_.lastEpisodeId).scene:null,r=await __.choose(n);y_(r),e||=(D_.emit({name:`session_start`}),!0);let i=t(r);if(await m_.showButtons([{id:`play`,label:`▶ Play`},{id:`look`,label:`👀 Look`}])===`look`){await f_.enter(),f_.faceChild(),await J_();continue}if(!i)continue;let a=T_.completed.includes(i.id);T_.lastEpisodeId=i.id,await F_.play(i,a),a||T_.completed.push(i.id),T_.lastEpisodeId=(Sp(i.id)??xp()).id,await A_(),await m_.showBanner(`💛`,1400)}}N_?Y_(N_):X_();