(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ImageCropper = require('./imagecrop.min.js');

var dimensions = null;
var is_active = false;
var img_c = null;

var onUpdateHandler = function (dim) {
  dimensions = dim;
};

var onCropHandler = function() {
  var img = new Image();
  img.src = img_c.crop('image/jpeg', 1);
  img.width = dimensions.w;
  img.height = dimensions.h;
  var target = document.querySelector('.preview');
  while(target.firstChild) {
    target.removeChild(target.firstChild)
  }
  target.appendChild(img);
};

var onCreateHandler = function() {
  if(is_active) { return; }

  new ImageCropper('.test-imagecrop', 'img.jpg', {
    update: onUpdateHandler
  });
  destroy_btn.style.display = 'initial';
  create_btn.style.display = 'none';

  is_active = true;
};

var onDestroyHandler = function() {
  if(!is_active) { return; }

  img_c.destroy();
  destroy_btn.style.display = 'none';
  create_btn.style.display = 'initial';

  is_active = false;
};

var crop_btn = document.querySelector('.crop-button');
crop_btn.addEventListener('click', onCropHandler);

var create_btn = document.querySelector('.create-button');
create_btn.addEventListener('click', onCreateHandler);
create_btn.style.display = 'none';

var destroy_btn = document.querySelector('.destroy-button');
destroy_btn.addEventListener('click', onDestroyHandler);

img_c = new ImageCropper('.test-imagecrop', 'img.jpg', {
  update: onUpdateHandler,
  min_crop_width: 100,
  min_crop_height: 150,
  fixed_size: true,
  create_cb: function(dim) {
    console.log('created - ', dim);
  },
  destroy_cb: function() {
    console.log('destroy');
  }
});
is_active = true;
},{"./imagecrop.min.js":2}],2:[function(require,module,exports){
module.exports=function(){function e(e,t,n){if(t&&e){n=n?n:{};for(var i in u)w[u[i][0]]=i in n?n[i]:u[i][1];w.mcw>80&&(x.x2=x.w=w.mcw),w.mch>80&&(x.y2=x.h=w.mch),w.fs&&(w.mcw>80||w.mch>80)&&(x.x2=x.y2=x.w=x.h=w.mcw>w.mch?w.mcw:w.mch),g(e),v=new Image,v.addEventListener("load",function(e){this.create()}.bind(this)),v.src=t}}function t(e){var t=r.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;return{x:0>n?0:n>t.width?t.width:n,y:0>i?0:i>t.height?t.height:i}}function n(e){var t=r.getBoundingClientRect();x.x<0&&(x.x=0,x.x2=x.w),x.y<0&&(x.y=0,x.y2=x.h),x.x2>t.width&&(x.x2=t.width,x.x=x.x2-x.w),x.y2>t.height&&(x.y2=t.height,x.y=x.y2-x.h),x.w=x.x2-x.x,x.h=x.y2-x.y,d.style.top=x.y+"px",d.style.left=x.x+"px",d.style.right=~~(t.width-x.x2)+"px",d.style.bottom=~~(t.height-x.y2)+"px",s.setAttribute("d","M 0 0 v"+t.height+"h"+t.width+"v"+-t.height+"H-0zM"+x.x+" "+x.y+"h"+x.w+"v"+x.h+"h-"+x.w+"V-"+x.h+"z"),w.up&&w.up(x)}function i(e){e=t(e),x.x=e.x-.5*x.w,x.y=e.y-.5*x.h,x.x2=e.x+.5*x.w,x.y2=e.y+.5*x.h,n(!0)}function o(e){document.addEventListener("mousemove",c),document.addEventListener("mouseup",h),i(e)}function h(e){document.removeEventListener("mouseup",h),document.removeEventListener("mousemove",c)}function c(e){i(e)}function m(e,i,o){function h(e){e.stopPropagation(),document.addEventListener("mouseup",m),document.addEventListener("mousemove",c)}function c(e){e.stopPropagation(),e=t(e),o(e),n()}function m(e){e.stopPropagation(),document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",c)}var r=document.createElement("span");return r.className="imgc-handles-el-"+e+"-"+i,r.addEventListener("mousedown",h),r}var r,d,s,u={update:["up",!1],create_cb:["cr",!1],destroy_cb:["de",!1],min_crop_width:["mcw",32],min_crop_height:["mch",32],max_width:["mw",500],max_height:["mh",500],fixed_size:["fs",!1]},a=[function(e){var t=x.x;a[7](e),w.fs?x.y+x.x-t<0?(x.x=t-x.y,x.y=0):x.y+=x.x-t:a[4](e)},function(e){var t=x.x2;a[5](e),w.fs?x.y-x.x2+t<0?(x.x2=t+x.y,x.y=0):x.y-=x.x2-t:a[4](e)},function(e){var t=x.x2;if(a[5](e),w.fs){var n=r.getBoundingClientRect();x.y2+x.x2-t>n.height?(x.x2=t+(n.height-x.y2),x.y2=n.height):x.y2+=x.x2-t}else a[6](e)},function(e){var t=x.x;if(a[7](e),w.fs){var n=r.getBoundingClientRect();x.y2+(t-x.x)>n.height?(x.x=t-(n.height-x.y2),x.y2=n.height):x.y2-=x.x-t}else a[6](e)},function(e){x.y=x.y2-e.y<w.mch?x.y2-w.mch:e.y},function(e){x.x2=e.x-x.x<w.mcw?x.x+w.mcw:e.x},function(e){x.y2=e.y-x.y<w.mch?x.y+w.mch:e.y},function(e){x.x=x.x2-e.x<w.mcw?x.x2-w.mcw:e.x}],y=!1,x={},w={},v=null,f={w:1,h:1},g=function(e){r&&this.destroy(),r=document.querySelector(e),r.className+=" imgc ".indexOf(" "+w.cn+" ")>-1?"":" imgc"};return e.prototype.create=function(e){if(!y){r||g(e);var t=v.width,i=v.height;t>w.mw&&(i=~~(w.mw*i/t),t=w.mw),i>w.mh&&(t=~~(w.mh*t/i),i=w.mh),f={w:v.naturalWidth/t,h:v.naturalHeight/i},r.style.width=t+"px",r.style.height=i+"px",r.addEventListener("DOMNodeRemovedFromDocument",this.destroy),r.appendChild(v);var h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("height",i),h.setAttribute("width",t),r.appendChild(h),s=document.createElementNS("http://www.w3.org/2000/svg","path"),h.appendChild(s),d=document.createElement("div"),d.className="imgc-handles",r.appendChild(d);for(var c=0;c<(w.fs?4:8);c++)d.appendChild(new m(w.fs?0:~~(c/4),c%4,a[c]));r.addEventListener("mousedown",o),y=!0,x={x:0,y:0,x2:0,y2:0,w:0,h:0},t===i?x.x2=x.y2=t:t>i?(x.x2=i,x.y2=w.fs?i:i-(t-i)):i>t&&(x.x2=w.fs?t:t-(i-t),x.y2=t),n(),w.cr&&w.cr({w:t,h:i})}},e.prototype.destroy=function(){if(y){if(r){for(r.removeEventListener("DOMNodeRemovedFromDocument",this.destroy),r.removeEventListener("mousedown",o);r.firstChild;)r.removeChild(r.firstChild);r=v=d=s=null}y=!1,w.de&&w.de()}},e.prototype.crop=function(e,t){(!e||"image/jpeg"!==e&&"image/png"!==e)&&(e="image/jpeg"),(!t||0>t||t>1)&&(t=1);var n=document.createElement("canvas");n.setAttribute("width",x.w),n.setAttribute("height",x.h);var i=n.getContext("2d");return i.drawImage(v,f.w*x.x,f.h*x.y,f.w*x.w,f.h*x.h,0,0,x.w,x.h),n.toDataURL(e,t)},e}();
},{}]},{},[1]);