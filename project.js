let b = document.querySelector('#sendRequest');
b.addEventListener('mousedown', sendRequest);
let d = document.querySelector('#sendRequest');
d.addEventListener('mouseup', sendRequest2);

function sendRequest() {
	let p = document.querySelector('p');
	if (p != null){
		p.remove()
		p = document.querySelector('p');
		p.remove()
		p = document.querySelector('p');
		p.remove()	
	}
}

function sendRequest2() {
	var city = document.getElementById("city");
	let id = city.value;

	if(id == 1){
		let h1a = document.querySelector('h2#a');
		let p;
		p = document.createElement('p');
		p.textContent = "";
		h1a.insertAdjacentElement('beforeend', p);
		p = document.createElement('p');
		p.textContent = "";
		h1a.insertAdjacentElement('beforeend', p);
		p = document.createElement('p');
		p.textContent = "";
		h1a.insertAdjacentElement('beforeend', p);
	}else{

	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
	}
}


function showResult(resp) {
	
	let data = resp.data;
	
	let h1a = document.querySelector('h2#a');
	let p;
	p = document.createElement('p');
	p.textContent = "都市名 : " + data.name;
	h1a.insertAdjacentElement('beforeend', p);
	p = document.createElement('p');
	p.textContent ="最高気温 : " + data.main.temp_max;
	h1a.insertAdjacentElement('beforeend', p);
	p = document.createElement('p');
	p.textContent ="最低気温 : " + data.main.temp_min ;
	h1a.insertAdjacentElement('beforeend', p);

}
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('通信が終わりました');
}