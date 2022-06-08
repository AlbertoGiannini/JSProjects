var valores_criptografia1 = 0;
var valores_criptografia2 = 0;
var arr_letras_num2 = 0;
var palavra = 0;
function criptografar() {
    var a = document.getElementById('text').value
    if(a == "") {
        alert("Informe uma palávra")
    }
    else {
        
        var  palavra_recebida = converte(a);
        var metade = palavra_recebida.length / 2 
        var part1 = palavra_recebida.slice(0, metade);
        var part2 = palavra_recebida.slice(metade, palavra_recebida.length);
      
        var junto1 = part1.join('');
        var junto2 = part2.join('');
        
        var pq = 187;
        var key = 7;
        console.log(junto1)
        console.log(junto2)
        var cripto1 = Math.pow(junto1,key) % pq;
        var cripto2 = Math.pow(junto2,key) % pq ;
        

        cripto1 = cripto1.toString();
        cripto2 = cripto2.toString();

        while(cripto1.length < junto1.length) {
            cripto1 = "0"+cripto1;
        }
        while(cripto2.length < junto2.length) {
            cripto2 = "0" + cripto2;
        }
        var resultado_cripto = cripto1.concat(cripto2);
        valores_criptografia1 = parseFloat(cripto1);
        valores_criptografia2 = parseFloat(cripto2);
        console.log(cripto1 + ", "+ cripto2)
        console.log(resultado_cripto);
        var mostra_msg = converte_num(resultado_cripto);
        console.log(mostra_msg);
        document.getElementById('res2').innerHTML = converte(a);
        document.getElementById('res').innerHTML = mostra_msg

       console.log("Primeira parte " + part1, "Segunda parte " + part2);

        //document.getElementById('results') 
       //palavra = mostra_msg;
    }
}

function converte(letras) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codigos = [];
    palavra = letras
    for (var i in letras) {
        codigos.push(alfabeto.indexOf(letras[i].toUpperCase()));
        if(codigos[i] < 10 ){
            codigos[i] = "0"+codigos[i];
        }

    }
    
    return codigos;
}
function converte_num(num) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var arr_letras_num = [];
    var num_num;
    var IJ = 0;
    for(var i = 0; i <= num.length - 2; i++) {
        num_num = num.split('');
        arr_letras_num[IJ] = num_num[i]+""+num_num[i+1];
        if(arr_letras_num[IJ].substring(0,1) == "0")arr_letras_num[IJ] = arr_letras_num[IJ].substring(1);
        IJ++;
        i++;
    }
    var letras = [];
    letras = alfabeto.split('');
    console.log(letras);
    var resultado_cript_letras = [];
    for (var i in arr_letras_num) {
        if(arr_letras_num[i] > 26)arr_letras_num[i] = arr_letras_num[i] % 26;
        resultado_cript_letras.push(letras[arr_letras_num[i]]);
        console.log(arr_letras_num[i]);
    }
    arr_letras_num2 = arr_letras_num;
    return  resultado_cript_letras;
}


function descriptografar() {
    var a = document.getElementById('text').value
    if(a == "") {
        alert("Informe uma palávra")
    }
    else {
        let pq = 187;

        let key = 7;
    
        valores_criptografia1 =  parseFloat(valores_criptografia1);
        valores_criptografia2 =  parseFloat(valores_criptografia2);
    
        var rescripto = document.getElementById('rcripto');
        var res = document.getElementById('text').value;
        var descr = document.getElementById('descr');
        var numdescr = document.getElementById('numdescr')
        var letrdescr = document.getElementById('letrdescr')
        var descripto1 = Math.pow(valores_criptografia1, key) % pq;
        var descripto2 = Math.pow(valores_criptografia2, key) % pq;
    
        console.log(valores_criptografia1, valores_criptografia2)
        console.log(descripto1, descripto2);
        
        numdescr.innerHTML = arr_letras_num2
        letrdescr.innerHTML = palavra
        descr.innerHTML = "Descriptografia";
        //rescripto.innerHTML = res;
    }
}