function contar(){
    var ini = document.getElementById('txtn')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
     
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        window.alert('[erro] escreva um numero valido')
    }else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        res.innerHTML = 'Contando: <br>'
        if (p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        
        
        if (i < f) {//Contagem crescente
            for(let c = i; c <= f; c += p ){
                res.innerHTML += `  ${c} \u{1f449}`
            }
        } else {//Contagem decrescente
            for(let c = i; c >= f; c -= p ) {
                res.innerHTML += `  ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }

}