// Add polyfill and define fn.
import './polyfill';


/**
 * Scrolls to particular element with given id / name.
 * @param  {String} idOrName unique id / name that exists on the page.
 */
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


/**
 * Scrolls to hash. It takes hash directly from url - / pass toEle hash
 * @param  {Object}  evt Event, likely to be click event
 * @param  {String}  to Hash location corresponding to unique name/id on page to which scroll happens
 */
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
