var email="info@ramp.in"
var pwd="123456"
var usertypingemail="info@ramp.in"
var usertypingpwd="123456"
if(usertypingemail==email)
{
    if(usertypingpwd==pwd)
    {
        console.log("Login Successfully");
    }
    else
    {
        console.log("Invalid password");
    }
}

//for in loop
arr=[10,20,"hello",true]
for(i in arr)
{
    console.log(i);
}


//for of loop
arr=[10,20,"hello",true]
for(i of arr)
{
console.log(i);
}


//for Each loop
arr=[10,20,"hello",true]
arr.forEach(i => 
{
    console.log(i);
});

//event handling
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling</title>
</head>
<body>
    <input type="text" id="n1" placeholder="NUMBER1"><br><br>
    <input type="text" id="n2" placeholder="NUMBER2">
    <br><br>
    <button id="d1" onclick="add()">+</button>

    <p id="res"></p>
    <div>Adding Event Listener using
        addEventListener method</div>
    <button id="myButton">Click Me</button>
    <script>
        function add() {
            var a = document.getElementById("n1").value;
            var b = document.getElementById("n2").value;
            document.getElementById("res").innerHTML = "Addition of numbers is: " + (parseInt(a) + parseInt(b));
        }
        function over() 
    { 
        document.getElementById('key').innerHTML= 
    "Onmouseover event has occurred"; 
    } 
    function out() 
    { 
        document.getElementById('key').innerHTML= 
    "Onmouseout event has occurred"; 
    } 
    document.getElementById('myButton')
            .addEventListener('click', function () {
                alert('Button clicked!');
            });
    </script>
    <h2 id="key" onmouseover="over()" onmouseout="out()"> 
        Original Text 
    </h2>
</body>
</html>