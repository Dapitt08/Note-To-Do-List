let ansJudul = ""
let ansKegiatan = ""
let ansSiapa = ""
let ansTambahan = ""

addBtn.addEventListener("click" , () =>{
    addContainer.innerHTML = `<h2 id="judulAdd">Menambah List</h2>
        <div id="inputContainer">
            <div id="childIC">
                <label for="inputText1">Judul: <span id="req">*</span></label>
                <input type="text" id="inputText1">
            </div>
            <div id="childIC">
                <label for="inputText2">Kegiatan: <span id="req">*</span></label>
                <input type="text" id="inputText2">
            </div>
            <div id="childIC">
                <label for="inputText3">Siapa: <span id="req">*</span></label>
                <input type="text" id="inputText3">
            </div>
            <div id="childIC">
                <label for="inputText4">Tambahan: </label>
                <input type="text" id="inputText4">
            </div>
        </div>
        <div id="btnIC">
            <button id="cancelIC" onclick="cancel()">Cancel</button>
            <button id="confirmIC" onclick="confirm()">Confirm</button>
        </div>`
    addContainer.style.display = "flex"
})

function cancel(){
    addContainer.innerHTML = ""
    addContainer.style.display = "none"
}

function confirm(){
    ansJudul = inputText1.value
    ansKegiatan = inputText2.value
    ansSiapa = inputText3.value
    ansTambahan = inputText4.value
    addContainer.innerHTML = ""
    addContainer.style.display = "none"

    const dalemanRoot = document.createElement("div")
    dalemanRoot.classList.add("doContainer")
    dalemanRoot.innerHTML = `<h3>${ansJudul}</h3>
            <div id="list">
                <div class="listInside"><ion-icon name="accessibility"></ion-icon> <p id="kegiatan">${ansKegiatan}</p></div>
                <div class="listInside"><ion-icon name="people"></ion-icon> <p id="siapa">${ansSiapa}</p></div>
                <div class="listInside"><ion-icon name="information"></ion-icon> <p id="tambahan">${ansTambahan}</p></div>
            </div>
        </div>`
    root.appendChild(dalemanRoot)
}