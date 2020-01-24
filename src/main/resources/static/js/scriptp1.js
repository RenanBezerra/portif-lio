function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12 ){
    //Bom dia
    img.src = '/images/imgp1/imgproject1/fotoManha.jpg'
    document.body.style.background ='#F9E6B8'
}else if(hora >= 12 && hora <18){
    //Boa tarde
    img.src = '/images/imgp1/imgproject1/fotoTarde.jpg'
    document.body.style.background ='#F1C6A2'
}else{
    //Boa noite
    img.src = '/images/imgp1/imgproject1/fotoNoite.jpg'
    document.body.style.background ='#4E5256'
}
}
