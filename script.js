function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        
        var genero = ``

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <10 ){
                img.setAttribute('src','imagens/bebeo.png')
            } else if (idade < 22){
                img.setAttribute('src','imagens/garoto.png')
            } else if (idade < 50){
                img.setAttribute('src','imagens/homem.png')
            } else {
                img.setAttribute('src','imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <10 ){
                img.setAttribute('src','imagens/bebea.png')
            } else if (idade < 22){
                img.setAttribute('src','imagens/garota.png')
            } else if (idade < 50){
                img.setAttribute('src','imagens/mulher.png')
            } else {
                img.setAttribute('src','imagens/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}