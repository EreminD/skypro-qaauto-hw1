const {Capabilities, By, Builder, until} = require('selenium-webdriver')


const url = "http://uitestingplayground.com/progressbar"
const browserName = Capabilities.safari()
let driver;

test()

async function test() {    
    driver = await new Builder().withCapabilities(browserName).build();
    
    driver.manage().window().maximize()
    await driver.get(url)


    await driver.findElement(By.css('#startButton')).click()

    const progressBar = await driver.findElement(By.css('div.progress-bar'));
    
    const fontFamily = await driver.wait(until.elementTextIs(progressBar, '75%'), 30*1000).getCssValue('font-family')
    await driver.findElement(By.css('#stopButton')).click()
    
    console.log(fontFamily)

    setTimeout(() => driver.quit(), 50000)
}
