const iconOne = document.querySelector('.icon-one');
const iconTwo = document.querySelector('.icon-two');
const iconThree = document.querySelector('.icon-three');
const iconFour = document.querySelector('.icon-four');
const iconFive = document.querySelector('.icon-five');
const iconSix = document.querySelector('.icon-six');
const iconSeven = document.querySelector('.icon-seven');
const iconEight = document.querySelector('.icon-eight');
const iconNine = document.querySelector('.icon-nine');
const iconTen = document.querySelector('.icon-ten');
const iconEleven = document.querySelector('.icon-eleven');
const iconTwelve = document.querySelector('.icon-twelve'); 

iconOne.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Finder</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <div class="bar"></div>
    <center>Finder</center>
    </div>
    `
});

iconTwo.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">App Store</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'" onmouseover=""></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>App Store</center>
    </div>
    `
});

iconThree.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Safari</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>
    <h3>Safari</h3>
    <input type="text" class="searchbox">
    <button onclick="search();">Search</button>
    </center>
    </div>
    `
});

function search() {
    window.location = 'https://' + document.querySelector('.searchbox').value;
}

iconFour.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Notes</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a> 
    </div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Notes</center>
    </div>
    `
});

iconFive.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Maps</a> <a hre#="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Maps</center>
    </div>
    `
});

iconSix.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Photos</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Photos</center>
    </div>
    `
});

iconSeven.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Settings</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Settings</center>
    <div class="bar"></div>
    </div>
    `
});

iconEight.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Apple TV</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Apple TV</center>
    </div>
    `
});

iconNine.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Mail app</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Mail app</center>
    </div>
    `
});

iconTen.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Remainder app</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Remainder app</center>
    </div>
    `
});

iconEleven.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Downloads</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Downloads</center>
    </div>
    `
});

iconTwelve.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="navbar" style="word-spacing: 5px; font-family: 'Helvetica'; font-size: small;">
    <a href="#">Rubbish bin</a> <a href="#">File</a> <a href="#">Home</a> <a href="#">Help</a></div>
    <div class="mac">
    <button class="red" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="yellow" onclick="const mac = document.querySelector('.mac'); mac.remove(); window.location='index.html'"></button>
    <button class="green" onclick="const mac = document.querySelector('.mac'); mac.classList.toggle('maximize');"></button>
    <center>Rubbish bin</center>
    </div>
    `
});