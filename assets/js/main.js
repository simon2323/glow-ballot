var lines = new Array("凡 你 們 願 意 人 給 你 們 做 的 ， 你 們 也 要 照 樣 給 人 做 。","祂 賜 給 疲 倦 者 力 量 ， 賜 給 無 力 者 勇 氣。"," 我 是 道 路 、 真 理 、 生 命 ， 除 非 經 過 我 ， 誰 也 不 能 到 父 那 裡 去 。","應 常 歡 樂 ， 不 斷 祈 禱 ， 事 事 感 謝。","上 主 是 我 的 光 明 ， 我 的 救 援 ， 我 還 畏 懼 何 人 ﹖ ");

function remove(id) {
    return (elem = document.getElementById(id)).parentNode.removeChild(elem);
}
function ballot() {
    document.getElementById("ballot-button").remove(this);
    var line = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById("ballot-line").innerHTML = line;
    document.getElementById("ballot-retry").style.display = "block";
}

function ballot_retry() {
    var line = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById("ballot-line").innerHTML = line;
}