canvas=document.getElementById("myCanvas");
cntx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car2_width=120;
car2_height=70;

backround_img="2.jpg";
car1_img="car1.png";
car2_img="car2.png";
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=100;

function add(){
    backround_imgtag=new Image();
    backround_imgtag.src=backround_img;
    backround_imgtag.onload=uploadBackround;

    car1_imgtag=new Image();
    car1_imgtag.src=car1_img;
    car1_imgtag.onload=uploadcar1;

    car2_imgtag=new Image();
    car2_imgtag.src=car2_img;
    car2_imgtag.onload=uploadcar2;
}


function uploadBackround(){
    cntx.drawImage(backround_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    cntx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    cntx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyPressed=e.keyCode;
    console.log("keyPressed is - "+keyPressed);

    if (keyPressed==38){
        car1_up();
        console.log("up is pressed");
    }
    if (keyPressed==40){
        car1_down();
        console.log("down is pressed");
    }
    if (keyPressed==37){
        car1_left();
        console.log("left is pressed");
    }
    if (keyPressed==39){
        car1_right();
        console.log("right is pressed");
    }
    if (keyPressed==87){
        car2_up();
        console.log("up is pressed");
    }
    if (keyPressed==83){
        car2_down();
        console.log("down is pressed");
    }
    if (keyPressed==65){
        car2_left();
        console.log("left is pressed");
    }
    if (keyPressed==68){
        car2_right();
        console.log("right is pressed");
    }
    if (car1_x>=680){
        console.log("car1 Won");
        document.getElementById("game_Status").innerHTML="Car1 Won";
    }

    else 
    if (car2_x>=680){
        console.log("car2 Won");
        document.getElementById("game_Status").innerHTML="Car2 Won";
    }
}


function car1_up()
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, x="+car1_x+" y="+car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y<530)
    {
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, x="+car1_x+" y="+car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x="+car1_x+" y="+car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x<=680)
    {
        car1_x=car1_x+10;
        console.log("When right arrow is pressed, x="+car1_x+" y="+car1_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}


function car2_up()
{
    if(car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("When up arrow is pressed, x="+car2_x+" y="+car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if(car2_y<530)
    {
        car2_y=car2_y+10;
        console.log("When down arrow is pressed, x="+car2_x+" y="+car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("When left arrow is pressed, x="+car2_x+" y="+car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if(car2_x<=680)
    {
        car2_x=car2_x+10;
        console.log("When right arrow is pressed, x="+car2_x+" y="+car2_y);
        uploadBackround();
        uploadcar1();
        uploadcar2();
    }
}

