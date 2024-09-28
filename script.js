setInterval(() => {
    console.log("rrrrr")
}, 10000)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

        console.log("Test 1")
        const btn = document.querySelector("button")
        const status = document.querySelector("p")
        btn.addEventListener("click", (e) => {
            for(let i = 0; i < 10; i++) {
                console.log(i)
            }
            status.textContent = "ON" ? status.textContent = "OFF" : status.textContent = "ON"
        })
        console.log("Hello World")
        let i = 10
        var j = 20
        var hasil = i + j
        console.log(hasil)