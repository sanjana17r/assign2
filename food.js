
var items=["burger","pizza","pasta"];//these are the array of items ordered and served
var table=100;// table number to which they are to be served.

//here let 'a' represent items and 'n' represent table number.
function preparefood(a,n,callback)//function for preparing food
{
    console.log("Preparing food for items: " + items)//prints the items
    console.log("Serving food for items: " + callback(a,n) )
}
function servefood(a,n)//function for serving food
{
return items;
}


preparefood(items,table,servefood);//items and table number is given as parameters
//servefood is the function called after preparefood function ,by the callback function within it.