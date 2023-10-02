const input = document.querySelector('.inputName')

const button = document.querySelector(".botao")

const tempoText = document.querySelector(".tempo")

const graus = document.querySelector(".graus")

const icone = document.querySelector(".icone")

const descricao = document.querySelector(".nublado")

const umidade = document.querySelector(".umidade")

const key = "249e0d0f62d1c034a2b7615faf95ec1e"



function dadosTela(dados) {
    tempoText.innerHTML = `Tempo em ${dados.name}`;

    graus.innerHTML = Math.floor(dados.main.temp) + "°C";

    descricao.innerHTML = dados.weather[0].description

    umidade.innerHTML = `Umidade: ${dados.main.humidity}%`  

    icone.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}



 async function buscarCidade(cidade) {
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

   dadosTela(dados)
}





button.addEventListener('click', buttonClick)


function buttonClick() {
    cidade = input.value 

    input.value = ""

    buscarCidade(cidade)

}