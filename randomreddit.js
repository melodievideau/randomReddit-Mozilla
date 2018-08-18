function randomReddit(){
	browser.tabs.update({
		url: "https://reddit.com/r/random"
	});
}

browser.browserAction.onClicked.addListener(randomReddit);