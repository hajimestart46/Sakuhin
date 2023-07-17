let img = document.querySelector('.img');
// 画像の回転角度を定義する
let deg = 0;
// 画像がウェブページの左側に配置されている位置を定義する
let imgx = 0;
// 画像がウェブページの上部に配置されている位置を定義する
let imgy = 0;
// 画像のx軸位置を定義する
let imgl = 0;
// 画像のy軸位置を定義する
let imgt = 0;
// 画像の反転角度を定義する
let y = 0;
// カウンターを定義する
let index = 0;

window.addEventListener('mousemove', function(xyz) {
    // 画像の左側からの位置を取得する
    imgx = xyz.x - img.offsetLeft - img.clientWidth / 2;
    // 画像の上部からの位置を取得する
    imgy = xyz.y - img.offsetTop - img.clientHeight / 2;
    // 回転角度を計算する
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI);
    // マウスが動くたびにカウンターをリセットする
    index = 0;
    // 現在のマウスの位置を取得する
    let x = event.clientX;
    // マウスのx軸位置が画像の左側にある場合、画像を反転させる
    // それ以外の場合は反転させない
    if (img.offsetLeft < x) {
        y = -180;
    } else {
        y = 0;
    }
});

setInterval(() => {
    // 画像の回転と反転を設定する
    img.style.transform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)";
    index++;
    // 画像の位置と速度を設定し、画像がマウスの位置に到達した場合に移動を停止する
    if (index < 50) {
        imgl += imgx / 50;
        imgt += imgy / 50;
    }
    img.style.left = imgl + "px";
    img.style.top = imgt + "px";
}, 10);