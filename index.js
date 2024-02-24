const api = "https://api.quotable.io/random";
const q = document.getElementById("quote");
const a = document.getElementById("author");


async function getquote(url){
    const respose = await fetch(url);
    let data = await respose.json();
    console.log(data);
    q.innerHTML = data.content;
    a.innerHTML = data.author;
    
}

getquote(api);

function tweet(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML+ ' :- by '+ author.innerHTML,"Tweet Window", "width=600, height=300")
}