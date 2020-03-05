var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1'
document.getElementById('div1').style.width='50%';
document.getElementById('div1').style.margin = '25%';
var images = ["h2r.jpg","h2r2.jpg","img3.jpg"]; 
var img = document.createElement('img');
div.appendChild(img);
var i=0
img.src =images[0];
img.id='imgs'
function mouseOver() {
    i=i+1;
    i=i%images.length;
    document.getElementById("imgs").src =images[i];
    }
document.getElementById("imgs").onmouseover = function(){ mouseOver()};