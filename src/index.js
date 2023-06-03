import observer from '@cocreate/observer';
import './index.css';

const CoCreateFloatingLabel = {
    className: 'floating-label_field',
    initMap: new Map(),

    init: function () {
        let elements = document.querySelectorAll('.floating-label, floating-label');
        this.initElements(elements);
    },

    initElements: function (elements) {
        for (let el of elements)
            this.initElement(el);
    },

    initElement: function (node) {
        if (node.tagName == 'FLOATING-LABEL') {
            node = node.firstElementChild
            if (!node.classList.contains('floating-label'))
                node.classList.add('floating-label');
        }

        if (this.initMap.has(node))
            return false;

        this.initMap.set(node, true);

        this.__initEvents(node);
        if (node.parentNode && !node.parentNode.classList.contains(this.className)) {
            this.__wrap(node);
            this.update(node);
        }
    },

    update: function (node, value) {
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

    __wrap: function (el) {
        const placeholder = el.getAttribute('placeholder');
        let wrapper = el.parentNode;
        if (wrapper.tagName != 'FLOATING-LABEL') {
            wrapper = document.createElement('div');
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);
        }
        // el.setAttribute("placeholder", " ");

        const outline = document.createElement('div');
        outline.className = "floating-label_outline";
        const leading = document.createElement('div');
        leading.className = "floating-label_leading";
        const notch = document.createElement('div');
        notch.className = "floating-label_notch";
        const trailing = document.createElement('div');
        trailing.className = "floating-label_trailing";
        const label = document.createElement('label');
        label.className = "floating-label_label";
        label.innerHTML = placeholder;

        outline.appendChild(leading);
        outline.appendChild(notch);
        outline.appendChild(trailing);
        notch.appendChild(label);

        wrapper.appendChild(outline);
        wrapper.className = this.className;
    },

    __initEvents: function (node) {

        node.addEventListener('focus', () => {
            node.classList.add("active");
        });

        node.addEventListener('blur', () => {
            const inputContent = node.value;
            const active = node.hasAttribute('active');
            if (inputContent == '' && !active) {
                node.classList.remove("active");
            }
        });

        node.addEventListener('change', () => {
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
