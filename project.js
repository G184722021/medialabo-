let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);
let c = document.querySelector('#reset');
c.addEventListener('click', reset);

function sendRequest() {
	var city = document.getElementById("city");
	let id = city.value;

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
	/*if (typeof data === 'string') {
		data = JSON.parse(data);
	}*/
	
	let h1a = document.querySelector('h1#a');
	let p;
	p = document.createElement('p');
	p.textContent = "都市名 : " + data.name + "   最高気温 : " + data.main.temp_max + "   最低気温 : " + data.main.temp_min;
	h1a.insertAdjacentElement('beforeend', p);

}
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('通信が終わりました');
}

function reset() {
	let p = document.querySelector('p');
	p.remove()
}