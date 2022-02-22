
let calculator = (function() {

    //Somar dois números
    function sum(a, b) {
        return a + b;
    }

    //Subtrair dois números
    function subtract(a, b) {
        return a - b;
    }

    //Multiplicar dois números
    function multiply(a, b) {
        return a * b;
    }

    //Dividir dois números
    function division(a, b) {
        return a / b;
    }

    //Ver a digerença de dois números
    function mod(a, b) {
        return a % b;
    }

    return {
        sum: sum,
        subtract: subtract,
        multiply: multiply,
        division: division,
        mod: mod,
    };

})();

module.exports = calculator;