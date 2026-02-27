(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Tc=200;class Ec{entries=[];log(e){this.push("info",e),console.log(e)}warn(e){this.push("warn",e),console.warn(e)}error(e){this.push("error",e),console.error(e)}push(e,t){this.entries.length>=Tc&&this.entries.shift(),this.entries.push({timestamp:Date.now(),level:e,message:t})}getEntries(){return this.entries.slice()}clear(){this.entries=[]}}const en=new Ec;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="170",Ac=0,ha=1,Cc=2,kl=1,Ll=2,xn=3,Bn=0,Lt=1,nn=2,Nn=0,Ei=1,da=2,ua=3,fa=4,Pc=5,Kn=100,Rc=101,kc=102,Lc=103,Ic=104,Dc=200,Uc=201,Oc=202,Nc=203,Xr=204,$r=205,Fc=206,zc=207,Bc=208,Gc=209,Hc=210,Wc=211,Vc=212,Xc=213,$c=214,qr=0,Yr=1,Zr=2,Ri=3,Kr=4,jr=5,Jr=6,Qr=7,Il=0,qc=1,Yc=2,Fn=0,Zc=1,Kc=2,jc=3,Dl=4,Jc=5,Qc=6,eh=7,Ul=300,ki=301,Li=302,eo=303,to=304,sr=306,Qi=1e3,Jn=1001,no=1002,on=1003,th=1004,as=1005,Xt=1006,hr=1007,Qn=1008,Tn=1009,Ol=1010,Nl=1011,es=1012,Ho=1013,ei=1014,Sn=1015,ts=1016,Wo=1017,Vo=1018,Ii=1020,Fl=35902,zl=1021,Bl=1022,sn=1023,Gl=1024,Hl=1025,Ai=1026,Di=1027,Wl=1028,Xo=1029,Vl=1030,$o=1031,qo=1033,Bs=33776,Gs=33777,Hs=33778,Ws=33779,io=35840,so=35841,ro=35842,oo=35843,ao=36196,lo=37492,co=37496,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,vo=37814,_o=37815,yo=37816,xo=37817,Mo=37818,So=37819,wo=37820,bo=37821,Vs=36492,To=36494,Eo=36495,Xl=36283,Ao=36284,Co=36285,Po=36286,nh=3200,ih=3201,$l=0,sh=1,On="",Ht="srgb",Oi="srgb-linear",rr="linear",Qe="srgb",oi=7680,pa=519,rh=512,oh=513,ah=514,ql=515,lh=516,ch=517,hh=518,dh=519,Ro=35044,ma="300 es",wn=2e3,Zs=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,ko=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function uh(s,e){return(s%e+e)%e}function dr(s,e,t){return(1-t)*s+t*e}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,r,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=i[0],p=i[3],u=i[6],_=i[1],b=i[4],M=i[7],O=i[2],A=i[5],E=i[8];return r[0]=o*v+a*_+l*O,r[3]=o*p+a*b+l*A,r[6]=o*u+a*M+l*E,r[1]=c*v+h*_+d*O,r[4]=c*p+h*b+d*A,r[7]=c*u+h*M+d*E,r[2]=f*v+m*_+g*O,r[5]=f*p+m*b+g*A,r[8]=f*u+m*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Oe;function Yl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fh(){const s=Ks("canvas");return s.style.display="block",s}const ga={};function Ki(s){s in ga||(ga[s]=!0,console.warn(s))}function ph(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?rr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ci(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const va=[.64,.33,.3,.6,.15,.06],_a=[.2126,.7152,.0722],ya=[.3127,.329],xa=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ma=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Oi]:{primaries:va,whitePoint:ya,transfer:rr,toXYZ:xa,fromXYZ:Ma,luminanceCoefficients:_a,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:va,whitePoint:ya,transfer:Qe,toXYZ:xa,fromXYZ:Ma,luminanceCoefficients:_a,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}});let ai;class vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=Ks("canvas")),ai.width=e.width,ai.height=e.height;const n=ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class Zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fr(i[o].image)):r.push(fr(i[o]))}else r=fr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Ct extends Ni{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Jn,i=Jn,r=Xt,o=Qn,a=sn,l=Tn,c=Ct.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=zn(),this.name="",this.source=new Zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Ul;Ct.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(m+1)/2,O=(u+1)/2,A=(h+f)/4,E=(d+v)/4,R=(g+p)/4;return b>M&&b>O?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=E/n):M>O?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=R/i):O<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(O),n=E/r,i=R/r),this.set(n,i,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kl extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mh extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==m||h!==g){let p=1-a;const u=l*f+c*m+h*g+d*v,_=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const O=Math.sqrt(b),A=Math.atan2(O,u*_);p=Math.sin(p*A)/O,a=Math.sin(a*A)/O}const M=a*_;if(l=l*p+f*M,c=c*p+m*M,h=h*p+g*M,d=d*p+v*M,p===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new C,Sa=new ns;class Fi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(r,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),cs.subVectors(this.max,Hi),li.subVectors(e.a,Hi),ci.subVectors(e.b,Hi),hi.subVectors(e.c,Hi),Rn.subVectors(ci,li),kn.subVectors(hi,ci),Wn.subVectors(li,hi);let t=[0,-Rn.z,Rn.y,0,-kn.z,kn.y,0,-Wn.z,Wn.y,Rn.z,0,-Rn.x,kn.z,0,-kn.x,Wn.z,0,-Wn.x,-Rn.y,Rn.x,0,-kn.y,kn.x,0,-Wn.y,Wn.x,0];return!mr(t,li,ci,hi,cs)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,li,ci,hi,cs))?!1:(hs.crossVectors(Rn,kn),t=[hs.x,hs.y,hs.z],mr(t,li,ci,hi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new C,new C,new C,new C,new C,new C,new C,new C],Zt=new C,ls=new Fi,li=new C,ci=new C,hi=new C,Rn=new C,kn=new C,Wn=new C,Hi=new C,cs=new C,hs=new C,Vn=new C;function mr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vn.fromArray(s,r);const a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sh=new Fi,Wi=new C,gr=new C;class or{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(gr)),this.expandByPoint(Wi.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new C,vr=new C,ds=new C,Ln=new C,_r=new C,us=new C,yr=new C;class Yo{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vr.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(vr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Ln.dot(this.direction),l=-Ln.dot(ds),c=Ln.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vr).addScaledVector(ds,f),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){_r.subVectors(t,e),us.subVectors(n,e),yr.crossVectors(_r,us);let o=this.direction.dot(yr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(us.crossVectors(Ln,us));if(l<0)return null;const c=a*this.direction.dot(_r.cross(Ln));if(c<0||l+c>o)return null;const h=-a*Ln.dot(yr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,o,a,l,c,h,d,f,m,g,v,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,f,m,g,v,p)}set(e,t,n,i,r,o,a,l,c,h,d,f,m,g,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),o=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,v=c*d;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,bh)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),In.crossVectors(n,Dt),In.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),In.crossVectors(n,Dt)),In.normalize(),fs.crossVectors(Dt,In),i[0]=In.x,i[4]=fs.x,i[8]=Dt.x,i[1]=In.y,i[5]=fs.y,i[9]=Dt.y,i[2]=In.z,i[6]=fs.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],u=n[14],_=n[3],b=n[7],M=n[11],O=n[15],A=i[0],E=i[4],R=i[8],w=i[12],S=i[1],P=i[5],G=i[9],F=i[13],X=i[2],Y=i[6],V=i[10],j=i[14],H=i[3],oe=i[7],fe=i[11],se=i[15];return r[0]=o*A+a*S+l*X+c*H,r[4]=o*E+a*P+l*Y+c*oe,r[8]=o*R+a*G+l*V+c*fe,r[12]=o*w+a*F+l*j+c*se,r[1]=h*A+d*S+f*X+m*H,r[5]=h*E+d*P+f*Y+m*oe,r[9]=h*R+d*G+f*V+m*fe,r[13]=h*w+d*F+f*j+m*se,r[2]=g*A+v*S+p*X+u*H,r[6]=g*E+v*P+p*Y+u*oe,r[10]=g*R+v*G+p*V+u*fe,r[14]=g*w+v*F+p*j+u*se,r[3]=_*A+b*S+M*X+O*H,r[7]=_*E+b*P+M*Y+O*oe,r[11]=_*R+b*G+M*V+O*fe,r[15]=_*w+b*F+M*j+O*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],u=e[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*m-n*l*m)+v*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],u=e[15],_=d*p*c-v*f*c+v*l*m-a*p*m-d*l*u+a*f*u,b=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,M=h*v*c-g*d*c+g*a*m-o*v*m-h*a*u+o*d*u,O=g*d*l-h*v*l-g*a*f+o*v*f+h*a*p-o*d*p,A=t*_+n*b+i*M+r*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=_*E,e[1]=(v*f*r-d*p*r-v*i*m+n*p*m+d*i*u-n*f*u)*E,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*u+n*l*u)*E,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*m-n*l*m)*E,e[4]=b*E,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*u+t*f*u)*E,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*u-t*l*u)*E,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*m+t*l*m)*E,e[8]=M*E,e[9]=(g*d*r-h*v*r-g*n*m+t*v*m+h*n*u-t*d*u)*E,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*u+t*a*u)*E,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*E,e[12]=O*E,e[13]=(h*v*i-g*d*i+g*n*f-t*v*f-h*n*p+t*d*p)*E,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*p-t*a*p)*E,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,v=o*h,p=o*d,u=a*d,_=l*c,b=l*h,M=l*d,O=n.x,A=n.y,E=n.z;return i[0]=(1-(v+u))*O,i[1]=(m+M)*O,i[2]=(g-b)*O,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(f+u))*A,i[6]=(p+_)*A,i[7]=0,i[8]=(g+b)*E,i[9]=(p-_)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=di.set(i[0],i[1],i[2]).length();const o=di.set(i[4],i[5],i[6]).length(),a=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const c=1/r,h=1/o,d=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(a===wn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*c,m=(n+i)*h;let g,v;if(a===wn)g=(o+r)*d,v=-2*d;else if(a===Zs)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Kt=new at,wh=new C(0,0,0),bh=new C(1,1,1),In=new C,fs=new C,Dt=new C,wa=new at,ba=new ns;class dn{constructor(e=0,t=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ba.setFromEuler(this),this.setFromQuaternion(ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Th=0;const Ta=new C,ui=new ns,vn=new at,ps=new C,Vi=new C,Eh=new C,Ah=new ns,Ea=new C(1,0,0),Aa=new C(0,1,0),Ca=new C(0,0,1),Pa={type:"added"},Ch={type:"removed"},fi={type:"childadded",child:null},xr={type:"childremoved",child:null};class mt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new C,t=new dn,n=new ns,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Oe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(Ca,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(Ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Vi,ps,this.up):vn.lookAt(ps,Vi,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(vn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pa),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),xr.child=e,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pa),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new C(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new C,_n=new C,Mr=new C,yn=new C,pi=new C,mi=new C,Ra=new C,Sr=new C,wr=new C,br=new C,Tr=new dt,Er=new dt,Ar=new dt;class Ot{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),_n.subVectors(n,t),Mr.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(_n),l=jt.dot(Mr),c=_n.dot(_n),h=_n.dot(Mr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Tr.setScalar(0),Er.setScalar(0),Ar.setScalar(0),Tr.fromBufferAttribute(e,t),Er.fromBufferAttribute(e,n),Ar.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Tr,r.x),o.addScaledVector(Er,r.y),o.addScaledVector(Ar,r.z),o}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),_n.subVectors(e,t),jt.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),jt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;pi.subVectors(i,n),mi.subVectors(r,n),Sr.subVectors(e,n);const l=pi.dot(Sr),c=mi.dot(Sr);if(l<=0&&c<=0)return t.copy(n);wr.subVectors(e,i);const h=pi.dot(wr),d=mi.dot(wr);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(pi,o);br.subVectors(e,r);const m=pi.dot(br),g=mi.dot(br);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(mi,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ra.subVectors(r,i),a=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(Ra,a);const u=1/(p+v+f);return o=v*u,a=f*u,t.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Cr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=uh(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cr(o,r,e+1/3),this.g=Cr(o,r,e),this.b=Cr(o,r,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return qe.fromWorkingColorSpace(bt.copy(this),e),Math.round(kt(bt.r*255,0,255))*65536+Math.round(kt(bt.g*255,0,255))*256+Math.round(kt(bt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,r=bt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Ht){qe.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(ms);const n=dr(Dn.h,ms.h,t),i=dr(Dn.s,ms.s,t),r=dr(Dn.l,ms.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ge;Ge.NAMES=jl;let Ph=0;class ii extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=zn(),this.name="",this.blending=Ei,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=$r,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends ii{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new C,gs=new Le;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ro,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ro&&(e.usage=this.usage),e}}class Jl extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ql extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rh=0;const Gt=new at,Pr=new mt,gi=new C,Ut=new Fi,Xi=new Fi,_t=new C;class Pt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yl(e)?Ql:Jl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ut.min,Xi.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Xi.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Xi.min),Ut.expandByPoint(Xi.max))}Ut.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_t.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(e,c),_t.add(gi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new C,l[R]=new C;const c=new C,h=new C,d=new C,f=new Le,m=new Le,g=new Le,v=new C,p=new C;function u(R,w,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(v),a[w].add(v),a[S].add(v),l[R].add(p),l[w].add(p),l[S].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,w=_.length;R<w;++R){const S=_[R],P=S.start,G=S.count;for(let F=P,X=P+G;F<X;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new C,M=new C,O=new C,A=new C;function E(R){O.fromBufferAttribute(i,R),A.copy(O);const w=a[R];b.copy(w),b.sub(O.multiplyScalar(O.dot(w))).normalize(),M.crossVectors(A,w);const P=M.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,P)}for(let R=0,w=_.length;R<w;++R){const S=_[R],P=S.start,G=S.count;for(let F=P,X=P+G;F<X;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Nt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new at,Xn=new Yo,vs=new or,La=new C,_s=new C,ys=new C,xs=new C,Rr=new C,Ms=new C,Ia=new C,Ss=new C;class Q extends mt{constructor(e=new Pt,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Rr.fromBufferAttribute(d,e),o?Ms.addScaledVector(Rr,h):Ms.addScaledVector(Rr.sub(t),h))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(vs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(vs,La)===null||Xn.origin.distanceToSquared(La)>(e.far-e.near)**2))&&(ka.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(ka),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=o[p.materialIndex],_=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,O=b;M<O;M+=3){const A=a.getX(M),E=a.getX(M+1),R=a.getX(M+2);i=ws(this,u,e,n,c,h,d,A,E,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const _=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);i=ws(this,o,e,n,c,h,d,_,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],u=o[p.materialIndex],_=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,O=b;M<O;M+=3){const A=M,E=M+1,R=M+2;i=ws(this,u,e,n,c,h,d,A,E,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){const _=p,b=p+1,M=p+2;i=ws(this,o,e,n,c,h,d,_,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function kh(s,e,t,n,i,r,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;Ss.copy(a),Ss.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:s}}function ws(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,_s),s.getVertexPosition(l,ys),s.getVertexPosition(c,xs);const h=kh(s,e,t,n,_s,ys,xs,Ia);if(h){const d=new C;Ot.getBarycoord(Ia,_s,ys,xs,d),i&&(h.uv=Ot.getInterpolatedAttribute(i,a,l,c,d,new Le)),r&&(h.uv1=Ot.getInterpolatedAttribute(r,a,l,c,d,new Le)),o&&(h.normal=Ot.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};Ot.getNormal(_s,ys,xs,f.normal),h.face=f,h.barycoord=d}return h}class pe extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function g(v,p,u,_,b,M,O,A,E,R,w){const S=M/E,P=O/R,G=M/2,F=O/2,X=A/2,Y=E+1,V=R+1;let j=0,H=0;const oe=new C;for(let fe=0;fe<V;fe++){const se=fe*P-F;for(let me=0;me<Y;me++){const Pe=me*S-G;oe[v]=Pe*_,oe[p]=se*b,oe[u]=X,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[p]=0,oe[u]=A>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(me/E),d.push(1-fe/R),j+=1}}for(let fe=0;fe<R;fe++)for(let se=0;se<E;se++){const me=f+se+Y*fe,Pe=f+se+Y*(fe+1),$=f+(se+1)+Y*(fe+1),ee=f+(se+1)+Y*fe;l.push(me,Pe,ee),l.push(Pe,$,ee),H+=6}a.addGroup(m,H,w),m+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=Ui(s[t]);for(const i in n)e[i]=n[i]}return e}function Lh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ec(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ih={clone:Ui,merge:At};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends ii{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let tc=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Un=new C,Da=new Le,Ua=new Le;class tn extends tc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Da,Ua),t.subVectors(Ua,Da)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,_i=1;class Oh extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(vi,_i,e,t);i.layers=this.layers,this.add(i);const r=new tn(vi,_i,e,t);r.layers=this.layers,this.add(r);const o=new tn(vi,_i,e,t);o.layers=this.layers,this.add(o);const a=new tn(vi,_i,e,t);a.layers=this.layers,this.add(a);const l=new tn(vi,_i,e,t);l.layers=this.layers,this.add(l);const c=new tn(vi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nc extends Ct{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pe(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Nn});r.uniforms.tEquirect.value=t;const o=new Q(i,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Xt),new Oh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const kr=new C,Fh=new C,zh=new Oe;class Mn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kr.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),i=this.coplanarPoint(kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new or,bs=new C;class Ko{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],v=i[10],p=i[11],u=i[12],_=i[13],b=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,p-m,M-u).normalize(),n[1].setComponents(l+r,f+c,p+m,M+u).normalize(),n[2].setComponents(l+o,f+h,p+g,M+_).normalize(),n[3].setComponents(l-o,f-h,p-g,M-_).normalize(),n[4].setComponents(l-a,f-d,p-v,M-b).normalize(),t===wn)n[5].setComponents(l+a,f+d,p+v,M+b).normalize();else if(t===Zs)n[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ic(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bh(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class xt extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){const _=u*f-o;for(let b=0;b<c;b++){const M=b*d-r;g.push(M,-_,0),v.push(0,0,1),p.push(b/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const b=_+c*u,M=_+c*(u+1),O=_+1+c*(u+1),A=_+1+c*u;m.push(b,M,A),m.push(M,O,A)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
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
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ed=`#ifdef USE_IRIDESCENCE
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
#endif`,td=`#ifdef USE_BUMPMAP
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ud=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
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
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kd=`#if defined( USE_POINTS_UV )
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
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nu=`#ifdef USE_MORPHTARGETS
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
#endif`,iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
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
#endif`,hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Tu=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
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
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
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
#endif`,Ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Du=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uu=`#ifdef USE_TRANSMISSION
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`#include <common>
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
}`,qu=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yu=`#define DISTANCE
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
}`,Zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`uniform float scale;
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
}`,Qu=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,tf=`uniform vec3 diffuse;
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
}`,nf=`#define LAMBERT
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
}`,sf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rf=`#define MATCAP
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
}`,of=`#define MATCAP
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
}`,af=`#define NORMAL
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
}`,lf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cf=`#define PHONG
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
}`,hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,df=`#define STANDARD
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
}`,uf=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ff=`#define TOON
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
}`,pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,mf=`uniform float size;
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
}`,gf=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,_f=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yf=`uniform float rotation;
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
}`,xf=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Gh,alphahash_pars_fragment:Hh,alphamap_fragment:Wh,alphamap_pars_fragment:Vh,alphatest_fragment:Xh,alphatest_pars_fragment:$h,aomap_fragment:qh,aomap_pars_fragment:Yh,batching_pars_vertex:Zh,batching_vertex:Kh,begin_vertex:jh,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:ed,bumpmap_pars_fragment:td,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:ld,color_vertex:cd,common:hd,cube_uv_reflection_fragment:dd,defaultnormal_vertex:ud,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:vd,colorspace_pars_fragment:_d,envmap_fragment:yd,envmap_common_pars_fragment:xd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Id,envmap_vertex:wd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:Ed,fog_pars_fragment:Ad,gradientmap_pars_fragment:Cd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:kd,lights_pars_begin:Ld,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Od,lights_phong_pars_fragment:Nd,lights_physical_fragment:Fd,lights_physical_pars_fragment:zd,lights_fragment_begin:Bd,lights_fragment_maps:Gd,lights_fragment_end:Hd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:$d,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Kd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:eu,morphnormal_vertex:tu,morphtarget_pars_vertex:nu,morphtarget_vertex:iu,normal_fragment_begin:su,normal_fragment_maps:ru,normal_pars_fragment:ou,normal_pars_vertex:au,normal_vertex:lu,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:hu,clearcoat_normal_fragment_maps:du,clearcoat_pars_fragment:uu,iridescence_pars_fragment:fu,opaque_fragment:pu,packing:mu,premultiplied_alpha_fragment:gu,project_vertex:vu,dithering_fragment:_u,dithering_pars_fragment:yu,roughnessmap_fragment:xu,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:wu,shadowmap_vertex:bu,shadowmask_pars_fragment:Tu,skinbase_vertex:Eu,skinning_pars_vertex:Au,skinning_vertex:Cu,skinnormal_vertex:Pu,specularmap_fragment:Ru,specularmap_pars_fragment:ku,tonemapping_fragment:Lu,tonemapping_pars_fragment:Iu,transmission_fragment:Du,transmission_pars_fragment:Uu,uv_pars_fragment:Ou,uv_pars_vertex:Nu,uv_vertex:Fu,worldpos_vertex:zu,background_vert:Bu,background_frag:Gu,backgroundCube_vert:Hu,backgroundCube_frag:Wu,cube_vert:Vu,cube_frag:Xu,depth_vert:$u,depth_frag:qu,distanceRGBA_vert:Yu,distanceRGBA_frag:Zu,equirect_vert:Ku,equirect_frag:ju,linedashed_vert:Ju,linedashed_frag:Qu,meshbasic_vert:ef,meshbasic_frag:tf,meshlambert_vert:nf,meshlambert_frag:sf,meshmatcap_vert:rf,meshmatcap_frag:of,meshnormal_vert:af,meshnormal_frag:lf,meshphong_vert:cf,meshphong_frag:hf,meshphysical_vert:df,meshphysical_frag:uf,meshtoon_vert:ff,meshtoon_frag:pf,points_vert:mf,points_frag:gf,shadow_vert:vf,shadow_frag:_f,sprite_vert:yf,sprite_frag:xf},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ln={basic:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:At([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:At([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:At([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:At([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:At([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:At([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:At([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:At([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ln.physical={uniforms:At([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ts={r:0,b:0,g:0},qn=new dn,Mf=new at;function Sf(s,e,t,n,i,r,o){const a=new Ge(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function v(_){let b=!1;const M=g(_);M===null?u(a,l):M&&M.isColor&&(u(M,1),b=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===sr)?(h===void 0&&(h=new Q(new pe(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ui(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qn.copy(b.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mf.makeRotationFromEuler(qn)),h.material.toneMapped=qe.getTransfer(M.colorSpace)!==Qe,(d!==M||f!==M.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Q(new xt(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ui(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=qe.getTransfer(M.colorSpace)!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,b){_.getRGB(Ts,ec(s)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:v,addToRenderList:p}}function wf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,P,G,F,X){let Y=!1;const V=d(F,G,P);r!==V&&(r=V,c(r.object)),Y=m(S,F,G,X),Y&&g(S,F,G,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(S,P,G,F),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,P,G){const F=G.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let Y=X[P.id];Y===void 0&&(Y={},X[P.id]=Y);let V=Y[F];return V===void 0&&(V=f(l()),Y[F]=V),V}function f(S){const P=[],G=[],F=[];for(let X=0;X<t;X++)P[X]=0,G[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:F,object:S,attributes:{},index:null}}function m(S,P,G,F){const X=r.attributes,Y=P.attributes;let V=0;const j=G.getAttributes();for(const H in j)if(j[H].location>=0){const fe=X[H];let se=Y[H];if(se===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),fe===void 0||fe.attribute!==se||se&&fe.data!==se.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(S,P,G,F){const X={},Y=P.attributes;let V=0;const j=G.getAttributes();for(const H in j)if(j[H].location>=0){let fe=Y[H];fe===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const se={};se.attribute=fe,fe&&fe.data&&(se.data=fe.data),X[H]=se,V++}r.attributes=X,r.attributesNum=V,r.index=F}function v(){const S=r.newAttributes;for(let P=0,G=S.length;P<G;P++)S[P]=0}function p(S){u(S,0)}function u(S,P){const G=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;G[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),X[S]!==P&&(s.vertexAttribDivisor(S,P),X[S]=P)}function _(){const S=r.newAttributes,P=r.enabledAttributes;for(let G=0,F=P.length;G<F;G++)P[G]!==S[G]&&(s.disableVertexAttribArray(G),P[G]=0)}function b(S,P,G,F,X,Y,V){V===!0?s.vertexAttribIPointer(S,P,G,X,Y):s.vertexAttribPointer(S,P,G,F,X,Y)}function M(S,P,G,F){v();const X=F.attributes,Y=G.getAttributes(),V=P.defaultAttributeValues;for(const j in Y){const H=Y[j];if(H.location>=0){let oe=X[j];if(oe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const fe=oe.normalized,se=oe.itemSize,me=e.get(oe);if(me===void 0)continue;const Pe=me.buffer,$=me.type,ee=me.bytesPerElement,Se=$===s.INT||$===s.UNSIGNED_INT||oe.gpuType===Ho;if(oe.isInterleavedBufferAttribute){const le=oe.data,Ce=le.stride,Ie=oe.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)u(H.location+Be,le.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Be=0;Be<H.locationSize;Be++)b(H.location+Be,se/H.locationSize,$,fe,Ce*ee,(Ie+se/H.locationSize*Be)*ee,Se)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)u(H.location+le,oe.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<H.locationSize;le++)p(H.location+le);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let le=0;le<H.locationSize;le++)b(H.location+le,se/H.locationSize,$,fe,se*ee,se/H.locationSize*le*ee,Se)}}else if(V!==void 0){const fe=V[j];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(H.location,fe);break;case 3:s.vertexAttrib3fv(H.location,fe);break;case 4:s.vertexAttrib4fv(H.location,fe);break;default:s.vertexAttrib1fv(H.location,fe)}}}}_()}function O(){R();for(const S in n){const P=n[S];for(const G in P){const F=P[G];for(const X in F)h(F[X].object),delete F[X];delete P[G]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const G in P){const F=P[G];for(const X in F)h(F[X].object),delete F[X];delete P[G]}delete n[S.id]}function E(S){for(const P in n){const G=n[P];if(G[S.id]===void 0)continue;const F=G[S.id];for(const X in F)h(F[X].object),delete F[X];delete G[S.id]}}function R(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function bf(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,n,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==sn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Sn&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:O,maxSamples:A}}function Ef(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Mn,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const _=r?0:n,b=_*4;let M=u.clippingState||null;l.value=M,M=h(g,f,b,m);for(let O=0;O!==b;++O)M[O]=t[O];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const u=m+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,M=m;b!==v;++b,M+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Af(s){let e=new WeakMap;function t(o,a){return a===eo?o.mapping=ki:a===to&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===eo||a===to)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nh(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jo extends tc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ti=4,Oa=[.125,.215,.35,.446,.526,.582],jn=20,Lr=new jo,Na=new Ge;let Ir=null,Dr=0,Ur=0,Or=!1;const Zn=(1+Math.sqrt(5))/2,yi=1/Zn,Fa=[new C(-Zn,yi,0),new C(Zn,yi,0),new C(-yi,0,Zn),new C(yi,0,Zn),new C(0,Zn,-yi),new C(0,Zn,yi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Dr,Ur),this._renderer.xr.enabled=Or,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ts,format:sn,colorSpace:Oi,depthBuffer:!1},i=Ba(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ba(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(r)),this._blurMaterial=Pf(r,e,t)}return i}_compileMaterial(e){const t=new Q(this._lodPlanes[0],e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,i){const a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Na),h.toneMapping=Fn,h.autoClear=!1;const m=new Pi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Q(new pe,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Na),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const b=this._cubeSize;Es(i,_*b,u>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ki||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fa[(i-r-1)%Fa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Q(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):jn;p>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const u=[];let _=0;for(let E=0;E<jn;++E){const R=E/v,w=Math.exp(-R*R/2);u.push(w),E===0?_+=w:E<p&&(_+=2*w)}for(let E=0;E<u.length;E++)u[E]=u[E]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[i],O=3*M*(i>b-Ti?i-b+Ti:0),A=4*(this._cubeSize-M);Es(t,O,A,3*M,2*M),l.setRenderTarget(t),l.render(d,Lr)}}function Cf(s){const e=[],t=[],n=[];let i=s;const r=s-Ti+1+Oa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ti?l=Oa[o-s+Ti-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,u=1,_=new Float32Array(v*g*m),b=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let A=0;A<m;A++){const E=A%3*2/3-1,R=A>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(w,v*g*A),b.set(f,p*g*A);const S=[A,A,A,A,A,A];M.set(S,u*g*A)}const O=new Pt;O.setAttribute("position",new Nt(_,v)),O.setAttribute("uv",new Nt(b,p)),O.setAttribute("faceIndex",new Nt(M,u)),e.push(O),i>Ti&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ba(s,e,t){const n=new ti(s,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pf(s,e,t){const n=new Float32Array(jn),i=new C(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ga(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ha(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function Rf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===eo||l===to,h=l===ki||l===Li;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new za(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new za(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lf(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,u=v.length;p<u;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let b=0,M=_.length;b<M;b+=3){const O=_[b+0],A=_[b+1],E=_[b+2];f.push(O,A,A,E,E,O)}}else if(g!==void 0){const _=g.array;v=g.version;for(let b=0,M=_.length/3-1;b<M;b+=3){const O=b+0,A=b+1,E=b+2;f.push(O,A,A,E,E,O)}}else return;const p=new(Yl(f)?Ql:Jl)(f,1);p.version=v;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function If(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){s.drawElements(n,m,r,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,f*o,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,n,1)}function d(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=m[_]*v[_];t.update(u,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Df(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uf(s,e,t){const n=new WeakMap,i=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let O=a.attributes.position.count*M,A=1;O>e.maxTextureSize&&(A=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const E=new Float32Array(O*A*4*d),R=new Kl(E,O,A,d);R.type=Sn,R.needsUpdate=!0;const w=M*4;for(let P=0;P<d;P++){const G=u[P],F=_[P],X=b[P],Y=O*A*4*P;for(let V=0;V<G.count;V++){const j=V*w;g===!0&&(i.fromBufferAttribute(G,V),E[Y+j+0]=i.x,E[Y+j+1]=i.y,E[Y+j+2]=i.z,E[Y+j+3]=0),v===!0&&(i.fromBufferAttribute(F,V),E[Y+j+4]=i.x,E[Y+j+5]=i.y,E[Y+j+6]=i.z,E[Y+j+7]=0),p===!0&&(i.fromBufferAttribute(X,V),E[Y+j+8]=i.x,E[Y+j+9]=i.y,E[Y+j+10]=i.z,E[Y+j+11]=X.itemSize===4?i.w:1)}}f={count:d,texture:R,size:new Le(O,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Of(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class sc extends Ct{constructor(e,t,n,i,r,o,a,l,c,h=Ai){if(h!==Ai&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ei),n===void 0&&h===Di&&(n=Ii),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rc=new Ct,Wa=new sc(1,1),oc=new Kl,ac=new Mh,lc=new nc,Va=[],Xa=[],$a=new Float32Array(16),qa=new Float32Array(9),Ya=new Float32Array(4);function zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Va[i];if(r===void 0&&(r=new Float32Array(i),Va[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ar(s,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Nf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function Gf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Ya.set(n),s.uniformMatrix2fv(this.addr,!1,Ya),vt(t,n)}}function Hf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;qa.set(n),s.uniformMatrix3fv(this.addr,!1,qa),vt(t,n)}}function Wf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;$a.set(n),s.uniformMatrix4fv(this.addr,!1,$a),vt(t,n)}}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function Jf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wa.compareFunction=ql,r=Wa):r=rc,t.setTexture2D(e||r,i)}function Qf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ac,i)}function ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||lc,i)}function tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||oc,i)}function np(s){switch(s){case 5126:return Nf;case 35664:return Ff;case 35665:return zf;case 35666:return Bf;case 35674:return Gf;case 35675:return Hf;case 35676:return Wf;case 5124:case 35670:return Vf;case 35667:case 35671:return Xf;case 35668:case 35672:return $f;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return Zf;case 36295:return Kf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}function ip(s,e){s.uniform1fv(this.addr,e)}function sp(s,e){const t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function rp(s,e){const t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function op(s,e){const t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function ap(s,e){const t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function lp(s,e){const t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function cp(s,e){const t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hp(s,e){s.uniform1iv(this.addr,e)}function dp(s,e){s.uniform2iv(this.addr,e)}function up(s,e){s.uniform3iv(this.addr,e)}function fp(s,e){s.uniform4iv(this.addr,e)}function pp(s,e){s.uniform1uiv(this.addr,e)}function mp(s,e){s.uniform2uiv(this.addr,e)}function gp(s,e){s.uniform3uiv(this.addr,e)}function vp(s,e){s.uniform4uiv(this.addr,e)}function _p(s,e,t){const n=this.cache,i=e.length,r=ar(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||rc,r[o])}function yp(s,e,t){const n=this.cache,i=e.length,r=ar(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ac,r[o])}function xp(s,e,t){const n=this.cache,i=e.length,r=ar(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||lc,r[o])}function Mp(s,e,t){const n=this.cache,i=e.length,r=ar(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||oc,r[o])}function Sp(s){switch(s){case 5126:return ip;case 35664:return sp;case 35665:return rp;case 35666:return op;case 35674:return ap;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return hp;case 35667:case 35671:return dp;case 35668:case 35672:return up;case 35669:case 35673:return fp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Mp}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=np(t.type)}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function Za(s,e){s.seq.push(e),s.map[e.id]=e}function Ep(s,e,t){const n=s.name,i=n.length;for(Nr.lastIndex=0;;){const r=Nr.exec(n),o=Nr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Za(t,c===void 0?new wp(a,s,e):new bp(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Tp(a),Za(t,d)),t=d}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ep(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ka(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ap=37297;let Cp=0;function Pp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ja=new Oe;function Rp(s){qe._getMatrix(ja,qe.workingColorSpace,s);const e=`mat3( ${ja.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case rr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ja(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Pp(s.getShaderSource(e),o)}else return i}function kp(s,e){const t=Rp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lp(s,e){let t;switch(e){case Zc:t="Linear";break;case Kc:t="Reinhard";break;case jc:t="Cineon";break;case Dl:t="ACESFilmic";break;case Qc:t="AgX";break;case eh:t="Neutral";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new C;function Ip(){qe.getLuminanceCoefficients(As);const s=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Up(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Op(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ji(s){return s!==""}function Qa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(s){return s.replace(Np,zp)}const Fp=new Map;function zp(s,e){let t=Fe[e];if(t===void 0){const n=Fp.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(s){return s.replace(Bp,Gp)}function Gp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ll?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Li:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case qc:e="ENVMAP_BLENDING_MIX";break;case Yc:e="ENVMAP_BLENDING_ADD";break}return e}function $p(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qp(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hp(t),c=Wp(t),h=Vp(t),d=Xp(t),f=$p(t),m=Dp(t),g=Up(r),v=i.createProgram();let p,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),u.length>0&&(u+=`
`)):(p=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),u=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,kp("linearToOutputTexel",t.outputColorSpace),Ip(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),o=Lo(o),o=Qa(o,t),o=el(o,t),a=Lo(a),a=Qa(a,t),a=el(a,t),o=tl(o),a=tl(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=_+p+o,M=_+u+a,O=Ka(i,i.VERTEX_SHADER,b),A=Ka(i,i.FRAGMENT_SHADER,M);i.attachShader(v,O),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(P){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(O).trim(),X=i.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,O,A);else{const j=Ja(i,O,"vertex"),H=Ja(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+j+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||X==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:G,vertexShader:{log:F,prefix:p},fragmentShader:{log:X,prefix:u}})}i.deleteShader(O),i.deleteShader(A),R=new $s(i,v),w=Op(i,v)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Ap)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=A,this}let Yp=0;class Zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kp(e),t.set(e,n)),n}}class Kp{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}}function jp(s,e,t,n,i,r,o){const a=new Zo,l=new Zp,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,S,P,G,F){const X=G.fog,Y=F.geometry,V=w.isMeshStandardMaterial?G.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),H=j&&j.mapping===sr?j.image.height:null,oe=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=fe!==void 0?fe.length:0;let me=0;Y.morphAttributes.position!==void 0&&(me=1),Y.morphAttributes.normal!==void 0&&(me=2),Y.morphAttributes.color!==void 0&&(me=3);let Pe,$,ee,Se;if(oe){const Je=ln[oe];Pe=Je.vertexShader,$=Je.fragmentShader}else Pe=w.vertexShader,$=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),Se=l.getFragmentShaderID(w);const le=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,lt=!!w.map,Xe=!!w.matcap,ut=!!j,D=!!w.aoMap,zt=!!w.lightMap,He=!!w.bumpMap,We=!!w.normalMap,Ee=!!w.displacementMap,st=!!w.emissiveMap,Te=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,N=w.clearcoat>0,Z=w.dispersion>0,J=w.iridescence>0,q=w.sheen>0,we=w.transmission>0,ce=y&&!!w.anisotropyMap,ge=N&&!!w.clearcoatMap,$e=N&&!!w.clearcoatNormalMap,te=N&&!!w.clearcoatRoughnessMap,ve=J&&!!w.iridescenceMap,Ae=J&&!!w.iridescenceThicknessMap,Re=q&&!!w.sheenColorMap,_e=q&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Ne=!!w.specularColorMap,nt=!!w.specularIntensityMap,k=we&&!!w.transmissionMap,ae=we&&!!w.thicknessMap,W=!!w.gradientMap,K=!!w.alphaMap,ue=w.alphaTest>0,he=!!w.alphaHash,De=!!w.extensions;let ct=Fn;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ct=s.toneMapping);const St={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:Pe,fragmentShader:$,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Oi,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:Xe,envMap:ut,envMapMode:ut&&j.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:zt,bumpMap:He,normalMap:We,displacementMap:f&&Ee,emissiveMap:st,normalMapObjectSpace:We&&w.normalMapType===sh,normalMapTangentSpace:We&&w.normalMapType===$l,metalnessMap:Te,roughnessMap:T,anisotropy:y,anisotropyMap:ce,clearcoat:N,clearcoatMap:ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:te,dispersion:Z,iridescence:J,iridescenceMap:ve,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Re,sheenRoughnessMap:_e,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:nt,transmission:we,transmissionMap:k,thicknessMap:ae,gradientMap:W,opaque:w.transparent===!1&&w.blending===Ei&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:ue,alphaHash:he,combine:w.combine,mapUv:lt&&v(w.map.channel),aoMapUv:D&&v(w.aoMap.channel),lightMapUv:zt&&v(w.lightMap.channel),bumpMapUv:He&&v(w.bumpMap.channel),normalMapUv:We&&v(w.normalMap.channel),displacementMapUv:Ee&&v(w.displacementMap.channel),emissiveMapUv:st&&v(w.emissiveMap.channel),metalnessMapUv:Te&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:ce&&v(w.anisotropyMap.channel),clearcoatMapUv:ge&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(w.sheenRoughnessMap.channel),specularMapUv:Ve&&v(w.specularMap.channel),specularColorMapUv:Ne&&v(w.specularColorMap.channel),specularIntensityMapUv:nt&&v(w.specularIntensityMap.channel),transmissionMapUv:k&&v(w.transmissionMap.channel),thicknessMapUv:ae&&v(w.thicknessMap.channel),alphaMapUv:K&&v(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(We||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(lt||K),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&qe.getTransfer(w.map.colorSpace)===Qe,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&qe.getTransfer(w.emissiveMap.colorSpace)===Qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===nn,flipSided:w.side===Lt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(_(S,w),b(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function b(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const S=g[w.type];let P;if(S){const G=ln[S];P=Ih.clone(G.uniforms)}else P=w.uniforms;return P}function O(w,S){let P;for(let G=0,F=h.length;G<F;G++){const X=h[G];if(X.cacheKey===S){P=X,++P.usedTimes;break}}return P===void 0&&(P=new qp(s,S,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:O,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:R}}function Jp(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Qp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function il(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,g,v,p){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function a(d,f,m,g,v,p){const u=o(d,f,m,g,v,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function l(d,f,m,g,v,p){const u=o(d,f,m,g,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Qp),n.length>1&&n.sort(f||il),i.length>1&&i.sort(f||il)}function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function em(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new sl,s.set(n,[o])):i>=r.length?(o=new sl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function tm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ge};break;case"SpotLight":t={position:new C,direction:new C,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function nm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let im=0;function sm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rm(s){const e=new tm,t=nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new at,o=new at;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,v=0,p=0,u=0,_=0,b=0,M=0,O=0,A=0,E=0;c.sort(sm);for(let w=0,S=c.length;w<S;w++){const P=c[w],G=P.color,F=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*F,d+=G.g*F,f+=G.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);E++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=P.shadow.matrix,_++}n.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(G).multiplyScalar(F),V.distance=X,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[v]=V;const j=P.shadow;if(P.map&&(n.spotLightMap[O]=P.map,O++,j.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=j.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=Y,M++}v++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(G).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=V,p++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[u]=V,u++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==b||R.numSpotShadows!==M||R.numSpotMaps!==O||R.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+O-A,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=b,R.numSpotShadows=M,R.numSpotMaps=O,R.numLightProbes=E,n.version=im++)}function l(c,h){let d=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const b=c[u];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function rl(s){const e=new rm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function om(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new rl(s),e.set(i,[a])):r>=o.length?(a=new rl(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class am extends ii{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lm extends ii{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dm(s,e,t){let n=new Ko;const i=new Le,r=new Le,o=new dt,a=new am({depthPacking:ih}),l=new lm,c={},h=t.maxTextureSize,d={[Bn]:Lt,[Lt]:Bn,[nn]:nn},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:cm,fragmentShader:hm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let u=this.type;this.render=function(A,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Nn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=u!==xn&&this.type===xn,X=u===xn&&this.type!==xn;for(let Y=0,V=A.length;Y<V;Y++){const j=A[Y],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const oe=H.getFrameExtents();if(i.multiply(oe),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||F===!0||X===!0){const se=this.type!==xn?{minFilter:on,magFilter:on}:{};H.map!==null&&H.map.dispose(),H.map=new ti(i.x,i.y,se),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const fe=H.getViewportCount();for(let se=0;se<fe;se++){const me=H.getViewport(se);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),G.viewport(o),H.updateMatrices(j,se),n=H.getFrustum(),M(E,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===xn&&_(H,R),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(w,S,P)};function _(A,E){const R=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,R,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,R,m,v,null)}function b(A,E,R,w){let S=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=S.uuid,F=E.uuid;let X=c[G];X===void 0&&(X={},c[G]=X);let Y=X[F];Y===void 0&&(Y=S.clone(),X[F]=Y,E.addEventListener("dispose",O)),S=Y}if(S.visible=E.visible,S.wireframe=E.wireframe,w===xn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=s.properties.get(S);G.light=R}return S}function M(A,E,R,w,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=e.update(A),X=A.material;if(Array.isArray(X)){const Y=F.groups;for(let V=0,j=Y.length;V<j;V++){const H=Y[V],oe=X[H.materialIndex];if(oe&&oe.visible){const fe=b(A,oe,w,S);A.onBeforeShadow(s,A,E,R,F,fe,H),s.renderBufferDirect(R,null,F,fe,A,H),A.onAfterShadow(s,A,E,R,F,fe,H)}}}else if(X.visible){const Y=b(A,X,w,S);A.onBeforeShadow(s,A,E,R,F,Y,null),s.renderBufferDirect(R,null,F,Y,A,null),A.onAfterShadow(s,A,E,R,F,Y,null)}}const G=A.children;for(let F=0,X=G.length;F<X;F++)M(G[F],E,R,w,S)}function O(A){A.target.removeEventListener("dispose",O);for(const R in c){const w=c[R],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const um={[qr]:Yr,[Zr]:Jr,[Kr]:Qr,[Ri]:jr,[Yr]:qr,[Jr]:Zr,[Qr]:Kr,[jr]:Ri};function fm(s,e){function t(){let k=!1;const ae=new dt;let W=null;const K=new dt(0,0,0,0);return{setMask:function(ue){W!==ue&&!k&&(s.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){k=ue},setClear:function(ue,he,De,ct,St){St===!0&&(ue*=ct,he*=ct,De*=ct),ae.set(ue,he,De,ct),K.equals(ae)===!1&&(s.clearColor(ue,he,De,ct),K.copy(ae))},reset:function(){k=!1,W=null,K.set(-1,0,0,0)}}}function n(){let k=!1,ae=!1,W=null,K=null,ue=null;return{setReversed:function(he){if(ae!==he){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ct=ue;ue=null,this.setClear(ct)}ae=he},getReversed:function(){return ae},setTest:function(he){he?le(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(he){W!==he&&!k&&(s.depthMask(he),W=he)},setFunc:function(he){if(ae&&(he=um[he]),K!==he){switch(he){case qr:s.depthFunc(s.NEVER);break;case Yr:s.depthFunc(s.ALWAYS);break;case Zr:s.depthFunc(s.LESS);break;case Ri:s.depthFunc(s.LEQUAL);break;case Kr:s.depthFunc(s.EQUAL);break;case jr:s.depthFunc(s.GEQUAL);break;case Jr:s.depthFunc(s.GREATER);break;case Qr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=he}},setLocked:function(he){k=he},setClear:function(he){ue!==he&&(ae&&(he=1-he),s.clearDepth(he),ue=he)},reset:function(){k=!1,W=null,K=null,ue=null,ae=!1}}}function i(){let k=!1,ae=null,W=null,K=null,ue=null,he=null,De=null,ct=null,St=null;return{setTest:function(Je){k||(Je?le(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!k&&(s.stencilMask(Je),ae=Je)},setFunc:function(Je,qt,fn){(W!==Je||K!==qt||ue!==fn)&&(s.stencilFunc(Je,qt,fn),W=Je,K=qt,ue=fn)},setOp:function(Je,qt,fn){(he!==Je||De!==qt||ct!==fn)&&(s.stencilOp(Je,qt,fn),he=Je,De=qt,ct=fn)},setLocked:function(Je){k=Je},setClear:function(Je){St!==Je&&(s.clearStencil(Je),St=Je)},reset:function(){k=!1,ae=null,W=null,K=null,ue=null,he=null,De=null,ct=null,St=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,_=null,b=null,M=null,O=null,A=null,E=new Ge(0,0,0),R=0,w=!1,S=null,P=null,G=null,F=null,X=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=j>=2);let oe=null,fe={};const se=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),Pe=new dt().fromArray(se),$=new dt().fromArray(me);function ee(k,ae,W,K){const ue=new Uint8Array(4),he=s.createTexture();s.bindTexture(k,he),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<W;De++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(ae+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return he}const Se={};Se[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(s.DEPTH_TEST),o.setFunc(Ri),He(!1),We(ha),le(s.CULL_FACE),D(Nn);function le(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function Ce(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Ie(k,ae){return d[k]!==ae?(s.bindFramebuffer(k,ae),d[k]=ae,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ae),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function Be(k,ae){let W=m,K=!1;if(k){W=f.get(ae),W===void 0&&(W=[],f.set(ae,W));const ue=k.textures;if(W.length!==ue.length||W[0]!==s.COLOR_ATTACHMENT0){for(let he=0,De=ue.length;he<De;he++)W[he]=s.COLOR_ATTACHMENT0+he;W.length=ue.length,K=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,K=!0);K&&s.drawBuffers(W)}function lt(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const Xe={[Kn]:s.FUNC_ADD,[Rc]:s.FUNC_SUBTRACT,[kc]:s.FUNC_REVERSE_SUBTRACT};Xe[Lc]=s.MIN,Xe[Ic]=s.MAX;const ut={[Dc]:s.ZERO,[Uc]:s.ONE,[Oc]:s.SRC_COLOR,[Xr]:s.SRC_ALPHA,[Hc]:s.SRC_ALPHA_SATURATE,[Bc]:s.DST_COLOR,[Fc]:s.DST_ALPHA,[Nc]:s.ONE_MINUS_SRC_COLOR,[$r]:s.ONE_MINUS_SRC_ALPHA,[Gc]:s.ONE_MINUS_DST_COLOR,[zc]:s.ONE_MINUS_DST_ALPHA,[Wc]:s.CONSTANT_COLOR,[Vc]:s.ONE_MINUS_CONSTANT_COLOR,[Xc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function D(k,ae,W,K,ue,he,De,ct,St,Je){if(k===Nn){v===!0&&(Ce(s.BLEND),v=!1);return}if(v===!1&&(le(s.BLEND),v=!0),k!==Pc){if(k!==p||Je!==w){if((u!==Kn||M!==Kn)&&(s.blendEquation(s.FUNC_ADD),u=Kn,M=Kn),Je)switch(k){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case da:s.blendFunc(s.ONE,s.ONE);break;case ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case da:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,b=null,O=null,A=null,E.set(0,0,0),R=0,p=k,w=Je}return}ue=ue||ae,he=he||W,De=De||K,(ae!==u||ue!==M)&&(s.blendEquationSeparate(Xe[ae],Xe[ue]),u=ae,M=ue),(W!==_||K!==b||he!==O||De!==A)&&(s.blendFuncSeparate(ut[W],ut[K],ut[he],ut[De]),_=W,b=K,O=he,A=De),(ct.equals(E)===!1||St!==R)&&(s.blendColor(ct.r,ct.g,ct.b,St),E.copy(ct),R=St),p=k,w=!1}function zt(k,ae){k.side===nn?Ce(s.CULL_FACE):le(s.CULL_FACE);let W=k.side===Lt;ae&&(W=!W),He(W),k.blending===Ei&&k.transparent===!1?D(Nn):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const K=k.stencilWrite;a.setTest(K),K&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),st(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(k){S!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),S=k)}function We(k){k!==Ac?(le(s.CULL_FACE),k!==P&&(k===ha?s.cullFace(s.BACK):k===Cc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),P=k}function Ee(k){k!==G&&(V&&s.lineWidth(k),G=k)}function st(k,ae,W){k?(le(s.POLYGON_OFFSET_FILL),(F!==ae||X!==W)&&(s.polygonOffset(ae,W),F=ae,X=W)):Ce(s.POLYGON_OFFSET_FILL)}function Te(k){k?le(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function T(k){k===void 0&&(k=s.TEXTURE0+Y-1),oe!==k&&(s.activeTexture(k),oe=k)}function y(k,ae,W){W===void 0&&(oe===null?W=s.TEXTURE0+Y-1:W=oe);let K=fe[W];K===void 0&&(K={type:void 0,texture:void 0},fe[W]=K),(K.type!==k||K.texture!==ae)&&(oe!==W&&(s.activeTexture(W),oe=W),s.bindTexture(k,ae||Se[k]),K.type=k,K.texture=ae)}function N(){const k=fe[oe];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(k){Pe.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Pe.copy(k))}function _e(k){$.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),$.copy(k))}function Ve(k,ae){let W=c.get(ae);W===void 0&&(W=new WeakMap,c.set(ae,W));let K=W.get(k);K===void 0&&(K=s.getUniformBlockIndex(ae,k.name),W.set(k,K))}function Ne(k,ae){const K=c.get(ae).get(k);l.get(ae)!==K&&(s.uniformBlockBinding(ae,K,k.__bindingPointIndex),l.set(ae,K))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,fe={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,u=null,_=null,b=null,M=null,O=null,A=null,E=new Ge(0,0,0),R=0,w=!1,S=null,P=null,G=null,F=null,X=null,Pe.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Ce,bindFramebuffer:Ie,drawBuffers:Be,useProgram:lt,setBlending:D,setMaterial:zt,setFlipSided:He,setCullFace:We,setLineWidth:Ee,setPolygonOffset:st,setScissorTest:Te,activeTexture:T,bindTexture:y,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ve,texImage3D:Ae,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:$e,texStorage3D:te,texSubImage2D:q,texSubImage3D:we,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Re,viewport:_e,reset:nt}}function ol(s,e,t,n){const i=pm(n);switch(t){case zl:return s*e;case Gl:return s*e;case Hl:return s*e*2;case Wl:return s*e/i.components*i.byteLength;case Xo:return s*e/i.components*i.byteLength;case Vl:return s*e*2/i.components*i.byteLength;case $o:return s*e*2/i.components*i.byteLength;case Bl:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case qo:return s*e*4/i.components*i.byteLength;case Bs:case Gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Ws:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case so:case oo:return Math.max(s,16)*Math.max(e,8)/4;case io:case ro:return Math.max(s,8)*Math.max(e,8)/2;case ao:case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vs:case To:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xl:case Ao:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Co:case Po:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pm(s){switch(s){case Tn:case Ol:return{byteLength:1,components:1};case es:case Nl:case ts:return{byteLength:2,components:1};case Wo:case Vo:return{byteLength:2,components:4};case ei:case Ho:case Sn:return{byteLength:4,components:1};case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function mm(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return m?new OffscreenCanvas(T,y):Ks("canvas")}function v(T,y,N){let Z=1;const J=Te(T);if((J.width>N||J.height>N)&&(Z=N/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Z*J.width),we=Math.floor(Z*J.height);d===void 0&&(d=g(q,we));const ce=y?g(q,we):d;return ce.width=q,ce.height=we,ce.getContext("2d").drawImage(T,0,0,q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+we+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){s.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,y,N,Z,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=y;if(y===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),y===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),y===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),y===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),y===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),y===s.RGBA){const we=J?rr:qe.getTransfer(Z);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=we===Qe?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(T,y){let N;return T?y===null||y===ei||y===Ii?N=s.DEPTH24_STENCIL8:y===Sn?N=s.DEPTH32F_STENCIL8:y===es&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Ii?N=s.DEPTH_COMPONENT24:y===Sn?N=s.DEPTH_COMPONENT32F:y===es&&(N=s.DEPTH_COMPONENT16),N}function O(T,y){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==Xt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&h.delete(y)}function E(T){const y=T.target;y.removeEventListener("dispose",E),S(y)}function R(T){const y=n.get(T);if(y.__webglInit===void 0)return;const N=T.source,Z=f.get(N);if(Z){const J=Z[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(Z).length===0&&f.delete(N)}n.remove(T)}function w(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const N=T.source,Z=f.get(N);delete Z[y.__cacheKey],o.memory.textures--}function S(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let J=0;J<y.__webglFramebuffer[Z].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[Z][J]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=T.textures;for(let Z=0,J=N.length;Z<J;Z++){const q=n.get(N[Z]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(N[Z])}n.remove(T)}let P=0;function G(){P=0}function F(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function X(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const N=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,T,y);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+y)}function V(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){$(N,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+y)}function j(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){$(N,T,y);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+y)}function H(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){ee(N,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+y)}const oe={[Qi]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[no]:s.MIRRORED_REPEAT},fe={[on]:s.NEAREST,[th]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[Xt]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},se={[rh]:s.NEVER,[dh]:s.ALWAYS,[oh]:s.LESS,[ql]:s.LEQUAL,[ah]:s.EQUAL,[hh]:s.GEQUAL,[lh]:s.GREATER,[ch]:s.NOTEQUAL};function me(T,y){if(y.type===Sn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Xt||y.magFilter===hr||y.magFilter===as||y.magFilter===Qn||y.minFilter===Xt||y.minFilter===hr||y.minFilter===as||y.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,oe[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,fe[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==as&&y.minFilter!==Qn||y.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Pe(T,y){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const q=X(y);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[q].usedTimes++;const we=J[T.__cacheKey];we!==void 0&&(J[T.__cacheKey].usedTimes--,we.usedTimes===0&&w(y)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return N}function $(T,y,N){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const J=Pe(T,y),q=y.source;t.bindTexture(Z,T.__webglTexture,s.TEXTURE0+N);const we=n.get(q);if(q.version!==we.__version||J===!0){t.activeTexture(s.TEXTURE0+N);const ce=qe.getPrimaries(qe.workingColorSpace),ge=y.colorSpace===On?null:qe.getPrimaries(y.colorSpace),$e=y.colorSpace===On||ce===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let te=v(y.image,!1,i.maxTextureSize);te=st(y,te);const ve=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type);let Re=b(y.internalFormat,ve,Ae,y.colorSpace,y.isVideoTexture);me(Z,y);let _e;const Ve=y.mipmaps,Ne=y.isVideoTexture!==!0,nt=we.__version===void 0||J===!0,k=q.dataReady,ae=O(y,te);if(y.isDepthTexture)Re=M(y.format===Di,y.type),nt&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,ve,Ae,null));else if(y.isDataTexture)if(Ve.length>0){Ne&&nt&&t.texStorage2D(s.TEXTURE_2D,ae,Re,Ve[0].width,Ve[0].height);for(let W=0,K=Ve.length;W<K;W++)_e=Ve[W],Ne?k&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,ve,Ae,_e.data):t.texImage2D(s.TEXTURE_2D,W,Re,_e.width,_e.height,0,ve,Ae,_e.data);y.generateMipmaps=!1}else Ne?(nt&&t.texStorage2D(s.TEXTURE_2D,ae,Re,te.width,te.height),k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ve,Ae,te.data)):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,ve,Ae,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Re,Ve[0].width,Ve[0].height,te.depth);for(let W=0,K=Ve.length;W<K;W++)if(_e=Ve[W],y.format!==sn)if(ve!==null)if(Ne){if(k)if(y.layerUpdates.size>0){const ue=ol(_e.width,_e.height,y.format,y.type);for(const he of y.layerUpdates){const De=_e.data.subarray(he*ue/_e.data.BYTES_PER_ELEMENT,(he+1)*ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,he,_e.width,_e.height,1,ve,De)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,te.depth,ve,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Re,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,te.depth,ve,Ae,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Re,_e.width,_e.height,te.depth,0,ve,Ae,_e.data)}else{Ne&&nt&&t.texStorage2D(s.TEXTURE_2D,ae,Re,Ve[0].width,Ve[0].height);for(let W=0,K=Ve.length;W<K;W++)_e=Ve[W],y.format!==sn?ve!==null?Ne?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?k&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,ve,Ae,_e.data):t.texImage2D(s.TEXTURE_2D,W,Re,_e.width,_e.height,0,ve,Ae,_e.data)}else if(y.isDataArrayTexture)if(Ne){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Re,te.width,te.height,te.depth),k)if(y.layerUpdates.size>0){const W=ol(te.width,te.height,y.format,y.type);for(const K of y.layerUpdates){const ue=te.data.subarray(K*W/te.data.BYTES_PER_ELEMENT,(K+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ve,Ae,ue)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,Ae,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,ve,Ae,te.data);else if(y.isData3DTexture)Ne?(nt&&t.texStorage3D(s.TEXTURE_3D,ae,Re,te.width,te.height,te.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,Ae,te.data)):t.texImage3D(s.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,ve,Ae,te.data);else if(y.isFramebufferTexture){if(nt)if(Ne)t.texStorage2D(s.TEXTURE_2D,ae,Re,te.width,te.height);else{let W=te.width,K=te.height;for(let ue=0;ue<ae;ue++)t.texImage2D(s.TEXTURE_2D,ue,Re,W,K,0,ve,Ae,null),W>>=1,K>>=1}}else if(Ve.length>0){if(Ne&&nt){const W=Te(Ve[0]);t.texStorage2D(s.TEXTURE_2D,ae,Re,W.width,W.height)}for(let W=0,K=Ve.length;W<K;W++)_e=Ve[W],Ne?k&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,ve,Ae,_e):t.texImage2D(s.TEXTURE_2D,W,Re,ve,Ae,_e);y.generateMipmaps=!1}else if(Ne){if(nt){const W=Te(te);t.texStorage2D(s.TEXTURE_2D,ae,Re,W.width,W.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ae,te)}else t.texImage2D(s.TEXTURE_2D,0,Re,ve,Ae,te);p(y)&&u(Z),we.__version=q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ee(T,y,N){if(y.image.length!==6)return;const Z=Pe(T,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);const q=n.get(J);if(J.version!==q.__version||Z===!0){t.activeTexture(s.TEXTURE0+N);const we=qe.getPrimaries(qe.workingColorSpace),ce=y.colorSpace===On?null:qe.getPrimaries(y.colorSpace),ge=y.colorSpace===On||we===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let K=0;K<6;K++)!$e&&!te?ve[K]=v(y.image[K],!0,i.maxCubemapSize):ve[K]=te?y.image[K].image:y.image[K],ve[K]=st(y,ve[K]);const Ae=ve[0],Re=r.convert(y.format,y.colorSpace),_e=r.convert(y.type),Ve=b(y.internalFormat,Re,_e,y.colorSpace),Ne=y.isVideoTexture!==!0,nt=q.__version===void 0||Z===!0,k=J.dataReady;let ae=O(y,Ae);me(s.TEXTURE_CUBE_MAP,y);let W;if($e){Ne&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Ve,Ae.width,Ae.height);for(let K=0;K<6;K++){W=ve[K].mipmaps;for(let ue=0;ue<W.length;ue++){const he=W[ue];y.format!==sn?Re!==null?Ne?k&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,Ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,he.width,he.height,Re,_e,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,Ve,he.width,he.height,0,Re,_e,he.data)}}}else{if(W=y.mipmaps,Ne&&nt){W.length>0&&ae++;const K=Te(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(te){Ne?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve[K].width,ve[K].height,Re,_e,ve[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,ve[K].width,ve[K].height,0,Re,_e,ve[K].data);for(let ue=0;ue<W.length;ue++){const De=W[ue].image[K].image;Ne?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,De.width,De.height,Re,_e,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,Ve,De.width,De.height,0,Re,_e,De.data)}}else{Ne?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,_e,ve[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Re,_e,ve[K]);for(let ue=0;ue<W.length;ue++){const he=W[ue];Ne?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Re,_e,he.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,Ve,Re,_e,he.image[K])}}}p(y)&&u(s.TEXTURE_CUBE_MAP),q.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Se(T,y,N,Z,J,q){const we=r.convert(N.format,N.colorSpace),ce=r.convert(N.type),ge=b(N.internalFormat,we,ce,N.colorSpace),$e=n.get(y),te=n.get(N);if(te.__renderTarget=y,!$e.__hasExternalTextures){const ve=Math.max(1,y.width>>q),Ae=Math.max(1,y.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,q,ge,ve,Ae,y.depth,0,we,ce,null):t.texImage2D(J,q,ge,ve,Ae,0,we,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),We(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,J,te.__webglTexture,0,He(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,J,te.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(T,y,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const Z=y.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,q=M(y.stencilBuffer,J),we=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=He(y);We(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,q,y.width,y.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,T)}else{const Z=y.textures;for(let J=0;J<Z.length;J++){const q=Z[J],we=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),ge=b(q.internalFormat,we,ce,q.colorSpace),$e=He(y);N&&We(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ge,y.width,y.height):We(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const J=Z.__webglTexture,q=He(y);if(y.depthTexture.format===Ai)We(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===Di)We(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const y=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ce(y.__webglFramebuffer,T)}else if(N){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=s.createRenderbuffer(),le(y.__webglDepthbuffer[Z],T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),le(y.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(T,y,N){const Z=n.get(T);y!==void 0&&Se(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ie(T)}function lt(T){const y=T.texture,N=n.get(T),Z=n.get(y);T.addEventListener("dispose",E);const J=T.textures,q=T.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let ge=0;ge<y.mipmaps.length;ge++)N.__webglFramebuffer[ce][ge]=s.createFramebuffer()}else N.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)N.__webglFramebuffer[ce]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(we)for(let ce=0,ge=J.length;ce<ge;ce++){const $e=n.get(J[ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&We(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ge=J[ce];N.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const $e=r.convert(ge.format,ge.colorSpace),te=r.convert(ge.type),ve=b(ge.internalFormat,$e,te,ge.colorSpace,T.isXRRenderTarget===!0),Ae=He(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ve,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),le(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),me(s.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Se(N.__webglFramebuffer[ce][ge],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Se(N.__webglFramebuffer[ce],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(y)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ce=0,ge=J.length;ce<ge;ce++){const $e=J[ce],te=n.get($e);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),me(s.TEXTURE_2D,$e),Se(N.__webglFramebuffer,T,$e,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),p($e)&&u(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),me(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Se(N.__webglFramebuffer[ge],T,y,s.COLOR_ATTACHMENT0,ce,ge);else Se(N.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,ce,0);p(y)&&u(ce),t.unbindTexture()}T.depthBuffer&&Ie(T)}function Xe(T){const y=T.textures;for(let N=0,Z=y.length;N<Z;N++){const J=y[N];if(p(J)){const q=_(T),we=n.get(J).__webglTexture;t.bindTexture(q,we),u(q),t.unbindTexture()}}}const ut=[],D=[];function zt(T){if(T.samples>0){if(We(T)===!1){const y=T.textures,N=T.width,Z=T.height;let J=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(T),ce=y.length>1;if(ce)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const $e=n.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,N,Z,0,0,N,Z,J,s.NEAREST),l===!0&&(ut.length=0,D.length=0,ut.push(s.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(q),D.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const $e=n.get(y[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function He(T){return Math.min(i.maxSamples,T.samples)}function We(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function st(T,y){const N=T.colorSpace,Z=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Oi&&N!==On&&(qe.getTransfer(N)===Qe?(Z!==sn||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function Te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=We}function gm(s,e){function t(n,i=On){let r;const o=qe.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Wo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return s.BYTE;if(n===Nl)return s.SHORT;if(n===es)return s.UNSIGNED_SHORT;if(n===Ho)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===ts)return s.HALF_FLOAT;if(n===zl)return s.ALPHA;if(n===Bl)return s.RGB;if(n===sn)return s.RGBA;if(n===Gl)return s.LUMINANCE;if(n===Hl)return s.LUMINANCE_ALPHA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===Di)return s.DEPTH_STENCIL;if(n===Wl)return s.RED;if(n===Xo)return s.RED_INTEGER;if(n===Vl)return s.RG;if(n===$o)return s.RG_INTEGER;if(n===qo)return s.RGBA_INTEGER;if(n===Bs||n===Gs||n===Hs||n===Ws)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ao||n===lo)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===yo||n===xo||n===Mo||n===So||n===wo||n===bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===To||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vs)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===Ao||n===Co||n===Po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class vm extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let $t=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const _m={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
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

}`;class Mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gn({vertexShader:ym,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sm extends Ni{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const v=new Mm,p=t.getContextAttributes();let u=null,_=null;const b=[],M=[],O=new Le;let A=null;const E=new tn;E.viewport=new dt;const R=new tn;R.viewport=new dt;const w=[E,R],S=new vm;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=b[$];return ee===void 0&&(ee=new Fr,b[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=b[$];return ee===void 0&&(ee=new Fr,b[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=b[$];return ee===void 0&&(ee=new Fr,b[$]=ee),ee.getHandSpace()};function F($){const ee=M.indexOf($.inputSource);if(ee===-1)return;const Se=b[ee];Se!==void 0&&(Se.update($.inputSource,$.frame,c||o),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<b.length;$++){const ee=M[$];ee!==null&&(M[$]=null,b[$].disconnect(ee))}P=null,G=null,v.reset(),e.setRenderTarget(u),m=null,f=null,d=null,i=null,_=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ti(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,Se=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Di:Ai,Se=p.stencil?Ii:ei);const Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ti(f.textureWidth,f.textureHeight,{format:sn,type:Tn,depthTexture:new sc(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y($){for(let ee=0;ee<$.removed.length;ee++){const Se=$.removed[ee],le=M.indexOf(Se);le>=0&&(M[le]=null,b[le].disconnect(Se))}for(let ee=0;ee<$.added.length;ee++){const Se=$.added[ee];let le=M.indexOf(Se);if(le===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=M.length){M.push(Se),le=Ie;break}else if(M[Ie]===null){M[Ie]=Se,le=Ie;break}if(le===-1)break}const Ce=b[le];Ce&&Ce.connect(Se)}}const V=new C,j=new C;function H($,ee,Se){V.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const le=V.distanceTo(j),Ce=ee.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),lt=Ce[14]/(Ce[10]+1),Xe=(Ce[9]+1)/Ce[5],ut=(Ce[9]-1)/Ce[5],D=(Ce[8]-1)/Ce[0],zt=(Ie[8]+1)/Ie[0],He=Be*D,We=Be*zt,Ee=le/(-D+zt),st=Ee*-D;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Te=Be+Ee,T=lt+Ee,y=He-st,N=We+(le-st),Z=Xe*lt/T*Te,J=ut*lt/T*Te;$.projectionMatrix.makePerspective(y,N,Z,J,Te,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,Se=$.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),S.near=R.near=E.near=ee,S.far=R.far=E.far=Se,(P!==S.near||G!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,G=S.far),E.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const le=$.parent,Ce=S.cameras;oe(S,le);for(let Ie=0;Ie<Ce.length;Ie++)oe(Ce[Ie],le);Ce.length===2?H(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),fe($,S,le)};function fe($,ee,Se){Se===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ko*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let se=null;function me($,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let le=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ie=0;Ie<Se.length;Ie++){const Be=Se[Ie];let lt=null;if(m!==null)lt=m.getViewport(Be);else{const ut=d.getViewSubImage(f,Be);lt=ut.viewport,Ie===0&&(e.setRenderTargetTextures(_,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(_))}let Xe=w[Ie];Xe===void 0&&(Xe=new tn,Xe.layers.enable(Ie),Xe.viewport=new dt,w[Ie]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Xe)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ie=d.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&v.init(e,Ie,i.renderState)}}for(let Se=0;Se<b.length;Se++){const le=M[Se],Ce=b[Se];le!==null&&Ce!==void 0&&Ce.update(le,ee,c||o)}se&&se($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Pe=new ic;Pe.setAnimationLoop(me),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const Yn=new dn,wm=new at;function bm(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ec(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,_,b,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,b):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Lt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Lt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),b=_.envMap,M=_.envMapRotation;b&&(p.envMap.value=b,Yn.copy(M),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Yn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=b*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tm(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const M=b.program;n.uniformBlockBinding(_,M)}function c(_,b){let M=i[_.id];M===void 0&&(g(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",p));const O=b.program;n.updateUBOMapping(_,O);const A=e.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){const b=d();_.__bindingPointIndex=b;const M=s.createBuffer(),O=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,O,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const b=i[_.id],M=_.uniforms,O=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,E=M.length;A<E;A++){const R=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,S=R.length;w<S;w++){const P=R[w];if(m(P,A,w,O)===!0){const G=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],j=v(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,G+X,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(_,b,M,O){const A=_.value,E=b+"_"+M;if(O[E]===void 0)return typeof A=="number"||typeof A=="boolean"?O[E]=A:O[E]=A.clone(),!0;{const R=O[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return O[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){const b=_.uniforms;let M=0;const O=16;for(let E=0,R=b.length;E<R;E++){const w=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,P=w.length;S<P;S++){const G=w[S],F=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=F.length;X<Y;X++){const V=F[X],j=v(V),H=M%O,oe=H%j.boundary,fe=H+oe;M+=oe,fe!==0&&O-fe<j.storage&&(M+=O-fe),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=j.storage}}}const A=M%O;return A>0&&(M+=O-A),_.__size=M,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function p(_){const b=_.target;b.removeEventListener("dispose",p);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function u(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:u}}class Em{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,u=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=Fn,this.toneMappingExposure=1;const M=this;let O=!1,A=0,E=0,R=null,w=-1,S=null;const P=new dt,G=new dt;let F=null;const X=new Ge(0);let Y=0,V=t.width,j=t.height,H=1,oe=null,fe=null;const se=new dt(0,0,V,j),me=new dt(0,0,V,j);let Pe=!1;const $=new Ko;let ee=!1,Se=!1;const le=new at,Ce=new at,Ie=new C,Be=new dt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ut(){return R===null?H:1}let D=n;function zt(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const L="webgl2";if(D=zt(L,x),D===null)throw zt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,We,Ee,st,Te,T,y,N,Z,J,q,we,ce,ge,$e,te,ve,Ae,Re,_e,Ve,Ne,nt,k;function ae(){He=new kf(D),He.init(),Ne=new gm(D,He),We=new Tf(D,He,e,Ne),Ee=new fm(D,He),We.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),st=new Df(D),Te=new Jp,T=new mm(D,He,Ee,Te,We,Ne,st),y=new Af(M),N=new Rf(M),Z=new Bh(D),nt=new wf(D,Z),J=new Lf(D,Z,st,nt),q=new Of(D,J,Z,st),Re=new Uf(D,We,T),te=new Ef(Te),we=new jp(M,y,N,He,We,nt,te),ce=new bm(M,Te),ge=new em,$e=new om(He),Ae=new Sf(M,y,N,Ee,q,m,l),ve=new dm(M,q,We),k=new Tm(D,st,We,Ee),_e=new bf(D,He,st),Ve=new If(D,He,st),st.programs=we.programs,M.capabilities=We,M.extensions=He,M.properties=Te,M.renderLists=ge,M.shadowMap=ve,M.state=Ee,M.info=st}ae();const W=new Sm(M,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(V,j,!1))},this.getSize=function(x){return x.set(V,j)},this.setSize=function(x,L,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,j=L,t.width=Math.floor(x*H),t.height=Math.floor(L*H),z===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(V*H,j*H).floor()},this.setDrawingBufferSize=function(x,L,z){V=x,j=L,H=z,t.width=Math.floor(x*z),t.height=Math.floor(L*z),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(se)},this.setViewport=function(x,L,z,B){x.isVector4?se.set(x.x,x.y,x.z,x.w):se.set(x,L,z,B),Ee.viewport(P.copy(se).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(me)},this.setScissor=function(x,L,z,B){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,L,z,B),Ee.scissor(G.copy(me).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(x){Ee.setScissorTest(Pe=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(x=!0,L=!0,z=!0){let B=0;if(x){let I=!1;if(R!==null){const ie=R.texture.format;I=ie===qo||ie===$o||ie===Xo}if(I){const ie=R.texture.type,de=ie===Tn||ie===ei||ie===es||ie===Ii||ie===Wo||ie===Vo,ye=Ae.getClearColor(),xe=Ae.getClearAlpha(),ke=ye.r,Ue=ye.g,Me=ye.b;de?(g[0]=ke,g[1]=Ue,g[2]=Me,g[3]=xe,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=ke,v[1]=Ue,v[2]=Me,v[3]=xe,D.clearBufferiv(D.COLOR,0,v))}else B|=D.COLOR_BUFFER_BIT}L&&(B|=D.DEPTH_BUFFER_BIT),z&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),$e.dispose(),Te.dispose(),y.dispose(),N.dispose(),q.dispose(),nt.dispose(),k.dispose(),we.dispose(),W.dispose(),W.removeEventListener("sessionstart",na),W.removeEventListener("sessionend",ia),Hn.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const x=st.autoReset,L=ve.enabled,z=ve.autoUpdate,B=ve.needsUpdate,I=ve.type;ae(),st.autoReset=x,ve.enabled=L,ve.autoUpdate=z,ve.needsUpdate=B,ve.type=I}function he(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function De(x){const L=x.target;L.removeEventListener("dispose",De),ct(L)}function ct(x){St(x),Te.remove(x)}function St(x){const L=Te.get(x).programs;L!==void 0&&(L.forEach(function(z){we.releaseProgram(z)}),x.isShaderMaterial&&we.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,z,B,I,ie){L===null&&(L=lt);const de=I.isMesh&&I.matrixWorld.determinant()<0,ye=Sc(x,L,z,B,I);Ee.setMaterial(B,de);let xe=z.index,ke=1;if(B.wireframe===!0){if(xe=J.getWireframeAttribute(z),xe===void 0)return;ke=2}const Ue=z.drawRange,Me=z.attributes.position;let Ye=Ue.start*ke,it=(Ue.start+Ue.count)*ke;ie!==null&&(Ye=Math.max(Ye,ie.start*ke),it=Math.min(it,(ie.start+ie.count)*ke)),xe!==null?(Ye=Math.max(Ye,0),it=Math.min(it,xe.count)):Me!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Me.count));const rt=it-Ye;if(rt<0||rt===1/0)return;nt.setup(I,B,ye,z,xe);let Rt,Ke=_e;if(xe!==null&&(Rt=Z.get(xe),Ke=Ve,Ke.setIndex(Rt)),I.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*ut()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(I.isLine){let be=B.linewidth;be===void 0&&(be=1),Ee.setLineWidth(be*ut()),I.isLineSegments?Ke.setMode(D.LINES):I.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else I.isPoints?Ke.setMode(D.POINTS):I.isSprite&&Ke.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ke.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ke.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const be=I._multiDrawStarts,pn=I._multiDrawCounts,je=I._multiDrawCount,Yt=xe?Z.get(xe).bytesPerElement:1,ri=Te.get(B).currentProgram.getUniforms();for(let It=0;It<je;It++)ri.setValue(D,"_gl_DrawID",It),Ke.render(be[It]/Yt,pn[It])}else if(I.isInstancedMesh)Ke.renderInstances(Ye,rt,I.count);else if(z.isInstancedBufferGeometry){const be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,pn=Math.min(z.instanceCount,be);Ke.renderInstances(Ye,rt,pn)}else Ke.render(Ye,rt)};function Je(x,L,z){x.transparent===!0&&x.side===nn&&x.forceSinglePass===!1?(x.side=Lt,x.needsUpdate=!0,os(x,L,z),x.side=Bn,x.needsUpdate=!0,os(x,L,z),x.side=nn):os(x,L,z)}this.compile=function(x,L,z=null){z===null&&(z=x),u=$e.get(z),u.init(L),b.push(u),z.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),x!==z&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const B=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ie=I.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ye=ie[de];Je(ye,z,I),B.add(ye)}else Je(ie,z,I),B.add(ie)}),b.pop(),u=null,B},this.compileAsync=function(x,L,z=null){const B=this.compile(x,L,z);return new Promise(I=>{function ie(){if(B.forEach(function(de){Te.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){I(x);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let qt=null;function fn(x){qt&&qt(x)}function na(){Hn.stop()}function ia(){Hn.start()}const Hn=new ic;Hn.setAnimationLoop(fn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(x){qt=x,W.setAnimationLoop(x),x===null?Hn.stop():Hn.start()},W.addEventListener("sessionstart",na),W.addEventListener("sessionend",ia),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,L,R),u=$e.get(x,b.length),u.init(L),b.push(u),Ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(Ce),Se=this.localClippingEnabled,ee=te.init(this.clippingPlanes,Se),p=ge.get(x,_.length),p.init(),_.push(p),W.enabled===!0&&W.isPresenting===!0){const ie=M.xr.getDepthSensingMesh();ie!==null&&cr(ie,L,-1/0,M.sortObjects)}cr(x,L,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(oe,fe),Xe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xe&&Ae.addToRenderList(p,x),this.info.render.frame++,ee===!0&&te.beginShadows();const z=u.state.shadowsArray;ve.render(z,x,L),ee===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,I=p.transmissive;if(u.setupLights(),L.isArrayCamera){const ie=L.cameras;if(I.length>0)for(let de=0,ye=ie.length;de<ye;de++){const xe=ie[de];ra(B,I,x,xe)}Xe&&Ae.render(x);for(let de=0,ye=ie.length;de<ye;de++){const xe=ie[de];sa(p,x,xe,xe.viewport)}}else I.length>0&&ra(B,I,x,L),Xe&&Ae.render(x),sa(p,x,L);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(M,x,L),nt.resetDefaultState(),w=-1,S=null,b.pop(),b.length>0?(u=b[b.length-1],ee===!0&&te.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function cr(x,L,z,B){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){B&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ce);const de=q.update(x),ye=x.material;ye.visible&&p.push(x,de,ye,z,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$.intersectsObject(x))){const de=q.update(x),ye=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Be.copy(de.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(Ce)),Array.isArray(ye)){const xe=de.groups;for(let ke=0,Ue=xe.length;ke<Ue;ke++){const Me=xe[ke],Ye=ye[Me.materialIndex];Ye&&Ye.visible&&p.push(x,de,Ye,z,Be.z,Me)}}else ye.visible&&p.push(x,de,ye,z,Be.z,null)}}const ie=x.children;for(let de=0,ye=ie.length;de<ye;de++)cr(ie[de],L,z,B)}function sa(x,L,z,B){const I=x.opaque,ie=x.transmissive,de=x.transparent;u.setupLightsView(z),ee===!0&&te.setGlobalState(M.clippingPlanes,z),B&&Ee.viewport(P.copy(B)),I.length>0&&rs(I,L,z),ie.length>0&&rs(ie,L,z),de.length>0&&rs(de,L,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ra(x,L,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new ti(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ts:Tn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ie=u.state.transmissionRenderTarget[B.id],de=B.viewport||P;ie.setSize(de.z,de.w);const ye=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(X),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Xe&&Ae.render(z);const xe=M.toneMapping;M.toneMapping=Fn;const ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),ee===!0&&te.setGlobalState(M.clippingPlanes,B),rs(x,z,B),T.updateMultisampleRenderTarget(ie),T.updateRenderTargetMipmap(ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Me=0,Ye=L.length;Me<Ye;Me++){const it=L[Me],rt=it.object,Rt=it.geometry,Ke=it.material,be=it.group;if(Ke.side===nn&&rt.layers.test(B.layers)){const pn=Ke.side;Ke.side=Lt,Ke.needsUpdate=!0,oa(rt,z,B,Rt,Ke,be),Ke.side=pn,Ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(ie),T.updateRenderTargetMipmap(ie))}M.setRenderTarget(ye),M.setClearColor(X,Y),ke!==void 0&&(B.viewport=ke),M.toneMapping=xe}function rs(x,L,z){const B=L.isScene===!0?L.overrideMaterial:null;for(let I=0,ie=x.length;I<ie;I++){const de=x[I],ye=de.object,xe=de.geometry,ke=B===null?de.material:B,Ue=de.group;ye.layers.test(z.layers)&&oa(ye,L,z,xe,ke,Ue)}}function oa(x,L,z,B,I,ie){x.onBeforeRender(M,L,z,B,I,ie),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,L,z,B,x,ie),I.transparent===!0&&I.side===nn&&I.forceSinglePass===!1?(I.side=Lt,I.needsUpdate=!0,M.renderBufferDirect(z,L,B,I,x,ie),I.side=Bn,I.needsUpdate=!0,M.renderBufferDirect(z,L,B,I,x,ie),I.side=nn):M.renderBufferDirect(z,L,B,I,x,ie),x.onAfterRender(M,L,z,B,I,ie)}function os(x,L,z){L.isScene!==!0&&(L=lt);const B=Te.get(x),I=u.state.lights,ie=u.state.shadowsArray,de=I.state.version,ye=we.getParameters(x,I.state,ie,L,z),xe=we.getProgramCacheKey(ye);let ke=B.programs;B.environment=x.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(x.isMeshStandardMaterial?N:y).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,ke===void 0&&(x.addEventListener("dispose",De),ke=new Map,B.programs=ke);let Ue=ke.get(xe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===de)return la(x,ye),Ue}else ye.uniforms=we.getUniforms(x),x.onBeforeCompile(ye,M),Ue=we.acquireProgram(ye,xe),ke.set(xe,Ue),B.uniforms=ye.uniforms;const Me=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=te.uniform),la(x,ye),B.needsLights=bc(x),B.lightsStateVersion=de,B.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function aa(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=$s.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function la(x,L){const z=Te.get(x);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Sc(x,L,z,B,I){L.isScene!==!0&&(L=lt),T.resetTextureUnits();const ie=L.fog,de=B.isMeshStandardMaterial?L.environment:null,ye=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Oi,xe=(B.isMeshStandardMaterial?N:y).get(B.envMap||de),ke=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let rt=Fn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rt=M.toneMapping);const Rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=Rt!==void 0?Rt.length:0,be=Te.get(B),pn=u.state.lights;if(ee===!0&&(Se===!0||x!==S)){const Bt=x===S&&B.id===w;te.setState(B,x,Bt)}let je=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==pn.state.version||be.outputColorSpace!==ye||I.isBatchedMesh&&be.batching===!1||!I.isBatchedMesh&&be.batching===!0||I.isBatchedMesh&&be.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&be.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&be.instancing===!1||!I.isInstancedMesh&&be.instancing===!0||I.isSkinnedMesh&&be.skinning===!1||!I.isSkinnedMesh&&be.skinning===!0||I.isInstancedMesh&&be.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&be.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&be.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&be.instancingMorph===!1&&I.morphTexture!==null||be.envMap!==xe||B.fog===!0&&be.fog!==ie||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==Ue||be.morphTargets!==Me||be.morphNormals!==Ye||be.morphColors!==it||be.toneMapping!==rt||be.morphTargetsCount!==Ke)&&(je=!0):(je=!0,be.__version=B.version);let Yt=be.currentProgram;je===!0&&(Yt=os(B,L,I));let ri=!1,It=!1,Bi=!1;const ot=Yt.getUniforms(),an=be.uniforms;if(Ee.useProgram(Yt.program)&&(ri=!0,It=!0,Bi=!0),B.id!==w&&(w=B.id,It=!0),ri||S!==x){Ee.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),mh(le),gh(le),ot.setValue(D,"projectionMatrix",le)):ot.setValue(D,"projectionMatrix",x.projectionMatrix),ot.setValue(D,"viewMatrix",x.matrixWorldInverse);const Cn=ot.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,Ie.setFromMatrixPosition(x.matrixWorld)),We.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ot.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,It=!0,Bi=!0)}if(I.isSkinnedMesh){ot.setOptional(D,I,"bindMatrix"),ot.setOptional(D,I,"bindMatrixInverse");const Bt=I.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ot.setValue(D,"boneTexture",Bt.boneTexture,T))}I.isBatchedMesh&&(ot.setOptional(D,I,"batchingTexture"),ot.setValue(D,"batchingTexture",I._matricesTexture,T),ot.setOptional(D,I,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",I._indirectTexture,T),ot.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",I._colorsTexture,T));const Gi=z.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Re.update(I,z,Yt),(It||be.receiveShadow!==I.receiveShadow)&&(be.receiveShadow=I.receiveShadow,ot.setValue(D,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(an.envMap.value=xe,an.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(an.envMapIntensity.value=L.environmentIntensity),It&&(ot.setValue(D,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&wc(an,Bi),ie&&B.fog===!0&&ce.refreshFogUniforms(an,ie),ce.refreshMaterialUniforms(an,B,H,j,u.state.transmissionRenderTarget[x.id]),$s.upload(D,aa(be),an,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($s.upload(D,aa(be),an,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ot.setValue(D,"center",I.center),ot.setValue(D,"modelViewMatrix",I.modelViewMatrix),ot.setValue(D,"normalMatrix",I.normalMatrix),ot.setValue(D,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let Cn=0,Pn=Bt.length;Cn<Pn;Cn++){const ca=Bt[Cn];k.update(ca,Yt),k.bind(ca,Yt)}}return Yt}function wc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function bc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,L,z){Te.get(x.texture).__webglTexture=L,Te.get(x.depthTexture).__webglTexture=z;const B=Te.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const z=Te.get(x);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,z=0){R=x,A=L,E=z;let B=!0,I=null,ie=!1,de=!1;if(x){const xe=Te.get(x);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(xe.__hasExternalTextures)T.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Me=x.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&Te.has(Me)&&(x.width!==Me.image.width||x.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const ke=x.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(de=!0);const Ue=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[L])?I=Ue[L][z]:I=Ue[L],ie=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?I=Te.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?I=Ue[z]:I=Ue,P.copy(x.viewport),G.copy(x.scissor),F=x.scissorTest}else P.copy(se).multiplyScalar(H).floor(),G.copy(me).multiplyScalar(H).floor(),F=Pe;if(Ee.bindFramebuffer(D.FRAMEBUFFER,I)&&B&&Ee.drawBuffers(x,I),Ee.viewport(P),Ee.scissor(G),Ee.setScissorTest(F),ie){const xe=Te.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,z)}else if(de){const xe=Te.get(x.texture),ke=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,z||0,ke)}w=-1},this.readRenderTargetPixels=function(x,L,z,B,I,ie,de){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Ee.bindFramebuffer(D.FRAMEBUFFER,ye);try{const xe=x.texture,ke=xe.format,Ue=xe.type;if(!We.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-B&&z>=0&&z<=x.height-I&&D.readPixels(L,z,B,I,Ne.convert(ke),Ne.convert(Ue),ie)}finally{const xe=R!==null?Te.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(x,L,z,B,I,ie,de){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const xe=x.texture,ke=xe.format,Ue=xe.type;if(!We.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-B&&z>=0&&z<=x.height-I){Ee.bindFramebuffer(D.FRAMEBUFFER,ye);const Me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(L,z,B,I,Ne.convert(ke),Ne.convert(Ue),0);const Ye=R!==null?Te.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Ye);const it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ph(D,it,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Me),D.deleteSync(it),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,z=0){x.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-z),I=Math.floor(x.image.width*B),ie=Math.floor(x.image.height*B),de=L!==null?L.x:0,ye=L!==null?L.y:0;T.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,de,ye,I,ie),Ee.unbindTexture()},this.copyTextureToTexture=function(x,L,z=null,B=null,I=0){x.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],L=arguments[2],I=arguments[3]||0,z=null);let ie,de,ye,xe,ke,Ue,Me,Ye,it;const rt=x.isCompressedTexture?x.mipmaps[I]:x.image;z!==null?(ie=z.max.x-z.min.x,de=z.max.y-z.min.y,ye=z.isBox3?z.max.z-z.min.z:1,xe=z.min.x,ke=z.min.y,Ue=z.isBox3?z.min.z:0):(ie=rt.width,de=rt.height,ye=rt.depth||1,xe=0,ke=0,Ue=0),B!==null?(Me=B.x,Ye=B.y,it=B.z):(Me=0,Ye=0,it=0);const Rt=Ne.convert(L.format),Ke=Ne.convert(L.type);let be;L.isData3DTexture?(T.setTexture3D(L,0),be=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),be=D.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),be=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const pn=D.getParameter(D.UNPACK_ROW_LENGTH),je=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yt=D.getParameter(D.UNPACK_SKIP_PIXELS),ri=D.getParameter(D.UNPACK_SKIP_ROWS),It=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const Bi=x.isDataArrayTexture||x.isData3DTexture,ot=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const an=Te.get(x),Gi=Te.get(L),Bt=Te.get(an.__renderTarget),Cn=Te.get(Gi.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Pn=0;Pn<ye;Pn++)Bi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,I,Ue+Pn),x.isDepthTexture?(ot&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(L).__webglTexture,I,it+Pn),D.blitFramebuffer(xe,ke,ie,de,Me,Ye,ie,de,D.DEPTH_BUFFER_BIT,D.NEAREST)):ot?D.copyTexSubImage3D(be,I,Me,Ye,it+Pn,xe,ke,ie,de):D.copyTexSubImage2D(be,I,Me,Ye,it+Pn,xe,ke,ie,de);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(be,I,Me,Ye,it,ie,de,ye,Rt,Ke,rt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(be,I,Me,Ye,it,ie,de,ye,Rt,rt.data):D.texSubImage3D(be,I,Me,Ye,it,ie,de,ye,Rt,Ke,rt):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,Me,Ye,ie,de,Rt,Ke,rt.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,Me,Ye,rt.width,rt.height,Rt,rt.data):D.texSubImage2D(D.TEXTURE_2D,I,Me,Ye,ie,de,Rt,Ke,rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,pn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ri),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It),I===0&&L.generateMipmaps&&D.generateMipmap(be),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,L,z=null,B=null,I=0){return x.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,x=arguments[2],L=arguments[3],I=arguments[4]||0),Ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,z,B,I)},this.initRenderTarget=function(x){Te.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){A=0,E=0,R=null,Ee.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class js{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new js(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Am=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new C;class Js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Io extends ii{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xi;const $i=new C,Mi=new C,Si=new C,wi=new Le,qi=new Le,cc=new at,Cs=new C,Yi=new C,Ps=new C,al=new Le,zr=new Le,ll=new Le;class cl extends mt{constructor(e=new Io){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cm(t,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new Js(n,3,0,!1)),xi.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=xi,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),cc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Rs(Cs.set(-.5,-.5,0),Si,o,Mi,i,r),Rs(Yi.set(.5,-.5,0),Si,o,Mi,i,r),Rs(Ps.set(.5,.5,0),Si,o,Mi,i,r),al.set(0,0),zr.set(1,0),ll.set(1,1);let a=e.ray.intersectTriangle(Cs,Yi,Ps,!1,$i);if(a===null&&(Rs(Yi.set(-.5,.5,0),Si,o,Mi,i,r),zr.set(0,1),a=e.ray.intersectTriangle(Cs,Ps,Yi,!1,$i),a===null))return;const l=e.ray.origin.distanceTo($i);l<e.near||l>e.far||t.push({distance:l,point:$i.clone(),uv:Ot.getInterpolation($i,Cs,Yi,Ps,al,zr,ll,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rs(s,e,t,n,i,r){wi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qi.x=r*wi.x-i*wi.y,qi.y=i*wi.x+r*wi.y):qi.copy(wi),s.copy(e),s.x+=qi.x,s.y+=qi.y,s.applyMatrix4(cc)}class si extends ii{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qs=new C,er=new C,hl=new at,Zi=new Yo,ks=new or,Br=new C,dl=new C;class hc extends mt{constructor(e=new Pt,t=new si){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qs.fromBufferAttribute(t,i-1),er.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qs.distanceTo(er);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=r,e.ray.intersectsSphere(ks)===!1)return;hl.copy(i).invert(),Zi.copy(e.ray).applyMatrix4(hl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const u=h.getX(v),_=h.getX(v+1),b=Ls(this,e,Zi,l,u,_);b&&t.push(b)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),u=Ls(this,e,Zi,l,v,p);u&&t.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=c){const u=Ls(this,e,Zi,l,v,v+1);u&&t.push(u)}if(this.isLineLoop){const v=Ls(this,e,Zi,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ls(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Qs.fromBufferAttribute(o,i),er.fromBufferAttribute(o,r),t.distanceSqToSegment(Qs,er,Br,dl)>n)return;Br.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Br);if(!(l<e.near||l>e.far))return{distance:l,point:dl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ul=new C,fl=new C;class is extends hc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ul.fromBufferAttribute(t,i),fl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ul.distanceTo(fl);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tr extends Ct{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ft extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const v=[],p=n/2;let u=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(m,2));function _(){const M=new C,O=new C;let A=0;const E=(t-e)/n;for(let R=0;R<=r;R++){const w=[],S=R/r,P=S*(t-e)+e;for(let G=0;G<=i;G++){const F=G/i,X=F*l+a,Y=Math.sin(X),V=Math.cos(X);O.x=P*Y,O.y=-S*n+p,O.z=P*V,d.push(O.x,O.y,O.z),M.set(Y,E,V).normalize(),f.push(M.x,M.y,M.z),m.push(F,1-S),w.push(g++)}v.push(w)}for(let R=0;R<i;R++)for(let w=0;w<r;w++){const S=v[w][R],P=v[w+1][R],G=v[w+1][R+1],F=v[w][R+1];(e>0||w!==0)&&(h.push(S,P,F),A+=3),(t>0||w!==r-1)&&(h.push(P,G,F),A+=3)}c.addGroup(u,A,0),u+=A}function b(M){const O=g,A=new Le,E=new C;let R=0;const w=M===!0?e:t,S=M===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,p*S,0),f.push(0,S,0),m.push(.5,.5),g++;const P=g;for(let G=0;G<=i;G++){const X=G/i*l+a,Y=Math.cos(X),V=Math.sin(X);E.x=w*V,E.y=p*S,E.z=w*Y,d.push(E.x,E.y,E.z),f.push(0,S,0),A.x=Y*.5+.5,A.y=V*.5*S+.5,m.push(A.x,A.y),g++}for(let G=0;G<i;G++){const F=O+G,X=P+G;M===!0?h.push(X,X+1,F):h.push(X+1,X,F),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Ft{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new lr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Is=new C,Ds=new C,Gr=new C,Us=new Ot;class Qo extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Xs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:u}=Us;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Us.getNormal(Gr),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(u.x*i)},${Math.round(u.y*i)},${Math.round(u.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const b=(_+1)%3,M=d[_],O=d[b],A=Us[h[_]],E=Us[h[b]],R=`${M}_${O}`,w=`${O}_${M}`;w in f&&f[w]?(Gr.dot(f[w].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(E.x,E.y,E.z)),f[w]=null):R in f||(f[R]={index0:c[_],index1:c[b],normal:Gr.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:p}=f[g];Is.fromBufferAttribute(a,v),Ds.fromBufferAttribute(a,p),m.push(Is.x,Is.y,Is.z),m.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new Mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ea extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,f=new C,m=[],g=[],v=[],p=[];for(let u=0;u<=n;u++){const _=[],b=u/n;let M=0;u===0&&o===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let O=0;O<=t;O++){const A=O/t;d.x=-e*Math.cos(i+A*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(i+A*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(A+M,1-b),_.push(c++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){const b=h[u][_+1],M=h[u][_],O=h[u+1][_],A=h[u+1][_+1];(u!==0||o>0)&&m.push(b,M,A),(u!==n-1||l<Math.PI)&&m.push(M,O,A)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ze extends ii{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dc extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hr=new at,pl=new C,ml=new C;class Pm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rm extends Pm{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gl extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Rm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class km extends dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vl(){return performance.now()}const _l=new at;class uc{constructor(e,t,n=0,i=1/0){this.ray=new Yo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _l.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_l),this}intersectObject(e,t=!0,n=[]){return Do(e,this,n,t),n.sort(yl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Do(e[i],this,n,t);return n.sort(yl),n}}function yl(s,e){return s.distance-e.distance}function Do(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Do(r[o],e,t,!0)}}const Os=new Fi;class Im extends is{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Pt;r.setIndex(new Nt(n,1)),r.setAttribute("position",new Nt(i,3)),super(r,new si({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Os.setFromObject(this.object),Os.isEmpty())return;const t=Os.min,n=Os.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const xl=new C;let Ns,Wr;class Ml extends mt{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ns===void 0&&(Ns=new Pt,Ns.setAttribute("position",new Mt([0,0,0,0,1,0],3)),Wr=new Ft(0,.5,1,5,1),Wr.translate(0,-.5,0)),this.position.copy(t),this.line=new hc(Ns,new si({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Q(Wr,new Pi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{xl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(xl,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const Dm=.5;class Um{clock;running=!1;paused=!1;speedMultiplier=1;updateCallbacks=[];renderCallback=null;constructor(){this.clock=new Lm(!1)}start(){this.running=!0,this.clock.start(),this.tick()}stop(){this.running=!1,this.clock.stop()}pause(){this.paused=!0}resume(){this.paused=!1}isPaused(){return this.paused}setSpeed(e){this.speedMultiplier=Math.max(0,Math.min(3,e))}getSpeed(){return this.speedMultiplier}onUpdate(e){return this.updateCallbacks.push(e),()=>{const t=this.updateCallbacks.indexOf(e);t>-1&&this.updateCallbacks.splice(t,1)}}onRender(e){this.renderCallback=e}tick=()=>{if(!this.running)return;requestAnimationFrame(this.tick);const e=this.clock.getDelta(),t=Math.min(e,.1),n=this.clock.getElapsedTime();e>Dm&&en.warn(`[GameLoop] Frame drop detected: ${e.toFixed(2)}s (${Math.round(1/e)} fps)`);const i=this.paused?0:t*this.speedMultiplier;for(const r of this.updateCallbacks)r(i,n);this.renderCallback&&this.renderCallback()}}class Om{events=new Map;on(e,t){return this.events.has(e)||this.events.set(e,new Set),this.events.get(e).add(t),()=>{this.events.get(e)?.delete(t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){this.events.get(e)?.delete(t)}emit(e,t){this.events.get(e)?.forEach(n=>n(t))}clear(){this.events.clear()}}const U=new Om;class Nm{state={money:500,wave:1,phase:"build",storedPallets:0,storageCapacity:0,pendingOrders:0,completedOrders:0,failedOrders:0,isPaused:!1,gameSpeed:1,isGameOver:!1,theme:"dark",floorExpansionCount:0,floorVerticalExpansionCount:0,workerLimit:5};MAX_FAILED_ORDERS=3;get(e){return this.state[e]}set(e,t){const n=this.state[e];this.state[e]=t,e==="money"&&n!==t&&U.emit("money:changed",{oldValue:n,newValue:t})}getState(){return{...this.state}}addMoney(e){this.set("money",this.state.money+e)}spendMoney(e){return this.state.money>=e?(this.set("money",this.state.money-e),!0):!1}canAfford(e){return this.state.money>=e}setPhase(e){this.set("phase",e),U.emit(e==="build"?"phase:build":"phase:operations")}nextWave(){this.set("wave",this.state.wave+1)}completeWave(){U.emit("wave:complete",{wave:this.state.wave})}updateStorageCapacity(e){this.set("storageCapacity",e)}addStoredPallet(){this.set("storedPallets",this.state.storedPallets+1),U.emit("pallet:stored",{total:this.state.storedPallets})}removeStoredPallet(){this.state.storedPallets>0&&(this.set("storedPallets",this.state.storedPallets-1),U.emit("pallet:picked",{total:this.state.storedPallets}))}addPendingOrder(){this.set("pendingOrders",this.state.pendingOrders+1)}completeOrder(){this.set("pendingOrders",Math.max(0,this.state.pendingOrders-1)),this.set("completedOrders",this.state.completedOrders+1),U.emit("order:fulfilled",{total:this.state.completedOrders})}failOrder(){this.set("pendingOrders",Math.max(0,this.state.pendingOrders-1)),this.recordFailure()}failInboundTruck(){this.recordFailure()}recordFailure(){this.set("failedOrders",this.state.failedOrders+1),U.emit("order:expired",{total:this.state.failedOrders}),this.state.failedOrders>=this.MAX_FAILED_ORDERS&&this.gameOver()}increaseWorkerLimit(e=5){this.set("workerLimit",this.state.workerLimit+e)}resetFailedOrders(){this.set("failedOrders",0)}pause(){this.set("isPaused",!0),U.emit("game:pause")}resume(){this.set("isPaused",!1),U.emit("game:resume")}togglePause(){this.state.isPaused?this.resume():this.pause()}setSpeed(e){this.set("gameSpeed",Math.max(0,Math.min(3,e))),U.emit("ui:speed-change",{speed:this.state.gameSpeed})}setTheme(e){const t=this.state.theme;this.state.theme=e,t!==e&&U.emit("theme:changed",{theme:e})}toggleTheme(){this.setTheme(this.state.theme==="dark"?"light":"dark")}gameOver(){this.set("isGameOver",!0),U.emit("game:over",{wave:this.state.wave,completedOrders:this.state.completedOrders,money:this.state.money})}reset(){this.state={money:500,wave:1,phase:"build",storedPallets:0,storageCapacity:0,pendingOrders:0,completedOrders:0,failedOrders:0,isPaused:!1,gameSpeed:1,isGameOver:!1,theme:"dark",floorExpansionCount:0,floorVerticalExpansionCount:0,workerLimit:5}}serialize(){return JSON.stringify(this.state)}deserialize(e){try{const t=JSON.parse(e);this.state={...this.state,...t}}catch(t){console.error("Failed to deserialize game state:",t)}}}const ne=new Nm;class Fm{instance;ambientLight;directionalLight;fillLight;constructor(){this.instance=new Am,this.setupLighting(),this.setupFog(),this.setupEventListeners(),this.updateTheme(ne.get("theme"))}setupEventListeners(){U.on("theme:changed",({theme:e})=>{this.updateTheme(e)})}updateTheme(e){const t=e==="light",n=t?11193599:1710638;this.instance.background=new Ge(n),this.instance.fog instanceof js&&this.instance.fog.color.set(n),this.ambientLight&&(this.ambientLight.intensity=t?.6:.4),this.directionalLight&&(this.directionalLight.intensity=t?1:.8,this.directionalLight.color.set(t?16775920:16777215)),this.fillLight&&(this.fillLight.intensity=t?.4:.3)}setupLighting(){this.ambientLight=new km(16777215,.4),this.instance.add(this.ambientLight),this.directionalLight=new gl(16777215,.8),this.directionalLight.position.set(10,20,10),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=50,this.directionalLight.shadow.camera.left=-20,this.directionalLight.shadow.camera.right=20,this.directionalLight.shadow.camera.top=20,this.directionalLight.shadow.camera.bottom=-20,this.directionalLight.shadow.bias=-1e-4,this.instance.add(this.directionalLight),this.fillLight=new gl(10011097,.3),this.fillLight.position.set(-10,10,-10),this.instance.add(this.fillLight)}setupFog(){this.instance.fog=new js(1710638,30,60)}add(e){this.instance.add(e)}remove(e){this.instance.remove(e)}}class zm{instance;zoom=15;minZoom=8;maxZoom=60;maxPan=15;panOffset=new C;targetPanOffset=new C;panSpeed=.1;rotationAngle=Math.PI/4;targetRotationAngle=Math.PI/4;rotationSpeed=.1;ISO_ANGLE=Math.atan(1/Math.sqrt(2));ROTATION=Math.PI/4;viewMode="isometric";constructor(e){const t=this.zoom;this.instance=new jo(-t*e/2,t*e/2,t/2,-t/2,.1,100),this.setupIsometricPosition()}setupIsometricPosition(){this.instance.position.set(30*Math.cos(this.ROTATION)*Math.cos(this.ISO_ANGLE),30*Math.sin(this.ISO_ANGLE),30*Math.sin(this.ROTATION)*Math.cos(this.ISO_ANGLE)),this.instance.lookAt(0,0,0),this.instance.up.set(0,1,0)}resize(e){const t=this.zoom;this.instance.left=-t*e/2,this.instance.right=t*e/2,this.instance.top=t/2,this.instance.bottom=-t/2,this.instance.updateProjectionMatrix()}setZoom(e){this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,e));const t=window.innerWidth/window.innerHeight;this.resize(t)}getZoom(){return this.zoom}zoomIn(e=1){this.setZoom(this.zoom-e)}zoomOut(e=1){this.setZoom(this.zoom+e)}pan(e,t){const n=this.zoom*.002,i=this.viewMode==="top"?Math.PI/2:this.rotationAngle,r=new C(Math.cos(i+Math.PI/2),0,Math.sin(i+Math.PI/2)).normalize(),o=new C(Math.cos(i),0,Math.sin(i)).normalize();this.targetPanOffset.add(r.clone().multiplyScalar(e*n)),this.targetPanOffset.add(o.clone().multiplyScalar(-t*n)),this.targetPanOffset.clampScalar(-this.maxPan,this.maxPan)}resetPan(){this.targetPanOffset.set(0,0,0)}rotate(e){this.targetRotationAngle+=e}setRotation(e){this.targetRotationAngle=e}getRotation(){return this.rotationAngle}setView(e){this.viewMode=e,this.panOffset.set(0,0,0),this.targetPanOffset.set(0,0,0),this.rotationAngle=this.ROTATION,this.targetRotationAngle=this.ROTATION}getView(){return this.viewMode}setGridDimensions(e,t){const n=Math.max(e,t);this.maxZoom=n*3,this.maxPan=n*.75}setGridWidth(e){this.setGridDimensions(e,e)}update(){this.panOffset.lerp(this.targetPanOffset,this.panSpeed),this.rotationAngle+=(this.targetRotationAngle-this.rotationAngle)*this.rotationSpeed;const e=30;this.viewMode==="top"?(this.instance.position.set(0,e,0),this.instance.position.add(this.panOffset),this.instance.lookAt(this.panOffset.clone()),this.instance.up.set(0,0,-1)):(this.instance.position.set(e*Math.cos(this.rotationAngle)*Math.cos(this.ISO_ANGLE),e*Math.sin(this.ISO_ANGLE),e*Math.sin(this.rotationAngle)*Math.cos(this.ISO_ANGLE)),this.instance.position.add(this.panOffset),this.instance.lookAt(this.panOffset.clone()),this.instance.up.set(0,1,0))}screenToWorld(e,t,n=0){const i=e/window.innerWidth*2-1,r=-(t/window.innerHeight)*2+1,o=new uc;o.setFromCamera(new Le(i,r),this.instance);const a=new Mn(new C(0,1,0),-n),l=new C;return o.ray.intersectPlane(a,l),l||new C}}class Bm{instance;constructor(e){this.instance=new Em({canvas:e,antialias:!0,alpha:!1}),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.instance.setSize(window.innerWidth,window.innerHeight),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Ll,this.instance.toneMapping=Dl,this.instance.toneMappingExposure=1}resize(e,t){this.instance.setSize(e,t)}render(e,t){this.instance.render(e,t)}dispose(){this.instance.dispose()}}class Gm{_width;_height;cellSize;originX;originZ;get width(){return this._width}get height(){return this._height}cells=new Map;gridMesh;gridHelper;dockMesh;southDockMesh;northLabelMesh;southLabelMesh;northDockTexture;southDockTexture;highlightMesh;gridGroup;constructor(e=20,t=20,n=1){this._width=e,this._height=t,this.cellSize=n,this.originX=e/2,this.originZ=t/2,this.gridGroup=new $t,this.initCells(),this.createVisuals(),this.createHighlight(),this.setupDockArea(),this.setupEventListeners(),this.updateTheme(ne.get("theme"))}setupEventListeners(){U.on("theme:changed",({theme:e})=>{this.updateTheme(e)})}updateTheme(e){const t=e==="light";this.gridMesh&&this.gridMesh.material.color.setHex(t?14870768:2963272),this.gridHelper&&this.gridGroup.remove(this.gridHelper);const n=t?13358560:4016210;this.gridHelper=this.createRectGridLines(n),this.gridGroup.add(this.gridHelper)}initCells(){for(let e=0;e<this._width;e++)for(let t=0;t<this._height;t++){const n=this.getKey(e,t);this.cells.set(n,{x:e,z:t,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0})}}setupDockArea(){this.applyDockRules(0,this._width-1)}applyDockRules(e,t){for(let n=e;n<=t;n++){const i=this.getCell(n,this._height-1);i&&(i.occupied||(i.type="empty"),i.buildable=!0,i.walkable=!1);const r=this.getCell(n,this._height-2);r&&(r.buildable=!1,r.walkable=!0);const o=this.getCell(n,0);o&&(o.occupied||(o.type="empty"),o.buildable=!0,o.walkable=!1);const a=this.getCell(n,1);a&&(a.buildable=!1,a.walkable=!0)}}createVisuals(){const e=new xt(this._width*this.cellSize,this._height*this.cellSize),t=new ze({color:2963272,roughness:.8,metalness:.2});this.gridMesh=new Q(e,t),this.gridMesh.rotation.x=-Math.PI/2,this.gridMesh.position.set((this._width/2-this.originX)*this.cellSize,0,(this._height/2-this.originZ)*this.cellSize),this.gridMesh.receiveShadow=!0,this.gridGroup.add(this.gridMesh),this.gridHelper=new mt,this.gridGroup.add(this.gridHelper),this.northDockTexture=this.createHazardStripesTexture(this._width);const n=new xt(this._width*this.cellSize,this.cellSize),i=new ze({map:this.northDockTexture,roughness:.8,metalness:.1});this.dockMesh=new Q(n,i),this.dockMesh.rotation.x=-Math.PI/2,this.dockMesh.position.set((this._width/2-this.originX)*this.cellSize,.02,(this._height/2-.5)*this.cellSize),this.dockMesh.receiveShadow=!0,this.gridGroup.add(this.dockMesh),this.southDockTexture=this.createHazardStripesTexture(this._width);const r=new xt(this._width*this.cellSize,this.cellSize),o=new ze({map:this.southDockTexture,roughness:.8,metalness:.1});this.southDockMesh=new Q(r,o),this.southDockMesh.rotation.x=-Math.PI/2,this.southDockMesh.position.set((this._width/2-this.originX)*this.cellSize,.02,(-this.originZ+.5)*this.cellSize),this.southDockMesh.receiveShadow=!0,this.gridGroup.add(this.southDockMesh);const a=new xt(4*this.cellSize,this.cellSize),l=new Pi({map:this.createDockLabelTexture("INBOUND"),transparent:!0,depthWrite:!1});this.northLabelMesh=new Q(a,l),this.northLabelMesh.rotation.x=-Math.PI/2,this.northLabelMesh.position.set((this._width/2-this.originX)*this.cellSize,.03,(this._height/2-1.5)*this.cellSize),this.gridGroup.add(this.northLabelMesh);const c=new xt(4*this.cellSize,this.cellSize),h=new Pi({map:this.createDockLabelTexture("OUTBOUND"),transparent:!0,depthWrite:!1});this.southLabelMesh=new Q(c,h),this.southLabelMesh.rotation.x=-Math.PI/2,this.southLabelMesh.position.set((this._width/2-this.originX)*this.cellSize,.03,(-this.originZ+1.5)*this.cellSize),this.gridGroup.add(this.southLabelMesh)}createRectGridLines(e){const t=this.cellSize,n=[];for(let r=0;r<=this._height;r++){const o=(r-this.originZ)*t,a=-this.originX*t,l=(this._width-this.originX)*t;n.push(a,.01,o,l,.01,o)}for(let r=0;r<=this._width;r++){const o=(r-this.originX)*t,a=-this.originZ*t,l=(this._height-this.originZ)*t;n.push(o,.01,a,o,.01,l)}const i=new Pt;return i.setAttribute("position",new Mt(n,3)),new is(i,new si({color:e}))}createHazardStripesTexture(e){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");if(i){i.fillStyle="#F5A623",i.fillRect(0,0,128,128),i.fillStyle="#1A1A1A";for(let a=-128;a<256;a+=64)i.beginPath(),i.moveTo(a,0),i.lineTo(a+32,0),i.lineTo(a+32+128,128),i.lineTo(a+128,128),i.closePath(),i.fill()}const r=new tr(n);return r.wrapS=Qi,r.wrapT=Qi,r.repeat.set(e/2,.5),r}createDockLabelTexture(e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");return n&&(n.font="bold 80px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#FFFFFF",n.fillText(e,256,64)),new tr(t)}createHighlight(){const e=new xt(this.cellSize*.95,this.cellSize*.95),t=new Pi({color:5164484,transparent:!0,opacity:.5,side:nn});this.highlightMesh=new Q(e,t),this.highlightMesh.rotation.x=-Math.PI/2,this.highlightMesh.position.y=.03,this.highlightMesh.visible=!1,this.gridGroup.add(this.highlightMesh)}getObject3D(){return this.gridGroup}getGroundMesh(){return this.gridMesh}getKey(e,t){return`${e},${t}`}getCell(e,t){return this.cells.get(this.getKey(e,t))||null}worldToGrid(e){const t=Math.floor(e.x/this.cellSize+this.originX),n=Math.floor(e.z/this.cellSize+this.originZ);return t>=0&&t<this._width&&n>=0&&n<this._height?{x:t,z:n}:null}gridToWorld(e,t){return new C((e-this.originX+.5)*this.cellSize,0,(t-this.originZ+.5)*this.cellSize)}canPlace(e,t){const n=this.getCell(e,t);return n?n.buildable&&!n.occupied:!1}place(e,t,n,i){if(!this.canPlace(e,t))return!1;const r=this.getCell(e,t);if(!r)return!1;r.occupied=!0,r.type=i,r.entity=n,r.walkable=i!=="rack"&&i!=="dock"&&i!=="conveyor";const o=this.gridToWorld(e,t);return n.position.copy(o),U.emit("entity:placed",{x:e,z:t,type:i,entity:n}),!0}remove(e,t){const n=this.getCell(e,t);if(!n||!n.entity)return null;const i=n.entity,r=n.type;return n.occupied=!1,n.type="empty",n.entity=null,n.walkable=!0,n.buildable=!0,U.emit("entity:removed",{x:e,z:t,type:r,entity:i}),i}highlightCell(e,t){const n=this.worldToGrid(e);if(n){const i=this.canPlace(n.x,n.z),r=t&&i,o=this.gridToWorld(n.x,n.z);this.highlightMesh.position.set(o.x,.03,o.z),this.highlightMesh.material.color.setHex(r?5164484:16739179),this.highlightMesh.visible=!0}else this.highlightMesh.visible=!1}hideHighlight(){this.highlightMesh.visible=!1}getCellsByType(e){const t=[];return this.cells.forEach(n=>{n.type===e&&t.push(n)}),t}getNeighbors(e,t){const n=[],i=[{dx:0,dz:1},{dx:0,dz:-1},{dx:1,dz:0},{dx:-1,dz:0}];for(const{dx:r,dz:o}of i){const a=this.getCell(e+r,t+o);a&&a.walkable&&n.push(a)}return n}isInBounds(e,t){return e>=0&&e<this._width&&t>=0&&t<this._height}expand(e){if(e<=0)return;const t=Math.floor(e/2),n=e-t,i=this._width;if(this._width+=e,t>0){const r=Array.from(this.cells.entries());this.cells.clear();for(const[,o]of r)o.x+=t,this.cells.set(this.getKey(o.x,o.z),o);this.originX+=t}for(let r=0;r<t;r++)for(let o=0;o<this._height;o++)this.cells.set(this.getKey(r,o),{x:r,z:o,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});for(let r=i+t;r<this._width;r++)for(let o=0;o<this._height;o++)this.cells.set(this.getKey(r,o),{x:r,z:o,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});t>0&&this.applyDockRules(0,t-1),n>0&&this.applyDockRules(i+t,this._width-1),this.gridMesh.geometry.dispose(),this.gridMesh.geometry=new xt(this._width*this.cellSize,this._height*this.cellSize),this.gridMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.dockMesh.geometry.dispose(),this.dockMesh.geometry=new xt(this._width*this.cellSize,this.cellSize),this.dockMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.northDockTexture.repeat.set(this._width/2,.5),this.northDockTexture.needsUpdate=!0,this.southDockMesh.geometry.dispose(),this.southDockMesh.geometry=new xt(this._width*this.cellSize,this.cellSize),this.southDockMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.southDockTexture.repeat.set(this._width/2,.5),this.southDockTexture.needsUpdate=!0,this.updateTheme(ne.get("theme")),U.emit("grid:expanded",{width:this._width,height:this._height,shiftX:t,shiftZ:0})}expandVertical(e){if(e<=0)return;const t=this._height;this._height+=e;for(let n=0;n<this._width;n++){const i=this.getCell(n,t-1);i&&(i.walkable=!0);const r=this.getCell(n,t-2);r&&(r.buildable=!0)}for(let n=t;n<this._height;n++)for(let i=0;i<this._width;i++)this.cells.set(this.getKey(i,n),{x:i,z:n,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});this.applyDockRules(0,this._width-1),this.gridMesh.geometry.dispose(),this.gridMesh.geometry=new xt(this._width*this.cellSize,this._height*this.cellSize),this.gridMesh.position.setZ((this._height/2-this.originZ)*this.cellSize),this.dockMesh.position.setZ((this._height-this.originZ-.5)*this.cellSize),this.northLabelMesh.position.setZ((this._height-this.originZ-1.5)*this.cellSize),this.updateTheme(ne.get("theme")),U.emit("grid:expanded",{width:this._width,height:this._height,shiftX:0,shiftZ:0})}}class An{id;type;mesh;gridX=0;gridZ=0;constructor(e){this.id=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,this.type=e,this.mesh=new $t,this.mesh.userData.entityId=this.id,this.mesh.userData.entityType=e}setGridPosition(e,t){this.gridX=e,this.gridZ=t}getGridPosition(){return{x:this.gridX,z:this.gridZ}}setWorldPosition(e){this.mesh.position.copy(e)}getWorldPosition(){return this.mesh.position.clone()}update(e){}dispose(){this.mesh.traverse(e=>{e instanceof Q&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}toData(){return{id:this.id,type:this.type,gridX:this.gridX,gridZ:this.gridZ}}}let fc,pc,qs,Ys,mc,gc,Sl=!1;function Hm(){Sl||(Sl=!0,fc=new pe(.9,.05,.9),pc=new ze({color:9132587,roughness:.9,metalness:.1}),qs=new pe(.8,.3,.8),Ys=new ze({color:13215339,roughness:.8,metalness:.1}),mc=new pe(.3,.03,.3),gc=new ze({color:4871528,roughness:.7,metalness:.2}))}function En(){Hm();const s=new $t,e=new Q(fc,pc);e.position.set(0,.025,0),e.castShadow=!0,e.receiveShadow=!0,s.add(e);const t=new Q(qs,Ys);t.position.set(0,.2,0),t.castShadow=!0,t.receiveShadow=!0,s.add(t);const n=new Q(qs,Ys);n.position.set(0,.5,0),n.castShadow=!0,n.receiveShadow=!0,s.add(n);const i=new Q(qs,Ys);i.position.set(0,.8,0),i.castShadow=!0,i.receiveShadow=!0,s.add(i);const r=new Q(mc,gc);return r.position.set(0,.19,0),r.castShadow=!0,s.add(r),s}class vc extends An{contents=1;constructor(){super("pallet"),this.createMesh()}createMesh(){const e=En();this.mesh.add(e)}}class rn extends An{static CONTAINER_BACK_OFFSET=1.8;static ANIM_DURATION_MS=2e3;static ANIM_DURATION_SECONDS=rn.ANIM_DURATION_MS/1e3;state="arriving";direction="inbound";pallets=[];maxPallets=4;dockPosition=0;containerMesh=null;palletMeshes=[];palletCountSprite=null;palletCountCanvas=null;palletCountTexture=null;deadlineTime=0;deadlineMaxTime=0;deadlineActive=!1;timerSprite=null;timerCanvas=null;timerTexture=null;flashPhase=0;constructor(e=4,t=0){super("truck"),this.maxPallets=e,this.dockPosition=t,this.createMesh(),this.applyScaleForPallets(e),this.createPalletVisuals(e),this.createPalletCountIndicator()}applyScaleForPallets(e){const t=Math.max(.7,Math.min(1.6,1+(e-4)*.05));this.mesh.scale.set(t,t,t)}createMesh(){const e=new pe(1.2,.9,1),t=new ze({color:4020864,roughness:.6,metalness:.4}),n=new Q(e,t);n.position.set(0,.5,-1.6),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new pe(.9,.4,.02),r=new ze({color:8900331,roughness:.2,metalness:.8}),o=new Q(i,r);o.position.set(0,.75,-1.1),this.mesh.add(o);const a=new pe(1.8,1.2,2.8),l=new ze({color:7438486,roughness:.7,metalness:.3});this.containerMesh=new Q(a,l),this.containerMesh.position.set(0,.65,.4),this.containerMesh.castShadow=!0,this.containerMesh.receiveShadow=!0,this.mesh.add(this.containerMesh);const c=new pe(1.65,1,.08),h=new ze({color:4871528,roughness:.7,metalness:.4}),d=new Q(c,h);d.position.set(0,.6,1.85),d.name="containerDoor",d.castShadow=!0,this.mesh.add(d);const f=new Ft(.22,.22,.18,12),m=new ze({color:1712172,roughness:.9,metalness:.1});[[-.65,.22,-1.5],[.65,.22,-1.5],[-.65,.22,0],[.65,.22,0],[-.65,.22,.8],[.65,.22,.8]].forEach(([v,p,u])=>{const _=new Q(f,m);_.rotation.z=Math.PI/2,_.position.set(v,p,u),_.castShadow=!0,this.mesh.add(_)})}createPalletVisuals(e){const t=[[-.35,.25,-.3],[.35,.25,-.3],[-.35,.25,.4],[.35,.25,.4]];for(let n=0;n<Math.min(e,3);n++){const i=En();i.scale.set(.35,.35,.35),i.position.set(t[n][0],t[n][1],t[n][2]),this.containerMesh&&this.containerMesh.add(i),this.palletMeshes.push(i)}}createPalletCountIndicator(){this.palletCountCanvas=document.createElement("canvas"),this.palletCountCanvas.width=128,this.palletCountCanvas.height=64,this.palletCountTexture=new tr(this.palletCountCanvas),this.palletCountTexture.minFilter=Xt;const e=new Io({map:this.palletCountTexture,transparent:!0,depthTest:!1});this.palletCountSprite=new cl(e),this.palletCountSprite.scale.set(1,.5,1),this.palletCountSprite.position.set(0,1.8,.4),this.mesh.add(this.palletCountSprite),this.updatePalletCountIndicator()}updatePalletCountIndicator(){if(!this.palletCountCanvas||!this.palletCountTexture)return;const e=this.palletCountCanvas.getContext("2d");if(!e)return;const t=this.palletMeshes.length,n=this.maxPallets;e.clearRect(0,0,this.palletCountCanvas.width,this.palletCountCanvas.height),e.fillStyle=t>0?"rgba(59, 130, 246, 0.9)":"rgba(34, 197, 94, 0.9)",e.beginPath(),e.roundRect(24,12,80,40,16),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.8)",e.lineWidth=2,e.stroke(),e.fillStyle="white",e.font="bold 24px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(`${t}/${n}`,64,32),this.palletCountTexture.needsUpdate=!0}dock(){this.state="docked";const e=this.mesh.getObjectByName("containerDoor");e&&(e.rotation.y=-Math.PI/2,e.position.x=.9)}unloadPallet(){if(this.palletMeshes.length===0)return null;this.state="unloading";const e=this.palletMeshes.pop();e&&this.containerMesh&&(this.containerMesh.remove(e),e.traverse(n=>{n instanceof Q&&(n.geometry?.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()))})),this.updatePalletCountIndicator();const t=new vc;return this.palletMeshes.length===0&&(this.state="docked"),t}loadPallet(){if(this.palletMeshes.length>=this.maxPallets)return console.warn("[Truck] Cannot load pallet: truck is full"),!1;this.state="loading";const e=[[-.35,.25,-.3],[.35,.25,-.3],[-.35,.25,.4],[.35,.25,.4]],t=this.palletMeshes.length%4,n=En();return n.scale.set(.35,.35,.35),n.position.set(e[t][0],e[t][1],e[t][2]),this.containerMesh&&this.containerMesh.add(n),this.palletMeshes.push(n),this.updatePalletCountIndicator(),!0}canLoadPallet(){return this.palletMeshes.length<this.maxPallets&&(this.state==="docked"||this.state==="loading")}isFullyLoaded(){return this.palletMeshes.length>=this.maxPallets}getPalletsRemaining(){return this.palletMeshes.length}depart(){this.state="departing";const e=this.mesh.getObjectByName("containerDoor");e&&(e.rotation.y=0,e.position.x=0)}getAccessPositions(){const e=this.getWorldPosition(),t=this.mesh.rotation.y,n=new C(0,0,2.3);n.applyAxisAngle(new C(0,1,0),t);const i=e.clone().add(n),r=t+Math.PI;return{back:i,backRotation:r}}getClosestAccessPosition(e,t){const n=this.getAccessPositions();return{position:n.back,rotation:n.backRotation}}animateArrival(e,t){const n=this.mesh.position.z,i=e,r=rn.ANIM_DURATION_MS,o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(1,l/r),h=1-Math.pow(1-c,3);this.mesh.position.z=n+(i-n)*h,c<1?requestAnimationFrame(a):(this.dock(),t&&t())};a()}animateDeparture(e,t){this.depart();const n=this.mesh.position.z,i=n+3*e,r=rn.ANIM_DURATION_MS,o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(1,l/r),h=c*c;this.mesh.position.z=n+(i-n)*h,c<1?requestAnimationFrame(a):(this.state="gone",t&&t())};a()}setDeadline(e){this.deadlineTime=e,this.deadlineMaxTime=e,this.deadlineActive=!0,this.createTimerIndicator()}getDeadlineTime(){return this.deadlineTime}isDeadlineActive(){return this.deadlineActive}createTimerIndicator(){if(this.timerSprite)return;this.timerCanvas=document.createElement("canvas"),this.timerCanvas.width=128,this.timerCanvas.height=128,this.timerTexture=new tr(this.timerCanvas),this.timerTexture.minFilter=Xt;const e=new Io({map:this.timerTexture,transparent:!0,depthTest:!1});this.timerSprite=new cl(e),this.timerSprite.scale.set(1.4,1.4,1),this.timerSprite.position.set(0,2.6,.4),this.mesh.add(this.timerSprite),this.renderTimerCanvas(1)}renderTimerCanvas(e,t=!0){if(!this.timerCanvas||!this.timerTexture)return;const n=this.timerCanvas.getContext("2d");if(!n)return;const i=this.timerCanvas.width,r=i/2,o=i/2,a=54,l=36;if(n.clearRect(0,0,i,i),!t){this.timerTexture.needsUpdate=!0;return}if(n.beginPath(),n.arc(r,o,a,0,Math.PI*2),n.arc(r,o,l,0,Math.PI*2,!0),n.fillStyle="rgba(50, 50, 50, 0.7)",n.fill(),e>0){let c,h,d;if(e>.5){const v=(e-.5)/.5;c=Math.round(255*(1-v)),h=220,d=0}else{const v=e/.5;c=255,h=Math.round(220*v),d=0}const f=`rgba(${c},${h},${d},0.95)`,m=-Math.PI/2,g=m+e*Math.PI*2;n.beginPath(),n.arc(r,o,a,m,g),n.arc(r,o,l,g,m,!0),n.closePath(),n.fillStyle=f,n.fill()}n.beginPath(),n.arc(r,o,6,0,Math.PI*2),n.fillStyle="rgba(255,255,255,0.6)",n.fill(),this.timerTexture.needsUpdate=!0}update(e){if(this.deadlineActive&&this.deadlineMaxTime>0){this.deadlineTime=Math.max(0,this.deadlineTime-e);const t=this.deadlineTime/this.deadlineMaxTime;if(t<.2){this.flashPhase+=e*Math.PI*4;const i=Math.sin(this.flashPhase)>=0;this.renderTimerCanvas(t,i)}else this.renderTimerCanvas(t)}}}function _c(s){const e=Math.floor(1+s*.5),t=Math.floor(2+s*.3),n=e*t,i=1+Math.floor(s/3)/2,r=Math.max(1,Math.round(.6*n/i));return{truckCount:e,palletsPerTruck:t,timeBetweenTrucks:Math.max(8,15-s*.5),totalWaveTime:Math.min(180,60+s*10),outboundOrderCount:r}}class Wm{grid;scene;activeTrucks=[];waveTimer=0;trucksSpawned=0;totalPalletsToUnload=0;palletsUnloaded=0;isWaveActive=!1;availableDocks=new Set;outboundActiveCallback=null;pendingOrdersCallback=null;constructor(e,t){this.scene=e,this.grid=t}setOutboundActiveCallback(e){this.outboundActiveCallback=e}setPendingOrdersCallback(e){this.pendingOrdersCallback=e}getWaveConfig(e){return _c(e)}startWave(){const e=ne.get("wave"),t=this.getWaveConfig(e);this.isWaveActive=!0,this.waveTimer=t.totalWaveTime,this.trucksSpawned=0,this.totalPalletsToUnload=t.truckCount*t.palletsPerTruck,this.palletsUnloaded=0;const n=this.grid.getCellsByType("dock").filter(i=>i.z===this.grid.height-1).map(i=>i.x);this.availableDocks=new Set(n),U.emit("wave:start",{wave:e,config:t,totalPallets:this.totalPalletsToUnload}),this.spawnTruck(t)}spawnTruck(e){if(this.trucksSpawned>=e.truckCount)return;const t=this.grid.getCellsByType("dock").filter(l=>l.z===this.grid.height-1).map(l=>l.x);this.availableDocks.clear();for(const l of t)this.activeTrucks.some(h=>h.dockPosition===l&&h.state!=="gone")||this.availableDocks.add(l);if(this.availableDocks.size===0)return;const n=Array.from(this.availableDocks),i=n[Math.floor(Math.random()*n.length)];this.availableDocks.delete(i);const r=new rn(e.palletsPerTruck,i),o=this.grid.gridToWorld(i,this.grid.height-1);r.mesh.position.set(o.x,0,o.z+3),r.mesh.rotation.y=Math.PI,this.scene.add(r.mesh),this.activeTrucks.push(r),this.trucksSpawned++,r.setDeadline(Math.max(0,this.waveTimer));const a=o.z+rn.CONTAINER_BACK_OFFSET;r.animateArrival(a,()=>{U.emit("truck:docked",{truck:r,dockX:i,dockZ:this.grid.height-1}),U.emit("truck:arrived",{dockPosition:i,pallets:e.palletsPerTruck})})}unloadPalletFromTruck(e){if(e.state!=="docked"&&e.state!=="unloading"||!e.unloadPallet())return null;this.palletsUnloaded++;const n=e.mesh.position.clone();return new C(n.x,0,n.z-1)}getActiveTrucks(){return this.activeTrucks.filter(e=>e.state==="docked"||e.state==="unloading")}getTruckWithPallets(){return this.activeTrucks.find(e=>(e.state==="docked"||e.state==="unloading")&&e.getPalletsRemaining()>0)||null}lastProgressUpdate=0;update(e){if(!this.isWaveActive)return;const t=this.getWaveConfig(ne.get("wave"));for(this.waveTimer-=e,this.lastProgressUpdate+=e,this.lastProgressUpdate>=1&&(this.lastProgressUpdate=0,U.emit("wave:progress",{timeRemaining:Math.max(0,this.waveTimer),palletsUnloaded:this.palletsUnloaded,totalPallets:this.totalPalletsToUnload,trucksRemaining:t.truckCount-this.trucksSpawned+this.activeTrucks.length}));this.trucksSpawned<t.truckCount;){const i=this.trucksSpawned;if(this.spawnTruck(t),this.trucksSpawned===i)break}this.activeTrucks.forEach(i=>i.update(e)),this.activeTrucks.forEach(i=>{i.state==="docked"&&i.getPalletsRemaining()===0&&(console.log("[WaveManager] Truck empty, initiating departure"),this.truckDepart(i))});const n=this.activeTrucks.length;this.activeTrucks=this.activeTrucks.filter(i=>i.state==="gone"?(console.log("[WaveManager] Removing gone truck from activeTrucks"),this.scene.remove(i.mesh),i.dispose(),!1):!0),n!==this.activeTrucks.length&&console.log(`[WaveManager] Trucks remaining: ${this.activeTrucks.length}, spawned: ${this.trucksSpawned}`),this.checkWaveComplete()}truckDepart(e){this.availableDocks.add(e.dockPosition),e.animateDeparture(1,()=>{console.log("[WaveManager] Truck departure animation complete, setting state to gone")})}checkWaveComplete(){const e=this.getWaveConfig(ne.get("wave")),t=this.trucksSpawned>=e.truckCount,n=this.activeTrucks.length===0,i=this.outboundActiveCallback?this.outboundActiveCallback():!1,r=this.pendingOrdersCallback?this.pendingOrdersCallback():!1;return this.waveTimer<=0||t&&n&&!i&&!r?(this.activeTrucks.forEach(o=>{o.getPalletsRemaining()>0&&ne.failInboundTruck()}),console.log("[WaveManager] Wave complete! Emitting wave:complete event"),this.isWaveActive=!1,ne.completeWave(),!0):!1}isActive(){return this.isWaveActive}getWaveProgress(){return{palletsUnloaded:this.palletsUnloaded,totalPallets:this.totalPalletsToUnload,timeRemaining:Math.max(0,this.waveTimer)}}serialize(){return JSON.stringify({isWaveActive:this.isWaveActive,waveTimer:this.waveTimer,trucksSpawned:this.trucksSpawned,totalPalletsToUnload:this.totalPalletsToUnload,palletsUnloaded:this.palletsUnloaded,activeTrucks:this.activeTrucks.map(e=>({dockPosition:e.dockPosition,palletsRemaining:e.getPalletsRemaining()}))})}restoreFromSave(e){try{const t=JSON.parse(e);this.isWaveActive=t.isWaveActive??!1,this.waveTimer=t.waveTimer??0,this.trucksSpawned=t.trucksSpawned??0,this.totalPalletsToUnload=t.totalPalletsToUnload??0,this.palletsUnloaded=t.palletsUnloaded??0;for(const n of t.activeTrucks??[]){const i=new rn(n.palletsRemaining,n.dockPosition),r=this.grid.gridToWorld(n.dockPosition,this.grid.height-1);i.mesh.position.set(r.x,0,r.z+rn.CONTAINER_BACK_OFFSET),i.mesh.rotation.y=Math.PI,i.dock(),this.scene.add(i.mesh),this.activeTrucks.push(i),U.emit("truck:docked",{truck:i,dockX:n.dockPosition,dockZ:this.grid.height-1})}}catch(t){console.error("Failed to restore wave state:",t)}}reset(){this.activeTrucks.forEach(e=>{this.scene.remove(e.mesh),e.dispose()}),this.activeTrucks=[],this.isWaveActive=!1,this.trucksSpawned=0,this.palletsUnloaded=0}}class Vm{grid;scene;activeTrucks=new Map;availableOutboundDocks=new Set;pendingQueue=[];constructor(e,t){this.scene=e,this.grid=t,this.setupEventListeners()}setupEventListeners(){U.on("outbound:request-truck",({orderId:e,quantity:t,reward:n,dockTime:i})=>{this.requestTruckForOrder(e,t,n,i)}),U.on("outbound:pallet-loaded",({truckId:e,orderId:t})=>{this.onPalletLoaded(e,t)}),U.on("outbound:order-expired",({orderId:e})=>{this.onOrderExpired(e)})}refreshAvailableDocks(){const e=this.grid.getCellsByType("dock").filter(t=>t.z===0).map(t=>t.x);for(const t of e){let n=!1;for(const i of this.activeTrucks.values())if(i.truck.dockPosition===t&&i.truck.state!=="gone"){n=!0;break}n||this.availableOutboundDocks.add(t)}for(const t of this.availableOutboundDocks)e.includes(t)||this.availableOutboundDocks.delete(t)}requestTruckForOrder(e,t,n,i){if(this.refreshAvailableDocks(),this.availableOutboundDocks.size===0)return console.warn("[OutboundTruckManager] No available outbound docks, queuing request for order",e),this.pendingQueue.push({orderId:e,quantity:t,reward:n,dockTime:i}),null;const r=Array.from(this.availableOutboundDocks),o=r[Math.floor(Math.random()*r.length)];this.availableOutboundDocks.delete(o);const a=new rn(0,o);a.maxPallets=t;const l=this.grid.gridToWorld(o,0);a.mesh.position.set(l.x,0,l.z-3),a.mesh.rotation.y=0,this.scene.add(a.mesh);const c={orderId:e,quantity:t,palletsLoaded:0,reward:n};this.activeTrucks.set(a.id,{truck:a,order:c}),i&&i>0&&a.setDeadline(i);const h=l.z-rn.CONTAINER_BACK_OFFSET;return a.animateArrival(h,()=>{U.emit("outbound:truck-docked",{truck:a,dockX:o,dockZ:0,orderId:c.orderId,quantity:c.quantity})}),console.log(`[OutboundTruckManager] Truck ${a.id} arriving for order ${e} (${t} pallets)`),a}onPalletLoaded(e,t){const n=this.activeTrucks.get(e);if(!n||n.order.orderId!==t){console.warn(`[OutboundTruckManager] Unknown truck ${e} or mismatched order`);return}n.order.palletsLoaded++,console.log(`[OutboundTruckManager] Truck ${e}: ${n.order.palletsLoaded}/${n.order.quantity} pallets loaded`),n.order.palletsLoaded>=n.order.quantity&&(console.log(`[OutboundTruckManager] Truck ${e} fully loaded, initiating departure`),this.truckDepart(n.truck,n.order))}onOrderExpired(e){const t=this.pendingQueue.findIndex(n=>n.orderId===e);if(t!==-1){this.pendingQueue.splice(t,1);return}for(const[n,i]of this.activeTrucks)if(i.order.orderId===e){console.log(`[OutboundTruckManager] Order ${e} expired, truck ${n} departing incomplete`),this.truckDepartIncomplete(i.truck,i.order);return}}getTruckForOrder(e){for(const[,t]of this.activeTrucks)if(t.order.orderId===e&&(t.truck.state==="docked"||t.truck.state==="unloading"))return t.truck;return null}getTruck(e){return this.activeTrucks.get(e)?.truck??null}getActiveTrucks(){return Array.from(this.activeTrucks.values()).filter(e=>e.truck.state==="docked"||e.truck.state==="unloading"||e.truck.state==="loading")}getTrucksNeedingTasks(){const e=[];for(const t of this.activeTrucks.values())(t.truck.state==="docked"||t.truck.state==="loading")&&t.order.palletsLoaded<t.order.quantity&&e.push({truck:t.truck,order:t.order,dockX:t.truck.dockPosition,dockZ:0});return e}getDockPosition(e){return{gridX:e.dockPosition,gridZ:0}}truckDepart(e,t){ne.addMoney(t.reward),ne.completeOrder(),U.emit("outbound:order-completed",{orderId:t.orderId,reward:t.reward,palletsShipped:t.palletsLoaded}),e.animateDeparture(-1,()=>{this.availableOutboundDocks.add(e.dockPosition),this.processPendingQueue(),console.log(`[OutboundTruckManager] Truck ${e.id} departed for order ${t.orderId}`)}),U.emit("outbound:truck-departed",{truckId:e.id,orderId:t.orderId})}truckDepartIncomplete(e,t){console.log(`[OutboundTruckManager] Truck ${e.id} departing incomplete with ${t.palletsLoaded}/${t.quantity} pallets`),e.animateDeparture(-1,()=>{this.availableOutboundDocks.add(e.dockPosition),this.processPendingQueue()})}processPendingQueue(){for(;this.pendingQueue.length>0&&(this.refreshAvailableDocks(),this.availableOutboundDocks.size!==0);){const e=this.pendingQueue.shift();this.requestTruckForOrder(e.orderId,e.quantity,e.reward,e.dockTime)}}update(e){for(const[t,n]of this.activeTrucks)n.truck.update(e);for(const[t,n]of this.activeTrucks)n.truck.state==="gone"&&(console.log(`[OutboundTruckManager] Removing gone truck ${t}`),this.scene.remove(n.truck.mesh),n.truck.dispose(),this.activeTrucks.delete(t));this.processPendingQueue()}reset(){for(const[,e]of this.activeTrucks)this.scene.remove(e.truck.mesh),e.truck.dispose();this.activeTrucks.clear(),this.availableOutboundDocks.clear(),this.pendingQueue=[]}getActiveCount(){return this.activeTrucks.size}hasAvailableDock(){return this.refreshAvailableDocks(),this.availableOutboundDocks.size>0}}class Xm{orders=[];orderIdCounter=0;currentWaveTimeRemaining=null;constructor(){U.on("pallet:stored",()=>{}),U.on("outbound:order-completed",({orderId:e})=>{this.completeOrder(e)}),U.on("wave:start",({config:e})=>{e&&typeof e.totalWaveTime=="number"?(this.currentWaveTimeRemaining=e.totalWaveTime,this.adjustPreviewOrderTimers()):this.currentWaveTimeRemaining=null}),U.on("wave:progress",({timeRemaining:e})=>{this.currentWaveTimeRemaining=e,this.clampActiveOrderTimers()}),U.on("wave:complete",()=>{this.currentWaveTimeRemaining=null}),U.on("outbound:truck-docked",({orderId:e,quantity:t,truck:n,dockX:i,dockZ:r})=>{U.emit("order:needs-loading",{orderId:e,quantity:t,truck:n,dockX:i,dockZ:r})})}getOrderConfig(e){return{minQuantity:1,maxQuantity:1+Math.floor(e/3),autoLaunchTime:Math.max(30,60-e*2),maxDockTime:Math.max(30,60-e*2),reward:50+e*10}}createOrder(e){return this._createOrderWithStatus(e,"pending")}prepareForWave(e,t,n){const i=[];let r=null;if(typeof n=="number"&&n>0&&t>0){const a=n/(t+1),c=this.getOrderConfig(e).maxDockTime,h=Math.max(1,Math.round(a*.15));r=[];for(let d=0;d<t;d++){const f=Math.round(a*(d+1)),m=Math.floor(Math.random()*(h*2+1))-h;let g=f+m;g=Math.max(1,Math.min(n-1,g)),r.push(g)}r.sort((d,f)=>d-f);for(let d=0;d<r.length;d++){const f=Math.min(n-c,r[d]);r[d]>f&&(r[d]=f),d>0&&r[d]<=r[d-1]&&(r[d]=r[d-1]+1)}}let o=-1;for(let a=0;a<t;a++){const l=r?r[a]:void 0,c=this._createOrderWithStatus(e,"preview",l);if(typeof n=="number"&&n>0){const h=Math.min(n-c.maxDockTime,c.autoLaunchTime);c.autoLaunchTime>h&&(c.autoLaunchTime=h)}c.autoLaunchTime<=o&&(c.autoLaunchTime=o+1),o=c.autoLaunchTime,i.push(c)}return i}activateWaveOrders(){const e=this.orders.filter(t=>t.status==="preview");for(const t of e)t.status="pending",ne.addPendingOrder(),U.emit("order:created",t)}getPreviewOrders(){return this.orders.filter(e=>e.status==="preview")}_createOrderWithStatus(e,t,n){const i=this.getOrderConfig(e),r=Math.floor(Math.random()*(i.maxQuantity-i.minQuantity+1)+i.minQuantity),o={id:`order-${++this.orderIdCounter}`,quantity:r,autoLaunchTime:typeof n=="number"?n:i.autoLaunchTime,dockTimeRemaining:0,maxDockTime:i.maxDockTime,reward:i.reward*r,createdAt:Date.now(),status:t,palletsLoaded:0};return this.orders.push(o),t==="pending"&&(ne.addPendingOrder(),U.emit("order:created",o)),o}adjustPreviewOrderTimers(){if(this.currentWaveTimeRemaining!=null)for(const e of this.orders)e.status==="preview"&&(e.autoLaunchTime=Math.min(e.autoLaunchTime,this.currentWaveTimeRemaining),e.autoLaunchTime<0&&(e.autoLaunchTime=0))}clampActiveOrderTimers(){if(this.currentWaveTimeRemaining!=null)for(const e of this.orders)e.status==="pending"&&e.autoLaunchTime>this.currentWaveTimeRemaining&&(e.autoLaunchTime=Math.max(0,this.currentWaveTimeRemaining)),(e.status==="awaiting-truck"||e.status==="loading")&&e.dockTimeRemaining>this.currentWaveTimeRemaining&&(e.dockTimeRemaining=Math.max(0,this.currentWaveTimeRemaining))}fulfillOrder(e,t=!1){const n=this.getOrderById(e);if(!n)return!1;if(n.status!=="pending")return console.log(`[OrderManager] Order ${e} already being processed (status: ${n.status})`),!1;const i=ne.get("storedPallets");if(!t&&i<n.quantity)return!1;const r=o=>this.currentWaveTimeRemaining!=null?Math.min(o,this.currentWaveTimeRemaining):o;if(t)n.dockTimeRemaining=r(n.maxDockTime),console.log(`[OrderManager] Order ${e} auto-launched with dock time ${n.dockTimeRemaining.toFixed(1)}s`);else{n.dockTimeRemaining=r(n.maxDockTime);const o=Math.floor(n.reward*.2);n.reward+=o,console.log(`[OrderManager] Order ${e} shipped early: dock time ${n.dockTimeRemaining.toFixed(1)}s, bonus $${o}`)}return n.status="awaiting-truck",U.emit("outbound:request-truck",{orderId:n.id,quantity:n.quantity,reward:n.reward,dockTime:n.dockTimeRemaining}),!0}onPalletLoaded(e){const t=this.getOrderById(e);t&&(t.palletsLoaded++,t.status="loading",ne.removeStoredPallet(),U.emit("order:pallet-loaded",{orderId:e,palletsLoaded:t.palletsLoaded,palletsTotal:t.quantity}))}completeOrder(e){const t=this.orders.findIndex(i=>i.id===e);if(t===-1)return;const n=this.orders[t];n.status="shipped",this.orders.splice(t,1)}expireOrder(e){const t=this.orders.indexOf(e);t!==-1&&((e.status==="awaiting-truck"||e.status==="loading")&&U.emit("outbound:order-expired",{orderId:e.id}),this.orders.splice(t,1),ne.failOrder(),U.emit("order:expired",{orderId:e.id,reason:"dock-time"}))}update(e){const t=ne.get("phase"),n=[],i=[];this.orders.forEach(r=>{if(t==="operations")switch(r.status){case"preview":break;case"pending":r.autoLaunchTime-=e,r.autoLaunchTime<=0&&i.push(r);break;case"awaiting-truck":case"loading":r.dockTimeRemaining>0&&(r.dockTimeRemaining-=e,r.dockTimeRemaining<=0&&(console.log(`[OrderManager] Order ${r.id} dock time expired!`),n.push(r)));break}}),i.forEach(r=>{console.log(`[OrderManager] Auto-launching order ${r.id}`),this.fulfillOrder(r.id,!0)}),n.forEach(r=>this.expireOrder(r))}getOrders(){return this.orders}getOrderById(e){return this.orders.find(t=>t.id===e)}canFulfillOrder(e){const t=this.getOrderById(e);return t?ne.get("storedPallets")>=t.quantity:!1}getPendingOrderCount(){return this.orders.length}hasUnshippedOrders(){return this.orders.some(e=>e.status!=="shipped"&&e.status!=="preview")}getCommittedPallets(){return this.orders.filter(e=>e.status!=="shipped"&&e.status!=="preview").reduce((e,t)=>e+t.quantity,0)}reset(){this.orders=[],this.orderIdCounter=0}serialize(){return JSON.stringify({orders:this.orders,orderIdCounter:this.orderIdCounter})}deserialize(e){try{const t=JSON.parse(e);this.orders=t.orders||[],this.orderIdCounter=t.orderIdCounter||0}catch(t){console.error("Failed to deserialize orders:",t)}}}const nr=25,ir=50,yc=300,Uo=4,Oo=4;function No(s){return Math.floor(yc*Math.pow(1.5,s))}function Fo(s){return Math.floor(yc*Math.pow(1.5,s))}const Wt={rack:{type:"rack",name:"Rack",cost:150,sellValue:75,description:"Stores up to 4 pallets vertically",icon:"🗄️",storageCapacity:4},"floor-slot":{type:"floor-slot",name:"Floor Slot",cost:20,sellValue:10,description:"Ground storage for 1 pallet",icon:"⬜",storageCapacity:1},conveyor:{type:"conveyor",name:"Conveyor",cost:100,sellValue:50,description:"Moves pallets automatically",icon:"➡️"},diverter:{type:"diverter",name:"Diverter",cost:150,sellValue:75,description:"Splits pallets to front, left and right via round-robin",icon:"🔀"},forklift:{type:"forklift",name:"Forklift",cost:500,sellValue:250,description:`Transports pallets, handles racks (wage: $${ir}/wave)`,icon:"🚜"},operator:{type:"operator",name:"Operator",cost:150,sellValue:75,description:`Manual labor for boxes (wage: $${nr}/wave)`,icon:"👷"},"truck-dock":{type:"truck-dock",name:"Truck Dock",cost:500,sellValue:250,description:"Allows trucks to dock and unload/load",icon:"🚛"},"stacker-crane":{type:"stacker-crane",name:"Stacker Crane",cost:1e4,sellValue:5e3,description:"AS/RS stacker crane — $10,000 base + $1,000/row. Includes 8-level racks & conveyors",icon:"🏗️"}};class $m{buildCounts=new Map;waveHistory=[];currentWaveOrderIncome=0;constructor(){U.on("entity:placed:complete",({type:e})=>{e&&Wt[e]&&this.incrementBuildCount(e)}),U.on("entity:removed:complete",({type:e})=>{e&&Wt[e]&&this.decrementBuildCount(e)}),U.on("outbound:order-completed",({reward:e})=>{this.currentWaveOrderIncome+=e}),U.on("wave:start",()=>{this.currentWaveOrderIncome=0})}getBuildableConfig(e){return Wt[e]}getAllBuildables(){return Object.values(Wt)}canAfford(e){const t=Wt[e];return ne.canAfford(t.cost)}getHiredWorkerCount(){return this.getBuildCount("operator")+this.getBuildCount("forklift")}canHireWorker(){return this.getHiredWorkerCount()<ne.get("workerLimit")}purchase(e){const t=Wt[e];if((e==="operator"||e==="forklift")&&!this.canHireWorker()||!ne.spendMoney(t.cost))return!1;if(t.storageCapacity){const n=ne.get("storageCapacity");ne.updateStorageCapacity(n+t.storageCapacity)}return!0}sell(e){const t=Wt[e];if(ne.addMoney(t.sellValue),t.storageCapacity){const n=ne.get("storageCapacity");ne.updateStorageCapacity(Math.max(0,n-t.storageCapacity))}return t.sellValue}incrementBuildCount(e){const t=this.buildCounts.get(e)||0;this.buildCounts.set(e,t+1)}decrementBuildCount(e){const t=this.buildCounts.get(e)||0;this.buildCounts.set(e,Math.max(0,t-1))}getBuildCount(e){return this.buildCounts.get(e)||0}getTotalBuildCount(){let e=0;return this.buildCounts.forEach(t=>e+=t),e}grantWaveBonus(e){const t=100+e*25;return ne.addMoney(t),t}deductWages(){const e=this.getBuildCount("operator"),t=this.getBuildCount("forklift"),n=e*nr+t*ir;if(n>0){const i=ne.get("money"),r=Math.min(n,i);ne.spendMoney(r)}return n}pushWaveRecord(e,t,n){const i=this.currentWaveOrderIncome;this.waveHistory.push({wave:e,bonus:t,orderIncome:i,wages:n,net:t+i-n})}getCurrentWaveOrderIncome(){return this.currentWaveOrderIncome}getWaveHistory(){return[...this.waveHistory]}serialize(){return JSON.stringify({waveHistory:this.waveHistory,currentWaveOrderIncome:this.currentWaveOrderIncome})}deserialize(e){try{const t=JSON.parse(e);this.waveHistory=t.waveHistory||[],this.currentWaveOrderIncome=t.currentWaveOrderIncome||0}catch(t){console.error("Failed to deserialize economy state:",t)}}reset(){this.buildCounts.clear(),this.waveHistory=[],this.currentWaveOrderIncome=0}}const Fs="warehouse-defender-save-",wl="warehouse-defender-last-slot",zs=5,Vr=2;class qm{grid=null;getEntities=null;orderManager=null;economyManager=null;waveManager=null;currentSlot=1;setGrid(e){this.grid=e}setEntityProvider(e){this.getEntities=e}setOrderManager(e){this.orderManager=e}setEconomyManager(e){this.economyManager=e}setWaveManager(e){this.waveManager=e}getCurrentSlot(){return this.currentSlot}setCurrentSlot(e){e>=1&&e<=zs&&(this.currentSlot=e,localStorage.setItem(wl,String(e)))}restoreLastSlot(){const e=parseInt(localStorage.getItem(wl)??"1",10);this.currentSlot=isNaN(e)?1:Math.min(Math.max(e,1),zs)}saveToSlot(e,t){if(!this.grid||!this.getEntities)return console.warn("SaveManager not fully initialized"),!1;if(e<1||e>zs)return!1;try{const n=this.getEntities(),i={version:Vr,timestamp:Date.now(),slotName:t??`Save ${e}`,gameState:ne.serialize(),orders:this.orderManager?this.orderManager.serialize():'{"orders":[],"orderIdCounter":0}',economyState:this.economyManager?this.economyManager.serialize():void 0,waveState:this.waveManager?this.waveManager.serialize():void 0,gridCells:this.serializeGrid(),entities:n.map(r=>r.toData())};return localStorage.setItem(Fs+e,JSON.stringify(i)),this.setCurrentSlot(e),console.log(`Game saved to slot ${e}`),!0}catch(n){return console.error("Failed to save game:",n),!1}}save(){return this.saveToSlot(this.currentSlot)}loadFromSlot(e){try{const t=localStorage.getItem(Fs+e);if(!t)return null;const n=JSON.parse(t);return n.version!==Vr?(console.warn(`Slot ${e} has incompatible version, ignoring`),null):(this.setCurrentSlot(e),n)}catch(t){return console.error(`Failed to load slot ${e}:`,t),null}}load(){return this.loadFromSlot(this.currentSlot)}deleteSlot(e){localStorage.removeItem(Fs+e),this.currentSlot===e&&(this.currentSlot=1),console.log(`Slot ${e} deleted`)}deleteSave(){this.deleteSlot(this.currentSlot)}hasSave(){return this.getSlotInfo(this.currentSlot).exists}getSlotInfo(e){try{const t=localStorage.getItem(Fs+e);if(!t)return{slot:e,exists:!1};const n=JSON.parse(t);if(n.version!==Vr)return{slot:e,exists:!1};const i=JSON.parse(n.gameState);return{slot:e,exists:!0,timestamp:n.timestamp,wave:i.wave,slotName:n.slotName}}catch{return{slot:e,exists:!1}}}getAllSlotInfos(){const e=[];for(let t=1;t<=zs;t++)e.push(this.getSlotInfo(t));return e}getSaveInfo(){if(!this.getAllSlotInfos().some(n=>n.exists))return{exists:!1};const t=this.getAllSlotInfos().find(n=>n.exists);return t?{exists:!0,timestamp:t.timestamp,wave:t.wave}:{exists:!1}}serializeGrid(){if(!this.grid)return[];const e=[];for(let t=0;t<this.grid.width;t++)for(let n=0;n<this.grid.height;n++){const i=this.grid.getCell(t,n);i&&i.occupied&&e.push({x:i.x,z:i.z,type:i.type,occupied:i.occupied})}return e}setupAutoSave(){}}const pt=new qm;class Ym{camera;canvas;raycaster;groundPlane;state={mouseX:0,mouseY:0,mouseWorldPos:new C,isMouseDown:!1,isDragging:!1,rightMouseDown:!1,keys:new Set,touches:new Map};dragStart={x:0,y:0};DRAG_THRESHOLD=5;touchState={initialDistance:0,initialAngle:0,lastDistance:0,lastAngle:0,isPinching:!1,touchStartTime:0,touchMoved:!1,lastTouchPos:{x:0,y:0}};constructor(e,t){this.camera=e,this.canvas=t,this.raycaster=new uc,this.groundPlane=new Mn(new C(0,1,0),0),this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("mouseup",this.onMouseUp),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this.onContextMenu),this.canvas.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this.onTouchEnd,{passive:!1}),this.canvas.addEventListener("touchcancel",this.onTouchEnd,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("dragstart",t=>t.preventDefault()),U.on("input:camera-rotate-left",()=>this.camera.rotate(-Math.PI/4)),U.on("input:camera-rotate-right",()=>this.camera.rotate(Math.PI/4));const e=["isometric","top"];U.on("input:camera-view",t=>{e.includes(t)&&this.camera.setView(t)})}onMouseMove=e=>{if(this.state.mouseX=e.clientX,this.state.mouseY=e.clientY,this.updateWorldPosition(),this.state.rightMouseDown){const t=e.clientX-this.dragStart.x,n=e.clientY-this.dragStart.y;(Math.abs(t)>this.DRAG_THRESHOLD||Math.abs(n)>this.DRAG_THRESHOLD)&&(this.state.isDragging=!0,this.camera.pan(t,n),this.dragStart.x=e.clientX,this.dragStart.y=e.clientY)}U.emit("input:mousemove",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone()})};onMouseDown=e=>{e.button===0?(this.state.isMouseDown=!0,this.dragStart={x:e.clientX,y:e.clientY},U.emit("input:click",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone(),target:e.target})):e.button===2&&(this.state.rightMouseDown=!0,this.dragStart={x:e.clientX,y:e.clientY})};onMouseUp=e=>{e.button===0?(this.state.isMouseDown=!1,this.state.isDragging=!1):e.button===2&&(this.state.rightMouseDown=!1,this.state.isDragging=!1)};onWheel=e=>{e.preventDefault();const t=e.deltaY>0?-1:1;this.camera.zoomOut(t),U.emit("input:zoom",{delta:t})};onContextMenu=e=>{e.preventDefault()};onTouchStart=e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];this.state.touches.set(n.identifier,{x:n.clientX,y:n.clientY})}if(e.touches.length===1){const t=e.touches[0];this.touchState.touchStartTime=Date.now(),this.touchState.touchMoved=!1,this.touchState.lastTouchPos={x:t.clientX,y:t.clientY},this.state.mouseX=t.clientX,this.state.mouseY=t.clientY,this.updateWorldPosition()}else if(e.touches.length===2){this.touchState.isPinching=!0;const t=e.touches[0],n=e.touches[1];this.touchState.initialDistance=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),this.touchState.initialAngle=Math.atan2(n.clientY-t.clientY,n.clientX-t.clientX),this.touchState.lastDistance=this.touchState.initialDistance,this.touchState.lastAngle=this.touchState.initialAngle}};onTouchMove=e=>{e.preventDefault();const t=e.touches;for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches[n];this.state.touches.set(i.identifier,{x:i.clientX,y:i.clientY})}if(t.length===1){const n=t[0],i=n.clientX-this.touchState.lastTouchPos.x,r=n.clientY-this.touchState.lastTouchPos.y;(Math.abs(i)>this.DRAG_THRESHOLD||Math.abs(r)>this.DRAG_THRESHOLD)&&(this.touchState.touchMoved=!0,this.camera.pan(i,r)),this.touchState.lastTouchPos={x:n.clientX,y:n.clientY},this.state.mouseX=n.clientX,this.state.mouseY=n.clientY,this.updateWorldPosition()}else if(t.length===2){const n=t[0],i=t[1],r=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),o=Math.atan2(i.clientY-n.clientY,i.clientX-n.clientX),a=r-this.touchState.lastDistance;if(Math.abs(a)>2){const c=a*.05;this.camera.zoomOut(-c),this.touchState.lastDistance=r}let l=o-this.touchState.lastAngle;l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),Math.abs(l)>.02&&(this.camera.rotate(l),this.touchState.lastAngle=o),this.touchState.touchMoved=!0}};onTouchEnd=e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)this.state.touches.delete(e.changedTouches[t].identifier);if(e.touches.length===0){const t=Date.now()-this.touchState.touchStartTime;if(!this.touchState.touchMoved&&t<300){const n=e.changedTouches[0],i=n?document.elementFromPoint(n.clientX,n.clientY):e.target;U.emit("input:click",{screenX:this.touchState.lastTouchPos.x,screenY:this.touchState.lastTouchPos.y,worldPos:this.state.mouseWorldPos.clone(),target:i})}this.touchState.isPinching=!1}else if(this.touchState.isPinching=!1,e.touches.length===1){const t=e.touches[0];this.touchState.lastTouchPos={x:t.clientX,y:t.clientY}}};onKeyDown=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)&&!((e.metaKey||e.ctrlKey)&&e.code==="KeyD")){switch(this.state.keys.add(e.code),e.code){case"Escape":U.emit("input:escape");break;case"Space":e.preventDefault(),U.emit("input:space");break;case"KeyR":U.emit("input:rotate");break;case"KeyQ":this.camera.rotate(Math.PI/4);break;case"KeyE":this.camera.rotate(-Math.PI/4);break;case"Delete":case"Backspace":U.emit("input:delete");break;case"Digit1":case"Digit2":case"Digit3":U.emit("input:number",{number:parseInt(e.code.slice(-1))});break}U.emit("input:keydown",{code:e.code,key:e.key})}};onKeyUp=e=>{this.state.keys.delete(e.code),U.emit("input:keyup",{code:e.code,key:e.key})};updateWorldPosition(){const e=this.state.mouseX/window.innerWidth*2-1,t=-(this.state.mouseY/window.innerHeight)*2+1;this.raycaster.setFromCamera(new Le(e,t),this.camera.instance);const n=new C;this.raycaster.ray.intersectPlane(this.groundPlane,n),n&&this.state.mouseWorldPos.copy(n)}getState(){return this.state}getMouseWorldPosition(){return this.state.mouseWorldPos.clone()}isKeyDown(e){return this.state.keys.has(e)}update(e){const t=10*e;(this.isKeyDown("KeyW")||this.isKeyDown("ArrowUp"))&&this.camera.pan(0,t*50),(this.isKeyDown("KeyS")||this.isKeyDown("ArrowDown"))&&this.camera.pan(0,-t*50),(this.isKeyDown("KeyA")||this.isKeyDown("ArrowLeft"))&&this.camera.pan(t*50,0),(this.isKeyDown("KeyD")||this.isKeyDown("ArrowRight"))&&this.camera.pan(-t*50,0)}raycastObjects(e){const t=this.state.mouseX/window.innerWidth*2-1,n=-(this.state.mouseY/window.innerHeight)*2+1;return this.raycaster.setFromCamera(new Le(t,n),this.camera.instance),this.raycaster.intersectObjects(e,!0)}dispose(){this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("touchend",this.onTouchEnd),this.canvas.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}}const ni={general:10011097,unloading:16749824,storage:5025616,picking:10233776,loading:16007990};class Vt extends An{capacity=4;storedPallets=0;ownedByStackerCrane=!1;_storageType="general";wireframeMaterial=null;get storageType(){return this._storageType}set storageType(e){this._storageType=e,this.wireframeMaterial&&this.wireframeMaterial.color.setHex(ni[e])}palletMeshes=[];levelHeights;constructor(e=4){super("rack"),this.capacity=e,this.levelHeights=[];for(let t=0;t<e;t++)this.levelHeights.push(.2+t*1.2);this.createMesh()}createMesh(){const e=this.levelHeights[this.capacity-1]+1.2,t=new pe(.08,e,.08),n=new ze({color:2201331,roughness:.7,metalness:.5});[[-.45,e/2,-.45],[.45,e/2,-.45],[-.45,e/2,.45],[.45,e/2,.45]].forEach(([v,p,u])=>{const _=new Q(t,n);_.position.set(v,p,u),_.castShadow=!0,_.receiveShadow=!0,this.mesh.add(_)});const r=new ze({color:16739125,roughness:.8,metalness:.3}),o=.04,a=1;this.levelHeights.forEach((v,p)=>{const u=v-.05,_=new Q(new pe(a,o,o),r);_.position.set(0,u,a/2),_.castShadow=!0,_.receiveShadow=!0,this.mesh.add(_);const b=new Q(new pe(a,o,o),r);b.position.set(0,u,-a/2),b.castShadow=!0,b.receiveShadow=!0,this.mesh.add(b);const M=new Q(new pe(o,o,a),r);M.position.set(-a/2,u,0),M.castShadow=!0,M.receiveShadow=!0,this.mesh.add(M);const O=new Q(new pe(o,o,a),r);O.position.set(a/2,u,0),O.castShadow=!0,O.receiveShadow=!0,this.mesh.add(O);const A=Math.sqrt(a*a+a*a),E=new Q(new pe(A,o,o),r);E.position.set(0,u,0),E.rotation.y=Math.PI/4,E.castShadow=!0,E.receiveShadow=!0,this.mesh.add(E);const R=new Q(new pe(A,o,o),r);R.position.set(0,u,0),R.rotation.y=-Math.PI/4,R.castShadow=!0,R.receiveShadow=!0,this.mesh.add(R);const w=En();w.position.set(0,v,0),w.visible=!1,w.name=`pallet-level-${p}`,this.mesh.add(w),this.palletMeshes.push(w)});const l=new ze({color:2201331,roughness:.7,metalness:.5}),c=[0,...this.levelHeights];for(let v=0;v<this.levelHeights.length;v++){const p=c[v],u=this.levelHeights[v],_=u-p,b=(p+u)/2,M=Math.sqrt(.9*.9+_*_),O=Math.atan2(_,.9),A=new pe(M,.04,.04),E=new Q(A,l);E.position.set(0,b,.45),E.rotation.z=O,E.castShadow=!0,this.mesh.add(E);const R=new Q(A,l);R.position.set(0,b,.45),R.rotation.z=-O,R.castShadow=!0,this.mesh.add(R);const w=new Q(A,l);w.position.set(0,b,-.45),w.rotation.z=O,w.castShadow=!0,this.mesh.add(w);const S=new Q(A,l);S.position.set(0,b,-.45),S.rotation.z=-O,S.castShadow=!0,this.mesh.add(S)}const h=new pe(1.1,.08,1.1),d=new ze({color:13983232,roughness:.9,metalness:.2}),f=new Q(h,d);f.position.set(0,.04,0),f.castShadow=!0,f.receiveShadow=!0,this.mesh.add(f);const m=new Qo(new xt(1.1,1.1));this.wireframeMaterial=new si({color:ni[this._storageType]});const g=new is(m,this.wireframeMaterial);g.rotation.x=-Math.PI/2,g.position.y=.1,g.name="storage-type-wireframe",this.mesh.add(g)}canStore(){return this.storedPallets<this.capacity}store(){return this.canStore()?(this.storedPallets++,this.updateVisual(),!0):!1}retrieve(){return this.storedPallets<=0?!1:(this.storedPallets--,this.updateVisual(),!0)}updateVisual(){for(let e=0;e<this.capacity;e++)this.palletMeshes[e]&&(this.palletMeshes[e].visible=e<this.storedPallets)}getStorageInfo(){return{stored:this.storedPallets,capacity:this.capacity}}getPickupHeight(){if(this.storedPallets<=0)return 0;const e=this.storedPallets-1;return this.levelHeights[e]}getStorageHeight(){return this.storedPallets>=this.capacity?this.levelHeights[this.capacity-1]:this.levelHeights[this.storedPallets]}getAccessPositions(){const e=this.getWorldPosition(),t=this.mesh.rotation.y,n=new C(-1.2,0,0);n.applyAxisAngle(new C(0,1,0),t);const i=e.clone().add(n),r=t+Math.PI/2,o=new C(1.2,0,0);o.applyAxisAngle(new C(0,1,0),t);const a=e.clone().add(o),l=t-Math.PI/2;return{left:i,right:a,leftRotation:r,rightRotation:l}}getClosestAccessPosition(e,t){const n=this.getAccessPositions(),i=new Le(e,t),r=i.distanceTo(new Le(n.left.x,n.left.z)),o=i.distanceTo(new Le(n.right.x,n.right.z));return r<o?{position:n.left,rotation:n.leftRotation}:{position:n.right,rotation:n.rightRotation}}toData(){return{...super.toData(),storageType:this.storageType,storedPallets:this.storedPallets,capacity:this.capacity}}}class hn extends An{hasPallet=!1;_storageType="general";wireframeMaterial=null;palletMesh=null;get storageType(){return this._storageType}set storageType(e){this._storageType=e,this.wireframeMaterial&&this.wireframeMaterial.color.setHex(ni[e])}constructor(){super("floor-slot"),this.createMesh()}createMesh(){const e=new xt(.9,.9),t=new ze({color:4871528,roughness:.9,metalness:.1,side:nn}),n=new Q(e,t);n.rotation.x=-Math.PI/2,n.position.y=.01,n.receiveShadow=!0,this.mesh.add(n);const i=new Qo(new xt(1,1));this.wireframeMaterial=new si({color:ni[this._storageType]});const r=new is(i,this.wireframeMaterial);r.rotation.x=-Math.PI/2,r.position.y=.02,this.mesh.add(r),this.palletMesh=En(),this.palletMesh.visible=!1,this.palletMesh.name="floor-slot-pallet",this.mesh.add(this.palletMesh)}canStore(){return!this.hasPallet}store(){return this.canStore()?(this.hasPallet=!0,this.updateVisual(),!0):!1}retrieve(){return this.hasPallet?(this.hasPallet=!1,this.updateVisual(),!0):!1}updateVisual(){this.palletMesh&&(this.palletMesh.visible=this.hasPallet)}getClosestAccessPosition(e,t){const n=this.getWorldPosition(),i=1,r=[{pos:new C(n.x,0,n.z+i),rot:Math.PI},{pos:new C(n.x,0,n.z-i),rot:0},{pos:new C(n.x+i,0,n.z),rot:-Math.PI/2},{pos:new C(n.x-i,0,n.z),rot:Math.PI/2}];let o=r[0],a=1/0;for(const l of r){const c=l.pos.x-e,h=l.pos.z-t,d=Math.sqrt(c*c+h*h);d<a&&(a=d,o=l)}return{position:o.pos,rotation:o.rot}}toData(){return{...super.toData(),storageType:this.storageType,hasPallet:this.hasPallet}}}class tt extends An{direction="south";speed=1;_storageType="general";wireframeMaterial=null;hasPallet=!1;isStackerCraneEntrance=!1;isStackerCraneExit=!1;static _sharedGeos=null;static _sharedMats=null;static initShared(){if(tt._sharedGeos)return;const e=.38,t=.038,n=e*2-.06;tt._sharedGeos={railWeb:new pe(.045,.1,.9),railTopFlange:new pe(.1,.025,.9),railBotFlange:new pe(.1,.025,.9),legPost:new pe(.045,.14,.045),legFoot:new pe(.1,.02,.1),brace:new pe(e*2-.04,.025,.03),rollerBarrel:new Ft(t,t,n,12),rollerCap:new Ft(t+.005,t+.005,.025,12),motor:new pe(.12,.1,.18),motorBracket:new pe(.04,.06,.12),arrow:new lr(.08,.16,4),wireframe:new Qo(new xt(1,1))},tt._sharedMats={aluminum:new ze({color:11581633,roughness:.35,metalness:.85}),chrome:new ze({color:13949148,roughness:.2,metalness:.95}),darkFrame:new ze({color:3817287,roughness:.7,metalness:.5}),arrow:new ze({color:5164484,roughness:.3,metalness:.7})}}get storageType(){return this._storageType}set storageType(e){this._storageType=e,this.wireframeMaterial&&this.wireframeMaterial.color.setHex(ni[e])}nextConveyor=null;rollers=[];animationOffset=0;transferCooldown=0;palletMesh=null;isTransferring=!1;transferAnimT=0;transferTarget=null;static TRANSFER_ANIM_DURATION=.4;constructor(e="south"){super("conveyor"),this.direction=e,this.createMesh(),this.setDirection(e)}createMesh(){tt.initShared();const e=tt._sharedGeos,t=tt._sharedMats,n=.18,i=.235,r=.38,o=.038,a=r*2-.06;for(const g of[-1,1]){const v=new Q(e.railWeb,t.aluminum);v.position.set(g*r,n,0),v.castShadow=!0,this.mesh.add(v);const p=new Q(e.railTopFlange,t.aluminum);p.position.set(g*r,n+.062,0),this.mesh.add(p);const u=new Q(e.railBotFlange,t.aluminum);u.position.set(g*r,n-.062,0),this.mesh.add(u)}for(const g of[-.3,.3]){for(const p of[-r,r]){const u=new Q(e.legPost,t.darkFrame);u.position.set(p,.07,g),u.castShadow=!0,this.mesh.add(u);const _=new Q(e.legFoot,t.darkFrame);_.position.set(p,.01,g),this.mesh.add(_)}const v=new Q(e.brace,t.darkFrame);v.position.set(0,.13,g),this.mesh.add(v)}const l=7,c=.85/(l-1);for(let g=0;g<l;g++){const v=-.425+g*c,p=new Q(e.rollerBarrel,t.chrome);p.rotation.z=Math.PI/2,p.position.set(0,i,v),p.castShadow=!0,this.mesh.add(p),this.rollers.push(p);for(const u of[-1,1]){const _=new Q(e.rollerCap,t.darkFrame);_.rotation.z=Math.PI/2,_.position.set(u*(a/2+.013),i,v),this.mesh.add(_)}}const h=new Q(e.motor,t.darkFrame);h.position.set(r+.065,n,-.35),h.castShadow=!0,this.mesh.add(h);const d=new Q(e.motorBracket,t.aluminum);d.position.set(r+.022,n,-.35),this.mesh.add(d);const f=new Q(e.arrow,t.arrow);f.rotation.x=Math.PI/2,f.position.set(0,i+.08,.25),f.name="directionArrow",this.mesh.add(f),this.palletMesh=En(),this.palletMesh.visible=!1,this.palletMesh.position.y=i+o,this.palletMesh.name="conveyor-pallet",this.mesh.add(this.palletMesh),this.wireframeMaterial=new si({color:ni[this._storageType],depthTest:!1});const m=new is(e.wireframe,this.wireframeMaterial);m.rotation.x=-Math.PI/2,m.position.y=.001,m.name="storage-type-wireframe",this.mesh.add(m)}setDirection(e){this.direction=e;const t={north:Math.PI,south:0,east:Math.PI/2,west:-Math.PI/2};this.mesh.rotation.y=t[e]}update(e){if(this.isTransferring){this.advanceTransferAnimation(e);return}if(this.hasPallet&&this.nextConveyor){if(this.transferCooldown-=e,this.transferCooldown<=0){const t=-this.transferCooldown;this.nextConveyor.canStore()&&(this.isTransferring=!0,this.transferAnimT=0,this.transferTarget=this.nextConveyor,this.advanceTransferAnimation(t)),this.transferCooldown=1/this.speed}}else this.transferCooldown=0}advanceTransferAnimation(e){this.animationOffset+=e*this.speed*2,this.rollers.forEach((t,n)=>{t.rotation.x=this.animationOffset+n*.5}),this.transferAnimT+=e/tt.TRANSFER_ANIM_DURATION,this.transferAnimT>=1?(this.isTransferring=!1,this.transferAnimT=0,this.palletMesh&&this.palletMesh.position.set(0,.2,0),this.retrieve(),this.transferTarget&&this.transferTarget.storeFromWorldDir(),this.transferTarget=null):this.palletMesh&&(this.palletMesh.position.z=this.transferAnimT*1)}storeFromWorldDir(e,t){return this.canStore()?(this.hasPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0,this.palletMesh.position.set(0,.2,0)),!0):!1}canStore(){return!this.hasPallet}store(){return this.canStore()?(this.hasPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0),!0):!1}retrieve(){return this.hasPallet?(this.hasPallet=!1,this.palletMesh&&(this.palletMesh.visible=!1),!0):!1}getClosestAccessPosition(e,t){const n=this.getWorldPosition(),i=1,r=[{pos:new C(n.x,0,n.z+i),rot:Math.PI},{pos:new C(n.x,0,n.z-i),rot:0},{pos:new C(n.x+i,0,n.z),rot:-Math.PI/2},{pos:new C(n.x-i,0,n.z),rot:Math.PI/2}];let o=r[0],a=1/0;for(const l of r){const c=l.pos.x-e,h=l.pos.z-t,d=Math.sqrt(c*c+h*h);d<a&&(a=d,o=l)}return{position:o.pos,rotation:o.rot}}toData(){return{...super.toData(),direction:this.direction,storageType:this.storageType,hasPallet:this.hasPallet}}getOutputPosition(){const e=new C;switch(this.direction){case"north":e.z=-1;break;case"south":e.z=1;break;case"east":e.x=1;break;case"west":e.x=-1;break}return this.mesh.position.clone().add(e)}}class ht extends tt{diverterOutputs=[null,null,null];rrIndex=0;static _diverterArrowGeo=null;static _diverterArrowMat=null;static getDiverterArrowGeo(){return ht._diverterArrowGeo||(ht._diverterArrowGeo=new lr(.07,.15,4)),ht._diverterArrowGeo}static getDiverterArrowMat(){return ht._diverterArrowMat||(ht._diverterArrowMat=new ze({color:16739125,roughness:.3,metalness:.7})),ht._diverterArrowMat}constructor(e="south"){super(e),this.type="diverter",this.mesh.userData.entityType="diverter",this.addDiverterVisuals()}addDiverterVisuals(){const e=ht.getDiverterArrowGeo(),t=ht.getDiverterArrowMat(),n=[{pos:[0,.32,.25],rotY:0},{pos:[.25,.32,0],rotY:-Math.PI/2},{pos:[-.25,.32,0],rotY:Math.PI/2}];for(const{pos:r,rotY:o}of n){const a=new Q(e,t);a.rotation.x=Math.PI/2,a.rotation.z=o,a.position.set(...r),a.name="diverterArrow",this.mesh.add(a)}const i=this.mesh.getObjectByName("directionArrow");i&&(i.visible=!1)}pickNextOutput(){for(let e=0;e<this.diverterOutputs.length;e++){const t=(this.rrIndex+e)%this.diverterOutputs.length,n=this.diverterOutputs[t];if(n!==null&&n.canStore())return this.rrIndex=(t+1)%this.diverterOutputs.length,n}return null}update(e){const t=this.nextConveyor;this.nextConveyor=null;try{super.update(e)}finally{this.nextConveyor=t}if(this.isTransferring)return;if(!this.hasPallet){this.transferCooldown=0;return}const n=this.pickNextOutput();if(n&&(this.transferCooldown-=e,this.transferCooldown<=0)){const i=-this.transferCooldown;n.canStore()&&(this.isTransferring=!0,this.transferAnimT=0,this.transferTarget=n,this.advanceTransferAnimation(i)),this.transferCooldown=1/this.speed}}storeFromWorldDir(e,t){return e!==void 0&&t!==void 0&&!this.isFromBehind(e,t)?!1:super.storeFromWorldDir(e,t)}isFromBehind(e,t){switch(this.direction){case"south":return t>0;case"north":return t<0;case"east":return e>0;case"west":return e<0}}static getOutputOffsets(e){switch(e){case"south":return{front:{dx:0,dz:1},left:{dx:1,dz:0},right:{dx:-1,dz:0},behind:{dx:0,dz:-1}};case"north":return{front:{dx:0,dz:-1},left:{dx:-1,dz:0},right:{dx:1,dz:0},behind:{dx:0,dz:1}};case"east":return{front:{dx:1,dz:0},left:{dx:0,dz:-1},right:{dx:0,dz:1},behind:{dx:-1,dz:0}};case"west":return{front:{dx:-1,dz:0},left:{dx:0,dz:1},right:{dx:0,dz:-1},behind:{dx:1,dz:0}}}}}var Tt=Object.freeze({Linear:Object.freeze({None:function(s){return s},In:function(s){return s},Out:function(s){return s},InOut:function(s){return s}}),Quadratic:Object.freeze({In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}}),Cubic:Object.freeze({In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}}),Quartic:Object.freeze({In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}}),Quintic:Object.freeze({In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}}),Sinusoidal:Object.freeze({In:function(s){return 1-Math.sin((1-s)*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))}}),Exponential:Object.freeze({In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}}),Circular:Object.freeze({In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}}),Elastic:Object.freeze({In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}}),Bounce:Object.freeze({In:function(s){return 1-Tt.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?Tt.Bounce.In(s*2)*.5:Tt.Bounce.Out(s*2-1)*.5+.5}}),generatePow:function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:function(e){return Math.pow(e,s)},Out:function(e){return 1-Math.pow(1-e,s)},InOut:function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5}}}}),Ji=function(){return performance.now()},ta=(function(){function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];(e=o._group)===null||e===void 0||e.remove(o),o._group=this,this._tweens[o.getId()]=o,this._tweensAddedDuringUpdate[o.getId()]=o}},s.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){var r=i[n];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},s.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},s.prototype.update=function(e,t){e===void 0&&(e=Ji()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!t;r&&r.update(e,o)===!1&&!t&&this.remove(r)}n=Object.keys(this._tweensAddedDuringUpdate)}},s})(),zo={Linear:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=zo.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},Utils:{Linear:function(s,e,t){return(e-s)*t+s}}},xc=(function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s})(),Bo=new ta,Jt=(function(){function s(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Tt.Linear.None,this._interpolationFunction=zo.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=xc.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Bo,Bo.add(this))}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=Ji()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var r in this._valuesEnd)i[r]=this._valuesEnd[r];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,n,i,r){for(var o in n){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,h=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(h){var d=n[o];if(d.length===0)continue;for(var f=[a],m=0,g=d.length;m<g;m+=1){var v=this._handleRelativeValue(a,d[m]);if(isNaN(v)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}h&&(n[o]=f)}if((c==="object"||l)&&a&&!h){t[o]=l?[]:{};var p=a;for(var u in p)t[o][u]=p[u];i[o]=l?[]:{};var d=n[o];if(!this._isDynamic){var _={};for(var u in d)_[u]=d[u];n[o]=d=_}this._setupProperties(p,t[o],d,i[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),h?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},s.prototype.pause=function(e){return e===void 0&&(e=Ji()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},s.prototype.resume=function(e){return e===void 0&&(e=Ji()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},s.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=Tt.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=zo.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=Ji()),t===void 0&&(t=s.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,a=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),l=this._duration+this._repeat*a,c=function(){if(n._duration===0||o>l)return 1;var v=Math.trunc(o/a),p=o-v*a,u=Math.min(p/n._duration,1);return u===0&&o===n._duration?1:u},h=c(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((o-this._duration)/a)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=a*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,g=this._chainedTweens.length;m<g;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),c=Array.isArray(a),h=!l&&c;h?e[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s.autoStartOnUpdate=!1,s})();xc.nextId;var un=Bo;un.getAll.bind(un);un.removeAll.bind(un);un.add.bind(un);un.remove.bind(un);un.update.bind(un);class yt extends An{state="idle";carryingPallet=!1;speed=2;allowedTaskTypes=null;innerMastHeight=2;outerMastHeight=1.8;forkMesh=null;palletIndicator=null;innerMastGroup=null;targetPosition=null;path=[];tweenGroup;elapsedTime=0;collisionCheckCallback=null;pathRecalculationCallback=null;failedMoveAttempts=0;maxFailedAttempts=5;isCurrentlyMoving=!1;retryTimer=0;retryInterval=.2;constructor(){super("forklift"),this.tweenGroup=new ta,this.createMesh()}createMesh(){const e=new pe(1,.6,1.4),t=new ze({color:16032353,roughness:.6,metalness:.4}),n=new Q(e,t);n.position.set(0,.4,0),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new pe(.8,.6,.7),r=new ze({color:2963272,roughness:.4,metalness:.3}),o=new Q(i,r);o.position.set(0,.95,-.2),o.castShadow=!0,this.mesh.add(o);const a=new ze({color:4871528,roughness:.7,metalness:.5}),l=new ze({color:5924472,roughness:.7,metalness:.5}),c=new pe(.14,this.outerMastHeight,.14),h=new Q(c,a);h.position.set(-.35,this.outerMastHeight/2,.65),h.castShadow=!0,this.mesh.add(h);const d=new Q(c,a);d.position.set(.35,this.outerMastHeight/2,.65),d.castShadow=!0,this.mesh.add(d),this.innerMastGroup=new $t,this.innerMastGroup.position.set(0,.1,0);const f=new pe(.1,this.innerMastHeight,.1),m=new Q(f,l);m.position.set(-.35,this.innerMastHeight/2,.65),m.castShadow=!0,this.innerMastGroup.add(m);const g=new Q(f,l);g.position.set(.35,this.innerMastHeight/2,.65),g.castShadow=!0,this.innerMastGroup.add(g);const v=new pe(.82,.08,.08),p=new Q(v,l);p.position.set(0,this.innerMastHeight,.65),p.castShadow=!0,this.innerMastGroup.add(p);const u=new pe(.9,.05,1.2),_=new ze({color:7438486,roughness:.5,metalness:.7});this.forkMesh=new Q(u,_),this.forkMesh.position.set(0,.25,1),this.forkMesh.castShadow=!0,this.innerMastGroup.add(this.forkMesh),this.mesh.add(this.innerMastGroup);const b=new Ft(.2,.2,.15,12),M=new ze({color:1712172,roughness:.9,metalness:.1});[[-.45,.2,-.5],[.45,.2,-.5],[-.4,.15,.5],[.4,.15,.5]].forEach(([A,E,R])=>{const w=new Q(b,M);w.rotation.z=Math.PI/2,w.position.set(A,E,R),w.castShadow=!0,this.mesh.add(w)}),this.palletIndicator=En(),this.palletIndicator.position.set(0,.075,.25),this.palletIndicator.visible=!1,this.palletIndicator.traverse(A=>{A instanceof Q&&(A.castShadow=!0)}),this.forkMesh.add(this.palletIndicator)}calculateRotation(e){let t=this.mesh.rotation.y;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;let n=e-t;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;const i=t+n,o=Math.abs(n)/3*1e3;return{finalAngle:i,duration:o}}setPath(e){this.path=[...e],this.failedMoveAttempts=0,this.isCurrentlyMoving=!1,this.retryTimer=0,this.path.length>0&&(this.state="moving",this.moveToNextPoint())}setCollisionCheckCallback(e){this.collisionCheckCallback=e}setPathRecalculationCallback(e){this.pathRecalculationCallback=e}moveToNextPoint(){if(this.path.length===0){this.state="idle";return}const e=this.path[0];if(this.collisionCheckCallback&&!this.collisionCheckCallback(e,this.id)){this.failedMoveAttempts++,this.failedMoveAttempts>=this.maxFailedAttempts&&this.pathRecalculationCallback&&(this.failedMoveAttempts=0,this.pathRecalculationCallback(this.id));return}this.failedMoveAttempts=0,this.path.shift(),this.targetPosition=e;const t=new C().subVectors(e,this.mesh.position).normalize();if(t.length()>.01){const r=Math.atan2(t.x,t.z),{finalAngle:o,duration:a}=this.calculateRotation(r);new Jt(this.mesh.rotation,this.tweenGroup).to({y:o},a).easing(Tt.Quadratic.Out).start(this.elapsedTime)}const i=this.mesh.position.distanceTo(e)/this.speed*1e3;this.isCurrentlyMoving=!0,new Jt(this.mesh.position,this.tweenGroup).to({x:e.x,z:e.z},i).easing(Tt.Linear.None).onComplete(()=>{this.isCurrentlyMoving=!1,this.moveToNextPoint()}).start(this.elapsedTime)}pickUpPallet(e=0,t){this.carryingPallet||(this.state="loading",this.carryingPallet=!0,this.prepareForRackAccess(t,()=>this.moveFork(e,!0)))}dropPallet(e=0,t){this.carryingPallet&&(this.state="unloading",this.prepareForRackAccess(t,()=>this.moveFork(e,!1)))}prepareForRackAccess(e,t){if(e!==void 0){const{finalAngle:o,duration:a}=this.calculateRotation(e);new Jt(this.mesh.rotation,this.tweenGroup).to({y:o},a).easing(Tt.Quadratic.InOut).onComplete(()=>{this.moveForward(.3,600,t)}).start(this.elapsedTime)}else t()}moveForward(e,t,n){const i=this.mesh.position.clone(),r=new C(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y)).multiplyScalar(e),o=i.add(r);new Jt(this.mesh.position,this.tweenGroup).to({x:o.x,z:o.z},t).easing(Tt.Quadratic.InOut).onComplete(n).start(this.elapsedTime)}moveFork(e,t){const n=e-.05,i=1.2,r=this.innerMastHeight,o=.25;if(!(!this.forkMesh||!this.innerMastGroup))if(n>r){const a=n-r,c=Math.abs(a-this.innerMastGroup.position.y)/i*1e3;new Jt(this.innerMastGroup.position,this.tweenGroup).to({y:a},c).easing(Tt.Linear.In).onComplete(()=>{const h=r,f=Math.abs(h-this.forkMesh.position.y)/i*1e3;new Jt(this.forkMesh.position,this.tweenGroup).to({y:h},f).easing(Tt.Linear.In).onComplete(()=>{this.updatePalletVisibility(t),this.retractMast(o,i)}).start(this.elapsedTime)}).start(this.elapsedTime)}else{const l=Math.abs(n-this.forkMesh.position.y)/i*1e3;new Jt(this.forkMesh.position,this.tweenGroup).to({y:n},l).easing(Tt.Linear.In).onComplete(()=>{this.updatePalletVisibility(t),this.retractMast(o,i)}).start(this.elapsedTime)}}updatePalletVisibility(e){this.palletIndicator&&(this.palletIndicator.visible=e,this.carryingPallet=this.palletIndicator.visible)}retractMast(e,t){const n=this.innerMastGroup.position.y/t*1e3,i=Math.abs(e-this.forkMesh.position.y)/t*1e3;new Jt(this.innerMastGroup.position,this.tweenGroup).to({y:.1},n).easing(Tt.Linear.In).start(this.elapsedTime),new Jt(this.forkMesh.position,this.tweenGroup).to({y:e},i).easing(Tt.Linear.In).onUpdate(()=>{}).onComplete(()=>{this.state="idle"}).start(this.elapsedTime)}update(e){this.elapsedTime+=e*1e3,this.tweenGroup.update(this.elapsedTime),(this.state==="moving"||this.path.length>0)&&!this.isCurrentlyMoving&&(this.retryTimer+=e,this.retryTimer>=this.retryInterval&&(this.retryTimer=0,this.moveToNextPoint()))}isIdle(){return this.state==="idle"&&this.path.length===0}toData(){return{...super.toData(),allowedTaskTypes:this.allowedTaskTypes??null}}}class Qt extends An{state="idle";speed=1.5;carryingBox=!1;allowedTaskTypes=null;headMesh=null;palletIndicator=null;path=[];tweenGroup;walkAnimation=0;elapsedTime=0;constructor(){super("operator"),this.tweenGroup=new ta,this.createMesh()}createMesh(){const e=new Ft(.2,.25,.65,8),t=new ze({color:5164484,roughness:.7,metalness:.2}),n=new Q(e,t);n.position.set(0,.6,0),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new ea(.15,12,12),r=new ze({color:16766650,roughness:.8,metalness:.1});this.headMesh=new Q(i,r),this.headMesh.position.set(0,1.09,0),this.headMesh.castShadow=!0,this.mesh.add(this.headMesh);const o=new Ft(.18,.15,.12,12),a=new ze({color:16032353,roughness:.5,metalness:.3}),l=new Q(o,a);l.position.set(0,1.3,0),l.castShadow=!0,this.mesh.add(l);const c=new Ft(.08,.08,.35,6),h=new ze({color:2963272,roughness:.9,metalness:.1}),d=new Q(c,h);d.position.set(-.1,.175,0),d.castShadow=!0,d.name="leftLeg",this.mesh.add(d);const f=new Q(c,h);f.position.set(.1,.175,0),f.castShadow=!0,f.name="rightLeg",this.mesh.add(f);const m=new $t;m.position.set(0,0,.75),m.visible=!1;const g=new ze({color:7438486,roughness:.5,metalness:.7}),v=new pe(.08,.05,.9),p=new Q(v,g);p.position.set(-.25,.025,0),p.castShadow=!0,m.add(p);const u=new Q(v,g);u.position.set(.25,.025,0),u.castShadow=!0,m.add(u);const _=new pe(.04,.7,.04),b=new Q(_,g);b.position.set(0,.35,-.45),b.castShadow=!0,m.add(b);const M=En();M.position.set(0,.05,0),m.add(M),this.palletIndicator=m,this.mesh.add(this.palletIndicator)}setPath(e){this.path=[...e],this.path.length>0&&(this.state="walking",this.moveToNextPoint())}moveToNextPoint(){if(this.path.length===0){this.state="idle";return}const e=this.path.shift(),t=new C().subVectors(e,this.mesh.position).normalize();if(t.length()>.01){const r=Math.atan2(t.x,t.z);new Jt(this.mesh.rotation,this.tweenGroup).to({y:r},150).easing(Tt.Quadratic.Out).start(this.elapsedTime)}const i=this.mesh.position.distanceTo(e)/this.speed*1e3;new Jt(this.mesh.position,this.tweenGroup).to({x:e.x,z:e.z},i).easing(Tt.Linear.None).onComplete(()=>this.moveToNextPoint()).start(this.elapsedTime)}pickUpBox(){this.carryingBox||(this.state="working",this.carryingBox=!0,this.palletIndicator&&(this.palletIndicator.visible=!0),setTimeout(()=>{this.state="idle"},500))}dropBox(){this.carryingBox&&(this.state="working",this.palletIndicator&&(this.palletIndicator.visible=!1),this.carryingBox=!1,setTimeout(()=>{this.state="idle"},500))}update(e){if(this.elapsedTime+=e*1e3,this.tweenGroup.update(this.elapsedTime),this.state==="walking"){this.walkAnimation+=e*10;const t=this.mesh.getObjectByName("leftLeg"),n=this.mesh.getObjectByName("rightLeg");t&&n&&(t.rotation.x=Math.sin(this.walkAnimation)*.3,n.rotation.x=Math.sin(this.walkAnimation+Math.PI)*.3)}else{const t=this.mesh.getObjectByName("leftLeg"),n=this.mesh.getObjectByName("rightLeg");t&&n&&(t.rotation.x=0,n.rotation.x=0)}}isIdle(){return this.state==="idle"&&this.path.length===0}toData(){return{...super.toData(),allowedTaskTypes:this.allowedTaskTypes??null}}}class bl extends An{constructor(){super("truck-dock"),this.createMesh()}createMesh(){const e=new pe(.9,.05,.9),t=new ze({color:4020864,roughness:.6,metalness:.3}),n=new Q(e,t);n.position.y=.025,n.receiveShadow=!0,this.mesh.add(n);const i=new pe(.9,.01,.1),r=new ze({color:16766720});for(let h=0;h<5;h++){const d=new Q(i,r);d.position.set(0,.051,-.4+h*.2),this.mesh.add(d)}const o=new pe(.1,.2,.8),a=new ze({color:3355443}),l=new Q(o,a);l.position.set(-.4,.1,0),this.mesh.add(l);const c=new Q(o,a);c.position.set(.4,.1,0),this.mesh.add(c)}}const Mc=1e4,Zm=1e3;function Tl(s){return Mc+s*Zm}function El(s,e,t,n){const i=t-s,r=n-e,o=Math.abs(i)>=Math.abs(r)&&!(i===0&&r===0),a=o?"east-west":"north-south",l=[],c=[],h=[];if(o||i===0&&r===0){if(i===0&&r===0)return l.push({x:s,z:e}),c.push({x:s-1,z:e}),c.push({x:s+1,z:e}),h.push({x:s-1,z:e-1,direction:"north"}),h.push({x:s+1,z:e-1,direction:"north"}),h.push({x:s-1,z:e+1,direction:"north"}),h.push({x:s+1,z:e+1,direction:"north"}),{aisleCells:l,rackCells:c,conveyorCells:h,aisleDirection:"north-south"};const d=e,f=Math.min(s,t),m=Math.max(s,t);for(let g=f;g<=m;g++)l.push({x:g,z:d}),c.push({x:g,z:d-1}),c.push({x:g,z:d+1});h.push({x:f-1,z:d-1,direction:"east"}),h.push({x:f-1,z:d+1,direction:"east"}),h.push({x:m+1,z:d-1,direction:"east"}),h.push({x:m+1,z:d+1,direction:"east"})}else{const d=s,f=Math.min(e,n),m=Math.max(e,n);for(let g=f;g<=m;g++)l.push({x:d,z:g}),c.push({x:d-1,z:g}),c.push({x:d+1,z:g});h.push({x:d-1,z:f-1,direction:"north"}),h.push({x:d+1,z:f-1,direction:"north"}),h.push({x:d-1,z:m+1,direction:"north"}),h.push({x:d+1,z:m+1,direction:"north"})}return{aisleCells:l,rackCells:c,conveyorCells:h,aisleDirection:a}}class bi extends An{length;aisleDirection;aisleCells=[];childRacks=[];childConveyors=[];carriageGroup=null;forkGroup=null;forkExtensionGroup=null;palletMesh=null;automationState="idle";carryingPallet=!1;carriageTarget=0;forkHeightTarget=.5;forkExtensionTarget=0;animationProgress=0;pickupConveyor=null;dropTarget=null;dropTargetSide=0;carriageMaxSpeed=2.5;carriageAccel=.7;carriageVelocity=0;forkLiftSpeed=1.5;forkExtendSpeed=1.8;forkRestForward=.5;constructor(e,t){super("stacker-crane"),this.length=e,this.aisleDirection=t,this.createMesh()}createMesh(){const e=this.aisleDirection==="north-south",t=this.length,n=(t-1)/2,i=new ze({color:16098851,roughness:.4,metalness:.7}),r=new ze({color:2963272,roughness:.6,metalness:.5}),o=new ze({color:4871528,roughness:.5,metalness:.8}),a=new ze({color:10395294,roughness:.4,metalness:.8}),l=10,c=l+.3,h=Math.max(t,1)+.4,d=e?new pe(.08,.06,h):new pe(h,.06,.08),f=new Q(d,o);f.position.set(e?0:n,.03,e?n:0),f.castShadow=!0,this.mesh.add(f);const m=e?new pe(.16,.02,h):new pe(h,.02,.16),g=new Q(m,o);g.position.set(e?0:n,.07,e?n:0),this.mesh.add(g);for(let se=0;se<t;se++){const me=e?new pe(.4,.03,.1):new pe(.1,.03,.4),Pe=new Q(me,r);Pe.position.set(e?0:se,.015,e?se:0),this.mesh.add(Pe)}const v=e?new pe(.1,.08,h):new pe(h,.08,.1),p=new Q(v,o);p.position.set(e?0:n,c,e?n:0),p.castShadow=!0,this.mesh.add(p);const u=e?new pe(.18,.025,h):new pe(h,.025,.18),_=new Q(u,o);_.position.set(e?0:n,c-.055,e?n:0),this.mesh.add(_);for(const se of[-1,1]){const me=new pe(.08,.4,.08),Pe=new Q(me,r);e?Pe.position.set(0,c-.2,se<0?-.2:t-1+.2):Pe.position.set(se<0?-.2:t-1+.2,c-.2,0),Pe.castShadow=!0,this.mesh.add(Pe)}this.carriageGroup=new $t;const b=new pe(.38,.25,.38),M=new Q(b,r);M.position.set(0,.125,0),M.castShadow=!0,this.carriageGroup.add(M);const O=new pe(.42,.04,.42),A=new Q(O,i);A.position.set(0,.27,0),this.carriageGroup.add(A);const E=new Ft(.055,.055,.08,10),R=new ze({color:1712172,roughness:.9,metalness:.3});for(const se of[-1,1]){const me=new Q(E,R);e?(me.rotation.x=Math.PI/2,me.position.set(se*.14,.055,0)):(me.rotation.z=Math.PI/2,me.position.set(0,.055,se*.14)),me.castShadow=!0,this.carriageGroup.add(me)}const w=.07,S=.09,P=new pe(w,l,S),G=e?.09:0,F=e?0:.09;for(const se of[-1,1]){const me=new Q(P,i);me.position.set(e?se*G:0,l/2+.29,e?0:se*F),me.castShadow=!0,this.carriageGroup.add(me)}const X=Math.ceil(l/1.5);for(let se=0;se<=X;se++){const me=e?new pe(G*2+w,.04,S):new pe(S,.04,F*2+w),Pe=new Q(me,i);Pe.position.set(0,.29+se*(l/X),0),this.carriageGroup.add(Pe)}const Y=new pe(.22,.15,.22),V=new Q(Y,r);V.position.set(0,l+.29+.08,0),V.castShadow=!0,this.carriageGroup.add(V);const j=new Ft(.04,.04,.06,8);for(const se of[-1,1]){const me=new Q(j,R);e?(me.rotation.x=Math.PI/2,me.position.set(se*.1,l+.29+.15,0)):(me.rotation.z=Math.PI/2,me.position.set(0,l+.29+.15,se*.1)),this.carriageGroup.add(me)}this.forkGroup=new $t,this.forkGroup.position.y=.5;const H=e?new pe(.3,.35,.12):new pe(.12,.35,.3),oe=new Q(H,i);oe.castShadow=!0,this.forkGroup.add(oe);for(const se of[-1,1]){const me=e?new pe(.05,.3,.15):new pe(.15,.3,.05),Pe=new Q(me,r);Pe.position.set(e?se*.13:0,0,e?-.04:se*.13),this.forkGroup.add(Pe)}this.forkExtensionGroup=new $t;const fe=[-.12,.12];for(const se of fe){const me=e?new pe(.85,.06,.1):new pe(.1,.06,.85),Pe=new Q(me,a);Pe.position.set(e?0:se,-.07,e?se:0),Pe.castShadow=!0,this.forkExtensionGroup.add(Pe);const $=e?new pe(.06,.2,.1):new pe(.1,.2,.06),ee=new Q($,a);ee.position.set(e?-.4:se,-0,e?se:-.4),this.forkExtensionGroup.add(ee)}this.palletMesh=En(),this.palletMesh.visible=!1,this.palletMesh.position.y=-.02,this.palletMesh.name="stacker-pallet",this.forkExtensionGroup.add(this.palletMesh),e?this.forkExtensionGroup.position.z=this.forkRestForward:this.forkExtensionGroup.position.x=this.forkRestForward,this.forkGroup.add(this.forkExtensionGroup),this.carriageGroup.add(this.forkGroup),this.mesh.add(this.carriageGroup)}isEntranceConveyor(e){const{x:t,z:n}=e.getGridPosition(),i=this.getConveyorOutputCell(e);return this.isOwnedCell(i.x,i.z)}getConveyorOutputCell(e){const{x:t,z:n}=e.getGridPosition();switch(e.direction){case"north":return{x:t,z:n-1};case"south":return{x:t,z:n+1};case"east":return{x:t+1,z:n};case"west":return{x:t-1,z:n}}}isOwnedCell(e,t){if(this.aisleCells.some(n=>n.x===e&&n.z===t))return!0;for(const n of this.childRacks){const i=n.getGridPosition();if(i.x===e&&i.z===t)return!0}return!1}getAisleIndex(e,t){if(this.aisleCells.length===0)return-1;const n=this.aisleCells[0];return this.aisleDirection==="north-south"?e!==n.x?-1:t-n.z:t!==n.z?-1:e-n.x}getCellSide(e,t){if(this.aisleCells.length===0)return 0;const n=this.aisleDirection==="north-south"?this.aisleCells[0].x:this.aisleCells[0].z;return(this.aisleDirection==="north-south"?e:t)<n?-1:1}update(e){if(ne.get("phase")==="operations")switch(this.automationState){case"idle":this.findWork();break;case"moving-to-pickup":case"moving-to-drop":this.advanceMovement(e);break;case"picking":this.advancePick(e);break;case"retracting-after-pick":this.advanceRetract(e,()=>this.findDropTarget());break;case"dropping":this.advanceDrop(e);break;case"retracting-after-drop":this.advanceRetract(e,()=>{this.automationState="idle",this.pickupConveyor=null,this.dropTarget=null});break}}findWork(){for(const e of this.childConveyors)if(e.hasPallet&&this.isEntranceConveyor(e)){this.pickupConveyor=e,this.automationState="moving-to-pickup",this.setMoveTarget(e);return}if(this.hasStoredPallets()){for(const e of this.childConveyors)if(!e.hasPallet&&!this.isEntranceConveyor(e)){const t=this.findRackWithPallets();if(t){this.pickupConveyor=null,this.dropTarget=e,this.carryingPallet=!1,this.automationState="moving-to-pickup",this.setMoveTargetForRack(t);return}}}}hasStoredPallets(){return this.childRacks.some(e=>e.storedPallets>0)}findRackWithPallets(){for(const e of this.childRacks)if(e.storedPallets>0)return e;return null}resetCarriageVelocity(){this.carriageVelocity=0}setMoveTarget(e){const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=.2,this.animationProgress=0,this.resetCarriageVelocity()}setMoveTargetForRack(e){const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=e.getPickupHeight(),this.dropTarget=e,this.animationProgress=0,this.resetCarriageVelocity()}getAisleIndexForAdjacentCell(e,t){return this.aisleDirection==="north-south"?t-this.aisleCells[0].z:e-this.aisleCells[0].x}advanceMovement(e){if(!this.carriageGroup||!this.forkGroup||!this.forkExtensionGroup)return;const t=this.aisleDirection==="north-south",n=t?this.carriageGroup.position.z:this.carriageGroup.position.x,i=this.carriageTarget,r=i-n,o=Math.abs(r);if(o>.005){const g=this.carriageVelocity*this.carriageVelocity/(2*this.carriageAccel);o<=g+.001?this.carriageVelocity=Math.max(this.carriageVelocity-this.carriageAccel*e,.05):this.carriageVelocity=Math.min(this.carriageVelocity+this.carriageAccel*e,this.carriageMaxSpeed);const v=Math.sign(r)*Math.min(this.carriageVelocity*e,o);t?this.carriageGroup.position.z+=v:this.carriageGroup.position.x+=v;return}this.carriageVelocity=0,t?this.carriageGroup.position.z=i:this.carriageGroup.position.x=i;const a=this.forkGroup.position.y,l=this.forkHeightTarget-a,c=this.forkLiftSpeed*e;if(Math.abs(l)>.01){this.forkGroup.position.y+=Math.sign(l)*Math.min(c,Math.abs(l));return}this.forkGroup.position.y=this.forkHeightTarget;const h=t?this.forkExtensionGroup.position.x:this.forkExtensionGroup.position.z,d=this.forkExtensionTarget*.6,f=d-h,m=this.forkExtendSpeed*e;if(Math.abs(f)>.01){const g=Math.sign(f)*Math.min(m,Math.abs(f));t?this.forkExtensionGroup.position.x+=g:this.forkExtensionGroup.position.z+=g;return}t?this.forkExtensionGroup.position.x=d:this.forkExtensionGroup.position.z=d,this.automationState==="moving-to-pickup"?(this.automationState="picking",this.animationProgress=0):(this.automationState="dropping",this.animationProgress=0)}advancePick(e){this.animationProgress+=e*2,this.animationProgress>=1&&(this.pickupConveyor&&this.pickupConveyor.hasPallet?(this.pickupConveyor.retrieve(),this.carryingPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)):this.dropTarget instanceof Vt&&this.dropTarget.storedPallets>0&&(this.dropTarget.retrieve(),ne.removeStoredPallet(),this.carryingPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)),this.automationState="retracting-after-pick")}advanceDrop(e){this.animationProgress+=e*2,this.animationProgress>=1&&(this.dropTarget instanceof tt?this.dropTarget.canStore()&&(this.dropTarget.store(),this.carryingPallet=!1,this.palletMesh&&(this.palletMesh.visible=!1)):this.dropTarget instanceof Vt&&this.dropTarget.canStore()&&(this.dropTarget.store(),ne.addStoredPallet(),this.carryingPallet=!1,this.palletMesh&&(this.palletMesh.visible=!1)),this.automationState="retracting-after-drop")}advanceRetract(e,t){if(!this.forkExtensionGroup){t();return}const n=this.aisleDirection==="north-south",r=0-(n?this.forkExtensionGroup.position.x:this.forkExtensionGroup.position.z),o=this.forkExtendSpeed*e;if(Math.abs(r)>.01){const a=Math.sign(r)*Math.min(o,Math.abs(r));n?this.forkExtensionGroup.position.x+=a:this.forkExtensionGroup.position.z+=a;return}n?this.forkExtensionGroup.position.x=0:this.forkExtensionGroup.position.z=0,t()}findDropTarget(){if(!this.carryingPallet){this.automationState="idle";return}for(const e of this.childConveyors)if(!e.hasPallet&&!this.isEntranceConveyor(e)){this.dropTarget=e,this.automationState="moving-to-drop",this.setMoveTarget(e);return}for(const e of this.childRacks)if(e.canStore()){this.dropTarget=e,this.automationState="moving-to-drop";const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=e.getStorageHeight(),this.animationProgress=0;return}this.automationState="idle"}toData(){return{...super.toData(),direction:this.aisleDirection==="north-south"?"north":"east",aisleCells:this.aisleCells.length>0?[...this.aisleCells]:void 0}}}function Al(s,e,t,n){const i=t-s,r=n-e;if(i===0&&r===0)return[{x:s,z:e,direction:"south"}];const o=[];if(Math.abs(i)>=Math.abs(r)){const a=i>0?"east":"west",l=i>0?1:-1;for(let c=s;c!==t+l;c+=l)o.push({x:c,z:e,direction:a})}else{const a=r>0?"south":"north",l=r>0?1:-1;for(let c=e;c!==n+l;c+=l)o.push({x:s,z:c,direction:a})}return o}class Km{grid;scene;economy;selectedType=null;previewEntity=null;previewMesh=null;isPlacementMode=!1;conveyorDirection="south";isLineMode=!1;lineStartPos=null;linePreviewEntities=[];placedEntities=new Map;constructor(e,t,n){this.scene=e,this.grid=t,this.economy=n,this.setupEventListeners()}setupEventListeners(){U.on("ui:build-select",({type:e})=>{e===null?this.cancelPlacement():this.selectBuildable(e)}),U.on("input:mousemove",({worldPos:e})=>{this.updatePreview(e)}),U.on("input:click",({worldPos:e})=>{this.isPlacementMode&&this.selectedType&&this.attemptPlace(e)}),U.on("input:escape",()=>{this.isLineMode&&this.lineStartPos!==null?(this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0)):this.cancelPlacement()}),U.on("input:rotate",()=>{this.rotatePreview()}),U.on("ui:conveyor-line-mode",({enabled:e})=>{this.setLineMode(e)}),U.on("phase:operations",()=>{this.cancelPlacement()}),U.on("grid:expanded",({shiftX:e,shiftZ:t})=>{if(e===0&&t===0)return;const n=Array.from(this.placedEntities.entries());this.placedEntities.clear();for(const[,i]of n){const{x:r,z:o}=i.getGridPosition(),a=r+e,l=o+t;i.setGridPosition(a,l),this.placedEntities.set(`${a},${l}`,i)}})}selectBuildable(e){ne.get("phase")==="build"&&this.economy.canAfford(e)&&(this.clearPreview(),this.selectedType=e,this.isPlacementMode=!0,this.createPreview(e),e==="stacker-crane"&&(this.isLineMode=!0,this.lineStartPos=null,this.clearLinePreview(),U.emit("ui:conveyor-line-status",{status:"start"})),U.emit("entity:selected",{type:e}))}createPreview(e){let t;switch(e){case"rack":t=new Vt;break;case"floor-slot":t=new hn;break;case"conveyor":t=new tt(this.conveyorDirection);break;case"diverter":t=new ht(this.conveyorDirection);break;case"forklift":t=new yt;break;case"operator":t=new Qt;break;case"truck-dock":t=new bl;break;case"stacker-crane":t=new bi(1,"north-south");break;default:return}t.mesh.traverse(n=>{if(n instanceof Q){const i=n.material;n.material=i.clone(),n.material.transparent=!0,n.material.opacity=.6}}),this.previewEntity=t,this.previewMesh=t.mesh,this.scene.add(this.previewMesh)}updatePreview(e){if(!this.previewMesh||!this.isPlacementMode)return;if((this.selectedType==="conveyor"||this.selectedType==="stacker-crane")&&this.isLineMode&&this.lineStartPos!==null){this.updateLinePreview(e);return}const t=this.grid.worldToGrid(e);if(t){const n=this.grid.gridToWorld(t.x,t.z);this.previewMesh.position.copy(n);let i=this.grid.canPlace(t.x,t.z);if(this.selectedType==="truck-dock"){const r=t.z===this.grid.height-1,o=t.z===0;!r&&!o&&(i=!1)}else{const r=this.grid.getCell(t.x,t.z);r&&r.type==="dock"&&(i=!1)}this.grid.highlightCell(e,i),this.updatePreviewColor(i&&this.economy.canAfford(this.selectedType))}else this.grid.hideHighlight()}updatePreviewColor(e){this.previewMesh&&this.previewMesh.traverse(t=>{if(t instanceof Q){const n=t.material;e?n.emissive.setHex(17408):n.emissive.setHex(4456448)}})}attemptPlace(e){if(!this.selectedType)return;if((this.selectedType==="conveyor"||this.selectedType==="stacker-crane")&&this.isLineMode){this.attemptPlaceLine(e);return}const t=this.grid.worldToGrid(e);if(!t)return;let n=this.grid.canPlace(t.x,t.z);if(this.selectedType==="truck-dock"){const o=t.z===this.grid.height-1,a=t.z===0;!o&&!a&&(n=!1)}else{const o=this.grid.getCell(t.x,t.z);o&&o.type==="dock"&&(n=!1)}if(!n||!this.economy.purchase(this.selectedType))return;const i=this.createEntity(this.selectedType);if(!i)return;const r=this.getCellType(this.selectedType);this.grid.place(t.x,t.z,i.mesh,r),i.setGridPosition(t.x,t.z),this.scene.add(i.mesh),this.placedEntities.set(`${t.x},${t.z}`,i),U.emit("entity:placed:complete",{entity:i,type:this.selectedType,gridX:t.x,gridZ:t.z}),this.economy.canAfford(this.selectedType)||this.cancelPlacement()}placeEntity(e,t,n,i){const r=this.createEntity(e,i?.direction,i?.capacity);if(!r)return null;const o=this.getCellType(e);if(!this.grid.place(t,n,r.mesh,o))return null;if(r.setGridPosition(t,n),r instanceof bi&&i?.aisleCells&&i.aisleCells.length>0&&(r.aisleCells=i.aisleCells),i?.storageType&&"storageType"in r&&(r.storageType=i.storageType),i?.allowedTaskTypes!==void 0&&"allowedTaskTypes"in r&&(r.allowedTaskTypes=i.allowedTaskTypes??null),i?.storedPallets&&r instanceof Vt)for(let a=0;a<i.storedPallets;a++)r.store();else i?.hasPallet&&"store"in r&&r.store();return this.scene.add(r.mesh),this.placedEntities.set(`${t},${n}`,r),U.emit("entity:placed:complete",{entity:r,type:e,gridX:t,gridZ:n}),r}createEntity(e,t,n){switch(e){case"rack":return new Vt(n??4);case"floor-slot":return new hn;case"conveyor":return new tt(t||this.conveyorDirection);case"diverter":return new ht(t||this.conveyorDirection);case"forklift":return new yt;case"operator":return new Qt;case"truck-dock":return new bl;case"stacker-crane":return new bi(1,"north-south");default:return null}}getCellType(e){switch(e){case"rack":return"rack";case"floor-slot":return"floor";case"conveyor":return"conveyor";case"diverter":return"conveyor";case"stacker-crane":return"conveyor";case"truck-dock":return"dock";default:return"floor"}}rotatePreview(){if(!this.isPlacementMode||this.selectedType!=="conveyor"&&this.selectedType!=="diverter")return;const e=["south","west","north","east"],t=e.indexOf(this.conveyorDirection);this.conveyorDirection=e[(t+1)%4],this.previewEntity instanceof tt&&this.previewEntity.setDirection(this.conveyorDirection)}clearPreview(){this.previewMesh&&(this.scene.remove(this.previewMesh),this.previewEntity?.dispose(),this.previewMesh=null,this.previewEntity=null),this.grid.hideHighlight()}cancelPlacement(){this.clearPreview(),this.clearLinePreview(),this.lineStartPos=null,this.isLineMode=!1,this.selectedType=null,this.isPlacementMode=!1,U.emit("entity:selected",{type:null})}setLineMode(e){this.isLineMode=e,this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),e&&U.emit("ui:conveyor-line-status",{status:"start"})}clearLinePreview(){for(const e of this.linePreviewEntities)this.scene.remove(e.mesh),e.dispose();this.linePreviewEntities=[]}updateLinePreview(e){this.clearLinePreview();const t=this.grid.worldToGrid(e);if(!t||!this.lineStartPos)return;if(this.previewMesh&&(this.previewMesh.visible=!1),this.selectedType==="stacker-crane"){this.updateStackerCranePreview(t);return}const n=Al(this.lineStartPos.x,this.lineStartPos.z,t.x,t.z);for(const i of n){const r=this.grid.canPlace(i.x,i.z),o=this.grid.getCell(i.x,i.z),a=r&&(!o||o.type!=="dock")&&this.economy.canAfford("conveyor"),l=new tt(i.direction);l.mesh.traverse(h=>{if(h instanceof Q){const d=h.material.clone();d.transparent=!0,d.opacity=.6,d.emissive.setHex(a?17408:4456448),h.material=d}});const c=this.grid.gridToWorld(i.x,i.z);l.mesh.position.copy(c),this.scene.add(l.mesh),this.linePreviewEntities.push(l)}this.grid.hideHighlight()}updateStackerCranePreview(e){if(!this.lineStartPos)return;const t=El(this.lineStartPos.x,this.lineStartPos.z,e.x,e.z),n=Tl(t.aisleCells.length),i=ne.canAfford(n),o=[...t.aisleCells,...t.rackCells,...t.conveyorCells.map(l=>({x:l.x,z:l.z}))].every(l=>this.grid.canPlace(l.x,l.z)),a=i&&o;for(const l of t.aisleCells)this.addPreviewBox(l.x,l.z,16032353,a);for(const l of t.rackCells){const c=new Vt(8);this.makePreviewEntity(c,l.x,l.z,a)}for(const l of t.conveyorCells){const c=new tt(l.direction);this.makePreviewEntity(c,l.x,l.z,a)}this.grid.hideHighlight()}addPreviewBox(e,t,n,i){const r=new hn;this.makePreviewEntity(r,e,t,i)}makePreviewEntity(e,t,n,i){e.mesh.traverse(o=>{if(o instanceof Q){const a=o.material.clone();a.transparent=!0,a.opacity=.4,a.emissive.setHex(i?17408:4456448),o.material=a}});const r=this.grid.gridToWorld(t,n);e.mesh.position.copy(r),this.scene.add(e.mesh),this.linePreviewEntities.push(e)}attemptPlaceLine(e){const t=this.grid.worldToGrid(e);if(!t)return;const n=this.grid.getCell(t.x,t.z);if(n&&n.type==="dock")return;if(!this.lineStartPos){this.lineStartPos={x:t.x,z:t.z},U.emit("ui:conveyor-line-status",{status:"end"});return}if(this.selectedType==="stacker-crane"){this.attemptPlaceStackerCrane(t);return}const i=Al(this.lineStartPos.x,this.lineStartPos.z,t.x,t.z);this.clearLinePreview();for(const r of i){if(!this.grid.canPlace(r.x,r.z))continue;const o=this.grid.getCell(r.x,r.z);if(o&&o.type==="dock")continue;if(!this.economy.purchase("conveyor"))break;const a=this.createEntity("conveyor",r.direction);a&&(this.grid.place(r.x,r.z,a.mesh,"conveyor"),a.setGridPosition(r.x,r.z),this.scene.add(a.mesh),this.placedEntities.set(`${r.x},${r.z}`,a),U.emit("entity:placed:complete",{entity:a,type:"conveyor",gridX:r.x,gridZ:r.z}))}this.lineStartPos=null,this.previewMesh&&(this.previewMesh.visible=!0),U.emit("ui:conveyor-line-status",{status:"start"}),this.economy.canAfford("conveyor")||this.cancelPlacement()}attemptPlaceStackerCrane(e){if(!this.lineStartPos)return;const t=El(this.lineStartPos.x,this.lineStartPos.z,e.x,e.z),n=[...t.aisleCells,...t.rackCells,...t.conveyorCells.map(a=>({x:a.x,z:a.z}))];for(const a of n)if(!this.grid.canPlace(a.x,a.z)){this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),U.emit("ui:conveyor-line-status",{status:"start"});return}const i=t.aisleCells.length,r=Tl(i);if(!ne.canAfford(r)){this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),U.emit("ui:conveyor-line-status",{status:"start"});return}ne.spendMoney(r),this.clearLinePreview();const o=new bi(i,t.aisleDirection);o.aisleCells=t.aisleCells,this.grid.place(t.aisleCells[0].x,t.aisleCells[0].z,o.mesh,"conveyor"),o.setGridPosition(t.aisleCells[0].x,t.aisleCells[0].z);for(let a=1;a<t.aisleCells.length;a++){const l=t.aisleCells[a],c=this.grid.getCell(l.x,l.z);c&&(c.occupied=!0,c.type="conveyor",c.walkable=!1)}this.scene.add(o.mesh);for(const a of t.aisleCells)this.placedEntities.set(`${a.x},${a.z}`,o);for(const a of t.rackCells){const l=new Vt(8);this.grid.place(a.x,a.z,l.mesh,"rack"),l.setGridPosition(a.x,a.z),this.scene.add(l.mesh),this.placedEntities.set(`${a.x},${a.z}`,l),o.childRacks.push(l),l.ownedByStackerCrane=!0;const c=ne.get("storageCapacity");ne.updateStorageCapacity(c+8),U.emit("entity:placed:complete",{entity:l,type:"rack",gridX:a.x,gridZ:a.z})}for(const a of t.conveyorCells){const l=new tt(a.direction);this.grid.place(a.x,a.z,l.mesh,"conveyor"),l.setGridPosition(a.x,a.z),this.scene.add(l.mesh),this.placedEntities.set(`${a.x},${a.z}`,l),o.childConveyors.push(l),l.isStackerCraneEntrance=o.isEntranceConveyor(l),l.isStackerCraneExit=!o.isEntranceConveyor(l),U.emit("entity:placed:complete",{entity:l,type:"conveyor",gridX:a.x,gridZ:a.z})}U.emit("entity:placed:complete",{entity:o,type:"stacker-crane",gridX:t.aisleCells[0].x,gridZ:t.aisleCells[0].z}),this.lineStartPos=null,this.previewMesh&&(this.previewMesh.visible=!0),U.emit("ui:conveyor-line-status",{status:"start"}),ne.canAfford(Mc)||this.cancelPlacement()}relocateEntity(e,t,n,i){const r=`${e},${t}`,o=this.placedEntities.get(r);if(!o)return!1;const a=this.getCellType(o.type);return this.grid.remove(e,t),this.grid.place(n,i,o.mesh,a)?(o.setGridPosition(n,i),this.placedEntities.delete(r),this.placedEntities.set(`${n},${i}`,o),!0):(this.grid.place(e,t,o.mesh,a),o.setGridPosition(e,t),!1)}moveEntityToWorldPos(e,t){const n=this.grid.worldToGrid(t);if(!n)return!1;const{x:i,z:r}=e.getGridPosition();if(n.x===i&&n.z===r||!this.grid.canPlace(n.x,n.z))return!1;if(e.type==="truck-dock"){const a=n.z===this.grid.height-1,l=n.z===0;if(!a&&!l)return!1}else{const a=this.grid.getCell(n.x,n.z);if(a&&a.type==="dock")return!1}const o=this.relocateEntity(i,r,n.x,n.z);return o&&U.emit("entity:moved",{entity:e,fromX:i,fromZ:r,gridX:n.x,gridZ:n.z}),o}removeEntity(e,t){const n=`${e},${t}`,i=this.placedEntities.get(n);if(!i)return null;const r=i.type;return Wt[r]&&this.economy.sell(r),this.grid.remove(e,t),this.scene.remove(i.mesh),i.dispose(),this.placedEntities.delete(n),U.emit("entity:removed:complete",{entity:i,type:r,gridX:e,gridZ:t}),i}getEntityAt(e,t){return this.placedEntities.get(`${e},${t}`)||null}getEntityById(e){for(const t of this.placedEntities.values())if(t.id===e)return t;return null}getAllEntities(){return Array.from(this.placedEntities.values())}getEntitiesByType(e){return this.getAllEntities().filter(t=>t.type===e)}relinkStackerCraneChildren(){for(const e of this.placedEntities.values()){if(!(e instanceof bi))continue;const t=e;if(t.childRacks.length>0||t.childConveyors.length>0||t.aisleCells.length===0)continue;const n=t.aisleDirection==="north-south";for(const o of t.aisleCells){const a=n?[{dx:-1,dz:0},{dx:1,dz:0}]:[{dx:0,dz:-1},{dx:0,dz:1}];for(const l of a){const c=this.placedEntities.get(`${o.x+l.dx},${o.z+l.dz}`);c instanceof Vt&&!t.childRacks.includes(c)&&(t.childRacks.push(c),c.ownedByStackerCrane=!0)}}const i=t.aisleCells.map(o=>o.x),r=t.aisleCells.map(o=>o.z);if(n){const o=i[0],a=Math.min(...r),l=Math.max(...r);for(const c of[o-1,o+1])for(const h of[a-1,l+1]){const d=this.placedEntities.get(`${c},${h}`);d instanceof tt&&!t.childConveyors.includes(d)&&(t.childConveyors.push(d),d.isStackerCraneEntrance=t.isEntranceConveyor(d),d.isStackerCraneExit=!t.isEntranceConveyor(d))}}else{const o=r[0],a=Math.min(...i),l=Math.max(...i);for(const c of[o-1,o+1])for(const h of[a-1,l+1]){const d=this.placedEntities.get(`${h},${c}`);d instanceof tt&&!t.childConveyors.includes(d)&&(t.childConveyors.push(d),d.isStackerCraneEntrance=t.isEntranceConveyor(d),d.isStackerCraneExit=!t.isEntranceConveyor(d))}}}}getOwnerStackerCrane(e){for(const t of this.placedEntities.values())if(t instanceof bi&&(t.childRacks.includes(e)||t.childConveyors.includes(e)))return t;return null}isInPlacementMode(){return this.isPlacementMode}getSelectedType(){return this.selectedType}update(e){const t=new Set;this.placedEntities.forEach(n=>{t.has(n)||(t.add(n),n.update(e))})}reset(){this.cancelPlacement();const e=new Set;this.placedEntities.forEach(t=>{e.has(t)||(e.add(t),this.scene.remove(t.mesh),t.dispose())}),this.placedEntities.clear()}}class jm{nodes=[];keyMap=new Map;get size(){return this.nodes.length}has(e){return this.keyMap.has(e)}get(e){return this.keyMap.get(e)}push(e,t){e.heapIndex=this.nodes.length,this.nodes.push(e),this.keyMap.set(t,e),this.bubbleUp(e.heapIndex)}pop(){if(this.nodes.length===0)return;const e=this.nodes[0],t=this.nodes.pop();return this.keyMap.delete(this.nodeKey(e)),this.nodes.length>0&&(this.nodes[0]=t,t.heapIndex=0,this.sinkDown(0)),e}update(e){this.bubbleUp(e.heapIndex)}nodeKey(e){return`${e.x},${e.z}`}bubbleUp(e){const t=this.nodes[e];for(;e>0;){const n=e-1>>1,i=this.nodes[n];if(t.f>=i.f)break;this.nodes[e]=i,i.heapIndex=e,e=n}this.nodes[e]=t,t.heapIndex=e}sinkDown(e){const t=this.nodes.length,n=this.nodes[e];for(;;){let i=e;const r=2*e+1,o=2*e+2;if(r<t&&this.nodes[r].f<this.nodes[i].f&&(i=r),o<t&&this.nodes[o].f<this.nodes[i].f&&(i=o),i===e)break;const a=this.nodes[i];this.nodes[e]=a,a.heapIndex=e,e=i}this.nodes[e]=n,n.heapIndex=e}}class Jm{grid;collisionSystem=null;constructor(e){this.grid=e}setCollisionSystem(e){this.collisionSystem=e}findPath(e,t,n,i,r){if(!this.grid.isInBounds(e,t)||!this.grid.isInBounds(n,i))return null;const o=this.grid.getCell(e,t),a=this.grid.getCell(n,i);if(!o||!a)return null;let l=n,c=i;if(!a.walkable){const m=this.findAdjacentWalkable(n,i);if(!m)return null;l=m.x,c=m.z}const h=new jm,d=new Set,f={x:e,z:t,g:0,h:this.heuristic(e,t,l,c),f:0,parent:null,heapIndex:0};for(f.f=f.g+f.h,h.push(f,this.getKey(e,t));h.size>0;){const m=h.pop();if(m.x===l&&m.z===c)return this.reconstructPath(m);d.add(this.getKey(m.x,m.z));const g=this.getWalkableNeighbors(m.x,m.z,l,c,r);for(const v of g){const p=this.getKey(v.x,v.z);if(d.has(p))continue;const u=m.g+1;let _=h.get(p);_?u<_.g&&(_.g=u,_.f=_.g+_.h,_.parent=m,h.update(_)):(_={x:v.x,z:v.z,g:u,h:this.heuristic(v.x,v.z,l,c),f:0,parent:m,heapIndex:0},_.f=_.g+_.h,h.push(_,p))}}return null}findPathWorld(e,t,n,i,r){const o=this.findPath(e,t,n,i,r);return o?o.map(a=>this.grid.gridToWorld(a.x,a.z)):null}heuristic(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}reconstructPath(e){const t=[];let n=e;for(;n;)t.unshift({x:n.x,z:n.z}),n=n.parent;return t.length>0&&t.shift(),t}getWalkableNeighbors(e,t,n,i,r){const o=this.grid.getNeighbors(e,t);return!this.collisionSystem||!r?o:o.filter(a=>n!==void 0&&i!==void 0&&a.x===n&&a.z===i?!0:this.collisionSystem.isCellAvailableForWorker(a.x,a.z,r))}findAdjacentWalkable(e,t){const n=[{dx:0,dz:-1},{dx:-1,dz:0},{dx:1,dz:0},{dx:0,dz:1}];for(const{dx:i,dz:r}of n){const o=e+i,a=t+r,l=this.grid.getCell(o,a);if(l&&l.walkable)return{x:o,z:a}}return null}getKey(e,t){return`${e},${t}`}hasPath(e,t,n,i,r){return this.findPath(e,t,n,i,r)!==null}getPathLength(e,t,n,i,r){const o=this.findPath(e,t,n,i,r);return o?o.length:-1}findNearestCellOfType(e,t,n,i){const o=this.grid.getCellsByType(n).filter(l=>!i||i(l)).map(l=>({x:l.x,z:l.z,manhattan:Math.abs(l.x-e)+Math.abs(l.z-t)})).sort((l,c)=>l.manhattan-c.manhattan);let a=null;for(const l of o){if(a&&l.manhattan>=a.distance)break;const c=this.getPathLength(e,t,l.x,l.z);c>=0&&(!a||c<a.distance)&&(a={x:l.x,z:l.z,distance:c})}return a}}class Qm{grid;workerOccupancy=new Map;reservedCells=new Map;constructor(e){this.grid=e}updateWorkerPosition(e){const t=e.getWorldPosition(),n=this.grid.worldToGrid(t);if(!n)return;this.clearWorkerOccupancy(e.id);const i=this.getKey(n.x,n.z);this.workerOccupancy.set(i,e.id)}reserveCell(e,t,n){const i=this.getKey(e,t),r=this.workerOccupancy.get(i),o=this.reservedCells.get(i);return r&&r!==n||o&&o!==n?!1:(this.reservedCells.set(i,n),!0)}releaseReservation(e,t,n){const i=this.getKey(e,t);this.reservedCells.get(i)===n&&this.reservedCells.delete(i)}clearWorkerOccupancy(e){for(const[t,n]of this.workerOccupancy.entries())n===e&&this.workerOccupancy.delete(t)}isCellAvailableForWorker(e,t,n){const i=this.getKey(e,t),r=this.workerOccupancy.get(i);if(r&&r!==n)return!1;const o=this.reservedCells.get(i);return!(o&&o!==n)}findIdleCirculationPoint(e,t,n){const i=e.getWorldPosition(),r=this.grid.worldToGrid(i);if(!r)return null;const o=3,a=[];for(let h=-o;h<=o;h++)for(let d=-o;d<=o;d++){if(h===0&&d===0)continue;const f=r.x+h,m=r.z+d;if(t!==void 0&&n!==void 0&&Math.abs(f-t)<2&&Math.abs(m-n)<2)continue;const g=this.grid.getCell(f,m);if(g&&g.walkable&&!g.occupied&&this.isCellAvailableForWorker(f,m,e.id)){const v=Math.abs(h)+Math.abs(d);a.push({x:f,z:m,distance:v})}}if(a.length===0)return null;a.sort((h,d)=>{const f=d.distance-h.distance,m=(Math.random()-.5)*2;return f+m});const l=Math.min(5,a.length),c=Math.floor(Math.random()*l);return a[c]}getOccupiedCells(){return new Set([...this.workerOccupancy.keys(),...this.reservedCells.keys()])}unregisterWorker(e){this.clearWorkerOccupancy(e);for(const[t,n]of this.reservedCells.entries())n===e&&this.reservedCells.delete(t)}reset(){this.workerOccupancy.clear(),this.reservedCells.clear()}getKey(e,t){return`${e},${t}`}}function ss(s,e,t,n={}){return{id:`task-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:s,status:"pending",priority:n.priority??1,source:e,destination:t,workerType:n.workerType??"forklift",createdAt:Date.now(),...n}}function eg(s,e,t,n,i,r="forklift"){return ss("unload-truck",e,t,{sourceTruck:s,destinationRack:n,destinationFloorSlot:i,workerType:r,priority:2})}function tg(s,e,t,n,i,r,o="forklift"){return ss("load-truck",t,i,{sourceRack:s,sourceFloorSlot:e,destinationTruck:n,orderId:r,workerType:o,priority:3})}function ng(s,e,t,n,i,r,o="forklift"){return ss("putaway",t,r,{sourceRack:s,sourceFloorSlot:e,destinationRack:n,destinationFloorSlot:i,workerType:o,priority:1})}function ig(s,e,t,n,i,r,o="forklift"){return ss("replenish",t,r,{sourceRack:s,sourceFloorSlot:e,destinationRack:n,destinationFloorSlot:i,workerType:o,priority:2})}function sg(s,e,t,n,i,r,o="forklift"){return ss("stage",t,r,{sourceRack:s,sourceFloorSlot:e,destinationRack:n,destinationFloorSlot:i,workerType:o,priority:2})}class rg{reservedForStore=new Map;reservedForRetrieval=new Map;reserveForStore(e,t,n,i){const r=`${t},${n}`;if(this.getAvailableSpots(e,r)<=0)return!1;if(e instanceof hn||e instanceof tt){if(this.reservedForStore.has(r))return!1;this.reservedForStore.set(r,i)}else{const a=this.getStoreReservationCount(r),l=`${r}:${a}`;this.reservedForStore.set(l,i)}return!0}releaseStoreReservation(e,t,n){const i=`${e},${t}`;if(this.reservedForStore.get(i)===n){this.reservedForStore.delete(i);return}for(let r=0;r<4;r++){const o=`${i}:${r}`;if(this.reservedForStore.get(o)===n){this.reservedForStore.delete(o);return}}}reserveForRetrieval(e,t,n,i){const r=`${t},${n}`;if(this.getAvailablePalletsForRetrieval(e,r)<=0)return!1;const a=this.reservedForRetrieval.get(r)||[];return a.push(i),this.reservedForRetrieval.set(r,a),!0}releaseRetrievalReservation(e,t,n){const i=`${e},${t}`,r=this.reservedForRetrieval.get(i);if(r){const o=r.indexOf(n);o!==-1&&(r.splice(o,1),r.length===0&&this.reservedForRetrieval.delete(i))}}getStoreReservationCount(e){let t=0;this.reservedForStore.has(e)&&t++;for(let n=0;n<4;n++)this.reservedForStore.has(`${e}:${n}`)&&t++;return t}getRetrievalReservationCount(e){return this.reservedForRetrieval.get(e)?.length||0}getAvailableSpots(e,t){const n=this.getStoreReservationCount(t);if(e instanceof hn||e instanceof tt)return 1-(e.hasPallet?1:0)-n;{const i=e;return i.capacity-i.storedPallets-n}}getAvailablePalletsForRetrieval(e,t){const n=this.getRetrievalReservationCount(t);return e instanceof hn||e instanceof tt?(e.hasPallet?1:0)-n:e.storedPallets-n}canStore(e,t,n){const i=`${t},${n}`;return this.getAvailableSpots(e,i)>0}canRetrieve(e,t,n){const i=`${t},${n}`;return this.getAvailablePalletsForRetrieval(e,i)>0}reset(){this.reservedForStore.clear(),this.reservedForRetrieval.clear()}getDebugInfo(){let e=0;for(const t of this.reservedForRetrieval.values())e+=t.length;return{storeReservations:this.reservedForStore.size,retrievalReservations:e}}getDetailedReservations(){const e=[],t=[];for(const[n,i]of this.reservedForStore.entries())e.push({location:n,taskId:i});for(const[n,i]of this.reservedForRetrieval.entries())t.push({location:n,taskIds:[...i]});return{storeReservations:e,retrievalReservations:t}}}const Ze=new rg;class og{grid;scene;pathfinder;collisionSystem;taskQueue=[];workers=new Map;pallets=new Map;pendingUnloadTasksByTruck=new Map;pendingTaskCount=0;activeTaskCount=0;storageRacks=new Map;storageFloorSlots=new Map;storageConveyors=new Map;deliveryZoneZ=0;idleCirculationTimer=0;idleCirculationInterval=3;outboundTrucksCallback=null;pendingLoadTasksByOrder=new Map;dockedInboundTrucks=new Map;constructor(e,t){this.scene=e,this.grid=t,this.pathfinder=new Jm(t),this.collisionSystem=new Qm(t),this.pathfinder.setCollisionSystem(this.collisionSystem),this.setupEventListeners()}setOutboundTrucksCallback(e){this.outboundTrucksCallback=e}setupEventListeners(){U.on("truck:arrived",({dockPosition:e,pallets:t})=>{}),U.on("order:needs-loading",({orderId:e,quantity:t,truck:n,dockX:i,dockZ:r})=>{this.createLoadTruckTasks(e,t,n,i,r)}),U.on("order:retrieve-pallets",({quantity:e})=>{for(let t=0;t<e;t++)this.retrievePalletFromStorage()})}registerWorker(e){const t={worker:e,currentTask:null,taskPhase:"idle",carryingPallet:null,pathRecalcCooldown:0,deadlockStuckCount:0};this.workers.set(e.id,t),e instanceof yt&&(e.setCollisionCheckCallback((n,i)=>{const r=this.grid.worldToGrid(n);return r?this.collisionSystem.isCellAvailableForWorker(r.x,r.z,i):!0}),e.setPathRecalculationCallback(n=>{this.recalculatePathForWorker(n)}))}unregisterWorker(e){const t=this.workers.get(e);t?.currentTask&&(this.activeTaskCount--,this.pendingTaskCount++,t.currentTask.status="pending",t.currentTask.assignedWorker=void 0),this.collisionSystem.unregisterWorker(e),this.workers.delete(e)}registerRack(e,t,n){const i=`${t},${n}`;this.storageRacks.set(i,e)}unregisterRack(e,t){const n=`${e},${t}`;this.storageRacks.delete(n)}registerFloorSlot(e,t,n){const i=`${t},${n}`;this.storageFloorSlots.set(i,e)}unregisterFloorSlot(e,t){const n=`${e},${t}`;this.storageFloorSlots.delete(n)}registerConveyor(e,t,n){const i=`${t},${n}`;this.storageConveyors.set(i,e)}unregisterConveyor(e,t){const n=`${e},${t}`,i=this.storageConveyors.get(n);if(i){for(const r of this.storageConveyors.values())if(r.nextConveyor===i&&(r.nextConveyor=null),r instanceof ht)for(let o=0;o<r.diverterOutputs.length;o++)r.diverterOutputs[o]===i&&(r.diverterOutputs[o]=null)}this.storageConveyors.delete(n)}getConveyorAt(e,t){return this.storageConveyors.get(`${e},${t}`)||null}isConveyorEntryPoint(e){for(const t of this.storageConveyors.values())if(t!==e&&(t.nextConveyor===e||t instanceof ht&&t.diverterOutputs.includes(e)))return!1;return!0}isConveyorExitPoint(e){return e instanceof ht?e.diverterOutputs.every(t=>t===null):e.nextConveyor===null}createUnloadTasksForTruck(e,t,n){this.dockedInboundTrucks.set(e.id,{truck:e,dockX:t,dockZ:n});const i=e.getPalletsRemaining();this.tryCreateUnloadTasksForTruck(e,t,n,i)}tryCreateUnloadTasksForTruck(e,t,n,i){let r=0;for(let o=0;o<i;o++){const a=this.findAvailableStorageForInbound(t,n);if(a){const l=a.type==="rack"?"forklift":"operator";let c=a.gridX,h=a.gridZ;if(a.type==="rack"){const m=a.entity.getClosestAccessPosition(t,n),g=this.grid.worldToGrid(m.position);g&&(c=g.x,h=g.z)}else if(a.type==="floor-slot"){const m=a.entity.getClosestAccessPosition(t,n),g=this.grid.worldToGrid(m.position);g&&(c=g.x,h=g.z)}else if(a.type==="conveyor"){const m=a.entity.getClosestAccessPosition(t,n),g=this.grid.worldToGrid(m.position);g&&(c=g.x,h=g.z)}const d=eg(e,{gridX:t,gridZ:n},{gridX:c,gridZ:h},a.type==="rack"?a.entity:void 0,a.type==="floor-slot"?a.entity:void 0,l);a.type==="conveyor"&&(d.destinationConveyor=a.entity),Ze.reserveForStore(a.entity,a.gridX,a.gridZ,d.id),this.addTask(d),r++}else break}return r===0&&i>0&&console.warn("[PickingManager] No available storage for unload task; will retry when space frees"),r}checkInboundTrucksNeedTasks(){for(const[e,{truck:t,dockX:n,dockZ:i}]of this.dockedInboundTrucks){if(t.getPalletsRemaining()===0||t.state==="departing"||t.state==="gone"){this.dockedInboundTrucks.delete(e);continue}const r=this.pendingUnloadTasksByTruck.get(e)||0,o=t.getPalletsRemaining()-r;o>0&&this.tryCreateUnloadTasksForTruck(t,n,i,o)}}createLoadTruckTasks(e,t,n,i,r){console.log(`[PickingManager] Creating up to ${t} load-truck tasks for order ${e}`);let o=0;for(let a=0;a<t;a++){const l=this.findStorageWithPalletForOutbound(i,r);if(l){const c=l.type==="rack"?"forklift":"operator";let h=l.gridX,d=l.gridZ;if(l.type==="rack"){const v=l.entity.getClosestAccessPosition(i,r),p=this.grid.worldToGrid(v.position);p&&(h=p.x,d=p.z)}else if(l.type==="floor-slot"){const v=l.entity.getClosestAccessPosition(i,r),p=this.grid.worldToGrid(v.position);p&&(h=p.x,d=p.z)}else if(l.type==="conveyor"){const v=l.entity.getClosestAccessPosition(i,r),p=this.grid.worldToGrid(v.position);p&&(h=p.x,d=p.z)}const f=tg(l.type==="rack"?l.entity:void 0,l.type==="floor-slot"?l.entity:void 0,{gridX:h,gridZ:d},n,{gridX:i,gridZ:r},e,c);l.type==="conveyor"&&(f.sourceConveyor=l.entity),Ze.reserveForRetrieval(l.entity,l.gridX,l.gridZ,f.id),this.addTask(f),o++;const m=this.pendingLoadTasksByOrder.get(e)||0;this.pendingLoadTasksByOrder.set(e,m+1)}else{console.warn(`[PickingManager] No pallets available for load-truck task (order ${e})`);break}}return console.log(`[PickingManager] Created ${o}/${t} load-truck tasks for order ${e}`),o}addTask(e){if(this.taskQueue.push(e),this.taskQueue.sort((t,n)=>n.priority-t.priority),this.pendingTaskCount++,e.type==="unload-truck"&&e.sourceTruck){const t=e.sourceTruck.id;this.pendingUnloadTasksByTruck.set(t,(this.pendingUnloadTasksByTruck.get(t)||0)+1)}}calculateDistance(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}findAvailableStorage(e,t,n){const i=this.hasIdleWorkerOfType("forklift"),r=this.hasIdleWorkerOfType("operator");if(e==="forklift"||!e&&i){const a=this.findClosestAvailableRack(t,n);return a||(r||i?this.findClosestAvailableFloorSlot(t,n):null)}else{const a=this.findClosestAvailableFloorSlot(t,n);return a||this.findClosestAvailableRack(t,n)}}findClosestAvailableRack(e,t){let n=null,i=1/0;for(const[r,o]of this.storageRacks){const[a,l]=r.split(",").map(Number);if(!o.ownedByStackerCrane&&Ze.canStore(o,a,l)){const c=e!==void 0&&t!==void 0?this.calculateDistance(a,l,e,t):0;c<i&&(i=c,n={entity:o,type:"rack",gridX:a,gridZ:l})}}return n}findClosestAvailableFloorSlot(e,t){let n=null,i=1/0;for(const[r,o]of this.storageFloorSlots){const[a,l]=r.split(",").map(Number);if(Ze.canStore(o,a,l)){const c=e!==void 0&&t!==void 0?this.calculateDistance(a,l,e,t):0;c<i&&(i=c,n={entity:o,type:"floor-slot",gridX:a,gridZ:l})}}for(const[r,o]of this.storageConveyors){const[a,l]=r.split(",").map(Number);if(this.isConveyorEntryPoint(o)&&!o.isStackerCraneExit&&Ze.canStore(o,a,l)){const c=e!==void 0&&t!==void 0?this.calculateDistance(a,l,e,t):0;c<i&&(i=c,n={entity:o,type:"conveyor",gridX:a,gridZ:l})}}return n}findAvailableRack(){return this.findClosestAvailableRack()}findAvailableFloorSlot(){return this.findClosestAvailableFloorSlot()}findAvailableStorageForInbound(e,t){const n=this.findClosestAvailableStorageByType("unloading",e,t);if(n)return n;const i=this.findClosestAvailableStorageByType("storage",e,t);return i||this.findAvailableStorage(void 0,e,t)}findStorageWithPalletForOutbound(e,t){const n=this.findClosestStorageWithPalletByType("loading",e,t);if(n)return n;const i=this.findClosestStorageWithPalletByType("picking",e,t);return i||this.findStorageWithPallet()}findClosestAvailableStorageByType(e,t,n){let i=null,r=1/0;for(const[l,c]of this.storageConveyors){if(c.storageType!==e)continue;const[h,d]=l.split(",").map(Number);if(!this.isConveyorEntryPoint(c)||c.isStackerCraneExit||!Ze.canStore(c,h,d))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(h,d,t,n):0;f<r&&(r=f,i={entity:c,type:"conveyor",gridX:h,gridZ:d})}if(i)return i;let o=null,a=1/0;for(const[l,c]of this.storageRacks){if(c.storageType!==e||c.ownedByStackerCrane)continue;const[h,d]=l.split(",").map(Number);if(!Ze.canStore(c,h,d))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(h,d,t,n):0;f<a&&(a=f,o={entity:c,type:"rack",gridX:h,gridZ:d})}for(const[l,c]of this.storageFloorSlots){if(c.storageType!==e)continue;const[h,d]=l.split(",").map(Number);if(!Ze.canStore(c,h,d))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(h,d,t,n):0;f<a&&(a=f,o={entity:c,type:"floor-slot",gridX:h,gridZ:d})}return o}findClosestStorageWithPalletByType(e,t,n){let i=null,r=1/0;for(const[l,c]of this.storageConveyors){if(c.storageType!==e)continue;const[h,d]=l.split(",").map(Number);if(!this.isConveyorExitPoint(c)||c.isStackerCraneEntrance||!Ze.canRetrieve(c,h,d))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(h,d,t,n):0;f<r&&(r=f,i={entity:c,type:"conveyor",gridX:h,gridZ:d})}if(i)return i;let o=null,a=1/0;for(const[l,c]of this.storageRacks){if(c.storageType!==e||c.ownedByStackerCrane)continue;const[h,d]=l.split(",").map(Number);if(!Ze.canRetrieve(c,h,d))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(h,d,t,n):0;f<a&&(a=f,o={entity:c,type:"rack",gridX:h,gridZ:d})}for(const[l,c]of this.storageFloorSlots){if(c.storageType!==e)continue;const[h,d]=l.split(",").map(Number);if(!Ze.canRetrieve(c,h,d))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(h,d,t,n):0;f<a&&(a=f,o={entity:c,type:"floor-slot",gridX:h,gridZ:d})}return o}createPutawayTasks(){let e=0;for(const[t,n]of[...this.storageRacks,...this.storageFloorSlots,...this.storageConveyors]){const i=this.storageRacks.has(t),r=this.storageConveyors.has(t);if((i?this.storageRacks.get(t).storageType:r?this.storageConveyors.get(t).storageType:this.storageFloorSlots.get(t).storageType)!=="unloading")continue;const[a,l]=t.split(",").map(Number);if(r&&!this.isConveyorExitPoint(n)||!Ze.canRetrieve(n,a,l))continue;const c=this.findClosestAvailableStorageByType("storage",a,l);if(!c)break;const h=i||c.type==="rack"?"forklift":"operator";let d=a,f=l;if(i){const p=n,u=Math.floor(this.grid.width/2),_=Math.floor(this.grid.height/2),b=p.getClosestAccessPosition(u,_),M=this.grid.worldToGrid(b.position);M&&(d=M.x,f=M.z)}else if(r){const p=n,u=Math.floor(this.grid.width/2),_=Math.floor(this.grid.height/2),b=p.getClosestAccessPosition(u,_),M=this.grid.worldToGrid(b.position);M&&(d=M.x,f=M.z)}else{const p=n,u=Math.floor(this.grid.width/2),_=Math.floor(this.grid.height/2),b=p.getClosestAccessPosition(u,_),M=this.grid.worldToGrid(b.position);M&&(d=M.x,f=M.z)}let m=c.gridX,g=c.gridZ;if(c.type==="rack"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}else if(c.type==="floor-slot"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}else if(c.type==="conveyor"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}const v=ng(i?n:void 0,!i&&!r?n:void 0,{gridX:d,gridZ:f},c.type==="rack"?c.entity:void 0,c.type==="floor-slot"?c.entity:void 0,{gridX:m,gridZ:g},h);r&&(v.sourceConveyor=n),c.type==="conveyor"&&(v.destinationConveyor=c.entity),Ze.reserveForRetrieval(n,a,l,v.id),Ze.reserveForStore(c.entity,c.gridX,c.gridZ,v.id),this.addTask(v),e++}return e}createReplenishTasks(){let e=0;for(const[t,n]of[...this.storageConveyors,...this.storageFloorSlots,...this.storageRacks]){const i=this.storageRacks.has(t),r=this.storageConveyors.has(t);if((i?this.storageRacks.get(t).storageType:r?this.storageConveyors.get(t).storageType:this.storageFloorSlots.get(t).storageType)!=="picking")continue;const[a,l]=t.split(",").map(Number);if(r&&!this.isConveyorEntryPoint(n)||!Ze.canStore(n,a,l))continue;const c=this.findClosestStorageWithPalletByType("storage",a,l);if(!c)break;const h=c.type==="rack"||i?"forklift":"operator";let d=c.gridX,f=c.gridZ;if(c.type==="rack"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(d=_.x,f=_.z)}else if(c.type==="floor-slot"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(d=_.x,f=_.z)}else if(c.type==="conveyor"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(d=_.x,f=_.z)}let m=a,g=l;if(i){const u=n.getClosestAccessPosition(c.gridX,c.gridZ),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}else if(r){const u=n.getClosestAccessPosition(c.gridX,c.gridZ),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}else{const u=n.getClosestAccessPosition(c.gridX,c.gridZ),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}const v=ig(c.type==="rack"?c.entity:void 0,c.type==="floor-slot"?c.entity:void 0,{gridX:d,gridZ:f},i?n:void 0,!i&&!r?n:void 0,{gridX:m,gridZ:g},h);c.type==="conveyor"&&(v.sourceConveyor=c.entity),r&&(v.destinationConveyor=n),Ze.reserveForRetrieval(c.entity,c.gridX,c.gridZ,v.id),Ze.reserveForStore(n,a,l,v.id),this.addTask(v),e++}return e}createStagingTasks(){let e=0;for(const[t,n]of[...this.storageRacks,...this.storageFloorSlots,...this.storageConveyors]){const i=this.storageRacks.has(t),r=this.storageConveyors.has(t);if((i?this.storageRacks.get(t).storageType:r?this.storageConveyors.get(t).storageType:this.storageFloorSlots.get(t).storageType)!=="loading")continue;const[a,l]=t.split(",").map(Number);if(r&&!this.isConveyorEntryPoint(n)||!Ze.canStore(n,a,l))continue;const c=this.findClosestStorageWithPalletByType("picking",a,l);if(!c)break;const h=c.type==="rack"||i?"forklift":"operator";let d=c.gridX,f=c.gridZ;if(c.type==="rack"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(d=_.x,f=_.z)}else if(c.type==="floor-slot"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(d=_.x,f=_.z)}else if(c.type==="conveyor"){const u=c.entity.getClosestAccessPosition(a,l),_=this.grid.worldToGrid(u.position);_&&(d=_.x,f=_.z)}let m=a,g=l;if(i){const u=n.getClosestAccessPosition(c.gridX,c.gridZ),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}else if(r){const u=n.getClosestAccessPosition(c.gridX,c.gridZ),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}else{const u=n.getClosestAccessPosition(c.gridX,c.gridZ),_=this.grid.worldToGrid(u.position);_&&(m=_.x,g=_.z)}const v=sg(c.type==="rack"?c.entity:void 0,c.type==="floor-slot"?c.entity:void 0,{gridX:d,gridZ:f},i?n:void 0,!i&&!r?n:void 0,{gridX:m,gridZ:g},h);c.type==="conveyor"&&(v.sourceConveyor=c.entity),r&&(v.destinationConveyor=n),Ze.reserveForRetrieval(c.entity,c.gridX,c.gridZ,v.id),Ze.reserveForStore(n,a,l,v.id),this.addTask(v),e++}return e}hasIdleWorkerOfType(e){for(const t of this.workers.values())if(t.worker.type===e&&t.taskPhase==="idle"&&t.worker.isIdle())return!0;return!1}findStorageWithPallet(){for(const[e,t]of this.storageRacks){const[n,i]=e.split(",").map(Number);if(!t.ownedByStackerCrane&&Ze.canRetrieve(t,n,i))return{entity:t,type:"rack",gridX:n,gridZ:i}}for(const[e,t]of this.storageFloorSlots){const[n,i]=e.split(",").map(Number);if(Ze.canRetrieve(t,n,i))return{entity:t,type:"floor-slot",gridX:n,gridZ:i}}for(const[e,t]of this.storageConveyors){const[n,i]=e.split(",").map(Number);if(this.isConveyorExitPoint(t)&&!t.isStackerCraneEntrance&&Ze.canRetrieve(t,n,i))return{entity:t,type:"conveyor",gridX:n,gridZ:i}}return null}retrievePalletFromStorage(){for(const e of this.storageRacks.values())if(!e.ownedByStackerCrane&&e.storedPallets>0)return e.retrieve(),!0;for(const e of this.storageFloorSlots.values())if(e.hasPallet)return e.retrieve(),!0;for(const e of this.storageConveyors.values())if(this.isConveyorExitPoint(e)&&!e.isStackerCraneEntrance&&e.hasPallet)return e.retrieve(),!0;return!1}getClosestIdleWorker(e,t,n,i){let r=null,o=1/0;for(const a of this.workers.values())if(a.worker.type===e&&a.taskPhase==="idle"&&a.worker.isIdle()){const l=a.worker.allowedTaskTypes;if(i&&l!==null&&!l.includes(i))continue;const c=a.worker.getWorldPosition(),h=this.grid.worldToGrid(c);if(h){const d=this.calculateDistance(h.x,h.z,t,n);d<o&&(o=d,r=a)}}return r}getIdleWorker(e){for(const t of this.workers.values())if(t.worker.type===e&&t.taskPhase==="idle"&&t.worker.isIdle())return t;return null}assignTasks(){const t=[...this.taskQueue.filter(n=>n.status==="pending")].sort((n,i)=>i.priority!==n.priority?i.priority-n.priority:n.workerType==="forklift"&&i.workerType==="operator"?-1:n.workerType==="operator"&&i.workerType==="forklift"?1:0);for(const n of t){const i=this.getClosestIdleWorker(n.workerType,n.source.gridX,n.source.gridZ,n.type);if(i){this.assignTaskToWorker(n,i);continue}if(n.workerType==="operator"&&!n.sourceConveyor&&!t.some(o=>o.status==="pending"&&o.workerType==="forklift")){const o=this.getClosestIdleWorker("forklift",n.source.gridX,n.source.gridZ,n.type);o&&this.assignTaskToWorker(n,o)}}}assignTaskToWorker(e,t){e.status="assigned",e.assignedWorker=t.worker,e.startedAt=Date.now(),this.pendingTaskCount--,this.activeTaskCount++,t.currentTask=e,t.taskPhase="moving-to-source";const n=t.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i){console.warn("[PickingManager] Worker is out of bounds, cannot assign task"),this.handleNoPath(t,e);return}const r=this.pathfinder.findPathWorld(i.x,i.z,e.source.gridX,e.source.gridZ,t.worker.id);r&&r.length>0?(t.worker instanceof yt||t.worker instanceof Qt)&&t.worker.setPath(r):this.handleNoPath(t,e)}handleNoPath(e,t){console.warn("No path found for task",t.id),this.activeTaskCount--,this.decrementUnloadIndex(t),t.status="failed",e.currentTask=null,e.taskPhase="idle",this.releaseTaskReservations(t);const n=this.taskQueue.indexOf(t);n>-1&&this.taskQueue.splice(n,1)}recalculatePathForWorker(e){const t=this.workers.get(e);if(!t||!t.currentTask)return;const n=t.currentTask,i=t.worker.getWorldPosition(),r=this.grid.worldToGrid(i);if(!r)return;let o,a;if(t.taskPhase==="moving-to-source")o=n.source.gridX,a=n.source.gridZ;else if(t.taskPhase==="moving-to-dest")o=n.destination.gridX,a=n.destination.gridZ;else return;if(this.isWorkerAtPosition(t.worker,o,a)){console.log(`[PickingManager] Worker ${e.substring(0,8)} already at destination, triggering phase transition`),t.worker instanceof yt&&(t.worker.state="idle",t.worker.path=[]);return}const l=this.pathfinder.findPathWorld(r.x,r.z,o,a,t.worker.id);l&&l.length>0?(console.log(`[PickingManager] Recalculated path for ${e.substring(0,8)}: ${l.length} steps`),t.deadlockStuckCount=0,(t.worker instanceof yt||t.worker instanceof Qt)&&t.worker.setPath(l)):(console.log(`[PickingManager] No path found for ${e.substring(0,8)} from (${r.x}, ${r.z}) to (${o}, ${a})`),t.deadlockStuckCount++,t.deadlockStuckCount>=3&&(t.deadlockStuckCount=0,this.tryResolveDeadlock(e,o,a)))}tryResolveDeadlock(e,t,n){const i=this.workers.get(e);if(!(!i||!(i.worker instanceof yt))&&i.taskPhase==="moving-to-dest")for(const[r,o]of this.workers){if(r===e||!(o.worker instanceof yt)||o.taskPhase!=="moving-to-dest"||!o.currentTask)continue;const a=o.currentTask.destination;if(a.gridX!==t||a.gridZ!==n)continue;const l=this.grid.worldToGrid(i.worker.getWorldPosition()),c=this.grid.worldToGrid(o.worker.getWorldPosition());if(!l||!c)continue;const h=Math.abs(l.x-t)+Math.abs(l.z-n),d=Math.abs(c.x-t)+Math.abs(c.z-n),f=h>d||h===d&&e<r,[m,g]=f?[e,i]:[r,o],v=this.grid.worldToGrid(g.worker.getWorldPosition());if(!v)continue;const p=this.collisionSystem.findIdleCirculationPoint(g.worker,t,n);if(!p)continue;const u=this.pathfinder.findPathWorld(v.x,v.z,p.x,p.z,m);u&&u.length>0&&(console.log(`[PickingManager] Deadlock at (${t},${n}): forklift ${m.substring(0,8)} yields to (${p.x},${p.z})`),g.worker.setPath(u),g.pathRecalcCooldown=1.5,g.deadlockStuckCount=0);break}}releaseTaskReservations(e){if(e.type==="unload-truck"){let t=e.destination.gridX,n=e.destination.gridZ;if(e.destinationRack){const i=this.findStorageInfo(e.destinationRack);i&&(t=i.gridX,n=i.gridZ)}else if(e.destinationFloorSlot){const i=this.findStorageInfo(e.destinationFloorSlot);i&&(t=i.gridX,n=i.gridZ)}else if(e.destinationConveyor){const i=this.findStorageInfo(e.destinationConveyor);i&&(t=i.gridX,n=i.gridZ)}Ze.releaseStoreReservation(t,n,e.id)}else if(e.type==="putaway"||e.type==="replenish"||e.type==="stage"){let t=e.destination.gridX,n=e.destination.gridZ;if(e.destinationRack){const o=this.findStorageInfo(e.destinationRack);o&&(t=o.gridX,n=o.gridZ)}else if(e.destinationFloorSlot){const o=this.findStorageInfo(e.destinationFloorSlot);o&&(t=o.gridX,n=o.gridZ)}else if(e.destinationConveyor){const o=this.findStorageInfo(e.destinationConveyor);o&&(t=o.gridX,n=o.gridZ)}Ze.releaseStoreReservation(t,n,e.id);let i=e.source.gridX,r=e.source.gridZ;if(e.sourceRack){const o=this.findStorageInfo(e.sourceRack);o&&(i=o.gridX,r=o.gridZ)}else if(e.sourceFloorSlot){const o=this.findStorageInfo(e.sourceFloorSlot);o&&(i=o.gridX,r=o.gridZ)}else if(e.sourceConveyor){const o=this.findStorageInfo(e.sourceConveyor);o&&(i=o.gridX,r=o.gridZ)}Ze.releaseRetrievalReservation(i,r,e.id)}else if(e.type==="load-truck"){let t=e.source.gridX,n=e.source.gridZ;if(e.sourceRack){const i=this.findStorageInfo(e.sourceRack);i&&(t=i.gridX,n=i.gridZ)}else if(e.sourceFloorSlot){const i=this.findStorageInfo(e.sourceFloorSlot);i&&(t=i.gridX,n=i.gridZ)}else if(e.sourceConveyor){const i=this.findStorageInfo(e.sourceConveyor);i&&(t=i.gridX,n=i.gridZ)}Ze.releaseRetrievalReservation(t,n,e.id)}}findStorageInfo(e){for(const[t,n]of this.storageRacks)if(n===e){const[i,r]=t.split(",").map(Number);return{gridX:i,gridZ:r}}for(const[t,n]of this.storageFloorSlots)if(n===e){const[i,r]=t.split(",").map(Number);return{gridX:i,gridZ:r}}for(const[t,n]of this.storageConveyors)if(n===e){const[i,r]=t.split(",").map(Number);return{gridX:i,gridZ:r}}return null}isWorkerAtPosition(e,t,n){const i=e.getWorldPosition(),r=this.grid.worldToGrid(i);if(!r)return console.warn("[PickingManager] Worker position out of bounds"),!1;const o=Math.abs(r.x-t),a=Math.abs(r.z-n);return o===0&&a===0||o===1&&a===0||o===0&&a===1}updateWorkerState(e,t){const{worker:n,currentTask:i,taskPhase:r}=e;if(!i||r==="idle")return;e.pathRecalcCooldown>0&&(e.pathRecalcCooldown-=t);const o=n.isIdle();switch(r){case"moving-to-source":o&&(this.isWorkerAtPosition(n,i.source.gridX,i.source.gridZ)?(e.taskPhase="picking",this.startPicking(e)):e.pathRecalcCooldown<=0&&(this.recalculatePathForWorker(n.id),e.pathRecalcCooldown=.5));break;case"picking":n instanceof yt&&n.carryingPallet?this.onPickingComplete(e):n instanceof Qt&&n.carryingBox&&this.onPickingComplete(e);break;case"moving-to-dest":o&&(this.isWorkerAtPosition(n,i.destination.gridX,i.destination.gridZ)?(e.taskPhase="dropping",this.startDropping(e)):e.pathRecalcCooldown<=0&&(this.recalculatePathForWorker(n.id),e.pathRecalcCooldown=.5));break;case"dropping":n instanceof yt&&!n.carryingPallet?this.onDroppingComplete(e):n instanceof Qt&&!n.carryingBox&&this.onDroppingComplete(e);break}}startPicking(e){const{worker:t,currentTask:n}=e;if(n){if(n.status="in-progress",n.type==="unload-truck"&&n.sourceTruck){this.decrementUnloadIndex(n);const i=n.sourceTruck.unloadPallet();i&&(n.pallet=i)}else if(n.type==="load-truck"||n.type==="putaway"||n.type==="replenish"||n.type==="stage"){let i=!1;if(n.sourceRack?i=n.sourceRack.retrieve():n.sourceFloorSlot?i=n.sourceFloorSlot.retrieve():n.sourceConveyor&&(i=n.sourceConveyor.retrieve()),i){const r=new vc;n.pallet=r,n.type==="load-truck"&&ne.removeStoredPallet();let o=n.source.gridX,a=n.source.gridZ;if(n.sourceRack){const l=this.findStorageInfo(n.sourceRack);l&&(o=l.gridX,a=l.gridZ)}else if(n.sourceFloorSlot){const l=this.findStorageInfo(n.sourceFloorSlot);l&&(o=l.gridX,a=l.gridZ)}else if(n.sourceConveyor){const l=this.findStorageInfo(n.sourceConveyor);l&&(o=l.gridX,a=l.gridZ)}Ze.releaseRetrievalReservation(o,a,n.id)}}if(t instanceof yt){let i=0;if(n.sourceTruck){i=.5;const r=n.sourceTruck.getClosestAccessPosition(n.source.gridX,n.source.gridZ);t.pickUpPallet(i,r.rotation)}else if(n.sourceRack){i=n.sourceRack.getPickupHeight();const r=n.sourceRack.getClosestAccessPosition(n.source.gridX,n.source.gridZ);t.pickUpPallet(i,r.rotation)}else t.pickUpPallet(i)}else t instanceof Qt&&t.pickUpBox()}}onPickingComplete(e){const{currentTask:t}=e;if(!t)return;e.taskPhase="moving-to-dest";const n=e.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i){console.warn("[PickingManager] Worker is out of bounds, cannot find path"),this.handleNoPath(e,t);return}const r=this.pathfinder.findPathWorld(i.x,i.z,t.destination.gridX,t.destination.gridZ,e.worker.id);r&&r.length>0?(e.worker instanceof yt||e.worker instanceof Qt)&&e.worker.setPath(r):this.handleNoPath(e,t)}startDropping(e){const{worker:t,currentTask:n}=e;if(n)if(t instanceof yt){let i=0;if(n.destinationTruck){i=.5;const r=n.destinationTruck.getClosestAccessPosition(n.destination.gridX,n.destination.gridZ);t.dropPallet(i,r.rotation)}else if(n.destinationRack){i=n.destinationRack.getStorageHeight();const r=n.destinationRack.getClosestAccessPosition(n.destination.gridX,n.destination.gridZ);t.dropPallet(i,r.rotation)}else t.dropPallet(i)}else t instanceof Qt&&t.dropBox()}onDroppingComplete(e){const{currentTask:t}=e;if(!t)return;const n=!!t.pallet;t.type==="unload-truck"?n&&(t.destinationRack?(t.destinationRack.store(),ne.addStoredPallet()):t.destinationFloorSlot?(t.destinationFloorSlot.store(),ne.addStoredPallet()):t.destinationConveyor&&(t.destinationConveyor.store(),ne.addStoredPallet()),U.emit("pallet:stored",{taskId:t.id})):t.type==="putaway"||t.type==="replenish"||t.type==="stage"?n&&(t.destinationRack?t.destinationRack.store():t.destinationFloorSlot?t.destinationFloorSlot.store():t.destinationConveyor&&t.destinationConveyor.store(),U.emit("pallet:stored",{taskId:t.id})):t.type==="load-truck"&&t.destinationTruck&&(t.destinationTruck.loadPallet(),U.emit("outbound:pallet-loaded",{truckId:t.destinationTruck.id,orderId:t.orderId||""})),t.pallet&&(t.pallet.dispose(),t.pallet=void 0),this.releaseTaskReservations(t),t.status="completed",t.completedAt=Date.now(),this.activeTaskCount--;const i=this.taskQueue.indexOf(t);i>-1&&this.taskQueue.splice(i,1),e.currentTask=null,e.taskPhase="idle",e.carryingPallet=null}handleIdleCirculation(){for(const e of this.workers.values()){if(!(e.worker instanceof yt)||!e.worker.isIdle()||e.currentTask!==null||e.taskPhase!=="idle")continue;const t=this.collisionSystem.findIdleCirculationPoint(e.worker);if(!t)continue;const n=e.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i)continue;const r=this.pathfinder.findPathWorld(i.x,i.z,t.x,t.z,e.worker.id);r&&r.length>0&&e.worker.setPath(r)}}update(e){if(ne.get("phase")==="operations"){for(const t of this.workers.values())this.collisionSystem.updateWorkerPosition(t.worker);this.checkInboundTrucksNeedTasks(),this.checkOutboundTrucksNeedTasks(),this.createPutawayTasks(),this.createReplenishTasks(),this.createStagingTasks(),this.assignTasks();for(const t of this.workers.values())this.updateWorkerState(t,e);this.idleCirculationTimer+=e,this.idleCirculationTimer>=this.idleCirculationInterval&&(this.idleCirculationTimer=0,this.handleIdleCirculation())}}checkOutboundTrucksNeedTasks(){if(!this.outboundTrucksCallback)return;const e=this.outboundTrucksCallback();for(const{truck:t,order:n,dockX:i,dockZ:r}of e){const o=this.getPendingLoadTasksForOrder(n.orderId),a=this.getInProgressLoadTasksForOrder(n.orderId),l=o+a+n.palletsLoaded,c=n.quantity-l;c>0&&this.createLoadTruckTasks(n.orderId,c,t,i,r)}}getPendingLoadTasksForOrder(e){return this.taskQueue.filter(t=>t.type==="load-truck"&&t.orderId===e&&t.status==="pending").length}getInProgressLoadTasksForOrder(e){return this.taskQueue.filter(t=>t.type==="load-truck"&&t.orderId===e&&(t.status==="assigned"||t.status==="in-progress")).length}getTaskQueue(){return this.taskQueue}getPendingTaskCount(){return this.pendingTaskCount}getActiveTaskCount(){return this.activeTaskCount}getWorkers(){return Array.from(this.workers.values())}getWorkerState(e){return this.workers.get(e)||null}getWorkerDebugInfo(){const e=[];for(const[t,n]of this.workers){const i=n.worker,r=n.currentTask,o=i instanceof yt?"forklift":"operator",a=i.getWorldPosition(),l=this.grid.worldToGrid(a),c=i instanceof yt?i.carryingPallet:i.carryingBox,h=i.state,d=i.path?.length||0;e.push({id:t.substring(0,8),type:o,taskPhase:n.taskPhase,taskType:r?.type||null,sourceLocation:r?{x:r.source.gridX,z:r.source.gridZ}:null,destLocation:r?{x:r.destination.gridX,z:r.destination.gridZ}:null,isCarrying:c||!1,workerState:h,position:l||{x:0,z:0},pathLength:d})}return e}getTaskQueueStats(){let e=0,t=0,n=0;for(const i of this.taskQueue)switch(i.status){case"pending":e++;break;case"assigned":t++;break;case"in-progress":n++;break}return{pending:e,assigned:t,inProgress:n,total:this.taskQueue.length}}decrementUnloadIndex(e){if(e.type==="unload-truck"&&e.sourceTruck){const t=e.sourceTruck.id,n=this.pendingUnloadTasksByTruck.get(t)||0;n<=1?this.pendingUnloadTasksByTruck.delete(t):this.pendingUnloadTasksByTruck.set(t,n-1)}}reset(){this.taskQueue=[],this.workers.clear(),this.storageRacks.clear(),this.storageFloorSlots.clear(),this.pallets.forEach(e=>e.dispose()),this.pallets.clear(),this.collisionSystem.reset(),this.idleCirculationTimer=0,this.pendingUnloadTasksByTruck.clear(),this.pendingTaskCount=0,this.activeTaskCount=0,Ze.reset()}}class ag{scene;inputSystem;placementSystem;selectedEntity=null;selectionHelper=null;teardropStorageType=null;isMoveMode=!1;constructor(e,t,n){this.scene=e,this.inputSystem=t,this.placementSystem=n,this.setupEventListeners()}setupEventListeners(){U.on("input:click",e=>{if(!this.placementSystem.isInPlacementMode()&&!(e&&e.target instanceof HTMLElement&&(e.target.closest("#ui-container")||e.target.closest("#hud")||e.target.closest("#selection-panel")||e.target.closest("#build-menu")||e.target.closest(".modal")))){if(this.isMoveMode&&this.selectedEntity){this.handleMoveClick(e?.worldPos);return}this.handleSelection()}}),U.on("input:escape",()=>{if(this.isMoveMode){this.deactivateMoveMode();return}this.teardropStorageType!==null?this.deactivateTeardrop():this.deselect()}),U.on("ui:build-select",()=>{this.deactivateTeardrop(),this.deselect()}),U.on("ui:teardrop-activate",({storageType:e})=>{this.activateTeardrop(e)}),U.on("ui:teardrop-deactivate",()=>{this.deactivateTeardrop()}),U.on("ui:entity-move-activate",()=>{this.selectedEntity&&this.activateMoveMode()})}handleSelection(){const t=this.placementSystem.getAllEntities().map(i=>i.mesh),n=this.inputSystem.raycastObjects(t);if(n.length>0){let i=n[0].object,r;for(;i&&!r&&(r=i.userData.entityId,!r&&i.parent);)i=i.parent;if(r){let o=this.placementSystem.getEntityById(r);if(o){if(this.teardropStorageType!==null){this.applyTeardrop(o);return}if(o.type==="rack"){const a=this.placementSystem.getOwnerStackerCrane(o);a&&(o=a)}this.select(o);return}}}this.teardropStorageType===null&&this.deselect()}activateMoveMode(){this.isMoveMode=!0,document.body.classList.add("move-mode"),U.emit("entity:move-mode:changed",{active:!0})}deactivateMoveMode(){this.isMoveMode&&(this.isMoveMode=!1,document.body.classList.remove("move-mode"),U.emit("entity:move-mode:changed",{active:!1}))}handleMoveClick(e){if(!this.selectedEntity||!this.isMoveMode)return;this.placementSystem.moveEntityToWorldPos(this.selectedEntity,e)&&this.deactivateMoveMode()}applyTeardrop(e){this.teardropStorageType!==null&&"storageType"in e&&(e.storageType=this.teardropStorageType,U.emit("entity:storage-type-changed",{entity:e,storageType:this.teardropStorageType}))}activateTeardrop(e){this.teardropStorageType=e,U.emit("selection:teardrop-activated",{storageType:e})}deactivateTeardrop(){this.teardropStorageType!==null&&(this.teardropStorageType=null,U.emit("selection:teardrop-deactivated"))}isTeardropMode(){return this.teardropStorageType!==null}select(e){this.selectedEntity!==e&&(this.deselect(),this.selectedEntity=e,this.selectionHelper=new Im(e.mesh,5164484),this.scene.add(this.selectionHelper),U.emit("entity:selected:changed",{entity:e}))}deselect(){this.deactivateMoveMode(),this.deactivateTeardrop(),this.selectedEntity&&(this.selectionHelper&&(this.scene.remove(this.selectionHelper),this.selectionHelper.dispose(),this.selectionHelper=null),this.selectedEntity=null,U.emit("entity:selected:changed",{entity:null}))}getSelectedEntity(){return this.selectedEntity}update(){this.selectionHelper&&this.selectedEntity&&this.selectionHelper.update()}}const Cl=500,Pl=5,Rl=1;class lg{hudElement;buildMenuElement;orderPanelElement;phaseIndicatorElement;wavePreviewElement;loadingScreen;workerDebugPanel;reservationsDebugPanel;selectionPanelElement;economyPanelElement;debugLogPanel;themeToggleElement=null;activeMobilePanel=null;_panelInteractionActive=!1;selectedBuildType=null;isConveyorLineMode=!1;conveyorLineHasStart=!1;orderPanelCollapsed=!1;economyPanelCollapsed=!1;wavePreviewCollapsed=!1;waveTimerInterval=null;debugPanelVisible=!1;reservationsPanelVisible=!1;debugLogPanelVisible=!1;debugUpdateCallback=null;economyDataCallback=null;previewOrdersCallback=null;selectedEntity=null;isTeardropMode=!1;isMoveMode=!1;pickingManager=null;scene=null;grid=null;pickArrow=null;dropArrow=null;currentArrowTaskId=null;currentWaveConfig=null;waveElapsedTime=0;trucksSpawned=0;trucksActive=0;lastSpeed=1;constructor(){this.hudElement=document.getElementById("hud"),this.buildMenuElement=document.getElementById("build-menu"),this.orderPanelElement=document.getElementById("order-panel"),this.phaseIndicatorElement=document.getElementById("phase-indicator"),this.wavePreviewElement=document.getElementById("wave-preview"),this.loadingScreen=document.getElementById("loading-screen"),this.workerDebugPanel=document.getElementById("worker-debug-panel"),this.reservationsDebugPanel=document.getElementById("reservations-debug-panel"),this.selectionPanelElement=document.getElementById("selection-panel"),this.economyPanelElement=document.getElementById("economy-panel"),this.debugLogPanel=document.getElementById("debug-log-panel"),this.createHUD(),this.createBuildMenu(),this.createOrderPanel(),this.createPhaseIndicator(),this.createWavePreview(),this.createWorkerDebugPanel(),this.createReservationsDebugPanel(),this.createEconomyPanel(),this.createDebugLogPanel(),this.createThemeToggle(),this.createMobileMenu(),this.setupEventListeners(),this.setupDebugKeyListener(),this.setupThemeKeyListener(),this.setupSaveListener()}showGameMenu(e){const t=e.some(i=>i.exists),n=e.map(i=>i.exists?`
          <div class="save-slot save-slot-used" data-slot="${i.slot}">
            <div class="save-slot-info">
              <span class="save-slot-name">${this.escapeHtml(i.slotName??`Save ${i.slot}`)}</span>
              <span class="save-slot-meta">Wave ${i.wave??"?"} · ${this.formatSaveDate(i.timestamp)}</span>
            </div>
            <div class="save-slot-actions">
              <button class="slot-btn slot-btn-load" data-slot="${i.slot}">▶ Load</button>
              <button class="slot-btn slot-btn-delete" data-slot="${i.slot}" title="Delete save">🗑</button>
            </div>
          </div>`:`
        <div class="save-slot save-slot-empty" data-slot="${i.slot}">
          <span class="save-slot-empty-label">— Empty slot ${i.slot} —</span>
        </div>`).join("");this.loadingScreen.innerHTML=`
      <div class="menu-title">
        <h1>Warehouse Defender</h1>
        <p class="menu-tagline">Manage your warehouse, defend your orders</p>
      </div>
      <div class="game-menu">
        <button id="btn-new-game" class="menu-btn menu-btn-primary">🎮 New Game</button>
        <button id="btn-sandbox-game" class="menu-btn menu-btn-secondary">🧪 Sandbox Mode</button>
        <button id="btn-how-to-play" class="menu-btn menu-btn-secondary">📖 How to Play</button>
        ${t?`<div class="save-slots-header">— Saved Games —</div>
        <div class="save-slots-list">${n}</div>`:""}
      </div>
    `,document.getElementById("btn-new-game")?.addEventListener("click",()=>{U.emit("ui:new-game")}),document.getElementById("btn-sandbox-game")?.addEventListener("click",()=>{this.showSandboxConfig(e)}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.showHowToPlay(e)}),this.loadingScreen.querySelectorAll(".slot-btn-load").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.slot??"1",10);U.emit("ui:load-game-slot",{slot:r})})}),this.loadingScreen.querySelectorAll(".slot-btn-delete").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.slot??"1",10);confirm(`Delete save in slot ${r}?`)&&U.emit("ui:delete-save-slot",{slot:r})})})}showSandboxConfig(e){this.loadingScreen.innerHTML=`
      <div class="menu-title">
        <h1>Sandbox Mode</h1>
        <p class="menu-tagline">Configure your starting conditions</p>
      </div>
      <div class="game-menu">
        <div class="sandbox-form">
          <label class="sandbox-label" for="sandbox-money">💰 Initial Money</label>
          <input id="sandbox-money" type="number" class="sandbox-input" value="${Cl}" min="0" step="100" />

          <label class="sandbox-label" for="sandbox-workers">👷 Worker Limit</label>
          <input id="sandbox-workers" type="number" class="sandbox-input" value="${Pl}" min="1" max="50" step="1" />

          <label class="sandbox-label" for="sandbox-wave">🌊 Starting Wave</label>
          <input id="sandbox-wave" type="number" class="sandbox-input" value="${Rl}" min="1" step="1" />
        </div>
        <button id="btn-sandbox-start" class="menu-btn menu-btn-primary">🚀 Start Sandbox</button>
        <button id="btn-sandbox-back" class="menu-btn menu-btn-secondary">← Back</button>
      </div>
    `,document.getElementById("btn-sandbox-start")?.addEventListener("click",()=>{const t=document.getElementById("sandbox-money"),n=document.getElementById("sandbox-workers"),i=document.getElementById("sandbox-wave"),r=Math.max(0,parseInt(t.value,10)||Cl),o=Math.max(1,parseInt(n.value,10)||Pl),a=Math.max(1,parseInt(i.value,10)||Rl);U.emit("ui:sandbox-game",{money:r,workerLimit:o,wave:a})}),document.getElementById("btn-sandbox-back")?.addEventListener("click",()=>{this.showGameMenu(e)})}showHowToPlay(e){const t=[{id:"waves",tab:"🌊 Waves",title:"Waves & Orders",content:`
          <p>The game progresses in <strong>waves</strong>. Each wave, trucks arrive at your warehouse carrying pallets that need to be stored or shipped.</p>
          <ul>
            <li><strong>Inbound Orders:</strong> Trucks deliver pallets you must unload and store in your warehouse.</li>
            <li><strong>Outbound Orders:</strong> Customer orders require you to load pallets onto outbound trucks before they depart.</li>
            <li><strong>Deadline:</strong> Outbound orders have a time limit — fulfill them before the truck leaves or the order fails.</li>
            <li><strong>Failed Orders:</strong> Failing too many orders ends the game. Keep an eye on your failed order count in the HUD.</li>
          </ul>
        `},{id:"phases",tab:"🔨 Phases",title:"Build & Operations Phases",content:`
          <p>Each wave is divided into two phases:</p>
          <ul>
            <li><strong>Build Phase:</strong> Before trucks arrive, use this time to plan and build your warehouse layout. Place racks, conveyors, hire workers, and expand the floor. No trucks are present yet.</li>
            <li><strong>Operations Phase:</strong> Trucks start arriving. Workers automatically handle tasks — unloading inbound trucks and loading outbound ones. Monitor progress and prepare for the next wave.</li>
          </ul>
          <p>When all trucks have departed and orders are resolved, the wave ends and you return to the Build Phase.</p>
        `},{id:"storage",tab:"📦 Storage",title:"Storage Types",content:`
          <p>There are two types of storage you can build:</p>
          <ul>
            <li><strong>Rack:</strong> A tall shelving unit that holds up to <strong>4 pallets</strong>. Only forklifts can place or retrieve pallets from racks. Efficient use of vertical space.</li>
            <li><strong>Floor Slot:</strong> A marked area on the warehouse floor that holds <strong>1 pallet</strong>. Both operators and forklifts can use floor slots. Good for temporary staging near truck docks.</li>
          </ul>
          <p>You can also <strong>expand the warehouse floor</strong> to add more columns and increase storage capacity.</p>
        `},{id:"tasks",tab:"✅ Tasks",title:"Task Types",content:`
          <p>Workers are automatically assigned tasks by the warehouse management system:</p>
          <ul>
            <li><strong>Unload Truck:</strong> Pick up a pallet from an inbound truck and carry it to a free storage location.</li>
            <li><strong>Fulfill Order:</strong> Retrieve a pallet from storage and load it onto an outbound truck to complete a customer order.</li>
            <li><strong>Move Pallet:</strong> Relocate a pallet from one storage location to another, often to free up space or improve layout efficiency.</li>
          </ul>
          <p>Tasks are automatically prioritized and assigned to idle workers based on proximity and capability.</p>
        `},{id:"conveyors",tab:"⚙️ Conveyors",title:"Conveyors",content:`
          <p><strong>Conveyors</strong> are belt systems that automatically transport pallets across the warehouse floor without needing a worker.</p>
          <ul>
            <li>Place conveyors to create automated pallet routes between truck docks and storage areas.</li>
            <li>Conveyors have a <strong>direction</strong> — pallets move one way along the belt.</li>
            <li>Use <strong>Line Mode</strong> in the build menu to quickly place a straight line of conveyors: click the start cell, then the end cell.</li>
            <li>Conveyors free up your workers for other tasks, improving overall throughput.</li>
          </ul>
          <p>Tip: Connect conveyors from truck docks directly to storage racks to create fully automated inbound lanes.</p>
        `},{id:"workers",tab:"👷 Workers",title:"Workers & Forklifts",content:`
          <p>Two types of workers can be hired and placed in your warehouse:</p>
          <ul>
            <li><strong>Operator 👷:</strong> A manual worker who can carry pallets on foot. Operators can use floor slots and conveyors. They are cheaper to hire but slower and can only access floor-level storage.</li>
            <li><strong>Forklift 🚜:</strong> A motorized vehicle that can reach rack storage (up to 4 pallets high). Forklifts are faster and can handle more storage types, but cost more per wave in wages.</li>
          </ul>
          <p>Workers earn wages at the end of each wave — check the Economy panel to monitor your wage costs. Hire the right mix to balance cost and efficiency.</p>
        `},{id:"docks",tab:"🚛 Truck Docks",title:"Truck Docks",content:`
          <p><strong>Truck Docks</strong> are designated parking spots where trucks can load and unload pallets.</p>
          <ul>
            <li>Place truck docks along the edges of your warehouse to give trucks access.</li>
            <li><strong>Inbound trucks</strong> arrive at docks carrying pallets that workers will unload and store.</li>
            <li><strong>Outbound trucks</strong> wait at docks for workers to load the required pallets before departing.</li>
            <li>Having multiple docks allows more trucks to operate simultaneously, increasing warehouse throughput.</li>
          </ul>
          <p>Tip: Position docks close to storage areas and conveyors to minimize travel time for your workers.</p>
        `},{id:"layout",tab:"🏭 Layout",title:"Warehouse Layout Strategy",content:`
          <p>Maximizing throughput requires organizing your warehouse into <strong>four specialized storage zones</strong> that form a continuous flow from inbound to outbound.</p>

          <h4 class="tutorial-subtitle">Storage Zone Types</h4>
          <ul>
            <li><span class="zone-badge zone-unloading">Unloading</span> — Where inbound pallets are placed right after being taken off a truck. Position these zones closest to your inbound docks.</li>
            <li><span class="zone-badge zone-storage">Storage</span> — The main bulk storage area. Pallets are moved here from Unloading zones for long-term holding.</li>
            <li><span class="zone-badge zone-picking">Picking</span> — A forward-pick area stocked from Storage. Pallets are staged here so outbound orders can be fulfilled quickly.</li>
            <li><span class="zone-badge zone-loading">Loading</span> — The final staging area next to outbound docks. Pallets wait here until a truck is ready to be loaded.</li>
          </ul>

          <h4 class="tutorial-subtitle">Zone Flow Diagram</h4>
          <div class="layout-flow-diagram">
            <div class="flow-row">
              <div class="flow-node flow-truck">🚛 Inbound<br>Truck</div>
              <div class="flow-arrow">→</div>
              <div class="flow-node flow-unloading">Unloading</div>
              <div class="flow-arrow">→</div>
              <div class="flow-node flow-storage">Storage</div>
              <div class="flow-arrow">→</div>
              <div class="flow-node flow-picking">Picking</div>
              <div class="flow-arrow">→</div>
              <div class="flow-node flow-loading">Loading</div>
              <div class="flow-arrow">→</div>
              <div class="flow-node flow-truck">🚛 Outbound<br>Truck</div>
            </div>
            <div class="flow-labels">
              <span>unload-truck</span>
              <span>putaway</span>
              <span>replenish</span>
              <span>stage</span>
              <span>load-truck</span>
            </div>
          </div>
          <p>Each arrow represents a <strong>worker task</strong> that moves pallets between zones automatically.</p>

          <h4 class="tutorial-subtitle">Worker Task Types for Zone Transfers</h4>
          <ul>
            <li><strong>Unload Truck:</strong> Takes a pallet from an inbound truck and places it in the nearest Unloading zone storage.</li>
            <li><strong>Putaway:</strong> Moves a pallet from an <em>Unloading</em> zone to a <em>Storage</em> zone for bulk holding.</li>
            <li><strong>Replenish:</strong> Moves a pallet from <em>Storage</em> to <em>Picking</em> to keep the forward-pick area stocked.</li>
            <li><strong>Stage:</strong> Moves a pallet from <em>Picking</em> to <em>Loading</em> for outbound staging.</li>
            <li><strong>Load Truck:</strong> Loads a pallet from the <em>Loading</em> zone onto an outbound truck to fulfill an order.</li>
          </ul>
          <p>These tasks are assigned automatically when pallets are in the correct zones. The more zones you set up, the more workers can operate in parallel without getting in each other's way.</p>

          <h4 class="tutorial-subtitle">Using Conveyors to Connect Zones</h4>
          <p>Conveyors can automate pallet movement between zones without requiring a worker:</p>
          <ul>
            <li><strong>Conveyor Entrance:</strong> A worker or truck places a pallet onto the start of a conveyor line. Set the conveyor's storage type to match the <em>source</em> zone (e.g., Unloading).</li>
            <li><strong>Conveyor Exit:</strong> The pallet travels along the belt and arrives at the end of the line, ready for a worker to pick it up. Set the last conveyor's storage type to match the <em>destination</em> zone (e.g., Storage).</li>
            <li><strong>Direction:</strong> Conveyors move pallets in one direction (north, south, east, or west). Chain them together to create automated lanes across your warehouse.</li>
          </ul>
          <p>Tip: Build conveyor lines <strong>between adjacent zones</strong> — for example, from Unloading to Storage — so pallets flow automatically and your workers can focus on loading and unloading trucks.</p>

          <h4 class="tutorial-subtitle">Example Layout</h4>
          <div class="layout-example">
            <svg class="layout-svg" viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg">
              <!-- Warehouse border -->
              <rect x="10" y="10" width="600" height="320" rx="10" fill="none" stroke="#3d5a80" stroke-width="2" stroke-dasharray="6 3"/>

              <!-- Dock labels -->
              <text x="120" y="36" text-anchor="middle" fill="#98c1d9" font-size="13" font-weight="bold">INBOUND DOCKS</text>
              <text x="490" y="36" text-anchor="middle" fill="#98c1d9" font-size="13" font-weight="bold">OUTBOUND DOCKS</text>

              <!-- Inbound trucks -->
              <text x="70" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="120" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="170" y="62" text-anchor="middle" font-size="22">🚛</text>

              <!-- Outbound trucks -->
              <text x="440" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="490" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="540" y="62" text-anchor="middle" font-size="22">🚛</text>

              <!-- Dock lines -->
              <line x1="40" y1="76" x2="200" y2="76" stroke="#607d8b" stroke-width="2" stroke-dasharray="6 4"/>
              <line x1="410" y1="76" x2="570" y2="76" stroke="#607d8b" stroke-width="2" stroke-dasharray="6 4"/>

              <!-- Unloading zone -->
              <rect x="50" y="100" width="140" height="70" rx="8" fill="#ff9500" fill-opacity="0.15" stroke="#ff9500" stroke-width="2"/>
              <text x="120" y="132" text-anchor="middle" fill="#ff9500" font-size="14" font-weight="bold">UNLOADING</text>
              <text x="120" y="152" text-anchor="middle" fill="#ff9500" font-size="11">zone</text>

              <!-- Conveyor: Unloading → Storage -->
              <line x1="200" y1="135" x2="270" y2="135" stroke="#4ecdc4" stroke-width="3" marker-end="url(#arrowhead)"/>
              <text x="235" y="125" text-anchor="middle" fill="#4ecdc4" font-size="9" font-style="italic">conveyor</text>

              <!-- Storage zone -->
              <rect x="280" y="100" width="140" height="70" rx="8" fill="#4caf50" fill-opacity="0.15" stroke="#4caf50" stroke-width="2"/>
              <text x="350" y="132" text-anchor="middle" fill="#4caf50" font-size="14" font-weight="bold">STORAGE</text>
              <text x="350" y="152" text-anchor="middle" fill="#4caf50" font-size="11">zone</text>

              <!-- Conveyor: Storage → Picking (downward) -->
              <line x1="350" y1="180" x2="350" y2="220" stroke="#4ecdc4" stroke-width="3" marker-end="url(#arrowhead-down)"/>
              <text x="375" y="205" fill="#4ecdc4" font-size="9" font-style="italic">conveyor</text>

              <!-- Picking zone -->
              <rect x="280" y="230" width="140" height="70" rx="8" fill="#9c27b0" fill-opacity="0.15" stroke="#9c27b0" stroke-width="2"/>
              <text x="350" y="262" text-anchor="middle" fill="#9c27b0" font-size="14" font-weight="bold">PICKING</text>
              <text x="350" y="282" text-anchor="middle" fill="#9c27b0" font-size="11">zone</text>

              <!-- Conveyor: Picking → Loading -->
              <line x1="430" y1="265" x2="460" y2="265" stroke="#4ecdc4" stroke-width="3" marker-end="url(#arrowhead)"/>

              <!-- Loading zone -->
              <rect x="470" y="230" width="120" height="70" rx="8" fill="#f44336" fill-opacity="0.15" stroke="#f44336" stroke-width="2"/>
              <text x="530" y="262" text-anchor="middle" fill="#f44336" font-size="14" font-weight="bold">LOADING</text>
              <text x="530" y="282" text-anchor="middle" fill="#f44336" font-size="11">zone</text>

              <!-- Connection: Loading → Outbound docks -->
              <line x1="530" y1="230" x2="530" y2="82" stroke="#607d8b" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead-up)"/>

              <!-- Connection: Inbound docks → Unloading -->
              <line x1="120" y1="76" x2="120" y2="95" stroke="#607d8b" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead-down-dim)"/>

              <!-- Task labels -->
              <text x="120" y="88" text-anchor="middle" fill="#607d8b" font-size="8">unload-truck</text>
              <text x="235" y="152" text-anchor="middle" fill="#98c1d9" font-size="9">putaway</text>
              <text x="375" y="218" fill="#98c1d9" font-size="9">replenish</text>
              <text x="445" y="257" text-anchor="middle" fill="#98c1d9" font-size="9">stage</text>
              <text x="548" y="160" fill="#607d8b" font-size="8">load-truck</text>

              <!-- Worker icons -->
              <text x="50" y="200" font-size="16">🚜</text>
              <text x="80" y="200" font-size="11" fill="#98c1d9">putaway</text>
              <text x="50" y="222" font-size="16">👷</text>
              <text x="80" y="222" font-size="11" fill="#98c1d9">replenish &amp; stage</text>

              <!-- Arrow marker definitions -->
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#4ecdc4"/>
                </marker>
                <marker id="arrowhead-down" markerWidth="6" markerHeight="8" refX="3" refY="8" orient="auto">
                  <polygon points="0 0, 6 0, 3 8" fill="#4ecdc4"/>
                </marker>
                <marker id="arrowhead-up" markerWidth="6" markerHeight="8" refX="3" refY="0" orient="auto">
                  <polygon points="0 8, 6 8, 3 0" fill="#607d8b"/>
                </marker>
                <marker id="arrowhead-down-dim" markerWidth="6" markerHeight="8" refX="3" refY="8" orient="auto">
                  <polygon points="0 0, 6 0, 3 8" fill="#607d8b"/>
                </marker>
              </defs>
            </svg>
          </div>
          <p>By dividing your warehouse into these zones and connecting them with conveyors, you create a smooth pipeline where pallets flow from inbound to outbound with minimal worker travel time — maximizing your throughput each wave.</p>
        `}],n=t.map((r,o)=>`<button class="tutorial-tab${o===0?" active":""}" data-section="${r.id}">${r.tab}</button>`).join(""),i=t.map((r,o)=>`<div class="tutorial-section${o===0?" active":""}" id="tutorial-section-${r.id}">
        <h3 class="tutorial-section-title">${r.title}</h3>
        ${r.content}
      </div>`).join("");this.loadingScreen.innerHTML=`
      <div class="how-to-play-container">
        <div class="how-to-play-header">
          <h2 class="how-to-play-title">📖 How to Play</h2>
          <button id="btn-back-to-menu" class="menu-btn menu-btn-secondary how-to-play-back">← Back</button>
        </div>
        <div class="tutorial-tabs">${n}</div>
        <div class="tutorial-content">${i}</div>
      </div>
    `,document.getElementById("btn-back-to-menu")?.addEventListener("click",()=>{this.showGameMenu(e)}),this.loadingScreen.querySelectorAll(".tutorial-tab").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.section;this.loadingScreen.querySelectorAll(".tutorial-tab").forEach(a=>a.classList.remove("active")),this.loadingScreen.querySelectorAll(".tutorial-section").forEach(a=>a.classList.remove("active")),r.classList.add("active"),document.getElementById(`tutorial-section-${o}`)?.classList.add("active")})})}showDebugLog(e){const t=en.getEntries(),n={info:"ℹ️",warn:"⚠️",error:"❌"},i=t.length===0?'<div class="debug-log-empty">No log entries yet.</div>':[...t].reverse().map(r=>{const o=new Date(r.timestamp).toLocaleTimeString(),a=n[r.level]??"";return`<div class="debug-log-entry debug-log-${r.level}">
            <span class="debug-log-time">${this.escapeHtml(o)}</span>
            <span class="debug-log-icon">${a}</span>
            <span class="debug-log-msg">${this.escapeHtml(r.message)}</span>
          </div>`}).join("");this.loadingScreen.innerHTML=`
      <div class="debug-log-container">
        <div class="debug-log-header">
          <h2 class="debug-log-title">🪲 Debug Log</h2>
          <div class="debug-log-actions">
            <button id="btn-debug-log-clear" class="menu-btn menu-btn-secondary debug-log-clear-btn">🗑 Clear</button>
            <button id="btn-debug-log-back" class="menu-btn menu-btn-secondary debug-log-back-btn">← Back</button>
          </div>
        </div>
        <div class="debug-log-entries">${i}</div>
      </div>
    `,document.getElementById("btn-debug-log-back")?.addEventListener("click",()=>{this.showGameMenu(e)}),document.getElementById("btn-debug-log-clear")?.addEventListener("click",()=>{en.clear(),this.showDebugLog(e)})}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}formatSaveDate(e){return e?new Date(e).toLocaleString():""}setupSaveListener(){U.on("game:saved",({success:e})=>{this.showNotification(e?"💾 Game Saved!":"❌ Save Failed")})}showNotification(e,t=2e3){const n=document.createElement("div");n.className="game-notification",n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),500)},t)}createHUD(){this.hudElement.innerHTML=`
      <div class="hud-stat money">
        <span class="label">Money</span>
        <span class="value" id="hud-money">$500</span>
      </div>
      <div class="hud-stat wave">
        <span class="label">Wave</span>
        <span class="value" id="hud-wave">1</span>
      </div>
      <div class="hud-stat storage">
        <span class="label">Storage</span>
        <span class="value" id="hud-storage">0 / 0</span>
      </div>
      <div class="hud-stat orders">
        <span class="label">Failed</span>
        <span class="value" id="hud-failed">0 / 3</span>
      </div>
      <div class="hud-stat workers">
        <span class="label">Workers</span>
        <span class="value" id="hud-workers">0 / 5</span>
      </div>
      <div class="hud-stat debug-hint">
        <span class="label">Debug</span>
        <span class="value">Press D</span>
      </div>
      <button class="hud-save-btn" id="hud-save-btn" title="Save Game">💾 Save</button>
    `,document.getElementById("hud-save-btn")?.addEventListener("click",()=>{U.emit("ui:save-game")})}createBuildMenu(){const e=Object.values(Wt);this.buildMenuElement.innerHTML=`
      <div class="build-btns-row">
        ${e.map(t=>`
          <button class="build-btn" data-type="${t.type}" title="${t.description}">
            <span class="icon">${t.icon}</span>
            <span class="name">${t.name}</span>
            <span class="cost">$${t.cost}</span>
          </button>
        `).join("")}
        <button class="build-btn expand-btn" id="btn-floor-expansion" title="Add ${Uo} new columns to the warehouse floor (both sides). Cost scales with each purchase.">
          <span class="icon">↔️</span>
          <span class="name">Expand ↔</span>
          <span class="cost" id="expansion-cost">$${No(0)}</span>
        </button>
        <button class="build-btn expand-btn" id="btn-floor-expansion-vertical" title="Add ${Oo} new rows to the warehouse floor (northward). Truck docks move to new edges. Cost scales with each purchase.">
          <span class="icon">↕️</span>
          <span class="name">Expand ↕</span>
          <span class="cost" id="expansion-vertical-cost">$${Fo(0)}</span>
        </button>
      </div>
      <div id="conveyor-toolbar" class="conveyor-toolbar-row" style="display:none;">
        <button class="line-mode-btn" id="btn-line-mode" title="Place a straight line of conveyors: click the start cell, then the end cell">
          🔗 Line Mode
        </button>
        <span class="line-mode-hint" id="line-mode-hint">Click to set start</span>
      </div>
    `,this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(t=>{t.addEventListener("click",n=>{const i=n.currentTarget.dataset.type;this.selectBuildType(i)})}),document.getElementById("btn-floor-expansion")?.addEventListener("click",()=>{U.emit("ui:floor-expansion",{})}),document.getElementById("btn-floor-expansion-vertical")?.addEventListener("click",()=>{U.emit("ui:floor-expansion-vertical",{})}),document.getElementById("btn-line-mode")?.addEventListener("click",()=>{this.toggleConveyorLineMode()})}createOrderPanel(){this.orderPanelElement.innerHTML=`
      <div class="order-panel-title">
        <span>📦 Orders</span>
        <button class="toggle-panel-btn" id="toggle-order-panel">−</button>
      </div>
      <div id="order-list-container">
        <div id="order-list"></div>
      </div>
    `,document.getElementById("toggle-order-panel")?.addEventListener("click",()=>{this.orderPanelCollapsed=!this.orderPanelCollapsed,this.orderPanelElement.classList.toggle("collapsed",this.orderPanelCollapsed);const e=document.getElementById("toggle-order-panel");e&&(e.textContent=this.orderPanelCollapsed?"+":"−")})}createWorkerDebugPanel(){this.workerDebugPanel.innerHTML=`
      <div class="debug-panel-header">
        <span class="debug-panel-title">🔧 Worker Debug</span>
        <button class="debug-toggle-btn" id="debug-close-btn">×</button>
      </div>
      <div class="debug-stats" id="debug-task-stats">
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">Pending</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">Active</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">Workers</div>
        </div>
      </div>
      <div id="worker-list">
        <div class="no-workers">No workers placed yet</div>
      </div>
    `,document.getElementById("debug-close-btn")?.addEventListener("click",()=>{this.toggleDebugPanel(!1)})}setupThemeKeyListener(){document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="t"){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;ne.toggleTheme()}})}setupDebugKeyListener(){document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&(e.key==="d"||e.key==="D")){if(e.preventDefault(),e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;this.toggleDebugPanel()}if((e.metaKey||e.ctrlKey)&&(e.key==="r"||e.key==="R")){if(e.preventDefault(),e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;this.toggleReservationsPanel()}if((e.metaKey||e.ctrlKey)&&(e.key==="l"||e.key==="L")){if(e.preventDefault(),e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;this.toggleDebugLogPanel()}})}toggleDebugPanel(e){this.debugPanelVisible=e!==void 0?e:!this.debugPanelVisible,this.workerDebugPanel.classList.toggle("visible",this.debugPanelVisible)}toggleReservationsPanel(e){this.reservationsPanelVisible=e!==void 0?e:!this.reservationsPanelVisible,this.reservationsDebugPanel.classList.toggle("visible",this.reservationsPanelVisible)}toggleDebugLogPanel(e){this.debugLogPanelVisible=e!==void 0?e:!this.debugLogPanelVisible,this.debugLogPanel.classList.toggle("visible",this.debugLogPanelVisible),this.debugLogPanelVisible&&this.updateDebugLogPanel()}updateDebugLogPanel(){if(!this.debugLogPanelVisible)return;const e=document.getElementById("debug-log-entries-panel");if(!e)return;const t=en.getEntries();if(t.length===0){e.innerHTML='<div class="debug-log-empty">No log entries yet.</div>';return}const n={info:"ℹ️",warn:"⚠️",error:"❌"};e.innerHTML=[...t].reverse().map(i=>{const r=new Date(i.timestamp).toLocaleTimeString(),o=n[i.level]??"";return`<div class="debug-log-entry debug-log-${i.level}">
        <span class="debug-log-time">${this.escapeHtml(r)}</span>
        <span class="debug-log-icon">${o}</span>
        <span class="debug-log-msg">${this.escapeHtml(i.message)}</span>
      </div>`}).join("")}createDebugLogPanel(){this.debugLogPanel.innerHTML=`
      <div class="debug-panel-header">
        <span class="debug-panel-title">🪲 Debug Log</span>
        <div style="display:flex;gap:6px;">
          <button class="debug-toggle-btn" id="debug-log-clear-btn">🗑</button>
          <button class="debug-toggle-btn" id="debug-log-close-btn">×</button>
        </div>
      </div>
      <div id="debug-log-entries-panel">
        <div class="debug-log-empty">No log entries yet.</div>
      </div>
    `,document.getElementById("debug-log-close-btn")?.addEventListener("click",()=>{this.toggleDebugLogPanel(!1)}),document.getElementById("debug-log-clear-btn")?.addEventListener("click",()=>{en.clear(),this.updateDebugLogPanel()})}createReservationsDebugPanel(){this.reservationsDebugPanel.innerHTML=`
      <div class="debug-panel-header">
        <span class="debug-panel-title">📦 Storage Reservations</span>
        <button class="debug-toggle-btn" id="reservations-close-btn">×</button>
      </div>
      <div class="debug-stats" id="reservations-summary">
        <div class="debug-stat">
          <div class="debug-stat-value" id="store-count">0</div>
          <div class="debug-stat-label">Store</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value" id="retrieval-count">0</div>
          <div class="debug-stat-label">Retrieval</div>
        </div>
      </div>
      <div id="reservations-list">
        <div class="no-reservations">No active reservations</div>
      </div>
    `,document.getElementById("reservations-close-btn")?.addEventListener("click",()=>{this.toggleReservationsPanel(!1)})}createEconomyPanel(){this.economyPanelElement.innerHTML=`
      <div class="economy-panel-title">
        <span>💰 Economy</span>
        <button class="toggle-panel-btn" id="toggle-economy-panel">−</button>
      </div>
      <div id="economy-panel-content">
        <div id="economy-wages-section"></div>
        <div id="economy-history-section"></div>
      </div>
    `,document.getElementById("toggle-economy-panel")?.addEventListener("click",()=>{this.economyPanelCollapsed=!this.economyPanelCollapsed,this.economyPanelElement.classList.toggle("collapsed",this.economyPanelCollapsed);const e=document.getElementById("toggle-economy-panel");e&&(e.textContent=this.economyPanelCollapsed?"+":"−")}),this.updateEconomyPanel()}updateEconomyPanel(){const e=document.getElementById("economy-wages-section"),t=document.getElementById("economy-history-section");if(!e||!t)return;const n=this.economyDataCallback?this.economyDataCallback():{waveHistory:[],operatorCount:0,forkliftCount:0,currentWaveOrderIncome:0},{waveHistory:i,operatorCount:r,forkliftCount:o,currentWaveOrderIncome:a}=n,l=r*nr+o*ir,c=a>0?`
      <div class="economy-wage-row">
        <span class="economy-wage-label">📦 Orders</span>
        <span class="economy-wage-value economy-positive">+$${a}</span>
      </div>
    `:"";if(e.innerHTML=`
      <div class="economy-section-label">Current Wave</div>
      ${c}
      <div class="economy-wage-row">
        <span class="economy-wage-label">👷 Operators × ${r}</span>
        <span class="economy-wage-value">-$${r*nr}</span>
      </div>
      <div class="economy-wage-row">
        <span class="economy-wage-label">🚜 Forklifts × ${o}</span>
        <span class="economy-wage-value">-$${o*ir}</span>
      </div>
      <div class="economy-wage-row economy-wage-total">
        <span class="economy-wage-label">Total Wages</span>
        <span class="economy-wage-value">-$${l}</span>
      </div>
    `,i.length===0)t.innerHTML='<div class="economy-no-history">No completed waves yet</div>';else{const h=[...i].reverse().map(d=>`
        <div class="economy-history-row">
          <span class="economy-history-wave">W${d.wave}</span>
          <span class="economy-history-bonus">+$${d.bonus}</span>
          <span class="economy-history-orders">+$${d.orderIncome}</span>
          <span class="economy-history-wages">-$${d.wages}</span>
          <span class="economy-history-net ${d.net>=0?"positive":"negative"}">$${d.net>=0?"+":""}${d.net}</span>
        </div>
      `).join("");t.innerHTML=`
        <div class="economy-section-label">Wave History</div>
        <div class="economy-history-header">
          <span>Wave</span><span>Bonus</span><span>Orders</span><span>Wages</span><span>Net</span>
        </div>
        ${h}
      `}}updateReservationsDebugPanel(){if(!this.reservationsPanelVisible)return;const e=Ze.getDebugInfo(),t=Ze.getDetailedReservations(),n=document.getElementById("store-count"),i=document.getElementById("retrieval-count");n&&(n.textContent=e.storeReservations.toString()),i&&(i.textContent=e.retrievalReservations.toString());const r=document.getElementById("reservations-list");if(!r)return;if(!(t.storeReservations.length>0||t.retrievalReservations.length>0)){r.innerHTML='<div class="no-reservations">No active reservations</div>';return}let a="";if(t.storeReservations.length>0){a+='<div class="reservation-section"><div class="reservation-section-title">🔵 Store Reservations</div>';for(const{location:l,taskId:c}of t.storeReservations)a+=`
          <div class="reservation-item">
            <span class="reservation-location">${l}</span>
            <span class="reservation-task">${c.substring(0,8)}</span>
          </div>
        `;a+="</div>"}if(t.retrievalReservations.length>0){a+='<div class="reservation-section"><div class="reservation-section-title">🟢 Retrieval Reservations</div>';for(const{location:l,taskIds:c}of t.retrievalReservations)a+=`
          <div class="reservation-item">
            <span class="reservation-location">${l}</span>
            <span class="reservation-tasks">${c.map(h=>h.substring(0,8)).join(", ")}</span>
          </div>
        `;a+="</div>"}r.innerHTML=a}setDebugUpdateCallback(e){this.debugUpdateCallback=e}setEconomyDataCallback(e){this.economyDataCallback=e,this.updateEconomyPanel()}updateWorkerDebugPanel(){if(!this.debugPanelVisible||!this.debugUpdateCallback)return;const{workers:e,tasks:t}=this.debugUpdateCallback();console.log("[UIManager] Updating worker debug panel",{workers:e,tasks:t});const n=document.getElementById("debug-task-stats");n&&(n.innerHTML=`
        <div class="debug-stat">
          <div class="debug-stat-value">${t.pending}</div>
          <div class="debug-stat-label">Pending</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">${t.assigned+t.inProgress}</div>
          <div class="debug-stat-label">Active</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">${e.length}</div>
          <div class="debug-stat-label">Workers</div>
        </div>
      `);const i=document.getElementById("worker-list");if(i){if(e.length===0){i.innerHTML='<div class="no-workers">No workers placed yet</div>';return}i.innerHTML=e.map(r=>{const o=r.taskPhase.replace(/-/g," "),a=r.taskType?`<div class="worker-task-info">
            <span class="task-type">${r.taskType.replace(/-/g," ")}</span>
            ${r.sourceLocation?`<span class="task-location"> from (${r.sourceLocation.x}, ${r.sourceLocation.z})</span>`:""}
            ${r.destLocation?`<span class="task-location"> → (${r.destLocation.x}, ${r.destLocation.z})</span>`:""}
          </div>`:"",l=[];return r.isCarrying&&l.push('<span class="worker-state-badge carrying">Carrying</span>'),r.pathLength===0&&r.taskPhase!=="idle"&&r.taskPhase!=="picking"&&r.taskPhase!=="dropping"&&l.push('<span class="worker-state-badge blocked">Blocked</span>'),`
        <div class="worker-card ${r.type}">
          <div class="worker-card-header">
            <span class="worker-type">${r.type==="forklift"?"🚜":"👷"} ${r.type}</span>
            <span class="worker-id">${r.id}</span>
          </div>
          <div class="worker-status">
            <span class="status-dot ${r.taskPhase}"></span>
            <span class="status-text">${o}</span>
            ${l.join("")}
          </div>
          ${a}
          <div class="worker-task-info">
            📍 (${r.position.x}, ${r.position.z}) | Path: ${r.pathLength} | State: ${r.workerState}
          </div>
        </div>
      `}).join("")}}createWavePreview(){this.updateWavePreview()}getWaveConfig(e){return _c(e)}getDifficultyInfo(e){return e<=2?{level:"Easy",percent:25,class:"easy"}:e<=4?{level:"Medium",percent:50,class:"medium"}:e<=6?{level:"Hard",percent:75,class:"hard"}:{level:"Extreme",percent:100,class:"extreme"}}updateWavePreview(e){const t=ne.get("wave"),i=ne.get("phase")==="operations",r=i?t:t+1,o=this.getWaveConfig(r),a=this.getDifficultyInfo(r),l=o.truckCount*o.palletsPerTruck,c=i&&e!==void 0?`
      <div class="wave-timer">
        <div class="label">Time Remaining</div>
        <div class="time">${this.formatTime(e)}</div>
      </div>
    `:"",h=i?this.generateWaveProgressBar(o,e):"",d=i?"":this.generateOutboundOrdersPreview();this.wavePreviewElement.innerHTML=`
      <div class="wave-preview-title">
        <span>${i?"🚨 Current Wave":"📋 Next Wave"}</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="wave-number">Wave ${r}</span>
          <button class="toggle-panel-btn" id="toggle-wave-preview">${this.wavePreviewCollapsed?"+":"−"}</button>
        </div>
      </div>
      <div id="wave-preview-content-container" class="wave-preview-content ${this.wavePreviewCollapsed?"collapsed-content":""}">
        <div class="wave-stat">
          <span class="icon">🚚</span>
          <div class="info">
            <div class="label">Trucks</div>
            <div class="value">${o.truckCount} truck${o.truckCount>1?"s":""}</div>
          </div>
        </div>
        <div class="wave-stat">
          <span class="icon">📦</span>
          <div class="info">
            <div class="label">Total Pallets</div>
            <div class="value">${l} pallets</div>
          </div>
        </div>
        <div class="wave-stat">
          <span class="icon">⏱️</span>
          <div class="info">
            <div class="label">Wave Duration</div>
            <div class="value">${this.formatTime(o.totalWaveTime)}</div>
          </div>
        </div>
        ${h}
        ${d}
        <div class="wave-difficulty">
          <div class="label">Difficulty</div>
          <div class="difficulty-bar">
            <div class="difficulty-fill ${a.class}" style="width: ${a.percent}%"></div>
          </div>
        </div>
        ${c}
      </div>
    `,document.getElementById("toggle-wave-preview")?.addEventListener("click",f=>{f.stopPropagation(),this.wavePreviewCollapsed=!this.wavePreviewCollapsed;const m=document.getElementById("wave-preview-content-container");m&&m.classList.toggle("collapsed-content",this.wavePreviewCollapsed);const g=document.getElementById("toggle-wave-preview");g&&(g.textContent=this.wavePreviewCollapsed?"+":"−")})}generateOutboundOrdersPreview(){const e=this.previewOrdersCallback?this.previewOrdersCallback():[];if(e.length===0)return"";const t=Array.from(e).map(n=>`
      <div class="outbound-preview-order">
        <span class="outbound-preview-icon">📤</span>
        <span class="outbound-preview-qty">${n.quantity} pallet${n.quantity!==1?"s":""}</span>
        <span class="outbound-preview-reward">+$${n.reward}</span>
      </div>
    `).join("");return`
      <div class="outbound-orders-preview">
        <div class="outbound-preview-label">📋 Outbound Orders (${e.length})</div>
        <div class="outbound-preview-list">${t}</div>
      </div>
    `}setPreviewOrdersCallback(e){this.previewOrdersCallback=e}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}generateWaveProgressBar(e,t=0){const n=e.totalWaveTime,i=n-t,r=Math.min(100,i/n*100),o=[],a=rn.ANIM_DURATION_SECONDS;for(let h=0;h<e.truckCount;h++)o.push(h*e.timeBetweenTrucks+a);const l=o.map((h,d)=>{const f=h/n*100,m=i>=h&&d<this.trucksSpawned;let g="future",v="🚚",p=`Truck ${d+1} at ${this.formatTime(h)}`;if(m){const u=this.trucksSpawned-this.trucksActive;d<u?(g="gone",v="✓",p=`Truck ${d+1} departed`):g=d===this.trucksSpawned-1||d===u?"current":"passed"}return`
        <div class="truck-indicator ${g}" 
             style="left: ${f}%" 
             title="${p}">
          <div class="truck-icon">${v}</div>
          <div class="truck-time">${this.formatTime(h)}</div>
        </div>
      `}).join(""),c=(()=>{if(!e.outboundOrderCount||e.outboundOrderCount<=0)return"";const h=[];for(let d=0;d<e.outboundOrderCount;d++)h.push(d*n/Math.max(1,e.outboundOrderCount));return h.map((d,f)=>{const m=d/n*100,g=i>=d,v=g?"passed":"future",p=g?"✅":"📦",u=`Outbound ${f+1} at ${this.formatTime(d)}`;return`
          <div class="truck-indicator outbound ${v}" 
               style="left: ${m}%" 
               title="${u}">
            <div class="truck-icon">${p}</div>
            <div class="truck-time">${this.formatTime(d)}</div>
          </div>
        `}).join("")})();return`
      <div class="wave-progress-section">
        <div class="wave-progress-label">Wave Progress</div>
        <div class="wave-progress-bar-container">
          <div class="wave-progress-bar">
            <div class="wave-progress-fill" style="width: ${r}%"></div>
          </div>
          ${l}
          ${c}
        </div>
      </div>
    `}createPhaseIndicator(){this.phaseIndicatorElement.innerHTML=`
      <div class="phase-title">Phase</div>
      <div class="phase-name" id="phase-name">Build</div>
      <div class="phase-controls">
        <button class="phase-btn" id="btn-start-wave">Start Wave</button>
      </div>
      <div class="speed-controls" id="speed-controls" style="display: none;">
        <button class="speed-btn pause-btn" data-speed="0">⏸ Pause</button>
        <button class="speed-btn active" data-speed="1">1x</button>
        <button class="speed-btn" data-speed="2">2x</button>
        <button class="speed-btn" data-speed="3">3x</button>
      </div>
    `,document.getElementById("btn-start-wave")?.addEventListener("click",()=>{U.emit("ui:start-wave")}),document.getElementById("speed-controls")?.querySelectorAll(".speed-btn").forEach(e=>{e.addEventListener("click",t=>{const n=parseFloat(t.target.dataset.speed||"1"),i=ne.get("gameSpeed");n===0?i===0?this.setSpeed(this.lastSpeed):(this.lastSpeed=i,this.setSpeed(0)):this.setSpeed(n)})})}createThemeToggle(){const e=document.createElement("div");e.id="top-controls",this.themeToggleElement=document.createElement("button"),this.themeToggleElement.id="theme-toggle",this.themeToggleElement.title="Toggle Theme (T)",this.updateThemeToggleButton(),e.appendChild(this.themeToggleElement);const t=document.createElement("button");t.id="btn-rotate-camera",t.title="Rotate Camera (E)",t.className="top-control-btn",t.innerHTML="🔄",e.appendChild(t);const n=document.createElement("button");n.id="btn-camera-toggle",n.title="Toggle Camera View",n.className="top-control-btn active",n.dataset.view="isometric",n.innerHTML="📐",e.appendChild(n),document.getElementById("ui-container")?.appendChild(e),this.themeToggleElement.addEventListener("click",()=>{ne.toggleTheme()}),t.addEventListener("click",()=>{U.emit("input:camera-rotate-right")}),n.addEventListener("click",i=>{const r=i.currentTarget,a=(r.dataset.view==="top"?"top":"isometric")==="isometric"?"top":"isometric";r.dataset.view=a,r.innerHTML=a==="isometric"?"📐":"🔝",U.emit("input:camera-view",a)})}updateThemeToggleButton(){if(!this.themeToggleElement)return;const e=ne.get("theme");this.themeToggleElement.innerHTML=e==="dark"?"🌙":"☀️",document.body.classList.toggle("light-mode",e==="light")}addMobileInteraction(e,t){let n=0;e.addEventListener("touchend",i=>{i.preventDefault(),n=Date.now(),t()},{passive:!1}),e.addEventListener("click",()=>{Date.now()-n<300||t()})}createMobileMenu(){const e=document.createElement("div");e.id="mobile-menu",e.innerHTML=`
      <button class="mobile-menu-btn" data-panel="build-menu" title="Build">🏗️</button>
      <button class="mobile-menu-btn" data-panel="wave-preview" title="Wave Info">📋</button>
      <button class="mobile-menu-btn" data-panel="order-panel" title="Orders">📦<span class="mobile-badge" id="orders-badge" aria-label="orders count"></span></button>
      <button class="mobile-menu-btn" data-panel="economy-panel" title="Economy">💰</button>
      <button class="mobile-menu-btn" id="mobile-debug-log-btn" title="Debug Log">🪲</button>
    `,e.querySelectorAll(".mobile-menu-btn[data-panel]").forEach(n=>{this.addMobileInteraction(n,()=>{const i=n.dataset.panel;this.toggleMobilePanel(i)})});const t=e.querySelector("#mobile-debug-log-btn");t&&this.addMobileInteraction(t,()=>{this.closeMobilePanel(),this.toggleDebugLogPanel()}),document.getElementById("ui-container")?.appendChild(e)}toggleMobilePanel(e){this.activeMobilePanel===e?this.closeMobilePanel():this.openMobilePanel(e)}openMobilePanel(e){this.closeMobilePanelInternal();const t=document.getElementById(e);t&&(this.selectionPanelElement.classList.add("hidden"),t.classList.add("mobile-open"),this.activeMobilePanel=e,document.querySelectorAll(".mobile-menu-btn").forEach(n=>{n.classList.toggle("active",n.dataset.panel===e)}))}closeMobilePanelInternal(){this.activeMobilePanel&&(document.getElementById(this.activeMobilePanel)?.classList.remove("mobile-open"),this.activeMobilePanel=null),document.querySelectorAll(".mobile-menu-btn").forEach(e=>e.classList.remove("active"))}closeMobilePanel(){this.closeMobilePanelInternal(),this.selectedEntity&&this.selectionPanelElement.classList.remove("hidden")}updateOrdersBadge(e){const t=document.getElementById("orders-badge");t&&(e>0?(t.textContent=String(e),t.classList.add("visible")):(t.textContent="",t.classList.remove("visible")))}setupEventListeners(){const e=n=>{if(!this.activeMobilePanel||!n)return;const i=document.getElementById("mobile-menu"),r=document.getElementById(this.activeMobilePanel);i?.contains(n)||r?.contains(n)||this.closeMobilePanel()};document.addEventListener("click",n=>{e(n.target)}),document.addEventListener("touchend",n=>{const i=n.changedTouches?.length?n.changedTouches[0]:null,r=i?document.elementFromPoint(i.clientX,i.clientY):n.target;e(r)},{passive:!0});const t=()=>{this._panelInteractionActive=!0};this.selectionPanelElement.addEventListener("mousedown",t),this.orderPanelElement.addEventListener("mousedown",t),document.addEventListener("mouseup",()=>{this._panelInteractionActive=!1}),U.on("theme:changed",()=>{this.updateThemeToggleButton()}),U.on("money:changed",()=>{this.updateHUD(),this.updateBuildMenuAffordability()}),U.on("phase:build",()=>{console.log("[UIManager] phase:build event received"),this.setPhaseUI("build"),this.updateWavePreview()}),U.on("phase:operations",()=>{console.log("[UIManager] phase:operations event received"),this.setPhaseUI("operations"),this.updateWavePreview()}),U.on("wave:start",n=>{this.currentWaveConfig=n.config,this.waveElapsedTime=0,this.trucksSpawned=0,this.trucksActive=0,this.updateHUD(),this.updateWavePreview(n.config.totalWaveTime)}),U.on("wave:complete",()=>{this.currentWaveConfig=null,this.waveElapsedTime=0,this.trucksSpawned=0,this.trucksActive=0,this.updateHUD(),this.updateWavePreview()}),U.on("wave:milestone",n=>{this.showMilestoneReward(n.wave)}),U.on("truck:arrived",()=>{this.trucksSpawned++,this.trucksActive++}),U.on("order:created",()=>{this.updateHUD()}),U.on("order:fulfilled",()=>{this.updateHUD()}),U.on("order:expired",()=>{this.updateHUD()}),U.on("pallet:stored",()=>{this.updateHUD()}),U.on("pallet:picked",()=>{this.updateHUD()}),U.on("entity:placed:complete",()=>{this.updateEconomyPanel(),this.updateHUD()}),U.on("entity:removed:complete",()=>{this.updateEconomyPanel(),this.updateHUD()}),U.on("entity:selected:changed",({entity:n})=>{this.handleEntitySelection(n)}),U.on("selection:teardrop-deactivated",()=>{this.isTeardropMode=!1,document.body.classList.remove("teardrop-mode"),this.updateSelectionPanel()}),U.on("entity:move-mode:changed",({active:n})=>{this.isMoveMode=n;const i=document.getElementById("move-entity-btn");i&&i.classList.toggle("active",n)}),U.on("entity:moved",()=>{this.updateSelectionPanel()}),U.on("wave:progress",n=>{if(n.trucksRemaining!==void 0&&this.currentWaveConfig){const i=this.currentWaveConfig.truckCount;this.trucksActive=n.trucksRemaining-(i-this.trucksSpawned)}this.updateWavePreview(n.timeRemaining)}),U.on("entity:selected",({type:n})=>{this.highlightSelectedBuild(n)}),U.on("input:escape",()=>{if(this.isConveyorLineMode&&this.conveyorLineHasStart){this.conveyorLineHasStart=!1;const n=document.getElementById("line-mode-hint");n&&(n.textContent="Click to set start");return}this.deselectBuild()}),U.on("ui:conveyor-line-status",({status:n})=>{this.conveyorLineHasStart=n==="end";const i=document.getElementById("line-mode-hint");i&&(i.textContent=n==="end"?"Click to confirm line":"Click to set start")}),U.on("phase:operations",()=>{this.selectedEntity&&this.updateSelectionPanel()}),U.on("game:over",()=>{this.showGameOver()})}selectBuildType(e){if(ne.get("phase")!=="build")return;if(this.selectedBuildType===e){this.deselectBuild();return}this.selectedBuildType=e,this.highlightSelectedBuild(e),U.emit("ui:build-select",{type:e});const t=document.getElementById("conveyor-toolbar");t&&(t.style.display=e==="conveyor"||e==="stacker-crane"?"flex":"none"),e!=="conveyor"&&e!=="stacker-crane"&&this.isConveyorLineMode&&(this.isConveyorLineMode=!1,U.emit("ui:conveyor-line-mode",{enabled:!1}))}deselectBuild(){this.selectedBuildType=null,this.highlightSelectedBuild(null),U.emit("ui:build-select",{type:null});const e=document.getElementById("conveyor-toolbar");if(e&&(e.style.display="none"),this.conveyorLineHasStart=!1,this.isConveyorLineMode){this.isConveyorLineMode=!1;const t=document.getElementById("btn-line-mode");t&&t.classList.remove("active"),U.emit("ui:conveyor-line-mode",{enabled:!1})}}toggleConveyorLineMode(){this.isConveyorLineMode=!this.isConveyorLineMode,this.conveyorLineHasStart=!1;const e=document.getElementById("btn-line-mode");e&&e.classList.toggle("active",this.isConveyorLineMode);const t=document.getElementById("line-mode-hint");t&&(t.textContent=this.isConveyorLineMode?"Click to set start":""),U.emit("ui:conveyor-line-mode",{enabled:this.isConveyorLineMode})}highlightSelectedBuild(e){this.buildMenuElement.querySelectorAll(".build-btn").forEach(t=>{const n=t.dataset.type;t.classList.toggle("selected",n===e)})}updateBuildMenuAffordability(){const e=ne.get("money");this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(h=>{const d=h.dataset.type,f=Wt[d];h.classList.toggle("disabled",e<f.cost)});const t=ne.get("floorExpansionCount"),n=No(t),i=document.getElementById("expansion-cost");i&&(i.textContent=`$${n}`);const r=document.getElementById("btn-floor-expansion");r&&r.classList.toggle("disabled",e<n);const o=ne.get("floorVerticalExpansionCount"),a=Fo(o),l=document.getElementById("expansion-vertical-cost");l&&(l.textContent=`$${a}`);const c=document.getElementById("btn-floor-expansion-vertical");c&&c.classList.toggle("disabled",e<a)}setPhaseUI(e){const t=document.getElementById("phase-name"),n=document.getElementById("btn-start-wave"),i=document.getElementById("speed-controls");t&&(t.textContent=e==="build"?"Build":"Operations",t.classList.toggle("operations",e==="operations")),n&&(n.style.display=e==="build"?"block":"none"),i&&(i.style.display=e==="operations"?"flex":"none"),this.buildMenuElement.style.opacity=e==="build"?"1":"0.5",this.buildMenuElement.style.pointerEvents=e==="build"?"auto":"none"}setSpeed(e){ne.setSpeed(e),e>0&&(this.lastSpeed=e),document.querySelectorAll(".speed-btn").forEach(t=>{const n=parseFloat(t.dataset.speed||"1"),i=n===e;t.classList.toggle("active",i),n===0&&(t.textContent=e===0?"▶ Resume":"⏸ Pause")})}updateHUD(){const e=ne.getState(),t=document.getElementById("hud-money"),n=document.getElementById("hud-wave"),i=document.getElementById("hud-storage"),r=document.getElementById("hud-failed"),o=document.getElementById("hud-workers");if(t&&(t.textContent=`$${e.money}`),n&&(n.textContent=String(e.wave)),i&&(i.textContent=`${e.storedPallets} / ${e.storageCapacity}`),r&&(r.textContent=`${e.failedOrders} / 3`),o){const a=this.economyDataCallback?this.economyDataCallback():{operatorCount:0,forkliftCount:0},l=a.operatorCount+a.forkliftCount;o.textContent=`${l} / ${e.workerLimit}`}}updateOrders(e){const t=document.getElementById("order-list");if(!t)return;const n=e.filter(i=>i.status!=="preview");if(this.updateOrdersBadge(n.length),n.length===0){t.innerHTML='<div style="color: #98c1d9; font-size: 12px;">No pending orders</div>';return}this._panelInteractionActive||(t.innerHTML=n.map(i=>{const r=ne.get("storedPallets")>=i.quantity&&i.status==="pending";let o="",a="",l="",c=!1;switch(i.status){case"pending":o="⏳",a="status-pending",l=`${Math.ceil(i.autoLaunchTime)}s`,c=i.autoLaunchTime<=10;break;case"awaiting-truck":o="🚚",a="status-awaiting",l=`🅿️ ${Math.ceil(i.dockTimeRemaining)}s`,c=i.dockTimeRemaining<=10;break;case"loading":o=`📦 ${i.palletsLoaded}/${i.quantity}`,a="status-loading",l=`🅿️ ${Math.ceil(i.dockTimeRemaining)}s`,c=i.dockTimeRemaining<=10;break;case"shipped":o="✅",a="status-shipped",l="";break}const h=i.status==="loading"?`<div class="order-progress-bar">
             <div class="order-progress-fill" style="width: ${i.palletsLoaded/i.quantity*100}%"></div>
           </div>`:"";return`
        <div class="order-item ${a}" data-order-id="${i.id}">
          <div class="order-top-row">
            <span class="quantity">${i.quantity}x 📦</span>
            <span class="status-badge">${o}</span>
            <span class="timer ${c?"urgent":""}">${l}</span>
            <span class="reward">$${i.reward}</span>
            ${r?`<button class="fulfill-btn" data-order-id="${i.id}">Ship</button>`:""}
          </div>
          ${h}
        </div>
      `}).join(""),t.querySelectorAll(".fulfill-btn").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const o=i.dataset.orderId;o&&window.fulfillOrder&&window.fulfillOrder(o)})}))}initSelectionDependencies(e,t,n){this.pickingManager=e,this.scene=t,this.grid=n}handleEntitySelection(e){this.isTeardropMode=!1,this.isMoveMode=!1,document.body.classList.remove("teardrop-mode"),this.selectedEntity=e,this.updateSelectionPanel()}updateSelectionPanel(){if(!this.selectedEntity){this.selectionPanelElement.classList.contains("hidden")||(this.selectionPanelElement.classList.add("hidden"),this.clearArrows(),this.currentArrowTaskId=null);return}const e=this.selectedEntity,t=Wt[e.type],n=e.getGridPosition();let i="",r="";const o=["unload-truck","putaway","replenish","stage","load-truck"],a={"unload-truck":"Unload Truck",putaway:"Put Away",replenish:"Replenish",stage:"Stage","load-truck":"Load Truck"};if(e.type==="forklift"||e.type==="operator"){const b=this.pickingManager?.getWorkerState(e.id);if(b){const E=b.currentTask,R=b.taskPhase.replace(/-/g," ");i=`
          <div class="selection-worker-status">
            <div class="worker-status-header">Current Task</div>
            <div class="worker-status-value">${E?E.type.replace(/-/g," "):"Idle"}</div>
            <div class="worker-status-header" style="margin-top: 8px;">Phase</div>
            <div class="worker-status-value">${R}</div>
          </div>
        `;const w=E?.id||null;w!==this.currentArrowTaskId&&(this.clearArrows(),E&&this.scene&&this.grid&&this.createTaskArrows(E),this.currentArrowTaskId=w)}else this.clearArrows(),this.currentArrowTaskId=null;const O=e.allowedTaskTypes;r=`
        <div class="selection-worker-status">
          <div class="worker-status-header">Allowed Tasks</div>
          <div class="task-filter-list">${o.map(E=>{const R=O===null||O.includes(E)?"checked":"";return`<label class="task-filter-item"><input type="checkbox" class="task-filter-checkbox" data-task-type="${E}" ${R}><span>${a[E]}</span></label>`}).join("")}</div>
        </div>
      `}else this.clearArrows(),this.currentArrowTaskId=null;const l=e.type==="conveyor"||e.type==="diverter",c=e.type==="rack"||e.type==="floor-slot"||l,h=c?e.storageType??"general":"general",d=["general","unloading","storage","picking","loading"],f={general:"General",unloading:"Unloading",storage:"Storage",picking:"Picking",loading:"Loading"},m=["south","west","north","east"],g={south:"South ↓",north:"North ↑",east:"East →",west:"West ←"},v=l?e.direction:"south",p=l?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Direction</span>
        <div class="storage-type-picker">
          <span class="storage-type-label" id="conveyor-direction-label">${g[v]}</span>
          <button class="rotate-btn" id="conveyor-rotate-btn" aria-label="Rotate conveyor 90°">↻ Rotate</button>
        </div>
      </div>
    `:"",u=c?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Zone Type</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="storage-type-prev" aria-label="Previous zone type">&#9664;</button>
          <span class="storage-type-label" id="storage-type-label">${f[h]}</span>
          <button class="storage-type-btn" id="storage-type-next" aria-label="Next zone type">&#9654;</button>
          <button class="teardrop-btn${this.isTeardropMode?" active":""}" id="teardrop-btn" style="--storage-type-color: #${""+ni[h].toString(16).padStart(6,"0")}" aria-label="Paint zone type onto other entities" title="Paint this zone type onto other entities">🩸</button>
        </div>
      </div>
    `:"",_=`
      <div class="selection-header">
        <div class="selection-title">
          <span class="icon">${t?.icon||"📦"}</span>
          <span class="name">${t?.name||e.type}</span>
        </div>
        <span class="selection-id">#${e.id.substring(0,6)}</span>
      </div>
      <div class="selection-content">
        <div class="selection-info-item">
          <span class="label">Position</span>
          <span class="value">(${n.x}, ${n.z})</span>
        </div>
        ${t?.storageCapacity?`
          <div class="selection-info-item">
            <span class="label">Capacity</span>
            <span class="value">${t.storageCapacity} pallets</span>
          </div>
        `:""}
        ${u}
        ${p}
        ${i}
        ${r}
        <div class="selection-actions">
          <button class="move-btn${this.isMoveMode?" active":""}" id="move-entity-btn" aria-label="Move entity to another grid cell" title="Move to another cell">✥ Move</button>
          <button class="sell-btn" id="sell-entity-btn">
            Sell for $${t?.sellValue||0}
          </button>
        </div>
      </div>
    `;if(this.selectionPanelElement.innerHTML!==_&&!this._panelInteractionActive){if(this.selectionPanelElement.innerHTML=_,document.getElementById("sell-entity-btn")?.addEventListener("click",()=>{U.emit("ui:entity-sell",{entity:this.selectedEntity})}),document.getElementById("move-entity-btn")?.addEventListener("click",()=>{U.emit("ui:entity-move-activate")}),e.type==="forklift"||e.type==="operator"){const b=this.selectedEntity;this.selectionPanelElement.querySelectorAll(".task-filter-checkbox").forEach(M=>{M.addEventListener("change",()=>{const O=this.selectionPanelElement.querySelectorAll(".task-filter-checkbox");Array.from(O).every(E=>E.checked)?b.allowedTaskTypes=null:b.allowedTaskTypes=Array.from(O).filter(E=>E.checked).map(E=>E.dataset.taskType)})})}if(c){const b=M=>{if(!(this.selectedEntity instanceof Vt||this.selectedEntity instanceof hn||this.selectedEntity instanceof tt))return;const A=(d.indexOf(this.selectedEntity.storageType)+M+d.length)%d.length,E=d[A];this.selectedEntity.storageType=E;const R=document.getElementById("storage-type-label");R&&(R.textContent=f[E]),U.emit("entity:storage-type-changed",{entity:this.selectedEntity,storageType:E})};document.getElementById("storage-type-prev")?.addEventListener("click",()=>b(-1)),document.getElementById("storage-type-next")?.addEventListener("click",()=>b(1)),document.getElementById("teardrop-btn")?.addEventListener("click",()=>{if(!(this.selectedEntity instanceof Vt||this.selectedEntity instanceof hn||this.selectedEntity instanceof tt))return;this.isTeardropMode?(this.isTeardropMode=!1,document.body.classList.remove("teardrop-mode"),U.emit("ui:teardrop-deactivate")):(this.isTeardropMode=!0,document.body.classList.add("teardrop-mode"),U.emit("ui:teardrop-activate",{storageType:this.selectedEntity.storageType}));const M=document.getElementById("teardrop-btn");M&&M.classList.toggle("active",this.isTeardropMode)})}l&&document.getElementById("conveyor-rotate-btn")?.addEventListener("click",()=>{if(!(this.selectedEntity instanceof tt))return;const b=m.indexOf(this.selectedEntity.direction),M=m[(b+1)%m.length];this.selectedEntity.setDirection(M);const O=document.getElementById("conveyor-direction-label");O&&(O.textContent=g[M]),U.emit("conveyor:rotated",{entity:this.selectedEntity})})}this.selectionPanelElement.classList.contains("hidden")&&(this.closeMobilePanelInternal(),this.selectionPanelElement.classList.remove("hidden"))}createTaskArrows(e){if(!this.scene||!this.grid)return;const t=this.grid.gridToWorld(e.source.gridX,e.source.gridZ),n=this.grid.gridToWorld(e.destination.gridX,e.destination.gridZ),i=new C(0,-1,0),r=t.clone().add(new C(0,2,0));this.pickArrow=new Ml(i,r,1.5,16739179,.5,.3),this.scene.add(this.pickArrow);const o=new C(0,-1,0),a=n.clone().add(new C(0,2,0));this.dropArrow=new Ml(o,a,1.5,4906624,.5,.3),this.scene.add(this.dropArrow)}clearArrows(){this.pickArrow&&(this.scene?.remove(this.pickArrow),this.pickArrow=null),this.dropArrow&&(this.scene?.remove(this.dropArrow),this.dropArrow=null)}hideLoading(){this.loadingScreen.classList.add("hidden")}showLoading(){this.loadingScreen.classList.remove("hidden")}showGameOver(){const e=ne.getState(),t=document.createElement("div");t.className="game-over-overlay",t.innerHTML=`
      <div class="game-over-modal">
        <h1>Game Over</h1>
        <p>Wave Reached: ${e.wave}</p>
        <p>Orders Completed: ${e.completedOrders}</p>
        <p>Final Money: $${e.money}</p>
        <button onclick="location.reload()">Play Again</button>
      </div>
    `,t.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;const n=t.querySelector(".game-over-modal");n.style.cssText=`
      background: #1a1a2e;
      padding: 40px;
      border-radius: 12px;
      border: 2px solid #ff6b6b;
      text-align: center;
      color: white;
    `,document.body.appendChild(t)}showMilestoneReward(e){const t=Math.floor(Math.random()*5)+1,n=document.createElement("div");n.className="milestone-overlay",n.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;const i=document.createElement("div");i.className="milestone-modal",i.style.cssText=`
      background: #1a1a2e;
      padding: 40px;
      border-radius: 12px;
      border: 2px solid #ffd700;
      text-align: center;
      color: white;
      max-width: 420px;
      width: 90%;
    `,i.innerHTML=`
      <h2 style="color:#ffd700;margin-top:0">🏆 Wave ${e} Milestone!</h2>
      <p>Choose your reward:</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:24px">
        <button id="milestone-increase-limit" style="
          background:#2a5298;border:2px solid #4a72b8;color:white;
          padding:16px 20px;border-radius:8px;cursor:pointer;font-size:15px;flex:1;min-width:140px
        ">
          👷 Increase Worker Limit<br><small style="opacity:0.8">+${t} max worker${t>1?"s":""}</small>
        </button>
        <button id="milestone-reset-failures" style="
          background:#1a4a1a;border:2px solid #2a7a2a;color:white;
          padding:16px 20px;border-radius:8px;cursor:pointer;font-size:15px;flex:1;min-width:140px
        ">
          ❤️ Reset Failures<br><small style="opacity:0.8">Clear failed order count</small>
        </button>
      </div>
    `,n.appendChild(i),document.body.appendChild(n);const r=()=>{document.body.removeChild(n),this.updateHUD()};i.querySelector("#milestone-increase-limit").addEventListener("click",()=>{ne.increaseWorkerLimit(t),r()}),i.querySelector("#milestone-reset-failures").addEventListener("click",()=>{ne.resetFailedOrders(),r()})}}class cg{gameLoop;scene;camera;renderer;canvas;grid;waveManager;outboundTruckManager;orderManager;economyManager;inputSystem;placementSystem;selectionSystem;pickingManager;uiManager;constructor(){if(this.canvas=document.getElementById("game-canvas"),!this.canvas)throw new Error("Canvas element not found");this.gameLoop=new Um,this.scene=new Fm,this.camera=new zm(window.innerWidth/window.innerHeight),this.renderer=new Bm(this.canvas),this.grid=new Gm(20,20,1),this.scene.add(this.grid.getObject3D()),this.economyManager=new $m,this.waveManager=new Wm(this.scene.instance,this.grid),this.outboundTruckManager=new Vm(this.scene.instance,this.grid),this.orderManager=new Xm,this.waveManager.setOutboundActiveCallback(()=>this.outboundTruckManager.getActiveCount()>0),this.waveManager.setPendingOrdersCallback(()=>this.orderManager.hasUnshippedOrders()),this.inputSystem=new Ym(this.camera,this.canvas),this.placementSystem=new Km(this.scene,this.grid,this.economyManager),this.selectionSystem=new ag(this.scene,this.inputSystem,this.placementSystem),this.pickingManager=new og(this.scene,this.grid),this.pickingManager.setOutboundTrucksCallback(()=>this.outboundTruckManager.getTrucksNeedingTasks()),this.uiManager=new lg,this.uiManager.initSelectionDependencies(this.pickingManager,this.scene,this.grid),pt.setGrid(this.grid),pt.setEntityProvider(()=>this.placementSystem.getAllEntities()),pt.setOrderManager(this.orderManager),pt.setEconomyManager(this.economyManager),pt.setWaveManager(this.waveManager),this.setupEventHandlers(),this.setupResizeHandler(),this.setupGameLoop(),this.setupGlobalFunctions()}setupInitialDocks(){this.placementSystem.placeEntity("truck-dock",3,this.grid.height-1),this.placementSystem.placeEntity("truck-dock",3,0)}setupEventHandlers(){U.on("ui:start-wave",()=>{this.startWave()}),U.on("ui:new-game",()=>{this.startNewGame()}),U.on("ui:sandbox-game",({money:e,workerLimit:t,wave:n})=>{this.startSandboxGame(e,t,n)}),U.on("ui:load-game",()=>{this.loadGame(pt.getCurrentSlot())}),U.on("ui:load-game-slot",({slot:e})=>{this.loadGame(e)}),U.on("ui:delete-save-slot",({slot:e})=>{pt.deleteSlot(e),this.uiManager.showGameMenu(pt.getAllSlotInfos())}),U.on("ui:save-game",()=>{const e=this.save();U.emit("game:saved",{success:e})}),U.on("wave:complete",()=>{console.log("[Game] wave:complete event received!"),this.onWaveComplete()}),U.on("game:over",()=>{this.gameLoop.pause()}),U.on("entity:placed:complete",({entity:e,type:t,gridX:n,gridZ:i})=>{this.onEntityPlaced(e,t,n,i)}),U.on("truck:docked",({truck:e,dockX:t,dockZ:n})=>{en.log(`[Game] Truck docked at (${t}, ${n}) — pallets: ${e.pallets.length}`),this.pickingManager.createUnloadTasksForTruck(e,t,n)}),U.on("ui:entity-sell",({entity:e})=>{this.sellEntity(e)}),U.on("conveyor:rotated",({entity:e})=>{if(e instanceof tt){const{x:t,z:n}=e.getGridPosition();e.nextConveyor=null,e instanceof ht&&(e.diverterOutputs=[null,null,null]),this.linkAdjacentConveyors(e,t,n)}}),U.on("entity:moved",({entity:e,fromX:t,fromZ:n,gridX:i,gridZ:r})=>{e instanceof tt&&(this.pickingManager.unregisterConveyor(t,n),this.pickingManager.registerConveyor(e,i,r),e.nextConveyor=null,e instanceof ht&&(e.diverterOutputs=[null,null,null]),this.linkAdjacentConveyors(e,i,r))}),U.on("outbound:order-completed",()=>{this.uiManager.updateEconomyPanel()}),U.on("ui:floor-expansion",()=>{this.purchaseFloorExpansion()}),U.on("ui:floor-expansion-vertical",()=>{this.purchaseVerticalFloorExpansion()})}purchaseFloorExpansion(){const e=ne.get("floorExpansionCount"),t=No(e);ne.spendMoney(t)&&(this.grid.expand(Uo),ne.set("floorExpansionCount",e+1),this.camera.setGridDimensions(this.grid.width,this.grid.height),this.uiManager.updateHUD())}purchaseVerticalFloorExpansion(){const e=ne.get("floorVerticalExpansionCount"),t=Fo(e);if(!ne.spendMoney(t))return;const n=this.grid.height,i=this.placementSystem.getAllEntities().filter(o=>o.type==="truck-dock"&&o.getGridPosition().z===n-1);this.grid.expandVertical(Oo),ne.set("floorVerticalExpansionCount",e+1);const r=this.grid.height-1;for(const o of i){const{x:a}=o.getGridPosition();this.placementSystem.relocateEntity(a,n-1,a,r)}this.camera.setGridDimensions(this.grid.width,this.grid.height),this.uiManager.updateHUD()}sellEntity(e){if(!e)return;const{x:t,z:n}=e.getGridPosition();e.type,e instanceof yt||e instanceof Qt?this.pickingManager.unregisterWorker(e.id):e instanceof Vt?this.pickingManager.unregisterRack(t,n):e instanceof hn?this.pickingManager.unregisterFloorSlot(t,n):e instanceof tt&&this.pickingManager.unregisterConveyor(t,n),this.placementSystem.removeEntity(t,n),U.emit("input:escape"),this.uiManager.updateHUD()}onEntityPlaced(e,t,n,i){e instanceof yt||e instanceof Qt?(console.log(`[Game] Registering worker: ${e.type} at (${n}, ${i})`),this.pickingManager.registerWorker(e)):e instanceof Vt?(console.log(`[Game] Registering rack at (${n}, ${i})`),this.pickingManager.registerRack(e,n,i)):e instanceof hn?(console.log(`[Game] Registering floor slot at (${n}, ${i})`),this.pickingManager.registerFloorSlot(e,n,i)):e instanceof tt&&(console.log(`[Game] Registering conveyor at (${n}, ${i})`),this.pickingManager.registerConveyor(e,n,i),this.linkAdjacentConveyors(e,n,i))}linkAdjacentConveyors(e,t,n){const i={north:{dx:0,dz:-1},south:{dx:0,dz:1},east:{dx:1,dz:0},west:{dx:-1,dz:0}};if(e instanceof ht){const r=ht.getOutputOffsets(e.direction),o=[{offset:r.front,slot:0},{offset:r.left,slot:1},{offset:r.right,slot:2}];for(const{offset:l,slot:c}of o){const h=this.pickingManager.getConveyorAt(t+l.dx,n+l.dz);h&&(e.diverterOutputs[c]=h)}const a=this.pickingManager.getConveyorAt(t+r.behind.dx,n+r.behind.dz);if(a){const l=i[a.direction],c=t+r.behind.dx+l.dx,h=n+r.behind.dz+l.dz;c===t&&h===n&&(a.nextConveyor=e)}}else{const r=i[e.direction],o=t+r.dx,a=n+r.dz,l=this.pickingManager.getConveyorAt(o,a);if(l)if(l instanceof ht){const h=ht.getOutputOffsets(l.direction),d=o+h.behind.dx,f=a+h.behind.dz;d===t&&f===n&&(e.nextConveyor=l)}else e.nextConveyor=l;const c=[{nx:t,nz:n-1,requiredDir:"south"},{nx:t,nz:n+1,requiredDir:"north"},{nx:t-1,nz:n,requiredDir:"east"},{nx:t+1,nz:n,requiredDir:"west"}];for(const{nx:h,nz:d,requiredDir:f}of c){const m=this.pickingManager.getConveyorAt(h,d);if(m)if(m instanceof ht){const g=ht.getOutputOffsets(m.direction);g.front.dx===t-h&&g.front.dz===n-d?m.diverterOutputs[0]=e:g.left.dx===t-h&&g.left.dz===n-d?m.diverterOutputs[1]=e:g.right.dx===t-h&&g.right.dz===n-d&&(m.diverterOutputs[2]=e)}else m.direction===f&&(m.nextConveyor=e)}}}setupResizeHandler(){window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.resize(e/t),this.renderer.resize(e,t)})}setupGameLoop(){this.gameLoop.onUpdate((e,t)=>{this.update(e,t)}),this.gameLoop.onRender(()=>{this.render()})}setupGlobalFunctions(){window.fulfillOrder=e=>{this.orderManager.fulfillOrder(e)&&(this.uiManager.updateOrders(this.orderManager.getOrders()),this.uiManager.updateHUD())},this.uiManager.setDebugUpdateCallback(()=>({workers:this.pickingManager.getWorkerDebugInfo(),tasks:this.pickingManager.getTaskQueueStats()})),this.uiManager.setEconomyDataCallback(()=>({waveHistory:this.economyManager.getWaveHistory(),operatorCount:this.economyManager.getBuildCount("operator"),forkliftCount:this.economyManager.getBuildCount("forklift"),currentWaveOrderIncome:this.economyManager.getCurrentWaveOrderIncome()})),this.uiManager.setPreviewOrdersCallback(()=>this.orderManager.getPreviewOrders())}update(e,t){const n=ne.get("gameSpeed"),i=e*n;this.inputSystem.update(e),this.camera.update(),this.placementSystem.update(i),this.selectionSystem.update(),ne.get("phase")==="operations"&&(this.waveManager.update(i),this.outboundTruckManager.update(i),this.orderManager.update(i),this.pickingManager.update(i),this.uiManager.updateOrders(this.orderManager.getOrders())),this.uiManager.updateWorkerDebugPanel(),this.uiManager.updateReservationsDebugPanel(),this.uiManager.updateDebugLogPanel(),this.uiManager.updateSelectionPanel()}render(){this.renderer.render(this.scene.instance,this.camera.instance)}startWave(){const e=ne.get("wave");en.log(`[Game] Wave ${e} started`),ne.setPhase("operations"),this.waveManager.startWave(),this.orderManager.activateWaveOrders()}onWaveComplete(){console.log("[Game] onWaveComplete called, current phase:",ne.get("phase"));const e=ne.get("wave");en.log(`[Game] Wave ${e} complete`);const t=this.economyManager.deductWages(),n=this.economyManager.grantWaveBonus(e);this.economyManager.pushWaveRecord(e,n,t),this.uiManager.updateEconomyPanel(),ne.nextWave();const i=ne.get("wave"),r=this.waveManager.getWaveConfig(i);this.orderManager.prepareForWave(i,r.outboundOrderCount,r.totalWaveTime),this.uiManager.updateWavePreview(),e%5===0&&U.emit("wave:milestone",{wave:e}),ne.setPhase("build"),console.log("[Game] Phase set to build, new phase:",ne.get("phase")),this.uiManager.updateHUD(),pt.save()}start(){pt.restoreLastSlot(),this.uiManager.showGameMenu(pt.getAllSlotInfos()),this.gameLoop.start(),console.log("Warehouse Defender started!")}startNewGame(){en.log("[Game] New game started");const t=pt.getAllSlotInfos().find(i=>!i.exists)?.slot??1;pt.setCurrentSlot(t),this.setupInitialDocks(),this.uiManager.hideLoading(),this.uiManager.updateHUD();const n=this.waveManager.getWaveConfig(1);this.orderManager.prepareForWave(1,n.outboundOrderCount,n.totalWaveTime),this.uiManager.updateWavePreview()}startSandboxGame(e,t,n){en.log(`[Game] Sandbox game started (money=${e}, workerLimit=${t}, wave=${n})`);const r=pt.getAllSlotInfos().find(a=>!a.exists)?.slot??1;pt.setCurrentSlot(r),ne.set("money",e),ne.set("workerLimit",t),ne.set("wave",n),this.setupInitialDocks(),this.uiManager.hideLoading(),this.uiManager.updateHUD();const o=this.waveManager.getWaveConfig(n);this.orderManager.prepareForWave(n,o.outboundOrderCount,o.totalWaveTime),this.uiManager.updateWavePreview()}loadGame(e){const t=e??pt.getCurrentSlot();pt.setCurrentSlot(t);const n=pt.loadFromSlot(t);if(!n)return!1;en.log(`[Game] Game loaded from slot ${t}`),ne.deserialize(n.gameState);const i=ne.get("floorExpansionCount");for(let o=0;o<i;o++)this.grid.expand(Uo);const r=ne.get("floorVerticalExpansionCount");for(let o=0;o<r;o++)this.grid.expandVertical(Oo);this.camera.setGridDimensions(this.grid.width,this.grid.height);for(const o of n.entities){const a=o.type;a in Wt&&this.placementSystem.placeEntity(a,o.gridX,o.gridZ,{direction:o.direction,storageType:o.storageType,storedPallets:o.storedPallets,hasPallet:o.hasPallet,allowedTaskTypes:o.allowedTaskTypes,aisleCells:o.aisleCells,capacity:o.capacity})}this.placementSystem.relinkStackerCraneChildren(),n.orders&&this.orderManager.deserialize(n.orders),n.economyState&&this.economyManager.deserialize(n.economyState),n.waveState&&this.waveManager.restoreFromSave(n.waveState);for(const o of this.orderManager.getOrders())(o.status==="awaiting-truck"||o.status==="loading")&&U.emit("outbound:request-truck",{orderId:o.id,quantity:o.quantity-o.palletsLoaded,reward:o.reward,dockTime:o.dockTimeRemaining});return this.uiManager.hideLoading(),this.uiManager.updateHUD(),this.uiManager.updateEconomyPanel(),this.uiManager.updateWavePreview(),!0}save(){return pt.save()}pause(){this.gameLoop.pause(),ne.pause()}resume(){this.gameLoop.resume(),ne.resume()}reset(){this.gameLoop.stop(),this.placementSystem.reset(),this.waveManager.reset(),this.orderManager.reset(),this.economyManager.reset(),this.pickingManager.reset(),ne.reset(),pt.deleteSave(),this.start()}dispose(){this.gameLoop.stop(),this.inputSystem.dispose(),this.renderer.dispose()}}document.addEventListener("DOMContentLoaded",()=>{const s=new cg;s.start(),window.game=s,document.addEventListener("visibilitychange",()=>{document.hidden?s.pause():s.resume()}),window.addEventListener("beforeunload",e=>{})});
