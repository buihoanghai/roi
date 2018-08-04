const chromeLauncher = require('chrome-launcher');
function launchChrome(headless=true) {
    return chromeLauncher.launch({
        // port: 9222, // Uncomment to force a specific port of your choice.
        chromeFlags: [
            '--window-size=412,732',
            '--disable-gpu',
            headless ? '--headless' : ''
        ]
    });
}
launchChrome().then(chrome => {
    console.log(`Chrome debuggable on port: ${chrome.port}`);
    // chrome.kill();
});