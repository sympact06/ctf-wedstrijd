const body = document.querySelector('body');
body.onload = ls("nope", 0);
body.onload = laadwinkelwagen();
body.onload = bedankscherm();

function addklein(){
    product = "Patat Shoarma Klein"
    klein = document.getElementById("klein");
    totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
    totaalklein += 1
    klein.outerHTML = `<li><div class = "dropdown-item ${totaalklein}" id="klein">Patat Shoarma Klein <b> ${totaalklein}x</b><button class="dropdown-item leeg" type="button" onclick="verwijderklein()">Verwijderen</button></div></li>`;
    alerttoevoegen(product, totaalklein);
    ls("totaalklein", 1);
    laadwinkelwagen();
}

function verwijderklein(){
    product = "Patat Shoarma Klein"
    klein = document.getElementById("klein");
    totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
    totaalklein -= 1
    if (totaalklein > 0){
        klein.outerHTML = `<li><div class = "dropdown-item ${totaalklein}" id="klein">Patat Shoarma Klein <b> ${totaalklein}x</b><button class="dropdown-item leeg" type="button" onclick="verwijderklein()">Verwijderen</button></div></li>`;
    }
    else{
        klein.outerHTML = `<li><div id = "klein"></li>`;
    }
    alertverwijderen(product, totaalklein);
    ls("totaalklein", -1);
    laadwinkelwagen();
}

function verwijderkleinhelemaal(){
    totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
    while (totaalklein > 0){
        totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
        verwijderklein();
    }
}

function addmiddel(){
    product = "Patat Shoarma Middel"
    middel = document.getElementById("middel");
    totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
    totaalmiddel += 1
    middel.outerHTML = `<li><div class = "dropdown-item ${totaalmiddel}" id="middel">Patat Shoarma Middel <b> ${totaalmiddel}x</b><button class="dropdown-item leeg" type="button" onclick="verwijdermiddel()">Verwijderen</button></div></li>`;
    alerttoevoegen(product, totaalmiddel);
    ls("totaalmiddel", 1);
    laadwinkelwagen();
}

function verwijdermiddel(){
    product = "Patat Shoarma Middel"
    middel = document.getElementById("middel");
    totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
    totaalmiddel -= 1
    if (totaalmiddel > 0){
        middel.outerHTML = `<li><div class = "dropdown-item ${totaalmiddel}" id="middel">Patat Shoarma Klein <b> ${totaalmiddel}x</b><button class="dropdown-item leeg" type="button" onclick="verwijdermiddel()">Verwijderen</button></div></li>`;
    }
    else{
        middel.outerHTML = `<li><div id = "klein"></li>`;
    }
    alertverwijderen(product, totaalmiddel);
    ls("totaalmiddel", -1);
    laadwinkelwagen();
}

function verwijdermiddelhelemaal(){
    totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
    while (totaalmiddel > 0){
        totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
        verwijdermiddel();
    }
}

function addgroot(){
    product = "Patat Shoarma Groot"
    groot = document.getElementById("groot");
    totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
    totaalgroot += 1
    groot.outerHTML = `<li><div class = "dropdown-item ${totaalgroot}" id="groot">Patat Shoarma groot <b> ${totaalgroot}x</b><button class="dropdown-item leeg" type="button" onclick="verwijdergroot()">Verwijderen</button></div></li>`;
    alerttoevoegen(product, totaalgroot);
    ls("totaalgroot", 1);
    laadwinkelwagen();
}

function verwijdergroot(){
    product = "Patat Shoarma Groot"
    groot = document.getElementById("groot");
    totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
    totaalgroot -= 1
    if (totaalgroot > 0){
        groot.outerHTML = `<li><div class = "dropdown-item ${totaalgroot}" id="groot">Patat Shoarma groot <b> ${totaalgroot}x</b><button class="dropdown-item leeg" type="button" onclick="verwijdergroot()">Verwijderen</button></div></li>`;
    }
    else{
        groot.outerHTML = `<li><div id = "klein"></li>`;
    }
    alertverwijderen(product, totaalgroot);
    ls("totaalgroot", -1);
    laadwinkelwagen();
}

function verwijdergroothelemaal(){
    totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
    while (totaalgroot > 0){
        totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
        verwijdergroot();
    }
}

function addbroodje(){
    product = "Broodje Shoarma"
    broodje = document.getElementById("broodje");
    totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
    totaalbroodje += 1
    broodje.outerHTML = `<li><div class = "dropdown-item ${totaalbroodje}" id="broodje">Broodje Shoarma <b>${totaalbroodje} x</b><button class="dropdown-item leeg" type="button" onclick="verwijderbroodje()">Verwijderen</button></div></li>`;
    alerttoevoegen(product, totaalbroodje);
    ls("totaalbroodje", 1);
    laadwinkelwagen();
}

function verwijderbroodje(){
    product = "Broodje Shoarma"
    broodje = document.getElementById("broodje");
    totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
    totaalbroodje -= 1
    if (totaalbroodje > 0){
        broodje.outerHTML = `<li><div class = "dropdown-item ${totaalbroodje}" id="broodje">Broodje Shoarma <b>${totaalbroodje} x</b><button class="dropdown-item leeg" type="button" onclick="verwijderbroodje()">Verwijderen</button></div></li>`;
    }
    else{
        broodje.outerHTML = `<li><div id = "klein"></li>`;
    }
    alertverwijderen(product, totaalbroodje);
    ls("totaalbroodje", -1);
    laadwinkelwagen();
}

function verwijderbroodjehelemaal(){
    totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
    while (totaalbroodje > 0){
        totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
        verwijderbroodje();
    }
}

function final(){
    totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
    totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
    totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
    totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));

    afrekenen = document.getElementById("afrekenen");
    cart = document.getElementById("cart");
    if (totaalklein == 0 && totaalmiddel == 0 && totaalgroot == 0 && totaalbroodje == 0){
        afrekenen.outerHTML = `<li><button class="dropdown-item leeg" id = "afrekenen" type="button">Geen Producten</button></li>`;
        cart.innerHTML = `<i class="fa fa-shopping-cart"></i> €0,00&nbsp&nbsp`
    }   
    else{
        aantalklein = parseInt(sessionStorage.getItem("totaalklein"));
        aantalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
        aantalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
        aantalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
        totaal = ((aantalklein * 5.10) + (aantalmiddel * 6.60) + (aantalgroot * 7.60) + (aantalbroodje * 5.60));
        totaal = totaal.toFixed(2)
        afrekenen.outerHTML = `<li><button class="dropdown-item afrekenen" id = "afrekenen" type="button"><a href = "./afrekenen.html" >Naar Afrekenen €${totaal}</a></button></li>`;
        cart.innerHTML = `<i class="fa fa-shopping-cart"></i> €${totaal}&nbsp&nbsp`
    }
}

function alerttoevoegen(product, aantal){
    product = product;
    aantal = aantal;
    document.getElementById("alert").outerHTML = `<div class="alert text-center alert-success" id="alert">Het product <b>${product}</b> is toegevoegd aan je winkelwagen! Je hebt nu <b>${aantal}</b> stuks in je winkelwagen.</div>`;
}

function alertverwijderen(product, aantal){
    product = product;
    aantal = aantal;
    document.getElementById("alert").outerHTML = `<div class="alert text-center alert-danger" id="alert">Het product <b>${product}</b> is verwijderd van je winkelmand! Je hebt nu <b>${aantal}</b> stuks in je winkelwagen.</div>`;
}

function ls(product, change){
    product = product;
    change = change;
    totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
    totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
    totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
    totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
    verzameling = {"totaalklein" : totaalklein, "totaalmiddel" : totaalmiddel, "totaalgroot" : totaalgroot, "totaalbroodje" : totaalbroodje};
    for (item in verzameling){
        if (product === item){
            opslag = verzameling[item];
            if (Number.isNaN(opslag)){
                sessionStorage.setItem(item, "1");
            }
            else{
                if (change > 0){
                    opslag += 1;
                }
                else{
                    opslag -= 1;
                }
                sessionStorage.setItem(item, opslag);
            }
        }
    }
    final();
}

function laadwinkelwagen(){
    totaalklein = parseInt(sessionStorage.getItem("totaalklein"));
    totaalmiddel = parseInt(sessionStorage.getItem("totaalmiddel"));
    totaalgroot = parseInt(sessionStorage.getItem("totaalgroot"));
    totaalbroodje = parseInt(sessionStorage.getItem("totaalbroodje"));
    if (Number.isNaN(totaalklein)){
        totaalklein = 0
        sessionStorage.setItem("totaalklein", 0)
    }
    if (Number.isNaN(totaalmiddel)){
        totaalmiddel = 0
        sessionStorage.setItem("totaalmiddel", 0)
    }
    if (Number.isNaN(totaalgroot)){
        totaalgroot = 0
        sessionStorage.setItem("totaalgroot", 0)
    }
    if (Number.isNaN(totaalbroodje)){
        totaalbroodje = 0
        sessionStorage.setItem("totaalbroodje", 0)
    }


    verzameling = {"totaalklein" : totaalklein, "totaalmiddel" : totaalmiddel, "totaalgroot" : totaalgroot, "totaalbroodje" : totaalbroodje};
    for (item in verzameling){
        opslag = verzameling[item];
        if (Number.isNaN(opslag) || opslag == 0){

        }
        else{
            if (item == "totaalklein"){
                klein.outerHTML = `<li><div class = "dropdown-item ${opslag}" id="klein">Patat Shoarma Klein <b> ${opslag}x</b><button class="dropdown-item leeg" type="button" onclick="verwijderklein()">Verwijderen</button></div></li>`;
            }
            else if (item == "totaalmiddel"){
                middel.outerHTML = `<li><div class = "dropdown-item ${opslag}" id="middel">Patat Shoarma Middel <b> ${opslag}x</b><button class="dropdown-item leeg" type="button" onclick="verwijdermiddel()">Verwijderen</button></div></li>`;
            }
            else if (item == "totaalgroot"){
                groot.outerHTML = `<li><div class = "dropdown-item ${opslag}" id="groot">Patat Shoarma Groot <b> ${opslag}x</b><button class="dropdown-item leeg" type="button" onclick="verwijdergroot()">Verwijderen</button></div></li>`;
            }
            else if (item == "totaalbroodje"){
                broodje.outerHTML =  `<li><div class = "dropdown-item ${opslag}" id="broodje">Broodje Shoarma<b> ${opslag}x</b><button class="dropdown-item leeg" type="button" onclick="verwijderbroodje()">Verwijderen</button></div></li>`;
            }
        }
    }
    final();
    bestelling = document.getElementById("bestelling")
    if (bestelling){
        bedragklein = 0;
        bedragmiddel = 0;
        bedraggroot = 0;
        bedragbroodje=0;
        totaalaantal = (totaalklein + totaalmiddel + totaalgroot + totaalbroodje);
        bestelling.innerHTML = `Je bestelling (${totaalaantal})`;
        klein = document.getElementById("bestellijst-klein");
        if (totaalklein > 0){
            bedragklein = (totaalklein * 5.10);
            bedragklein = bedragklein.toFixed(2)
            klein.outerHTML = `<ol class="list-group mb-4 bestellijst" id="bestellijst-klein">
            <div class = "bestellijst-plaatje">
            <img src="./img/shoarma.jpg">
            </div>
            <div class = "bestellijst-text">
                <h5><b>Patat Shoarma Klein ${totaalklein} x</b></h5>
                <p>Een lekker warm hapje voor kleine trek</p>
                <p>€ 5,10</p>
            </div>
            <div class = "bestellijst-prijs">
                <p>€ ${bedragklein}</p>
                <button type="submit" class="toevoegen" onclick="addklein()"><i class="fa fa-plus"></i></i></button>
                <button type="submit" class="verminderen" onclick="verwijderklein()"><i class="fa fa-minus"></i></button>
                <button type="submit" class="verwijderen" onclick="verwijderkleinhelemaal()"><i class="fa fa-trash-o"></i></button>
            </ol>`;
        }
        else{
            klein.style.display = 'none';
        }
        middel = document.getElementById("bestellijst-middel");
        if (totaalmiddel > 0){
            bedragmiddel = (totaalmiddel * 6.60);
            bedragmiddel = bedragmiddel.toFixed(2)
            middel.outerHTML = `<ol class="list-group mb-4 bestellijst" id="bestellijst-middel">
            <div class = "bestellijst-plaatje">
            <img src="./img/shoarma.jpg">
            </div>
            <div class = "bestellijst-text">
                <h5><b>Patat Shoarma middel ${totaalmiddel} x</b></h5>
                <p>Lekker voor wanneer je iets meer honger hebt</p>
                <p>€ 6,60</p>
            </div>
            <div class = "bestellijst-prijs">
                <p>€ ${bedragmiddel}</p>
                <button type="submit" class="toevoegen" onclick="addmiddel()"><i class="fa fa-plus"></i></i></button>
                <button type="submit" class="verminderen" onclick="verwijdermiddel()"><i class="fa fa-minus"></i></button>
                <button type="submit" class="verwijderen" onclick="verwijdermiddelhelemaal()"><i class="fa fa-trash-o"></i></button>
            </ol>`;
        }
        else{
            middel.style.display = 'none';
        }
        groot = document.getElementById("bestellijst-groot");
        if (totaalgroot > 0){
            bedraggroot = (totaalgroot * 7.60);
            bedraggroot = bedraggroot.toFixed(2)
            groot.outerHTML = `<ol class="list-group mb-4 bestellijst" id="bestellijst-groot">
            <div class = "bestellijst-plaatje">
            <img src="./img/shoarma.jpg">
            </div>
            <div class = "bestellijst-text">
                <h5><b>Patat Shoarma Groot ${totaalgroot}x</b></h5>
                <p>Een fatsoenlijke hoeveelheid patat en shoarma</p>
                <p>€ 7,60</p>
            </div>
            <div class = "bestellijst-prijs">
                <p>€ ${bedraggroot}</p>
                <button type="submit" class="toevoegen" onclick="addgroot()"><i class="fa fa-plus"></i></i></button>
                <button type="submit" class="verminderen" onclick="verwijdergroot()"><i class="fa fa-minus"></i></button>
                <button type="submit" class="verwijderen" onclick="verwijdergroothelemaal()"><i class="fa fa-trash-o"></i></button>
            </ol>`;
        }
        else{
            groot.style.display = 'none';
        }
        broodje = document.getElementById("bestellijst-broodje");
        if (totaalbroodje > 0){
            bedragbroodje = (totaalbroodje * 5.60);
            bedragbroodje = bedragbroodje.toFixed(2)
            broodje.outerHTML = `<ol class="list-group mb-4 bestellijst" id="bestellijst-broodje">
            <div class = "bestellijst-plaatje">
            <img src="./img/broodje.jpg">
            </div>
            <div class = "bestellijst-text">
                <h5><b>Broodje Shoarma ${totaalbroodje} x</b></h5>
                <p>Een goed gevuld broodje</p>
                <p>€ 5,60</p>
            </div>
            <div class = "bestellijst-prijs">
                <p>€ ${bedragbroodje}</p>
                <button type="submit" class="toevoegen" onclick="addbroodje()"><i class="fa fa-plus"></i></i></button>
                <button type="submit" class="verminderen" onclick="verwijderbroodje()"><i class="fa fa-minus"></i></button>
                <button type="submit" class="verwijderen" onclick="verwijderbroodjehelemaal()"><i class="fa fa-trash-o"></i></button>
            </ol>`;
        }
        else{
            broodje.style.display = 'none';
        }
        totaal = (parseFloat(bedragklein) + parseFloat(bedragmiddel) + parseFloat(bedraggroot) + parseFloat(bedragbroodje)).toFixed(2);
        totaalbedrag = document.getElementById("totaalbedrag")
        totaalbedrag.outerHTML = `<div id="totaalbedrag">Totaalbedrag: €${totaal} </div>`
    }
}

function bestellen(){
    gegevens = document.getElementById("form");
    for (i = 0; i < gegevens.length ;i++) {
        if (i == 0){
            sessionStorage.setItem("naam", gegevens.elements[i].value);
        }
        else if (i == 1){
            sessionStorage.setItem("mail", gegevens.elements[i].value); 
        }
        else if (i == 2){
            woonplaats = gegevens.elements[i].value;
        }
        else if (i == 3){
            huisnummer = gegevens.elements[i].value;
        }
        else if (i == 4){
            postcode = gegevens.elements[i].value;
            adres = `${woonplaats} ${huisnummer}, ${postcode}`
            sessionStorage.setItem("adres", adres)
        }
    }
}

function bedankscherm(){
    let params = new URLSearchParams(location.search);
    id = params.get('id');
    if (id){
        naam = sessionStorage.getItem("naam");
        adres = sessionStorage.getItem("adres");
        d = new Date();
        d.setMinutes(d.getMinutes()+30);
        if (d.getMinutes()>=0 && d.getMinutes() < 11){
            time = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} - ${d.getHours()}:0${d.getMinutes()}`;
        }
        else{
            time = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`;
        }
        
        if (id == 1){
            ontvangen.outerHTML = `<h2 class="card-title" id = "ontvangen">Uw bestelling is ontvangen!</h2><br>
            <span>Bedankt voor uw bestelling, <b>Danae Van der Veeken</b>!</span><br>
            <a>Uw bestelling zal worden bezorgd op het adres: <b>Kaaikhof 968, 9045 PU</b>.</a><br>
            <a>Dit zal gebeuren rond het tijdstip: <b>28-06-2023 - 00:29</b>.</a>
            <hr><p>Het kan voorkomen dat we iets van onze bezorgdatum afwijken.<br>Wij nemen dan uiteraard contact met u op via het opgegeven e-mailadres.</b></p>
            <img style="width:400px;max-width:100%" src="img/thanks.gif" alt="">
            <hr>
            Gefeliciteerd! Je hebt de adresgegevens van je klasgenoot gevonden! Het wachtwoord is: <b class="text-danger"></b>`
        }
        else if (id == 1000){
            ontvangen.outerHTML = `<h2 class="card-title" id = "ontvangen">Uw bestelling is ontvangen!</h2><br>
            <span>Bedankt voor uw bestelling, <b>${naam}</b>!</span><br>
            <a>Uw bestelling zal worden bezorgd op het adres: <b>${adres}</b>.</a><br>
            <a>Dit zal gebeuren rond het tijdstip: <b>${time}</b>.</a>
            <hr><p>Het kan voorkomen dat we iets van onze bezorgdatum afwijken.<br>Wij nemen dan uiteraard contact met u op via het opgegeven e-mailadres.</b></p>
            <img style="width:400px;max-width:100%" src="img/thanks.gif" alt="">
            <hr>`
        }
        else {
            d = new Date("2023-06-28");
            d.setMinutes(d.getMinutes()+(id*10));
            if (d.getMinutes()>=0 && d.getMinutes() < 11){
                time = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} - ${d.getHours()}:0${d.getMinutes()}`;
            }
            else{
                time = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`;
            }
            naam = `${users[id].first_name} ${users[id].last_name}`
            adres = `${users[id].street}, ${users[id].postalcode}`
            ontvangen.outerHTML = `<h2 class="card-title" id = "ontvangen">Uw bestelling is ontvangen!</h2><br>
            <span>Bedankt voor uw bestelling, <b>${naam}</b>!</span><br>
            <a>Uw bestelling zal worden bezorgd op het adres: <b>${adres}</b>.</a><br>
            <a>Dit zal gebeuren rond het tijdstip: <b>${time}</b>.</a>
            <hr><p>Het kan voorkomen dat we iets van onze bezorgdatum afwijken.<br>Wij nemen dan uiteraard contact met u op via het opgegeven e-mailadres.</b></p>
            <img style="width:400px;max-width:100%" src="img/thanks.gif" alt="">
            <hr>`
        }
    }
    //sessionStorage.clear();
}
