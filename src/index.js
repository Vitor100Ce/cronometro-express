
const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;
let cronometroGlobal;

app.get('/', (req, res) => {

    let minutosFormat = (minutos < 10? `0${minutos}` : minutos)
    let segundosFormat = (segundos < 10? `0${segundos}`: segundos)

    res.send(`Tempo atual do cronômetro: ${minutosFormat} minutos e ${segundosFormat} segundos`);

});

app.get('/iniciar', (req, res) => {

   let cronometroIniciar = setInterval(()=>{
        segundos++
    },1000)

    if(segundos > 60){
        segundos = 0;
        minutos++;
    }

    cronometroGlobal = cronometroIniciar
    res.send(`Cronômetro iniciado!`);

});

app.get('/pausar', (req, res) => {

    clearInterval(cronometroGlobal)
    res.send(`Cronômetro pausado!`);

});

app.get('/zerar', (req, res) => {

    clearInterval(cronometroGlobal);
    minutos = 0;
    segundos = 0;

    res.send(`Cronômetro zerado!`);

});

app.listen(8000, ()=>{
    console.log('O servidor iniciou na porta 8000')
});