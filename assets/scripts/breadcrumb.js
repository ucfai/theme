function breadcrumb() {
	var page = window.location.href;

	var subsites = ["hackpack", "course", "data-science", "intelligence"];

	subsites.forEach(function (subsite) {
		if page.includes(subsite) {
			document.getElementById("sigai-group-breadcrumb").innerHTML = `/${subsite}`;
			break;
		}
	});
}