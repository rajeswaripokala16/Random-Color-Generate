let btn = document.querySelector('#button');

btn.addEventListener('click', function () {
    let randomColor = getRandomColor();
    let h3 = document.querySelector('h3');
    h3.innerText = randomColor;

    let div = document.querySelector('#div');
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


// const generateBtn = document.getElementById('generate-btn');
// const rgbCodeEl = document.getElementById('rgb-code');
// const hexCodeEl = document.getElementById('hex-code');
// const copyBtn = document.getElementById('copy-btn');
// const copyStatus = document.getElementById('copy-status');
// const prevColorEl = document.getElementById('prev-code');

// let prevColorRGB = '';
// let prevColorHEX = '';

// function getRandomColor() {
//     const rgb = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
//     const rgbString = `rgb(${rgb.join(',')})`;
//     const hexString = "#" + rgb.map(x => x.toString(16).padStart(2, '0')).join('');
//     return { rgb: rgbString, hex: hexString, rgbArr: rgb };
// }

// function getContrastColor([r, g, b]) {
   
//     const luminance = (0.299*r + 0.587*g + 0.114*b)/255;
//     return luminance > 0.6 ? '#222' : '#fff';
// }

// function setColor({ rgb, hex, rgbArr }) {
    
//     if (rgbCodeEl.textContent) {
//         prevColorRGB = rgbCodeEl.textContent.replace('RGB: ', '');
//         prevColorHEX = hexCodeEl.textContent.replace('HEX: ', '');
//         prevColorEl.textContent = `${prevColorRGB} | ${prevColorHEX}`;
//     }
//     document.body.style.background = rgb;
//     rgbCodeEl.textContent = `RGB: ${rgb}`;
//     hexCodeEl.textContent = `HEX: ${hex}`;
   
//     const contrast = getContrastColor(rgbArr);
//     rgbCodeEl.style.color = contrast;
//     hexCodeEl.style.color = contrast;
// }

// function copyColor() {
//     const code = `${rgbCodeEl.textContent} | ${hexCodeEl.textContent}`;
//     navigator.clipboard.writeText(code)
//         .then(() => {
//             copyStatus.textContent = 'Copied!';
//             setTimeout(() => copyStatus.textContent = '', 1600);
//         })
//         .catch(() => {
//             copyStatus.textContent = 'Copy failed!';
//         });
// }

// generateBtn.addEventListener('click', () => {
//     const colorObj = getRandomColor();
//     setColor(colorObj);
//     copyStatus.textContent = '';
// });

// copyBtn.addEventListener('click', copyColor);

// window.onload = () => {
//     const colorObj = getRandomColor();
//     setColor(colorObj);
// };

