const {Capabilities, By, Builder, until} = require('selenium-webdriver')

const url = "https://www.labirint.ru"
const browserName = Capabilities.chrome()

async function labiribt() {    
    
    let driver = await new Builder().withCapabilities(browserName).build();
    driver.manage().setTimeouts({implicit: 4000})
    driver.manage().window().maximize()
    
    await driver.get(url)
    await driver.findElement(By.css('.cookie-policy__button')).click()

    const searchForm = await driver.findElement(By.css('form#searchform'));
    await searchForm.findElement(By.css('input')).sendKeys('javascript')
    await searchForm.submit()

    const buttonLocator = By.css('a[title="таблицей"]')
    await driver.wait(until.elementLocated(buttonLocator), 10000).click()
    
    const table = await driver.findElement(By.css('tbody.products-table__body'))
    const buttons = await table.findElements(By.css('a.btn.buy-link'))
    let countToBe = 0
    for(countToBe = 0; countToBe<buttons.length; countToBe++){
        await buttons[countToBe].click()
    }

    await driver.get(url+'/cart/')
    const text = await driver.findElement(By.css('#ui-id-4')).getText()
    
    console.log(text.endsWith(countToBe))

    setTimeout(() => driver.quit(), 30000)
}

labiribt()
