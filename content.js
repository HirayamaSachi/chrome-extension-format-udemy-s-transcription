function get() {
    var test = document.getElementsByTagName('span');
    var textArray = '';
    Array.prototype.forEach.call(test, element => {
        if ('purpose' in element.dataset) {
            if (element.dataset.purpose === "cue-text") {
                // 字幕の英文取得
                textArray=textArray+element.innerText;
            }
        }
    });
    console.log(textArray);
}

// DOMContentLoadedを指定しても取得できない
// FIX:
setTimeout(get, 10000);
