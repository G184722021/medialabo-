let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


let id = 360630;

var select = document.getElementById('city');

select.onchange = function(){
  alert(this.value);
}

function sendRequest() {
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);
}
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log(selected_value);
	console.log('通信が終わりました');
}