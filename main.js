const setting = document.querySelector('.setting');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImg = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event');
let userTime;

const activeSettings = () => {
	setting.classList.toggle('active');
};

const setTime = () => {
	const currentTime = new Date();
	const result = userTime - currentTime;
	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const seconds = Math.floor(result / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
};

const appUpdate = () => {
	eventSpan.textContent = eventName.value;

	userTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);
	console.log(userTime);
	imageSection.style.backgroundImage = `url('${eventImg.value}')`;
	setTime();
    setting.classList.remove('active')
};

settingsBtn.addEventListener('click', activeSettings);
saveBtn.addEventListener('click', appUpdate);
appUpdate();
setInterval(setTime, 1000);
