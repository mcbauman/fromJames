// Add answers here 
function hasDoubleVowels(string){
    let array=["aa","ee","ii","oo","uu"];
    for (i=0;i<array.length;i++)
    if (string.toLowerCase().includes(array[i])){
        return string
    };
    return "The input has no double vowels"
}



// function hasDoubleVowels(str){
//     const strCase = str.toLowerCase()
//    if(strCase.includes("aa")||strCase.includes("ee")||strCase.includes("ii")||strCase.includes("oo")||strCase.includes("uu")){
//        return str
//    }
//    else{ return "The input has no double vowels"}

function isMultipleOfNine(inter){
    return inter%9==0;
}

function polygonType(...input){
    if (input.length==3&&input[0]==input[1]&&input[1]==input[2]){
        return "equilateral triangle"
    }else if(input.length==3){
        return "triangle"
    }else if(input.length==4&&input[0]==input[1]&&input[1]==input[2]&&input[2]==input[3]){
        return "square"
    }else if(input.length==4){
        "quadrilateral"
    }else if(input.length==5){
        if (input[0]==input[1]&&input[1]==input[2]&&input[2]==input[3]&&input[3]==input[4]){
            return "regular pentagon"
        }else {
            return "pentagon"
        }
    }else if(input.length==6&&input[0]==input[1]&&input[1]==input[2]&&input[2]==input[3]&&input[3]==input[4]&&input[4]==input[5]){
        return "regular hexagon"
    }else if(input.lenght==6){
        return "hexagon"
    }else{
        return "unexpected number of sides"
    }
}
function rockAndRoll(emojey){
    if(emojey=="🎸"){
        return "rock"
    } else {
        return "roll"
    }
}
// const rockAndRoll = emojey=>emojey==="🎸"?"rock":"roll";

function powerOutput(){
   let str =[];
   for(i=1;i<=6;i++){
       str.push([i]**[i])
   } 
   return str.join(" ")
}
// function secretSanta(string){
//     return string.match("ho")
// }
function secretSanta(string){
    let count=0;
   for(i=0;i<string.length;i++){
       if (string.toLowerCase()[i]=="h"&&string.toLowerCase()[i+1]=="o"){
        count++
       }
   } 
   return count
}
// let hoCount=(string.split("ho").lenth)

// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {hasDoubleVowels, isMultipleOfNine, polygonType, rockAndRoll, powerOutput, secretSanta};
