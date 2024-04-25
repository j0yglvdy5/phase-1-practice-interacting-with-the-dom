function timer() {
    return setInterval(function() {
        const a = document.getElementById("counter");
        let b = parseInt(a.innerText);
        a.innerText = b + 1;
    }, 1000);
}

interval = timer();

document.getElementById("minus").addEventListener("click", function() {
    const a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    a.innerText = b - 1;
});

document.getElementById("plus").addEventListener("click", function() {
    const a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    a.innerText = b + 1;
});

document.getElementById("heart").addEventListener("click", function() {
    const a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    const c = document.querySelector(".likes");
    let d;

    const existingLikes = [].concat(Array.from(c.children)).map(function(item) {
        return parseInt(item.dataset.num);
    });

    if (existingLikes.includes(b)) {
        d = document.querySelector('[data-num="' + b + '"]');
        let e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else {
        d = document.createElement("li");
        d.setAttribute("data-num", b);
        d.innerHTML = b + " has been liked <span>1</span> time";
        c.appendChild(d);
    }
});

document.getElementById("pause").addEventListener("click", function() {
    if (playing) {
        playing = false;
        clearInterval(interval);
        this.innerText = "resume";
    } else {
        playing = true;
        interval = timer();
        this.innerText = "pause";
    }

    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        if (button.id !== "pause") {
            button.disabled = !playing;
        }
    }
});

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
    event.preventDefault();
    const input = this.children[0];
    const comment = input.value;
    input.value = "";
    const commentsDiv = document.querySelector(".comments");
    const p = document.createElement("p");
    p.innerText = comment;
    commentsDiv.appendChild(p);
});
