// 'use restrict'

import observer from '@cocreate/observer'
import './index.css';

const CoCreateFloatingLabel = {
  className: 'floating-label_field',
  initMap: new Map(),
  
  init: function() {
    let elements = document.querySelectorAll('.floating-label');
    this.initElements(elements)
  },

  initElements: function (elements){
    for(let el of elements)
      this.initElement(el);
  },

  initElement: function(node) {
    if(this.initMap.has(node))
      return false;

    this.initMap.set(node, true);

    this.__initEvents(node)
    if (node.parentNode && !node.parentNode.classList.contains(this.className)) {
      const placeholder = node.getAttribute('placeholder');
      const wrapper = document.createElement('div');
      node.setAttribute("placeholder", " ")
      wrapper.className = this.className;
      this.__wrap(node, wrapper, placeholder);
      this.update(node);
    }
  },

  update: function(node, value) {
    if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {
      const parent = node.parentNode;
      const active = node.hasAttribute('active')
      if (node.value || value || active) {
        node.classList.add("text_color");
        node.classList.add('active');
      }
      else {
        node.classList.remove("text_color");
        node.classList.remove('active');
      }
    }
  },

  __wrap: function(el, wrapper, placeholder) {
    el.parentNode.insertBefore(wrapper, el);
    var div1 = document.createElement('div');
    div1.className = "floating-label_outline";
    var div2 = document.createElement('div');
    div2.className = "floating-label_leading";
    var div3 = document.createElement('div');
    div3.className = "floating-label_notch";
    var label = document.createElement('label');
    label.className = "floating-label_label";
    label.innerHTML = placeholder;
    var div4 = document.createElement('div');
    div4.className = "floating-label_trailing";
    div1.appendChild(div2);
    div3.appendChild(label);
    div1.appendChild(div3);
    div1.appendChild(div4);
    /* console.log("wraper ",wrapper)
     console.log("el",el)
     console.log("div1",div1)*/
    // console.log("Floating ====================")
    wrapper.appendChild(el);
    wrapper.appendChild(div1);

  },

  __initEvents: function(node) {

    node.addEventListener('focus', (event) => {
      const inputContent = node.value;
      const tag_name = node.tagName.toLowerCase()
      if (inputContent || tag_name == 'select') {
        node.classList.add("text_color");
        node.classList.add("active");
        // parent = node.closest("div");
        // parent.classList.add("active");
      }
    });

    node.addEventListener('blur', (event) => {
      const inputContent = node.value;
      const active = node.hasAttribute('active')
      if (inputContent == '' && !active) {
        node.classList.remove("text_color");
        node.classList.remove("active");
        // parent = node.closest("div");
        // parent.classList.remove("active");
      }
    });
    
    node.addEventListener('change', (event) => {
      const inputContent = node.value;
      const active = node.hasAttribute('active')
      if (inputContent && !active) {
        node.classList.add("text_color");
        node.classList.add("active");
        // parent = node.closest("div");
        // parent.classList.add("active");
      }
    });

  },

}

CoCreateFloatingLabel.init();

observer.init({
  name: 'CoCreateFloatingLabelInit',
  observe: ['childList'],
  target: '.floating-label',
  callback: mutation => {
    CoCreateFloatingLabel.initElements(mutation.addedNodes)
  }
})





export default CoCreateFloatingLabel;

