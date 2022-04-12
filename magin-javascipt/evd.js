function magic() {
    document. getElementById("pre-magic").remove();
    document.getElementById("post-magic").innerHTML = "Lol! You are waiting for magic. Do Your Work!";
    setTimeout(timeoutstill, 2000)
    setTimeout(timeoutload, 6000)
}

function timeoutstill(){
    document.getElementById("time-magic").innerHTML = "Still you are waiting. Goo Now!";
}
function timeoutload(){
    location.reload();
}
