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

    // TODO:ぶつ切りにならないように5000文字ずつに分ける

    // TODO:deepl free apiの使用
    // TODO:apiは別ファイルに分ける
    // https://qiita.com/rihok/items/962890b4b86ea052e54c

    // 翻訳語の文字をログ出力
}

// DOMContentLoadedを指定しても取得できない
// FIX:
setTimeout(get, 5000);
