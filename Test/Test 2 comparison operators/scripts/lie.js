let folse = "не верно";
let a =0;
function lie() {
    document.getElementById("==").innerHTML = folse;
}
function lie1() {
    document.getElementById("!=").innerHTML = folse;
}
function lie2() {
    document.getElementById("===").innerHTML = folse;
}
function lie3() {
    document.getElementById("!==").innerHTML = folse;
}
function lie4() {
    document.getElementById("null").innerHTML = folse;
}
function lie5() {
    document.getElementById("undefined").innerHTML = folse;
}
function lie6() {
    document.getElementById("NaN").innerHTML = folse;
}
function lie7() {
    document.getElementById("Boolean").innerHTML = folse;
}




function yes() {
    document.getElementById("point").innerHTML = a += 1;
    console.log(a);
}
function not() {
    document.getElementById("point").innerHTML = a -= 1;
    console.log(a);
}