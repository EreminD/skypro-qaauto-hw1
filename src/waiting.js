const {Capabilities, By, Builder, until} = require('selenium-webdriver')

testProgressBar()

async function testProgressBar() {    
    const url = "http://uitestingplayground.com/progressbar"
    const browserName = Capabilities.safari()
    
    const driver = await new Builder().withCapabilities(browserName).build();
    
    driver.manage().window().maximize()
    await driver.get(url)

    await driver.findElement(By.css('#startButton')).click()

    const progressBar = await driver.findElement(By.css('div.progress-bar'));
    
    await driver.wait(until.elementTextIs(progressBar, '75%'), 30*1000)
    
    await driver.findElement(By.css('#stopButton')).click()
    

    const fontFamily = await progressBar.getCssValue('font-family')
    console.log(fontFamily)
    const size = await (await progressBar.getRect())
    console.log(size)
    const text = await progressBar.getText()
    console.log(text)

    setTimeout(() => driver.quit(), 50000)
}    
