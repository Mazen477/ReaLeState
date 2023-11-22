var ServicesTxt = document.getElementById('ServicesTxt');
var typewriter = new Typewriter(ServicesTxt, {
    loop: true
});
typewriter.typeString('Our Services')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Services</strong>')
    .pauseFor(2500)
    .start();

var portfolioTxt = document.getElementById('portfolioTxt');
var typewriter = new Typewriter(portfolioTxt, {
    loop: true
});
typewriter.typeString('Our Projects')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Projects</strong>')
    .pauseFor(2500)
    .start();


var teamTxt = document.getElementById('teamTxt');
var typewriter = new Typewriter(teamTxt, {
    loop: true
});
typewriter.typeString('Our Team')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Our Heros</strong>')
    .pauseFor(2500)
    .start();