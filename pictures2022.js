
// Courtesy of SimplytheBest.net (http://simplythebest.net/info/dhtml_scripts.html)
gSlideshowInterval = 1;
gNumberOfImages = 58;

gImages = new Array(gNumberOfImages);
gImages[0] = "images/01.jpg";
gImages[1] = "images/02.jpg";
gImages[2] = "images/03.jpg";
gImages[3] = "images/04.jpg";
gImages[4] = "images/05.jpg";
gImages[5] = "images/06.jpg";
gImages[6] = "images/07.jpg";
gImages[7] = "images/08.jpg";
gImages[8] = "images/09.jpg";
gImages[9] = "images/10.jpg";
gImages[10] = "images/11.jpg";
gImages[11] = "images/12.jpg";
gImages[12] = "images/13.jpg";
gImages[13] = "images/14.jpg";
gImages[14] = "images/15.jpg";
gImages[15] = "images/16.jpg";
gImages[16] = "images/17.jpg";
gImages[17] = "images/18.jpg";
gImages[18] = "images/19.jpg";
gImages[19] = "images/20.jpg";
gImages[20] = "images/21.jpg";
gImages[21] = "images/22.jpg";
gImages[22] = "images/23.jpg";
gImages[23] = "images/24.jpg";
gImages[24] = "images/25.jpg";
gImages[25] = "images/26.jpg";
gImages[26] = "images/27.jpg";
gImages[27] = "images/28.jpg";
gImages[28] = "images/29.jpg";
gImages[29] = "images/30.jpg";
gImages[30] = "images/31.jpg";
gImages[31] = "images/32.jpg";
gImages[32] = "images/33.jpg";
gImages[33] = "images/34.jpg";
gImages[34] = "images/35.jpg";
gImages[35] = "images/36.jpg";
gImages[36] = "images/37.jpg";
gImages[37] = "images/38.jpg";
gImages[38] = "images/39.jpg";
gImages[39] = "images/40.jpg";
gImages[40] = "images/41.jpg";
gImages[41] = "images/42.jpg";
gImages[42] = "images/43.jpg";
gImages[43] = "images/44.jpg";
gImages[44] = "images/45.jpg";
gImages[45] = "images/46.jpg";
gImages[46] = "images/47.jpg";
gImages[47] = "images/48.jpg";
gImages[48] = "images/49.jpg";
gImages[49] = "images/50.jpg";
gImages[50] = "images/51.jpg";
gImages[51] = "images/52.jpg";
gImages[52] = "images/53.jpg";
gImages[53] = "images/54.jpg";
gImages[54] = "images/55.jpg";
gImages[55] = "images/56.jpg";
gImages[56] = "images/57.jpg";
gImages[57] = "images/58.jpg";

function canManipulateImages() {
	if (document.images)
		return true;
	else
		return false;
}
function loadSlide(imageURL) {
	if (gImageCapableBrowser) {
		document.slide.src = imageURL;
		return false;
	}
	else {
		return true;
	}
}
function nextSlide() {
	gCurrentImage = (gCurrentImage + 1) % gNumberOfImages;
	loadSlide(gImages[gCurrentImage]);
}
gImageCapableBrowser = canManipulateImages();
gCurrentImage = 0;
setInterval("nextSlide()",gSlideshowInterval * 1000);
// -->
