async function a()
{
    await b();
    setTimeout(()=>
    {    
        console.log("ABC");
    },1000);
}
async function b()
{
    console.log("BCD");
}
async function c()
{
    console.log("CDE");
}
a()
b()
c()


//callback
function formvalidation(fVC)
{
    setTimeout(() =>
    {
        console.log("Form Validation called");
        fVC();
    },2000);
}
function formvalidationCompleted()
{
    console.log("Form Validation completed");
}
formvalidation(formvalidationCompleted);