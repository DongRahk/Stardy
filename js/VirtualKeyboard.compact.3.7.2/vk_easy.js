/**
 *  Anonymous class for generic operations with the VK
 *
 *  This script has been designed to provide easy install of the VK to the user sites.
 *  Script usage:
 *  1. Install VirtualKeyboard to the target site (eg. to "/path/to/VK" folder)
 *  2. Include string <script src="/path/to/VK/vk_easy.js" type="text/javascript"></script> in the website head tag
 *  3. Define CSS class "keyboardInput" on each text field or iframe, which should take an input from VK (eg. <input type="text" class="keyboardInput" />
 *
 *  Note, you could use any URL parameters in form of ?vk_skin=param1&vk_layout=param2
 *  1. vk_skin, referring to the theme in the "css" folder, used as the current skin (eg. vk_skin=flat_gray)
 *  2. vk_layout, referencing to one of the existing layouts, http://debugger.ru/projects/virtualkeyboard/layouts (e.g. vk_layout=RU%20Russian)
 *
 *  This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 *  @author Ilya Lebedev
 *  @copyright 2006-2011 Ilya Lebedev <ilya@lebedev.net>
 *  @version $Rev: 546 $
 *  @lastchange $Author: wingedfox $ $Date: 2009-02-27 11:53:11 +0300 (Пт, 27 фев 2009) $
 */
(function(){var i=(function(V){var x=document.getElementsByTagName('html')[0].innerHTML,X=new RegExp('<scr'+'ipt[^>]+?src\\s*=\\s*["\']?([^>]+?/|)('+V+')([^"\'\\s]*)[^>]*>(.|[\r\n])*?</scr'+'ipt>','i'),z=x.match(X);if(z){if(z[1].match(/^((https?|file)\:\/{2,}|\w:[\\])/))return[z[1],z[3]];if(z[1].indexOf("/")==0)return[z[1],z[3]];var Z=document.getElementsByTagName('base');if(Z[0]&&Z[0].href)return[Z[0].href+z[1],z[3]];return[(document.location.href.match(/(.*[\/\\])/)[0]+z[1]).replace(/^\/+/,""),z[3]]}return null})('vk_easy.js'),I,l='keyboardInput',o,O,Q;var _=function(V){var x=O.firstChild;x.style.visibility='hidden';x.style.top=0;x.style.left=0;if(V.parentNode!=O.parentNode){V.parentNode.insertBefore(O,V);}c();var X=DOM.getOffset(V),z=DOM.getOffset(x);x.style.top=X.y-z.y+X.height-z.height+"px";x.style.left=X.x-z.x+X.width+"px";x.style.visibility='visible'};var c=function(){var V=O.firstChild;if(I!=VirtualKeyboard.getAttachedInput()){V.src=V.src.replace(/jsvk[^.]*/,"jsvk");}else{V.src=V.src.replace(/jsvk[^.]*/,"jsvk_off");}};var C=function(V){var x=V.srcElement||V.target,X=(x.tagName||"").toLowerCase(),z=(x.type||"").toLowerCase();if(('textarea'==X||'input'==X&&('text'==z||'password'==z)||'iframe'==X&&('on'==(x.contentWindow.document.designMode||"").toLowerCase()||x.contentWindow.document.body.contentEditable))&&DOM.CSS(x).hasClass('keyboardInput')){I=x;_(x);clearTimeout(o);o=null}else if(!o&&x!=O.firstChild){o=setTimeout(e,200);}};var e=function(){if(VirtualKeyboard.isOpen()){var V=VirtualKeyboard.getAttachedInput();if(I!=V){I=V;_(V);}}else if(I){O.parentNode.removeChild(O);I=null}};var v=function(){if(I!=VirtualKeyboard.getAttachedInput()){var V=Q.firstChild;V.style.top=0;V.style.left=0;O.parentNode.insertBefore(Q,I);var x=DOM.getOffset(I),X=DOM.getOffset(V);V.style.top=x.y-X.y+x.height+"px";V.style.left=x.x-X.x+"px";VirtualKeyboard.toggle(I,V);clearTimeout(o);o=null}else{VirtualKeyboard.close();Q.parentNode.removeChild(Q);o=setTimeout(e,1000);}c();return false};(function(){var V=i[0],x=i[1];O=document.createElement('span');O.id="VirtualKeyboardIcon";O.style.cssText="width: 0px; height: 0px; position: relative; overflow: visible";O.innerHTML="<img src='"+V+"img/jsvk.gif' alt='VirtualKeyboard' style='position:absolute; border:0; margin:0; padding:0; display: block; z-index: 1;' />";O.firstChild.onmouseup=v;Q=document.createElement('span');Q.innerHTML="<div style='position: absolute; display: block; margin:0; padding: 0; overflow:visible'></div>";if(window.addEventListener)window.addEventListener('load',function(){EM.addEventListener(document.body,'mouseover',C);},false);else if(window.attachEvent)window.attachEvent('onload',function(){EM.addEventListener(document.body,'mouseover',C);},false);})();})();
