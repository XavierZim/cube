var cube = document.getElementById("cube");

var x = 180;
var y = 90;
var z = 225;

//this function is used to animate the cube wrapper
function move(){
    requestAnimationFrame(move); //animation frames allow for quick repeated uses of a function
    if(x > 360){ //resets the x var back to 0 if it 
        x = 1;
    };
    if(y > 360){ //^but with y
        y = 1;
    };
    if(z > 360){ //^but with z
        z = 1;
    };
    cube.style.transform = "rotatex("+ x +"deg) rotatey("+ y +"deg) rotatez("+ z +"deg)";
    x++;
    y++;
    z++;
};

move();