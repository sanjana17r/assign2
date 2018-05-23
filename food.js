var items=["burger","pizza","pasta"];//these are the array of items ordered and served
var table=[1,2,3];//array of table numbers to which they are to be served.

function preparefood(a,n,callback)//function for preparing food
{
    console.log("preparing food for items: " + items)//prints the items
    console.log("table: " + table)//prints the table numbers
    callback(a,n)//calls servefood function within this fuction.
}
function servefood(a,n)//function for serving food
{
console.log("serving food for items: " + items)//prints the items
console.log("table: " + table)//prints the table numbers
}


preparefood(items,table,servefood);//items and table number is given as parameters
//servefood is the function called after preparefood function ,by the callback function within it.