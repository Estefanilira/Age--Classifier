function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/baby-masc.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-masc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/senhor.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/baby-fem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-fem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/senhora.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

function reiniciar() {

    var anoCliente = document.querySelector('#txtano')
    var res = document.getElementById('res')

    anoCliente.value = ''
    anoCliente.focus()
    res.innerHTML = '<p>Preencha os dados acima para ver o resultado.</p>'

}