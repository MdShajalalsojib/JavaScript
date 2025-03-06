
function calculateVAT( price ) {
     if(typeof price !== "number" || price <= 0){
        return "Invalid";
     }
     let vat = (price * 7.5)/100;
     return vat;
}
console.log(calculateVAT('eifjei'));
console.log(calculateVAT(17034));
console.log(calculateVAT(-456));

