var varible = 7;
const suma = (n1,  n2) => {
	let resultado = n1 + n2;
    console.log(varible);
    varible = 77;
    return {resultado,n1};
}


let {resultado} = suma(5, 6);
let {a, b, c} = {'a':3,'c':'valor'};

console.log(suma(2, 4));

console.log("Este es el RESULTADO: ",resultado);
console.log(a);
console.log(b);
console.log(c);



console.log(varible);

let json = {
    'nombre1' : '', 
    'nombre2' : ''
}

let array = [];
let array1 = new Array();
array.push(3);
array.push("Diego");
array.push("Sandra");
array.push(true);
array.push(4.9);
console.log("============");
console.log(array.find((valor) => valor == 53));
console.log(array.indexOf("Diego"));
console.log("============");


let mistring = `El resutlado de la varible resultado es: ${resultado} y la a es igual a ${a}`;
let mistring1 = `carlos salio un día............................................................
                sdfgsdfgs
            saeefakldfkasdf
            asdfasdfasdf                                                           
            asdfasdfasdfas -------------------------------------------------------
            asdfasdfasdfasdf`;
console.log(mistring1);