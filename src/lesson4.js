const {Capabilities, By, Builder, until} = require('selenium-webdriver')


const url = "https://habr.com/ru/feed/page1/"
const browserName = Capabilities.safari()
let driver;
habr()

async function habr() {    

    driver = await new Builder().withCapabilities(browserName).build();
    driver.manage().setTimeouts({implicit: 4000})
    driver.manage().window().maximize()
    await driver.get(url)


    await driver.findElement(By.css('a[href="/ru/search/"]')).click()
    await driver.findElement(By.css('input[name=q]')).sendKeys('selenium')
    await driver.findElement(By.css('span.tm-svg-icon__wrapper.tm-search__icon')).click()

    await driver.findElement(By.css('#pagination-next-page')).click()
    
   
   
   
   
    setTimeout(() => driver.quit(), 500000)
    
}





















// const fs = require('fs');
// const path = require('path');
// saveImage(By.css('article'), 'testimage' )
// async function saveImage(locator, fileName) {
//     const image = await driver.findElement(locator).takeScreenshot(true)

//     fs.writeFile(path.resolve(__dirname, `../${fileName}.png`), image, 'base64', function(err){
//         console.log(err)
//     });
// }