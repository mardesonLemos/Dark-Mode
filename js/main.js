const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element , style) => {window.getComputedStyle(element).getPropertyValue(style);}

const coresIniciais = {
    bg : getStyle(html , "--bg"),
    bgPanel : getStyle(html , "--bgPanel"),
    colorHeadings : getStyle(html , "--colorHeadings"),
    colorText : getStyle(html , "--colorText"),
}

const darkMode = {
    bg : '#333333',
    bgPanel : '#434343',
    colorHeadings : '#4B0082',
    colorText : '#b5b5b5',
}
const transformKeys = key => "--" + key.replace(/([A-Z])/ , "-$1").toLowerCase();


const trocaDeCores = (colors) => {Object.keys(colors).map(key => {html.style.setProperty(transformKeys(key) , colors[key])
 })
    }

checkbox.addEventListener("change" , ({target}) => {target.checked?trocaDeCores(darkMode):trocaDeCores(coresIniciais); })