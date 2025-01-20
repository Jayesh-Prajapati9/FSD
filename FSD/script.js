// function f1(){
//     pat=/abc/i;  // i for ignore the uperrcase or lowercase
//     u = document.getElementById("t1").value;
//     if(pat.test(u)){
//         console.log("True")
//     }else{
//         console.log("False")
//     }
// }

// [abc] => Find any char between barackets
// [^abc] => Find any char not between the barackets
// [0-9] => Digit between 0 to 9
// [^0-9] => Should not contain any Number

// x|y => indicates OR function

// pat=/A*/ => zero or more occurence means A should be present or not
// pat=/^A/ => Starts with A 
// pat=/A$/ => Ends with A
// pat=/\d/ => Should Contain any number[0-9]
// pat=/\D/ => Should not contain any number[0-9]
// pat=/\w/ => Should only contain [A-Z][a-z][0-9]
// pat=/\W/ => Should not only contain [A-Z][a-z][0-9] it means it should contain anuy special char

function f1() {
    pat =/^[A-Za-z]+$/;
    u = document.getElementById("t1").value;

    if (u.length < 8) {
        console.log("Password Length Less than 8")

    } else {

        if (pat.test(u)) {
            console.log("Password True")
        } else {
            console.log("Password False")
        }
    }
}


// pat = \^/d+$\; It will Consider Only Number
// pat = /^/d{10}$/ It will have only 10 numbers
// pat = /^[A-Za-z]+$/  It will have only alphabets

