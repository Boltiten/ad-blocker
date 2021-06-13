const filter = [
    "*://*.zedo.com/*"
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true } }, { urls: filter }, ["blocking"]
)