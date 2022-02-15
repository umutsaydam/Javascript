function bul() {
    const paragraph = document.getElementById("paragraph").value;
    let message = document.getElementById("ms");
    let txt = paragraph.split(" ");
    let uniq = new Set(txt);
    let reg, count = 0, arr = [], word;

    if (paragraph != "") {
        for (let a of uniq) {
            reg = "\\b" + a + "\\b";
            arr = [...paragraph.matchAll(reg, "g")];

            if (arr.length > count) {
                word = a;
                count = arr.length;
            }
        }
        document.getElementById("ms").innerHTML = "En çok kullanılan kelime : " + word + " sayısı : " + count;
    } else {
        message.innerHTML = "Boş Bırakmayın ! ";
    }
}

