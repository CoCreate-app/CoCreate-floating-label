'use restrict'
function wrap(el, wrapper,placeholder) {
    el.parentNode.insertBefore(wrapper, el);
    var div1 = document.createElement('div');
        div1.className = "floating-label_outline";
    var div2 = document.createElement('div');
        div2.className = "floating-label_leading";
    var div3 = document.createElement('div');
        div3.className = "floating-label_notch";
    var label = document.createElement('label');
        label.className = "floating-label_label";
        label.innerHTML=placeholder;
    var div4 = document.createElement('div');
        div4.className = "floating-label_trailing";
    div1.appendChild(div2);
    div3.appendChild(label);
    div1.appendChild(div3);
    div1.appendChild(div4);
    
    wrapper.appendChild(div1);
    wrapper.appendChild(el);
}

function initFloatLabelEle(node) {
  
  if (!node.parentNode.classList.contains('floating-label_field')) {
    var placeholder = node.getAttribute('placeholder');
    var wrapper = document.createElement('div');
    node.setAttribute("placeholder", "")
    wrapper.className = "floating-label_field";
    wrap(node, wrapper,placeholder);  
    
    updateFloatLabel(node);
  }
  
  node.addEventListener('focus', (event) => {
    var inputContent = node.value;
    var tag_name =node.tagName.toLowerCase()
    if(inputContent == '' || tag_name == 'select'){
        node.classList.add("text_color");
        parent = node.closest("div"); 
        parent.classList.add("active");
      }
  });
  
  node.addEventListener('blur', (event) => {
    var inputContent = node.value;
      if(inputContent == ''){
        node.classList.remove("text_color");
        parent = node.closest("div"); 
        parent.classList.remove("active");
      }
  });
  
  /*Select2 events With Floating labels*/ 

  // var select2Class = "select2documents";
  // var select2options = "select2options";
  // var optionSelect2Class = "select2getoptions";
  
  // if (node.classList.contains(select2Class) || node.classList.contains(select2options) || node.classList.contains(optionSelect2Class)) {
  //   $(node).on('select2:close', function (e) {
  //     console.log('event');
  //   //node.addEventListener("select2:close", function (e) {
  //     var value = $(this).val()
  //     var father = $(this).parents('.floating-label_field')
  //     if(value == ''){
  //       father.removeClass('active');
  //     }
  //   });
  //   $(node).on('select2:open', function (e) {
  //   //node.addEventListener("select2:open", function (e) {
  //     var father = $(this).parents('.floating-label_field')
  //     if(!father.hasClass('active'))
  //       father.addClass('active');
  //   });
  // }
  
  
  ///floating label for select--field
  
  //if (node.classList.contains('select--field')) {
  if (typeof node.tagName != 'undefined' && node.tagName.toLowerCase() == 'cocreate-select'){
    node.addEventListener('open', function(e) {
      let parent = this.parentNode;
      parent.classList.add('active');
    })
    
    node.addEventListener('close', function(e) {
      let value = getSelectValue(this);
      
      if (!value || value.length == 0) this.parentNode.classList.remove('active');
    })
    
    node.addEventListener('selectedValue', function(e) {
      let value = getSelectValue(this);
      
      if (value && value.length > 0) {
        this.parentNode.classList.add('active');
      } else {
        this.parentNode.classList.remove('active');
      }
    })
  }
  
}


function updateFloatLabel(node, value) {
  if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {
    
    if (node.value) {
      node.classList.add("text_color");
      var parent = node.parentNode;
      parent.classList.add('active');
    } else if (value) {
      node.classList.add("text_color");
      var parent = node.parentNode;
      parent.classList.add('active');
    } else {
      node.classList.remove("text_color");
      var parent = node.parentNode;
      parent.classList.remove('active');
    }
  }
}

function setValue(id,value){
	var node = document.getElementById(id)
	node.value = value;
	updateFloatLabel(node);
	var event = new Event('input');
	node.dispatchEvent(event);
}

var nodes = document.querySelectorAll('.floating-label');
for (var i=0; i < nodes.length; i++) {
  initFloatLabelEle(nodes[i]);
}

function initFloatingLabel(container) {
  let mainContainer = container || document;
  if (!mainContainer.querySelectorAll) {
    return;
  }
  let elements = mainContainer.querySelectorAll('.floating-label');
  
  if (elements.length == 0 && mainContainer.classList.contains('floating-label')) {
    elements = [mainContainer];
  }
  
  elements.forEach(el => {
    // console.log(" Init FloatingLabel ",el)
    initFloatLabelEle(el);
  })
}

CoCreateInit.register('CoCreateFloatLabel', window, initFloatingLabel);

// CoCreateInit.register_old('.floating-label',  initFloatLabelEle);

// CoCreateObserver.register('.floating-label',initFloatLabelEle);

