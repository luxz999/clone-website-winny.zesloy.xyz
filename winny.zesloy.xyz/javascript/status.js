
const digitMap = {
    '0': '０', '1': '１', '2': '２', '3': '３', '4': '４',
    '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
};

const stylizedDigits = {
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒',
    '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
};

function getCurrentTime() {
    const currentTime = new Date();
    const options = { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", hour12: false };
    let timeString = currentTime.toLocaleTimeString("th-TH", options);
    return timeString.replace(/[0-9]/g, digit => digitMap[digit]);
}

const monthNames = ["𝟎𝟏", "𝟎𝟐", "𝟎𝟑", "𝟎𝟒", "𝟎𝟓", "𝟎𝟔", "𝟎𝟕", "𝟎𝟖", "𝟎𝟗", "𝟏𝟎", "𝟏𝟏", "𝟏𝟐"];
function getCurrentDay() {
    const date = new Date();
    const options = { timeZone: 'Asia/Bangkok', day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('th-TH', options).format(date);
    const [day, month, year] = formattedDate.split('/');
    const monthIndex = parseInt(month, 10) - 1;
    return `${stylizedDigits[day[0]]}${stylizedDigits[day[1]]}/${monthNames[monthIndex]}/${stylizedDigits[year[0]]}${stylizedDigits[year[1]]}${stylizedDigits[year[2]]}${stylizedDigits[year[3]]}`;
}

const dayNamess = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
function getCurrentDayThai() {
    const date = new Date();
    const options = { timeZone: 'Asia/Bangkok', weekday: 'long' };
    const bangkokDay = new Intl.DateTimeFormat('th-TH', options).format(date);
    const dayIndex = dayNamess.indexOf(bangkokDay);
    return dayNamess[dayIndex] || bangkokDay;
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getCurrentDayEG() {
    const date = new Date();
    const options = { timeZone: 'Asia/Bangkok', weekday: 'long' };
    const bangkokDay = new Intl.DateTimeFormat('en-US', options).format(date);
    const dayIndex = dayNames.indexOf(bangkokDay);
    return dayNames[dayIndex];
}

function getPing() {
    const ping = Math.round(Math.random() * 100);
    return `${ping}`;
}

function getTemperature() {
    const center = 25;
    const variance = 5;
    const temperature = center + (Math.random() * variance * 2 - variance);
    return `${temperature.toFixed(1)}`;
}

let index = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

let texts1 = [];
let texts2 = [];
let texts3 = [];
let imageste = [];


let namebutton1;
let LinkButton1;

let namebutton2;
let LinkButton2;

async function updateTexts() {
    try {
        const response = await fetch("config.json");
        const config = await response.json();
        texts1 = config.texts1 || [];
        texts2 = config.texts2 || [];
        texts3 = config.texts3 || [];
        imageste = config.imageste || [];
        namebutton1 = config.namebutton1 || "DISCORD";
        LinkButton1 = config.LinkButton1 || "https://discord.com/";

        namebutton2 = config.namebutton2 || "GOOGLE";
        LinkButton2 = config.LinkButton2 || "https://discord.com/";

        Loadding();
    } catch (error) {
        console.error("❌ Error loading config.json:", error);
    }
}

function replacePlaceholders(text, replacements) {
    return text.replace(/\b(time:t|date:n|ping:ms|temp:c|day:th|day:eg)\b/g, match => replacements[match] || match);
}

updateTexts();

function LinkBio1() {
    window.location.href = LinkButton1
}

function LinkBio2() {
    window.location.href = LinkButton2;
}


function Loadding() {
    const ping = getPing();
    const temperature = getTemperature();
    const Time = getCurrentTime();
    const Date = getCurrentDay();
    const SundayThai = getCurrentDayThai();
    const SundayEG = getCurrentDayEG();
    const detailReplacements = {
        'time:t': Time,
        'date:n': Date,
        'ping:ms': ping,
        'temp:c': temperature,
        'day:th': SundayThai,
        'day:eg': SundayEG
    };

    document.getElementById("name-button1").innerText = namebutton1;
    document.getElementById("name-button2").innerText = namebutton2;
    document.getElementById("name-ste1").innerText = replacePlaceholders(texts1[index], detailReplacements);
    document.getElementById("name-ste2").innerText = replacePlaceholders(texts2[index2], detailReplacements);
    document.getElementById("name-ste3").innerText = replacePlaceholders(texts3[index3], detailReplacements);
    document.getElementById("imageste").src = imageste[index4];

}



function updateUI() {
    updateTexts();

    const ping = getPing();
    const temperature = getTemperature();
    const Time = getCurrentTime();
    const Date = getCurrentDay();
    const SundayThai = getCurrentDayThai();
    const SundayEG = getCurrentDayEG();

    const detailReplacements = {
        'time:t': Time,
        'date:n': Date,
        'ping:ms': ping,
        'temp:c': temperature,
        'day:th': SundayThai,
        'day:eg': SundayEG
    };

    document.getElementById("name-button1").innerText = namebutton1;
    document.getElementById("name-button2").innerText = namebutton2;
    document.getElementById("name-ste1").innerText = replacePlaceholders(texts1[index], detailReplacements);
    document.getElementById("name-ste2").innerText = replacePlaceholders(texts2[index2], detailReplacements);
    document.getElementById("name-ste3").innerText = replacePlaceholders(texts3[index3], detailReplacements);
    document.getElementById("imageste").src = imageste[index4];

    index = (index + 1) % texts1.length;
    index2 = (index2 + 1) % texts2.length;
    index3 = (index3 + 1) % texts3.length;
    index4 = (index4 + 1) % imageste.length;
}

setInterval(async function () {
    updateUI();
}, 3000);