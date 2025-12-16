// Option ---------02
function mekeRead (){
    document.body.style.backgroundColor = 'red';

};
function mekeGreen(){
    document.body.style.backgroundColor = 'green';
}
// Option-----------03

const btnMake = document.getElementById('btn_make');
  btnMake.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
  }

//   Option-------------04
document.getElementById("btn").addEventListener('click',
    function make(){
       document.getElementById("div1").innerHTML = `
           <div>
             <h1>Sojib</h1>
             
           <div>
       `
    }
)

