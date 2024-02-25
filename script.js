
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
document.getElementById("btn").addEventListener("click",fun)

function fun(){
    const x = document.getElementById("txt").value;
    fetch(`${url}${x}`)
    .then((value)=>{
        return value.json();
    })
    .then((v1)=>{
        document.getElementById("result").innerHTML=v1[0].meanings[0].definitions[0].definition;
    })
}