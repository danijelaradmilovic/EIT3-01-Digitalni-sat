function loadTime() {
    let H = document.getElementById('h');
    let M = document.getElementById('m');
    let S = document.getElementById('s');

    let time = new Date();
   
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
   

    partTime(h, H);
    partTime(m, M);
    partTime(s, S);
    /* if (h < 10) {
        H.innerHTML = '0' + h;
    }
    else {
        H.innerHTML = h;
    }
    if (m < 10) {
        M.innerHTML = '0' + m ;
    }
    else {
        M.innerHTML = m;
    }
   
    if (s < 10) {
        S.innerHTML = '0' + s;
    }
    else {
        S.innerHTML = s;
    } */
   
  // setTimeout('loadTime()', 1000);
   
}

function partTime(part, showObj)
{
   /*  if (part < 10) {
        showObj.innerHTML = '0' + part;
    }
    else {
        showObj.innerHTML = part;
    } */

    showObj.innerHTML = (part < 10) ? '0' + part : part;
}

setInterval('loadTime()', 1000);

