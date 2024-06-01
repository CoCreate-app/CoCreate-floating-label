import observer from '@cocreate/observer';
import './index.css';

const CoCreateFloatingLabel = {
    className: 'floating-label_field',
    initMap: new Map(),

    init: function (elements) {
        if (!elements)
            elements = document.querySelectorAll('.floating-label, floating-label');
        else if (!Array.isArray(elements))
            elements = [elements]

        for (let node of elements) {
            if (node.tagName == 'FLOATING-LABEL') {
                node = node.firstElementChild
                if (!node.classList.contains('floating-label'))
                    node.classList.add('floating-label');
            }

            if (this.initMap.has(node))
                continue;

            this.initMap.set(node, true);

            this.__initEvents(node);
            if (node.parentNode && !node.parentNode.classList.contains(this.className)) {
                this.__wrap(node);
                this.update(node);
            }

        }
    },

    update: function (node, value) {
        if (node.classList.contains('floating-label') && node.parentNode.classList.contains('floating-label_field')) {
            const active = node.hasAttribute('active');
            if (node.value || node.innerHTML || value || active) {
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
        wrapper.classList.add(this.className);

    },

    __initEvents: function (node) {

        node.addEventListener('focus', () => {
            node.classList.add("active");
        });

        node.addEventListener('blur', () => {
            const active = node.hasAttribute('active');
            if (node.value == '' && !active) {
                node.classList.remove("active");
            }
        });

        node.addEventListener('change', () => {
            const active = node.hasAttribute('active');
            if (node.value && !active) {
                node.classList.add("active");
            }
        });

        if (node.hasAttribute('contenteditable')) {
            node.addEventListener('input', () => {
                const active = node.hasAttribute('active');
                if (node.innerHTML && !active) {
                    node.classList.add("active");
                }
            });
        }

    },

};

observer.init({
    name: 'CoCreateFloatingLabelInit',
    observe: ['addedNodes'],
    target: 'floating-label, .floating-label',
    callback: mutation => {
        CoCreateFloatingLabel.init(mutation.target);
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
