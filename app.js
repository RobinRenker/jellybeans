var beans = ["blue","yellow","red","orange"];
var i = 0;

function spawn() {
    var or = Math.round(Math.random() * 360);

    var el = document.createElement("div");
    el.className = "rail";
    el.id = "bean"+i;
    i++;
    el.style.transform = 'rotate('+or+'deg)';
    var be = document.createElement("div");
    be.className = "bean";
    be.style.backgroundImage = 'url("assets/'+beans[Math.round(Math.random()*(beans.length-1))].toString()+'.svg")';
    el.appendChild(be);
    document.getElementById("beans").appendChild(el);
    setTimeout(function () {
        document.getElementById(el.id).remove();
    },3000);
}

document.getElementsByTagName("img")[0].onclick = function () {
    spawn();
};
