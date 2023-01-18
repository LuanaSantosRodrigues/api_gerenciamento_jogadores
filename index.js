const express = require("express");
const connection = require("./db/conn");
const app = express();
const PORT = 8080;

app.set('view engene','ejs')



connection.authenticate().then(
    () =>{

    }
).catch(
    (erro)=>{
        console.log(erro)
    }
)

 
app.get("/", (req, res) => {
    res.render('Bem Vindo ao sistema de sorteio');
})
 
app.listen(PORT, () => {
    console.log(`rodando http://localhost:${PORT}`);
})













//const participantes = ['João', 'Maria', 'Renan', 'Luana', 'Ellen','Elisa'];
//const sorteado = Math.floor(Math.random() * participantes.length);
//console.log(`O sorteado foi: ${participantes[sorteado]}`);
