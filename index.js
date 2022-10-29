const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();

// test.txt ファイル
form.append("test_text", fs.createReadStream("./test.txt"));


// テストメッセージ と発言するように設定
const obj = {
    "content": "テストメッセージ"
}


// payload_json という名前にしないと ファイルとしてJSONが読み込まれてしまうので注意
form.append('payload_json', JSON.stringify(obj));


// DiscordのウェブフックのURL 生成したウェブフックのURLを記入してください
const url = "DiscordのウェブフックのURL"


// データを送る
form.submit(url, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res.statusCode);
    }
});