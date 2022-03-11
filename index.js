function conversor(){
    var selectInicial = document.getElementById('inicialTemp')
	var inicialTemp = selectInicial.options[selectInicial.selectedIndex].value
    var selectFinal = document.getElementById('finalTemp')
	var finalTemp = selectFinal.options[selectFinal.selectedIndex].value
    let number = document.getElementById('number').value
    console.log(number)
    if(inicialTemp == "Fahrenheit"){
        if(finalTemp == "Celsius"){
            let resultado = (number - 32) * 5 / 9
            if(resultado%Math.round(resultado)){
                resultado = resultado.toFixed(2)
            }
            return document.getElementById("result").innerHTML =  resultado + "ºC"
        } else if(inicialTemp = "Kelvin"){
            let resultado = (number - 32) * 5 / 9
            if(resultado%Math.round(resultado)){
                resultado = resultado.toFixed(2)
            }
            return document.getElementById("result").innerHTML =  resultado + "K"
        }
    } else if(inicialTemp == "Celsius"){
        if(finalTemp == "Fahrenheit"){
            let resultado = (number * 9 / 5) + 32
            if(resultado%Math.round(resultado)){
                resultado = resultado.toFixed(2)
            }
            return document.getElementById("result").innerHTML =  resultado + "ºF"
        } else if(inicialTemp = "Kelvin"){
            let resultado = (number) + 273.15
            if(resultado%Math.round(resultado)){
                resultado = resultado.toFixed(2)
            }
            return document.getElementById("result").innerHTML =  resultado + "K"
        }
    } else if(inicialTemp == "Kelvin"){
        if(finalTemp == "Celsius"){
            let resultado = (number) - 273.15 
            if(resultado%Math.round(resultado)){
                resultado = resultado.toFixed(2)
            }
            return document.getElementById("result").innerHTML =  resultado + "ºC"
        } else if(finalTemp == "Fahrenheit"){
            let resultado = ((number - 273.15) * 9 / 5) + 32 

            if(resultado%Math.round(resultado)){
                resultado = resultado.toFixed(2)
            }
            return document.getElementById("result").innerHTML =  resultado + "ºF"
        }
    }

}