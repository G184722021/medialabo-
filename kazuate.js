// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
//hantei();
//hantei();
//hantei();

let b = document.querySelector('#print');
b.addEventListener('click', greeting);

// ボタンを押した後の処理をする関数 hantei() の定義
function greeting() {
    let i = document.querySelector('input[name="yoso"]');
	let yoso = i.value;      // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    let p = document.createElement('p');
    p.textContent = (kaisu + 1) + "回目の予想: " + yoso;
    let presult = document.querySelector('p#result');
    presult.insertAdjacentElement('beforebegin',p);
    let result;

    if (kaisu < 3){
        if (kotae === yoso){
            result = "正解です．おめでとう!";
            kaisu = 3;
        } 
        if (kotae > yoso){
            result = "まちがい．答えはもっと大きいですよ";
        } 
        if (kotae < yoso){
            result = "まちがい．答えはもっと小さいですよ";
        }
    } else {
        result = "答えは " + kotae + " でした．すでにゲームは終わっています";
    }
    kaisu = kaisu + 1;

    let s = document.querySelector('p#result');
    s.textContent = result;
}