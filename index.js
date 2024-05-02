const express = require('express');
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const app = express(); 
const port = process.env.PORT || 3003;
const url = "https://randomuser.me/api";
const persona = [];
moment.locale('es');



app.use('/usuarios',(req, res) => {
  //funcion que captura datos desde random user api, con axios
  axios.get(url).then((data) => {
    const usuario = data.data;
    const personaRandom = {
      id: uuidv4().slice(0, 8), // se asigna id usando uuid v4, considerando los primeros 8 caracteres
      gender: usuario.results[0].gender,
      first: usuario.results[0].name.first,
      last: usuario.results[0].name.last,
      timeStamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    }; // se agrega la fecha usando moment y formateado para ser guardada en el array
    persona.push(personaRandom); //guarda la persona en el array
  });
    console.log( filtered_array = _.filter(persona, ["gender", "male"]));
    
});



app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);  
})