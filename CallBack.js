function ghotok(patri,name){
    patri(name)
}

const patri = function(name){
    console.log("Okay patri 1 paici",name)
}
const patri2 = function(name){
    console.log("Okay patri 2 paici",name)
}
const patri3 = function(name){
    console.log("Okay patri 3 paici",name)
}

ghotok(patri, "hero alom");
ghotok(patr2,"masud");