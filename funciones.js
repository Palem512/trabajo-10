function areaCirculo(radio) {
  return Math.PI * radio * radio;
}
console.log(areaCirculo(5));

function sumarArray(arr) {
  let suma = 0;
  for (const n of arr) suma += n;
  return suma;
}
console.log(sumarArray([1,2,3,4]));
