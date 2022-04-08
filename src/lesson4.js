const {Capabilities, By, Builder, until} = require('selenium-webdriver')
const fs = require('fs');
const path = require('path');

habr()

async function habr() {    
    const url = "https://habr.com/ru/feed/page1/"
    const browserName = Capabilities.safari()
    const driver = await new Builder().withCapabilities(browserName).build();
    driver.manage().setTimeouts({implicit: 4000})
    driver.manage().window().maximize()
    await driver.get(url)
    
    const locator = By.css('article')
    const image = await driver.findElement(locator).takeScreenshot(true)
    
    //save image
    fs.writeFile(path.resolve(__dirname, `../test.png`), image, 'base64', function(err){
        if (err) console.log(err)
    });

    setTimeout(() => driver.quit(), 500000)   
}
