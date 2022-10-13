var body = document.getElementsByTagName("body")[0];
body.style = "background-color:WhiteSmoke";

const titulo = document.createElement("h1");
titulo.innerText = "Disappearing circles";
titulo.style = "text-align: center;font-family:verdana"
body.appendChild(titulo);

const remove = document.createElement("h5");
remove.innerText = "To remove a circle, just click on it";
remove.style = "text-align: center;font-family:verdana"
body.appendChild(remove);

var addCircle = document.createElement("button");
addCircle.innerHTML = "Add circle";
aux = "display: block; border: none;margin: 2% auto; background-color: #4CAF50;color: white;padding: 15px 32px;text-align: center;text-decoration: none;font-size: 16px;"
addCircle.style = aux;

document.addEventListener('click', function(e){
    for(const x of Array(count).keys()){
        if(e.target && e.target.id == ('circle' + x)){
            document.getElementById(e.target.id).style.display = "none";
        }
    }
});
body.appendChild(addCircle);

var count = 0;
addCircle.addEventListener("click", function() {
    var spaceCircles = document.createElement("div");
    
    spaceCircles.setAttribute("id", "circle" + count);
    spaceCircles.innerHTML = "";
    auxSpace = "border-radius: 50%;float: left;margin: 5px; border-style: solid;border-width: thin;width: 130px;height: 130px;";
    spaceCircles.style = auxSpace;
    var color = (Math.floor(Math.random() * 16777215)).toString(16);
    spaceCircles.style.backgroundColor = "#" + color;
    
    body.appendChild(spaceCircles);
    count++;
});



