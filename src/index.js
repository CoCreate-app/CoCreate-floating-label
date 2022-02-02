// 'use restrict'

import observer from '@cocreate/observer';
import './index.css';

const CoCreateFloatingLabel = {
    className: 'floating-label_field',
    initMap: new Map(),

    init: function() {
        let elements = document.querySelectorAll('.floating-label');
        this.initElements(elements);
    },

    initElements: function(elements) {
        for (let el of elements)
            this.initElement(el);
    },

    initElement: function(node) {
        if (this.initMap.has(node))
            return false;

        this.initMap.set(node, true);

        this.__initEvents(node);
        if (node.parentNode && !node.parentNode.classList.contains(this.className)) {
            this.__wrap(node);
            this.update(node);
        }
    },

    update: function(node, value) {
        if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {
            const active = node.hasAttribute('active');
            if (node.value || value || active) {
                node.classList.add('active');
            }
            else {
                node.classList.remove('active');
            }
        }
    },

    __wrap: function(el) {
        const placeholder = el.getAttribute('placeholder');
        let wrapper = el.parentNode;
        if (wrapper.tagName != 'FLOATING-LABEL'){
            wrapper = document.createElement('div');
            el.parentNode.insertBefore(wrapper, el);
        }
        // el.setAttribute("placeholder", " ");
        wrapper.className = this.className;
        
        var outline = document.createElement('div');
        outline.className = "floating-label_outline";
        var leading = document.createElement('div');
        leading.className = "floating-label_leading";
        var notch = document.createElement('div');
        notch.className = "floating-label_notch";
        var label = document.createElement('label');
        label.className = "floating-label_label";
        label.innerHTML = placeholder;
        var trailing = document.createElement('div');
        trailing.className = "floating-label_trailing";
        outline.appendChild(leading);
        notch.appendChild(label);
        outline.appendChild(notch);
        outline.appendChild(trailing);
        wrapper.appendChild(el);
        wrapper.appendChild(outline);

    },

    __initEvents: function(node) {

        node.addEventListener('focus', (event) => {
            node.classList.add("active");
        });

        node.addEventListener('blur', (event) => {
            const inputContent = node.value;
            const active = node.hasAttribute('active');
            if (inputContent == '' && !active) {
                node.classList.remove("active");
            }
        });

        node.addEventListener('change', (event) => {
            const inputContent = node.value;
            const active = node.hasAttribute('active');
            if (inputContent && !active) {
                node.classList.add("active");
            }
        });

    },

};

observer.init({
    name: 'CoCreateFloatingLabelInit',
    observe: ['childList'],
    target: '.floating-label',
    callback: mutation => {
        CoCreateFloatingLabel.initElements(mutation.addedNodes);
    }
});

observer.init({
    name: 'CoCreateFloatingLabelInit',
    observe: ['attributes'],
	attributeName: ['placeholder'],
    target: '.floating-label',
    callback: mutation => {
        let value = mutation.target.getAttribute('placeholder');
        let floatinglabel = mutation.target.parentElement;
        let label = floatinglabel.querySelector('.floating-label_label');
        label.innerText = value;
    }
});

CoCreateFloatingLabel.init();

export default CoCreateFloatingLabel;
