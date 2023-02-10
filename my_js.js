function show_updates() {
	fetch("updates.json")
		.then(results => results.json())
		.then(results => updates(results));
}

function updates(info) {
	var content = "";
	for (var i = info.length - 1; i >= 0; i--) {
		let u = info[i];

		if (!u["show"]) { continue; }

		s = `<div class="card-u">
		<h5 class="card-u-header">${u["date"]}</h5>
		<div class="card-u-body">
			<h5 class="card-u-title">${u["heading"]}</h5>`

		if (u["image"] != "") {
			s += `<p class="card-u-text-i">&emsp;${u["content"]}</p>
			<a href='${u["image"]}'>
			<img class="card-u-image" src='${u["image"]}' alt="image of ${u["date"]}">
			</a>`
			console.log("image")
		} else {
			s += `<p class="card-u-text">&emsp;${u["content"]}</p>`
			console.log("no image")
		}

		s += "</div></div>"
		content += s;
	}
	document.getElementById("content").innerHTML = content;
	reset("updates");
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

		if (!u["show"]) { continue; }

		s = `<div class="card-t">
		<img src="${u["photo"]}" class="card-t-img" onerror="this.onerror=null;this.src='team/others.jpg';">
		<h3 class="card-t-name">${u["name"]}</h3>
	</div>`
		content += s;
	}
	document.getElementById("content").innerHTML = content;
	reset("team");
}



function reset(name) {
	document.getElementById("updates").className = "parts-members inactive";
	document.getElementById("team").className = "parts-members inactive";
	// document.getElementById("components").className = "parts-members inactive";
	// document.getElementById("docs").className = "parts-members inactive";
	console.log(name);
	document.getElementById(name).className = "parts-members active";
}


show_updates()



document.getElementById("updates").addEventListener("click", show_updates);
document.getElementById("team").addEventListener("click", show_team);

