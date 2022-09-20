function show_updates() {
	fetch("updates.json")
		.then(results => results.json())
		.then(results => updates(results));
}

function updates(info) {
	var content = "";
	for (var i = 0; i < info.length; i++) {
		let u = info[i];
		s = `<div class="card-u">
		<h5 class="card-u-header">${u["date"]}</h5>
		<div class="card-u-body">
			<h5 class="card-u-title">${u["heading"]}</h5>
			<p class="card-u-text">${u["content"]}</p>
		</div>
	</div>`
		content += s;	
	}
	document.getElementById("content").innerHTML = content;
	reset();
	document.getElementById("updates").style.backgroundColor = "#ff0000";
}

function show_team() {
	fetch("team.json")
		.then(results => results.json())
		.then(results => team(results));
}

function team(info) {
	var content = "";
	for (var i = 0; i < info.length; i++) {
		let u = info[i];
		s = `<div class="card-t">
		<img src="${u["photo"]}" class="card-t-img" alt="${u["name"]}'s photo">
		<h3 class="card-t-name">${u["name"]}</h3>
	</div>`
		content += s;	
	}
	document.getElementById("content").innerHTML = content;
	reset();
	document.getElementById("team").style.backgroundColor = "#ff0000";
}


function reset(){
	document.getElementById("updates").style.backgroundColor = "rgb(187, 32, 174)";
	document.getElementById("team").style.backgroundColor = "rgb(187, 32, 174)";
	document.getElementById("components").style.backgroundColor = "rgb(187, 32, 174)";
	document.getElementById("docs").style.backgroundColor = "rgb(187, 32, 174)";
}






show_updates()



document.getElementById("updates").addEventListener("click", show_updates);
document.getElementById("team").addEventListener("click", show_team);

