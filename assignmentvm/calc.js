
//function for displaying values
var x,y;
function display(val)
{
document.getElementById("calc").value+=val
 }
//function for evaluation
function solve()
{
 x = document.getElementById("calc").value
 y = eval(x)
document.getElementById("calc").value = y
}

function clr()
{
document.getElementById("calc").value = ""
}
