(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const pd=200;class md{entries=[];log(e){this.push("info",e),console.log(e)}warn(e){this.push("warn",e),console.warn(e)}error(e){this.push("error",e),console.error(e)}push(e,t){this.entries.length>=pd&&this.entries.shift(),this.entries.push({timestamp:Date.now(),level:e,message:t})}getEntries(){return this.entries.slice()}clear(){this.entries=[]}}const _t=new md;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="170",gd=0,Wo=1,vd=2,pc=1,mc=2,Pn=3,qn=0,qt=1,Vt=2,$n=0,Ni=1,Vo=2,$o=3,Xo=4,yd=5,ri=100,_d=101,Md=102,Sd=103,xd=104,wd=200,bd=201,Td=202,Ed=203,ya=204,_a=205,Pd=206,kd=207,Cd=208,Ad=209,Rd=210,Id=211,Ld=212,Dd=213,Od=214,Ma=0,Sa=1,xa=2,Hi=3,wa=4,ba=5,Ta=6,Ea=7,gc=0,Ud=1,Nd=2,Xn=0,Fd=1,Bd=2,zd=3,vc=4,Hd=5,Gd=6,Wd=7,yc=300,Gi=301,Wi=302,Pa=303,ka=304,Er=306,ps=1e3,oi=1001,Ca=1002,mn=1003,Vd=1004,bs=1005,rn=1006,Dr=1007,li=1008,Dn=1009,_c=1010,Mc=1011,ms=1012,vo=1013,di=1014,Cn=1015,vs=1016,yo=1017,_o=1018,Vi=1020,Sc=35902,xc=1021,wc=1022,pn=1023,bc=1024,Tc=1025,Fi=1026,$i=1027,Ec=1028,Mo=1029,Pc=1030,So=1031,xo=1033,sr=33776,rr=33777,ar=33778,or=33779,Aa=35840,Ra=35841,Ia=35842,La=35843,Da=36196,Oa=37492,Ua=37496,Na=37808,Fa=37809,Ba=37810,za=37811,Ha=37812,Ga=37813,Wa=37814,Va=37815,$a=37816,Xa=37817,qa=37818,Ya=37819,Ka=37820,Za=37821,lr=36492,ja=36494,Qa=36495,kc=36283,Ja=36284,eo=36285,to=36286,$d=3200,Xd=3201,Cc=0,qd=1,Wn="",nn="srgb",qi="srgb-linear",Pr="linear",at="srgb",gi=7680,qo=519,Yd=512,Kd=513,Zd=514,Ac=515,jd=516,Qd=517,Jd=518,eh=519,no=35044,Yo="300 es",An=2e3,fr=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const Bi=Math.PI/180,gs=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Wt(r,e,t){return Math.max(e,Math.min(t,r))}function wo(r,e){return(r%e+e)%e}function th(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function nh(r,e,t){return r!==e?(t-r)/(e-r):0}function fs(r,e,t){return(1-t)*r+t*e}function ih(r,e,t,n){return fs(r,e,1-Math.exp(-t*n))}function sh(r,e=1){return e-Math.abs(wo(r,e*2)-e)}function rh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ah(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function oh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lh(r,e){return r+Math.random()*(e-r)}function ch(r){return r*(.5-Math.random())}function dh(r){r!==void 0&&(Ko=r);let e=Ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hh(r){return r*Bi}function uh(r){return r*gs}function fh(r){return(r&r-1)===0&&r!==0}function ph(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*h,l*u,o*c);break;case"YZY":r.set(l*u,o*d,l*h,o*c);break;case"ZXZ":r.set(l*h,l*u,o*d,o*c);break;case"XZX":r.set(o*d,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*d,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zo={DEG2RAD:Bi,RAD2DEG:gs,generateUUID:Rn,clamp:Wt,euclideanModulo:wo,mapLinear:th,inverseLerp:nh,lerp:fs,damp:ih,pingpong:sh,smoothstep:rh,smootherstep:ah,randInt:oh,randFloat:lh,randFloatSpread:ch,seededRandom:dh,degToRad:hh,radToDeg:uh,isPowerOfTwo:fh,ceilPowerOfTwo:ph,floorPowerOfTwo:mh,setQuaternionFromProperEuler:gh,normalize:rt,denormalize:fn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],w=i[1],b=i[4],S=i[7],I=i[2],k=i[5],P=i[8];return s[0]=a*v+o*w+l*I,s[3]=a*m+o*b+l*k,s[6]=a*p+o*S+l*P,s[1]=c*v+d*w+h*I,s[4]=c*m+d*b+h*k,s[7]=c*p+d*S+h*P,s[2]=u*v+f*w+g*I,s[5]=u*m+f*b+g*k,s[8]=u*p+f*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-d*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(d*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Or.makeScale(e,t)),this}rotate(e){return this.premultiply(Or.makeRotation(-e)),this}translate(e,t){return this.premultiply(Or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new He;function Rc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vh(){const r=pr("canvas");return r.style.display="block",r}const jo={};function ds(r){r in jo||(jo[r]=!0,console.warn(r))}function yh(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function _h(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mh(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wn?Pr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function In(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qo=[.64,.33,.3,.6,.15,.06],Jo=[.2126,.7152,.0722],el=[.3127,.329],tl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[qi]:{primaries:Qo,whitePoint:el,transfer:Pr,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Jo,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:Qo,whitePoint:el,transfer:at,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Jo,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let vi;class Sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=pr("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xh=0;class Ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ur(i[a].image)):s.push(Ur(i[a]))}else s=Ur(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ur(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class $t extends Yi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=oi,i=oi,s=rn,a=li,o=pn,l=Dn,c=$t.DEFAULT_ANISOTROPY,d=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Rn(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=yc;$t.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(f+1)/2,I=(p+1)/2,k=(d+u)/4,P=(h+v)/4,R=(g+m)/4;return b>S&&b>I?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=k/n,s=P/n):S>I?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=k/i,s=R/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=P/s,i=R/s),this.set(n,i,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-v)/w,this.z=(u-d)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lc extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==u||c!==f||d!==g){let m=1-o;const p=l*u+c*f+d*g+h*v,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const I=Math.sqrt(b),k=Math.atan2(I,p*w);m=Math.sin(m*k)/I,o=Math.sin(o*k)/I}const S=o*w;if(l=l*m+u*S,c=c*m+f*S,d=d*m+g*S,h=h*m+v*S,m===1-o){const I=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=I,c*=I,d*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-o*f,e[t+2]=c*g+d*f+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=i+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new A,il=new ys;class Ki{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Es.subVectors(this.max,Ji),yi.subVectors(e.a,Ji),_i.subVectors(e.b,Ji),Mi.subVectors(e.c,Ji),Nn.subVectors(_i,yi),Fn.subVectors(Mi,_i),jn.subVectors(yi,Mi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-jn.z,jn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,jn.z,0,-jn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-jn.y,jn.x,0];return!Fr(t,yi,_i,Mi,Es)||(t=[1,0,0,0,1,0,0,0,1],!Fr(t,yi,_i,Mi,Es))?!1:(Ps.crossVectors(Nn,Fn),t=[Ps.x,Ps.y,Ps.z],Fr(t,yi,_i,Mi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new A,new A,new A,new A,new A,new A,new A,new A],ln=new A,Ts=new Ki,yi=new A,_i=new A,Mi=new A,Nn=new A,Fn=new A,jn=new A,Ji=new A,Es=new A,Ps=new A,Qn=new A;function Fr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Qn.fromArray(r,s);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),d=n.dot(Qn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Eh=new Ki,es=new A,Br=new A;class kr{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Br)),this.expandByPoint(es.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new A,zr=new A,ks=new A,Bn=new A,Hr=new A,Cs=new A,Gr=new A;class bo{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zr.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(zr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ks),o=Bn.dot(this.direction),l=-Bn.dot(ks),c=Bn.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*l-o,u=a*o-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(zr).addScaledVector(ks,u),f}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,s){Hr.subVectors(t,e),Cs.subVectors(n,e),Gr.crossVectors(Hr,Cs);let a=this.direction.dot(Gr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(Cs.crossVectors(Bn,Cs));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Bn));if(c<0||l+c>a)return null;const d=-o*Bn.dot(Gr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,i,s,a,o,l,c,d,h,u,f,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,h,u,f,g,v,m)}set(e,t,n,i,s,a,o,l,c,d,h,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,v=c*h;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,v=c*h;t[0]=u-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,kh)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),zn.crossVectors(n,Kt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),zn.crossVectors(n,Kt)),zn.normalize(),As.crossVectors(Kt,zn),i[0]=zn.x,i[4]=As.x,i[8]=Kt.x,i[1]=zn.y,i[5]=As.y,i[9]=Kt.y,i[2]=zn.z,i[6]=As.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],b=n[7],S=n[11],I=n[15],k=i[0],P=i[4],R=i[8],M=i[12],y=i[1],C=i[5],H=i[9],F=i[13],Y=i[2],K=i[6],$=i[10],ee=i[14],V=i[3],ce=i[7],re=i[11],ie=i[15];return s[0]=a*k+o*y+l*Y+c*V,s[4]=a*P+o*C+l*K+c*ce,s[8]=a*R+o*H+l*$+c*re,s[12]=a*M+o*F+l*ee+c*ie,s[1]=d*k+h*y+u*Y+f*V,s[5]=d*P+h*C+u*K+f*ce,s[9]=d*R+h*H+u*$+f*re,s[13]=d*M+h*F+u*ee+f*ie,s[2]=g*k+v*y+m*Y+p*V,s[6]=g*P+v*C+m*K+p*ce,s[10]=g*R+v*H+m*$+p*re,s[14]=g*M+v*F+m*ee+p*ie,s[3]=w*k+b*y+S*Y+I*V,s[7]=w*P+b*C+S*K+I*ce,s[11]=w*R+b*H+S*$+I*re,s[15]=w*M+b*F+S*ee+I*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*u+n*c*u+i*o*f-n*l*f)+v*(+t*l*f-t*c*u+s*a*u-i*a*f+i*c*d-s*l*d)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*d-n*c*d)+p*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=h*m*c-v*u*c+v*l*f-o*m*f-h*l*p+o*u*p,b=g*u*c-d*m*c-g*l*f+a*m*f+d*l*p-a*u*p,S=d*v*c-g*h*c+g*o*f-a*v*f-d*o*p+a*h*p,I=g*h*l-d*v*l-g*o*u+a*v*u+d*o*m-a*h*m,k=t*w+n*b+i*S+s*I;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/k;return e[0]=w*P,e[1]=(v*u*s-h*m*s-v*i*f+n*m*f+h*i*p-n*u*p)*P,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*p+n*l*p)*P,e[3]=(h*l*s-o*u*s-h*i*c+n*u*c+o*i*f-n*l*f)*P,e[4]=b*P,e[5]=(d*m*s-g*u*s+g*i*f-t*m*f-d*i*p+t*u*p)*P,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*P,e[7]=(a*u*s-d*l*s+d*i*c-t*u*c-a*i*f+t*l*f)*P,e[8]=S*P,e[9]=(g*h*s-d*v*s-g*n*f+t*v*f+d*n*p-t*h*p)*P,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*p+t*o*p)*P,e[11]=(d*o*s-a*h*s-d*n*c+t*h*c+a*n*f-t*o*f)*P,e[12]=I*P,e[13]=(d*v*i-g*h*i+g*n*u-t*v*u-d*n*m+t*h*m)*P,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,g=s*h,v=a*d,m=a*h,p=o*h,w=l*c,b=l*d,S=l*h,I=n.x,k=n.y,P=n.z;return i[0]=(1-(v+p))*I,i[1]=(f+S)*I,i[2]=(g-b)*I,i[3]=0,i[4]=(f-S)*k,i[5]=(1-(u+p))*k,i[6]=(m+w)*k,i[7]=0,i[8]=(g+b)*P,i[9]=(m-w)*P,i[10]=(1-(u+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Si.set(i[0],i[1],i[2]).length();const a=Si.set(i[4],i[5],i[6]).length(),o=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/s,d=1/a,h=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=An){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===An)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===fr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=An){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-s),u=(t+e)*c,f=(n+i)*d;let g,v;if(o===An)g=(a+s)*h,v=-2*h;else if(o===fr)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new A,cn=new pt,Ph=new A(0,0,0),kh=new A(1,1,1),zn=new A,As=new A,Kt=new A,sl=new pt,rl=new ys;class yn{constructor(e=0,t=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const al=new A,xi=new ys,bn=new pt,Rs=new A,ts=new A,Ah=new A,Rh=new ys,ol=new A(1,0,0),ll=new A(0,1,0),cl=new A(0,0,1),dl={type:"added"},Ih={type:"removed"},wi={type:"childadded",child:null},Wr={type:"childremoved",child:null};class Tt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new A,t=new yn,n=new ys,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ts,Rs,this.up):bn.lookAt(Rs,ts,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(bn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new A(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new A,Tn=new A,Vr=new A,En=new A,bi=new A,Ti=new A,hl=new A,$r=new A,Xr=new A,qr=new A,Yr=new Mt,Kr=new Mt,Zr=new Mt;class Qt{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),Tn.subVectors(n,t),Vr.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Tn),l=dn.dot(Vr),c=Tn.dot(Tn),d=Tn.dot(Vr),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,g=(a*d-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Yr.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),Yr.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),Zr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Yr,s.x),a.addScaledVector(Kr,s.y),a.addScaledVector(Zr,s.z),a}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Tn.subVectors(e,t),dn.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),dn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;bi.subVectors(i,n),Ti.subVectors(s,n),$r.subVectors(e,n);const l=bi.dot($r),c=Ti.dot($r);if(l<=0&&c<=0)return t.copy(n);Xr.subVectors(e,i);const d=bi.dot(Xr),h=Ti.dot(Xr);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(bi,a);qr.subVectors(e,s);const f=bi.dot(qr),g=Ti.dot(qr);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ti,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return hl.subVectors(s,i),o=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(hl,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(bi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function jr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=wo(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=jr(a,s,e+1/3),this.g=jr(a,s,e),this.b=jr(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ze.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Wt(Bt.r*255,0,255))*65536+Math.round(Wt(Bt.g*255,0,255))*256+Math.round(Wt(Bt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=nn){Ze.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Is);const n=fs(Hn.h,Is.h,t),i=fs(Hn.s,Is.s,t),s=fs(Hn.l,Is.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Xe;Xe.NAMES=Dc;let Lh=0;class ui extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Rn(),this.name="",this.blending=Ni,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=_a,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new A,Ls=new Fe;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}}class Oc extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dh=0;const tn=new pt,Qr=new Tt,Ei=new A,Zt=new Ki,ns=new Ki,Rt=new A;class Ut extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Uc:Oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Zt.min,ns.min),Zt.expandByPoint(Rt),Rt.addVectors(Zt.max,ns.max),Zt.expandByPoint(Rt)):(Zt.expandByPoint(ns.min),Zt.expandByPoint(ns.max))}Zt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Rt.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(e,c),Rt.add(Ei)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new A,l[R]=new A;const c=new A,d=new A,h=new A,u=new Fe,f=new Fe,g=new Fe,v=new A,m=new A;function p(R,M,y){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),u.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(C),o[R].add(v),o[M].add(v),o[y].add(v),l[R].add(m),l[M].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,M=w.length;R<M;++R){const y=w[R],C=y.start,H=y.count;for(let F=C,Y=C+H;F<Y;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new A,S=new A,I=new A,k=new A;function P(R){I.fromBufferAttribute(i,R),k.copy(I);const M=o[R];b.copy(M),b.sub(I.multiplyScalar(I.dot(M))).normalize(),S.crossVectors(k,M);const C=S.dot(l[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,M=w.length;R<M;++R){const y=w[R],C=y.start,H=y.count;for(let F=C,Y=C+H;F<Y;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,d=new A,h=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new Jt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new pt,Jn=new bo,Ds=new kr,fl=new A,Os=new A,Us=new A,Ns=new A,Jr=new A,Fs=new A,pl=new A,Bs=new A;class N extends Tt{constructor(e=new Ut,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Jr.fromBufferAttribute(h,e),a?Fs.addScaledVector(Jr,d):Fs.addScaledVector(Jr.sub(t),d))}t.add(Fs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Ds.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ds,fl)===null||Jn.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(ul.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,I=b;S<I;S+=3){const k=o.getX(S),P=o.getX(S+1),R=o.getX(S+2);i=zs(this,p,e,n,c,d,h,k,P,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);i=zs(this,a,e,n,c,d,h,w,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,I=b;S<I;S+=3){const k=S,P=S+1,R=S+2;i=zs(this,p,e,n,c,d,h,k,P,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,b=m+1,S=m+2;i=zs(this,a,e,n,c,d,h,w,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Oh(r,e,t,n,i,s,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===qn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:r}}function zs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Os),r.getVertexPosition(l,Us),r.getVertexPosition(c,Ns);const d=Oh(r,e,t,n,Os,Us,Ns,pl);if(d){const h=new A;Qt.getBarycoord(pl,Os,Us,Ns,h),i&&(d.uv=Qt.getInterpolatedAttribute(i,o,l,c,h,new Fe)),s&&(d.uv1=Qt.getInterpolatedAttribute(s,o,l,c,h,new Fe)),a&&(d.normal=Qt.getInterpolatedAttribute(a,o,l,c,h,new A),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new A,materialIndex:0};Qt.getNormal(Os,Us,Ns,u.normal),d.face=u,d.barycoord=h}return d}class te extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(h,2));function g(v,m,p,w,b,S,I,k,P,R,M){const y=S/P,C=I/R,H=S/2,F=I/2,Y=k/2,K=P+1,$=R+1;let ee=0,V=0;const ce=new A;for(let re=0;re<$;re++){const ie=re*C-F;for(let pe=0;pe<K;pe++){const ke=pe*y-H;ce[v]=ke*w,ce[m]=ie*b,ce[p]=Y,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=k>0?1:-1,d.push(ce.x,ce.y,ce.z),h.push(pe/P),h.push(1-re/R),ee+=1}}for(let re=0;re<R;re++)for(let ie=0;ie<P;ie++){const pe=u+ie+K*re,ke=u+ie+K*(re+1),X=u+(ie+1)+K*(re+1),j=u+(ie+1)+K*re;l.push(pe,ke,j),l.push(ke,X,j),V+=6}o.addGroup(f,V,M),f+=V,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new te(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=Xi(r[t]);for(const i in n)e[i]=n[i]}return e}function Uh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Nc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Nh={clone:Xi,merge:Ht};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Fc=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Gn=new A,ml=new Fe,gl=new Fe;class hn extends Fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,ki=1;class zh extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(Pi,ki,e,t);i.layers=this.layers,this.add(i);const s=new hn(Pi,ki,e,t);s.layers=this.layers,this.add(s);const a=new hn(Pi,ki,e,t);a.layers=this.layers,this.add(a);const o=new hn(Pi,ki,e,t);o.layers=this.layers,this.add(o);const l=new hn(Pi,ki,e,t);l.layers=this.layers,this.add(l);const c=new hn(Pi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bc extends $t{constructor(e,t,n,i,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hh extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new te(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:$n});s.uniforms.tEquirect.value=t;const a=new N(i,s),o=t.minFilter;return t.minFilter===li&&(t.minFilter=rn),new zh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ea=new A,Gh=new A,Wh=new He;class kn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ea.subVectors(n,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wh.getNormalMatrix(e),i=this.coplanarPoint(ea).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new kr,Hs=new A;class Eo{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,a=new kn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],w=i[13],b=i[14],S=i[15];if(n[0].setComponents(l-s,u-c,m-f,S-p).normalize(),n[1].setComponents(l+s,u+c,m+f,S+p).normalize(),n[2].setComponents(l+a,u+d,m+g,S+w).normalize(),n[3].setComponents(l-a,u-d,m-g,S-w).normalize(),n[4].setComponents(l-o,u-h,m-v,S-b).normalize(),t===An)n[5].setComponents(l+o,u+h,m+v,S+b).normalize();else if(t===fr)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hs.x=i.normal.x>0?e.max.x:e.min.x,Hs.y=i.normal.y>0?e.max.y:e.min.y,Hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vh(r){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];r.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Et extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const w=p*u-a;for(let b=0;b<c;b++){const S=b*h-s;g.push(S,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,S=w+c*(p+1),I=w+1+c*(p+1),k=w+1+c*p;f.push(b,S,k),f.push(S,I,k)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.widthSegments,e.heightSegments)}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
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
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,ru=`#ifdef USE_BUMPMAP
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pu=`#define PI 3.141592653589793
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gu=`vec3 transformedNormal = objectNormal;
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
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
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
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
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
#endif`,Wu=`struct PhysicalMaterial {
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
}`,Vu=`
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ef=`#if defined( USE_POINTS_UV )
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
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Af=`float getShadowMask() {
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
}`,Rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
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
}`,Qf=`#if DEPTH_PACKING == 3200
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
}`,Jf=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,dp=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,up=`#define NORMAL
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
}`,fp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,vp=`#define TOON
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
}`,yp=`#define TOON
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
}`,_p=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,wp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:$h,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:Zh,aomap_fragment:jh,aomap_pars_fragment:Qh,batching_pars_vertex:Jh,batching_vertex:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:du,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:vu,displacementmap_vertex:yu,emissivemap_fragment:_u,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:xu,envmap_fragment:wu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Tu,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Nu,envmap_vertex:Pu,fog_vertex:ku,fog_pars_vertex:Cu,fog_fragment:Au,fog_pars_fragment:Ru,gradientmap_pars_fragment:Iu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Ou,lights_pars_begin:Uu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Bu,lights_phong_fragment:zu,lights_phong_pars_fragment:Hu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Vu,lights_fragment_maps:$u,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:Zu,map_fragment:ju,map_pars_fragment:Qu,map_particle_fragment:Ju,map_particle_pars_fragment:ef,metalnessmap_fragment:tf,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:af,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:df,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:yf,opaque_fragment:_f,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:xf,dithering_fragment:wf,dithering_pars_fragment:bf,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:Ef,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:kf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Af,skinbase_vertex:Rf,skinning_pars_vertex:If,skinning_vertex:Lf,skinnormal_vertex:Df,specularmap_fragment:Of,specularmap_pars_fragment:Uf,tonemapping_fragment:Nf,tonemapping_pars_fragment:Ff,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:Hf,uv_pars_vertex:Gf,uv_vertex:Wf,worldpos_vertex:Vf,background_vert:$f,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Kf,cube_frag:Zf,depth_vert:jf,depth_frag:Qf,distanceRGBA_vert:Jf,distanceRGBA_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:dp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:vp,meshtoon_frag:yp,points_vert:_p,points_frag:Mp,shadow_vert:Sp,shadow_frag:xp,sprite_vert:wp,sprite_frag:bp},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},vn={basic:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([he.common,he.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};vn.physical={uniforms:Ht([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Gs={r:0,b:0,g:0},ti=new yn,Tp=new pt;function Ep(r,e,t,n,i,s,a){const o=new Xe(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function v(w){let b=!1;const S=g(w);S===null?p(o,l):S&&S.isColor&&(p(S,1),b=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(w,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Er)?(d===void 0&&(d=new N(new te(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Xi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,k,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ti.copy(b.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(ti)),d.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,(h!==S||u!==S.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=S,u=S.version,f=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new N(new Et(2,2),new Yn({name:"BackgroundMaterial",uniforms:Xi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(Gs,Nc(r)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:v,addToRenderList:m}}function Pp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(y,C,H,F,Y){let K=!1;const $=h(F,H,C);s!==$&&(s=$,c(s.object)),K=f(y,F,H,Y),K&&g(y,F,H,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(y,C,H,F),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function d(y){return r.deleteVertexArray(y)}function h(y,C,H){const F=H.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let K=Y[C.id];K===void 0&&(K={},Y[C.id]=K);let $=K[F];return $===void 0&&($=u(l()),K[F]=$),$}function u(y){const C=[],H=[],F=[];for(let Y=0;Y<t;Y++)C[Y]=0,H[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,C,H,F){const Y=s.attributes,K=C.attributes;let $=0;const ee=H.getAttributes();for(const V in ee)if(ee[V].location>=0){const re=Y[V];let ie=K[V];if(ie===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),re===void 0||re.attribute!==ie||ie&&re.data!==ie.data)return!0;$++}return s.attributesNum!==$||s.index!==F}function g(y,C,H,F){const Y={},K=C.attributes;let $=0;const ee=H.getAttributes();for(const V in ee)if(ee[V].location>=0){let re=K[V];re===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const ie={};ie.attribute=re,re&&re.data&&(ie.data=re.data),Y[V]=ie,$++}s.attributes=Y,s.attributesNum=$,s.index=F}function v(){const y=s.newAttributes;for(let C=0,H=y.length;C<H;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const H=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;H[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),Y[y]!==C&&(r.vertexAttribDivisor(y,C),Y[y]=C)}function w(){const y=s.newAttributes,C=s.enabledAttributes;for(let H=0,F=C.length;H<F;H++)C[H]!==y[H]&&(r.disableVertexAttribArray(H),C[H]=0)}function b(y,C,H,F,Y,K,$){$===!0?r.vertexAttribIPointer(y,C,H,Y,K):r.vertexAttribPointer(y,C,H,F,Y,K)}function S(y,C,H,F){v();const Y=F.attributes,K=H.getAttributes(),$=C.defaultAttributeValues;for(const ee in K){const V=K[ee];if(V.location>=0){let ce=Y[ee];if(ce===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const re=ce.normalized,ie=ce.itemSize,pe=e.get(ce);if(pe===void 0)continue;const ke=pe.buffer,X=pe.type,j=pe.bytesPerElement,de=X===r.INT||X===r.UNSIGNED_INT||ce.gpuType===vo;if(ce.isInterleavedBufferAttribute){const oe=ce.data,xe=oe.stride,Ae=ce.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)p(V.location+Ne,oe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)m(V.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Ne=0;Ne<V.locationSize;Ne++)b(V.location+Ne,ie/V.locationSize,X,re,xe*j,(Ae+ie/V.locationSize*Ne)*j,de)}else{if(ce.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,ce.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let oe=0;oe<V.locationSize;oe++)b(V.location+oe,ie/V.locationSize,X,re,ie*j,ie/V.locationSize*oe*j,de)}}else if($!==void 0){const re=$[ee];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(V.location,re);break;case 3:r.vertexAttrib3fv(V.location,re);break;case 4:r.vertexAttrib4fv(V.location,re);break;default:r.vertexAttrib1fv(V.location,re)}}}}w()}function I(){R();for(const y in n){const C=n[y];for(const H in C){const F=C[H];for(const Y in F)d(F[Y].object),delete F[Y];delete C[H]}delete n[y]}}function k(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const H in C){const F=C[H];for(const Y in F)d(F[Y].object),delete F[Y];delete C[H]}delete n[y.id]}function P(y){for(const C in n){const H=n[C];if(H[y.id]===void 0)continue;const F=H[y.id];for(const Y in F)d(F[Y].object),delete F[Y];delete H[y.id]}}function R(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:k,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function kp(r,e,t){let n;function i(c){n=c}function s(c,d){r.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(r.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function l(c,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==pn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Dn&&n.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Cn&&!R)}function l(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:I,maxSamples:k}}function Ap(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new kn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?d(null):c();else{const w=s?0:n,b=w*4;let S=p.clippingState||null;l.value=S,S=d(g,u,b,f);for(let I=0;I!==b;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==v;++b,S+=4)a.copy(h[b]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Rp(r){let e=new WeakMap;function t(a,o){return o===Pa?a.mapping=Gi:o===ka&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pa||o===ka)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hh(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Po extends Fc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,vl=[.125,.215,.35,.446,.526,.582],ai=20,ta=new Po,yl=new Xe;let na=null,ia=0,sa=0,ra=!1;const ii=(1+Math.sqrt(5))/2,Ci=1/ii,_l=[new A(-ii,Ci,0),new A(ii,Ci,0),new A(-Ci,0,ii),new A(Ci,0,ii),new A(0,ii,-Ci),new A(0,ii,Ci),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:vs,format:pn,colorSpace:qi,depthBuffer:!1},i=Sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(s)),this._blurMaterial=Lp(s,e,t)}return i}_compileMaterial(e){const t=new N(this._lodPlanes[0],e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,i){const o=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(yl),d.toneMapping=Xn,d.autoClear=!1;const f=new Ln({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new N(new te,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(yl),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;Ws(i,w*b,p>2?b:0,b,b),d.setRenderTarget(i),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gi||e.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new N(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_l[(i-s-1)%_l.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new N(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ai-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):ai;m>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let w=0;for(let P=0;P<ai;++P){const R=P/v,M=Math.exp(-R*R/2);p.push(M),P===0?w+=M:P<m&&(w+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const S=this._sizeLods[i],I=3*S*(i>b-Di?i-b+Di:0),k=4*(this._cubeSize-S);Ws(t,I,k,3*S,2*S),l.setRenderTarget(t),l.render(h,ta)}}function Ip(r){const e=[],t=[],n=[];let i=r;const s=r-Di+1+vl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Di?l=vl[a-r+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let k=0;k<f;k++){const P=k%3*2/3-1,R=k>2?0:-1,M=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];w.set(M,v*g*k),b.set(u,m*g*k);const y=[k,k,k,k,k,k];S.set(y,p*g*k)}const I=new Ut;I.setAttribute("position",new Jt(w,v)),I.setAttribute("uv",new Jt(b,m)),I.setAttribute("faceIndex",new Jt(S,p)),e.push(I),i>Di&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sl(r,e,t){const n=new hi(r,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Lp(r,e,t){const n=new Float32Array(ai),i=new A(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ko(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function xl(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function wl(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function Dp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pa||l===ka,d=l===Gi||l===Wi;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ml(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Ml(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Op(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Up(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let b=0,S=w.length;b<S;b+=3){const I=w[b+0],k=w[b+1],P=w[b+2];u.push(I,k,k,P,P,I)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const I=b+0,k=b+1,P=b+2;u.push(I,k,k,P,P,I)}}else return;const m=new(Rc(u)?Uc:Oc)(u,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Np(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*a,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Fp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bp(r,e,t){const n=new WeakMap,i=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let I=o.attributes.position.count*S,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*k*4*h),R=new Lc(P,I,k,h);R.type=Cn,R.needsUpdate=!0;const M=S*4;for(let C=0;C<h;C++){const H=p[C],F=w[C],Y=b[C],K=I*k*4*C;for(let $=0;$<H.count;$++){const ee=$*M;g===!0&&(i.fromBufferAttribute(H,$),P[K+ee+0]=i.x,P[K+ee+1]=i.y,P[K+ee+2]=i.z,P[K+ee+3]=0),v===!0&&(i.fromBufferAttribute(F,$),P[K+ee+4]=i.x,P[K+ee+5]=i.y,P[K+ee+6]=i.z,P[K+ee+7]=0),m===!0&&(i.fromBufferAttribute(Y,$),P[K+ee+8]=i.x,P[K+ee+9]=i.y,P[K+ee+10]=i.z,P[K+ee+11]=Y.itemSize===4?i.w:1)}}u={count:h,texture:R,size:new Fe(I,k)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function zp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Hc extends $t{constructor(e,t,n,i,s,a,o,l,c,d=Fi){if(d!==Fi&&d!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Fi&&(n=di),n===void 0&&d===$i&&(n=Vi),super(null,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gc=new $t,bl=new Hc(1,1),Wc=new Lc,Vc=new Th,$c=new Bc,Tl=[],El=[],Pl=new Float32Array(16),kl=new Float32Array(9),Cl=new Float32Array(4);function Zi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Cr(r,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function Wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function $p(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,n))return;Cl.set(n),r.uniformMatrix2fv(this.addr,!1,Cl),Ct(t,n)}}function Xp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,n))return;kl.set(n),r.uniformMatrix3fv(this.addr,!1,kl),Ct(t,n)}}function qp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,n))return;Pl.set(n),r.uniformMatrix4fv(this.addr,!1,Pl),Ct(t,n)}}function Yp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function Zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function Qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function nm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bl.compareFunction=Ac,s=bl):s=Gc,t.setTexture2D(e||s,i)}function im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vc,i)}function sm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$c,i)}function rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wc,i)}function am(r){switch(r){case 5126:return Hp;case 35664:return Gp;case 35665:return Wp;case 35666:return Vp;case 35674:return $p;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Kp;case 35668:case 35672:return Zp;case 35669:case 35673:return jp;case 5125:return Qp;case 36294:return Jp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function om(r,e){r.uniform1fv(this.addr,e)}function lm(r,e){const t=Zi(e,this.size,2);r.uniform2fv(this.addr,t)}function cm(r,e){const t=Zi(e,this.size,3);r.uniform3fv(this.addr,t)}function dm(r,e){const t=Zi(e,this.size,4);r.uniform4fv(this.addr,t)}function hm(r,e){const t=Zi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function um(r,e){const t=Zi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fm(r,e){const t=Zi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pm(r,e){r.uniform1iv(this.addr,e)}function mm(r,e){r.uniform2iv(this.addr,e)}function gm(r,e){r.uniform3iv(this.addr,e)}function vm(r,e){r.uniform4iv(this.addr,e)}function ym(r,e){r.uniform1uiv(this.addr,e)}function _m(r,e){r.uniform2uiv(this.addr,e)}function Mm(r,e){r.uniform3uiv(this.addr,e)}function Sm(r,e){r.uniform4uiv(this.addr,e)}function xm(r,e,t){const n=this.cache,i=e.length,s=Cr(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Gc,s[a])}function wm(r,e,t){const n=this.cache,i=e.length,s=Cr(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Vc,s[a])}function bm(r,e,t){const n=this.cache,i=e.length,s=Cr(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$c,s[a])}function Tm(r,e,t){const n=this.cache,i=e.length,s=Cr(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Wc,s[a])}function Em(r){switch(r){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return dm;case 35674:return hm;case 35675:return um;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return _m;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Tm}}class Pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=am(t.type)}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Em(t.type)}}class Cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Al(r,e){r.seq.push(e),r.map[e.id]=e}function Am(r,e,t){const n=r.name,i=n.length;for(aa.lastIndex=0;;){const s=aa.exec(n),a=aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Al(t,c===void 0?new Pm(o,r,e):new km(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Cm(o),Al(t,h)),t=h}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Am(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Rm=37297;let Im=0;function Lm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Il=new He;function Dm(r){Ze._getMatrix(Il,Ze.workingColorSpace,r);const e=`mat3( ${Il.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(r)){case Pr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ll(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Lm(r.getShaderSource(e),a)}else return i}function Om(r,e){const t=Dm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Um(r,e){let t;switch(e){case Fd:t="Linear";break;case Bd:t="Reinhard";break;case zd:t="Cineon";break;case vc:t="ACESFilmic";break;case Gd:t="AgX";break;case Wd:t="Neutral";break;case Hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new A;function Nm(){Ze.getLuminanceCoefficients(Vs);const r=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Bm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function hs(r){return r!==""}function Dl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(r){return r.replace(Hm,Wm)}const Gm=new Map;function Wm(r,e){let t=We[e];if(t===void 0){const n=Gm.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return io(t)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(r){return r.replace(Vm,$m)}function $m(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function qm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gi:case Wi:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ym(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function Zm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xm(t),c=qm(t),d=Ym(t),h=Km(t),u=Zm(t),f=Fm(t),g=Bm(s),v=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?We.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Om("linearToOutputTexel",t.outputColorSpace),Nm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=io(a),a=Dl(a,t),a=Ol(a,t),o=io(o),o=Dl(o,t),o=Ol(o,t),a=Ul(a),o=Ul(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,S=w+p+o,I=Rl(i,i.VERTEX_SHADER,b),k=Rl(i,i.FRAGMENT_SHADER,S);i.attachShader(v,I),i.attachShader(v,k),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(C){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(I).trim(),Y=i.getShaderInfoLog(k).trim();let K=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,I,k);else{const ee=Ll(i,I,"vertex"),V=Ll(i,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+ee+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||Y==="")&&($=!1);$&&(C.diagnostics={runnable:K,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(I),i.deleteShader(k),R=new cr(i,v),M=zm(i,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Rm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Im++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=k,this}let Qm=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eg(e),t.set(e,n)),n}}class eg{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}}function tg(r,e,t,n,i,s,a){const o=new To,l=new Jm,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,C,H,F){const Y=H.fog,K=F.geometry,$=M.isMeshStandardMaterial?H.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),V=ee&&ee.mapping===Er?ee.image.height:null,ce=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=re!==void 0?re.length:0;let pe=0;K.morphAttributes.position!==void 0&&(pe=1),K.morphAttributes.normal!==void 0&&(pe=2),K.morphAttributes.color!==void 0&&(pe=3);let ke,X,j,de;if(ce){const st=vn[ce];ke=st.vertexShader,X=st.fragmentShader}else ke=M.vertexShader,X=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const oe=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,Qe=!!M.map,Le=!!M.matcap,lt=!!ee,D=!!M.aoMap,At=!!M.lightMap,De=!!M.bumpMap,Ve=!!M.normalMap,Ce=!!M.displacementMap,it=!!M.emissiveMap,Re=!!M.metalnessMap,E=!!M.roughnessMap,_=M.anisotropy>0,B=M.clearcoat>0,Q=M.dispersion>0,ne=M.iridescence>0,Z=M.sheen>0,Ee=M.transmission>0,fe=_&&!!M.anisotropyMap,_e=B&&!!M.clearcoatMap,Ke=B&&!!M.clearcoatNormalMap,ae=B&&!!M.clearcoatRoughnessMap,Me=ne&&!!M.iridescenceMap,Ie=ne&&!!M.iridescenceThicknessMap,Oe=Z&&!!M.sheenColorMap,Se=Z&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Ge=!!M.specularColorMap,ct=!!M.specularIntensityMap,L=Ee&&!!M.transmissionMap,ue=Ee&&!!M.thicknessMap,q=!!M.gradientMap,J=!!M.alphaMap,ve=M.alphaTest>0,me=!!M.alphaHash,Be=!!M.extensions;let yt=Xn;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(yt=r.toneMapping);const Nt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:ke,fragmentShader:X,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:qi,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:Le,envMap:lt,envMapMode:lt&&ee.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:At,bumpMap:De,normalMap:Ve,displacementMap:u&&Ce,emissiveMap:it,normalMapObjectSpace:Ve&&M.normalMapType===qd,normalMapTangentSpace:Ve&&M.normalMapType===Cc,metalnessMap:Re,roughnessMap:E,anisotropy:_,anisotropyMap:fe,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ae,dispersion:Q,iridescence:ne,iridescenceMap:Me,iridescenceThicknessMap:Ie,sheen:Z,sheenColorMap:Oe,sheenRoughnessMap:Se,specularMap:qe,specularColorMap:Ge,specularIntensityMap:ct,transmission:Ee,transmissionMap:L,thicknessMap:ue,gradientMap:q,opaque:M.transparent===!1&&M.blending===Ni&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:ve,alphaHash:me,combine:M.combine,mapUv:Qe&&v(M.map.channel),aoMapUv:D&&v(M.aoMap.channel),lightMapUv:At&&v(M.lightMap.channel),bumpMapUv:De&&v(M.bumpMap.channel),normalMapUv:Ve&&v(M.normalMap.channel),displacementMapUv:Ce&&v(M.displacementMap.channel),emissiveMapUv:it&&v(M.emissiveMap.channel),metalnessMapUv:Re&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:fe&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(M.sheenRoughnessMap.channel),specularMapUv:qe&&v(M.specularMap.channel),specularColorMapUv:Ge&&v(M.specularColorMap.channel),specularIntensityMapUv:ct&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:ue&&v(M.thicknessMap.channel),alphaMapUv:J&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ve||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Qe||J),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:it&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vt,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(w(y,M),b(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const y=g[M.type];let C;if(y){const H=vn[y];C=Nh.clone(H.uniforms)}else C=M.uniforms;return C}function I(M,y){let C;for(let H=0,F=d.length;H<F;H++){const Y=d[H];if(Y.cacheKey===y){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new jm(r,y,M,s),d.push(C)),C}function k(M){if(--M.usedTimes===0){const y=d.indexOf(M);d[y]=d[d.length-1],d.pop(),M.destroy()}}function P(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:I,releaseProgram:k,releaseShaderCache:P,programs:d,dispose:R}}function ng(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,f,g,v,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,u,f,g,v,m){const p=a(h,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,u,f,g,v,m){const p=a(h,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||ig),n.length>1&&n.sort(u||Fl),i.length>1&&i.sort(u||Fl)}function d(){for(let h=e,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function sg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Bl,r.set(n,[a])):i>=s.length?(a=new Bl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Xe};break;case"SpotLight":t={position:new A,direction:new A,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function ag(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let og=0;function lg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cg(r){const e=new rg,t=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,s=new pt,a=new pt;function o(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,b=0,S=0,I=0,k=0,P=0;c.sort(lg);for(let M=0,y=c.length;M<y;M++){const C=c[M],H=C.color,F=C.intensity,Y=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=H.r*F,h+=H.g*F,u+=H.b*F;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],F);P++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=$,f++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(H).multiplyScalar(F),$.distance=Y,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[v]=$;const ee=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,ee.updateMatrices(C),C.castShadow&&k++),n.spotLightMatrix[v]=ee.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=K,S++}v++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(H).multiplyScalar(F),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(F),$.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=$,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==b||R.numSpotShadows!==S||R.numSpotMaps!==I||R.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+I-k,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=P,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=b,R.numSpotShadows=S,R.numSpotMaps=I,R.numLightProbes=P,n.version=og++)}function l(c,d){let h=0,u=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function zl(r){const e=new cg(r),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function dg(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new zl(r),e.set(i,[o])):s>=a.length?(o=new zl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class hg extends ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ug extends ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(r,e,t){let n=new Eo;const i=new Fe,s=new Fe,a=new Mt,o=new hg({depthPacking:Xd}),l=new ug,c={},d=t.maxTextureSize,h={[qn]:qt,[qt]:qn,[Vt]:Vt},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new N(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let p=this.type;this.render=function(k,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||k.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),H=r.state;H.setBlending($n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=p!==Pn&&this.type===Pn,Y=p===Pn&&this.type!==Pn;for(let K=0,$=k.length;K<$;K++){const ee=k[K],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ce=V.getFrameExtents();if(i.multiply(ce),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ce.x),i.x=s.x*ce.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ce.y),i.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||F===!0||Y===!0){const ie=this.type!==Pn?{minFilter:mn,magFilter:mn}:{};V.map!==null&&V.map.dispose(),V.map=new hi(i.x,i.y,ie),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const re=V.getViewportCount();for(let ie=0;ie<re;ie++){const pe=V.getViewport(ie);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),H.viewport(a),V.updateMatrices(ee,ie),n=V.getFrustum(),S(P,R,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Pn&&w(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,C)};function w(k,P){const R=e.update(v);u.defines.VSM_SAMPLES!==k.blurSamples&&(u.defines.VSM_SAMPLES=k.blurSamples,f.defines.VSM_SAMPLES=k.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new hi(i.x,i.y)),u.uniforms.shadow_pass.value=k.map.texture,u.uniforms.resolution.value=k.mapSize,u.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(P,null,R,u,v,null),f.uniforms.shadow_pass.value=k.mapPass.texture,f.uniforms.resolution.value=k.mapSize,f.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(P,null,R,f,v,null)}function b(k,P,R,M){let y=null;const C=R.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const H=y.uuid,F=P.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let K=Y[F];K===void 0&&(K=y.clone(),Y[F]=K,P.addEventListener("dispose",I)),y=K}if(y.visible=P.visible,y.wireframe=P.wireframe,M===Pn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=r.properties.get(y);H.light=R}return y}function S(k,P,R,M,y){if(k.visible===!1)return;if(k.layers.test(P.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&y===Pn)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,k.matrixWorld);const F=e.update(k),Y=k.material;if(Array.isArray(Y)){const K=F.groups;for(let $=0,ee=K.length;$<ee;$++){const V=K[$],ce=Y[V.materialIndex];if(ce&&ce.visible){const re=b(k,ce,M,y);k.onBeforeShadow(r,k,P,R,F,re,V),r.renderBufferDirect(R,null,F,re,k,V),k.onAfterShadow(r,k,P,R,F,re,V)}}}else if(Y.visible){const K=b(k,Y,M,y);k.onBeforeShadow(r,k,P,R,F,K,null),r.renderBufferDirect(R,null,F,K,k,null),k.onAfterShadow(r,k,P,R,F,K,null)}}const H=k.children;for(let F=0,Y=H.length;F<Y;F++)S(H[F],P,R,M,y)}function I(k){k.target.removeEventListener("dispose",I);for(const R in c){const M=c[R],y=k.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const gg={[Ma]:Sa,[xa]:Ta,[wa]:Ea,[Hi]:ba,[Sa]:Ma,[Ta]:xa,[Ea]:wa,[ba]:Hi};function vg(r,e){function t(){let L=!1;const ue=new Mt;let q=null;const J=new Mt(0,0,0,0);return{setMask:function(ve){q!==ve&&!L&&(r.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){L=ve},setClear:function(ve,me,Be,yt,Nt){Nt===!0&&(ve*=yt,me*=yt,Be*=yt),ue.set(ve,me,Be,yt),J.equals(ue)===!1&&(r.clearColor(ve,me,Be,yt),J.copy(ue))},reset:function(){L=!1,q=null,J.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,q=null,J=null,ve=null;return{setReversed:function(me){if(ue!==me){const Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=ve;ve=null,this.setClear(yt)}ue=me},getReversed:function(){return ue},setTest:function(me){me?oe(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(me){q!==me&&!L&&(r.depthMask(me),q=me)},setFunc:function(me){if(ue&&(me=gg[me]),J!==me){switch(me){case Ma:r.depthFunc(r.NEVER);break;case Sa:r.depthFunc(r.ALWAYS);break;case xa:r.depthFunc(r.LESS);break;case Hi:r.depthFunc(r.LEQUAL);break;case wa:r.depthFunc(r.EQUAL);break;case ba:r.depthFunc(r.GEQUAL);break;case Ta:r.depthFunc(r.GREATER);break;case Ea:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=me}},setLocked:function(me){L=me},setClear:function(me){ve!==me&&(ue&&(me=1-me),r.clearDepth(me),ve=me)},reset:function(){L=!1,q=null,J=null,ve=null,ue=!1}}}function i(){let L=!1,ue=null,q=null,J=null,ve=null,me=null,Be=null,yt=null,Nt=null;return{setTest:function(st){L||(st?oe(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(st){ue!==st&&!L&&(r.stencilMask(st),ue=st)},setFunc:function(st,an,Mn){(q!==st||J!==an||ve!==Mn)&&(r.stencilFunc(st,an,Mn),q=st,J=an,ve=Mn)},setOp:function(st,an,Mn){(me!==st||Be!==an||yt!==Mn)&&(r.stencilOp(st,an,Mn),me=st,Be=an,yt=Mn)},setLocked:function(st){L=st},setClear:function(st){Nt!==st&&(r.clearStencil(st),Nt=st)},reset:function(){L=!1,ue=null,q=null,J=null,ve=null,me=null,Be=null,yt=null,Nt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,b=null,S=null,I=null,k=null,P=new Xe(0,0,0),R=0,M=!1,y=null,C=null,H=null,F=null,Y=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=ee>=2);let ce=null,re={};const ie=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),ke=new Mt().fromArray(ie),X=new Mt().fromArray(pe);function j(L,ue,q,J){const ve=new Uint8Array(4),me=r.createTexture();r.bindTexture(L,me),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<q;Be++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(ue+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return me}const de={};de[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),a.setFunc(Hi),De(!1),Ve(Wo),oe(r.CULL_FACE),D($n);function oe(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function xe(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Ae(L,ue){return h[L]!==ue?(r.bindFramebuffer(L,ue),h[L]=ue,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(L,ue){let q=f,J=!1;if(L){q=u.get(ue),q===void 0&&(q=[],u.set(ue,q));const ve=L.textures;if(q.length!==ve.length||q[0]!==r.COLOR_ATTACHMENT0){for(let me=0,Be=ve.length;me<Be;me++)q[me]=r.COLOR_ATTACHMENT0+me;q.length=ve.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function Qe(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Le={[ri]:r.FUNC_ADD,[_d]:r.FUNC_SUBTRACT,[Md]:r.FUNC_REVERSE_SUBTRACT};Le[Sd]=r.MIN,Le[xd]=r.MAX;const lt={[wd]:r.ZERO,[bd]:r.ONE,[Td]:r.SRC_COLOR,[ya]:r.SRC_ALPHA,[Rd]:r.SRC_ALPHA_SATURATE,[Cd]:r.DST_COLOR,[Pd]:r.DST_ALPHA,[Ed]:r.ONE_MINUS_SRC_COLOR,[_a]:r.ONE_MINUS_SRC_ALPHA,[Ad]:r.ONE_MINUS_DST_COLOR,[kd]:r.ONE_MINUS_DST_ALPHA,[Id]:r.CONSTANT_COLOR,[Ld]:r.ONE_MINUS_CONSTANT_COLOR,[Dd]:r.CONSTANT_ALPHA,[Od]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,ue,q,J,ve,me,Be,yt,Nt,st){if(L===$n){v===!0&&(xe(r.BLEND),v=!1);return}if(v===!1&&(oe(r.BLEND),v=!0),L!==yd){if(L!==m||st!==M){if((p!==ri||S!==ri)&&(r.blendEquation(r.FUNC_ADD),p=ri,S=ri),st)switch(L){case Ni:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vo:r.blendFunc(r.ONE,r.ONE);break;case $o:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $o:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,I=null,k=null,P.set(0,0,0),R=0,m=L,M=st}return}ve=ve||ue,me=me||q,Be=Be||J,(ue!==p||ve!==S)&&(r.blendEquationSeparate(Le[ue],Le[ve]),p=ue,S=ve),(q!==w||J!==b||me!==I||Be!==k)&&(r.blendFuncSeparate(lt[q],lt[J],lt[me],lt[Be]),w=q,b=J,I=me,k=Be),(yt.equals(P)===!1||Nt!==R)&&(r.blendColor(yt.r,yt.g,yt.b,Nt),P.copy(yt),R=Nt),m=L,M=!1}function At(L,ue){L.side===Vt?xe(r.CULL_FACE):oe(r.CULL_FACE);let q=L.side===qt;ue&&(q=!q),De(q),L.blending===Ni&&L.transparent===!1?D($n):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),it(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function Ve(L){L!==gd?(oe(r.CULL_FACE),L!==C&&(L===Wo?r.cullFace(r.BACK):L===vd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),C=L}function Ce(L){L!==H&&($&&r.lineWidth(L),H=L)}function it(L,ue,q){L?(oe(r.POLYGON_OFFSET_FILL),(F!==ue||Y!==q)&&(r.polygonOffset(ue,q),F=ue,Y=q)):xe(r.POLYGON_OFFSET_FILL)}function Re(L){L?oe(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function E(L){L===void 0&&(L=r.TEXTURE0+K-1),ce!==L&&(r.activeTexture(L),ce=L)}function _(L,ue,q){q===void 0&&(ce===null?q=r.TEXTURE0+K-1:q=ce);let J=re[q];J===void 0&&(J={type:void 0,texture:void 0},re[q]=J),(J.type!==L||J.texture!==ue)&&(ce!==q&&(r.activeTexture(q),ce=q),r.bindTexture(L,ue||de[L]),J.type=L,J.texture=ue)}function B(){const L=re[ce];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){ke.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function Se(L){X.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function qe(L,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let J=q.get(L);J===void 0&&(J=r.getUniformBlockIndex(ue,L.name),q.set(L,J))}function Ge(L,ue){const J=c.get(ue).get(L);l.get(ue)!==J&&(r.uniformBlockBinding(ue,J,L.__bindingPointIndex),l.set(ue,J))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ce=null,re={},h={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,b=null,S=null,I=null,k=null,P=new Xe(0,0,0),R=0,M=!1,y=null,C=null,H=null,F=null,Y=null,ke.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:xe,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:Qe,setBlending:D,setMaterial:At,setFlipSided:De,setCullFace:Ve,setLineWidth:Ce,setPolygonOffset:it,setScissorTest:Re,activeTexture:E,bindTexture:_,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:Me,texImage3D:Ie,updateUBOMapping:qe,uniformBlockBinding:Ge,texStorage2D:Ke,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Oe,viewport:Se,reset:ct}}function Hl(r,e,t,n){const i=yg(n);switch(t){case xc:return r*e;case bc:return r*e;case Tc:return r*e*2;case Ec:return r*e/i.components*i.byteLength;case Mo:return r*e/i.components*i.byteLength;case Pc:return r*e*2/i.components*i.byteLength;case So:return r*e*2/i.components*i.byteLength;case wc:return r*e*3/i.components*i.byteLength;case pn:return r*e*4/i.components*i.byteLength;case xo:return r*e*4/i.components*i.byteLength;case sr:case rr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ar:case or:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ra:case La:return Math.max(r,16)*Math.max(e,8)/4;case Aa:case Ia:return Math.max(r,8)*Math.max(e,8)/2;case Da:case Oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lr:case ja:case Qa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kc:case Ja:return Math.ceil(r/4)*Math.ceil(e/4)*8;case eo:case to:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yg(r){switch(r){case Dn:case _c:return{byteLength:1,components:1};case ms:case Mc:case vs:return{byteLength:2,components:1};case yo:case _o:return{byteLength:2,components:4};case di:case vo:case Cn:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _g(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):pr("canvas")}function v(E,_,B){let Q=1;const ne=Re(E);if((ne.width>B||ne.height>B)&&(Q=B/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(Q*ne.width),Ee=Math.floor(Q*ne.height);h===void 0&&(h=g(Z,Ee));const fe=_?g(Z,Ee):h;return fe.width=Z,fe.height=Ee,fe.getContext("2d").drawImage(E,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ee+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){r.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(E,_,B,Q,ne=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=_;if(_===r.RED&&(B===r.FLOAT&&(Z=r.R32F),B===r.HALF_FLOAT&&(Z=r.R16F),B===r.UNSIGNED_BYTE&&(Z=r.R8)),_===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.R8UI),B===r.UNSIGNED_SHORT&&(Z=r.R16UI),B===r.UNSIGNED_INT&&(Z=r.R32UI),B===r.BYTE&&(Z=r.R8I),B===r.SHORT&&(Z=r.R16I),B===r.INT&&(Z=r.R32I)),_===r.RG&&(B===r.FLOAT&&(Z=r.RG32F),B===r.HALF_FLOAT&&(Z=r.RG16F),B===r.UNSIGNED_BYTE&&(Z=r.RG8)),_===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RG8UI),B===r.UNSIGNED_SHORT&&(Z=r.RG16UI),B===r.UNSIGNED_INT&&(Z=r.RG32UI),B===r.BYTE&&(Z=r.RG8I),B===r.SHORT&&(Z=r.RG16I),B===r.INT&&(Z=r.RG32I)),_===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),B===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),B===r.UNSIGNED_INT&&(Z=r.RGB32UI),B===r.BYTE&&(Z=r.RGB8I),B===r.SHORT&&(Z=r.RGB16I),B===r.INT&&(Z=r.RGB32I)),_===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),B===r.UNSIGNED_INT&&(Z=r.RGBA32UI),B===r.BYTE&&(Z=r.RGBA8I),B===r.SHORT&&(Z=r.RGBA16I),B===r.INT&&(Z=r.RGBA32I)),_===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),_===r.RGBA){const Ee=ne?Pr:Ze.getTransfer(Q);B===r.FLOAT&&(Z=r.RGBA32F),B===r.HALF_FLOAT&&(Z=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Z=Ee===at?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(E,_){let B;return E?_===null||_===di||_===Vi?B=r.DEPTH24_STENCIL8:_===Cn?B=r.DEPTH32F_STENCIL8:_===ms&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===Vi?B=r.DEPTH_COMPONENT24:_===Cn?B=r.DEPTH_COMPONENT32F:_===ms&&(B=r.DEPTH_COMPONENT16),B}function I(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==mn&&E.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function k(E){const _=E.target;_.removeEventListener("dispose",k),R(_),_.isVideoTexture&&d.delete(_)}function P(E){const _=E.target;_.removeEventListener("dispose",P),y(_)}function R(E){const _=n.get(E);if(_.__webglInit===void 0)return;const B=E.source,Q=u.get(B);if(Q){const ne=Q[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(E),Object.keys(Q).length===0&&u.delete(B)}n.remove(E)}function M(E){const _=n.get(E);r.deleteTexture(_.__webglTexture);const B=E.source,Q=u.get(B);delete Q[_.__cacheKey],a.memory.textures--}function y(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ne=0;ne<_.__webglFramebuffer[Q].length;ne++)r.deleteFramebuffer(_.__webglFramebuffer[Q][ne]);else r.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)r.deleteFramebuffer(_.__webglFramebuffer[Q]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=E.textures;for(let Q=0,ne=B.length;Q<ne;Q++){const Z=n.get(B[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(E)}let C=0;function H(){C=0}function F(){const E=C;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),C+=1,E}function Y(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){const B=n.get(E);if(E.isVideoTexture&&Ce(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,E,_);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+_)}function $(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){X(B,E,_);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+_)}function ee(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){X(B,E,_);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+_)}function V(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){j(B,E,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+_)}const ce={[ps]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Ca]:r.MIRRORED_REPEAT},re={[mn]:r.NEAREST,[Vd]:r.NEAREST_MIPMAP_NEAREST,[bs]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[Dr]:r.LINEAR_MIPMAP_NEAREST,[li]:r.LINEAR_MIPMAP_LINEAR},ie={[Yd]:r.NEVER,[eh]:r.ALWAYS,[Kd]:r.LESS,[Ac]:r.LEQUAL,[Zd]:r.EQUAL,[Jd]:r.GEQUAL,[jd]:r.GREATER,[Qd]:r.NOTEQUAL};function pe(E,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===Dr||_.magFilter===bs||_.magFilter===li||_.minFilter===rn||_.minFilter===Dr||_.minFilter===bs||_.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,ce[_.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,ce[_.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,ce[_.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,re[_.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===mn||_.minFilter!==bs&&_.minFilter!==li||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ke(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",k));const Q=_.source;let ne=u.get(Q);ne===void 0&&(ne={},u.set(Q,ne));const Z=Y(_);if(Z!==E.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ne[Z].usedTimes++;const Ee=ne[E.__cacheKey];Ee!==void 0&&(ne[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(_)),E.__cacheKey=Z,E.__webglTexture=ne[Z].texture}return B}function X(E,_,B){let Q=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=r.TEXTURE_3D);const ne=ke(E,_),Z=_.source;t.bindTexture(Q,E.__webglTexture,r.TEXTURE0+B);const Ee=n.get(Z);if(Z.version!==Ee.__version||ne===!0){t.activeTexture(r.TEXTURE0+B);const fe=Ze.getPrimaries(Ze.workingColorSpace),_e=_.colorSpace===Wn?null:Ze.getPrimaries(_.colorSpace),Ke=_.colorSpace===Wn||fe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ae=v(_.image,!1,i.maxTextureSize);ae=it(_,ae);const Me=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let Oe=b(_.internalFormat,Me,Ie,_.colorSpace,_.isVideoTexture);pe(Q,_);let Se;const qe=_.mipmaps,Ge=_.isVideoTexture!==!0,ct=Ee.__version===void 0||ne===!0,L=Z.dataReady,ue=I(_,ae);if(_.isDepthTexture)Oe=S(_.format===$i,_.type),ct&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Me,Ie,null));else if(_.isDataTexture)if(qe.length>0){Ge&&ct&&t.texStorage2D(r.TEXTURE_2D,ue,Oe,qe[0].width,qe[0].height);for(let q=0,J=qe.length;q<J;q++)Se=qe[q],Ge?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Ie,Se.data):t.texImage2D(r.TEXTURE_2D,q,Oe,Se.width,Se.height,0,Me,Ie,Se.data);_.generateMipmaps=!1}else Ge?(ct&&t.texStorage2D(r.TEXTURE_2D,ue,Oe,ae.width,ae.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Ie,ae.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Me,Ie,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Oe,qe[0].width,qe[0].height,ae.depth);for(let q=0,J=qe.length;q<J;q++)if(Se=qe[q],_.format!==pn)if(Me!==null)if(Ge){if(L)if(_.layerUpdates.size>0){const ve=Hl(Se.width,Se.height,_.format,_.type);for(const me of _.layerUpdates){const Be=Se.data.subarray(me*ve/Se.data.BYTES_PER_ELEMENT,(me+1)*ve/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,me,Se.width,Se.height,1,Me,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ae.depth,Me,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Oe,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ae.depth,Me,Ie,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Oe,Se.width,Se.height,ae.depth,0,Me,Ie,Se.data)}else{Ge&&ct&&t.texStorage2D(r.TEXTURE_2D,ue,Oe,qe[0].width,qe[0].height);for(let q=0,J=qe.length;q<J;q++)Se=qe[q],_.format!==pn?Me!==null?Ge?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Oe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Ie,Se.data):t.texImage2D(r.TEXTURE_2D,q,Oe,Se.width,Se.height,0,Me,Ie,Se.data)}else if(_.isDataArrayTexture)if(Ge){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Oe,ae.width,ae.height,ae.depth),L)if(_.layerUpdates.size>0){const q=Hl(ae.width,ae.height,_.format,_.type);for(const J of _.layerUpdates){const ve=ae.data.subarray(J*q/ae.data.BYTES_PER_ELEMENT,(J+1)*q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,Me,Ie,ve)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ie,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,Me,Ie,ae.data);else if(_.isData3DTexture)Ge?(ct&&t.texStorage3D(r.TEXTURE_3D,ue,Oe,ae.width,ae.height,ae.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ie,ae.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,Me,Ie,ae.data);else if(_.isFramebufferTexture){if(ct)if(Ge)t.texStorage2D(r.TEXTURE_2D,ue,Oe,ae.width,ae.height);else{let q=ae.width,J=ae.height;for(let ve=0;ve<ue;ve++)t.texImage2D(r.TEXTURE_2D,ve,Oe,q,J,0,Me,Ie,null),q>>=1,J>>=1}}else if(qe.length>0){if(Ge&&ct){const q=Re(qe[0]);t.texStorage2D(r.TEXTURE_2D,ue,Oe,q.width,q.height)}for(let q=0,J=qe.length;q<J;q++)Se=qe[q],Ge?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me,Ie,Se):t.texImage2D(r.TEXTURE_2D,q,Oe,Me,Ie,Se);_.generateMipmaps=!1}else if(Ge){if(ct){const q=Re(ae);t.texStorage2D(r.TEXTURE_2D,ue,Oe,q.width,q.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ie,ae)}else t.texImage2D(r.TEXTURE_2D,0,Oe,Me,Ie,ae);m(_)&&p(Q),Ee.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function j(E,_,B){if(_.image.length!==6)return;const Q=ke(E,_),ne=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+B);const Z=n.get(ne);if(ne.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const Ee=Ze.getPrimaries(Ze.workingColorSpace),fe=_.colorSpace===Wn?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===Wn||Ee===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let J=0;J<6;J++)!Ke&&!ae?Me[J]=v(_.image[J],!0,i.maxCubemapSize):Me[J]=ae?_.image[J].image:_.image[J],Me[J]=it(_,Me[J]);const Ie=Me[0],Oe=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),qe=b(_.internalFormat,Oe,Se,_.colorSpace),Ge=_.isVideoTexture!==!0,ct=Z.__version===void 0||Q===!0,L=ne.dataReady;let ue=I(_,Ie);pe(r.TEXTURE_CUBE_MAP,_);let q;if(Ke){Ge&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,qe,Ie.width,Ie.height);for(let J=0;J<6;J++){q=Me[J].mipmaps;for(let ve=0;ve<q.length;ve++){const me=q[ve];_.format!==pn?Oe!==null?Ge?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,me.width,me.height,Oe,me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,me.width,me.height,Oe,Se,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,qe,me.width,me.height,0,Oe,Se,me.data)}}}else{if(q=_.mipmaps,Ge&&ct){q.length>0&&ue++;const J=Re(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,qe,J.width,J.height)}for(let J=0;J<6;J++)if(ae){Ge?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me[J].width,Me[J].height,Oe,Se,Me[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Me[J].width,Me[J].height,0,Oe,Se,Me[J].data);for(let ve=0;ve<q.length;ve++){const Be=q[ve].image[J].image;Ge?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Be.width,Be.height,Oe,Se,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,qe,Be.width,Be.height,0,Oe,Se,Be.data)}}else{Ge?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,Se,Me[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Oe,Se,Me[J]);for(let ve=0;ve<q.length;ve++){const me=q[ve];Ge?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Oe,Se,me.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,qe,Oe,Se,me.image[J])}}}m(_)&&p(r.TEXTURE_CUBE_MAP),Z.__version=ne.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function de(E,_,B,Q,ne,Z){const Ee=s.convert(B.format,B.colorSpace),fe=s.convert(B.type),_e=b(B.internalFormat,Ee,fe,B.colorSpace),Ke=n.get(_),ae=n.get(B);if(ae.__renderTarget=_,!Ke.__hasExternalTextures){const Me=Math.max(1,_.width>>Z),Ie=Math.max(1,_.height>>Z);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,_e,Me,Ie,_.depth,0,Ee,fe,null):t.texImage2D(ne,Z,_e,Me,Ie,0,Ee,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),Ve(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ne,ae.__webglTexture,0,De(_)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ne,ae.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(E,_,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),_.depthBuffer){const Q=_.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,Z=S(_.stencilBuffer,ne),Ee=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=De(_);Ve(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Z,_.width,_.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Z,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,Z,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,E)}else{const Q=_.textures;for(let ne=0;ne<Q.length;ne++){const Z=Q[ne],Ee=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),_e=b(Z.internalFormat,Ee,fe,Z.colorSpace),Ke=De(_);B&&Ve(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,_e,_.width,_.height):Ve(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,_e,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,_e,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const ne=Q.__webglTexture,Z=De(_);if(_.depthTexture.format===Fi)Ve(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(_.depthTexture.format===$i)Ve(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");xe(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=r.createRenderbuffer(),oe(_.__webglDepthbuffer[Q],E,!1);else{const ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),oe(_.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(E,_,B){const Q=n.get(E);_!==void 0&&de(Q.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ae(E)}function Qe(E){const _=E.texture,B=n.get(E),Q=n.get(_);E.addEventListener("dispose",P);const ne=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=_.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let _e=0;_e<_.mipmaps.length;_e++)B.__webglFramebuffer[fe][_e]=r.createFramebuffer()}else B.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)B.__webglFramebuffer[fe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let fe=0,_e=ne.length;fe<_e;fe++){const Ke=n.get(ne[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&Ve(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const _e=ne[fe];B.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const Ke=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),Me=b(_e.internalFormat,Ke,ae,_e.colorSpace,E.isXRRenderTarget===!0),Ie=De(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Me,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(r.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)de(B.__webglFramebuffer[fe][_e],E,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else de(B.__webglFramebuffer[fe],E,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,_e=ne.length;fe<_e;fe++){const Ke=ne[fe],ae=n.get(Ke);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),pe(r.TEXTURE_2D,Ke),de(B.__webglFramebuffer,E,Ke,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),m(Ke)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Q.__webglTexture),pe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)de(B.__webglFramebuffer[_e],E,_,r.COLOR_ATTACHMENT0,fe,_e);else de(B.__webglFramebuffer,E,_,r.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}E.depthBuffer&&Ae(E)}function Le(E){const _=E.textures;for(let B=0,Q=_.length;B<Q;B++){const ne=_[B];if(m(ne)){const Z=w(E),Ee=n.get(ne).__webglTexture;t.bindTexture(Z,Ee),p(Z),t.unbindTexture()}}}const lt=[],D=[];function At(E){if(E.samples>0){if(Ve(E)===!1){const _=E.textures,B=E.width,Q=E.height;let ne=r.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(E),fe=_.length>1;if(fe)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const Ke=n.get(_[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,B,Q,0,0,B,Q,ne,r.NEAREST),l===!0&&(lt.length=0,D.length=0,lt.push(r.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.resolveDepthBuffer===!1&&(lt.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const Ke=n.get(_[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function De(E){return Math.min(i.maxSamples,E.samples)}function Ve(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(E){const _=a.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function it(E,_){const B=E.colorSpace,Q=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==qi&&B!==Wn&&(Ze.getTransfer(B)===at?(Q!==pn||ne!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ve}function Mg(r,e){function t(n,i=Wn){let s;const a=Ze.getTransfer(i);if(n===Dn)return r.UNSIGNED_BYTE;if(n===yo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return r.BYTE;if(n===Mc)return r.SHORT;if(n===ms)return r.UNSIGNED_SHORT;if(n===vo)return r.INT;if(n===di)return r.UNSIGNED_INT;if(n===Cn)return r.FLOAT;if(n===vs)return r.HALF_FLOAT;if(n===xc)return r.ALPHA;if(n===wc)return r.RGB;if(n===pn)return r.RGBA;if(n===bc)return r.LUMINANCE;if(n===Tc)return r.LUMINANCE_ALPHA;if(n===Fi)return r.DEPTH_COMPONENT;if(n===$i)return r.DEPTH_STENCIL;if(n===Ec)return r.RED;if(n===Mo)return r.RED_INTEGER;if(n===Pc)return r.RG;if(n===So)return r.RG_INTEGER;if(n===xo)return r.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ia||n===La)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Oa||n===Ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Da||n===Oa)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Fa||n===Ba||n===za||n===Ha||n===Ga||n===Wa||n===Va||n===$a||n===Xa||n===qa||n===Ya||n===Ka||n===Za)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Na)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===ja||n===Qa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lr)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===Ja||n===eo||n===to)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Sg extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let wt=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const xg={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`;class Tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new $t,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:wg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new N(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends Yi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const v=new Tg,m=t.getContextAttributes();let p=null,w=null;const b=[],S=[],I=new Fe;let k=null;const P=new hn;P.viewport=new Mt;const R=new hn;R.viewport=new Mt;const M=[P,R],y=new Sg;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=b[X];return j===void 0&&(j=new oa,b[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=b[X];return j===void 0&&(j=new oa,b[X]=j),j.getGripSpace()},this.getHand=function(X){let j=b[X];return j===void 0&&(j=new oa,b[X]=j),j.getHandSpace()};function F(X){const j=S.indexOf(X.inputSource);if(j===-1)return;const de=b[j];de!==void 0&&(de.update(X.inputSource,X.frame,c||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",K);for(let X=0;X<b.length;X++){const j=S[X];j!==null&&(S[X]=null,b[X].disconnect(j))}C=null,H=null,v.reset(),e.setRenderTarget(p),f=null,u=null,h=null,i=null,w=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new hi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,de=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?$i:Fi,de=m.stencil?Vi:di);const xe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(xe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new hi(u.textureWidth,u.textureHeight,{format:pn,type:Dn,depthTexture:new Hc(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(X){for(let j=0;j<X.removed.length;j++){const de=X.removed[j],oe=S.indexOf(de);oe>=0&&(S[oe]=null,b[oe].disconnect(de))}for(let j=0;j<X.added.length;j++){const de=X.added[j];let oe=S.indexOf(de);if(oe===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=S.length){S.push(de),oe=Ae;break}else if(S[Ae]===null){S[Ae]=de,oe=Ae;break}if(oe===-1)break}const xe=b[oe];xe&&xe.connect(de)}}const $=new A,ee=new A;function V(X,j,de){$.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const oe=$.distanceTo(ee),xe=j.projectionMatrix.elements,Ae=de.projectionMatrix.elements,Ne=xe[14]/(xe[10]-1),Qe=xe[14]/(xe[10]+1),Le=(xe[9]+1)/xe[5],lt=(xe[9]-1)/xe[5],D=(xe[8]-1)/xe[0],At=(Ae[8]+1)/Ae[0],De=Ne*D,Ve=Ne*At,Ce=oe/(-D+At),it=Ce*-D;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(it),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xe[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Re=Ne+Ce,E=Qe+Ce,_=De-it,B=Ve+(oe-it),Q=Le*Qe/E*Re,ne=lt*Qe/E*Re;X.projectionMatrix.makePerspective(_,B,Q,ne,Re,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ce(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let j=X.near,de=X.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(de=v.depthFar)),y.near=R.near=P.near=j,y.far=R.far=P.far=de,(C!==y.near||H!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,H=y.far),P.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,y.layers.mask=P.layers.mask|R.layers.mask;const oe=X.parent,xe=y.cameras;ce(y,oe);for(let Ae=0;Ae<xe.length;Ae++)ce(xe[Ae],oe);xe.length===2?V(y,P,R):y.projectionMatrix.copy(P.projectionMatrix),re(X,y,oe)};function re(X,j,de){de===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ie=null;function pe(X,j){if(d=j.getViewerPose(c||a),g=j,d!==null){const de=d.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let oe=!1;de.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ae=0;Ae<de.length;Ae++){const Ne=de[Ae];let Qe=null;if(f!==null)Qe=f.getViewport(Ne);else{const lt=h.getViewSubImage(u,Ne);Qe=lt.viewport,Ae===0&&(e.setRenderTargetTextures(w,lt.colorTexture,u.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(w))}let Le=M[Ae];Le===void 0&&(Le=new hn,Le.layers.enable(Ae),Le.viewport=new Mt,M[Ae]=Le),Le.matrix.fromArray(Ne.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ne.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ae===0&&(y.matrix.copy(Le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Le)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Ae=h.getDepthInformation(de[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,i.renderState)}}for(let de=0;de<b.length;de++){const oe=S[de],xe=b[de];oe!==null&&xe!==void 0&&xe.update(oe,j,c||a)}ie&&ie(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ke=new zc;ke.setAnimationLoop(pe),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const ni=new yn,Pg=new pt;function kg(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,S=w.envMapRotation;b&&(m.envMap.value=b,ni.copy(S),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ni)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cg(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;n.uniformBlockBinding(w,S)}function c(w,b){let S=i[w.id];S===void 0&&(g(w),S=d(w),i[w.id]=S,w.addEventListener("dispose",m));const I=b.program;n.updateUBOMapping(w,I);const k=e.render.frame;s[w.id]!==k&&(u(w),s[w.id]=k)}function d(w){const b=h();w.__bindingPointIndex=b;const S=r.createBuffer(),I=w.__size,k=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,I,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const b=i[w.id],S=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let k=0,P=S.length;k<P;k++){const R=Array.isArray(S[k])?S[k]:[S[k]];for(let M=0,y=R.length;M<y;M++){const C=R[M];if(f(C,k,M,I)===!0){const H=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let K=0;K<F.length;K++){const $=F[K],ee=v($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,H+Y,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(w,b,S,I){const k=w.value,P=b+"_"+S;if(I[P]===void 0)return typeof k=="number"||typeof k=="boolean"?I[P]=k:I[P]=k.clone(),!0;{const R=I[P];if(typeof k=="number"||typeof k=="boolean"){if(R!==k)return I[P]=k,!0}else if(R.equals(k)===!1)return R.copy(k),!0}return!1}function g(w){const b=w.uniforms;let S=0;const I=16;for(let P=0,R=b.length;P<R;P++){const M=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,C=M.length;y<C;y++){const H=M[y],F=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,K=F.length;Y<K;Y++){const $=F[Y],ee=v($),V=S%I,ce=V%ee.boundary,re=V+ce;S+=ce,re!==0&&I-re<ee.storage&&(S+=I-re),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ee.storage}}}const k=S%I;return k>0&&(S+=I-k),w.__size=S,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ag{constructor(e={}){const{canvas:t=vh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Xn,this.toneMappingExposure=1;const S=this;let I=!1,k=0,P=0,R=null,M=-1,y=null;const C=new Mt,H=new Mt;let F=null;const Y=new Xe(0);let K=0,$=t.width,ee=t.height,V=1,ce=null,re=null;const ie=new Mt(0,0,$,ee),pe=new Mt(0,0,$,ee);let ke=!1;const X=new Eo;let j=!1,de=!1;const oe=new pt,xe=new pt,Ae=new A,Ne=new Mt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function lt(){return R===null?V:1}let D=n;function At(x,O){return t.getContext(x,O)}try{const x={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const O="webgl2";if(D=At(O,x),D===null)throw At(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let De,Ve,Ce,it,Re,E,_,B,Q,ne,Z,Ee,fe,_e,Ke,ae,Me,Ie,Oe,Se,qe,Ge,ct,L;function ue(){De=new Op(D),De.init(),Ge=new Mg(D,De),Ve=new Cp(D,De,e,Ge),Ce=new vg(D,De),Ve.reverseDepthBuffer&&u&&Ce.buffers.depth.setReversed(!0),it=new Fp(D),Re=new ng,E=new _g(D,De,Ce,Re,Ve,Ge,it),_=new Rp(S),B=new Dp(S),Q=new Vh(D),ct=new Pp(D,Q),ne=new Up(D,Q,it,ct),Z=new zp(D,ne,Q,it),Oe=new Bp(D,Ve,E),ae=new Ap(Re),Ee=new tg(S,_,B,De,Ve,ct,ae),fe=new kg(S,Re),_e=new sg,Ke=new dg(De),Ie=new Ep(S,_,B,Ce,Z,f,l),Me=new mg(S,Z,Ve),L=new Cg(D,it,Ve,Ce),Se=new kp(D,De,it),qe=new Np(D,De,it),it.programs=Ee.programs,S.capabilities=Ve,S.extensions=De,S.properties=Re,S.renderLists=_e,S.shadowMap=Me,S.state=Ce,S.info=it}ue();const q=new Eg(S,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=De.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=De.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize($,ee,!1))},this.getSize=function(x){return x.set($,ee)},this.setSize=function(x,O,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,ee=O,t.width=Math.floor(x*V),t.height=Math.floor(O*V),G===!0&&(t.style.width=x+"px",t.style.height=O+"px"),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set($*V,ee*V).floor()},this.setDrawingBufferSize=function(x,O,G){$=x,ee=O,V=G,t.width=Math.floor(x*G),t.height=Math.floor(O*G),this.setViewport(0,0,x,O)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(ie)},this.setViewport=function(x,O,G,W){x.isVector4?ie.set(x.x,x.y,x.z,x.w):ie.set(x,O,G,W),Ce.viewport(C.copy(ie).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(pe)},this.setScissor=function(x,O,G,W){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,O,G,W),Ce.scissor(H.copy(pe).multiplyScalar(V).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(x){Ce.setScissorTest(ke=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){re=x},this.getClearColor=function(x){return x.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(x=!0,O=!0,G=!0){let W=0;if(x){let U=!1;if(R!==null){const le=R.texture.format;U=le===xo||le===So||le===Mo}if(U){const le=R.texture.type,ge=le===Dn||le===di||le===ms||le===Vi||le===yo||le===_o,we=Ie.getClearColor(),be=Ie.getClearAlpha(),Ue=we.r,ze=we.g,Te=we.b;ge?(g[0]=Ue,g[1]=ze,g[2]=Te,g[3]=be,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ue,v[1]=ze,v[2]=Te,v[3]=be,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),Ke.dispose(),Re.dispose(),_.dispose(),B.dispose(),Z.dispose(),ct.dispose(),L.dispose(),Ee.dispose(),q.dispose(),q.removeEventListener("sessionstart",Oo),q.removeEventListener("sessionend",Uo),Zn.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=it.autoReset,O=Me.enabled,G=Me.autoUpdate,W=Me.needsUpdate,U=Me.type;ue(),it.autoReset=x,Me.enabled=O,Me.autoUpdate=G,Me.needsUpdate=W,Me.type=U}function me(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Be(x){const O=x.target;O.removeEventListener("dispose",Be),yt(O)}function yt(x){Nt(x),Re.remove(x)}function Nt(x){const O=Re.get(x).programs;O!==void 0&&(O.forEach(function(G){Ee.releaseProgram(G)}),x.isShaderMaterial&&Ee.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,G,W,U,le){O===null&&(O=Qe);const ge=U.isMesh&&U.matrixWorld.determinant()<0,we=hd(x,O,G,W,U);Ce.setMaterial(W,ge);let be=G.index,Ue=1;if(W.wireframe===!0){if(be=ne.getWireframeAttribute(G),be===void 0)return;Ue=2}const ze=G.drawRange,Te=G.attributes.position;let Je=ze.start*Ue,dt=(ze.start+ze.count)*Ue;le!==null&&(Je=Math.max(Je,le.start*Ue),dt=Math.min(dt,(le.start+le.count)*Ue)),be!==null?(Je=Math.max(Je,0),dt=Math.min(dt,be.count)):Te!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,Te.count));const ut=dt-Je;if(ut<0||ut===1/0)return;ct.setup(U,W,we,G,be);let Xt,tt=Se;if(be!==null&&(Xt=Q.get(be),tt=qe,tt.setIndex(Xt)),U.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*lt()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(U.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),Ce.setLineWidth(Pe*lt()),U.isLineSegments?tt.setMode(D.LINES):U.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else U.isPoints?tt.setMode(D.POINTS):U.isSprite&&tt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,Sn=U._multiDrawCounts,nt=U._multiDrawCount,on=be?Q.get(be).bytesPerElement:1,mi=Re.get(W).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)mi.setValue(D,"_gl_DrawID",Yt),tt.render(Pe[Yt]/on,Sn[Yt])}else if(U.isInstancedMesh)tt.renderInstances(Je,ut,U.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Sn=Math.min(G.instanceCount,Pe);tt.renderInstances(Je,ut,Sn)}else tt.render(Je,ut)};function st(x,O,G){x.transparent===!0&&x.side===Vt&&x.forceSinglePass===!1?(x.side=qt,x.needsUpdate=!0,ws(x,O,G),x.side=qn,x.needsUpdate=!0,ws(x,O,G),x.side=Vt):ws(x,O,G)}this.compile=function(x,O,G=null){G===null&&(G=x),p=Ke.get(G),p.init(O),b.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==G&&x.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const W=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const le=U.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const we=le[ge];st(we,G,U),W.add(we)}else st(le,G,U),W.add(le)}),b.pop(),p=null,W},this.compileAsync=function(x,O,G=null){const W=this.compile(x,O,G);return new Promise(U=>{function le(){if(W.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){U(x);return}setTimeout(le,10)}De.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let an=null;function Mn(x){an&&an(x)}function Oo(){Zn.stop()}function Uo(){Zn.start()}const Zn=new zc;Zn.setAnimationLoop(Mn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(x){an=x,q.setAnimationLoop(x),x===null?Zn.stop():Zn.start()},q.addEventListener("sessionstart",Oo),q.addEventListener("sessionend",Uo),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,O,R),p=Ke.get(x,b.length),p.init(O),b.push(p),xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(xe),de=this.localClippingEnabled,j=ae.init(this.clippingPlanes,de),m=_e.get(x,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){const le=S.xr.getDepthSensingMesh();le!==null&&Lr(le,O,-1/0,S.sortObjects)}Lr(x,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ce,re),Le=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Le&&Ie.addToRenderList(m,x),this.info.render.frame++,j===!0&&ae.beginShadows();const G=p.state.shadowsArray;Me.render(G,x,O),j===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,U=m.transmissive;if(p.setupLights(),O.isArrayCamera){const le=O.cameras;if(U.length>0)for(let ge=0,we=le.length;ge<we;ge++){const be=le[ge];Fo(W,U,x,be)}Le&&Ie.render(x);for(let ge=0,we=le.length;ge<we;ge++){const be=le[ge];No(m,x,be,be.viewport)}}else U.length>0&&Fo(W,U,x,O),Le&&Ie.render(x),No(m,x,O);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(S,x,O),ct.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],j===!0&&ae.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Lr(x,O,G,W){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){W&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xe);const ge=Z.update(x),we=x.material;we.visible&&m.push(x,ge,we,G,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const ge=Z.update(x),we=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(xe)),Array.isArray(we)){const be=ge.groups;for(let Ue=0,ze=be.length;Ue<ze;Ue++){const Te=be[Ue],Je=we[Te.materialIndex];Je&&Je.visible&&m.push(x,ge,Je,G,Ne.z,Te)}}else we.visible&&m.push(x,ge,we,G,Ne.z,null)}}const le=x.children;for(let ge=0,we=le.length;ge<we;ge++)Lr(le[ge],O,G,W)}function No(x,O,G,W){const U=x.opaque,le=x.transmissive,ge=x.transparent;p.setupLightsView(G),j===!0&&ae.setGlobalState(S.clippingPlanes,G),W&&Ce.viewport(C.copy(W)),U.length>0&&xs(U,O,G),le.length>0&&xs(le,O,G),ge.length>0&&xs(ge,O,G),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Fo(x,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?vs:Dn,minFilter:li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const le=p.state.transmissionRenderTarget[W.id],ge=W.viewport||C;le.setSize(ge.z,ge.w);const we=S.getRenderTarget();S.setRenderTarget(le),S.getClearColor(Y),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Le&&Ie.render(G);const be=S.toneMapping;S.toneMapping=Xn;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),j===!0&&ae.setGlobalState(S.clippingPlanes,W),xs(x,G,W),E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le),De.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,Je=O.length;Te<Je;Te++){const dt=O[Te],ut=dt.object,Xt=dt.geometry,tt=dt.material,Pe=dt.group;if(tt.side===Vt&&ut.layers.test(W.layers)){const Sn=tt.side;tt.side=qt,tt.needsUpdate=!0,Bo(ut,G,W,Xt,tt,Pe),tt.side=Sn,tt.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(le),E.updateRenderTargetMipmap(le))}S.setRenderTarget(we),S.setClearColor(Y,K),Ue!==void 0&&(W.viewport=Ue),S.toneMapping=be}function xs(x,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let U=0,le=x.length;U<le;U++){const ge=x[U],we=ge.object,be=ge.geometry,Ue=W===null?ge.material:W,ze=ge.group;we.layers.test(G.layers)&&Bo(we,O,G,be,Ue,ze)}}function Bo(x,O,G,W,U,le){x.onBeforeRender(S,O,G,W,U,le),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(S,O,G,W,x,le),U.transparent===!0&&U.side===Vt&&U.forceSinglePass===!1?(U.side=qt,U.needsUpdate=!0,S.renderBufferDirect(G,O,W,U,x,le),U.side=qn,U.needsUpdate=!0,S.renderBufferDirect(G,O,W,U,x,le),U.side=Vt):S.renderBufferDirect(G,O,W,U,x,le),x.onAfterRender(S,O,G,W,U,le)}function ws(x,O,G){O.isScene!==!0&&(O=Qe);const W=Re.get(x),U=p.state.lights,le=p.state.shadowsArray,ge=U.state.version,we=Ee.getParameters(x,U.state,le,O,G),be=Ee.getProgramCacheKey(we);let Ue=W.programs;W.environment=x.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(x.isMeshStandardMaterial?B:_).get(x.envMap||W.environment),W.envMapRotation=W.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",Be),Ue=new Map,W.programs=Ue);let ze=Ue.get(be);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ge)return Ho(x,we),ze}else we.uniforms=Ee.getUniforms(x),x.onBeforeCompile(we,S),ze=Ee.acquireProgram(we,be),Ue.set(be,ze),W.uniforms=we.uniforms;const Te=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=ae.uniform),Ho(x,we),W.needsLights=fd(x),W.lightsStateVersion=ge,W.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function zo(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=cr.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Ho(x,O){const G=Re.get(x);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function hd(x,O,G,W,U){O.isScene!==!0&&(O=Qe),E.resetTextureUnits();const le=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,we=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qi,be=(W.isMeshStandardMaterial?B:_).get(W.envMap||ge),Ue=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,dt=!!G.morphAttributes.color;let ut=Xn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=S.toneMapping);const Xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=Xt!==void 0?Xt.length:0,Pe=Re.get(W),Sn=p.state.lights;if(j===!0&&(de===!0||x!==y)){const en=x===y&&W.id===M;ae.setState(W,x,en)}let nt=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Sn.state.version||Pe.outputColorSpace!==we||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==be||W.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==ze||Pe.morphTargets!==Te||Pe.morphNormals!==Je||Pe.morphColors!==dt||Pe.toneMapping!==ut||Pe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Pe.__version=W.version);let on=Pe.currentProgram;nt===!0&&(on=ws(W,O,U));let mi=!1,Yt=!1,ji=!1;const ft=on.getUniforms(),gn=Pe.uniforms;if(Ce.useProgram(on.program)&&(mi=!0,Yt=!0,ji=!0),W.id!==M&&(M=W.id,Yt=!0),mi||y!==x){Ce.buffers.depth.getReversed()?(oe.copy(x.projectionMatrix),_h(oe),Mh(oe),ft.setValue(D,"projectionMatrix",oe)):ft.setValue(D,"projectionMatrix",x.projectionMatrix),ft.setValue(D,"viewMatrix",x.matrixWorldInverse);const On=ft.map.cameraPosition;On!==void 0&&On.setValue(D,Ae.setFromMatrixPosition(x.matrixWorld)),Ve.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Yt=!0,ji=!0)}if(U.isSkinnedMesh){ft.setOptional(D,U,"bindMatrix"),ft.setOptional(D,U,"bindMatrixInverse");const en=U.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ft.setValue(D,"boneTexture",en.boneTexture,E))}U.isBatchedMesh&&(ft.setOptional(D,U,"batchingTexture"),ft.setValue(D,"batchingTexture",U._matricesTexture,E),ft.setOptional(D,U,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",U._indirectTexture,E),ft.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",U._colorsTexture,E));const Qi=G.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Oe.update(U,G,on),(Yt||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,ft.setValue(D,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gn.envMap.value=be,gn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),Yt&&(ft.setValue(D,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&ud(gn,ji),le&&W.fog===!0&&fe.refreshFogUniforms(gn,le),fe.refreshMaterialUniforms(gn,W,V,ee,p.state.transmissionRenderTarget[x.id]),cr.upload(D,zo(Pe),gn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(cr.upload(D,zo(Pe),gn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(D,"center",U.center),ft.setValue(D,"modelViewMatrix",U.modelViewMatrix),ft.setValue(D,"normalMatrix",U.normalMatrix),ft.setValue(D,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const en=W.uniformsGroups;for(let On=0,Un=en.length;On<Un;On++){const Go=en[On];L.update(Go,on),L.bind(Go,on)}}return on}function ud(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function fd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,O,G){Re.get(x.texture).__webglTexture=O,Re.get(x.depthTexture).__webglTexture=G;const W=Re.get(x);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,O){const G=Re.get(x);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(x,O=0,G=0){R=x,k=O,P=G;let W=!0,U=null,le=!1,ge=!1;if(x){const be=Re.get(x);if(be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(be.__hasExternalTextures)E.rebindTextures(x,Re.get(x.texture).__webglTexture,Re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Te=x.depthTexture;if(be.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(x.width!==Te.image.width||x.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const ze=Re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?U=ze[O][G]:U=ze[O],le=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?U=Re.get(x).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[G]:U=ze,C.copy(x.viewport),H.copy(x.scissor),F=x.scissorTest}else C.copy(ie).multiplyScalar(V).floor(),H.copy(pe).multiplyScalar(V).floor(),F=ke;if(Ce.bindFramebuffer(D.FRAMEBUFFER,U)&&W&&Ce.drawBuffers(x,U),Ce.viewport(C),Ce.scissor(H),Ce.setScissorTest(F),le){const be=Re.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,G)}else if(ge){const be=Re.get(x.texture),Ue=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Ue)}M=-1},this.readRenderTargetPixels=function(x,O,G,W,U,le,ge){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Ce.bindFramebuffer(D.FRAMEBUFFER,we);try{const be=x.texture,Ue=be.format,ze=be.type;if(!Ve.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-W&&G>=0&&G<=x.height-U&&D.readPixels(O,G,W,U,Ge.convert(Ue),Ge.convert(ze),le)}finally{const be=R!==null?Re.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,O,G,W,U,le,ge){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){const be=x.texture,Ue=be.format,ze=be.type;if(!Ve.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=x.width-W&&G>=0&&G<=x.height-U){Ce.bindFramebuffer(D.FRAMEBUFFER,we);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(O,G,W,U,Ge.convert(Ue),Ge.convert(ze),0);const Je=R!==null?Re.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Je);const dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await yh(D,dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Te),D.deleteSync(dt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,O=null,G=0){x.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1]);const W=Math.pow(2,-G),U=Math.floor(x.image.width*W),le=Math.floor(x.image.height*W),ge=O!==null?O.x:0,we=O!==null?O.y:0;E.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ge,we,U,le),Ce.unbindTexture()},this.copyTextureToTexture=function(x,O,G=null,W=null,U=0){x.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,x=arguments[1],O=arguments[2],U=arguments[3]||0,G=null);let le,ge,we,be,Ue,ze,Te,Je,dt;const ut=x.isCompressedTexture?x.mipmaps[U]:x.image;G!==null?(le=G.max.x-G.min.x,ge=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Ue=G.min.y,ze=G.isBox3?G.min.z:0):(le=ut.width,ge=ut.height,we=ut.depth||1,be=0,Ue=0,ze=0),W!==null?(Te=W.x,Je=W.y,dt=W.z):(Te=0,Je=0,dt=0);const Xt=Ge.convert(O.format),tt=Ge.convert(O.type);let Pe;O.isData3DTexture?(E.setTexture3D(O,0),Pe=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Pe=D.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Sn=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),mi=D.getParameter(D.UNPACK_SKIP_ROWS),Yt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const ji=x.isDataArrayTexture||x.isData3DTexture,ft=O.isDataArrayTexture||O.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const gn=Re.get(x),Qi=Re.get(O),en=Re.get(gn.__renderTarget),On=Re.get(Qi.__renderTarget);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Un=0;Un<we;Un++)ji&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(x).__webglTexture,U,ze+Un),x.isDepthTexture?(ft&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,U,dt+Un),D.blitFramebuffer(be,Ue,le,ge,Te,Je,le,ge,D.DEPTH_BUFFER_BIT,D.NEAREST)):ft?D.copyTexSubImage3D(Pe,U,Te,Je,dt+Un,be,Ue,le,ge):D.copyTexSubImage2D(Pe,U,Te,Je,dt+Un,be,Ue,le,ge);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ft?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Pe,U,Te,Je,dt,le,ge,we,Xt,tt,ut.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,U,Te,Je,dt,le,ge,we,Xt,ut.data):D.texSubImage3D(Pe,U,Te,Je,dt,le,ge,we,Xt,tt,ut):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Te,Je,le,ge,Xt,tt,ut.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Te,Je,ut.width,ut.height,Xt,ut.data):D.texSubImage2D(D.TEXTURE_2D,U,Te,Je,le,ge,Xt,tt,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,mi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),U===0&&O.generateMipmaps&&D.generateMipmap(Pe),Ce.unbindTexture()},this.copyTextureToTexture3D=function(x,O,G=null,W=null,U=0){return x.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,x=arguments[2],O=arguments[3],U=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,O,G,W,U)},this.initRenderTarget=function(x){Re.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),Ce.unbindTexture()},this.resetState=function(){k=0,P=0,R=null,Ce.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class mr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new mr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Rg=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Ig{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new A;class gr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class so extends ui{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ai;const is=new A,Ri=new A,Ii=new A,Li=new Fe,ss=new Fe,Xc=new pt,$s=new A,rs=new A,Xs=new A,Gl=new Fe,la=new Fe,Wl=new Fe;class Vl extends Tt{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ig(t,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new gr(n,3,0,!1)),Ai.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=Ai,this.material=e,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Xc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ii.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;qs($s.set(-.5,-.5,0),Ii,a,Ri,i,s),qs(rs.set(.5,-.5,0),Ii,a,Ri,i,s),qs(Xs.set(.5,.5,0),Ii,a,Ri,i,s),Gl.set(0,0),la.set(1,0),Wl.set(1,1);let o=e.ray.intersectTriangle($s,rs,Xs,!1,is);if(o===null&&(qs(rs.set(-.5,.5,0),Ii,a,Ri,i,s),la.set(0,1),o=e.ray.intersectTriangle($s,Xs,rs,!1,is),o===null))return;const l=e.ray.origin.distanceTo(is);l<e.near||l>e.far||t.push({distance:l,point:is.clone(),uv:Qt.getInterpolation(is,$s,rs,Xs,Gl,la,Wl,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qs(r,e,t,n,i,s){Li.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ss.x=s*Li.x-i*Li.y,ss.y=i*Li.x+s*Li.y):ss.copy(Li),r.copy(e),r.x+=ss.x,r.y+=ss.y,r.applyMatrix4(Xc)}class fi extends ui{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vr=new A,yr=new A,$l=new pt,as=new bo,Ys=new kr,ca=new A,Xl=new A;class qc extends Tt{constructor(e=new Ut,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)vr.fromBufferAttribute(t,i-1),yr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vr.distanceTo(yr);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;$l.copy(i).invert(),as.copy(e.ray).applyMatrix4($l);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),w=d.getX(v+1),b=Ks(this,e,as,l,p,w);b&&t.push(b)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=Ks(this,e,as,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Ks(this,e,as,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ks(this,e,as,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ks(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(vr.fromBufferAttribute(a,i),yr.fromBufferAttribute(a,s),t.distanceSqToSegment(vr,yr,ca,Xl)>n)return;ca.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ca);if(!(l<e.near||l>e.far))return{distance:l,point:Xl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const ql=new A,Yl=new A;class _s extends qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ql.fromBufferAttribute(t,i),Yl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ql.distanceTo(Yl);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _r extends $t{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Co extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new A,d=new Fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class et extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function w(){const S=new A,I=new A;let k=0;const P=(t-e)/n;for(let R=0;R<=s;R++){const M=[],y=R/s,C=y*(t-e)+e;for(let H=0;H<=i;H++){const F=H/i,Y=F*l+o,K=Math.sin(Y),$=Math.cos(Y);I.x=C*K,I.y=-y*n+m,I.z=C*$,h.push(I.x,I.y,I.z),S.set(K,P,$).normalize(),u.push(S.x,S.y,S.z),f.push(F,1-y),M.push(g++)}v.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const y=v[M][R],C=v[M+1][R],H=v[M+1][R+1],F=v[M][R+1];(e>0||M!==0)&&(d.push(y,C,F),k+=3),(t>0||M!==s-1)&&(d.push(C,H,F),k+=3)}c.addGroup(p,k,0),p+=k}function b(S){const I=g,k=new Fe,P=new A;let R=0;const M=S===!0?e:t,y=S===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let H=0;H<=i;H++){const Y=H/i*l+o,K=Math.cos(Y),$=Math.sin(Y);P.x=M*$,P.y=m*y,P.z=M*K,h.push(P.x,P.y,P.z),u.push(0,y,0),k.x=K*.5+.5,k.y=$*.5*y+.5,f.push(k.x,k.y),g++}for(let H=0;H<i;H++){const F=I+H,Y=C+H;S===!0?d.push(Y,Y+1,F):d.push(Y+1,Y,F),R+=3}c.addGroup(p,R,S===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends et{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Zs=new A,js=new A,da=new A,Qs=new Qt;class Ao extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Bi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=Qs;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Qs.getNormal(da),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const b=(w+1)%3,S=h[w],I=h[b],k=Qs[d[w]],P=Qs[d[b]],R=`${S}_${I}`,M=`${I}_${S}`;M in u&&u[M]?(da.dot(u[M].normal)<=s&&(f.push(k.x,k.y,k.z),f.push(P.x,P.y,P.z)),u[M]=null):R in u||(u[R]={index0:c[w],index1:c[b],normal:da.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Zs.fromBufferAttribute(o,v),js.fromBufferAttribute(o,m),f.push(Zs.x,Zs.y,Zs.z),f.push(js.x,js.y,js.z)}this.setAttribute("position",new gt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rr extends Ut{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let h=e;const u=(t-e)/i,f=new A,g=new Fe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const w=p+m,b=w,S=w+n+1,I=w+n+2,k=w+1;o.push(b,S,k),o.push(S,I,k)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ro extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new A,u=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const k=I/t;h.x=-e*Math.cos(i+k*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+k*s)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(k+S,1-b),w.push(c++)}d.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const b=d[p][w+1],S=d[p][w],I=d[p+1][w],k=d[p+1][w+1];(p!==0||a>0)&&f.push(b,S,k),(p!==n-1||l<Math.PI)&&f.push(S,I,k)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ye extends ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yc extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ha=new pt,Kl=new A,Zl=new A;class Lg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dg extends Lg{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jl extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Og extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ug{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ql();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ql(){return performance.now()}const Jl=new pt;class Kc{constructor(e,t,n=0,i=1/0){this.ray=new bo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jl),this}intersectObject(e,t=!0,n=[]){return ro(e,this,n,t),n.sort(ec),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ro(e[i],this,n,t);return n.sort(ec),n}}function ec(r,e){return r.distance-e.distance}function ro(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ro(s[a],e,t,!0)}}const Js=new Ki;class Zc extends _s{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new Ut;s.setIndex(new Jt(n,1)),s.setAttribute("position",new Jt(i,3)),super(s,new fi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Js.setFromObject(this.object),Js.isEmpty())return;const t=Js.min,n=Js.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const tc=new A;let er,ua;class Mr extends Tt{constructor(e=new A(0,0,1),t=new A(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",er===void 0&&(er=new Ut,er.setAttribute("position",new gt([0,0,0,0,1,0],3)),ua=new et(0,.5,1,5,1),ua.translate(0,-.5,0)),this.position.copy(t),this.line=new qc(er,new fi({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new N(ua,new Ln({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{tc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(tc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);const Ng=.5;class Fg{clock;running=!1;paused=!1;speedMultiplier=1;updateCallbacks=[];renderCallback=null;constructor(){this.clock=new Ug(!1)}start(){this.running=!0,this.clock.start(),this.tick()}stop(){this.running=!1,this.clock.stop()}pause(){this.paused=!0}resume(){this.paused=!1}isPaused(){return this.paused}setSpeed(e){this.speedMultiplier=Math.max(0,Math.min(3,e))}getSpeed(){return this.speedMultiplier}onUpdate(e){return this.updateCallbacks.push(e),()=>{const t=this.updateCallbacks.indexOf(e);t>-1&&this.updateCallbacks.splice(t,1)}}onRender(e){this.renderCallback=e}tick=()=>{if(!this.running)return;requestAnimationFrame(this.tick);const e=this.clock.getDelta(),t=Math.min(e,.1),n=this.clock.getElapsedTime();e>Ng&&_t.warn(`[GameLoop] Frame drop detected: ${e.toFixed(2)}s (${Math.round(1/e)} fps)`);const i=this.paused?0:t*this.speedMultiplier;for(const s of this.updateCallbacks)s(i,n);this.renderCallback&&this.renderCallback()}}class Bg{events=new Map;on(e,t){return this.events.has(e)||this.events.set(e,new Set),this.events.get(e).add(t),()=>{this.events.get(e)?.delete(t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){this.events.get(e)?.delete(t)}emit(e,t){this.events.get(e)?.forEach(n=>n(t))}clear(){this.events.clear()}}const T=new Bg;class zg{state={money:500,wave:1,phase:"build",gameMode:"normal",storedPallets:0,storageCapacity:0,pendingOrders:0,completedOrders:0,failedOrders:0,isPaused:!1,gameSpeed:1,isGameOver:!1,theme:"dark",floorExpansionCount:0,floorVerticalExpansionCount:0,workerLimit:5,workerCapacityExpansionCount:0};MAX_FAILED_ORDERS=3;get(e){return this.state[e]}set(e,t){const n=this.state[e];this.state[e]=t,e==="money"&&n!==t&&T.emit("money:changed",{oldValue:n,newValue:t})}getState(){return{...this.state}}addMoney(e){this.set("money",this.state.money+e)}spendMoney(e){return this.state.money>=e?(this.set("money",this.state.money-e),!0):!1}canAfford(e){return this.state.money>=e}setPhase(e){this.set("phase",e),this.emitPhaseEvent()}emitPhaseEvent(){const e=this.state.phase;e==="build"?T.emit("phase:build"):e==="reorg"?T.emit("phase:reorg"):T.emit("phase:operations")}setGameMode(e){this.set("gameMode",e)}nextWave(){this.set("wave",this.state.wave+1)}completeWave(){T.emit("wave:complete",{wave:this.state.wave})}updateStorageCapacity(e){this.set("storageCapacity",e)}addStoredPallet(){this.set("storedPallets",this.state.storedPallets+1),T.emit("pallet:stored",{total:this.state.storedPallets})}removeStoredPallet(){this.state.storedPallets>0&&(this.set("storedPallets",this.state.storedPallets-1),T.emit("pallet:picked",{total:this.state.storedPallets}))}addPendingOrder(){this.set("pendingOrders",this.state.pendingOrders+1)}completeOrder(){this.set("pendingOrders",Math.max(0,this.state.pendingOrders-1)),this.set("completedOrders",this.state.completedOrders+1),T.emit("order:fulfilled",{total:this.state.completedOrders})}failOrder(){this.set("pendingOrders",Math.max(0,this.state.pendingOrders-1)),this.recordFailure()}failInboundTruck(){this.recordFailure()}recordFailure(){this.set("failedOrders",this.state.failedOrders+1),T.emit("order:expired",{total:this.state.failedOrders});const e=this.state.gameMode==="challenge"?1:this.MAX_FAILED_ORDERS;this.state.failedOrders>=e&&this.gameOver()}increaseWorkerLimit(e=5){this.set("workerLimit",this.state.workerLimit+e)}resetFailedOrders(){this.set("failedOrders",0)}pause(){this.set("isPaused",!0),T.emit("game:pause")}resume(){this.set("isPaused",!1),T.emit("game:resume")}togglePause(){this.state.isPaused?this.resume():this.pause()}setSpeed(e){this.set("gameSpeed",Math.max(0,Math.min(3,e))),T.emit("ui:speed-change",{speed:this.state.gameSpeed})}setTheme(e){const t=this.state.theme;this.state.theme=e,t!==e&&T.emit("theme:changed",{theme:e})}toggleTheme(){this.setTheme(this.state.theme==="dark"?"light":"dark")}gameOver(){this.set("isGameOver",!0),T.emit("game:over",{wave:this.state.wave,completedOrders:this.state.completedOrders,money:this.state.money})}reset(){this.state={money:500,wave:1,phase:"build",gameMode:"normal",storedPallets:0,storageCapacity:0,pendingOrders:0,completedOrders:0,failedOrders:0,isPaused:!1,gameSpeed:1,isGameOver:!1,theme:"dark",floorExpansionCount:0,floorVerticalExpansionCount:0,workerLimit:5,workerCapacityExpansionCount:0}}serialize(){return JSON.stringify(this.state)}deserialize(e){try{const t=JSON.parse(e);this.state={...this.state,...t}}catch(t){console.error("Failed to deserialize game state:",t)}}}const z=new zg;class Hg{instance;ambientLight;directionalLight;fillLight;constructor(){this.instance=new Rg,this.setupLighting(),this.setupFog(),this.setupEventListeners(),this.updateTheme(z.get("theme"))}setupEventListeners(){T.on("theme:changed",({theme:e})=>{this.updateTheme(e)})}updateTheme(e){const t=e==="light",n=t?11193599:1710638;this.instance.background=new Xe(n),this.instance.fog instanceof mr&&this.instance.fog.color.set(n),this.ambientLight&&(this.ambientLight.intensity=t?.6:.4),this.directionalLight&&(this.directionalLight.intensity=t?1:.8,this.directionalLight.color.set(t?16775920:16777215)),this.fillLight&&(this.fillLight.intensity=t?.4:.3)}setupLighting(){this.ambientLight=new Og(16777215,.4),this.instance.add(this.ambientLight),this.directionalLight=new jl(16777215,.8),this.directionalLight.position.set(10,20,10),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=50,this.directionalLight.shadow.camera.left=-20,this.directionalLight.shadow.camera.right=20,this.directionalLight.shadow.camera.top=20,this.directionalLight.shadow.camera.bottom=-20,this.directionalLight.shadow.bias=-1e-4,this.instance.add(this.directionalLight),this.fillLight=new jl(10011097,.3),this.fillLight.position.set(-10,10,-10),this.instance.add(this.fillLight)}setupFog(){this.instance.fog=new mr(1710638,30,60)}add(e){this.instance.add(e)}remove(e){this.instance.remove(e)}}class Gg{instance;zoom=15;minZoom=8;maxZoom=60;maxPan=15;panOffset=new A;targetPanOffset=new A;panSpeed=.1;rotationAngle=Math.PI/4;targetRotationAngle=Math.PI/4;rotationSpeed=.1;ISO_ANGLE=Math.atan(1/Math.sqrt(2));ROTATION=Math.PI/4;viewMode="isometric";constructor(e){const t=this.zoom;this.instance=new Po(-t*e/2,t*e/2,t/2,-t/2,.1,100),this.setupIsometricPosition()}setupIsometricPosition(){this.instance.position.set(30*Math.cos(this.ROTATION)*Math.cos(this.ISO_ANGLE),30*Math.sin(this.ISO_ANGLE),30*Math.sin(this.ROTATION)*Math.cos(this.ISO_ANGLE)),this.instance.lookAt(0,0,0),this.instance.up.set(0,1,0)}resize(e){const t=this.zoom;this.instance.left=-t*e/2,this.instance.right=t*e/2,this.instance.top=t/2,this.instance.bottom=-t/2,this.instance.updateProjectionMatrix()}setZoom(e){this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,e));const t=window.innerWidth/window.innerHeight;this.resize(t)}getZoom(){return this.zoom}zoomIn(e=1){this.setZoom(this.zoom-e)}zoomOut(e=1){this.setZoom(this.zoom+e)}pan(e,t){const n=this.zoom*.002,i=this.viewMode==="top"?Math.PI/2:this.rotationAngle,s=new A(Math.cos(i+Math.PI/2),0,Math.sin(i+Math.PI/2)).normalize(),a=new A(Math.cos(i),0,Math.sin(i)).normalize();this.targetPanOffset.add(s.clone().multiplyScalar(e*n)),this.targetPanOffset.add(a.clone().multiplyScalar(-t*n)),this.targetPanOffset.clampScalar(-this.maxPan,this.maxPan)}resetPan(){this.targetPanOffset.set(0,0,0)}rotate(e){this.targetRotationAngle+=e}setRotation(e){this.targetRotationAngle=e}getRotation(){return this.rotationAngle}setView(e){this.viewMode=e,this.panOffset.set(0,0,0),this.targetPanOffset.set(0,0,0),this.rotationAngle=this.ROTATION,this.targetRotationAngle=this.ROTATION}getView(){return this.viewMode}setGridDimensions(e,t){const n=Math.max(e,t);this.maxZoom=n*3,this.maxPan=n*.75}setGridWidth(e){this.setGridDimensions(e,e)}update(){this.panOffset.lerp(this.targetPanOffset,this.panSpeed),this.rotationAngle+=(this.targetRotationAngle-this.rotationAngle)*this.rotationSpeed;const e=30;this.viewMode==="top"?(this.instance.position.set(0,e,0),this.instance.position.add(this.panOffset),this.instance.lookAt(this.panOffset.clone()),this.instance.up.set(0,0,-1)):(this.instance.position.set(e*Math.cos(this.rotationAngle)*Math.cos(this.ISO_ANGLE),e*Math.sin(this.ISO_ANGLE),e*Math.sin(this.rotationAngle)*Math.cos(this.ISO_ANGLE)),this.instance.position.add(this.panOffset),this.instance.lookAt(this.panOffset.clone()),this.instance.up.set(0,1,0))}screenToWorld(e,t,n=0){const i=e/window.innerWidth*2-1,s=-(t/window.innerHeight)*2+1,a=new Kc;a.setFromCamera(new Fe(i,s),this.instance);const o=new kn(new A(0,1,0),-n),l=new A;return a.ray.intersectPlane(o,l),l||new A}}class Wg{instance;constructor(e){this.instance=new Ag({canvas:e,antialias:!0,alpha:!1}),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.instance.setSize(window.innerWidth,window.innerHeight),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=mc,this.instance.toneMapping=vc,this.instance.toneMappingExposure=1}resize(e,t){this.instance.setSize(e,t)}render(e,t){this.instance.render(e,t)}dispose(){this.instance.dispose()}}class Vg{_width;_height;cellSize;originX;originZ;get width(){return this._width}get height(){return this._height}cells=new Map;gridMesh;gridHelper;dockMesh;southDockMesh;northLabelMesh;southLabelMesh;northDockTexture;southDockTexture;highlightMesh;gridGroup;constructor(e=20,t=20,n=1){this._width=e,this._height=t,this.cellSize=n,this.originX=e/2,this.originZ=t/2,this.gridGroup=new wt,this.initCells(),this.createVisuals(),this.createHighlight(),this.setupDockArea(),this.setupEventListeners(),this.updateTheme(z.get("theme"))}setupEventListeners(){T.on("theme:changed",({theme:e})=>{this.updateTheme(e)})}updateTheme(e){const t=e==="light";this.gridMesh&&this.gridMesh.material.color.setHex(t?14870768:2963272),this.gridHelper&&this.gridGroup.remove(this.gridHelper);const n=t?13358560:4016210;this.gridHelper=this.createRectGridLines(n),this.gridGroup.add(this.gridHelper)}initCells(){for(let e=0;e<this._width;e++)for(let t=0;t<this._height;t++){const n=this.getKey(e,t);this.cells.set(n,{x:e,z:t,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0})}}setupDockArea(){this.applyDockRules(0,this._width-1)}applyDockRules(e,t){for(let n=e;n<=t;n++){const i=this.getCell(n,this._height-1);i&&(i.occupied||(i.type="empty"),i.buildable=!0,i.walkable=!1);const s=this.getCell(n,this._height-2);s&&(s.buildable=!1,s.walkable=!0);const a=this.getCell(n,0);a&&(a.occupied||(a.type="empty"),a.buildable=!0,a.walkable=!1);const o=this.getCell(n,1);o&&(o.buildable=!1,o.walkable=!0)}}createVisuals(){const e=new Et(this._width*this.cellSize,this._height*this.cellSize),t=new ye({color:2963272,roughness:.8,metalness:.2});this.gridMesh=new N(e,t),this.gridMesh.rotation.x=-Math.PI/2,this.gridMesh.position.set((this._width/2-this.originX)*this.cellSize,0,(this._height/2-this.originZ)*this.cellSize),this.gridMesh.receiveShadow=!0,this.gridGroup.add(this.gridMesh),this.gridHelper=new Tt,this.gridGroup.add(this.gridHelper),this.northDockTexture=this.createHazardStripesTexture(this._width);const n=new Et(this._width*this.cellSize,this.cellSize),i=new ye({map:this.northDockTexture,roughness:.8,metalness:.1});this.dockMesh=new N(n,i),this.dockMesh.rotation.x=-Math.PI/2,this.dockMesh.position.set((this._width/2-this.originX)*this.cellSize,.02,(this._height/2-.5)*this.cellSize),this.dockMesh.receiveShadow=!0,this.gridGroup.add(this.dockMesh),this.southDockTexture=this.createHazardStripesTexture(this._width);const s=new Et(this._width*this.cellSize,this.cellSize),a=new ye({map:this.southDockTexture,roughness:.8,metalness:.1});this.southDockMesh=new N(s,a),this.southDockMesh.rotation.x=-Math.PI/2,this.southDockMesh.position.set((this._width/2-this.originX)*this.cellSize,.02,(-this.originZ+.5)*this.cellSize),this.southDockMesh.receiveShadow=!0,this.gridGroup.add(this.southDockMesh);const o=new Et(4*this.cellSize,this.cellSize),l=new Ln({map:this.createDockLabelTexture("INBOUND"),transparent:!0,depthWrite:!1});this.northLabelMesh=new N(o,l),this.northLabelMesh.rotation.x=-Math.PI/2,this.northLabelMesh.position.set((this._width/2-this.originX)*this.cellSize,.03,(this._height/2-1.5)*this.cellSize),this.gridGroup.add(this.northLabelMesh);const c=new Et(4*this.cellSize,this.cellSize),d=new Ln({map:this.createDockLabelTexture("OUTBOUND"),transparent:!0,depthWrite:!1});this.southLabelMesh=new N(c,d),this.southLabelMesh.rotation.x=-Math.PI/2,this.southLabelMesh.position.set((this._width/2-this.originX)*this.cellSize,.03,(-this.originZ+1.5)*this.cellSize),this.gridGroup.add(this.southLabelMesh)}createRectGridLines(e){const t=this.cellSize,n=[];for(let s=0;s<=this._height;s++){const a=(s-this.originZ)*t,o=-this.originX*t,l=(this._width-this.originX)*t;n.push(o,.01,a,l,.01,a)}for(let s=0;s<=this._width;s++){const a=(s-this.originX)*t,o=-this.originZ*t,l=(this._height-this.originZ)*t;n.push(a,.01,o,a,.01,l)}const i=new Ut;return i.setAttribute("position",new gt(n,3)),new _s(i,new fi({color:e}))}createHazardStripesTexture(e){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");if(i){i.fillStyle="#F5A623",i.fillRect(0,0,128,128),i.fillStyle="#1A1A1A";for(let o=-128;o<256;o+=64)i.beginPath(),i.moveTo(o,0),i.lineTo(o+32,0),i.lineTo(o+32+128,128),i.lineTo(o+128,128),i.closePath(),i.fill()}const s=new _r(n);return s.wrapS=ps,s.wrapT=ps,s.repeat.set(e/2,.5),s}createDockLabelTexture(e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");return n&&(n.font="bold 80px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#FFFFFF",n.fillText(e,256,64)),new _r(t)}createHighlight(){const e=new Et(this.cellSize*.95,this.cellSize*.95),t=new Ln({color:5164484,transparent:!0,opacity:.5,side:Vt});this.highlightMesh=new N(e,t),this.highlightMesh.rotation.x=-Math.PI/2,this.highlightMesh.position.y=.03,this.highlightMesh.visible=!1,this.gridGroup.add(this.highlightMesh)}getObject3D(){return this.gridGroup}rebuild(e,t){this._width=e,this._height=t,this.originX=e/2,this.originZ=t/2,this.cells.clear(),this.initCells(),this.gridMesh&&(this.gridMesh.geometry.dispose(),this.gridMesh.material.dispose(),this.gridGroup.remove(this.gridMesh)),this.gridHelper&&this.gridGroup.remove(this.gridHelper),this.dockMesh&&(this.dockMesh.geometry.dispose(),this.dockMesh.material.dispose(),this.gridGroup.remove(this.dockMesh)),this.southDockMesh&&(this.southDockMesh.geometry.dispose(),this.southDockMesh.material.dispose(),this.gridGroup.remove(this.southDockMesh)),this.northLabelMesh&&(this.northLabelMesh.geometry.dispose(),this.northLabelMesh.material.dispose(),this.gridGroup.remove(this.northLabelMesh)),this.southLabelMesh&&(this.southLabelMesh.geometry.dispose(),this.southLabelMesh.material.dispose(),this.gridGroup.remove(this.southLabelMesh)),this.highlightMesh&&(this.highlightMesh.geometry.dispose(),this.highlightMesh.material.dispose(),this.gridGroup.remove(this.highlightMesh)),this.createVisuals(),this.createHighlight(),this.setupDockArea(),this.updateTheme(z.get("theme"))}getGroundMesh(){return this.gridMesh}getKey(e,t){return`${e},${t}`}getCell(e,t){return this.cells.get(this.getKey(e,t))||null}worldToGrid(e){const t=Math.floor(e.x/this.cellSize+this.originX),n=Math.floor(e.z/this.cellSize+this.originZ);return t>=0&&t<this._width&&n>=0&&n<this._height?{x:t,z:n}:null}gridToWorld(e,t){return new A((e-this.originX+.5)*this.cellSize,0,(t-this.originZ+.5)*this.cellSize)}canPlace(e,t){const n=this.getCell(e,t);return n?n.buildable&&!n.occupied:!1}place(e,t,n,i){if(!this.canPlace(e,t))return!1;const s=this.getCell(e,t);if(!s)return!1;s.occupied=!0,s.type=i,s.entity=n,s.walkable=i!=="rack"&&i!=="dock"&&i!=="conveyor"&&i!=="floor";const a=this.gridToWorld(e,t);return n.mesh.position.copy(a),T.emit("entity:placed",{x:e,z:t,type:i,entity:n}),!0}remove(e,t){const n=this.getCell(e,t);if(!n||!n.entity)return null;const i=n.entity,s=n.type;return n.occupied=!1,n.type="empty",n.entity=null,n.walkable=!0,n.buildable=!0,T.emit("entity:removed",{x:e,z:t,type:s,entity:i}),i}highlightCell(e,t){const n=this.worldToGrid(e);if(n){const i=this.canPlace(n.x,n.z),s=t&&i,a=this.gridToWorld(n.x,n.z);this.highlightMesh.position.set(a.x,.03,a.z),this.highlightMesh.material.color.setHex(s?5164484:16739179),this.highlightMesh.visible=!0}else this.highlightMesh.visible=!1}hideHighlight(){this.highlightMesh.visible=!1}getCellsByType(e){const t=[];return this.cells.forEach(n=>{n.type===e&&t.push(n)}),t}getNeighbors(e,t){const n=[],i=[{dx:0,dz:1},{dx:0,dz:-1},{dx:1,dz:0},{dx:-1,dz:0}];for(const{dx:s,dz:a}of i){const o=this.getCell(e+s,t+a);o&&o.walkable&&n.push(o)}return n}isInBounds(e,t){return e>=0&&e<this._width&&t>=0&&t<this._height}expand(e){if(e<=0)return;const t=Math.floor(e/2),n=e-t,i=this._width;if(this._width+=e,t>0){const s=Array.from(this.cells.entries());this.cells.clear();for(const[,a]of s)a.x+=t,this.cells.set(this.getKey(a.x,a.z),a);this.originX+=t}for(let s=0;s<t;s++)for(let a=0;a<this._height;a++)this.cells.set(this.getKey(s,a),{x:s,z:a,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});for(let s=i+t;s<this._width;s++)for(let a=0;a<this._height;a++)this.cells.set(this.getKey(s,a),{x:s,z:a,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});t>0&&this.applyDockRules(0,t-1),n>0&&this.applyDockRules(i+t,this._width-1),this.gridMesh.geometry.dispose(),this.gridMesh.geometry=new Et(this._width*this.cellSize,this._height*this.cellSize),this.gridMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.dockMesh.geometry.dispose(),this.dockMesh.geometry=new Et(this._width*this.cellSize,this.cellSize),this.dockMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.northDockTexture.repeat.set(this._width/2,.5),this.northDockTexture.needsUpdate=!0,this.southDockMesh.geometry.dispose(),this.southDockMesh.geometry=new Et(this._width*this.cellSize,this.cellSize),this.southDockMesh.position.setX((this._width/2-this.originX)*this.cellSize),this.southDockTexture.repeat.set(this._width/2,.5),this.southDockTexture.needsUpdate=!0,this.updateTheme(z.get("theme")),T.emit("grid:expanded",{width:this._width,height:this._height,shiftX:t,shiftZ:0})}expandVertical(e){if(e<=0)return;const t=this._height;this._height+=e;for(let n=0;n<this._width;n++){const i=this.getCell(n,t-1);i&&(i.walkable=!0);const s=this.getCell(n,t-2);s&&(s.buildable=!0)}for(let n=t;n<this._height;n++)for(let i=0;i<this._width;i++)this.cells.set(this.getKey(i,n),{x:i,z:n,type:"empty",occupied:!1,buildable:!0,entity:null,walkable:!0});this.applyDockRules(0,this._width-1),this.gridMesh.geometry.dispose(),this.gridMesh.geometry=new Et(this._width*this.cellSize,this._height*this.cellSize),this.gridMesh.position.setZ((this._height/2-this.originZ)*this.cellSize),this.dockMesh.position.setZ((this._height-this.originZ-.5)*this.cellSize),this.northLabelMesh.position.setZ((this._height-this.originZ-1.5)*this.cellSize),this.updateTheme(z.get("theme")),T.emit("grid:expanded",{width:this._width,height:this._height,shiftX:0,shiftZ:0})}}class pi{id;type;mesh;gridX=0;gridZ=0;constructor(e){this.id=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,this.type=e,this.mesh=new wt,this.mesh.userData.entityId=this.id,this.mesh.userData.entityType=e}setGridPosition(e,t){this.gridX=e,this.gridZ=t}getGridPosition(){return{x:this.gridX,z:this.gridZ}}setWorldPosition(e){this.mesh.position.copy(e)}getWorldPosition(){return this.mesh.position.clone()}update(e){}dispose(){this.mesh.traverse(e=>{e instanceof N&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}toData(){return{id:this.id,type:this.type,gridX:this.gridX,gridZ:this.gridZ}}}const ao=8,Vn=[15023678,3244750,3711337,14065198,8411861,15567158,3250069,13975436],Oi=["Red","Blue","Green","Yellow","Purple","Orange","Teal","Pink"],$g=5;function Kn(r){return Math.min(ao,Math.max(1,Math.ceil(r/$g)))}function Xg(r){const e=Kn(r);return Math.floor(Math.random()*e)}let jc,Qc,Jc,ed,td,nd,oo,nc=!1;const ic=new Map;function qg(){nc||(nc=!0,jc=new te(.9,.05,.9),Qc=new ye({color:9132587,roughness:.9,metalness:.1}),Jc=new te(.8,.3,.8),ed=new ye({color:13215339,roughness:.8,metalness:.1}),td=new te(.3,.03,.3),nd=new ye({color:4871528,roughness:.7,metalness:.2}),oo=new te(.35,.12,.02))}function Yg(r){let e=ic.get(r);if(!e){const t=Vn[r]??16777215;e=new ye({color:t,roughness:.5,metalness:.1,emissive:t,emissiveIntensity:.15}),ic.set(r,e)}return e}function Pt(r=0){qg();const e=new wt,t=new N(jc,Qc);t.position.set(0,.025,0),t.castShadow=!0,t.receiveShadow=!0,e.add(t);const n=Yg(r),i=[.2,.5,.8];for(const a of i){const o=new N(Jc,ed);o.position.set(0,a,0),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=new N(oo,n);l.position.set(0,a,.41),e.add(l);const c=new N(oo,n);c.position.set(0,a,-.41),e.add(c)}const s=new N(td,nd);return s.position.set(0,.19,0),s.castShadow=!0,e.add(s),e}class id extends pi{contents=1;sku=0;palletId="";constructor(e=0){super("pallet"),this.sku=e,this.createMesh()}createMesh(){const e=Pt(this.sku);this.mesh.add(e)}}class sn extends pi{static CONTAINER_BACK_OFFSET=1.8;static CONTAINER_FLOOR_HEIGHT=.5;static ANIM_DURATION_MS=2e3;static ANIM_DURATION_SECONDS=sn.ANIM_DURATION_MS/1e3;static DOOR_ANIM_DURATION_SECONDS=.45;static DOOR_OPEN_ANGLE=Math.PI*.62;state="arriving";direction="inbound";pallets=[];maxPallets=4;dockPosition=0;truckDock=null;palletSkus=[];containerMesh=null;leftDoorHinge=null;rightDoorHinge=null;doorOpenProgress=0;doorOpenTarget=0;palletMeshes=[];palletCountSprite=null;palletCountCanvas=null;palletCountTexture=null;deadlineTime=0;deadlineMaxTime=0;deadlineActive=!1;timerSprite=null;timerCanvas=null;timerTexture=null;flashPhase=0;animationType=null;animationElapsed=0;animationStartZ=0;animationEndZ=0;animationOnComplete=null;constructor(e=4,t=0,n){super("truck"),this.maxPallets=e,this.dockPosition=t,this.truckDock=n,this.createMesh(),this.applyScaleForPallets(e),this.createPalletVisuals(e),this.createPalletCountIndicator()}applyScaleForPallets(e){const t=Math.max(.7,Math.min(1.6,1+(e-4)*.05));this.mesh.scale.set(t,t,t)}setDoorTarget(e){this.doorOpenTarget=e?1:0}applyDoorPose(e){this.leftDoorHinge&&(this.leftDoorHinge.rotation.y=-sn.DOOR_OPEN_ANGLE*e),this.rightDoorHinge&&(this.rightDoorHinge.rotation.y=sn.DOOR_OPEN_ANGLE*e)}createMesh(){const e=new te(1.2,1.05,1),t=new ye({color:4020864,roughness:.6,metalness:.4}),n=new N(e,t);n.position.set(0,.58,-1.6),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new te(.9,.46,.02),s=new ye({color:8900331,roughness:.2,metalness:.8}),a=new N(i,s);a.position.set(0,.87,-1.1),this.mesh.add(a);const o=1.8,l=1.28,c=2.8,d=.06,h=.05,u=c/2;this.containerMesh=new wt,this.containerMesh.position.set(0,sn.CONTAINER_FLOOR_HEIGHT,.4),this.mesh.add(this.containerMesh);const f=new ye({color:7438486,roughness:.7,metalness:.3}),g=new ye({color:4871528,roughness:.75,metalness:.2}),v=new ye({color:14870768,roughness:.85,metalness:.05,side:Vt}),m=new N(new te(o,d,c),f);m.position.set(0,0,0),m.castShadow=!0,m.receiveShadow=!0,this.containerMesh.add(m);const p=new N(new te(d,l,c),f);p.position.set(-o/2+d/2,l/2,0),p.castShadow=!0,p.receiveShadow=!0,this.containerMesh.add(p);const w=p.clone();w.position.x=o/2-d/2,this.containerMesh.add(w);const b=new N(new te(o,d,c),f);b.position.set(0,l,0),b.castShadow=!0,b.receiveShadow=!0,this.containerMesh.add(b);const S=new N(new te(o,l,d),f);S.position.set(0,l/2,-c/2+d/2),S.castShadow=!0,S.receiveShadow=!0,this.containerMesh.add(S);const I=new N(new Et(o-d*2.5,l-d*2),v);I.position.set(0,l/2,-c/2+d+.001),this.containerMesh.add(I);const k=(o-d*2.5)/2,P=l-d*.5,R=new N(new te(k,P,h),g);R.position.set(k/2,P/2,h/2),R.castShadow=!0,R.receiveShadow=!0,this.leftDoorHinge=new wt,this.leftDoorHinge.name="containerDoorLeftHinge",this.leftDoorHinge.position.set(-o/2+d,0,u),this.leftDoorHinge.add(R),this.containerMesh.add(this.leftDoorHinge);const M=new N(new te(k,P,h),g);M.position.set(-k/2,P/2,h/2),M.castShadow=!0,M.receiveShadow=!0,this.rightDoorHinge=new wt,this.rightDoorHinge.name="containerDoorRightHinge",this.rightDoorHinge.position.set(o/2-d,0,u),this.rightDoorHinge.add(M),this.containerMesh.add(this.rightDoorHinge),this.applyDoorPose(0);const y=new et(.22,.22,.18,12),C=new ye({color:1712172,roughness:.9,metalness:.1});[[-.65,.22,-1.5],[.65,.22,-1.5],[-.65,.22,0],[.65,.22,0],[-.65,.22,.8],[.65,.22,.8]].forEach(([F,Y,K])=>{const $=new N(y,C);$.rotation.z=Math.PI/2,$.position.set(F,Y,K),$.castShadow=!0,this.mesh.add($)})}createPalletVisuals(e){const t=[[-.35,.03,-.3],[.35,.03,-.3],[-.35,.03,.4],[.35,.03,.4]];for(let n=0;n<e;n++){const i=this.palletSkus[n]??0,s=Pt(i);s.scale.set(.35,.35,.35),s.position.set(t[n%4][0],t[n%4][1],t[n%4][2]),this.containerMesh&&this.containerMesh.add(s),this.palletMeshes.push(s)}}setSkus(e){this.palletSkus=[...e];for(let t=0;t<this.palletMeshes.length;t++){const n=this.palletMeshes[t];for(;n.children.length>0;)n.remove(n.children[0]);const i=this.palletSkus[t]??0,s=Pt(i);for(;s.children.length>0;){const a=s.children[0];s.remove(a),n.add(a)}}}createPalletCountIndicator(){this.palletCountCanvas=document.createElement("canvas"),this.palletCountCanvas.width=128,this.palletCountCanvas.height=64,this.palletCountTexture=new _r(this.palletCountCanvas),this.palletCountTexture.minFilter=rn;const e=new so({map:this.palletCountTexture,transparent:!0,depthTest:!1});this.palletCountSprite=new Vl(e),this.palletCountSprite.scale.set(1,.5,1),this.palletCountSprite.position.set(0,2.05,.4),this.mesh.add(this.palletCountSprite),this.updatePalletCountIndicator()}updatePalletCountIndicator(){if(!this.palletCountCanvas||!this.palletCountTexture)return;const e=this.palletCountCanvas.getContext("2d");if(!e)return;const t=this.palletMeshes.length,n=this.maxPallets;e.clearRect(0,0,this.palletCountCanvas.width,this.palletCountCanvas.height),e.fillStyle=t>0?"rgba(59, 130, 246, 0.9)":"rgba(34, 197, 94, 0.9)",e.beginPath(),e.roundRect(24,12,80,40,16),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.8)",e.lineWidth=2,e.stroke(),e.fillStyle="white",e.font="bold 24px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(`${t}/${n}`,64,32),this.palletCountTexture.needsUpdate=!0}dock(){this.state="docked",this.setDoorTarget(!0)}unloadPallet(){if(this.palletMeshes.length===0)return null;this.state="unloading";const e=this.palletMeshes.pop(),t=this.palletSkus.pop()??0;e&&this.containerMesh&&(this.containerMesh.remove(e),e.traverse(i=>{i instanceof N&&(i.geometry?.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(s=>s.dispose()):i.material.dispose()))})),this.updatePalletCountIndicator();const n=new id(t);return this.palletMeshes.length===0&&(this.state="docked"),n}loadPallet(e=0){if(this.palletMeshes.length>=this.maxPallets)return console.warn("[Truck] Cannot load pallet: truck is full"),!1;this.state="loading";const t=[[-.35,.03,-.3],[.35,.03,-.3],[-.35,.03,.4],[.35,.03,.4]],n=this.palletMeshes.length%4,i=Pt(e);return i.scale.set(.35,.35,.35),i.position.set(t[n][0],t[n][1],t[n][2]),this.containerMesh&&this.containerMesh.add(i),this.palletMeshes.push(i),this.palletSkus.push(e),this.updatePalletCountIndicator(),!0}canLoadPallet(){return this.palletMeshes.length<this.maxPallets&&(this.state==="docked"||this.state==="loading")}isFullyLoaded(){return this.palletMeshes.length>=this.maxPallets}getPalletsRemaining(){return this.palletMeshes.length}depart(){this.state="departing",this.setDoorTarget(!1)}getAccessPositions(){const e=this.getWorldPosition(),t=this.mesh.rotation.y,n=new A(0,0,2.3);n.applyAxisAngle(new A(0,1,0),t);const i=e.clone().add(n),s=t+Math.PI;return[{position:i,rotation:s}]}animateArrival(e,t){this.state="arriving",this.animationType="arrival",this.animationElapsed=0,this.animationStartZ=this.mesh.position.z,this.animationEndZ=e,this.animationOnComplete=t??null}animateDeparture(e,t){this.depart(),this.animationType="departure",this.animationElapsed=0,this.animationStartZ=this.mesh.position.z,this.animationEndZ=this.animationStartZ+3*e,this.animationOnComplete=t??null}setDeadline(e){this.deadlineTime=e,this.deadlineMaxTime=e,this.deadlineActive=!0,this.createTimerIndicator()}getDeadlineTime(){return this.deadlineTime}isDeadlineActive(){return this.deadlineActive}createTimerIndicator(){if(this.timerSprite)return;this.timerCanvas=document.createElement("canvas"),this.timerCanvas.width=128,this.timerCanvas.height=128,this.timerTexture=new _r(this.timerCanvas),this.timerTexture.minFilter=rn;const e=new so({map:this.timerTexture,transparent:!0,depthTest:!1});this.timerSprite=new Vl(e),this.timerSprite.scale.set(1.4,1.4,1),this.timerSprite.position.set(0,2.85,.4),this.mesh.add(this.timerSprite),this.renderTimerCanvas(1)}renderTimerCanvas(e,t=!0){if(!this.timerCanvas||!this.timerTexture)return;const n=this.timerCanvas.getContext("2d");if(!n)return;const i=this.timerCanvas.width,s=i/2,a=i/2,o=54,l=36;if(n.clearRect(0,0,i,i),!t){this.timerTexture.needsUpdate=!0;return}if(n.beginPath(),n.arc(s,a,o,0,Math.PI*2),n.arc(s,a,l,0,Math.PI*2,!0),n.fillStyle="rgba(50, 50, 50, 0.7)",n.fill(),e>0){let c,d,h;if(e>.5){const v=(e-.5)/.5;c=Math.round(255*(1-v)),d=220,h=0}else{const v=e/.5;c=255,d=Math.round(220*v),h=0}const u=`rgba(${c},${d},${h},0.95)`,f=-Math.PI/2,g=f+e*Math.PI*2;n.beginPath(),n.arc(s,a,o,f,g),n.arc(s,a,l,g,f,!0),n.closePath(),n.fillStyle=u,n.fill()}n.beginPath(),n.arc(s,a,6,0,Math.PI*2),n.fillStyle="rgba(255,255,255,0.6)",n.fill(),this.timerTexture.needsUpdate=!0}update(e){if(this.doorOpenProgress!==this.doorOpenTarget){const t=Math.min(1,Math.max(0,e)/sn.DOOR_ANIM_DURATION_SECONDS);this.doorOpenProgress<this.doorOpenTarget?this.doorOpenProgress=Math.min(this.doorOpenTarget,this.doorOpenProgress+t):this.doorOpenProgress=Math.max(this.doorOpenTarget,this.doorOpenProgress-t),this.applyDoorPose(this.doorOpenProgress)}if(this.animationType){this.animationElapsed+=Math.max(0,e);const t=sn.ANIM_DURATION_SECONDS,n=t<=0?1:Math.min(1,this.animationElapsed/t),i=this.animationType==="arrival"?1-Math.pow(1-n,3):n*n;if(this.mesh.position.z=this.animationStartZ+(this.animationEndZ-this.animationStartZ)*i,n>=1){const s=this.animationType,a=this.animationOnComplete;this.animationType=null,this.animationOnComplete=null,s==="arrival"?this.dock():this.state="gone",a?.()}}if(this.deadlineActive&&this.deadlineMaxTime>0){this.deadlineTime=Math.max(0,this.deadlineTime-e);const t=this.deadlineTime/this.deadlineMaxTime;if(t<.2){this.flashPhase+=e*Math.PI*4;const i=Math.sin(this.flashPhase)>=0;this.renderTimerCanvas(t,i)}else this.renderTimerCanvas(t)}}}function Io(r){const e=Math.floor(1+r*.5),t=Math.floor(2+r*.3),n=Math.max(1,e-1);return{truckCount:e,palletsPerTruck:t,timeBetweenTrucks:Math.max(8,15-r*.5),totalWaveTime:Math.min(180,60+r*10),outboundOrderCount:n}}const sc=180,sd=200,lo=300;class Kg{grid;scene;activeTrucks=[];waveTimer=0;trucksSpawned=0;totalPalletsToUnload=0;palletsUnloaded=0;isWaveActive=!1;isReorgWave=!1;isOutboundWave=!1;availableDocks=new Set;outboundActiveCallback=null;pendingOrdersCallback=null;automatedDockPositionsCallback=null;constructor(e,t){this.scene=e,this.grid=t}setOutboundActiveCallback(e){this.outboundActiveCallback=e}setPendingOrdersCallback(e){this.pendingOrdersCallback=e}setAutomatedDockPositionsCallback(e){this.automatedDockPositionsCallback=e}waveConfigOverride=null;setWaveConfigOverride(e){this.waveConfigOverride=e}getWaveConfig(e){return this.waveConfigOverride?this.waveConfigOverride:Io(e)}startWave(){const e=z.get("wave"),t=this.getWaveConfig(e);this.isWaveActive=!0,this.waveTimer=t.totalWaveTime,this.trucksSpawned=0,this.totalPalletsToUnload=t.truckCount*t.palletsPerTruck,this.palletsUnloaded=0;const n=this.grid.getCellsByType("dock").filter(i=>i.z===this.grid.height-1).map(i=>i.x);this.availableDocks=new Set(n),T.emit("wave:start",{wave:e,config:t,totalPallets:this.totalPalletsToUnload}),this.spawnTruck(t)}startReorgWave(){const e=z.get("wave");this.isWaveActive=!0,this.isReorgWave=!0,this.waveTimer=sc,this.trucksSpawned=0,this.totalPalletsToUnload=0,this.palletsUnloaded=0,T.emit("reorg:start",{wave:e,duration:sc})}startOutboundWave(e){const t=z.get("wave");this.isWaveActive=!0,this.isOutboundWave=!0,this.waveTimer=lo,this.trucksSpawned=0,this.totalPalletsToUnload=0,this.palletsUnloaded=0,T.emit("outbound-wave:start",{wave:t,totalPallets:e,duration:lo})}spawnTruck(e){if(this.trucksSpawned>=e.truckCount)return;const t=this.grid.getCellsByType("dock").filter(f=>f.z===this.grid.height-1).map(f=>f.x);this.availableDocks.clear();for(const f of t)this.activeTrucks.some(v=>v.dockPosition===f&&v.state!=="gone")||this.availableDocks.add(f);if(this.availableDocks.size===0)return;const n=this.automatedDockPositionsCallback?.()??new Set,i=Array.from(this.availableDocks).filter(f=>n.has(f)),s=i.length>0?i:Array.from(this.availableDocks),a=s[Math.floor(Math.random()*s.length)];this.availableDocks.delete(a);const o=this.grid.getCell(a,this.grid.height-1)?.entity||null,l=new sn(e.palletsPerTruck,a,o),c=z.get("wave"),d=[];for(let f=0;f<e.palletsPerTruck;f++)d.push(Xg(c));l.setSkus(d);const h=this.grid.gridToWorld(a,this.grid.height-1);l.mesh.position.set(h.x,0,h.z+3),l.mesh.rotation.y=Math.PI,this.scene.add(l.mesh),this.activeTrucks.push(l),this.trucksSpawned++,l.setDeadline(Math.max(0,this.waveTimer));const u=h.z+sn.CONTAINER_BACK_OFFSET;l.animateArrival(u,()=>{T.emit("truck:docked",{truck:l,dockX:a,dockZ:this.grid.height-1}),T.emit("truck:arrived",{dockPosition:a,pallets:e.palletsPerTruck})})}unloadPalletFromTruck(e){if(e.state!=="docked"&&e.state!=="unloading"||!e.unloadPallet())return null;this.palletsUnloaded++;const n=e.mesh.position.clone();return new A(n.x,0,n.z-1)}getActiveTrucks(){return this.activeTrucks.filter(e=>e.state==="docked"||e.state==="unloading")}getTruckWithPallets(){return this.activeTrucks.find(e=>(e.state==="docked"||e.state==="unloading")&&e.getPalletsRemaining()>0)||null}lastProgressUpdate=0;update(e){if(!this.isWaveActive){this.activeTrucks.length>0&&(this.activeTrucks.forEach(i=>i.update(e)),this.activeTrucks=this.activeTrucks.filter(i=>i.state==="gone"?(this.scene.remove(i.mesh),i.dispose(),!1):!0));return}if(this.waveTimer-=e,this.isReorgWave){this.lastProgressUpdate+=e,this.lastProgressUpdate>=1&&(this.lastProgressUpdate=0,T.emit("reorg:progress",{timeRemaining:Math.max(0,this.waveTimer)})),this.checkWaveComplete();return}if(this.isOutboundWave){this.lastProgressUpdate+=e,this.lastProgressUpdate>=1&&(this.lastProgressUpdate=0,T.emit("wave:progress",{timeRemaining:Math.max(0,this.waveTimer),palletsUnloaded:0,totalPallets:0,trucksRemaining:0})),this.checkWaveComplete();return}const t=this.getWaveConfig(z.get("wave"));for(this.lastProgressUpdate+=e,this.lastProgressUpdate>=1&&(this.lastProgressUpdate=0,T.emit("wave:progress",{timeRemaining:Math.max(0,this.waveTimer),palletsUnloaded:this.palletsUnloaded,totalPallets:this.totalPalletsToUnload,trucksRemaining:t.truckCount-this.trucksSpawned+this.activeTrucks.length}));this.trucksSpawned<t.truckCount;){const i=this.trucksSpawned;if(this.spawnTruck(t),this.trucksSpawned===i)break}this.activeTrucks.forEach(i=>i.update(e)),this.activeTrucks.forEach(i=>{i.state==="docked"&&i.getPalletsRemaining()===0&&(console.log("[WaveManager] Truck empty, initiating departure"),this.truckDepart(i))});const n=this.activeTrucks.length;this.activeTrucks=this.activeTrucks.filter(i=>i.state==="gone"?(console.log("[WaveManager] Removing gone truck from activeTrucks"),this.scene.remove(i.mesh),i.dispose(),!1):!0),n!==this.activeTrucks.length&&console.log(`[WaveManager] Trucks remaining: ${this.activeTrucks.length}, spawned: ${this.trucksSpawned}`),this.checkWaveComplete()}truckDepart(e){this.availableDocks.add(e.dockPosition),e.animateDeparture(1,()=>{console.log("[WaveManager] Truck departure animation complete, setting state to gone")})}checkWaveComplete(){if(this.isReorgWave)return this.waveTimer<=0?(console.log("[WaveManager] Reorg wave complete! Emitting reorg:complete event"),this.isWaveActive=!1,this.isReorgWave=!1,T.emit("reorg:complete"),!0):!1;if(this.isOutboundWave){const a=this.outboundActiveCallback?this.outboundActiveCallback():!1,o=this.pendingOrdersCallback?this.pendingOrdersCallback():!1;return this.waveTimer<=0||!a&&!o?(console.log("[WaveManager] Outbound wave complete! Emitting wave:complete event"),this.isWaveActive=!1,this.isOutboundWave=!1,z.completeWave(),!0):!1}const e=this.getWaveConfig(z.get("wave")),t=this.trucksSpawned>=e.truckCount,n=this.activeTrucks.length===0,i=this.outboundActiveCallback?this.outboundActiveCallback():!1,s=this.pendingOrdersCallback?this.pendingOrdersCallback():!1;return this.waveTimer<=0||t&&n&&!i&&!s?(this.activeTrucks.forEach(a=>{a.getPalletsRemaining()>0&&z.failInboundTruck(),(a.state==="docked"||a.state==="unloading")&&this.truckDepart(a)}),console.log("[WaveManager] Wave complete! Emitting wave:complete event"),this.isWaveActive=!1,z.completeWave(),!0):!1}isActive(){return this.isWaveActive}getWaveProgress(){return{palletsUnloaded:this.palletsUnloaded,totalPallets:this.totalPalletsToUnload,timeRemaining:Math.max(0,this.waveTimer)}}serialize(){return JSON.stringify({isWaveActive:this.isWaveActive,waveTimer:this.waveTimer,trucksSpawned:this.trucksSpawned,totalPalletsToUnload:this.totalPalletsToUnload,palletsUnloaded:this.palletsUnloaded})}restoreFromSave(e){try{const t=JSON.parse(e);this.isWaveActive=t.isWaveActive??!1,this.waveTimer=t.waveTimer??0,this.trucksSpawned=t.trucksSpawned??0,this.totalPalletsToUnload=t.totalPalletsToUnload??0,this.palletsUnloaded=t.palletsUnloaded??0}catch(t){console.error("Failed to restore wave state:",t)}}reset(){this.activeTrucks.forEach(e=>{this.scene.remove(e.mesh),e.dispose()}),this.activeTrucks=[],this.isWaveActive=!1,this.isReorgWave=!1,this.isOutboundWave=!1,this.trucksSpawned=0,this.palletsUnloaded=0,this.waveConfigOverride=null}}const Ms={general:10011097,unloading:16749824,storage:5025616,picking:10233776,loading:16007990};let tr=0;class Zg{pallets=new Map;skuCounts=new Map;registerPallet(e){const t=`plt-${++tr}`,n={id:t,sku:e};return this.pallets.set(t,n),this.skuCounts.set(e,(this.skuCounts.get(e)??0)+1),T.emit("inventory:pallet-registered",{palletId:t,sku:e}),n}removePallet(e){const t=this.pallets.get(e);if(!t)return null;this.pallets.delete(e);const n=this.skuCounts.get(t.sku)??0;return n>1?this.skuCounts.set(t.sku,n-1):this.skuCounts.delete(t.sku),T.emit("inventory:pallet-removed",{palletId:e,sku:t.sku}),t}getPallet(e){return this.pallets.get(e)??null}getSku(e){return this.pallets.get(e)?.sku??-1}getSkuCount(e){return this.skuCounts.get(e)??0}getAllSkuCounts(){return new Map(this.skuCounts)}getAvailableSkus(){return Array.from(this.skuCounts.entries()).filter(([,e])=>e>0).map(([e])=>e)}get totalPallets(){return this.pallets.size}serialize(){const e=[];for(const t of this.pallets.values())e.push(t);return JSON.stringify({pallets:e,nextId:tr})}deserialize(e){try{const t=JSON.parse(e);if(this.reset(),Array.isArray(t.pallets))for(const n of t.pallets)typeof n.id=="string"&&typeof n.sku=="number"&&(this.pallets.set(n.id,{id:n.id,sku:n.sku}),this.skuCounts.set(n.sku,(this.skuCounts.get(n.sku)??0)+1));typeof t.nextId=="number"&&(tr=t.nextId)}catch(t){console.error("[InventoryManager] Failed to deserialize:",t)}}reset(){this.pallets.clear(),this.skuCounts.clear(),tr=0}}const je=new Zg;class jt extends pi{_storageType="general";_allowedSku=null;wireframeMaterial=null;allowedSkuBadge=null;allowedSkuBadgeRing=null;allowedSkuBadgeAnchor=new A(0,.02,0);get storageType(){return this._storageType}set storageType(e){this._storageType=e,this.wireframeMaterial&&this.wireframeMaterial.color.setHex(Ms[e])}get allowedSku(){return this._allowedSku}set allowedSku(e){this._allowedSku=e==null||e<0?null:Math.floor(e),this.updateAllowedSkuBadge()}allowsSku(e){return this._allowedSku===null?!0:e>=0&&this._allowedSku===e}getStoredSkus(){return this.getAllPalletIds().map(e=>je.getSku(e))}hasSku(e){return this.getAllPalletIds().some(t=>je.getSku(t)===e)}getPalletIdForSku(e){const t=this.getAllPalletIds();for(let n=t.length-1;n>=0;n--)if(je.getSku(t[n])===e)return t[n];return null}getTopSku(){const e=this.getTopPalletId();return e?je.getSku(e):-1}getTopPalletId(){const e=this.getAllPalletIds();return e.length>0?e[e.length-1]:""}setAllowedSkuBadgeAnchor(e,t,n){this.allowedSkuBadgeAnchor.set(e,t,n),this.ensureAllowedSkuBadge(),this.updateAllowedSkuBadge()}ensureAllowedSkuBadge(){if(this.allowedSkuBadge&&this.allowedSkuBadge.parent===this.mesh)return;const e=new Co(.09,24),t=new ye({color:16777215,emissive:0,roughness:.35,metalness:.15,side:Vt});this.allowedSkuBadge=new N(e,t),this.allowedSkuBadge.rotation.x=-Math.PI/2,this.allowedSkuBadge.name="allowed-sku-badge";const n=new Rr(.095,.12,24),i=new Ln({color:16777215,transparent:!0,opacity:.95,side:Vt});this.allowedSkuBadgeRing=new N(n,i),this.allowedSkuBadgeRing.rotation.x=-Math.PI/2,this.allowedSkuBadgeRing.name="allowed-sku-badge-ring",this.mesh.add(this.allowedSkuBadge),this.mesh.add(this.allowedSkuBadgeRing)}updateAllowedSkuBadge(){if(this.ensureAllowedSkuBadge(),!this.allowedSkuBadge||!this.allowedSkuBadgeRing)return;this.allowedSkuBadge.position.copy(this.allowedSkuBadgeAnchor),this.allowedSkuBadgeRing.position.copy(this.allowedSkuBadgeAnchor);const e=this._allowedSku!==null;if(this.allowedSkuBadge.visible=e,this.allowedSkuBadgeRing.visible=e,!e)return;const t=this._allowedSku,n=Vn[t]??16777215,i=this.allowedSkuBadge.material;i.color.setHex(n),i.emissive.setHex(n),i.emissiveIntensity=.28}}const fa=4,jg=8;class un extends jt{capacity=fa;storedPallets=0;ownedByStackerCrane=!1;storedPalletIds=[];get storedSkus(){return this.storedPalletIds.map(e=>je.getSku(e))}palletMeshes=[];levelHeights;constructor(e=fa){super("rack"),this.capacity=e,this.levelHeights=[],this.rebuildLevelHeights(),this.createMesh()}createMesh(){this.clearMesh();const e=this.levelHeights[this.capacity-1]+1.2,t=new te(.08,e,.08),n=new ye({color:2201331,roughness:.7,metalness:.5});[[-.45,e/2,-.45],[.45,e/2,-.45],[-.45,e/2,.45],[.45,e/2,.45]].forEach(([v,m,p])=>{const w=new N(t,n);w.position.set(v,m,p),w.castShadow=!0,w.receiveShadow=!0,this.mesh.add(w)});const s=new ye({color:16739125,roughness:.8,metalness:.3}),a=.04,o=1;this.levelHeights.forEach((v,m)=>{const p=v-.05,w=new N(new te(o,a,a),s);w.position.set(0,p,o/2),w.castShadow=!0,w.receiveShadow=!0,this.mesh.add(w);const b=new N(new te(o,a,a),s);b.position.set(0,p,-o/2),b.castShadow=!0,b.receiveShadow=!0,this.mesh.add(b);const S=new N(new te(a,a,o),s);S.position.set(-o/2,p,0),S.castShadow=!0,S.receiveShadow=!0,this.mesh.add(S);const I=new N(new te(a,a,o),s);I.position.set(o/2,p,0),I.castShadow=!0,I.receiveShadow=!0,this.mesh.add(I);const k=Math.sqrt(o*o+o*o),P=new N(new te(k,a,a),s);P.position.set(0,p,0),P.rotation.y=Math.PI/4,P.castShadow=!0,P.receiveShadow=!0,this.mesh.add(P);const R=new N(new te(k,a,a),s);R.position.set(0,p,0),R.rotation.y=-Math.PI/4,R.castShadow=!0,R.receiveShadow=!0,this.mesh.add(R);const M=Pt();M.position.set(0,v,0),M.visible=!1,M.name=`pallet-level-${m}`,this.mesh.add(M),this.palletMeshes.push(M)});const l=new ye({color:2201331,roughness:.7,metalness:.5}),c=[0,...this.levelHeights];for(let v=0;v<this.levelHeights.length;v++){const m=c[v],p=this.levelHeights[v],w=p-m,b=(m+p)/2,S=Math.sqrt(.9*.9+w*w),I=Math.atan2(w,.9),k=new te(S,.04,.04),P=new N(k,l);P.position.set(0,b,.45),P.rotation.z=I,P.castShadow=!0,this.mesh.add(P);const R=new N(k,l);R.position.set(0,b,.45),R.rotation.z=-I,R.castShadow=!0,this.mesh.add(R);const M=new N(k,l);M.position.set(0,b,-.45),M.rotation.z=I,M.castShadow=!0,this.mesh.add(M);const y=new N(k,l);y.position.set(0,b,-.45),y.rotation.z=-I,y.castShadow=!0,this.mesh.add(y)}const d=new te(1.1,.08,1.1),h=new ye({color:13983232,roughness:.9,metalness:.2}),u=new N(d,h);u.position.set(0,.04,0),u.castShadow=!0,u.receiveShadow=!0,this.mesh.add(u);const f=new Ao(new Et(1.1,1.1));this.wireframeMaterial=new fi({color:Ms[this._storageType]});const g=new _s(f,this.wireframeMaterial);g.rotation.x=-Math.PI/2,g.position.y=.1,g.name="storage-type-wireframe",this.mesh.add(g),this.setAllowedSkuBadgeAnchor(0,.12,0)}canUpgradeHeight(){return!this.ownedByStackerCrane&&this.capacity===fa}upgradeHeight(){return this.canUpgradeHeight()?(this.capacity=jg,this.rebuildLevelHeights(),this.createMesh(),this.updateVisual(),!0):!1}canStore(){return this.storedPallets<this.capacity}store(e){if(!this.canStore())return!1;let t=e;if(!t){if(!this.allowsSku(0))return!1;t=je.registerPallet(0).id}const n=je.getSku(t);return this.allowsSku(n)?(this.storedPallets++,this.storedPalletIds.push(t),this.updateVisual(),!0):!1}retrieveTopPalletId(){if(this.storedPallets<=0)return null;const e=this.storedPalletIds.pop()??null;return this.storedPallets--,this.updateVisual(),e}retrievePalletById(e){for(let t=this.storedPalletIds.length-1;t>=0;t--)if(this.storedPalletIds[t]===e)return this.storedPalletIds.splice(t,1),this.storedPallets--,this.updateVisual(),e;return null}retrieveBySku(e){const t=this.getPalletIdForSku(e);return t?this.retrievePalletById(t)!==null:!1}retrieve(){return this.retrieveTopPalletId()!==null}getAllPalletIds(){return this.storedPalletIds}getPickupHeightForPalletId(e){const t=this.storedPalletIds.lastIndexOf(e);return t<0?0:this.levelHeights[t]??0}getStorageInfo(){return{stored:this.storedPallets,capacity:this.capacity}}clearMesh(){this.mesh.clear(),this.palletMeshes=[]}rebuildLevelHeights(){this.levelHeights.length=0;for(let e=0;e<this.capacity;e++)this.levelHeights.push(.2+e*1.2)}updateVisual(){for(let e=0;e<this.capacity;e++)if(this.palletMeshes[e])if(e<this.storedPallets){for(this.palletMeshes[e].parent,this.palletMeshes[e].position.y,this.palletMeshes[e].name;this.palletMeshes[e].children.length>0;)this.palletMeshes[e].remove(this.palletMeshes[e].children[0]);const t=this.storedPalletIds[e]??"",n=t?je.getSku(t):0,i=Pt(n>=0?n:0);for(;i.children.length>0;){const s=i.children[0];i.remove(s),this.palletMeshes[e].add(s)}this.palletMeshes[e].visible=!0}else this.palletMeshes[e].visible=!1}getPickupHeight(){if(this.storedPallets<=0)return 0;const e=this.storedPallets-1;return this.levelHeights[e]}getStorageHeight(){return this.storedPallets>=this.capacity?this.levelHeights[this.capacity-1]:this.levelHeights[this.storedPallets]}getRackAccessData(){const e=this.getWorldPosition(),t=this.mesh.rotation.y,n=new A(-1.5,0,0);n.applyAxisAngle(new A(0,1,0),t);const i=e.clone().add(n),s=t+Math.PI/2,a=new A(1.5,0,0);a.applyAxisAngle(new A(0,1,0),t);const o=e.clone().add(a),l=t-Math.PI/2;return{left:i,right:o,leftRotation:s,rightRotation:l}}getAccessPositions(){const e=this.getRackAccessData();return[{position:e.left,rotation:e.leftRotation},{position:e.right,rotation:e.rightRotation}]}toData(){return{...super.toData(),storageType:this.storageType,storedPallets:this.storedPallets,capacity:this.capacity,storedPalletIds:[...this.storedPalletIds],allowedSku:this.allowedSku}}onPlaced(e,t){e.pickingManager.registerRack(this,t.gridX,t.gridZ)}onRemoved(e,t){e.pickingManager.unregisterRack(t.gridX,t.gridZ)}}class pa extends jt{hasPallet=!1;storedPalletId="";palletMesh=null;get storedSku(){return this.storedPalletId?je.getSku(this.storedPalletId):-1}constructor(){super("floor-slot"),this.createMesh()}createMesh(){const e=new Et(.9,.9),t=new ye({color:4871528,roughness:.9,metalness:.1,side:Vt}),n=new N(e,t);n.rotation.x=-Math.PI/2,n.position.y=.01,n.receiveShadow=!0,this.mesh.add(n);const i=new Ao(new Et(1,1));this.wireframeMaterial=new fi({color:Ms[this._storageType]});const s=new _s(i,this.wireframeMaterial);s.rotation.x=-Math.PI/2,s.position.y=.02,this.mesh.add(s),this.palletMesh=Pt(),this.palletMesh.visible=!1,this.palletMesh.name="floor-slot-pallet",this.mesh.add(this.palletMesh),this.setAllowedSkuBadgeAnchor(0,.03,0)}canStore(){return!this.hasPallet}store(e){if(!this.canStore())return!1;let t=e;if(!t){if(!this.allowsSku(0))return!1;t=je.registerPallet(0).id}const n=je.getSku(t);return this.allowsSku(n)?(this.hasPallet=!0,this.storedPalletId=t,this.updateVisual(),!0):!1}retrieveTopPalletId(){if(!this.hasPallet)return null;const e=this.storedPalletId;return this.hasPallet=!1,this.storedPalletId="",this.updateVisual(),e||null}retrievePalletById(e){return!this.hasPallet||this.storedPalletId!==e?null:(this.hasPallet=!1,this.storedPalletId="",this.updateVisual(),e)}retrieve(){return this.retrieveTopPalletId()!==null}getAllPalletIds(){return this.hasPallet?[this.storedPalletId]:[]}getStorageInfo(){return{stored:this.hasPallet?1:0,capacity:1}}updateVisual(){if(this.palletMesh)if(this.hasPallet){for(;this.palletMesh.children.length>0;)this.palletMesh.remove(this.palletMesh.children[0]);const e=Pt(this.storedSku>=0?this.storedSku:0);for(;e.children.length>0;){const t=e.children[0];e.remove(t),this.palletMesh.add(t)}this.palletMesh.visible=!0}else this.palletMesh.visible=!1}getAccessPositions(){const e=this.getWorldPosition(),t=1;return[{position:new A(e.x,0,e.z+t),rotation:Math.PI},{position:new A(e.x,0,e.z-t),rotation:0},{position:new A(e.x+t,0,e.z),rotation:-Math.PI/2},{position:new A(e.x-t,0,e.z),rotation:Math.PI/2}]}toData(){return{...super.toData(),storageType:this.storageType,hasPallet:this.hasPallet,storedPalletId:this.storedPalletId,allowedSku:this.allowedSku}}onPlaced(e,t){e.pickingManager.registerFloorSlot(this,t.gridX,t.gridZ)}onRemoved(e,t){e.pickingManager.unregisterFloorSlot(t.gridX,t.gridZ)}}class ht extends jt{direction="north";speed=1;hasPallet=!1;storedPalletId="";isAutomationEntrance=!1;isAutomationExit=!1;get storedSku(){return this.storedPalletId?je.getSku(this.storedPalletId):-1}static _sharedGeos=null;static _sharedMats=null;static initShared(){if(ht._sharedGeos)return;const e=.38,t=.038,n=e*2-.06;ht._sharedGeos={railWeb:new te(.045,.1,.9),railTopFlange:new te(.1,.025,.9),railBotFlange:new te(.1,.025,.9),legPost:new te(.045,.14,.045),legFoot:new te(.1,.02,.1),brace:new te(e*2-.04,.025,.03),rollerBarrel:new et(t,t,n,12),rollerCap:new et(t+.005,t+.005,.025,12),motor:new te(.12,.1,.18),motorBracket:new te(.04,.06,.12),arrow:new Ar(.08,.16,4),wireframe:new Ao(new Et(1,1))},ht._sharedMats={aluminum:new ye({color:11581633,roughness:.35,metalness:.85}),chrome:new ye({color:13949148,roughness:.2,metalness:.95}),darkFrame:new ye({color:3817287,roughness:.7,metalness:.5}),arrow:new ye({color:5164484,roughness:.3,metalness:.7})}}nextConveyor=null;rollers=[];animationOffset=0;transferCooldown=0;palletMesh=null;isTransferring=!1;transferAnimT=0;transferTarget=null;static TRANSFER_ANIM_DURATION=.4;_reservedIncoming=0;constructor(e="north"){super("conveyor"),this.direction=e,this.createMesh(),this.setDirection(e)}createMesh(){ht.initShared();const e=ht._sharedGeos,t=ht._sharedMats,n=.18,i=.235,s=.38,a=.038,o=s*2-.06;for(const g of[-1,1]){const v=new N(e.railWeb,t.aluminum);v.position.set(g*s,n,0),v.castShadow=!0,this.mesh.add(v);const m=new N(e.railTopFlange,t.aluminum);m.position.set(g*s,n+.062,0),this.mesh.add(m);const p=new N(e.railBotFlange,t.aluminum);p.position.set(g*s,n-.062,0),this.mesh.add(p)}for(const g of[-.3,.3]){for(const m of[-s,s]){const p=new N(e.legPost,t.darkFrame);p.position.set(m,.07,g),p.castShadow=!0,this.mesh.add(p);const w=new N(e.legFoot,t.darkFrame);w.position.set(m,.01,g),this.mesh.add(w)}const v=new N(e.brace,t.darkFrame);v.position.set(0,.13,g),this.mesh.add(v)}const l=7,c=.85/(l-1);for(let g=0;g<l;g++){const v=-.425+g*c,m=new N(e.rollerBarrel,t.chrome);m.rotation.z=Math.PI/2,m.position.set(0,i,v),m.castShadow=!0,this.mesh.add(m),this.rollers.push(m);for(const p of[-1,1]){const w=new N(e.rollerCap,t.darkFrame);w.rotation.z=Math.PI/2,w.position.set(p*(o/2+.013),i,v),this.mesh.add(w)}}const d=new N(e.motor,t.darkFrame);d.position.set(s+.065,n,-.35),d.castShadow=!0,this.mesh.add(d);const h=new N(e.motorBracket,t.aluminum);h.position.set(s+.022,n,-.35),this.mesh.add(h);const u=new N(e.arrow,t.arrow);u.rotation.x=Math.PI/2,u.position.set(0,i+.08,.25),u.name="directionArrow",this.mesh.add(u),this.palletMesh=Pt(),this.palletMesh.visible=!1,this.palletMesh.position.y=i+a,this.palletMesh.name="conveyor-pallet",this.mesh.add(this.palletMesh),this.wireframeMaterial=new fi({color:Ms[this._storageType],depthTest:!1});const f=new _s(e.wireframe,this.wireframeMaterial);f.rotation.x=-Math.PI/2,f.position.y=.001,f.name="storage-type-wireframe",this.mesh.add(f),this.setAllowedSkuBadgeAnchor(0,.01,0)}setDirection(e){this.direction=e;const t={north:Math.PI,south:0,east:Math.PI/2,west:-Math.PI/2};this.mesh.rotation.y=t[e]}update(e){if(this.isTransferring){this.advanceTransferAnimation(e);return}if(this.hasPallet&&this.nextConveyor){if(this.transferCooldown-=e,this.transferCooldown<=0){const t=-this.transferCooldown;this.nextConveyor.canStore()&&(this.isTransferring=!0,this.transferAnimT=0,this.transferTarget=this.nextConveyor,this.nextConveyor.reserveIncoming(),this.advanceTransferAnimation(t)),this.transferCooldown=1/this.speed}}else this.transferCooldown=0}advanceTransferAnimation(e){if(this.animationOffset+=e*this.speed*2,this.rollers.forEach((t,n)=>{t.rotation.x=this.animationOffset+n*.5}),this.transferAnimT+=e/ht.TRANSFER_ANIM_DURATION,this.transferAnimT>=1){this.isTransferring=!1,this.transferAnimT=0,this.palletMesh&&this.palletMesh.position.set(0,.2,0);const t=this.retrieveTopPalletId();this.transferTarget&&(this.transferTarget.releaseIncoming(),t&&(this.transferTarget.storedPalletId=t,this.transferTarget.storeFromWorldDir())),this.transferTarget=null}else this.palletMesh&&(this.palletMesh.position.z=this.transferAnimT*1)}storeFromWorldDir(e,t){if(!this.canStore())return!1;if(!this.storedPalletId){if(!this.allowsSku(0))return!1;this.storedPalletId=je.registerPallet(0).id}const n=je.getSku(this.storedPalletId);return this.allowsSku(n)?(this.hasPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0,this.palletMesh.position.set(0,.2,0)),this.updatePalletVisual(),!0):!1}canStore(){return!this.hasPallet&&this._reservedIncoming===0}reserveIncoming(){this._reservedIncoming++}releaseIncoming(){this._reservedIncoming=Math.max(0,this._reservedIncoming-1)}store(e){if(!this.canStore())return!1;let t=e;if(!t){if(!this.allowsSku(0))return!1;t=je.registerPallet(0).id}const n=je.getSku(t);return this.allowsSku(n)?(this.hasPallet=!0,this.storedPalletId=t,this.palletMesh&&(this.palletMesh.visible=!0),this.updatePalletVisual(),!0):!1}retrieveTopPalletId(){if(!this.hasPallet)return null;const e=this.storedPalletId;return this.hasPallet=!1,this.storedPalletId="",this.palletMesh&&(this.palletMesh.visible=!1),e||null}retrievePalletById(e){return!this.hasPallet||this.storedPalletId!==e?null:(this.hasPallet=!1,this.storedPalletId="",this.palletMesh&&(this.palletMesh.visible=!1),e)}retrieve(){return this.retrieveTopPalletId()!==null}getAllPalletIds(){return this.hasPallet?[this.storedPalletId]:[]}updatePalletVisual(){if(!this.palletMesh||!this.hasPallet)return;for(;this.palletMesh.children.length>0;)this.palletMesh.remove(this.palletMesh.children[0]);const e=Pt(this.storedSku>=0?this.storedSku:0);for(;e.children.length>0;){const t=e.children[0];e.remove(t),this.palletMesh.add(t)}}getStorageInfo(){return{stored:this.hasPallet?1:0,capacity:1}}static linkableOffsets={north:{dx:0,dz:-1},south:{dx:0,dz:1},east:{dx:1,dz:0},west:{dx:-1,dz:0}};getOutputSlots(){return[{slot:0,offset:ht.linkableOffsets[this.direction]}]}getInputOffsets(){return null}setLink(e,t){this.nextConveyor=t}getLink(e){return this.nextConveyor}isUnlinked(){return this.nextConveyor===null}hasLinkTo(e){return this.nextConveyor===e}unlinkTarget(e){this.nextConveyor===e&&(this.nextConveyor=null)}clearLinks(){this.nextConveyor=null}getAccessPositions(){const e=[];return(this.isAutomationEntrance||!this.isUnlinked())&&e.push({position:this.getInputPosition(),rotation:this.getInputAccessRotation()}),(this.isAutomationExit||this.isUnlinked())&&e.push({position:this.getOutputPosition(),rotation:this.getOutputAccessRotation()}),e}getOutputAccessRotation(){switch(this.direction){case"north":return 0;case"south":return Math.PI;case"east":return-Math.PI/2;case"west":return Math.PI/2;default:return 0}}getInputAccessRotation(){const t=this.getOutputAccessRotation()+Math.PI;return t>Math.PI?t-Math.PI*2:t}getAccessRotation(){return this.getOutputAccessRotation()}toData(){return{...super.toData(),direction:this.direction,storageType:this.storageType,hasPallet:this.hasPallet,storedPalletId:this.storedPalletId,allowedSku:this.allowedSku}}onPlaced(e,t){e.conveyorManager.register(this,t.gridX,t.gridZ),e.conveyorManager.linkConveyor(this,t.gridX,t.gridZ)}onRemoved(e,t){e.conveyorManager.unregister(t.gridX,t.gridZ),e.automatedDocks.forEach(n=>{n.connectedConveyor===this&&(n.connectedConveyor=null)}),this.isAutomationEntrance=!1,this.isAutomationExit=!1}getOutputPosition(){const e=new A;switch(this.direction){case"north":e.z=-1;break;case"south":e.z=1;break;case"east":e.x=1;break;case"west":e.x=-1;break}return this.mesh.position.clone().add(e)}getInputPosition(){const e=new A;switch(this.direction){case"north":e.z=1;break;case"south":e.z=-1;break;case"east":e.x=-1;break;case"west":e.x=1;break}return this.mesh.position.clone().add(e)}}class Gt extends ht{diverterOutputs=[null,null,null];rrIndex=0;currentOutputIndex=0;static _diverterArrowGeo=null;static _diverterArrowMat=null;static getDiverterArrowGeo(){return Gt._diverterArrowGeo||(Gt._diverterArrowGeo=new Ar(.07,.15,4)),Gt._diverterArrowGeo}static getDiverterArrowMat(){return Gt._diverterArrowMat||(Gt._diverterArrowMat=new ye({color:16739125,roughness:.3,metalness:.7})),Gt._diverterArrowMat}constructor(e="south"){super(e),this.type="diverter",this.mesh.userData.entityType="diverter",this.addDiverterVisuals()}addDiverterVisuals(){const e=Gt.getDiverterArrowGeo(),t=Gt.getDiverterArrowMat(),n=[{pos:[0,.32,.25],rotY:0},{pos:[.25,.32,0],rotY:-Math.PI/2},{pos:[-.25,.32,0],rotY:Math.PI/2}];for(const{pos:s,rotY:a}of n){const o=new N(e,t);o.rotation.x=Math.PI/2,o.rotation.z=a,o.position.set(...s),o.name="diverterArrow",this.mesh.add(o)}const i=this.mesh.getObjectByName("directionArrow");i&&(i.visible=!1)}pickNextOutput(){const e=this.storedSku;for(let t=0;t<this.diverterOutputs.length;t++){const n=(this.rrIndex+t)%this.diverterOutputs.length,i=this.diverterOutputs[n];if(i!==null&&i.canStore()&&i.allowedSku!==null&&i.allowedSku===e)return this.rrIndex=(n+1)%this.diverterOutputs.length,{conveyor:i,index:n}}for(let t=0;t<this.diverterOutputs.length;t++){const n=(this.rrIndex+t)%this.diverterOutputs.length,i=this.diverterOutputs[n];if(i!==null&&i.canStore()&&i.allowedSku===null)return this.rrIndex=(n+1)%this.diverterOutputs.length,{conveyor:i,index:n}}return null}update(e){const t=this.nextConveyor;this.nextConveyor=null;try{super.update(e)}finally{this.nextConveyor=t}if(this.isTransferring)return;if(!this.hasPallet){this.transferCooldown=0;return}const n=this.pickNextOutput();if(!n)return;const{conveyor:i,index:s}=n;if(this.transferCooldown-=e,this.transferCooldown<=0){const a=-this.transferCooldown;i.canStore()&&(this.isTransferring=!0,this.transferAnimT=0,this.transferTarget=i,this.currentOutputIndex=s,i.reserveIncoming(),this.advanceTransferAnimation(a)),this.transferCooldown=1/this.speed}}advanceTransferAnimation(e){if(this.animationOffset+=e*this.speed*2,this.rollers.forEach((t,n)=>{t.rotation.x=this.animationOffset+n*.5}),this.transferAnimT+=e/ht.TRANSFER_ANIM_DURATION,this.transferAnimT>=1){this.isTransferring=!1,this.transferAnimT=0;const t=this.palletMesh;t&&t.position.set(0,.2,0);const n=this.retrieveTopPalletId();this.transferTarget&&(this.transferTarget.releaseIncoming(),n&&(this.transferTarget.storedPalletId=n,this.transferTarget.storeFromWorldDir()||(this.transferTarget.storedPalletId="",this.storedPalletId=n,this.hasPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)))),this.transferTarget=null}else{const t=this.palletMesh;if(t){const n=this.transferAnimT;switch(this.currentOutputIndex){case 0:t.position.set(0,.2,n*1);break;case 1:t.position.set(n*1,.2,0);break;case 2:t.position.set(-n*1,.2,0);break}}}}storeFromWorldDir(e,t){return e!==void 0&&t!==void 0&&!this.isFromBehind(e,t)?!1:super.storeFromWorldDir(e,t)}isFromBehind(e,t){switch(this.direction){case"south":return t>0;case"north":return t<0;case"east":return e>0;case"west":return e<0}}getOutputSlots(){const e=Gt.getOutputOffsets(this.direction);return[{slot:0,offset:e.front},{slot:1,offset:e.left},{slot:2,offset:e.right}]}getInputOffsets(){return[Gt.getOutputOffsets(this.direction).behind]}setLink(e,t){this.diverterOutputs[e]=t}getLink(e){return this.diverterOutputs[e]??null}isUnlinked(){return this.diverterOutputs.every(e=>e===null)}hasLinkTo(e){return this.diverterOutputs.includes(e)}unlinkTarget(e){for(let t=0;t<this.diverterOutputs.length;t++)this.diverterOutputs[t]===e&&(this.diverterOutputs[t]=null)}clearLinks(){this.diverterOutputs=[null,null,null],this.nextConveyor=null}static getOutputOffsets(e){switch(e){case"south":return{front:{dx:0,dz:1},left:{dx:1,dz:0},right:{dx:-1,dz:0},behind:{dx:0,dz:-1}};case"north":return{front:{dx:0,dz:-1},left:{dx:-1,dz:0},right:{dx:1,dz:0},behind:{dx:0,dz:1}};case"east":return{front:{dx:1,dz:0},left:{dx:0,dz:-1},right:{dx:0,dz:1},behind:{dx:-1,dz:0}};case"west":return{front:{dx:-1,dz:0},left:{dx:0,dz:1},right:{dx:0,dz:-1},behind:{dx:1,dz:0}}}}}var ot=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return r},Out:function(r){return r},InOut:function(r){return r}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-ot.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?ot.Bounce.In(r*2)*.5:ot.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),us=function(){return performance.now()},Lo=(function(){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,s=t;i<s.length;i++){var a=s[i];(e=a._group)===null||e===void 0||e.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},r.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){var s=i[n];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},r.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},r.prototype.update=function(e,t){e===void 0&&(e=us()),t===void 0&&(t=!0);var n=Object.keys(this._tweens);if(n.length!==0)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]],a=!t;s&&s.update(e,a)===!1&&!t&&this.remove(s)}n=Object.keys(this._tweensAddedDuringUpdate)}},r})(),co={Linear:function(r,e){var t=r.length-1,n=t*e,i=Math.floor(n),s=co.Utils.Linear;return e<0?s(r[0],r[1],n):e>1?s(r[t],r[t-1],t-n):s(r[i],r[i+1>t?t:i+1],n-i)},Utils:{Linear:function(r,e,t){return(e-r)*t+r}}},rd=(function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r})(),ho=new Lo,Ot=(function(){function r(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ot.Linear.None,this._interpolationFunction=co.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=rd.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=ho,ho.add(this))}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=us()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var s in this._valuesEnd)i[s]=this._valuesEnd[s];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,n,i,s){for(var a in n){var o=e[a],l=Array.isArray(o),c=l?"array":typeof o,d=!l&&Array.isArray(n[a]);if(!(c==="undefined"||c==="function")){if(d){var h=n[a];if(h.length===0)continue;for(var u=[o],f=0,g=h.length;f<g;f+=1){var v=this._handleRelativeValue(o,h[f]);if(isNaN(v)){d=!1,console.warn("Found invalid interpolation list. Skipping.");break}u.push(v)}d&&(n[a]=u)}if((c==="object"||l)&&o&&!d){t[a]=l?[]:{};var m=o;for(var p in m)t[a][p]=m[p];i[a]=l?[]:{};var h=n[a];if(!this._isDynamic){var w={};for(var p in h)w[p]=h[p];n[a]=h=w}this._setupProperties(m,t[a],h,i[a],s)}else(typeof t[a]>"u"||s)&&(t[a]=o),l||(t[a]*=1),d?i[a]=n[a].slice().reverse():i[a]=t[a]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},r.prototype.pause=function(e){return e===void 0&&(e=us()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},r.prototype.resume=function(e){return e===void 0&&(e=us()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},r.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=ot.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=co.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var n=this,i;if(e===void 0&&(e=us()),t===void 0&&(t=r.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+((i=this._repeatDelayTime)!==null&&i!==void 0?i:this._delayTime),l=this._duration+this._repeat*o,c=function(){if(n._duration===0||a>l)return 1;var v=Math.trunc(a/o),m=a-v*o,p=Math.min(m/n._duration,1);return p===0&&a===n._duration?1:p},d=c(),h=this._easingFunction(d);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,d),this._duration===0||a>=this._duration)if(this._repeat>0){var u=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=u);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*u,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var f=0,g=this._chainedTweens.length;f<g;f++)this._chainedTweens[f].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,n,i){for(var s in n)if(t[s]!==void 0){var a=t[s]||0,o=n[s],l=Array.isArray(e[s]),c=Array.isArray(o),d=!l&&c;d?e[s]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(e[s],a,o,i):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*i))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r.autoStartOnUpdate=!1,r})();rd.nextId;var _n=ho;_n.getAll.bind(_n);_n.removeAll.bind(_n);_n.add.bind(_n);_n.remove.bind(_n);_n.update.bind(_n);const rc=1;function uo(r,e,t=Math.random){const n=Math.max(rc,r),i=Math.min(Math.max(e,0),1);if(i===0)return n;const a=Math.min(Math.max(t(),0),1)*2-1,o=n*i*a;return Math.max(rc,n+o)}class vt extends pi{static preActionDelayMs=140;static preActionDelayJitterRatio=.6;static pumpDurationMs=260;static pumpDurationJitterRatio=.2;static actionRandomSource=Math.random;state="idle";carryingPallet=!1;speed=2;allowedTaskTypes=null;innerMastHeight=2;outerMastHeight=1.8;forkMesh=null;palletIndicator=null;innerMastGroup=null;targetPosition=null;path=[];tweenGroup;elapsedTime=0;collisionCheckCallback=null;pathRecalculationCallback=null;failedMoveAttempts=0;maxFailedAttempts=5;isCurrentlyMoving=!1;retryTimer=0;retryInterval=.2;pumpAnimStartRotationX=null;constructor(e="forklift"){super(e),this.tweenGroup=new Lo,this.createMesh()}createMesh(){const e=new te(1,.6,1.4),t=new ye({color:16032353,roughness:.6,metalness:.4}),n=new N(e,t);n.position.set(0,.4,0),n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);const i=new te(.8,.6,.7),s=new ye({color:2963272,roughness:.4,metalness:.3}),a=new N(i,s);a.position.set(0,.95,-.2),a.castShadow=!0,this.mesh.add(a);const o=new ye({color:4871528,roughness:.7,metalness:.5}),l=new ye({color:5924472,roughness:.7,metalness:.5}),c=new te(.14,this.outerMastHeight,.14),d=new N(c,o);d.position.set(-.35,this.outerMastHeight/2,.65),d.castShadow=!0,this.mesh.add(d);const h=new N(c,o);h.position.set(.35,this.outerMastHeight/2,.65),h.castShadow=!0,this.mesh.add(h),this.innerMastGroup=new wt,this.innerMastGroup.position.set(0,.1,0);const u=new te(.1,this.innerMastHeight,.1),f=new N(u,l);f.position.set(-.35,this.innerMastHeight/2,.65),f.castShadow=!0,this.innerMastGroup.add(f);const g=new N(u,l);g.position.set(.35,this.innerMastHeight/2,.65),g.castShadow=!0,this.innerMastGroup.add(g);const v=new te(.82,.08,.08),m=new N(v,l);m.position.set(0,this.innerMastHeight,.65),m.castShadow=!0,this.innerMastGroup.add(m);const p=new te(.9,.05,1.2),w=new ye({color:7438486,roughness:.5,metalness:.7});this.forkMesh=new N(p,w),this.forkMesh.position.set(0,.25,1),this.forkMesh.castShadow=!0,this.innerMastGroup.add(this.forkMesh),this.mesh.add(this.innerMastGroup);const b=new et(.2,.2,.15,12),S=new ye({color:1712172,roughness:.9,metalness:.1});[[-.45,.2,-.5],[.45,.2,-.5],[-.4,.15,.5],[.4,.15,.5]].forEach(([k,P,R])=>{const M=new N(b,S);M.rotation.z=Math.PI/2,M.position.set(k,P,R),M.castShadow=!0,this.mesh.add(M)}),this.palletIndicator=Pt(),this.palletIndicator.position.set(0,.075,.25),this.palletIndicator.visible=!1,this.palletIndicator.traverse(k=>{k instanceof N&&(k.castShadow=!0)}),this.forkMesh.add(this.palletIndicator)}calculateRotation(e){let t=this.mesh.rotation.y;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;let n=e-t;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;const i=this.mesh.rotation.y+n,a=Math.abs(n)/3*1e3;return{finalAngle:i,duration:a}}setPath(e){this.path=[...e],this.failedMoveAttempts=0,this.isCurrentlyMoving=!1,this.retryTimer=0,this.path.length>0&&(this.state="moving",this.moveToNextPoint())}setCollisionCheckCallback(e){this.collisionCheckCallback=e}setPathRecalculationCallback(e){this.pathRecalculationCallback=e}moveToNextPoint(){if(this.path.length===0){this.state="idle";return}const e=this.path[0];if(this.collisionCheckCallback&&!this.collisionCheckCallback(e,this.id)){this.failedMoveAttempts++,this.failedMoveAttempts>=this.maxFailedAttempts&&this.pathRecalculationCallback&&(this.failedMoveAttempts=0,this.pathRecalculationCallback(this.id));return}this.failedMoveAttempts=0,this.path.shift(),this.targetPosition=e;const t=new A().subVectors(e,this.mesh.position).normalize();if(t.length()>.01){const n=Math.atan2(t.x,t.z),{finalAngle:i,duration:s}=this.calculateRotation(n);this.isCurrentlyMoving=!0,new Ot(this.mesh.rotation,this.tweenGroup).to({y:i},s).easing(ot.Quadratic.Out).onComplete(()=>{const o=this.mesh.position.distanceTo(e)/this.speed*1e3;new Ot(this.mesh.position,this.tweenGroup).to({x:e.x,z:e.z},o).easing(ot.Linear.None).onComplete(()=>{this.isCurrentlyMoving=!1,this.moveToNextPoint()}).start(this.elapsedTime)}).start(this.elapsedTime)}}pickUpPallet(e=0,t){this.carryingPallet||(this.state="loading",this.carryingPallet=!0,this.runActionWithJitterDelay(()=>this.moveFork(e,!0,t)))}dropPallet(e=0,t){this.carryingPallet&&(this.state="unloading",this.runActionWithJitterDelay(()=>this.moveFork(e,!1,t)))}runActionWithJitterDelay(e){const t=uo(vt.preActionDelayMs,vt.preActionDelayJitterRatio,vt.actionRandomSource);if(t<=1){e();return}const n={t:0};new Ot(n,this.tweenGroup).to({t:1},t).easing(ot.Linear.None).onComplete(e).start(this.elapsedTime)}alignForAccess(e,t){if(e===void 0){t();return}this.state="loading";const n=.3,s=n/.5*1e3,{finalAngle:a,duration:o}=this.calculateRotation(e);new Ot(this.mesh.rotation,this.tweenGroup).to({y:a},o).easing(ot.Quadratic.InOut).onComplete(()=>{this.moveForward(n,s,t)}).start(this.elapsedTime)}moveForward(e,t,n){const i=this.mesh.position.clone(),s=new A(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y)).multiplyScalar(e),a=i.add(s);new Ot(this.mesh.position,this.tweenGroup).to({x:a.x,z:a.z},t).easing(ot.Quadratic.InOut).onComplete(n).start(this.elapsedTime)}moveFork(e,t,n){const i=e-.05,s=1.2,a=this.innerMastHeight,o=.25;if(!(!this.forkMesh||!this.innerMastGroup))if(i>a){const l=i-a,d=Math.abs(l-this.innerMastGroup.position.y)/s*1e3;new Ot(this.innerMastGroup.position,this.tweenGroup).to({y:l},d).easing(ot.Linear.In).onComplete(()=>{const h=a,f=Math.abs(h-this.forkMesh.position.y)/s*1e3;new Ot(this.forkMesh.position,this.tweenGroup).to({y:h},f).easing(ot.Linear.In).onComplete(()=>{this.playHydraulicPumpAnimation(()=>{this.updatePalletVisibility(t),this.retractMast(o,s),n&&n()})}).start(this.elapsedTime)}).start(this.elapsedTime)}else{const c=Math.abs(i-this.forkMesh.position.y)/s*1e3;new Ot(this.forkMesh.position,this.tweenGroup).to({y:i},c).easing(ot.Linear.In).onComplete(()=>{this.playHydraulicPumpAnimation(()=>{this.updatePalletVisibility(t),this.retractMast(o,s),n&&n()})}).start(this.elapsedTime)}}playHydraulicPumpAnimation(e){const t=this.mesh.rotation.x;this.pumpAnimStartRotationX=t;const n=uo(vt.pumpDurationMs,vt.pumpDurationJitterRatio,vt.actionRandomSource),i={t:0};new Ot(i,this.tweenGroup).to({t:1},n).easing(ot.Quadratic.InOut).onUpdate(()=>{const s=Math.sin(i.t*Math.PI*4);this.mesh.rotation.x=t-Math.max(0,s)*.035}).onComplete(()=>{this.mesh.rotation.x=t,this.pumpAnimStartRotationX=null,e()}).start(this.elapsedTime)}updatePalletVisibility(e){this.palletIndicator&&(this.palletIndicator.visible=e,this.carryingPallet=this.palletIndicator.visible)}updateCarriedPalletSku(e){if(!this.palletIndicator)return;for(;this.palletIndicator.children.length>0;)this.palletIndicator.remove(this.palletIndicator.children[0]);const t=Pt(e);for(;t.children.length>0;){const n=t.children[0];t.remove(n),this.palletIndicator.add(n)}this.palletIndicator.traverse(n=>{n instanceof N&&(n.castShadow=!0)})}retractMast(e,t){const n=this.innerMastGroup.position.y/t*1e3,i=Math.abs(e-this.forkMesh.position.y)/t*1e3;new Ot(this.innerMastGroup.position,this.tweenGroup).to({y:.1},n).easing(ot.Linear.In).start(this.elapsedTime),new Ot(this.forkMesh.position,this.tweenGroup).to({y:e},i).easing(ot.Linear.In).onUpdate(()=>{}).onComplete(()=>{this.state="idle"}).start(this.elapsedTime)}update(e){this.elapsedTime+=e*1e3,this.tweenGroup.update(this.elapsedTime),this.pumpAnimStartRotationX!==null&&this.state==="moving"&&(this.mesh.rotation.x=this.pumpAnimStartRotationX,this.pumpAnimStartRotationX=null),(this.state==="moving"||this.path.length>0)&&!this.isCurrentlyMoving&&(this.retryTimer+=e,this.retryTimer>=this.retryInterval&&(this.retryTimer=0,this.moveToNextPoint()))}isIdle(){return this.state==="idle"&&this.path.length===0}toData(){return{...super.toData(),allowedTaskTypes:this.allowedTaskTypes??null}}onPlaced(e,t){e.pickingManager.registerWorker(this)}onRemoved(e,t){e.pickingManager.unregisterWorker(this.id)}}const ac={1:{speed:1.5,handlingSpeed:1.2,accessSpeed:.5,actionDurationMultiplier:1,movementAcceleration:0},2:{speed:2.1,handlingSpeed:1.6,accessSpeed:.65,actionDurationMultiplier:.78,movementAcceleration:0},3:{speed:3.4,handlingSpeed:1.6,accessSpeed:.8,actionDurationMultiplier:.78,movementAcceleration:1}},Ir=new Map;function Qg(r){const e=Ir.get(r);return e||(r===1?Jg():r===2?ev():tv())}function Jg(){const r=new wt,e=new ye({color:16234497,roughness:.5,metalness:.2}),t=new ye({color:13934592,roughness:.5,metalness:.25}),n=new ye({color:2042167,roughness:.7,metalness:.15}),i=new ye({color:1120295,roughness:.9,metalness:.05}),s=new te(.09,.045,.78),a=new et(.045,.045,.09,10);for(const g of[-.22,.22]){const v=new N(s,e);v.position.set(g,.0225,.06),v.castShadow=!0,r.add(v);const m=new N(a,e);m.rotation.x=Math.PI/2,m.position.set(g,.0225,.44),r.add(m)}const o=new N(new te(.54,.05,.12),t);o.position.set(0,.04,-.15),r.add(o);const l=new N(new te(.3,.14,.22),t);l.name="palletPumpTop",l.position.set(0,.07,-.33),l.castShadow=!0,r.add(l);const c=new N(new et(.018,.018,.68,8),n);c.name="palletTiller",c.position.set(0,.47,-.4),c.rotation.x=-.35,r.add(c);const d=new N(new et(.016,.016,.28,8),n);d.position.set(0,.84,-.53),d.rotation.z=Math.PI/2,r.add(d);const h=new et(.025,.025,.055,10),u=new et(.04,.04,.055,10);for(const g of[-.22,.22]){const v=new N(h,i);v.rotation.z=Math.PI/2,v.position.set(g,.025,.41),r.add(v)}for(const g of[-.1,.1]){const v=new N(u,i);v.rotation.z=Math.PI/2,v.position.set(g,.04,-.42),v.castShadow=!0,r.add(v)}const f=Pt();return f.name="palletTruckLoad",f.position.set(0,.055,.08),r.add(f),Ir.set(1,r),r}function ev(){const r=new wt,e=new ye({color:15228928,roughness:.35,metalness:.45}),t=new ye({color:12105912,roughness:.3,metalness:.65}),n=new ye({color:1710618,roughness:.6,metalness:.3}),i=new ye({color:1120295,roughness:.9,metalness:.05}),s=new te(.1,.05,.82),a=new et(.05,.05,.1,10);for(const b of[-.23,.23]){const S=new N(s,t);S.position.set(b,.025,.06),S.castShadow=!0,S.receiveShadow=!0,r.add(S);const I=new N(a,t);I.rotation.x=Math.PI/2,I.position.set(b,.025,.46),r.add(I)}const o=new N(new te(.58,.06,.14),t);o.position.set(0,.045,-.14),r.add(o);const l=new N(new te(.52,.38,.42),t);l.position.set(0,.19,-.34),l.castShadow=!0,l.receiveShadow=!0,r.add(l);const c=new N(new te(.52,.38,.04),e);c.position.set(0,.19,-.14),c.castShadow=!0,r.add(c);const d=new N(new te(.52,.06,.42),e);d.name="palletPumpTop",d.position.set(0,.41,-.34),d.castShadow=!0,r.add(d);const h=new N(new et(.026,.026,.72,10),n);h.name="palletTiller",h.position.set(0,.77,-.34),h.rotation.x=-.18,h.castShadow=!0,r.add(h);const u=new N(new et(.022,.022,.4,10),n);u.position.set(0,1.12,-.37),u.rotation.z=Math.PI/2,r.add(u);const f=new N(new et(.032,.028,.1,10),e);f.position.set(-.2,1.12,-.37),f.rotation.z=Math.PI/2,r.add(f);const g=new N(new et(.032,.028,.1,10),e);g.position.set(.2,1.12,-.37),g.rotation.z=Math.PI/2,r.add(g);const v=new et(.028,.028,.06,10),m=new et(.07,.07,.1,14);for(const b of[-.23,.23]){const S=new N(v,i);S.rotation.z=Math.PI/2,S.position.set(b,.028,.42),r.add(S)}const p=new N(m,i);p.rotation.z=Math.PI/2,p.position.set(0,.07,-.43),p.castShadow=!0,r.add(p);const w=Pt();return w.name="palletTruckLoad",w.position.set(0,.06,.08),r.add(w),Ir.set(2,r),r}function tv(){const r=new wt,e=new ye({color:15228928,roughness:.3,metalness:.5}),t=new ye({color:1710618,roughness:.5,metalness:.4}),n=new ye({color:11579568,roughness:.28,metalness:.7}),i=new ye({color:1118481,roughness:.65,metalness:.25}),s=new ye({color:855309,roughness:.9,metalness:.05}),a=new ye({color:13369344,roughness:.4,metalness:.3}),o=new te(.11,.055,.86),l=new et(.055,.055,.11,10);for(const y of[-.26,.26]){const C=new N(o,n);C.position.set(y,.0275,.06),C.castShadow=!0,C.receiveShadow=!0,r.add(C);const H=new N(l,n);H.rotation.x=Math.PI/2,H.position.set(y,.0275,.48),r.add(H)}const c=new N(new te(.64,.07,.16),n);c.position.set(0,.05,-.15),r.add(c);const d=new N(new te(.64,.72,.54),t);d.position.set(0,.36,-.42),d.castShadow=!0,d.receiveShadow=!0,r.add(d);const h=new te(.05,.62,.5),u=new N(h,e);u.position.set(-.345,.36,-.42),u.castShadow=!0,r.add(u);const f=new N(h,e);f.position.set(.345,.36,-.42),f.castShadow=!0,r.add(f);const g=new N(new te(.64,.72,.05),e);g.name="palletPumpTop",g.position.set(0,.36,-.16),g.castShadow=!0,r.add(g);const v=new N(new te(.2,.06,.02),a);v.position.set(.18,.55,-.135),r.add(v);const m=new N(new te(.62,.06,.38),i);m.position.set(0,.03,-.85),m.castShadow=!0,m.receiveShadow=!0,r.add(m);const p=new te(.56,.015,.04),w=new ye({color:3355443,roughness:.95,metalness:0});for(let y=0;y<4;y++){const C=new N(p,w);C.position.set(0,.065,-.7-y*.075),r.add(C)}const b=new te(.04,.14,.38),S=new N(b,t);S.position.set(-.33,.1,-.85),r.add(S);const I=new N(b,t);I.position.set(.33,.1,-.85),r.add(I);const k=new et(.085,.085,.12,14);for(const y of[-.13,.13]){const C=new N(k,s);C.rotation.z=Math.PI/2,C.position.set(y,.085,-.46),C.castShadow=!0,r.add(C)}const P=new et(.03,.03,.065,10);for(const y of[-.26,.26]){const C=new N(P,s);C.rotation.z=Math.PI/2,C.position.set(y,.03,.44),r.add(C)}const R=new et(.04,.04,.08,10);for(const y of[-.22,.22]){const C=new N(R,s);C.rotation.z=Math.PI/2,C.position.set(y,.04,-.87),r.add(C)}const M=Pt();return M.name="palletTruckLoad",M.position.set(0,.065,.08),r.add(M),Ir.set(3,r),r}class It extends pi{static operatorVisualTemplate=null;static pickUpDropDuration=1200;static actionDurationJitterRatio=.2;static actionRandomSource=Math.random;state="idle";speed=ac[1].speed;carryingPallet=!1;equipmentTier=1;allowedTaskTypes=null;headMesh=null;operatorVisual=null;palletIndicator=null;palletTiller=null;palletPumpTop=null;palletLoadMesh=null;path=[];pathStepIndex=0;pathStartedFromRest=!0;tweenGroup;walkAnimation=0;elapsedTime=0;constructor(){super("operator"),this.tweenGroup=new Lo,this.createMesh()}createMesh(){const e=It.getOperatorVisualTemplate().clone(!0);this.operatorVisual=e,this.mesh.add(e),this.headMesh=e.getObjectByName("operatorHead"),this.rebuildEquipmentVisual()}static getOperatorVisualTemplate(){if(It.operatorVisualTemplate)return It.operatorVisualTemplate;const e=new wt,t=new et(.2,.25,.65,8),n=new ye({color:5164484,roughness:.7,metalness:.2}),i=new N(t,n);i.position.set(0,.6,0),i.castShadow=!0,i.receiveShadow=!0,e.add(i);const s=new Ro(.15,12,12),a=new ye({color:16766650,roughness:.8,metalness:.1}),o=new N(s,a);o.name="operatorHead",o.position.set(0,1.09,0),o.castShadow=!0,e.add(o);const l=new et(.18,.15,.12,12),c=new ye({color:16032353,roughness:.5,metalness:.3}),d=new N(l,c);d.position.set(0,1.3,0),d.castShadow=!0,e.add(d);const h=new et(.08,.08,.35,6),u=new ye({color:2963272,roughness:.9,metalness:.1}),f=new N(h,u);f.position.set(-.1,.175,0),f.castShadow=!0,f.name="leftLeg",e.add(f);const g=new N(h,u);return g.position.set(.1,.175,0),g.castShadow=!0,g.name="rightLeg",e.add(g),It.operatorVisualTemplate=e,e}getEquipmentConfig(){return ac[this.equipmentTier]}setEquipmentTier(e){const t=Math.max(1,Math.min(3,Math.floor(e)));t!==this.equipmentTier&&(this.equipmentTier=t,this.speed=this.getEquipmentConfig().speed,this.rebuildEquipmentVisual())}rebuildEquipmentVisual(){this.palletIndicator&&this.mesh.remove(this.palletIndicator);const e=Qg(this.equipmentTier).clone(!0);e.position.set(0,0,.75),e.visible=!0,this.palletTiller=e.getObjectByName("palletTiller")??null,this.palletPumpTop=e.getObjectByName("palletPumpTop")??null,this.palletLoadMesh=e.getObjectByName("palletTruckLoad")??null,this.palletLoadMesh&&(this.palletLoadMesh.visible=this.carryingPallet),this.palletIndicator=e,this.mesh.add(this.palletIndicator)}setPath(e){this.pathStartedFromRest=this.state!=="walking",this.tweenGroup.removeAll(),this.path=[...e],this.pathStepIndex=0,this.path.length>0&&(this.state="walking",this.moveToNextPoint())}calculateRotation(e){let t=this.mesh.rotation.y;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;let n=e-t;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;const i=this.mesh.rotation.y+n,a=Math.abs(n)/3*1e3;return{finalAngle:i,duration:a}}moveToNextPoint(){if(this.path.length===0){this.state="idle";return}const e=this.path.shift(),t=this.pathStepIndex===0,n=this.path.length===0;this.pathStepIndex+=1;const i=new A().subVectors(e,this.mesh.position).normalize();if(i.length()>.01){const c=Math.atan2(i.x,i.z),{finalAngle:d,duration:h}=this.calculateRotation(c);new Ot(this.mesh.rotation,this.tweenGroup).to({y:d},h).easing(ot.Quadratic.Out).start(this.elapsedTime)}const a=this.mesh.position.distanceTo(e)/this.speed*1e3,l=this.getEquipmentConfig().movementAcceleration>0?t&&n?this.pathStartedFromRest?ot.Quadratic.InOut:ot.Quadratic.Out:t?this.pathStartedFromRest?ot.Quadratic.In:ot.Linear.None:n?ot.Quadratic.Out:ot.Linear.None:ot.Linear.None;new Ot(this.mesh.position,this.tweenGroup).to({x:e.x,z:e.z},a).easing(l).onComplete(()=>this.moveToNextPoint()).start(this.elapsedTime)}pickUpPallet(e=0,t){this.carryingPallet||(this.state="working",this.playPickingOrDroppingAnimation(!0,e,t))}dropPallet(e=0,t){this.carryingPallet&&(this.state="working",this.playPickingOrDroppingAnimation(!1,e,t))}alignForAccess(e,t){if(e===void 0){t();return}this.state="working";const{finalAngle:n,duration:i}=this.calculateRotation(e),s=this.getEquipmentConfig().accessSpeed,a=.3,o=a/s*1e3;new Ot(this.mesh.rotation,this.tweenGroup).to({y:n},i).easing(ot.Quadratic.InOut).onComplete(()=>this.moveForward(a,o,t)).start(this.elapsedTime)}moveForward(e,t,n){const i=this.mesh.position.clone(),s=new A(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y)).multiplyScalar(e),a=i.add(s);new Ot(this.mesh.position,this.tweenGroup).to({x:a.x,z:a.z},t).easing(ot.Quadratic.InOut).onComplete(n).start(this.elapsedTime)}retractPalletLoad(e,t,n){if(n&&n(),!this.palletLoadMesh){this.state="idle";return}const i=this.palletLoadMesh.position.y,s=300;if(this.palletLoadMesh.position.z=t,Math.abs(i-e)<.001){this.state="idle";return}new Ot(this.palletLoadMesh.position,this.tweenGroup).to({y:e},s).easing(ot.Quadratic.In).onComplete(()=>{this.state="idle"}).start(this.elapsedTime)}update(e){if(this.elapsedTime+=e*1e3,this.tweenGroup.update(this.elapsedTime),this.state==="walking"){this.walkAnimation+=e*10;const t=this.mesh.getObjectByName("leftLeg"),n=this.mesh.getObjectByName("rightLeg");t&&n&&(t.rotation.x=Math.sin(this.walkAnimation)*.3,n.rotation.x=Math.sin(this.walkAnimation+Math.PI)*.3)}else{const t=this.mesh.getObjectByName("leftLeg"),n=this.mesh.getObjectByName("rightLeg");t&&n&&(t.rotation.x=0,n.rotation.x=0)}}isIdle(){return this.state==="idle"&&this.path.length===0}playPickingOrDroppingAnimation(e,t=0,n){const i=this.palletTiller?.rotation.x??0,s=this.palletPumpTop?.rotation.x??0,a=this.operatorVisual?.position.y??0,o=this.palletLoadMesh?.position.y??0,l=this.palletLoadMesh?.position.z??0,c=uo(It.pickUpDropDuration*this.getEquipmentConfig().actionDurationMultiplier,It.actionDurationJitterRatio,It.actionRandomSource),d={t:0};new Ot(d,this.tweenGroup).to({t:1},c).easing(ot.Quadratic.InOut).onUpdate(()=>{const h=Math.sin(d.t*Math.PI*4);if(this.palletTiller&&(this.palletTiller.rotation.x=i+h*.16),this.palletPumpTop&&(this.palletPumpTop.rotation.x=s+h*.035),this.operatorVisual&&(this.operatorVisual.position.y=a-Math.max(0,h)*.02),this.palletLoadMesh)if(e)this.palletLoadMesh.position.y=o,this.palletLoadMesh.position.z=l,this.palletLoadMesh.visible=!0;else{const u=Math.sin(d.t*Math.PI*.5);this.palletLoadMesh.position.z=l+u*.15,this.palletLoadMesh.position.y=o+u*(t-o)}}).onComplete(()=>{this.palletTiller&&(this.palletTiller.rotation.x=i),this.palletPumpTop&&(this.palletPumpTop.rotation.x=s),this.operatorVisual&&(this.operatorVisual.position.y=a),this.carryingPallet=e,this.operatorVisual&&(this.operatorVisual.position.z=e?-.08:0),this.palletLoadMesh&&(this.palletLoadMesh.visible=e),this.retractPalletLoad(o,l,n)}).start(this.elapsedTime)}updateCarriedPalletSku(e){if(!this.palletLoadMesh)return;const t=this.palletLoadMesh.parent;if(!t)return;const n=this.palletLoadMesh.position.clone();t.remove(this.palletLoadMesh);const i=Pt(e);i.name="palletTruckLoad",i.position.copy(n),t.add(i),this.palletLoadMesh=i}dispose(){this.mesh.clear()}toData(){return{...super.toData(),allowedTaskTypes:this.allowedTaskTypes??null,equipmentTier:this.equipmentTier}}onPlaced(e,t){e.pickingManager.registerWorker(this)}onRemoved(e,t){e.pickingManager.unregisterWorker(this.id)}}class Do extends pi{constructor(e){super(e)}orientMesh(e,t){this.mesh.rotation.y=e===t-1?0:Math.PI}createBasePlate(e,t,n,i,s=0){const a=new te(e,t,n),o=new ye({color:i,roughness:.6,metalness:.3}),l=new N(a,o);return l.position.set(0,t/2,s),l.receiveShadow=!0,l}createHazardStripes(e,t,n,i,s,a){const o=new te(t,n,i),l=new ye({color:16766720}),c=[];for(let d=0;d<e;d++){const h=new N(o,l);h.position.set(0,.051,s+d*a),c.push(h)}return c}createBumpers(e,t,n,i,s=0){const a=new te(e,t,n),o=new ye({color:3355443}),l=new N(a,o);l.position.set(-i,t/2,s);const c=new N(a,o);return c.position.set(i,t/2,s),{left:l,right:c}}}class oc extends Do{dockedTruck=!1;constructor(){super("truck-dock"),this.createMesh()}canAcceptTruck(){return!this.dockedTruck}hasTruck(){return this.dockedTruck}createMesh(){const e=this.createBasePlate(.9,.05,.9,4020864,0);this.mesh.add(e),this.createHazardStripes(5,.9,.01,.1,-.4,.2).forEach(i=>this.mesh.add(i));const n=this.createBumpers(.1,.2,.8,.4,0);this.mesh.add(n.left),this.mesh.add(n.right)}}class xt extends Do{connectedConveyor=null;direction="north";inboundTruck=null;outboundTruck=null;outboundOrderId="";outboundQuantity=0;palletsLoaded=0;transferSku=0;transferPalletId="";static TRANSFER_INTERVAL=1.5;transferTimer=0;palletMesh=null;isTransferring=!1;transferAnimT=0;transferDirection=null;static TRANSFER_ANIM_DURATION=.8;constructor(){super("automated-truck-dock"),this.createMesh()}orientMesh(e,t){super.orientMesh(e,t),this.direction=e===t-1?"south":"north"}getOutputSlots(){const e=this.direction==="south"?-1:1;return[{slot:0,offset:{dx:0,dz:e}},{slot:1,offset:{dx:0,dz:e*2}}]}getInputOffsets(){const e=this.direction==="south"?-1:1;return[{dx:0,dz:e},{dx:0,dz:e*2}]}setLink(e,t){this.connectedConveyor=t}getLink(e){return this.connectedConveyor}isUnlinked(){return this.connectedConveyor===null}hasLinkTo(e){return this.connectedConveyor===e}unlinkTarget(e){this.connectedConveyor===e&&(this.connectedConveyor=null)}clearLinks(){this.connectedConveyor=null}canAcceptTruck(){return this.inboundTruck===null&&this.outboundTruck===null}hasTruck(){return this.inboundTruck!==null||this.outboundTruck!==null}setDockedTruck(e){this.inboundTruck=e,this.transferTimer=xt.TRANSFER_INTERVAL}setOutboundTruck(e,t,n){this.outboundTruck=e,this.outboundOrderId=t,this.outboundQuantity=n,this.palletsLoaded=0,this.transferTimer=xt.TRANSFER_INTERVAL}update(e){if(this.isTransferring){this.advanceTransferAnimation(e);return}if(this.inboundTruck){if(!this.connectedConveyor)return;if(this.inboundTruck.getPalletsRemaining()===0||this.inboundTruck.state==="departing"||this.inboundTruck.state==="gone"){this.inboundTruck=null;return}if(!this.connectedConveyor.canStore())return;if(this.transferTimer-=e,this.transferTimer<=0){const t=this.inboundTruck.unloadPallet();if(t){this.transferSku=t.sku;const n=je.registerPallet(t.sku);this.transferPalletId=n.id,this.startTransferAnimation("inbound"),this.transferTimer=xt.TRANSFER_INTERVAL}}return}if(this.outboundTruck){if(!this.connectedConveyor)return;if(this.outboundTruck.state==="departing"||this.outboundTruck.state==="gone"||this.palletsLoaded>=this.outboundQuantity){this.outboundTruck=null;return}if(!this.connectedConveyor.hasPallet||!this.outboundTruck.canLoadPallet())return;if(this.transferTimer-=e,this.transferTimer<=0){this.transferSku=this.connectedConveyor.storedSku>=0?this.connectedConveyor.storedSku:0;const t=this.connectedConveyor.retrieveTopPalletId();t&&(this.transferPalletId=t,this.startTransferAnimation("outbound"),this.transferTimer=xt.TRANSFER_INTERVAL)}}}startTransferAnimation(e){this.isTransferring=!0,this.transferAnimT=0,this.transferDirection=e,this.palletMesh&&(this.palletMesh.visible=!0,e==="inbound"?this.palletMesh.position.set(0,.1,0):this.palletMesh.position.set(0,.1,-1.5))}advanceTransferAnimation(e){if(this.transferAnimT+=e/xt.TRANSFER_ANIM_DURATION,this.transferAnimT>=1)this.isTransferring=!1,this.transferAnimT=0,this.palletMesh&&(this.palletMesh.visible=!1),this.transferDirection==="inbound"?this.connectedConveyor&&(this.connectedConveyor.store(this.transferPalletId),z.addStoredPallet()):this.transferDirection==="outbound"&&this.outboundTruck&&(z.removeStoredPallet(),this.transferPalletId&&je.removePallet(this.transferPalletId),this.outboundTruck.loadPallet(this.transferSku),this.palletsLoaded++,T.emit("outbound:pallet-loaded",{truckId:this.outboundTruck.id,orderId:this.outboundOrderId,sku:this.transferSku})),this.transferDirection=null;else if(this.palletMesh)if(this.transferDirection==="inbound"){const t=Zo.lerp(0,-1.5,this.transferAnimT);this.palletMesh.position.z=t}else{const t=Zo.lerp(-1.5,0,this.transferAnimT);this.palletMesh.position.z=t}}createMesh(){const e=this.createBasePlate(.9,.05,2,1735262,-.5);this.mesh.add(e),this.createHazardStripes(4,.88,.01,.1,-.05,.15).forEach(g=>this.mesh.add(g));const n=this.createBumpers(.1,.2,.3,.4,.3);this.mesh.add(n.left),this.mesh.add(n.right);const i=new te(.06,.12,1.9),s=new ye({color:4473924,roughness:.5,metalness:.7}),a=new N(i,s);a.position.set(-.42,.08,-.5),this.mesh.add(a);const o=new N(i,s);o.position.set(.42,.08,-.5),this.mesh.add(o);const l=new te(.72,.06,.88),c=new ye({color:875590,roughness:.5,metalness:.4}),d=new N(l,c);d.position.set(0,.058,-1),this.mesh.add(d);const h=new te(.56,.07,.18),u=new ye({color:43775,roughness:.3,metalness:.6,emissive:new Xe(8772)}),f=new N(h,u);f.position.set(0,.085,-1.38),this.mesh.add(f),this.palletMesh=Pt(),this.palletMesh.visible=!1,this.palletMesh.position.set(0,.1,0),this.mesh.add(this.palletMesh)}onPlaced(e,t){e.automatedDocks.includes(this)||e.automatedDocks.push(this)}onRemoved(e,t){const n=e.automatedDocks.indexOf(this);n>=0&&e.automatedDocks.splice(n,1)}}const ad=1e4,nv=1e3;function lc(r){return ad+r*nv}function cc(r,e,t,n){const i=t-r,s=n-e,a=Math.abs(i)>=Math.abs(s)&&!(i===0&&s===0),o=a?"east-west":"north-south",l=[],c=[],d=[];if(a||i===0&&s===0){if(i===0&&s===0)return l.push({x:r,z:e}),c.push({x:r-1,z:e}),c.push({x:r+1,z:e}),d.push({x:r-1,z:e-1,direction:"north"}),d.push({x:r+1,z:e-1,direction:"north"}),d.push({x:r-1,z:e+1,direction:"north"}),d.push({x:r+1,z:e+1,direction:"north"}),{aisleCells:l,rackCells:c,conveyorCells:d,aisleDirection:"north-south"};const h=e,u=Math.min(r,t),f=Math.max(r,t);for(let g=u;g<=f;g++)l.push({x:g,z:h}),c.push({x:g,z:h-1}),c.push({x:g,z:h+1});d.push({x:u-1,z:h-1,direction:"east"}),d.push({x:u-1,z:h+1,direction:"east"}),d.push({x:f+1,z:h-1,direction:"east"}),d.push({x:f+1,z:h+1,direction:"east"})}else{const h=r,u=Math.min(e,n),f=Math.max(e,n);for(let g=u;g<=f;g++)l.push({x:h,z:g}),c.push({x:h-1,z:g}),c.push({x:h+1,z:g});d.push({x:h-1,z:u-1,direction:"north"}),d.push({x:h+1,z:u-1,direction:"north"}),d.push({x:h-1,z:f+1,direction:"north"}),d.push({x:h+1,z:f+1,direction:"north"})}return{aisleCells:l,rackCells:c,conveyorCells:d,aisleDirection:o}}class si extends pi{length;aisleDirection;aisleCells=[];childRacks=[];childConveyors=[];carriageGroup=null;forkGroup=null;forkExtensionGroup=null;palletMesh=null;automationState="idle";carryingPallet=!1;carriedPalletId="";carriageTarget=0;forkHeightTarget=.5;forkExtensionTarget=0;animationProgress=0;pickupConveyor=null;dropTarget=null;dropTargetSide=0;carriageMaxSpeed=2.5;carriageAccel=.7;carriageVelocity=0;forkLiftSpeed=1.5;forkExtendSpeed=1.8;forkRestForward=.5;get currentState(){return this.automationState}get isCarryingPallet(){return this.carryingPallet}get storedPalletsTotal(){return this.childRacks.reduce((e,t)=>e+t.storedPallets,0)}get capacityTotal(){return this.childRacks.reduce((e,t)=>e+t.capacity,0)}recomputeAisleCells(){const{x:e,z:t}=this.getGridPosition();this.aisleCells=[];for(let n=0;n<this.length;n++)this.aisleCells.push(this.aisleDirection==="north-south"?{x:e,z:t+n}:{x:e+n,z:t})}constructor(e,t){super("stacker-crane"),this.length=e,this.aisleDirection=t,this.createMesh()}createMesh(){const e=this.aisleDirection==="north-south",t=this.length,n=(t-1)/2,i=new ye({color:16098851,roughness:.4,metalness:.7}),s=new ye({color:2963272,roughness:.6,metalness:.5}),a=new ye({color:4871528,roughness:.5,metalness:.8}),o=new ye({color:10395294,roughness:.4,metalness:.8}),l=10,c=l+.3,d=Math.max(t,1)+.4,h=e?new te(.08,.06,d):new te(d,.06,.08),u=new N(h,a);u.position.set(e?0:n,.03,e?n:0),u.castShadow=!0,this.mesh.add(u);const f=e?new te(.16,.02,d):new te(d,.02,.16),g=new N(f,a);g.position.set(e?0:n,.07,e?n:0),this.mesh.add(g);for(let ie=0;ie<t;ie++){const pe=e?new te(.4,.03,.1):new te(.1,.03,.4),ke=new N(pe,s);ke.position.set(e?0:ie,.015,e?ie:0),this.mesh.add(ke)}const v=e?new te(.1,.08,d):new te(d,.08,.1),m=new N(v,a);m.position.set(e?0:n,c,e?n:0),m.castShadow=!0,this.mesh.add(m);const p=e?new te(.18,.025,d):new te(d,.025,.18),w=new N(p,a);w.position.set(e?0:n,c-.055,e?n:0),this.mesh.add(w);for(const ie of[-1,1]){const pe=new te(.08,.4,.08),ke=new N(pe,s);e?ke.position.set(0,c-.2,ie<0?-.2:t-1+.2):ke.position.set(ie<0?-.2:t-1+.2,c-.2,0),ke.castShadow=!0,this.mesh.add(ke)}this.carriageGroup=new wt;const b=new te(.38,.25,.38),S=new N(b,s);S.position.set(0,.125,0),S.castShadow=!0,this.carriageGroup.add(S);const I=new te(.42,.04,.42),k=new N(I,i);k.position.set(0,.27,0),this.carriageGroup.add(k);const P=new et(.055,.055,.08,10),R=new ye({color:1712172,roughness:.9,metalness:.3});for(const ie of[-1,1]){const pe=new N(P,R);e?(pe.rotation.x=Math.PI/2,pe.position.set(ie*.14,.055,0)):(pe.rotation.z=Math.PI/2,pe.position.set(0,.055,ie*.14)),pe.castShadow=!0,this.carriageGroup.add(pe)}const M=.07,y=.09,C=new te(M,l,y),H=e?.09:0,F=e?0:.09;for(const ie of[-1,1]){const pe=new N(C,i);pe.position.set(e?ie*H:0,l/2+.29,e?0:ie*F),pe.castShadow=!0,this.carriageGroup.add(pe)}const Y=Math.ceil(l/1.5);for(let ie=0;ie<=Y;ie++){const pe=e?new te(H*2+M,.04,y):new te(y,.04,F*2+M),ke=new N(pe,i);ke.position.set(0,.29+ie*(l/Y),0),this.carriageGroup.add(ke)}const K=new te(.22,.15,.22),$=new N(K,s);$.position.set(0,l+.29+.08,0),$.castShadow=!0,this.carriageGroup.add($);const ee=new et(.04,.04,.06,8);for(const ie of[-1,1]){const pe=new N(ee,R);e?(pe.rotation.x=Math.PI/2,pe.position.set(ie*.1,l+.29+.15,0)):(pe.rotation.z=Math.PI/2,pe.position.set(0,l+.29+.15,ie*.1)),this.carriageGroup.add(pe)}this.forkGroup=new wt,this.forkGroup.position.y=.5;const V=e?new te(.3,.35,.12):new te(.12,.35,.3),ce=new N(V,i);ce.castShadow=!0,this.forkGroup.add(ce);for(const ie of[-1,1]){const pe=e?new te(.05,.3,.15):new te(.15,.3,.05),ke=new N(pe,s);ke.position.set(e?ie*.13:0,0,e?-.04:ie*.13),this.forkGroup.add(ke)}this.forkExtensionGroup=new wt;const re=[-.12,.12];for(const ie of re){const pe=e?new te(.85,.06,.1):new te(.1,.06,.85),ke=new N(pe,o);ke.position.set(e?0:ie,-.07,e?ie:0),ke.castShadow=!0,this.forkExtensionGroup.add(ke);const X=e?new te(.06,.2,.1):new te(.1,.2,.06),j=new N(X,o);j.position.set(e?-.4:ie,-0,e?ie:-.4),this.forkExtensionGroup.add(j)}this.palletMesh=Pt(),this.palletMesh.visible=!1,this.palletMesh.position.y=-.02,this.palletMesh.name="stacker-pallet",this.forkExtensionGroup.add(this.palletMesh),e?this.forkExtensionGroup.position.z=this.forkRestForward:this.forkExtensionGroup.position.x=this.forkRestForward,this.forkGroup.add(this.forkExtensionGroup),this.carriageGroup.add(this.forkGroup),this.mesh.add(this.carriageGroup)}isEntranceConveyor(e){const{x:t,z:n}=e.getGridPosition(),i=this.getConveyorOutputCell(e);return this.isOwnedCell(i.x,i.z)}getConveyorOutputCell(e){const{x:t,z:n}=e.getGridPosition();switch(e.direction){case"north":return{x:t,z:n-1};case"south":return{x:t,z:n+1};case"east":return{x:t+1,z:n};case"west":return{x:t-1,z:n}}}isOwnedCell(e,t){if(this.aisleCells.some(n=>n.x===e&&n.z===t))return!0;for(const n of this.childRacks){const i=n.getGridPosition();if(i.x===e&&i.z===t)return!0}return!1}getAisleIndex(e,t){if(this.aisleCells.length===0)return-1;const n=this.aisleCells[0];return this.aisleDirection==="north-south"?e!==n.x?-1:t-n.z:t!==n.z?-1:e-n.x}getCellSide(e,t){if(this.aisleCells.length===0)return 0;const n=this.aisleDirection==="north-south"?this.aisleCells[0].x:this.aisleCells[0].z;return(this.aisleDirection==="north-south"?e:t)<n?-1:1}update(e){if(z.get("phase")==="operations")switch(this.automationState){case"idle":this.findWork();break;case"moving-to-pickup":case"moving-to-drop":this.advanceMovement(e);break;case"picking":this.advancePick(e);break;case"retracting-after-pick":this.advanceRetract(e,()=>this.findDropTarget());break;case"dropping":this.advanceDrop(e);break;case"retracting-after-drop":this.advanceRetract(e,()=>{this.automationState="idle",this.pickupConveyor=null,this.dropTarget=null});break}}findWork(){for(const e of this.childConveyors)if(e.hasPallet&&this.isEntranceConveyor(e)){this.pickupConveyor=e,this.automationState="moving-to-pickup",this.setMoveTarget(e);return}if(this.hasStoredPallets()){for(const e of this.childConveyors)if(!e.hasPallet&&!this.isEntranceConveyor(e)){const t=this.findRackWithPallets();if(t){this.pickupConveyor=null,this.dropTarget=e,this.carryingPallet=!1,this.carriedPalletId="",this.automationState="moving-to-pickup",this.setMoveTargetForRack(t);return}}}}hasStoredPallets(){return this.childRacks.some(e=>e.storedPallets>0)}findRackWithPallets(){for(const e of this.childRacks)if(e.storedPallets>0)return e;return null}resetCarriageVelocity(){this.carriageVelocity=0}setMoveTarget(e){const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=.2,this.animationProgress=0,this.resetCarriageVelocity()}setMoveTargetForRack(e){const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=e.getPickupHeight(),this.dropTarget=e,this.animationProgress=0,this.resetCarriageVelocity()}getAisleIndexForAdjacentCell(e,t){return this.aisleDirection==="north-south"?t-this.aisleCells[0].z:e-this.aisleCells[0].x}advanceMovement(e){if(!this.carriageGroup||!this.forkGroup||!this.forkExtensionGroup)return;const t=this.aisleDirection==="north-south",n=t?this.carriageGroup.position.z:this.carriageGroup.position.x,i=this.carriageTarget,s=i-n,a=Math.abs(s);if(a>.005){const g=this.carriageVelocity*this.carriageVelocity/(2*this.carriageAccel);a<=g+.001?this.carriageVelocity=Math.max(this.carriageVelocity-this.carriageAccel*e,.05):this.carriageVelocity=Math.min(this.carriageVelocity+this.carriageAccel*e,this.carriageMaxSpeed);const v=Math.sign(s)*Math.min(this.carriageVelocity*e,a);t?this.carriageGroup.position.z+=v:this.carriageGroup.position.x+=v;return}this.carriageVelocity=0,t?this.carriageGroup.position.z=i:this.carriageGroup.position.x=i;const o=this.forkGroup.position.y,l=this.forkHeightTarget-o,c=this.forkLiftSpeed*e;if(Math.abs(l)>.01){this.forkGroup.position.y+=Math.sign(l)*Math.min(c,Math.abs(l));return}this.forkGroup.position.y=this.forkHeightTarget;const d=t?this.forkExtensionGroup.position.x:this.forkExtensionGroup.position.z,h=this.forkExtensionTarget*.6,u=h-d,f=this.forkExtendSpeed*e;if(Math.abs(u)>.01){const g=Math.sign(u)*Math.min(f,Math.abs(u));t?this.forkExtensionGroup.position.x+=g:this.forkExtensionGroup.position.z+=g;return}t?this.forkExtensionGroup.position.x=h:this.forkExtensionGroup.position.z=h,this.automationState==="moving-to-pickup"?(this.automationState="picking",this.animationProgress=0):(this.automationState="dropping",this.animationProgress=0)}advancePick(e){this.animationProgress+=e*2,this.animationProgress>=1&&(this.pickupConveyor&&this.pickupConveyor.hasPallet?(this.carriedPalletId=this.pickupConveyor.retrieveTopPalletId()||"",this.carryingPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)):this.dropTarget instanceof un&&this.dropTarget.storedPallets>0&&(this.carriedPalletId=this.dropTarget.retrieveTopPalletId()||"",z.removeStoredPallet(),this.carryingPallet=!0,this.palletMesh&&(this.palletMesh.visible=!0)),this.automationState="retracting-after-pick")}advanceDrop(e){this.animationProgress+=e*2,this.animationProgress>=1&&(this.dropTarget instanceof ht?this.dropTarget.canStore()&&(this.dropTarget.store(this.carriedPalletId),this.carryingPallet=!1,this.carriedPalletId="",this.palletMesh&&(this.palletMesh.visible=!1)):this.dropTarget instanceof un&&this.dropTarget.canStore()&&this.dropTarget.store(this.carriedPalletId)&&(z.addStoredPallet(),this.carryingPallet=!1,this.carriedPalletId="",this.palletMesh&&(this.palletMesh.visible=!1)),this.automationState="retracting-after-drop")}advanceRetract(e,t){if(!this.forkExtensionGroup){t();return}const n=this.aisleDirection==="north-south",s=0-(n?this.forkExtensionGroup.position.x:this.forkExtensionGroup.position.z),a=this.forkExtendSpeed*e;if(Math.abs(s)>.01){const o=Math.sign(s)*Math.min(a,Math.abs(s));n?this.forkExtensionGroup.position.x+=o:this.forkExtensionGroup.position.z+=o;return}n?this.forkExtensionGroup.position.x=0:this.forkExtensionGroup.position.z=0,t()}findDropTarget(){if(!this.carryingPallet){this.automationState="idle";return}for(const e of this.childConveyors)if(!e.hasPallet&&!this.isEntranceConveyor(e)){this.dropTarget=e,this.automationState="moving-to-drop",this.setMoveTarget(e);return}for(const e of this.childRacks)if(e.canStore()){this.dropTarget=e,this.automationState="moving-to-drop";const{x:t,z:n}=e.getGridPosition(),i=this.getAisleIndexForAdjacentCell(t,n);this.carriageTarget=i-this.forkRestForward,this.forkExtensionTarget=this.getCellSide(t,n),this.forkHeightTarget=e.getStorageHeight(),this.animationProgress=0;return}this.automationState="idle"}toData(){return{...super.toData(),direction:this.aisleDirection==="north-south"?"north":"east",craneLength:this.length}}}class se extends vt{speed=4;static BASE_WIDTH=.9;static BASE_HEIGHT=.3;static BASE_DEPTH=.85;static BASE_Y_POSITION=.25;static BATTERY_WIDTH=.75;static BATTERY_HEIGHT=.2;static BATTERY_DEPTH=.7;static BATTERY_Y_POSITION=.1;static BATTERY_Z_OFFSET=.1;static COUNTERWEIGHT_WIDTH=.85;static COUNTERWEIGHT_HEIGHT=.7;static COUNTERWEIGHT_DEPTH=.35;static COUNTERWEIGHT_Y_POSITION=.55;static COUNTERWEIGHT_Z_POSITION=-.35;static BUMPER_WIDTH=.9;static BUMPER_HEIGHT=.06;static BUMPER_DEPTH=.06;static BUMPER_Y_POSITION=.25;static BUMPER_Z_POSITION=-.55;static SENSOR_WIDTH=.3;static SENSOR_HEIGHT=.15;static SENSOR_DEPTH=.2;static SENSOR_Y_POSITION=1;static SENSOR_Z_POSITION=-.2;static LED_RADIUS=.03;static LED_HEIGHT=.04;static LED_SEGMENTS=8;static LED_Y_POSITION=1.07;static LED_Z_POSITION=-.15;static LED_SPACING=.08;static STATUS_LIGHT_WIDTH=.6;static STATUS_LIGHT_HEIGHT=.04;static STATUS_LIGHT_DEPTH=.04;static STATUS_LIGHT_Y_POSITION=.5;static STATUS_LIGHT_Z_POSITION=.45;static OUTER_POST_WIDTH=.08;static OUTER_POST_HEIGHT=2.2;static OUTER_POST_DEPTH=.08;static OUTER_POST_X_OFFSET=.32;static OUTER_POST_Y_POSITION=1.3;static OUTER_POST_Z_POSITION=.35;static BRACE_WIDTH=.72;static BRACE_HEIGHT=.04;static BRACE_DEPTH=.04;static BRACE_Y_POSITIONS=[.6,1.4,2.2];static INNER_MAST_Y_OFFSET=.1;static INNER_POST_WIDTH=.06;static INNER_POST_HEIGHT=1.8;static INNER_POST_DEPTH=.06;static INNER_POST_X_OFFSET=.28;static INNER_POST_Y_POSITION=1;static INNER_POST_Z_POSITION=.4;static CARRIAGE_WIDTH=.65;static CARRIAGE_HEIGHT=.12;static CARRIAGE_DEPTH=.25;static CARRIAGE_Y_POSITION=.28;static CARRIAGE_Z_POSITION=.55;static FORK_TINE_WIDTH=.08;static FORK_TINE_HEIGHT=.04;static FORK_TINE_LENGTH=.85;static FORK_X_OFFSET=.22;static FORK_Y_POSITION=.24;static FORK_Z_POSITION=.9;static FORK_MESH_WIDTH=.9;static FORK_MESH_HEIGHT=.05;static FORK_MESH_LENGTH=1;static FORK_MESH_Y_POSITION=.25;static FORK_MESH_Z_POSITION=.9;static PALLET_Y_OFFSET=.075;static PALLET_Z_OFFSET=0;static WHEEL_RADIUS=.12;static WHEEL_HEIGHT=.15;static WHEEL_SEGMENTS=16;static WHEEL_X_OFFSET=.4;static WHEEL_Y_POSITION=.12;static WHEEL_Z_FRONT=.35;static WHEEL_Z_BACK=-.35;static HUB_RADIUS=.06;static HUB_HEIGHT=.02;static HUB_SEGMENTS=8;static HUB_X_OFFSET=.08;static COLOR_BODY=15263976;static COLOR_DARK_STRUCTURAL=2899536;static COLOR_MAST=4545124;static COLOR_FORK=9479342;static COLOR_BUMPER_YELLOW=16771899;static COLOR_LED_BLUE=2201331;static COLOR_LED_GREEN=58998;static COLOR_WHEEL=1710618;static COLOR_HUB=7901340;static baseGeometry;static batteryBoxGeometry;static counterweightGeometry;static bumperGeometry;static sensorHousingGeometry;static ledGeometry;static statusLightGeometry;static outerPostGeometry;static braceGeometry;static innerPostGeometry;static carriageGeometry;static forkTineGeometry;static forkMeshGeometry;static wheelGeometry;static hubGeometry;static initGeometries(){this.baseGeometry||(this.baseGeometry=new te(this.BASE_WIDTH,this.BASE_HEIGHT,this.BASE_DEPTH),this.batteryBoxGeometry=new te(this.BATTERY_WIDTH,this.BATTERY_HEIGHT,this.BATTERY_DEPTH),this.counterweightGeometry=new te(this.COUNTERWEIGHT_WIDTH,this.COUNTERWEIGHT_HEIGHT,this.COUNTERWEIGHT_DEPTH),this.bumperGeometry=new te(this.BUMPER_WIDTH,this.BUMPER_HEIGHT,this.BUMPER_DEPTH),this.sensorHousingGeometry=new te(this.SENSOR_WIDTH,this.SENSOR_HEIGHT,this.SENSOR_DEPTH),this.ledGeometry=new et(this.LED_RADIUS,this.LED_RADIUS,this.LED_HEIGHT,this.LED_SEGMENTS),this.statusLightGeometry=new te(this.STATUS_LIGHT_WIDTH,this.STATUS_LIGHT_HEIGHT,this.STATUS_LIGHT_DEPTH),this.outerPostGeometry=new te(this.OUTER_POST_WIDTH,this.OUTER_POST_HEIGHT,this.OUTER_POST_DEPTH),this.braceGeometry=new te(this.BRACE_WIDTH,this.BRACE_HEIGHT,this.BRACE_DEPTH),this.innerPostGeometry=new te(this.INNER_POST_WIDTH,this.INNER_POST_HEIGHT,this.INNER_POST_DEPTH),this.carriageGeometry=new te(this.CARRIAGE_WIDTH,this.CARRIAGE_HEIGHT,this.CARRIAGE_DEPTH),this.forkTineGeometry=new te(this.FORK_TINE_WIDTH,this.FORK_TINE_HEIGHT,this.FORK_TINE_LENGTH),this.forkMeshGeometry=new te(this.FORK_MESH_WIDTH,this.FORK_MESH_HEIGHT,this.FORK_MESH_LENGTH),this.wheelGeometry=new et(this.WHEEL_RADIUS,this.WHEEL_RADIUS,this.WHEEL_HEIGHT,this.WHEEL_SEGMENTS),this.hubGeometry=new et(this.HUB_RADIUS,this.HUB_RADIUS,this.HUB_HEIGHT,this.HUB_SEGMENTS))}constructor(){super("forklift-agv"),se.initGeometries(),this.mesh.clear(),this.createMesh()}createMesh(){const e=new ye({color:se.COLOR_BODY,roughness:.3,metalness:.4}),t=new ye({color:se.COLOR_DARK_STRUCTURAL,roughness:.5,metalness:.6}),n=new ye({color:se.COLOR_MAST,roughness:.6,metalness:.7}),i=new ye({color:se.COLOR_FORK,roughness:.4,metalness:.8}),s=new ye({color:se.COLOR_BUMPER_YELLOW,roughness:.7,metalness:.3}),a=new ye({color:se.COLOR_LED_BLUE,emissive:se.COLOR_LED_BLUE,emissiveIntensity:1,roughness:.1,metalness:.9}),o=new ye({color:se.COLOR_LED_GREEN,emissive:se.COLOR_LED_GREEN,emissiveIntensity:.9,roughness:.2,metalness:.8}),l=new ye({color:se.COLOR_WHEEL,roughness:.9,metalness:.1}),c=new ye({color:se.COLOR_HUB,roughness:.3,metalness:.9}),d=new N(se.baseGeometry,e);d.position.set(0,se.BASE_Y_POSITION,0),d.castShadow=!0,d.receiveShadow=!0,this.mesh.add(d);const h=new N(se.batteryBoxGeometry,t);h.position.set(0,se.BATTERY_Y_POSITION,se.BATTERY_Z_OFFSET),h.castShadow=!0,this.mesh.add(h);const u=new N(se.counterweightGeometry,e);u.position.set(0,se.COUNTERWEIGHT_Y_POSITION,se.COUNTERWEIGHT_Z_POSITION),u.castShadow=!0,this.mesh.add(u);const f=new N(se.bumperGeometry,s);f.position.set(0,se.BUMPER_Y_POSITION,se.BUMPER_Z_POSITION),f.castShadow=!0,this.mesh.add(f);const g=new N(se.sensorHousingGeometry,t);g.position.set(0,se.SENSOR_Y_POSITION,se.SENSOR_Z_POSITION),g.castShadow=!0,this.mesh.add(g),[-se.LED_SPACING,0,se.LED_SPACING].forEach(M=>{const y=new N(se.ledGeometry,a);y.rotation.x=Math.PI/2,y.position.set(M,se.LED_Y_POSITION,se.LED_Z_POSITION),this.mesh.add(y)});const m=new N(se.statusLightGeometry,o);m.position.set(0,se.STATUS_LIGHT_Y_POSITION,se.STATUS_LIGHT_Z_POSITION),this.mesh.add(m);const p=new N(se.outerPostGeometry,n);p.position.set(-se.OUTER_POST_X_OFFSET,se.OUTER_POST_Y_POSITION,se.OUTER_POST_Z_POSITION),p.castShadow=!0,this.mesh.add(p);const w=new N(se.outerPostGeometry,n);w.position.set(se.OUTER_POST_X_OFFSET,se.OUTER_POST_Y_POSITION,se.OUTER_POST_Z_POSITION),w.castShadow=!0,this.mesh.add(w),se.BRACE_Y_POSITIONS.forEach(M=>{const y=new N(se.braceGeometry,n);y.position.set(0,M,se.OUTER_POST_Z_POSITION),y.castShadow=!0,this.mesh.add(y)}),this.innerMastGroup=new wt,this.innerMastGroup.position.set(0,se.INNER_MAST_Y_OFFSET,0);const b=new N(se.innerPostGeometry,t);b.position.set(-se.INNER_POST_X_OFFSET,se.INNER_POST_Y_POSITION,se.INNER_POST_Z_POSITION),b.castShadow=!0,this.innerMastGroup.add(b);const S=new N(se.innerPostGeometry,t);S.position.set(se.INNER_POST_X_OFFSET,se.INNER_POST_Y_POSITION,se.INNER_POST_Z_POSITION),S.castShadow=!0,this.innerMastGroup.add(S);const I=new N(se.carriageGeometry,t);I.position.set(0,se.CARRIAGE_Y_POSITION,se.CARRIAGE_Z_POSITION),I.castShadow=!0,this.innerMastGroup.add(I);const k=new N(se.forkTineGeometry,i);k.position.set(-se.FORK_X_OFFSET,se.FORK_Y_POSITION,se.FORK_Z_POSITION),k.castShadow=!0,this.innerMastGroup.add(k);const P=new N(se.forkTineGeometry,i);P.position.set(se.FORK_X_OFFSET,se.FORK_Y_POSITION,se.FORK_Z_POSITION),P.castShadow=!0,this.innerMastGroup.add(P),this.forkMesh=new N(se.forkMeshGeometry,new Ln({visible:!1})),this.forkMesh.position.set(0,se.FORK_MESH_Y_POSITION,se.FORK_MESH_Z_POSITION),this.innerMastGroup.add(this.forkMesh),this.palletIndicator=Pt(),this.palletIndicator.position.set(0,se.PALLET_Y_OFFSET,se.PALLET_Z_OFFSET),this.palletIndicator.visible=!1,this.palletIndicator.traverse(M=>{M instanceof N&&(M.castShadow=!0)}),this.forkMesh.add(this.palletIndicator),this.mesh.add(this.innerMastGroup),[[-se.WHEEL_X_OFFSET,se.WHEEL_Y_POSITION,se.WHEEL_Z_BACK],[se.WHEEL_X_OFFSET,se.WHEEL_Y_POSITION,se.WHEEL_Z_BACK],[-se.WHEEL_X_OFFSET,se.WHEEL_Y_POSITION,se.WHEEL_Z_FRONT],[se.WHEEL_X_OFFSET,se.WHEEL_Y_POSITION,se.WHEEL_Z_FRONT]].forEach(([M,y,C])=>{const H=new N(se.wheelGeometry,l);H.rotation.z=Math.PI/2,H.position.set(M,y,C),H.castShadow=!0,this.mesh.add(H);const F=new N(se.hubGeometry,c);F.rotation.z=Math.PI/2;const Y=M>0?se.HUB_X_OFFSET:-se.HUB_X_OFFSET;F.position.set(M+Y,y,C),this.mesh.add(F)})}}class iv{grid;scene;activeTrucks=new Map;availableOutboundDocks=new Set;automatedDockPositionsCallback=null;pendingQueue=[];automatedTruckIds=new Set;constructor(e,t){this.scene=e,this.grid=t,this.setupEventListeners()}setupEventListeners(){T.on("outbound:request-truck",({orderId:e,quantity:t,reward:n,dockTime:i,lines:s})=>{this.requestTruckForOrder(e,t,n,i,s)}),T.on("outbound:pallet-loaded",({truckId:e,orderId:t,sku:n})=>{this.onPalletLoaded(e,t,n)}),T.on("outbound:order-expired",({orderId:e})=>{this.onOrderExpired(e)})}getOutboundDocks(){return this.grid.getCellsByType("dock").filter(e=>e.z===0&&e.entity instanceof Do).map(e=>e.entity)}refreshAvailableDocks(){const e=this.getOutboundDocks();for(const t of e.map(n=>n.getGridPosition().x)){let n=!1;for(const i of this.activeTrucks.values())if(i.truck.dockPosition===t&&i.truck.state!=="gone"){n=!0;break}n||this.availableOutboundDocks.add(t)}for(const t of this.availableOutboundDocks)e.some(n=>n.getGridPosition().x===t)||this.availableOutboundDocks.delete(t)}requestTruckForOrder(e,t,n,i,s){if(this.refreshAvailableDocks(),this.availableOutboundDocks.size===0)return console.warn("[OutboundTruckManager] No available outbound docks, queuing request for order",e),this.pendingQueue.push({orderId:e,quantity:t,reward:n,dockTime:i,lines:s}),null;const a=this.automatedDockPositionsCallback?.()??new Set,o=Array.from(this.availableOutboundDocks).filter(v=>a.has(v)),l=o.length>0?o:Array.from(this.availableOutboundDocks),c=l[Math.floor(Math.random()*l.length)];this.availableOutboundDocks.delete(c);const d=this.getOutboundDocks().find(v=>v.getGridPosition().x===c);if(d===void 0)return console.error(`[OutboundTruckManager] Selected dock ${c} is not a valid outbound dock`),null;const h=new sn(0,c,d);h.maxPallets=t;const u=this.grid.gridToWorld(c,0);h.mesh.position.set(u.x,0,u.z-3),h.mesh.rotation.y=0,this.scene.add(h.mesh);const f={orderId:e,quantity:t,palletsLoaded:0,reward:n,lines:s};this.activeTrucks.set(h.id,{truck:h,order:f}),i&&i>0&&h.setDeadline(i);const g=u.z-sn.CONTAINER_BACK_OFFSET;return h.animateArrival(g,()=>{T.emit("outbound:truck-docked",{truck:h,dockX:c,dockZ:0,orderId:f.orderId,quantity:f.quantity})}),h.updatePalletCountIndicator(),console.log(`[OutboundTruckManager] Truck ${h.id} arriving for order ${e} (${t} pallets)`),h}onPalletLoaded(e,t,n){const i=this.activeTrucks.get(e);if(!i||i.order.orderId!==t){console.warn(`[OutboundTruckManager] Unknown truck ${e} or mismatched order`);return}if(i.order.palletsLoaded++,n!==void 0&&i.order.lines){const s=i.order.lines.find(a=>a.sku===n&&a.loaded<a.quantity);s&&s.loaded++}console.log(`[OutboundTruckManager] Truck ${e}: ${i.order.palletsLoaded}/${i.order.quantity} pallets loaded`),i.order.palletsLoaded>=i.order.quantity&&(console.log(`[OutboundTruckManager] Truck ${e} fully loaded, initiating departure`),this.truckDepart(i.truck,i.order))}onOrderExpired(e){const t=this.pendingQueue.findIndex(n=>n.orderId===e);if(t!==-1){this.pendingQueue.splice(t,1);return}for(const[n,i]of this.activeTrucks)if(i.order.orderId===e){console.log(`[OutboundTruckManager] Order ${e} expired, truck ${n} departing incomplete`),this.truckDepartIncomplete(i.truck,i.order);return}}getTruckForOrder(e){for(const[,t]of this.activeTrucks)if(t.order.orderId===e&&(t.truck.state==="docked"||t.truck.state==="unloading"))return t.truck;return null}getTruck(e){return this.activeTrucks.get(e)?.truck??null}getActiveTrucks(){return Array.from(this.activeTrucks.values()).filter(e=>e.truck.state==="docked"||e.truck.state==="unloading"||e.truck.state==="loading")}setAutomatedDockPositionsCallback(e){this.automatedDockPositionsCallback=e}markTruckAsAutomated(e){this.automatedTruckIds.add(e)}getTrucksNeedingTasks(){const e=[];for(const t of this.activeTrucks.values())t.truck.truckDock instanceof xt||this.automatedTruckIds.has(t.truck.id)||(t.truck.state==="docked"||t.truck.state==="loading")&&t.order.palletsLoaded<t.order.quantity&&e.push({truck:t.truck,order:t.order,dockX:t.truck.dockPosition,dockZ:0});return e}truckDepart(e,t){z.get("gameMode")!=="challenge"&&z.addMoney(t.reward),z.completeOrder(),T.emit("outbound:order-completed",{orderId:t.orderId,reward:t.reward,palletsShipped:t.palletsLoaded}),e.animateDeparture(-1,()=>{this.availableOutboundDocks.add(e.dockPosition),this.processPendingQueue(),console.log(`[OutboundTruckManager] Truck ${e.id} departed for order ${t.orderId}`)}),T.emit("outbound:truck-departed",{truckId:e.id,orderId:t.orderId})}truckDepartIncomplete(e,t){console.log(`[OutboundTruckManager] Truck ${e.id} departing incomplete with ${t.palletsLoaded}/${t.quantity} pallets`),e.animateDeparture(-1,()=>{this.availableOutboundDocks.add(e.dockPosition),this.processPendingQueue()})}processPendingQueue(){for(;this.pendingQueue.length>0&&(this.refreshAvailableDocks(),this.availableOutboundDocks.size!==0);){const e=this.pendingQueue.shift();this.requestTruckForOrder(e.orderId,e.quantity,e.reward,e.dockTime,e.lines)}}update(e){for(const[t,n]of this.activeTrucks)n.truck.update(e);for(const[t,n]of this.activeTrucks)n.truck.state==="gone"&&(console.log(`[OutboundTruckManager] Removing gone truck ${t}`),this.scene.remove(n.truck.mesh),n.truck.dispose(),this.activeTrucks.delete(t));this.processPendingQueue()}reset(){for(const[,e]of this.activeTrucks)this.scene.remove(e.truck.mesh),e.truck.dispose();this.activeTrucks.clear(),this.availableOutboundDocks.clear(),this.automatedTruckIds.clear(),this.pendingQueue=[]}getActiveCount(){return this.activeTrucks.size}hasAvailableDock(){return this.refreshAvailableDocks(),this.availableOutboundDocks.size>0}}class sv{orders=[];orderIdCounter=0;currentWaveTimeRemaining=null;constructor(){T.on("pallet:stored",()=>{}),T.on("outbound:order-completed",({orderId:e})=>{this.completeOrder(e)}),T.on("wave:start",({config:e})=>{e&&typeof e.totalWaveTime=="number"?(this.currentWaveTimeRemaining=e.totalWaveTime,this.adjustPreviewOrderTimers()):this.currentWaveTimeRemaining=null}),T.on("wave:progress",({timeRemaining:e})=>{this.currentWaveTimeRemaining=e,this.clampActiveOrderTimers()}),T.on("wave:complete",()=>{this.currentWaveTimeRemaining=null}),T.on("outbound:truck-docked",({orderId:e,quantity:t,truck:n,dockX:i,dockZ:s})=>{const o=this.getOrderById(e)?.lines??[];T.emit("order:needs-loading",{orderId:e,quantity:t,truck:n,dockX:i,dockZ:s,lines:o})})}getOrderConfig(e,t){const n=Math.max(1,Math.floor(t??Io(e).palletsPerTruck));return{minQuantity:1,maxQuantity:n,autoLaunchTime:Math.max(30,60-e*2),maxDockTime:40+n*3,reward:50+e*10}}createOrder(e){return this._createOrderWithStatus(e,"pending")}prepareForWave(e,t,n,i){const s=[];let a=null;if(typeof n=="number"&&n>0&&t>0){const l=n/(t+1),d=this.getOrderConfig(e,i).maxDockTime,h=Math.max(1,Math.round(l*.15));a=[];for(let u=0;u<t;u++){const f=Math.round(l*(u+1)),g=Math.floor(Math.random()*(h*2+1))-h;let v=f+g;v=Math.max(1,Math.min(n-1,v)),a.push(v)}a.sort((u,f)=>u-f);for(let u=0;u<a.length;u++){const f=Math.min(n-d,a[u]);a[u]>f&&(a[u]=f),u>0&&a[u]<=a[u-1]&&(a[u]=a[u-1]+1)}}let o=-1;for(let l=0;l<t;l++){const c=a?a[l]:void 0,d=this._createOrderWithStatus(e,"preview",c,i);if(typeof n=="number"&&n>0){const h=Math.min(n-d.maxDockTime,d.autoLaunchTime);d.autoLaunchTime>h&&(d.autoLaunchTime=h)}d.autoLaunchTime<=o&&(d.autoLaunchTime=o+1),o=d.autoLaunchTime,s.push(d)}return s}activateWaveOrders(){const e=this.orders.filter(t=>t.status==="preview");for(const t of e)t.status="pending",z.addPendingOrder(),T.emit("order:created",t)}getPreviewOrders(){return this.orders.filter(e=>e.status==="preview")}_createOrderWithStatus(e,t,n,i){const s=this.getOrderConfig(e,i),a=z.get("gameMode")==="challenge"?s.maxQuantity:Math.floor(Math.random()*(s.maxQuantity-s.minQuantity+1)+s.minQuantity),o=this.generateOrderLines(e,a,t),l={id:`order-${++this.orderIdCounter}`,quantity:a,autoLaunchTime:typeof n=="number"?n:s.autoLaunchTime,dockTimeRemaining:0,maxDockTime:s.maxDockTime,reward:s.reward*a,createdAt:Date.now(),status:t,palletsLoaded:0,lines:o};return this.orders.push(l),t==="pending"&&(z.addPendingOrder(),T.emit("order:created",l)),l}getCommittedQuantitiesPerSku(){const e=new Map;for(const t of this.orders)if(t.status!=="shipped"&&t.status!=="preview")for(const n of t.lines){const i=e.get(n.sku)??0;e.set(n.sku,i+n.quantity)}return e}generateOrderLines(e,t,n="pending"){const i=Kn(e),s=je.getAllSkuCounts(),a=[];for(let v=0;v<i;v++)(s.get(v)??0)>0&&a.push(v);const o=a.length>0,l=this.getCommittedQuantitiesPerSku(),c=o?[...a]:Array.from({length:i},(v,m)=>m),d=Math.min(3,c.length,t),h=d<=1?1:1+Math.floor(Math.random()*d),u=[];for(let v=0;v<h;v++){const m=Math.floor(Math.random()*c.length);u.push(c[m]),c.splice(m,1)}const f=u.map(v=>({sku:v,quantity:1,loaded:0}));let g=t-h;for(;g>0;){const v=f.map((p,w)=>({line:p,idx:w})).filter(({line:p})=>{if(!o)return!0;const w=s.get(p.sku)??0,b=l.get(p.sku)??0,S=w-b;return p.quantity<S});if(v.length===0)break;const{line:m}=v[Math.floor(Math.random()*v.length)];m.quantity++,g--}return f}adjustPreviewOrderTimers(){if(this.currentWaveTimeRemaining!=null)for(const e of this.orders)e.status==="preview"&&(e.autoLaunchTime=Math.min(e.autoLaunchTime,this.currentWaveTimeRemaining),e.autoLaunchTime<0&&(e.autoLaunchTime=0))}clampActiveOrderTimers(){if(this.currentWaveTimeRemaining!=null)for(const e of this.orders)e.status==="pending"&&e.autoLaunchTime>this.currentWaveTimeRemaining&&(e.autoLaunchTime=Math.max(0,this.currentWaveTimeRemaining)),(e.status==="awaiting-truck"||e.status==="loading")&&e.dockTimeRemaining>this.currentWaveTimeRemaining&&(e.dockTimeRemaining=Math.max(0,this.currentWaveTimeRemaining))}fulfillOrder(e,t=!1){const n=this.getOrderById(e);if(!n)return!1;if(n.status!=="pending")return console.log(`[OrderManager] Order ${e} already being processed (status: ${n.status})`),!1;const i=z.get("storedPallets");if(!t&&i<n.quantity)return!1;const s=a=>this.currentWaveTimeRemaining!=null?Math.min(a,this.currentWaveTimeRemaining):a;if(t)n.dockTimeRemaining=s(n.maxDockTime),console.log(`[OrderManager] Order ${e} auto-launched with dock time ${n.dockTimeRemaining.toFixed(1)}s`);else{n.dockTimeRemaining=s(n.maxDockTime);const a=Math.floor(n.reward*.2);n.reward+=a,console.log(`[OrderManager] Order ${e} shipped early: dock time ${n.dockTimeRemaining.toFixed(1)}s, bonus $${a}`)}return n.status="awaiting-truck",T.emit("outbound:request-truck",{orderId:n.id,quantity:n.quantity,reward:n.reward,dockTime:n.dockTimeRemaining,lines:n.lines.map(a=>({sku:a.sku,quantity:a.quantity,loaded:a.loaded}))}),!0}onPalletLoaded(e,t=0){const n=this.getOrderById(e);if(!n)return;n.palletsLoaded++,n.status="loading";const i=n.lines.find(s=>s.sku===t&&s.loaded<s.quantity);i&&i.loaded++,z.removeStoredPallet(),T.emit("order:pallet-loaded",{orderId:e,palletsLoaded:n.palletsLoaded,palletsTotal:n.quantity})}getNextSkuNeeded(e){const t=this.getOrderById(e);if(!t)return-1;for(const n of t.lines)if(n.loaded<n.quantity)return n.sku;return-1}getUnfulfilledLines(e){const t=this.getOrderById(e);return t?t.lines.filter(n=>n.loaded<n.quantity):[]}completeOrder(e){const t=this.orders.findIndex(i=>i.id===e);if(t===-1)return;const n=this.orders[t];n.status="shipped",this.orders.splice(t,1)}expireOrder(e){const t=this.orders.indexOf(e);t!==-1&&((e.status==="awaiting-truck"||e.status==="loading")&&T.emit("outbound:order-expired",{orderId:e.id}),this.orders.splice(t,1),z.failOrder(),T.emit("order:expired",{orderId:e.id,reason:"dock-time"}))}update(e){const t=z.get("phase"),n=[],i=[];this.orders.forEach(s=>{if(t==="operations")switch(s.status){case"preview":break;case"pending":s.autoLaunchTime-=e,s.autoLaunchTime<=0&&i.push(s);break;case"awaiting-truck":case"loading":s.dockTimeRemaining>0&&(s.dockTimeRemaining-=e,s.dockTimeRemaining<=0&&(console.log(`[OrderManager] Order ${s.id} dock time expired!`),n.push(s)));break}}),i.forEach(s=>{console.log(`[OrderManager] Auto-launching order ${s.id}`),this.fulfillOrder(s.id,!0)}),n.forEach(s=>this.expireOrder(s))}getOrders(){return this.orders}getOrderById(e){return this.orders.find(t=>t.id===e)}canFulfillOrder(e){const t=this.getOrderById(e);return t?z.get("storedPallets")>=t.quantity:!1}getPendingOrderCount(){return this.orders.length}hasUnshippedOrders(){return this.orders.some(e=>e.status!=="shipped"&&e.status!=="preview")}getCommittedPallets(){return this.orders.filter(e=>e.status!=="shipped"&&e.status!=="preview").reduce((e,t)=>e+t.quantity,0)}reset(){this.orders=[],this.orderIdCounter=0,this.currentWaveTimeRemaining=null}clearPreviewOrders(){this.orders=this.orders.filter(e=>e.status!=="preview")}prepareOutboundWaveOrders(e,t,n){const i=z.get("wave"),s=this.getOrderConfig(i,t),a=[],o=n/(e+1);for(let l=0;l<e;l++){const c=Math.max(1,Math.round(o*(l+1))),d=this.generateOrderLines(i,t),h={id:`order-${++this.orderIdCounter}`,quantity:t,autoLaunchTime:c,dockTimeRemaining:0,maxDockTime:s.maxDockTime,reward:s.reward*t*2,createdAt:Date.now(),status:"preview",palletsLoaded:0,lines:d};this.orders.push(h),a.push(h)}return a}serialize(){return JSON.stringify({orders:this.orders,orderIdCounter:this.orderIdCounter})}deserialize(e){try{const t=JSON.parse(e),n=t.orders||[];for(const i of n)(!i.lines||i.lines.length===0)&&(i.lines=[{sku:0,quantity:i.quantity,loaded:i.palletsLoaded}]);this.orders=n,this.orderIdCounter=t.orderIdCounter||0}catch(t){console.error("Failed to deserialize orders:",t)}}}const Sr=25,xr=50,wr=75,rv=400,av=700,od=300,br=4,Tr=4;function dr(r){return Math.floor(od*Math.pow(1.5,r))}function hr(r){return Math.floor(od*Math.pow(1.5,r))}const ov=1e3,ld=1,lv=300,cv=150;function fo(r){return ov*(r+1)}function dv(){return lv}function cd(r){return r===1?rv:r===2?av:null}function dd(r){return Lt.rack.sellValue+(r>Lt.rack.storageCapacity?cv:0)}function hv(r,e){const t=Lt[r].storageCapacity??0;return r==="rack"&&e!==void 0?e:t}const Lt={rack:{type:"rack",name:"Rack",cost:150,sellValue:75,description:"Stores up to 4 pallets vertically",icon:"🗄️",storageCapacity:4},"floor-slot":{type:"floor-slot",name:"Floor Slot",cost:20,sellValue:10,description:"Ground storage for 1 pallet",icon:"⬜",storageCapacity:1},conveyor:{type:"conveyor",name:"Conveyor",cost:100,sellValue:50,description:"Moves pallets automatically",icon:"➡️"},diverter:{type:"diverter",name:"Diverter",cost:150,sellValue:75,description:"Splits pallets to front, left and right via round-robin",icon:"🔀"},forklift:{type:"forklift",name:"Forklift",cost:500,sellValue:250,description:`Transports pallets, handles racks (wage: $${xr}/wave)`,icon:"🚜"},operator:{type:"operator",name:"Operator",cost:150,sellValue:75,description:`Manual labor for boxes (wage: $${Sr}/wave)`,icon:"👷"},"truck-dock":{type:"truck-dock",name:"Truck Dock",cost:500,sellValue:250,description:"Allows trucks to dock and unload/load",icon:"🚛"},"automated-truck-dock":{type:"automated-truck-dock",name:"Auto Truck Dock",cost:5e3,sellValue:2500,description:"Automatically unloads trucks to an adjacent conveyor",icon:"🤖"},"stacker-crane":{type:"stacker-crane",name:"Stacker Crane",cost:1e4,sellValue:5e3,description:"AS/RS stacker crane — $10,000 base + $1,000/row. Includes 8-level racks & conveyors",icon:"🏗️"},"forklift-agv":{type:"forklift-agv",name:"Forklift AGV",cost:2500,sellValue:1250,description:`Fast autonomous forklift, no worker slot needed (wage: $${wr}/wave)`,icon:"🤖"}};class uv{buildCounts=new Map;waveHistory=[];currentWaveOrderIncome=0;constructor(){T.on("entity:placed:complete",({type:e})=>{e&&Lt[e]&&this.incrementBuildCount(e)}),T.on("entity:removed:complete",({type:e})=>{e&&Lt[e]&&this.decrementBuildCount(e)}),T.on("outbound:order-completed",({reward:e})=>{this.currentWaveOrderIncome+=e}),T.on("wave:start",()=>{this.currentWaveOrderIncome=0})}getBuildableConfig(e){return Lt[e]}getAllBuildables(){return Object.values(Lt)}canAfford(e){const t=Lt[e];return z.canAfford(t.cost)}getHiredWorkerCount(){return this.getBuildCount("operator")+this.getBuildCount("forklift")}canHireWorker(){return this.getHiredWorkerCount()<z.get("workerLimit")}purchase(e){const t=Lt[e];if((e==="operator"||e==="forklift")&&!this.canHireWorker()||!z.spendMoney(t.cost))return!1;if(t.storageCapacity){const n=z.get("storageCapacity");z.updateStorageCapacity(n+t.storageCapacity)}return!0}sell(e,t){const n=Lt[e],i=e==="rack"?dd(t??n.storageCapacity??0):n.sellValue;if(z.addMoney(i),n.storageCapacity){const s=z.get("storageCapacity");z.updateStorageCapacity(Math.max(0,s-hv(e,t)))}return i}incrementBuildCount(e){const t=this.buildCounts.get(e)||0;this.buildCounts.set(e,t+1)}decrementBuildCount(e){const t=this.buildCounts.get(e)||0;this.buildCounts.set(e,Math.max(0,t-1))}getBuildCount(e){return this.buildCounts.get(e)||0}getTotalBuildCount(){let e=0;return this.buildCounts.forEach(t=>e+=t),e}grantWaveBonus(e){const t=200+e*50;return z.addMoney(t),t}deductWages(){const e=this.getBuildCount("operator"),t=this.getBuildCount("forklift"),n=this.getBuildCount("forklift-agv"),i=e*Sr+t*xr+n*wr;if(i>0){const s=z.get("money"),a=Math.min(i,s);z.spendMoney(a)}return i}pushWaveRecord(e,t,n){const i=this.currentWaveOrderIncome;this.waveHistory.push({wave:e,bonus:t,orderIncome:i,wages:n,net:t+i-n})}getCurrentWaveOrderIncome(){return this.currentWaveOrderIncome}getWaveHistory(){return[...this.waveHistory]}serialize(){return JSON.stringify({waveHistory:this.waveHistory,currentWaveOrderIncome:this.currentWaveOrderIncome})}deserialize(e){try{const t=JSON.parse(e);this.waveHistory=t.waveHistory||[],this.currentWaveOrderIncome=t.currentWaveOrderIncome||0}catch(t){console.error("Failed to deserialize economy state:",t)}}reset(){this.buildCounts.clear(),this.waveHistory=[],this.currentWaveOrderIncome=0}}const nr="warehouse-defender-save-",dc="warehouse-defender-last-slot",ir=5,ma=2;class fv{grid=null;getEntities=null;orderManager=null;economyManager=null;waveManager=null;currentSlot=1;setGrid(e){this.grid=e}setEntityProvider(e){this.getEntities=e}setOrderManager(e){this.orderManager=e}setEconomyManager(e){this.economyManager=e}setWaveManager(e){this.waveManager=e}getCurrentSlot(){return this.currentSlot}setCurrentSlot(e){e>=1&&e<=ir&&(this.currentSlot=e,localStorage.setItem(dc,String(e)))}restoreLastSlot(){const e=parseInt(localStorage.getItem(dc)??"1",10);this.currentSlot=isNaN(e)?1:Math.min(Math.max(e,1),ir)}saveToSlot(e,t){if(!this.grid||!this.getEntities)return console.warn("SaveManager not fully initialized"),!1;if(e<1||e>ir)return!1;try{const n=this.getEntities(),i={version:ma,timestamp:Date.now(),slotName:t??`Save ${e}`,gameState:z.serialize(),orders:this.orderManager?this.orderManager.serialize():'{"orders":[],"orderIdCounter":0}',economyState:this.economyManager?this.economyManager.serialize():void 0,waveState:this.waveManager?this.waveManager.serialize():void 0,inventoryState:je.serialize(),gridCells:this.serializeGrid(),entities:n.map(s=>s.toData())};return localStorage.setItem(nr+e,JSON.stringify(i)),this.setCurrentSlot(e),console.log(`Game saved to slot ${e}`),!0}catch(n){return console.error("Failed to save game:",n),!1}}save(){return this.saveToSlot(this.currentSlot)}loadFromSlot(e){try{const t=localStorage.getItem(nr+e);if(!t)return null;const n=JSON.parse(t);return n.version!==ma?(console.warn(`Slot ${e} has incompatible version, ignoring`),null):(this.setCurrentSlot(e),n)}catch(t){return console.error(`Failed to load slot ${e}:`,t),null}}load(){return this.loadFromSlot(this.currentSlot)}deleteSlot(e){localStorage.removeItem(nr+e),this.currentSlot===e&&(this.currentSlot=1),console.log(`Slot ${e} deleted`)}deleteSave(){this.deleteSlot(this.currentSlot)}hasSave(){return this.getSlotInfo(this.currentSlot).exists}getSlotInfo(e){try{const t=localStorage.getItem(nr+e);if(!t)return{slot:e,exists:!1};const n=JSON.parse(t);if(n.version!==ma)return{slot:e,exists:!1};const i=JSON.parse(n.gameState);return{slot:e,exists:!0,timestamp:n.timestamp,wave:i.wave,slotName:n.slotName}}catch{return{slot:e,exists:!1}}}getAllSlotInfos(){const e=[];for(let t=1;t<=ir;t++)e.push(this.getSlotInfo(t));return e}getSaveInfo(){if(!this.getAllSlotInfos().some(n=>n.exists))return{exists:!1};const t=this.getAllSlotInfos().find(n=>n.exists);return t?{exists:!0,timestamp:t.timestamp,wave:t.wave}:{exists:!1}}serializeGrid(){if(!this.grid)return[];const e=[];for(let t=0;t<this.grid.width;t++)for(let n=0;n<this.grid.height;n++){const i=this.grid.getCell(t,n);i&&i.occupied&&e.push({x:i.x,z:i.z,type:i.type,occupied:i.occupied})}return e}setupAutoSave(){}}const mt=new fv;class pv{camera;canvas;raycaster;groundPlane;state={mouseX:0,mouseY:0,mouseWorldPos:new A,isMouseDown:!1,isDragging:!1,rightMouseDown:!1,keys:new Set,touches:new Map};dragStart={x:0,y:0};DRAG_THRESHOLD=5;isMultiSelectActive=!1;shiftKeyDown=!1;shiftActivatedByKey=!1;touchState={initialDistance:0,initialAngle:0,lastDistance:0,lastAngle:0,isPinching:!1,touchStartTime:0,touchMoved:!1,lastTouchPos:{x:0,y:0}};constructor(e,t){this.camera=e,this.canvas=t,this.raycaster=new Kc,this.raycaster.params.Line={threshold:0},this.groundPlane=new kn(new A(0,1,0),0),this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("mouseup",this.onMouseUp),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this.onContextMenu),this.canvas.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this.onTouchEnd,{passive:!1}),this.canvas.addEventListener("touchcancel",this.onTouchEnd,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.canvas.addEventListener("dragstart",t=>t.preventDefault()),T.on("multi-select:active:changed",({active:t})=>{this.isMultiSelectActive=t}),T.on("input:camera-rotate-left",()=>this.camera.rotate(-Math.PI/4)),T.on("input:camera-rotate-right",()=>this.camera.rotate(Math.PI/4));const e=["isometric","top"];T.on("input:camera-view",t=>{e.includes(t)&&this.camera.setView(t)})}onMouseMove=e=>{if(this.state.mouseX=e.clientX,this.state.mouseY=e.clientY,this.updateWorldPosition(),this.state.rightMouseDown){const t=e.clientX-this.dragStart.x,n=e.clientY-this.dragStart.y;(Math.abs(t)>this.DRAG_THRESHOLD||Math.abs(n)>this.DRAG_THRESHOLD)&&(this.state.isDragging=!0,this.camera.pan(t,n),this.dragStart.x=e.clientX,this.dragStart.y=e.clientY)}T.emit("input:mousemove",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone()})};onMouseDown=e=>{e.button===0?(this.state.isMouseDown=!0,this.state.mouseX=e.clientX,this.state.mouseY=e.clientY,this.updateWorldPosition(),this.dragStart={x:e.clientX,y:e.clientY},T.emit("input:click",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone(),target:e.target})):e.button===2&&(this.state.rightMouseDown=!0,this.dragStart={x:e.clientX,y:e.clientY})};onMouseUp=e=>{e.button===0?(this.state.isMouseDown=!1,this.state.isDragging=!1,T.emit("input:mouseup",{screenX:e.clientX,screenY:e.clientY,worldPos:this.state.mouseWorldPos.clone()})):e.button===2&&(this.state.rightMouseDown=!1,this.state.isDragging=!1)};onWheel=e=>{e.preventDefault();const t=e.deltaY>0?-1:1;this.camera.zoomOut(t),T.emit("input:zoom",{delta:t})};onContextMenu=e=>{e.preventDefault()};onTouchStart=e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t];this.state.touches.set(n.identifier,{x:n.clientX,y:n.clientY})}if(e.touches.length===1){const t=e.touches[0];if(this.touchState.touchStartTime=Date.now(),this.touchState.touchMoved=!1,this.touchState.lastTouchPos={x:t.clientX,y:t.clientY},this.state.mouseX=t.clientX,this.state.mouseY=t.clientY,this.updateWorldPosition(),this.isMultiSelectActive){const n=document.elementFromPoint(t.clientX,t.clientY);T.emit("input:click",{screenX:t.clientX,screenY:t.clientY,worldPos:this.state.mouseWorldPos.clone(),target:n}),this.touchState.touchMoved=!0}}else if(e.touches.length===2){this.touchState.isPinching=!0;const t=e.touches[0],n=e.touches[1];this.touchState.initialDistance=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),this.touchState.initialAngle=Math.atan2(n.clientY-t.clientY,n.clientX-t.clientX),this.touchState.lastDistance=this.touchState.initialDistance,this.touchState.lastAngle=this.touchState.initialAngle}};onTouchMove=e=>{e.preventDefault();const t=e.touches;for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches[n];this.state.touches.set(i.identifier,{x:i.clientX,y:i.clientY})}if(t.length===1){const n=t[0],i=n.clientX-this.touchState.lastTouchPos.x,s=n.clientY-this.touchState.lastTouchPos.y;this.isMultiSelectActive?(this.touchState.touchMoved=!0,this.touchState.lastTouchPos={x:n.clientX,y:n.clientY},this.state.mouseX=n.clientX,this.state.mouseY=n.clientY,this.updateWorldPosition(),T.emit("input:mousemove",{screenX:n.clientX,screenY:n.clientY,worldPos:this.state.mouseWorldPos.clone()})):((Math.abs(i)>this.DRAG_THRESHOLD||Math.abs(s)>this.DRAG_THRESHOLD)&&(this.touchState.touchMoved=!0,this.camera.pan(i,s)),this.touchState.lastTouchPos={x:n.clientX,y:n.clientY},this.state.mouseX=n.clientX,this.state.mouseY=n.clientY,this.updateWorldPosition())}else if(t.length===2){const n=t[0],i=t[1],s=Math.hypot(i.clientX-n.clientX,i.clientY-n.clientY),a=Math.atan2(i.clientY-n.clientY,i.clientX-n.clientX),o=s-this.touchState.lastDistance;if(Math.abs(o)>2){const c=o*.05;this.camera.zoomOut(-c),this.touchState.lastDistance=s}let l=a-this.touchState.lastAngle;l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),Math.abs(l)>.02&&(this.camera.rotate(l),this.touchState.lastAngle=a),this.touchState.touchMoved=!0}};onTouchEnd=e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++)this.state.touches.delete(e.changedTouches[t].identifier);if(e.touches.length===0){const t=Date.now()-this.touchState.touchStartTime;if(this.isMultiSelectActive)T.emit("input:mouseup",{screenX:this.touchState.lastTouchPos.x,screenY:this.touchState.lastTouchPos.y,worldPos:this.state.mouseWorldPos.clone()});else if(!this.touchState.touchMoved&&t<300){const n=e.changedTouches[0],i=n?document.elementFromPoint(n.clientX,n.clientY):e.target;T.emit("input:click",{screenX:this.touchState.lastTouchPos.x,screenY:this.touchState.lastTouchPos.y,worldPos:this.state.mouseWorldPos.clone(),target:i})}this.touchState.isPinching=!1}else if(this.touchState.isPinching=!1,e.touches.length===1){const t=e.touches[0];this.touchState.lastTouchPos={x:t.clientX,y:t.clientY}}};onKeyDown=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)&&!((e.metaKey||e.ctrlKey)&&e.code==="KeyD")){switch(this.state.keys.add(e.code),e.code){case"Escape":T.emit("input:escape");break;case"Space":e.preventDefault(),T.emit("input:space");break;case"KeyR":this.camera.getView()==="isometric"&&T.emit("input:rotate");break;case"KeyQ":this.camera.getView()==="isometric"&&this.camera.rotate(Math.PI/4);break;case"KeyE":this.camera.getView()==="isometric"&&this.camera.rotate(-Math.PI/4);break;case"Delete":case"Backspace":T.emit("input:delete");break;case"KeyM":T.emit("input:move-shortcut");break;case"Digit1":case"Digit2":case"Digit3":T.emit("input:number",{number:parseInt(e.code.slice(-1))});break}(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.shiftKeyDown||(this.shiftKeyDown=!0,this.isMultiSelectActive?this.shiftActivatedByKey=!1:(T.emit("ui:multi-select-activate",{source:"shift"}),this.shiftActivatedByKey=!0))),T.emit("input:keydown",{code:e.code,key:e.key})}};onKeyUp=e=>{this.state.keys.delete(e.code),T.emit("input:keyup",{code:e.code,key:e.key}),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.shiftKeyDown=!1,this.shiftActivatedByKey&&(T.emit("ui:multi-select-deactivate",{source:"shift"}),this.shiftActivatedByKey=!1))};updateWorldPosition(){const e=this.state.mouseX/window.innerWidth*2-1,t=-(this.state.mouseY/window.innerHeight)*2+1;this.raycaster.setFromCamera(new Fe(e,t),this.camera.instance);const n=new A;this.raycaster.ray.intersectPlane(this.groundPlane,n),n&&this.state.mouseWorldPos.copy(n)}getState(){return this.state}getMouseWorldPosition(){return this.state.mouseWorldPos.clone()}isKeyDown(e){return this.state.keys.has(e)}update(e){const t=10*e;(this.isKeyDown("KeyW")||this.isKeyDown("ArrowUp"))&&this.camera.pan(0,t*50),(this.isKeyDown("KeyS")||this.isKeyDown("ArrowDown"))&&this.camera.pan(0,-t*50),(this.isKeyDown("KeyA")||this.isKeyDown("ArrowLeft"))&&this.camera.pan(t*50,0),(this.isKeyDown("KeyD")||this.isKeyDown("ArrowRight"))&&this.camera.pan(-t*50,0),this.isKeyDown("KeyQ")&&this.camera.getView()==="top"&&this.camera.zoomIn(),this.isKeyDown("KeyE")&&this.camera.getView()==="top"&&this.camera.zoomOut()}raycastObjects(e){const t=this.state.mouseX/window.innerWidth*2-1,n=-(this.state.mouseY/window.innerHeight)*2+1;return this.raycaster.setFromCamera(new Fe(t,n),this.camera.instance),this.raycaster.intersectObjects(e,!0)}dispose(){this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("touchend",this.onTouchEnd),this.canvas.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}}function hc(r,e,t,n){const i=t-r,s=n-e;if(i===0&&s===0)return[{x:r,z:e,direction:"south"}];const a=[];if(Math.abs(i)>=Math.abs(s)){const o=i>0?"east":"west",l=i>0?1:-1;for(let c=r;c!==t+l;c+=l)a.push({x:c,z:e,direction:o})}else{const o=s>0?"south":"north",l=s>0?1:-1;for(let c=e;c!==n+l;c+=l)a.push({x:r,z:c,direction:o})}return a}class ci{grid;registry=new Map;entryPointCache=null;constructor(e){this.grid=e}register(e,t,n){this.registry.set(`${t},${n}`,e),this.entryPointCache=null}unregister(e,t){const n=`${e},${t}`,i=this.registry.get(n);if(i){for(const s of this.registry.values())s.unlinkTarget(i);this.registry.delete(n),this.entryPointCache=null}return i??null}getAt(e,t){return this.registry.get(`${e},${t}`)??null}getMap(){return this.registry}entries(){return this.registry.entries()}values(){return this.registry.values()}get size(){return this.registry.size}isEntryPoint(e){return this.entryPointCache===null&&this.rebuildEntryPointCache(),this.entryPointCache.has(e)}isExitPoint(e){return e.isUnlinked()}invalidateCache(){this.entryPointCache=null}rebuildEntryPointCache(){const e=new Set,t=Array.from(this.registry.entries()).map(([n,i])=>{const[s,a]=n.split(",").map(Number);return{conveyor:i,x:s,z:a}});for(const n of t){const i=n.conveyor;let s=!1;for(const a of t){const o=a.conveyor;if(o!==i){if(o.hasLinkTo(i)){s=!0;break}for(const{offset:l}of o.getOutputSlots()){const c=a.x+l.dx,d=a.z+l.dz;if(!(c!==n.x||d!==n.z)&&ci.acceptsFrom(i,l)){s=!0;break}}if(s)break}}s||e.add(i)}this.entryPointCache=e}linkConveyor(e,t,n){for(const{slot:i,offset:s}of e.getOutputSlots()){const a=this.getAt(t+s.dx,n+s.dz);a&&ci.acceptsFrom(a,s)&&e.setLink(i,a)}for(const[i,s]of[[-1,0],[1,0],[0,-1],[0,1]]){const a=this.getAt(t+i,n+s);if(a)for(const{slot:o,offset:l}of a.getOutputSlots())l.dx!==-i||l.dz!==-s||ci.acceptsFrom(e,l)&&a.setLink(o,e)}this.entryPointCache=null}static acceptsFrom(e,t){const n=e.getInputOffsets();if(n===null)return!0;const i=-t.dx,s=-t.dz;return n.some(a=>a.dx===i&&a.dz===s)}relinkAll(e){const t=e??Array.from(this.registry.values());for(const n of t)n.clearLinks();for(const[n,i]of this.registry){const[s,a]=n.split(",").map(Number);this.linkConveyor(i,s,a)}this.entryPointCache=null}linkAutomatedDockAt(e,t,n){const i=n(e,t);if(i){if(i instanceof xt){const s=[t-1,t+1,t-2,t+2];for(const a of s){const o=n(e,a);if(o instanceof ht){i.setLink(0,o),o.isAutomationEntrance=!0,o.isAutomationExit=!0;return}}}else if(i instanceof ht){const s=[t-1,t+1,t-2,t+2];for(const a of s){const o=n(e,a);o instanceof xt&&o.isUnlinked()&&(o.setLink(0,i),i.isAutomationEntrance=!0,i.isAutomationExit=!0)}}}}isConnectedToAutomatedDock(e,t){return t.some(n=>n.hasLinkTo(e))}reset(){this.registry.clear(),this.entryPointCache=null}}class mv{grid;scene;economy;conveyorManager;selectedType=null;previewEntity=null;previewMesh=null;isPlacementMode=!1;conveyorDirection="north";isLineMode=!1;lineStartPos=null;linePreviewEntities=[];placedEntities=new Map;workerEntities=new Map;workerIdsByCell=new Map;deferredWorkerPlacements=[];constructor(e,t,n,i){this.scene=e,this.grid=t,this.economy=n,this.conveyorManager=i??new ci(this.grid),this.setupEventListeners()}setupEventListeners(){T.on("ui:build-select",({type:e})=>{e===null?this.cancelPlacement():this.selectBuildable(e)}),T.on("input:mousemove",({worldPos:e})=>{this.updatePreview(e)}),T.on("input:click",({worldPos:e})=>{this.isPlacementMode&&this.selectedType&&this.attemptPlace(e)}),T.on("input:escape",()=>{this.isLineMode&&this.lineStartPos!==null?(this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0)):this.cancelPlacement()}),T.on("input:rotate",()=>{this.rotatePreview()}),T.on("ui:conveyor-line-mode",({enabled:e})=>{this.setLineMode(e)}),T.on("phase:operations",()=>{this.cancelPlacement()}),T.on("grid:expanded",({shiftX:e,shiftZ:t})=>{if(e===0&&t===0){this.retryDeferredWorkerPlacements();return}const n=Array.from(this.placedEntities.entries());this.placedEntities.clear();for(const[,s]of n){const{x:a,z:o}=s.getGridPosition(),l=a+e,c=o+t;s.setGridPosition(l,c),this.placedEntities.set(`${l},${c}`,s)}const i=Array.from(this.workerEntities.values());this.workerIdsByCell.clear();for(const s of i){const{x:a,z:o}=s.getGridPosition(),l=a+e,c=o+t;if(this.isWorkerCellFree(l,c)){s.setGridPosition(l,c),s.setWorldPosition(this.grid.gridToWorld(l,c)),this.addWorkerToCell(s.id,l,c);continue}const h=this.findAnyFreeWorkerCell(l,c);if(h){s.setGridPosition(h.x,h.z),s.setWorldPosition(this.grid.gridToWorld(h.x,h.z)),this.addWorkerToCell(s.id,h.x,h.z),_t.warn(`[PlacementSystem] Worker ${s.type} moved to fallback (${h.x},${h.z}) after expansion conflict at (${l},${c}).`);continue}this.scene.remove(s.mesh),this.workerEntities.delete(s.id),this.queueDeferredWorkerPlacement(s.type,l,c,this.getWorkerRestoreOptions(s)),_t.warn(`[PlacementSystem] Deferred worker ${s.type}; no free cell after expansion near (${l},${c}).`),s.dispose()}this.retryDeferredWorkerPlacements()})}selectBuildable(e){z.get("phase")==="build"&&this.economy.canAfford(e)&&(this.clearPreview(),this.selectedType=e,this.isPlacementMode=!0,this.createPreview(e),e==="stacker-crane"&&(this.isLineMode=!0,this.lineStartPos=null,this.clearLinePreview(),T.emit("ui:conveyor-line-status",{status:"start"})),T.emit("entity:selected",{type:e}))}createPreview(e){let t;switch(e){case"rack":t=new un;break;case"floor-slot":t=new pa;break;case"conveyor":t=new ht(this.conveyorDirection);break;case"diverter":t=new Gt(this.conveyorDirection);break;case"forklift":t=new vt;break;case"forklift-agv":t=new se;break;case"operator":t=new It;break;case"truck-dock":t=new oc;break;case"automated-truck-dock":t=new xt;break;case"stacker-crane":t=new si(1,"north-south");break;default:return}t.mesh.traverse(n=>{if(n instanceof N){const i=n.material;n.material=i.clone(),n.material.transparent=!0,n.material.opacity=.6}}),this.previewEntity=t,this.previewMesh=t.mesh,this.scene.add(this.previewMesh)}updatePreview(e){if(!this.previewMesh||!this.isPlacementMode)return;if((this.selectedType==="conveyor"||this.selectedType==="stacker-crane")&&this.isLineMode&&this.lineStartPos!==null){this.updateLinePreview(e);return}const t=this.grid.worldToGrid(e);if(t){const n=this.grid.gridToWorld(t.x,t.z);this.previewMesh.position.copy(n);let i=this.grid.canPlace(t.x,t.z);if(this.selectedType&&this.isWorkerBuildableType(this.selectedType)&&(i=i&&!this.hasWorkerAtCell(t.x,t.z)),this.selectedType==="truck-dock"||this.selectedType==="automated-truck-dock"){const s=t.z===this.grid.height-1,a=t.z===0;!s&&!a&&(i=!1)}else{const s=this.grid.getCell(t.x,t.z);s&&s.type==="dock"&&(i=!1)}this.grid.highlightCell(e,i),this.updatePreviewColor(i&&this.economy.canAfford(this.selectedType))}else this.grid.hideHighlight()}updatePreviewColor(e){this.previewMesh&&this.previewMesh.traverse(t=>{if(t instanceof N){const n=t.material;e?n.emissive.setHex(17408):n.emissive.setHex(4456448)}})}attemptPlace(e){if(!this.selectedType)return;if((this.selectedType==="conveyor"||this.selectedType==="stacker-crane")&&this.isLineMode){this.attemptPlaceLine(e);return}const t=this.grid.worldToGrid(e);if(!t)return;let n=this.grid.canPlace(t.x,t.z);if(this.isWorkerBuildableType(this.selectedType)&&(n=n&&!this.hasWorkerAtCell(t.x,t.z)),this.selectedType==="truck-dock"||this.selectedType==="automated-truck-dock"){const s=t.z===this.grid.height-1,a=t.z===0;!s&&!a&&(n=!1)}else{const s=this.grid.getCell(t.x,t.z);s&&s.type==="dock"&&(n=!1)}if(!n||!this.economy.purchase(this.selectedType))return;const i=this.createEntity(this.selectedType);if(i){if(this.isWorkerBuildableType(this.selectedType))this.placeWorkerEntity(i,t.x,t.z);else{const s=this.getCellType(this.selectedType);this.grid.place(t.x,t.z,i,s),i.setGridPosition(t.x,t.z),this.scene.add(i.mesh),this.placedEntities.set(`${t.x},${t.z}`,i)}this.linkAutomatedDockConveyor(t.x,t.z),i instanceof xt&&i.orientMesh(t.z,this.grid.height),T.emit("entity:placed:complete",{entity:i,type:this.selectedType,gridX:t.x,gridZ:t.z}),this.economy.canAfford(this.selectedType)||this.cancelPlacement()}}placeEntity(e,t,n,i){const s=this.createEntity(e,i?.direction,i?.capacity,i?.craneLength);if(!s)return null;let a=t,o=n;if(this.isWorkerBuildableType(e)){if(!this.isWorkerCellFree(t,n))if(i?.allowWorkerFallback){const l=this.findAnyFreeWorkerCell(t,n);if(!l)return null;a=l.x,o=l.z,_t.warn(`[PlacementSystem] Worker ${e} restored to fallback (${a},${o}) from blocked cell (${t},${n}).`)}else return null;this.placeWorkerEntity(s,a,o)}else{const l=this.getCellType(e);if(!this.grid.place(t,n,s,l))return null;s.setGridPosition(t,n),this.scene.add(s.mesh),this.placedEntities.set(`${t},${n}`,s)}if(s instanceof si&&s.recomputeAisleCells(),i?.storageType&&"storageType"in s&&(s.storageType=i.storageType),i?.allowedTaskTypes!==void 0&&"allowedTaskTypes"in s&&(s.allowedTaskTypes=i.allowedTaskTypes??null),i?.equipmentTier!==void 0&&s instanceof It&&s.setEquipmentTier(i.equipmentTier),i?.storedPallets&&s instanceof un){const l=i.storedPalletIds??[],c=i.storedSkus??[];for(let d=0;d<i.storedPallets;d++){let h=l[d]??"";!h&&c[d]!==void 0?h=je.registerPallet(c[d]).id:h||(h=je.registerPallet(0).id),s.store(h)}}else if(i?.hasPallet&&"store"in s){let l=i.storedPalletId??"";!l&&i.storedSku!==void 0&&i.storedSku>=0?l=je.registerPallet(i.storedSku).id:l||(l=je.registerPallet(0).id),s.store(l)}if(i?.allowedSku!==void 0&&"allowedSku"in s&&(s.allowedSku=i.allowedSku??null),this.isWorkerBuildableType(e)||(this.linkAutomatedDockConveyor(t,n),s instanceof xt&&s.orientMesh(n,this.grid.height)),i?.updateStorageCapacity){const l=Lt[e];if(l?.storageCapacity){const c=z.get("storageCapacity");z.updateStorageCapacity(c+l.storageCapacity)}}return T.emit("entity:placed:complete",{entity:s,type:e,gridX:a,gridZ:o}),s}createEntity(e,t,n,i){switch(e){case"rack":return new un(n??4);case"floor-slot":return new pa;case"conveyor":return new ht(t||this.conveyorDirection);case"diverter":return new Gt(t||this.conveyorDirection);case"forklift":return new vt;case"forklift-agv":return new se;case"operator":return new It;case"truck-dock":return new oc;case"automated-truck-dock":return new xt;case"stacker-crane":{const s=t==="east"||t==="west"?"east-west":"north-south",a=i??1;return new si(a,s)}default:return null}}getCellType(e){switch(e){case"rack":return"rack";case"floor-slot":return"floor";case"conveyor":return"conveyor";case"diverter":return"conveyor";case"stacker-crane":return"conveyor";case"truck-dock":return"dock";case"automated-truck-dock":return"dock";default:return"floor"}}isWorkerBuildableType(e){return e==="operator"||e==="forklift"||e==="forklift-agv"}isWorkerEntityType(e){return e==="operator"||e==="forklift"||e==="forklift-agv"}isWorkerEntity(e){return this.isWorkerEntityType(e.type)}hasWorkerAtCell(e,t,n){const i=`${e},${t}`,s=this.workerIdsByCell.get(i);if(!s||s.size===0)return!1;if(!n||n.size===0)return!0;for(const a of s)if(!n.has(a))return!0;return!1}addWorkerToCell(e,t,n){const i=`${t},${n}`,s=this.workerIdsByCell.get(i)??new Set;s.add(e),this.workerIdsByCell.set(i,s)}removeWorkerFromCell(e,t,n){const i=`${t},${n}`,s=this.workerIdsByCell.get(i);s&&(s.delete(e),s.size===0&&this.workerIdsByCell.delete(i))}placeWorkerEntity(e,t,n){e.setGridPosition(t,n),e.setWorldPosition(this.grid.gridToWorld(t,n)),this.scene.add(e.mesh),this.workerEntities.set(e.id,e),this.addWorkerToCell(e.id,t,n)}isWorkerCellFree(e,t){return this.grid.isInBounds(e,t)?this.grid.canPlace(e,t)&&!this.hasWorkerAtCell(e,t):!1}findAnyFreeWorkerCell(e,t){if(this.isWorkerCellFree(e,t))return{x:e,z:t};const n=Math.max(this.grid.width,this.grid.height);for(let i=1;i<=n;i++){for(let s=-i;s<=i;s++){const a=t-i,o=t+i,l=e+s;if(this.isWorkerCellFree(l,a))return{x:l,z:a};if(this.isWorkerCellFree(l,o))return{x:l,z:o}}for(let s=-i+1;s<=i-1;s++){const a=e-i,o=e+i,l=t+s;if(this.isWorkerCellFree(a,l))return{x:a,z:l};if(this.isWorkerCellFree(o,l))return{x:o,z:l}}}for(let i=0;i<this.grid.height;i++)for(let s=0;s<this.grid.width;s++)if(this.isWorkerCellFree(s,i))return{x:s,z:i};return null}getWorkerRestoreOptions(e){const t={};return"allowedTaskTypes"in e&&(t.allowedTaskTypes=e.allowedTaskTypes),e instanceof It&&(t.equipmentTier=e.equipmentTier),t}queueDeferredWorkerPlacement(e,t,n,i){const s={type:e,preferredX:t,preferredZ:n,options:i};this.deferredWorkerPlacements.push(s)}retryDeferredWorkerPlacements(e=Number.POSITIVE_INFINITY){if(this.deferredWorkerPlacements.length===0||e<=0)return 0;const t=[];let n=0;for(const i of this.deferredWorkerPlacements){if(n>=e){t.push(i);continue}this.placeEntity(i.type,i.preferredX,i.preferredZ,{...i.options,allowWorkerFallback:!0})?n++:t.push(i)}return this.deferredWorkerPlacements=t,n}getDeferredWorkerCount(){return this.deferredWorkerPlacements.length}rotatePreview(){if(!this.isPlacementMode||this.selectedType!=="conveyor"&&this.selectedType!=="diverter")return;const e=["south","west","north","east"],t=e.indexOf(this.conveyorDirection);this.conveyorDirection=e[(t+1)%4],this.previewEntity instanceof ht&&this.previewEntity.setDirection(this.conveyorDirection)}clearPreview(){this.previewMesh&&(this.scene.remove(this.previewMesh),this.previewEntity?.dispose(),this.previewMesh=null,this.previewEntity=null),this.grid.hideHighlight()}cancelPlacement(){this.clearPreview(),this.clearLinePreview(),this.lineStartPos=null,this.isLineMode=!1,this.selectedType=null,this.isPlacementMode=!1,T.emit("entity:selected",{type:null})}setLineMode(e){this.isLineMode=e,this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),e&&T.emit("ui:conveyor-line-status",{status:"start"})}clearLinePreview(){for(const e of this.linePreviewEntities)this.scene.remove(e.mesh),e.dispose();this.linePreviewEntities=[]}updateLinePreview(e){this.clearLinePreview();const t=this.grid.worldToGrid(e);if(!t||!this.lineStartPos)return;if(this.previewMesh&&(this.previewMesh.visible=!1),this.selectedType==="stacker-crane"){this.updateStackerCranePreview(t);return}const n=hc(this.lineStartPos.x,this.lineStartPos.z,t.x,t.z);for(const i of n){const s=this.grid.canPlace(i.x,i.z),a=this.grid.getCell(i.x,i.z),o=s&&(!a||a.type!=="dock")&&this.economy.canAfford("conveyor"),l=new ht(i.direction);l.mesh.traverse(d=>{if(d instanceof N){const h=d.material.clone();h.transparent=!0,h.opacity=.6,h.emissive.setHex(o?17408:4456448),d.material=h}});const c=this.grid.gridToWorld(i.x,i.z);l.mesh.position.copy(c),this.scene.add(l.mesh),this.linePreviewEntities.push(l)}this.grid.hideHighlight()}updateStackerCranePreview(e){if(!this.lineStartPos)return;const t=cc(this.lineStartPos.x,this.lineStartPos.z,e.x,e.z),n=lc(t.aisleCells.length),i=z.canAfford(n),a=[...t.aisleCells,...t.rackCells,...t.conveyorCells.map(l=>({x:l.x,z:l.z}))].every(l=>this.grid.canPlace(l.x,l.z)),o=i&&a;for(const l of t.aisleCells)this.addPreviewBox(l.x,l.z,16032353,o);for(const l of t.rackCells){const c=new un(8);this.makePreviewEntity(c,l.x,l.z,o)}for(const l of t.conveyorCells){const c=new ht(l.direction);this.makePreviewEntity(c,l.x,l.z,o)}this.grid.hideHighlight()}addPreviewBox(e,t,n,i){const s=new pa;this.makePreviewEntity(s,e,t,i)}makePreviewEntity(e,t,n,i){e.mesh.traverse(a=>{if(a instanceof N){const o=a.material.clone();o.transparent=!0,o.opacity=.4,o.emissive.setHex(i?17408:4456448),a.material=o}});const s=this.grid.gridToWorld(t,n);e.mesh.position.copy(s),this.scene.add(e.mesh),this.linePreviewEntities.push(e)}attemptPlaceLine(e){const t=this.grid.worldToGrid(e);if(!t)return;const n=this.grid.getCell(t.x,t.z);if(n&&n.type==="dock")return;if(!this.lineStartPos){this.lineStartPos={x:t.x,z:t.z},T.emit("ui:conveyor-line-status",{status:"end"});return}if(this.selectedType==="stacker-crane"){this.attemptPlaceStackerCrane(t);return}const i=hc(this.lineStartPos.x,this.lineStartPos.z,t.x,t.z);this.clearLinePreview();for(const s of i){if(!this.grid.canPlace(s.x,s.z))continue;const a=this.grid.getCell(s.x,s.z);if(a&&a.type==="dock")continue;if(!this.economy.purchase("conveyor"))break;const o=this.createEntity("conveyor",s.direction);o&&(this.grid.place(s.x,s.z,o,"conveyor"),o.setGridPosition(s.x,s.z),this.scene.add(o.mesh),this.placedEntities.set(`${s.x},${s.z}`,o),this.relinkAutomatedDocks(),T.emit("entity:placed:complete",{entity:o,type:"conveyor",gridX:s.x,gridZ:s.z}))}this.lineStartPos=null,this.previewMesh&&(this.previewMesh.visible=!0),T.emit("ui:conveyor-line-status",{status:"start"}),this.economy.canAfford("conveyor")||this.cancelPlacement()}attemptPlaceStackerCrane(e){if(!this.lineStartPos)return;const t=cc(this.lineStartPos.x,this.lineStartPos.z,e.x,e.z),n=[...t.aisleCells,...t.rackCells,...t.conveyorCells.map(o=>({x:o.x,z:o.z}))];for(const o of n)if(!this.grid.canPlace(o.x,o.z)){this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),T.emit("ui:conveyor-line-status",{status:"start"});return}const i=t.aisleCells.length,s=lc(i);if(!z.canAfford(s)){this.lineStartPos=null,this.clearLinePreview(),this.previewMesh&&(this.previewMesh.visible=!0),T.emit("ui:conveyor-line-status",{status:"start"});return}z.spendMoney(s),this.clearLinePreview();const a=new si(i,t.aisleDirection);a.aisleCells=t.aisleCells,this.grid.place(t.aisleCells[0].x,t.aisleCells[0].z,a,"conveyor"),a.setGridPosition(t.aisleCells[0].x,t.aisleCells[0].z);for(let o=1;o<t.aisleCells.length;o++){const l=t.aisleCells[o],c=this.grid.getCell(l.x,l.z);c&&(c.occupied=!0,c.type="conveyor",c.walkable=!1)}this.scene.add(a.mesh);for(const o of t.aisleCells)this.placedEntities.set(`${o.x},${o.z}`,a);for(const o of t.rackCells){const l=new un(8);this.grid.place(o.x,o.z,l,"rack"),l.setGridPosition(o.x,o.z),this.scene.add(l.mesh),this.placedEntities.set(`${o.x},${o.z}`,l),a.childRacks.push(l),l.ownedByStackerCrane=!0;const c=z.get("storageCapacity");z.updateStorageCapacity(c+8),T.emit("entity:placed:complete",{entity:l,type:"rack",gridX:o.x,gridZ:o.z})}for(const o of t.conveyorCells){const l=new ht(o.direction);this.grid.place(o.x,o.z,l,"conveyor"),l.setGridPosition(o.x,o.z),this.scene.add(l.mesh),this.placedEntities.set(`${o.x},${o.z}`,l),a.childConveyors.push(l),l.isAutomationEntrance=a.isEntranceConveyor(l),l.isAutomationExit=!a.isEntranceConveyor(l),T.emit("entity:placed:complete",{entity:l,type:"conveyor",gridX:o.x,gridZ:o.z})}T.emit("entity:placed:complete",{entity:a,type:"stacker-crane",gridX:t.aisleCells[0].x,gridZ:t.aisleCells[0].z}),this.lineStartPos=null,this.previewMesh&&(this.previewMesh.visible=!0),T.emit("ui:conveyor-line-status",{status:"start"}),z.canAfford(ad)||this.cancelPlacement()}relocateEntity(e,t,n,i){const s=`${e},${t}`,a=this.placedEntities.get(s)??Array.from(this.workerEntities.values()).find(l=>{const c=l.getGridPosition();return c.x===e&&c.z===t});if(!a)return!1;if(this.isWorkerEntity(a))return!this.grid.canPlace(n,i)||this.hasWorkerAtCell(n,i,new Set([a.id]))?!1:(this.removeWorkerFromCell(a.id,e,t),a.setGridPosition(n,i),a.setWorldPosition(this.grid.gridToWorld(n,i)),this.addWorkerToCell(a.id,n,i),!0);const o=this.getCellType(a.type);return this.grid.remove(e,t),this.grid.place(n,i,a,o)?(a.setGridPosition(n,i),this.placedEntities.delete(s),this.placedEntities.set(`${n},${i}`,a),this.retryDeferredWorkerPlacements(1),!0):(this.grid.place(e,t,a,o),a.setGridPosition(e,t),!1)}moveEntityToWorldPos(e,t){const n=this.grid.worldToGrid(t);if(!n)return!1;const{x:i,z:s}=e.getGridPosition();if(n.x===i&&n.z===s||!this.grid.canPlace(n.x,n.z)||this.isWorkerEntity(e)&&this.hasWorkerAtCell(n.x,n.z,new Set([e.id])))return!1;if(e.type==="truck-dock"||e.type==="automated-truck-dock"){const o=n.z===this.grid.height-1,l=n.z===0;if(!o&&!l)return!1}else{const o=this.grid.getCell(n.x,n.z);if(o&&o.type==="dock")return!1}const a=this.relocateEntity(i,s,n.x,n.z);return a&&T.emit("entity:moved",{entity:e,fromX:i,fromZ:s,gridX:n.x,gridZ:n.z}),a}removeEntity(e){if(!e)return null;const{x:t,z:n}=e.getGridPosition(),i=`${t},${n}`,s=this.isWorkerEntity(e)?this.workerEntities.get(e.id):this.placedEntities.get(i);if(!s)return null;const a=s.type;if(Lt[a]){const l=a==="rack"&&"capacity"in s?s.capacity:void 0;this.economy.sell(a,l)}return this.isWorkerEntity(s)?(this.removeWorkerFromCell(s.id,t,n),this.workerEntities.delete(s.id)):(this.grid.remove(t,n),this.placedEntities.delete(i)),this.scene.remove(s.mesh),s.dispose(),T.emit("entity:removed:complete",{entity:s,type:a,gridX:t,gridZ:n}),this.retryDeferredWorkerPlacements(1),s}getEntityAt(e,t){const n=`${e},${t}`,i=this.placedEntities.get(n);if(i)return i;const s=this.workerIdsByCell.get(n);if(!s||s.size===0)return null;const[a]=Array.from(s.values());return this.workerEntities.get(a)??null}updateEntityPosition(e,t,n,i,s){if(this.isWorkerEntity(e)){this.removeWorkerFromCell(e.id,t,n),this.addWorkerToCell(e.id,i,s);return}this.placedEntities.delete(`${t},${n}`),this.placedEntities.set(`${i},${s}`,e)}batchUpdateEntityPositions(e){for(const{entity:t,fromX:n,fromZ:i}of e){if(this.isWorkerEntity(t)){this.removeWorkerFromCell(t.id,n,i);continue}this.placedEntities.delete(`${n},${i}`)}for(const{entity:t,toX:n,toZ:i}of e){if(this.isWorkerEntity(t)){this.addWorkerToCell(t.id,n,i);continue}this.placedEntities.set(`${n},${i}`,t)}}getCellTypeForBuildable(e){return this.getCellType(e)}linkAutomatedDockConveyor(e,t){this.conveyorManager.linkAutomatedDockAt(e,t,(n,i)=>this.placedEntities.get(`${n},${i}`)??null)}getEntityById(e){const t=this.workerEntities.get(e);if(t)return t;for(const n of this.placedEntities.values())if(n.id===e)return n;return null}getAllEntities(){return[...Array.from(this.placedEntities.values()),...Array.from(this.workerEntities.values())]}getEntitiesByType(e){return this.getAllEntities().filter(t=>t.type===e)}relinkStackerCraneChildren(){for(const e of this.placedEntities.values()){if(!(e instanceof si))continue;const t=e;if(t.childRacks.length>0||t.childConveyors.length>0||t.aisleCells.length===0)continue;const n=t.aisleDirection==="north-south";for(const a of t.aisleCells){const o=n?[{dx:-1,dz:0},{dx:1,dz:0}]:[{dx:0,dz:-1},{dx:0,dz:1}];for(const l of o){const c=this.placedEntities.get(`${a.x+l.dx},${a.z+l.dz}`);c instanceof un&&!t.childRacks.includes(c)&&(t.childRacks.push(c),c.ownedByStackerCrane=!0)}}const i=t.aisleCells.map(a=>a.x),s=t.aisleCells.map(a=>a.z);if(n){const a=i[0],o=Math.min(...s),l=Math.max(...s);for(const c of[a-1,a+1])for(const d of[o-1,l+1]){const h=this.placedEntities.get(`${c},${d}`);h instanceof ht&&!t.childConveyors.includes(h)&&(t.childConveyors.push(h),h.isAutomationEntrance=t.isEntranceConveyor(h),h.isAutomationExit=!t.isEntranceConveyor(h))}}else{const a=s[0],o=Math.min(...i),l=Math.max(...i);for(const c of[a-1,a+1])for(const d of[o-1,l+1]){const h=this.placedEntities.get(`${d},${c}`);h instanceof ht&&!t.childConveyors.includes(h)&&(t.childConveyors.push(h),h.isAutomationEntrance=t.isEntranceConveyor(h),h.isAutomationExit=!t.isEntranceConveyor(h))}}}}relinkAutomatedDocks(){for(const[e,t]of this.placedEntities){if(!(t instanceof xt)||t.connectedConveyor!==null)continue;const[n,i]=e.split(",").map(Number);this.linkAutomatedDockConveyor(n,i)}}getOwnerStackerCrane(e){for(const t of this.placedEntities.values())if(t instanceof si&&(t.childRacks.includes(e)||t.childConveyors.includes(e)))return t;return null}isInPlacementMode(){return this.isPlacementMode}getSelectedType(){return this.selectedType}update(e){const t=new Set;for(const n of this.getAllEntities())t.has(n)||(t.add(n),n.update(e))}reset(){this.cancelPlacement();const e=new Set;for(const t of this.getAllEntities())e.has(t)||(e.add(t),this.scene.remove(t.mesh),t.dispose());this.placedEntities.clear(),this.workerEntities.clear(),this.workerIdsByCell.clear(),this.deferredWorkerPlacements=[]}}class gv{nodes=[];keyMap=new Map;get size(){return this.nodes.length}has(e){return this.keyMap.has(e)}get(e){return this.keyMap.get(e)}push(e,t){e.heapIndex=this.nodes.length,this.nodes.push(e),this.keyMap.set(t,e),this.bubbleUp(e.heapIndex)}pop(){if(this.nodes.length===0)return;const e=this.nodes[0],t=this.nodes.pop();return this.keyMap.delete(this.nodeKey(e)),this.nodes.length>0&&(this.nodes[0]=t,t.heapIndex=0,this.sinkDown(0)),e}update(e){this.bubbleUp(e.heapIndex)}nodeKey(e){return`${e.x},${e.z}`}bubbleUp(e){const t=this.nodes[e];for(;e>0;){const n=e-1>>1,i=this.nodes[n];if(t.f>=i.f)break;this.nodes[e]=i,i.heapIndex=e,e=n}this.nodes[e]=t,t.heapIndex=e}sinkDown(e){const t=this.nodes.length,n=this.nodes[e];for(;;){let i=e;const s=2*e+1,a=2*e+2;s<t&&this.nodes[s].f<n.f&&(i=s);const o=i!==e?this.nodes[i].f:n.f;if(a<t&&this.nodes[a].f<o&&(i=a),i===e)break;const l=this.nodes[i];this.nodes[e]=l,l.heapIndex=e,e=i}this.nodes[e]=n,n.heapIndex=e}}class vv{grid;collisionSystem=null;turnPenalty=.001;constructor(e){this.grid=e}setCollisionSystem(e){this.collisionSystem=e}findPath(e,t,n,i,s){if(!this.grid.isInBounds(e,t)||!this.grid.isInBounds(n,i))return console.warn(`[Pathfinder] Start or goal out of bounds: start (${e},${t}), goal (${n},${i})`),null;const a=this.grid.getCell(e,t),o=this.grid.getCell(n,i);if(!a||!o)return console.warn(`[Pathfinder] Start or goal cell not found: start (${e},${t}), goal (${n},${i})`),null;let l=n,c=i;if(!o.walkable){const f=this.findAdjacentWalkable(n,i);if(!f)return console.warn(`[Pathfinder] No walkable adjacent cell found for goal: (${n},${i})`),null;l=f.x,c=f.z}const d=new gv,h=new Set,u={x:e,z:t,g:0,h:this.heuristic(e,t,l,c),f:0,turns:0,dirX:0,dirZ:0,parent:null,heapIndex:0};for(u.f=u.g+u.h,d.push(u,this.getKey(e,t));d.size>0;){const f=d.pop();if(f.x===l&&f.z===c)return this.reconstructPath(f);h.add(this.getKey(f.x,f.z));const g=this.getWalkableNeighbors(f.x,f.z,l,c,s);for(const v of g){const m=this.getKey(v.x,v.z);if(h.has(m))continue;const p=v.x-f.x,w=v.z-f.z,b=f.parent!==null&&(f.dirX!==p||f.dirZ!==w)?1:0,S=f.g+1,I=f.turns+b,k=S+this.heuristic(v.x,v.z,l,c)+I*this.turnPenalty;let P=d.get(m);P?(S<P.g||S===P.g&&I<P.turns)&&(P.g=S,P.turns=I,P.dirX=p,P.dirZ=w,P.f=P.g+P.h+P.turns*this.turnPenalty,P.parent=f,d.update(P)):(P={x:v.x,z:v.z,g:S,h:this.heuristic(v.x,v.z,l,c),f:k,turns:I,dirX:p,dirZ:w,parent:f,heapIndex:0},d.push(P,m))}}return null}findPathWorld(e,t,n,i,s){if(e===n&&t===i)return[];const a=this.findPath(e,t,n,i,s);return a?a.map(o=>this.grid.gridToWorld(o.x,o.z)):null}heuristic(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}reconstructPath(e){const t=[];let n=e;for(;n;)t.unshift({x:n.x,z:n.z}),n=n.parent;return t.length>0&&t.shift(),t}getWalkableNeighbors(e,t,n,i,s){const a=this.grid.getNeighbors(e,t);return!this.collisionSystem||!s?a:a.filter(o=>n!==void 0&&i!==void 0&&o.x===n&&o.z===i?!0:this.collisionSystem.isCellAvailableForWorker(o.x,o.z,s))}findAdjacentWalkable(e,t){const n=[{dx:0,dz:-1},{dx:-1,dz:0},{dx:1,dz:0},{dx:0,dz:1}];for(const{dx:i,dz:s}of n){const a=e+i,o=t+s,l=this.grid.getCell(a,o);if(l&&l.walkable)return{x:a,z:o}}return null}getKey(e,t){return`${e},${t}`}hasPath(e,t,n,i,s){return this.findPath(e,t,n,i,s)!==null}getPathLength(e,t,n,i,s){const a=this.findPath(e,t,n,i,s);return a?a.length:-1}findClosestByPath(e,t,n){if(n.length===0)return null;const i=[...n].map(a=>({x:a.x,z:a.z,data:a.data,manhattan:Math.abs(a.x-e)+Math.abs(a.z-t)})).sort((a,o)=>a.manhattan-o.manhattan);let s=null;for(const a of i){if(s&&a.manhattan>=s.pathDistance)break;const o=this.getPathLength(e,t,a.x,a.z);o>=0&&(!s||o<s.pathDistance)&&(s={x:a.x,z:a.z,data:a.data,pathDistance:o})}return s}findNearestCellOfType(e,t,n,i){const a=this.grid.getCellsByType(n).filter(l=>!i||i(l)).map(l=>({x:l.x,z:l.z,manhattan:Math.abs(l.x-e)+Math.abs(l.z-t)})).sort((l,c)=>l.manhattan-c.manhattan);let o=null;for(const l of a){if(o&&l.manhattan>=o.distance)break;const c=this.getPathLength(e,t,l.x,l.z);c>=0&&(!o||c<o.distance)&&(o={x:l.x,z:l.z,distance:c})}return o}}class yv{grid;workerOccupancy=new Map;reservedCells=new Map;constructor(e){this.grid=e}updateWorkerPosition(e){const t=e.getWorldPosition(),n=this.grid.worldToGrid(t);if(!n)return;this.clearWorkerOccupancy(e.id);const i=this.getKey(n.x,n.z);this.workerOccupancy.set(i,e.id)}reserveCell(e,t,n){const i=this.getKey(e,t),s=this.workerOccupancy.get(i),a=this.reservedCells.get(i);return s&&s!==n||a&&a!==n?!1:(this.reservedCells.set(i,n),!0)}releaseReservation(e,t,n){const i=this.getKey(e,t);this.reservedCells.get(i)===n&&this.reservedCells.delete(i)}clearWorkerOccupancy(e){for(const[t,n]of this.workerOccupancy.entries())n===e&&this.workerOccupancy.delete(t)}isCellAvailableForWorker(e,t,n){if(!n)return!0;const i=this.getKey(e,t),s=this.workerOccupancy.get(i);if(s&&s!==n)return!1;const a=this.reservedCells.get(i);return!(a&&a!==n)}findIdleCirculationPoint(e,t,n){const i=e.getWorldPosition(),s=this.grid.worldToGrid(i);if(!s)return null;const a=3,o=[];for(let d=-a;d<=a;d++)for(let h=-a;h<=a;h++){if(d===0&&h===0)continue;const u=s.x+d,f=s.z+h;if(t!==void 0&&n!==void 0&&Math.abs(u-t)<2&&Math.abs(f-n)<2)continue;const g=this.grid.getCell(u,f);if(g&&g.walkable&&!g.occupied&&this.isCellAvailableForWorker(u,f,e.id)){const v=Math.abs(d)+Math.abs(h);o.push({x:u,z:f,distance:v})}}if(o.length===0)return null;o.sort((d,h)=>{const u=h.distance-d.distance,f=(Math.random()-.5)*2;return u+f});const l=Math.min(5,o.length),c=Math.floor(Math.random()*l);return o[c]}getOccupiedCells(){return new Set([...this.workerOccupancy.keys(),...this.reservedCells.keys()])}unregisterWorker(e){this.clearWorkerOccupancy(e);for(const[t,n]of this.reservedCells.entries())n===e&&this.reservedCells.delete(t)}reset(){this.workerOccupancy.clear(),this.reservedCells.clear()}getKey(e,t){return`${e},${t}`}}class _v{reservedForStore=new Map;reservedForRetrieval=new Map;reserveForStore(e,t,n,i){const s=`${t},${n}`;if(this.getAvailableSpots(e,s)<=0)return!1;if(e.getStorageInfo().capacity<=1){if(this.reservedForStore.has(s))return!1;this.reservedForStore.set(s,i)}else{const l=this.getStoreReservationCount(s),c=`${s}:${l}`;this.reservedForStore.set(c,i)}return!0}releaseStoreReservation(e,t,n){const i=`${e},${t}`;if(this.reservedForStore.get(i)===n){this.reservedForStore.delete(i);return}for(const s of Array.from(this.reservedForStore.keys()))if(s.startsWith(`${i}:`)&&this.reservedForStore.get(s)===n){this.reservedForStore.delete(s);return}for(const[s,a]of Array.from(this.reservedForStore.entries()))if(a===n){console.warn(`[StorageAllocationEngine] Reservation key mismatch for task ${n}: expected ${i}, found ${s} — releasing`),this.reservedForStore.delete(s);return}}reserveForRetrieval(e,t,n,i,s){const a=`${t},${n}`;if(this.getAvailablePalletsForRetrieval(e,a)<=0)return!1;const l=this.reservedForRetrieval.get(a)||new Map;if(s){for(const[,c]of l.entries())if(c===s)return!1}return l.set(i,s),this.reservedForRetrieval.set(a,l),!0}releaseRetrievalReservation(e,t,n){const i=`${e},${t}`,s=this.reservedForRetrieval.get(i);if(s&&s.has(n)){s.delete(n),s.size===0&&this.reservedForRetrieval.delete(i);return}for(const[a,o]of this.reservedForRetrieval.entries())if(o.has(n)){console.warn(`[StorageAllocationEngine] Retrieval reservation key mismatch for task ${n}: expected ${i}, found ${a} — releasing`),o.delete(n),o.size===0&&this.reservedForRetrieval.delete(a);return}}getStoreReservationCount(e){let t=0;this.reservedForStore.has(e)&&t++;for(let n=0;n<4;n++)this.reservedForStore.has(`${e}:${n}`)&&t++;return t}getRetrievalReservationCount(e){return this.reservedForRetrieval.get(e)?.size||0}getAvailableSpots(e,t){const n=this.getStoreReservationCount(t),i=e.getStorageInfo();return i.capacity-i.stored-n}getAvailablePalletsForRetrieval(e,t){const n=this.getRetrievalReservationCount(t);return e.getStorageInfo().stored-n}canStore(e,t,n){const i=`${t},${n}`;return this.getAvailableSpots(e,i)>0}canRetrieve(e,t,n){const i=`${t},${n}`;return this.getAvailablePalletsForRetrieval(e,i)>0}getReservedRetrievalPalletIds(e,t){const n=`${e},${t}`,i=this.reservedForRetrieval.get(n),s=new Set;if(!i)return s;for(const a of i.values())a&&s.add(a);return s}purgeOrphanedReservations(e){let t=0;for(const[n,i]of Array.from(this.reservedForStore.entries()))e.has(i)||(this.reservedForStore.delete(n),t++);for(const[n,i]of Array.from(this.reservedForRetrieval.entries())){const s=new Map;for(const[a,o]of i.entries())e.has(a)&&s.set(a,o);s.size===0?(this.reservedForRetrieval.delete(n),t+=i.size):s.size<i.size&&(this.reservedForRetrieval.set(n,s),t+=i.size-s.size)}return t}reset(){this.reservedForStore.clear(),this.reservedForRetrieval.clear()}getDebugInfo(){let e=0;for(const t of this.reservedForRetrieval.values())e+=t.size;return{storeReservations:this.reservedForStore.size,retrievalReservations:e}}getDetailedReservations(){const e=[],t=[];for(const[n,i]of this.reservedForStore.entries())e.push({location:n,taskId:i});for(const[n,i]of this.reservedForRetrieval.entries()){const s=[],a=[];for(const[o,l]of i.entries())s.push(o),l&&a.push(l);t.push({location:n,taskIds:s,palletIds:a})}return{storeReservations:e,retrievalReservations:t}}}const $e=new _v;function St(r){const[e,t]=r.split(",").map(Number);return{x:e,z:t}}class Mv{pathfinder;storageRacks;storageFloorSlots;storageConveyors;hasIdleWorkerOfType;isConveyorEntryPoint;isConveyorExitPoint;constructor(e){this.pathfinder=e.pathfinder,this.storageRacks=e.storageRacks,this.storageFloorSlots=e.storageFloorSlots,this.storageConveyors=e.storageConveyors,this.hasIdleWorkerOfType=e.hasIdleWorkerOfType,this.isConveyorEntryPoint=e.isConveyorEntryPoint,this.isConveyorExitPoint=e.isConveyorExitPoint}findAvailableStorage(e,t,n,i,s){const a=this.hasIdleWorkerOfType("forklift"),o=this.hasIdleWorkerOfType("operator");if(e==="forklift"||!e&&a){const d=this.findClosestAvailableRack(t,n,i,s);return d||(o||a?this.findClosestAvailableFloorSlot(t,n,i,s):null)}const c=this.findClosestAvailableFloorSlot(t,n,i,s);return c||this.findClosestAvailableRack(t,n,i,s)}findAvailableStorageForInbound(e,t,n,i){return this.findClosestAvailableStorageByType("unloading",e,t,n,i)??this.findClosestAvailableStorageByType("storage",e,t,n,i)??this.findAvailableStorage(void 0,e,t,n,i)}findStorageWithPalletForOutbound(e,t,n){return this.findClosestStorageWithPalletByType("loading",e,t,n)??this.findClosestStorageWithPalletByType("picking",e,t,n)??this.findStorageWithPallet(n,e,t)}findStorageWithPalletForOutboundBySku(e,t,n,i){return this.findClosestStorageWithPalletByTypeBySku("loading",n,e,t,i)??this.findClosestStorageWithPalletByTypeBySku("picking",n,e,t,i)??this.findStorageWithPalletBySku(n,i,e,t)}findClosestAvailableStorageByType(e,t,n,i,s){if(!i||i.has("operator")){const o=[];for(const[c,d]of this.storageConveyors){if(d.storageType!==e)continue;const{x:h,z:u}=St(c);!this.isConveyorEntryPoint(d)||d.isAutomationExit||s!==void 0&&s>=0&&!d.allowsSku(s)||$e.canStore(d,h,u)&&o.push({x:h,z:u,data:d})}const l=this.selectClosest(o,t,n,c=>({entity:c.data,type:"conveyor",gridX:c.x,gridZ:c.z,palletId:c.data.getTopPalletId()||void 0}));if(l)return l}const a=[];if(!i||i.has("forklift"))for(const[o,l]of this.storageRacks){if(l.storageType!==e||l.ownedByStackerCrane)continue;const{x:c,z:d}=St(o);s!==void 0&&s>=0&&!l.allowsSku(s)||$e.canStore(l,c,d)&&a.push({x:c,z:d,data:{entity:l,entityType:"rack"}})}if(!i||i.has("operator"))for(const[o,l]of this.storageFloorSlots){if(l.storageType!==e)continue;const{x:c,z:d}=St(o);s!==void 0&&s>=0&&!l.allowsSku(s)||$e.canStore(l,c,d)&&a.push({x:c,z:d,data:{entity:l,entityType:"floor-slot"}})}return this.selectClosest(a,t,n,o=>({entity:o.data.entity,type:o.data.entityType,gridX:o.x,gridZ:o.z,palletId:o.data.entity.getTopPalletId()||void 0}))}findClosestStorageWithPalletByType(e,t,n,i){if(!i||i.has("operator")){const a=[];for(const[l,c]of this.storageConveyors){if(c.storageType!==e)continue;const{x:d,z:h}=St(l);this.canRetrieveFromConveyor(c,d,h)&&this.pickRetrievablePalletId(c,d,h)&&a.push({x:d,z:h,data:c})}const o=this.selectClosest(a,t,n,l=>({entity:l.data,type:"conveyor",gridX:l.x,gridZ:l.z,palletId:this.pickRetrievablePalletId(l.data,l.x,l.z)}));if(o)return o}const s=[];if(!i||i.has("forklift"))for(const[a,o]of this.storageRacks){if(o.storageType!==e||o.ownedByStackerCrane)continue;const{x:l,z:c}=St(a);$e.canRetrieve(o,l,c)&&this.pickRetrievablePalletId(o,l,c)&&s.push({x:l,z:c,data:{entity:o,entityType:"rack"}})}if(!i||i.has("operator"))for(const[a,o]of this.storageFloorSlots){if(o.storageType!==e)continue;const{x:l,z:c}=St(a);$e.canRetrieve(o,l,c)&&this.pickRetrievablePalletId(o,l,c)&&s.push({x:l,z:c,data:{entity:o,entityType:"floor-slot"}})}return this.selectClosest(s,t,n,a=>({entity:a.data.entity,type:a.data.entityType,gridX:a.x,gridZ:a.z,palletId:this.pickRetrievablePalletId(a.data.entity,a.x,a.z)}))}findClosestStorageWithPalletByTypeBySku(e,t,n,i,s){if(!s||s.has("operator")){const o=[];for(const[c,d]of this.storageConveyors){if(d.storageType!==e)continue;const{x:h,z:u}=St(c);this.canRetrieveFromConveyor(d,h,u,t)&&this.pickRetrievablePalletId(d,h,u,t)&&o.push({x:h,z:u,data:d})}const l=this.selectClosest(o,n,i,c=>({entity:c.data,type:"conveyor",gridX:c.x,gridZ:c.z,palletId:this.pickRetrievablePalletId(c.data,c.x,c.z,t)}));if(l)return l}const a=[];if(!s||s.has("forklift"))for(const[o,l]of this.storageRacks){if(l.storageType!==e||l.ownedByStackerCrane)continue;const{x:c,z:d}=St(o);!l.hasSku(t)||!$e.canRetrieve(l,c,d)||this.pickRetrievablePalletId(l,c,d,t)&&a.push({x:c,z:d,data:{entity:l,entityType:"rack"}})}if(!s||s.has("operator"))for(const[o,l]of this.storageFloorSlots){if(l.storageType!==e)continue;const{x:c,z:d}=St(o);!l.hasSku(t)||!$e.canRetrieve(l,c,d)||this.pickRetrievablePalletId(l,c,d,t)&&a.push({x:c,z:d,data:{entity:l,entityType:"floor-slot"}})}return this.selectClosest(a,n,i,o=>({entity:o.data.entity,type:o.data.entityType,gridX:o.x,gridZ:o.z,palletId:this.pickRetrievablePalletId(o.data.entity,o.x,o.z,t)}))}findStorageWithPalletBySku(e,t,n,i){const s=[];if(!t||t.has("forklift"))for(const[a,o]of this.storageRacks){const{x:l,z:c}=St(a);o.ownedByStackerCrane||!o.hasSku(e)||!$e.canRetrieve(o,l,c)||this.pickRetrievablePalletId(o,l,c,e)&&s.push({x:l,z:c,data:{entity:o,entityType:"rack"}})}if(!t||t.has("operator")){for(const[a,o]of this.storageFloorSlots){const{x:l,z:c}=St(a);!o.hasSku(e)||!$e.canRetrieve(o,l,c)||this.pickRetrievablePalletId(o,l,c,e)&&s.push({x:l,z:c,data:{entity:o,entityType:"floor-slot"}})}for(const[a,o]of this.storageConveyors){const{x:l,z:c}=St(a);this.canRetrieveFromConveyor(o,l,c,e)&&this.pickRetrievablePalletId(o,l,c,e)&&s.push({x:l,z:c,data:{entity:o,entityType:"conveyor"}})}}return this.selectClosest(s,n,i,a=>({entity:a.data.entity,type:a.data.entityType,gridX:a.x,gridZ:a.z,palletId:this.pickRetrievablePalletId(a.data.entity,a.x,a.z,e)}))}findStorageWithPallet(e,t,n){const i=[];if(!e||e.has("forklift"))for(const[s,a]of this.storageRacks){const{x:o,z:l}=St(s);a.ownedByStackerCrane||!$e.canRetrieve(a,o,l)||this.pickRetrievablePalletId(a,o,l)&&i.push({x:o,z:l,data:{entity:a,entityType:"rack"}})}if(!e||e.has("operator")){for(const[s,a]of this.storageFloorSlots){const{x:o,z:l}=St(s);$e.canRetrieve(a,o,l)&&this.pickRetrievablePalletId(a,o,l)&&i.push({x:o,z:l,data:{entity:a,entityType:"floor-slot"}})}for(const[s,a]of this.storageConveyors){const{x:o,z:l}=St(s);this.canRetrieveFromConveyor(a,o,l)&&this.pickRetrievablePalletId(a,o,l)&&i.push({x:o,z:l,data:{entity:a,entityType:"conveyor"}})}}return this.selectClosest(i,t,n,s=>({entity:s.data.entity,type:s.data.entityType,gridX:s.x,gridZ:s.z,palletId:this.pickRetrievablePalletId(s.data.entity,s.x,s.z)}))}findClosestAvailableRack(e,t,n,i){if(n&&!n.has("forklift"))return null;const s=[];for(const[a,o]of this.storageRacks){const{x:l,z:c}=St(a);i!==void 0&&i>=0&&!o.allowsSku(i)||o.ownedByStackerCrane||!$e.canStore(o,l,c)||s.push({x:l,z:c,data:o})}return this.selectClosest(s,e,t,a=>({entity:a.data,type:"rack",gridX:a.x,gridZ:a.z,palletId:a.data.getTopPalletId()||void 0}))}findClosestAvailableFloorSlot(e,t,n,i){if(n&&!n.has("operator"))return null;const s=[];for(const[a,o]of this.storageFloorSlots){const{x:l,z:c}=St(a);i!==void 0&&i>=0&&!o.allowsSku(i)||$e.canStore(o,l,c)&&s.push({x:l,z:c,data:{entity:o,entityType:"floor-slot"}})}for(const[a,o]of this.storageConveyors){const{x:l,z:c}=St(a);!this.isConveyorEntryPoint(o)||o.isAutomationExit||i!==void 0&&i>=0&&!o.allowsSku(i)||$e.canStore(o,l,c)&&s.push({x:l,z:c,data:{entity:o,entityType:"conveyor"}})}return this.selectClosest(s,e,t,a=>({entity:a.data.entity,type:a.data.entityType,gridX:a.x,gridZ:a.z,palletId:a.data.entity.getTopPalletId()||void 0}))}canRetrieveFromConveyor(e,t,n,i){return!this.isConveyorExitPoint(e)||e.isAutomationEntrance||i!==void 0&&!e.hasSku(i)?!1:$e.canRetrieve(e,t,n)}pickRetrievablePalletId(e,t,n,i){const s=$e.getReservedRetrievalPalletIds(t,n),a=e.getAllPalletIds(),o=i!==void 0?e.getStoredSkus():[];for(let l=a.length-1;l>=0;l--){const c=a[l];if(!s.has(c)&&!(i!==void 0&&o[l]!==i))return c}}selectClosest(e,t,n,i){if(e.length===0)return null;if(t!==void 0&&n!==void 0){const s=this.pathfinder.findClosestByPath(t,n,e);return s?i(s):null}return i(e[0])}}function Ss(r,e,t,n={}){return{id:`task-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:r,status:"pending",priority:n.priority??1,source:e,destination:t,workerType:n.workerType??"forklift",sku:n.sku??-1,createdAt:Date.now(),noPathWorkerIds:n.noPathWorkerIds??[],...n}}function Sv(r,e,t,n,i="forklift"){return Ss("unload-truck",e,t,{sourceTruck:r,destinationStorage:n,workerType:i,priority:2})}function xv(r,e,t,n,i,s,a="forklift"){return Ss("load-truck",e,n,{sourceStorage:r,destinationTruck:t,orderId:i,palletId:s,workerType:a,priority:3})}function wv(r,e,t,n,i,s="forklift"){return Ss("putaway",e,n,{sourceStorage:r,destinationStorage:t,palletId:i,workerType:s,priority:1})}function bv(r,e,t,n,i,s="forklift"){return Ss("replenish",e,n,{sourceStorage:r,destinationStorage:t,palletId:i,workerType:s,priority:2})}function Tv(r,e,t,n,i,s="forklift"){return Ss("stage",e,n,{sourceStorage:r,destinationStorage:t,palletId:i,workerType:s,priority:2})}class Ev{grid;queryEngine;storageRacks;storageFloorSlots;storageConveyors;getTaskQueue;canAddMoreTasks;addTask;getClosestAccessGridPosition;isConveyorEntryPoint;isConveyorExitPoint;midGridX;midGridZ;constructor(e){this.grid=e.grid,this.queryEngine=e.queryEngine,this.storageRacks=e.storageRacks,this.storageFloorSlots=e.storageFloorSlots,this.storageConveyors=e.storageConveyors,this.getTaskQueue=e.getTaskQueue,this.canAddMoreTasks=e.canAddMoreTasks,this.addTask=e.addTask,this.getClosestAccessGridPosition=e.getClosestAccessGridPosition,this.isConveyorEntryPoint=e.isConveyorEntryPoint,this.isConveyorExitPoint=e.isConveyorExitPoint,this.midGridX=Math.floor(this.grid.width/2),this.midGridZ=Math.floor(this.grid.height/2)}createUnloadTasksForTruck(e,t,n){return this.tryCreateUnloadTasksForTruck(e,t,n,e.getPalletsRemaining())}tryCreateUnloadTasksForTruck(e,t,n,i){if(e.truckDock instanceof xt)return 0;let s=0;const a=new Set(["forklift","operator"]);for(const o of[...a])this.canAddMoreTasks(o,"unload-truck")||(console.log(`[PickingManager] Task queue at capacity for ${o}, removing from consideration for unload tasks. Will retry next cycle.`),a.delete(o));if(a.size===0)return console.log("[PickingManager] No worker types available for unload-truck tasks, cannot create tasks at this time. Will retry next cycle."),0;for(let o=0;o<i;o++){const l=e.palletSkus.length-1-s,c=l>=0?e.palletSkus[l]:void 0,d=this.queryEngine.findAvailableStorageForInbound(t,n,a,c);if(!d){console.log("[PickingManager] No available storage for unload task; will retry when space frees");break}const h=d.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(h,"unload-truck")){if(console.log(`[PickingManager] Task queue at capacity for ${h}, removing from consideration for unload tasks. Will retry next cycle.`),a.delete(h),a.size===0)break;continue}const u=this.resolveAccessPosition(d.entity,t,n,d.gridX,d.gridZ),f=Sv(e,{gridX:t,gridZ:n},u,d.entity,h);$e.reserveForStore(d.entity,d.gridX,d.gridZ,f.id),this.addTask(f),s++}return s===0&&i>0&&console.warn("[PickingManager] No available storage for unload task; will retry when space frees"),s}createLoadTruckTasks(e,t,n,i,s,a){if(n.truckDock instanceof xt)return 0;console.log(`[PickingManager] Creating up to ${t} load-truck tasks for order ${e}`);let o=0;const l=new Set(["forklift","operator"]);for(const d of[...l])this.canAddMoreTasks(d,"load-truck")||(console.log(`[PickingManager] Task queue at capacity for ${d}, removing from consideration for load tasks. Will retry next cycle.`),l.delete(d));if(l.size===0)return console.log("[PickingManager] No worker types available for load-truck tasks, cannot create tasks at this time. Will retry next cycle."),0;const c=[];if(a&&a.length>0)for(const d of a){const h=this.countPendingLoadTasksForOrderBySku(e,d.sku),u=d.quantity-d.loaded-h;for(let f=0;f<u;f++)c.push(d.sku)}else for(let d=0;d<t;d++)c.push(-1);for(const d of c){const h=d>=0?this.queryEngine.findStorageWithPalletForOutboundBySku(i,s,d,l):this.queryEngine.findStorageWithPalletForOutbound(i,s,l);if(!h){console.warn(`[PickingManager] No pallets available for load-truck task (order ${e}, sku ${d})`);break}const u=h.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(u,"load-truck")){if(console.log(`[PickingManager] Task queue at capacity for ${u}, will retry load tasks next cycle. Removing from consideration for load tasks this cycle.`),l.delete(u),l.size===0)break;continue}const f=this.resolveAccessPosition(h.entity,i,s,h.gridX,h.gridZ),g=xv(h.entity,f,n,{gridX:i,gridZ:s},e,h.palletId??h.entity.getTopPalletId(),u);g.sku=d,g.palletId=h.palletId,$e.reserveForRetrieval(h.entity,h.gridX,h.gridZ,g.id,g.palletId)&&(this.addTask(g),o++)}return console.log(`[PickingManager] Created ${o}/${t} load-truck tasks for order ${e}`),o}createPutawayTasks(){let e=0;for(const t of this.getStorageEntries(["rack","floor-slot","conveyor"])){if(t.entity.storageType!=="unloading")continue;const{x:n,z:i}=St(t.key);if(t.type==="conveyor"&&!this.isConveyorExitPoint(t.entity)||!$e.canRetrieve(t.entity,n,i))continue;const s=t.entity.getTopSku(),a=this.queryEngine.findClosestAvailableStorageByType("storage",n,i,void 0,s>=0?s:void 0);if(!a)continue;const o=t.type==="rack"||a.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(o,"putaway"))break;const l=this.resolveAccessPositionFromCenter(t.entity,n,i),c=this.resolveAccessPosition(a.entity,n,i,a.gridX,a.gridZ),d=t.entity.getTopPalletId();if(!d)continue;const h=wv(t.entity,l,a.entity,c,d,o);h.sku=s,h.palletId=d,$e.reserveForRetrieval(t.entity,n,i,h.id,h.palletId)&&($e.reserveForStore(a.entity,a.gridX,a.gridZ,h.id),this.addTask(h),e++)}return e}createReplenishTasks(){let e=0;const t=Kn(z.get("wave")),n=new Set,i=new Set;for(const a of this.getStorageEntries(["conveyor","floor-slot","rack"]))if(a.entity.storageType==="picking")for(const o of a.entity.getStoredSkus())n.add(o);for(const a of this.getTaskQueue())a.type==="replenish"&&a.sku>=0&&(a.status==="pending"||a.status==="assigned"||a.status==="in-progress")&&i.add(a.sku);const s=[];for(let a=0;a<t;a++)!n.has(a)&&!i.has(a)&&s.push(a);for(const a of this.getStorageEntries(["conveyor","floor-slot","rack"])){if(a.entity.storageType!=="picking")continue;const{x:o,z:l}=St(a.key);if(a.type==="conveyor"&&!this.isConveyorEntryPoint(a.entity)||!$e.canStore(a.entity,o,l))continue;let c=null,d=-1;if(s.length>0)for(let p=0;p<s.length;p++){const w=s[p];if(c=this.queryEngine.findClosestStorageWithPalletByTypeBySku("storage",w,o,l),c){d=w,s.splice(p,1);break}}if(c||(c=this.queryEngine.findClosestStorageWithPalletByType("storage",o,l),d=c?.entity.getTopSku()??-1),!c||!a.entity.allowsSku(d))continue;const h=c.type==="rack"||a.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(h,"replenish"))break;const u=this.resolveAccessPosition(c.entity,o,l,c.gridX,c.gridZ),f=this.resolveAccessPosition(a.entity,c.gridX,c.gridZ,o,l),g=c.palletId??c.entity.getTopPalletId();if(!g)continue;const v=bv(c.entity,u,a.entity,f,g,h);v.sku=d,v.palletId=g,$e.reserveForRetrieval(c.entity,c.gridX,c.gridZ,v.id,v.palletId)&&($e.reserveForStore(a.entity,o,l,v.id),this.addTask(v),e++)}return e}createStagingTasks(){let e=0;for(const t of this.getStorageEntries(["rack","floor-slot","conveyor"])){if(t.entity.storageType!=="loading")continue;const{x:n,z:i}=St(t.key);if(t.type==="conveyor"&&!this.isConveyorEntryPoint(t.entity)||!$e.canStore(t.entity,n,i))continue;const s=this.queryEngine.findClosestStorageWithPalletByType("picking",n,i);if(!s)continue;const a=s.entity.getTopSku();if(!t.entity.allowsSku(a))continue;const o=s.type==="rack"||t.type==="rack"?"forklift":"operator";if(!this.canAddMoreTasks(o,"stage"))break;const l=this.resolveAccessPosition(s.entity,n,i,s.gridX,s.gridZ),c=this.resolveAccessPosition(t.entity,s.gridX,s.gridZ,n,i),d=s.palletId??s.entity.getTopPalletId();if(!d)continue;const h=Tv(s.entity,l,t.entity,c,d,o);h.sku=a,h.palletId=d,$e.reserveForRetrieval(s.entity,s.gridX,s.gridZ,h.id,h.palletId)&&($e.reserveForStore(t.entity,n,i,h.id),this.addTask(h),e++)}return e}getStorageEntries(e){const t=[];for(const n of e)if(n==="rack")for(const[i,s]of this.storageRacks)t.push({key:i,entity:s,type:n});else if(n==="floor-slot")for(const[i,s]of this.storageFloorSlots)t.push({key:i,entity:s,type:n});else for(const[i,s]of this.storageConveyors)t.push({key:i,entity:s,type:n});return t}resolveAccessPositionFromCenter(e,t,n){return this.resolveAccessPosition(e,this.midGridX,this.midGridZ,t,n)}resolveAccessPosition(e,t,n,i,s){return this.getClosestAccessGridPosition(e,t,n)??{gridX:i,gridZ:s}}countPendingLoadTasksForOrderBySku(e,t){return this.getTaskQueue().filter(n=>n.type==="load-truck"&&n.orderId===e&&n.sku===t&&(n.status==="pending"||n.status==="assigned"||n.status==="in-progress")).length}}class Pv{constructor(e){this.grid=e}assignTasks(e,t,n){const i=Array.from(t),a=[...e.filter(o=>o.status==="pending")].sort((o,l)=>l.priority!==o.priority?l.priority-o.priority:o.workerType==="forklift"&&l.workerType==="operator"?-1:o.workerType==="operator"&&l.workerType==="forklift"?1:0);for(const o of a)this.resetNoPathAttemptsIfAllEligibleWorkersTried(i,o,o.workerType,o.type),!this.tryAssignToWorkerType(i,o,o.workerType,n)&&o.workerType==="operator"&&!(o.sourceStorage instanceof ht)&&(a.some(c=>c.status==="pending"&&c.workerType==="forklift")||(this.resetNoPathAttemptsIfAllEligibleWorkersTried(i,o,"forklift",o.type),this.tryAssignToWorkerType(i,o,"forklift",n)))}tryAssignToWorkerType(e,t,n,i){const s=this.getIdleWorkersSortedByDistance(e,n,t.source.gridX,t.source.gridZ,t.type,t.noPathWorkerIds);for(const a of s)if(i(t,a))return!0;return!1}resetNoPathAttemptsIfAllEligibleWorkersTried(e,t,n,i){const s=this.getIdleWorkersSortedByDistance(e,n,t.source.gridX,t.source.gridZ,i);if(s.length===0)return;const a=new Set(t.noPathWorkerIds);s.every(l=>a.has(l.worker.id))&&(t.noPathWorkerIds=[])}getIdleWorkersSortedByDistance(e,t,n,i,s,a){const o=new Set(a??[]),l=[];for(const c of e){if(!(t==="forklift"?c.worker.type==="forklift"||c.worker.type==="forklift-agv":c.worker.type==="operator")||c.taskPhase!=="idle"||!c.worker.isIdle()||o.has(c.worker.id))continue;const h=c.worker.allowedTaskTypes;if(s&&h!==null&&!h.includes(s))continue;const u=c.worker.getWorldPosition(),f=this.grid.worldToGrid(u);if(!f)continue;const g=Math.abs(f.x-n)+Math.abs(f.z-i);l.push({state:c,distance:g})}return l.sort((c,d)=>c.distance-d.distance),l.map(c=>c.state)}}function os(r,e,t,n){const i=r.getAccessPositions(),s=n?i.filter(n):i,a=s.length>0?s:i;let o=a[0],l=1/0;for(const c of a){const d=Math.hypot(c.position.x-e,c.position.z-t);d<l&&(l=d,o=c)}return o}class kv{grid;pathfinder;collisionSystem;callbacks;workers=new Map;idleCirculationTimer=0;idleCirculationInterval=3;constructor(e,t,n,i){this.grid=e,this.pathfinder=t,this.collisionSystem=n,this.callbacks=i}registerWorker(e){const t={worker:e,currentTask:null,taskPhase:"idle",carryingPallet:null,pathRecalcCooldown:0,deadlockStuckCount:0};this.workers.set(e.id,t),e instanceof vt&&(e.setCollisionCheckCallback((n,i)=>{const s=this.grid.worldToGrid(n);return s?this.collisionSystem.isCellAvailableForWorker(s.x,s.z,i):!0}),e.setPathRecalculationCallback(n=>{this.recalculatePathForWorker(n)}))}unregisterWorker(e){const t=this.workers.get(e);t?.currentTask&&(t.currentTask.status="pending",t.currentTask.assignedWorker=void 0,this.callbacks.onTaskReturnedToPending(t.currentTask)),this.collisionSystem.unregisterWorker(e),this.workers.delete(e)}getWorkers(){return Array.from(this.workers.values())}getWorkerState(e){return this.workers.get(e)??null}getTotalCount(){return this.workers.size}countWorkersCapableOf(e,t){return Array.from(this.workers.values()).filter(n=>(e==="forklift"?n.worker.type==="forklift"||n.worker.type==="forklift-agv":n.worker.type==="operator")?n.worker.allowedTaskTypes===null?!0:n.worker.allowedTaskTypes.includes(t):!1).length}hasIdleWorkerOfType(e){for(const t of this.workers.values())if((e==="forklift"?t.worker.type==="forklift"||t.worker.type==="forklift-agv":t.worker.type==="operator")&&t.taskPhase==="idle"&&t.worker.isIdle())return!0;return!1}getWorkerDebugInfo(){const e=[];for(const[t,n]of this.workers){const i=n.worker,s=n.currentTask,a=i.getWorldPosition(),o=this.grid.worldToGrid(a);e.push({id:t.substring(0,8),type:i instanceof vt?"forklift":"operator",taskPhase:n.taskPhase,taskType:s?.type??null,sourceLocation:s?{x:s.source.gridX,z:s.source.gridZ}:null,destLocation:s?{x:s.destination.gridX,z:s.destination.gridZ}:null,isCarrying:i.carryingPallet??!1,workerState:i.state,position:o??{x:0,z:0},pathLength:i.path?.length??0})}return e}assignTaskToWorker(e,t){const n=t.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i)return console.warn("[WorkersManager] Worker is out of bounds, cannot assign task"),this.handleNoPathDuringAssignment(t,e),!1;const s=this.getTaskSourceAccessible(e),{path:a,target:o}=this.findPathWithAccessPointRetries(i.x,i.z,e.source.gridX,e.source.gridZ,t.worker instanceof vt?t.worker.id:void 0,s);return e.source.gridX=o.gridX,e.source.gridZ=o.gridZ,a?(e.status="assigned",e.assignedWorker=t.worker,e.startedAt=Date.now(),this.callbacks.onTaskAssigned(e),t.currentTask=e,t.taskPhase="moving-to-source",(t.worker instanceof vt||t.worker instanceof It)&&t.worker.setPath(a),!0):(this.handleNoPathDuringAssignment(t,e),!1)}updateCollisionPositions(){for(const e of this.workers.values())this.collisionSystem.updateWorkerPosition(e.worker)}updateAll(e){for(const t of this.workers.values())this.updateWorkerState(t,e);this.idleCirculationTimer+=e,this.idleCirculationTimer>=this.idleCirculationInterval&&(this.idleCirculationTimer=0,this.handleIdleCirculation())}reset(){this.workers.clear(),this.collisionSystem.reset(),this.idleCirculationTimer=0}getClosestAccessGridPosition(e,t,n){const i=os(e,t,n,a=>this.isAccessPositionWalkable(a)),s=this.grid.worldToGrid(i.position);return s?{gridX:s.x,gridZ:s.z}:null}handleNoPathDuringAssignment(e,t){const n=e.worker.id;console.warn("No path found for task assignment",t.id,"worker",n),t.noPathWorkerIds.includes(n)||t.noPathWorkerIds.push(n),t.status="pending",t.assignedWorker=void 0,t.startedAt=void 0,e.currentTask=null,e.taskPhase="idle"}handleNoPath(e,t){console.warn("No path found for in-progress task",t.id),t.status="failed",t.noPathWorkerIds=[],t.assignedWorker=void 0,this.callbacks.releaseTaskReservations(t),this.callbacks.onTaskFailed(t),e.currentTask=null,e.taskPhase="idle"}failTaskDueToPalletMismatch(e,t){console.warn(`[WorkersManager] Task ${t.id} failed: bound pallet ${t.palletId??"unknown"} unavailable at pickup source`),t.status="failed",t.noPathWorkerIds=[],t.assignedWorker=void 0,this.callbacks.releaseTaskReservations(t),this.callbacks.onTaskFailed(t),e.currentTask=null,e.taskPhase="idle",e.carryingPallet=null}updateWorkerState(e,t){const{worker:n,currentTask:i,taskPhase:s}=e;if(!i||s==="idle")return;e.pathRecalcCooldown>0&&(e.pathRecalcCooldown-=t);const a=n.isIdle();switch(s){case"moving-to-source":if(a)if(this.isWorkerAtPosition(n,i.source.gridX,i.source.gridZ)){const l=this.getSourceAccessRotation(i,n);e.taskPhase="aligning-for-source",n.alignForAccess?n.alignForAccess(l,()=>{e.taskPhase="picking",this.startPicking(e)}):(e.taskPhase="picking",this.startPicking(e))}else e.pathRecalcCooldown<=0&&(this.recalculatePathForWorker(n.id),e.pathRecalcCooldown=.5);break;case"aligning-for-source":break;case"picking":n.isIdle()&&n.carryingPallet&&this.onPickingComplete(e);break;case"moving-to-dest":if(a)if(this.isWorkerAtPosition(n,i.destination.gridX,i.destination.gridZ)){const l=this.getDestAccessRotation(i,n);e.taskPhase="aligning-for-dest",n.alignForAccess?n.alignForAccess(l,()=>{e.taskPhase="dropping",this.startDropping(e)}):(e.taskPhase="dropping",this.startDropping(e))}else e.pathRecalcCooldown<=0&&(this.recalculatePathForWorker(n.id),e.pathRecalcCooldown=.5);break;case"aligning-for-dest":break;case"dropping":n.isIdle()&&!n.carryingPallet&&this.onDroppingComplete(e);break}}startPicking(e){const{worker:t,currentTask:n}=e;if(!n)return;if(n.status="in-progress",n.type==="unload-truck"&&n.sourceTruck){const s=n.sourceTruck.unloadPallet();if(s){const a=je.registerPallet(s.sku);s.palletId=a.id,n.pallet=s,n.palletId=s.palletId,n.sku=s.sku}}else if(n.type==="load-truck"||n.type==="putaway"||n.type==="replenish"||n.type==="stage"){const s=n.sourceStorage,a=n.palletId;if(!s||!a){this.failTaskDueToPalletMismatch(e,n);return}const o=s.retrievePalletById(a);if(!o){this.failTaskDueToPalletMismatch(e,n);return}let l=je.getSku(o);if(l<0&&(l=n.sku>=0?n.sku:0),n.type==="load-truck"&&n.sku>=0&&l!==n.sku){s.store(o),this.failTaskDueToPalletMismatch(e,n);return}const c=new id(l);if(c.palletId=o,n.pallet=c,n.palletId=o,n.sku=l,n.type==="load-truck"&&z.removeStoredPallet(),n.sourceStorage){let d=n.source.gridX,h=n.source.gridZ;if(n.sourceStorage instanceof jt){const u=n.sourceStorage.getGridPosition();d=u.x,h=u.z}$e.releaseRetrievalReservation(d,h,n.id)}}const i=n.sku>=0?n.sku:0;if(t instanceof vt){t.updateCarriedPalletSku(i);let s=0;n.sourceTruck?s=.5:n.sourceStorage instanceof jt&&"getPickupHeight"in n.sourceStorage&&(n.sourceStorage instanceof un&&n.palletId&&"getPickupHeightForPalletId"in n.sourceStorage?s=n.sourceStorage.getPickupHeightForPalletId(n.palletId):s=n.sourceStorage.getPickupHeight()),t.pickUpPallet(s)}else if(t instanceof It){t.updateCarriedPalletSku(i);let s=0;n.sourceTruck?s=.5:n.sourceStorage instanceof jt&&(n.sourceStorage instanceof un&&n.palletId&&"getPickupHeightForPalletId"in n.sourceStorage?s=n.sourceStorage.getPickupHeightForPalletId(n.palletId):s=n.sourceStorage.getPickupHeight?.()??0),t.pickUpPallet?.(s)}}onPickingComplete(e){const{currentTask:t}=e;if(!t)return;e.taskPhase="moving-to-dest";const n=e.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i){console.warn("[WorkersManager] Worker is out of bounds, cannot find path to destination");return}const s=this.getTaskDestinationAccessible(t),{path:a,target:o}=this.findPathWithAccessPointRetries(i.x,i.z,t.destination.gridX,t.destination.gridZ,e.worker instanceof vt?e.worker.id:void 0,s);t.destination.gridX=o.gridX,t.destination.gridZ=o.gridZ,a?e.worker.setPath(a):console.warn("[WorkersManager] No path found for worker to destination")}startDropping(e){const{worker:t,currentTask:n}=e;if(!n)return;const i=n.palletId??n.pallet?.palletId??"",s=n.destinationStorage?()=>i?n.destinationStorage?.store(i):!1:void 0,a=n.destinationStorage??n.sourceStorage??null;if(t instanceof vt){let o=n.destinationTruck?.5:0;!n.destinationTruck&&a&&"getStorageHeight"in a&&(o=a.getStorageHeight()),t.dropPallet(o,s)}else if(t instanceof It){let o=n.destinationTruck?.5:0;!n.destinationTruck&&a&&"getStorageHeight"in a&&(o=a.getStorageHeight()),t.dropPallet?.(o,s)}}onDroppingComplete(e){const{currentTask:t}=e;if(!t)return;const n=!!t.pallet,i=t.sku>=0?t.sku:0;t.type==="unload-truck"?n&&(z.addStoredPallet(),T.emit("pallet:stored",{taskId:t.id})):t.type==="putaway"||t.type==="replenish"||t.type==="stage"?n&&T.emit("pallet:stored",{taskId:t.id}):t.type==="load-truck"&&t.destinationTruck&&(t.destinationTruck.loadPallet(i),t.pallet?.palletId&&je.removePallet(t.pallet.palletId),T.emit("outbound:pallet-loaded",{truckId:t.destinationTruck.id,orderId:t.orderId??"",sku:i})),t.pallet&&(t.pallet.dispose(),t.pallet=void 0),this.callbacks.releaseTaskReservations(t),t.status="completed",t.completedAt=Date.now(),this.callbacks.onTaskCompleted(t),e.currentTask=null,e.taskPhase="idle",e.carryingPallet=null}handleIdleCirculation(){if(z.get("phase")==="operations")for(const e of this.workers.values()){if(!(e.worker instanceof vt)||!e.worker.isIdle()||e.currentTask!==null||e.taskPhase!=="idle")continue;const t=this.collisionSystem.findIdleCirculationPoint(e.worker);if(!t)continue;const n=e.worker.getWorldPosition(),i=this.grid.worldToGrid(n);if(!i)continue;const s=this.pathfinder.findPathWorld(i.x,i.z,t.x,t.z,e.worker.id);s&&s.length>0&&e.worker.setPath(s)}}recalculatePathForWorker(e){const t=this.workers.get(e);if(!t||!t.currentTask)return;const n=t.currentTask,i=t.worker.getWorldPosition(),s=this.grid.worldToGrid(i);if(!s)return;let a,o;if(t.taskPhase==="moving-to-source")a=n.source.gridX,o=n.source.gridZ;else if(t.taskPhase==="moving-to-dest")a=n.destination.gridX,o=n.destination.gridZ;else return;if(this.isWorkerAtPosition(t.worker,a,o)){console.log(`[WorkersManager] Worker ${e.substring(0,8)} already at destination, triggering phase transition`),t.worker instanceof vt&&(t.worker.state="idle",t.worker.path=[]);return}const l=t.taskPhase==="moving-to-source"?this.getTaskSourceAccessible(n):this.getTaskDestinationAccessible(n),{path:c,target:d}=this.findPathWithAccessPointRetries(s.x,s.z,a,o,t.worker instanceof vt?t.worker.id:void 0,l);t.taskPhase==="moving-to-source"?(n.source.gridX=d.gridX,n.source.gridZ=d.gridZ):(n.destination.gridX=d.gridX,n.destination.gridZ=d.gridZ),c&&c.length>0?(console.log(`[WorkersManager] Recalculated path for ${e.substring(0,8)}: ${c.length} steps`),t.deadlockStuckCount=0,(t.worker instanceof vt||t.worker instanceof It)&&t.worker.setPath(c)):(console.log(`[WorkersManager] No path for ${e.substring(0,8)} from (${s.x},${s.z}) to (${a},${o})`),t.deadlockStuckCount++,t.deadlockStuckCount>=3&&(t.deadlockStuckCount=0,this.tryResolveDeadlock(e,a,o)))}tryResolveDeadlock(e,t,n){const i=this.workers.get(e);if(!(!i||!(i.worker instanceof vt))&&i.taskPhase==="moving-to-dest")for(const[s,a]of this.workers){if(s===e||!(a.worker instanceof vt)||a.taskPhase!=="moving-to-dest"||!a.currentTask)continue;const o=a.currentTask.destination;if(o.gridX!==t||o.gridZ!==n)continue;const l=this.grid.worldToGrid(i.worker.getWorldPosition()),c=this.grid.worldToGrid(a.worker.getWorldPosition());if(!l||!c)continue;const d=Math.abs(l.x-t)+Math.abs(l.z-n),h=Math.abs(c.x-t)+Math.abs(c.z-n),u=d>h||d===h&&e<s,[f,g]=u?[e,i]:[s,a],v=this.grid.worldToGrid(g.worker.getWorldPosition());if(!v)continue;const m=this.collisionSystem.findIdleCirculationPoint(g.worker,t,n);if(!m)continue;const p=this.pathfinder.findPathWorld(v.x,v.z,m.x,m.z,f);p&&p.length>0&&(console.log(`[WorkersManager] Deadlock at (${t},${n}): forklift ${f.substring(0,8)} yields to (${m.x},${m.z})`),g.worker.setPath(p),g.pathRecalcCooldown=1.5,g.deadlockStuckCount=0);break}}findPathWithAccessPointRetries(e,t,n,i,s,a){const o=a?this.getAccessGridCandidates(a,e,t):[],l=`${n},${i}`;o.some(c=>`${c.gridX},${c.gridZ}`===l)||o.push({gridX:n,gridZ:i});for(const c of o){const d=this.pathfinder.findPathWorld(e,t,c.gridX,c.gridZ,s);if(d)return{path:d,target:c}}return{path:null,target:{gridX:n,gridZ:i}}}getAccessGridCandidates(e,t,n){const i=e.getAccessPositions().map(l=>this.grid.worldToGrid(l.position)).filter(l=>l!==null),s=i.filter(l=>this.grid.getCell(l.x,l.z)?.walkable??!1),a=s.length>0?s:i,o=new Map;for(const l of a)o.set(`${l.x},${l.z}`,{gridX:l.x,gridZ:l.z});return Array.from(o.values()).sort((l,c)=>{const d=Math.abs(l.gridX-t)+Math.abs(l.gridZ-n),h=Math.abs(c.gridX-t)+Math.abs(c.gridZ-n);return d-h})}isAccessPositionWalkable(e){const t=this.grid.worldToGrid(e.position);return t?this.grid.getCell(t.x,t.z)?.walkable??!1:!1}isWorkerAtPosition(e,t,n){const i=e.getWorldPosition(),s=this.grid.worldToGrid(i);if(!s)return console.warn("[WorkersManager] Worker position out of bounds"),!1;const a=Math.abs(s.x-t),o=Math.abs(s.z-n);return a===0&&o===0||a===1&&o===0||a===0&&o===1}getSourceAccessRotation(e,t){const n=t.getWorldPosition();if(e.sourceTruck)return os(e.sourceTruck,n.x,n.z,i=>this.isAccessPositionWalkable(i)).rotation;if(e.sourceStorage instanceof jt)return os(e.sourceStorage,n.x,n.z,i=>this.isAccessPositionWalkable(i)).rotation}getDestAccessRotation(e,t){const n=t.getWorldPosition();if(e.destinationTruck)return os(e.destinationTruck,n.x,n.z,s=>this.isAccessPositionWalkable(s)).rotation;const i=e.destinationStorage??e.sourceStorage??null;if(i instanceof jt)return os(i,n.x,n.z,s=>this.isAccessPositionWalkable(s)).rotation}getTaskSourceAccessible(e){if(e.sourceStorage instanceof jt)return e.sourceStorage;if(e.sourceTruck)return e.sourceTruck}getTaskDestinationAccessible(e){if(e.destinationStorage instanceof jt)return e.destinationStorage;if(e.destinationTruck)return e.destinationTruck}}const Cv=.25;class Av{storageConveyors;taskFactory;countWorkersCapableOf;getTotalWorkerCount;taskQueue=[];pendingTaskCount=0;activeTaskCount=0;dockedInboundTrucks=new Map;outboundTrucksCallback=null;taskCreationTimer=0;taskCreationInterval=.5;reservationCleanupTimer=0;reservationCleanupInterval=5;constructor(e){this.storageConveyors=e.storageConveyors,this.taskFactory=e.taskFactory,this.countWorkersCapableOf=e.countWorkersCapableOf,this.getTotalWorkerCount=e.getTotalWorkerCount}setOutboundTrucksCallback(e){this.outboundTrucksCallback=e}createUnloadTasksForTruck(e,t,n){this.dockedInboundTrucks.set(e.id,{truck:e,dockX:t,dockZ:n}),this.taskFactory.createUnloadTasksForTruck(e,t,n)}createLoadTruckTasks(e,t,n,i,s,a){return this.taskFactory.createLoadTruckTasks(e,t,n,i,s,a)}addTask(e){this.taskQueue.push(e),this.taskQueue.sort((t,n)=>n.priority-t.priority),this.pendingTaskCount++}canAddMoreTasks(e,t){const n=this.countWorkersCapableOf(e,t);return this.getTotalWorkerCount()===0?!0:n===0?!1:this.taskQueue.filter(s=>(s.status==="pending"||s.status==="assigned"||s.status==="in-progress")&&s.workerType===e&&s.type===t).length<Math.ceil(n*(1+Cv))}cancelPendingTasksForStorage(e){const t=[];for(const n of this.taskQueue)n.status==="pending"&&(n.sourceStorage===e||n.destinationStorage===e)?(this.releaseTaskReservations(n),this.pendingTaskCount--,n.status="failed"):t.push(n);this.taskQueue=t}purgeOrphanedStorageReservations(){const e=new Set(this.taskQueue.map(n=>n.id)),t=$e.purgeOrphanedReservations(e);return t>0&&console.warn(`[TasksManager] Purged ${t} orphaned storage reservation(s)`),t}createPutawayTasks(){return this.taskFactory.createPutawayTasks()}createReplenishTasks(){return this.taskFactory.createReplenishTasks()}createStagingTasks(){return this.taskFactory.createStagingTasks()}update(e,t){t&&(this.checkInboundTrucksNeedTasks(),this.checkOutboundTrucksNeedTasks()),this.taskCreationTimer+=e,this.taskCreationTimer>=this.taskCreationInterval&&t&&(this.taskCreationTimer=0,this.createPutawayTasks(),this.createReplenishTasks(),this.createStagingTasks()),this.reservationCleanupTimer+=e,this.reservationCleanupTimer>=this.reservationCleanupInterval&&(this.reservationCleanupTimer=0,this.purgeOrphanedStorageReservations())}releaseTaskReservations(e){if(e.type==="unload-truck"){let t=e.destination.gridX,n=e.destination.gridZ;if(e.destinationStorage){const i=this.getStorageGridPosition(e.destinationStorage);i&&(t=i.gridX,n=i.gridZ)}$e.releaseStoreReservation(t,n,e.id)}else if(e.type==="putaway"||e.type==="replenish"||e.type==="stage"){let t=e.destination.gridX,n=e.destination.gridZ;if(e.destinationStorage){const a=this.getStorageGridPosition(e.destinationStorage);a&&(t=a.gridX,n=a.gridZ)}$e.releaseStoreReservation(t,n,e.id);let i=e.source.gridX,s=e.source.gridZ;if(e.sourceStorage){const a=this.getStorageGridPosition(e.sourceStorage);a&&(i=a.gridX,s=a.gridZ)}$e.releaseRetrievalReservation(i,s,e.id)}else if(e.type==="load-truck"){let t=e.source.gridX,n=e.source.gridZ;if(e.sourceStorage){const i=this.getStorageGridPosition(e.sourceStorage);i&&(t=i.gridX,n=i.gridZ)}$e.releaseRetrievalReservation(t,n,e.id)}}onTaskAssigned(e){this.pendingTaskCount--,this.activeTaskCount++}onTaskCompleted(e){this.activeTaskCount--,this.removeFromQueue(e)}onTaskFailed(e){this.activeTaskCount--,this.removeFromQueue(e)}onTaskReturnedToPending(e){this.activeTaskCount--,this.pendingTaskCount++}getTaskQueue(){return this.taskQueue}getPendingTaskCount(){return this.pendingTaskCount}getActiveTaskCount(){return this.activeTaskCount}getTaskQueueStats(){let e=0,t=0,n=0;for(const i of this.taskQueue)switch(i.status){case"pending":e++;break;case"assigned":t++;break;case"in-progress":n++;break}return{pending:e,assigned:t,inProgress:n,total:this.taskQueue.length}}reset(){this.taskQueue=[],this.pendingTaskCount=0,this.activeTaskCount=0,this.dockedInboundTrucks.clear(),this.taskCreationTimer=0,this.reservationCleanupTimer=0}checkInboundTrucksNeedTasks(){for(const[e,{truck:t,dockX:n,dockZ:i}]of this.dockedInboundTrucks){if(t.getPalletsRemaining()===0||t.state==="departing"||t.state==="gone"){this.dockedInboundTrucks.delete(e);continue}const s=this.taskQueue.filter(o=>o.type==="unload-truck"&&o.sourceTruck?.id===e).length,a=t.getPalletsRemaining()-s;a>0&&(console.log(`[TasksManager] Truck ${e} needs ${a} unload tasks; attempting to create...`),this.taskFactory.tryCreateUnloadTasksForTruck(t,n,i,a))}}checkOutboundTrucksNeedTasks(){if(this.outboundTrucksCallback)for(const{truck:e,order:t,dockX:n,dockZ:i}of this.outboundTrucksCallback()){if(e.truckDock instanceof xt)continue;const s=this.taskQueue.filter(l=>l.type==="load-truck"&&l.orderId===t.orderId&&l.status==="pending").length,a=this.taskQueue.filter(l=>l.type==="load-truck"&&l.orderId===t.orderId&&(l.status==="assigned"||l.status==="in-progress")).length,o=t.quantity-(s+a+t.palletsLoaded);o>0&&this.taskFactory.createLoadTruckTasks(t.orderId,o,e,n,i,t.lines)}}removeFromQueue(e){const t=this.taskQueue.indexOf(e);t>-1&&this.taskQueue.splice(t,1)}getStorageGridPosition(e){if(e instanceof jt){const t=e.getGridPosition();return{gridX:t.x,gridZ:t.z}}return null}}class Rv{conveyorManager;storageRacks=new Map;storageFloorSlots=new Map;storageConveyors;workersManager;tasksManager;workerDispatcher;constructor(e,t,n){this.conveyorManager=n??new ci(t),this.storageConveyors=this.conveyorManager.getMap();const i=new vv(t),s=new yv(t);i.setCollisionSystem(s);const a=new Mv({pathfinder:i,storageRacks:this.storageRacks,storageFloorSlots:this.storageFloorSlots,storageConveyors:this.storageConveyors,hasIdleWorkerOfType:l=>this.workersManager.hasIdleWorkerOfType(l),isConveyorEntryPoint:l=>this.conveyorManager.isEntryPoint(l),isConveyorExitPoint:l=>this.conveyorManager.isExitPoint(l)}),o=new Ev({grid:t,queryEngine:a,storageRacks:this.storageRacks,storageFloorSlots:this.storageFloorSlots,storageConveyors:this.storageConveyors,getTaskQueue:()=>this.tasksManager.getTaskQueue(),canAddMoreTasks:(l,c)=>this.tasksManager.canAddMoreTasks(l,c),addTask:l=>this.tasksManager.addTask(l),getClosestAccessGridPosition:(l,c,d)=>this.workersManager.getClosestAccessGridPosition(l,c,d),isConveyorEntryPoint:l=>this.conveyorManager.isEntryPoint(l),isConveyorExitPoint:l=>this.conveyorManager.isExitPoint(l)});this.tasksManager=new Av({storageRacks:this.storageRacks,storageFloorSlots:this.storageFloorSlots,storageConveyors:this.storageConveyors,taskFactory:o,countWorkersCapableOf:(l,c)=>this.workersManager.countWorkersCapableOf(l,c),getTotalWorkerCount:()=>this.workersManager.getTotalCount()}),this.workersManager=new kv(t,i,s,{releaseTaskReservations:l=>this.tasksManager.releaseTaskReservations(l),onTaskAssigned:l=>this.tasksManager.onTaskAssigned(l),onTaskCompleted:l=>this.tasksManager.onTaskCompleted(l),onTaskFailed:l=>this.tasksManager.onTaskFailed(l),onTaskReturnedToPending:l=>this.tasksManager.onTaskReturnedToPending(l)}),this.workerDispatcher=new Pv(t),this.setupEventListeners()}setOutboundTrucksCallback(e){this.tasksManager.setOutboundTrucksCallback(e)}setupEventListeners(){T.on("order:needs-loading",({orderId:e,quantity:t,truck:n,dockX:i,dockZ:s,lines:a})=>{this.tasksManager.createLoadTruckTasks(e,t,n,i,s,a)}),T.on("order:retrieve-pallets",({quantity:e})=>{for(let t=0;t<e;t++)this.retrievePalletFromStorage()})}registerWorker(e){this.workersManager.registerWorker(e)}unregisterWorker(e){this.workersManager.unregisterWorker(e)}registerRack(e,t,n){this.storageRacks.set(`${t},${n}`,e)}unregisterRack(e,t){const n=`${e},${t}`,i=this.storageRacks.get(n);i&&this.tasksManager.cancelPendingTasksForStorage(i),this.storageRacks.delete(n)}registerFloorSlot(e,t,n){this.storageFloorSlots.set(`${t},${n}`,e)}unregisterFloorSlot(e,t){const n=`${e},${t}`,i=this.storageFloorSlots.get(n);i&&this.tasksManager.cancelPendingTasksForStorage(i),this.storageFloorSlots.delete(n)}createUnloadTasksForTruck(e,t,n){this.tasksManager.createUnloadTasksForTruck(e,t,n)}createLoadTruckTasks(e,t,n,i,s,a){return this.tasksManager.createLoadTruckTasks(e,t,n,i,s,a)}createPutawayTasks(){return this.tasksManager.createPutawayTasks()}createReplenishTasks(){return this.tasksManager.createReplenishTasks()}createStagingTasks(){return this.tasksManager.createStagingTasks()}isConveyorEntryPoint(e){return this.conveyorManager.isEntryPoint(e)}isConveyorExitPoint(e){return this.conveyorManager.isExitPoint(e)}retrievePalletFromStorage(){for(const e of this.storageRacks.values())if(!e.ownedByStackerCrane&&e.storedPallets>0)return e.retrieveTopPalletId(),!0;for(const e of this.storageFloorSlots.values())if(e.hasPallet)return e.retrieveTopPalletId(),!0;for(const e of this.storageConveyors.values())if(this.conveyorManager.isExitPoint(e)&&!e.isAutomationEntrance&&e.hasPallet)return e.retrieveTopPalletId(),!0;return!1}getTaskQueue(){return this.tasksManager.getTaskQueue()}getPendingTaskCount(){return this.tasksManager.getPendingTaskCount()}getActiveTaskCount(){return this.tasksManager.getActiveTaskCount()}getTaskQueueStats(){return this.tasksManager.getTaskQueueStats()}getWorkers(){return this.workersManager.getWorkers()}getWorkerState(e){return this.workersManager.getWorkerState(e)}getWorkerDebugInfo(){return this.workersManager.getWorkerDebugInfo()}purgeOrphanedStorageReservations(){return this.tasksManager.purgeOrphanedStorageReservations()}update(e){const t=z.get("phase")==="operations";this.workersManager.updateCollisionPositions(),this.tasksManager.update(e,t),this.workerDispatcher.assignTasks(this.tasksManager.getTaskQueue(),this.workersManager.getWorkers(),(n,i)=>this.workersManager.assignTaskToWorker(n,i)),this.workersManager.updateAll(e)}reset(){this.tasksManager.reset(),this.workersManager.reset(),this.storageRacks.clear(),this.storageFloorSlots.clear(),this.conveyorManager.invalidateCache(),$e.reset()}}class Iv{scene;inputSystem;placementSystem;selectedEntity=null;selectionHelper=null;accessIndicatorGroup=null;accessIndicatorSignature=null;teardropStorageType=null;isMoveMode=!1;isMultiSelectActive=!1;constructor(e,t,n){this.scene=e,this.inputSystem=t,this.placementSystem=n,this.setupEventListeners()}setupEventListeners(){T.on("input:click",e=>{if(!this.placementSystem.isInPlacementMode()&&!this.isMultiSelectActive&&!(e&&e.target instanceof HTMLElement&&(e.target.closest("#ui-container")||e.target.closest("#hud")||e.target.closest("#selection-panel")||e.target.closest("#build-menu")||e.target.closest(".modal")))){if(this.isMoveMode&&this.selectedEntity){this.handleMoveClick(e?.worldPos);return}this.handleSelection()}}),T.on("input:escape",()=>{if(this.isMoveMode){this.deactivateMoveMode();return}this.teardropStorageType!==null?this.deactivateTeardrop():this.deselect()}),T.on("ui:build-select",()=>{this.deactivateTeardrop(),this.deselect()}),T.on("ui:teardrop-activate",({storageType:e})=>{this.activateTeardrop(e)}),T.on("ui:teardrop-deactivate",()=>{this.deactivateTeardrop()}),T.on("ui:entity-move-activate",()=>{this.selectedEntity&&this.activateMoveMode()}),T.on("input:move-shortcut",()=>{!this.isMultiSelectActive&&this.selectedEntity&&this.activateMoveMode()}),T.on("input:delete",()=>{!this.isMultiSelectActive&&this.selectedEntity&&T.emit("ui:entity-sell",{entity:this.selectedEntity})}),T.on("multi-select:active:changed",({active:e})=>{this.isMultiSelectActive=e,e&&(this.deactivateTeardrop(),this.deselect())})}handleSelection(){const t=this.placementSystem.getAllEntities().map(i=>i.mesh),n=this.inputSystem.raycastObjects(t);if(n.length>0){let i=n[0].object,s;for(;i&&!s&&(s=i.userData.entityId,!s&&i.parent);)i=i.parent;if(s){let a=this.placementSystem.getEntityById(s);if(a){if(this.teardropStorageType!==null){this.applyTeardrop(a);return}if(a.type==="rack"){const o=this.placementSystem.getOwnerStackerCrane(a);o&&(a=o)}this.select(a);return}}}this.teardropStorageType===null&&this.deselect()}activateMoveMode(){this.isMoveMode=!0,document.body.classList.add("move-mode"),T.emit("entity:move-mode:changed",{active:!0})}deactivateMoveMode(){this.isMoveMode&&(this.isMoveMode=!1,document.body.classList.remove("move-mode"),T.emit("entity:move-mode:changed",{active:!1}))}handleMoveClick(e){if(!this.selectedEntity||!this.isMoveMode)return;this.placementSystem.moveEntityToWorldPos(this.selectedEntity,e)&&this.deactivateMoveMode()}applyTeardrop(e){this.teardropStorageType!==null&&"storageType"in e&&(e.storageType=this.teardropStorageType,T.emit("entity:storage-type-changed",{entity:e,storageType:this.teardropStorageType}))}activateTeardrop(e){this.teardropStorageType=e,T.emit("selection:teardrop-activated",{storageType:e})}deactivateTeardrop(){this.teardropStorageType!==null&&(this.teardropStorageType=null,T.emit("selection:teardrop-deactivated"))}isTeardropMode(){return this.teardropStorageType!==null}select(e){this.selectedEntity!==e&&(this.deselect(),this.selectedEntity=e,this.selectionHelper=new Zc(e.mesh,5164484),this.scene.add(this.selectionHelper),this.updateAccessIndicators(!0),T.emit("entity:selected:changed",{entity:e}))}deselect(){this.deactivateMoveMode(),this.deactivateTeardrop(),this.selectedEntity&&(this.selectionHelper&&(this.scene.remove(this.selectionHelper),this.selectionHelper.dispose(),this.selectionHelper=null),this.clearAccessIndicators(),this.selectedEntity=null,T.emit("entity:selected:changed",{entity:null}))}getSelectedEntity(){return this.selectedEntity}update(){this.selectionHelper&&this.selectedEntity&&this.selectionHelper.update(),this.selectedEntity instanceof jt&&this.updateAccessIndicators()}updateAccessIndicators(e=!1){if(!(this.selectedEntity instanceof jt)){this.clearAccessIndicators();return}const t=this.getAccessPointIndicators(this.selectedEntity);if(t.length===0){this.clearAccessIndicators();return}const n=t.map(({position:i,rotation:s})=>`${i.x.toFixed(2)},${i.z.toFixed(2)},${s.toFixed(2)}`).join("|");if(!(!e&&this.accessIndicatorGroup&&this.accessIndicatorSignature===n)){this.clearAccessIndicators(),this.accessIndicatorGroup=new wt;for(const i of t)this.accessIndicatorGroup.add(this.createAccessIndicatorMesh(i));this.accessIndicatorSignature=n,this.scene.add(this.accessIndicatorGroup)}}getAccessPointIndicators(e){return e.getAccessPositions().map(t=>({position:t.position,rotation:t.rotation,color:58879}))}createAccessIndicatorMesh(e){const t=e.color??58879,n=new wt,i=new Rr(.12,.2,16),s=new Ln({color:t,side:Vt,transparent:!0,opacity:.85,depthTest:!1}),a=new N(i,s);a.rotation.x=-Math.PI/2,a.position.copy(e.position),a.position.y=.03,a.renderOrder=999,n.add(a);const o=new A(Math.sin(e.rotation),0,Math.cos(e.rotation)).normalize(),l=e.position.clone();l.y=.08;const c=new Mr(o,l,.5,t,.18,.1),d=c.line.material;d.depthTest=!1,d.transparent=!0,d.opacity=.85;const h=c.cone.material;return h.depthTest=!1,h.transparent=!0,h.opacity=.95,c.line.renderOrder=1e3,c.cone.renderOrder=1e3,n.add(c),n}clearAccessIndicators(){if(!this.accessIndicatorGroup){this.accessIndicatorSignature=null;return}this.scene.remove(this.accessIndicatorGroup),this.accessIndicatorGroup.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material&&t.material.dispose()}),this.accessIndicatorGroup.clear(),this.accessIndicatorGroup=null,this.accessIndicatorSignature=null}}class Lv{scene;placementSystem;camera;grid;isActive=!1;isDragging=!1;dragStartScreen=null;dragStartWorld=null;selectedEntities=[];selectionHelpers=[];selectionRect;isMoveMode=!1;moveAnchorWorld=null;moveArrow=null;constructor(e,t,n,i){this.scene=e,this.placementSystem=t,this.camera=n,this.grid=i,this.selectionRect=this.createSelectionRect(),this.setupEventListeners()}createSelectionRect(){const e=document.createElement("div");return e.id="multi-select-rect",document.body.appendChild(e),e}setupEventListeners(){T.on("ui:multi-select-toggle",()=>{this.toggle()}),T.on("ui:multi-select-activate",e=>{this.activate(e?.source)}),T.on("ui:multi-select-deactivate",e=>{this.deactivate(e?.source)}),T.on("input:click",e=>{if(console.log("input:click event received in MultiSelectSystem",e),!this.isActive&&!this.isMoveMode){console.log("MultiSelectSystem is not active; ignoring click.");return}if(this.camera.getView()==="top"){if(e.target instanceof HTMLElement&&(e.target.closest("#ui-container")||e.target.closest("#hud")||e.target.closest("#selection-panel")||e.target.closest("#multi-select-panel")||e.target.closest("#build-menu")||e.target.closest(".modal"))){console.log("Click ignored due to UI element:",e.target);return}if(this.isMoveMode){this.handleMoveClick(e.worldPos);return}this.startDrag(e.screenX,e.screenY,e.worldPos)}}),T.on("input:mousemove",e=>{this.isActive&&(this.isDragging?this.updateDragRect(e.screenX,e.screenY):this.isMoveMode&&this.moveAnchorWorld&&this.updateMoveArrow(e.worldPos))}),T.on("input:mouseup",e=>{!this.isActive||!this.isDragging||this.endDrag(e.worldPos)}),T.on("input:delete",()=>{this.isActive&&this.selectedEntities.length>0&&(T.emit("ui:multi-select-sell-all",{entities:[...this.selectedEntities]}),this.clearSelection())}),T.on("input:move-shortcut",()=>{this.isActive&&this.selectedEntities.length>0&&this.activateMoveMode()}),T.on("input:escape",()=>{if(this.isMoveMode){this.deactivateMoveMode();return}if(this.selectedEntities.length>0){this.clearSelection();return}this.isActive&&this.deactivate()}),T.on("ui:build-select",()=>{this.deactivate()}),T.on("input:camera-view",e=>{e!=="top"&&this.deactivate()})}toggle(){this.isActive?this.deactivate():this.activate()}activate(e){this.isActive=!0,document.body.classList.add("multi-select-mode"),T.emit("multi-select:active:changed",{active:!0,source:e})}deactivate(e){this.isDragging=!1,this.dragStartScreen=null,this.dragStartWorld=null,this.hideSelectionRect(),e!=="shift"&&this.clearSelection(),this.isActive=!1,document.body.classList.remove("multi-select-mode"),T.emit("multi-select:active:changed",{active:!1,source:e})}isToolActive(){return this.isActive}getSelectedEntities(){return[...this.selectedEntities]}startDrag(e,t,n){this.clearSelection(),this.isDragging=!0,this.dragStartScreen={x:e,y:t},this.dragStartWorld=n.clone(),this.updateDragRect(e,t),this.selectionRect.classList.add("visible")}updateDragRect(e,t){if(!this.dragStartScreen)return;const n=Math.min(this.dragStartScreen.x,e),i=Math.min(this.dragStartScreen.y,t),s=Math.max(this.dragStartScreen.x,e),a=Math.max(this.dragStartScreen.y,t);this.selectionRect.style.left=`${n}px`,this.selectionRect.style.top=`${i}px`,this.selectionRect.style.width=`${s-n}px`,this.selectionRect.style.height=`${a-i}px`}endDrag(e){if(this.isDragging=!1,this.hideSelectionRect(),!this.dragStartWorld)return;const t=Math.min(this.dragStartWorld.x,e.x),n=Math.max(this.dragStartWorld.x,e.x),i=Math.min(this.dragStartWorld.z,e.z),s=Math.max(this.dragStartWorld.z,e.z),a=[];for(const o of this.placementSystem.getAllEntities()){const l=o.mesh.position;l.x>=t&&l.x<=n&&l.z>=i&&l.z<=s&&a.push(o)}this.dragStartScreen=null,this.dragStartWorld=null,a.length>0&&this.selectEntities(a)}hideSelectionRect(){this.selectionRect.classList.remove("visible")}selectEntities(e){this.clearHelpers(),this.selectedEntities=e;for(const t of e){const n=new Zc(t.mesh,5164484);this.scene.add(n),this.selectionHelpers.push(n)}T.emit("multi-select:changed",{entities:[...this.selectedEntities]})}clearHelpers(){for(const e of this.selectionHelpers)this.scene.remove(e),e.dispose();this.selectionHelpers=[]}clearSelection(){this.deactivateMoveMode(),this.clearHelpers(),this.selectedEntities=[],T.emit("multi-select:changed",{entities:[]})}activateMoveMode(){this.selectedEntities.length!==0&&(this.isMoveMode=!0,this.moveAnchorWorld=null,document.body.classList.add("multi-select-move-mode"),T.emit("multi-select:move-mode:changed",{active:!0,phase:"anchor"}))}deactivateMoveMode(){this.isMoveMode&&(this.isMoveMode=!1,this.moveAnchorWorld=null,this.removeMoveArrow(),document.body.classList.remove("multi-select-move-mode"),T.emit("multi-select:move-mode:changed",{active:!1,phase:null}))}handleMoveClick(e){if(console.log("handleMoveClick called with worldPos:",e),this.moveAnchorWorld){const t=this.grid.worldToGrid(this.moveAnchorWorld),n=this.grid.worldToGrid(e);if(t&&n){const i=n.x-t.x,s=n.z-t.z;(i!==0||s!==0)&&T.emit("ui:multi-select-move-all",{entities:[...this.selectedEntities],dx:i,dz:s})}this.deactivateMoveMode()}else{if(!this.grid.worldToGrid(e)){console.warn("Move anchor click is outside grid bounds; ignoring.");return}this.moveAnchorWorld=e.clone(),this.createMoveArrow(e),T.emit("multi-select:move-mode:changed",{active:!0,phase:"destination"})}}createMoveArrow(e){this.removeMoveArrow();const t=this.grid.worldToGrid(e);if(!t)return;const n=this.grid.gridToWorld(t.x,t.z);n.y=.12,this.moveArrow=new Mr(new A(0,0,1),n,0,5164484,.45,.28),this.moveArrow.visible=!1,this.scene.add(this.moveArrow)}updateMoveArrow(e){if(!this.moveArrow||!this.moveAnchorWorld)return;const t=this.grid.worldToGrid(this.moveAnchorWorld),n=this.grid.worldToGrid(e);if(!t||!n)return;const i=this.grid.gridToWorld(t.x,t.z);i.y=.12;const s=this.grid.gridToWorld(n.x,n.z);s.y=.12;const a=new A().subVectors(s,i),o=a.length();if(o<.01){this.moveArrow.visible=!1;return}this.moveArrow.visible=!0,this.moveArrow.position.copy(i),this.moveArrow.setDirection(a.clone().normalize()),this.moveArrow.setLength(o,Math.min(.45,o*.35),.28)}removeMoveArrow(){this.moveArrow&&(this.scene.remove(this.moveArrow),this.moveArrow=null)}update(){for(const e of this.selectionHelpers)e.update()}}const ga="warehouse-defender-challenges",ls=1,Ui=[{id:1,name:"First Steps",description:"A single truck arrives with 2 pallets. Store them and fulfill 1 outbound order.",gridWidth:12,gridHeight:10,budget:400,workerLimit:2,initialEntities:[{type:"truck-dock",x:3,z:9},{type:"truck-dock",x:3,z:0}],wave:{truckCount:1,palletsPerTruck:2,timeBetweenTrucks:15,totalWaveTime:90,outboundOrderCount:1,outboundOrderPallets:2},stars:{oneStar:0,twoStars:50,threeStars:150},hint:"Place a rack and a forklift to handle the pallets.",allowedBuildables:["rack","floor-slot","forklift","operator"]},{id:2,name:"Double Trouble",description:"Two trucks bring 2 pallets each. Keep costs low!",gridWidth:14,gridHeight:10,budget:600,workerLimit:3,initialEntities:[{type:"truck-dock",x:3,z:9},{type:"truck-dock",x:7,z:9},{type:"truck-dock",x:5,z:0}],wave:{truckCount:2,palletsPerTruck:2,timeBetweenTrucks:12,totalWaveTime:100,outboundOrderCount:1,outboundOrderPallets:2},stars:{oneStar:0,twoStars:80,threeStars:200},hint:"Use operators — they are cheaper than forklifts but slower.",allowedBuildables:["rack","floor-slot","forklift","operator"]},{id:3,name:"Floor Storage",description:"Limited budget — floor slots are cheap but hold only 1 pallet each.",gridWidth:12,gridHeight:10,budget:350,workerLimit:2,initialEntities:[{type:"truck-dock",x:3,z:9},{type:"truck-dock",x:3,z:0}],wave:{truckCount:1,palletsPerTruck:3,timeBetweenTrucks:15,totalWaveTime:90,outboundOrderCount:1,outboundOrderPallets:3},stars:{oneStar:0,twoStars:30,threeStars:100},hint:"Floor slots cost just $20 each — great for tight budgets.",allowedBuildables:["floor-slot","operator","forklift"]},{id:4,name:"Belt Basics",description:"Use conveyors to move pallets from the dock to storage.",gridWidth:14,gridHeight:12,budget:800,workerLimit:2,initialEntities:[{type:"truck-dock",x:5,z:11},{type:"truck-dock",x:5,z:0}],wave:{truckCount:1,palletsPerTruck:4,timeBetweenTrucks:15,totalWaveTime:60,outboundOrderCount:1,outboundOrderPallets:4},stars:{oneStar:0,twoStars:100,threeStars:250},hint:"Connect conveyors from dock row to storage area. Workers pick from conveyor ends.",allowedBuildables:["floor-slot","conveyor","operator"]},{id:5,name:"Diverter Junction",description:"Use diverters to split pallet flow to multiple storage aisles.",gridWidth:16,gridHeight:14,budget:1200,workerLimit:4,initialEntities:[{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0},{type:"truck-dock",x:7,z:13}],wave:{truckCount:2,palletsPerTruck:4,timeBetweenTrucks:10,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:4},stars:{oneStar:0,twoStars:150,threeStars:400},hint:"Diverters send pallets left, right, and forward in round-robin order.",allowedBuildables:["floor-slot","conveyor","diverter","operator"]},{id:6,name:"Rush Hour",description:"3 trucks arrive with short intervals. Manage dock congestion!",gridWidth:18,gridHeight:14,budget:1500,workerLimit:5,initialEntities:[{type:"truck-dock",x:3,z:13},{type:"truck-dock",x:7,z:13},{type:"truck-dock",x:11,z:13},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:3,palletsPerTruck:3,timeBetweenTrucks:8,totalWaveTime:100,outboundOrderCount:2,outboundOrderPallets:3},stars:{oneStar:0,twoStars:200,threeStars:500},hint:"Position workers near docks so they can start unloading quickly.",allowedBuildables:["rack","floor-slot","conveyor","diverter","forklift","operator"]},{id:7,name:"Tight Budget",description:"Minimal funds — every dollar counts. 4 trucks, 2 pallets each.",gridWidth:16,gridHeight:12,budget:800,workerLimit:3,initialEntities:[{type:"truck-dock",x:3,z:11},{type:"truck-dock",x:7,z:11},{type:"truck-dock",x:11,z:11},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:4,palletsPerTruck:2,timeBetweenTrucks:10,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:2},stars:{oneStar:0,twoStars:50,threeStars:200},hint:"Operators ($150) are a lot cheaper than forklifts ($500). Use floor slots ($20) to save on storage.",allowedBuildables:["rack","floor-slot","conveyor","diverter","forklift","operator"]},{id:8,name:"Heavy Load",description:"Trucks carry 5 pallets each — you need serious storage capacity!",gridWidth:16,gridHeight:12,budget:4e3,workerLimit:5,initialEntities:[{type:"truck-dock",x:3,z:11},{type:"truck-dock",x:7,z:11},{type:"truck-dock",x:11,z:11},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:3,palletsPerTruck:5,timeBetweenTrucks:10,totalWaveTime:180,outboundOrderCount:3,outboundOrderPallets:5},stars:{oneStar:0,twoStars:300,threeStars:700},hint:"Racks store 4 pallets each — much more space-efficient than floor slots."},{id:9,name:"Automation 101",description:"Build a single automated conveyor line from inbound to outbound dock.",gridWidth:5,gridHeight:16,budget:7e3,workerLimit:0,initialEntities:[{type:"automated-truck-dock",x:2,z:0}],wave:{truckCount:1,palletsPerTruck:4,timeBetweenTrucks:12,totalWaveTime:180,outboundOrderCount:1,outboundOrderPallets:4},stars:{oneStar:0,twoStars:500,threeStars:1e3},allowedBuildables:["conveyor","automated-truck-dock"],hint:"Place an automated dock on the north edge and run a conveyor spine into the prebuilt outbound dock."},{id:10,name:"AGV Fleet",description:"Forklift AGVs don't need worker slots. Build an automated fleet.",gridWidth:20,gridHeight:16,budget:11e3,workerLimit:0,initialEntities:[{type:"truck-dock",x:4,z:15},{type:"truck-dock",x:8,z:15},{type:"truck-dock",x:12,z:15},{type:"truck-dock",x:6,z:0},{type:"truck-dock",x:10,z:0}],wave:{truckCount:4,palletsPerTruck:4,timeBetweenTrucks:8,totalWaveTime:150,outboundOrderCount:3,outboundOrderPallets:4},allowedBuildables:["rack","floor-slot","conveyor","diverter","forklift-agv"],stars:{oneStar:0,twoStars:1e3,threeStars:3e3},hint:"AGVs ($2,500) don't count toward your worker limit — perfect when slots are scarce."},{id:11,name:"The Gauntlet",description:"5 trucks, 5 pallets each, tight timer. Can you handle it?",gridWidth:20,gridHeight:16,budget:4200,workerLimit:10,initialEntities:[{type:"truck-dock",x:3,z:15},{type:"truck-dock",x:6,z:15},{type:"truck-dock",x:9,z:15},{type:"truck-dock",x:12,z:15},{type:"truck-dock",x:15,z:15},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0},{type:"truck-dock",x:13,z:0}],wave:{truckCount:5,palletsPerTruck:5,timeBetweenTrucks:6,totalWaveTime:120,outboundOrderCount:4,outboundOrderPallets:5},stars:{oneStar:0,twoStars:400,threeStars:1e3},hint:"Spread workers across docks and use close-by storage to minimize travel time."},{id:12,name:"Penny Pincher",description:"Very limited budget, heavy wave. Master cost efficiency.",gridWidth:16,gridHeight:12,budget:600,workerLimit:3,initialEntities:[{type:"truck-dock",x:3,z:11},{type:"truck-dock",x:7,z:11},{type:"truck-dock",x:11,z:11},{type:"truck-dock",x:5,z:0},{type:"truck-dock",x:9,z:0}],wave:{truckCount:3,palletsPerTruck:3,timeBetweenTrucks:10,totalWaveTime:120,outboundOrderCount:2,outboundOrderPallets:3},stars:{oneStar:0,twoStars:30,threeStars:100},hint:"Operators + floor slots = cheapest possible setup."},{id:13,name:"Full Automation",description:"Build a fully automated warehouse — no manual workers allowed!",gridWidth:20,gridHeight:16,budget:32e3,workerLimit:0,initialEntities:[{type:"truck-dock",x:4,z:15},{type:"truck-dock",x:8,z:15},{type:"truck-dock",x:12,z:15},{type:"truck-dock",x:16,z:15},{type:"truck-dock",x:6,z:0},{type:"truck-dock",x:10,z:0},{type:"truck-dock",x:14,z:0}],wave:{truckCount:3,palletsPerTruck:5,timeBetweenTrucks:10,totalWaveTime:200,outboundOrderCount:2,outboundOrderPallets:5},stars:{oneStar:0,twoStars:3e3,threeStars:8e3},hint:"Automated docks + conveyors + AGVs = no workers needed.",allowedBuildables:["rack","floor-slot","conveyor","diverter","automated-truck-dock","forklift-agv","stacker-crane"]},{id:14,name:"Stacker Challenge",description:"Use stacker cranes for high-density storage in a narrow warehouse.",gridWidth:20,gridHeight:20,budget:15e3,workerLimit:4,initialEntities:[{type:"truck-dock",x:5,z:19},{type:"truck-dock",x:10,z:19},{type:"truck-dock",x:15,z:19},{type:"truck-dock",x:7,z:0},{type:"truck-dock",x:12,z:0}],wave:{truckCount:4,palletsPerTruck:6,timeBetweenTrucks:8,totalWaveTime:180,outboundOrderCount:3,outboundOrderPallets:6},stars:{oneStar:0,twoStars:2e3,threeStars:5e3},hint:"Stacker cranes automatically manage racks along their rail. Place rows of racks next to the crane."},{id:15,name:"Grand Finale",description:"The ultimate challenge — massive wave, limited budget, small grid.",gridWidth:16,gridHeight:14,budget:3600,workerLimit:8,initialEntities:[{type:"truck-dock",x:2,z:13},{type:"truck-dock",x:5,z:13},{type:"truck-dock",x:8,z:13},{type:"truck-dock",x:11,z:13},{type:"truck-dock",x:3,z:0},{type:"truck-dock",x:7,z:0},{type:"truck-dock",x:11,z:0}],wave:{truckCount:5,palletsPerTruck:4,timeBetweenTrucks:6,totalWaveTime:150,outboundOrderCount:4,outboundOrderPallets:4},stars:{oneStar:0,twoStars:200,threeStars:600},hint:"You'll need a perfect layout. Mix operators and forklifts, use every available cell wisely."}];class Dv{progress;activeChallengeId=null;constructor(){this.progress=this.loadProgress()}getLevels(){return Ui}getLevel(e){return Ui.find(t=>t.id===e)}getLevelCount(){return Ui.length}isLevelUnlocked(e){if(e===1)return!0;const t=this.progress.levels[e-1];return!!t&&t.stars>0}getActiveChallengeId(){return this.activeChallengeId}getActiveChallenge(){return this.activeChallengeId===null?null:this.getLevel(this.activeChallengeId)??null}setActiveChallenge(e){this.activeChallengeId=e}clearActiveChallenge(){this.activeChallengeId=null}isInChallengeMode(){return this.activeChallengeId!==null}calculateStars(e,t,n){if(n)return 0;const i=this.getLevel(e);if(!i)return 0;const{stars:s}=i;return t>=s.threeStars?3:t>=s.twoStars?2:t>=s.oneStar?1:0}getLevelProgress(e){return this.progress.levels[e]}getLevelStars(e){return this.progress.levels[e]?.stars??0}getTotalStars(){return Object.values(this.progress.levels).reduce((e,t)=>e+t.stars,0)}getMaxTotalStars(){return Ui.length*3}getCompletedCount(){return Object.values(this.progress.levels).filter(e=>e.stars>0).length}recordCompletion(e,t,n){const i=this.progress.levels[e],s={levelId:e,stars:Math.max(t,i?.stars??0),bestRemainingMoney:Math.max(n,i?.bestRemainingMoney??0),completedAt:Date.now()};return this.progress.levels[e]=s,this.saveProgress(),s}loadProgress(){try{const e=localStorage.getItem(ga);if(!e)return{version:ls,levels:{}};const t=JSON.parse(e);return t.version!==ls?{version:ls,levels:{}}:t}catch{return{version:ls,levels:{}}}}saveProgress(){try{localStorage.setItem(ga,JSON.stringify(this.progress))}catch(e){console.error("Failed to save challenge progress:",e)}}resetProgress(){this.progress={version:ls,levels:{}},localStorage.removeItem(ga)}getProgressData(){return this.progress}}const Dt=new Dv;function Ye(r,e){let t=0;r.addEventListener("touchend",n=>{n.preventDefault(),t=Date.now(),e()},{passive:!1}),r.addEventListener("click",()=>{Date.now()-t<300||e()})}class Ov{constructor(e){this.deps=e}showChallengeLevelSelect(e){const t=Ui,n=Dt.getTotalStars(),i=Dt.getMaxTotalStars(),s=t.map(a=>{const o=Dt.isLevelUnlocked(a.id),l=Dt.getLevelProgress(a.id),c=l?.stars??0;if(!o)return`
          <div class="challenge-level-card locked">
            <span class="challenge-level-number">Level ${a.id}</span>
            <span class="challenge-level-name">${this.deps.escapeHtml(a.name)}</span>
            <div class="challenge-level-lock">🔒</div>
          </div>`;const d=Array.from({length:3},(h,u)=>u<c?'<span class="star-earned">★</span>':'<span class="star-empty">★</span>').join("");return`
        <div class="challenge-level-card ${c>0?"completed":""}" data-level-id="${a.id}">
          <span class="challenge-level-number">Level ${a.id}</span>
          <span class="challenge-level-name">${this.deps.escapeHtml(a.name)}</span>
          <span class="challenge-level-desc">${this.deps.escapeHtml(a.description)}</span>
          <div class="challenge-level-stars">${d}</div>
          ${l?`<span class="challenge-level-best">Best: $${l.bestRemainingMoney}</span>`:""}
        </div>`}).join("");this.deps.loadingScreen.innerHTML=`
      <div class="challenge-container">
        <div class="challenge-header">
          <h2 class="challenge-title">⭐ Challenges</h2>
          <span class="challenge-stats"><span class="star-count">${n}</span> / ${i} ★</span>
        </div>
        <div class="challenge-levels-scroll">
          <div class="challenge-levels-grid">
            ${s}
          </div>
        </div>
        <div style="padding: 12px 16px; border-top: 1px solid var(--ui-border); text-align: center;">
          <button id="btn-challenge-back" class="menu-btn menu-btn-secondary challenge-back">← Back to Menu</button>
        </div>
      </div>
    `,this.deps.loadingScreen.querySelectorAll(".challenge-level-card:not(.locked)").forEach(a=>{a.addEventListener("click",()=>{const o=parseInt(a.dataset.levelId??"1",10);this.showChallengeDetail(o,e)})}),document.getElementById("btn-challenge-back")?.addEventListener("click",()=>{this.deps.onBackToMenu(e)})}showChallengeDetail(e,t){const n=Dt.getLevel(e);if(!n)return;const s=Dt.getLevelProgress(e)?.stars??0,a=(d,h)=>{const u=Array.from({length:d},()=>"★").join(""),f=s>=d;return`<div class="challenge-star-row">
        <span class="star-icons">${u}</span>
        <span>≥ $${h} remaining${f?" ✓":""}</span>
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
    `,document.body.appendChild(o),o.addEventListener("click",d=>{d.target===o&&o.remove()});const l=o.querySelector("#btn-challenge-detail-back");l&&Ye(l,()=>{o.remove(),t||T.emit("ui:challenge-return-menu")});const c=o.querySelector("#btn-challenge-start");c&&Ye(c,()=>{o.remove(),T.emit("ui:challenge-start",{levelId:e})})}showChallengeHUD(e){document.querySelector(".challenge-hud-banner")?.remove();const t=document.createElement("div");t.className="challenge-hud-banner",t.innerHTML=`
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
    `,document.getElementById("ui-container")?.appendChild(t);const n=t.querySelector("#btn-challenge-hud-toggle"),i=a=>{t.classList.toggle("mobile-collapsed",a),n&&(n.textContent=a?"▸":"▾",n.setAttribute("aria-expanded",String(!a)),n.title=a?"Show challenge objectives":"Hide challenge objectives")};i(!1),n&&this.deps.addMobileInteraction(n,()=>{i(!t.classList.contains("mobile-collapsed"))});const s=t.querySelector("#btn-challenge-hud-retry");s&&Ye(s,()=>{T.emit("ui:challenge-start",{levelId:e.id})})}hideChallengeHUD(){document.querySelector(".challenge-hud-banner")?.remove()}showChallengeResults(e,t,n,i){const s=Array.from({length:3},(g,v)=>v<t?'<span class="star-earned">★</span>':'<span class="star-empty">★</span>').join(""),a=e.id===Ui.length,o=Dt.getLevel(e.id+1),l=!a&&o&&!i;let c="";i?c="The wave was not completed. Try a different layout!":t===3?c="Perfect score! Outstanding efficiency!":t===2?c="Great job! Can you optimize further?":t===1?c="Challenge completed! Try to earn more stars.":c="Challenge completed, but try to save more money for stars!";const d=document.createElement("div");d.className="challenge-results-overlay",d.innerHTML=`
      <div class="challenge-results-card">
        <div class="challenge-results-title ${i?"failed":""}">
          ${i?"Challenge Failed":"Challenge Complete!"}
        </div>
        ${i?"":`<div class="challenge-results-stars">${s}</div>`}
        ${i?"":`<div class="challenge-results-money">$${n} remaining</div>`}
        <div class="challenge-results-message">${c}</div>
        <div class="challenge-results-actions">
          <button class="menu-btn menu-btn-secondary" id="btn-challenge-results-menu">🏠 Menu</button>
          <button class="menu-btn menu-btn-secondary" id="btn-challenge-results-retry">🔄 Retry</button>
          ${l?'<button class="menu-btn menu-btn-primary" id="btn-challenge-results-next">▶ Next Level</button>':""}
        </div>
      </div>
    `,document.body.appendChild(d);const h=d.querySelector("#btn-challenge-results-menu");h&&Ye(h,()=>{d.remove(),T.emit("ui:challenge-return-menu")});const u=d.querySelector("#btn-challenge-results-retry");u&&Ye(u,()=>{d.remove(),T.emit("ui:challenge-start",{levelId:e.id})});const f=d.querySelector("#btn-challenge-results-next");f&&Ye(f,()=>{d.remove(),this.showChallengeDetail(e.id+1)})}hideChallengeResults(){document.querySelector(".challenge-results-overlay")?.remove()}}class Uv{constructor(e,t){this.container=e,this.deps=t}collapsed=!1;previewOrdersCallback=null;currentWaveConfig=null;trucksSpawned=0;trucksActive=0;isPendingOutboundWave=!1;isActiveOutboundWave=!1;setupEventListeners(){T.on("phase:build",()=>{this.updateWavePreview()}),T.on("phase:operations",()=>{this.updateWavePreview()}),T.on("phase:reorg",()=>{this.updateWavePreview()}),T.on("outbound-wave:queued",()=>{this.isPendingOutboundWave=!0,this.isActiveOutboundWave=!1,this.updateWavePreview()}),T.on("outbound-wave:start",e=>{this.isPendingOutboundWave=!1,this.isActiveOutboundWave=!0,this.trucksSpawned=0,this.trucksActive=0,this.updateWavePreview(e.duration)}),T.on("wave:start",e=>{this.currentWaveConfig=e.config,this.isPendingOutboundWave=!1,this.isActiveOutboundWave=!1,this.trucksSpawned=0,this.trucksActive=0,this.deps.onHudUpdated(),this.updateWavePreview(e.config.totalWaveTime)}),T.on("wave:complete",()=>{this.currentWaveConfig=null,this.isPendingOutboundWave=!1,this.isActiveOutboundWave=!1,this.trucksSpawned=0,this.trucksActive=0,this.deps.onHudUpdated(),this.updateWavePreview()}),T.on("reorg:start",e=>{this.deps.onHudUpdated(),this.updateWavePreview(e.duration)}),T.on("reorg:progress",e=>{this.updateWavePreview(e.timeRemaining)}),T.on("truck:arrived",()=>{this.trucksSpawned++,this.trucksActive++}),T.on("wave:progress",e=>{if(e.trucksRemaining!==void 0&&this.currentWaveConfig){const t=this.currentWaveConfig.truckCount;this.trucksActive=e.trucksRemaining-(t-this.trucksSpawned)}this.updateWavePreview(e.timeRemaining)})}setPreviewOrdersCallback(e){this.previewOrdersCallback=e}updateWavePreview(e){const t=z.get("phase"),n=z.get("wave"),i=this.deps.getWaveConfig(n),s=this.previewOrdersCallback?this.previewOrdersCallback():[];this.render({phase:t,previewWave:n,config:i,timeRemaining:e,collapsed:this.collapsed,trucksSpawned:this.trucksSpawned,trucksActive:this.trucksActive,previewOrders:s,isOutboundWave:this.isPendingOutboundWave||this.isActiveOutboundWave},a=>{this.collapsed=a})}render(e,t){const n=e.phase==="operations",i=e.phase==="reorg",s=e.config.truckCount*e.config.palletsPerTruck,a=e.previewOrders.reduce((u,f)=>u+(f.quantity||0),0),o=s-a,l=(n||i)&&e.timeRemaining!==void 0?`
      <div class="wave-timer">
        <div class="label">Time Remaining</div>
        <div class="time">${this.formatTime(e.timeRemaining)}</div>
      </div>
    `:"",c=n&&!e.isOutboundWave?this.generateWaveProgressBar(e.config,e.timeRemaining??0,e.trucksSpawned,e.trucksActive):"",d=!n&&!i?this.generateOutboundOrdersPreview(e.previewOrders):"";if(i)this.container.innerHTML=`
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
      `;else if(e.isOutboundWave){const u=n?"🚨 Outbound Wave":"📦 Outbound Wave (Queued)";this.container.innerHTML=`
        <div class="wave-preview-title">
          <span>${u}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="wave-number">Bonus</span>
            <button class="toggle-panel-btn" id="toggle-wave-preview">${e.collapsed?"+":"−"}</button>
          </div>
        </div>
        <div id="wave-preview-content-container" class="wave-preview-content ${e.collapsed?"collapsed-content":""}">
          <div class="wave-stat">
            <span class="icon">📤</span>
            <div class="info">
              <div class="label">Pallets to Ship</div>
              <div class="value">${a} pallet${a!==1?"s":""}</div>
            </div>
          </div>
          <div class="wave-stat">
            <span class="icon">💰</span>
            <div class="info">
              <div class="label">Reward Multiplier</div>
              <div class="value">2× per pallet</div>
            </div>
          </div>
          <div class="wave-stat">
            <span class="icon">🚫</span>
            <div class="info">
              <div class="label">Inbound Trucks</div>
              <div class="value">None</div>
            </div>
          </div>
          ${n?"":d}
          ${l}
        </div>
      `}else this.container.innerHTML=`
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
            <span class="icon">🏷️</span>
            <div class="info">
              <div class="label">SKU Types</div>
              <div class="value">${Kn(e.previewWave)} SKU${Kn(e.previewWave)>1?"s":""}</div>
            </div>
          </div>
          <div class="wave-stat">
            <span class="icon">📦</span>
            <div class="info">
              <div class="label">Total Pallets</div>
              <div class="value">${s} pallets</div>
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
          ${d}
          <div class="wave-stat">
            <span class="icon">Δ</span>
            <div class="info">
              <div class="label">Expected Storage Incr.</div>
              <div class="value">${o} pallet${Math.abs(o)!==1?"s":""}</div>
            </div>
          </div>
          ${l}
        </div>
      `;const h=document.getElementById("toggle-wave-preview");h&&(h.addEventListener("click",u=>u.stopPropagation()),Ye(h,()=>{const u=!e.collapsed;t(u);const f=document.getElementById("wave-preview-content-container");f&&f.classList.toggle("collapsed-content",u);const g=document.getElementById("toggle-wave-preview");g&&(g.textContent=u?"+":"−")}))}generateOutboundOrdersPreview(e){if(e.length===0)return"";const t=Array.from(e).map(n=>`
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
    `}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}generateWaveProgressBar(e,t,n,i){const s=e.totalWaveTime,a=s-t,o=Math.min(100,a/s*100),l=[],c=sn.ANIM_DURATION_SECONDS;for(let u=0;u<e.truckCount;u++)l.push(u*e.timeBetweenTrucks+c);const d=l.map((u,f)=>{const g=u/s*100,v=a>=u&&f<n;let m="future",p="🚚",w=`Truck ${f+1} at ${this.formatTime(u)}`;if(v){const b=n-i;f<b?(m="gone",p="✓",w=`Truck ${f+1} departed`):m=f===n-1||f===b?"current":"passed"}return`
        <div class="truck-indicator ${m}" 
             style="left: ${g}%" 
             title="${w}">
          <div class="truck-icon">${p}</div>
          <div class="truck-time">${this.formatTime(u)}</div>
        </div>
      `}).join(""),h=(()=>{if(!e.outboundOrderCount||e.outboundOrderCount<=0)return"";const u=[];for(let f=0;f<e.outboundOrderCount;f++)u.push(f*s/Math.max(1,e.outboundOrderCount));return u.map((f,g)=>{const v=f/s*100,m=a>=f,p=m?"passed":"future",w=m?"✅":"📦",b=`Outbound ${g+1} at ${this.formatTime(f)}`;return`
          <div class="truck-indicator outbound ${p}" 
               style="left: ${v}%" 
               title="${b}">
            <div class="truck-icon">${w}</div>
            <div class="truck-time">${this.formatTime(f)}</div>
          </div>
        `}).join("")})();return`
      <div class="wave-progress-section">
        <div class="wave-progress-label">Wave Progress</div>
        <div class="wave-progress-bar-container">
          <div class="wave-progress-bar">
            <div class="wave-progress-fill" style="width: ${o}%"></div>
          </div>
          ${d}
          ${h}
        </div>
      </div>
    `}}class Nv{constructor(e,t,n){this.selectionPanelElement=e,this.multiSelectPanelElement=t,this.deps=n}selectedEntity=null;isTeardropMode=!1;isMoveMode=!1;multiSelectedEntities=[];isMultiSelectActive=!1;isMultiSelectMoveMode=!1;multiSelectMoveModePhase=null;pickingManager=null;scene=null;grid=null;pickArrow=null;dropArrow=null;currentArrowTaskId=null;initSelectionDependencies(e,t,n){this.pickingManager=e,this.scene=t,this.grid=n}hasSelectedEntity(){return this.selectedEntity!==null}isMultiSelectToolActive(){return this.isMultiSelectActive}handleEntitySelection(e){this.isTeardropMode=!1,this.isMoveMode=!1,document.body.classList.remove("teardrop-mode"),this.selectedEntity=e,this.updateSelectionPanel()}deactivateTeardropMode(){this.isTeardropMode=!1,document.body.classList.remove("teardrop-mode")}setMoveMode(e){this.isMoveMode=e}setMultiSelectToolActive(e,t){this.isMultiSelectActive=e;const n=document.getElementById("btn-multi-select");if(n&&n.classList.toggle("active",e),e){t!=="shift"&&this.selectionPanelElement.classList.add("hidden");return}t!=="shift"&&(this.multiSelectedEntities=[],this.isMultiSelectMoveMode=!1,this.multiSelectMoveModePhase=null,this.multiSelectPanelElement.classList.contains("hidden")||this.multiSelectPanelElement.classList.add("hidden"))}setMultiSelectedEntities(e){this.multiSelectedEntities=e}setMultiSelectMoveMode(e,t){this.isMultiSelectMoveMode=e,this.multiSelectMoveModePhase=t}setupEventListeners(){T.on("entity:selected:changed",({entity:e})=>{this.handleEntitySelection(e)}),T.on("selection:teardrop-deactivated",()=>{this.deactivateTeardropMode(),this.updateSelectionPanel()}),T.on("entity:move-mode:changed",({active:e})=>{this.setMoveMode(e);const t=document.getElementById("move-entity-btn");t&&t.classList.toggle("active",e)}),T.on("entity:moved",()=>{this.updateSelectionPanel()}),T.on("phase:operations",()=>{this.hasSelectedEntity()&&this.updateSelectionPanel()}),T.on("multi-select:active:changed",({active:e,source:t})=>{this.setMultiSelectToolActive(e,t)}),T.on("multi-select:changed",({entities:e})=>{this.setMultiSelectedEntities(e),this.updateMultiSelectPanel()}),T.on("multi-select:move-mode:changed",({active:e,phase:t})=>{this.setMultiSelectMoveMode(e,t),this.updateMultiSelectPanel()})}updateSelectionPanel(){if(!this.selectedEntity){this.selectionPanelElement.classList.contains("hidden")||(this.selectionPanelElement.classList.add("hidden"),this.clearArrows(),this.currentArrowTaskId=null);return}const e=this.selectedEntity,t=Lt[e.type],n=e.getGridPosition(),i=e instanceof un?e:null,s=i?.capacity??t?.storageCapacity,a=i?dd(i.capacity):t?.sellValue||0;let o="",l="",c="";const d=["unload-truck","putaway","replenish","stage","load-truck"],h={"unload-truck":"Unload Truck",putaway:"Put Away",replenish:"Replenish",stage:"Stage","load-truck":"Load Truck"};if(e.type==="operator"||e.type==="forklift"||e.type==="forklift-agv"){const re=this.pickingManager?.getWorkerState(e.id),ie=e instanceof It?e:null;if(re){const j=re.currentTask,de=re.taskPhase.replace(/-/g," ");o=`
          <div class="selection-worker-status">
            <div class="worker-status-header">Current Task</div>
            <div class="worker-status-value">${j?j.type.replace(/-/g," "):"Idle"}</div>
            <div class="worker-status-header" style="margin-top: 8px;">Phase</div>
            <div class="worker-status-value">${de}</div>
          </div>
        `;const oe=j?.id||null;oe!==this.currentArrowTaskId&&(this.clearArrows(),j&&this.scene&&this.grid&&this.createTaskArrows(j),this.currentArrowTaskId=oe)}else this.clearArrows(),this.currentArrowTaskId=null;if(ie){const j={1:"Hand Pallet Truck",2:"Electric Pallet Truck",3:"Embarked Pallet Truck"},de=cd(ie.equipmentTier);if(de){const oe=j[ie.equipmentTier+1]??"Next Tier";c=`
            <div class="selection-worker-status">
              <div class="worker-status-header">Equipment</div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div class="worker-status-value">${j[ie.equipmentTier]}</div>
                <button class="upgrade-btn" id="upgrade-worker-btn" title="Upgrade to ${oe} ($${de})" aria-label="Upgrade worker equipment">
                  ⬆️
                </button>
              </div>
            </div>
          `}}const ke=e.allowedTaskTypes;l=`
        <div class="selection-worker-status">
          <div class="worker-status-header">Allowed Tasks</div>
          <div class="task-filter-list">${d.map(j=>{const de=ke===null||ke.includes(j)?"checked":"";return`<label class="task-filter-item"><input type="checkbox" class="task-filter-checkbox" data-task-type="${j}" ${de}><span>${h[j]}</span></label>`}).join("")}</div>
        </div>
      `}else this.clearArrows(),this.currentArrowTaskId=null;const f=e.type==="conveyor"||e.type==="diverter",g="storageType"in e,v=g?e.storageType??"general":"general",m=["general","unloading","storage","picking","loading"],p={general:"General",unloading:"Unloading",storage:"Storage",picking:"Picking",loading:"Loading"},w=["south","west","north","east"],b={south:"South ↓",north:"North ↑",east:"East →",west:"West ←"},S=f?e.direction:"south",I=f?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Direction</span>
        <div class="storage-type-picker">
          <span class="storage-type-label" id="conveyor-direction-label">${b[S]}</span>
          <button class="rotate-btn" id="conveyor-rotate-btn" aria-label="Rotate conveyor 90°">↻ Rotate</button>
        </div>
      </div>
    `:"",k=g?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Zone Type</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="storage-type-prev" aria-label="Previous zone type">&#9664;</button>
          <span class="storage-type-label" id="storage-type-label">${p[v]}</span>
          <button class="storage-type-btn" id="storage-type-next" aria-label="Next zone type">&#9654;</button>
          <button class="teardrop-btn${this.isTeardropMode?" active":""}" id="teardrop-btn" style="--storage-type-color: #${""+Ms[v].toString(16).padStart(6,"0")}" aria-label="Paint zone type onto other entities" title="Paint this zone type onto other entities">🩸</button>
        </div>
      </div>
    `:"",P=g?e.allowedSku??null:null,R=Math.max(1,Kn(z.get("wave"))),M=Math.min(ao,R),y=[null,...Array.from({length:M},(re,ie)=>ie)],C=P===null?"Any":`${Oi[P]??"Unknown"}`,H=P===null?"transparent":`#${(Vn[P]??16777215).toString(16).padStart(6,"0")}`,F=g?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Allowed SKU</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="allowed-sku-prev" aria-label="Previous allowed SKU">&#9664;</button>
          <span class="storage-type-label" id="allowed-sku-label">${C} <span class="allowed-sku-swatch" id="allowed-sku-swatch" style="background:${H}"></span></span>
          <button class="storage-type-btn" id="allowed-sku-next" aria-label="Next allowed SKU">&#9654;</button>
        </div>
      </div>
    `:"",Y={idle:"Idle","moving-to-pickup":"Moving to Pickup",picking:"Picking","retracting-after-pick":"Retracting","moving-to-drop":"Moving to Drop",dropping:"Dropping","retracting-after-drop":"Retracting"},K={idle:"#607d8b","moving-to-pickup":"#f5a623",picking:"#4caf50","retracting-after-pick":"#4db6e4","moving-to-drop":"#f5a623",dropping:"#4caf50","retracting-after-drop":"#4db6e4"},$={north:"North ↑",south:"South ↓",east:"East →",west:"West ←"};let ee="";if(e instanceof si){const re=e,ie=re.currentState,pe=K[ie]??"#607d8b",ke=Y[ie]??ie,X=re.storedPalletsTotal,j=re.capacityTotal,de=j>0?Math.round(X/j*100):0,oe=de>80?"#e53935":de>50?"#f5a623":"#4caf50",xe=re.childConveyors.map(Ae=>{const Ne=Ae.getGridPosition(),Qe=re.isEntranceConveyor(Ae),Le=Qe?"↗ In":"↙ Out",lt=Qe?"#4db6e4":"#a78bfa",D=Ae.hasPallet?'<span style="color:#4caf50;font-weight:bold" title="Has pallet">●</span>':'<span style="color:#455a64" title="Empty">○</span>';return`
          <div class="crane-conveyor-row">
            <span class="crane-conv-type" style="color:${lt}">${Le}</span>
            <span class="crane-conv-pos">(${Ne.x}, ${Ne.z})</span>
            <span class="crane-conv-dir">${$[Ae.direction]??Ae.direction}</span>
            <span class="crane-conv-pallet">${D}</span>
          </div>`}).join("");ee=`
        <div class="crane-status-block">
          <div class="crane-status-header">Stacker Crane</div>
          <div class="crane-status-row">
            <span class="label">Direction</span>
            <span class="value">${re.aisleDirection==="north-south"?"North–South":"East–West"}</span>
          </div>
          <div class="crane-status-row">
            <span class="label">Aisle Length</span>
            <span class="value">${re.length} cell${re.length!==1?"s":""}</span>
          </div>
          <div class="crane-status-row">
            <span class="label">Status</span>
            <span class="value">
              <span class="crane-state-dot" style="background:${pe}"></span>
              ${ke}
            </span>
          </div>
          <div class="crane-status-row">
            <span class="label">Carrying Pallet</span>
            <span class="value">${re.isCarryingPallet?"📦 Yes":"— No"}</span>
          </div>
          <div class="crane-status-row">
            <span class="label">Rack Storage</span>
            <span class="value crane-fill-value">
              ${X} / ${j}
              <span class="crane-fill-bar"><span class="crane-fill-bar-inner" style="width:${de}%;background:${oe}"></span></span>
            </span>
          </div>
          ${re.childConveyors.length>0?`
          <div class="crane-status-row crane-conv-header-row">
            <span class="label">Conveyors (${re.childConveyors.length})</span>
          </div>
          <div class="crane-conveyor-list">${xe}</div>
          `:""}
        </div>
      `}const V=i?.canUpgradeHeight()?`
      <button class="upgrade-btn" id="upgrade-rack-btn" title="Upgrade rack height($300)" aria-label="Upgrade rack height">
        ⬆️
      </button>
    `:"",ce=`
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
        ${s?`
          <div class="selection-info-item">
            <span class="label">Capacity</span>
            <span class="value">${s} pallets</span>
          </div>
        `:""}
        ${k}
        ${F}
        ${I}
        ${o}
        ${l}
        ${c}
        ${ee}
        <div class="selection-actions">
          ${V}
          <button class="move-btn${this.isMoveMode?" active":""}" id="move-entity-btn" aria-label="Move entity to another grid cell" title="Move to another cell">✥ Move</button>
          <button class="sell-btn" id="sell-entity-btn">
            Sell for $${a}
          </button>
        </div>
      </div>
    `;if(this.selectionPanelElement.innerHTML!==ce&&!this.deps.isPanelInteractionActive()){this.selectionPanelElement.innerHTML=ce;const re=document.getElementById("sell-entity-btn");re&&this.deps.addMobileInteraction(re,()=>{T.emit("ui:entity-sell",{entity:this.selectedEntity})});const ie=document.getElementById("move-entity-btn");ie&&this.deps.addMobileInteraction(ie,()=>{T.emit("ui:entity-move-activate")});const pe=document.getElementById("upgrade-rack-btn");pe&&i&&this.deps.addMobileInteraction(pe,()=>{T.emit("ui:rack-upgrade",{rack:i})});const ke=document.getElementById("upgrade-worker-btn");if(ke&&e instanceof It&&this.deps.addMobileInteraction(ke,()=>{T.emit("ui:worker-upgrade",{operator:e})}),e.type==="forklift"||e.type==="operator"||e.type==="forklift-agv"){const X=this.selectedEntity;this.selectionPanelElement.querySelectorAll(".task-filter-checkbox").forEach(j=>{j.addEventListener("change",()=>{const de=this.selectionPanelElement.querySelectorAll(".task-filter-checkbox");Array.from(de).every(xe=>xe.checked)?X.allowedTaskTypes=null:X.allowedTaskTypes=Array.from(de).filter(xe=>xe.checked).map(xe=>xe.dataset.taskType)})})}if(g){const X=Qe=>{const Le=this.selectedEntity,D=(m.indexOf(Le.storageType)+Qe+m.length)%m.length,At=m[D];Le.storageType=At;const De=document.getElementById("storage-type-label");De&&(De.textContent=p[At]),T.emit("entity:storage-type-changed",{entity:Le,storageType:At})},j=document.getElementById("storage-type-prev");j&&this.deps.addMobileInteraction(j,()=>X(-1));const de=document.getElementById("storage-type-next");de&&this.deps.addMobileInteraction(de,()=>X(1));const oe=Qe=>{const Le=this.selectedEntity,lt=Le.allowedSku??null,At=(y.findIndex(it=>it===lt)+Qe+y.length)%y.length,De=y[At];Le.allowedSku=De;const Ve=document.getElementById("allowed-sku-label");Ve&&(Ve.textContent=De===null?"Any SKU":`SKU ${De} (${Oi[De]??"Unknown"})`);const Ce=document.getElementById("allowed-sku-swatch");if(Ce){const it=De===null?"transparent":`#${(Vn[De]??16777215).toString(16).padStart(6,"0")}`;Ce.setAttribute("style",`background:${it}`)}T.emit("entity:allowed-sku-changed",{entity:Le,allowedSku:De})},xe=document.getElementById("allowed-sku-prev");xe&&this.deps.addMobileInteraction(xe,()=>oe(-1));const Ae=document.getElementById("allowed-sku-next");Ae&&this.deps.addMobileInteraction(Ae,()=>oe(1));const Ne=document.getElementById("teardrop-btn");Ne&&this.deps.addMobileInteraction(Ne,()=>{const Qe=this.selectedEntity;this.isTeardropMode?(this.isTeardropMode=!1,document.body.classList.remove("teardrop-mode"),T.emit("ui:teardrop-deactivate")):(this.isTeardropMode=!0,document.body.classList.add("teardrop-mode"),T.emit("ui:teardrop-activate",{storageType:Qe.storageType}));const Le=document.getElementById("teardrop-btn");Le&&Le.classList.toggle("active",this.isTeardropMode)})}if(f){const X=document.getElementById("conveyor-rotate-btn");X&&this.deps.addMobileInteraction(X,()=>{if(!(this.selectedEntity instanceof ht))return;const j=w.indexOf(this.selectedEntity.direction),de=w[(j+1)%w.length];this.selectedEntity.setDirection(de);const oe=document.getElementById("conveyor-direction-label");oe&&(oe.textContent=b[de]),T.emit("conveyor:rotated",{entity:this.selectedEntity})})}}this.selectionPanelElement.classList.contains("hidden")&&(this.deps.closeMobilePanelInternal(),this.selectionPanelElement.classList.remove("hidden"))}updateMultiSelectPanel(){const e=this.multiSelectedEntities;if(e.length===0){this.multiSelectPanelElement.classList.contains("hidden")||this.multiSelectPanelElement.classList.add("hidden");return}const t=["general","unloading","storage","picking","loading"],n={general:"General",unloading:"Unloading",storage:"Storage",picking:"Picking",loading:"Loading"},i=e.filter(w=>"storageType"in w),s=i.length>0,a=e.reduce((w,b)=>{const S=Lt[b.type];return w+(S?.sellValue||0)},0),o=s?i[0].storageType??"general":"general",l=s?i[0].allowedSku??null:null,c=Math.max(1,Kn(z.get("wave"))),d=Math.min(ao,c),h=[null,...Array.from({length:d},(w,b)=>b)],u=l===null?"Any":`${Oi[l]??"Unknown"}`,f=l===null?"transparent":`#${(Vn[l]??16777215).toString(16).padStart(6,"0")}`,g=s?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Zone Type</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="ms-storage-type-prev" aria-label="Previous zone type">&#9664;</button>
          <span class="storage-type-label" id="ms-storage-type-label">${n[o]}</span>
          <button class="storage-type-btn" id="ms-storage-type-next" aria-label="Next zone type">&#9654;</button>
        </div>
      </div>
    `:"",v=s?`
      <div class="selection-info-item selection-storage-type-row">
        <span class="label">Allowed SKU</span>
        <div class="storage-type-picker">
          <button class="storage-type-btn" id="ms-allowed-sku-prev" aria-label="Previous allowed SKU">&#9664;</button>
          <span class="storage-type-label" id="ms-allowed-sku-label">${u} <span class="allowed-sku-swatch" id="ms-allowed-sku-swatch" style="background:${f}"></span></span>
          <button class="storage-type-btn" id="ms-allowed-sku-next" aria-label="Next allowed SKU">&#9654;</button>
        </div>
      </div>
    `:"";let m="";this.isMultiSelectMoveMode&&(m=`<div class="multi-select-move-hint">${this.multiSelectMoveModePhase==="anchor"?"Click anchor point…":"Click destination…"}</div>`);const p=`
      <div class="selection-header">
        <div class="selection-title">
          <span class="icon">⬚</span>
          <span class="name">${e.length} selected</span>
        </div>
        <button class="ms-close-btn" id="ms-close-btn" title="Clear selection" aria-label="Clear selection">×</button>
      </div>
      <div class="selection-content">
        ${g}
        ${v}
        ${m}
        <div class="selection-actions">
          <button class="move-btn${this.isMultiSelectMoveMode?" active":""}" id="ms-move-btn" title="Move selected entities (M)" aria-label="Move selected">✥ Move</button>
          <button class="sell-btn" id="ms-sell-btn">Sell All — $${a}</button>
        </div>
      </div>
    `;if(this.multiSelectPanelElement.innerHTML!==p&&!this.deps.isPanelInteractionActive()){this.multiSelectPanelElement.innerHTML=p;const w=document.getElementById("ms-close-btn");w&&this.deps.addMobileInteraction(w,()=>{T.emit("ui:multi-select-clear")});const b=document.getElementById("ms-sell-btn");b&&this.deps.addMobileInteraction(b,()=>{(async()=>await this.deps.confirm(`Sell ${e.length} items for $${a}?`)&&(T.emit("ui:multi-select-sell-all",{entities:[...this.multiSelectedEntities]}),this.multiSelectedEntities=[],this.updateMultiSelectPanel()))()});const S=document.getElementById("ms-move-btn");if(S&&this.deps.addMobileInteraction(S,()=>{T.emit("ui:multi-select-move-activate")}),s){let I=o;const k=F=>{const K=(t.indexOf(I)+F+t.length)%t.length;I=t[K];const $=document.getElementById("ms-storage-type-label");$&&($.textContent=n[I]),T.emit("ui:multi-select-storage-type",{storageType:I,entities:i})},P=document.getElementById("ms-storage-type-prev");P&&this.deps.addMobileInteraction(P,()=>k(-1));const R=document.getElementById("ms-storage-type-next");R&&this.deps.addMobileInteraction(R,()=>k(1));let M=l;const y=F=>{const K=(h.findIndex(V=>V===M)+F+h.length)%h.length;M=h[K];const $=document.getElementById("ms-allowed-sku-label");$&&($.textContent=M===null?"Any SKU":`SKU ${M} (${Oi[M]??"Unknown"})`);const ee=document.getElementById("ms-allowed-sku-swatch");if(ee){const V=M===null?"transparent":`#${(Vn[M]??16777215).toString(16).padStart(6,"0")}`;ee.setAttribute("style",`background:${V}`)}T.emit("ui:multi-select-allowed-sku",{allowedSku:M,entities:i})},C=document.getElementById("ms-allowed-sku-prev");C&&this.deps.addMobileInteraction(C,()=>y(-1));const H=document.getElementById("ms-allowed-sku-next");H&&this.deps.addMobileInteraction(H,()=>y(1))}}this.multiSelectPanelElement.classList.contains("hidden")&&(this.deps.closeMobilePanelInternal(),this.multiSelectPanelElement.classList.remove("hidden"))}createTaskArrows(e){if(!this.scene||!this.grid)return;const t=this.grid.gridToWorld(e.source.gridX,e.source.gridZ),n=this.grid.gridToWorld(e.destination.gridX,e.destination.gridZ),i=new A(0,-1,0),s=t.clone().add(new A(0,2,0));this.pickArrow=new Mr(i,s,1.5,16739179,.5,.3),this.scene.add(this.pickArrow);const a=new A(0,-1,0),o=n.clone().add(new A(0,2,0));this.dropArrow=new Mr(a,o,1.5,4906624,.5,.3),this.scene.add(this.dropArrow)}clearArrows(){this.pickArrow&&(this.scene?.remove(this.pickArrow),this.pickArrow=null),this.dropArrow&&(this.scene?.remove(this.dropArrow),this.dropArrow=null)}}class Fv{constructor(e,t,n,i,s,a){this.workerDebugPanel=e,this.taskQueueDebugPanel=t,this.reservationsDebugPanel=n,this.economyPanelElement=i,this.debugLogPanel=s,this.deps=a}economyPanelCollapsed=!1;debugPanelVisible=!1;taskQueuePanelVisible=!1;reservationsPanelVisible=!1;debugLogPanelVisible=!1;debugUpdateCallback=null;economyDataCallback=null;setupEventListeners(){T.on("entity:placed:complete",()=>{this.updateEconomyPanel(),this.deps.onHudUpdated()}),T.on("entity:removed:complete",()=>{this.updateEconomyPanel(),this.deps.onHudUpdated()})}setupKeyboardShortcuts(){document.addEventListener("keydown",e=>{e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||((e.metaKey||e.ctrlKey)&&(e.key==="d"||e.key==="D")&&(e.preventDefault(),this.toggleDebugPanel()),(e.metaKey||e.ctrlKey)&&(e.key==="r"||e.key==="R")&&(e.preventDefault(),this.toggleReservationsPanel()),(e.metaKey||e.ctrlKey)&&(e.key==="l"||e.key==="L")&&(e.preventDefault(),this.toggleDebugLogPanel()),(e.metaKey||e.ctrlKey)&&(e.key==="q"||e.key==="Q")&&(e.preventDefault(),this.toggleTaskQueuePanel()))})}toggleDebugPanel(e){this.debugPanelVisible=e!==void 0?e:!this.debugPanelVisible,this.workerDebugPanel.classList.toggle("visible",this.debugPanelVisible)}toggleTaskQueuePanel(e){this.taskQueueDebugPanel&&(this.taskQueuePanelVisible=e!==void 0?e:!this.taskQueuePanelVisible,this.taskQueueDebugPanel.classList.toggle("visible",this.taskQueuePanelVisible))}toggleReservationsPanel(e){this.reservationsPanelVisible=e!==void 0?e:!this.reservationsPanelVisible,this.reservationsDebugPanel.classList.toggle("visible",this.reservationsPanelVisible)}toggleDebugLogPanel(e){this.debugLogPanelVisible=e!==void 0?e:!this.debugLogPanelVisible,this.debugLogPanel.classList.toggle("visible",this.debugLogPanelVisible),this.debugLogPanelVisible&&this.updateDebugLogPanel()}updateDebugLogPanel(){if(!this.debugLogPanelVisible)return;const e=document.getElementById("debug-log-entries-panel");if(!e)return;const t=_t.getEntries();if(t.length===0){e.innerHTML='<div class="debug-log-empty">No log entries yet.</div>';return}const n={info:"ℹ️",warn:"⚠️",error:"❌"};e.innerHTML=[...t].reverse().map(i=>{const s=new Date(i.timestamp).toLocaleTimeString(),a=n[i.level]??"";return`<div class="debug-log-entry debug-log-${i.level}">
        <span class="debug-log-time">${this.deps.escapeHtml(s)}</span>
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
    `,document.getElementById("debug-log-close-btn")?.addEventListener("click",()=>{this.toggleDebugLogPanel(!1)}),document.getElementById("debug-log-clear-btn")?.addEventListener("click",()=>{_t.clear(),this.updateDebugLogPanel()})}createReservationsDebugPanel(){this.reservationsDebugPanel.innerHTML=`
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
    `,document.getElementById("toggle-economy-panel")?.addEventListener("click",()=>{this.economyPanelCollapsed=!this.economyPanelCollapsed,this.economyPanelElement.classList.toggle("collapsed",this.economyPanelCollapsed);const e=document.getElementById("toggle-economy-panel");e&&(e.textContent=this.economyPanelCollapsed?"+":"−")}),this.updateEconomyPanel()}updateEconomyPanel(){const e=document.getElementById("economy-wages-section"),t=document.getElementById("economy-history-section");if(!e||!t)return;const n=this.economyDataCallback?this.economyDataCallback():{waveHistory:[],operatorCount:0,forkliftCount:0,forkliftAgvCount:0,currentWaveOrderIncome:0},{waveHistory:i,operatorCount:s,forkliftCount:a,forkliftAgvCount:o,currentWaveOrderIncome:l}=n,c=s*Sr+a*xr+o*wr,d=l>0?`
      <div class="economy-wage-row">
        <span class="economy-wage-label">📦 Orders</span>
        <span class="economy-wage-value economy-positive">+$${l}</span>
      </div>
    `:"";if(e.innerHTML=`
      <div class="economy-section-label">Current Wave</div>
      ${d}
      <div class="economy-wage-row">
        <span class="economy-wage-label">👷 Operators × ${s}</span>
        <span class="economy-wage-value">-$${s*Sr}</span>
      </div>
      <div class="economy-wage-row">
        <span class="economy-wage-label">🚜 Forklifts × ${a}</span>
        <span class="economy-wage-value">-$${a*xr}</span>
      </div>
      <div class="economy-wage-row">
        <span class="economy-wage-label">🤖 Forklift AGVs × ${o}</span>
        <span class="economy-wage-value">-$${o*wr}</span>
      </div>
      <div class="economy-wage-row economy-wage-total">
        <span class="economy-wage-label">Total Wages</span>
        <span class="economy-wage-value">-$${c}</span>
      </div>
    `,i.length===0){t.innerHTML='<div class="economy-no-history">No completed waves yet</div>';return}const h=[...i].reverse().map(u=>`
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
      ${h}
    `}updateReservationsDebugPanel(){if(!this.reservationsPanelVisible)return;const e=$e.getDebugInfo(),t=$e.getDetailedReservations(),n=document.getElementById("store-count"),i=document.getElementById("retrieval-count");n&&(n.textContent=e.storeReservations.toString()),i&&(i.textContent=e.retrievalReservations.toString());const s=document.getElementById("reservations-list");if(!s)return;if(!(t.storeReservations.length>0||t.retrievalReservations.length>0)){s.innerHTML='<div class="no-reservations">No active reservations</div>';return}let o="";if(t.storeReservations.length>0){o+='<div class="reservation-section"><div class="reservation-section-title">🔵 Store Reservations</div>';for(const{location:l,taskId:c}of t.storeReservations)o+=`
          <div class="reservation-item">
            <span class="reservation-location">${l}</span>
            <span class="reservation-task">${c.substring(0,8)}</span>
          </div>
        `;o+="</div>"}if(t.retrievalReservations.length>0){o+='<div class="reservation-section"><div class="reservation-section-title">🟢 Retrieval Reservations</div>';for(const{location:l,taskIds:c}of t.retrievalReservations)o+=`
          <div class="reservation-item">
            <span class="reservation-location">${l}</span>
            <span class="reservation-tasks">${c.map(d=>d.substring(0,8)).join(", ")}</span>
          </div>
        `;o+="</div>"}s.innerHTML=o}setDebugUpdateCallback(e){this.debugUpdateCallback=e}setEconomyDataCallback(e){this.economyDataCallback=e,this.updateEconomyPanel()}updateWorkerDebugPanel(){if(!this.debugPanelVisible||!this.debugUpdateCallback)return;const{workers:e,tasks:t}=this.debugUpdateCallback(),n=document.getElementById("debug-task-stats");n&&(n.innerHTML=`
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
      `);const i=document.getElementById("worker-list");if(i){if(e.length===0){i.innerHTML='<div class="no-workers">No workers placed yet</div>';return}i.innerHTML=e.map(s=>{const a=s.taskPhase.replace(/-/g," "),o=s.taskType?`<div class="worker-task-info">
            <span class="task-type">${s.taskType.replace(/-/g," ")}</span>
            ${s.sourceLocation?`<span class="task-location"> from (${s.sourceLocation.x}, ${s.sourceLocation.z})</span>`:""}
            ${s.destLocation?`<span class="task-location"> → (${s.destLocation.x}, ${s.destLocation.z})</span>`:""}
          </div>`:"",l=[];return s.isCarrying&&l.push('<span class="worker-state-badge carrying">Carrying</span>'),s.pathLength===0&&s.taskPhase!=="idle"&&s.taskPhase!=="picking"&&s.taskPhase!=="dropping"&&l.push('<span class="worker-state-badge blocked">Blocked</span>'),`
        <div class="worker-card ${s.type}">
          <div class="worker-card-header">
            <span class="worker-type">${s.type==="forklift"?"🚜":"👷"} ${s.type}</span>
            <span class="worker-id">${s.id}</span>
          </div>
          <div class="worker-status">
            <span class="status-dot ${s.taskPhase}"></span>
            <span class="status-text">${a}</span>
            ${l.join("")}
          </div>
          ${o}
          <div class="worker-task-info">
            📍 (${s.position.x}, ${s.position.z}) | Path: ${s.pathLength} | State: ${s.workerState}
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
      `);const s=document.getElementById("task-queue-list");if(!s)return;if(t.length===0){s.innerHTML='<div class="no-tasks">No tasks in queue</div>';return}const a=t.filter(d=>d.status==="pending"),o=t.filter(d=>d.status==="assigned"),l=t.filter(d=>d.status==="in-progress"),c=(d,h,u)=>d.length===0?"":`
        <div class="task-status-section">
          <div class="task-status-header ${u}">${h} (${d.length})</div>
          ${d.map(f=>{const g=this.getTaskTypeIcon(f.type),v=f.workerType==="forklift"?"🚜":"👷",m=Math.floor((Date.now()-f.createdAt)/1e3),p=f.sourceStorage?this.getStorageInfo(f.sourceStorage):`Truck (${f.source.gridX}, ${f.source.gridZ})`,w=f.destinationStorage?this.getStorageInfo(f.destinationStorage):`Truck (${f.destination.gridX}, ${f.destination.gridZ})`;return`
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
                    <span class="task-value">${w}</span>
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
      `;s.innerHTML=c(l,"In Progress","in-progress")+c(o,"Assigned","assigned")+c(a,"Pending","pending")}getTaskTypeIcon(e){return{"unload-truck":"📦","load-truck":"🚚",putaway:"📥",replenish:"🔄",stage:"📤"}[e]||"📋"}getStorageInfo(e){const t=e;return t.storageType?`${t.storageType} (${t.gridX??"?"}, ${t.gridZ??"?"})`:`Storage (${t.gridX??"?"}, ${t.gridZ??"?"})`}}class Bv{constructor(e,t){this.buildMenuElement=e,this.deps=t}selectedBuildType=null;isConveyorLineMode=!1;conveyorLineHasStart=!1;isLineModeActive(){return this.isConveyorLineMode}hasLineStart(){return this.conveyorLineHasStart}setLineStart(e){this.conveyorLineHasStart=e}createBuildMenu(){const e=Object.values(Lt);this.buildMenuElement.innerHTML=`
      <div class="build-btns-row">
        ${e.map(o=>`
          <button class="build-btn" data-type="${o.type}" title="${o.description}">
            <span class="icon">${o.icon}</span>
            <span class="name">${o.name}</span>
            <span class="cost">$${o.cost}</span>
          </button>
        `).join("")}
        <button class="build-btn expand-btn" id="btn-floor-expansion" title="Add ${br} new columns to the warehouse floor (both sides). Cost scales with each purchase.">
          <span class="icon">↔️</span>
          <span class="name">Expand ↔</span>
          <span class="cost" id="expansion-cost">$${dr(0)}</span>
        </button>
        <button class="build-btn expand-btn" id="btn-floor-expansion-vertical" title="Add ${Tr} new rows to the warehouse floor (northward). Truck docks move to new edges. Cost scales with each purchase.">
          <span class="icon">↕️</span>
          <span class="name">Expand ↕</span>
          <span class="cost" id="expansion-vertical-cost">$${hr(0)}</span>
        </button>
        <button class="build-btn expand-btn" id="btn-worker-capacity-expansion" title="Add ${ld} worker slots. Price increases by $1,000 with each purchase.">
          <span class="icon">👷</span>
          <span class="name">+Workers</span>
          <span class="cost" id="worker-capacity-expansion-cost">$${fo(0)}</span>
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
    `,this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(o=>{Ye(o,()=>{const l=o.dataset.type;this.selectBuildType(l)})});const t=document.getElementById("btn-floor-expansion");t&&Ye(t,()=>this.handleFloorExpansionClick());const n=document.getElementById("btn-floor-expansion-vertical");n&&Ye(n,()=>this.handleFloorExpansionVerticalClick());const i=document.getElementById("btn-worker-capacity-expansion");i&&Ye(i,()=>T.emit("ui:worker-capacity-expansion",{}));const s=document.getElementById("btn-line-mode");s&&Ye(s,()=>this.toggleConveyorLineMode());const a=document.getElementById("btn-multi-select");a&&Ye(a,()=>T.emit("ui:multi-select-toggle"))}setupEventListeners(){T.on("challenge:set-allowed-buildables",({allowed:e})=>{this.applyBuildableRestrictions(e)}),T.on("entity:selected",({type:e})=>{this.highlightSelectedBuild(e)}),T.on("input:escape",()=>{if(this.isLineModeActive()&&this.hasLineStart()){this.setLineStart(!1);const e=document.getElementById("line-mode-hint");e&&(e.textContent="Click to set start");return}this.deselectBuild()}),T.on("ui:conveyor-line-status",({status:e})=>{this.setLineStart(e==="end");const t=document.getElementById("line-mode-hint");t&&(t.textContent=e==="end"?"Click to confirm line":"Click to set start")}),T.on("money:changed",()=>{this.updateAffordability()})}selectBuildType(e){if(z.get("phase")!=="build")return;if(this.selectedBuildType===e){this.deselectBuild();return}this.selectedBuildType=e,this.highlightSelectedBuild(e),T.emit("ui:build-select",{type:e});const t=document.getElementById("conveyor-toolbar");t&&(t.style.display=e==="conveyor"||e==="stacker-crane"?"flex":"none"),e!=="conveyor"&&e!=="stacker-crane"&&this.isConveyorLineMode&&(this.isConveyorLineMode=!1,T.emit("ui:conveyor-line-mode",{enabled:!1}))}deselectBuild(){this.selectedBuildType=null,this.highlightSelectedBuild(null),T.emit("ui:build-select",{type:null});const e=document.getElementById("conveyor-toolbar");if(e&&(e.style.display="none"),this.conveyorLineHasStart=!1,this.isConveyorLineMode){this.isConveyorLineMode=!1;const t=document.getElementById("btn-line-mode");t&&t.classList.remove("active"),T.emit("ui:conveyor-line-mode",{enabled:!1})}}toggleConveyorLineMode(){this.isConveyorLineMode=!this.isConveyorLineMode,this.conveyorLineHasStart=!1;const e=document.getElementById("btn-line-mode");e&&e.classList.toggle("active",this.isConveyorLineMode);const t=document.getElementById("line-mode-hint");t&&(t.textContent=this.isConveyorLineMode?"Click to set start":""),T.emit("ui:conveyor-line-mode",{enabled:this.isConveyorLineMode})}highlightSelectedBuild(e){this.buildMenuElement.querySelectorAll(".build-btn").forEach(t=>{const n=t.dataset.type;t.classList.toggle("selected",n===e)})}updateAffordability(){const e=z.get("money");this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(g=>{const v=g.dataset.type,m=Lt[v];g.classList.toggle("disabled",e<m.cost)});const t=z.get("floorExpansionCount"),n=dr(t),i=document.getElementById("expansion-cost");i&&(i.textContent=`$${n}`);const s=document.getElementById("btn-floor-expansion");s&&s.classList.toggle("disabled",e<n);const a=z.get("floorVerticalExpansionCount"),o=hr(a),l=document.getElementById("expansion-vertical-cost");l&&(l.textContent=`$${o}`);const c=document.getElementById("btn-floor-expansion-vertical");c&&c.classList.toggle("disabled",e<o),this.updateReorgWaveButton();const d=z.get("workerCapacityExpansionCount"),h=fo(d),u=document.getElementById("worker-capacity-expansion-cost");u&&(u.textContent=`$${h}`);const f=document.getElementById("btn-worker-capacity-expansion");f&&f.classList.toggle("disabled",e<h)}updateReorgWaveButton(){const e=z.get("wave"),t=sd*e,n=z.get("money"),i=document.getElementById("reorg-wave-cost");i&&(i.textContent=String(t));const s=document.getElementById("btn-reorg-wave");s&&s.classList.toggle("disabled",n<t)}applyBuildableRestrictions(e){const t=new Set(e);this.buildMenuElement.querySelectorAll(".build-btn:not(.expand-btn)").forEach(a=>{const o=a.dataset.type;a.style.display=t.has(o)?"":"none"});const n=document.getElementById("btn-floor-expansion");n&&(n.style.display="none");const i=document.getElementById("btn-floor-expansion-vertical");i&&(i.style.display="none");const s=document.getElementById("btn-worker-capacity-expansion");s&&(s.style.display="none")}clearBuildableRestrictions(){this.buildMenuElement.querySelectorAll(".build-btn").forEach(i=>{i.style.display=""});const e=document.getElementById("btn-floor-expansion");e&&(e.style.display="");const t=document.getElementById("btn-floor-expansion-vertical");t&&(t.style.display="");const n=document.getElementById("btn-worker-capacity-expansion");n&&(n.style.display="")}async handleFloorExpansionClick(){if(!this.deps?.confirm){T.emit("ui:floor-expansion",{});return}const e=z.get("floorExpansionCount"),t=dr(e);await this.deps.confirm(`Expand warehouse horizontally by ${br} columns on each side for $${t}?`)&&T.emit("ui:floor-expansion",{})}async handleFloorExpansionVerticalClick(){if(!this.deps?.confirm){T.emit("ui:floor-expansion-vertical",{});return}const e=z.get("floorVerticalExpansionCount"),t=hr(e);await this.deps.confirm(`Expand warehouse vertically by ${Tr} rows northward for $${t}? Truck docks will move to the new edges.`)&&T.emit("ui:floor-expansion-vertical",{})}}class zv{constructor(e,t,n){this.phaseIndicatorElement=e,this.buildMenuElement=t,this.onPhaseUIUpdated=n}lastSpeed=1;createPhaseIndicator(){this.phaseIndicatorElement.innerHTML=`
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
    `;const e=document.getElementById("btn-start-wave");e&&Ye(e,()=>T.emit("ui:start-wave"));const t=document.getElementById("btn-reorg-wave");t&&Ye(t,()=>T.emit("ui:start-reorg-wave")),document.getElementById("speed-controls")?.querySelectorAll(".speed-btn").forEach(n=>{Ye(n,()=>{const i=parseFloat(n.dataset.speed||"1"),s=z.get("gameSpeed");i===0?s===0?this.setSpeed(this.lastSpeed):(this.lastSpeed=s,this.setSpeed(0)):this.setSpeed(i)})})}setupEventListeners(){T.on("phase:build",()=>{this.setPhaseUI("build")}),T.on("phase:operations",()=>{this.setPhaseUI("operations")}),T.on("phase:reorg",()=>{this.setPhaseUI("reorg")})}setPhaseUI(e){const t=document.getElementById("phase-name"),n=document.getElementById("btn-start-wave"),i=document.getElementById("btn-reorg-wave"),s=document.getElementById("speed-controls");t&&(e==="build"?t.textContent="Build":e==="reorg"?t.textContent="Reorg":t.textContent="Operations",t.classList.toggle("operations",e==="operations"),t.classList.toggle("reorg",e==="reorg")),n&&(n.style.display=e==="build"?"block":"none"),i&&(i.style.display=e==="build"?"block":"none"),s&&(s.style.display=e!=="build"?"flex":"none"),this.buildMenuElement.style.opacity=e==="build"?"1":"0.5",this.buildMenuElement.style.pointerEvents=e==="build"?"auto":"none",this.onPhaseUIUpdated()}setSpeed(e){z.setSpeed(e),e>0&&(this.lastSpeed=e),document.querySelectorAll(".speed-btn").forEach(t=>{const n=parseFloat(t.dataset.speed||"1"),i=n===e;t.classList.toggle("active",i),n===0&&(t.textContent=e===0?"▶ Resume":"⏸ Pause")})}}class Hv{constructor(e,t){this.selectionPanelElement=e,this.hasSelectedEntity=t}activeMobilePanel=null;createMobileMenu(e,t,n){const i=document.createElement("div");i.id="mobile-menu",i.innerHTML=`
      <button class="mobile-menu-btn" data-panel="build-menu" title="Build">🏗️</button>
      <button class="mobile-menu-btn" data-panel="wave-preview" title="Wave Info">📋</button>
      <button class="mobile-menu-btn" data-panel="order-panel" title="Orders">📦<span class="mobile-badge" id="orders-badge" aria-label="orders count"></span></button>
      <button class="mobile-menu-btn" data-panel="inventory-panel" title="Inventory">📊</button>
      <button class="mobile-menu-btn" data-panel="economy-panel" title="Economy">💰</button>
      <button class="mobile-menu-btn" id="mobile-operators-tasks-btn" title="Operators Tasks">👷</button>
      <button class="mobile-menu-btn" id="mobile-debug-log-btn" title="Debug Log">🪲</button>
    `,i.querySelectorAll(".mobile-menu-btn[data-panel]").forEach(o=>{e(o,()=>{const l=o.dataset.panel;this.toggleMobilePanel(l)})});const s=i.querySelector("#mobile-operators-tasks-btn");s&&e(s,()=>{this.closeMobilePanel(),t()});const a=i.querySelector("#mobile-debug-log-btn");a&&e(a,()=>{this.closeMobilePanel(),n()}),document.getElementById("ui-container")?.appendChild(i)}setupOutsideInteractionListeners(e){document.addEventListener("click",t=>{this.handleOutsideInteraction(t.target)}),document.addEventListener("touchend",t=>{if(e())return;const n=t.changedTouches?.length?t.changedTouches[0]:null,i=n?document.elementFromPoint(n.clientX,n.clientY):t.target;this.handleOutsideInteraction(i)},{passive:!0})}updateModeSpecificUIVisibility(){const e=z.get("gameMode")==="challenge",t=z.get("phase"),n=document.getElementById("hud-save-btn");n&&(n.style.display=e?"none":"");const i=document.getElementById("btn-reorg-wave");i&&(e?i.style.display="none":i.style.display=t==="build"?"block":"none");const s=document.getElementById("economy-panel");s&&(s.style.display=e?"none":"",e&&(s.classList.remove("mobile-open"),this.activeMobilePanel==="economy-panel"&&this.closeMobilePanelInternal()));const a=document.querySelector('.mobile-menu-btn[data-panel="economy-panel"]');a&&(a.style.display=e?"none":"")}toggleMobilePanel(e){this.activeMobilePanel===e?this.closeMobilePanel():this.openMobilePanel(e)}closeMobilePanelInternal(){this.activeMobilePanel&&(document.getElementById(this.activeMobilePanel)?.classList.remove("mobile-open"),this.activeMobilePanel=null),document.querySelectorAll(".mobile-menu-btn").forEach(e=>e.classList.remove("active"))}closeMobilePanel(){this.closeMobilePanelInternal(),this.hasSelectedEntity()&&this.selectionPanelElement.classList.remove("hidden")}handleOutsideInteraction(e){if(!this.activeMobilePanel||!e)return;const t=document.getElementById("mobile-menu"),n=document.getElementById(this.activeMobilePanel);t?.contains(e)||n?.contains(e)||this.closeMobilePanel()}updateOrdersBadge(e){const t=document.getElementById("orders-badge");t&&(e>0?(t.textContent=String(e),t.classList.add("visible")):(t.textContent="",t.classList.remove("visible")))}openMobilePanel(e){this.closeMobilePanelInternal();const t=document.getElementById(e);t&&(this.selectionPanelElement.classList.add("hidden"),t.classList.add("mobile-open"),this.activeMobilePanel=e,document.querySelectorAll(".mobile-menu-btn").forEach(n=>{n.classList.toggle("active",n.dataset.panel===e)}))}}class Gv{constructor(e,t){this.orderPanelElement=e,this.deps=t}orderPanelCollapsed=!1;createOrderPanel(){this.orderPanelElement.innerHTML=`
      <div class="order-panel-title">
        <span>📦 Orders</span>
        <button class="toggle-panel-btn" id="toggle-order-panel">−</button>
      </div>
      <div id="order-list-container">
        <div id="order-list"></div>
      </div>
    `;const e=document.getElementById("toggle-order-panel");e&&Ye(e,()=>{this.orderPanelCollapsed=!this.orderPanelCollapsed,this.orderPanelElement.classList.toggle("collapsed",this.orderPanelCollapsed),e.textContent=this.orderPanelCollapsed?"+":"−"})}updateOrders(e){const t=document.getElementById("order-list");if(!t)return;const n=e.filter(i=>i.status!=="preview");if(this.deps.onOrdersCountChanged(n.length),n.length===0){t.innerHTML='<div style="color: #98c1d9; font-size: 12px;">No pending orders</div>';return}this.deps.isPanelInteractionActive()||(t.innerHTML=n.map(i=>{const s=z.get("storedPallets")>=i.quantity&&i.status==="pending";let a="",o="",l="",c=!1;switch(i.status){case"pending":a="⏳",o="status-pending",l=`${Math.ceil(i.autoLaunchTime)}s`,c=i.autoLaunchTime<=10;break;case"awaiting-truck":a="🚚",o="status-awaiting",l=`🅿️ ${Math.ceil(i.dockTimeRemaining)}s`,c=i.dockTimeRemaining<=10;break;case"loading":a=`📦 ${i.palletsLoaded}/${i.quantity}`,o="status-loading",l=`🅿️ ${Math.ceil(i.dockTimeRemaining)}s`,c=i.dockTimeRemaining<=10;break;case"shipped":a="✅",o="status-shipped",l="";break}const d=i.status==="loading"?`<div class="order-progress-bar">
             <div class="order-progress-fill" style="width: ${i.palletsLoaded/i.quantity*100}%"></div>
           </div>`:"",h=i.lines&&i.lines.length>0?i.lines.map(u=>{const f="#"+(Vn[u.sku]??16777215).toString(16).padStart(6,"0"),g=Oi[u.sku]??`SKU${u.sku}`,v=i.status==="loading"?`${u.loaded}/`:"";return`<span class="sku-badge" style="background:${f};color:#fff;padding:1px 4px;border-radius:3px;font-size:10px;margin-right:2px;" title="${g}">${v}${u.quantity}</span>`}).join(""):"";return`
        <div class="order-item ${o}" data-order-id="${i.id}">
          <div class="order-top-row">
            <span class="quantity">${i.quantity}x 📦</span>
            ${h?`<span class="sku-badges">${h}</span>`:""}
            <span class="status-badge">${a}</span>
            <span class="timer ${c?"urgent":""}">${l}</span>
            <span class="reward">$${i.reward}</span>
            ${s?`<button class="fulfill-btn" data-order-id="${i.id}">Ship</button>`:""}
          </div>
          ${d}
        </div>
      `}).join(""),t.querySelectorAll(".fulfill-btn").forEach(i=>{i.addEventListener("click",s=>s.stopPropagation()),Ye(i,()=>{const s=i.dataset.orderId;s&&window.fulfillOrder&&window.fulfillOrder(s)})}))}}const va="warehouse-defender-leaderboard",cs=1,uc=10;class Wv{data;constructor(){this.data=this.loadData()}getEntries(){return this.data.entries}isHighScore(e,t,n){if(this.data.entries.length<uc)return!0;const i=this.data.entries[this.data.entries.length-1];return this.compareScore(e,t,n,i.wave,i.completedOrders,i.money)>0}addEntry(e,t,n,i){const s={name:e.trim()||"Anonymous",wave:t,completedOrders:n,money:i,date:Date.now()};return this.data.entries.push(s),this.data.entries.sort((a,o)=>this.compareScore(o.wave,o.completedOrders,o.money,a.wave,a.completedOrders,a.money)),this.data.entries=this.data.entries.slice(0,uc),this.saveData(),s}getRank(e){const t=this.data.entries.indexOf(e);return t===-1?null:t+1}clear(){this.data={version:cs,entries:[]},localStorage.removeItem(va)}compareScore(e,t,n,i,s,a){return e!==i?e-i:t!==s?t-s:n-a}loadData(){try{const e=localStorage.getItem(va);if(!e)return{version:cs,entries:[]};const t=JSON.parse(e);return t.version!==cs?{version:cs,entries:[]}:t}catch{return{version:cs,entries:[]}}}saveData(){try{localStorage.setItem(va,JSON.stringify(this.data))}catch(e){console.error("Failed to save leaderboard:",e)}}}const ur=new Wv;class Vv{constructor(e){this.deps=e}confirmModalElement=null;confirmResolve=null;setupEventListeners(){T.on("game:over",()=>{this.showGameOver()}),T.on("wave:milestone",e=>{this.showMilestoneReward(e.wave)}),T.on("game:saved",({success:e})=>{this.showNotification(e?"💾 Game Saved!":"❌ Save Failed")})}showNotification(e,t=2e3){const n=document.createElement("div");n.className="game-notification",n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),500)},t)}showConfirmModal(e){if(this.ensureConfirmModal(),!this.confirmModalElement)return Promise.resolve(!1);const t=this.confirmModalElement.querySelector("#confirm-modal-message");return t&&(t.textContent=e),this.confirmModalElement.classList.add("visible"),new Promise(n=>{this.confirmResolve=n})}showGameOver(){const e=z.getState(),t=e.gameMode==="normal",n=document.createElement("div");n.className="game-over-overlay";const i=`
      <p>Wave Reached: ${e.wave}</p>
      <p>Orders Completed: ${e.completedOrders}</p>
      <p>Final Money: $${e.money}</p>
    `;if(t){const o=ur.isHighScore(e.wave,e.completedOrders,e.money);n.innerHTML=`
        <div class="game-over-modal">
          <h1>Game Over</h1>
          ${i}
          ${o?`
            <div class="leaderboard-entry-form">
              <p class="leaderboard-new-record">🏆 New High Score!</p>
              <label for="leaderboard-name-input" class="leaderboard-name-label">Enter your name:</label>
              <input id="leaderboard-name-input" type="text" class="leaderboard-name-input"
                maxlength="20" placeholder="Your name" autocomplete="off" />
              <button id="leaderboard-submit-btn" class="leaderboard-submit-btn">Submit Score</button>
            </div>
          `:""}
          <div id="leaderboard-table-container"></div>
          <button id="btn-play-again">Play Again</button>
        </div>
      `}else n.innerHTML=`
        <div class="game-over-modal">
          <h1>Game Over</h1>
          ${i}
          <button id="btn-play-again">Play Again</button>
        </div>
      `;n.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;const s=n.querySelector(".game-over-modal");if(s.style.cssText=`
      background: #1a1a2e;
      padding: 40px;
      border-radius: 12px;
      border: 2px solid #ff6b6b;
      text-align: center;
      color: white;
      max-width: 480px;
      width: 90%;
    `,document.body.appendChild(n),t){const o=()=>{const h=n.querySelector("#leaderboard-table-container");if(!h)return;const u=ur.getEntries();if(u.length===0){h.innerHTML="";return}const f=u.map((g,v)=>`
              <tr class="${v===0?"leaderboard-top":""}">
                <td class="leaderboard-rank">${v+1}</td>
                <td class="leaderboard-name">${this.escapeHtml(g.name)}</td>
                <td class="leaderboard-wave">Wave ${g.wave}</td>
                <td class="leaderboard-orders">${g.completedOrders} orders</td>
                <td class="leaderboard-money">$${g.money}</td>
              </tr>`).join("");h.innerHTML=`
          <div class="leaderboard-section">
            <h3 class="leaderboard-title">🏆 Leaderboard</h3>
            <table class="leaderboard-table">
              <thead>
                <tr>
                  <th>#</th><th>Name</th><th>Wave</th><th>Orders</th><th>Money</th>
                </tr>
              </thead>
              <tbody>${f}</tbody>
            </table>
          </div>
        `},l=n.querySelector("#leaderboard-submit-btn"),c=n.querySelector("#leaderboard-name-input"),d=()=>{const h=c?.value??"";ur.addEntry(h,e.wave,e.completedOrders,e.money);const u=n.querySelector(".leaderboard-entry-form");u&&u.remove(),o()};l&&Ye(l,d),c?.addEventListener("keydown",h=>{h.key==="Enter"&&d()}),o()}const a=n.querySelector("#btn-play-again");a&&Ye(a,()=>location.reload())}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}showMilestoneReward(e){const t=Math.floor(Math.random()*5)+1,n=z.get("storedPallets"),i=Math.floor(n*.5),s=document.createElement("div");s.className="milestone-overlay",s.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;const a=document.createElement("div");a.className="milestone-modal",a.style.cssText=`
      background: #1a1a2e;
      padding: 40px;
      border-radius: 12px;
      border: 2px solid #ffd700;
      text-align: center;
      color: white;
      max-width: 500px;
      width: 90%;
    `;const o=i<1;a.innerHTML=`
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
        <button id="milestone-outbound-wave" ${o?"disabled":""} style="
          background:${o?"#2a2a2a":"#4a2a00"};border:2px solid ${o?"#444":"#c87800"};color:${o?"#666":"white"};
          padding:16px 20px;border-radius:8px;cursor:${o?"not-allowed":"pointer"};font-size:15px;flex:1;min-width:140px
        ">
          📦 Outbound Only Wave<br><small style="opacity:0.8">${o?"No inventory available":`Ship ${i} pallets for big rewards`}</small>
        </button>
      </div>
    `,s.appendChild(a),document.body.appendChild(s);const l=()=>{document.body.removeChild(s),this.deps.onHudUpdated()},c=a.querySelector("#milestone-increase-limit");c&&Ye(c,()=>{z.increaseWorkerLimit(t),l()});const d=a.querySelector("#milestone-reset-failures");if(d&&Ye(d,()=>{z.resetFailedOrders(),l()}),!o){const h=a.querySelector("#milestone-outbound-wave");h&&Ye(h,()=>{T.emit("ui:start-outbound-wave"),l()})}}ensureConfirmModal(){if(this.confirmModalElement)return;const e=document.createElement("div");e.id="confirm-modal",e.innerHTML=`
      <div class="confirm-dialog">
        <div id="confirm-modal-message"></div>
        <div class="confirm-actions">
          <button id="confirm-modal-cancel">Cancel</button>
          <button id="confirm-modal-confirm">Confirm</button>
        </div>
      </div>
    `,document.body.appendChild(e),this.confirmModalElement=e;const t=e.querySelector("#confirm-modal-cancel"),n=e.querySelector("#confirm-modal-confirm");t&&Ye(t,()=>{this.hideConfirmModal(),this.confirmResolve&&this.confirmResolve(!1),this.confirmResolve=null}),n&&Ye(n,()=>{this.hideConfirmModal(),this.confirmResolve&&this.confirmResolve(!0),this.confirmResolve=null})}hideConfirmModal(){this.confirmModalElement&&this.confirmModalElement.classList.remove("visible")}}class $v{constructor(e){this.deps=e}showGameMenu(e){const t=e.some(i=>i.exists),n=e.map(i=>i.exists?`
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
        <button id="btn-challenges" class="menu-btn menu-btn-primary" style="background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%); border-color: #f59e0b;">⭐ Challenges${Dt.getCompletedCount()>0?` <span style="font-size:12px; opacity:0.8">(${Dt.getTotalStars()}/${Dt.getMaxTotalStars()} ★)</span>`:""}</button>
        <button id="btn-sandbox-game" class="menu-btn menu-btn-secondary">🧪 Sandbox Mode</button>
        <button id="btn-leaderboard" class="menu-btn menu-btn-secondary">🏆 Leaderboard</button>
        <button id="btn-how-to-play" class="menu-btn menu-btn-secondary">📖 How to Play</button>
        ${t?`<div class="save-slots-header">— Saved Games —</div>
        <div class="save-slots-list">${n}</div>`:""}
      </div>
    `,document.getElementById("btn-new-game")?.addEventListener("click",()=>{T.emit("ui:new-game")}),document.getElementById("btn-challenges")?.addEventListener("click",()=>{this.deps.onShowChallengeLevels(e)}),document.getElementById("btn-sandbox-game")?.addEventListener("click",()=>{this.showSandboxConfig(e)}),document.getElementById("btn-leaderboard")?.addEventListener("click",()=>{this.showLeaderboard(e)}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.showHowToPlay(e)}),this.deps.loadingScreen.querySelectorAll(".slot-btn-load").forEach(i=>{i.addEventListener("click",()=>{const s=parseInt(i.dataset.slot??"1",10);T.emit("ui:load-game-slot",{slot:s})})}),this.deps.loadingScreen.querySelectorAll(".slot-btn-delete").forEach(i=>{i.addEventListener("click",()=>{const s=parseInt(i.dataset.slot??"1",10);confirm(`Delete save in slot ${s}?`)&&T.emit("ui:delete-save-slot",{slot:s})})})}showLeaderboard(e){const t=ur.getEntries(),n=t.length===0?'<tr><td colspan="5" class="leaderboard-empty">No scores yet — play a Normal game!</td></tr>':t.map((i,s)=>`
              <tr class="${s===0?"leaderboard-top":""}">
                <td class="leaderboard-rank">${s+1}</td>
                <td class="leaderboard-name">${this.deps.escapeHtml(i.name)}</td>
                <td class="leaderboard-wave">Wave ${i.wave}</td>
                <td class="leaderboard-orders">${i.completedOrders} orders</td>
                <td class="leaderboard-money">$${i.money}</td>
              </tr>`).join("");this.deps.loadingScreen.innerHTML=`
      <div class="menu-title">
        <h1>🏆 Leaderboard</h1>
        <p class="menu-tagline">Best scores in Normal mode</p>
      </div>
      <div class="game-menu">
        <table class="leaderboard-table leaderboard-table-menu">
          <thead>
            <tr>
              <th>#</th><th>Name</th><th>Wave</th><th>Orders</th><th>Money</th>
            </tr>
          </thead>
          <tbody>${n}</tbody>
        </table>
        <button id="btn-leaderboard-back" class="menu-btn menu-btn-secondary">← Back</button>
      </div>
    `,document.getElementById("btn-leaderboard-back")?.addEventListener("click",()=>{this.showGameMenu(e)})}showSandboxConfig(e){this.deps.loadingScreen.innerHTML=`
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
    `,document.getElementById("btn-sandbox-start")?.addEventListener("click",()=>{const t=document.getElementById("sandbox-money"),n=document.getElementById("sandbox-workers"),i=document.getElementById("sandbox-wave"),s=Math.max(0,parseInt(t.value,10)||500),a=Math.max(1,parseInt(n.value,10)||5),o=Math.max(1,parseInt(i.value,10)||1);T.emit("ui:sandbox-game",{money:s,workerLimit:a,wave:o})}),document.getElementById("btn-sandbox-back")?.addEventListener("click",()=>{this.showGameMenu(e)})}showHowToPlay(e){const t=[{id:"waves",tab:"🌊 Waves",title:"Waves & Orders",content:`
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
        `}],n=t.map((s,a)=>`<button class="tutorial-tab${a===0?" active":""}" data-section="${s.id}">${s.tab}</button>`).join(""),i=t.map((s,a)=>`<div class="tutorial-section${a===0?" active":""}" id="tutorial-section-${s.id}">
        <h3 class="tutorial-section-title">${s.title}</h3>
        ${s.content}
      </div>`).join("");this.deps.loadingScreen.innerHTML=`
      <div class="how-to-play-container">
        <div class="how-to-play-header">
          <h2 class="how-to-play-title">📖 How to Play</h2>
          <button id="btn-back-to-menu" class="menu-btn menu-btn-secondary how-to-play-back">← Back</button>
        </div>
        <div class="tutorial-tabs">${n}</div>
        <div class="tutorial-content">${i}</div>
      </div>
    `,document.getElementById("btn-back-to-menu")?.addEventListener("click",()=>{this.showGameMenu(e)}),this.deps.loadingScreen.querySelectorAll(".tutorial-tab").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.section;this.deps.loadingScreen.querySelectorAll(".tutorial-tab").forEach(o=>o.classList.remove("active")),this.deps.loadingScreen.querySelectorAll(".tutorial-section").forEach(o=>o.classList.remove("active")),s.classList.add("active"),document.getElementById(`tutorial-section-${a}`)?.classList.add("active")})})}showDebugLog(e){const t=_t.getEntries(),n={info:"ℹ️",warn:"⚠️",error:"❌"},i=t.length===0?'<div class="debug-log-empty">No log entries yet.</div>':[...t].reverse().map(s=>{const a=new Date(s.timestamp).toLocaleTimeString(),o=n[s.level]??"";return`<div class="debug-log-entry debug-log-${s.level}">
            <span class="debug-log-time">${this.deps.escapeHtml(a)}</span>
            <span class="debug-log-icon">${o}</span>
            <span class="debug-log-msg">${this.deps.escapeHtml(s.message)}</span>
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
    `,document.getElementById("btn-debug-log-back")?.addEventListener("click",()=>{this.showGameMenu(e)}),document.getElementById("btn-debug-log-clear")?.addEventListener("click",()=>{_t.clear(),this.showDebugLog(e)})}}class Xv{constructor(e,t){this.hudElement=e,this.deps=t}economyDataCallback=null;setEconomyDataCallback(e){this.economyDataCallback=e}createHUD(){this.hudElement.innerHTML=`
      <div class="hud-stat money">
        <span class="label">Money</span>
        <span class="value" id="hud-money">$500</span>
      </div>
      <div class="hud-stat wave">
        <span class="label">Wave</span>
        <span class="value" id="hud-wave">1</span>
      </div>
      <div class="hud-stat orders">
        <span class="label">Failed</span>
        <span class="value" id="hud-failed">0 / 3</span>
      </div>
      <div class="hud-stat storage">
        <span class="label">Storage</span>
        <span class="value" id="hud-storage">0 / 0</span>
      </div>
      <div class="hud-stat workers">
        <span class="label">Workers</span>
        <span class="value" id="hud-workers">0 / 5</span>
      </div>
      <button class="hud-save-btn" id="hud-save-btn" title="Save Game">💾 Save</button>
    `;const e=document.getElementById("hud-save-btn");e&&Ye(e,()=>T.emit("ui:save-game"))}setupEventListeners(){T.on("money:changed",()=>{this.updateHUD()}),T.on("order:created",()=>{this.updateHUD()}),T.on("order:fulfilled",()=>{this.updateHUD()}),T.on("order:expired",()=>{this.updateHUD()}),T.on("pallet:stored",()=>{this.updateHUD()}),T.on("order:pallet-loaded",()=>{this.updateHUD()}),T.on("pallet:picked",()=>{this.updateHUD()})}updateHUD(){const e=z.getState(),t=document.getElementById("hud-money"),n=document.getElementById("hud-wave"),i=document.getElementById("hud-storage"),s=document.getElementById("hud-failed"),a=document.getElementById("hud-workers"),o=je.totalPallets;if(t&&(t.textContent=`$${e.money}`),n&&(n.textContent=String(e.wave)),i&&(i.textContent=`${o} / ${e.storageCapacity}`),s){const l=z.get("gameMode")==="challenge"?1:3;s.textContent=`${e.failedOrders} / ${l}`}if(a){const l=this.economyDataCallback?this.economyDataCallback():{operatorCount:0,forkliftCount:0},c=l.operatorCount+l.forkliftCount;a.textContent=`${c} / ${e.workerLimit}`}this.deps.onAfterUpdate()}}class qv{themeToggleElement=null;createTopControls(){const e=document.createElement("div");e.id="top-controls",this.themeToggleElement=document.createElement("button"),this.themeToggleElement.id="theme-toggle",this.themeToggleElement.title="Toggle Theme (T)",this.updateThemeToggleButton(),e.appendChild(this.themeToggleElement);const t=document.createElement("button");t.id="btn-rotate-camera",t.title="Rotate Camera (E)",t.className="top-control-btn",t.innerHTML="🔄",e.appendChild(t);const n=document.createElement("button");n.id="btn-camera-toggle",n.title="Toggle Camera View",n.className="top-control-btn active",n.dataset.view="isometric",n.innerHTML="📐",e.appendChild(n),document.getElementById("ui-container")?.appendChild(e),Ye(this.themeToggleElement,()=>{z.toggleTheme()}),Ye(t,()=>{T.emit("input:camera-rotate-right")}),Ye(n,()=>{const s=(n.dataset.view==="top"?"top":"isometric")==="isometric"?"top":"isometric";n.dataset.view=s,n.innerHTML=s==="isometric"?"📐":"🔝",T.emit("input:camera-view",s)})}updateThemeToggleButton(){if(!this.themeToggleElement)return;const e=z.get("theme");this.themeToggleElement.innerHTML=e==="dark"?"🌙":"☀️",document.body.classList.toggle("light-mode",e==="light")}setupEventListeners(){T.on("theme:changed",()=>{this.updateThemeToggleButton()})}setupThemeKeyListener(){document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="t"){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;z.toggleTheme()}})}}class Yv{container=null;dropdown=null;isOpen=!1;unsubscribeTheme=null;createMenuControls(){const e=document.createElement("div");e.id="menu-controls",e.style.display="none";const t=document.createElement("button");t.id="btn-menu-toggle",t.title="Game Menu",t.innerHTML="⋮";const n=document.createElement("div");n.id="menu-dropdown";const i=document.createElement("button");i.id="btn-save-and-quit",i.className="menu-dropdown-btn",i.innerHTML="💾 Save & Quit";const s=document.createElement("button");s.id="btn-quit-to-menu",s.className="menu-dropdown-btn",s.innerHTML="🚪 Quit to Menu",n.appendChild(i),n.appendChild(s),e.appendChild(t),e.appendChild(n),document.getElementById("ui-container")?.appendChild(e),this.container=e,this.dropdown=n}setupEventListeners(){const e=document.getElementById("btn-menu-toggle"),t=document.getElementById("btn-save-and-quit"),n=document.getElementById("btn-quit-to-menu");e&&Ye(e,()=>this.toggleDropdown()),t&&Ye(t,()=>{this.closeDropdown(),T.emit("ui:save-and-quit")}),n&&Ye(n,()=>{this.closeDropdown(),T.emit("ui:quit-to-menu")}),document.addEventListener("click",i=>{this.container?.contains(i.target)||this.closeDropdown()}),document.addEventListener("touchend",i=>{this.container?.contains(i.target)||this.closeDropdown()},{passive:!0}),this.unsubscribeTheme=T.on("theme:changed",()=>{this.updateSaveQuitVisibility()})}toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()}openDropdown(){this.dropdown&&(this.isOpen=!0,this.dropdown.classList.add("open"),document.getElementById("btn-menu-toggle")?.classList.add("open"),this.updateSaveQuitVisibility())}closeDropdown(){this.dropdown&&(this.isOpen=!1,this.dropdown.classList.remove("open"),document.getElementById("btn-menu-toggle")?.classList.remove("open"))}show(){this.container&&(this.container.style.display="block")}hide(){this.container&&(this.container.style.display="none",this.closeDropdown())}updateSaveQuitVisibility(){const e=document.getElementById("btn-save-and-quit");if(!e)return;const t=z.get("gameMode")==="challenge";e.style.display=t?"none":""}dispose(){this.unsubscribeTheme?.(),this.unsubscribeTheme=null}}class Kv{constructor(e){this.container=e}collapsed=!1;createPanel(){this.container.innerHTML=`
      <div class="inventory-panel-title">
        <span>📊 Inventory</span>
        <button class="toggle-panel-btn" id="toggle-inventory-panel">−</button>
      </div>
      <div id="inventory-list-container">
        <div id="inventory-list"></div>
      </div>
    `;const e=document.getElementById("toggle-inventory-panel");e&&Ye(e,()=>{this.collapsed=!this.collapsed,this.container.classList.toggle("collapsed",this.collapsed),e.textContent=this.collapsed?"+":"−"})}onUpdate=()=>this.updatePanel();setupEventListeners(){T.on("inventory:pallet-registered",this.onUpdate),T.on("inventory:pallet-removed",this.onUpdate),T.on("phase:build",this.onUpdate),T.on("phase:operations",this.onUpdate),T.on("wave:complete",this.onUpdate)}updatePanel(){const e=document.getElementById("inventory-list");if(!e)return;const t=z.get("wave"),n=Kn(t),i=je.getAllSkuCounts(),s=je.totalPallets;let a="";for(let o=0;o<n;o++){const l=i.get(o)??0,c="#"+(Vn[o]??16777215).toString(16).padStart(6,"0"),d=Oi[o]??`SKU ${o}`;a+=`
        <div class="inventory-row">
          <span class="inventory-sku-badge" style="background:${c}"></span>
          <span class="inventory-sku-name">${d}</span>
          <span class="inventory-sku-count">${l}</span>
        </div>
      `}e.innerHTML=`
      <div class="inventory-total">
        <span>Total</span>
        <span>${s} pallet${s!==1?"s":""}</span>
      </div>
      ${a}
    `}}class Zv{hudElement;buildMenuElement;orderPanelElement;inventoryPanelElement;phaseIndicatorElement;wavePreviewElement;loadingScreen;workerDebugPanel;taskQueueDebugPanel;reservationsDebugPanel;selectionPanelElement;economyPanelElement;debugLogPanel;multiSelectPanelElement;_panelInteractionActive=!1;pickingManager=null;challengeUI;wavePreviewComponent;selectionPanels;debugPanels;buildMenu;phaseControls;mobileMenu;orderPanel;inventoryPanel;uiOverlays;mainMenu;hud;topControls;menuControls;constructor(){this.hudElement=document.getElementById("hud"),this.buildMenuElement=document.getElementById("build-menu"),this.orderPanelElement=document.getElementById("order-panel"),this.inventoryPanelElement=document.getElementById("inventory-panel"),this.phaseIndicatorElement=document.getElementById("phase-indicator"),this.wavePreviewElement=document.getElementById("wave-preview"),this.loadingScreen=document.getElementById("loading-screen"),this.workerDebugPanel=document.getElementById("worker-debug-panel"),this.taskQueueDebugPanel=document.getElementById("task-queue-debug-panel"),this.reservationsDebugPanel=document.getElementById("reservations-debug-panel"),this.selectionPanelElement=document.getElementById("selection-panel"),this.economyPanelElement=document.getElementById("economy-panel"),this.debugLogPanel=document.getElementById("debug-log-panel"),this.multiSelectPanelElement=document.getElementById("multi-select-panel"),this.challengeUI=new Ov({loadingScreen:this.loadingScreen,escapeHtml:e=>this.escapeHtml(e),addMobileInteraction:(e,t)=>this.addMobileInteraction(e,t),onBackToMenu:e=>this.showGameMenu(e)}),this.wavePreviewComponent=new Uv(this.wavePreviewElement,{getWaveConfig:e=>this.getWaveConfig(e),onHudUpdated:()=>this.updateHUD()}),this.selectionPanels=new Nv(this.selectionPanelElement,this.multiSelectPanelElement,{addMobileInteraction:(e,t)=>this.addMobileInteraction(e,t),closeMobilePanelInternal:()=>this.mobileMenu.closeMobilePanelInternal(),isPanelInteractionActive:()=>this._panelInteractionActive,confirm:e=>this.uiOverlays.showConfirmModal(e)}),this.mobileMenu=new Hv(this.selectionPanelElement,()=>this.selectionPanels.hasSelectedEntity()),this.orderPanel=new Gv(this.orderPanelElement,{onOrdersCountChanged:e=>this.mobileMenu.updateOrdersBadge(e),isPanelInteractionActive:()=>this._panelInteractionActive}),this.inventoryPanel=new Kv(this.inventoryPanelElement),this.uiOverlays=new Vv({onHudUpdated:()=>this.updateHUD()}),this.mainMenu=new $v({loadingScreen:this.loadingScreen,escapeHtml:e=>this.escapeHtml(e),formatSaveDate:e=>this.formatSaveDate(e),onShowChallengeLevels:e=>this.showChallengeLevelSelect(e)}),this.hud=new Xv(this.hudElement,{onAfterUpdate:()=>{this.buildMenu.updateReorgWaveButton(),this.mobileMenu.updateModeSpecificUIVisibility()}}),this.topControls=new qv,this.menuControls=new Yv,this.debugPanels=new Fv(this.workerDebugPanel,this.taskQueueDebugPanel,this.reservationsDebugPanel,this.economyPanelElement,this.debugLogPanel,{escapeHtml:e=>this.escapeHtml(e),onHudUpdated:()=>this.updateHUD()}),this.buildMenu=new Bv(this.buildMenuElement,{confirm:e=>this.uiOverlays.showConfirmModal(e)}),this.buildMenu.createBuildMenu(),this.buildMenu.setupEventListeners(),this.phaseControls=new zv(this.phaseIndicatorElement,this.buildMenuElement,()=>{this.buildMenu.updateReorgWaveButton(),this.mobileMenu.updateModeSpecificUIVisibility()}),this.phaseControls.createPhaseIndicator(),this.phaseControls.setupEventListeners(),this.hud.createHUD(),this.hud.setupEventListeners(),this.orderPanel.createOrderPanel(),this.inventoryPanel.createPanel(),this.inventoryPanel.setupEventListeners(),this.wavePreviewComponent.updateWavePreview(),this.wavePreviewComponent.setupEventListeners(),this.debugPanels.createWorkerDebugPanel(),this.taskQueueDebugPanel&&this.debugPanels.createTaskQueueDebugPanel(),this.debugPanels.createReservationsDebugPanel(),this.debugPanels.createEconomyPanel(),this.debugPanels.createDebugLogPanel(),this.topControls.createTopControls(),this.menuControls.createMenuControls(),this.menuControls.setupEventListeners(),this.mobileMenu.createMobileMenu((e,t)=>this.addMobileInteraction(e,t),()=>this.toggleDebugPanel(),()=>this.toggleDebugLogPanel()),this.mobileMenu.setupOutsideInteractionListeners(()=>this.selectionPanels.isMultiSelectToolActive()),this.selectionPanels.setupEventListeners(),this.topControls.setupEventListeners(),this.uiOverlays.setupEventListeners(),this.debugPanels.setupEventListeners(),this.debugPanels.setupKeyboardShortcuts(),this.setupEventListeners(),this.topControls.setupThemeKeyListener(),this.mobileMenu.updateModeSpecificUIVisibility()}showGameMenu(e){this.mainMenu.showGameMenu(e)}showDebugLog(e){this.mainMenu.showDebugLog(e)}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}formatSaveDate(e){return e?new Date(e).toLocaleString():""}showNotification(e,t=2e3){this.uiOverlays.showNotification(e,t)}toggleDebugPanel(e){this.debugPanels.toggleDebugPanel(e)}toggleTaskQueuePanel(e){this.debugPanels.toggleTaskQueuePanel(e)}toggleReservationsPanel(e){this.debugPanels.toggleReservationsPanel(e)}toggleDebugLogPanel(e){this.debugPanels.toggleDebugLogPanel(e)}updateDebugLogPanel(){this.debugPanels.updateDebugLogPanel()}updateEconomyPanel(){this.debugPanels.updateEconomyPanel()}updateReservationsDebugPanel(){this.debugPanels.updateReservationsDebugPanel()}setDebugUpdateCallback(e){this.debugPanels.setDebugUpdateCallback(e)}setEconomyDataCallback(e){this.hud.setEconomyDataCallback(e),this.debugPanels.setEconomyDataCallback(e)}updateWorkerDebugPanel(){this.debugPanels.updateWorkerDebugPanel()}updateTaskQueueDebugPanel(){this.debugPanels.updateTaskQueueDebugPanel(this.pickingManager)}getWaveConfig(e){const t=Dt.getActiveChallenge();return z.get("gameMode")==="challenge"&&t?{truckCount:t.wave.truckCount,palletsPerTruck:t.wave.palletsPerTruck,timeBetweenTrucks:t.wave.timeBetweenTrucks,totalWaveTime:t.wave.totalWaveTime,outboundOrderCount:t.wave.outboundOrderCount}:Io(e)}updateWavePreview(e){this.wavePreviewComponent.updateWavePreview(e)}setPreviewOrdersCallback(e){this.wavePreviewComponent.setPreviewOrdersCallback(e)}addMobileInteraction(e,t){Ye(e,t)}toggleMobilePanel(e){this.mobileMenu.toggleMobilePanel(e)}setupEventListeners(){const e=()=>{this._panelInteractionActive=!0};[this.selectionPanelElement,this.orderPanelElement,this.multiSelectPanelElement].forEach(t=>{t.addEventListener("mousedown",e),t.addEventListener("touchstart",e,{passive:!0})}),document.addEventListener("mouseup",()=>{this._panelInteractionActive=!1}),document.addEventListener("touchend",()=>{this._panelInteractionActive=!1},{passive:!0}),document.addEventListener("touchcancel",()=>{this._panelInteractionActive=!1},{passive:!0})}clearBuildableRestrictions(){this.buildMenu.clearBuildableRestrictions()}updateHUD(){this.hud.updateHUD()}updateOrders(e){this.orderPanel.updateOrders(e)}initSelectionDependencies(e,t,n){this.selectionPanels.initSelectionDependencies(e,t,n)}updateSelectionPanel(){this.selectionPanels.updateSelectionPanel()}updateMultiSelectPanel(){this.selectionPanels.updateMultiSelectPanel()}hideLoading(){this.loadingScreen.classList.add("hidden"),this.menuControls.show()}showLoading(){this.loadingScreen.classList.remove("hidden"),this.menuControls.hide()}showChallengeLevelSelect(e){this.challengeUI.showChallengeLevelSelect(e)}showChallengeHUD(e){this.challengeUI.showChallengeHUD(e)}hideChallengeHUD(){this.challengeUI.hideChallengeHUD()}showChallengeResults(e,t,n,i){this.challengeUI.showChallengeResults(e,t,n,i)}hideChallengeResults(){this.challengeUI.hideChallengeResults()}}function fc(r){return typeof r=="object"&&r!==null&&"onPlaced"in r&&typeof r.onPlaced=="function"&&"onRemoved"in r&&typeof r.onRemoved=="function"}class jv{pickingManager;conveyorManager;placementSystem;uiManager;automatedDocks=[];constructor(e,t,n,i){this.pickingManager=e,this.conveyorManager=t,this.placementSystem=n,this.uiManager=i}getRegistrationContext(){return{pickingManager:this.pickingManager,conveyorManager:this.conveyorManager,automatedDocks:this.automatedDocks}}onEntityPlaced(e,t,n,i){fc(e)&&e.onPlaced(this.getRegistrationContext(),{gridX:n,gridZ:i})}sellEntity(e,t=!0){if(!e)return;const{x:n,z:i}=e.getGridPosition();fc(e)&&e.onRemoved(this.getRegistrationContext(),{gridX:n,gridZ:i}),this.placementSystem.removeEntity(e),t&&T.emit("input:escape"),this.uiManager.updateHUD()}reset(){this.automatedDocks=[]}}class Qv{grid;camera;placementSystem;uiManager;constructor(e,t,n,i){this.grid=e,this.camera=t,this.placementSystem=n,this.uiManager=i}purchaseFloorExpansion(){const e=z.get("floorExpansionCount"),t=dr(e);z.spendMoney(t)&&(this.grid.expand(br),z.set("floorExpansionCount",e+1),this.camera.setGridDimensions(this.grid.width,this.grid.height),this.uiManager.updateHUD())}purchaseVerticalFloorExpansion(){const e=z.get("floorVerticalExpansionCount"),t=hr(e);if(!z.spendMoney(t))return;const n=this.grid.height,i=this.placementSystem.getAllEntities().filter(a=>(a.type==="truck-dock"||a.type==="automated-truck-dock")&&a.getGridPosition().z===n-1);this.grid.expandVertical(Tr),z.set("floorVerticalExpansionCount",e+1);const s=this.grid.height-1;for(const a of i){const{x:o}=a.getGridPosition();this.placementSystem.relocateEntity(o,n-1,o,s)}this.camera.setGridDimensions(this.grid.width,this.grid.height),this.uiManager.updateHUD()}purchaseWorkerCapacityExpansion(){const e=z.get("workerCapacityExpansionCount"),t=fo(e);z.spendMoney(t)&&(z.increaseWorkerLimit(ld),z.set("workerCapacityExpansionCount",e+1),this.uiManager.updateHUD())}purchaseRackUpgrade(e){if(!e.canUpgradeHeight())return;const t=dv();if(!z.spendMoney(t))return;if(!e.upgradeHeight()){z.addMoney(t);return}const n=z.get("storageCapacity"),i=Lt.rack.storageCapacity??0;z.updateStorageCapacity(n+(e.capacity-i)),this.uiManager.updateHUD(),this.uiManager.updateSelectionPanel()}purchaseOperatorUpgrade(e){const t=cd(e.equipmentTier);if(!t||!z.spendMoney(t))return;const n=e;n.setEquipmentTier(n.equipmentTier+1),this.uiManager.updateHUD(),this.uiManager.updateSelectionPanel()}}const po=12,mo=12;class Jv{grid;camera;gameLoop;placementSystem;conveyorManager;waveManager;outboundTruckManager;orderManager;economyManager;pickingManager;uiManager;entityRegistration;relinkAllFn;constructor(e){this.grid=e.grid,this.camera=e.camera,this.gameLoop=e.gameLoop,this.placementSystem=e.placementSystem,this.conveyorManager=e.conveyorManager,this.waveManager=e.waveManager,this.outboundTruckManager=e.outboundTruckManager??null,this.orderManager=e.orderManager,this.economyManager=e.economyManager,this.pickingManager=e.pickingManager,this.uiManager=e.uiManager,this.entityRegistration=e.entityRegistration,this.relinkAllFn=e.relinkAllFn}cleanupForRestart(){document.querySelector(".game-over-overlay")?.remove(),this.uiManager.hideChallengeResults(),this.placementSystem.reset(),this.waveManager.reset(),this.outboundTruckManager?.reset(),this.orderManager.reset(),this.economyManager.reset(),this.pickingManager.reset(),this.conveyorManager.reset(),je.reset(),this.entityRegistration.reset(),z.reset(),z.setPhase("build"),this.uiManager.updateOrders?.([])}startChallenge(e){const t=Dt.getLevel(e);if(t&&Dt.isLevelUnlocked(e)){_t.log(`[Game] Starting challenge level ${e}: ${t.name}`),this.cleanupForRestart(),Dt.setActiveChallenge(e),this.grid.rebuild(t.gridWidth,t.gridHeight),this.camera.setGridDimensions(this.grid.width,this.grid.height),z.reset(),z.setGameMode("challenge"),z.set("money",t.budget),z.set("workerLimit",t.workerLimit),z.set("wave",1),z.setPhase("build"),this.waveManager.setWaveConfigOverride(t.wave);for(const n of t.initialEntities)this.placementSystem.placeEntity(n.type,n.x,n.z,{direction:n.direction,storageType:n.storageType,storedPallets:n.storedPallets,updateStorageCapacity:!0});this.relinkAllFn(),this.orderManager.prepareForWave(1,t.wave.outboundOrderCount,t.wave.totalWaveTime,t.wave.outboundOrderPallets),this.uiManager.hideLoading(),this.uiManager.updateHUD(),this.uiManager.updateWavePreview(),this.uiManager.showChallengeHUD(t),this.gameLoop.resume(),t.allowedBuildables&&T.emit("challenge:set-allowed-buildables",{allowed:t.allowedBuildables})}}onChallengeWaveComplete(e){const t=Dt.getActiveChallenge();if(!t)return;const n=z.get("money"),i=Dt.calculateStars(t.id,n,e);_t.log(`[Game] Challenge ${t.id} complete — stars: ${i}, remaining: $${n}, failed: ${e}`),e||Dt.recordCompletion(t.id,i,n),this.gameLoop.pause(),this.uiManager.showChallengeResults(t,i,n,e)}returnToMenuFromChallenge(){this.cleanupForRestart(),Dt.clearActiveChallenge(),this.grid.rebuild(po,mo),this.camera.setGridDimensions(this.grid.width,this.grid.height),z.reset(),this.uiManager.hideChallengeHUD(),this.uiManager.clearBuildableRestrictions(),this.uiManager.showLoading(),this.uiManager.showGameMenu(mt.getAllSlotInfos()),this.gameLoop.resume()}}class e0{gameLoop;scene;camera;renderer;canvas;grid;waveManager;outboundTruckManager;orderManager;economyManager;inputSystem;placementSystem;selectionSystem;multiSelectSystem;pickingManager;conveyorManager;uiManager;entityRegistration;upgradeController;challengeController;pendingOutboundWave=!1;pendingOutboundTotalPallets=0;activeOutboundWave=!1;constructor(){if(this.canvas=document.getElementById("game-canvas"),!this.canvas)throw new Error("Canvas element not found");this.gameLoop=new Fg,this.scene=new Hg,this.camera=new Gg(window.innerWidth/window.innerHeight),this.renderer=new Wg(this.canvas),this.grid=new Vg(po,mo,1),this.scene.add(this.grid.getObject3D()),this.economyManager=new uv,this.waveManager=new Kg(this.scene.instance,this.grid),this.outboundTruckManager=new iv(this.scene.instance,this.grid),this.orderManager=new sv,this.waveManager.setOutboundActiveCallback(()=>this.outboundTruckManager.getActiveCount()>0),this.waveManager.setPendingOrdersCallback(()=>this.orderManager.hasUnshippedOrders()),this.inputSystem=new pv(this.camera,this.canvas),this.conveyorManager=new ci(this.grid),this.placementSystem=new mv(this.scene,this.grid,this.economyManager,this.conveyorManager),this.selectionSystem=new Iv(this.scene,this.inputSystem,this.placementSystem),this.multiSelectSystem=new Lv(this.scene,this.placementSystem,this.camera,this.grid),this.pickingManager=new Rv(this.scene,this.grid,this.conveyorManager),this.waveManager.setAutomatedDockPositionsCallback(()=>{const e=new Set;for(let t=0;t<this.grid.width;t++)this.placementSystem.getEntityAt(t,this.grid.height-1)instanceof xt&&e.add(t);return e}),this.outboundTruckManager.setAutomatedDockPositionsCallback(()=>{const e=new Set;for(let t=0;t<this.grid.width;t++)this.placementSystem.getEntityAt(t,0)instanceof xt&&e.add(t);return e}),this.pickingManager.setOutboundTrucksCallback(()=>this.outboundTruckManager.getTrucksNeedingTasks()),this.uiManager=new Zv,this.uiManager.initSelectionDependencies(this.pickingManager,this.scene,this.grid),this.entityRegistration=new jv(this.pickingManager,this.conveyorManager,this.placementSystem,this.uiManager),this.upgradeController=new Qv(this.grid,this.camera,this.placementSystem,this.uiManager),this.challengeController=new Jv({grid:this.grid,camera:this.camera,gameLoop:this.gameLoop,placementSystem:this.placementSystem,conveyorManager:this.conveyorManager,waveManager:this.waveManager,outboundTruckManager:this.outboundTruckManager,orderManager:this.orderManager,economyManager:this.economyManager,pickingManager:this.pickingManager,uiManager:this.uiManager,entityRegistration:this.entityRegistration,relinkAllFn:()=>this.relinkAll()}),mt.setGrid(this.grid),mt.setEntityProvider(()=>this.placementSystem.getAllEntities()),mt.setOrderManager(this.orderManager),mt.setEconomyManager(this.economyManager),mt.setWaveManager(this.waveManager),this.setupEventHandlers(),this.setupResizeHandler(),this.setupGameLoop(),this.setupGlobalFunctions()}setupInitialDocks(){t0(this.placementSystem,this.grid.height)}setupEventHandlers(){T.on("ui:start-wave",()=>{this.startWave()}),T.on("ui:start-reorg-wave",()=>{z.get("gameMode")!=="challenge"&&this.startReorgWave()}),T.on("ui:start-outbound-wave",()=>{z.get("gameMode")!=="challenge"&&this.startOutboundWave()}),T.on("reorg:complete",()=>{this.onReorgComplete()}),T.on("ui:new-game",()=>{this.startNewGame()}),T.on("ui:sandbox-game",({money:e,workerLimit:t,wave:n})=>{this.startSandboxGame(e,t,n)}),T.on("ui:load-game",()=>{this.loadGame(mt.getCurrentSlot())}),T.on("ui:load-game-slot",({slot:e})=>{this.loadGame(e)}),T.on("ui:delete-save-slot",({slot:e})=>{mt.deleteSlot(e),this.uiManager.showGameMenu(mt.getAllSlotInfos())}),T.on("ui:challenge-start",({levelId:e})=>{this.challengeController.startChallenge(e)}),T.on("ui:challenge-return-menu",()=>{this.challengeController.returnToMenuFromChallenge()}),T.on("ui:save-game",()=>{if(z.get("gameMode")==="challenge")return;const e=this.save();T.emit("game:saved",{success:e})}),T.on("ui:save-and-quit",()=>{this.returnToMenu(!0)}),T.on("ui:quit-to-menu",()=>{this.returnToMenu(!1)}),T.on("wave:complete",()=>{this.onWaveComplete()}),T.on("game:over",()=>{if(z.get("gameMode")==="challenge"){this.challengeController.onChallengeWaveComplete(!0);return}this.gameLoop.pause()}),T.on("entity:placed:complete",({entity:e,type:t,gridX:n,gridZ:i})=>{this.entityRegistration.onEntityPlaced(e,t,n,i)}),T.on("truck:docked",({truck:e,dockX:t,dockZ:n})=>{const i=this.placementSystem.getEntityAt(t,n);i instanceof xt?(_t.log(`[Game] Inbound truck docked at automated dock (${t}, ${n}) — pallets: ${e.getPalletsRemaining()}`),i.setDockedTruck(e)):(_t.log(`[Game] Inbound truck docked at (${t}, ${n}) — pallets: ${e.getPalletsRemaining()}`),this.pickingManager.createUnloadTasksForTruck(e,t,n))}),T.on("outbound:truck-docked",({truck:e,dockX:t,dockZ:n,orderId:i,quantity:s})=>{const a=this.placementSystem.getEntityAt(t,n);a instanceof xt&&(a.connectedConveyor?(_t.log(`[Game] Outbound truck docked at automated dock (${t}, ${n}) — needs: ${s} pallets`),a.setOutboundTruck(e,i,s)):_t.log(`[Game] Outbound truck docked at automated dock (${t}, ${n}) but no conveyor connected — truck will not be loaded`))}),T.on("ui:entity-sell",({entity:e})=>{this.entityRegistration.sellEntity(e)}),T.on("conveyor:rotated",({entity:e})=>{if(e instanceof ht){const{x:t,z:n}=e.getGridPosition();e.nextConveyor=null,e instanceof Gt&&(e.diverterOutputs=[null,null,null]),this.conveyorManager.linkConveyor(e,t,n)}}),T.on("entity:moved",({entity:e,fromX:t,fromZ:n,gridX:i,gridZ:s})=>{e instanceof ht&&(this.conveyorManager.unregister(t,n),this.conveyorManager.register(e,i,s),e.nextConveyor=null,e instanceof Gt&&(e.diverterOutputs=[null,null,null]),this.conveyorManager.linkConveyor(e,i,s))}),T.on("outbound:order-completed",()=>{this.uiManager.updateEconomyPanel()}),T.on("ui:floor-expansion",()=>{this.upgradeController.purchaseFloorExpansion()}),T.on("ui:floor-expansion-vertical",()=>{this.upgradeController.purchaseVerticalFloorExpansion()}),T.on("ui:worker-capacity-expansion",()=>{this.upgradeController.purchaseWorkerCapacityExpansion()}),T.on("ui:rack-upgrade",({rack:e})=>{this.upgradeController.purchaseRackUpgrade(e)}),T.on("ui:worker-upgrade",({operator:e})=>{this.upgradeController.purchaseOperatorUpgrade(e)}),T.on("ui:multi-select-clear",()=>{this.multiSelectSystem.clearSelection()}),T.on("ui:multi-select-move-activate",()=>{this.multiSelectSystem.activateMoveMode()}),T.on("ui:multi-select-sell-all",({entities:e})=>{this.multiSelectSystem.clearSelection();for(const t of e)this.entityRegistration.sellEntity(t,!1)}),T.on("ui:multi-select-move-all",({entities:e,dx:t,dz:n})=>{this.moveMultipleEntities(e,t,n)}),T.on("ui:multi-select-storage-type",({storageType:e,entities:t})=>{for(const n of t)"storageType"in n&&(n.storageType=e,T.emit("entity:storage-type-changed",{entity:n,storageType:e}))}),T.on("ui:multi-select-allowed-sku",({allowedSku:e,entities:t})=>{for(const n of t)if("allowedSku"in n){const i=n;i.allowedSku=e,T.emit("entity:allowed-sku-changed",{entity:i,allowedSku:e})}})}moveMultipleEntities(e,t,n){if(e.length===0||t===0&&n===0)return;const i=new Set(e.filter(l=>this.placementSystem.isWorkerEntity(l)).map(l=>l.id)),s=[];for(const l of e){const{x:c,z:d}=l.getGridPosition(),h=c+t,u=d+n;s.push({entity:l,fromX:c,fromZ:d,toX:h,toZ:u})}const a=new Set(s.map(l=>`${l.fromX},${l.fromZ}`));new Set(s.map(l=>`${l.toX},${l.toZ}`));for(const l of s){const{toX:c,toZ:d}=l,h=this.grid.getCell(c,d);if(!h||h.occupied&&!a.has(`${c},${d}`)||!h.buildable||this.placementSystem.isWorkerEntity(l.entity)&&this.placementSystem.hasWorkerAtCell(c,d,i))return}for(const{entity:l,fromX:c,fromZ:d}of s)this.placementSystem.isWorkerEntity(l)||this.grid.remove(c,d);const o=[];for(const l of s){const{entity:c,fromX:d,fromZ:h,toX:u,toZ:f}=l;if(this.placementSystem.isWorkerEntity(c)){c.setGridPosition(u,f),c.setWorldPosition(this.grid.gridToWorld(u,f)),o.push(l);continue}const g=this.placementSystem.getCellTypeForBuildable(c.type);if(!this.grid.place(u,f,c,g)){this.grid.place(d,h,c,g),c.setGridPosition(d,h);continue}c.setGridPosition(u,f),o.push(l)}this.placementSystem.batchUpdateEntityPositions(o);for(const{entity:l,fromX:c,fromZ:d,toX:h,toZ:u}of o)T.emit("entity:moved",{entity:l,fromX:c,fromZ:d,gridX:h,gridZ:u})}setupResizeHandler(){window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.resize(e/t),this.renderer.resize(e,t)})}setupGameLoop(){this.gameLoop.onUpdate((e,t)=>{this.update(e,t)}),this.gameLoop.onRender(()=>{this.render()})}setupGlobalFunctions(){window.fulfillOrder=e=>{this.orderManager.fulfillOrder(e)&&(this.uiManager.updateOrders(this.orderManager.getOrders()),this.uiManager.updateHUD())},this.uiManager.setDebugUpdateCallback(()=>({workers:this.pickingManager.getWorkerDebugInfo(),tasks:this.pickingManager.getTaskQueueStats()})),this.uiManager.setEconomyDataCallback(()=>({waveHistory:this.economyManager.getWaveHistory(),operatorCount:this.economyManager.getBuildCount("operator"),forkliftCount:this.economyManager.getBuildCount("forklift"),forkliftAgvCount:this.economyManager.getBuildCount("forklift-agv"),currentWaveOrderIncome:this.economyManager.getCurrentWaveOrderIncome()})),this.uiManager.setPreviewOrdersCallback(()=>this.orderManager.getPreviewOrders())}update(e,t){const n=z.get("gameSpeed"),i=e*n;this.inputSystem.update(e),this.camera.update(),this.placementSystem.update(i),this.selectionSystem.update(),this.multiSelectSystem.update(),z.get("phase")==="operations"&&(this.waveManager.update(i),this.outboundTruckManager.update(i),this.orderManager.update(i),this.entityRegistration.automatedDocks.forEach(s=>s.update(i)),this.uiManager.updateOrders(this.orderManager.getOrders())),z.get("phase")==="reorg"&&this.waveManager.update(i),this.pickingManager.update(i),this.uiManager.updateWorkerDebugPanel(),this.uiManager.updateTaskQueueDebugPanel(),this.uiManager.updateReservationsDebugPanel(),this.uiManager.updateDebugLogPanel(),this.uiManager.updateSelectionPanel(),this.uiManager.updateMultiSelectPanel()}render(){this.renderer.render(this.scene.instance,this.camera.instance)}startWave(){const e=z.get("wave");_t.log(`[Game] Wave ${e} started`),z.setPhase("operations"),this.pendingOutboundWave?(this.pendingOutboundWave=!1,this.activeOutboundWave=!0,this.waveManager.startOutboundWave(this.pendingOutboundTotalPallets)):(this.activeOutboundWave=!1,this.waveManager.startWave()),this.orderManager.activateWaveOrders()}startReorgWave(){const e=z.get("wave"),t=sd*e;z.spendMoney(t)&&(_t.log(`[Game] Reorg wave started (cost: $${t})`),z.setPhase("reorg"),this.waveManager.startReorgWave())}startOutboundWave(){const e=z.get("storedPallets"),t=Math.floor(e*.5);if(t<1)return;const n=z.get("wave"),i=this.waveManager.getWaveConfig(n),s=Math.max(1,i.palletsPerTruck),a=Math.max(1,Math.ceil(t/s)),o=a*s;_t.log(`[Game] Outbound wave queued: ${a} trucks × ${s} pallets (target: ${t} of ${e} available)`),this.orderManager.clearPreviewOrders(),this.orderManager.prepareOutboundWaveOrders(a,s,lo),this.pendingOutboundWave=!0,this.pendingOutboundTotalPallets=o,T.emit("outbound-wave:queued",{wave:n,truckCount:a,totalPallets:o}),this.uiManager.updateWavePreview(),this.uiManager.updateHUD()}onReorgComplete(){_t.log("[Game] Reorg wave complete"),z.setPhase("build"),this.uiManager.updateHUD(),mt.save()}onWaveComplete(){const e=z.get("wave");if(_t.log(`[Game] Wave ${e} complete`),z.get("gameMode")==="challenge"){this.challengeController.onChallengeWaveComplete(!1);return}if(this.activeOutboundWave){this.activeOutboundWave=!1;const a=this.waveManager.getWaveConfig(e);this.orderManager.prepareForWave(e,a.outboundOrderCount,a.totalWaveTime,a.palletsPerTruck),z.setPhase("build"),this.uiManager.updateWavePreview(),this.uiManager.updateHUD(),mt.save();return}const t=this.economyManager.deductWages(),n=this.economyManager.grantWaveBonus(e);this.economyManager.pushWaveRecord(e,n,t),this.uiManager.updateEconomyPanel(),z.nextWave();const i=z.get("wave"),s=this.waveManager.getWaveConfig(i);this.orderManager.prepareForWave(i,s.outboundOrderCount,s.totalWaveTime,s.palletsPerTruck),this.uiManager.updateWavePreview(),e%5===0&&T.emit("wave:milestone",{wave:e}),z.setPhase("build"),this.uiManager.updateHUD(),mt.save()}start(){mt.restoreLastSlot(),this.uiManager.showGameMenu(mt.getAllSlotInfos()),this.gameLoop.start(),console.log("Warehouse Defender started!")}startNewGame(){_t.log("[Game] New game started"),this.resetRuntimeState(),this.restoreDefaultGrid();const t=mt.getAllSlotInfos().find(i=>!i.exists)?.slot??1;mt.setCurrentSlot(t),z.setGameMode("normal"),this.setupInitialDocks(),this.uiManager.hideLoading(),this.uiManager.updateHUD();const n=this.waveManager.getWaveConfig(1);this.orderManager.prepareForWave(1,n.outboundOrderCount,n.totalWaveTime,n.palletsPerTruck),this.uiManager.updateWavePreview()}startSandboxGame(e,t,n){_t.log(`[Game] Sandbox game started (money=${e}, workerLimit=${t}, wave=${n})`),this.resetRuntimeState(),this.restoreDefaultGrid(),z.setGameMode("sandbox");const s=mt.getAllSlotInfos().find(o=>!o.exists)?.slot??1;mt.setCurrentSlot(s),z.set("money",e),z.set("workerLimit",t),z.set("wave",n),this.setupInitialDocks(),this.uiManager.hideLoading(),this.uiManager.updateHUD();const a=this.waveManager.getWaveConfig(n);this.orderManager.prepareForWave(n,a.outboundOrderCount,a.totalWaveTime,a.palletsPerTruck),this.uiManager.updateWavePreview()}loadGame(e){this.resetRuntimeState(),this.restoreDefaultGrid();const t=e??mt.getCurrentSlot();mt.setCurrentSlot(t);const n=mt.loadFromSlot(t);if(!n)return!1;_t.log(`[Game] Game loaded from slot ${t}`),z.deserialize(n.gameState);const i=z.get("floorExpansionCount");for(let a=0;a<i;a++)this.grid.expand(br);const s=z.get("floorVerticalExpansionCount");for(let a=0;a<s;a++)this.grid.expandVertical(Tr);this.camera.setGridDimensions(this.grid.width,this.grid.height),n.inventoryState&&je.deserialize(n.inventoryState);for(const a of n.entities){const o=a.type,l=o==="operator"||o==="forklift"||o==="forklift-agv";o in Lt&&!this.placementSystem.placeEntity(o,a.gridX,a.gridZ,{direction:a.direction,storageType:a.storageType,storedPallets:a.storedPallets,storedSkus:a.storedSkus,storedPalletIds:a.storedPalletIds,hasPallet:a.hasPallet,storedSku:a.storedSku,storedPalletId:a.storedPalletId,allowedSku:a.allowedSku,allowedTaskTypes:a.allowedTaskTypes,equipmentTier:a.equipmentTier,craneLength:a.craneLength,capacity:a.capacity,allowWorkerFallback:l})&&l&&this.placementSystem.queueDeferredWorkerPlacement(o,a.gridX,a.gridZ,{allowedTaskTypes:a.allowedTaskTypes,equipmentTier:a.equipmentTier,allowWorkerFallback:!0})}this.placementSystem.retryDeferredWorkerPlacements(),this.relinkAll(),n.orders&&this.orderManager.deserialize(n.orders),n.economyState&&this.economyManager.deserialize(n.economyState),n.waveState&&this.waveManager.restoreFromSave(n.waveState);for(const a of this.orderManager.getOrders())(a.status==="awaiting-truck"||a.status==="loading")&&T.emit("outbound:request-truck",{orderId:a.id,quantity:a.quantity-a.palletsLoaded,reward:a.reward,dockTime:a.dockTimeRemaining});return z.emitPhaseEvent(),this.uiManager.hideLoading(),this.uiManager.updateHUD(),this.uiManager.updateOrders(this.orderManager.getOrders()),this.uiManager.updateEconomyPanel(),this.uiManager.updateWavePreview(),T.emit("money:changed",{money:z.get("money")}),!0}relinkAll(){this.placementSystem.relinkStackerCraneChildren(),this.placementSystem.relinkAutomatedDocks(),this.conveyorManager.relinkAll()}save(){return mt.save()}pause(){this.gameLoop.pause(),z.pause()}resume(){this.gameLoop.resume(),z.resume()}reset(){this.gameLoop.stop(),this.resetRuntimeState(),this.restoreDefaultGrid(),mt.deleteSave(),this.start()}returnToMenu(e){e&&z.get("gameMode")!=="challenge"&&this.save(),document.querySelector(".game-over-overlay")?.remove(),this.gameLoop.stop(),this.resetRuntimeState(),this.restoreDefaultGrid(),this.uiManager.showLoading(),this.uiManager.showGameMenu(mt.getAllSlotInfos()),this.gameLoop.start()}dispose(){this.gameLoop.stop(),this.inputSystem.dispose(),this.renderer.dispose()}resetRuntimeState(){this.placementSystem.reset(),this.waveManager.reset(),this.outboundTruckManager.reset(),this.orderManager.reset(),this.economyManager.reset(),this.pickingManager.reset(),this.conveyorManager.reset(),je.reset(),this.entityRegistration.reset(),this.pendingOutboundWave=!1,this.pendingOutboundTotalPallets=0,this.activeOutboundWave=!1,z.reset(),z.setPhase("build"),this.uiManager.updateOrders([]),this.uiManager.updateWavePreview(),this.uiManager.updateHUD()}restoreDefaultGrid(){this.grid.rebuild(po,mo),this.camera.setGridDimensions(this.grid.width,this.grid.height)}}function t0(r,e){r.placeEntity("truck-dock",3,e-1),r.placeEntity("truck-dock",3,0);const t=e-4;r.placeEntity("floor-slot",2,t+1,{updateStorageCapacity:!0}),r.placeEntity("floor-slot",2,t,{updateStorageCapacity:!0}),r.placeEntity("floor-slot",4,t+1,{updateStorageCapacity:!0}),r.placeEntity("floor-slot",4,t,{updateStorageCapacity:!0}),r.placeEntity("operator",3,Math.floor(e/2))}document.addEventListener("DOMContentLoaded",()=>{const r=new e0;r.start(),window.game=r,document.addEventListener("visibilitychange",()=>{document.hidden?r.pause():r.resume()}),window.addEventListener("beforeunload",e=>{})});
