

 var nimiLista = []
 var kaverilista = document.getElementById('lista')
 autoRun();
 nimiLista.sort();
 lisaaListaanv2();

 function autoRun() {
     for (var i = 0; i < 10; i++) {
         var nimi = prompt('Anna ' + [i + 1] + ' kaverisi nimi')
         if (nimi.length > 0) {
             nimiLista.push(nimi)
         } else {
             alert('Kenttä oli tyhjä!, anna nimi')
             i = i - 1
         }
     }
 }

 function lisaaListaanv2() {
     for (i = 0; i < nimiLista.length; i++) {
         var li = document.createElement('LI')
         var content = document.createTextNode(nimiLista[i])
         li.appendChild(content)
         kaverilista.appendChild(li)
     }
 }