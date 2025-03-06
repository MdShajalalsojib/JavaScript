function  willSuccess( marks ) {
    if(!Array.isArray(marks)){
        return "Invalid";
    }

    let pass = 0;
    let fail = 0;
    for(let mark of marks){
        if(mark >= 50){
            pass++;
        }
        else{
            fail++;
        }
    }
    return pass > fail;

}
 
