const validator = {
  isValid: function (creditCardnumber) {
    //funciones de algoritmo de luhn, que returna true o false; condicionales
    const ccNumSplit = creditCardnumber.split("");
    let sum = 0;
    const singleNums = [];
    let doubleNums = [];
    let finalArry = undefined;





    //"===" The strict equality are operadors check and they are comparasion operators
    //Cards with 16 digit long
    for (let i = ccNumSplit.length - 1; i >= 0; i--) {
      //"FOR" Loops are handy, if you want to run the same code over and over again, each time with a different value. 
      if (i % 2 === 0) {
        singleNums.push(ccNumSplit[i]);
      } else {
        doubleNums.push((ccNumSplit[i] * 2).toString());
      }
    }


    //joining makes an array to a string and I split them up again
    //so that every number is a single digit and convert back to array

    doubleNums = doubleNums.join("").split("");
    finalArry = doubleNums.concat(singleNums);

    for (let j = 0; j < finalArry.length; j++) {
      sum += parseInt(finalArry[j]);
    }



    if (sum % 10 === 0) {
      return true;
    } else {
      return false;

    }


    //the console log is for you, so you can see the sum, all sums that are
    //divisible by 10 should be good.  Just open up your console to view.
  },

  maskify: function (creditCardNumber) {

    const longitudCcn = creditCardNumber.length; //1.- Obtener la longitud de "creditCardNumber"

    if (longitudCcn > 4) { //2.- Si la longitud de "creditCardNumber" es mayor que 4, seguir adelante; de lo contrario, devolver "creditCardNumber" sin cambios

      let maskedNumber = ""; //3.- Definir una variable llamada "maskedNumber" y establecerla en una cadena vacía

      for (let i = 0; i < longitudCcn - 4; i++) {
        maskedNumber += "#";
      } //4.- Iterar sobre los primeros dígitos de "creditCardNumber", y para cada dígito, agregar un carácter "#" a "maskedNumber"

      maskedNumber += creditCardNumber.slice(-4); //5.- Obtener los últimos 4 dígitos de "creditCardNumber" y agregarlos a "maskedNumber"


      return maskedNumber; //6 Devolver "maskedNumber"
    }

    else {
      return creditCardNumber; //7 Si la longitud de "creditCardNumber" es menor o igual a 4, devolver "creditCardNumber" sin cambios
    }
  }
};

export default validator;






