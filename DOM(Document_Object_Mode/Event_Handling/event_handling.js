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
document.getElementById("btn").addEventListener('dblclick',
    function make(){
       document.getElementById("div1").innerHTML = `
           <div>
             <h1>Sojib</h1>
             
           <div>
       `
    }
)
document.getElementById("btn_login").addEventListener('click', function(){
    const BtnLogin = document.getElementById("no_login");
    BtnLogin.innerText = 'User login successfully';
});

//    set event listener 
   document.getElementById('btn_up')
       .addEventListener('click',function(){

           console.log('update button clicked');
            // get the text from the input field 
            const nameInput = document.getElementById('input-name');
            const name = nameInput. value;
            console.log('name',name);

            // set the name 
            const nameP = document.getElementById('name');
            nameP.innerText = name;
       });


    //    step--1: set an event handler to the button 
         document.getElementById('btn_Commit_Post')
         .addEventListener('click',function(){


            // step--2: get the text written in teh comment text area 
             const commentTextBox = document.getElementById('Commit_Text');

             const newComment = commentTextBox.value;

            //  step--3: get the parent node where to pubbest commit 
              
            const commentContainer = document.getElementById('Commit_box')
            console.log(commentContainer);

            // step--4: create a comment p and set the this.innerText 

            const commentElement = document.createElement('p');
            commentElement.classList.add('commit');
            commentElement.innerText = newComment;

            // step--5: append the new p tag to the parent node 

            commentContainer.appendChild(commentElement);

            // step--6: clean the text area 
            
            commentTextBox.value = '';

         });



        //  Githud like Delete Confirmation 

        document.getElementById('input_delete')
        .addEventListener('keyup', function(event){
            const text = event.target.value;
            const btnDelete = document.getElementById('btn_delet');
            if(text === 'delete'){
                console.log('delete typed')
                btnDelete.removeAttribute('disabled');
            }
            else{
                console.log('something else');
                btnDelete.setAttribute('disabled',true);
            }
        })

