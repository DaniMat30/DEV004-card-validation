import validator from './validator.js';
//const inputnumber=document.getElementById("userNum");

//aquí se agregan la especificacion que sean 16 numeros
//validator.isValid(inputnumber.value)
// console.log(validator);
//validator.maskify(inputnumber.value)
document.getElementById("submitBtn").addEventListener(
  "click",

  function () {
    const creditCardnumber = document.getElementById("userNum").value
    if (!/\d{13}(~\W[a-zA-Z] )*$/g.test(creditCardnumber) || creditCardnumber.length > 16) {
      alert("vuelve a ingresar los datos de tu tarjeta")
    }
    else {

      const resultado = validator.isValid(creditCardnumber)


      if (resultado === true) {
        alert("VALID CARD");
      } else {
        alert("INVALID CARD");

      }


      const masky = validator.maskify(creditCardnumber)
      document.getElementById("userNum").value = masky


    }
    //  document.getElementById("result").textContent=masky   

  }




);







