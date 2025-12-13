function isLearYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true
    }
    else{
        return false;
    }
}

const isLeap = isLearYear(2025);
const isLeap1 = isLearYear(2034);
const isLeap3 = isLearYear(2400);

console.log(isLeap, isLeap1, isLeap3);