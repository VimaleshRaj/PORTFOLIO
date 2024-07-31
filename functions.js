// 1.without arguments and without return type
function evenodd()
{
    var a= 1001;
    if(a%2==0)
    {
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
}
}
evenodd()
// 2.without arguments and with return type
function evenodd()
{
    var a= 1001;
    if(a%2==0)
    {
    return("Number is even");
    }
    else
    {
        return("Number is odd");
        }
        }
        console.log(evenodd());
// 3.with arguments and without return type
function evenodd(a)
{
    if(a%2==0)
        {
            console.log("Number is even");
        }
        else
        {
            console.log("Number is odd");
        }
    }
    evenodd(108);
// 4.with arguments and with return type
function evenodd(a)
{
    if(a%2==0)
        {
            return("Number is even");
        }
        else
        {
            return("Number is odd");
        }
}
console.log(evenodd(109));