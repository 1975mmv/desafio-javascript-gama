/* function xpto ( ) {
let n = 0;
return {next:
function ( )
{
if (n < 10) {
n += 2;
return {value:n/2, done:false}}
else {
return {value: -1, done: true}}
}
}
}
console.log(n)
*/
var exemplo = "A";
outro = "A";
function minhaFuncao( ){
var exemplo = "B";
return exemplo;
}
function minhaFuncao2( ){
outro = "B";
return outro;
}
console.log(exemplo);
console.log(minhaFuncao( ));
console.log(outro);
console.log(minhaFuncao2);
console.log(outro);

