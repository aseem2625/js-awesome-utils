 // Add polyfill and define fn.
import './polyfill';


export function scrollToEl(idOrName) {
 const toTarget =
   document.getElementById(idOrName) ||
   document.getElementsByName(idOrName)[0];

 if (!toTarget) {
   return;
 }

 const scrollTop = toTarget.offsetTop;
 window.scroll({ top: scrollTop, left: 0, behavior: 'smooth' });

 return true;
}


/*
 * Takes hash directly from url - / pass toEle hash
 *
 * */
export let scrollToHash = function(evt, to) {
  let hash, idOrName;

  if (evt) {
    evt && evt.preventDefault();
    hash = to;

    window.location.hash = hash;
  } else {
    hash = window.location.hash;
  }

  idOrName = hash.substr(1);

  _scrollToEl(idOrName);
};
