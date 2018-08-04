const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://ifarmer.vn');
    await page.screenshot({path: 'ifarmer.png'});

    await browser.close();
})();