function leftPad(number) {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number;
}
//el operador bitwise o doble negación binaria (~~) … es una forma super interesante y geek de convertir a enteros … y mucho más eficiente!
function formatTime(secs) {
    const minutes = ~~(secs/60)
    const seconds = ~~(secs %60)
    return `${minutes}:${leftPad(seconds.toString())}` 
}

export default formatTime;