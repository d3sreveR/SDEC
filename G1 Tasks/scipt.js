// Task #7 Is the Word Singular or Plural?

function word(a){
    if (a.endsWith("s")){
        return true;
    }else {
        return false;
    }
}

console.log(word("changes"));
console.log(word("change"));
console.log(word("dudes"));
console.log(word("magic"));

//==========================



// Task #8 Case Insensitive Comparison

function twoWords(word1, word2) {
        if (word1.toLowerCase()===word2.toLowerCase()){
            return true;
        } else {
            return false;
        }
}

console.log(twoWords("hello", "hELLo"))
console.log(twoWords("motive", "emotive"))
console.log(twoWords("venom", "VENOM"))
console.log(twoWords("mask", "mAskinG"))

//=============================


// Task #9 Convert Number to Corresponding Month Name

function number(n){

    switch (n){
        case 1:
        n="January"
        break;

        case 2:
        n="February"
        break;

        case 3:
        n="March"
        break;

        case 4:
        n="April"
        break;

        case 5:
        n="May"
        break;

        case 6:
        n="June"
        break;

        case 7:
        n="July"
        break;

        case 8:
        n="August"
        break;

        case 9:
        n="September"
        break;

        case 10:
        n="October"
        break;

        case 11:
        n="November"
        break;

        case 12:
        n="December"
        break;

        default:
        n="Month with that number does not exists"
    }
    return n;
}
console.log(number(3))
console.log(number(12))
console.log(number(6))
console.log(number(15))


//=========================================

// Tasl #10 Truthy or Falsy?

function godDamnThisTask(object){
    if (object===false || object===null || object===undefined || object===0 || object===NaN || object==="" || object==='' || object===``){
        return "0";
    } else {
        return "1";
    }
}

console.log(godDamnThisTask(0))
console.log(godDamnThisTask(false))
console.log(godDamnThisTask(""))
console.log(godDamnThisTask("false"))
console.log(godDamnThisTask(!NaN))

//==========================================
