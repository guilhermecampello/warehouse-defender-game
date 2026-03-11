(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Gc=200;class Wc{entries=[];log(e){this.push("info",e),console.log(e)}warn(e){this.push("warn",e),console.warn(e)}error(e){this.push("error",e),console.error(e)}push(e,t){this.entries.length>=Gc&&this.entries.shift(),this.entries.push({timestamp:Date.now(),level:e,message:t})}getEntries(){return this.entries.slice()}clear(){this.entries=[]}}const bt=new Wc;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="170",Vc=0,Eo=1,$c=2,Xl=1,Yl=2,wn=3,Vn=0,Ht=1,Jt=2,Hn=0,Ri=1,Po=2,Ao=3,Co=4,Xc=5,ti=100,Yc=101,qc=102,Zc=103,Kc=104,jc=200,Qc=201,Jc=202,eh=203,ia=204,sa=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,ra=0,aa=1,oa=2,Oi=3,la=4,ca=5,ha=6,da=7,ql=0,hh=1,dh=2,Gn=0,uh=1,fh=2,ph=3,Zl=4,mh=5,gh=6,vh=7,Kl=300,Ui=301,Ni=302,ua=303,fa=304,gr=306,ls=1e3,ii=1001,pa=1002,hn=1003,_h=1004,_s=1005,en=1006,Sr=1007,si=1008,Rn=1009,jl=1010,Ql=1011,cs=1012,Ja=1013,ri=1014,En=1015,ds=1016,eo=1017,to=1018,Fi=1020,Jl=35902,ec=1021,tc=1022,cn=1023,nc=1024,ic=1025,Ii=1026,zi=1027,sc=1028,no=1029,rc=1030,io=1031,so=1033,js=33776,Qs=33777,Js=33778,er=33779,ma=35840,ga=35841,va=35842,_a=35843,ya=36196,Ma=37492,xa=37496,Sa=37808,ba=37809,wa=37810,Ta=37811,Ea=37812,Pa=37813,Aa=37814,Ca=37815,ka=37816,Ra=37817,Ia=37818,La=37819,Da=37820,Oa=37821,tr=36492,Ua=36494,Na=36495,ac=36283,Fa=36284,za=36285,Ba=36286,yh=3200,Mh=3201,oc=0,xh=1,Bn="",Qt="srgb",Gi="srgb-linear",vr="linear",nt="srgb",di=7680,ko=519,Sh=512,bh=513,wh=514,lc=515,Th=516,Eh=517,Ph=518,Ah=519,Ha=35044,Ro="300 es",Pn=2e3,rr=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const Li=Math.PI/180,hs=180/Math.PI;function An(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function ro(s,e){return(s%e+e)%e}function Ch(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kh(s,e,t){return s!==e?(t-s)/(e-s):0}function as(s,e,t){return(1-t)*s+t*e}function Rh(s,e,t,n){return as(s,e,1-Math.exp(-t*n))}function Ih(s,e=1){return e-Math.abs(ro(s,e*2)-e)}function Lh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Dh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Oh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Uh(s,e){return s+Math.random()*(e-s)}function Nh(s){return s*(.5-Math.random())}function Fh(s){s!==void 0&&(Io=s);let e=Io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zh(s){return s*Li}function Bh(s){return s*hs}function Hh(s){return(s&s-1)===0&&s!==0}function Gh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Lo={DEG2RAD:Li,RAD2DEG:hs,generateUUID:An,clamp:Ft,euclideanModulo:ro,mapLinear:Ch,inverseLerp:kh,lerp:as,damp:Rh,pingpong:Ih,smoothstep:Lh,smootherstep:Dh,randInt:Oh,randFloat:Uh,randFloatSpread:Nh,seededRandom:Fh,degToRad:zh,radToDeg:Bh,isPowerOfTwo:Hh,ceilPowerOfTwo:Gh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Vh,normalize:tt,denormalize:ln};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],b=i[1],w=i[4],S=i[7],L=i[2],A=i[5],E=i[8];return r[0]=a*v+o*b+l*L,r[3]=a*m+o*w+l*A,r[6]=a*p+o*S+l*E,r[1]=c*v+h*b+d*L,r[4]=c*m+h*w+d*A,r[7]=c*p+h*S+d*E,r[2]=u*v+f*b+g*L,r[5]=u*m+f*w+g*A,r[8]=u*p+f*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(br.makeScale(e,t)),this}rotate(e){return this.premultiply(br.makeRotation(-e)),this}translate(e,t){return this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Fe;function cc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $h(){const s=ar("canvas");return s.style.display="block",s}const Do={};function is(s){s in Do||(Do[s]=!0,console.warn(s))}function Xh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Yh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?vr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Di(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Oo=[.64,.33,.3,.6,.15,.06],Uo=[.2126,.7152,.0722],No=[.3127,.329],Fo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zo=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Gi]:{primaries:Oo,whitePoint:No,transfer:vr,toXYZ:Fo,fromXYZ:zo,luminanceCoefficients:Uo,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:Oo,whitePoint:No,transfer:nt,toXYZ:Fo,fromXYZ:zo,luminanceCoefficients:Uo,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let ui;class Zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=ar("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kh=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(wr(i[a].image)):r.push(wr(i[a]))}else r=wr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class zt extends Wi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=ii,i=ii,r=en,a=si,o=cn,l=Rn,c=zt.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=An(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Kl;zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(f+1)/2,L=(p+1)/2,A=(h+u)/4,E=(d+v)/4,C=(g+m)/4;return w>S&&w>L?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=E/n):S>L?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=C/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=E/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Qh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*v,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const L=Math.sqrt(w),A=Math.atan2(L,p*b);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const S=o*b;if(l=l*m+u*S,c=c*m+f*S,h=h*m+g*S,d=d*m+v*S,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new R,Bo=new us;class Vi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),Ms.subVectors(this.max,qi),fi.subVectors(e.a,qi),pi.subVectors(e.b,qi),mi.subVectors(e.c,qi),Dn.subVectors(pi,fi),On.subVectors(mi,pi),Yn.subVectors(fi,mi);let t=[0,-Dn.z,Dn.y,0,-On.z,On.y,0,-Yn.z,Yn.y,Dn.z,0,-Dn.x,On.z,0,-On.x,Yn.z,0,-Yn.x,-Dn.y,Dn.x,0,-On.y,On.x,0,-Yn.y,Yn.x,0];return!Er(t,fi,pi,mi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,fi,pi,mi,Ms))?!1:(xs.crossVectors(Dn,On),t=[xs.x,xs.y,xs.z],Er(t,fi,pi,mi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new R,new R,new R,new R,new R,new R,new R,new R],sn=new R,ys=new Vi,fi=new R,pi=new R,mi=new R,Dn=new R,On=new R,Yn=new R,qi=new R,Ms=new R,xs=new R,qn=new R;function Er(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qn.fromArray(s,r);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ed=new Vi,Zi=new R,Pr=new R;class _r{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ed.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Pr)),this.expandByPoint(Zi.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new R,Ar=new R,Ss=new R,Un=new R,Cr=new R,bs=new R,kr=new R;class ao{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ar.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ss),o=Un.dot(this.direction),l=-Un.dot(Ss),c=Un.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ar).addScaledVector(Ss,u),f}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,r){Cr.subVectors(t,e),bs.subVectors(n,e),kr.crossVectors(Cr,bs);let a=this.direction.dot(kr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(Un,bs));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(Un));if(c<0||l+c>a)return null;const h=-o*Un.dot(kr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,v,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,v,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Nn.crossVectors(n,Wt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Nn.crossVectors(n,Wt)),Nn.normalize(),ws.crossVectors(Wt,Nn),i[0]=Nn.x,i[4]=ws.x,i[8]=Wt.x,i[1]=Nn.y,i[5]=ws.y,i[9]=Wt.y,i[2]=Nn.z,i[6]=ws.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],w=n[7],S=n[11],L=n[15],A=i[0],E=i[4],C=i[8],M=i[12],_=i[1],k=i[5],N=i[9],F=i[13],V=i[2],K=i[6],X=i[10],J=i[14],W=i[3],oe=i[7],me=i[11],re=i[15];return r[0]=a*A+o*_+l*V+c*W,r[4]=a*E+o*k+l*K+c*oe,r[8]=a*C+o*N+l*X+c*me,r[12]=a*M+o*F+l*J+c*re,r[1]=h*A+d*_+u*V+f*W,r[5]=h*E+d*k+u*K+f*oe,r[9]=h*C+d*N+u*X+f*me,r[13]=h*M+d*F+u*J+f*re,r[2]=g*A+v*_+m*V+p*W,r[6]=g*E+v*k+m*K+p*oe,r[10]=g*C+v*N+m*X+p*me,r[14]=g*M+v*F+m*J+p*re,r[3]=b*A+w*_+S*V+L*W,r[7]=b*E+w*k+S*K+L*oe,r[11]=b*C+w*N+S*X+L*me,r[15]=b*M+w*F+S*J+L*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+v*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=d*m*c-v*u*c+v*l*f-o*m*f-d*l*p+o*u*p,w=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,S=h*v*c-g*d*c+g*o*f-a*v*f-h*o*p+a*d*p,L=g*d*l-h*v*l-g*o*u+a*v*u+h*o*m-a*d*m,A=t*b+n*w+i*S+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=b*E,e[1]=(v*u*r-d*m*r-v*i*f+n*m*f+d*i*p-n*u*p)*E,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*E,e[4]=w*E,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*f+t*l*f)*E,e[8]=S*E,e[9]=(g*d*r-h*v*r-g*n*f+t*v*f+h*n*p-t*d*p)*E,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*E,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*E,e[12]=L*E,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*m+t*d*m)*E,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*E,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,b=l*c,w=l*h,S=l*d,L=n.x,A=n.y,E=n.z;return i[0]=(1-(v+p))*L,i[1]=(f+S)*L,i[2]=(g-w)*L,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(u+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+w)*E,i[9]=(m-b)*E,i[10]=(1-(u+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/r,h=1/a,d=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Pn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===Pn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===rr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Pn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*c,f=(n+i)*h;let g,v;if(o===Pn)g=(a+r)*d,v=-2*d;else if(o===rr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new R,rn=new lt,td=new R(0,0,0),nd=new R(1,1,1),Nn=new R,ws=new R,Wt=new R,Ho=new lt,Go=new us;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Go.setFromEuler(this),this.setFromQuaternion(Go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let id=0;const Wo=new R,vi=new us,Mn=new lt,Ts=new R,Ki=new R,sd=new R,rd=new us,Vo=new R(1,0,0),$o=new R(0,1,0),Xo=new R(0,0,1),Yo={type:"added"},ad={type:"removed"},_i={type:"childadded",child:null},Rr={type:"childremoved",child:null};class yt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new R,t=new pn,n=new us,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Fe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis($o,e)}rotateZ(e){return this.rotateOnAxis(Xo,e)}translateOnAxis(e,t){return Wo.copy(e).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis($o,e)}translateZ(e){return this.translateOnAxis(Xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Ki,Ts,this.up):Mn.lookAt(Ts,Ki,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(Mn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yo),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yo),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new R,xn=new R,Ir=new R,Sn=new R,yi=new R,Mi=new R,qo=new R,Lr=new R,Dr=new R,Or=new R,Ur=new pt,Nr=new pt,Fr=new pt;class Yt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),xn.subVectors(n,t),Ir.subVectors(e,t);const a=an.dot(an),o=an.dot(xn),l=an.dot(Ir),c=xn.dot(xn),h=xn.dot(Ir),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ur.setScalar(0),Nr.setScalar(0),Fr.setScalar(0),Ur.fromBufferAttribute(e,t),Nr.fromBufferAttribute(e,n),Fr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Nr,r.y),a.addScaledVector(Fr,r.z),a}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),xn.subVectors(e,t),an.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),an.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;yi.subVectors(i,n),Mi.subVectors(r,n),Lr.subVectors(e,n);const l=yi.dot(Lr),c=Mi.dot(Lr);if(l<=0&&c<=0)return t.copy(n);Dr.subVectors(e,i);const h=yi.dot(Dr),d=Mi.dot(Dr);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(yi,a);Or.subVectors(e,r);const f=yi.dot(Or),g=Mi.dot(Or);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Mi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return qo.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(qo,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(yi,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function zr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=ro(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zr(a,r,e+1/3),this.g=zr(a,r,e),this.b=zr(a,r,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return qe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Ft(Ct.r*255,0,255))*65536+Math.round(Ft(Ct.g*255,0,255))*256+Math.round(Ft(Ct.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Qt){qe.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Es);const n=as(Fn.h,Es.h,t),i=as(Fn.s,Es.s,t),r=as(Fn.l,Es.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ge;Ge.NAMES=uc;let od=0;class oi extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=An(),this.name="",this.blending=Ri,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wn extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new R,Ps=new Oe;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class fc extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pc extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ld=0;const jt=new lt,Br=new yt,xi=new R,Vt=new Vi,ji=new Vi,St=new R;class It extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cc(e)?pc:fc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Br.lookAt(e),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Vt.min,ji.min),Vt.expandByPoint(St),St.addVectors(Vt.max,ji.max),Vt.expandByPoint(St)):(Vt.expandByPoint(ji.min),Vt.expandByPoint(ji.max))}Vt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),St.add(xi)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new R,l[C]=new R;const c=new R,h=new R,d=new R,u=new Oe,f=new Oe,g=new Oe,v=new R,m=new R;function p(C,M,_){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(k),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(k),o[C].add(v),o[M].add(v),o[_].add(v),l[C].add(m),l[M].add(m),l[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,M=b.length;C<M;++C){const _=b[C],k=_.start,N=_.count;for(let F=k,V=k+N;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const w=new R,S=new R,L=new R,A=new R;function E(C){L.fromBufferAttribute(i,C),A.copy(L);const M=o[C];w.copy(M),w.sub(L.multiplyScalar(L.dot(M))).normalize(),S.crossVectors(A,M);const k=S.dot(l[C])<0?-1:1;a.setXYZW(C,w.x,w.y,w.z,k)}for(let C=0,M=b.length;C<M;++C){const _=b[C],k=_.start,N=_.count;for(let F=k,V=k+N;F<V;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new lt,Zn=new ao,As=new _r,Ko=new R,Cs=new R,ks=new R,Rs=new R,Hr=new R,Is=new R,jo=new R,Ls=new R;class G extends yt{constructor(e=new It,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Hr.fromBufferAttribute(d,e),a?Is.addScaledVector(Hr,h):Is.addScaledVector(Hr.sub(t),h))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(As.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(As,Ko)===null||Zn.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(Zo.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,L=w;S<L;S+=3){const A=o.getX(S),E=o.getX(S+1),C=o.getX(S+2);i=Ds(this,p,e,n,c,h,d,A,E,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);i=Ds(this,a,e,n,c,h,d,b,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,L=w;S<L;S+=3){const A=S,E=S+1,C=S+2;i=Ds(this,p,e,n,c,h,d,A,E,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=m,w=m+1,S=m+2;i=Ds(this,a,e,n,c,h,d,b,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function cd(s,e,t,n,i,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Vn,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:s}}function Ds(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Cs),s.getVertexPosition(l,ks),s.getVertexPosition(c,Rs);const h=cd(s,e,t,n,Cs,ks,Rs,jo);if(h){const d=new R;Yt.getBarycoord(jo,Cs,ks,Rs,d),i&&(h.uv=Yt.getInterpolatedAttribute(i,o,l,c,d,new Oe)),r&&(h.uv1=Yt.getInterpolatedAttribute(r,o,l,c,d,new Oe)),a&&(h.normal=Yt.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};Yt.getNormal(Cs,ks,Rs,u.normal),h.face=u,h.barycoord=d}return h}class ae extends It{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(v,m,p,b,w,S,L,A,E,C,M){const _=S/E,k=L/C,N=S/2,F=L/2,V=A/2,K=E+1,X=C+1;let J=0,W=0;const oe=new R;for(let me=0;me<X;me++){const re=me*k-F;for(let ge=0;ge<K;ge++){const Re=ge*_-N;oe[v]=Re*b,oe[m]=re*w,oe[p]=V,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[p]=A>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(ge/E),d.push(1-me/C),J+=1}}for(let me=0;me<C;me++)for(let re=0;re<E;re++){const ge=u+re+K*me,Re=u+re+K*(me+1),q=u+(re+1)+K*(me+1),ne=u+(re+1)+K*me;l.push(ge,Re,ne),l.push(Re,q,ne),W+=6}o.addGroup(f,W,M),f+=W,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ae(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=Bi(s[t]);for(const i in n)e[i]=n[i]}return e}function hd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const dd={clone:Bi,merge:Dt};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let gc=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const zn=new R,Qo=new Oe,Jo=new Oe;class on extends gc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Qo,Jo),t.subVectors(Jo,Qo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Li*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,bi=1;class pd extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(Si,bi,e,t);i.layers=this.layers,this.add(i);const r=new on(Si,bi,e,t);r.layers=this.layers,this.add(r);const a=new on(Si,bi,e,t);a.layers=this.layers,this.add(a);const o=new on(Si,bi,e,t);o.layers=this.layers,this.add(o);const l=new on(Si,bi,e,t);l.layers=this.layers,this.add(l);const c=new on(Si,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vc extends zt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class md extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ae(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Hn});r.uniforms.tEquirect.value=t;const a=new G(i,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=en),new pd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Gr=new R,gd=new R,vd=new Fe;class Tn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gr.subVectors(n,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vd.getNormalMatrix(e),i=this.coplanarPoint(Gr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new _r,Os=new R;class lo{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],b=i[13],w=i[14],S=i[15];if(n[0].setComponents(l-r,u-c,m-f,S-p).normalize(),n[1].setComponents(l+r,u+c,m+f,S+p).normalize(),n[2].setComponents(l+a,u+h,m+g,S+b).normalize(),n[3].setComponents(l-a,u-h,m-g,S-b).normalize(),n[4].setComponents(l-o,u-d,m-v,S-w).normalize(),t===Pn)n[5].setComponents(l+o,u+d,m+v,S+w).normalize();else if(t===rr)n[5].setComponents(o,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _d(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class wt extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const b=p*u-a;for(let w=0;w<c;w++){const S=w*d-r;g.push(S,-b,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const w=b+c*p,S=b+c*(p+1),L=b+1+c*(p+1),A=b+1+c*p;f.push(w,S,A),f.push(S,L,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.widthSegments,e.heightSegments)}}var yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,au=`#ifdef USE_GRADIENTMAP
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
}`,ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hu=`uniform bool receiveShadow;
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
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gu=`PhysicalMaterial material;
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
#endif`,vu=`struct PhysicalMaterial {
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
}`,_u=`
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
#endif`,yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Au=`#if defined( USE_POINTS_UV )
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
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
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
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sf=`float getShadowMask() {
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
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
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
}`,Ef=`#if DEPTH_PACKING == 3200
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
}`,Pf=`#define DISTANCE
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
}`,Af=`#define DISTANCE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,If=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,Nf=`#define MATCAP
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
}`,Ff=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,Bf=`#define NORMAL
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
}`,Hf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,$f=`#define TOON
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
}`,Xf=`#define TOON
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
}`,Yf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:yd,alphahash_pars_fragment:Md,alphamap_fragment:xd,alphamap_pars_fragment:Sd,alphatest_fragment:bd,alphatest_pars_fragment:wd,aomap_fragment:Td,aomap_pars_fragment:Ed,batching_pars_vertex:Pd,batching_vertex:Ad,begin_vertex:Cd,beginnormal_vertex:kd,bsdfs:Rd,iridescence_fragment:Id,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Fd,color_pars_fragment:zd,color_pars_vertex:Bd,color_vertex:Hd,common:Gd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:$d,displacementmap_vertex:Xd,emissivemap_fragment:Yd,emissivemap_pars_fragment:qd,colorspace_fragment:Zd,colorspace_pars_fragment:Kd,envmap_fragment:jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:Jd,envmap_pars_vertex:eu,envmap_physical_pars_fragment:du,envmap_vertex:tu,fog_vertex:nu,fog_pars_vertex:iu,fog_fragment:su,fog_pars_fragment:ru,gradientmap_pars_fragment:au,lightmap_pars_fragment:ou,lights_lambert_fragment:lu,lights_lambert_pars_fragment:cu,lights_pars_begin:hu,lights_toon_fragment:uu,lights_toon_pars_fragment:fu,lights_phong_fragment:pu,lights_phong_pars_fragment:mu,lights_physical_fragment:gu,lights_physical_pars_fragment:vu,lights_fragment_begin:_u,lights_fragment_maps:yu,lights_fragment_end:Mu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Su,logdepthbuf_pars_vertex:bu,logdepthbuf_vertex:wu,map_fragment:Tu,map_pars_fragment:Eu,map_particle_fragment:Pu,map_particle_pars_fragment:Au,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Ru,morphcolor_vertex:Iu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Du,morphtarget_vertex:Ou,normal_fragment_begin:Uu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:zu,normal_vertex:Bu,normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Wu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:$u,opaque_fragment:Xu,packing:Yu,premultiplied_alpha_fragment:qu,project_vertex:Zu,dithering_fragment:Ku,dithering_pars_fragment:ju,roughnessmap_fragment:Qu,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:tf,shadowmap_vertex:nf,shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:lf,specularmap_fragment:cf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:uf,transmission_fragment:ff,transmission_pars_fragment:pf,uv_pars_fragment:mf,uv_pars_vertex:gf,uv_vertex:vf,worldpos_vertex:_f,background_vert:yf,background_frag:Mf,backgroundCube_vert:xf,backgroundCube_frag:Sf,cube_vert:bf,cube_frag:wf,depth_vert:Tf,depth_frag:Ef,distanceRGBA_vert:Pf,distanceRGBA_frag:Af,equirect_vert:Cf,equirect_frag:kf,linedashed_vert:Rf,linedashed_frag:If,meshbasic_vert:Lf,meshbasic_frag:Df,meshlambert_vert:Of,meshlambert_frag:Uf,meshmatcap_vert:Nf,meshmatcap_frag:Ff,meshnormal_vert:zf,meshnormal_frag:Bf,meshphong_vert:Hf,meshphong_frag:Gf,meshphysical_vert:Wf,meshphysical_frag:Vf,meshtoon_vert:$f,meshtoon_frag:Xf,points_vert:Yf,points_frag:qf,shadow_vert:Zf,shadow_frag:Kf,sprite_vert:jf,sprite_frag:Qf},le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},fn={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};fn.physical={uniforms:Dt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Us={r:0,b:0,g:0},jn=new pn,Jf=new lt;function ep(s,e,t,n,i,r,a){const o=new Ge(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function v(b){let w=!1;const S=g(b);S===null?p(o,l):S&&S.isColor&&(p(S,1),w=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,w){const S=g(w);S&&(S.isCubeTexture||S.mapping===gr)?(h===void 0&&(h=new G(new ae(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Bi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),jn.copy(w.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(jn)),h.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,(d!==S||u!==S.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new G(new wt(2,2),new $n({name:"BackgroundMaterial",uniforms:Bi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(Us,mc(s)),n.buffers.color.setClear(Us.r,Us.g,Us.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:m}}function tp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(_,k,N,F,V){let K=!1;const X=d(F,N,k);r!==X&&(r=X,c(r.object)),K=f(_,F,N,V),K&&g(_,F,N,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(_,k,N,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,k,N){const F=N.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let K=V[k.id];K===void 0&&(K={},V[k.id]=K);let X=K[F];return X===void 0&&(X=u(l()),K[F]=X),X}function u(_){const k=[],N=[],F=[];for(let V=0;V<t;V++)k[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,k,N,F){const V=r.attributes,K=k.attributes;let X=0;const J=N.getAttributes();for(const W in J)if(J[W].location>=0){const me=V[W];let re=K[W];if(re===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),me===void 0||me.attribute!==re||re&&me.data!==re.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(_,k,N,F){const V={},K=k.attributes;let X=0;const J=N.getAttributes();for(const W in J)if(J[W].location>=0){let me=K[W];me===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));const re={};re.attribute=me,me&&me.data&&(re.data=me.data),V[W]=re,X++}r.attributes=V,r.attributesNum=X,r.index=F}function v(){const _=r.newAttributes;for(let k=0,N=_.length;k<N;k++)_[k]=0}function m(_){p(_,0)}function p(_,k){const N=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;N[_]=1,F[_]===0&&(s.enableVertexAttribArray(_),F[_]=1),V[_]!==k&&(s.vertexAttribDivisor(_,k),V[_]=k)}function b(){const _=r.newAttributes,k=r.enabledAttributes;for(let N=0,F=k.length;N<F;N++)k[N]!==_[N]&&(s.disableVertexAttribArray(N),k[N]=0)}function w(_,k,N,F,V,K,X){X===!0?s.vertexAttribIPointer(_,k,N,V,K):s.vertexAttribPointer(_,k,N,F,V,K)}function S(_,k,N,F){v();const V=F.attributes,K=N.getAttributes(),X=k.defaultAttributeValues;for(const J in K){const W=K[J];if(W.location>=0){let oe=V[J];if(oe===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),oe!==void 0){const me=oe.normalized,re=oe.itemSize,ge=e.get(oe);if(ge===void 0)continue;const Re=ge.buffer,q=ge.type,ne=ge.bytesPerElement,be=q===s.INT||q===s.UNSIGNED_INT||oe.gpuType===Ja;if(oe.isInterleavedBufferAttribute){const he=oe.data,ke=he.stride,De=oe.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)p(W.location+He,he.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<W.locationSize;He++)m(W.location+He);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let He=0;He<W.locationSize;He++)w(W.location+He,re/W.locationSize,q,me,ke*ne,(De+re/W.locationSize*He)*ne,be)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)p(W.location+he,oe.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<W.locationSize;he++)m(W.location+he);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let he=0;he<W.locationSize;he++)w(W.location+he,re/W.locationSize,q,me,re*ne,re/W.locationSize*he*ne,be)}}else if(X!==void 0){const me=X[J];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(W.location,me);break;case 3:s.vertexAttrib3fv(W.location,me);break;case 4:s.vertexAttrib4fv(W.location,me);break;default:s.vertexAttrib1fv(W.location,me)}}}}b()}function L(){C();for(const _ in n){const k=n[_];for(const N in k){const F=k[N];for(const V in F)h(F[V].object),delete F[V];delete k[N]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const k=n[_.id];for(const N in k){const F=k[N];for(const V in F)h(F[V].object),delete F[V];delete k[N]}delete n[_.id]}function E(_){for(const k in n){const N=n[k];if(N[_.id]===void 0)continue;const F=N[_.id];for(const V in F)h(F[V].object),delete F[V];delete N[_.id]}}function C(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function np(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ip(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==cn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Rn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==En&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:L,maxSamples:A}}function sp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Tn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,w=b*4;let S=p.clippingState||null;l.value=S,S=h(g,u,w,f);for(let L=0;L!==w;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=f;w!==v;++w,S+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function rp(s){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=Ui:o===fa&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===fa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new md(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class co extends gc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,el=[.125,.215,.35,.446,.526,.582],ni=20,Wr=new co,tl=new Ge;let Vr=null,$r=0,Xr=0,Yr=!1;const Jn=(1+Math.sqrt(5))/2,wi=1/Jn,nl=[new R(-Jn,wi,0),new R(Jn,wi,0),new R(-wi,0,Jn),new R(wi,0,Jn),new R(0,Jn,-wi),new R(0,Jn,wi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vr,$r,Xr),this._renderer.xr.enabled=Yr,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ds,format:cn,colorSpace:Gi,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ap(r)),this._blurMaterial=op(r,e,t)}return i}_compileMaterial(e){const t=new G(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,i){const o=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tl),h.toneMapping=Gn,h.autoClear=!1;const f=new Wn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new G(new ae,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(tl),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const w=this._cubeSize;Ns(i,b*w,p>2?w:0,w,w),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new G(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nl[(i-r-1)%nl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new G(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ni-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const p=[];let b=0;for(let E=0;E<ni;++E){const C=E/v,M=Math.exp(-C*C/2);p.push(M),E===0?b+=M:E<m&&(b+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;const S=this._sizeLods[i],L=3*S*(i>w-Ci?i-w+Ci:0),A=4*(this._cubeSize-S);Ns(t,L,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Wr)}}function ap(s){const e=[],t=[],n=[];let i=s;const r=s-Ci+1+el.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ci?l=el[a-s+Ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),w=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,C=A>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(M,v*g*A),w.set(u,m*g*A);const _=[A,A,A,A,A,A];S.set(_,p*g*A)}const L=new It;L.setAttribute("position",new qt(b,v)),L.setAttribute("uv",new qt(w,m)),L.setAttribute("faceIndex",new qt(S,p)),e.push(L),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(s,e,t){const n=new ai(s,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function op(s,e,t){const n=new Float32Array(ni),i=new R(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function rl(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function al(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function lp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ua||l===fa,h=l===Ui||l===Ni;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new il(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new il(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hp(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let w=0,S=b.length;w<S;w+=3){const L=b[w+0],A=b[w+1],E=b[w+2];u.push(L,A,A,E,E,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const L=w+0,A=w+1,E=w+2;u.push(L,A,A,E,E,L)}}else return;const m=new(cc(u)?pc:fc)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function dp(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*v[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function up(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fp(s,e,t){const n=new WeakMap,i=new pt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var f=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let L=o.attributes.position.count*S,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*A*4*d),C=new dc(E,L,A,d);C.type=En,C.needsUpdate=!0;const M=S*4;for(let k=0;k<d;k++){const N=p[k],F=b[k],V=w[k],K=L*A*4*k;for(let X=0;X<N.count;X++){const J=X*M;g===!0&&(i.fromBufferAttribute(N,X),E[K+J+0]=i.x,E[K+J+1]=i.y,E[K+J+2]=i.z,E[K+J+3]=0),v===!0&&(i.fromBufferAttribute(F,X),E[K+J+4]=i.x,E[K+J+5]=i.y,E[K+J+6]=i.z,E[K+J+7]=0),m===!0&&(i.fromBufferAttribute(V,X),E[K+J+8]=i.x,E[K+J+9]=i.y,E[K+J+10]=i.z,E[K+J+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Oe(L,A)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function pp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class yc extends zt{constructor(e,t,n,i,r,a,o,l,c,h=Ii){if(h!==Ii&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ri),n===void 0&&h===zi&&(n=Fi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mc=new zt,ol=new yc(1,1),xc=new dc,Sc=new Jh,bc=new vc,ll=[],cl=[],hl=new Float32Array(16),dl=new Float32Array(9),ul=new Float32Array(4);function $i(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yr(s,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function _p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function yp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(Mt(t,n))return;ul.set(n),s.uniformMatrix2fv(this.addr,!1,ul),xt(t,n)}}function Mp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(Mt(t,n))return;dl.set(n),s.uniformMatrix3fv(this.addr,!1,dl),xt(t,n)}}function xp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(Mt(t,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),xt(t,n)}}function Sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function wp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function Tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function Ep(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function Ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function Cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function kp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ol.compareFunction=lc,r=ol):r=Mc,t.setTexture2D(e||r,i)}function Rp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sc,i)}function Ip(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bc,i)}function Lp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xc,i)}function Dp(s){switch(s){case 5126:return mp;case 35664:return gp;case 35665:return vp;case 35666:return _p;case 35674:return yp;case 35675:return Mp;case 35676:return xp;case 5124:case 35670:return Sp;case 35667:case 35671:return bp;case 35668:case 35672:return wp;case 35669:case 35673:return Tp;case 5125:return Ep;case 36294:return Pp;case 36295:return Ap;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Lp}}function Op(s,e){s.uniform1fv(this.addr,e)}function Up(s,e){const t=$i(e,this.size,2);s.uniform2fv(this.addr,t)}function Np(s,e){const t=$i(e,this.size,3);s.uniform3fv(this.addr,t)}function Fp(s,e){const t=$i(e,this.size,4);s.uniform4fv(this.addr,t)}function zp(s,e){const t=$i(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bp(s,e){const t=$i(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hp(s,e){const t=$i(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gp(s,e){s.uniform1iv(this.addr,e)}function Wp(s,e){s.uniform2iv(this.addr,e)}function Vp(s,e){s.uniform3iv(this.addr,e)}function $p(s,e){s.uniform4iv(this.addr,e)}function Xp(s,e){s.uniform1uiv(this.addr,e)}function Yp(s,e){s.uniform2uiv(this.addr,e)}function qp(s,e){s.uniform3uiv(this.addr,e)}function Zp(s,e){s.uniform4uiv(this.addr,e)}function Kp(s,e,t){const n=this.cache,i=e.length,r=yr(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mc,r[a])}function jp(s,e,t){const n=this.cache,i=e.length,r=yr(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sc,r[a])}function Qp(s,e,t){const n=this.cache,i=e.length,r=yr(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bc,r[a])}function Jp(s,e,t){const n=this.cache,i=e.length,r=yr(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xc,r[a])}function em(s){switch(s){case 5126:return Op;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return zp;case 35675:return Bp;case 35676:return Hp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Vp;case 35669:case 35673:return $p;case 5125:return Xp;case 36294:return Yp;case 36295:return qp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return Jp}}class tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dp(t.type)}}class nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=em(t.type)}}class im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function fl(s,e){s.seq.push(e),s.map[e.id]=e}function sm(s,e,t){const n=s.name,i=n.length;for(qr.lastIndex=0;;){const r=qr.exec(n),a=qr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fl(t,c===void 0?new tm(o,s,e):new nm(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new im(o),fl(t,d)),t=d}}}class nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);sm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const rm=37297;let am=0;function om(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ml=new Fe;function lm(s){qe._getMatrix(ml,qe.workingColorSpace,s);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case vr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+om(s.getShaderSource(e),a)}else return i}function cm(s,e){const t=lm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hm(s,e){let t;switch(e){case uh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case Zl:t="ACESFilmic";break;case gh:t="AgX";break;case vh:t="Neutral";break;case mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new R;function dm(){qe.getLuminanceCoefficients(Fs);const s=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function fm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ss(s){return s!==""}function vl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(s){return s.replace(mm,vm)}const gm=new Map;function vm(s,e){let t=Be[e];if(t===void 0){const n=gm.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(s){return s.replace(_m,ym)}function ym(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ml(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Mm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function bm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case dh:e="ENVMAP_BLENDING_ADD";break}return e}function wm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mm(t),c=xm(t),h=Sm(t),d=bm(t),u=wm(t),f=um(t),g=fm(r),v=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Gn?hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,cm("linearToOutputTexel",t.outputColorSpace),dm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),a=Ga(a),a=vl(a,t),a=_l(a,t),o=Ga(o),o=vl(o,t),o=_l(o,t),a=yl(a),o=yl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,S=b+p+o,L=pl(i,i.VERTEX_SHADER,w),A=pl(i,i.FRAGMENT_SHADER,S);i.attachShader(v,L),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(k){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(A).trim();let K=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,A);else{const J=gl(i,L,"vertex"),W=gl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+N+`
`+J+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(X=!1);X&&(k.diagnostics={runnable:K,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(L),i.deleteShader(A),C=new nr(i,v),M=pm(i,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,rm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let Em=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Am(e),t.set(e,n)),n}}class Am{constructor(e){this.id=Em++,this.code=e,this.usedTimes=0}}function Cm(s,e,t,n,i,r,a){const o=new oo,l=new Pm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,k,N,F){const V=N.fog,K=F.geometry,X=M.isMeshStandardMaterial?N.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),W=J&&J.mapping===gr?J.image.height:null,oe=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=me!==void 0?me.length:0;let ge=0;K.morphAttributes.position!==void 0&&(ge=1),K.morphAttributes.normal!==void 0&&(ge=2),K.morphAttributes.color!==void 0&&(ge=3);let Re,q,ne,be;if(oe){const et=fn[oe];Re=et.vertexShader,q=et.fragmentShader}else Re=M.vertexShader,q=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);const he=s.getRenderTarget(),ke=s.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,ct=!!M.map,Xe=!!M.matcap,mt=!!J,U=!!M.aoMap,Zt=!!M.lightMap,We=!!M.bumpMap,Ve=!!M.normalMap,Ae=!!M.displacementMap,rt=!!M.emissiveMap,Pe=!!M.metalnessMap,T=!!M.roughnessMap,y=M.anisotropy>0,z=M.clearcoat>0,j=M.dispersion>0,ee=M.iridescence>0,Z=M.sheen>0,we=M.transmission>0,de=y&&!!M.anisotropyMap,ve=z&&!!M.clearcoatMap,Ye=z&&!!M.clearcoatNormalMap,ie=z&&!!M.clearcoatRoughnessMap,_e=ee&&!!M.iridescenceMap,Ce=ee&&!!M.iridescenceThicknessMap,Ie=Z&&!!M.sheenColorMap,ye=Z&&!!M.sheenRoughnessMap,$e=!!M.specularMap,ze=!!M.specularColorMap,it=!!M.specularIntensityMap,I=we&&!!M.transmissionMap,ce=we&&!!M.thicknessMap,$=!!M.gradientMap,Q=!!M.alphaMap,pe=M.alphaTest>0,ue=!!M.alphaHash,Ue=!!M.extensions;let ut=Gn;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Pt={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Re,fragmentShader:q,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Gi,alphaToCoverage:!!M.alphaToCoverage,map:ct,matcap:Xe,envMap:mt,envMapMode:mt&&J.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:Zt,bumpMap:We,normalMap:Ve,displacementMap:u&&Ae,emissiveMap:rt,normalMapObjectSpace:Ve&&M.normalMapType===xh,normalMapTangentSpace:Ve&&M.normalMapType===oc,metalnessMap:Pe,roughnessMap:T,anisotropy:y,anisotropyMap:de,clearcoat:z,clearcoatMap:ve,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ie,dispersion:j,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Ce,sheen:Z,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:$e,specularColorMap:ze,specularIntensityMap:it,transmission:we,transmissionMap:I,thicknessMap:ce,gradientMap:$,opaque:M.transparent===!1&&M.blending===Ri&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:ue,combine:M.combine,mapUv:ct&&v(M.map.channel),aoMapUv:U&&v(M.aoMap.channel),lightMapUv:Zt&&v(M.lightMap.channel),bumpMapUv:We&&v(M.bumpMap.channel),normalMapUv:Ve&&v(M.normalMap.channel),displacementMapUv:Ae&&v(M.displacementMap.channel),emissiveMapUv:rt&&v(M.emissiveMap.channel),metalnessMapUv:Pe&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:de&&v(M.anisotropyMap.channel),clearcoatMapUv:ve&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(M.sheenRoughnessMap.channel),specularMapUv:$e&&v(M.specularMap.channel),specularColorMapUv:ze&&v(M.specularColorMap.channel),specularIntensityMapUv:it&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ce&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ve||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(ct||Q),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ke,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:ct&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)_.push(k),_.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(b(_,M),w(_,M),_.push(s.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function b(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function w(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const _=g[M.type];let k;if(_){const N=fn[_];k=dd.clone(N.uniforms)}else k=M.uniforms;return k}function L(M,_){let k;for(let N=0,F=h.length;N<F;N++){const V=h[N];if(V.cacheKey===_){k=V,++k.usedTimes;break}}return k===void 0&&(k=new Tm(s,_,M,r),h.push(k)),k}function A(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:C}}function km(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Rm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,v,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Rm),n.length>1&&n.sort(u||xl),i.length>1&&i.sort(u||xl)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Im(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Sl,s.set(n,[a])):i>=r.length?(a=new Sl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Lm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ge};break;case"SpotLight":t={position:new R,direction:new R,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Dm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Om=0;function Um(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Nm(s){const e=new Lm,t=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new lt,a=new lt;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,w=0,S=0,L=0,A=0,E=0;c.sort(Um);for(let M=0,_=c.length;M<_;M++){const k=c[M],N=k.color,F=k.intensity,V=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=N.r*F,d+=N.g*F,u+=N.b*F;else if(k.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(k.sh.coefficients[X],F);E++}else if(k.isDirectionalLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,W=t.get(k);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=k.shadow.matrix,b++}n.directional[f]=X,f++}else if(k.isSpotLight){const X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(N).multiplyScalar(F),X.distance=V,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,n.spot[v]=X;const J=k.shadow;if(k.map&&(n.spotLightMap[L]=k.map,L++,J.updateMatrices(k),k.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,k.castShadow){const W=t.get(k);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=K,S++}v++}else if(k.isRectAreaLight){const X=e.get(k);X.color.copy(N).multiplyScalar(F),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=X,m++}else if(k.isPointLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){const J=k.shadow,W=t.get(k);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=k.shadow.matrix,w++}n.point[g]=X,g++}else if(k.isHemisphereLight){const X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(F),X.groundColor.copy(k.groundColor).multiplyScalar(F),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==w||C.numSpotShadows!==S||C.numSpotMaps!==L||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=w,C.numSpotShadows=S,C.numSpotMaps=L,C.numLightProbes=E,n.version=Om++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(w.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function bl(s){const e=new Nm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new bl(s),e.set(i,[o])):r>=a.length?(o=new bl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class zm extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bm extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`;function Wm(s,e,t){let n=new lo;const i=new Oe,r=new Oe,a=new pt,o=new zm({depthPacking:Mh}),l=new Bm,c={},h=t.maxTextureSize,d={[Vn]:Ht,[Ht]:Vn,[Jt]:Jt},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Hm,fragmentShader:Gm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new G(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let p=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),_=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Hn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==wn&&this.type===wn,V=p===wn&&this.type!==wn;for(let K=0,X=A.length;K<X;K++){const J=A[K],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const oe=W.getFrameExtents();if(i.multiply(oe),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,W.mapSize.y=r.y)),W.map===null||F===!0||V===!0){const re=this.type!==wn?{minFilter:hn,magFilter:hn}:{};W.map!==null&&W.map.dispose(),W.map=new ai(i.x,i.y,re),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const me=W.getViewportCount();for(let re=0;re<me;re++){const ge=W.getViewport(re);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),N.viewport(a),W.updateMatrices(J,re),n=W.getFrustum(),S(E,C,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&b(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,_,k)};function b(A,E){const C=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,C,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,C,f,v,null)}function w(A,E,C,M){let _=null;const k=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)_=k;else if(_=C.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=_.uuid,F=E.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let K=V[F];K===void 0&&(K=_.clone(),V[F]=K,E.addEventListener("dispose",L)),_=K}if(_.visible=E.visible,_.wireframe=E.wireframe,M===wn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=s.properties.get(_);N.light=C}return _}function S(A,E,C,M,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=e.update(A),V=A.material;if(Array.isArray(V)){const K=F.groups;for(let X=0,J=K.length;X<J;X++){const W=K[X],oe=V[W.materialIndex];if(oe&&oe.visible){const me=w(A,oe,M,_);A.onBeforeShadow(s,A,E,C,F,me,W),s.renderBufferDirect(C,null,F,me,A,W),A.onAfterShadow(s,A,E,C,F,me,W)}}}else if(V.visible){const K=w(A,V,M,_);A.onBeforeShadow(s,A,E,C,F,K,null),s.renderBufferDirect(C,null,F,K,A,null),A.onAfterShadow(s,A,E,C,F,K,null)}}const N=A.children;for(let F=0,V=N.length;F<V;F++)S(N[F],E,C,M,_)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const M=c[C],_=A.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Vm={[ra]:aa,[oa]:ha,[la]:da,[Oi]:ca,[aa]:ra,[ha]:oa,[da]:la,[ca]:Oi};function $m(s,e){function t(){let I=!1;const ce=new pt;let $=null;const Q=new pt(0,0,0,0);return{setMask:function(pe){$!==pe&&!I&&(s.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){I=pe},setClear:function(pe,ue,Ue,ut,Pt){Pt===!0&&(pe*=ut,ue*=ut,Ue*=ut),ce.set(pe,ue,Ue,ut),Q.equals(ce)===!1&&(s.clearColor(pe,ue,Ue,ut),Q.copy(ce))},reset:function(){I=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,ce=!1,$=null,Q=null,pe=null;return{setReversed:function(ue){if(ce!==ue){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const ut=pe;pe=null,this.setClear(ut)}ce=ue},getReversed:function(){return ce},setTest:function(ue){ue?he(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(ue){$!==ue&&!I&&(s.depthMask(ue),$=ue)},setFunc:function(ue){if(ce&&(ue=Vm[ue]),Q!==ue){switch(ue){case ra:s.depthFunc(s.NEVER);break;case aa:s.depthFunc(s.ALWAYS);break;case oa:s.depthFunc(s.LESS);break;case Oi:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ca:s.depthFunc(s.GEQUAL);break;case ha:s.depthFunc(s.GREATER);break;case da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ue}},setLocked:function(ue){I=ue},setClear:function(ue){pe!==ue&&(ce&&(ue=1-ue),s.clearDepth(ue),pe=ue)},reset:function(){I=!1,$=null,Q=null,pe=null,ce=!1}}}function i(){let I=!1,ce=null,$=null,Q=null,pe=null,ue=null,Ue=null,ut=null,Pt=null;return{setTest:function(et){I||(et?he(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(et){ce!==et&&!I&&(s.stencilMask(et),ce=et)},setFunc:function(et,tn,gn){($!==et||Q!==tn||pe!==gn)&&(s.stencilFunc(et,tn,gn),$=et,Q=tn,pe=gn)},setOp:function(et,tn,gn){(ue!==et||Ue!==tn||ut!==gn)&&(s.stencilOp(et,tn,gn),ue=et,Ue=tn,ut=gn)},setLocked:function(et){I=et},setClear:function(et){Pt!==et&&(s.clearStencil(et),Pt=et)},reset:function(){I=!1,ce=null,$=null,Q=null,pe=null,ue=null,Ue=null,ut=null,Pt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,w=null,S=null,L=null,A=null,E=new Ge(0,0,0),C=0,M=!1,_=null,k=null,N=null,F=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=J>=2);let oe=null,me={};const re=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),Re=new pt().fromArray(re),q=new pt().fromArray(ge);function ne(I,ce,$,Q){const pe=new Uint8Array(4),ue=s.createTexture();s.bindTexture(I,ue),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<$;Ue++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(ce+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ue}const be={};be[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(s.DEPTH_TEST),a.setFunc(Oi),We(!1),Ve(Eo),he(s.CULL_FACE),U(Hn);function he(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function ke(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function De(I,ce){return d[I]!==ce?(s.bindFramebuffer(I,ce),d[I]=ce,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function He(I,ce){let $=f,Q=!1;if(I){$=u.get(ce),$===void 0&&($=[],u.set(ce,$));const pe=I.textures;if($.length!==pe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Ue=pe.length;ue<Ue;ue++)$[ue]=s.COLOR_ATTACHMENT0+ue;$.length=pe.length,Q=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Q=!0);Q&&s.drawBuffers($)}function ct(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Xe={[ti]:s.FUNC_ADD,[Yc]:s.FUNC_SUBTRACT,[qc]:s.FUNC_REVERSE_SUBTRACT};Xe[Zc]=s.MIN,Xe[Kc]=s.MAX;const mt={[jc]:s.ZERO,[Qc]:s.ONE,[Jc]:s.SRC_COLOR,[ia]:s.SRC_ALPHA,[rh]:s.SRC_ALPHA_SATURATE,[ih]:s.DST_COLOR,[th]:s.DST_ALPHA,[eh]:s.ONE_MINUS_SRC_COLOR,[sa]:s.ONE_MINUS_SRC_ALPHA,[sh]:s.ONE_MINUS_DST_COLOR,[nh]:s.ONE_MINUS_DST_ALPHA,[ah]:s.CONSTANT_COLOR,[oh]:s.ONE_MINUS_CONSTANT_COLOR,[lh]:s.CONSTANT_ALPHA,[ch]:s.ONE_MINUS_CONSTANT_ALPHA};function U(I,ce,$,Q,pe,ue,Ue,ut,Pt,et){if(I===Hn){v===!0&&(ke(s.BLEND),v=!1);return}if(v===!1&&(he(s.BLEND),v=!0),I!==Xc){if(I!==m||et!==M){if((p!==ti||S!==ti)&&(s.blendEquation(s.FUNC_ADD),p=ti,S=ti),et)switch(I){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Po:s.blendFunc(s.ONE,s.ONE);break;case Ao:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Po:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ao:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,w=null,L=null,A=null,E.set(0,0,0),C=0,m=I,M=et}return}pe=pe||ce,ue=ue||$,Ue=Ue||Q,(ce!==p||pe!==S)&&(s.blendEquationSeparate(Xe[ce],Xe[pe]),p=ce,S=pe),($!==b||Q!==w||ue!==L||Ue!==A)&&(s.blendFuncSeparate(mt[$],mt[Q],mt[ue],mt[Ue]),b=$,w=Q,L=ue,A=Ue),(ut.equals(E)===!1||Pt!==C)&&(s.blendColor(ut.r,ut.g,ut.b,Pt),E.copy(ut),C=Pt),m=I,M=!1}function Zt(I,ce){I.side===Jt?ke(s.CULL_FACE):he(s.CULL_FACE);let $=I.side===Ht;ce&&($=!$),We($),I.blending===Ri&&I.transparent===!1?U(Hn):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){_!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),_=I)}function Ve(I){I!==Vc?(he(s.CULL_FACE),I!==k&&(I===Eo?s.cullFace(s.BACK):I===$c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),k=I}function Ae(I){I!==N&&(X&&s.lineWidth(I),N=I)}function rt(I,ce,$){I?(he(s.POLYGON_OFFSET_FILL),(F!==ce||V!==$)&&(s.polygonOffset(ce,$),F=ce,V=$)):ke(s.POLYGON_OFFSET_FILL)}function Pe(I){I?he(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+K-1),oe!==I&&(s.activeTexture(I),oe=I)}function y(I,ce,$){$===void 0&&(oe===null?$=s.TEXTURE0+K-1:$=oe);let Q=me[$];Q===void 0&&(Q={type:void 0,texture:void 0},me[$]=Q),(Q.type!==I||Q.texture!==ce)&&(oe!==$&&(s.activeTexture($),oe=$),s.bindTexture(I,ce||be[I]),Q.type=I,Q.texture=ce)}function z(){const I=me[oe];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Re.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function ye(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function $e(I,ce){let $=c.get(ce);$===void 0&&($=new WeakMap,c.set(ce,$));let Q=$.get(I);Q===void 0&&(Q=s.getUniformBlockIndex(ce,I.name),$.set(I,Q))}function ze(I,ce){const Q=c.get(ce).get(I);l.get(ce)!==Q&&(s.uniformBlockBinding(ce,Q,I.__bindingPointIndex),l.set(ce,Q))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,me={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,w=null,S=null,L=null,A=null,E=new Ge(0,0,0),C=0,M=!1,_=null,k=null,N=null,F=null,V=null,Re.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:ke,bindFramebuffer:De,drawBuffers:He,useProgram:ct,setBlending:U,setMaterial:Zt,setFlipSided:We,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:rt,setScissorTest:Pe,activeTexture:T,bindTexture:y,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Ce,updateUBOMapping:$e,uniformBlockBinding:ze,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Ie,viewport:ye,reset:it}}function wl(s,e,t,n){const i=Xm(n);switch(t){case ec:return s*e;case nc:return s*e;case ic:return s*e*2;case sc:return s*e/i.components*i.byteLength;case no:return s*e/i.components*i.byteLength;case rc:return s*e*2/i.components*i.byteLength;case io:return s*e*2/i.components*i.byteLength;case tc:return s*e*3/i.components*i.byteLength;case cn:return s*e*4/i.components*i.byteLength;case so:return s*e*4/i.components*i.byteLength;case js:case Qs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Js:case er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ga:case _a:return Math.max(s,16)*Math.max(e,8)/4;case ma:case va:return Math.max(s,8)*Math.max(e,8)/2;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case tr:case Ua:case Na:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ac:case Fa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case za:case Ba:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(s){switch(s){case Rn:case jl:return{byteLength:1,components:1};case cs:case Ql:case ds:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case ri:case Ja:case En:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ym(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):ar("canvas")}function v(T,y,z){let j=1;const ee=Pe(T);if((ee.width>z||ee.height>z)&&(j=z/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(j*ee.width),we=Math.floor(j*ee.height);d===void 0&&(d=g(Z,we));const de=y?g(Z,we):d;return de.width=Z,de.height=we,de.getContext("2d").drawImage(T,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+we+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(T,y,z,j,ee=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),y===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),y===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),y===s.RGBA){const we=ee?vr:qe.getTransfer(j);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=we===nt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(T,y){let z;return T?y===null||y===ri||y===Fi?z=s.DEPTH24_STENCIL8:y===En?z=s.DEPTH32F_STENCIL8:y===cs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ri||y===Fi?z=s.DEPTH_COMPONENT24:y===En?z=s.DEPTH_COMPONENT32F:y===cs&&(z=s.DEPTH_COMPONENT16),z}function L(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&h.delete(y)}function E(T){const y=T.target;y.removeEventListener("dispose",E),_(y)}function C(T){const y=n.get(T);if(y.__webglInit===void 0)return;const z=T.source,j=u.get(z);if(j){const ee=j[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(T),Object.keys(j).length===0&&u.delete(z)}n.remove(T)}function M(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const z=T.source,j=u.get(z);delete j[y.__cacheKey],a.memory.textures--}function _(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ee=0;ee<y.__webglFramebuffer[j].length;ee++)s.deleteFramebuffer(y.__webglFramebuffer[j][ee]);else s.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)s.deleteFramebuffer(y.__webglFramebuffer[j]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=T.textures;for(let j=0,ee=z.length;j<ee;j++){const Z=n.get(z[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(T)}let k=0;function N(){k=0}function F(){const T=k;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),k+=1,T}function V(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function K(T,y){const z=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,y);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function X(T,y){const z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function J(T,y){const z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function W(T,y){const z=n.get(T);if(T.version>0&&z.__version!==T.version){ne(z,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const oe={[ls]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[pa]:s.MIRRORED_REPEAT},me={[hn]:s.NEAREST,[_h]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Sr]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},re={[Sh]:s.NEVER,[Ah]:s.ALWAYS,[bh]:s.LESS,[lc]:s.LEQUAL,[wh]:s.EQUAL,[Ph]:s.GEQUAL,[Th]:s.GREATER,[Eh]:s.NOTEQUAL};function ge(T,y){if(y.type===En&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===Sr||y.magFilter===_s||y.magFilter===si||y.minFilter===en||y.minFilter===Sr||y.minFilter===_s||y.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,oe[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,me[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==_s&&y.minFilter!==si||y.type===En&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Re(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const j=y.source;let ee=u.get(j);ee===void 0&&(ee={},u.set(j,ee));const Z=V(y);if(Z!==T.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[Z].usedTimes++;const we=ee[T.__cacheKey];we!==void 0&&(ee[T.__cacheKey].usedTimes--,we.usedTimes===0&&M(y)),T.__cacheKey=Z,T.__webglTexture=ee[Z].texture}return z}function q(T,y,z){let j=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=s.TEXTURE_3D);const ee=Re(T,y),Z=y.source;t.bindTexture(j,T.__webglTexture,s.TEXTURE0+z);const we=n.get(Z);if(Z.version!==we.__version||ee===!0){t.activeTexture(s.TEXTURE0+z);const de=qe.getPrimaries(qe.workingColorSpace),ve=y.colorSpace===Bn?null:qe.getPrimaries(y.colorSpace),Ye=y.colorSpace===Bn||de===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=v(y.image,!1,i.maxTextureSize);ie=rt(y,ie);const _e=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type);let Ie=w(y.internalFormat,_e,Ce,y.colorSpace,y.isVideoTexture);ge(j,y);let ye;const $e=y.mipmaps,ze=y.isVideoTexture!==!0,it=we.__version===void 0||ee===!0,I=Z.dataReady,ce=L(y,ie);if(y.isDepthTexture)Ie=S(y.format===zi,y.type),it&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Ie,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ie.width,ie.height,0,_e,Ce,null));else if(y.isDataTexture)if($e.length>0){ze&&it&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,$e[0].width,$e[0].height);for(let $=0,Q=$e.length;$<Q;$++)ye=$e[$],ze?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,_e,Ce,ye.data):t.texImage2D(s.TEXTURE_2D,$,Ie,ye.width,ye.height,0,_e,Ce,ye.data);y.generateMipmaps=!1}else ze?(it&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,ie.width,ie.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,Ce,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,ie.width,ie.height,0,_e,Ce,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,$e[0].width,$e[0].height,ie.depth);for(let $=0,Q=$e.length;$<Q;$++)if(ye=$e[$],y.format!==cn)if(_e!==null)if(ze){if(I)if(y.layerUpdates.size>0){const pe=wl(ye.width,ye.height,y.format,y.type);for(const ue of y.layerUpdates){const Ue=ye.data.subarray(ue*pe/ye.data.BYTES_PER_ELEMENT,(ue+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,ue,ye.width,ye.height,1,_e,Ue)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ie.depth,_e,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ie,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ie.depth,_e,Ce,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ie,ye.width,ye.height,ie.depth,0,_e,Ce,ye.data)}else{ze&&it&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,$e[0].width,$e[0].height);for(let $=0,Q=$e.length;$<Q;$++)ye=$e[$],y.format!==cn?_e!==null?ze?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,_e,Ce,ye.data):t.texImage2D(s.TEXTURE_2D,$,Ie,ye.width,ye.height,0,_e,Ce,ye.data)}else if(y.isDataArrayTexture)if(ze){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,ie.width,ie.height,ie.depth),I)if(y.layerUpdates.size>0){const $=wl(ie.width,ie.height,y.format,y.type);for(const Q of y.layerUpdates){const pe=ie.data.subarray(Q*$/ie.data.BYTES_PER_ELEMENT,(Q+1)*$/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,_e,Ce,pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ce,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,_e,Ce,ie.data);else if(y.isData3DTexture)ze?(it&&t.texStorage3D(s.TEXTURE_3D,ce,Ie,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ce,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,_e,Ce,ie.data);else if(y.isFramebufferTexture){if(it)if(ze)t.texStorage2D(s.TEXTURE_2D,ce,Ie,ie.width,ie.height);else{let $=ie.width,Q=ie.height;for(let pe=0;pe<ce;pe++)t.texImage2D(s.TEXTURE_2D,pe,Ie,$,Q,0,_e,Ce,null),$>>=1,Q>>=1}}else if($e.length>0){if(ze&&it){const $=Pe($e[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ie,$.width,$.height)}for(let $=0,Q=$e.length;$<Q;$++)ye=$e[$],ze?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,_e,Ce,ye):t.texImage2D(s.TEXTURE_2D,$,Ie,_e,Ce,ye);y.generateMipmaps=!1}else if(ze){if(it){const $=Pe(ie);t.texStorage2D(s.TEXTURE_2D,ce,Ie,$.width,$.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,Ce,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ie,_e,Ce,ie);m(y)&&p(j),we.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ne(T,y,z){if(y.image.length!==6)return;const j=Re(T,y),ee=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+z);const Z=n.get(ee);if(ee.version!==Z.__version||j===!0){t.activeTexture(s.TEXTURE0+z);const we=qe.getPrimaries(qe.workingColorSpace),de=y.colorSpace===Bn?null:qe.getPrimaries(y.colorSpace),ve=y.colorSpace===Bn||we===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!Ye&&!ie?_e[Q]=v(y.image[Q],!0,i.maxCubemapSize):_e[Q]=ie?y.image[Q].image:y.image[Q],_e[Q]=rt(y,_e[Q]);const Ce=_e[0],Ie=r.convert(y.format,y.colorSpace),ye=r.convert(y.type),$e=w(y.internalFormat,Ie,ye,y.colorSpace),ze=y.isVideoTexture!==!0,it=Z.__version===void 0||j===!0,I=ee.dataReady;let ce=L(y,Ce);ge(s.TEXTURE_CUBE_MAP,y);let $;if(Ye){ze&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,$e,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){$=_e[Q].mipmaps;for(let pe=0;pe<$.length;pe++){const ue=$[pe];y.format!==cn?Ie!==null?ze?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,ue.width,ue.height,Ie,ye,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,$e,ue.width,ue.height,0,Ie,ye,ue.data)}}}else{if($=y.mipmaps,ze&&it){$.length>0&&ce++;const Q=Pe(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){ze?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,Ie,ye,_e[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,_e[Q].width,_e[Q].height,0,Ie,ye,_e[Q].data);for(let pe=0;pe<$.length;pe++){const Ue=$[pe].image[Q].image;ze?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ue.width,Ue.height,Ie,ye,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,$e,Ue.width,Ue.height,0,Ie,ye,Ue.data)}}else{ze?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,ye,_e[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Ie,ye,_e[Q]);for(let pe=0;pe<$.length;pe++){const ue=$[pe];ze?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ie,ye,ue.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,$e,Ie,ye,ue.image[Q])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),Z.__version=ee.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function be(T,y,z,j,ee,Z){const we=r.convert(z.format,z.colorSpace),de=r.convert(z.type),ve=w(z.internalFormat,we,de,z.colorSpace),Ye=n.get(y),ie=n.get(z);if(ie.__renderTarget=y,!Ye.__hasExternalTextures){const _e=Math.max(1,y.width>>Z),Ce=Math.max(1,y.height>>Z);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,ve,_e,Ce,y.depth,0,we,de,null):t.texImage2D(ee,Z,ve,_e,Ce,0,we,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Ve(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,ee,ie.__webglTexture,0,We(y)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,ee,ie.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(T,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const j=y.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Z=S(y.stencilBuffer,ee),we=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=We(y);Ve(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,Z,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Z,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Z,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,T)}else{const j=y.textures;for(let ee=0;ee<j.length;ee++){const Z=j[ee],we=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),ve=w(Z.internalFormat,we,de,Z.colorSpace),Ye=We(y);z&&Ve(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,ve,y.width,y.height):Ve(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,ve,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ve,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const ee=j.__webglTexture,Z=We(y);if(y.depthTexture.format===Ii)Ve(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(y.depthTexture.format===zi)Ve(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(T){const y=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=j}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ke(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=s.createRenderbuffer(),he(y.__webglDepthbuffer[j],T,!1);else{const ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),he(y.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(T,y,z){const j=n.get(T);y!==void 0&&be(j.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&De(T)}function ct(T){const y=T.texture,z=n.get(T),j=n.get(y);T.addEventListener("dispose",E);const ee=T.textures,Z=T.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=y.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let ve=0;ve<y.mipmaps.length;ve++)z.__webglFramebuffer[de][ve]=s.createFramebuffer()}else z.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)z.__webglFramebuffer[de]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(we)for(let de=0,ve=ee.length;de<ve;de++){const Ye=n.get(ee[de]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Ve(T)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const ve=ee[de];z.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const Ye=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),_e=w(ve.internalFormat,Ye,ie,ve.colorSpace,T.isXRRenderTarget===!0),Ce=We(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,_e,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,z.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),he(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ge(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)be(z.__webglFramebuffer[de][ve],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else be(z.__webglFramebuffer[de],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,ve=ee.length;de<ve;de++){const Ye=ee[de],ie=n.get(Ye);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),ge(s.TEXTURE_2D,Ye),be(z.__webglFramebuffer,T,Ye,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),ge(de,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)be(z.__webglFramebuffer[ve],T,y,s.COLOR_ATTACHMENT0,de,ve);else be(z.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,de,0);m(y)&&p(de),t.unbindTexture()}T.depthBuffer&&De(T)}function Xe(T){const y=T.textures;for(let z=0,j=y.length;z<j;z++){const ee=y[z];if(m(ee)){const Z=b(T),we=n.get(ee).__webglTexture;t.bindTexture(Z,we),p(Z),t.unbindTexture()}}}const mt=[],U=[];function Zt(T){if(T.samples>0){if(Ve(T)===!1){const y=T.textures,z=T.width,j=T.height;let ee=s.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(T),de=y.length>1;if(de)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const Ye=n.get(y[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,ee,s.NEAREST),l===!0&&(mt.length=0,U.length=0,mt.push(s.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(mt.push(Z),U.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const Ye=n.get(y[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function We(T){return Math.min(i.maxSamples,T.samples)}function Ve(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function rt(T,y){const z=T.colorSpace,j=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Gi&&z!==Bn&&(qe.getTransfer(z)===nt?(j!==cn||ee!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ve}function qm(s,e){function t(n,i=Bn){let r;const a=qe.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===to)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return s.BYTE;if(n===Ql)return s.SHORT;if(n===cs)return s.UNSIGNED_SHORT;if(n===Ja)return s.INT;if(n===ri)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===ds)return s.HALF_FLOAT;if(n===ec)return s.ALPHA;if(n===tc)return s.RGB;if(n===cn)return s.RGBA;if(n===nc)return s.LUMINANCE;if(n===ic)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===zi)return s.DEPTH_STENCIL;if(n===sc)return s.RED;if(n===no)return s.RED_INTEGER;if(n===rc)return s.RG;if(n===io)return s.RG_INTEGER;if(n===so)return s.RGBA_INTEGER;if(n===js||n===Qs||n===Js||n===er)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===va||n===_a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ma||n===xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ma)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===wa||n===Ta||n===Ea||n===Pa||n===Aa||n===Ca||n===ka||n===Ra||n===Ia||n===La||n===Da||n===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===Ua||n===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tr)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===Fa||n===za||n===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Zm extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Rt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Km={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $n({vertexShader:jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eg extends Wi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new Jm,m=t.getContextAttributes();let p=null,b=null;const w=[],S=[],L=new Oe;let A=null;const E=new on;E.viewport=new pt;const C=new on;C.viewport=new pt;const M=[E,C],_=new Zm;let k=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=w[q];return ne===void 0&&(ne=new Zr,w[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=w[q];return ne===void 0&&(ne=new Zr,w[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=w[q];return ne===void 0&&(ne=new Zr,w[q]=ne),ne.getHandSpace()};function F(q){const ne=S.indexOf(q.inputSource);if(ne===-1)return;const be=w[ne];be!==void 0&&(be.update(q.inputSource,q.frame,c||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let q=0;q<w.length;q++){const ne=S[q];ne!==null&&(S[q]=null,w[q].disconnect(ne))}k=null,N=null,v.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,b=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ai(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,be=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?zi:Ii,be=m.stencil?Fi:ri);const ke={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ke),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new ai(u.textureWidth,u.textureHeight,{format:cn,type:Rn,depthTexture:new yc(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(q){for(let ne=0;ne<q.removed.length;ne++){const be=q.removed[ne],he=S.indexOf(be);he>=0&&(S[he]=null,w[he].disconnect(be))}for(let ne=0;ne<q.added.length;ne++){const be=q.added[ne];let he=S.indexOf(be);if(he===-1){for(let De=0;De<w.length;De++)if(De>=S.length){S.push(be),he=De;break}else if(S[De]===null){S[De]=be,he=De;break}if(he===-1)break}const ke=w[he];ke&&ke.connect(be)}}const X=new R,J=new R;function W(q,ne,be){X.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(be.matrixWorld);const he=X.distanceTo(J),ke=ne.projectionMatrix.elements,De=be.projectionMatrix.elements,He=ke[14]/(ke[10]-1),ct=ke[14]/(ke[10]+1),Xe=(ke[9]+1)/ke[5],mt=(ke[9]-1)/ke[5],U=(ke[8]-1)/ke[0],Zt=(De[8]+1)/De[0],We=He*U,Ve=He*Zt,Ae=he/(-U+Zt),rt=Ae*-U;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ke[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Pe=He+Ae,T=ct+Ae,y=We-rt,z=Ve+(he-rt),j=Xe*ct/T*Pe,ee=mt*ct/T*Pe;q.projectionMatrix.makePerspective(y,z,j,ee,Pe,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ne=q.near,be=q.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(be=v.depthFar)),_.near=C.near=E.near=ne,_.far=C.far=E.far=be,(k!==_.near||N!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),k=_.near,N=_.far),E.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,_.layers.mask=E.layers.mask|C.layers.mask;const he=q.parent,ke=_.cameras;oe(_,he);for(let De=0;De<ke.length;De++)oe(ke[De],he);ke.length===2?W(_,E,C):_.projectionMatrix.copy(E.projectionMatrix),me(q,_,he)};function me(q,ne,be){be===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let re=null;function ge(q,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let he=!1;be.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let De=0;De<be.length;De++){const He=be[De];let ct=null;if(f!==null)ct=f.getViewport(He);else{const mt=d.getViewSubImage(u,He);ct=mt.viewport,De===0&&(e.setRenderTargetTextures(b,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(b))}let Xe=M[De];Xe===void 0&&(Xe=new on,Xe.layers.enable(De),Xe.viewport=new pt,M[De]=Xe),Xe.matrix.fromArray(He.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(He.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ct.x,ct.y,ct.width,ct.height),De===0&&(_.matrix.copy(Xe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(Xe)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const De=d.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&v.init(e,De,i.renderState)}}for(let be=0;be<w.length;be++){const he=S[be],ke=w[be];he!==null&&ke!==void 0&&ke.update(he,ne,c||a)}re&&re(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Re=new _c;Re.setAnimationLoop(ge),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}}const Qn=new pn,tg=new lt;function ng(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,w,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,S=b.envMapRotation;w&&(m.envMap.value=w,Qn.copy(S),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Qn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ig(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const S=w.program;n.uniformBlockBinding(b,S)}function c(b,w){let S=i[b.id];S===void 0&&(g(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",m));const L=w.program;n.updateUBOMapping(b,L);const A=e.render.frame;r[b.id]!==A&&(u(b),r[b.id]=A)}function h(b){const w=d();b.__bindingPointIndex=w;const S=s.createBuffer(),L=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,S),S}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const w=i[b.id],S=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let A=0,E=S.length;A<E;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,_=C.length;M<_;M++){const k=C[M];if(f(k,A,M,L)===!0){const N=k.__offset,F=Array.isArray(k.value)?k.value:[k.value];let V=0;for(let K=0;K<F.length;K++){const X=F[K],J=v(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,N+V,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,w,S,L){const A=b.value,E=w+"_"+S;if(L[E]===void 0)return typeof A=="number"||typeof A=="boolean"?L[E]=A:L[E]=A.clone(),!0;{const C=L[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(b){const w=b.uniforms;let S=0;const L=16;for(let E=0,C=w.length;E<C;E++){const M=Array.isArray(w[E])?w[E]:[w[E]];for(let _=0,k=M.length;_<k;_++){const N=M[_],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,K=F.length;V<K;V++){const X=F[V],J=v(X),W=S%L,oe=W%J.boundary,me=W+oe;S+=oe,me!==0&&L-me<J.storage&&(S+=L-me),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=J.storage}}}const A=S%L;return A>0&&(S+=L-A),b.__size=S,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class sg{constructor(e={}){const{canvas:t=$h(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Gn,this.toneMappingExposure=1;const S=this;let L=!1,A=0,E=0,C=null,M=-1,_=null;const k=new pt,N=new pt;let F=null;const V=new Ge(0);let K=0,X=t.width,J=t.height,W=1,oe=null,me=null;const re=new pt(0,0,X,J),ge=new pt(0,0,X,J);let Re=!1;const q=new lo;let ne=!1,be=!1;const he=new lt,ke=new lt,De=new R,He=new pt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function mt(){return C===null?W:1}let U=n;function Zt(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),U===null){const D="webgl2";if(U=Zt(D,x),U===null)throw Zt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let We,Ve,Ae,rt,Pe,T,y,z,j,ee,Z,we,de,ve,Ye,ie,_e,Ce,Ie,ye,$e,ze,it,I;function ce(){We=new cp(U),We.init(),ze=new qm(U,We),Ve=new ip(U,We,e,ze),Ae=new $m(U,We),Ve.reverseDepthBuffer&&u&&Ae.buffers.depth.setReversed(!0),rt=new up(U),Pe=new km,T=new Ym(U,We,Ae,Pe,Ve,ze,rt),y=new rp(S),z=new lp(S),j=new _d(U),it=new tp(U,j),ee=new hp(U,j,rt,it),Z=new pp(U,ee,j,rt),Ie=new fp(U,Ve,T),ie=new sp(Pe),we=new Cm(S,y,z,We,Ve,it,ie),de=new ng(S,Pe),ve=new Im,Ye=new Fm(We),Ce=new ep(S,y,z,Ae,Z,f,l),_e=new Wm(S,Z,Ve),I=new ig(U,rt,Ve,Ae),ye=new np(U,We,rt),$e=new dp(U,We,rt),rt.programs=we.programs,S.capabilities=Ve,S.extensions=We,S.properties=Pe,S.renderLists=ve,S.shadowMap=_e,S.state=Ae,S.info=rt}ce();const $=new eg(S,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=We.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=We.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(X,J,!1))},this.getSize=function(x){return x.set(X,J)},this.setSize=function(x,D,B=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,J=D,t.width=Math.floor(x*W),t.height=Math.floor(D*W),B===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*W,J*W).floor()},this.setDrawingBufferSize=function(x,D,B){X=x,J=D,W=B,t.width=Math.floor(x*B),t.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(k)},this.getViewport=function(x){return x.copy(re)},this.setViewport=function(x,D,B,H){x.isVector4?re.set(x.x,x.y,x.z,x.w):re.set(x,D,B,H),Ae.viewport(k.copy(re).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(ge)},this.setScissor=function(x,D,B,H){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,D,B,H),Ae.scissor(N.copy(ge).multiplyScalar(W).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(x){Ae.setScissorTest(Re=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(x=!0,D=!0,B=!0){let H=0;if(x){let O=!1;if(C!==null){const se=C.texture.format;O=se===so||se===io||se===no}if(O){const se=C.texture.type,fe=se===Rn||se===ri||se===cs||se===Fi||se===eo||se===to,Me=Ce.getClearColor(),xe=Ce.getClearAlpha(),Le=Me.r,Ne=Me.g,Se=Me.b;fe?(g[0]=Le,g[1]=Ne,g[2]=Se,g[3]=xe,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Le,v[1]=Ne,v[2]=Se,v[3]=xe,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ve.dispose(),Ye.dispose(),Pe.dispose(),y.dispose(),z.dispose(),Z.dispose(),it.dispose(),I.dispose(),we.dispose(),$.dispose(),$.removeEventListener("sessionstart",_o),$.removeEventListener("sessionend",yo),Xn.stop()};function Q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=rt.autoReset,D=_e.enabled,B=_e.autoUpdate,H=_e.needsUpdate,O=_e.type;ce(),rt.autoReset=x,_e.enabled=D,_e.autoUpdate=B,_e.needsUpdate=H,_e.type=O}function ue(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ue(x){const D=x.target;D.removeEventListener("dispose",Ue),ut(D)}function ut(x){Pt(x),Pe.remove(x)}function Pt(x){const D=Pe.get(x).programs;D!==void 0&&(D.forEach(function(B){we.releaseProgram(B)}),x.isShaderMaterial&&we.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,H,O,se){D===null&&(D=ct);const fe=O.isMesh&&O.matrixWorld.determinant()<0,Me=zc(x,D,B,H,O);Ae.setMaterial(H,fe);let xe=B.index,Le=1;if(H.wireframe===!0){if(xe=ee.getWireframeAttribute(B),xe===void 0)return;Le=2}const Ne=B.drawRange,Se=B.attributes.position;let Ze=Ne.start*Le,st=(Ne.start+Ne.count)*Le;se!==null&&(Ze=Math.max(Ze,se.start*Le),st=Math.min(st,(se.start+se.count)*Le)),xe!==null?(Ze=Math.max(Ze,0),st=Math.min(st,xe.count)):Se!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Se.count));const at=st-Ze;if(at<0||at===1/0)return;it.setup(O,H,Me,B,xe);let Bt,Qe=ye;if(xe!==null&&(Bt=j.get(xe),Qe=$e,Qe.setIndex(Bt)),O.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*mt()),Qe.setMode(U.LINES)):Qe.setMode(U.TRIANGLES);else if(O.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Ae.setLineWidth(Te*mt()),O.isLineSegments?Qe.setMode(U.LINES):O.isLineLoop?Qe.setMode(U.LINE_LOOP):Qe.setMode(U.LINE_STRIP)}else O.isPoints?Qe.setMode(U.POINTS):O.isSprite&&Qe.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Te=O._multiDrawStarts,vn=O._multiDrawCounts,Je=O._multiDrawCount,nn=xe?j.get(xe).bytesPerElement:1,hi=Pe.get(H).currentProgram.getUniforms();for(let Gt=0;Gt<Je;Gt++)hi.setValue(U,"_gl_DrawID",Gt),Qe.render(Te[Gt]/nn,vn[Gt])}else if(O.isInstancedMesh)Qe.renderInstances(Ze,at,O.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,vn=Math.min(B.instanceCount,Te);Qe.renderInstances(Ze,at,vn)}else Qe.render(Ze,at)};function et(x,D,B){x.transparent===!0&&x.side===Jt&&x.forceSinglePass===!1?(x.side=Ht,x.needsUpdate=!0,vs(x,D,B),x.side=Vn,x.needsUpdate=!0,vs(x,D,B),x.side=Jt):vs(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),p=Ye.get(B),p.init(D),w.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),x!==B&&x.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const Me=se[fe];et(Me,B,O),H.add(Me)}else et(se,B,O),H.add(se)}),w.pop(),p=null,H},this.compileAsync=function(x,D,B=null){const H=this.compile(x,D,B);return new Promise(O=>{function se(){if(H.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){O(x);return}setTimeout(se,10)}We.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tn=null;function gn(x){tn&&tn(x)}function _o(){Xn.stop()}function yo(){Xn.start()}const Xn=new _c;Xn.setAnimationLoop(gn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(x){tn=x,$.setAnimationLoop(x),x===null?Xn.stop():Xn.start()},$.addEventListener("sessionstart",_o),$.addEventListener("sessionend",yo),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(D),D=$.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,C),p=Ye.get(x,w.length),p.init(D),w.push(p),ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(ke),be=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,be),m=ve.get(x,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&xr(se,D,-1/0,S.sortObjects)}xr(x,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(oe,me),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&Ce.addToRenderList(m,x),this.info.render.frame++,ne===!0&&ie.beginShadows();const B=p.state.shadowsArray;_e.render(B,x,D),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),D.isArrayCamera){const se=D.cameras;if(O.length>0)for(let fe=0,Me=se.length;fe<Me;fe++){const xe=se[fe];xo(H,O,x,xe)}Xe&&Ce.render(x);for(let fe=0,Me=se.length;fe<Me;fe++){const xe=se[fe];Mo(m,x,xe,xe.viewport)}}else O.length>0&&xo(H,O,x,D),Xe&&Ce.render(x),Mo(m,x,D);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(S,x,D),it.resetDefaultState(),M=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],ne===!0&&ie.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function xr(x,D,B,H){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){H&&He.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ke);const fe=Z.update(x),Me=x.material;Me.visible&&m.push(x,fe,Me,B,He.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const fe=Z.update(x),Me=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),He.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),He.copy(fe.boundingSphere.center)),He.applyMatrix4(x.matrixWorld).applyMatrix4(ke)),Array.isArray(Me)){const xe=fe.groups;for(let Le=0,Ne=xe.length;Le<Ne;Le++){const Se=xe[Le],Ze=Me[Se.materialIndex];Ze&&Ze.visible&&m.push(x,fe,Ze,B,He.z,Se)}}else Me.visible&&m.push(x,fe,Me,B,He.z,null)}}const se=x.children;for(let fe=0,Me=se.length;fe<Me;fe++)xr(se[fe],D,B,H)}function Mo(x,D,B,H){const O=x.opaque,se=x.transmissive,fe=x.transparent;p.setupLightsView(B),ne===!0&&ie.setGlobalState(S.clippingPlanes,B),H&&Ae.viewport(k.copy(H)),O.length>0&&gs(O,D,B),se.length>0&&gs(se,D,B),fe.length>0&&gs(fe,D,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function xo(x,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?ds:Rn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const se=p.state.transmissionRenderTarget[H.id],fe=H.viewport||k;se.setSize(fe.z,fe.w);const Me=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(V),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Ce.render(B);const xe=S.toneMapping;S.toneMapping=Gn;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ne===!0&&ie.setGlobalState(S.clippingPlanes,H),gs(x,B,H),T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,Ze=D.length;Se<Ze;Se++){const st=D[Se],at=st.object,Bt=st.geometry,Qe=st.material,Te=st.group;if(Qe.side===Jt&&at.layers.test(H.layers)){const vn=Qe.side;Qe.side=Ht,Qe.needsUpdate=!0,So(at,B,H,Bt,Qe,Te),Qe.side=vn,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se))}S.setRenderTarget(Me),S.setClearColor(V,K),Le!==void 0&&(H.viewport=Le),S.toneMapping=xe}function gs(x,D,B){const H=D.isScene===!0?D.overrideMaterial:null;for(let O=0,se=x.length;O<se;O++){const fe=x[O],Me=fe.object,xe=fe.geometry,Le=H===null?fe.material:H,Ne=fe.group;Me.layers.test(B.layers)&&So(Me,D,B,xe,Le,Ne)}}function So(x,D,B,H,O,se){x.onBeforeRender(S,D,B,H,O,se),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(S,D,B,H,x,se),O.transparent===!0&&O.side===Jt&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,S.renderBufferDirect(B,D,H,O,x,se),O.side=Vn,O.needsUpdate=!0,S.renderBufferDirect(B,D,H,O,x,se),O.side=Jt):S.renderBufferDirect(B,D,H,O,x,se),x.onAfterRender(S,D,B,H,O,se)}function vs(x,D,B){D.isScene!==!0&&(D=ct);const H=Pe.get(x),O=p.state.lights,se=p.state.shadowsArray,fe=O.state.version,Me=we.getParameters(x,O.state,se,D,B),xe=we.getProgramCacheKey(Me);let Le=H.programs;H.environment=x.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(x.isMeshStandardMaterial?z:y).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",Ue),Le=new Map,H.programs=Le);let Ne=Le.get(xe);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===fe)return wo(x,Me),Ne}else Me.uniforms=we.getUniforms(x),x.onBeforeCompile(Me,S),Ne=we.acquireProgram(Me,xe),Le.set(xe,Ne),H.uniforms=Me.uniforms;const Se=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=ie.uniform),wo(x,Me),H.needsLights=Hc(x),H.lightsStateVersion=fe,H.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function bo(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=nr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function wo(x,D){const B=Pe.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function zc(x,D,B,H,O){D.isScene!==!0&&(D=ct),T.resetTextureUnits();const se=D.fog,fe=H.isMeshStandardMaterial?D.environment:null,Me=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gi,xe=(H.isMeshStandardMaterial?z:y).get(H.envMap||fe),Le=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let at=Gn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=S.toneMapping);const Bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=Bt!==void 0?Bt.length:0,Te=Pe.get(H),vn=p.state.lights;if(ne===!0&&(be===!0||x!==_)){const Kt=x===_&&H.id===M;ie.setState(H,x,Kt)}let Je=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==vn.state.version||Te.outputColorSpace!==Me||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==xe||H.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ne||Te.morphTargets!==Se||Te.morphNormals!==Ze||Te.morphColors!==st||Te.toneMapping!==at||Te.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Te.__version=H.version);let nn=Te.currentProgram;Je===!0&&(nn=vs(H,D,O));let hi=!1,Gt=!1,Xi=!1;const ot=nn.getUniforms(),un=Te.uniforms;if(Ae.useProgram(nn.program)&&(hi=!0,Gt=!0,Xi=!0),H.id!==M&&(M=H.id,Gt=!0),hi||_!==x){Ae.buffers.depth.getReversed()?(he.copy(x.projectionMatrix),Yh(he),qh(he),ot.setValue(U,"projectionMatrix",he)):ot.setValue(U,"projectionMatrix",x.projectionMatrix),ot.setValue(U,"viewMatrix",x.matrixWorldInverse);const In=ot.map.cameraPosition;In!==void 0&&In.setValue(U,De.setFromMatrixPosition(x.matrixWorld)),Ve.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),_!==x&&(_=x,Gt=!0,Xi=!0)}if(O.isSkinnedMesh){ot.setOptional(U,O,"bindMatrix"),ot.setOptional(U,O,"bindMatrixInverse");const Kt=O.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ot.setValue(U,"boneTexture",Kt.boneTexture,T))}O.isBatchedMesh&&(ot.setOptional(U,O,"batchingTexture"),ot.setValue(U,"batchingTexture",O._matricesTexture,T),ot.setOptional(U,O,"batchingIdTexture"),ot.setValue(U,"batchingIdTexture",O._indirectTexture,T),ot.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&ot.setValue(U,"batchingColorTexture",O._colorsTexture,T));const Yi=B.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ie.update(O,B,nn),(Gt||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,ot.setValue(U,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(un.envMap.value=xe,un.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(un.envMapIntensity.value=D.environmentIntensity),Gt&&(ot.setValue(U,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&Bc(un,Xi),se&&H.fog===!0&&de.refreshFogUniforms(un,se),de.refreshMaterialUniforms(un,H,W,J,p.state.transmissionRenderTarget[x.id]),nr.upload(U,bo(Te),un,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(nr.upload(U,bo(Te),un,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(U,"center",O.center),ot.setValue(U,"modelViewMatrix",O.modelViewMatrix),ot.setValue(U,"normalMatrix",O.normalMatrix),ot.setValue(U,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Kt=H.uniformsGroups;for(let In=0,Ln=Kt.length;In<Ln;In++){const To=Kt[In];I.update(To,nn),I.bind(To,nn)}}return nn}function Bc(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Hc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,D,B){Pe.get(x.texture).__webglTexture=D,Pe.get(x.depthTexture).__webglTexture=B;const H=Pe.get(x);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const B=Pe.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,B=0){C=x,A=D,E=B;let H=!0,O=null,se=!1,fe=!1;if(x){const xe=Pe.get(x);if(xe.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(xe.__hasExternalTextures)T.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Se=x.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Pe.has(Se)&&(x.width!==Se.image.width||x.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ne=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?O=Ne[D][B]:O=Ne[D],se=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?O=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[B]:O=Ne,k.copy(x.viewport),N.copy(x.scissor),F=x.scissorTest}else k.copy(re).multiplyScalar(W).floor(),N.copy(ge).multiplyScalar(W).floor(),F=Re;if(Ae.bindFramebuffer(U.FRAMEBUFFER,O)&&H&&Ae.drawBuffers(x,O),Ae.viewport(k),Ae.scissor(N),Ae.setScissorTest(F),se){const xe=Pe.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,B)}else if(fe){const xe=Pe.get(x.texture),Le=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Le)}M=-1},this.readRenderTargetPixels=function(x,D,B,H,O,se,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Ae.bindFramebuffer(U.FRAMEBUFFER,Me);try{const xe=x.texture,Le=xe.format,Ne=xe.type;if(!Ve.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-H&&B>=0&&B<=x.height-O&&U.readPixels(D,B,H,O,ze.convert(Le),ze.convert(Ne),se)}finally{const xe=C!==null?Pe.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,H,O,se,fe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const xe=x.texture,Le=xe.format,Ne=xe.type;if(!Ve.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-H&&B>=0&&B<=x.height-O){Ae.bindFramebuffer(U.FRAMEBUFFER,Me);const Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),U.readPixels(D,B,H,O,ze.convert(Le),ze.convert(Ne),0);const Ze=C!==null?Pe.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Ze);const st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xh(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(Se),U.deleteSync(st),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,B=0){x.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const H=Math.pow(2,-B),O=Math.floor(x.image.width*H),se=Math.floor(x.image.height*H),fe=D!==null?D.x:0,Me=D!==null?D.y:0;T.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,fe,Me,O,se),Ae.unbindTexture()},this.copyTextureToTexture=function(x,D,B=null,H=null,O=0){x.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,x=arguments[1],D=arguments[2],O=arguments[3]||0,B=null);let se,fe,Me,xe,Le,Ne,Se,Ze,st;const at=x.isCompressedTexture?x.mipmaps[O]:x.image;B!==null?(se=B.max.x-B.min.x,fe=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,xe=B.min.x,Le=B.min.y,Ne=B.isBox3?B.min.z:0):(se=at.width,fe=at.height,Me=at.depth||1,xe=0,Le=0,Ne=0),H!==null?(Se=H.x,Ze=H.y,st=H.z):(Se=0,Ze=0,st=0);const Bt=ze.convert(D.format),Qe=ze.convert(D.type);let Te;D.isData3DTexture?(T.setTexture3D(D,0),Te=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Te=U.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Te=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const vn=U.getParameter(U.UNPACK_ROW_LENGTH),Je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),hi=U.getParameter(U.UNPACK_SKIP_ROWS),Gt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,at.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne);const Xi=x.isDataArrayTexture||x.isData3DTexture,ot=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const un=Pe.get(x),Yi=Pe.get(D),Kt=Pe.get(un.__renderTarget),In=Pe.get(Yi.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Ln=0;Ln<Me;Ln++)Xi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(x).__webglTexture,O,Ne+Ln),x.isDepthTexture?(ot&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,O,st+Ln),U.blitFramebuffer(xe,Le,se,fe,Se,Ze,se,fe,U.DEPTH_BUFFER_BIT,U.NEAREST)):ot?U.copyTexSubImage3D(Te,O,Se,Ze,st+Ln,xe,Le,se,fe):U.copyTexSubImage2D(Te,O,Se,Ze,st+Ln,xe,Le,se,fe);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ot?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Te,O,Se,Ze,st,se,fe,Me,Bt,Qe,at.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,O,Se,Ze,st,se,fe,Me,Bt,at.data):U.texSubImage3D(Te,O,Se,Ze,st,se,fe,Me,Bt,Qe,at):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,Se,Ze,se,fe,Bt,Qe,at.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,Se,Ze,at.width,at.height,Bt,at.data):U.texSubImage2D(U.TEXTURE_2D,O,Se,Ze,se,fe,Bt,Qe,at);U.pixelStorei(U.UNPACK_ROW_LENGTH,vn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt),O===0&&D.generateMipmaps&&U.generateMipmap(Te),Ae.unbindTexture()},this.copyTextureToTexture3D=function(x,D,B=null,H=null,O=0){return x.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,x=arguments[2],D=arguments[3],O=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,B,H,O)},this.initRenderTarget=function(x){Pe.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Ae.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,Ae.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class or{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new or(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let rg=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class ag{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new R;class lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wa extends oi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ti;const Qi=new R,Ei=new R,Pi=new R,Ai=new Oe,Ji=new Oe,wc=new lt,zs=new R,es=new R,Bs=new R,Tl=new Oe,Kr=new Oe,El=new Oe;class Pl extends yt{constructor(e=new Wa){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new It;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ag(t,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new lr(n,3,0,!1)),Ti.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Ti,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),wc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Pi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Hs(zs.set(-.5,-.5,0),Pi,a,Ei,i,r),Hs(es.set(.5,-.5,0),Pi,a,Ei,i,r),Hs(Bs.set(.5,.5,0),Pi,a,Ei,i,r),Tl.set(0,0),Kr.set(1,0),El.set(1,1);let o=e.ray.intersectTriangle(zs,es,Bs,!1,Qi);if(o===null&&(Hs(es.set(-.5,.5,0),Pi,a,Ei,i,r),Kr.set(0,1),o=e.ray.intersectTriangle(zs,Bs,es,!1,Qi),o===null))return;const l=e.ray.origin.distanceTo(Qi);l<e.near||l>e.far||t.push({distance:l,point:Qi.clone(),uv:Yt.getInterpolation(Qi,zs,es,Bs,Tl,Kr,El,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hs(s,e,t,n,i,r){Ai.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ji.x=r*Ai.x-i*Ai.y,Ji.y=i*Ai.x+r*Ai.y):Ji.copy(Ai),s.copy(e),s.x+=Ji.x,s.y+=Ji.y,s.applyMatrix4(wc)}class li extends oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cr=new R,hr=new R,Al=new lt,ts=new ao,Gs=new _r,jr=new R,Cl=new R;class Tc extends yt{constructor(e=new It,t=new li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)cr.fromBufferAttribute(t,i-1),hr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cr.distanceTo(hr);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=r,e.ray.intersectsSphere(Gs)===!1)return;Al.copy(i).invert(),ts.copy(e.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),b=h.getX(v+1),w=Ws(this,e,ts,l,p,b);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Ws(this,e,ts,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Ws(this,e,ts,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ws(this,e,ts,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ws(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(cr.fromBufferAttribute(a,i),hr.fromBufferAttribute(a,r),t.distanceSqToSegment(cr,hr,jr,Cl)>n)return;jr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jr);if(!(l<e.near||l>e.far))return{distance:l,point:Cl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const kl=new R,Rl=new R;class fs extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kl.fromBufferAttribute(t,i),Rl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kl.distanceTo(Rl);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dr extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ht extends It{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function b(){const S=new R,L=new R;let A=0;const E=(t-e)/n;for(let C=0;C<=r;C++){const M=[],_=C/r,k=_*(t-e)+e;for(let N=0;N<=i;N++){const F=N/i,V=F*l+o,K=Math.sin(V),X=Math.cos(V);L.x=k*K,L.y=-_*n+m,L.z=k*X,d.push(L.x,L.y,L.z),S.set(K,E,X).normalize(),u.push(S.x,S.y,S.z),f.push(F,1-_),M.push(g++)}v.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const _=v[M][C],k=v[M+1][C],N=v[M+1][C+1],F=v[M][C+1];(e>0||M!==0)&&(h.push(_,k,F),A+=3),(t>0||M!==r-1)&&(h.push(k,N,F),A+=3)}c.addGroup(p,A,0),p+=A}function w(S){const L=g,A=new Oe,E=new R;let C=0;const M=S===!0?e:t,_=S===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;const k=g;for(let N=0;N<=i;N++){const V=N/i*l+o,K=Math.cos(V),X=Math.sin(V);E.x=M*X,E.y=m*_,E.z=M*K,d.push(E.x,E.y,E.z),u.push(0,_,0),A.x=K*.5+.5,A.y=X*.5*_+.5,f.push(A.x,A.y),g++}for(let N=0;N<i;N++){const F=L+N,V=k+N;S===!0?h.push(V,V+1,F):h.push(V+1,V,F),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mr extends ht{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Vs=new R,$s=new R,Qr=new R,Xs=new Yt;class uo extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Li*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=Xs;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Xs.getNormal(Qr),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const w=(b+1)%3,S=d[b],L=d[w],A=Xs[h[b]],E=Xs[h[w]],C=`${S}_${L}`,M=`${L}_${S}`;M in u&&u[M]?(Qr.dot(u[M].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(E.x,E.y,E.z)),u[M]=null):C in u||(u[C]={index0:c[b],index1:c[w],normal:Qr.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Vs.fromBufferAttribute(o,v),$s.fromBufferAttribute(o,m),f.push(Vs.x,Vs.y,Vs.z),f.push($s.x,$s.y,$s.z)}this.setAttribute("position",new gt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class fo extends It{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new R,g=new Oe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,w=b,S=b+n+1,L=b+n+2,A=b+1;o.push(w,S,A),o.push(S,L,A)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class po extends It{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],w=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(i+A*r)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(i+A*r)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+S,1-w),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const w=h[p][b+1],S=h[p][b],L=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&f.push(w,S,A),(p!==n-1||l<Math.PI)&&f.push(S,L,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ee extends oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ec extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Jr=new lt,Il=new R,Ll=new R;class og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),Jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lg extends og{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends Ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cg extends Ec{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ol(){return performance.now()}const Ul=new lt;class Pc{constructor(e,t,n=0,i=1/0){this.ray=new ao(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(e,t=!0,n=[]){return Va(e,this,n,t),n.sort(Nl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Va(e[i],this,n,t);return n.sort(Nl),n}}function Nl(s,e){return s.distance-e.distance}function Va(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Va(r[a],e,t,!0)}}const Ys=new Vi;class Ac extends fs{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new It;r.setIndex(new qt(n,1)),r.setAttribute("position",new qt(i,3)),super(r,new li({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ys.setFromObject(this.object),Ys.isEmpty())return;const t=Ys.min,n=Ys.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Fl=new R;let qs,ea;class ur extends yt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",qs===void 0&&(qs=new It,qs.setAttribute("position",new gt([0,0,0,0,1,0],3)),ea=new ht(0,.5,1,5,1),ea.translate(0,-.5,0)),this.position.copy(t),this.line=new Tc(qs,new li({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new G(ea,new Wn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Fl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Fl,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const dg=.5;class ug{clock;running=!1;paused=!1;speedMultiplier=1;updateCallbacks=[];renderCallback=null;constructor(){this.clock=new hg(!1)}start(){this.running=!0,this.clock.start(),this.tick()}stop(){this.running=!1,this.clock.stop()}pause(){this.paused=!0}resume(){this.paused=!1}isPaused(){return this.paused}setSpeed(e){this.speedMultiplier=Math.max(0,Math.min(3,e))}getSpeed(){return this.speedMultiplier}onUpdate(e){return this.updateCallbacks.push(e),()=>{const t=this.updateCallbacks.indexOf(e);t>-1&&this.updateCallbacks.splice(t,1)}}onRender(e){this.renderCallback=e}tick=()=>{if(!this.running)return;requestAnimationFrame(this.tick);const e=this.clock.getDelta(),t=Math.min(e,.1),n=this.clock.getElapsedTime();e>dg&&bt.warn(`[GameLoop] Frame drop detected: ${e.toFixed(2)}s (${Math.round(1/e)} fps)`);const i=this.paused?0:t*this.speedMultiplier;for(const r of this.updateCallbacks)r(i,n);this.renderCallback&&this.renderCallback()}}class fg{events=new Map;on(e,t){return this.events.has(e)||this.events.set(e,new Set),this.events.get(e).add(t),()=>{this.events.get(e)?.delete(t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){this.events.get(e)?.delete(t)}emit(e,t){this.events.get(e)?.forEach(n=>n(t))}clear(){this.events.clear()}}const P=new fg;class pg{state={money:500,wave:1,phase:"build",gameMode:"normal",storedPallets:0,storageCapacity:0,pendingOrders:0,completedOrders:0,failedOrders:0,isPaused:!1,gameSpeed:1,isGameOver:!1,theme:"dark",floorExpansionCount:0,floorVerticalExpansionCount:0,workerLimit:5,workerCapacityExpansionCount:0};MAX_FAILED_ORDERS=3;get(e){return this.state[e]}set(e,t){const n=this.state[e];this.state[e]=t,e==="money"&&n!==t&&P.emit("money:changed",{oldValue:n,newValue:t})}getState(){return{...this.state}}addMoney(e){this.set("money",this.state.money+e)}spendMoney(e){return this.state.money>=e?(this.set("money",this.state.money-e),!0):!1}canAfford(e){return this.state.money>=e}setPhase(e){this.set("phase",e),e==="build"?P.emit("phase:build"):e==="reorg"?P.emit("phase:reorg"):P.emit("phase:operations")}setGameMode(e){this.set("gameMode",e)}nextWave(){this.set("wave",this.state.wave+1)}completeWave(){P.emit("wave:complete",{wave:this.state.wave})}updateStorageCapacity(e){this.set("storageCapacity",e)}addStoredPallet(){this.set("storedPallets",this.state.storedPallets+1),P.emit("pallet:stored",{total:this.state.storedPallets})}removeStoredPallet(){this.state.storedPallets>0&&(this.set("storedPallets",this.state.storedPallets-1),P.emit("pallet:picked",{total:this.state.storedPallets}))}addPendingOrder(){this.set("pendingOrders",this.state.pendingOrders+1)}completeOrder(){this.set("pendingOrders",Math.max(0,this.state.pendingOrders-1)),this.set("completedOrders",this.state.completedOrders+1),P.emit("order:fulfilled",{total:this.state.completedOrders})}failOrder(){this.set("pendingOrders",Math.max(0,this.state.pendingOrders-1)),this.recordFailure()}failInboundTruck(){this.recordFailure()}recordFailure(){this.set("failedOrders",this.state.failedOrders+1),P.emit("order:expired",{total:this.state.failedOrders});const e=this.state.gameMode==="challenge"?1:this.MAX_FAILED_ORDERS;this.state.failedOrders>=e&&this.gameOver()}increaseWorkerLimit(e=5){this.set("workerLimit",this.state.workerLimit+e)}resetFailedOrders(){this.set("failedOrders",0)}pause(){this.set("isPaused",!0),P.emit("game:pause")}resume(){this.set("isPaused",!1),P.emit("game:resume")}togglePause(){this.state.isPaused?this.resume():this.pause()}setSpeed(e){this.set("gameSpeed",Math.max(0,Math.min(3,e))),P.emit("ui:speed-change",{speed:this.state.gameSpeed})}setTheme(e){const t=this.state.theme;this.state.theme=e,t!==e&&P.emit("theme:changed",{theme:e})}toggleTheme(){this.setTheme(this.state.theme==="dark"?"light":"dark")}gameOver(){this.set("isGameOver",!0),P.emit("game:over",{wave:this.state.wave,completedOrders:this.state.completedOrders,money:this.state.money})}reset(){this.state={money:500,wave:1,phase:"build",gameMode:"normal",storedPallets:0,storageCapacity:0,pendingOrders:0,completedOrders:0,failedOrders:0,isPaused:!1,gameSpeed:1,isGameOver:!1,theme:"dark",floorExpansionCount:0,floorVerticalExpansionCount:0,workerLimit:5,workerCapacityExpansionCount:0}}serialize(){return JSON.stringify(this.state)}deserialize(e){try{const t=JSON.parse(e);this.state={...this.state,...t}}catch(t){console.error("Failed to deserialize game state:",t)}}}const Y=new pg;class mg{instance;ambientLight;directionalLight;fillLight;constructor(){this.instance=new rg,this.setupLighting(),this.setupFog(),this.setupEventListeners(),this.updateTheme(Y.get("theme"))}setupEventListeners(){P.on("theme:changed",({theme:e})=>{this.updateTheme(e)})}updateTheme(e){const t=e==="light",n=t?11193599:1710638;this.instance.background=new Ge(n),this.instance.fog instanceof or&&this.instance.fog.color.set(n),this.ambientLight&&(this.ambientLight.intensity=t?.6:.4),this.directionalLight&&(this.directionalLight.intensity=t?1:.8,this.directionalLight.color.set(t?16775920:16777215)),this.fillLight&&(this.fillLight.intensity=t?.4:.3)}setupLighting(){this.ambientLight=new cg(16777215,.4),this.instance.add(this.ambientLight),this.directionalLight=new Dl(16777215,.8),this.directionalLight.position.set(10,20,10),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=50,this.directionalLight.shadow.camera.left=-20,this.directionalLight.shadow.camera.right=20,this.directionalLight.shadow.camera.top=20,this.directionalLight.shadow.camera.bottom=-20,this.directionalLight.shadow.bias=-1e-4,this.instance.add(this.directionalLight),this.fillLight=new Dl(10011097,.3),this.fillLight.position.set(-10,10,-10),this.instance.add(this.fillLight)}setupFog(){this.instance.fog=new or(1710638,30,60)}add(e){this.instance.add(e)}remove(e){this.instance.remove(e)}}class gg{instance;zoom=15;minZoom=8;maxZoom=60;maxPan=15;panOffset=new R;targetPanOffset=new R;panSpeed=.1;rotationAngle=Math.PI/4;targetRotationAngle=Math.PI/4;rotationSpeed=.1;ISO_ANGLE=Math.atan(1/Math.sqrt(2));ROTATION=Math.PI/4;viewMode="isometric";constructor(e){const t=this.zoom;this.instance=new co(-t*e/2,t*e/2,t/2,-t/2,.1,100),this.setupIsometricPosition()}setupIsometricPosition(){this.instance.position.set(30*Math.cos(this.ROTATION)*Math.cos(this.ISO_ANGLE),30*Math.sin(this.ISO_ANGLE),30*Math.sin(this.ROTATION)*Math.cos(this.ISO_ANGLE)),this.instance.lookAt(0,0,0),this.instance.up.set(0,1,0)}resize(e){const t=this.zoom;this.instance.left=-t*e/2,this.instance.right=t*e/2,this.instance.top=t/2,this.instance.bottom=-t/2,this.instance.updateProjectionMatrix()}setZoom(e){this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,e));const t=window.innerWidth/window.innerHeight;this.resize(t)}getZoom(){return this.zoom}zoomIn(e=1){this.setZoom(this.zoom-e)}zoomOut(e=1){this.setZoom(this.zoom+e)}pan(e,t){const n=this.zoom*.002,i=this.viewMode==="top"?Math.PI/2:this.rotationAngle,r=new R(Math.cos(i+Math.PI/2),0,Math.sin(i+Math.PI/2)).normalize(),a=new R(Math.cos(i),0,Math.sin(i)).normalize();this.targetPanOffset.add(r.clone().multiplyScalar(e*n)),this.targetPanOffset.add(a.clone().multiplyScalar(-t*n)),this.targetPanOffset.clampScalar(-this.maxPan,this.maxPan)}resetPan(){this.targetPanOffset.set(0,0,0)}rotate(e){this.targetRotationAngle+=e}setRotation(e){this.targetRotationAngle=e}getRotation(){return this.rotationAngle}setView(e){this.viewMode=e,this.panOffset.set(0,0,0),this.targetPanOffset.set(0,0,0),this.rotationAngle=this.ROTATION,this.targetRotationAngle=this.ROTATION}getView(){return this.viewMode}setGridDimensions(e,t){const n=Math.max(e,t);this.maxZoom=n*3,this.maxPan=n*.75}setGridWidth(e){this.setGridDimensions(e,e)}update(){this.panOffset.lerp(this.targetPanOffset,this.panSpeed),this.rotationAngle+=(this.targetRotationAngle-this.rotationAngle)*this.rotationSpeed;const e=30;this.viewMode==="top"?(this.instance.position.set(0,e,0),this.instance.position.add(this.panOffset),this.instance.lookAt(this.panOffset.clone()),this.instance.up.set(0,0,-1)):(this.instance.position.set(e*Math.cos(this.rotationAngle)*Math.cos(this.ISO_ANGLE),e*Math.sin(this.ISO_ANGLE),e*Math.sin(this.rotationAngle)*Math.cos(this.ISO_ANGLE)),this.instance.position.add(this.panOffset),this.instance.lookAt(this.panOffset.clone()),this.instance.up.set(0,1,0))}screenToWorld(e,t,n=0){const i=e/window.innerWidth*2-1,r=-(t/window.innerHeight)*2+1,a=new Pc;a.setFromCamera(new Oe(i,r),this.instance);const o=new Tn(new R(0,1,0),-n),l=new R;return a.ray.intersectPlane(o,l),l||new R}}class vg{instance;constructor(e){this.instance=new sg({canvas:e,antialias:!0,alpha:!1}),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.instance.setSize(window.innerWidth,window.innerHeight),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Yl,this.instance.toneMapping=Zl,this.instance.toneMappingExposure=1}resize(e,t){this.instance.setSize(e,t)}render(e,t){this.instance.render(e,t)}dispose(){this.instance.dispose()}}class _g{_width;_height;cellSize;originX;originZ;get width(){return this._width}get height(){return this._height}cells=new Map;gridMesh;gridHelper;dockMesh;southDockMesh;northLabelMesh;southLabelMesh;northDockTexture;southDockTexture;highlightMesh;gridGroup;constructor(e=20,t=20,n=1){this._width=e,this._height=t,this.cellSize=n,this.originX=e/2,this.originZ=t/2,this.gridGroup=new Rt,this.initCells(),this.createVisuals(),this.createHighlight(),this.setupDockArea(),this.setupEventListeners(),this.updateTheme(Y.get("theme"))}setupEventListeners(){P.on("theme:changed",({theme:e})=>{this.updateTheme(e)})}updateTheme(e){const t=e==="light";this.gridMesh&&this.gridMesh.material.color.setHex(t?14870768:2963272),this.gridHelper&&this.gridGroup.remove(this.gridHelper);const n=t?13358560:4016210;this.gridHelper=this.createRectGridLines(n),this.gridGroup.add(this.gridHelper)}initCells(){for(let e=0;e<this._width;e++)for(let t=0;t<this._height;t++){const n=this.getKey(e,t);this.cells.set(n,{x:e,z:t,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0})}}setupDockArea(){this.applyDockRules(0,this._width-1)}applyDockRules(e,t){for(let n=e;n<=t;n++){const i=this.getCell(n,this._height-1);i&&(i.occupied||(i.type="empty"),i.buildable=!0,i.walkable=!1);const r=this.getCell(n,this._height-2);r&&(r.buildable=!1,r.walkable=!0);const a=this.getCell(n,0);a&&(a.occupied||(a.type="empty"),a.buildable=!0,a.walkable=!1);const o=this.getCell(n,1);o&&(o.buildable=!1,o.walkable=!0)}}createVisuals(){const e=new wt(this._width*this.cellSize,this._height*this.cellSize),t=new Ee({color:2963272,roughness:.8,metalness:.2});this.gridMesh=new G(e,t),this.gridMesh.rotation.x=-Math.PI/2,this.gridMesh.position.set((this._width/2-this.originX)*this.cellSize,0,(this._height/2-this.originZ)*this.cellSize),this.gridMesh.receiveShadow=!0,this.gridGroup.add(this.gridMesh),this.gridHelper=new yt,this.gridGroup.add(this.gridHelper),this.northDockTexture=this.createHazardStripesTexture(this._width);const n=new wt(this._width*this.cellSize,this.cellSize),i=new Ee({map:this.northDockTexture,roughness:.8,metalness:.1});this.dockMesh=new G(n,i),this.dockMesh.rotation.x=-Math.PI/2,this.dockMesh.position.set((this._width/2-this.originX)*this.cellSize,.02,(this._height/2-.5)*this.cellSize),this.dockMesh.receiveShadow=!0,this.gridGroup.add(this.dockMesh),this.southDockTexture=this.createHazardStripesTexture(this._width);const r=new wt(this._width*this.cellSize,this.cellSize),a=new Ee({map:this.southDockTexture,roughness:.8,metalness:.1});this.southDockMesh=new G(r,a),this.southDockMesh.rotation.x=-Math.PI/2,this.southDockMesh.position.set((this._width/2-this.originX)*this.cellSize,.02,(-this.originZ+.5)*this.cellSize),this.southDockMesh.receiveShadow=!0,this.gridGroup.add(this.southDockMesh);const o=new wt(4*this.cellSize,this.cellSize),l=new Wn({map:this.createDockLabelTexture("INBOUND"),transparent:!0,depthWrite:!1});this.northLabelMesh=new G(o,l),this.northLabelMesh.rotation.x=-Math.PI/2,this.northLabelMesh.position.set((this._width/2-this.originX)*this.cellSize,.03,(this._height/2-1.5)*this.cellSize),this.gridGroup.add(this.northLabelMesh);const c=new wt(4*this.cellSize,this.cellSize),h=new Wn({map:this.createDockLabelTexture("OUTBOUND"),transparent:!0,depthWrite:!1});this.southLabelMesh=new G(c,h),this.southLabelMesh.rotation.x=-Math.PI/2,this.southLabelMesh.position.set((this._width/2-this.originX)*this.cellSize,.03,(-this.originZ+1.5)*this.cellSize),this.gridGroup.add(this.southLabelMesh)}createRectGridLines(e){const t=this.cellSize,n=[];for(let r=0;r<=this._height;r++){const a=(r-this.originZ)*t,o=-this.originX*t,l=(this._width-this.originX)*t;n.push(o,.01,a,l,.01,a)}for(let r=0;r<=this._width;r++){const a=(r-this.originX)*t,o=-this.originZ*t,l=(this._height-this.originZ)*t;n.push(a,.01,o,a,.01,l)}const i=new It;return i.setAttribute("position",new gt(n,3)),new fs(i,new li({color:e}))}createHazardStripesTexture(e){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");if(i){i.fillStyle="#F5A623",i.fillRect(0,0,128,128),i.fillStyle="#1A1A1A";for(let o=-128;o<256;o+=64)i.beginPath(),i.moveTo(o,0),i.lineTo(o+32,0),i.lineTo(o+32+128,128),i.lineTo(o+128,128),i.closePath(),i.fill()}const r=new dr(n);return r.wrapS=ls,r.wrapT=ls,r.repeat.set(e/2,.5),r}createDockLabelTexture(e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");return n&&(n.font="bold 80px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#FFFFFF",n.fillText(e,256,64)),new dr(t)}createHighlight(){const e=new wt(this.cellSize*.95,this.cellSize*.95),t=new Wn({color:5164484,transparent:!0,opacity:.5,side:Jt});this.highlightMesh=new G(e,t),this.highlightMesh.rotation.x=-Math.PI/2,this.highlightMesh.position.y=.03,this.highlightMesh.visible=!1,this.gridGroup.add(this.highlightMesh)}getObject3D(){return this.gridGroup}rebuild(e,t){this._width=e,this._height=t,this.originX=e/2,this.originZ=t/2,this.cells.clear(),this.initCells(),this.gridMesh&&(this.gridMesh.geometry.dispose(),this.gridMesh.material.dispose(),this.gridGroup.remove(this.gridMesh)),this.gridHelper&&this.gridGroup.remove(this.gridHelper),this.dockMesh&&(this.dockMesh.geometry.dispose(),this.dockMesh.material.dispose(),this.gridGroup.remove(this.dockMesh)),this.southDockMesh&&(this.southDockMesh.geometry.dispose(),this.southDockMesh.material.dispose(),this.gridGroup.remove(this.southDockMesh)),this.northLabelMesh&&(this.northLabelMesh.geometry.dispose(),this.northLabelMesh.material.dispose(),this.gridGroup.remove(this.northLabelMesh)),this.southLabelMesh&&(this.southLabelMesh.geometry.dispose(),this.southLabelMesh.material.dispose(),this.gridGroup.remove(this.southLabelMesh)),this.highlightMesh&&(this.highlightMesh.geometry.dispose(),this.highlightMesh.material.dispose(),this.gridGroup.remove(this.highlightMesh)),this.createVisuals(),this.createHighlight(),this.setupDockArea(),this.updateTheme(Y.get("theme"))}getGroundMesh(){return this.gridMesh}getKey(e,t){return`${e},${t}`}getCell(e,t){return this.cells.get(this.getKey(e,t))||null}worldToGrid(e){const t=Math.floor(e.x/this.cellSize+this.originX),n=Math.floor(e.z/this.cellSize+this.originZ);return t>=0&&t<this._width&&n>=0&&n<this._height?{x:t,z:n}:null}gridToWorld(e,t){return new R((e-this.originX+.5)*this.cellSize,0,(t-this.originZ+.5)*this.cellSize)}canPlace(e,t){const n=this.getCell(e,t);return n?n.buildable&&!n.occupied:!1}place(e,t,n,i){if(!this.canPlace(e,t))return!1;const r=this.getCell(e,t);if(!r)return!1;r.occupied=!0,r.type=i,r.entity=n,r.walkable=i!=="rack"&&i!=="dock"&&i!=="conveyor"&&i!=="floor";const a=this.gridToWorld(e,t);return n.mesh.position.copy(a),P.emit("entity:placed",{x:e,z:t,type:i,entity:n}),!0}remove(e,t){const n=this.getCell(e,t);if(!n||!n.entity)return null;const i=n.entity,r=n.type;return n.occupied=!1,n.type="empty",n.entity=null,n.walkable=!0,n.buildable=!0,P.emit("entity:removed",{x:e,z:t,type:r,entity:i}),i}highlightCell(e,t){const n=this.worldToGrid(e);if(n){const i=this.canPlace(n.x,n.z),r=t&&i,a=this.gridToWorld(n.x,n.z);this.highlightMesh.position.set(a.x,.03,a.z),this.highlightMesh.material.color.setHex(r?5164484:16739179),this.highlightMesh.visible=!0}else this.highlightMesh.visible=!1}hideHighlight(){this.highlightMesh.visible=!1}getCellsByType(e){const t=[];return this.cells.forEach(n=>{n.type===e&&t.push(n)}),t}getNeighbors(e,t){const n=[],i=[{dx:0,dz:1},{dx:0,dz:-1},{dx:1,dz:0},{dx:-1,dz:0}];for(const{dx:r,dz:a}of i){const o=this.getCell(e+r,t+a);o&&o.walkable&&n.push(o)}return n}isInBounds(e,t){return e>=0&&e<this._width&&t>=0&&t<this._height}expand(e){if(e<=0)return;const t=Math.floor(e/2),n=e-t,i=this._width;if(this._width+=e,t>0){const r=Array.from(this.cells.entries());this.cells.clear();for(const[,a]of r)a.x+=t,this.cells.set(this.getKey(a.x,a.z),a);this.originX+=t}for(let r=0;r<t;r++)for(let a=0;a<this._height;a++)this.cells.set(this.getKey(r,a),{x:r,z:a,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});for(let r=i+t;r<this._width;r++)for(let a=0;a<this._height;a++)this.cells.set(this.getKey(r,a),{x:r,z:a,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});t>0&&this.applyDockRules(0,t-1),n>0&&this.applyDockRules(i+t,this._width-1),this.gridMesh.geometry.dispose(),this.gridMesh.geometry=new wt(this._width*this.cellSize,this._height*this.cellSize),this.gridMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.dockMesh.geometry.dispose(),this.dockMesh.geometry=new wt(this._width*this.cellSize,this.cellSize),this.dockMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.northDockTexture.repeat.set(this._width/2,.5),this.northDockTexture.needsUpdate=!0,this.southDockMesh.geometry.dispose(),this.southDockMesh.geometry=new wt(this._width*this.cellSize,this.cellSize),this.southDockMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.southDockTexture.repeat.set(this._width/2,.5),this.southDockTexture.needsUpdate=!0,this.updateTheme(Y.get("theme")),P.emit("grid:expanded",{width:this._width,height:this._height,shiftX:t,shiftZ:0})}expandVertical(e){if(e<=0)return;const t=this._height;this._height+=e;for(let n=0;n<this._width;n++){const i=this.getCell(n,t-1);i&&(i.walkable=!0);const r=this.getCell(n,t-2);r&&(r.buildable=!0)}for(let n=t;n<this._height;n++)for(let i=0;i<this._width;i++)this.cells.set(this.getKey(i,n),{x:i,z:n,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});this.applyDockRules(0,this._width-1),this.gridMesh.geometry.dispose(),this.gridMesh.geometry=new wt(this._width*this.cellSize,this._height*this.cellSize),this.gridMesh.position.setZ((this._height/2-this.originZ)*this.cellSize),this.dockMesh.position.setZ((this._height-this.originZ-.5)*this.cellSize),this.northLabelMesh.position.setZ((this._height-this.originZ-1.5)*this.cellSize),this.updateTheme(Y.get("theme")),P.emit("grid:expanded",{width:this._width,height:this._height,shiftX:0,shiftZ:0})}}class ci{id;type;mesh;gridX=0;gridZ=0;constructor(e){this.id=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,this.type=e,this.mesh=new Rt,this.mesh.userData.entityId=this.id,this.mesh.userData.entityType=e}setGridPosition(e,t){this.gridX=e,this.gridZ=t}getGridPosition(){return{x:this.gridX,z:this.gridZ}}setWorldPosition(e){this.mesh.position.copy(e)}getWorldPosition(){return this.mesh.position.clone()}update(e){}dispose(){this.mesh.traverse(e=>{e instanceof G&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}toData(){return{id:this.id,type:this.type,gridX:this.gridX,gridZ:this.gridZ}}}let Cc,kc,ir,sr,Rc,Ic,zl=!1;function yg(){zl||(zl=!0,Cc=new ae(.9,.05,.9),kc=new Ee({color:9132587,roughness:.9,metalness:.1}),ir=new ae(.8,.3,.8),sr=new Ee({color:13215339,roughness:.8,metalness:.1}),Rc=new ae(.3,.03,.3),Ic=new Ee({color:4871528,roughness:.7,metalness:.2}))}function dn(){yg();const s=new Rt,e=new G(Cc,kc);e.position.set(0,.025,0),e.castShadow=!0,e.receiveShadow=!0,s.add(e);const t=new G(ir,sr);t.position.set(0,.2,0),t.castShadow=!0,t.receiveShadow=!0,s.add(t);const n=new G(ir,sr);n.position.set(0,.5,0),n.castShadow=!0,n.receiveShadow=!0,s.add(n);const i=new G(ir,sr);i.position.set(0,.8,0),i.castShadow=!0,i.receiveShadow=!0,s.add(i);const r=new G(Rc,Ic);return r.position.set(0,.19,0),r.castShadow=!0,s.add(r),s}class Lc extends ci{contents=1;constructor(){super("pallet"),this.createMesh()}createMesh(){const e=dn();this.mesh.add(e)}}class kn extends ci{static CONTAINER_BACK_OFFSET=1.8;static ANIM_DURATION_MS=2e3;static ANIM_DURATION_SECONDS=kn.ANIM_DURATION_MS/1e3;state="arriving";direction="inbound";pallets=[];maxPallets=4;dockPosition=0;truckDock=null;containerMesh=null;palletMeshes=[];palletCountSprite=null;palletCountCanvas=null;palletCountTexture=null;deadlineTime=0;deadlineMaxTime=0;deadlineActive=!1;timerSprite=null;timerCanvas=null;timerTexture=null;flashPhase=0;constructor(e=4,t=0,n){super("truck"),this.maxPallets=e,this.dockPosition=t,this.truckDock=n,this.createMesh(),this.applyScaleForPallets(e),this.createPalletVisuals(e),this.createPalletCountIndicator()}applyScaleForPallets(e){const t=Math.max(.7,Math.min(1.6,1+(e-4)*.05));this.mesh.scale.set(t,t,t)}createMesh(){const e=new ae(1.2,.9,1),t=new Ee({color:4020864,roughness:.6,metalness:.4}),n=new G(e,t);n.position.set(0,.5,-1.6),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new ae(.9,.4,.02),r=new Ee({color:8900331,roughness:.2,metalness:.8}),a=new G(i,r);a.position.set(0,.75,-1.1),this.mesh.add(a);const o=new ae(1.8,1.2,2.8),l=new Ee({color:7438486,roughness:.7,metalness:.3});this.containerMesh=new G(o,l),this.containerMesh.position.set(0,.65,.4),this.containerMesh.castShadow=!0,this.containerMesh.receiveShadow=!0,this.mesh.add(this.containerMesh);const c=new ae(1.65,1,.08),h=new Ee({color:4871528,roughness:.7,metalness:.4}),d=new G(c,h);d.position.set(0,.6,1.85),d.name="containerDoor",d.castShadow=!0,this.mesh.add(d);const u=new ht(.22,.22,.18,12),f=new Ee({color:1712172,roughness:.9,metalness:.1});[[-.65,.22,-1.5],[.65,.22,-1.5],[-.65,.22,0],[.65,.22,0],[-.65,.22,.8],[.65,.22,.8]].forEach(([v,m,p])=>{const b=new G(u,f);b.rotation.z=Math.PI/2,b.position.set(v,m,p),b.castShadow=!0,this.mesh.add(b)})}createPalletVisuals(e){const t=[[-.35,.25,-.3],[.35,.25,-.3],[-.35,.25,.4],[.35,.25,.4]];for(let n=0;n<e;n++){const i=dn();i.scale.set(.35,.35,.35),i.position.set(t[n%4][0],t[n%4][1],t[n%4][2]),this.containerMesh&&this.containerMesh.add(i),this.palletMeshes.push(i)}}createPalletCountIndicator(){this.palletCountCanvas=document.createElement("canvas"),this.palletCountCanvas.width=128,this.palletCountCanvas.height=64,this.palletCountTexture=new dr(this.palletCountCanvas),this.palletCountTexture.minFilter=en;const e=new Wa({map:this.palletCountTexture,transparent:!0,depthTest:!1});this.palletCountSprite=new Pl(e),this.palletCountSprite.scale.set(1,.5,1),this.palletCountSprite.position.set(0,1.8,.4),this.mesh.add(this.palletCountSprite),this.updatePalletCountIndicator()}updatePalletCountIndicator(){if(!this.palletCountCanvas||!this.palletCountTexture)return;const e=this.palletCountCanvas.getContext("2d");if(!e)return;const t=this.palletMeshes.length,n=this.maxPallets;e.clearRect(0,0,this.palletCountCanvas.width,this.palletCountCanvas.height),e.fillStyle=t>0?"rgba(59, 130, 246, 0.9)":"rgba(34, 197, 94, 0.9)",e.beginPath(),e.roundRect(24,12,80,40,16),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.8)",e.lineWidth=2,e.stroke(),e.fillStyle="white",e.font="bold 24px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(`${t}/${n}`,64,32),this.palletCountTexture.needsUpdate=!0}dock(){this.state="docked";const e=this.mesh.getObjectByName("containerDoor");e&&(e.rotation.y=-Math.PI/2,e.position.x=.9)}unloadPallet(){if(this.palletMeshes.length===0)return null;this.state="unloading";const e=this.palletMeshes.pop();e&&this.containerMesh&&(this.containerMesh.remove(e),e.traverse(n=>{n instanceof G&&(n.geometry?.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()))})),this.updatePalletCountIndicator();const t=new Lc;return this.palletMeshes.length===0&&(this.state="docked"),t}loadPallet(){if(this.palletMeshes.length>=this.maxPallets)return console.warn("[Truck] Cannot load pallet: truck is full"),!1;this.state="loading";const e=[[-.35,.25,-.3],[.35,.25,-.3],[-.35,.25,.4],[.35,.25,.4]],t=this.palletMeshes.length%4,n=dn();return n.scale.set(.35,.35,.35),n.position.set(e[t][0],e[t][1],e[t][2]),this.containerMesh&&this.containerMesh.add(n),this.palletMeshes.push(n),this.updatePalletCountIndicator(),!0}canLoadPallet(){return this.palletMeshes.length<this.maxPallets&&(this.state==="docked"||this.state==="loading")}isFullyLoaded(){return this.palletMeshes.length>=this.maxPallets}getPalletsRemaining(){return this.palletMeshes.length}depart(){this.state="departing";const e=this.mesh.getObjectByName("containerDoor");e&&(e.rotation.y=0,e.position.x=0)}getAccessPositions(){const e=this.getWorldPosition(),t=this.mesh.rotation.y,n=new R(0,0,2.3);n.applyAxisAngle(new R(0,1,0),t);const i=e.clone().add(n),r=t+Math.PI;return[{position:i,rotation:r}]}animateArrival(e,t){const n=this.mesh.position.z,i=e,r=kn.ANIM_DURATION_MS,a=Date.now(),o=()=>{const l=Date.now()-a,c=Math.min(1,l/r),h=1-Math.pow(1-c,3);this.mesh.position.z=n+(i-n)*h,c<1?requestAnimationFrame(o):(this.dock(),t&&t())};o()}animateDeparture(e,t){this.depart();const n=this.mesh.position.z,i=n+3*e,r=kn.ANIM_DURATION_MS,a=Date.now(),o=()=>{const l=Date.now()-a,c=Math.min(1,l/r),h=c*c;this.mesh.position.z=n+(i-n)*h,c<1?requestAnimationFrame(o):(this.state="gone",t&&t())};o()}setDeadline(e){this.deadlineTime=e,this.deadlineMaxTime=e,this.deadlineActive=!0,this.createTimerIndicator()}getDeadlineTime(){return this.deadlineTime}isDeadlineActive(){return this.deadlineActive}createTimerIndicator(){if(this.timerSprite)return;this.timerCanvas=document.createElement("canvas"),this.timerCanvas.width=128,this.timerCanvas.height=128,this.timerTexture=new dr(this.timerCanvas),this.timerTexture.minFilter=en;const e=new Wa({map:this.timerTexture,transparent:!0,depthTest:!1});this.timerSprite=new Pl(e),this.timerSprite.scale.set(1.4,1.4,1),this.timerSprite.position.set(0,2.6,.4),this.mesh.add(this.timerSprite),this.renderTimerCanvas(1)}renderTimerCanvas(e,t=!0){if(!this.timerCanvas||!this.timerTexture)return;const n=this.timerCanvas.getContext("2d");if(!n)return;const i=this.timerCanvas.width,r=i/2,a=i/2,o=54,l=36;if(n.clearRect(0,0,i,i),!t){this.timerTexture.needsUpdate=!0;return}if(n.beginPath(),n.arc(r,a,o,0,Math.PI*2),n.arc(r,a,l,0,Math.PI*2,!0),n.fillStyle="rgba(50, 50, 50, 0.7)",n.fill(),e>0){let c,h,d;if(e>.5){const v=(e-.5)/.5;c=Math.round(255*(1-v)),h=220,d=0}else{const v=e/.5;c=255,h=Math.round(220*v),d=0}const u=`rgba(${c},${h},${d},0.95)`,f=-Math.PI/2,g=f+e*Math.PI*2;n.beginPath(),n.arc(r,a,o,f,g),n.arc(r,a,l,g,f,!0),n.closePath(),n.fillStyle=u,n.fill()}n.beginPath(),n.arc(r,a,6,0,Math.PI*2),n.fillStyle="rgba(255,255,255,0.6)",n.fill(),this.timerTexture.needsUpdate=!0}update(e){if(this.deadlineActive&&this.deadlineMaxTime>0){this.deadlineTime=Math.max(0,this.deadlineTime-e);const t=this.deadlineTime/this.deadlineMaxTime;if(t<.2){this.flashPhase+=e*Math.PI*4;const i=Math.sin(this.flashPhase)>=0;this.renderTimerCanvas(t,i)}else this.renderTimerCanvas(t)}}}function mo(s){const e=Math.floor(1+s*.5),t=Math.floor(2+s*.3),n=Math.max(1,e-1);return{truckCount:e,palletsPerTruck:t,timeBetweenTrucks:Math.max(8,15-s*.5),totalWaveTime:Math.min(180,60+s*10),outboundOrderCount:n}}const Bl=180,Dc=200;class Mg{grid;scene;activeTrucks=[];waveTimer=0;trucksSpawned=0;totalPalletsToUnload=0;palletsUnloaded=0;isWaveActive=!1;isReorgWave=!1;availableDocks=new Set;outboundActiveCallback=null;pendingOrdersCallback=null;automatedDockPositionsCallback=null;constructor(e,t){this.scene=e,this.grid=t}setOutboundActiveCallback(e){this.outboundActiveCallback=e}setPendingOrdersCallback(e){this.pendingOrdersCallback=e}setAutomatedDockPositionsCallback(e){this.automatedDockPositionsCallback=e}waveConfigOverride=null;setWaveConfigOverride(e){this.waveConfigOverride=e}getWaveConfig(e){return this.waveConfigOverride?this.waveConfigOverride:mo(e)}startWave(){const e=Y.get("wave"),t=this.getWaveConfig(e);this.isWaveActive=!0,this.waveTimer=t.totalWaveTime,this.trucksSpawned=0,this.totalPalletsToUnload=t.truckCount*t.palletsPerTruck,this.palletsUnloaded=0;const n=this.grid.getCellsByType("dock").filter(i=>i.z===this.grid.height-1).map(i=>i.x);this.availableDocks=new Set(n),P.emit("wave:start",{wave:e,config:t,totalPallets:this.totalPalletsToUnload}),this.spawnTruck(t)}startReorgWave(){const e=Y.get("wave");this.isWaveActive=!0,this.isReorgWave=!0,this.waveTimer=Bl,this.trucksSpawned=0,this.totalPalletsToUnload=0,this.palletsUnloaded=0,P.emit("reorg:start",{wave:e,duration:Bl})}spawnTruck(e){if(this.trucksSpawned>=e.truckCount)return;const t=this.grid.getCellsByType("dock").filter(d=>d.z===this.grid.height-1).map(d=>d.x);this.availableDocks.clear();for(const d of t)this.activeTrucks.some(f=>f.dockPosition===d&&f.state!=="gone")||this.availableDocks.add(d);if(this.availableDocks.size===0)return;const n=this.automatedDockPositionsCallback?.()??new Set,i=Array.from(this.availableDocks).filter(d=>n.has(d)),r=i.length>0?i:Array.from(this.availableDocks),a=r[Math.floor(Math.random()*r.length)];this.availableDocks.delete(a);const o=this.grid.getCell(a,this.grid.height-1)?.entity||null,l=new kn(e.palletsPerTruck,a,o),c=this.grid.gridToWorld(a,this.grid.height-1);l.mesh.position.set(c.x,0,c.z+3),l.mesh.rotation.y=Math.PI,this.scene.add(l.mesh),this.activeTrucks.push(l),this.trucksSpawned++,l.setDeadline(Math.max(0,this.waveTimer));const h=c.z+kn.CONTAINER_BACK_OFFSET;l.animateArrival(h,()=>{P.emit("truck:docked",{truck:l,dockX:a,dockZ:this.grid.height-1}),P.emit("truck:arrived",{dockPosition:a,pallets:e.palletsPerTruck})})}unloadPalletFromTruck(e){if(e.state!=="docked"&&e.state!=="unloading"||!e.unloadPallet())return null;this.palletsUnloaded++;const n=e.mesh.position.clone();return new R(n.x,0,n.z-1)}getActiveTrucks(){return this.activeTrucks.filter(e=>e.state==="docked"||e.state==="unloading")}getTruckWithPallets(){return this.activeTrucks.find(e=>(e.state==="docked"||e.state==="unloading")&&e.getPalletsRemaining()>0)||null}lastProgressUpdate=0;update(e){if(!this.isWaveActive)return;if(this.waveTimer-=e,this.isReorgWave){this.lastProgressUpdate+=e,this.lastProgressUpdate>=1&&(this.lastProgressUpdate=0,P.emit("reorg:progress",{timeRemaining:Math.max(0,this.waveTimer)})),this.checkWaveComplete();return}const t=this.getWaveConfig(Y.get("wave"));for(this.lastProgressUpdate+=e,this.lastProgressUpdate>=1&&(this.lastProgressUpdate=0,P.emit("wave:progress",{timeRemaining:Math.max(0,this.waveTimer),palletsUnloaded:this.palletsUnloaded,totalPallets:this.totalPalletsToUnload,trucksRemaining:t.truckCount-this.trucksSpawned+this.activeTrucks.length}));this.trucksSpawned<t.truckCount;){const i=this.trucksSpawned;if(this.spawnTruck(t),this.trucksSpawned===i)break}this.activeTrucks.forEach(i=>i.update(e)),this.activeTrucks.forEach(i=>{i.state==="docked"&&i.getPalletsRemaining()===0&&(console.log("[WaveManager] Truck empty, initiating departure"),this.truckDepart(i))});const n=this.activeTrucks.length;this.activeTrucks=this.activeTrucks.filter(i=>i.state==="gone"?(console.log("[WaveManager] Removing gone truck from activeTrucks"),this.scene.remove(i.mesh),i.dispose(),!1):!0),n!==this.activeTrucks.length&&console.log(`[WaveManager] Trucks remaining: ${this.activeTrucks.length}, spawned: ${this.trucksSpawned}`),this.checkWaveComplete()}truckDepart(e){this.availableDocks.add(e.dockPosition),e.animateDeparture(1,()=>{console.log("[WaveManager] Truck departure animation complete, setting state to gone")})}checkWaveComplete(){if(this.isReorgWave)return this.waveTimer<=0?(console.log("[WaveManager] Reorg wave complete! Emitting reorg:complete event"),this.isWaveActive=!1,this.isReorgWave=!1,P.emit("reorg:complete"),!0):!1;const e=this.getWaveConfig(Y.get("wave")),t=this.trucksSpawned>=e.truckCount,n=this.activeTrucks.length===0,i=this.outboundActiveCallback?this.outboundActiveCallback():!1,r=this.pendingOrdersCallback?this.pendingOrdersCallback():!1;return this.waveTimer<=0||t&&n&&!i&&!r?(this.activeTrucks.forEach(a=>{a.getPalletsRemaining()>0&&Y.failInboundTruck()}),console.log("[WaveManager] Wave complete! Emitting wave:complete event"),this.isWaveActive=!1,Y.completeWave(),!0):!1}isActive(){return this.isWaveActive}getWaveProgress(){return{palletsUnloaded:this.palletsUnloaded,totalPallets:this.totalPalletsToUnload,timeRemaining:Math.max(0,this.waveTimer)}}serialize(){return JSON.stringify({isWaveActive:this.isWaveActive,waveTimer:this.waveTimer,trucksSpawned:this.trucksSpawned,totalPalletsToUnload:this.totalPalletsToUnload,palletsUnloaded:this.palletsUnloaded})}restoreFromSave(e){try{const t=JSON.parse(e);this.isWaveActive=t.isWaveActive??!1,this.waveTimer=t.waveTimer??0,this.trucksSpawned=t.trucksSpawned??0,this.totalPalletsToUnload=t.totalPalletsToUnload??0,this.palletsUnloaded=t.palletsUnloaded??0}catch(t){console.error("Failed to restore wave state:",t)}}reset(){this.activeTrucks.forEach(e=>{this.scene.remove(e.mesh),e.dispose()}),this.activeTrucks=[],this.isWaveActive=!1,this.trucksSpawned=0,this.palletsUnloaded=0,this.waveConfigOverride=null}}const ps={general:10011097,unloading:16749824,storage:5025616,picking:10233776,loading:16007990};class kt extends ci{_storageType="general";wireframeMaterial=null;get storageType(){return this._storageType}set storageType(e){this._storageType=e,this.wireframeMaterial&&this.wireframeMaterial.color.setHex(ps[e])}}class Xt extends kt{capacity=4;storedPallets=0;ownedByStackerCrane=!1;palletMeshes=[];levelHeights;constructor(e=4){super("rack"),this.capacity=e,this.levelHeights=[];for(let t=0;t<e;t++)this.levelHeights.push(.2+t*1.2);this.createMesh()}createMesh(){const e=this.levelHeights[this.capacity-1]+1.2,t=new ae(.08,e,.08),n=new Ee({color:2201331,roughness:.7,metalness:.5});[[-.45,e/2,-.45],[.45,e/2,-.45],[-.45,e/2,.45],[.45,e/2,.45]].forEach(([v,m,p])=>{const b=new G(t,n);b.position.set(v,m,p),b.castShadow=!0,b.receiveShadow=!0,this.mesh.add(b)});const r=new Ee({color:16739125,roughness:.8,metalness:.3}),a=.04,o=1;this.levelHeights.forEach((v,m)=>{const p=v-.05,b=new G(new ae(o,a,a),r);b.position.set(0,p,o/2),b.castShadow=!0,b.receiveShadow=!0,this.mesh.add(b);const w=new G(new ae(o,a,a),r);w.position.set(0,p,-o/2),w.castShadow=!0,w.receiveShadow=!0,this.mesh.add(w);const S=new G(new ae(a,a,o),r);S.position.set(-o/2,p,0),S.castShadow=!0,S.receiveShadow=!0,this.mesh.add(S);const L=new G(new ae(a,a,o),r);L.position.set(o/2,p,0),L.castShadow=!0,L.receiveShadow=!0,this.mesh.add(L);const A=Math.sqrt(o*o+o*o),E=new G(new ae(A,a,a),r);E.position.set(0,p,0),E.rotation.y=Math.PI/4,E.castShadow=!0,E.receiveShadow=!0,this.mesh.add(E);const C=new G(new ae(A,a,a),r);C.position.set(0,p,0),C.rotation.y=-Math.PI/4,C.castShadow=!0,C.receiveShadow=!0,this.mesh.add(C);const M=dn();M.position.set(0,v,0),M.visible=!1,M.name=`pallet-level-${m}`,this.mesh.add(M),this.palletMeshes.push(M)});const l=new Ee({color:2201331,roughness:.7,metalness:.5}),c=[0,...this.levelHeights];for(let v=0;v<this.levelHeights.length;v++){const m=c[v],p=this.levelHeights[v],b=p-m,w=(m+p)/2,S=Math.sqrt(.9*.9+b*b),L=Math.atan2(b,.9),A=new ae(S,.04,.04),E=new G(A,l);E.position.set(0,w,.45),E.rotation.z=L,E.castShadow=!0,this.mesh.add(E);const C=new G(A,l);C.position.set(0,w,.45),C.rotation.z=-L,C.castShadow=!0,this.mesh.add(C);const M=new G(A,l);M.position.set(0,w,-.45),M.rotation.z=L,M.castShadow=!0,this.mesh.add(M);const _=new G(A,l);_.position.set(0,w,-.45),_.rotation.z=-L,_.castShadow=!0,this.mesh.add(_)}const h=new ae(1.1,.08,1.1),d=new Ee({color:13983232,roughness:.9,metalness:.2}),u=new G(h,d);u.position.set(0,.04,0),u.castShadow=!0,u.receiveShadow=!0,this.mesh.add(u);const f=new uo(new wt(1.1,1.1));this.wireframeMaterial=new li({color:ps[this._storageType]});const g=new fs(f,this.wireframeMaterial);g.rotation.x=-Math.PI/2,g.position.y=.1,g.name="storage-type-wireframe",this.mesh.add(g)}canStore(){return this.storedPallets<this.capacity}store(){return this.canStore()?(this.storedPallets++,this.updateVisual(),!0):!1}retrieve(){return this.storedPallets<=0?!1:(this.storedPallets--,this.updateVisual(),!0)}getStorageInfo(){return{stored:this.storedPallets,capacity:this.capacity}}updateVisual(){for(let e=0;e<this.capacity;e++)this.palletMeshes[e]&&(this.palletMeshes[e].visible=e<this.storedPallets)}getPickupHeight(){if(this.storedPallets<=0)return 0;const e=this.storedPallets-1;return this.levelHeights[e]}getStorageHeight(){return this.storedPallets>=this.capacity?this.levelHeights[this.capacity-1]:this.levelHeights[this.storedPallets]}getRackAccessData(){const e=this.getWorldPosition(),t=this.mesh.rotation.y,n=new R(-1.2,0,0);n.applyAxisAngle(new R(0,1,0),t);const i=e.clone().add(n),r=t+Math.PI/2,a=new R(1.2,0,0);a.applyAxisAngle(new R(0,1,0),t);const o=e.clone().add(a),l=t-Math.PI/2;return{left:i,right:o,leftRotation:r,rightRotation:l}}getAccessPositions(){const e=this.getRackAccessData();return[{position:e.left,rotation:e.leftRotation},{position:e.right,rotation:e.rightRotation}]}toData(){return{...super.toData(),storageType:this.storageType,storedPallets:this.storedPallets,capacity:this.capacity}}}class os extends kt{hasPallet=!1;palletMesh=null;constructor(){super("floor-slot"),this.createMesh()}createMesh(){const e=new wt(.9,.9),t=new Ee({color:4871528,roughness:.9,metalness:.1,side:Jt}),n=new G(e,t);n.rotation.x=-Math.PI/2,n.position.y=.01,n.receiveShadow=!0,this.mesh.add(n);const i=new uo(new wt(1,1));this.wireframeMaterial=new li({color:ps[this._storageType]});const r=new fs(i,this.wireframeMaterial);r.rotation.x=-Math.PI/2,r.position.y=.02,this.mesh.add(r),this.palletMesh=dn(),this.palletMesh.visible=!1,this.palletMesh.name="floor-slot-pallet",this.mesh.add(this.palletMesh)}canStore(){return!this.hasPallet}store(){return this.canStore()?(this.hasPallet=!0,this.updateVisual(),!0):!1}retrieve(){return this.hasPallet?(this.hasPallet=!1,this.updateVisual(),!0):!1}getStorageInfo(){return{stored:this.hasPallet?1:0,capacity:1}}updateVisual(){this.palletMesh&&(this.palletMesh.visible=this.hasPallet)}getAccessPositions(){const e=this.getWorldPosition(),t=1;return[{position:new R(e.x,0,e.z+t),rotation:Math.PI},{position:new R(e.x,0,e.z-t),rotation:0},{position:new R(e.x+t,0,e.z),rotation:-Math.PI/2},{position:new R(e.x-t,0,e.z),rotation:Math.PI/2}]}toData(){return{...super.toData(),storageType:this.storageType,hasPallet:this.hasPallet}}}class je extends kt{direction="north";speed=1;hasPallet=!1;isAutomationEntrance=!1;isAutomationExit=!1;static _sharedGeos=null;static _sharedMats=null;static initShared(){if(je._sharedGeos)return;const e=.38,t=.038,n=e*2-.06;je._sharedGeos={railWeb:new ae(.045,.1,.9),railTopFlange:new ae(.1,.025,.9),railBotFlange:new ae(.1,.025,.9),legPost:new ae(.045,.14,.045),legFoot:new ae(.1,.02,.1),brace:new ae(e*2-.04,.025,.03),rollerBarrel:new ht(t,t,n,12),rollerCap:new ht(t+.005,t+.005,.025,12),motor:new ae(.12,.1,.18),motorBracket:new ae(.04,.06,.12),arrow:new Mr(.08,.16,4),wireframe:new uo(new wt(1,1))},je._sharedMats={aluminum:new Ee({color:11581633,roughness:.35,metalness:.85}),chrome:new Ee({color:13949148,roughness:.2,metalness:.95}),darkFrame:new Ee({color:3817287,roughness:.7,metalness:.5}),arrow:new Ee({color:5164484,roughness:.3,metalness:.7})}}nextConveyor=null;rollers=[];animationOffset=0;transferCooldown=0;palletMesh=null;isTransferring=!1;transferAnimT=0;transferTarget=null;static TRANSFER_ANIM_DURATION=.4;_reservedIncoming=0;constructor(e="north"){super("conveyor"),this.direction=e,this.createMesh(),this.setDirection(e)}createMesh(){je.initShared();const e=je._sharedGeos,t=je._sharedMats,n=.18,i=.235,r=.38,a=.038,o=r*2-.06;for(const g of[-1,1]){const v=new G(e.railWeb,t.aluminum);v.position.set(g*r,n,0),v.castShadow=!0,this.mesh.add(v);const m=new G(e.railTopFlange,t.aluminum);m.position.set(g*r,n+.062,0),this.mesh.add(m);const p=new G(e.railBotFlange,t.aluminum);p.position.set(g*r,n-.062,0),this.mesh.add(p)}for(const g of[-.3,.3]){for(const m of[-r,r]){const p=new G(e.legPost,t.darkFrame);p.position.set(m,.07,g),p.castShadow=!0,this.mesh.add(p);const b=new G(e.legFoot,t.darkFrame);b.position.set(m,.01,g),this.mesh.add(b)}const v=new G(e.brace,t.darkFrame);v.position.set(0,.13,g),this.mesh.add(v)}const l=7,c=.85/(l-1);for(let g=0;g<l;g++){const v=-.425+g*c,m=new G(e.rollerBarrel,t.chrome);m.rotation.z=Math.PI/2,m.position.set(0,i,v),m.castShadow=!0,this.mesh.add(m),this.rollers.push(m);for(const p of[-1,1]){const b=new G(e.rollerCap,t.darkFrame);b.rotation.z=Math.PI/2,b.position.set(p*(o/2+.013),i,v),this.mesh.add(b)}}const h=new G(e.motor,t.darkFrame);h.position.set(r+.065,n,-.35),h.castShadow=!0,this.mesh.add(h);const d=new G(e.motorBracket,t.aluminum);d.position.set(r+.022,n,-.35),this.mesh.add(d);const u=new G(e.arrow,t.arrow);u.rotation.x=Math.PI/2,u.position.set(0,i+.08,.25),u.name="directionArrow",this.mesh.add(u),this.palletMesh=dn(),this.palletMesh.visible=!1,this.palletMesh.position.y=i+a,this.palletMesh.name="conveyor-pallet",this.mesh.add(this.palletMesh),this.wireframeMaterial=new li({color:ps[this._storageType],depthTest:!1});const f=new fs(e.wireframe,this.wireframeMaterial);f.rotation.x=-Math.PI/2,f.position.y=.001,f.name="storage-type-wireframe",this.mesh.add(f)}setDirection(e){this.direction=e;const t={north:Math.PI,south:0,east:Math.PI/2,west:-Math.PI/2};this.mesh.rotation.y=t[e]}update(e){if(this.isTransferring){this.advanceTransferAnimation(e);return}if(this.hasPallet&&this.nextConveyor){if(this.transferCooldown-=e,this.transferCooldown<=0){const t=-this.transferCooldown;this.nextConveyor.canStore()&&(this.isTransferring=!0,this.transferAnimT=0,this.transferTarget=this.nextConveyor,this.nextConveyor.reserveIncoming(),this.advanceTransferAnimation(t)),this.transferCooldown=1/this.speed}}else this.transferCooldown=0}advanceTransferAnimation(e){this.animationOffset+=e*this.speed*2,this.rollers.forEach((t,n)=>{t.rotation.x=this.animationOffset+n*.5}),this.transferAnimT+=e/je.TRANSFER_ANIM_DURATION,this.transferAnimT>=1?(this.isTransferring=!1,this.transferAnimT=0,this.palletMesh&&this.palletMesh.position.set(0,.2,0),this.retrieve(),this.transferTarget&&(this.transferTarget.releaseIncoming(),this.transferTarget.storeFromWorldDir()),this.transferTarget=null):this.palletMesh&&(this.palletMesh.position.z=this.transferAnimT*1)}storeFromWorldDir(e,t){return this.canStore()?(this.hasPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0,this.palletMesh.position.set(0,.2,0)),!0):!1}canStore(){return!this.hasPallet&&this._reservedIncoming===0}reserveIncoming(){this._reservedIncoming++}releaseIncoming(){this._reservedIncoming=Math.max(0,this._reservedIncoming-1)}store(){return this.canStore()?(this.hasPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0),!0):!1}retrieve(){return this.hasPallet?(this.hasPallet=!1,this.palletMesh&&(this.palletMesh.visible=!1),!0):!1}getStorageInfo(){return{stored:this.hasPallet?1:0,capacity:1}}static linkableOffsets={north:{dx:0,dz:-1},south:{dx:0,dz:1},east:{dx:1,dz:0},west:{dx:-1,dz:0}};getOutputSlots(){return[{slot:0,offset:je.linkableOffsets[this.direction]}]}getInputOffsets(){return null}setLink(e,t){this.nextConveyor=t}getLink(e){return this.nextConveyor}isUnlinked(){return this.nextConveyor===null}hasLinkTo(e){return this.nextConveyor===e}unlinkTarget(e){this.nextConveyor===e&&(this.nextConveyor=null)}clearLinks(){this.nextConveyor=null}getAccessPositions(){const e=[];return(this.isAutomationEntrance||this.nextConveyor)&&e.push({position:this.getInputPosition(),rotation:this.getInputAccessRotation()}),(this.isAutomationExit||!this.nextConveyor)&&e.push({position:this.getOutputPosition(),rotation:this.getOutputAccessRotation()}),e}getOutputAccessRotation(){switch(this.direction){case"north":return 0;case"south":return Math.PI;case"east":return-Math.PI/2;case"west":return Math.PI/2;default:return 0}}getInputAccessRotation(){const t=this.getOutputAccessRotation()+Math.PI;return t>Math.PI?t-Math.PI*2:t}getAccessRotation(){return this.getOutputAccessRotation()}toData(){return{...super.toData(),direction:this.direction,storageType:this.storageType,hasPallet:this.hasPallet}}getOutputPosition(){const e=new R;switch(this.direction){case"north":e.z=-1;break;case"south":e.z=1;break;case"east":e.x=1;break;case"west":e.x=-1;break}return this.mesh.position.clone().add(e)}getInputPosition(){const e=new R;switch(this.direction){case"north":e.z=1;break;case"south":e.z=-1;break;case"east":e.x=-1;break;case"west":e.x=1;break}return this.mesh.position.clone().add(e)}}class Ot extends je{diverterOutputs=[null,null,null];rrIndex=0;currentOutputIndex=0;static _diverterArrowGeo=null;static _diverterArrowMat=null;static getDiverterArrowGeo(){return Ot._diverterArrowGeo||(Ot._diverterArrowGeo=new Mr(.07,.15,4)),Ot._diverterArrowGeo}static getDiverterArrowMat(){return Ot._diverterArrowMat||(Ot._diverterArrowMat=new Ee({color:16739125,roughness:.3,metalness:.7})),Ot._diverterArrowMat}constructor(e="south"){super(e),this.type="diverter",this.mesh.userData.entityType="diverter",this.addDiverterVisuals()}addDiverterVisuals(){const e=Ot.getDiverterArrowGeo(),t=Ot.getDiverterArrowMat(),n=[{pos:[0,.32,.25],rotY:0},{pos:[.25,.32,0],rotY:-Math.PI/2},{pos:[-.25,.32,0],rotY:Math.PI/2}];for(const{pos:r,rotY:a}of n){const o=new G(e,t);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(...r),o.name="diverterArrow",this.mesh.add(o)}const i=this.mesh.getObjectByName("directionArrow");i&&(i.visible=!1)}pickNextOutput(){for(let e=0;e<this.diverterOutputs.length;e++){const t=(this.rrIndex+e)%this.diverterOutputs.length,n=this.diverterOutputs[t];if(n!==null&&n.canStore())return this.rrIndex=(t+1)%this.diverterOutputs.length,{conveyor:n,index:t}}return null}update(e){const t=this.nextConveyor;this.nextConveyor=null;try{super.update(e)}finally{this.nextConveyor=t}if(this.isTransferring)return;if(!this.hasPallet){this.transferCooldown=0;return}const n=this.pickNextOutput();if(!n)return;const{conveyor:i,index:r}=n;if(this.transferCooldown-=e,this.transferCooldown<=0){const a=-this.transferCooldown;i.canStore()&&(this.isTransferring=!0,this.transferAnimT=0,this.transferTarget=i,this.currentOutputIndex=r,i.reserveIncoming(),this.advanceTransferAnimation(a)),this.transferCooldown=1/this.speed}}advanceTransferAnimation(e){if(this.animationOffset+=e*this.speed*2,this.rollers.forEach((t,n)=>{t.rotation.x=this.animationOffset+n*.5}),this.transferAnimT+=e/je.TRANSFER_ANIM_DURATION,this.transferAnimT>=1){this.isTransferring=!1,this.transferAnimT=0;const t=this.palletMesh;t&&t.position.set(0,.2,0),this.retrieve(),this.transferTarget&&(this.transferTarget.releaseIncoming(),this.transferTarget.storeFromWorldDir()),this.transferTarget=null}else{const t=this.palletMesh;if(t){const n=this.transferAnimT;switch(this.currentOutputIndex){case 0:t.position.set(0,.2,n*1);break;case 1:t.position.set(n*1,.2,0);break;case 2:t.position.set(-n*1,.2,0);break}}}}storeFromWorldDir(e,t){return e!==void 0&&t!==void 0&&!this.isFromBehind(e,t)?!1:super.storeFromWorldDir(e,t)}isFromBehind(e,t){switch(this.direction){case"south":return t>0;case"north":return t<0;case"east":return e>0;case"west":return e<0}}getOutputSlots(){const e=Ot.getOutputOffsets(this.direction);return[{slot:0,offset:e.front},{slot:1,offset:e.left},{slot:2,offset:e.right}]}getInputOffsets(){return[Ot.getOutputOffsets(this.direction).behind]}setLink(e,t){this.diverterOutputs[e]=t}getLink(e){return this.diverterOutputs[e]??null}isUnlinked(){return this.diverterOutputs.every(e=>e===null)}hasLinkTo(e){return this.diverterOutputs.includes(e)}unlinkTarget(e){for(let t=0;t<this.diverterOutputs.length;t++)this.diverterOutputs[t]===e&&(this.diverterOutputs[t]=null)}clearLinks(){this.diverterOutputs=[null,null,null],this.nextConveyor=null}static getOutputOffsets(e){switch(e){case"south":return{front:{dx:0,dz:1},left:{dx:1,dz:0},right:{dx:-1,dz:0},behind:{dx:0,dz:-1}};case"north":return{front:{dx:0,dz:-1},left:{dx:-1,dz:0},right:{dx:1,dz:0},behind:{dx:0,dz:1}};case"east":return{front:{dx:1,dz:0},left:{dx:0,dz:-1},right:{dx:0,dz:1},behind:{dx:-1,dz:0}};case"west":return{front:{dx:-1,dz:0},left:{dx:0,dz:1},right:{dx:0,dz:-1},behind:{dx:1,dz:0}}}}}var _t=Object.freeze({Linear:Object.freeze({None:function(s){return s},In:function(s){return s},Out:function(s){return s},InOut:function(s){return s}}),Quadratic:Object.freeze({In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}}),Cubic:Object.freeze({In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}}),Quartic:Object.freeze({In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}}),Quintic:Object.freeze({In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}}),Sinusoidal:Object.freeze({In:function(s){return 1-Math.sin((1-s)*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))}}),Exponential:Object.freeze({In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}}),Circular:Object.freeze({In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}}),Elastic:Object.freeze({In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}}),Bounce:Object.freeze({In:function(s){return 1-_t.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?_t.Bounce.In(s*2)*.5:_t.Bounce.Out(s*2-1)*.5+.5}}),generatePow:function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:function(e){return Math.pow(e,s)},Out:function(e){return 1-Math.pow(1-e,s)},InOut:function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5}}}}),rs=function(){return performance.now()},go=(function(){function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var a=r[i];(e=a._group)===null||e===void 0||e.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},s.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){var r=i[n];r._group=void 0,delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]}},s.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},s.prototype.update=function(e,t){e===void 0&&(e=rs()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],a=!t;r&&r.update(e,a)===!1&&!t&&this.remove(r)}n=Object.keys(this._tweensAddedDuringUpdate)}},s})(),$a={Linear:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=$a.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},Utils:{Linear:function(s,e,t){return(e-s)*t+s}}},Oc=(function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s})(),Xa=new go,Ut=(function(){function s(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=_t.Linear.None,this._interpolationFunction=$a.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Oc.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Xa,Xa.add(this))}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.getDuration=function(){return this._duration},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=rs()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var r in this._valuesEnd)i[r]=this._valuesEnd[r];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,n,i,r){for(var a in n){var o=e[a],l=Array.isArray(o),c=l?"array":typeof o,h=!l&&Array.isArray(n[a]);if(!(c==="undefined"||c==="function")){if(h){var d=n[a];if(d.length===0)continue;for(var u=[o],f=0,g=d.length;f<g;f+=1){var v=this._handleRelativeValue(o,d[f]);if(isNaN(v)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}u.push(v)}h&&(n[a]=u)}if((c==="object"||l)&&o&&!h){t[a]=l?[]:{};var m=o;for(var p in m)t[a][p]=m[p];i[a]=l?[]:{};var d=n[a];if(!this._isDynamic){var b={};for(var p in d)b[p]=d[p];n[a]=d=b}this._setupProperties(m,t[a],d,i[a],r)}else(typeof t[a]>"u"||r)&&(t[a]=o),l||(t[a]*=1),h?i[a]=n[a].slice().reverse():i[a]=t[a]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},s.prototype.pause=function(e){return e===void 0&&(e=rs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},s.prototype.resume=function(e){return e===void 0&&(e=rs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},s.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=_t.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=$a.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=rs()),t===void 0&&(t=s.autoStartOnUpdate),this._isPaused)return!0;var r;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),l=this._duration+this._repeat*o,c=function(){if(n._duration===0||a>l)return 1;var v=Math.trunc(a/o),m=a-v*o,p=Math.min(m/n._duration,1);return p===0&&a===n._duration?1:p},h=c(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||a>=this._duration)if(this._repeat>0){var u=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=u);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*u,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var f=0,g=this._chainedTweens.length;f<g;f++)this._chainedTweens[f].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var a=t[r]||0,o=n[r],l=Array.isArray(e[r]),c=Array.isArray(o),h=!l&&c;h?e[r]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(e[r],a,o,i):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[r]=a+(o-a)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s.autoStartOnUpdate=!1,s})();Oc.nextId;var mn=Xa;mn.getAll.bind(mn);mn.removeAll.bind(mn);mn.add.bind(mn);mn.remove.bind(mn);mn.update.bind(mn);class Nt extends ci{state="idle";carryingPallet=!1;speed=2;allowedTaskTypes=null;innerMastHeight=2;outerMastHeight=1.8;forkMesh=null;palletIndicator=null;innerMastGroup=null;targetPosition=null;path=[];tweenGroup;elapsedTime=0;collisionCheckCallback=null;pathRecalculationCallback=null;failedMoveAttempts=0;maxFailedAttempts=5;isCurrentlyMoving=!1;retryTimer=0;retryInterval=.2;pumpAnimStartRotationX=null;constructor(e="forklift"){super(e),this.tweenGroup=new go,this.createMesh()}createMesh(){const e=new ae(1,.6,1.4),t=new Ee({color:16032353,roughness:.6,metalness:.4}),n=new G(e,t);n.position.set(0,.4,0),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new ae(.8,.6,.7),r=new Ee({color:2963272,roughness:.4,metalness:.3}),a=new G(i,r);a.position.set(0,.95,-.2),a.castShadow=!0,this.mesh.add(a);const o=new Ee({color:4871528,roughness:.7,metalness:.5}),l=new Ee({color:5924472,roughness:.7,metalness:.5}),c=new ae(.14,this.outerMastHeight,.14),h=new G(c,o);h.position.set(-.35,this.outerMastHeight/2,.65),h.castShadow=!0,this.mesh.add(h);const d=new G(c,o);d.position.set(.35,this.outerMastHeight/2,.65),d.castShadow=!0,this.mesh.add(d),this.innerMastGroup=new Rt,this.innerMastGroup.position.set(0,.1,0);const u=new ae(.1,this.innerMastHeight,.1),f=new G(u,l);f.position.set(-.35,this.innerMastHeight/2,.65),f.castShadow=!0,this.innerMastGroup.add(f);const g=new G(u,l);g.position.set(.35,this.innerMastHeight/2,.65),g.castShadow=!0,this.innerMastGroup.add(g);const v=new ae(.82,.08,.08),m=new G(v,l);m.position.set(0,this.innerMastHeight,.65),m.castShadow=!0,this.innerMastGroup.add(m);const p=new ae(.9,.05,1.2),b=new Ee({color:7438486,roughness:.5,metalness:.7});this.forkMesh=new G(p,b),this.forkMesh.position.set(0,.25,1),this.forkMesh.castShadow=!0,this.innerMastGroup.add(this.forkMesh),this.mesh.add(this.innerMastGroup);const w=new ht(.2,.2,.15,12),S=new Ee({color:1712172,roughness:.9,metalness:.1});[[-.45,.2,-.5],[.45,.2,-.5],[-.4,.15,.5],[.4,.15,.5]].forEach(([A,E,C])=>{const M=new G(w,S);M.rotation.z=Math.PI/2,M.position.set(A,E,C),M.castShadow=!0,this.mesh.add(M)}),this.palletIndicator=dn(),this.palletIndicator.position.set(0,.075,.25),this.palletIndicator.visible=!1,this.palletIndicator.traverse(A=>{A instanceof G&&(A.castShadow=!0)}),this.forkMesh.add(this.palletIndicator)}calculateRotation(e){let t=this.mesh.rotation.y;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;let n=e-t;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;const i=t+n,a=Math.abs(n)/3*1e3;return{finalAngle:i,duration:a}}setPath(e){this.path=[...e],this.failedMoveAttempts=0,this.isCurrentlyMoving=!1,this.retryTimer=0,this.path.length>0&&(this.state="moving",this.moveToNextPoint())}setCollisionCheckCallback(e){this.collisionCheckCallback=e}setPathRecalculationCallback(e){this.pathRecalculationCallback=e}moveToNextPoint(){if(this.path.length===0){this.state="idle";return}const e=this.path[0];if(this.collisionCheckCallback&&!this.collisionCheckCallback(e,this.id)){this.failedMoveAttempts++,this.failedMoveAttempts>=this.maxFailedAttempts&&this.pathRecalculationCallback&&(this.failedMoveAttempts=0,this.pathRecalculationCallback(this.id));return}this.failedMoveAttempts=0,this.path.shift(),this.targetPosition=e;const t=new R().subVectors(e,this.mesh.position).normalize();if(t.length()>.01){const n=Math.atan2(t.x,t.z),{finalAngle:i,duration:r}=this.calculateRotation(n);this.isCurrentlyMoving=!0,new Ut(this.mesh.rotation,this.tweenGroup).to({y:i},r).easing(_t.Quadratic.Out).onComplete(()=>{const o=this.mesh.position.distanceTo(e)/this.speed*1e3;new Ut(this.mesh.position,this.tweenGroup).to({x:e.x,z:e.z},o).easing(_t.Linear.None).onComplete(()=>{this.isCurrentlyMoving=!1,this.moveToNextPoint()}).start(this.elapsedTime)}).start(this.elapsedTime)}}pickUpPallet(e=0,t,n){this.carryingPallet||(this.state="loading",this.carryingPallet=!0,this.prepareForRackAccess(t,()=>this.moveFork(e,!0,n)))}dropPallet(e=0,t,n){this.carryingPallet&&(this.state="unloading",this.prepareForRackAccess(t,()=>this.moveFork(e,!1,n)))}prepareForRackAccess(e,t){if(e!==void 0){const{finalAngle:a,duration:o}=this.calculateRotation(e);new Ut(this.mesh.rotation,this.tweenGroup).to({y:a},o).easing(_t.Quadratic.InOut).onComplete(()=>{this.moveForward(.3,600,t)}).start(this.elapsedTime)}else t()}moveForward(e,t,n){const i=this.mesh.position.clone(),r=new R(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y)).multiplyScalar(e),a=i.add(r);new Ut(this.mesh.position,this.tweenGroup).to({x:a.x,z:a.z},t).easing(_t.Quadratic.InOut).onComplete(n).start(this.elapsedTime)}moveFork(e,t,n){const i=e-.05,r=1.2,a=this.innerMastHeight,o=.25;if(!(!this.forkMesh||!this.innerMastGroup))if(i>a){const l=i-a,h=Math.abs(l-this.innerMastGroup.position.y)/r*1e3;new Ut(this.innerMastGroup.position,this.tweenGroup).to({y:l},h).easing(_t.Linear.In).onComplete(()=>{const d=a,f=Math.abs(d-this.forkMesh.position.y)/r*1e3;new Ut(this.forkMesh.position,this.tweenGroup).to({y:d},f).easing(_t.Linear.In).onComplete(()=>{this.playHydraulicPumpAnimation(()=>{this.updatePalletVisibility(t),this.retractMast(o,r),n&&n()})}).start(this.elapsedTime)}).start(this.elapsedTime)}else{const c=Math.abs(i-this.forkMesh.position.y)/r*1e3;new Ut(this.forkMesh.position,this.tweenGroup).to({y:i},c).easing(_t.Linear.In).onComplete(()=>{this.playHydraulicPumpAnimation(()=>{this.updatePalletVisibility(t),this.retractMast(o,r),n&&n()})}).start(this.elapsedTime)}}playHydraulicPumpAnimation(e){const t=this.mesh.rotation.x;this.pumpAnimStartRotationX=t;const n={t:0};new Ut(n,this.tweenGroup).to({t:1},260).easing(_t.Quadratic.InOut).onUpdate(()=>{const i=Math.sin(n.t*Math.PI*4);this.mesh.rotation.x=t-Math.max(0,i)*.035}).onComplete(()=>{this.mesh.rotation.x=t,this.pumpAnimStartRotationX=null,e()}).start(this.elapsedTime)}updatePalletVisibility(e){this.palletIndicator&&(this.palletIndicator.visible=e,this.carryingPallet=this.palletIndicator.visible)}retractMast(e,t){const n=this.innerMastGroup.position.y/t*1e3,i=Math.abs(e-this.forkMesh.position.y)/t*1e3;new Ut(this.innerMastGroup.position,this.tweenGroup).to({y:.1},n).easing(_t.Linear.In).start(this.elapsedTime),new Ut(this.forkMesh.position,this.tweenGroup).to({y:e},i).easing(_t.Linear.In).onUpdate(()=>{}).onComplete(()=>{this.state="idle"}).start(this.elapsedTime)}update(e){this.elapsedTime+=e*1e3,this.tweenGroup.update(this.elapsedTime),this.pumpAnimStartRotationX!==null&&this.state==="moving"&&(this.mesh.rotation.x=this.pumpAnimStartRotationX,this.pumpAnimStartRotationX=null),(this.state==="moving"||this.path.length>0)&&!this.isCurrentlyMoving&&(this.retryTimer+=e,this.retryTimer>=this.retryInterval&&(this.retryTimer=0,this.moveToNextPoint()))}isIdle(){return this.state==="idle"&&this.path.length===0}toData(){return{...super.toData(),allowedTaskTypes:this.allowedTaskTypes??null}}}class Tt extends ci{static operatorVisualTemplate=null;static palletTruckTemplate=null;static pickUpDropDuration=1200;state="idle";speed=1.5;carryingPallet=!1;allowedTaskTypes=null;headMesh=null;operatorVisual=null;palletIndicator=null;palletTiller=null;palletPumpTop=null;palletLoadMesh=null;path=[];tweenGroup;walkAnimation=0;elapsedTime=0;constructor(){super("operator"),this.tweenGroup=new go,this.createMesh()}createMesh(){const e=Tt.getOperatorVisualTemplate().clone(!0);this.operatorVisual=e,this.mesh.add(e),this.headMesh=e.getObjectByName("operatorHead");const t=Tt.getPalletTruckTemplate().clone(!0);t.position.set(0,0,.75),t.visible=!1,this.palletTiller=t.getObjectByName("palletTiller")??null,this.palletPumpTop=t.getObjectByName("palletPumpTop")??null,this.palletLoadMesh=t.getObjectByName("palletTruckLoad")??null,this.palletIndicator=t,this.mesh.add(this.palletIndicator)}static getOperatorVisualTemplate(){if(Tt.operatorVisualTemplate)return Tt.operatorVisualTemplate;const e=new Rt,t=new ht(.2,.25,.65,8),n=new Ee({color:5164484,roughness:.7,metalness:.2}),i=new G(t,n);i.position.set(0,.6,0),i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new po(.15,12,12),a=new Ee({color:16766650,roughness:.8,metalness:.1}),o=new G(r,a);o.name="operatorHead",o.position.set(0,1.09,0),o.castShadow=!0,e.add(o);const l=new ht(.18,.15,.12,12),c=new Ee({color:16032353,roughness:.5,metalness:.3}),h=new G(l,c);h.position.set(0,1.3,0),h.castShadow=!0,e.add(h);const d=new ht(.08,.08,.35,6),u=new Ee({color:2963272,roughness:.9,metalness:.1}),f=new G(d,u);f.position.set(-.1,.175,0),f.castShadow=!0,f.name="leftLeg",e.add(f);const g=new G(d,u);return g.position.set(.1,.175,0),g.castShadow=!0,g.name="rightLeg",e.add(g),Tt.operatorVisualTemplate=e,e}static getPalletTruckTemplate(){if(Tt.palletTruckTemplate)return Tt.palletTruckTemplate;const e=new Rt,t=new Ee({color:16234497,roughness:.45,metalness:.35}),n=new Ee({color:14720768,roughness:.45,metalness:.4}),i=new Ee({color:2042167,roughness:.6,metalness:.2}),r=new Ee({color:1120295,roughness:.9,metalness:.05}),a=new ae(.09,.045,.78),o=new ht(.045,.045,.09,12),l=new G(a,t);l.position.set(-.22,.0225,.06),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=new G(a,t);c.position.set(.22,.0225,.06),c.castShadow=!0,c.receiveShadow=!0,e.add(c);const h=new G(o,t);h.rotation.x=Math.PI/2,h.position.set(-.22,.0225,.45),h.castShadow=!0,h.receiveShadow=!0,e.add(h);const d=new G(o,t);d.rotation.x=Math.PI/2,d.position.set(.22,.0225,.45),d.castShadow=!0,d.receiveShadow=!0,e.add(d);const u=new G(new ae(.34,.12,.24),n);u.position.set(0,.06,-.35),u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new G(new ae(.2,.11,.16),t);f.name="palletPumpTop",f.position.set(0,.15,-.34),f.rotation.x=-.14,f.castShadow=!0,f.receiveShadow=!0,e.add(f);const g=new G(new ae(.56,.05,.14),n);g.position.set(0,.04,-.17),g.castShadow=!0,g.receiveShadow=!0,e.add(g);const v=new G(new ht(.02,.02,.72,10),i);v.name="palletTiller",v.position.set(0,.5,-.43),v.rotation.x=-.4,v.castShadow=!0,e.add(v);const m=new G(new ht(.018,.018,.22,10),i);m.position.set(0,.93,-.57),m.rotation.z=Math.PI/2,m.castShadow=!0,e.add(m);const p=new G(new ht(.014,.014,.22,10),i);p.position.set(-.07,.84,-.57),p.rotation.z=.55,p.castShadow=!0,e.add(p);const b=new G(new ht(.014,.014,.22,10),i);b.position.set(.07,.84,-.57),b.rotation.z=-.55,b.castShadow=!0,e.add(b);const w=new ht(.02,.02,.05,10),S=new G(w,r);S.rotation.z=Math.PI/2,S.position.set(-.22,.02,.41),e.add(S);const L=new G(w,r);L.rotation.z=Math.PI/2,L.position.set(.22,.02,.41),e.add(L);const A=new ht(.04,.04,.055,12),E=new G(A,r);E.rotation.z=Math.PI/2,E.position.set(-.11,.04,-.43),E.castShadow=!0,e.add(E);const C=new G(A,r);C.rotation.z=Math.PI/2,C.position.set(.11,.04,-.43),C.castShadow=!0,e.add(C);const M=dn();return M.name="palletTruckLoad",M.position.set(0,.055,.08),e.add(M),Tt.palletTruckTemplate=e,e}setPath(e){this.tweenGroup.removeAll(),this.path=[...e],this.path.length>0&&(this.state="walking",this.moveToNextPoint())}calculateRotation(e){let t=this.mesh.rotation.y;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;let n=e-t;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;const i=t+n,a=Math.abs(n)/3*1e3;return{finalAngle:i,duration:a}}moveToNextPoint(){if(this.path.length===0){this.state="idle";return}const e=this.path.shift(),t=new R().subVectors(e,this.mesh.position).normalize();if(t.length()>.01){const r=Math.atan2(t.x,t.z),{finalAngle:a,duration:o}=this.calculateRotation(r);new Ut(this.mesh.rotation,this.tweenGroup).to({y:a},o).easing(_t.Quadratic.Out).start(this.elapsedTime)}const i=this.mesh.position.distanceTo(e)/this.speed*1e3;new Ut(this.mesh.position,this.tweenGroup).to({x:e.x,z:e.z},i).easing(_t.Linear.None).onComplete(()=>this.moveToNextPoint()).start(this.elapsedTime)}pickUpPallet(e=0,t,n){this.carryingPallet||(this.state="working",this.prepareForAccess(t,()=>this.playPickingOrDroppingAnimation(!0,e,n)))}dropPallet(e=0,t,n){this.carryingPallet&&(this.state="working",this.prepareForAccess(t,()=>this.playPickingOrDroppingAnimation(!1,e,n)))}prepareForAccess(e,t){if(e===void 0){t();return}const{finalAngle:n,duration:i}=this.calculateRotation(e);new Ut(this.mesh.rotation,this.tweenGroup).to({y:n},i).easing(_t.Quadratic.InOut).onComplete(t).start(this.elapsedTime)}retractPalletLoad(e,t,n){if(n&&n(),!this.palletLoadMesh){this.state="idle";return}const i=this.palletLoadMesh.position.y,r=300;if(this.palletLoadMesh.position.z=t,Math.abs(i-e)<.001){this.state="idle";return}new Ut(this.palletLoadMesh.position,this.tweenGroup).to({y:e},r).easing(_t.Quadratic.In).onComplete(()=>{this.state="idle"}).start(this.elapsedTime)}update(e){if(this.elapsedTime+=e*1e3,this.tweenGroup.update(this.elapsedTime),this.state==="walking"){this.walkAnimation+=e*10;const t=this.mesh.getObjectByName("leftLeg"),n=this.mesh.getObjectByName("rightLeg");t&&n&&(t.rotation.x=Math.sin(this.walkAnimation)*.3,n.rotation.x=Math.sin(this.walkAnimation+Math.PI)*.3)}else{const t=this.mesh.getObjectByName("leftLeg"),n=this.mesh.getObjectByName("rightLeg");t&&n&&(t.rotation.x=0,n.rotation.x=0)}}isIdle(){return this.state==="idle"&&this.path.length===0}playPickingOrDroppingAnimation(e,t=0,n){const i=this.palletTiller?.rotation.x??0,r=this.palletPumpTop?.rotation.x??0,a=this.operatorVisual?.position.y??0,o=this.palletLoadMesh?.position.y??0,l=this.palletLoadMesh?.position.z??0,c={t:0};new Ut(c,this.tweenGroup).to({t:1},Tt.pickUpDropDuration).easing(_t.Quadratic.InOut).onUpdate(()=>{const h=Math.sin(c.t*Math.PI*4);if(this.palletTiller&&(this.palletTiller.rotation.x=i+h*.16),this.palletPumpTop&&(this.palletPumpTop.rotation.x=r+h*.035),this.operatorVisual&&(this.operatorVisual.position.y=a-Math.max(0,h)*.02),this.palletLoadMesh)if(e)this.palletLoadMesh.position.y=o,this.palletLoadMesh.position.z=l;else{const d=Math.sin(c.t*Math.PI*.5);this.palletLoadMesh.position.z=l+d*.15,this.palletLoadMesh.position.y=o+d*(t-o)}}).onComplete(()=>{this.palletTiller&&(this.palletTiller.rotation.x=i),this.palletPumpTop&&(this.palletPumpTop.rotation.x=r),this.operatorVisual&&(this.operatorVisual.position.y=a),this.carryingPallet=e,this.operatorVisual&&(this.operatorVisual.position.z=e?-.08:0),this.palletIndicator&&(this.palletIndicator.visible=e),this.retractPalletLoad(o,l,n)}).start(this.elapsedTime)}dispose(){this.mesh.clear()}toData(){return{...super.toData(),allowedTaskTypes:this.allowedTaskTypes??null}}}class vo extends ci{constructor(e){super(e)}orientMesh(e,t){this.mesh.rotation.y=e===t-1?0:Math.PI}createBasePlate(e,t,n,i,r=0){const a=new ae(e,t,n),o=new Ee({color:i,roughness:.6,metalness:.3}),l=new G(a,o);return l.position.set(0,t/2,r),l.receiveShadow=!0,l}createHazardStripes(e,t,n,i,r,a){const o=new ae(t,n,i),l=new Ee({color:16766720}),c=[];for(let h=0;h<e;h++){const d=new G(o,l);d.position.set(0,.051,r+h*a),c.push(d)}return c}createBumpers(e,t,n,i,r=0){const a=new ae(e,t,n),o=new Ee({color:3355443}),l=new G(a,o);l.position.set(-i,t/2,r);const c=new G(a,o);return c.position.set(i,t/2,r),{left:l,right:c}}}class Hl extends vo{dockedTruck=!1;constructor(){super("truck-dock"),this.createMesh()}canAcceptTruck(){return!this.dockedTruck}hasTruck(){return this.dockedTruck}createMesh(){const e=this.createBasePlate(.9,.05,.9,4020864,0);this.mesh.add(e),this.createHazardStripes(5,.9,.01,.1,-.4,.2).forEach(i=>this.mesh.add(i));const n=this.createBumpers(.1,.2,.8,.4,0);this.mesh.add(n.left),this.mesh.add(n.right)}}class dt extends vo{connectedConveyor=null;direction="north";inboundTruck=null;outboundTruck=null;outboundOrderId="";outboundQuantity=0;palletsLoaded=0;static TRANSFER_INTERVAL=1.5;transferTimer=0;palletMesh=null;isTransferring=!1;transferAnimT=0;transferDirection=null;static TRANSFER_ANIM_DURATION=.8;constructor(){super("automated-truck-dock"),this.createMesh()}orientMesh(e,t){super.orientMesh(e,t),this.direction=e===t-1?"south":"north"}getOutputSlots(){const e=this.direction==="south"?-1:1;return[{slot:0,offset:{dx:0,dz:e}},{slot:1,offset:{dx:0,dz:e*2}}]}getInputOffsets(){const e=this.direction==="south"?-1:1;return[{dx:0,dz:e},{dx:0,dz:e*2}]}setLink(e,t){this.connectedConveyor=t}getLink(e){return this.connectedConveyor}isUnlinked(){return this.connectedConveyor===null}hasLinkTo(e){return this.connectedConveyor===e}unlinkTarget(e){this.connectedConveyor===e&&(this.connectedConveyor=null)}clearLinks(){this.connectedConveyor=null}canAcceptTruck(){return this.inboundTruck===null&&this.outboundTruck===null}hasTruck(){return this.inboundTruck!==null||this.outboundTruck!==null}setDockedTruck(e){this.inboundTruck=e,this.transferTimer=dt.TRANSFER_INTERVAL}setOutboundTruck(e,t,n){this.outboundTruck=e,this.outboundOrderId=t,this.outboundQuantity=n,this.palletsLoaded=0,this.transferTimer=dt.TRANSFER_INTERVAL}update(e){if(this.isTransferring){this.advanceTransferAnimation(e);return}if(this.inboundTruck){if(!this.connectedConveyor)return;if(this.inboundTruck.getPalletsRemaining()===0||this.inboundTruck.state==="departing"||this.inboundTruck.state==="gone"){this.inboundTruck=null;return}if(!this.connectedConveyor.canStore())return;this.transferTimer-=e,this.transferTimer<=0&&this.inboundTruck.unloadPallet()&&(this.startTransferAnimation("inbound"),this.transferTimer=dt.TRANSFER_INTERVAL);return}if(this.outboundTruck){if(!this.connectedConveyor)return;if(this.outboundTruck.state==="departing"||this.outboundTruck.state==="gone"||this.palletsLoaded>=this.outboundQuantity){this.outboundTruck=null;return}if(!this.connectedConveyor.hasPallet||!this.outboundTruck.canLoadPallet())return;this.transferTimer-=e,this.transferTimer<=0&&this.connectedConveyor.retrieve()&&(this.startTransferAnimation("outbound"),this.transferTimer=dt.TRANSFER_INTERVAL)}}startTransferAnimation(e){this.isTransferring=!0,this.transferAnimT=0,this.transferDirection=e,this.palletMesh&&(this.palletMesh.visible=!0,e==="inbound"?this.palletMesh.position.set(0,.1,0):this.palletMesh.position.set(0,.1,-1.5))}advanceTransferAnimation(e){if(this.transferAnimT+=e/dt.TRANSFER_ANIM_DURATION,this.transferAnimT>=1)this.isTransferring=!1,this.transferAnimT=0,this.palletMesh&&(this.palletMesh.visible=!1),this.transferDirection==="inbound"?this.connectedConveyor&&(this.connectedConveyor.store(),Y.addStoredPallet()):this.transferDirection==="outbound"&&this.outboundTruck&&(Y.removeStoredPallet(),this.outboundTruck.loadPallet(),this.palletsLoaded++,P.emit("outbound:pallet-loaded",{truckId:this.outboundTruck.id,orderId:this.outboundOrderId})),this.transferDirection=null;else if(this.palletMesh)if(this.transferDirection==="inbound"){const t=Lo.lerp(0,-1.5,this.transferAnimT);this.palletMesh.position.z=t}else{const t=Lo.lerp(-1.5,0,this.transferAnimT);this.palletMesh.position.z=t}}createMesh(){const e=this.createBasePlate(.9,.05,2,1735262,-.5);this.mesh.add(e),this.createHazardStripes(4,.88,.01,.1,-.05,.15).forEach(g=>this.mesh.add(g));const n=this.createBumpers(.1,.2,.3,.4,.3);this.mesh.add(n.left),this.mesh.add(n.right);const i=new ae(.06,.12,1.9),r=new Ee({color:4473924,roughness:.5,metalness:.7}),a=new G(i,r);a.position.set(-.42,.08,-.5),this.mesh.add(a);const o=new G(i,r);o.position.set(.42,.08,-.5),this.mesh.add(o);const l=new ae(.72,.06,.88),c=new Ee({color:875590,roughness:.5,metalness:.4}),h=new G(l,c);h.position.set(0,.058,-1),this.mesh.add(h);const d=new ae(.56,.07,.18),u=new Ee({color:43775,roughness:.3,metalness:.6,emissive:new Ge(8772)}),f=new G(d,u);f.position.set(0,.085,-1.38),this.mesh.add(f),this.palletMesh=dn(),this.palletMesh.visible=!1,this.palletMesh.position.set(0,.1,0),this.mesh.add(this.palletMesh)}}const Uc=1e4,xg=1e3;function Gl(s){return Uc+s*xg}function Wl(s,e,t,n){const i=t-s,r=n-e,a=Math.abs(i)>=Math.abs(r)&&!(i===0&&r===0),o=a?"east-west":"north-south",l=[],c=[],h=[];if(a||i===0&&r===0){if(i===0&&r===0)return l.push({x:s,z:e}),c.push({x:s-1,z:e}),c.push({x:s+1,z:e}),h.push({x:s-1,z:e-1,direction:"north"}),h.push({x:s+1,z:e-1,direction:"north"}),h.push({x:s-1,z:e+1,direction:"north"}),h.push({x:s+1,z:e+1,direction:"north"}),{aisleCells:l,rackCells:c,conveyorCells:h,aisleDirection:"north-south"};const d=e,u=Math.min(s,t),f=Math.max(s,t);for(let g=u;g<=f;g++)l.push({x:g,z:d}),c.push({x:g,z:d-1}),c.push({x:g,z:d+1});h.push({x:u-1,z:d-1,direction:"east"}),h.push({x:u-1,z:d+1,direction:"east"}),h.push({x:f+1,z:d-1,direction:"east"}),h.push({x:f+1,z:d+1,direction:"east"})}else{const d=s,u=Math.min(e,n),f=Math.max(e,n);for(let g=u;g<=f;g++)l.push({x:d,z:g}),c.push({x:d-1,z:g}),c.push({x:d+1,z:g});h.push({x:d-1,z:u-1,direction:"north"}),h.push({x:d+1,z:u-1,direction:"north"}),h.push({x:d-1,z:f+1,direction:"north"}),h.push({x:d+1,z:f+1,direction:"north"})}return{aisleCells:l,rackCells:c,conveyorCells:h,aisleDirection:o}}class ei extends ci{length;aisleDirection;aisleCells=[];childRacks=[];childConveyors=[];carriageGroup=null;forkGroup=null;forkExtensionGroup=null;palletMesh=null;automationState="idle";carryingPallet=!1;carriageTarget=0;forkHeightTarget=.5;forkExtensionTarget=0;animationProgress=0;pickupConveyor=null;dropTarget=null;dropTargetSide=0;carriageMaxSpeed=2.5;carriageAccel=.7;carriageVelocity=0;forkLiftSpeed=1.5;forkExtendSpeed=1.8;forkRestForward=.5;get currentState(){return this.automationState}get isCarryingPallet(){return this.carryingPallet}get storedPalletsTotal(){return this.childRacks.reduce((e,t)=>e+t.storedPallets,0)}get capacityTotal(){return this.childRacks.reduce((e,t)=>e+t.capacity,0)}recomputeAisleCells(){const{x:e,z:t}=this.getGridPosition();this.aisleCells=[];for(let n=0;n<this.length;n++)this.aisleCells.push(this.aisleDirection==="north-south"?{x:e,z:t+n}:{x:e+n,z:t})}constructor(e,t){super("stacker-crane"),this.length=e,this.aisleDirection=t,this.createMesh()}createMesh(){const e=this.aisleDirection==="north-south",t=this.length,n=(t-1)/2,i=new Ee({color:16098851,roughness:.4,metalness:.7}),r=new Ee({color:2963272,roughness:.6,metalness:.5}),a=new Ee({color:4871528,roughness:.5,metalness:.8}),o=new Ee({color:10395294,roughness:.4,metalness:.8}),l=10,c=l+.3,h=Math.max(t,1)+.4,d=e?new ae(.08,.06,h):new ae(h,.06,.08),u=new G(d,a);u.position.set(e?0:n,.03,e?n:0),u.castShadow=!0,this.mesh.add(u);const f=e?new ae(.16,.02,h):new ae(h,.02,.16),g=new G(f,a);g.position.set(e?0:n,.07,e?n:0),this.mesh.add(g);for(let re=0;re<t;re++){const ge=e?new ae(.4,.03,.1):new ae(.1,.03,.4),Re=new G(ge,r);Re.position.set(e?0:re,.015,e?re:0),this.mesh.add(Re)}const v=e?new ae(.1,.08,h):new ae(h,.08,.1),m=new G(v,a);m.position.set(e?0:n,c,e?n:0),m.castShadow=!0,this.mesh.add(m);const p=e?new ae(.18,.025,h):new ae(h,.025,.18),b=new G(p,a);b.position.set(e?0:n,c-.055,e?n:0),this.mesh.add(b);for(const re of[-1,1]){const ge=new ae(.08,.4,.08),Re=new G(ge,r);e?Re.position.set(0,c-.2,re<0?-.2:t-1+.2):Re.position.set(re<0?-.2:t-1+.2,c-.2,0),Re.castShadow=!0,this.mesh.add(Re)}this.carriageGroup=new Rt;const w=new ae(.38,.25,.38),S=new G(w,r);S.position.set(0,.125,0),S.castShadow=!0,this.carriageGroup.add(S);const L=new ae(.42,.04,.42),A=new G(L,i);A.position.set(0,.27,0),this.carriageGroup.add(A);const E=new ht(.055,.055,.08,10),C=new Ee({color:1712172,roughness:.9,metalness:.3});for(const re of[-1,1]){const ge=new G(E,C);e?(ge.rotation.x=Math.PI/2,ge.position.set(re*.14,.055,0)):(ge.rotation.z=Math.PI/2,ge.position.set(0,.055,re*.14)),ge.castShadow=!0,this.carriageGroup.add(ge)}const M=.07,_=.09,k=new ae(M,l,_),N=e?.09:0,F=e?0:.09;for(const re of[-1,1]){const ge=new G(k,i);ge.position.set(e?re*N:0,l/2+.29,e?0:re*F),ge.castShadow=!0,this.carriageGroup.add(ge)}const V=Math.ceil(l/1.5);for(let re=0;re<=V;re++){const ge=e?new ae(N*2+M,.04,_):new ae(_,.04,F*2+M),Re=new G(ge,i);Re.position.set(0,.29+re*(l/V),0),this.carriageGroup.add(Re)}const K=new ae(.22,.15,.22),X=new G(K,r);X.position.set(0,l+.29+.08,0),X.castShadow=!0,this.carriageGroup.add(X);const J=new ht(.04,.04,.06,8);for(const re of[-1,1]){const ge=new G(J,C);e?(ge.rotation.x=Math.PI/2,ge.position.set(re*.1,l+.29+.15,0)):(ge.rotation.z=Math.PI/2,ge.position.set(0,l+.29+.15,re*.1)),this.carriageGroup.add(ge)}this.forkGroup=new Rt,this.forkGroup.position.y=.5;const W=e?new ae(.3,.35,.12):new ae(.12,.35,.3),oe=new G(W,i);oe.castShadow=!0,this.forkGroup.add(oe);for(const re of[-1,1]){const ge=e?new ae(.05,.3,.15):new ae(.15,.3,.05),Re=new G(ge,r);Re.position.set(e?re*.13:0,0,e?-.04:re*.13),this.forkGroup.add(Re)}this.forkExtensionGroup=new Rt;const me=[-.12,.12];for(const re of me){const ge=e?new ae(.85,.06,.1):new ae(.1,.06,.85),Re=new G(ge,o);Re.position.set(e?0:re,-.07,e?re:0),Re.castShadow=!0,this.forkExtensionGroup.add(Re);const q=e?new ae(.06,.2,.1):new ae(.1,.2,.06),ne=new G(q,o);ne.position.set(e?-.4:re,-0,e?re:-.4),this.forkExtensionGroup.add(ne)}this.palletMesh=dn(),this.palletMesh.visible=!1,this.palletMesh.position.y=-.02,this.palletMesh.name="stacker-pallet",this.forkExtensionGroup.add(this.palletMesh),e?this.forkExtensionGroup.position.z=this.forkRestForward:this.forkExtensionGroup.position.x=this.forkRestForward,this.forkGroup.add(this.forkExtensionGroup),this.carriageGroup.add(this.forkGroup),this.mesh.add(this.carriageGroup)}isEntranceConveyor(e){const{x:t,z:n}=e.getGridPosition(),i=this.getConveyorOutputCell(e);return this.isOwnedCell(i.x,i.z)}getConveyorOutputCell(e){const{x:t,z:n}=e.getGridPosition();switch(e.direction){case"north":return{x:t,z:n-1};case"south":return{x:t,z:n+1};case"east":return{x:t+1,z:n};case"west":return{x:t-1,z:n}}}isOwnedCell(e,t){if(this.aisleCells.some(n=>n.x===e&&n.z===t))return!0;for(const n of this.childRacks){const i=n.getGridPosition();if(i.x===e&&i.z===t)return!0}return!1}getAisleIndex(e,t){if(this.aisleCells.length===0)return-1;const n=this.aisleCells[0];return this.aisleDirection==="north-south"?e!==n.x?-1:t-n.z:t!==n.z?-1:e-n.x}getCellSide(e,t){if(this.aisleCells.length===0)return 0;const n=this.aisleDirection==="north-south"?this.aisleCells[0].x:this.aisleCells[0].z;return(this.aisleDirection==="north-south"?e:t)<n?-1:1}update(e){if(Y.get("phase")==="operations")switch(this.automationState){case"idle":this.findWork();break;case"moving-to-pickup":case"moving-to-drop":this.advanceMovement(e);break;case"picking":this.advancePick(e);break;case"retracting-after-pick":this.advanceRetract(e,()=>this.findDropTarget());break;case"dropping":this.advanceDrop(e);break;case"retracting-after-drop":this.advanceRetract(e,()=>{this.automationState="idle",this.pickupConveyor=null,this.dropTarget=null});break}}findWork(){for(const e of this.childConveyors)if(e.hasPallet&&this.isEntranceConveyor(e)){this.pickupConveyor=e,this.automationState="moving-to-pickup",this.setMoveTarget(e);return}if(this.hasStoredPallets()){for(const e of this.childConveyors)if(!e.hasPallet&&!this.isEntranceConveyor(e)){const t=this.findRackWithPallets();if(t){this.pickupConveyor=null,this.dropTarget=e,this.carryingPallet=!1,this.automationState="moving-to-pickup",this.setMoveTargetForRack(t);return}}}}hasStoredPallets(){return this.childRacks.some(e=>e.storedPallets>0)}findRackWithPallets(){for(const e of this.childRacks)if(e.storedPallets>0)return e;return null}resetCarriageVelocity(){this.carriageVelocity=0}setMoveTarget(e){const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=.2,this.animationProgress=0,this.resetCarriageVelocity()}setMoveTargetForRack(e){const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=e.getPickupHeight(),this.dropTarget=e,this.animationProgress=0,this.resetCarriageVelocity()}getAisleIndexForAdjacentCell(e,t){return this.aisleDirection==="north-south"?t-this.aisleCells[0].z:e-this.aisleCells[0].x}advanceMovement(e){if(!this.carriageGroup||!this.forkGroup||!this.forkExtensionGroup)return;const t=this.aisleDirection==="north-south",n=t?this.carriageGroup.position.z:this.carriageGroup.position.x,i=this.carriageTarget,r=i-n,a=Math.abs(r);if(a>.005){const g=this.carriageVelocity*this.carriageVelocity/(2*this.carriageAccel);a<=g+.001?this.carriageVelocity=Math.max(this.carriageVelocity-this.carriageAccel*e,.05):this.carriageVelocity=Math.min(this.carriageVelocity+this.carriageAccel*e,this.carriageMaxSpeed);const v=Math.sign(r)*Math.min(this.carriageVelocity*e,a);t?this.carriageGroup.position.z+=v:this.carriageGroup.position.x+=v;return}this.carriageVelocity=0,t?this.carriageGroup.position.z=i:this.carriageGroup.position.x=i;const o=this.forkGroup.position.y,l=this.forkHeightTarget-o,c=this.forkLiftSpeed*e;if(Math.abs(l)>.01){this.forkGroup.position.y+=Math.sign(l)*Math.min(c,Math.abs(l));return}this.forkGroup.position.y=this.forkHeightTarget;const h=t?this.forkExtensionGroup.position.x:this.forkExtensionGroup.position.z,d=this.forkExtensionTarget*.6,u=d-h,f=this.forkExtendSpeed*e;if(Math.abs(u)>.01){const g=Math.sign(u)*Math.min(f,Math.abs(u));t?this.forkExtensionGroup.position.x+=g:this.forkExtensionGroup.position.z+=g;return}t?this.forkExtensionGroup.position.x=d:this.forkExtensionGroup.position.z=d,this.automationState==="moving-to-pickup"?(this.automationState="picking",this.animationProgress=0):(this.automationState="dropping",this.animationProgress=0)}advancePick(e){this.animationProgress+=e*2,this.animationProgress>=1&&(this.pickupConveyor&&this.pickupConveyor.hasPallet?(this.pickupConveyor.retrieve(),this.carryingPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)):this.dropTarget instanceof Xt&&this.dropTarget.storedPallets>0&&(this.dropTarget.retrieve(),Y.removeStoredPallet(),this.carryingPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)),this.automationState="retracting-after-pick")}advanceDrop(e){this.animationProgress+=e*2,this.animationProgress>=1&&(this.dropTarget instanceof je?this.dropTarget.canStore()&&(this.dropTarget.store(),this.carryingPallet=!1,this.palletMesh&&(this.palletMesh.visible=!1)):this.dropTarget instanceof Xt&&this.dropTarget.canStore()&&this.dropTarget.store()&&(Y.addStoredPallet(),this.carryingPallet=!1,this.palletMesh&&(this.palletMesh.visible=!1)),this.automationState="retracting-after-drop")}advanceRetract(e,t){if(!this.forkExtensionGroup){t();return}const n=this.aisleDirection==="north-south",r=0-(n?this.forkExtensionGroup.position.x:this.forkExtensionGroup.position.z),a=this.forkExtendSpeed*e;if(Math.abs(r)>.01){const o=Math.sign(r)*Math.min(a,Math.abs(r));n?this.forkExtensionGroup.position.x+=o:this.forkExtensionGroup.position.z+=o;return}n?this.forkExtensionGroup.position.x=0:this.forkExtensionGroup.position.z=0,t()}findDropTarget(){if(!this.carryingPallet){this.automationState="idle";return}for(const e of this.childConveyors)if(!e.hasPallet&&!this.isEntranceConveyor(e)){this.dropTarget=e,this.automationState="moving-to-drop",this.setMoveTarget(e);return}for(const e of this.childRacks)if(e.canStore()){this.dropTarget=e,this.automationState="moving-to-drop";const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=e.getStorageHeight(),this.animationProgress=0;return}this.automationState="idle"}toData(){return{...super.toData(),direction:this.aisleDirection==="north-south"?"north":"east",craneLength:this.length}}}class te extends Nt{speed=4;static BASE_WIDTH=.9;static BASE_HEIGHT=.3;static BASE_DEPTH=.85;static BASE_Y_POSITION=.25;static BATTERY_WIDTH=.75;static BATTERY_HEIGHT=.2;static BATTERY_DEPTH=.7;static BATTERY_Y_POSITION=.1;static BATTERY_Z_OFFSET=.1;static COUNTERWEIGHT_WIDTH=.85;static COUNTERWEIGHT_HEIGHT=.7;static COUNTERWEIGHT_DEPTH=.35;static COUNTERWEIGHT_Y_POSITION=.55;static COUNTERWEIGHT_Z_POSITION=-.35;static BUMPER_WIDTH=.9;static BUMPER_HEIGHT=.06;static BUMPER_DEPTH=.06;static BUMPER_Y_POSITION=.25;static BUMPER_Z_POSITION=-.55;static SENSOR_WIDTH=.3;static SENSOR_HEIGHT=.15;static SENSOR_DEPTH=.2;static SENSOR_Y_POSITION=1;static SENSOR_Z_POSITION=-.2;static LED_RADIUS=.03;static LED_HEIGHT=.04;static LED_SEGMENTS=8;static LED_Y_POSITION=1.07;static LED_Z_POSITION=-.15;static LED_SPACING=.08;static STATUS_LIGHT_WIDTH=.6;static STATUS_LIGHT_HEIGHT=.04;static STATUS_LIGHT_DEPTH=.04;static STATUS_LIGHT_Y_POSITION=.5;static STATUS_LIGHT_Z_POSITION=.45;static OUTER_POST_WIDTH=.08;static OUTER_POST_HEIGHT=2.2;static OUTER_POST_DEPTH=.08;static OUTER_POST_X_OFFSET=.32;static OUTER_POST_Y_POSITION=1.3;static OUTER_POST_Z_POSITION=.35;static BRACE_WIDTH=.72;static BRACE_HEIGHT=.04;static BRACE_DEPTH=.04;static BRACE_Y_POSITIONS=[.6,1.4,2.2];static INNER_MAST_Y_OFFSET=.1;static INNER_POST_WIDTH=.06;static INNER_POST_HEIGHT=1.8;static INNER_POST_DEPTH=.06;static INNER_POST_X_OFFSET=.28;static INNER_POST_Y_POSITION=1;static INNER_POST_Z_POSITION=.4;static CARRIAGE_WIDTH=.65;static CARRIAGE_HEIGHT=.12;static CARRIAGE_DEPTH=.25;static CARRIAGE_Y_POSITION=.28;static CARRIAGE_Z_POSITION=.55;static FORK_TINE_WIDTH=.08;static FORK_TINE_HEIGHT=.04;static FORK_TINE_LENGTH=.85;static FORK_X_OFFSET=.22;static FORK_Y_POSITION=.24;static FORK_Z_POSITION=.9;static FORK_MESH_WIDTH=.9;static FORK_MESH_HEIGHT=.05;static FORK_MESH_LENGTH=1;static FORK_MESH_Y_POSITION=.25;static FORK_MESH_Z_POSITION=.9;static PALLET_Y_OFFSET=.075;static PALLET_Z_OFFSET=0;static WHEEL_RADIUS=.12;static WHEEL_HEIGHT=.15;static WHEEL_SEGMENTS=16;static WHEEL_X_OFFSET=.4;static WHEEL_Y_POSITION=.12;static WHEEL_Z_FRONT=.35;static WHEEL_Z_BACK=-.35;static HUB_RADIUS=.06;static HUB_HEIGHT=.02;static HUB_SEGMENTS=8;static HUB_X_OFFSET=.08;static COLOR_BODY=15263976;static COLOR_DARK_STRUCTURAL=2899536;static COLOR_MAST=4545124;static COLOR_FORK=9479342;static COLOR_BUMPER_YELLOW=16771899;static COLOR_LED_BLUE=2201331;static COLOR_LED_GREEN=58998;static COLOR_WHEEL=1710618;static COLOR_HUB=7901340;static baseGeometry;static batteryBoxGeometry;static counterweightGeometry;static bumperGeometry;static sensorHousingGeometry;static ledGeometry;static statusLightGeometry;static outerPostGeometry;static braceGeometry;static innerPostGeometry;static carriageGeometry;static forkTineGeometry;static forkMeshGeometry;static wheelGeometry;static hubGeometry;static initGeometries(){this.baseGeometry||(this.baseGeometry=new ae(this.BASE_WIDTH,this.BASE_HEIGHT,this.BASE_DEPTH),this.batteryBoxGeometry=new ae(this.BATTERY_WIDTH,this.BATTERY_HEIGHT,this.BATTERY_DEPTH),this.counterweightGeometry=new ae(this.COUNTERWEIGHT_WIDTH,this.COUNTERWEIGHT_HEIGHT,this.COUNTERWEIGHT_DEPTH),this.bumperGeometry=new ae(this.BUMPER_WIDTH,this.BUMPER_HEIGHT,this.BUMPER_DEPTH),this.sensorHousingGeometry=new ae(this.SENSOR_WIDTH,this.SENSOR_HEIGHT,this.SENSOR_DEPTH),this.ledGeometry=new ht(this.LED_RADIUS,this.LED_RADIUS,this.LED_HEIGHT,this.LED_SEGMENTS),this.statusLightGeometry=new ae(this.STATUS_LIGHT_WIDTH,this.STATUS_LIGHT_HEIGHT,this.STATUS_LIGHT_DEPTH),this.outerPostGeometry=new ae(this.OUTER_POST_WIDTH,this.OUTER_POST_HEIGHT,this.OUTER_POST_DEPTH),this.braceGeometry=new ae(this.BRACE_WIDTH,this.BRACE_HEIGHT,this.BRACE_DEPTH),this.innerPostGeometry=new ae(this.INNER_POST_WIDTH,this.INNER_POST_HEIGHT,this.INNER_POST_DEPTH),this.carriageGeometry=new ae(this.CARRIAGE_WIDTH,this.CARRIAGE_HEIGHT,this.CARRIAGE_DEPTH),this.forkTineGeometry=new ae(this.FORK_TINE_WIDTH,this.FORK_TINE_HEIGHT,this.FORK_TINE_LENGTH),this.forkMeshGeometry=new ae(this.FORK_MESH_WIDTH,this.FORK_MESH_HEIGHT,this.FORK_MESH_LENGTH),this.wheelGeometry=new ht(this.WHEEL_RADIUS,this.WHEEL_RADIUS,this.WHEEL_HEIGHT,this.WHEEL_SEGMENTS),this.hubGeometry=new ht(this.HUB_RADIUS,this.HUB_RADIUS,this.HUB_HEIGHT,this.HUB_SEGMENTS))}constructor(){super("forklift-agv"),te.initGeometries(),this.mesh.clear(),this.createMesh()}createMesh(){const e=new Ee({color:te.COLOR_BODY,roughness:.3,metalness:.4}),t=new Ee({color:te.COLOR_DARK_STRUCTURAL,roughness:.5,metalness:.6}),n=new Ee({color:te.COLOR_MAST,roughness:.6,metalness:.7}),i=new Ee({color:te.COLOR_FORK,roughness:.4,metalness:.8}),r=new Ee({color:te.COLOR_BUMPER_YELLOW,roughness:.7,metalness:.3}),a=new Ee({color:te.COLOR_LED_BLUE,emissive:te.COLOR_LED_BLUE,emissiveIntensity:1,roughness:.1,metalness:.9}),o=new Ee({color:te.COLOR_LED_GREEN,emissive:te.COLOR_LED_GREEN,emissiveIntensity:.9,roughness:.2,metalness:.8}),l=new Ee({color:te.COLOR_WHEEL,roughness:.9,metalness:.1}),c=new Ee({color:te.COLOR_HUB,roughness:.3,metalness:.9}),h=new G(te.baseGeometry,e);h.position.set(0,te.BASE_Y_POSITION,0),h.castShadow=!0,h.receiveShadow=!0,this.mesh.add(h);const d=new G(te.batteryBoxGeometry,t);d.position.set(0,te.BATTERY_Y_POSITION,te.BATTERY_Z_OFFSET),d.castShadow=!0,this.mesh.add(d);const u=new G(te.counterweightGeometry,e);u.position.set(0,te.COUNTERWEIGHT_Y_POSITION,te.COUNTERWEIGHT_Z_POSITION),u.castShadow=!0,this.mesh.add(u);const f=new G(te.bumperGeometry,r);f.position.set(0,te.BUMPER_Y_POSITION,te.BUMPER_Z_POSITION),f.castShadow=!0,this.mesh.add(f);const g=new G(te.sensorHousingGeometry,t);g.position.set(0,te.SENSOR_Y_POSITION,te.SENSOR_Z_POSITION),g.castShadow=!0,this.mesh.add(g),[-te.LED_SPACING,0,te.LED_SPACING].forEach(M=>{const _=new G(te.ledGeometry,a);_.rotation.x=Math.PI/2,_.position.set(M,te.LED_Y_POSITION,te.LED_Z_POSITION),this.mesh.add(_)});const m=new G(te.statusLightGeometry,o);m.position.set(0,te.STATUS_LIGHT_Y_POSITION,te.STATUS_LIGHT_Z_POSITION),this.mesh.add(m);const p=new G(te.outerPostGeometry,n);p.position.set(-te.OUTER_POST_X_OFFSET,te.OUTER_POST_Y_POSITION,te.OUTER_POST_Z_POSITION),p.castShadow=!0,this.mesh.add(p);const b=new G(te.outerPostGeometry,n);b.position.set(te.OUTER_POST_X_OFFSET,te.OUTER_POST_Y_POSITION,te.OUTER_POST_Z_POSITION),b.castShadow=!0,this.mesh.add(b),te.BRACE_Y_POSITIONS.forEach(M=>{const _=new G(te.braceGeometry,n);_.position.set(0,M,te.OUTER_POST_Z_POSITION),_.castShadow=!0,this.mesh.add(_)}),this.innerMastGroup=new Rt,this.innerMastGroup.position.set(0,te.INNER_MAST_Y_OFFSET,0);const w=new G(te.innerPostGeometry,t);w.position.set(-te.INNER_POST_X_OFFSET,te.INNER_POST_Y_POSITION,te.INNER_POST_Z_POSITION),w.castShadow=!0,this.innerMastGroup.add(w);const S=new G(te.innerPostGeometry,t);S.position.set(te.INNER_POST_X_OFFSET,te.INNER_POST_Y_POSITION,te.INNER_POST_Z_POSITION),S.castShadow=!0,this.innerMastGroup.add(S);const L=new G(te.carriageGeometry,t);L.position.set(0,te.CARRIAGE_Y_POSITION,te.CARRIAGE_Z_POSITION),L.castShadow=!0,this.innerMastGroup.add(L);const A=new G(te.forkTineGeometry,i);A.position.set(-te.FORK_X_OFFSET,te.FORK_Y_POSITION,te.FORK_Z_POSITION),A.castShadow=!0,this.innerMastGroup.add(A);const E=new G(te.forkTineGeometry,i);E.position.set(te.FORK_X_OFFSET,te.FORK_Y_POSITION,te.FORK_Z_POSITION),E.castShadow=!0,this.innerMastGroup.add(E),this.forkMesh=new G(te.forkMeshGeometry,new Wn({visible:!1})),this.forkMesh.position.set(0,te.FORK_MESH_Y_POSITION,te.FORK_MESH_Z_POSITION),this.innerMastGroup.add(this.forkMesh),this.palletIndicator=dn(),this.palletIndicator.position.set(0,te.PALLET_Y_OFFSET,te.PALLET_Z_OFFSET),this.palletIndicator.visible=!1,this.palletIndicator.traverse(M=>{M instanceof G&&(M.castShadow=!0)}),this.forkMesh.add(this.palletIndicator),this.mesh.add(this.innerMastGroup),[[-te.WHEEL_X_OFFSET,te.WHEEL_Y_POSITION,te.WHEEL_Z_BACK],[te.WHEEL_X_OFFSET,te.WHEEL_Y_POSITION,te.WHEEL_Z_BACK],[-te.WHEEL_X_OFFSET,te.WHEEL_Y_POSITION,te.WHEEL_Z_FRONT],[te.WHEEL_X_OFFSET,te.WHEEL_Y_POSITION,te.WHEEL_Z_FRONT]].forEach(([M,_,k])=>{const N=new G(te.wheelGeometry,l);N.rotation.z=Math.PI/2,N.position.set(M,_,k),N.castShadow=!0,this.mesh.add(N);const F=new G(te.hubGeometry,c);F.rotation.z=Math.PI/2;const V=M>0?te.HUB_X_OFFSET:-te.HUB_X_OFFSET;F.position.set(M+V,_,k),this.mesh.add(F)})}}class Sg{grid;scene;activeTrucks=new Map;availableOutboundDocks=new Set;automatedDockPositionsCallback=null;pendingQueue=[];automatedTruckIds=new Set;constructor(e,t){this.scene=e,this.grid=t,this.setupEventListeners()}setupEventListeners(){P.on("outbound:request-truck",({orderId:e,quantity:t,reward:n,dockTime:i})=>{this.requestTruckForOrder(e,t,n,i)}),P.on("outbound:pallet-loaded",({truckId:e,orderId:t})=>{this.onPalletLoaded(e,t)}),P.on("outbound:order-expired",({orderId:e})=>{this.onOrderExpired(e)})}getOutboundDocks(){return this.grid.getCellsByType("dock").filter(e=>e.z===0&&e.entity instanceof vo).map(e=>e.entity)}refreshAvailableDocks(){const e=this.getOutboundDocks();for(const t of e.map(n=>n.getGridPosition().x)){let n=!1;for(const i of this.activeTrucks.values())if(i.truck.dockPosition===t&&i.truck.state!=="gone"){n=!0;break}n||this.availableOutboundDocks.add(t)}for(const t of this.availableOutboundDocks)e.some(n=>n.getGridPosition().x===t)||this.availableOutboundDocks.delete(t)}requestTruckForOrder(e,t,n,i){if(this.refreshAvailableDocks(),this.availableOutboundDocks.size===0)return console.warn("[OutboundTruckManager] No available outbound docks, queuing request for order",e),this.pendingQueue.push({orderId:e,quantity:t,reward:n,dockTime:i}),null;const r=this.automatedDockPositionsCallback?.()??new Set,a=Array.from(this.availableOutboundDocks).filter(g=>r.has(g)),o=a.length>0?a:Array.from(this.availableOutboundDocks),l=o[Math.floor(Math.random()*o.length)];this.availableOutboundDocks.delete(l);const c=this.getOutboundDocks().find(g=>g.getGridPosition().x===l);if(c===void 0)return console.error(`[OutboundTruckManager] Selected dock ${l} is not a valid outbound dock`),null;const h=new kn(0,l,c);h.maxPallets=t;const d=this.grid.gridToWorld(l,0);h.mesh.position.set(d.x,0,d.z-3),h.mesh.rotation.y=0,this.scene.add(h.mesh);const u={orderId:e,quantity:t,palletsLoaded:0,reward:n};this.activeTrucks.set(h.id,{truck:h,order:u}),i&&i>0&&h.setDeadline(i);const f=d.z-kn.CONTAINER_BACK_OFFSET;return h.animateArrival(f,()=>{P.emit("outbound:truck-docked",{truck:h,dockX:l,dockZ:0,orderId:u.orderId,quantity:u.quantity})}),console.log(`[OutboundTruckManager] Truck ${h.id} arriving for order ${e} (${t} pallets)`),h}onPalletLoaded(e,t){const n=this.activeTrucks.get(e);if(!n||n.order.orderId!==t){console.warn(`[OutboundTruckManager] Unknown truck ${e} or mismatched order`);return}n.order.palletsLoaded++,console.log(`[OutboundTruckManager] Truck ${e}: ${n.order.palletsLoaded}/${n.order.quantity} pallets loaded`),n.order.palletsLoaded>=n.order.quantity&&(console.log(`[OutboundTruckManager] Truck ${e} fully loaded, initiating departure`),this.truckDepart(n.truck,n.order))}onOrderExpired(e){const t=this.pendingQueue.findIndex(n=>n.orderId===e);if(t!==-1){this.pendingQueue.splice(t,1);return}for(const[n,i]of this.activeTrucks)if(i.order.orderId===e){console.log(`[OutboundTruckManager] Order ${e} expired, truck ${n} departing incomplete`),this.truckDepartIncomplete(i.truck,i.order);return}}getTruckForOrder(e){for(const[,t]of this.activeTrucks)if(t.order.orderId===e&&(t.truck.state==="docked"||t.truck.state==="unloading"))return t.truck;return null}getTruck(e){return this.activeTrucks.get(e)?.truck??null}getActiveTrucks(){return Array.from(this.activeTrucks.values()).filter(e=>e.truck.state==="docked"||e.truck.state==="unloading"||e.truck.state==="loading")}setAutomatedDockPositionsCallback(e){this.automatedDockPositionsCallback=e}markTruckAsAutomated(e){this.automatedTruckIds.add(e)}getTrucksNeedingTasks(){const e=[];for(const t of this.activeTrucks.values())t.truck.truckDock instanceof dt||this.automatedTruckIds.has(t.truck.id)||(t.truck.state==="docked"||t.truck.state==="loading")&&t.order.palletsLoaded<t.order.quantity&&e.push({truck:t.truck,order:t.order,dockX:t.truck.dockPosition,dockZ:0});return e}truckDepart(e,t){Y.get("gameMode")!=="challenge"&&Y.addMoney(t.reward),Y.completeOrder(),P.emit("outbound:order-completed",{orderId:t.orderId,reward:t.reward,palletsShipped:t.palletsLoaded}),e.animateDeparture(-1,()=>{this.availableOutboundDocks.add(e.dockPosition),this.processPendingQueue(),console.log(`[OutboundTruckManager] Truck ${e.id} departed for order ${t.orderId}`)}),P.emit("outbound:truck-departed",{truckId:e.id,orderId:t.orderId})}truckDepartIncomplete(e,t){console.log(`[OutboundTruckManager] Truck ${e.id} departing incomplete with ${t.palletsLoaded}/${t.quantity} pallets`),e.animateDeparture(-1,()=>{this.availableOutboundDocks.add(e.dockPosition),this.processPendingQueue()})}processPendingQueue(){for(;this.pendingQueue.length>0&&(this.refreshAvailableDocks(),this.availableOutboundDocks.size!==0);){const e=this.pendingQueue.shift();this.requestTruckForOrder(e.orderId,e.quantity,e.reward,e.dockTime)}}update(e){for(const[t,n]of this.activeTrucks)n.truck.update(e);for(const[t,n]of this.activeTrucks)n.truck.state==="gone"&&(console.log(`[OutboundTruckManager] Removing gone truck ${t}`),this.scene.remove(n.truck.mesh),n.truck.dispose(),this.activeTrucks.delete(t));this.processPendingQueue()}reset(){for(const[,e]of this.activeTrucks)this.scene.remove(e.truck.mesh),e.truck.dispose();this.activeTrucks.clear(),this.availableOutboundDocks.clear(),this.pendingQueue=[]}getActiveCount(){return this.activeTrucks.size}hasAvailableDock(){return this.refreshAvailableDocks(),this.availableOutboundDocks.size>0}}class bg{orders=[];orderIdCounter=0;currentWaveTimeRemaining=null;constructor(){P.on("pallet:stored",()=>{}),P.on("outbound:order-completed",({orderId:e})=>{this.completeOrder(e)}),P.on("wave:start",({config:e})=>{e&&typeof e.totalWaveTime=="number"?(this.currentWaveTimeRemaining=e.totalWaveTime,this.adjustPreviewOrderTimers()):this.currentWaveTimeRemaining=null}),P.on("wave:progress",({timeRemaining:e})=>{this.currentWaveTimeRemaining=e,this.clampActiveOrderTimers()}),P.on("wave:complete",()=>{this.currentWaveTimeRemaining=null}),P.on("outbound:truck-docked",({orderId:e,quantity:t,truck:n,dockX:i,dockZ:r})=>{P.emit("order:needs-loading",{orderId:e,quantity:t,truck:n,dockX:i,dockZ:r})})}getOrderConfig(e,t){const n=Math.max(1,Math.floor(t??mo(e).palletsPerTruck));return{minQuantity:1,maxQuantity:n,autoLaunchTime:Math.max(30,60-e*2),maxDockTime:40+n*3,reward:50+e*10}}createOrder(e){return this._createOrderWithStatus(e,"pending")}prepareForWave(e,t,n,i){const r=[];let a=null;if(typeof n=="number"&&n>0&&t>0){const l=n/(t+1),h=this.getOrderConfig(e,i).maxDockTime,d=Math.max(1,Math.round(l*.15));a=[];for(let u=0;u<t;u++){const f=Math.round(l*(u+1)),g=Math.floor(Math.random()*(d*2+1))-d;let v=f+g;v=Math.max(1,Math.min(n-1,v)),a.push(v)}a.sort((u,f)=>u-f);for(let u=0;u<a.length;u++){const f=Math.min(n-h,a[u]);a[u]>f&&(a[u]=f),u>0&&a[u]<=a[u-1]&&(a[u]=a[u-1]+1)}}let o=-1;for(let l=0;l<t;l++){const c=a?a[l]:void 0,h=this._createOrderWithStatus(e,"preview",c,i);if(typeof n=="number"&&n>0){const d=Math.min(n-h.maxDockTime,h.autoLaunchTime);h.autoLaunchTime>d&&(h.autoLaunchTime=d)}h.autoLaunchTime<=o&&(h.autoLaunchTime=o+1),o=h.autoLaunchTime,r.push(h)}return r}activateWaveOrders(){const e=this.orders.filter(t=>t.status==="preview");for(const t of e)t.status="pending",Y.addPendingOrder(),P.emit("order:created",t)}getPreviewOrders(){return this.orders.filter(e=>e.status==="preview")}_createOrderWithStatus(e,t,n,i){const r=this.getOrderConfig(e,i),a=Y.get("gameMode")==="challenge"?r.maxQuantity:Math.floor(Math.random()*(r.maxQuantity-r.minQuantity+1)+r.minQuantity),o={id:`order-${++this.orderIdCounter}`,quantity:a,autoLaunchTime:typeof n=="number"?n:r.autoLaunchTime,dockTimeRemaining:0,maxDockTime:r.maxDockTime,reward:r.reward*a,createdAt:Date.now(),status:t,palletsLoaded:0};return this.orders.push(o),t==="pending"&&(Y.addPendingOrder(),P.emit("order:created",o)),o}adjustPreviewOrderTimers(){if(this.currentWaveTimeRemaining!=null)for(const e of this.orders)e.status==="preview"&&(e.autoLaunchTime=Math.min(e.autoLaunchTime,this.currentWaveTimeRemaining),e.autoLaunchTime<0&&(e.autoLaunchTime=0))}clampActiveOrderTimers(){if(this.currentWaveTimeRemaining!=null)for(const e of this.orders)e.status==="pending"&&e.autoLaunchTime>this.currentWaveTimeRemaining&&(e.autoLaunchTime=Math.max(0,this.currentWaveTimeRemaining)),(e.status==="awaiting-truck"||e.status==="loading")&&e.dockTimeRemaining>this.currentWaveTimeRemaining&&(e.dockTimeRemaining=Math.max(0,this.currentWaveTimeRemaining))}fulfillOrder(e,t=!1){const n=this.getOrderById(e);if(!n)return!1;if(n.status!=="pending")return console.log(`[OrderManager] Order ${e} already being processed (status: ${n.status})`),!1;const i=Y.get("storedPallets");if(!t&&i<n.quantity)return!1;const r=a=>this.currentWaveTimeRemaining!=null?Math.min(a,this.currentWaveTimeRemaining):a;if(t)n.dockTimeRemaining=r(n.maxDockTime),console.log(`[OrderManager] Order ${e} auto-launched with dock time ${n.dockTimeRemaining.toFixed(1)}s`);else{n.dockTimeRemaining=r(n.maxDockTime);const a=Math.floor(n.reward*.2);n.reward+=a,console.log(`[OrderManager] Order ${e} shipped early: dock time ${n.dockTimeRemaining.toFixed(1)}s, bonus $${a}`)}return n.status="awaiting-truck",P.emit("outbound:request-truck",{orderId:n.id,quantity:n.quantity,reward:n.reward,dockTime:n.dockTimeRemaining}),!0}onPalletLoaded(e){const t=this.getOrderById(e);t&&(t.palletsLoaded++,t.status="loading",Y.removeStoredPallet(),P.emit("order:pallet-loaded",{orderId:e,palletsLoaded:t.palletsLoaded,palletsTotal:t.quantity}))}completeOrder(e){const t=this.orders.findIndex(i=>i.id===e);if(t===-1)return;const n=this.orders[t];n.status="shipped",this.orders.splice(t,1)}expireOrder(e){const t=this.orders.indexOf(e);t!==-1&&((e.status==="awaiting-truck"||e.status==="loading")&&P.emit("outbound:order-expired",{orderId:e.id}),this.orders.splice(t,1),Y.failOrder(),P.emit("order:expired",{orderId:e.id,reason:"dock-time"}))}update(e){const t=Y.get("phase"),n=[],i=[];this.orders.forEach(r=>{if(t==="operations")switch(r.status){case"preview":break;case"pending":r.autoLaunchTime-=e,r.autoLaunchTime<=0&&i.push(r);break;case"awaiting-truck":case"loading":r.dockTimeRemaining>0&&(r.dockTimeRemaining-=e,r.dockTimeRemaining<=0&&(console.log(`[OrderManager] Order ${r.id} dock time expired!`),n.push(r)));break}}),i.forEach(r=>{console.log(`[OrderManager] Auto-launching order ${r.id}`),this.fulfillOrder(r.id,!0)}),n.forEach(r=>this.expireOrder(r))}getOrders(){return this.orders}getOrderById(e){return this.orders.find(t=>t.id===e)}canFulfillOrder(e){const t=this.getOrderById(e);return t?Y.get("storedPallets")>=t.quantity:!1}getPendingOrderCount(){return this.orders.length}hasUnshippedOrders(){return this.orders.some(e=>e.status!=="shipped"&&e.status!=="preview")}getCommittedPallets(){return this.orders.filter(e=>e.status!=="shipped"&&e.status!=="preview").reduce((e,t)=>e+t.quantity,0)}reset(){this.orders=[],this.orderIdCounter=0}serialize(){return JSON.stringify({orders:this.orders,orderIdCounter:this.orderIdCounter})}deserialize(e){try{const t=JSON.parse(e);this.orders=t.orders||[],this.orderIdCounter=t.orderIdCounter||0}catch(t){console.error("Failed to deserialize orders:",t)}}}const fr=25,pr=50,mr=75,Nc=300,Ya=4,qa=4;function Za(s){return Math.floor(Nc*Math.pow(1.5,s))}function Ka(s){return Math.floor(Nc*Math.pow(1.5,s))}const wg=1e3,Fc=1;function ja(s){return wg*(s+1)}const $t={rack:{type:"rack",name:"Rack",cost:150,sellValue:75,description:"Stores up to 4 pallets vertically",icon:"🗄️",storageCapacity:4},"floor-slot":{type:"floor-slot",name:"Floor Slot",cost:20,sellValue:10,description:"Ground storage for 1 pallet",icon:"⬜",storageCapacity:1},conveyor:{type:"conveyor",name:"Conveyor",cost:100,sellValue:50,description:"Moves pallets automatically",icon:"➡️"},diverter:{type:"diverter",name:"Diverter",cost:150,sellValue:75,description:"Splits pallets to front, left and right via round-robin",icon:"🔀"},forklift:{type:"forklift",name:"Forklift",cost:500,sellValue:250,description:`Transports pallets, handles racks (wage: $${pr}/wave)`,icon:"🚜"},operator:{type:"operator",name:"Operator",cost:150,sellValue:75,description:`Manual labor for boxes (wage: $${fr}/wave)`,icon:"👷"},"truck-dock":{type:"truck-dock",name:"Truck Dock",cost:500,sellValue:250,description:"Allows trucks to dock and unload/load",icon:"🚛"},"automated-truck-dock":{type:"automated-truck-dock",name:"Auto Truck Dock",cost:5e3,sellValue:2500,description:"Automatically unloads trucks to an adjacent conveyor",icon:"🤖"},"stacker-crane":{type:"stacker-crane",name:"Stacker Crane",cost:1e4,sellValue:5e3,description:"AS/RS stacker crane — $10,000 base + $1,000/row. Includes 8-level racks & conveyors",icon:"🏗️"},"forklift-agv":{type:"forklift-agv",name:"Forklift AGV",cost:2500,sellValue:1250,description:`Fast autonomous forklift, no worker slot needed (wage: $${mr}/wave)`,icon:"🤖"}};class Tg{buildCounts=new Map;waveHistory=[];currentWaveOrderIncome=0;constructor(){P.on("entity:placed:complete",({type:e})=>{e&&$t[e]&&this.incrementBuildCount(e)}),P.on("entity:removed:complete",({type:e})=>{e&&$t[e]&&this.decrementBuildCount(e)}),P.on("outbound:order-completed",({reward:e})=>{this.currentWaveOrderIncome+=e}),P.on("wave:start",()=>{this.currentWaveOrderIncome=0})}getBuildableConfig(e){return $t[e]}getAllBuildables(){return Object.values($t)}canAfford(e){const t=$t[e];return Y.canAfford(t.cost)}getHiredWorkerCount(){return this.getBuildCount("operator")+this.getBuildCount("forklift")}canHireWorker(){return this.getHiredWorkerCount()<Y.get("workerLimit")}purchase(e){const t=$t[e];if((e==="operator"||e==="forklift")&&!this.canHireWorker()||!Y.spendMoney(t.cost))return!1;if(t.storageCapacity){const n=Y.get("storageCapacity");Y.updateStorageCapacity(n+t.storageCapacity)}return!0}sell(e){const t=$t[e];if(Y.addMoney(t.sellValue),t.storageCapacity){const n=Y.get("storageCapacity");Y.updateStorageCapacity(Math.max(0,n-t.storageCapacity))}return t.sellValue}incrementBuildCount(e){const t=this.buildCounts.get(e)||0;this.buildCounts.set(e,t+1)}decrementBuildCount(e){const t=this.buildCounts.get(e)||0;this.buildCounts.set(e,Math.max(0,t-1))}getBuildCount(e){return this.buildCounts.get(e)||0}getTotalBuildCount(){let e=0;return this.buildCounts.forEach(t=>e+=t),e}grantWaveBonus(e){const t=100+e*25;return Y.addMoney(t),t}deductWages(){const e=this.getBuildCount("operator"),t=this.getBuildCount("forklift"),n=this.getBuildCount("forklift-agv"),i=e*fr+t*pr+n*mr;if(i>0){const r=Y.get("money"),a=Math.min(i,r);Y.spendMoney(a)}return i}pushWaveRecord(e,t,n){const i=this.currentWaveOrderIncome;this.waveHistory.push({wave:e,bonus:t,orderIncome:i,wages:n,net:t+i-n})}getCurrentWaveOrderIncome(){return this.currentWaveOrderIncome}getWaveHistory(){return[...this.waveHistory]}serialize(){return JSON.stringify({waveHistory:this.waveHistory,currentWaveOrderIncome:this.currentWaveOrderIncome})}deserialize(e){try{const t=JSON.parse(e);this.waveHistory=t.waveHistory||[],this.currentWaveOrderIncome=t.currentWaveOrderIncome||0}catch(t){console.error("Failed to deserialize economy state:",t)}}reset(){this.buildCounts.clear(),this.waveHistory=[],this.currentWaveOrderIncome=0}}const Zs="warehouse-defender-save-",Vl="warehouse-defender-last-slot",Ks=5,ta=2;class Eg{grid=null;getEntities=null;orderManager=null;economyManager=null;waveManager=null;currentSlot=1;setGrid(e){this.grid=e}setEntityProvider(e){this.getEntities=e}setOrderManager(e){this.orderManager=e}setEconomyManager(e){this.economyManager=e}setWaveManager(e){this.waveManager=e}getCurrentSlot(){return this.currentSlot}setCurrentSlot(e){e>=1&&e<=Ks&&(this.currentSlot=e,localStorage.setItem(Vl,String(e)))}restoreLastSlot(){const e=parseInt(localStorage.getItem(Vl)??"1",10);this.currentSlot=isNaN(e)?1:Math.min(Math.max(e,1),Ks)}saveToSlot(e,t){if(!this.grid||!this.getEntities)return console.warn("SaveManager not fully initialized"),!1;if(e<1||e>Ks)return!1;try{const n=this.getEntities(),i={version:ta,timestamp:Date.now(),slotName:t??`Save ${e}`,gameState:Y.serialize(),orders:this.orderManager?this.orderManager.serialize():'{"orders":[],"orderIdCounter":0}',economyState:this.economyManager?this.economyManager.serialize():void 0,waveState:this.waveManager?this.waveManager.serialize():void 0,gridCells:this.serializeGrid(),entities:n.map(r=>r.toData())};return localStorage.setItem(Zs+e,JSON.stringify(i)),this.setCurrentSlot(e),console.log(`Game saved to slot ${e}`),!0}catch(n){return console.error("Failed to save game:",n),!1}}save(){return this.saveToSlot(this.currentSlot)}loadFromSlot(e){try{const t=localStorage.getItem(Zs+e);if(!t)return null;const n=JSON.parse(t);return n.version!==ta?(console.warn(`Slot ${e} has incompatible version, ignoring`),null):(this.setCurrentSlot(e),n)}catch(t){return console.error(`Failed to load slot ${e}:`,t),null}}load(){return this.loadFromSlot(this.currentSlot)}deleteSlot(e){localStorage.removeItem(Zs+e),this.currentSlot===e&&(this.currentSlot=1),console.log(`Slot ${e} deleted`)}deleteSave(){this.deleteSlot(this.currentSlot)}hasSave(){return this.getSlotInfo(this.currentSlot).exists}getSlotInfo(e){try{const t=localStorage.getItem(Zs+e);if(!t)return{slot:e,exists:!1};const n=JSON.parse(t);if(n.version!==ta)return{slot:e,exists:!1};const i=JSON.parse(n.gameState);return{slot:e,exists:!0,timestamp:n.timestamp,wave:i.wave,slotName:n.slotName}}catch{return{slot:e,exists:!1}}}getAllSlotInfos(){const e=[];for(let t=1;t<=Ks;t++)e.push(this.getSlotInfo(t));return e}getSaveInfo(){if(!this.getAllSlotInfos().some(n=>n.exists))return{exists:!1};const t=this.getAllSlotInfos().find(n=>n.exists);return t?{exists:!0,timestamp:t.timestamp,wave:t.wave}:{exists:!1}}serializeGrid(){if(!this.grid)return[];const e=[];for(let t=0;t<this.grid.width;t++)for(let n=0;n<this.grid.height;n++){const i=this.grid.getCell(t,n);i&&i.occupied&&e.push({x:i.x,z:i.z,type:i.type,occupied:i.occupied})}return e}setupAutoSave(){}}const ft=new Eg,na="warehouse-defender-challenges",ns=1,ki=[{id:1,name:"First Steps",description:"A single truck arrives with 2 pallets. Store them and fulfill 1 outbound order.",gridWidth:12,gridHeight:10,budget:400,workerLimit:2,initialEntities:[{type:"truck-dock",x:3,z:9},{type:"truck-dock",x:3,z:0}],wave:{truckCount:1,palletsPerTruck:2,timeBetweenTrucks:15,totalWaveTime:90,outboundOrderCount:1,outboundOrderPallets:2},stars:{oneStar:0,twoStars:50,threeStars:150},hint:"Place a rack and a forklift to handle the pallets.",allowedBuildables:["rack","floor-slot","forklift","operator"]},{id:2,name:"Double Trouble",description:"Two trucks bring 2 pallets each. Keep costs low!",gridWidth:14,gridHeight:10,budget:600,workerLimit:3,initialEntities:[{type:"truck-dock",x:3,z:9},{type:"truck-dock",x:7,z:9},{type:"truck-dock",x:5,z:0}],wave:{truckCount:2,palletsPerTruck:2,timeBetweenTrucks:12,totalWaveTime:100,outboundOrderCount:1,outboundOrderPallets:2},stars:{oneStar:0,twoStars:80,threeStars:200},hint:"Use operators — they are cheaper than forklifts but slower.",allowedBuildables:["rack","floor-slot","forklift","operator"]},{id:3,name:"Floor Storage",description:"Limited budget — floor slots are cheap but hold only 1 pallet each.",gridWidth:12,gridHeight:10,budget:350,workerLimit:2,initialEntities:[{type:"truck-dock",x:3,z:9},{type:"truck-dock",x:3,z:0}],wave:{truckCount:1,palletsPerTruck:3,timeBetweenTrucks:15,totalWaveTime:90,outboundOrderCount:1,outboundOrderPallets:3},stars:{oneStar:0,twoStars:30,threeStars:100},hint:"Floor slots cost just $20 each — great for tight budgets.",allowedBuildables:["floor-slot","operator","forklift"]},{id:4,name:"Belt Basics",description:"Use conveyors to move pallets from the dock to storage.",gridWidth:14,gridHeight:12,budget:800,workerLimit:1,initialEntities:[{type:"truck-dock",x:5,z:11},{type:"truck-dock",x:5,z:0}],wave:{truckCount:1,palletsPerTruck:4,timeBetweenTrucks:15,totalWaveTime:60,outboundOrderCount:1,outboundOrderPallets:4},stars:{oneStar:0,twoStars:100,threeStars:250},hint:"Connect conveyors from dock row to storage area. Workers pick from conveyor ends.",allowedBuildables:["floor-slot","conveyor","operator"]},{id:5,name:"Diverter Junction",description:"Use diverters to split pallet flow to multiple storage aisles.",gridWidth:16,gridHeight:14,budget:1200,workerLimit:4,initialEntities:[{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0},{type:"truck-dock",x:7,z:13}],wave:{truckCount:2,palletsPerTruck:4,timeBetweenTrucks:10,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:4},stars:{oneStar:0,twoStars:150,threeStars:400},hint:"Diverters send pallets left, right, and forward in round-robin order.",allowedBuildables:["floor-slot","conveyor","diverter","operator"]},{id:6,name:"Rush Hour",description:"3 trucks arrive with short intervals. Manage dock congestion!",gridWidth:18,gridHeight:14,budget:1500,workerLimit:5,initialEntities:[{type:"truck-dock",x:3,z:13},{type:"truck-dock",x:7,z:13},{type:"truck-dock",x:11,z:13},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:3,palletsPerTruck:3,timeBetweenTrucks:8,totalWaveTime:100,outboundOrderCount:2,outboundOrderPallets:3},stars:{oneStar:0,twoStars:200,threeStars:500},hint:"Position workers near docks so they can start unloading quickly.",allowedBuildables:["rack","floor-slot","conveyor","diverter","forklift","operator"]},{id:7,name:"Tight Budget",description:"Minimal funds — every dollar counts. 4 trucks, 2 pallets each.",gridWidth:16,gridHeight:12,budget:800,workerLimit:3,initialEntities:[{type:"truck-dock",x:3,z:11},{type:"truck-dock",x:7,z:11},{type:"truck-dock",x:11,z:11},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:4,palletsPerTruck:2,timeBetweenTrucks:10,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:2},stars:{oneStar:0,twoStars:50,threeStars:200},hint:"Operators ($150) are a lot cheaper than forklifts ($500). Use floor slots ($20) to save on storage.",allowedBuildables:["rack","floor-slot","conveyor","diverter","forklift","operator"]},{id:8,name:"Heavy Load",description:"Trucks carry 5 pallets each — you need serious storage capacity!",gridWidth:7,gridHeight:7,budget:2e3,workerLimit:5,initialEntities:[{type:"truck-dock",x:1,z:6},{type:"truck-dock",x:3,z:6},{type:"truck-dock",x:5,z:6},{type:"truck-dock",x:2,z:0},{type:"truck-dock",x:4,z:0}],wave:{truckCount:3,palletsPerTruck:5,timeBetweenTrucks:10,totalWaveTime:150,outboundOrderCount:3,outboundOrderPallets:5},stars:{oneStar:0,twoStars:300,threeStars:700},hint:"Racks store 4 pallets each — much more space-efficient than floor slots."},{id:9,name:"Automation 101",description:"Use automated truck docks to unload without workers.",gridWidth:5,gridHeight:16,budget:7e3,workerLimit:1,initialEntities:[{type:"truck-dock",x:2,z:0}],wave:{truckCount:3,palletsPerTruck:4,timeBetweenTrucks:8,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:4},stars:{oneStar:0,twoStars:500,threeStars:1e3},allowedBuildables:["conveyor","diverter","automated-truck-dock","operator","truck-dock"],hint:"Automated docks ($5,000) unload trucks automatically via connected conveyors. Expensive but saves on wages."},{id:10,name:"AGV Fleet",description:"Forklift AGVs don't need worker slots. Build an automated fleet.",gridWidth:20,gridHeight:16,budget:1e4,workerLimit:0,initialEntities:[{type:"truck-dock",x:4,z:15},{type:"truck-dock",x:8,z:15},{type:"truck-dock",x:12,z:15},{type:"truck-dock",x:6,z:0},{type:"truck-dock",x:10,z:0}],wave:{truckCount:4,palletsPerTruck:4,timeBetweenTrucks:8,totalWaveTime:150,outboundOrderCount:3,outboundOrderPallets:4},allowedBuildables:["rack","floor-slot","conveyor","diverter","forklift-agv"],stars:{oneStar:0,twoStars:1e3,threeStars:3e3},hint:"AGVs ($2,500) don't count toward your worker limit — perfect when slots are scarce."},{id:11,name:"The Gauntlet",description:"5 trucks, 5 pallets each, tight timer. Can you handle it?",gridWidth:20,gridHeight:16,budget:3e3,workerLimit:6,initialEntities:[{type:"truck-dock",x:3,z:15},{type:"truck-dock",x:6,z:15},{type:"truck-dock",x:9,z:15},{type:"truck-dock",x:12,z:15},{type:"truck-dock",x:15,z:15},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0},{type:"truck-dock",x:13,z:0}],wave:{truckCount:5,palletsPerTruck:5,timeBetweenTrucks:6,totalWaveTime:120,outboundOrderCount:4,outboundOrderPallets:5},stars:{oneStar:0,twoStars:400,threeStars:1e3},hint:"Spread workers across docks and use close-by storage to minimize travel time."},{id:12,name:"Penny Pincher",description:"Very limited budget, heavy wave. Master cost efficiency.",gridWidth:16,gridHeight:12,budget:600,workerLimit:3,initialEntities:[{type:"truck-dock",x:3,z:11},{type:"truck-dock",x:7,z:11},{type:"truck-dock",x:11,z:11},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:3,palletsPerTruck:3,timeBetweenTrucks:10,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:3},stars:{oneStar:0,twoStars:30,threeStars:100},hint:"Operators + floor slots = cheapest possible setup."},{id:13,name:"Full Automation",description:"Build a fully automated warehouse — no manual workers allowed!",gridWidth:20,gridHeight:16,budget:25e3,workerLimit:0,initialEntities:[{type:"truck-dock",x:4,z:15},{type:"truck-dock",x:8,z:15},{type:"truck-dock",x:12,z:15},{type:"truck-dock",x:16,z:15},{type:"truck-dock",x:6,z:0},{type:"truck-dock",x:10,z:0},{type:"truck-dock",x:14,z:0}],wave:{truckCount:4,palletsPerTruck:6,timeBetweenTrucks:8,totalWaveTime:180,outboundOrderCount:3,outboundOrderPallets:6},stars:{oneStar:0,twoStars:3e3,threeStars:8e3},hint:"Automated docks + conveyors + AGVs = no workers needed.",allowedBuildables:["rack","floor-slot","conveyor","diverter","automated-truck-dock","forklift-agv","stacker-crane"]},{id:14,name:"Stacker Challenge",description:"Use stacker cranes for high-density storage in a narrow warehouse.",gridWidth:20,gridHeight:20,budget:15e3,workerLimit:4,initialEntities:[{type:"truck-dock",x:5,z:19},{type:"truck-dock",x:10,z:19},{type:"truck-dock",x:15,z:19},{type:"truck-dock",x:7,z:0},{type:"truck-dock",x:12,z:0}],wave:{truckCount:4,palletsPerTruck:6,timeBetweenTrucks:8,totalWaveTime:180,outboundOrderCount:3,outboundOrderPallets:6},stars:{oneStar:0,twoStars:2e3,threeStars:5e3},hint:"Stacker cranes automatically manage racks along their rail. Place rows of racks next to the crane."},{id:15,name:"Grand Finale",description:"The ultimate challenge — massive wave, limited budget, small grid.",gridWidth:16,gridHeight:14,budget:2500,workerLimit:5,initialEntities:[{type:"truck-dock",x:2,z:13},{type:"truck-dock",x:5,z:13},{type:"truck-dock",x:8,z:13},{type:"truck-dock",x:11,z:13},{type:"truck-dock",x:3,z:0},{type:"truck-dock",x:7,z:0},{type:"truck-dock",x:11,z:0}],wave:{truckCount:6,palletsPerTruck:5,timeBetweenTrucks:5,totalWaveTime:120,outboundOrderCount:5,outboundOrderPallets:5},stars:{oneStar:0,twoStars:200,threeStars:600},hint:"You'll need a perfect layout. Mix operators and forklifts, use every available cell wisely."}];class Pg{progress;activeChallengeId=null;constructor(){this.progress=this.loadProgress()}getLevels(){return ki}getLevel(e){return ki.find(t=>t.id===e)}getLevelCount(){return ki.length}isLevelUnlocked(e){if(e===1)return!0;const t=this.progress.levels[e-1];return!!t&&t.stars>0}getActiveChallengeId(){return this.activeChallengeId}getActiveChallenge(){return this.activeChallengeId===null?null:this.getLevel(this.activeChallengeId)??null}setActiveChallenge(e){this.activeChallengeId=e}clearActiveChallenge(){this.activeChallengeId=null}isInChallengeMode(){return this.activeChallengeId!==null}calculateStars(e,t,n){if(n)return 0;const i=this.getLevel(e);if(!i)return 0;const{stars:r}=i;return t>=r.threeStars?3:t>=r.twoStars?2:t>=r.oneStar?1:0}getLevelProgress(e){return this.progress.levels[e]}getLevelStars(e){return this.progress.levels[e]?.stars??0}getTotalStars(){return Object.values(this.progress.levels).reduce((e,t)=>e+t.stars,0)}getMaxTotalStars(){return ki.length*3}getCompletedCount(){return Object.values(this.progress.levels).filter(e=>e.stars>0).length}recordCompletion(e,t,n){const i=this.progress.levels[e],r={levelId:e,stars:Math.max(t,i?.stars??0),bestRemainingMoney:Math.max(n,i?.bestRemainingMoney??0),completedAt:Date.now()};return this.progress.levels[e]=r,this.saveProgress(),r}loadProgress(){try{const e=localStorage.getItem(na);if(!e)return{version:ns,levels:{}};const t=JSON.parse(e);return t.version!==ns?{version:ns,levels:{}}:t}catch{return{version:ns,levels:{}}}}saveProgress(){try{localStorage.setItem(na,JSON.stringify(this.progress))}catch(e){console.error("Failed to save challenge progress:",e)}}resetProgress(){this.progress={version:ns,levels:{}},localStorage.removeItem(na)}getProgressData(){return this.progress}}const Et=new Pg;class Ag{camera;canvas;raycaster;groundPlane;state={mouseX:0,mouseY:0,mouseWorldPos:new R,isMouseDown:!1,isDragging:!1,rightMouseDown:!1,keys:new Set,touches:new Map};dragStart={x:0,y:0};DRAG_THRESHOLD=5;isMultiSelectActive=!1;shiftKeyDown=!1;shiftActivatedByKey=!1;touchState={initialDistance:0,initialAngle:0,lastDistance:0,lastAngle:0,isPinching:!1,touchStartTime:0,touchMoved:!1,lastTouchPos:{x:0,y:0}};constructor(e,t){this.camera=e,this.canvas=t,this.raycaster=new Pc,this.groundPlane=new Tn(new R(0,1,0),0),this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("mouseup",this.onMouseUp),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this.onContextMenu),this.canvas.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this.onTouchEnd,{passive:!1}),this.canvas.addEventListener("touchcancel",this.onTouchEnd,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("dragstart",t=>t.preventDefault()),P.on("multi-select:active:changed",({active:t})=>{this.isMultiSelectActive=t}),P.on("input:camera-rotate-left",()=>this.camera.rotate(-Math.PI/4)),P.on("input:camera-rotate-right",()=>this.camera.rotate(Math.PI/4));const e=["isometric","top"];P.on("input:camera-view",t=>{e.includes(t)&&this.camera.setView(t)})}onMouseMove=e=>{if(this.state.mouseX=e.clientX,this.state.mouseY=e.clientY,this.updateWorldPosition(),this.state.rightMouseDown){const t=e.clientX-this.dragStart.x,n=e.clientY-this.dragStart.y;(Math.abs(t)>this.DRAG_THRESHOLD||Math.abs(n)>this.DRAG_THRESHOLD)&&(this.state.isDragging=!0,this.camera.pan(t,n),this.dragStart.x=e.clientX,this.dragStart.y=e.clientY)}P.emit("input:mousemove",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone()})};onMouseDown=e=>{e.button===0?(this.state.isMouseDown=!0,this.dragStart={x:e.clientX,y:e.clientY},P.emit("input:click",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone(),target:e.target})):e.button===2&&(this.state.rightMouseDown=!0,this.dragStart={x:e.clientX,y:e.clientY})};onMouseUp=e=>{e.button===0?(this.state.isMouseDown=!1,this.state.isDragging=!1,P.emit("input:mouseup",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone()})):e.button===2&&(this.state.rightMouseDown=!1,this.state.isDragging=!1)};onWheel=e=>{e.preventDefault();const t=e.deltaY>0?-1:1;this.camera.zoomOut(t),P.emit("input:zoom",{delta:t})};onContextMenu=e=>{e.preventDefault()};onTouchStart=e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];this.state.touches.set(n.identifier,{x:n.clientX,y:n.clientY})}if(e.touches.length===1){const t=e.touches[0];if(this.touchState.touchStartTime=Date.now(),this.touchState.touchMoved=!1,this.touchState.lastTouchPos={x:t.clientX,y:t.clientY},this.state.mouseX=t.clientX,this.state.mouseY=t.clientY,this.updateWorldPosition(),this.isMultiSelectActive){const n=document.elementFromPoint(t.clientX,t.clientY);P.emit("input:click",{screenX:t.clientX,screenY:t.clientY,worldPos:this.state.mouseWorldPos.clone(),target:n}),this.touchState.touchMoved=!0}}else if(e.touches.length===2){this.touchState.isPinching=!0;const t=e.touches[0],n=e.touches[1];this.touchState.initialDistance=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),this.touchState.initialAngle=Math.atan2(n.clientY-t.clientY,n.clientX-t.clientX),this.touchState.lastDistance=this.touchState.initialDistance,this.touchState.lastAngle=this.touchState.initialAngle}};onTouchMove=e=>{e.preventDefault();const t=e.touches;for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches[n];this.state.touches.set(i.identifier,{x:i.clientX,y:i.clientY})}if(t.length===1){const n=t[0],i=n.clientX-this.touchState.lastTouchPos.x,r=n.clientY-this.touchState.lastTouchPos.y;this.isMultiSelectActive?(this.touchState.touchMoved=!0,this.touchState.lastTouchPos={x:n.clientX,y:n.clientY},this.state.mouseX=n.clientX,this.state.mouseY=n.clientY,this.updateWorldPosition(),P.emit("input:mousemove",{screenX:n.clientX,screenY:n.clientY,worldPos:this.state.mouseWorldPos.clone()})):((Math.abs(i)>this.DRAG_THRESHOLD||Math.abs(r)>this.DRAG_THRESHOLD)&&(this.touchState.touchMoved=!0,this.camera.pan(i,r)),this.touchState.lastTouchPos={x:n.clientX,y:n.clientY},this.state.mouseX=n.clientX,this.state.mouseY=n.clientY,this.updateWorldPosition())}else if(t.length===2){const n=t[0],i=t[1],r=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),a=Math.atan2(i.clientY-n.clientY,i.clientX-n.clientX),o=r-this.touchState.lastDistance;if(Math.abs(o)>2){const c=o*.05;this.camera.zoomOut(-c),this.touchState.lastDistance=r}let l=a-this.touchState.lastAngle;l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),Math.abs(l)>.02&&(this.camera.rotate(l),this.touchState.lastAngle=a),this.touchState.touchMoved=!0}};onTouchEnd=e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)this.state.touches.delete(e.changedTouches[t].identifier);if(e.touches.length===0){const t=Date.now()-this.touchState.touchStartTime;if(this.isMultiSelectActive)P.emit("input:mouseup",{screenX:this.touchState.lastTouchPos.x,screenY:this.touchState.lastTouchPos.y,worldPos:this.state.mouseWorldPos.clone()});else if(!this.touchState.touchMoved&&t<300){const n=e.changedTouches[0],i=n?document.elementFromPoint(n.clientX,n.clientY):e.target;P.emit("input:click",{screenX:this.touchState.lastTouchPos.x,screenY:this.touchState.lastTouchPos.y,worldPos:this.state.mouseWorldPos.clone(),target:i})}this.touchState.isPinching=!1}else if(this.touchState.isPinching=!1,e.touches.length===1){const t=e.touches[0];this.touchState.lastTouchPos={x:t.clientX,y:t.clientY}}};onKeyDown=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)&&!((e.metaKey||e.ctrlKey)&&e.code==="KeyD")){switch(this.state.keys.add(e.code),e.code){case"Escape":P.emit("input:escape");break;case"Space":e.preventDefault(),P.emit("input:space");break;case"KeyR":P.emit("input:rotate");break;case"KeyQ":this.camera.rotate(Math.PI/4);break;case"KeyE":this.camera.rotate(-Math.PI/4);break;case"Delete":case"Backspace":P.emit("input:delete");break;case"KeyM":P.emit("input:move-shortcut");break;case"Digit1":case"Digit2":case"Digit3":P.emit("input:number",{number:parseInt(e.code.slice(-1))});break}(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.shiftKeyDown||(this.shiftKeyDown=!0,this.isMultiSelectActive?this.shiftActivatedByKey=!1:(P.emit("ui:multi-select-activate",{source:"shift"}),this.shiftActivatedByKey=!0))),P.emit("input:keydown",{code:e.code,key:e.key})}};onKeyUp=e=>{this.state.keys.delete(e.code),P.emit("input:keyup",{code:e.code,key:e.key}),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.shiftKeyDown=!1,this.shiftActivatedByKey&&(P.emit("ui:multi-select-deactivate",{source:"shift"}),this.shiftActivatedByKey=!1))};updateWorldPosition(){const e=this.state.mouseX/window.innerWidth*2-1,t=-(this.state.mouseY/window.innerHeight)*2+1;this.raycaster.setFromCamera(new Oe(e,t),this.camera.instance);const n=new R;this.raycaster.ray.intersectPlane(this.groundPlane,n),n&&this.state.mouseWorldPos.copy(n)}getState(){return this.state}getMouseWorldPosition(){return this.state.mouseWorldPos.clone()}isKeyDown(e){return this.state.keys.has(e)}update(e){const t=10*e;(this.isKeyDown("KeyW")||this.isKeyDown("ArrowUp"))&&this.camera.pan(0,t*50),(this.isKeyDown("KeyS")||this.isKeyDown("ArrowDown"))&&this.camera.pan(0,-t*50),(this.isKeyDown("KeyA")||this.isKeyDown("ArrowLeft"))&&this.camera.pan(t*50,0),(this.isKeyDown("KeyD")||this.isKeyDown("ArrowRight"))&&this.camera.pan(-t*50,0)}raycastObjects(e){const t=this.state.mouseX/window.innerWidth*2-1,n=-(this.state.mouseY/window.innerHeight)*2+1;return this.raycaster.setFromCamera(new Oe(t,n),this.camera.instance),this.raycaster.intersectObjects(e,!0)}dispose(){this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("touchend",this.onTouchEnd),this.canvas.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}}function $l(s,e,t,n){const i=t-s,r=n-e;if(i===0&&r===0)return[{x:s,z:e,direction:"south"}];const a=[];if(Math.abs(i)>=Math.abs(r)){const o=i>0?"east":"west",l=i>0?1:-1;for(let c=s;c!==t+l;c+=l)a.push({x:c,z:e,direction:o})}else{const o=r>0?"south":"north",l=r>0?1:-1;for(let c=e;c!==n+l;c+=l)a.push({x:s,z:c,direction:o})}return a}class Hi{registry=new Map;entryPointCache=null;register(e,t,n){this.registry.set(`${t},${n}`,e),this.entryPointCache=null}unregister(e,t){const n=`${e},${t}`,i=this.registry.get(n);if(i){for(const r of this.registry.values())r.unlinkTarget(i);this.registry.delete(n),this.entryPointCache=null}return i??null}getAt(e,t){return this.registry.get(`${e},${t}`)??null}getMap(){return this.registry}entries(){return this.registry.entries()}values(){return this.registry.values()}get size(){return this.registry.size}isEntryPoint(e){return this.entryPointCache===null&&this.rebuildEntryPointCache(),this.entryPointCache.has(e)}isExitPoint(e){return e.isUnlinked()}invalidateCache(){this.entryPointCache=null}rebuildEntryPointCache(){const e=new Set;e:for(const t of this.registry.values()){for(const n of this.registry.values())if(n!==t&&n.hasLinkTo(t))continue e;e.add(t)}this.entryPointCache=e}linkConveyor(e,t,n){for(const{slot:i,offset:r}of e.getOutputSlots()){const a=this.getAt(t+r.dx,n+r.dz);a&&Hi.acceptsFrom(a,r)&&e.setLink(i,a)}for(const[i,r]of[[-1,0],[1,0],[0,-1],[0,1]]){const a=this.getAt(t+i,n+r);if(a)for(const{slot:o,offset:l}of a.getOutputSlots())l.dx!==-i||l.dz!==-r||Hi.acceptsFrom(e,l)&&a.setLink(o,e)}this.entryPointCache=null}static acceptsFrom(e,t){const n=e.getInputOffsets();if(n===null)return!0;const i=-t.dx,r=-t.dz;return n.some(a=>a.dx===i&&a.dz===r)}relinkAll(e){const t=e??Array.from(this.registry.values());for(const n of t)n.clearLinks();for(const[n,i]of this.registry){const[r,a]=n.split(",").map(Number);this.linkConveyor(i,r,a)}this.entryPointCache=null}linkAutomatedDockAt(e,t,n){const i=n(e,t);if(i){if(i instanceof dt){const r=[t-1,t+1,t-2,t+2];for(const a of r){const o=n(e,a);if(o instanceof je){i.setLink(0,o),o.isAutomationEntrance=!0,o.isAutomationExit=!0;return}}}else if(i instanceof je){const r=[t-1,t+1,t-2,t+2];for(const a of r){const o=n(e,a);o instanceof dt&&o.isUnlinked()&&(o.setLink(0,i),i.isAutomationEntrance=!0,i.isAutomationExit=!0)}}}}isConnectedToAutomatedDock(e,t){return t.some(n=>n.hasLinkTo(e))}reset(){this.registry.clear(),this.entryPointCache=null}}class Cg{grid;scene;economy;conveyorManager;selectedType=null;previewEntity=null;previewMesh=null;isPlacementMode=!1;conveyorDirection="north";isLineMode=!1;lineStartPos=null;linePreviewEntities=[];placedEntities=new Map;constructor(e,t,n,i){this.scene=e,this.grid=t,this.economy=n,this.conveyorManager=i??new Hi,this.setupEventListeners()}setupEventListeners(){P.on("ui:build-select",({type:e})=>{e===null?this.cancelPlacement():this.selectBuildable(e)}),P.on("input:mousemove",({worldPos:e})=>{this.updatePreview(e)}),P.on("input:click",({worldPos:e})=>{this.isPlacementMode&&this.selectedType&&this.attemptPlace(e)}),P.on("input:escape",()=>{this.isLineMode&&this.lineStartPos!==null?(this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0)):this.cancelPlacement()}),P.on("input:rotate",()=>{this.rotatePreview()}),P.on("ui:conveyor-line-mode",({enabled:e})=>{this.setLineMode(e)}),P.on("phase:operations",()=>{this.cancelPlacement()}),P.on("grid:expanded",({shiftX:e,shiftZ:t})=>{if(e===0&&t===0)return;const n=Array.from(this.placedEntities.entries());this.placedEntities.clear();for(const[,i]of n){const{x:r,z:a}=i.getGridPosition(),o=r+e,l=a+t;i.setGridPosition(o,l),this.placedEntities.set(`${o},${l}`,i)}})}selectBuildable(e){Y.get("phase")==="build"&&this.economy.canAfford(e)&&(this.clearPreview(),this.selectedType=e,this.isPlacementMode=!0,this.createPreview(e),e==="stacker-crane"&&(this.isLineMode=!0,this.lineStartPos=null,this.clearLinePreview(),P.emit("ui:conveyor-line-status",{status:"start"})),P.emit("entity:selected",{type:e}))}createPreview(e){let t;switch(e){case"rack":t=new Xt;break;case"floor-slot":t=new os;break;case"conveyor":t=new je(this.conveyorDirection);break;case"diverter":t=new Ot(this.conveyorDirection);break;case"forklift":t=new Nt;break;case"forklift-agv":t=new te;break;case"operator":t=new Tt;break;case"truck-dock":t=new Hl;break;case"automated-truck-dock":t=new dt;break;case"stacker-crane":t=new ei(1,"north-south");break;default:return}t.mesh.traverse(n=>{if(n instanceof G){const i=n.material;n.material=i.clone(),n.material.transparent=!0,n.material.opacity=.6}}),this.previewEntity=t,this.previewMesh=t.mesh,this.scene.add(this.previewMesh)}updatePreview(e){if(!this.previewMesh||!this.isPlacementMode)return;if((this.selectedType==="conveyor"||this.selectedType==="stacker-crane")&&this.isLineMode&&this.lineStartPos!==null){this.updateLinePreview(e);return}const t=this.grid.worldToGrid(e);if(t){const n=this.grid.gridToWorld(t.x,t.z);this.previewMesh.position.copy(n);let i=this.grid.canPlace(t.x,t.z);if(this.selectedType==="truck-dock"||this.selectedType==="automated-truck-dock"){const r=t.z===this.grid.height-1,a=t.z===0;!r&&!a&&(i=!1)}else{const r=this.grid.getCell(t.x,t.z);r&&r.type==="dock"&&(i=!1)}this.grid.highlightCell(e,i),this.updatePreviewColor(i&&this.economy.canAfford(this.selectedType))}else this.grid.hideHighlight()}updatePreviewColor(e){this.previewMesh&&this.previewMesh.traverse(t=>{if(t instanceof G){const n=t.material;e?n.emissive.setHex(17408):n.emissive.setHex(4456448)}})}attemptPlace(e){if(!this.selectedType)return;if((this.selectedType==="conveyor"||this.selectedType==="stacker-crane")&&this.isLineMode){this.attemptPlaceLine(e);return}const t=this.grid.worldToGrid(e);if(!t)return;let n=this.grid.canPlace(t.x,t.z);if(this.selectedType==="truck-dock"||this.selectedType==="automated-truck-dock"){const a=t.z===this.grid.height-1,o=t.z===0;!a&&!o&&(n=!1)}else{const a=this.grid.getCell(t.x,t.z);a&&a.type==="dock"&&(n=!1)}if(!n||!this.economy.purchase(this.selectedType))return;const i=this.createEntity(this.selectedType);if(!i)return;const r=this.getCellType(this.selectedType);this.grid.place(t.x,t.z,i,r),i.setGridPosition(t.x,t.z),this.scene.add(i.mesh),this.placedEntities.set(`${t.x},${t.z}`,i),this.linkAutomatedDockConveyor(t.x,t.z),i instanceof dt&&i.orientMesh(t.z,this.grid.height),P.emit("entity:placed:complete",{entity:i,type:this.selectedType,gridX:t.x,gridZ:t.z}),this.economy.canAfford(this.selectedType)||this.cancelPlacement()}placeEntity(e,t,n,i){const r=this.createEntity(e,i?.direction,i?.capacity,i?.craneLength);if(!r)return null;const a=this.getCellType(e);if(!this.grid.place(t,n,r,a))return null;if(r.setGridPosition(t,n),r instanceof ei&&r.recomputeAisleCells(),i?.storageType&&"storageType"in r&&(r.storageType=i.storageType),i?.allowedTaskTypes!==void 0&&"allowedTaskTypes"in r&&(r.allowedTaskTypes=i.allowedTaskTypes??null),i?.storedPallets&&r instanceof Xt)for(let o=0;o<i.storedPallets;o++)r.store();else i?.hasPallet&&"store"in r&&r.store();return this.scene.add(r.mesh),this.placedEntities.set(`${t},${n}`,r),this.linkAutomatedDockConveyor(t,n),r instanceof dt&&r.orientMesh(n,this.grid.height),P.emit("entity:placed:complete",{entity:r,type:e,gridX:t,gridZ:n}),r}createEntity(e,t,n,i){switch(e){case"rack":return new Xt(n??4);case"floor-slot":return new os;case"conveyor":return new je(t||this.conveyorDirection);case"diverter":return new Ot(t||this.conveyorDirection);case"forklift":return new Nt;case"forklift-agv":return new te;case"operator":return new Tt;case"truck-dock":return new Hl;case"automated-truck-dock":return new dt;case"stacker-crane":{const r=t==="east"||t==="west"?"east-west":"north-south",a=i??1;return new ei(a,r)}default:return null}}getCellType(e){switch(e){case"rack":return"rack";case"floor-slot":return"floor";case"conveyor":return"conveyor";case"diverter":return"conveyor";case"stacker-crane":return"conveyor";case"truck-dock":return"dock";case"automated-truck-dock":return"dock";default:return"floor"}}rotatePreview(){if(!this.isPlacementMode||this.selectedType!=="conveyor"&&this.selectedType!=="diverter")return;const e=["south","west","north","east"],t=e.indexOf(this.conveyorDirection);this.conveyorDirection=e[(t+1)%4],this.previewEntity instanceof je&&this.previewEntity.setDirection(this.conveyorDirection)}clearPreview(){this.previewMesh&&(this.scene.remove(this.previewMesh),this.previewEntity?.dispose(),this.previewMesh=null,this.previewEntity=null),this.grid.hideHighlight()}cancelPlacement(){this.clearPreview(),this.clearLinePreview(),this.lineStartPos=null,this.isLineMode=!1,this.selectedType=null,this.isPlacementMode=!1,P.emit("entity:selected",{type:null})}setLineMode(e){this.isLineMode=e,this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),e&&P.emit("ui:conveyor-line-status",{status:"start"})}clearLinePreview(){for(const e of this.linePreviewEntities)this.scene.remove(e.mesh),e.dispose();this.linePreviewEntities=[]}updateLinePreview(e){this.clearLinePreview();const t=this.grid.worldToGrid(e);if(!t||!this.lineStartPos)return;if(this.previewMesh&&(this.previewMesh.visible=!1),this.selectedType==="stacker-crane"){this.updateStackerCranePreview(t);return}const n=$l(this.lineStartPos.x,this.lineStartPos.z,t.x,t.z);for(const i of n){const r=this.grid.canPlace(i.x,i.z),a=this.grid.getCell(i.x,i.z),o=r&&(!a||a.type!=="dock")&&this.economy.canAfford("conveyor"),l=new je(i.direction);l.mesh.traverse(h=>{if(h instanceof G){const d=h.material.clone();d.transparent=!0,d.opacity=.6,d.emissive.setHex(o?17408:4456448),h.material=d}});const c=this.grid.gridToWorld(i.x,i.z);l.mesh.position.copy(c),this.scene.add(l.mesh),this.linePreviewEntities.push(l)}this.grid.hideHighlight()}updateStackerCranePreview(e){if(!this.lineStartPos)return;const t=Wl(this.lineStartPos.x,this.lineStartPos.z,e.x,e.z),n=Gl(t.aisleCells.length),i=Y.canAfford(n),a=[...t.aisleCells,...t.rackCells,...t.conveyorCells.map(l=>({x:l.x,z:l.z}))].every(l=>this.grid.canPlace(l.x,l.z)),o=i&&a;for(const l of t.aisleCells)this.addPreviewBox(l.x,l.z,16032353,o);for(const l of t.rackCells){const c=new Xt(8);this.makePreviewEntity(c,l.x,l.z,o)}for(const l of t.conveyorCells){const c=new je(l.direction);this.makePreviewEntity(c,l.x,l.z,o)}this.grid.hideHighlight()}addPreviewBox(e,t,n,i){const r=new os;this.makePreviewEntity(r,e,t,i)}makePreviewEntity(e,t,n,i){e.mesh.traverse(a=>{if(a instanceof G){const o=a.material.clone();o.transparent=!0,o.opacity=.4,o.emissive.setHex(i?17408:4456448),a.material=o}});const r=this.grid.gridToWorld(t,n);e.mesh.position.copy(r),this.scene.add(e.mesh),this.linePreviewEntities.push(e)}attemptPlaceLine(e){const t=this.grid.worldToGrid(e);if(!t)return;const n=this.grid.getCell(t.x,t.z);if(n&&n.type==="dock")return;if(!this.lineStartPos){this.lineStartPos={x:t.x,z:t.z},P.emit("ui:conveyor-line-status",{status:"end"});return}if(this.selectedType==="stacker-crane"){this.attemptPlaceStackerCrane(t);return}const i=$l(this.lineStartPos.x,this.lineStartPos.z,t.x,t.z);this.clearLinePreview();for(const r of i){if(!this.grid.canPlace(r.x,r.z))continue;const a=this.grid.getCell(r.x,r.z);if(a&&a.type==="dock")continue;if(!this.economy.purchase("conveyor"))break;const o=this.createEntity("conveyor",r.direction);o&&(this.grid.place(r.x,r.z,o,"conveyor"),o.setGridPosition(r.x,r.z),this.scene.add(o.mesh),this.placedEntities.set(`${r.x},${r.z}`,o),this.relinkAutomatedDocks(),P.emit("entity:placed:complete",{entity:o,type:"conveyor",gridX:r.x,gridZ:r.z}))}this.lineStartPos=null,this.previewMesh&&(this.previewMesh.visible=!0),P.emit("ui:conveyor-line-status",{status:"start"}),this.economy.canAfford("conveyor")||this.cancelPlacement()}attemptPlaceStackerCrane(e){if(!this.lineStartPos)return;const t=Wl(this.lineStartPos.x,this.lineStartPos.z,e.x,e.z),n=[...t.aisleCells,...t.rackCells,...t.conveyorCells.map(o=>({x:o.x,z:o.z}))];for(const o of n)if(!this.grid.canPlace(o.x,o.z)){this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),P.emit("ui:conveyor-line-status",{status:"start"});return}const i=t.aisleCells.length,r=Gl(i);if(!Y.canAfford(r)){this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),P.emit("ui:conveyor-line-status",{status:"start"});return}Y.spendMoney(r),this.clearLinePreview();const a=new ei(i,t.aisleDirection);a.aisleCells=t.aisleCells,this.grid.place(t.aisleCells[0].x,t.aisleCells[0].z,a,"conveyor"),a.setGridPosition(t.aisleCells[0].x,t.aisleCells[0].z);for(let o=1;o<t.aisleCells.length;o++){const l=t.aisleCells[o],c=this.grid.getCell(l.x,l.z);c&&(c.occupied=!0,c.type="conveyor",c.walkable=!1)}this.scene.add(a.mesh);for(const o of t.aisleCells)this.placedEntities.set(`${o.x},${o.z}`,a);for(const o of t.rackCells){const l=new Xt(8);this.grid.place(o.x,o.z,l,"rack"),l.setGridPosition(o.x,o.z),this.scene.add(l.mesh),this.placedEntities.set(`${o.x},${o.z}`,l),a.childRacks.push(l),l.ownedByStackerCrane=!0;const c=Y.get("storageCapacity");Y.updateStorageCapacity(c+8),P.emit("entity:placed:complete",{entity:l,type:"rack",gridX:o.x,gridZ:o.z})}for(const o of t.conveyorCells){const l=new je(o.direction);this.grid.place(o.x,o.z,l,"conveyor"),l.setGridPosition(o.x,o.z),this.scene.add(l.mesh),this.placedEntities.set(`${o.x},${o.z}`,l),a.childConveyors.push(l),l.isAutomationEntrance=a.isEntranceConveyor(l),l.isAutomationExit=!a.isEntranceConveyor(l),P.emit("entity:placed:complete",{entity:l,type:"conveyor",gridX:o.x,gridZ:o.z})}P.emit("entity:placed:complete",{entity:a,type:"stacker-crane",gridX:t.aisleCells[0].x,gridZ:t.aisleCells[0].z}),this.lineStartPos=null,this.previewMesh&&(this.previewMesh.visible=!0),P.emit("ui:conveyor-line-status",{status:"start"}),Y.canAfford(Uc)||this.cancelPlacement()}relocateEntity(e,t,n,i){const r=`${e},${t}`,a=this.placedEntities.get(r);if(!a)return!1;const o=this.getCellType(a.type);return this.grid.remove(e,t),this.grid.place(n,i,a,o)?(a.setGridPosition(n,i),this.placedEntities.delete(r),this.placedEntities.set(`${n},${i}`,a),!0):(this.grid.place(e,t,a,o),a.setGridPosition(e,t),!1)}moveEntityToWorldPos(e,t){const n=this.grid.worldToGrid(t);if(!n)return!1;const{x:i,z:r}=e.getGridPosition();if(n.x===i&&n.z===r||!this.grid.canPlace(n.x,n.z))return!1;if(e.type==="truck-dock"||e.type==="automated-truck-dock"){const o=n.z===this.grid.height-1,l=n.z===0;if(!o&&!l)return!1}else{const o=this.grid.getCell(n.x,n.z);if(o&&o.type==="dock")return!1}const a=this.relocateEntity(i,r,n.x,n.z);return a&&P.emit("entity:moved",{entity:e,fromX:i,fromZ:r,gridX:n.x,gridZ:n.z}),a}removeEntity(e,t){const n=`${e},${t}`,i=this.placedEntities.get(n);if(!i)return null;const r=i.type;return $t[r]&&this.economy.sell(r),this.grid.remove(e,t),this.scene.remove(i.mesh),i.dispose(),this.placedEntities.delete(n),P.emit("entity:removed:complete",{entity:i,type:r,gridX:e,gridZ:t}),i}getEntityAt(e,t){return this.placedEntities.get(`${e},${t}`)||null}updateEntityPosition(e,t,n,i,r){this.placedEntities.delete(`${t},${n}`),this.placedEntities.set(`${i},${r}`,e)}batchUpdateEntityPositions(e){for(const{fromX:t,fromZ:n}of e)this.placedEntities.delete(`${t},${n}`);for(const{entity:t,toX:n,toZ:i}of e)this.placedEntities.set(`${n},${i}`,t)}getCellTypeForBuildable(e){return this.getCellType(e)}linkAutomatedDockConveyor(e,t){this.conveyorManager.linkAutomatedDockAt(e,t,(n,i)=>this.placedEntities.get(`${n},${i}`)??null)}getEntityById(e){for(const t of this.placedEntities.values())if(t.id===e)return t;return null}getAllEntities(){return Array.from(this.placedEntities.values())}getEntitiesByType(e){return this.getAllEntities().filter(t=>t.type===e)}relinkStackerCraneChildren(){for(const e of this.placedEntities.values()){if(!(e instanceof ei))continue;const t=e;if(t.childRacks.length>0||t.childConveyors.length>0||t.aisleCells.length===0)continue;const n=t.aisleDirection==="north-south";for(const a of t.aisleCells){const o=n?[{dx:-1,dz:0},{dx:1,dz:0}]:[{dx:0,dz:-1},{dx:0,dz:1}];for(const l of o){const c=this.placedEntities.get(`${a.x+l.dx},${a.z+l.dz}`);c instanceof Xt&&!t.childRacks.includes(c)&&(t.childRacks.push(c),c.ownedByStackerCrane=!0)}}const i=t.aisleCells.map(a=>a.x),r=t.aisleCells.map(a=>a.z);if(n){const a=i[0],o=Math.min(...r),l=Math.max(...r);for(const c of[a-1,a+1])for(const h of[o-1,l+1]){const d=this.placedEntities.get(`${c},${h}`);d instanceof je&&!t.childConveyors.includes(d)&&(t.childConveyors.push(d),d.isAutomationEntrance=t.isEntranceConveyor(d),d.isAutomationExit=!t.isEntranceConveyor(d))}}else{const a=r[0],o=Math.min(...i),l=Math.max(...i);for(const c of[a-1,a+1])for(const h of[o-1,l+1]){const d=this.placedEntities.get(`${h},${c}`);d instanceof je&&!t.childConveyors.includes(d)&&(t.childConveyors.push(d),d.isAutomationEntrance=t.isEntranceConveyor(d),d.isAutomationExit=!t.isEntranceConveyor(d))}}}}relinkAutomatedDocks(){for(const[e,t]of this.placedEntities){if(!(t instanceof dt)||t.connectedConveyor!==null)continue;const[n,i]=e.split(",").map(Number);this.linkAutomatedDockConveyor(n,i)}}getOwnerStackerCrane(e){for(const t of this.placedEntities.values())if(t instanceof ei&&(t.childRacks.includes(e)||t.childConveyors.includes(e)))return t;return null}isInPlacementMode(){return this.isPlacementMode}getSelectedType(){return this.selectedType}update(e){const t=new Set;this.placedEntities.forEach(n=>{t.has(n)||(t.add(n),n.update(e))})}reset(){this.cancelPlacement();const e=new Set;this.placedEntities.forEach(t=>{e.has(t)||(e.add(t),this.scene.remove(t.mesh),t.dispose())}),this.placedEntities.clear()}}class kg{nodes=[];keyMap=new Map;get size(){return this.nodes.length}has(e){return this.keyMap.has(e)}get(e){return this.keyMap.get(e)}push(e,t){e.heapIndex=this.nodes.length,this.nodes.push(e),this.keyMap.set(t,e),this.bubbleUp(e.heapIndex)}pop(){if(this.nodes.length===0)return;const e=this.nodes[0],t=this.nodes.pop();return this.keyMap.delete(this.nodeKey(e)),this.nodes.length>0&&(this.nodes[0]=t,t.heapIndex=0,this.sinkDown(0)),e}update(e){this.bubbleUp(e.heapIndex)}nodeKey(e){return`${e.x},${e.z}`}bubbleUp(e){const t=this.nodes[e];for(;e>0;){const n=e-1>>1,i=this.nodes[n];if(t.f>=i.f)break;this.nodes[e]=i,i.heapIndex=e,e=n}this.nodes[e]=t,t.heapIndex=e}sinkDown(e){const t=this.nodes.length,n=this.nodes[e];for(;;){let i=e;const r=2*e+1,a=2*e+2;r<t&&this.nodes[r].f<n.f&&(i=r);const o=i!==e?this.nodes[i].f:n.f;if(a<t&&this.nodes[a].f<o&&(i=a),i===e)break;const l=this.nodes[i];this.nodes[e]=l,l.heapIndex=e,e=i}this.nodes[e]=n,n.heapIndex=e}}class Rg{grid;collisionSystem=null;turnPenalty=.001;constructor(e){this.grid=e}setCollisionSystem(e){this.collisionSystem=e}findPath(e,t,n,i,r){if(!this.grid.isInBounds(e,t)||!this.grid.isInBounds(n,i))return null;const a=this.grid.getCell(e,t),o=this.grid.getCell(n,i);if(!a||!o)return null;let l=n,c=i;if(!o.walkable){const f=this.findAdjacentWalkable(n,i);if(!f)return null;l=f.x,c=f.z}const h=new kg,d=new Set,u={x:e,z:t,g:0,h:this.heuristic(e,t,l,c),f:0,turns:0,dirX:0,dirZ:0,parent:null,heapIndex:0};for(u.f=u.g+u.h,h.push(u,this.getKey(e,t));h.size>0;){const f=h.pop();if(f.x===l&&f.z===c)return this.reconstructPath(f);d.add(this.getKey(f.x,f.z));const g=this.getWalkableNeighbors(f.x,f.z,l,c,r);for(const v of g){const m=this.getKey(v.x,v.z);if(d.has(m))continue;const p=v.x-f.x,b=v.z-f.z,w=f.parent!==null&&(f.dirX!==p||f.dirZ!==b)?1:0,S=f.g+1,L=f.turns+w,A=S+this.heuristic(v.x,v.z,l,c)+L*this.turnPenalty;let E=h.get(m);E?(S<E.g||S===E.g&&L<E.turns)&&(E.g=S,E.turns=L,E.dirX=p,E.dirZ=b,E.f=E.g+E.h+E.turns*this.turnPenalty,E.parent=f,h.update(E)):(E={x:v.x,z:v.z,g:S,h:this.heuristic(v.x,v.z,l,c),f:A,turns:L,dirX:p,dirZ:b,parent:f,heapIndex:0},h.push(E,m))}}return null}findPathWorld(e,t,n,i,r){if(e===n&&t===i)return[];const a=this.findPath(e,t,n,i,r);return a?a.map(o=>this.grid.gridToWorld(o.x,o.z)):null}heuristic(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}reconstructPath(e){const t=[];let n=e;for(;n;)t.unshift({x:n.x,z:n.z}),n=n.parent;return t.length>0&&t.shift(),t}getWalkableNeighbors(e,t,n,i,r){const a=this.grid.getNeighbors(e,t);return!this.collisionSystem||!r?a:a.filter(o=>n!==void 0&&i!==void 0&&o.x===n&&o.z===i?!0:this.collisionSystem.isCellAvailableForWorker(o.x,o.z,r))}findAdjacentWalkable(e,t){const n=[{dx:0,dz:-1},{dx:-1,dz:0},{dx:1,dz:0},{dx:0,dz:1}];for(const{dx:i,dz:r}of n){const a=e+i,o=t+r,l=this.grid.getCell(a,o);if(l&&l.walkable)return{x:a,z:o}}return null}getKey(e,t){return`${e},${t}`}hasPath(e,t,n,i,r){return this.findPath(e,t,n,i,r)!==null}getPathLength(e,t,n,i,r){const a=this.findPath(e,t,n,i,r);return a?a.length:-1}findNearestCellOfType(e,t,n,i){const a=this.grid.getCellsByType(n).filter(l=>!i||i(l)).map(l=>({x:l.x,z:l.z,manhattan:Math.abs(l.x-e)+Math.abs(l.z-t)})).sort((l,c)=>l.manhattan-c.manhattan);let o=null;for(const l of a){if(o&&l.manhattan>=o.distance)break;const c=this.getPathLength(e,t,l.x,l.z);c>=0&&(!o||c<o.distance)&&(o={x:l.x,z:l.z,distance:c})}return o}}class Ig{grid;workerOccupancy=new Map;reservedCells=new Map;constructor(e){this.grid=e}updateWorkerPosition(e){const t=e.getWorldPosition(),n=this.grid.worldToGrid(t);if(!n)return;this.clearWorkerOccupancy(e.id);const i=this.getKey(n.x,n.z);this.workerOccupancy.set(i,e.id)}reserveCell(e,t,n){const i=this.getKey(e,t),r=this.workerOccupancy.get(i),a=this.reservedCells.get(i);return r&&r!==n||a&&a!==n?!1:(this.reservedCells.set(i,n),!0)}releaseReservation(e,t,n){const i=this.getKey(e,t);this.reservedCells.get(i)===n&&this.reservedCells.delete(i)}clearWorkerOccupancy(e){for(const[t,n]of this.workerOccupancy.entries())n===e&&this.workerOccupancy.delete(t)}isCellAvailableForWorker(e,t,n){const i=this.getKey(e,t),r=this.workerOccupancy.get(i);if(r&&r!==n)return!1;const a=this.reservedCells.get(i);return!(a&&a!==n)}findIdleCirculationPoint(e,t,n){const i=e.getWorldPosition(),r=this.grid.worldToGrid(i);if(!r)return null;const a=3,o=[];for(let h=-a;h<=a;h++)for(let d=-a;d<=a;d++){if(h===0&&d===0)continue;const u=r.x+h,f=r.z+d;if(t!==void 0&&n!==void 0&&Math.abs(u-t)<2&&Math.abs(f-n)<2)continue;const g=this.grid.getCell(u,f);if(g&&g.walkable&&!g.occupied&&this.isCellAvailableForWorker(u,f,e.id)){const v=Math.abs(h)+Math.abs(d);o.push({x:u,z:f,distance:v})}}if(o.length===0)return null;o.sort((h,d)=>{const u=d.distance-h.distance,f=(Math.random()-.5)*2;return u+f});const l=Math.min(5,o.length),c=Math.floor(Math.random()*l);return o[c]}getOccupiedCells(){return new Set([...this.workerOccupancy.keys(),...this.reservedCells.keys()])}unregisterWorker(e){this.clearWorkerOccupancy(e);for(const[t,n]of this.reservedCells.entries())n===e&&this.reservedCells.delete(t)}reset(){this.workerOccupancy.clear(),this.reservedCells.clear()}getKey(e,t){return`${e},${t}`}}function ms(s,e,t,n={}){return{id:`task-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:s,status:"pending",priority:n.priority??1,source:e,destination:t,workerType:n.workerType??"forklift",createdAt:Date.now(),...n}}function Lg(s,e,t,n,i="forklift"){return ms("unload-truck",e,t,{sourceTruck:s,destinationStorage:n,workerType:i,priority:2})}function Dg(s,e,t,n,i,r="forklift"){return ms("load-truck",e,n,{sourceStorage:s,destinationTruck:t,orderId:i,workerType:r,priority:3})}function Og(s,e,t,n,i="forklift"){return ms("putaway",e,n,{sourceStorage:s,destinationStorage:t,workerType:i,priority:1})}function Ug(s,e,t,n,i="forklift"){return ms("replenish",e,n,{sourceStorage:s,destinationStorage:t,workerType:i,priority:2})}function Ng(s,e,t,n,i="forklift"){return ms("stage",e,n,{sourceStorage:s,destinationStorage:t,workerType:i,priority:2})}class Fg{reservedForStore=new Map;reservedForRetrieval=new Map;reserveForStore(e,t,n,i){const r=`${t},${n}`;if(this.getAvailableSpots(e,r)<=0)return!1;if(e.getStorageInfo().capacity<=1){if(this.reservedForStore.has(r))return!1;this.reservedForStore.set(r,i)}else{const l=this.getStoreReservationCount(r),c=`${r}:${l}`;this.reservedForStore.set(c,i)}return!0}releaseStoreReservation(e,t,n){const i=`${e},${t}`;if(this.reservedForStore.get(i)===n){this.reservedForStore.delete(i);return}for(const r of Array.from(this.reservedForStore.keys()))if(r.startsWith(`${i}:`)&&this.reservedForStore.get(r)===n){this.reservedForStore.delete(r);return}}reserveForRetrieval(e,t,n,i){const r=`${t},${n}`;if(this.getAvailablePalletsForRetrieval(e,r)<=0)return!1;const o=this.reservedForRetrieval.get(r)||[];return o.push(i),this.reservedForRetrieval.set(r,o),!0}releaseRetrievalReservation(e,t,n){const i=`${e},${t}`,r=this.reservedForRetrieval.get(i);if(r){const a=r.indexOf(n);a!==-1&&(r.splice(a,1),r.length===0&&this.reservedForRetrieval.delete(i))}}getStoreReservationCount(e){let t=0;this.reservedForStore.has(e)&&t++;for(let n=0;n<4;n++)this.reservedForStore.has(`${e}:${n}`)&&t++;return t}getRetrievalReservationCount(e){return this.reservedForRetrieval.get(e)?.length||0}getAvailableSpots(e,t){const n=this.getStoreReservationCount(t),i=e.getStorageInfo();return i.capacity-i.stored-n}getAvailablePalletsForRetrieval(e,t){const n=this.getRetrievalReservationCount(t);return e.getStorageInfo().stored-n}canStore(e,t,n){const i=`${t},${n}`;return this.getAvailableSpots(e,i)>0}canRetrieve(e,t,n){const i=`${t},${n}`;return this.getAvailablePalletsForRetrieval(e,i)>0}purgeOrphanedReservations(e){let t=0;for(const[n,i]of Array.from(this.reservedForStore.entries()))e.has(i)||(this.reservedForStore.delete(n),t++);for(const[n,i]of Array.from(this.reservedForRetrieval.entries())){const r=i.filter(a=>e.has(a));r.length===0?(this.reservedForRetrieval.delete(n),t+=i.length):r.length<i.length&&(this.reservedForRetrieval.set(n,r),t+=i.length-r.length)}return t}reset(){this.reservedForStore.clear(),this.reservedForRetrieval.clear()}getDebugInfo(){let e=0;for(const t of this.reservedForRetrieval.values())e+=t.length;return{storeReservations:this.reservedForStore.size,retrievalReservations:e}}getDetailedReservations(){const e=[],t=[];for(const[n,i]of this.reservedForStore.entries())e.push({location:n,taskId:i});for(const[n,i]of this.reservedForRetrieval.entries())t.push({location:n,taskIds:[...i]});return{storeReservations:e,retrievalReservations:t}}}const Ke=new Fg;function bn(s,e,t,n){const i=s.getAccessPositions(),r=n?i.filter(n):i,a=r.length>0?r:i;let o=a[0],l=1/0;for(const c of a){const h=Math.hypot(c.position.x-e,c.position.z-t);h<l&&(l=h,o=c)}return o}class zg{grid;scene;pathfinder;collisionSystem;taskQueue=[];workers=new Map;pallets=new Map;pendingTaskCount=0;activeTaskCount=0;storageRacks=new Map;storageFloorSlots=new Map;storageConveyors;conveyorManager;idleCirculationTimer=0;idleCirculationInterval=3;reservationCleanupTimer=0;reservationCleanupInterval=10;taskCreationTimer=0;taskCreationInterval=.5;outboundTrucksCallback=null;pendingLoadTasksByOrder=new Map;dockedInboundTrucks=new Map;constructor(e,t,n){this.scene=e,this.grid=t,this.pathfinder=new Rg(t),this.collisionSystem=new Ig(t),this.conveyorManager=n??new Hi,this.storageConveyors=this.conveyorManager.getMap(),this.pathfinder.setCollisionSystem(this.collisionSystem),this.setupEventListeners()}setOutboundTrucksCallback(e){this.outboundTrucksCallback=e}setupEventListeners(){P.on("truck:arrived",({dockPosition:e,pallets:t})=>{}),P.on("order:needs-loading",({orderId:e,quantity:t,truck:n,dockX:i,dockZ:r})=>{this.createLoadTruckTasks(e,t,n,i,r)}),P.on("order:retrieve-pallets",({quantity:e})=>{for(let t=0;t<e;t++)this.retrievePalletFromStorage()})}registerWorker(e){const t={worker:e,currentTask:null,taskPhase:"idle",carryingPallet:null,pathRecalcCooldown:0,deadlockStuckCount:0};this.workers.set(e.id,t),e instanceof Nt&&(e.setCollisionCheckCallback((n,i)=>{const r=this.grid.worldToGrid(n);return r?this.collisionSystem.isCellAvailableForWorker(r.x,r.z,i):!0}),e.setPathRecalculationCallback(n=>{this.recalculatePathForWorker(n)}))}unregisterWorker(e){const t=this.workers.get(e);t?.currentTask&&(this.activeTaskCount--,this.pendingTaskCount++,t.currentTask.status="pending",t.currentTask.assignedWorker=void 0),this.collisionSystem.unregisterWorker(e),this.workers.delete(e)}registerRack(e,t,n){const i=`${t},${n}`;this.storageRacks.set(i,e)}unregisterRack(e,t){const n=`${e},${t}`,i=this.storageRacks.get(n);i&&this.cancelPendingTasksForStorage(i),this.storageRacks.delete(n)}registerFloorSlot(e,t,n){const i=`${t},${n}`;this.storageFloorSlots.set(i,e)}unregisterFloorSlot(e,t){const n=`${e},${t}`,i=this.storageFloorSlots.get(n);i&&this.cancelPendingTasksForStorage(i),this.storageFloorSlots.delete(n)}getConveyorAt(e,t){return this.conveyorManager.getAt(e,t)}isConveyorEntryPoint(e){return this.conveyorManager.isEntryPoint(e)}isConveyorExitPoint(e){return this.conveyorManager.isExitPoint(e)}createUnloadTasksForTruck(e,t,n){this.dockedInboundTrucks.set(e.id,{truck:e,dockX:t,dockZ:n});const i=e.getPalletsRemaining();this.tryCreateUnloadTasksForTruck(e,t,n,i)}tryCreateUnloadTasksForTruck(e,t,n,i){if(e.truckDock instanceof dt)return 0;let r=0;const a=new Set(["forklift","operator"]);for(const o of a)this.canAddMoreTasks(o,"unload-truck")||(console.log(`[PickingManager] Task queue at capacity for ${o}, removing from consideration for unload tasks. Will retry next cycle.`),a.delete(o));if(a.size===0)return console.log("[PickingManager] No worker types available for unload-truck tasks, cannot create tasks at this time. Will retry next cycle."),0;for(let o=0;o<i;o++){const l=this.findAvailableStorageForInbound(t,n,a);if(l){const c=l.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(c,"unload-truck")){if(console.log(`[PickingManager] Task queue at capacity for ${c}, removing from consideration for unload tasks. Will retry next cycle.`),a.delete(c),a.size===0)break;continue}let h=l.gridX,d=l.gridZ;const u=this.getClosestAccessGridPosition(l.entity,t,n);u&&(h=u.gridX,d=u.gridZ);const f=Lg(e,{gridX:t,gridZ:n},{gridX:h,gridZ:d},l.entity,c);Ke.reserveForStore(l.entity,l.gridX,l.gridZ,f.id),this.addTask(f),r++}else{console.log("[PickingManager] No available storage for unload task; will retry when space frees");break}}return r===0&&i>0&&console.warn("[PickingManager] No available storage for unload task; will retry when space frees"),r}checkInboundTrucksNeedTasks(){for(const[e,{truck:t,dockX:n,dockZ:i}]of this.dockedInboundTrucks){if(t.getPalletsRemaining()===0||t.state==="departing"||t.state==="gone"){this.dockedInboundTrucks.delete(e);continue}const r=this.taskQueue.filter(o=>o.type==="unload-truck"&&o.sourceTruck?.id===e).length||0,a=t.getPalletsRemaining()-r;a>0&&(console.log(`[PickingManager] Truck ${e} needs ${a} unload tasks; attempting to create...`),this.tryCreateUnloadTasksForTruck(t,n,i,a))}}createLoadTruckTasks(e,t,n,i,r){if(n.truckDock instanceof dt)return 0;console.log(`[PickingManager] Creating up to ${t} load-truck tasks for order ${e}`);let a=0;const o=new Set(["forklift","operator"]);for(const l of o)this.canAddMoreTasks(l,"load-truck")||(console.log(`[PickingManager] Task queue at capacity for ${l}, removing from consideration for load tasks. Will retry next cycle.`),o.delete(l));if(o.size===0)return console.log("[PickingManager] No worker types available for load-truck tasks, cannot create tasks at this time. Will retry next cycle."),0;for(let l=0;l<t;l++){const c=this.findStorageWithPalletForOutbound(i,r,o);if(c){const h=c.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(h,"load-truck")){if(console.log(`[PickingManager] Task queue at capacity for ${h}, will retry load tasks next cycle. Removing from consideration for load tasks this cycle.`),o.delete(h),o.size===0)break;continue}let d=c.gridX,u=c.gridZ;if(c.entity instanceof kt){const v=this.getClosestAccessGridPosition(c.entity,i,r);v&&(d=v.gridX,u=v.gridZ)}const f=Dg(c.entity,{gridX:d,gridZ:u},n,{gridX:i,gridZ:r},e,h);Ke.reserveForRetrieval(c.entity,c.gridX,c.gridZ,f.id),this.addTask(f),a++;const g=this.pendingLoadTasksByOrder.get(e)||0;this.pendingLoadTasksByOrder.set(e,g+1)}else{console.warn(`[PickingManager] No pallets available for load-truck task (order ${e})`);break}}return console.log(`[PickingManager] Created ${a}/${t} load-truck tasks for order ${e}`),a}addTask(e){this.taskQueue.push(e),this.taskQueue.sort((t,n)=>n.priority-t.priority),this.pendingTaskCount++}canAddMoreTasks(e,t){const n=Array.from(this.workers.values()).filter(a=>(e==="forklift"?a.worker.type==="forklift"||a.worker.type==="forklift-agv":a.worker.type==="operator")?a.worker.allowedTaskTypes===null?!0:a.worker.allowedTaskTypes.includes(t):!1).length;if(this.workers.size===0)return!0;if(n===0)return!1;const i=this.taskQueue.filter(a=>(a.status==="pending"||a.status==="assigned"||a.status==="in-progress")&&a.workerType===e&&a.type===t).length,r=n*1;return i<r}calculateDistance(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}getClosestAccessGridPosition(e,t,n){const i=bn(e,t,n,a=>this.isAccessPositionWalkable(a)),r=this.grid.worldToGrid(i.position);return r?{gridX:r.x,gridZ:r.z}:null}isAccessPositionWalkable(e){const t=this.grid.worldToGrid(e.position);return t?this.grid.getCell(t.x,t.z)?.walkable??!1:!1}findAvailableStorage(e,t,n,i){const r=this.hasIdleWorkerOfType("forklift"),a=this.hasIdleWorkerOfType("operator");if(e==="forklift"||!e&&r){const l=this.findClosestAvailableRack(t,n,i);return l||(a||r?this.findClosestAvailableFloorSlot(t,n,i):null)}else{const l=this.findClosestAvailableFloorSlot(t,n,i);return l||this.findClosestAvailableRack(t,n,i)}}findClosestAvailableRack(e,t,n){if(n&&!n.has("forklift"))return null;let i=null,r=1/0;for(const[a,o]of this.storageRacks){const[l,c]=a.split(",").map(Number);if(!o.ownedByStackerCrane&&Ke.canStore(o,l,c)){const h=e!==void 0&&t!==void 0?this.calculateDistance(l,c,e,t):0;h<r&&(r=h,i={entity:o,type:"rack",gridX:l,gridZ:c})}}return i}findClosestAvailableFloorSlot(e,t,n){if(n&&!n.has("operator"))return null;let i=null,r=1/0;for(const[a,o]of this.storageFloorSlots){const[l,c]=a.split(",").map(Number);if(Ke.canStore(o,l,c)){const h=e!==void 0&&t!==void 0?this.calculateDistance(l,c,e,t):0;h<r&&(r=h,i={entity:o,type:"floor-slot",gridX:l,gridZ:c})}}for(const[a,o]of this.storageConveyors){const[l,c]=a.split(",").map(Number);if(this.isConveyorEntryPoint(o)&&!o.isAutomationExit&&Ke.canStore(o,l,c)){const h=e!==void 0&&t!==void 0?this.calculateDistance(l,c,e,t):0;h<r&&(r=h,i={entity:o,type:"conveyor",gridX:l,gridZ:c})}}return i}findAvailableStorageForInbound(e,t,n){const i=this.findClosestAvailableStorageByType("unloading",e,t,n);if(i)return i;const r=this.findClosestAvailableStorageByType("storage",e,t,n);return r||this.findAvailableStorage(void 0,e,t,n)}findStorageWithPalletForOutbound(e,t,n){const i=this.findClosestStorageWithPalletByType("loading",e,t,n);if(i)return i;const r=this.findClosestStorageWithPalletByType("picking",e,t,n);return r||this.findStorageWithPallet(n)}findClosestAvailableStorageByType(e,t,n,i){let r=null,a=1/0;if(!i||i.has("operator"))for(const[c,h]of this.storageConveyors){if(h.storageType!==e)continue;const[d,u]=c.split(",").map(Number);if(!this.isConveyorEntryPoint(h)||h.isAutomationExit||!Ke.canStore(h,d,u))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(d,u,t,n):0;f<a&&(a=f,r={entity:h,type:"conveyor",gridX:d,gridZ:u})}if(r)return r;let o=null,l=1/0;if(!i||i.has("forklift"))for(const[c,h]of this.storageRacks){if(h.storageType!==e||h.ownedByStackerCrane)continue;const[d,u]=c.split(",").map(Number);if(!Ke.canStore(h,d,u))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(d,u,t,n):0;f<l&&(l=f,o={entity:h,type:"rack",gridX:d,gridZ:u})}if(!i||i.has("operator"))for(const[c,h]of this.storageFloorSlots){if(h.storageType!==e)continue;const[d,u]=c.split(",").map(Number);if(!Ke.canStore(h,d,u))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(d,u,t,n):0;f<l&&(l=f,o={entity:h,type:"floor-slot",gridX:d,gridZ:u})}return o}findClosestStorageWithPalletByType(e,t,n,i){let r=null,a=1/0;if(!i||i.has("operator"))for(const[c,h]of this.storageConveyors){if(h.storageType!==e)continue;const[d,u]=c.split(",").map(Number);if(!this.isConveyorExitPoint(h)||h.isAutomationEntrance||!Ke.canRetrieve(h,d,u))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(d,u,t,n):0;f<a&&(a=f,r={entity:h,type:"conveyor",gridX:d,gridZ:u})}if(r)return r;let o=null,l=1/0;if(!i||i.has("forklift"))for(const[c,h]of this.storageRacks){if(h.storageType!==e||h.ownedByStackerCrane)continue;const[d,u]=c.split(",").map(Number);if(!Ke.canRetrieve(h,d,u))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(d,u,t,n):0;f<l&&(l=f,o={entity:h,type:"rack",gridX:d,gridZ:u})}if(!i||i.has("operator"))for(const[c,h]of this.storageFloorSlots){if(h.storageType!==e)continue;const[d,u]=c.split(",").map(Number);if(!Ke.canRetrieve(h,d,u))continue;const f=t!==void 0&&n!==void 0?this.calculateDistance(d,u,t,n):0;f<l&&(l=f,o={entity:h,type:"floor-slot",gridX:d,gridZ:u})}return o}createPutawayTasks(){let e=0;for(const[t,n]of[...this.storageRacks,...this.storageFloorSlots,...this.storageConveyors]){const i=n instanceof Xt,r=n instanceof je;if(n.storageType!=="unloading")continue;const[o,l]=t.split(",").map(Number);if(r&&!this.isConveyorExitPoint(n)||!Ke.canRetrieve(n,o,l))continue;const c=this.findClosestAvailableStorageByType("storage",o,l);if(!c)break;const h=i||c.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(h,"putaway"))break;let d=o,u=l;if(n instanceof kt){const m=Math.floor(this.grid.width/2),p=Math.floor(this.grid.height/2),b=this.getClosestAccessGridPosition(n,m,p);b&&(d=b.gridX,u=b.gridZ)}let f=c.gridX,g=c.gridZ;if(c.entity instanceof kt){const m=this.getClosestAccessGridPosition(c.entity,o,l);m&&(f=m.gridX,g=m.gridZ)}const v=Og(n,{gridX:d,gridZ:u},c.entity,{gridX:f,gridZ:g},h);Ke.reserveForRetrieval(n,o,l,v.id),Ke.reserveForStore(c.entity,c.gridX,c.gridZ,v.id),this.addTask(v),e++}return e}createReplenishTasks(){let e=0;for(const[t,n]of[...this.storageConveyors,...this.storageFloorSlots,...this.storageRacks]){const i=n instanceof Xt,r=n instanceof je;if(n.storageType!=="picking")continue;const[o,l]=t.split(",").map(Number);if(r&&!this.isConveyorEntryPoint(n)||!Ke.canStore(n,o,l))continue;const c=this.findClosestStorageWithPalletByType("storage",o,l);if(!c)break;const h=c.type==="rack"||i?"forklift":"operator";if(!this.canAddMoreTasks(h,"replenish"))break;let d=c.gridX,u=c.gridZ;if(c.entity instanceof kt){const m=this.getClosestAccessGridPosition(c.entity,o,l);m&&(d=m.gridX,u=m.gridZ)}let f=o,g=l;if(n instanceof kt){const m=this.getClosestAccessGridPosition(n,c.gridX,c.gridZ);m&&(f=m.gridX,g=m.gridZ)}const v=Ug(c.entity,{gridX:d,gridZ:u},n,{gridX:f,gridZ:g},h);Ke.reserveForRetrieval(c.entity,c.gridX,c.gridZ,v.id),Ke.reserveForStore(n,o,l,v.id),this.addTask(v),e++}return e}createStagingTasks(){let e=0;for(const[t,n]of[...this.storageRacks,...this.storageFloorSlots,...this.storageConveyors]){const i=n instanceof Xt,r=n instanceof je;if(n.storageType!=="loading")continue;const[o,l]=t.split(",").map(Number);if(r&&!this.isConveyorEntryPoint(n)||!Ke.canStore(n,o,l))continue;const c=this.findClosestStorageWithPalletByType("picking",o,l);if(!c)break;const h=c.type==="rack"||i?"forklift":"operator";if(!this.canAddMoreTasks(h,"stage"))break;let d=c.gridX,u=c.gridZ;const f=this.getClosestAccessGridPosition(c.entity,o,l);f&&(d=f.gridX,u=f.gridZ);let g=o,v=l;const m=this.getClosestAccessGridPosition(n,c.gridX,c.gridZ);m&&(g=m.gridX,v=m.gridZ);const p=Ng(c.entity,{gridX:d,gridZ:u},n,{gridX:g,gridZ:v},h);Ke.reserveForRetrieval(c.entity,c.gridX,c.gridZ,p.id),Ke.reserveForStore(n,o,l,p.id),this.addTask(p),e++}return e}hasIdleWorkerOfType(e){for(const t of this.workers.values())if((e==="forklift"?t.worker.type==="forklift"||t.worker.type==="forklift-agv":t.worker.type==="operator")&&t.taskPhase==="idle"&&t.worker.isIdle())return!0;return!1}findStorageWithPallet(e){if(!e||e.has("forklift"))for(const[t,n]of this.storageRacks){const[i,r]=t.split(",").map(Number);if(!n.ownedByStackerCrane&&Ke.canRetrieve(n,i,r))return{entity:n,type:"rack",gridX:i,gridZ:r}}if(!e||e.has("operator"))for(const[t,n]of this.storageFloorSlots){const[i,r]=t.split(",").map(Number);if(Ke.canRetrieve(n,i,r))return{entity:n,type:"floor-slot",gridX:i,gridZ:r}}if(!e||e.has("operator"))for(const[t,n]of this.storageConveyors){const[i,r]=t.split(",").map(Number);if(this.isConveyorExitPoint(n)&&!n.isAutomationEntrance&&Ke.canRetrieve(n,i,r))return{entity:n,type:"conveyor",gridX:i,gridZ:r}}return null}retrievePalletFromStorage(){for(const e of this.storageRacks.values())if(!e.ownedByStackerCrane&&e.storedPallets>0)return e.retrieve(),!0;for(const e of this.storageFloorSlots.values())if(e.hasPallet)return e.retrieve(),!0;for(const e of this.storageConveyors.values())if(this.isConveyorExitPoint(e)&&!e.isAutomationEntrance&&e.hasPallet)return e.retrieve(),!0;return!1}getClosestIdleWorker(e,t,n,i){let r=null,a=1/0;for(const o of this.workers.values())if((e==="forklift"?o.worker.type==="forklift"||o.worker.type==="forklift-agv":o.worker.type==="operator")&&o.taskPhase==="idle"&&o.worker.isIdle()){const c=o.worker.allowedTaskTypes;if(i&&c!==null&&!c.includes(i))continue;const h=o.worker.getWorldPosition(),d=this.grid.worldToGrid(h);if(d){const u=this.calculateDistance(d.x,d.z,t,n);u<a&&(a=u,r=o)}}return r}assignTasks(){const t=[...this.taskQueue.filter(n=>n.status==="pending")].sort((n,i)=>i.priority!==n.priority?i.priority-n.priority:n.workerType==="forklift"&&i.workerType==="operator"?-1:n.workerType==="operator"&&i.workerType==="forklift"?1:0);for(const n of t){const i=this.getClosestIdleWorker(n.workerType,n.source.gridX,n.source.gridZ,n.type);if(i){this.assignTaskToWorker(n,i);continue}if(n.workerType==="operator"&&!(n.sourceStorage instanceof je)&&!t.some(a=>a.status==="pending"&&a.workerType==="forklift")){const a=this.getClosestIdleWorker("forklift",n.source.gridX,n.source.gridZ,n.type);a&&this.assignTaskToWorker(n,a)}}}assignTaskToWorker(e,t){e.status="assigned",e.assignedWorker=t.worker,e.startedAt=Date.now(),this.pendingTaskCount--,this.activeTaskCount++,t.currentTask=e,t.taskPhase="moving-to-source";const n=t.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i){console.warn("[PickingManager] Worker is out of bounds, cannot assign task"),this.handleNoPath(t,e);return}if(e.sourceStorage instanceof kt){const a=this.getClosestAccessGridPosition(e.sourceStorage,i.x,i.z);a&&(e.source.gridX=a.gridX,e.source.gridZ=a.gridZ)}const r=this.pathfinder.findPathWorld(i.x,i.z,e.source.gridX,e.source.gridZ,t.worker.id);r?(t.worker instanceof Nt||t.worker instanceof Tt)&&t.worker.setPath(r):this.handleNoPath(t,e)}handleNoPath(e,t){console.warn("No path found for task",t.id),this.activeTaskCount--,t.status="failed",e.currentTask=null,e.taskPhase="idle",this.releaseTaskReservations(t);const n=this.taskQueue.indexOf(t);n>-1&&this.taskQueue.splice(n,1)}recalculatePathForWorker(e){const t=this.workers.get(e);if(!t||!t.currentTask)return;const n=t.currentTask,i=t.worker.getWorldPosition(),r=this.grid.worldToGrid(i);if(!r)return;let a,o;if(t.taskPhase==="moving-to-source")a=n.source.gridX,o=n.source.gridZ;else if(t.taskPhase==="moving-to-dest")a=n.destination.gridX,o=n.destination.gridZ;else return;if(this.isWorkerAtPosition(t.worker,a,o)){console.log(`[PickingManager] Worker ${e.substring(0,8)} already at destination, triggering phase transition`),t.worker instanceof Nt&&(t.worker.state="idle",t.worker.path=[]);return}const l=this.pathfinder.findPathWorld(r.x,r.z,a,o,t.worker.id);l&&l.length>0?(console.log(`[PickingManager] Recalculated path for ${e.substring(0,8)}: ${l.length} steps`),t.deadlockStuckCount=0,(t.worker instanceof Nt||t.worker instanceof Tt)&&t.worker.setPath(l)):(console.log(`[PickingManager] No path found for ${e.substring(0,8)} from (${r.x}, ${r.z}) to (${a}, ${o})`),t.deadlockStuckCount++,t.deadlockStuckCount>=3&&(t.deadlockStuckCount=0,this.tryResolveDeadlock(e,a,o)))}tryResolveDeadlock(e,t,n){const i=this.workers.get(e);if(!(!i||!(i.worker instanceof Nt))&&i.taskPhase==="moving-to-dest")for(const[r,a]of this.workers){if(r===e||!(a.worker instanceof Nt)||a.taskPhase!=="moving-to-dest"||!a.currentTask)continue;const o=a.currentTask.destination;if(o.gridX!==t||o.gridZ!==n)continue;const l=this.grid.worldToGrid(i.worker.getWorldPosition()),c=this.grid.worldToGrid(a.worker.getWorldPosition());if(!l||!c)continue;const h=Math.abs(l.x-t)+Math.abs(l.z-n),d=Math.abs(c.x-t)+Math.abs(c.z-n),u=h>d||h===d&&e<r,[f,g]=u?[e,i]:[r,a],v=this.grid.worldToGrid(g.worker.getWorldPosition());if(!v)continue;const m=this.collisionSystem.findIdleCirculationPoint(g.worker,t,n);if(!m)continue;const p=this.pathfinder.findPathWorld(v.x,v.z,m.x,m.z,f);p&&p.length>0&&(console.log(`[PickingManager] Deadlock at (${t},${n}): forklift ${f.substring(0,8)} yields to (${m.x},${m.z})`),g.worker.setPath(p),g.pathRecalcCooldown=1.5,g.deadlockStuckCount=0);break}}releaseTaskReservations(e){if(e.type==="unload-truck"){let t=e.destination.gridX,n=e.destination.gridZ;const i=e.destinationStorage;if(i){const r=this.findStorageInfo(i);r&&(t=r.gridX,n=r.gridZ)}Ke.releaseStoreReservation(t,n,e.id)}else if(e.type==="putaway"||e.type==="replenish"||e.type==="stage"){let t=e.destination.gridX,n=e.destination.gridZ;if(e.destinationStorage){const a=this.findStorageInfo(e.destinationStorage);a&&(t=a.gridX,n=a.gridZ)}Ke.releaseStoreReservation(t,n,e.id);let i=e.source.gridX,r=e.source.gridZ;if(e.sourceStorage){const a=this.findStorageInfo(e.sourceStorage);a&&(i=a.gridX,r=a.gridZ)}Ke.releaseRetrievalReservation(i,r,e.id)}else if(e.type==="load-truck"){let t=e.source.gridX,n=e.source.gridZ;if(e.sourceStorage){const i=this.findStorageInfo(e.sourceStorage);i&&(t=i.gridX,n=i.gridZ)}Ke.releaseRetrievalReservation(t,n,e.id)}}getStorageFromTask(e){return e.destinationStorage??e.sourceStorage??null}findStorageInfo(e){if(e instanceof kt){const t=e.getGridPosition();return{gridX:t.x,gridZ:t.z}}return null}cancelPendingTasksForStorage(e){const t=[];for(const n of this.taskQueue)n.status==="pending"&&(n.sourceStorage===e||n.destinationStorage===e)?(this.releaseTaskReservations(n),this.pendingTaskCount--,n.status="failed"):t.push(n);this.taskQueue=t}purgeOrphanedStorageReservations(){const e=new Set(this.taskQueue.map(n=>n.id)),t=Ke.purgeOrphanedReservations(e);return t>0&&console.warn(`[PickingManager] Purged ${t} orphaned storage reservation(s)`),t}isWorkerAtPosition(e,t,n){const i=e.getWorldPosition(),r=this.grid.worldToGrid(i);if(!r)return console.warn("[PickingManager] Worker position out of bounds"),!1;const a=Math.abs(r.x-t),o=Math.abs(r.z-n);return a===0&&o===0||a===1&&o===0||a===0&&o===1}updateWorkerState(e,t){const{worker:n,currentTask:i,taskPhase:r}=e;if(!i||r==="idle")return;e.pathRecalcCooldown>0&&(e.pathRecalcCooldown-=t);const a=n.isIdle();switch(r){case"moving-to-source":a&&(this.isWorkerAtPosition(n,i.source.gridX,i.source.gridZ)?(e.taskPhase="picking",this.startPicking(e)):e.pathRecalcCooldown<=0&&(this.recalculatePathForWorker(n.id),e.pathRecalcCooldown=.5));break;case"picking":n.isIdle()&&n.carryingPallet&&this.onPickingComplete(e);break;case"moving-to-dest":a&&(this.isWorkerAtPosition(n,i.destination.gridX,i.destination.gridZ)?(e.taskPhase="dropping",this.startDropping(e)):e.pathRecalcCooldown<=0&&(this.recalculatePathForWorker(n.id),e.pathRecalcCooldown=.5));break;case"dropping":n.isIdle()&&!n.carryingPallet&&this.onDroppingComplete(e);break}}startPicking(e){const{worker:t,currentTask:n}=e;if(n){if(n.status="in-progress",n.type==="unload-truck"&&n.sourceTruck){const i=n.sourceTruck.unloadPallet();i&&(n.pallet=i)}else if(n.type==="load-truck"||n.type==="putaway"||n.type==="replenish"||n.type==="stage"){const i=new Lc;n.pallet=i,n.type==="load-truck"&&Y.removeStoredPallet();let r=n.source.gridX,a=n.source.gridZ;if(n.sourceStorage){const o=this.findStorageInfo(n.sourceStorage);o&&(r=o.gridX,a=o.gridZ),Ke.releaseRetrievalReservation(r,a,n.id)}}if(t instanceof Nt){let i=0;if(n.sourceTruck){i=.5;const r=bn(n.sourceTruck,n.source.gridX,n.source.gridZ,a=>this.isAccessPositionWalkable(a));t.pickUpPallet(i,r.rotation)}else if(n.sourceStorage instanceof kt&&"getPickupHeight"in n.sourceStorage){i=n.sourceStorage.getPickupHeight();const r=bn(n.sourceStorage,n.source.gridX,n.source.gridZ,a=>this.isAccessPositionWalkable(a));t.pickUpPallet(i,r.rotation,()=>n.sourceStorage.retrieve())}else t.pickUpPallet(i,void 0,n.sourceStorage?()=>n.sourceStorage.retrieve():void 0)}else if(t instanceof Tt){let i=0,r;n.sourceTruck?(i=.5,r=bn(n.sourceTruck,n.source.gridX,n.source.gridZ,a=>this.isAccessPositionWalkable(a)).rotation):n.sourceStorage instanceof kt&&(i=n.sourceStorage.getPickupHeight?.()??0,r=bn(n.sourceStorage,n.source.gridX,n.source.gridZ,a=>this.isAccessPositionWalkable(a)).rotation),t.pickUpPallet?.(i,r,n.sourceStorage?()=>n.sourceStorage.retrieve():void 0)}}}onPickingComplete(e){const{currentTask:t}=e;if(!t)return;e.taskPhase="moving-to-dest";const n=e.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i){console.warn("[PickingManager] Worker is out of bounds, cannot find path"),this.handleNoPath(e,t);return}const r=this.pathfinder.findPathWorld(i.x,i.z,t.destination.gridX,t.destination.gridZ,e.worker.id);r&&r.length>0?e.worker.setPath(r):this.handleNoPath(e,t)}startDropping(e){const{worker:t,currentTask:n}=e;if(n){if(t instanceof Nt){let i=0,r;if(n.destinationTruck)i=.5,r=bn(n.destinationTruck,n.destination.gridX,n.destination.gridZ,a=>this.isAccessPositionWalkable(a)).rotation;else{const a=this.getStorageFromTask(n);a&&"getStorageHeight"in a&&(i=a.getStorageHeight()),a instanceof kt&&(r=bn(a,n.destination.gridX,n.destination.gridZ,o=>this.isAccessPositionWalkable(o)).rotation)}r!==void 0?t.dropPallet(i,r,n.destinationStorage?()=>n.destinationStorage.store():void 0):t.dropPallet(i,void 0,n.destinationStorage?()=>n.destinationStorage.store():void 0)}else if(t instanceof Tt){let i=0,r;if(n.destinationTruck)i=.5,r=bn(n.destinationTruck,n.destination.gridX,n.destination.gridZ,a=>this.isAccessPositionWalkable(a)).rotation;else{const a=this.getStorageFromTask(n);a&&"getStorageHeight"in a&&(i=a.getStorageHeight()),a instanceof kt&&(r=bn(a,n.destination.gridX,n.destination.gridZ,o=>this.isAccessPositionWalkable(o)).rotation)}t.dropPallet?.(i,r,n.destinationStorage?()=>n.destinationStorage.store():void 0)}}}onDroppingComplete(e){const{currentTask:t}=e;if(!t)return;const n=!!t.pallet;t.type==="unload-truck"?n&&(Y.addStoredPallet(),P.emit("pallet:stored",{taskId:t.id})):t.type==="putaway"||t.type==="replenish"||t.type==="stage"?n&&P.emit("pallet:stored",{taskId:t.id}):t.type==="load-truck"&&t.destinationTruck&&(t.destinationTruck.loadPallet(),P.emit("outbound:pallet-loaded",{truckId:t.destinationTruck.id,orderId:t.orderId||""})),t.pallet&&(t.pallet.dispose(),t.pallet=void 0),this.releaseTaskReservations(t),t.status="completed",t.completedAt=Date.now(),this.activeTaskCount--;const i=this.taskQueue.indexOf(t);i>-1&&this.taskQueue.splice(i,1),e.currentTask=null,e.taskPhase="idle",e.carryingPallet=null}handleIdleCirculation(){for(const e of this.workers.values()){if(!(e.worker instanceof Nt)||!e.worker.isIdle()||e.currentTask!==null||e.taskPhase!=="idle")continue;const t=this.collisionSystem.findIdleCirculationPoint(e.worker);if(!t)continue;const n=e.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i)continue;const r=this.pathfinder.findPathWorld(i.x,i.z,t.x,t.z,e.worker.id);r&&r.length>0&&e.worker.setPath(r)}}update(e){const t=Y.get("phase");if(!(t!=="operations"&&t!=="reorg")){for(const n of this.workers.values())this.collisionSystem.updateWorkerPosition(n.worker);t==="operations"&&(this.checkInboundTrucksNeedTasks(),this.checkOutboundTrucksNeedTasks()),this.taskCreationTimer+=e,this.taskCreationTimer>=this.taskCreationInterval&&(this.taskCreationTimer=0,this.createPutawayTasks(),this.createReplenishTasks(),this.createStagingTasks()),this.assignTasks();for(const n of this.workers.values())this.updateWorkerState(n,e);this.idleCirculationTimer+=e,this.idleCirculationTimer>=this.idleCirculationInterval&&(this.idleCirculationTimer=0,this.handleIdleCirculation()),this.reservationCleanupTimer+=e,this.reservationCleanupTimer>=this.reservationCleanupInterval&&(this.reservationCleanupTimer=0,this.purgeOrphanedStorageReservations())}}checkOutboundTrucksNeedTasks(){if(!this.outboundTrucksCallback)return;const e=this.outboundTrucksCallback();for(const{truck:t,order:n,dockX:i,dockZ:r}of e){if(t.truckDock instanceof dt)continue;const a=this.getPendingLoadTasksForOrder(n.orderId),o=this.getInProgressLoadTasksForOrder(n.orderId),l=a+o+n.palletsLoaded,c=n.quantity-l;c>0&&this.createLoadTruckTasks(n.orderId,c,t,i,r)}}getPendingLoadTasksForOrder(e){return this.taskQueue.filter(t=>t.type==="load-truck"&&t.orderId===e&&t.status==="pending").length}getInProgressLoadTasksForOrder(e){return this.taskQueue.filter(t=>t.type==="load-truck"&&t.orderId===e&&(t.status==="assigned"||t.status==="in-progress")).length}getTaskQueue(){return this.taskQueue}getPendingTaskCount(){return this.pendingTaskCount}getActiveTaskCount(){return this.activeTaskCount}getWorkers(){return Array.from(this.workers.values())}getWorkerState(e){return this.workers.get(e)||null}getWorkerDebugInfo(){const e=[];for(const[t,n]of this.workers){const i=n.worker,r=n.currentTask,a=i instanceof Nt?"forklift":"operator",o=i.getWorldPosition(),l=this.grid.worldToGrid(o),c=i.carryingPallet??!1,h=i.state,d=i.path?.length||0;e.push({id:t.substring(0,8),type:a,taskPhase:n.taskPhase,taskType:r?.type||null,sourceLocation:r?{x:r.source.gridX,z:r.source.gridZ}:null,destLocation:r?{x:r.destination.gridX,z:r.destination.gridZ}:null,isCarrying:c||!1,workerState:h,position:l||{x:0,z:0},pathLength:d})}return e}getTaskQueueStats(){let e=0,t=0,n=0;for(const i of this.taskQueue)switch(i.status){case"pending":e++;break;case"assigned":t++;break;case"in-progress":n++;break}return{pending:e,assigned:t,inProgress:n,total:this.taskQueue.length}}reset(){this.taskQueue=[],this.workers.clear(),this.storageRacks.clear(),this.storageFloorSlots.clear(),this.pallets.forEach(e=>e.dispose()),this.pallets.clear(),this.collisionSystem.reset(),this.idleCirculationTimer=0,this.reservationCleanupTimer=0,this.taskCreationTimer=0,this.pendingTaskCount=0,this.activeTaskCount=0,this.conveyorManager.invalidateCache(),Ke.reset()}}class Bg{scene;inputSystem;placementSystem;selectedEntity=null;selectionHelper=null;accessIndicatorGroup=null;accessIndicatorSignature=null;teardropStorageType=null;isMoveMode=!1;isMultiSelectActive=!1;constructor(e,t,n){this.scene=e,this.inputSystem=t,this.placementSystem=n,this.setupEventListeners()}setupEventListeners(){P.on("input:click",e=>{if(!this.placementSystem.isInPlacementMode()&&!this.isMultiSelectActive&&!(e&&e.target instanceof HTMLElement&&(e.target.closest("#ui-container")||e.target.closest("#hud")||e.target.closest("#selection-panel")||e.target.closest("#build-menu")||e.target.closest(".modal")))){if(this.isMoveMode&&this.selectedEntity){this.handleMoveClick(e?.worldPos);return}this.handleSelection()}}),P.on("input:escape",()=>{if(this.isMoveMode){this.deactivateMoveMode();return}this.teardropStorageType!==null?this.deactivateTeardrop():this.deselect()}),P.on("ui:build-select",()=>{this.deactivateTeardrop(),this.deselect()}),P.on("ui:teardrop-activate",({storageType:e})=>{this.activateTeardrop(e)}),P.on("ui:teardrop-deactivate",()=>{this.deactivateTeardrop()}),P.on("ui:entity-move-activate",()=>{this.selectedEntity&&this.activateMoveMode()}),P.on("input:move-shortcut",()=>{!this.isMultiSelectActive&&this.selectedEntity&&this.activateMoveMode()}),P.on("input:delete",()=>{!this.isMultiSelectActive&&this.selectedEntity&&P.emit("ui:entity-sell",{entity:this.selectedEntity})}),P.on("multi-select:active:changed",({active:e})=>{this.isMultiSelectActive=e,e&&(this.deactivateTeardrop(),this.deselect())})}handleSelection(){const t=this.placementSystem.getAllEntities().map(i=>i.mesh),n=this.inputSystem.raycastObjects(t);if(n.length>0){let i=n[0].object,r;for(;i&&!r&&(r=i.userData.entityId,!r&&i.parent);)i=i.parent;if(r){let a=this.placementSystem.getEntityById(r);if(a){if(this.teardropStorageType!==null){this.applyTeardrop(a);return}if(a.type==="rack"){const o=this.placementSystem.getOwnerStackerCrane(a);o&&(a=o)}this.select(a);return}}}this.teardropStorageType===null&&this.deselect()}activateMoveMode(){this.isMoveMode=!0,document.body.classList.add("move-mode"),P.emit("entity:move-mode:changed",{active:!0})}deactivateMoveMode(){this.isMoveMode&&(this.isMoveMode=!1,document.body.classList.remove("move-mode"),P.emit("entity:move-mode:changed",{active:!1}))}handleMoveClick(e){if(!this.selectedEntity||!this.isMoveMode)return;this.placementSystem.moveEntityToWorldPos(this.selectedEntity,e)&&this.deactivateMoveMode()}applyTeardrop(e){this.teardropStorageType!==null&&"storageType"in e&&(e.storageType=this.teardropStorageType,P.emit("entity:storage-type-changed",{entity:e,storageType:this.teardropStorageType}))}activateTeardrop(e){this.teardropStorageType=e,P.emit("selection:teardrop-activated",{storageType:e})}deactivateTeardrop(){this.teardropStorageType!==null&&(this.teardropStorageType=null,P.emit("selection:teardrop-deactivated"))}isTeardropMode(){return this.teardropStorageType!==null}select(e){this.selectedEntity!==e&&(this.deselect(),this.selectedEntity=e,this.selectionHelper=new Ac(e.mesh,5164484),this.scene.add(this.selectionHelper),this.updateAccessIndicators(!0),P.emit("entity:selected:changed",{entity:e}))}deselect(){this.deactivateMoveMode(),this.deactivateTeardrop(),this.selectedEntity&&(this.selectionHelper&&(this.scene.remove(this.selectionHelper),this.selectionHelper.dispose(),this.selectionHelper=null),this.clearAccessIndicators(),this.selectedEntity=null,P.emit("entity:selected:changed",{entity:null}))}getSelectedEntity(){return this.selectedEntity}update(){this.selectionHelper&&this.selectedEntity&&this.selectionHelper.update(),this.selectedEntity instanceof kt&&this.updateAccessIndicators()}updateAccessIndicators(e=!1){if(!(this.selectedEntity instanceof kt)){this.clearAccessIndicators();return}const t=this.getAccessPointIndicators(this.selectedEntity);if(t.length===0){this.clearAccessIndicators();return}const n=t.map(({position:i,rotation:r})=>`${i.x.toFixed(2)},${i.z.toFixed(2)},${r.toFixed(2)}`).join("|");if(!(!e&&this.accessIndicatorGroup&&this.accessIndicatorSignature===n)){this.clearAccessIndicators(),this.accessIndicatorGroup=new Rt;for(const i of t)this.accessIndicatorGroup.add(this.createAccessIndicatorMesh(i));this.accessIndicatorSignature=n,this.scene.add(this.accessIndicatorGroup)}}getAccessPointIndicators(e){return e.getAccessPositions().map(t=>({position:t.position,rotation:t.rotation,color:58879}))}createAccessIndicatorMesh(e){const t=e.color??58879,n=new Rt,i=new fo(.12,.2,16),r=new Wn({color:t,side:Jt,transparent:!0,opacity:.85,depthTest:!1}),a=new G(i,r);a.rotation.x=-Math.PI/2,a.position.copy(e.position),a.position.y=.03,a.renderOrder=999,n.add(a);const o=new R(Math.sin(e.rotation),0,Math.cos(e.rotation)).normalize(),l=e.position.clone();l.y=.08;const c=new ur(o,l,.5,t,.18,.1),h=c.line.material;h.depthTest=!1,h.transparent=!0,h.opacity=.85;const d=c.cone.material;return d.depthTest=!1,d.transparent=!0,d.opacity=.95,c.line.renderOrder=1e3,c.cone.renderOrder=1e3,n.add(c),n}clearAccessIndicators(){if(!this.accessIndicatorGroup){this.accessIndicatorSignature=null;return}this.scene.remove(this.accessIndicatorGroup),this.accessIndicatorGroup.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material&&t.material.dispose()}),this.accessIndicatorGroup.clear(),this.accessIndicatorGroup=null,this.accessIndicatorSignature=null}}class Hg{scene;placementSystem;camera;grid;isActive=!1;isDragging=!1;dragStartScreen=null;dragStartWorld=null;selectedEntities=[];selectionHelpers=[];selectionRect;isMoveMode=!1;moveAnchorWorld=null;moveArrow=null;constructor(e,t,n,i){this.scene=e,this.placementSystem=t,this.camera=n,this.grid=i,this.selectionRect=this.createSelectionRect(),this.setupEventListeners()}createSelectionRect(){const e=document.createElement("div");return e.id="multi-select-rect",document.body.appendChild(e),e}setupEventListeners(){P.on("ui:multi-select-toggle",()=>{this.toggle()}),P.on("ui:multi-select-activate",e=>{this.activate(e?.source)}),P.on("ui:multi-select-deactivate",e=>{this.deactivate(e?.source)}),P.on("input:click",e=>{if(this.isActive&&this.camera.getView()==="top"&&!(e.target instanceof HTMLElement&&(e.target.closest("#ui-container")||e.target.closest("#hud")||e.target.closest("#selection-panel")||e.target.closest("#multi-select-panel")||e.target.closest("#build-menu")||e.target.closest(".modal")))){if(this.isMoveMode){this.handleMoveClick(e.worldPos);return}this.startDrag(e.screenX,e.screenY,e.worldPos)}}),P.on("input:mousemove",e=>{this.isActive&&(this.isDragging?this.updateDragRect(e.screenX,e.screenY):this.isMoveMode&&this.moveAnchorWorld&&this.updateMoveArrow(e.worldPos))}),P.on("input:mouseup",e=>{!this.isActive||!this.isDragging||this.endDrag(e.worldPos)}),P.on("input:delete",()=>{this.isActive&&this.selectedEntities.length>0&&(P.emit("ui:multi-select-sell-all",{entities:[...this.selectedEntities]}),this.clearSelection())}),P.on("input:move-shortcut",()=>{this.isActive&&this.selectedEntities.length>0&&this.activateMoveMode()}),P.on("input:escape",()=>{if(this.isMoveMode){this.deactivateMoveMode();return}if(this.selectedEntities.length>0){this.clearSelection();return}this.isActive&&this.deactivate()}),P.on("ui:build-select",()=>{this.deactivate()}),P.on("input:camera-view",e=>{e!=="top"&&this.deactivate()})}toggle(){this.isActive?this.deactivate():this.activate()}activate(e){this.isActive=!0,document.body.classList.add("multi-select-mode"),P.emit("multi-select:active:changed",{active:!0,source:e})}deactivate(e){this.isDragging=!1,this.dragStartScreen=null,this.dragStartWorld=null,this.hideSelectionRect(),e!=="shift"&&this.clearSelection(),this.isActive=!1,document.body.classList.remove("multi-select-mode"),P.emit("multi-select:active:changed",{active:!1,source:e})}isToolActive(){return this.isActive}getSelectedEntities(){return[...this.selectedEntities]}startDrag(e,t,n){this.clearSelection(),this.isDragging=!0,this.dragStartScreen={x:e,y:t},this.dragStartWorld=n.clone(),this.updateDragRect(e,t),this.selectionRect.classList.add("visible")}updateDragRect(e,t){if(!this.dragStartScreen)return;const n=Math.min(this.dragStartScreen.x,e),i=Math.min(this.dragStartScreen.y,t),r=Math.max(this.dragStartScreen.x,e),a=Math.max(this.dragStartScreen.y,t);this.selectionRect.style.left=`${n}px`,this.selectionRect.style.top=`${i}px`,this.selectionRect.style.width=`${r-n}px`,this.selectionRect.style.height=`${a-i}px`}endDrag(e){if(this.isDragging=!1,this.hideSelectionRect(),!this.dragStartWorld)return;const t=Math.min(this.dragStartWorld.x,e.x),n=Math.max(this.dragStartWorld.x,e.x),i=Math.min(this.dragStartWorld.z,e.z),r=Math.max(this.dragStartWorld.z,e.z),a=[];for(const o of this.placementSystem.getAllEntities()){const l=o.mesh.position;l.x>=t&&l.x<=n&&l.z>=i&&l.z<=r&&a.push(o)}this.dragStartScreen=null,this.dragStartWorld=null,a.length>0&&this.selectEntities(a)}hideSelectionRect(){this.selectionRect.classList.remove("visible")}selectEntities(e){this.clearHelpers(),this.selectedEntities=e;for(const t of e){const n=new Ac(t.mesh,5164484);this.scene.add(n),this.selectionHelpers.push(n)}P.emit("multi-select:changed",{entities:[...this.selectedEntities]})}clearHelpers(){for(const e of this.selectionHelpers)this.scene.remove(e),e.dispose();this.selectionHelpers=[]}clearSelection(){this.deactivateMoveMode(),this.clearHelpers(),this.selectedEntities=[],P.emit("multi-select:changed",{entities:[]})}activateMoveMode(){this.selectedEntities.length!==0&&(this.isMoveMode=!0,this.moveAnchorWorld=null,document.body.classList.add("multi-select-move-mode"),P.emit("multi-select:move-mode:changed",{active:!0,phase:"anchor"}))}deactivateMoveMode(){this.isMoveMode&&(this.isMoveMode=!1,this.moveAnchorWorld=null,this.removeMoveArrow(),document.body.classList.remove("multi-select-move-mode"),P.emit("multi-select:move-mode:changed",{active:!1,phase:null}))}handleMoveClick(e){if(!this.moveAnchorWorld)this.moveAnchorWorld=e.clone(),this.createMoveArrow(e),P.emit("multi-select:move-mode:changed",{active:!0,phase:"destination"});else{const t=this.grid.worldToGrid(this.moveAnchorWorld),n=this.grid.worldToGrid(e);if(t&&n){const i=n.x-t.x,r=n.z-t.z;(i!==0||r!==0)&&P.emit("ui:multi-select-move-all",{entities:[...this.selectedEntities],dx:i,dz:r})}this.deactivateMoveMode()}}createMoveArrow(e){this.removeMoveArrow();const t=this.grid.worldToGrid(e);if(!t)return;const n=this.grid.gridToWorld(t.x,t.z);n.y=.12,this.moveArrow=new ur(new R(0,0,1),n,0,5164484,.45,.28),this.moveArrow.visible=!1,this.scene.add(this.moveArrow)}updateMoveArrow(e){if(!this.moveArrow||!this.moveAnchorWorld)return;const t=this.grid.worldToGrid(this.moveAnchorWorld),n=this.grid.worldToGrid(e);if(!t||!n)return;const i=this.grid.gridToWorld(t.x,t.z);i.y=.12;const r=this.grid.gridToWorld(n.x,n.z);r.y=.12;const a=new R().subVectors(r,i),o=a.length();if(o<.01){this.moveArrow.visible=!1;return}this.moveArrow.visible=!0,this.moveArrow.position.copy(i),this.moveArrow.setDirection(a.clone().normalize()),this.moveArrow.setLength(o,Math.min(.45,o*.35),.28)}removeMoveArrow(){this.moveArrow&&(this.scene.remove(this.moveArrow),this.moveArrow=null)}update(){for(const e of this.selectionHelpers)e.update()}}class Gg{constructor(e){this.deps=e}showChallengeLevelSelect(e){const t=ki,n=Et.getTotalStars(),i=Et.getMaxTotalStars(),r=t.map(a=>{const o=Et.isLevelUnlocked(a.id),l=Et.getLevelProgress(a.id),c=l?.stars??0;if(!o)return`
          <div class="challenge-level-card locked">
            <span class="challenge-level-number">Level ${a.id}</span>
            <span class="challenge-level-name">${this.deps.escapeHtml(a.name)}</span>
            <div class="challenge-level-lock">🔒</div>
          </div>`;const h=Array.from({length:3},(d,u)=>u<c?'<span class="star-earned">★</span>':'<span class="star-empty">★</span>').join("");return`
        <div class="challenge-level-card ${c>0?"completed":""}" data-level-id="${a.id}">
          <span class="challenge-level-number">Level ${a.id}</span>
          <span class="challenge-level-name">${this.deps.escapeHtml(a.name)}</span>
          <span class="challenge-level-desc">${this.deps.escapeHtml(a.description)}</span>
          <div class="challenge-level-stars">${h}</div>
          ${l?`<span class="challenge-level-best">Best: $${l.bestRemainingMoney}</span>`:""}
        </div>`}).join("");this.deps.loadingScreen.innerHTML=`
      <div class="challenge-container">
        <div class="challenge-header">
          <h2 class="challenge-title">⭐ Challenges</h2>
          <span class="challenge-stats"><span class="star-count">${n}</span> / ${i} ★</span>
        </div>
        <div class="challenge-levels-scroll">
          <div class="challenge-levels-grid">
            ${r}
          </div>
        </div>
        <div style="padding: 12px 16px; border-top: 1px solid var(--ui-border); text-align: center;">
          <button id="btn-challenge-back" class="menu-btn menu-btn-secondary challenge-back">← Back to Menu</button>
        </div>
      </div>
    `,this.deps.loadingScreen.querySelectorAll(".challenge-level-card:not(.locked)").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.levelId??"1",10);this.showChallengeDetail(o,e)})}),document.getElementById("btn-challenge-back")?.addEventListener("click",()=>{this.deps.onBackToMenu(e)})}showChallengeDetail(e,t){const n=Et.getLevel(e);if(!n)return;const r=Et.getLevelProgress(e)?.stars??0,a=(l,c)=>{const h=Array.from({length:l},()=>"★").join(""),d=r>=l;return`<div class="challenge-star-row">
        <span class="star-icons">${h}</span>
        <span>≥ $${c} remaining${d?" ✓":""}</span>
      </div>`},o=document.createElement("div");o.className="challenge-detail-overlay",o.innerHTML=`
      <div class="challenge-detail-card">
        <div class="challenge-detail-name">Level ${n.id}: ${this.deps.escapeHtml(n.name)}</div>
        <div class="challenge-detail-desc">${this.deps.escapeHtml(n.description)}</div>
        <div class="challenge-detail-specs">
          <div class="challenge-spec">
            <span class="challenge-spec-label">Budget</span>
            <span class="challenge-spec-value">$${n.budget}</span>
          </div>
          <div class="challenge-spec">
            <span class="challenge-spec-label">Grid Size</span>
            <span class="challenge-spec-value">${n.gridWidth} × ${n.gridHeight}</span>
          </div>
          <div class="challenge-spec">
            <span class="challenge-spec-label">Trucks</span>
            <span class="challenge-spec-value">${n.wave.truckCount} × ${n.wave.palletsPerTruck} pallets</span>
          </div>
          <div class="challenge-spec">
            <span class="challenge-spec-label">Workers</span>
            <span class="challenge-spec-value">${n.workerLimit} max</span>
          </div>
        </div>
        <div class="challenge-detail-stars-section">
          <div class="challenge-detail-stars-title">Star Objectives</div>
          ${a(1,n.stars.oneStar)}
          ${a(2,n.stars.twoStars)}
          ${a(3,n.stars.threeStars)}
        </div>
        ${n.hint?`<div class="challenge-detail-hint">💡 ${this.deps.escapeHtml(n.hint)}</div>`:""}
        <div class="challenge-detail-actions">
          <button class="menu-btn menu-btn-secondary" id="btn-challenge-detail-back">← Back</button>
          <button class="menu-btn menu-btn-primary" id="btn-challenge-start">▶ Start Challenge</button>
        </div>
      </div>
    `,document.body.appendChild(o),o.addEventListener("click",l=>{l.target===o&&o.remove()}),o.querySelector("#btn-challenge-detail-back")?.addEventListener("click",()=>{o.remove(),t||P.emit("ui:challenge-return-menu")}),o.querySelector("#btn-challenge-start")?.addEventListener("click",()=>{o.remove(),P.emit("ui:challenge-start",{levelId:e})})}showChallengeHUD(e){document.querySelector(".challenge-hud-banner")?.remove();const t=document.createElement("div");t.className="challenge-hud-banner",t.innerHTML=`
      <div class="challenge-hud-header">
        <div class="challenge-hud-meta">
          <span class="challenge-hud-name">⭐ Level ${e.id}: ${this.deps.escapeHtml(e.name)}</span>
          <span class="challenge-hud-sep">|</span>
          <span class="challenge-hud-budget">Budget: $${e.budget}</span>
        </div>
        <div class="challenge-hud-actions">
          <button class="challenge-hud-toggle" id="btn-challenge-hud-toggle" title="Hide challenge objectives" aria-label="Toggle challenge objectives" aria-expanded="true">▾</button>
          <button class="menu-btn menu-btn-secondary challenge-hud-retry" id="btn-challenge-hud-retry">🔄 Retry</button>
        </div>
      </div>
      <div class="challenge-hud-objectives">
        <span class="challenge-hud-objectives-label">Objective:</span>
        <span class="challenge-hud-objectives-value">${this.deps.escapeHtml(e.description)}</span>
      </div>
      <div class="challenge-hud-stars">
        <span class="challenge-hud-star">★ $${e.stars.oneStar}+</span>
        <span class="challenge-hud-star">★★ $${e.stars.twoStars}+</span>
        <span class="challenge-hud-star">★★★ $${e.stars.threeStars}+</span>
        <span class="challenge-hud-no-fail">⚠️ No failures allowed</span>
      </div>
      ${e.hint?`<div class="challenge-hud-hint">💡 ${this.deps.escapeHtml(e.hint)}</div>`:""}
    `,document.getElementById("ui-container")?.appendChild(t);const n=t.querySelector("#btn-challenge-hud-toggle"),i=r=>{t.classList.toggle("mobile-collapsed",r),n&&(n.textContent=r?"▸":"▾",n.setAttribute("aria-expanded",String(!r)),n.title=r?"Show challenge objectives":"Hide challenge objectives")};i(!1),n&&this.deps.addMobileInteraction(n,()=>{i(!t.classList.contains("mobile-collapsed"))}),t.querySelector("#btn-challenge-hud-retry")?.addEventListener("click",()=>{P.emit("ui:challenge-start",{levelId:e.id})})}hideChallengeHUD(){document.querySelector(".challenge-hud-banner")?.remove()}showChallengeResults(e,t,n,i){const r=Array.from({length:3},(d,u)=>u<t?'<span class="star-earned">★</span>':'<span class="star-empty">★</span>').join(""),a=e.id===ki.length,o=Et.getLevel(e.id+1),l=!a&&o&&!i;let c="";i?c="The wave was not completed. Try a different layout!":t===3?c="Perfect score! Outstanding efficiency!":t===2?c="Great job! Can you optimize further?":t===1?c="Challenge completed! Try to earn more stars.":c="Challenge completed, but try to save more money for stars!";const h=document.createElement("div");h.className="challenge-results-overlay",h.innerHTML=`
      <div class="challenge-results-card">
        <div class="challenge-results-title ${i?"failed":""}">
          ${i?"Challenge Failed":"Challenge Complete!"}
        </div>
        ${i?"":`<div class="challenge-results-stars">${r}</div>`}
        ${i?"":`<div class="challenge-results-money">$${n} remaining</div>`}
        <div class="challenge-results-message">${c}</div>
        <div class="challenge-results-actions">
          <button class="menu-btn menu-btn-secondary" id="btn-challenge-results-menu">🏠 Menu</button>
          <button class="menu-btn menu-btn-secondary" id="btn-challenge-results-retry">🔄 Retry</button>
          ${l?'<button class="menu-btn menu-btn-primary" id="btn-challenge-results-next">▶ Next Level</button>':""}
        </div>
      </div>
    `,document.body.appendChild(h),h.querySelector("#btn-challenge-results-menu")?.addEventListener("click",()=>{h.remove(),P.emit("ui:challenge-return-menu")}),h.querySelector("#btn-challenge-results-retry")?.addEventListener("click",()=>{h.remove(),P.emit("ui:challenge-start",{levelId:e.id})}),h.querySelector("#btn-challenge-results-next")?.addEventListener("click",()=>{h.remove(),this.showChallengeDetail(e.id+1)})}hideChallengeResults(){document.querySelector(".challenge-results-overlay")?.remove()}}class Wg{constructor(e,t){this.container=e,this.deps=t}collapsed=!1;previewOrdersCallback=null;currentWaveConfig=null;trucksSpawned=0;trucksActive=0;setupEventListeners(){P.on("phase:build",()=>{this.updateWavePreview()}),P.on("phase:operations",()=>{this.updateWavePreview()}),P.on("phase:reorg",()=>{this.updateWavePreview()}),P.on("wave:start",e=>{this.currentWaveConfig=e.config,this.trucksSpawned=0,this.trucksActive=0,this.deps.onHudUpdated(),this.updateWavePreview(e.config.totalWaveTime)}),P.on("wave:complete",()=>{this.currentWaveConfig=null,this.trucksSpawned=0,this.trucksActive=0,this.deps.onHudUpdated(),this.updateWavePreview()}),P.on("reorg:start",e=>{this.deps.onHudUpdated(),this.updateWavePreview(e.duration)}),P.on("reorg:progress",e=>{this.updateWavePreview(e.timeRemaining)}),P.on("truck:arrived",()=>{this.trucksSpawned++,this.trucksActive++}),P.on("wave:progress",e=>{if(e.trucksRemaining!==void 0&&this.currentWaveConfig){const t=this.currentWaveConfig.truckCount;this.trucksActive=e.trucksRemaining-(t-this.trucksSpawned)}this.updateWavePreview(e.timeRemaining)})}setPreviewOrdersCallback(e){this.previewOrdersCallback=e}updateWavePreview(e){const t=Y.get("phase"),n=Y.get("wave"),i=this.deps.getWaveConfig(n),r=this.previewOrdersCallback?this.previewOrdersCallback():[];this.render({phase:t,previewWave:n,config:i,timeRemaining:e,collapsed:this.collapsed,trucksSpawned:this.trucksSpawned,trucksActive:this.trucksActive,previewOrders:r},a=>{this.collapsed=a})}render(e,t){const n=e.phase==="operations",i=e.phase==="reorg",r=e.config.truckCount*e.config.palletsPerTruck,a=e.previewOrders.reduce((d,u)=>d+(u.quantity||0),0),o=r-a,l=(n||i)&&e.timeRemaining!==void 0?`
      <div class="wave-timer">
        <div class="label">Time Remaining</div>
        <div class="time">${this.formatTime(e.timeRemaining)}</div>
      </div>
    `:"",c=n?this.generateWaveProgressBar(e.config,e.timeRemaining??0,e.trucksSpawned,e.trucksActive):"",h=!n&&!i?this.generateOutboundOrdersPreview(e.previewOrders):"";i?this.container.innerHTML=`
        <div class="wave-preview-title">
          <span>🔄 Reorganization Wave</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="toggle-panel-btn" id="toggle-wave-preview">${e.collapsed?"+":"−"}</button>
          </div>
        </div>
        <div id="wave-preview-content-container" class="wave-preview-content ${e.collapsed?"collapsed-content":""}">
          <div class="wave-stat">
            <span class="icon">🔄</span>
            <div class="info">
              <div class="label">Status</div>
              <div class="value">No trucks - workers reorganize storage</div>
            </div>
          </div>
          ${l}
        </div>
      `:this.container.innerHTML=`
        <div class="wave-preview-title">
          <span>${n?"🚨 Current Wave":"📋 Next Wave"}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="wave-number">Wave ${e.previewWave}</span>
            <button class="toggle-panel-btn" id="toggle-wave-preview">${e.collapsed?"+":"−"}</button>
          </div>
        </div>
        <div id="wave-preview-content-container" class="wave-preview-content ${e.collapsed?"collapsed-content":""}">
          <div class="wave-stat">
            <span class="icon">🚚</span>
            <div class="info">
              <div class="label">Trucks</div>
              <div class="value">${e.config.truckCount} truck${e.config.truckCount>1?"s":""}</div>
            </div>
          </div>
          <div class="wave-stat">
            <span class="icon">📦</span>
            <div class="info">
              <div class="label">Total Pallets</div>
              <div class="value">${r} pallets</div>
            </div>
          </div>
          <div class="wave-stat">
          <span class="icon">⏱️</span>
          <div class="info">
          <div class="label">Wave Duration</div>
          <div class="value">${this.formatTime(e.config.totalWaveTime)}</div>
            </div>
          </div>
          ${c}
          ${h}
          <div class="wave-stat">
            <span class="icon">Δ</span>
            <div class="info">
              <div class="label">Expected Storage Incr.</div>
              <div class="value">${o} pallet${Math.abs(o)!==1?"s":""}</div>
            </div>
          </div>
          ${l}
        </div>
      `,document.getElementById("toggle-wave-preview")?.addEventListener("click",d=>{d.stopPropagation();const u=!e.collapsed;t(u);const f=document.getElementById("wave-preview-content-container");f&&f.classList.toggle("collapsed-content",u);const g=document.getElementById("toggle-wave-preview");g&&(g.textContent=u?"+":"−")})}generateOutboundOrdersPreview(e){if(e.length===0)return"";const t=Array.from(e).map(n=>`
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
    `}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}generateWaveProgressBar(e,t,n,i){const r=e.totalWaveTime,a=r-t,o=Math.min(100,a/r*100),l=[],c=kn.ANIM_DURATION_SECONDS;for(let u=0;u<e.truckCount;u++)l.push(u*e.timeBetweenTrucks+c);const h=l.map((u,f)=>{const g=u/r*100,v=a>=u&&f<n;let m="future",p="🚚",b=`Truck ${f+1} at ${this.formatTime(u)}`;if(v){const w=n-i;f<w?(m="gone",p="✓",b=`Truck ${f+1} departed`):m=f===n-1||f===w?"current":"passed"}return`
        <div class="truck-indicator ${m}" 
             style="left: ${g}%" 
             title="${b}">
          <div class="truck-icon">${p}</div>
          <div class="truck-time">${this.formatTime(u)}</div>
        </div>
      `}).join(""),d=(()=>{if(!e.outboundOrderCount||e.outboundOrderCount<=0)return"";const u=[];for(let f=0;f<e.outboundOrderCount;f++)u.push(f*r/Math.max(1,e.outboundOrderCount));return u.map((f,g)=>{const v=f/r*100,m=a>=f,p=m?"passed":"future",b=m?"✅":"📦",w=`Outbound ${g+1} at ${this.formatTime(f)}`;return`
          <div class="truck-indicator outbound ${p}" 
               style="left: ${v}%" 
               title="${w}">
            <div class="truck-icon">${b}</div>
            <div class="truck-time">${this.formatTime(f)}</div>
          </div>
        `}).join("")})();return`
      <div class="wave-progress-section">
        <div class="wave-progress-label">Wave Progress</div>
        <div class="wave-progress-bar-container">
          <div class="wave-progress-bar">
            <div class="wave-progress-fill" style="width: ${o}%"></div>
          </div>
          ${h}
          ${d}
        </div>
      </div>
    `}}class Vg{constructor(e,t,n){this.selectionPanelElement=e,this.multiSelectPanelElement=t,this.deps=n}selectedEntity=null;isTeardropMode=!1;isMoveMode=!1;multiSelectedEntities=[];isMultiSelectActive=!1;isMultiSelectMoveMode=!1;multiSelectMoveModePhase=null;pickingManager=null;scene=null;grid=null;pickArrow=null;dropArrow=null;currentArrowTaskId=null;initSelectionDependencies(e,t,n){this.pickingManager=e,this.scene=t,this.grid=n}hasSelectedEntity(){return this.selectedEntity!==null}isMultiSelectToolActive(){return this.isMultiSelectActive}handleEntitySelection(e){this.isTeardropMode=!1,this.isMoveMode=!1,document.body.classList.remove("teardrop-mode"),this.selectedEntity=e,this.updateSelectionPanel()}deactivateTeardropMode(){this.isTeardropMode=!1,document.body.classList.remove("teardrop-mode")}setMoveMode(e){this.isMoveMode=e}setMultiSelectToolActive(e,t){this.isMultiSelectActive=e;const n=document.getElementById("btn-multi-select");if(n&&n.classList.toggle("active",e),e){t!=="shift"&&this.selectionPanelElement.classList.add("hidden");return}t!=="shift"&&(this.multiSelectedEntities=[],this.isMultiSelectMoveMode=!1,this.multiSelectMoveModePhase=null,this.multiSelectPanelElement.classList.contains("hidden")||this.multiSelectPanelElement.classList.add("hidden"))}setMultiSelectedEntities(e){this.multiSelectedEntities=e}setMultiSelectMoveMode(e,t){this.isMultiSelectMoveMode=e,this.multiSelectMoveModePhase=t}setupEventListeners(){P.on("entity:selected:changed",({entity:e})=>{this.handleEntitySelection(e)}),P.on("selection:teardrop-deactivated",()=>{this.deactivateTeardropMode(),this.updateSelectionPanel()}),P.on("entity:move-mode:changed",({active:e})=>{this.setMoveMode(e);const t=document.getElementById("move-entity-btn");t&&t.classList.toggle("active",e)}),P.on("entity:moved",()=>{this.updateSelectionPanel()}),P.on("phase:operations",()=>{this.hasSelectedEntity()&&this.updateSelectionPanel()}),P.on("multi-select:active:changed",({active:e,source:t})=>{this.setMultiSelectToolActive(e,t)}),P.on("multi-select:changed",({entities:e})=>{this.setMultiSelectedEntities(e),this.updateMultiSelectPanel()}),P.on("multi-select:move-mode:changed",({active:e,phase:t})=>{this.setMultiSelectMoveMode(e,t),this.updateMultiSelectPanel()})}updateSelectionPanel(){if(!this.selectedEntity){this.selectionPanelElement.classList.contains("hidden")||(this.selectionPanelElement.classList.add("hidden"),this.clearArrows(),this.currentArrowTaskId=null);return}const e=this.selectedEntity,t=$t[e.type],n=e.getGridPosition();let i="",r="";const a=["unload-truck","putaway","replenish","stage","load-truck"],o={"unload-truck":"Unload Truck",putaway:"Put Away",replenish:"Replenish",stage:"Stage","load-truck":"Load Truck"};if(e.type==="operator"||e.type==="forklift"||e.type==="forklift-agv"){const C=this.pickingManager?.getWorkerState(e.id);if(C){const N=C.currentTask,F=C.taskPhase.replace(/-/g," ");i=`
          <div class="selection-worker-status">
            <div class="worker-status-header">Current Task</div>
            <div class="worker-status-value">${N?N.type.replace(/-/g," "):"Idle"}</div>
            <div class="worker-status-header" style="margin-top: 8px;">Phase</div>
            <div class="worker-status-value">${F}</div>
          </div>
        `;const V=N?.id||null;V!==this.currentArrowTaskId&&(this.clearArrows(),N&&this.scene&&this.grid&&this.createTaskArrows(N),this.currentArrowTaskId=V)}else this.clearArrows(),this.currentArrowTaskId=null;const _=e.allowedTaskTypes;r=`
        <div class="selection-worker-status">
          <div class="worker-status-header">Allowed Tasks</div>
          <div class="task-filter-list">${a.map(N=>{const F=_===null||_.includes(N)?"checked":"";return`<label class="task-filter-item"><input type="checkbox" class="task-filter-checkbox" data-task-type="${N}" ${F}><span>${o[N]}</span></label>`}).join("")}</div>
        </div>
      `}else this.clearArrows(),this.currentArrowTaskId=null;const c=e.type==="conveyor"||e.type==="diverter",h="storageType"in e,d=h?e.storageType??"general":"general",u=["general","unloading","storage","picking","loading"],f={general:"General",unloading:"Unloading",storage:"Storage",picking:"Picking",loading:"Loading"},g=["south","west","north","east"],v={south:"South ↓",north:"North ↑",east:"East →",west:"West ←"},m=c?e.direction:"south",p=c?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Direction</span>
        <div class="storage-type-picker">
          <span class="storage-type-label" id="conveyor-direction-label">${v[m]}</span>
          <button class="rotate-btn" id="conveyor-rotate-btn" aria-label="Rotate conveyor 90°">↻ Rotate</button>
        </div>
      </div>
    `:"",b=h?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Zone Type</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="storage-type-prev" aria-label="Previous zone type">&#9664;</button>
          <span class="storage-type-label" id="storage-type-label">${f[d]}</span>
          <button class="storage-type-btn" id="storage-type-next" aria-label="Next zone type">&#9654;</button>
          <button class="teardrop-btn${this.isTeardropMode?" active":""}" id="teardrop-btn" style="--storage-type-color: #${""+ps[d].toString(16).padStart(6,"0")}" aria-label="Paint zone type onto other entities" title="Paint this zone type onto other entities">🩸</button>
        </div>
      </div>
    `:"",w={idle:"Idle","moving-to-pickup":"Moving to Pickup",picking:"Picking","retracting-after-pick":"Retracting","moving-to-drop":"Moving to Drop",dropping:"Dropping","retracting-after-drop":"Retracting"},S={idle:"#607d8b","moving-to-pickup":"#f5a623",picking:"#4caf50","retracting-after-pick":"#4db6e4","moving-to-drop":"#f5a623",dropping:"#4caf50","retracting-after-drop":"#4db6e4"},L={north:"North ↑",south:"South ↓",east:"East →",west:"West ←"};let A="";if(e instanceof ei){const C=e,M=C.currentState,_=S[M]??"#607d8b",k=w[M]??M,N=C.storedPalletsTotal,F=C.capacityTotal,V=F>0?Math.round(N/F*100):0,K=V>80?"#e53935":V>50?"#f5a623":"#4caf50",X=C.childConveyors.map(J=>{const W=J.getGridPosition(),oe=C.isEntranceConveyor(J),me=oe?"↗ In":"↙ Out",re=oe?"#4db6e4":"#a78bfa",ge=J.hasPallet?'<span style="color:#4caf50;font-weight:bold" title="Has pallet">●</span>':'<span style="color:#455a64" title="Empty">○</span>';return`
          <div class="crane-conveyor-row">
            <span class="crane-conv-type" style="color:${re}">${me}</span>
            <span class="crane-conv-pos">(${W.x}, ${W.z})</span>
            <span class="crane-conv-dir">${L[J.direction]??J.direction}</span>
            <span class="crane-conv-pallet">${ge}</span>
          </div>`}).join("");A=`
        <div class="crane-status-block">
          <div class="crane-status-header">Stacker Crane</div>
          <div class="crane-status-row">
            <span class="label">Direction</span>
            <span class="value">${C.aisleDirection==="north-south"?"North–South":"East–West"}</span>
          </div>
          <div class="crane-status-row">
            <span class="label">Aisle Length</span>
            <span class="value">${C.length} cell${C.length!==1?"s":""}</span>
          </div>
          <div class="crane-status-row">
            <span class="label">Status</span>
            <span class="value">
              <span class="crane-state-dot" style="background:${_}"></span>
              ${k}
            </span>
          </div>
          <div class="crane-status-row">
            <span class="label">Carrying Pallet</span>
            <span class="value">${C.isCarryingPallet?"📦 Yes":"— No"}</span>
          </div>
          <div class="crane-status-row">
            <span class="label">Rack Storage</span>
            <span class="value crane-fill-value">
              ${N} / ${F}
              <span class="crane-fill-bar"><span class="crane-fill-bar-inner" style="width:${V}%;background:${K}"></span></span>
            </span>
          </div>
          ${C.childConveyors.length>0?`
          <div class="crane-status-row crane-conv-header-row">
            <span class="label">Conveyors (${C.childConveyors.length})</span>
          </div>
          <div class="crane-conveyor-list">${X}</div>
          `:""}
        </div>
      `}const E=`
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
        ${b}
        ${p}
        ${i}
        ${r}
        ${A}
        <div class="selection-actions">
          <button class="move-btn${this.isMoveMode?" active":""}" id="move-entity-btn" aria-label="Move entity to another grid cell" title="Move to another cell">✥ Move</button>
          <button class="sell-btn" id="sell-entity-btn">
            Sell for $${t?.sellValue||0}
          </button>
        </div>
      </div>
    `;if(this.selectionPanelElement.innerHTML!==E&&!this.deps.isPanelInteractionActive()){if(this.selectionPanelElement.innerHTML=E,document.getElementById("sell-entity-btn")?.addEventListener("click",()=>{P.emit("ui:entity-sell",{entity:this.selectedEntity})}),document.getElementById("move-entity-btn")?.addEventListener("click",()=>{P.emit("ui:entity-move-activate")}),e.type==="forklift"||e.type==="operator"||e.type==="forklift-agv"){const C=this.selectedEntity;this.selectionPanelElement.querySelectorAll(".task-filter-checkbox").forEach(M=>{M.addEventListener("change",()=>{const _=this.selectionPanelElement.querySelectorAll(".task-filter-checkbox");Array.from(_).every(N=>N.checked)?C.allowedTaskTypes=null:C.allowedTaskTypes=Array.from(_).filter(N=>N.checked).map(N=>N.dataset.taskType)})})}if(h){const C=M=>{const _=this.selectedEntity,N=(u.indexOf(_.storageType)+M+u.length)%u.length,F=u[N];_.storageType=F;const V=document.getElementById("storage-type-label");V&&(V.textContent=f[F]),P.emit("entity:storage-type-changed",{entity:_,storageType:F})};document.getElementById("storage-type-prev")?.addEventListener("click",()=>C(-1)),document.getElementById("storage-type-next")?.addEventListener("click",()=>C(1)),document.getElementById("teardrop-btn")?.addEventListener("click",()=>{const M=this.selectedEntity;this.isTeardropMode?(this.isTeardropMode=!1,document.body.classList.remove("teardrop-mode"),P.emit("ui:teardrop-deactivate")):(this.isTeardropMode=!0,document.body.classList.add("teardrop-mode"),P.emit("ui:teardrop-activate",{storageType:M.storageType}));const _=document.getElementById("teardrop-btn");_&&_.classList.toggle("active",this.isTeardropMode)})}c&&document.getElementById("conveyor-rotate-btn")?.addEventListener("click",()=>{if(!(this.selectedEntity instanceof je))return;const C=g.indexOf(this.selectedEntity.direction),M=g[(C+1)%g.length];this.selectedEntity.setDirection(M);const _=document.getElementById("conveyor-direction-label");_&&(_.textContent=v[M]),P.emit("conveyor:rotated",{entity:this.selectedEntity})})}this.selectionPanelElement.classList.contains("hidden")&&(this.deps.closeMobilePanelInternal(),this.selectionPanelElement.classList.remove("hidden"))}updateMultiSelectPanel(){const e=this.multiSelectedEntities;if(e.length===0){this.multiSelectPanelElement.classList.contains("hidden")||this.multiSelectPanelElement.classList.add("hidden");return}const t=["general","unloading","storage","picking","loading"],n={general:"General",unloading:"Unloading",storage:"Storage",picking:"Picking",loading:"Loading"},i=e.filter(d=>"storageType"in d),r=i.length>0,a=e.reduce((d,u)=>{const f=$t[u.type];return d+(f?.sellValue||0)},0),o=r?i[0].storageType??"general":"general",l=r?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Zone Type</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="ms-storage-type-prev" aria-label="Previous zone type">&#9664;</button>
          <span class="storage-type-label" id="ms-storage-type-label">${n[o]}</span>
          <button class="storage-type-btn" id="ms-storage-type-next" aria-label="Next zone type">&#9654;</button>
        </div>
      </div>
    `:"";let c="";this.isMultiSelectMoveMode&&(c=`<div class="multi-select-move-hint">${this.multiSelectMoveModePhase==="anchor"?"Click anchor point…":"Click destination…"}</div>`);const h=`
      <div class="selection-header">
        <div class="selection-title">
          <span class="icon">⬚</span>
          <span class="name">${e.length} selected</span>
        </div>
        <button class="ms-close-btn" id="ms-close-btn" title="Clear selection" aria-label="Clear selection">×</button>
      </div>
      <div class="selection-content">
        ${l}
        ${c}
        <div class="selection-actions">
          <button class="move-btn${this.isMultiSelectMoveMode?" active":""}" id="ms-move-btn" title="Move selected entities (M)" aria-label="Move selected">✥ Move</button>
          <button class="sell-btn" id="ms-sell-btn">Sell All — $${a}</button>
        </div>
      </div>
    `;if(this.multiSelectPanelElement.innerHTML!==h&&!this.deps.isPanelInteractionActive()&&(this.multiSelectPanelElement.innerHTML=h,document.getElementById("ms-close-btn")?.addEventListener("click",()=>{P.emit("ui:multi-select-clear")}),document.getElementById("ms-sell-btn")?.addEventListener("click",()=>{(async()=>await this.deps.confirm(`Sell ${e.length} items for $${a}?`)&&(P.emit("ui:multi-select-sell-all",{entities:[...this.multiSelectedEntities]}),this.multiSelectedEntities=[],this.updateMultiSelectPanel()))()}),document.getElementById("ms-move-btn")?.addEventListener("click",()=>{P.emit("ui:multi-select-move-activate")}),r)){let d=o;const u=f=>{const v=(t.indexOf(d)+f+t.length)%t.length;d=t[v];const m=document.getElementById("ms-storage-type-label");m&&(m.textContent=n[d]),P.emit("ui:multi-select-storage-type",{storageType:d,entities:i})};document.getElementById("ms-storage-type-prev")?.addEventListener("click",()=>u(-1)),document.getElementById("ms-storage-type-next")?.addEventListener("click",()=>u(1))}this.multiSelectPanelElement.classList.contains("hidden")&&(this.deps.closeMobilePanelInternal(),this.multiSelectPanelElement.classList.remove("hidden"))}createTaskArrows(e){if(!this.scene||!this.grid)return;const t=this.grid.gridToWorld(e.source.gridX,e.source.gridZ),n=this.grid.gridToWorld(e.destination.gridX,e.destination.gridZ),i=new R(0,-1,0),r=t.clone().add(new R(0,2,0));this.pickArrow=new ur(i,r,1.5,16739179,.5,.3),this.scene.add(this.pickArrow);const a=new R(0,-1,0),o=n.clone().add(new R(0,2,0));this.dropArrow=new ur(a,o,1.5,4906624,.5,.3),this.scene.add(this.dropArrow)}clearArrows(){this.pickArrow&&(this.scene?.remove(this.pickArrow),this.pickArrow=null),this.dropArrow&&(this.scene?.remove(this.dropArrow),this.dropArrow=null)}}class $g{constructor(e,t,n,i,r,a){this.workerDebugPanel=e,this.taskQueueDebugPanel=t,this.reservationsDebugPanel=n,this.economyPanelElement=i,this.debugLogPanel=r,this.deps=a}economyPanelCollapsed=!1;debugPanelVisible=!1;taskQueuePanelVisible=!1;reservationsPanelVisible=!1;debugLogPanelVisible=!1;debugUpdateCallback=null;economyDataCallback=null;setupEventListeners(){P.on("entity:placed:complete",()=>{this.updateEconomyPanel(),this.deps.onHudUpdated()}),P.on("entity:removed:complete",()=>{this.updateEconomyPanel(),this.deps.onHudUpdated()})}setupKeyboardShortcuts(){document.addEventListener("keydown",e=>{e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||((e.metaKey||e.ctrlKey)&&(e.key==="d"||e.key==="D")&&(e.preventDefault(),this.toggleDebugPanel()),(e.metaKey||e.ctrlKey)&&(e.key==="r"||e.key==="R")&&(e.preventDefault(),this.toggleReservationsPanel()),(e.metaKey||e.ctrlKey)&&(e.key==="l"||e.key==="L")&&(e.preventDefault(),this.toggleDebugLogPanel()),(e.metaKey||e.ctrlKey)&&(e.key==="q"||e.key==="Q")&&(e.preventDefault(),this.toggleTaskQueuePanel()))})}toggleDebugPanel(e){this.debugPanelVisible=e!==void 0?e:!this.debugPanelVisible,this.workerDebugPanel.classList.toggle("visible",this.debugPanelVisible)}toggleTaskQueuePanel(e){this.taskQueueDebugPanel&&(this.taskQueuePanelVisible=e!==void 0?e:!this.taskQueuePanelVisible,this.taskQueueDebugPanel.classList.toggle("visible",this.taskQueuePanelVisible))}toggleReservationsPanel(e){this.reservationsPanelVisible=e!==void 0?e:!this.reservationsPanelVisible,this.reservationsDebugPanel.classList.toggle("visible",this.reservationsPanelVisible)}toggleDebugLogPanel(e){this.debugLogPanelVisible=e!==void 0?e:!this.debugLogPanelVisible,this.debugLogPanel.classList.toggle("visible",this.debugLogPanelVisible),this.debugLogPanelVisible&&this.updateDebugLogPanel()}updateDebugLogPanel(){if(!this.debugLogPanelVisible)return;const e=document.getElementById("debug-log-entries-panel");if(!e)return;const t=bt.getEntries();if(t.length===0){e.innerHTML='<div class="debug-log-empty">No log entries yet.</div>';return}const n={info:"ℹ️",warn:"⚠️",error:"❌"};e.innerHTML=[...t].reverse().map(i=>{const r=new Date(i.timestamp).toLocaleTimeString(),a=n[i.level]??"";return`<div class="debug-log-entry debug-log-${i.level}">
        <span class="debug-log-time">${this.deps.escapeHtml(r)}</span>
        <span class="debug-log-icon">${a}</span>
        <span class="debug-log-msg">${this.deps.escapeHtml(i.message)}</span>
      </div>`}).join("")}createWorkerDebugPanel(){this.workerDebugPanel.innerHTML=`
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
    `,document.getElementById("debug-close-btn")?.addEventListener("click",()=>{this.toggleDebugPanel(!1)})}createTaskQueueDebugPanel(){this.taskQueueDebugPanel.innerHTML=`
      <div class="debug-panel-header">
        <span class="debug-panel-title">📋 Task Queue</span>
        <button class="debug-toggle-btn" id="task-queue-close-btn">×</button>
      </div>
      <div class="debug-stats" id="task-queue-stats">
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">Pending</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">Assigned</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">In Progress</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">0</div>
          <div class="debug-stat-label">Total</div>
        </div>
      </div>
      <div id="task-queue-list">
        <div class="no-tasks">No tasks in queue</div>
      </div>
    `,document.getElementById("task-queue-close-btn")?.addEventListener("click",()=>{this.toggleTaskQueuePanel(!1)})}createDebugLogPanel(){this.debugLogPanel.innerHTML=`
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
    `,document.getElementById("debug-log-close-btn")?.addEventListener("click",()=>{this.toggleDebugLogPanel(!1)}),document.getElementById("debug-log-clear-btn")?.addEventListener("click",()=>{bt.clear(),this.updateDebugLogPanel()})}createReservationsDebugPanel(){this.reservationsDebugPanel.innerHTML=`
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
    `,document.getElementById("toggle-economy-panel")?.addEventListener("click",()=>{this.economyPanelCollapsed=!this.economyPanelCollapsed,this.economyPanelElement.classList.toggle("collapsed",this.economyPanelCollapsed);const e=document.getElementById("toggle-economy-panel");e&&(e.textContent=this.economyPanelCollapsed?"+":"−")}),this.updateEconomyPanel()}updateEconomyPanel(){const e=document.getElementById("economy-wages-section"),t=document.getElementById("economy-history-section");if(!e||!t)return;const n=this.economyDataCallback?this.economyDataCallback():{waveHistory:[],operatorCount:0,forkliftCount:0,forkliftAgvCount:0,currentWaveOrderIncome:0},{waveHistory:i,operatorCount:r,forkliftCount:a,forkliftAgvCount:o,currentWaveOrderIncome:l}=n,c=r*fr+a*pr+o*mr,h=l>0?`
      <div class="economy-wage-row">
        <span class="economy-wage-label">📦 Orders</span>
        <span class="economy-wage-value economy-positive">+$${l}</span>
      </div>
    `:"";if(e.innerHTML=`
      <div class="economy-section-label">Current Wave</div>
      ${h}
      <div class="economy-wage-row">
        <span class="economy-wage-label">👷 Operators × ${r}</span>
        <span class="economy-wage-value">-$${r*fr}</span>
      </div>
      <div class="economy-wage-row">
        <span class="economy-wage-label">🚜 Forklifts × ${a}</span>
        <span class="economy-wage-value">-$${a*pr}</span>
      </div>
      <div class="economy-wage-row">
        <span class="economy-wage-label">🤖 Forklift AGVs × ${o}</span>
        <span class="economy-wage-value">-$${o*mr}</span>
      </div>
      <div class="economy-wage-row economy-wage-total">
        <span class="economy-wage-label">Total Wages</span>
        <span class="economy-wage-value">-$${c}</span>
      </div>
    `,i.length===0){t.innerHTML='<div class="economy-no-history">No completed waves yet</div>';return}const d=[...i].reverse().map(u=>`
      <div class="economy-history-row">
        <span class="economy-history-wave">W${u.wave}</span>
        <span class="economy-history-bonus">+$${u.bonus}</span>
        <span class="economy-history-orders">+$${u.orderIncome}</span>
        <span class="economy-history-wages">-$${u.wages}</span>
        <span class="economy-history-net ${u.net>=0?"positive":"negative"}">$${u.net>=0?"+":""}${u.net}</span>
      </div>
    `).join("");t.innerHTML=`
      <div class="economy-section-label">Wave History</div>
      <div class="economy-history-header">
        <span>Wave</span><span>Bonus</span><span>Orders</span><span>Wages</span><span>Net</span>
      </div>
      ${d}
    `}updateReservationsDebugPanel(){if(!this.reservationsPanelVisible)return;const e=Ke.getDebugInfo(),t=Ke.getDetailedReservations(),n=document.getElementById("store-count"),i=document.getElementById("retrieval-count");n&&(n.textContent=e.storeReservations.toString()),i&&(i.textContent=e.retrievalReservations.toString());const r=document.getElementById("reservations-list");if(!r)return;if(!(t.storeReservations.length>0||t.retrievalReservations.length>0)){r.innerHTML='<div class="no-reservations">No active reservations</div>';return}let o="";if(t.storeReservations.length>0){o+='<div class="reservation-section"><div class="reservation-section-title">🔵 Store Reservations</div>';for(const{location:l,taskId:c}of t.storeReservations)o+=`
          <div class="reservation-item">
            <span class="reservation-location">${l}</span>
            <span class="reservation-task">${c.substring(0,8)}</span>
          </div>
        `;o+="</div>"}if(t.retrievalReservations.length>0){o+='<div class="reservation-section"><div class="reservation-section-title">🟢 Retrieval Reservations</div>';for(const{location:l,taskIds:c}of t.retrievalReservations)o+=`
          <div class="reservation-item">
            <span class="reservation-location">${l}</span>
            <span class="reservation-tasks">${c.map(h=>h.substring(0,8)).join(", ")}</span>
          </div>
        `;o+="</div>"}r.innerHTML=o}setDebugUpdateCallback(e){this.debugUpdateCallback=e}setEconomyDataCallback(e){this.economyDataCallback=e,this.updateEconomyPanel()}updateWorkerDebugPanel(){if(!this.debugPanelVisible||!this.debugUpdateCallback)return;const{workers:e,tasks:t}=this.debugUpdateCallback(),n=document.getElementById("debug-task-stats");n&&(n.innerHTML=`
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
      `);const i=document.getElementById("worker-list");if(i){if(e.length===0){i.innerHTML='<div class="no-workers">No workers placed yet</div>';return}i.innerHTML=e.map(r=>{const a=r.taskPhase.replace(/-/g," "),o=r.taskType?`<div class="worker-task-info">
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
            <span class="status-text">${a}</span>
            ${l.join("")}
          </div>
          ${o}
          <div class="worker-task-info">
            📍 (${r.position.x}, ${r.position.z}) | Path: ${r.pathLength} | State: ${r.workerState}
          </div>
        </div>
      `}).join("")}}updateTaskQueueDebugPanel(e){if(!this.taskQueuePanelVisible||!e||!this.taskQueueDebugPanel)return;const t=e.getTaskQueue(),n=e.getTaskQueueStats(),i=document.getElementById("task-queue-stats");i&&(i.innerHTML=`
        <div class="debug-stat">
          <div class="debug-stat-value">${n.pending}</div>
          <div class="debug-stat-label">Pending</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">${n.assigned}</div>
          <div class="debug-stat-label">Assigned</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">${n.inProgress}</div>
          <div class="debug-stat-label">In Progress</div>
        </div>
        <div class="debug-stat">
          <div class="debug-stat-value">${n.total}</div>
          <div class="debug-stat-label">Total</div>
        </div>
      `);const r=document.getElementById("task-queue-list");if(!r)return;if(t.length===0){r.innerHTML='<div class="no-tasks">No tasks in queue</div>';return}const a=t.filter(h=>h.status==="pending"),o=t.filter(h=>h.status==="assigned"),l=t.filter(h=>h.status==="in-progress"),c=(h,d,u)=>h.length===0?"":`
        <div class="task-status-section">
          <div class="task-status-header ${u}">${d} (${h.length})</div>
          ${h.map(f=>{const g=this.getTaskTypeIcon(f.type),v=f.workerType==="forklift"?"🚜":"👷",m=Math.floor((Date.now()-f.createdAt)/1e3),p=f.sourceStorage?this.getStorageInfo(f.sourceStorage):`Truck (${f.source.gridX}, ${f.source.gridZ})`,b=f.destinationStorage?this.getStorageInfo(f.destinationStorage):`Truck (${f.destination.gridX}, ${f.destination.gridZ})`;return`
              <div class="task-card ${u}">
                <div class="task-card-header">
                  <span class="task-type-icon">${g} ${f.type.replace(/-/g," ")}</span>
                  <span class="task-priority">P${f.priority}</span>
                </div>
                <div class="task-info">
                  <div class="task-info-row">
                    <span class="task-label">Worker:</span>
                    <span class="task-value">${v} ${f.workerType}</span>
                  </div>
                  <div class="task-info-row">
                    <span class="task-label">From:</span>
                    <span class="task-value">${p}</span>
                  </div>
                  <div class="task-info-row">
                    <span class="task-label">To:</span>
                    <span class="task-value">${b}</span>
                  </div>
                  ${f.assignedWorker?`
                  <div class="task-info-row">
                    <span class="task-label">Assigned:</span>
                    <span class="task-value">${f.assignedWorker.id.substring(0,8)}...</span>
                  </div>
                  `:""}
                  ${f.orderId?`
                  <div class="task-info-row">
                    <span class="task-label">Order:</span>
                    <span class="task-value">${f.orderId.substring(0,8)}...</span>
                  </div>
                  `:""}
                  <div class="task-info-row">
                    <span class="task-label">Age:</span>
                    <span class="task-value">${m}s</span>
                  </div>
                </div>
              </div>
            `}).join("")}
        </div>
      `;r.innerHTML=c(l,"In Progress","in-progress")+c(o,"Assigned","assigned")+c(a,"Pending","pending")}getTaskTypeIcon(e){return{"unload-truck":"📦","load-truck":"🚚",putaway:"📥",replenish:"🔄",stage:"📤"}[e]||"📋"}getStorageInfo(e){const t=e;return t.storageType?`${t.storageType} (${t.gridX??"?"}, ${t.gridZ??"?"})`:`Storage (${t.gridX??"?"}, ${t.gridZ??"?"})`}}class Xg{constructor(e){this.buildMenuElement=e}selectedBuildType=null;isConveyorLineMode=!1;conveyorLineHasStart=!1;isLineModeActive(){return this.isConveyorLineMode}hasLineStart(){return this.conveyorLineHasStart}setLineStart(e){this.conveyorLineHasStart=e}createBuildMenu(){const e=Object.values($t);this.buildMenuElement.innerHTML=`
      <div class="build-btns-row">
        ${e.map(t=>`
          <button class="build-btn" data-type="${t.type}" title="${t.description}">
            <span class="icon">${t.icon}</span>
            <span class="name">${t.name}</span>
            <span class="cost">$${t.cost}</span>
          </button>
        `).join("")}
        <button class="build-btn expand-btn" id="btn-floor-expansion" title="Add ${Ya} new columns to the warehouse floor (both sides). Cost scales with each purchase.">
          <span class="icon">↔️</span>
          <span class="name">Expand ↔</span>
          <span class="cost" id="expansion-cost">$${Za(0)}</span>
        </button>
        <button class="build-btn expand-btn" id="btn-floor-expansion-vertical" title="Add ${qa} new rows to the warehouse floor (northward). Truck docks move to new edges. Cost scales with each purchase.">
          <span class="icon">↕️</span>
          <span class="name">Expand ↕</span>
          <span class="cost" id="expansion-vertical-cost">$${Ka(0)}</span>
        </button>
        <button class="build-btn expand-btn" id="btn-worker-capacity-expansion" title="Add ${Fc} worker slots. Price increases by $1,000 with each purchase.">
          <span class="icon">👷</span>
          <span class="name">+Workers</span>
          <span class="cost" id="worker-capacity-expansion-cost">$${ja(0)}</span>
        </button>
      </div>
      <div id="conveyor-toolbar" class="conveyor-toolbar-row" style="display:none;">
        <button class="line-mode-btn" id="btn-line-mode" title="Place a straight line of conveyors: click the start cell, then the end cell">
          🔗 Line Mode
        </button>
        <span class="line-mode-hint" id="line-mode-hint">Click to set start</span>
      </div>
      <div class="conveyor-toolbar-row multi-select-toolbar-row">
        <button class="line-mode-btn" id="btn-multi-select" title="Multi-select tool: drag a rectangle in top view to select multiple entities. Then move, sell, or delete them all at once. (Top view only)">
          ⬚ Select
        </button>
        <span class="line-mode-hint" id="multi-select-hint" style="display:none;">Switch to top view to use</span>
      </div>
    `,this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(t=>{t.addEventListener("click",n=>{const i=n.currentTarget.dataset.type;this.selectBuildType(i)})}),document.getElementById("btn-floor-expansion")?.addEventListener("click",()=>{P.emit("ui:floor-expansion",{})}),document.getElementById("btn-floor-expansion-vertical")?.addEventListener("click",()=>{P.emit("ui:floor-expansion-vertical",{})}),document.getElementById("btn-worker-capacity-expansion")?.addEventListener("click",()=>{P.emit("ui:worker-capacity-expansion",{})}),document.getElementById("btn-line-mode")?.addEventListener("click",()=>{this.toggleConveyorLineMode()}),document.getElementById("btn-multi-select")?.addEventListener("click",()=>{P.emit("ui:multi-select-toggle")})}setupEventListeners(){P.on("challenge:set-allowed-buildables",({allowed:e})=>{this.applyBuildableRestrictions(e)}),P.on("entity:selected",({type:e})=>{this.highlightSelectedBuild(e)}),P.on("input:escape",()=>{if(this.isLineModeActive()&&this.hasLineStart()){this.setLineStart(!1);const e=document.getElementById("line-mode-hint");e&&(e.textContent="Click to set start");return}this.deselectBuild()}),P.on("ui:conveyor-line-status",({status:e})=>{this.setLineStart(e==="end");const t=document.getElementById("line-mode-hint");t&&(t.textContent=e==="end"?"Click to confirm line":"Click to set start")}),P.on("money:changed",()=>{this.updateAffordability()})}selectBuildType(e){if(Y.get("phase")!=="build")return;if(this.selectedBuildType===e){this.deselectBuild();return}this.selectedBuildType=e,this.highlightSelectedBuild(e),P.emit("ui:build-select",{type:e});const t=document.getElementById("conveyor-toolbar");t&&(t.style.display=e==="conveyor"||e==="stacker-crane"?"flex":"none"),e!=="conveyor"&&e!=="stacker-crane"&&this.isConveyorLineMode&&(this.isConveyorLineMode=!1,P.emit("ui:conveyor-line-mode",{enabled:!1}))}deselectBuild(){this.selectedBuildType=null,this.highlightSelectedBuild(null),P.emit("ui:build-select",{type:null});const e=document.getElementById("conveyor-toolbar");if(e&&(e.style.display="none"),this.conveyorLineHasStart=!1,this.isConveyorLineMode){this.isConveyorLineMode=!1;const t=document.getElementById("btn-line-mode");t&&t.classList.remove("active"),P.emit("ui:conveyor-line-mode",{enabled:!1})}}toggleConveyorLineMode(){this.isConveyorLineMode=!this.isConveyorLineMode,this.conveyorLineHasStart=!1;const e=document.getElementById("btn-line-mode");e&&e.classList.toggle("active",this.isConveyorLineMode);const t=document.getElementById("line-mode-hint");t&&(t.textContent=this.isConveyorLineMode?"Click to set start":""),P.emit("ui:conveyor-line-mode",{enabled:this.isConveyorLineMode})}highlightSelectedBuild(e){this.buildMenuElement.querySelectorAll(".build-btn").forEach(t=>{const n=t.dataset.type;t.classList.toggle("selected",n===e)})}updateAffordability(){const e=Y.get("money");this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(g=>{const v=g.dataset.type,m=$t[v];g.classList.toggle("disabled",e<m.cost)});const t=Y.get("floorExpansionCount"),n=Za(t),i=document.getElementById("expansion-cost");i&&(i.textContent=`$${n}`);const r=document.getElementById("btn-floor-expansion");r&&r.classList.toggle("disabled",e<n);const a=Y.get("floorVerticalExpansionCount"),o=Ka(a),l=document.getElementById("expansion-vertical-cost");l&&(l.textContent=`$${o}`);const c=document.getElementById("btn-floor-expansion-vertical");c&&c.classList.toggle("disabled",e<o),this.updateReorgWaveButton();const h=Y.get("workerCapacityExpansionCount"),d=ja(h),u=document.getElementById("worker-capacity-expansion-cost");u&&(u.textContent=`$${d}`);const f=document.getElementById("btn-worker-capacity-expansion");f&&f.classList.toggle("disabled",e<d)}updateReorgWaveButton(){const e=Y.get("wave"),t=Dc*e,n=Y.get("money"),i=document.getElementById("reorg-wave-cost");i&&(i.textContent=String(t));const r=document.getElementById("btn-reorg-wave");r&&r.classList.toggle("disabled",n<t)}applyBuildableRestrictions(e){const t=new Set(e);this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(a=>{const o=a.dataset.type;a.style.display=t.has(o)?"":"none"});const n=document.getElementById("btn-floor-expansion");n&&(n.style.display="none");const i=document.getElementById("btn-floor-expansion-vertical");i&&(i.style.display="none");const r=document.getElementById("btn-worker-capacity-expansion");r&&(r.style.display="none")}clearBuildableRestrictions(){this.buildMenuElement.querySelectorAll(".build-btn").forEach(i=>{i.style.display=""});const e=document.getElementById("btn-floor-expansion");e&&(e.style.display="");const t=document.getElementById("btn-floor-expansion-vertical");t&&(t.style.display="");const n=document.getElementById("btn-worker-capacity-expansion");n&&(n.style.display="")}}class Yg{constructor(e,t,n){this.phaseIndicatorElement=e,this.buildMenuElement=t,this.onPhaseUIUpdated=n}lastSpeed=1;createPhaseIndicator(){this.phaseIndicatorElement.innerHTML=`
      <div class="phase-title">Phase</div>
      <div class="phase-name" id="phase-name">Build</div>
      <div class="phase-controls">
        <button class="phase-btn" id="btn-start-wave">Start Wave</button>
        <button class="phase-btn reorg-btn" id="btn-reorg-wave" title="Run a 3-minute wave with no trucks -- workers reorganize storage only">🔄 Reorg Wave <span class="reorg-cost">$<span id="reorg-wave-cost">200</span></span></button>
      </div>
      <div class="speed-controls" id="speed-controls" style="display: none;">
        <button class="speed-btn pause-btn" data-speed="0">⏸ Pause</button>
        <button class="speed-btn active" data-speed="1">1x</button>
        <button class="speed-btn" data-speed="2">2x</button>
        <button class="speed-btn" data-speed="3">3x</button>
      </div>
    `,document.getElementById("btn-start-wave")?.addEventListener("click",()=>{P.emit("ui:start-wave")}),document.getElementById("btn-reorg-wave")?.addEventListener("click",()=>{P.emit("ui:start-reorg-wave")}),document.getElementById("speed-controls")?.querySelectorAll(".speed-btn").forEach(e=>{e.addEventListener("click",t=>{const n=parseFloat(t.target.dataset.speed||"1"),i=Y.get("gameSpeed");n===0?i===0?this.setSpeed(this.lastSpeed):(this.lastSpeed=i,this.setSpeed(0)):this.setSpeed(n)})})}setupEventListeners(){P.on("phase:build",()=>{this.setPhaseUI("build")}),P.on("phase:operations",()=>{this.setPhaseUI("operations")}),P.on("phase:reorg",()=>{this.setPhaseUI("reorg")})}setPhaseUI(e){const t=document.getElementById("phase-name"),n=document.getElementById("btn-start-wave"),i=document.getElementById("btn-reorg-wave"),r=document.getElementById("speed-controls");t&&(e==="build"?t.textContent="Build":e==="reorg"?t.textContent="Reorg":t.textContent="Operations",t.classList.toggle("operations",e==="operations"),t.classList.toggle("reorg",e==="reorg")),n&&(n.style.display=e==="build"?"block":"none"),i&&(i.style.display=e==="build"?"block":"none"),r&&(r.style.display=e!=="build"?"flex":"none"),this.buildMenuElement.style.opacity=e==="build"?"1":"0.5",this.buildMenuElement.style.pointerEvents=e==="build"?"auto":"none",this.onPhaseUIUpdated()}setSpeed(e){Y.setSpeed(e),e>0&&(this.lastSpeed=e),document.querySelectorAll(".speed-btn").forEach(t=>{const n=parseFloat(t.dataset.speed||"1"),i=n===e;t.classList.toggle("active",i),n===0&&(t.textContent=e===0?"▶ Resume":"⏸ Pause")})}}class qg{constructor(e,t){this.selectionPanelElement=e,this.hasSelectedEntity=t}activeMobilePanel=null;createMobileMenu(e,t,n){const i=document.createElement("div");i.id="mobile-menu",i.innerHTML=`
      <button class="mobile-menu-btn" data-panel="build-menu" title="Build">🏗️</button>
      <button class="mobile-menu-btn" data-panel="wave-preview" title="Wave Info">📋</button>
      <button class="mobile-menu-btn" data-panel="order-panel" title="Orders">📦<span class="mobile-badge" id="orders-badge" aria-label="orders count"></span></button>
      <button class="mobile-menu-btn" data-panel="economy-panel" title="Economy">💰</button>
      <button class="mobile-menu-btn" id="mobile-operators-tasks-btn" title="Operators Tasks">👷</button>
      <button class="mobile-menu-btn" id="mobile-debug-log-btn" title="Debug Log">🪲</button>
    `,i.querySelectorAll(".mobile-menu-btn[data-panel]").forEach(o=>{e(o,()=>{const l=o.dataset.panel;this.toggleMobilePanel(l)})});const r=i.querySelector("#mobile-operators-tasks-btn");r&&e(r,()=>{this.closeMobilePanel(),t()});const a=i.querySelector("#mobile-debug-log-btn");a&&e(a,()=>{this.closeMobilePanel(),n()}),document.getElementById("ui-container")?.appendChild(i)}setupOutsideInteractionListeners(e){document.addEventListener("click",t=>{this.handleOutsideInteraction(t.target)}),document.addEventListener("touchend",t=>{if(e())return;const n=t.changedTouches?.length?t.changedTouches[0]:null,i=n?document.elementFromPoint(n.clientX,n.clientY):t.target;this.handleOutsideInteraction(i)},{passive:!0})}updateModeSpecificUIVisibility(){const e=Y.get("gameMode")==="challenge",t=Y.get("phase"),n=document.getElementById("hud-save-btn");n&&(n.style.display=e?"none":"");const i=document.getElementById("btn-reorg-wave");i&&(e?i.style.display="none":i.style.display=t==="build"?"block":"none");const r=document.getElementById("economy-panel");r&&(r.style.display=e?"none":"",e&&(r.classList.remove("mobile-open"),this.activeMobilePanel==="economy-panel"&&this.closeMobilePanelInternal()));const a=document.querySelector('.mobile-menu-btn[data-panel="economy-panel"]');a&&(a.style.display=e?"none":"")}toggleMobilePanel(e){this.activeMobilePanel===e?this.closeMobilePanel():this.openMobilePanel(e)}closeMobilePanelInternal(){this.activeMobilePanel&&(document.getElementById(this.activeMobilePanel)?.classList.remove("mobile-open"),this.activeMobilePanel=null),document.querySelectorAll(".mobile-menu-btn").forEach(e=>e.classList.remove("active"))}closeMobilePanel(){this.closeMobilePanelInternal(),this.hasSelectedEntity()&&this.selectionPanelElement.classList.remove("hidden")}handleOutsideInteraction(e){if(!this.activeMobilePanel||!e)return;const t=document.getElementById("mobile-menu"),n=document.getElementById(this.activeMobilePanel);t?.contains(e)||n?.contains(e)||this.closeMobilePanel()}updateOrdersBadge(e){const t=document.getElementById("orders-badge");t&&(e>0?(t.textContent=String(e),t.classList.add("visible")):(t.textContent="",t.classList.remove("visible")))}openMobilePanel(e){this.closeMobilePanelInternal();const t=document.getElementById(e);t&&(this.selectionPanelElement.classList.add("hidden"),t.classList.add("mobile-open"),this.activeMobilePanel=e,document.querySelectorAll(".mobile-menu-btn").forEach(n=>{n.classList.toggle("active",n.dataset.panel===e)}))}}class Zg{constructor(e,t){this.orderPanelElement=e,this.deps=t}orderPanelCollapsed=!1;createOrderPanel(){this.orderPanelElement.innerHTML=`
      <div class="order-panel-title">
        <span>📦 Orders</span>
        <button class="toggle-panel-btn" id="toggle-order-panel">−</button>
      </div>
      <div id="order-list-container">
        <div id="order-list"></div>
      </div>
    `,document.getElementById("toggle-order-panel")?.addEventListener("click",()=>{this.orderPanelCollapsed=!this.orderPanelCollapsed,this.orderPanelElement.classList.toggle("collapsed",this.orderPanelCollapsed);const e=document.getElementById("toggle-order-panel");e&&(e.textContent=this.orderPanelCollapsed?"+":"−")})}updateOrders(e){const t=document.getElementById("order-list");if(!t)return;const n=e.filter(i=>i.status!=="preview");if(this.deps.onOrdersCountChanged(n.length),n.length===0){t.innerHTML='<div style="color: #98c1d9; font-size: 12px;">No pending orders</div>';return}this.deps.isPanelInteractionActive()||(t.innerHTML=n.map(i=>{const r=Y.get("storedPallets")>=i.quantity&&i.status==="pending";let a="",o="",l="",c=!1;switch(i.status){case"pending":a="⏳",o="status-pending",l=`${Math.ceil(i.autoLaunchTime)}s`,c=i.autoLaunchTime<=10;break;case"awaiting-truck":a="🚚",o="status-awaiting",l=`🅿️ ${Math.ceil(i.dockTimeRemaining)}s`,c=i.dockTimeRemaining<=10;break;case"loading":a=`📦 ${i.palletsLoaded}/${i.quantity}`,o="status-loading",l=`🅿️ ${Math.ceil(i.dockTimeRemaining)}s`,c=i.dockTimeRemaining<=10;break;case"shipped":a="✅",o="status-shipped",l="";break}const h=i.status==="loading"?`<div class="order-progress-bar">
             <div class="order-progress-fill" style="width: ${i.palletsLoaded/i.quantity*100}%"></div>
           </div>`:"";return`
        <div class="order-item ${o}" data-order-id="${i.id}">
          <div class="order-top-row">
            <span class="quantity">${i.quantity}x 📦</span>
            <span class="status-badge">${a}</span>
            <span class="timer ${c?"urgent":""}">${l}</span>
            <span class="reward">$${i.reward}</span>
            ${r?`<button class="fulfill-btn" data-order-id="${i.id}">Ship</button>`:""}
          </div>
          ${h}
        </div>
      `}).join(""),t.querySelectorAll(".fulfill-btn").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const a=i.dataset.orderId;a&&window.fulfillOrder&&window.fulfillOrder(a)})}))}}class Kg{constructor(e){this.deps=e}confirmModalElement=null;confirmResolve=null;setupEventListeners(){P.on("game:over",()=>{this.showGameOver()}),P.on("wave:milestone",e=>{this.showMilestoneReward(e.wave)}),P.on("game:saved",({success:e})=>{this.showNotification(e?"💾 Game Saved!":"❌ Save Failed")})}showNotification(e,t=2e3){const n=document.createElement("div");n.className="game-notification",n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),500)},t)}showConfirmModal(e){if(this.ensureConfirmModal(),!this.confirmModalElement)return Promise.resolve(!1);const t=this.confirmModalElement.querySelector("#confirm-modal-message");return t&&(t.textContent=e),this.confirmModalElement.classList.add("visible"),new Promise(n=>{this.confirmResolve=n})}showGameOver(){const e=Y.getState(),t=document.createElement("div");t.className="game-over-overlay",t.innerHTML=`
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
    `,n.appendChild(i),document.body.appendChild(n);const r=()=>{document.body.removeChild(n),this.deps.onHudUpdated()};i.querySelector("#milestone-increase-limit")?.addEventListener("click",()=>{Y.increaseWorkerLimit(t),r()}),i.querySelector("#milestone-reset-failures")?.addEventListener("click",()=>{Y.resetFailedOrders(),r()})}ensureConfirmModal(){if(this.confirmModalElement)return;const e=document.createElement("div");e.id="confirm-modal",e.innerHTML=`
      <div class="confirm-dialog">
        <div id="confirm-modal-message"></div>
        <div class="confirm-actions">
          <button id="confirm-modal-cancel">Cancel</button>
          <button id="confirm-modal-confirm">Confirm</button>
        </div>
      </div>
    `,document.body.appendChild(e),this.confirmModalElement=e;const t=e.querySelector("#confirm-modal-cancel"),n=e.querySelector("#confirm-modal-confirm");t?.addEventListener("click",()=>{this.hideConfirmModal(),this.confirmResolve&&this.confirmResolve(!1),this.confirmResolve=null}),n?.addEventListener("click",()=>{this.hideConfirmModal(),this.confirmResolve&&this.confirmResolve(!0),this.confirmResolve=null})}hideConfirmModal(){this.confirmModalElement&&this.confirmModalElement.classList.remove("visible")}}class jg{constructor(e){this.deps=e}showGameMenu(e){const t=e.some(i=>i.exists),n=e.map(i=>i.exists?`
          <div class="save-slot save-slot-used" data-slot="${i.slot}">
            <div class="save-slot-info">
              <span class="save-slot-name">${this.deps.escapeHtml(i.slotName??`Save ${i.slot}`)}</span>
              <span class="save-slot-meta">Wave ${i.wave??"?"} · ${this.deps.formatSaveDate(i.timestamp)}</span>
            </div>
            <div class="save-slot-actions">
              <button class="slot-btn slot-btn-load" data-slot="${i.slot}">▶ Load</button>
              <button class="slot-btn slot-btn-delete" data-slot="${i.slot}" title="Delete save">🗑</button>
            </div>
          </div>`:`
        <div class="save-slot save-slot-empty" data-slot="${i.slot}">
          <span class="save-slot-empty-label">— Empty slot ${i.slot} —</span>
        </div>`).join("");this.deps.loadingScreen.innerHTML=`
      <div class="menu-title">
        <h1>Warehouse Defender</h1>
        <p class="menu-tagline">Manage your warehouse, defend your orders</p>
      </div>
      <div class="game-menu">
        <button id="btn-new-game" class="menu-btn menu-btn-primary">🎮 New Game</button>
        <button id="btn-challenges" class="menu-btn menu-btn-primary" style="background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%); border-color: #f59e0b;">⭐ Challenges${Et.getCompletedCount()>0?` <span style="font-size:12px; opacity:0.8">(${Et.getTotalStars()}/${Et.getMaxTotalStars()} ★)</span>`:""}</button>
        <button id="btn-sandbox-game" class="menu-btn menu-btn-secondary">🧪 Sandbox Mode</button>
        <button id="btn-how-to-play" class="menu-btn menu-btn-secondary">📖 How to Play</button>
        ${t?`<div class="save-slots-header">— Saved Games —</div>
        <div class="save-slots-list">${n}</div>`:""}
      </div>
    `,document.getElementById("btn-new-game")?.addEventListener("click",()=>{P.emit("ui:new-game")}),document.getElementById("btn-challenges")?.addEventListener("click",()=>{this.deps.onShowChallengeLevels(e)}),document.getElementById("btn-sandbox-game")?.addEventListener("click",()=>{this.showSandboxConfig(e)}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.showHowToPlay(e)}),this.deps.loadingScreen.querySelectorAll(".slot-btn-load").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.slot??"1",10);P.emit("ui:load-game-slot",{slot:r})})}),this.deps.loadingScreen.querySelectorAll(".slot-btn-delete").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.slot??"1",10);confirm(`Delete save in slot ${r}?`)&&P.emit("ui:delete-save-slot",{slot:r})})})}showSandboxConfig(e){this.deps.loadingScreen.innerHTML=`
      <div class="menu-title">
        <h1>Sandbox Mode</h1>
        <p class="menu-tagline">Configure your starting conditions</p>
      </div>
      <div class="game-menu">
        <div class="sandbox-form">
          <label class="sandbox-label" for="sandbox-money">💰 Initial Money</label>
          <input id="sandbox-money" type="number" class="sandbox-input" value="500" min="0" step="100" />

          <label class="sandbox-label" for="sandbox-workers">👷 Worker Limit</label>
          <input id="sandbox-workers" type="number" class="sandbox-input" value="5" min="1" max="50" step="1" />

          <label class="sandbox-label" for="sandbox-wave">🌊 Starting Wave</label>
          <input id="sandbox-wave" type="number" class="sandbox-input" value="1" min="1" step="1" />
        </div>
        <button id="btn-sandbox-start" class="menu-btn menu-btn-primary">🚀 Start Sandbox</button>
        <button id="btn-sandbox-back" class="menu-btn menu-btn-secondary">← Back</button>
      </div>
    `,document.getElementById("btn-sandbox-start")?.addEventListener("click",()=>{const t=document.getElementById("sandbox-money"),n=document.getElementById("sandbox-workers"),i=document.getElementById("sandbox-wave"),r=Math.max(0,parseInt(t.value,10)||500),a=Math.max(1,parseInt(n.value,10)||5),o=Math.max(1,parseInt(i.value,10)||1);P.emit("ui:sandbox-game",{money:r,workerLimit:a,wave:o})}),document.getElementById("btn-sandbox-back")?.addEventListener("click",()=>{this.showGameMenu(e)})}showHowToPlay(e){const t=[{id:"waves",tab:"🌊 Waves",title:"Waves & Orders",content:`
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
              <rect x="10" y="10" width="600" height="320" rx="10" fill="none" stroke="#3d5a80" stroke-width="2" stroke-dasharray="6 3"/>
              <text x="120" y="36" text-anchor="middle" fill="#98c1d9" font-size="13" font-weight="bold">INBOUND DOCKS</text>
              <text x="490" y="36" text-anchor="middle" fill="#98c1d9" font-size="13" font-weight="bold">OUTBOUND DOCKS</text>
              <text x="70" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="120" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="170" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="440" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="490" y="62" text-anchor="middle" font-size="22">🚛</text>
              <text x="540" y="62" text-anchor="middle" font-size="22">🚛</text>
              <line x1="40" y1="76" x2="200" y2="76" stroke="#607d8b" stroke-width="2" stroke-dasharray="6 4"/>
              <line x1="410" y1="76" x2="570" y2="76" stroke="#607d8b" stroke-width="2" stroke-dasharray="6 4"/>
              <rect x="50" y="100" width="140" height="70" rx="8" fill="#ff9500" fill-opacity="0.15" stroke="#ff9500" stroke-width="2"/>
              <text x="120" y="132" text-anchor="middle" fill="#ff9500" font-size="14" font-weight="bold">UNLOADING</text>
              <text x="120" y="152" text-anchor="middle" fill="#ff9500" font-size="11">zone</text>
              <line x1="200" y1="135" x2="270" y2="135" stroke="#4ecdc4" stroke-width="3" marker-end="url(#arrowhead)"/>
              <text x="235" y="125" text-anchor="middle" fill="#4ecdc4" font-size="9" font-style="italic">conveyor</text>
              <rect x="280" y="100" width="140" height="70" rx="8" fill="#4caf50" fill-opacity="0.15" stroke="#4caf50" stroke-width="2"/>
              <text x="350" y="132" text-anchor="middle" fill="#4caf50" font-size="14" font-weight="bold">STORAGE</text>
              <text x="350" y="152" text-anchor="middle" fill="#4caf50" font-size="11">zone</text>
              <line x1="350" y1="180" x2="350" y2="220" stroke="#4ecdc4" stroke-width="3" marker-end="url(#arrowhead-down)"/>
              <text x="375" y="205" fill="#4ecdc4" font-size="9" font-style="italic">conveyor</text>
              <rect x="280" y="230" width="140" height="70" rx="8" fill="#9c27b0" fill-opacity="0.15" stroke="#9c27b0" stroke-width="2"/>
              <text x="350" y="262" text-anchor="middle" fill="#9c27b0" font-size="14" font-weight="bold">PICKING</text>
              <text x="350" y="282" text-anchor="middle" fill="#9c27b0" font-size="11">zone</text>
              <line x1="430" y1="265" x2="460" y2="265" stroke="#4ecdc4" stroke-width="3" marker-end="url(#arrowhead)"/>
              <rect x="470" y="230" width="120" height="70" rx="8" fill="#f44336" fill-opacity="0.15" stroke="#f44336" stroke-width="2"/>
              <text x="530" y="262" text-anchor="middle" fill="#f44336" font-size="14" font-weight="bold">LOADING</text>
              <text x="530" y="282" text-anchor="middle" fill="#f44336" font-size="11">zone</text>
              <line x1="530" y1="230" x2="530" y2="82" stroke="#607d8b" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead-up)"/>
              <line x1="120" y1="76" x2="120" y2="95" stroke="#607d8b" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead-down-dim)"/>
              <text x="120" y="88" text-anchor="middle" fill="#607d8b" font-size="8">unload-truck</text>
              <text x="235" y="152" text-anchor="middle" fill="#98c1d9" font-size="9">putaway</text>
              <text x="375" y="218" fill="#98c1d9" font-size="9">replenish</text>
              <text x="445" y="257" text-anchor="middle" fill="#98c1d9" font-size="9">stage</text>
              <text x="548" y="160" fill="#607d8b" font-size="8">load-truck</text>
              <text x="50" y="200" font-size="16">🚜</text>
              <text x="80" y="200" font-size="11" fill="#98c1d9">putaway</text>
              <text x="50" y="222" font-size="16">👷</text>
              <text x="80" y="222" font-size="11" fill="#98c1d9">replenish &amp; stage</text>
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
        `}],n=t.map((r,a)=>`<button class="tutorial-tab${a===0?" active":""}" data-section="${r.id}">${r.tab}</button>`).join(""),i=t.map((r,a)=>`<div class="tutorial-section${a===0?" active":""}" id="tutorial-section-${r.id}">
        <h3 class="tutorial-section-title">${r.title}</h3>
        ${r.content}
      </div>`).join("");this.deps.loadingScreen.innerHTML=`
      <div class="how-to-play-container">
        <div class="how-to-play-header">
          <h2 class="how-to-play-title">📖 How to Play</h2>
          <button id="btn-back-to-menu" class="menu-btn menu-btn-secondary how-to-play-back">← Back</button>
        </div>
        <div class="tutorial-tabs">${n}</div>
        <div class="tutorial-content">${i}</div>
      </div>
    `,document.getElementById("btn-back-to-menu")?.addEventListener("click",()=>{this.showGameMenu(e)}),this.deps.loadingScreen.querySelectorAll(".tutorial-tab").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.section;this.deps.loadingScreen.querySelectorAll(".tutorial-tab").forEach(o=>o.classList.remove("active")),this.deps.loadingScreen.querySelectorAll(".tutorial-section").forEach(o=>o.classList.remove("active")),r.classList.add("active"),document.getElementById(`tutorial-section-${a}`)?.classList.add("active")})})}showDebugLog(e){const t=bt.getEntries(),n={info:"ℹ️",warn:"⚠️",error:"❌"},i=t.length===0?'<div class="debug-log-empty">No log entries yet.</div>':[...t].reverse().map(r=>{const a=new Date(r.timestamp).toLocaleTimeString(),o=n[r.level]??"";return`<div class="debug-log-entry debug-log-${r.level}">
            <span class="debug-log-time">${this.deps.escapeHtml(a)}</span>
            <span class="debug-log-icon">${o}</span>
            <span class="debug-log-msg">${this.deps.escapeHtml(r.message)}</span>
          </div>`}).join("");this.deps.loadingScreen.innerHTML=`
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
    `,document.getElementById("btn-debug-log-back")?.addEventListener("click",()=>{this.showGameMenu(e)}),document.getElementById("btn-debug-log-clear")?.addEventListener("click",()=>{bt.clear(),this.showDebugLog(e)})}}class Qg{constructor(e,t){this.hudElement=e,this.deps=t}economyDataCallback=null;setEconomyDataCallback(e){this.economyDataCallback=e}createHUD(){this.hudElement.innerHTML=`
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
    `,document.getElementById("hud-save-btn")?.addEventListener("click",()=>{P.emit("ui:save-game")})}setupEventListeners(){P.on("money:changed",()=>{this.updateHUD()}),P.on("order:created",()=>{this.updateHUD()}),P.on("order:fulfilled",()=>{this.updateHUD()}),P.on("order:expired",()=>{this.updateHUD()}),P.on("pallet:stored",()=>{this.updateHUD()}),P.on("pallet:picked",()=>{this.updateHUD()})}updateHUD(){const e=Y.getState(),t=document.getElementById("hud-money"),n=document.getElementById("hud-wave"),i=document.getElementById("hud-storage"),r=document.getElementById("hud-failed"),a=document.getElementById("hud-workers");if(t&&(t.textContent=`$${e.money}`),n&&(n.textContent=String(e.wave)),i&&(i.textContent=`${e.storedPallets} / ${e.storageCapacity}`),r){const o=Y.get("gameMode")==="challenge"?1:3;r.textContent=`${e.failedOrders} / ${o}`}if(a){const o=this.economyDataCallback?this.economyDataCallback():{operatorCount:0,forkliftCount:0},l=o.operatorCount+o.forkliftCount;a.textContent=`${l} / ${e.workerLimit}`}this.deps.onAfterUpdate()}}class Jg{themeToggleElement=null;createTopControls(){const e=document.createElement("div");e.id="top-controls",this.themeToggleElement=document.createElement("button"),this.themeToggleElement.id="theme-toggle",this.themeToggleElement.title="Toggle Theme (T)",this.updateThemeToggleButton(),e.appendChild(this.themeToggleElement);const t=document.createElement("button");t.id="btn-rotate-camera",t.title="Rotate Camera (E)",t.className="top-control-btn",t.innerHTML="🔄",e.appendChild(t);const n=document.createElement("button");n.id="btn-camera-toggle",n.title="Toggle Camera View",n.className="top-control-btn active",n.dataset.view="isometric",n.innerHTML="📐",e.appendChild(n),document.getElementById("ui-container")?.appendChild(e),this.themeToggleElement.addEventListener("click",()=>{Y.toggleTheme()}),t.addEventListener("click",()=>{P.emit("input:camera-rotate-right")}),n.addEventListener("click",i=>{const r=i.currentTarget,o=(r.dataset.view==="top"?"top":"isometric")==="isometric"?"top":"isometric";r.dataset.view=o,r.innerHTML=o==="isometric"?"📐":"🔝",P.emit("input:camera-view",o)})}updateThemeToggleButton(){if(!this.themeToggleElement)return;const e=Y.get("theme");this.themeToggleElement.innerHTML=e==="dark"?"🌙":"☀️",document.body.classList.toggle("light-mode",e==="light")}setupEventListeners(){P.on("theme:changed",()=>{this.updateThemeToggleButton()})}setupThemeKeyListener(){document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="t"){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;Y.toggleTheme()}})}}class ev{hudElement;buildMenuElement;orderPanelElement;phaseIndicatorElement;wavePreviewElement;loadingScreen;workerDebugPanel;taskQueueDebugPanel;reservationsDebugPanel;selectionPanelElement;economyPanelElement;debugLogPanel;multiSelectPanelElement;_panelInteractionActive=!1;pickingManager=null;challengeUI;wavePreviewComponent;selectionPanels;debugPanels;buildMenu;phaseControls;mobileMenu;orderPanel;uiOverlays;mainMenu;hud;topControls;constructor(){this.hudElement=document.getElementById("hud"),this.buildMenuElement=document.getElementById("build-menu"),this.orderPanelElement=document.getElementById("order-panel"),this.phaseIndicatorElement=document.getElementById("phase-indicator"),this.wavePreviewElement=document.getElementById("wave-preview"),this.loadingScreen=document.getElementById("loading-screen"),this.workerDebugPanel=document.getElementById("worker-debug-panel"),this.taskQueueDebugPanel=document.getElementById("task-queue-debug-panel"),this.reservationsDebugPanel=document.getElementById("reservations-debug-panel"),this.selectionPanelElement=document.getElementById("selection-panel"),this.economyPanelElement=document.getElementById("economy-panel"),this.debugLogPanel=document.getElementById("debug-log-panel"),this.multiSelectPanelElement=document.getElementById("multi-select-panel"),this.challengeUI=new Gg({loadingScreen:this.loadingScreen,escapeHtml:e=>this.escapeHtml(e),addMobileInteraction:(e,t)=>this.addMobileInteraction(e,t),onBackToMenu:e=>this.showGameMenu(e)}),this.wavePreviewComponent=new Wg(this.wavePreviewElement,{getWaveConfig:e=>this.getWaveConfig(e),onHudUpdated:()=>this.updateHUD()}),this.selectionPanels=new Vg(this.selectionPanelElement,this.multiSelectPanelElement,{closeMobilePanelInternal:()=>this.mobileMenu.closeMobilePanelInternal(),isPanelInteractionActive:()=>this._panelInteractionActive,confirm:e=>this.uiOverlays.showConfirmModal(e)}),this.mobileMenu=new qg(this.selectionPanelElement,()=>this.selectionPanels.hasSelectedEntity()),this.orderPanel=new Zg(this.orderPanelElement,{onOrdersCountChanged:e=>this.mobileMenu.updateOrdersBadge(e),isPanelInteractionActive:()=>this._panelInteractionActive}),this.uiOverlays=new Kg({onHudUpdated:()=>this.updateHUD()}),this.mainMenu=new jg({loadingScreen:this.loadingScreen,escapeHtml:e=>this.escapeHtml(e),formatSaveDate:e=>this.formatSaveDate(e),onShowChallengeLevels:e=>this.showChallengeLevelSelect(e)}),this.hud=new Qg(this.hudElement,{onAfterUpdate:()=>{this.buildMenu.updateReorgWaveButton(),this.mobileMenu.updateModeSpecificUIVisibility()}}),this.topControls=new Jg,this.debugPanels=new $g(this.workerDebugPanel,this.taskQueueDebugPanel,this.reservationsDebugPanel,this.economyPanelElement,this.debugLogPanel,{escapeHtml:e=>this.escapeHtml(e),onHudUpdated:()=>this.updateHUD()}),this.buildMenu=new Xg(this.buildMenuElement),this.buildMenu.createBuildMenu(),this.buildMenu.setupEventListeners(),this.phaseControls=new Yg(this.phaseIndicatorElement,this.buildMenuElement,()=>{this.buildMenu.updateReorgWaveButton(),this.mobileMenu.updateModeSpecificUIVisibility()}),this.phaseControls.createPhaseIndicator(),this.phaseControls.setupEventListeners(),this.hud.createHUD(),this.hud.setupEventListeners(),this.orderPanel.createOrderPanel(),this.wavePreviewComponent.updateWavePreview(),this.wavePreviewComponent.setupEventListeners(),this.debugPanels.createWorkerDebugPanel(),this.taskQueueDebugPanel&&this.debugPanels.createTaskQueueDebugPanel(),this.debugPanels.createReservationsDebugPanel(),this.debugPanels.createEconomyPanel(),this.debugPanels.createDebugLogPanel(),this.topControls.createTopControls(),this.mobileMenu.createMobileMenu((e,t)=>this.addMobileInteraction(e,t),()=>this.toggleDebugPanel(),()=>this.toggleDebugLogPanel()),this.mobileMenu.setupOutsideInteractionListeners(()=>this.selectionPanels.isMultiSelectToolActive()),this.selectionPanels.setupEventListeners(),this.topControls.setupEventListeners(),this.uiOverlays.setupEventListeners(),this.debugPanels.setupEventListeners(),this.debugPanels.setupKeyboardShortcuts(),this.setupEventListeners(),this.topControls.setupThemeKeyListener(),this.mobileMenu.updateModeSpecificUIVisibility()}showGameMenu(e){this.mainMenu.showGameMenu(e)}showDebugLog(e){this.mainMenu.showDebugLog(e)}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}formatSaveDate(e){return e?new Date(e).toLocaleString():""}showNotification(e,t=2e3){this.uiOverlays.showNotification(e,t)}toggleDebugPanel(e){this.debugPanels.toggleDebugPanel(e)}toggleTaskQueuePanel(e){this.debugPanels.toggleTaskQueuePanel(e)}toggleReservationsPanel(e){this.debugPanels.toggleReservationsPanel(e)}toggleDebugLogPanel(e){this.debugPanels.toggleDebugLogPanel(e)}updateDebugLogPanel(){this.debugPanels.updateDebugLogPanel()}updateEconomyPanel(){this.debugPanels.updateEconomyPanel()}updateReservationsDebugPanel(){this.debugPanels.updateReservationsDebugPanel()}setDebugUpdateCallback(e){this.debugPanels.setDebugUpdateCallback(e)}setEconomyDataCallback(e){this.hud.setEconomyDataCallback(e),this.debugPanels.setEconomyDataCallback(e)}updateWorkerDebugPanel(){this.debugPanels.updateWorkerDebugPanel()}updateTaskQueueDebugPanel(){this.debugPanels.updateTaskQueueDebugPanel(this.pickingManager)}getWaveConfig(e){const t=Et.getActiveChallenge();return Y.get("gameMode")==="challenge"&&t?{truckCount:t.wave.truckCount,palletsPerTruck:t.wave.palletsPerTruck,timeBetweenTrucks:t.wave.timeBetweenTrucks,totalWaveTime:t.wave.totalWaveTime,outboundOrderCount:t.wave.outboundOrderCount}:mo(e)}updateWavePreview(e){this.wavePreviewComponent.updateWavePreview(e)}setPreviewOrdersCallback(e){this.wavePreviewComponent.setPreviewOrdersCallback(e)}addMobileInteraction(e,t){let n=0;e.addEventListener("touchend",i=>{i.preventDefault(),n=Date.now(),t()},{passive:!1}),e.addEventListener("click",()=>{Date.now()-n<300||t()})}toggleMobilePanel(e){this.mobileMenu.toggleMobilePanel(e)}setupEventListeners(){const e=()=>{this._panelInteractionActive=!0};this.selectionPanelElement.addEventListener("mousedown",e),this.orderPanelElement.addEventListener("mousedown",e),this.multiSelectPanelElement.addEventListener("mousedown",e),document.addEventListener("mouseup",()=>{this._panelInteractionActive=!1})}clearBuildableRestrictions(){this.buildMenu.clearBuildableRestrictions()}updateHUD(){this.hud.updateHUD()}updateOrders(e){this.orderPanel.updateOrders(e)}initSelectionDependencies(e,t,n){this.selectionPanels.initSelectionDependencies(e,t,n)}updateSelectionPanel(){this.selectionPanels.updateSelectionPanel()}updateMultiSelectPanel(){this.selectionPanels.updateMultiSelectPanel()}hideLoading(){this.loadingScreen.classList.add("hidden")}showLoading(){this.loadingScreen.classList.remove("hidden")}showChallengeLevelSelect(e){this.challengeUI.showChallengeLevelSelect(e)}showChallengeHUD(e){this.challengeUI.showChallengeHUD(e)}hideChallengeHUD(){this.challengeUI.hideChallengeHUD()}showChallengeResults(e,t,n,i){this.challengeUI.showChallengeResults(e,t,n,i)}hideChallengeResults(){this.challengeUI.hideChallengeResults()}}class tv{gameLoop;scene;camera;renderer;canvas;grid;waveManager;outboundTruckManager;orderManager;economyManager;inputSystem;placementSystem;selectionSystem;multiSelectSystem;pickingManager;conveyorManager;uiManager;automatedDocks=[];constructor(){if(this.canvas=document.getElementById("game-canvas"),!this.canvas)throw new Error("Canvas element not found");this.gameLoop=new ug,this.scene=new mg,this.camera=new gg(window.innerWidth/window.innerHeight),this.renderer=new vg(this.canvas),this.grid=new _g(20,20,1),this.scene.add(this.grid.getObject3D()),this.economyManager=new Tg,this.waveManager=new Mg(this.scene.instance,this.grid),this.outboundTruckManager=new Sg(this.scene.instance,this.grid),this.orderManager=new bg,this.waveManager.setOutboundActiveCallback(()=>this.outboundTruckManager.getActiveCount()>0),this.waveManager.setPendingOrdersCallback(()=>this.orderManager.hasUnshippedOrders()),this.inputSystem=new Ag(this.camera,this.canvas),this.conveyorManager=new Hi,this.placementSystem=new Cg(this.scene,this.grid,this.economyManager,this.conveyorManager),this.selectionSystem=new Bg(this.scene,this.inputSystem,this.placementSystem),this.multiSelectSystem=new Hg(this.scene,this.placementSystem,this.camera,this.grid),this.pickingManager=new zg(this.scene,this.grid,this.conveyorManager),this.waveManager.setAutomatedDockPositionsCallback(()=>{const e=new Set;for(let t=0;t<this.grid.width;t++)this.placementSystem.getEntityAt(t,this.grid.height-1)instanceof dt&&e.add(t);return e}),this.outboundTruckManager.setAutomatedDockPositionsCallback(()=>{const e=new Set;for(let t=0;t<this.grid.width;t++)this.placementSystem.getEntityAt(t,0)instanceof dt&&e.add(t);return e}),this.pickingManager.setOutboundTrucksCallback(()=>this.outboundTruckManager.getTrucksNeedingTasks()),this.uiManager=new ev,this.uiManager.initSelectionDependencies(this.pickingManager,this.scene,this.grid),ft.setGrid(this.grid),ft.setEntityProvider(()=>this.placementSystem.getAllEntities()),ft.setOrderManager(this.orderManager),ft.setEconomyManager(this.economyManager),ft.setWaveManager(this.waveManager),this.setupEventHandlers(),this.setupResizeHandler(),this.setupGameLoop(),this.setupGlobalFunctions()}setupInitialDocks(){this.placementSystem.placeEntity("truck-dock",3,this.grid.height-1),this.placementSystem.placeEntity("truck-dock",3,0)}setupEventHandlers(){P.on("ui:start-wave",()=>{this.startWave()}),P.on("ui:start-reorg-wave",()=>{Y.get("gameMode")!=="challenge"&&this.startReorgWave()}),P.on("reorg:complete",()=>{this.onReorgComplete()}),P.on("ui:new-game",()=>{this.startNewGame()}),P.on("ui:sandbox-game",({money:e,workerLimit:t,wave:n})=>{this.startSandboxGame(e,t,n)}),P.on("ui:load-game",()=>{this.loadGame(ft.getCurrentSlot())}),P.on("ui:load-game-slot",({slot:e})=>{this.loadGame(e)}),P.on("ui:delete-save-slot",({slot:e})=>{ft.deleteSlot(e),this.uiManager.showGameMenu(ft.getAllSlotInfos())}),P.on("ui:challenge-start",({levelId:e})=>{this.startChallenge(e)}),P.on("ui:challenge-return-menu",()=>{this.returnToMenuFromChallenge()}),P.on("ui:save-game",()=>{if(Y.get("gameMode")==="challenge")return;const e=this.save();P.emit("game:saved",{success:e})}),P.on("wave:complete",()=>{this.onWaveComplete()}),P.on("game:over",()=>{if(Y.get("gameMode")==="challenge"){this.onChallengeWaveComplete(!0);return}this.gameLoop.pause()}),P.on("entity:placed:complete",({entity:e,type:t,gridX:n,gridZ:i})=>{this.onEntityPlaced(e,t,n,i)}),P.on("truck:docked",({truck:e,dockX:t,dockZ:n})=>{const i=this.placementSystem.getEntityAt(t,n);i instanceof dt?(bt.log(`[Game] Inbound truck docked at automated dock (${t}, ${n}) — pallets: ${e.getPalletsRemaining()}`),i.setDockedTruck(e)):(bt.log(`[Game] Inbound truck docked at (${t}, ${n}) — pallets: ${e.getPalletsRemaining()}`),this.pickingManager.createUnloadTasksForTruck(e,t,n))}),P.on("outbound:truck-docked",({truck:e,dockX:t,dockZ:n,orderId:i,quantity:r})=>{const a=this.placementSystem.getEntityAt(t,n);a instanceof dt&&(a.connectedConveyor?(bt.log(`[Game] Outbound truck docked at automated dock (${t}, ${n}) — needs: ${r} pallets`),a.setOutboundTruck(e,i,r)):bt.log(`[Game] Outbound truck docked at automated dock (${t}, ${n}) but no conveyor connected — truck will not be loaded`))}),P.on("ui:entity-sell",({entity:e})=>{this.sellEntity(e)}),P.on("conveyor:rotated",({entity:e})=>{if(e instanceof je){const{x:t,z:n}=e.getGridPosition();e.nextConveyor=null,e instanceof Ot&&(e.diverterOutputs=[null,null,null]),this.conveyorManager.linkConveyor(e,t,n)}}),P.on("entity:moved",({entity:e,fromX:t,fromZ:n,gridX:i,gridZ:r})=>{e instanceof je&&(this.conveyorManager.unregister(t,n),this.conveyorManager.register(e,i,r),e.nextConveyor=null,e instanceof Ot&&(e.diverterOutputs=[null,null,null]),this.conveyorManager.linkConveyor(e,i,r))}),P.on("outbound:order-completed",()=>{this.uiManager.updateEconomyPanel()}),P.on("ui:floor-expansion",()=>{this.purchaseFloorExpansion()}),P.on("ui:floor-expansion-vertical",()=>{this.purchaseVerticalFloorExpansion()}),P.on("ui:worker-capacity-expansion",()=>{this.purchaseWorkerCapacityExpansion()}),P.on("ui:multi-select-clear",()=>{this.multiSelectSystem.clearSelection()}),P.on("ui:multi-select-move-activate",()=>{this.multiSelectSystem.activateMoveMode()}),P.on("ui:multi-select-sell-all",({entities:e})=>{this.multiSelectSystem.clearSelection();for(const t of e)this.sellEntity(t,!1)}),P.on("ui:multi-select-move-all",({entities:e,dx:t,dz:n})=>{this.moveMultipleEntities(e,t,n)}),P.on("ui:multi-select-storage-type",({storageType:e,entities:t})=>{for(const n of t)"storageType"in n&&(n.storageType=e,P.emit("entity:storage-type-changed",{entity:n,storageType:e}))})}purchaseFloorExpansion(){const e=Y.get("floorExpansionCount"),t=Za(e);Y.spendMoney(t)&&(this.grid.expand(Ya),Y.set("floorExpansionCount",e+1),this.camera.setGridDimensions(this.grid.width,this.grid.height),this.uiManager.updateHUD())}purchaseVerticalFloorExpansion(){const e=Y.get("floorVerticalExpansionCount"),t=Ka(e);if(!Y.spendMoney(t))return;const n=this.grid.height,i=this.placementSystem.getAllEntities().filter(a=>(a.type==="truck-dock"||a.type==="automated-truck-dock")&&a.getGridPosition().z===n-1);this.grid.expandVertical(qa),Y.set("floorVerticalExpansionCount",e+1);const r=this.grid.height-1;for(const a of i){const{x:o}=a.getGridPosition();this.placementSystem.relocateEntity(o,n-1,o,r)}this.camera.setGridDimensions(this.grid.width,this.grid.height),this.uiManager.updateHUD()}purchaseWorkerCapacityExpansion(){const e=Y.get("workerCapacityExpansionCount"),t=ja(e);Y.spendMoney(t)&&(Y.increaseWorkerLimit(Fc),Y.set("workerCapacityExpansionCount",e+1),this.uiManager.updateHUD())}sellEntity(e,t=!0){if(!e)return;const{x:n,z:i}=e.getGridPosition();if(e.type,e instanceof Nt||e instanceof Tt)this.pickingManager.unregisterWorker(e.id);else if(e instanceof Xt)this.pickingManager.unregisterRack(n,i);else if(e instanceof os)this.pickingManager.unregisterFloorSlot(n,i);else if(e instanceof je)this.conveyorManager.unregister(n,i),this.automatedDocks.forEach(r=>{r.connectedConveyor===e&&(r.connectedConveyor=null)}),e.isAutomationEntrance=!1,e.isAutomationExit=!1;else if(e instanceof dt){const r=this.automatedDocks.indexOf(e);r>=0&&this.automatedDocks.splice(r,1)}this.placementSystem.removeEntity(n,i),t&&P.emit("input:escape"),this.uiManager.updateHUD()}onEntityPlaced(e,t,n,i){e instanceof Nt||e instanceof Tt?this.pickingManager.registerWorker(e):e instanceof Xt?this.pickingManager.registerRack(e,n,i):e instanceof os?this.pickingManager.registerFloorSlot(e,n,i):e instanceof je?(this.conveyorManager.register(e,n,i),this.conveyorManager.linkConveyor(e,n,i)):e instanceof dt&&this.automatedDocks.push(e)}moveMultipleEntities(e,t,n){if(e.length===0||t===0&&n===0)return;const i=[];for(const o of e){const{x:l,z:c}=o.getGridPosition(),h=l+t,d=c+n;i.push({entity:o,fromX:l,fromZ:c,toX:h,toZ:d})}const r=new Set(i.map(o=>`${o.fromX},${o.fromZ}`));new Set(i.map(o=>`${o.toX},${o.toZ}`));for(const o of i){const{toX:l,toZ:c}=o,h=this.grid.getCell(l,c);if(!h||h.occupied&&!r.has(`${l},${c}`)||!h.buildable)return}for(const{entity:o,fromX:l,fromZ:c}of i)this.grid.remove(l,c);const a=[];for(const o of i){const{entity:l,fromX:c,fromZ:h,toX:d,toZ:u}=o,f=this.placementSystem.getCellTypeForBuildable(l.type);if(!this.grid.place(d,u,l,f)){this.grid.place(c,h,l,f),l.setGridPosition(c,h);continue}l.setGridPosition(d,u),a.push(o)}this.placementSystem.batchUpdateEntityPositions(a);for(const{entity:o,fromX:l,fromZ:c,toX:h,toZ:d}of a)P.emit("entity:moved",{entity:o,fromX:l,fromZ:c,gridX:h,gridZ:d})}setupResizeHandler(){window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.resize(e/t),this.renderer.resize(e,t)})}setupGameLoop(){this.gameLoop.onUpdate((e,t)=>{this.update(e,t)}),this.gameLoop.onRender(()=>{this.render()})}setupGlobalFunctions(){window.fulfillOrder=e=>{this.orderManager.fulfillOrder(e)&&(this.uiManager.updateOrders(this.orderManager.getOrders()),this.uiManager.updateHUD())},this.uiManager.setDebugUpdateCallback(()=>({workers:this.pickingManager.getWorkerDebugInfo(),tasks:this.pickingManager.getTaskQueueStats()})),this.uiManager.setEconomyDataCallback(()=>({waveHistory:this.economyManager.getWaveHistory(),operatorCount:this.economyManager.getBuildCount("operator"),forkliftCount:this.economyManager.getBuildCount("forklift"),forkliftAgvCount:this.economyManager.getBuildCount("forklift-agv"),currentWaveOrderIncome:this.economyManager.getCurrentWaveOrderIncome()})),this.uiManager.setPreviewOrdersCallback(()=>this.orderManager.getPreviewOrders())}update(e,t){const n=Y.get("gameSpeed"),i=e*n;this.inputSystem.update(e),this.camera.update(),this.placementSystem.update(i),this.selectionSystem.update(),this.multiSelectSystem.update(),Y.get("phase")==="operations"&&(this.waveManager.update(i),this.outboundTruckManager.update(i),this.orderManager.update(i),this.pickingManager.update(i),this.automatedDocks.forEach(r=>r.update(i)),this.uiManager.updateOrders(this.orderManager.getOrders())),Y.get("phase")==="reorg"&&(this.waveManager.update(i),this.pickingManager.update(i)),this.uiManager.updateWorkerDebugPanel(),this.uiManager.updateTaskQueueDebugPanel(),this.uiManager.updateReservationsDebugPanel(),this.uiManager.updateDebugLogPanel(),this.uiManager.updateSelectionPanel(),this.uiManager.updateMultiSelectPanel()}render(){this.renderer.render(this.scene.instance,this.camera.instance)}startWave(){const e=Y.get("wave");bt.log(`[Game] Wave ${e} started`),Y.setPhase("operations"),this.waveManager.startWave(),this.orderManager.activateWaveOrders()}startReorgWave(){const e=Y.get("wave"),t=Dc*e;Y.spendMoney(t)&&(bt.log(`[Game] Reorg wave started (cost: $${t})`),Y.setPhase("reorg"),this.waveManager.startReorgWave())}onReorgComplete(){bt.log("[Game] Reorg wave complete"),Y.setPhase("build"),this.uiManager.updateHUD(),ft.save()}onWaveComplete(){const e=Y.get("wave");if(bt.log(`[Game] Wave ${e} complete`),Y.get("gameMode")==="challenge"){this.onChallengeWaveComplete(!1);return}const t=this.economyManager.deductWages(),n=this.economyManager.grantWaveBonus(e);this.economyManager.pushWaveRecord(e,n,t),this.uiManager.updateEconomyPanel(),Y.nextWave();const i=Y.get("wave"),r=this.waveManager.getWaveConfig(i);this.orderManager.prepareForWave(i,r.outboundOrderCount,r.totalWaveTime,r.palletsPerTruck),this.uiManager.updateWavePreview(),e%5===0&&P.emit("wave:milestone",{wave:e}),Y.setPhase("build"),this.uiManager.updateHUD(),ft.save()}startChallenge(e){const t=Et.getLevel(e);if(t&&Et.isLevelUnlocked(e)){bt.log(`[Game] Starting challenge level ${e}: ${t.name}`),this.cleanupForRestart(),Et.setActiveChallenge(e),this.grid.rebuild(t.gridWidth,t.gridHeight),this.camera.setGridDimensions(this.grid.width,this.grid.height),Y.reset(),Y.setGameMode("challenge"),Y.set("money",t.budget),Y.set("workerLimit",t.workerLimit),Y.set("wave",1),Y.setPhase("build"),this.waveManager.setWaveConfigOverride(t.wave);for(const n of t.initialEntities)this.placementSystem.placeEntity(n.type,n.x,n.z,{direction:n.direction,storageType:n.storageType,storedPallets:n.storedPallets});this.relinkAll(),this.orderManager.prepareForWave(1,t.wave.outboundOrderCount,t.wave.totalWaveTime,t.wave.outboundOrderPallets),this.uiManager.hideLoading(),this.uiManager.updateHUD(),this.uiManager.updateWavePreview(),this.uiManager.showChallengeHUD(t),this.gameLoop.resume(),t.allowedBuildables&&P.emit("challenge:set-allowed-buildables",{allowed:t.allowedBuildables})}}onChallengeWaveComplete(e){const t=Et.getActiveChallenge();if(!t)return;const n=Y.get("money"),i=Et.calculateStars(t.id,n,e);bt.log(`[Game] Challenge ${t.id} complete — stars: ${i}, remaining: $${n}, failed: ${e}`),e||Et.recordCompletion(t.id,i,n),this.gameLoop.pause(),this.uiManager.showChallengeResults(t,i,n,e)}returnToMenuFromChallenge(){this.cleanupForRestart(),Et.clearActiveChallenge(),this.grid.rebuild(20,20),this.camera.setGridDimensions(this.grid.width,this.grid.height),Y.reset(),this.uiManager.hideChallengeHUD(),this.uiManager.clearBuildableRestrictions(),this.uiManager.showLoading(),this.uiManager.showGameMenu(ft.getAllSlotInfos()),this.gameLoop.resume()}cleanupForRestart(){document.querySelector(".game-over-overlay")?.remove(),this.uiManager.hideChallengeResults(),this.placementSystem.reset(),this.waveManager.reset(),this.orderManager.reset(),this.economyManager.reset(),this.pickingManager.reset(),this.conveyorManager.reset(),this.automatedDocks=[],Y.reset()}start(){ft.restoreLastSlot(),this.uiManager.showGameMenu(ft.getAllSlotInfos()),this.gameLoop.start(),console.log("Warehouse Defender started!")}startNewGame(){bt.log("[Game] New game started");const t=ft.getAllSlotInfos().find(i=>!i.exists)?.slot??1;ft.setCurrentSlot(t),Y.setGameMode("normal"),this.setupInitialDocks(),this.uiManager.hideLoading(),this.uiManager.updateHUD();const n=this.waveManager.getWaveConfig(1);this.orderManager.prepareForWave(1,n.outboundOrderCount,n.totalWaveTime,n.palletsPerTruck),this.uiManager.updateWavePreview()}startSandboxGame(e,t,n){bt.log(`[Game] Sandbox game started (money=${e}, workerLimit=${t}, wave=${n})`),Y.setGameMode("sandbox");const r=ft.getAllSlotInfos().find(o=>!o.exists)?.slot??1;ft.setCurrentSlot(r),Y.set("money",e),Y.set("workerLimit",t),Y.set("wave",n),this.setupInitialDocks(),this.uiManager.hideLoading(),this.uiManager.updateHUD();const a=this.waveManager.getWaveConfig(n);this.orderManager.prepareForWave(n,a.outboundOrderCount,a.totalWaveTime,a.palletsPerTruck),this.uiManager.updateWavePreview()}loadGame(e){const t=e??ft.getCurrentSlot();ft.setCurrentSlot(t);const n=ft.loadFromSlot(t);if(!n)return!1;bt.log(`[Game] Game loaded from slot ${t}`),Y.deserialize(n.gameState);const i=Y.get("floorExpansionCount");for(let a=0;a<i;a++)this.grid.expand(Ya);const r=Y.get("floorVerticalExpansionCount");for(let a=0;a<r;a++)this.grid.expandVertical(qa);this.camera.setGridDimensions(this.grid.width,this.grid.height);for(const a of n.entities){const o=a.type;o in $t&&this.placementSystem.placeEntity(o,a.gridX,a.gridZ,{direction:a.direction,storageType:a.storageType,storedPallets:a.storedPallets,hasPallet:a.hasPallet,allowedTaskTypes:a.allowedTaskTypes,craneLength:a.craneLength,capacity:a.capacity})}this.relinkAll(),n.orders&&this.orderManager.deserialize(n.orders),n.economyState&&this.economyManager.deserialize(n.economyState),n.waveState&&this.waveManager.restoreFromSave(n.waveState);for(const a of this.orderManager.getOrders())(a.status==="awaiting-truck"||a.status==="loading")&&P.emit("outbound:request-truck",{orderId:a.id,quantity:a.quantity-a.palletsLoaded,reward:a.reward,dockTime:a.dockTimeRemaining});return this.uiManager.hideLoading(),this.uiManager.updateHUD(),this.uiManager.updateEconomyPanel(),this.uiManager.updateWavePreview(),!0}relinkAll(){this.placementSystem.relinkStackerCraneChildren(),this.placementSystem.relinkAutomatedDocks(),this.conveyorManager.relinkAll()}save(){return ft.save()}pause(){this.gameLoop.pause(),Y.pause()}resume(){this.gameLoop.resume(),Y.resume()}reset(){this.gameLoop.stop(),this.placementSystem.reset(),this.waveManager.reset(),this.orderManager.reset(),this.economyManager.reset(),this.pickingManager.reset(),Y.reset(),ft.deleteSave(),this.start()}dispose(){this.gameLoop.stop(),this.inputSystem.dispose(),this.renderer.dispose()}}document.addEventListener("DOMContentLoaded",()=>{const s=new tv;s.start(),window.game=s,document.addEventListener("visibilitychange",()=>{document.hidden?s.pause():s.resume()}),window.addEventListener("beforeunload",e=>{})});
