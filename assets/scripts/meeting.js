function sizeBanner() {
	var card = document.getElementsByClassName("card-sigai-meeting")[0];

	for (let banner of document.getElementsByClassName("sigai-meeting-banner")) {
		banner.width  = card.offsetWidth;
		banner.height = card.offsetWidth / 16 * 9;
	};
}