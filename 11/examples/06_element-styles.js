Element.style.fontSize = '24px';
Element.style.color = null;

Element.style.cssText = 'prop1: val1; prop2: val2';
Element.setAttribute('style', 'prop1: val1; prop2: val2');

window.getComputedStyle(element);