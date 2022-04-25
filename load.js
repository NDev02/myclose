window.addEventListener('load', () => {
    // let json = fetch('example.json').then(res => res.json()).then(j => {
    //     for(let key in j) {
    //         let e = document.getElementById(key);
    //         if(e)
    //             e.innerHTML = j[key];
    //         else
    //             console.log(key);
    //     }
    // });

    let j = JSON.parse(localStorage.getItem('form'));

    for(let key in j) {
        let e = document.getElementById(key);
        let val = j[key];
        if(e) {
            if(val.charAt(0) === '!') {
                e.innerHTML = val.substring(1, val.length - 1);
                e.className = val.charAt(val.length - 1);
            } else {
                e.innerHTML = val;
            }
        }
    }

    let r = document.createRange();
    r.selectNode(document.body);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    
});