var btn = document.querySelector('button')
var code = document.querySelector('#code')
var container = document.querySelector('.container')


const randomColor = () => {
    return `#${Math.random().toString(16).substr(-6)}`
}

btn.onclick = () => {
    var color = randomColor();
    document.body.style.backgroundColor = color;
    code.innerHTML = color
    btn.style.border = `2px solid ${randomColor()}`
}

