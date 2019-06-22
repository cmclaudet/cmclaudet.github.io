var openPreviewWindow;

function previewWispChildWindow() {
	previewWindow("preview-wisp-child");
	previewBackground();	
}

function previewBugburyWindow() {
	previewWindow("preview-bugbury");
	previewBackground();	
}

function previewAstromundusFight() {
	previewWindow("preview-astromundus-fight");
	previewBackground();
}

function previewCloud10() {
	previewWindow("preview-cloud-10");
	previewBackground();
}

function previewSwipeTheft() {
	previewWindow("preview-swipe-theft");
	previewBackground();
}

function previewUnityMeetup() {
	previewWindow("preview-unity-meetup");
	previewBackground();
}

function exitPreviewWindow() {
	openPreviewWindow.style.display = "none";

	var previewBackground = document.getElementById("preview-background");
	previewBackground.style.display = "none";
}

function previewWindow(windowId) {
	var preview = document.getElementById(windowId);
	preview.style.display = "flex";
	openPreviewWindow = preview;
}

function previewBackground() {
	var previewBackground = document.getElementById("preview-background");
	previewBackground.style.display = "block";
}
