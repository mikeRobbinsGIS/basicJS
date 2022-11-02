var id = null;
const elem = document.getElementById("animate");
let topPos = 0;
let lefPos = 0;
const stopBtn = document.getElementById("stop");
const strtBtn = document.getElementById("start");
stopBtn.disabled = true;

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


function Start() {
	elem.innerHTML = '';
	elem.style.backgroundColor = 'red';
	id = setInterval(frame, 40);
	function frame() {
		topPos = topPos + Math.floor(Math.random()*4) * 100;
		lefPos = lefPos + Math.floor(Math.random()*4) * 100;
		elem.style.top = topPos + "px"; 
		elem.style.left = lefPos + "px";
		topPos = 0;
		lefPos = 0;
	}
	strtBtn.disabled = true;
	stopBtn.disabled = false;
}
function Stop() {
	clearInterval(id);
	let adviceName = `${parseInt(elem.style.top)/100}${parseInt(elem.style.left)/100}`
	elem.innerHTML = adviceObject[adviceName]
	elem.style.backgroundColor = 'purple'
	elem.style.fontWeight = 'bold';
	strtBtn.disabled = false;
	stopBtn.disabled = true;
}