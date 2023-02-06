const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

btn.addEventListener("click", ()=>{
    let v = inp.value 
    if(v.trim() === ""){
        return
    }
    if(v.toLowerCase().includes("maraz")){
        return alert("saytda aokinish mumkin emasee!")
    }

    let li = document.createElement("li")
    li.innerHTML = v
    .replace("mol", "yaxwi")
    .replace("iplos", "zor")


    list.appendChild(li)
    inp.value = ""


})



let str = "Salom dunyo"

console.log(str.toUpperCase().includes("salom")); //boolean
console.log(str.indexOf("dunyo")); //false == -1

console.log(str.concat(" hello"));
console.log(str + "hello");
console.log(str .replace("lom", "world"));

console.log("mark molsan molsan MOLSAN Qoysan".replace(/molsan/gi, "yaxwisan"));