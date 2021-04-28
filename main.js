var lomake = document.forms['nimiInput']
var kaverilista = document.querySelector('#lista')
lomake.addEventListener('submit', autoRun)
console.log('Anna ensimmäinen nimi')

function autoRun(event) {
    event.preventDefault()
    var nimi = document.querySelector('#input').value
    console.log(nimi)
    lisaalistaan(nimi)

}


function lisaalistaan(nimi) {

    if (kaverilista.childNodes.length < 11) {
        var li = document.createElement("LI")
        var text = document.createTextNode(nimi)
        li.appendChild(text)
        kaverilista.appendChild(li)
        if (kaverilista.childNodes.length == 11) {
            console.log('kiitos! päivitä sivu tyhjentääksesi lista')
        } else if (kaverilista.childNodes.length < 11) {
            console.log('Anna ' + kaverilista.childNodes.length + ' nimi')
        }
    } else {
        alert('Lista täynnä! päivitä sivu')
    }
}