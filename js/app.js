// Var
var plus, minus, count;
var input = 0;
var num; 


//cached elements
var plus = document.getElementById('plus');
var minus = document.getElementById('minus')
var input = document.getElementsByName('input')


//event listeners
plus.addEventListener('click', plus);
minus.addEventListener('click', minus);

num = input.innerHTML="";





//functions
function plus() {
    return input += num;
}
function minus() {
    return input -= num;
};





