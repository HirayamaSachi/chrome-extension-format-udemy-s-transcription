function get() {
    var test = document.getElementsByTagName('span');
    var text = '';
    Array.prototype.forEach.call(test, element => {
        if ('purpose' in element.dataset) {
            if (element.dataset.purpose === "cue-text") {
                // 字幕の英文取得
                text = text + element.innerText;
            }
        }
    });
    fixText = text.split('.').join('.\n\n');
    console.log(fixText);
}

// DOMContentLoadedを指定しても取得できない
// FIX:
setTimeout(get, 10000);
