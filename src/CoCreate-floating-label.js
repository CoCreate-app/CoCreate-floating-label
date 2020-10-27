// 'use restrict'

const CoCreateFloatLabel = {
  className: 'floating-label_field',
  
  init: function() {
    this.initElement()
  },
  
  initElement: function(container) {
    const self = this;
    
    let mainContainer = container || document;
    if (!mainContainer.querySelectorAll) {
      return;
    }
    
    let elements = mainContainer.querySelectorAll('.floating-label');
    
    if (elements.length == 0 && mainContainer.classList && mainContainer.classList.contains('floating-label')) {
      elements = [mainContainer];
    }
    
    elements.forEach(el => {
      self.render(el);
      self.__initEvents(el)
    })
  },

  render: function(node) {
    if (!node.parentNode.classList.contains(this.className)) {
      const placeholder = node.getAttribute('placeholder');
      const wrapper = document.createElement('div');
      node.setAttribute("placeholder", "")
      wrapper.className = this.className;
      this.__wrap(node, wrapper,placeholder);
      this.update(node);
    }
  },
  
  update: function(node, value) {
    if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {
      const parent = node.parentNode;
      if (node.value || value) {
        node.classList.add("text_color");
        parent.classList.add('active');
      } else {
        node.classList.remove("text_color");
        parent.classList.remove('active');
      }
    }
  },
  
  __wrap: function(el, wrapper,placeholder) {
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
    
    wrapper.appendChild(div1);
    wrapper.appendChild(el);
  },
  
  __initEvents: function(node) {
    
    node.addEventListener('focus', (event) => {
      const inputContent = node.value;
      const tag_name =node.tagName.toLowerCase()
      if(inputContent == '' || tag_name == 'select'){
          node.classList.add("text_color");
          parent = node.closest("div"); 
          parent.classList.add("active");
        }
    });
    
    node.addEventListener('blur', (event) => {
      const inputContent = node.value;
      if(inputContent == ''){
        node.classList.remove("text_color");
        parent = node.closest("div"); 
        parent.classList.remove("active");
      }
    });
    
    
    
    node.addEventListener('CoCreateSelect-open', function(e) {
      let parent = this.parentNode;
      parent.classList.add('active');
    })
    
    node.addEventListener('CoCreateSelect-close', function(e) {
      if (!CoCreateSelect) return;
      let value = CoCreateSelect.getValue(this);
      
      if (!value || value.length == 0) this.parentNode.classList.remove('active');
    })
    
    node.addEventListener('selectedValue', function(e) {
      if (!CoCreateSelect) return;
      let value = CoCreateSelect.getValue(this);
      
      if (value && value.length > 0) {
        this.parentNode.classList.add('active');
      } else {
        this.parentNode.classList.remove('active');
      }
    })
  },
  
}

CoCreateFloatLabel.init();
CoCreateInit.register('CoCreateFloatLabel', CoCreateFloatLabel, CoCreateFloatLabel.initElement);
