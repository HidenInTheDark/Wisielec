var  slowo, slowa=[], dl, odpowiedzi=[], bledy, strzal,poprawnie;
var trafienie = false;
bledy = 0;
poprawnie = 0;

function start(){
    slowa=["komputer", "informatyka", "kot", "fizyka", "energia", "fuzja", "laptop", "mysz"];
    slowo = slowa[Math.floor(Math.random()*slowa.length)];
    dl = slowo.length;

    for (var i=0; i<dl;i++){
        odpowiedzi[i] = "_";
    }

    document.getElementById("haslo").innerHTML = odpowiedzi.join(" ");
}
function sprawdz(){
    trafienie = false;

    strzal = document.getElementById("znak").value;

    for (var j=0; j<slowo.length; j++){
        if (slowo[j] == strzal){
            odpowiedzi[j] = strzal;
            dl--;
            trafienie=true;
            poprawnie++;
        }
        document.getElementById("haslo").innerHTML = odpowiedzi.join(" ");
    }
    document.getElementById("znak").value="";

    if (trafienie==false && bledy < 9){
        bledy++;
        obraz= "s" + bledy + ".png";
        document.getElementById("szubienica").innerHTML = '<img src="img/'+obraz+'">';
    }
    if (bledy== 9){
        document.getElementById("wynik").innerHTML = "Przegrałeś!!";
        document.getElementById("znak").remove();
    }
    if (poprawnie==slowo.length){
        document.getElementById("wynik").innerHTML = "Wygrałeś!!";
        document.getElementById("znak").remove();
    }
}