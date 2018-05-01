function sizeBanner() {
	var card = document.getElementsByClassName("card-sigai-meeting")[0];

	for (let banner of document.getElementsByClassName("sigai-meeting-banner")) {
		banner.width  = card.offsetWidth;
		banner.height = card.offsetWidth / 16 * 9;
	};
}

function hideme() {
    var btns = {};
    btns.yt = document.getElementsByClassName("btn-youtube");
    btns.fb = document.getElementsByClassName("btn-facebook");

    for (var yt of btns.yt) {
        yt.style.visibility = (yt.href === document.URL) ? "hidden" : "visibile";
    }
    for (var fb of btns.fb) {
        fb.style.visibility = (fb.href === document.URL) ? "hidden" : "visibile";
  }
}

function breadcrumb() {
	var page = window.location.href;

	var subsites = ["hackpack", "course", "data-science", "intelligence"];

	subsites.forEach(function (subsite) {
		if (page.includes(subsite))
			document.getElementById("sigai-group-breadcrumb").innerHTML = `/${subsite}`;
	});
}