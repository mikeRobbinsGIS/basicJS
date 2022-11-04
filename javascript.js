var id = null;
const elem = document.getElementById("animate");
let topPos = 0;
let lefPos = 0;
const strtBtn = document.getElementById("start");
var countDown = new Date().get

adviceObject = {
	'00':'Just Do It',
	'01':'Think Different',
	'02':"Where's The Beef",
	'03':"You're Worth It",
	'10':"You Belong Anywhere",
	'11':"Have It Your Way",
	'12':"Live Mas",
	'13':"Let's Go Places",
	'20':"Think Bigger",
	'21':"Help Others In Need",
	'22':"Enjoy Every Moment",
	'23':"Hang Tight",
	'30':"They're Not Worth It",
	'31':"Maybe Sit This One Out",
	'32':"No Shame In Settling",
	'33':"Give Up, Try Again",
}
// Executer Function
function start() {
	elem.innerHTML = '';
	elem.style.backgroundColor = 'white';
	elem.style.border = '2px solid white';
	id = setInterval(frame, 40);
	//strtBtn.innerHTML = "Processing...";
	strtBtn.style.backgroundColor = "orange";
	strtBtn.disabled = true;
	setTimeout(stop, 2000);
}

function frame() {
	topPos += Math.floor(Math.random()*4) * 100;
	lefPos += Math.floor(Math.random()*4) * 100;
	elem.style.top = topPos + "px"; 
	elem.style.left = lefPos + "px";
	topPos = 0;
	lefPos = 0;
}

function stop() {
	clearInterval(id);
	let adviceName = `${parseInt(elem.style.top)/100}${parseInt(elem.style.left)/100}`;
	elem.innerHTML = adviceObject[adviceName];
	elem.style.backgroundColor = 'red';
	elem.style.fontWeight = 'bold';
	//strtBtn.innerHTML = "See ya in 24 hrs";
	strtBtn.style.backgroundColor = "green";
	setTimeout(jQuery(function ($) {
		var fiveMinutes = 60;
		var display = $('#time');
		startTimer(fiveMinutes, display);
	}), 1000);
	//strtBtn.innerHTML = '';
}




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}