function  validContact( contact ) {
    if(typeof contact !== "string"){
        return "Invalid";

    }
    if(contact.length = 11 && contact.startsWith("01") && contact.indexOf(" ") < 0){
        return true;
    }
    
    return false;
}
  
