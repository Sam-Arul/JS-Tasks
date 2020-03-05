var div1 = document.createElement("div");
div1.id = "demo1";
div1.innerHTML = "cat";
document.body.appendChild(div1);

var div2 = document.createElement("div");
div2.id = "demo2";
div2.innerHTML = "dog";
document.body.appendChild(div2);

var btn = document.createElement("button");
btn.id = "but";
btn.innerHTML = "click me";
document.body.appendChild(btn);

function swap(){
    temp = div1.innerHTML;
    div1.innerHTML = div2.innerHTML;
    div2.innerHTML = temp;
}

btn.addEventListener("click", swap)