var snowsrc = '💸';
var no = 50;
var hidesnowtime = 0;
var snowdistance = 'windowheight';

var ie4up = document.all ? 1 : 0;
var ns6up = document.getElementById && !document.all ? 1 : 0;

function iecompattest() {
    return (document.compatMode && document.compatMode !== 'BackCompat') 
        ? document.documentElement 
        : document.body;
}

var dx = [], xp = [], yp = [], am = [], stx = [], sty = [];
var doc_width = 800, doc_height = 600;

if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight;
} else if (ie4up) {
    doc_width = iecompattest().clientWidth;
    doc_height = iecompattest().clientHeight;
}

for (var i = 0; i < no; ++i) {
    dx[i] = 0;
    xp[i] = Math.random() * (doc_width - 50);
    yp[i] = Math.random() * doc_height;
    am[i] = Math.random() * 20;
    stx[i] = 0.02 + Math.random() / 10;
    sty[i] = 0.7 + Math.random();

    if (ie4up || ns6up) {
        document.write(
            `<div id="dot${i}" style="position:absolute; z-index:-1; visibility:visible; top:15px; left:15px;">
                <div style="color:#fff;">${snowsrc}</div>
            </div>`
        );
    }
}

function snowEffect() {
    doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
    doc_height = window.innerHeight ? window.innerHeight : iecompattest().clientHeight;

    for (var i = 0; i < no; ++i) {
        yp[i] += sty[i];
        
        if (yp[i] > doc_height - 50) {
            xp[i] = Math.random() * (doc_width - am[i] - 30);
            yp[i] = 0;
            stx[i] = 0.02 + Math.random() / 10;
            sty[i] = 0.7 + Math.random();
        }

        dx[i] += stx[i];

        var dot = document.getElementById(`dot${i}`);
        if (dot) {
            dot.style.top = yp[i] + 'px';
            dot.style.left = (xp[i] + am[i] * Math.sin(dx[i])) + 'px';
        }
    }
    snowtimer = setTimeout(snowEffect, 10);
}

function hidesnow() {
    if (window.snowtimer) clearTimeout(snowtimer);
    for (var i = 0; i < no; i++) {
        var dot = document.getElementById(`dot${i}`);
        if (dot) dot.style.visibility = 'hidden';
    }
}

if (ie4up || ns6up) {
    snowEffect();
    if (hidesnowtime > 0) {
        setTimeout(hidesnow, hidesnowtime * 1000);
    }
}
