function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca.png')
            }else if (idade < 21) {
                // Jovem
            }else if (idade < 50) {
                // Adulto
            }else {
                // Idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
            }else if (idade < 21) {
                // Jovem
            }else if (idade < 50) {
                // Adulto
            }else {
                // Idoso
            }
        }  
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)    
    }
}