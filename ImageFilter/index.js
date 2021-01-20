var img=null;
var canvas = document.getElementById("can");
var canvas1 = document.getElementById("can1");
var i1;
var i2;
var i3;
var i4;
function upload(){
  var getFileInput = document.getElementById("finput");
  img = new SimpleImage(getFileInput);
  //i1 = new SimpleImage(getFileInput);  //i1 for grey scale
  //i2 = new SimpleImage(getFileInput);  //i2 for red filter
  img.drawTo(canvas);

}
function makeGrey(){
  i1 = new SimpleImage(img);
    for(var pixel of i1.values()){
      var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    i1.drawTo(canvas);
}

function doGrey(){
  if(img==null||!img.complete()){
    alert("Image is not loaded");
  }
  else{
    makeGrey();
  }
}
function red(){
  i2= new SimpleImage(img);
  for(var pixel of i2.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }

   }
  i2.drawTo(canvas);
}

function doRed(){
  if(img==null||!img.complete()){
    alert("Image is not loaded");
  }
  else{
    red();
  }
}

function rainbow(){
   i3 = new SimpleImage(img);
   var h = i3.getHeight();
for(var pixel of i3.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var y = pixel.getY();
    if(y<h/7){           //red
       if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
       }
       else{
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
       }
    }
    else if(y>=h/7&&y<2*h/7){    //orange
       if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
       }
       else{
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2*avg-255);
       }
    }
    else if(y>=2*h/7&&y<3*h/7){   //yellow
       if(avg<128){
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
       }
       else{
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
       }
    }
    else if(y>=3*h/7&&y<4*h/7){    //green
       if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
       }
       else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
       }
    }
    else if(y>=4*h/7&&y<5*h/7){    //blue
       if(avg<128){
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
       }
       else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
       }
    }
    else if(y>=5*h/7&&y<6*h/7){   //indigo
       if(avg<128){
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
       }
       else{
          pixel.setRed(1.2*avg-51);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
       }
    }
    else{             //violet
       if(avg<128){
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
       }
       else{
          pixel.setRed(0.4*avg+153);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(0.4*avg+153);
       }
    }

}
   i3.drawTo(canvas);
}
function doRainbow(){
   if(img==null||!img.complete()){
    alert("Image is not loaded");
  }
  else{
    rainbow();
  }
}

function setYellow(pixel){
  pixel.setRed(255);
  pixel.setGreen(255);
  pixel.setBlue(0);
}

function cageLike(){
   var i4 = new SimpleImage(img);
   var w = i4.getWidth();
   var h = i4.getHeight();
for(var pixel of i4.values()){

    var x = pixel.getX();
    var y = pixel.getY();

    if(x<=30||x>=w-30){
       setYellow(pixel);
    }

    if(y<=30||y>=h-30){
       setYellow(pixel);
    }

    if(y>=((h/2)-10)&&y<=((h/2)+10)){
       setYellow(pixel);
    }

    if(x>=((w/4)-10)&&x<=((w/4)+10)){
       setYellow(pixel);
    }

    if(x>=((3*w/4)-10)&&x<=((3*w/4)+10)){
       setYellow(pixel);
    }

    if(x>=((w/2)-10)&&x<=((w/2)+10)){
       setYellow(pixel);
    }
}
   i4.drawTo(canvas);
}

function doCageLike(){
   if(img==null||!img.complete()){
    alert("Image is not loaded");
  }
  else{
    cageLike();
  }
}

function reset(){
   if(img==null||!img.complete()){
    alert("Image is not loaded");
  }
  //i1 = new SimpleImage(img);
  //i2 = new SimpleImage(img);
  var context = canvas.getContext("2d");
  context.clearRect(0,0,can.width,can.height);
  img.drawTo(canvas);
}
