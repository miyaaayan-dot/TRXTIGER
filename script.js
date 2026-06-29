// Hide Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1500);

});

// Counter Animation

function animateCounter(id,target){

let value=0;

const speed=Math.ceil(target/100);

const interval=setInterval(()=>{

value+=speed;

if(value>=target){

value=target;

clearInterval(interval);

}

document.getElementById(id).innerText=value.toLocaleString();

},20);

}

animateCounter("holders",2450);

animateCounter("transfers",15280);
function copyAddress() {
    const address = document.getElementById("address").innerText.trim();

    navigator.clipboard.writeText(address)
        .then(() => {
            alert("✅ Contract address copied!");
        })
        .catch(err => {
            console.error("Copy failed:", err);
        });
}