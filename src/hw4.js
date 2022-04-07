const {Capabilities, By, Builder, until} = require('selenium-webdriver')

const url = "https://www.labirint.ru"
const browserName = Capabilities.chrome()

async function labiribt() {    
    
    let driver = await new Builder().withCapabilities(browserName).build();
    driver.manage().setTimeouts({implicit: 4000})
    await driver.get(url)

    await driver.findElement(By.css('.cookie-policy__button')).click()

    const searchForm = await driver.findElement(By.css('form#searchform'));
    await searchForm.findElement(By.css('input')).sendKeys('javascript')
    await searchForm.submit()

    const buttonLocator = By.css('a[title="таблицей"]')
    await driver.wait(until.elementLocated(buttonLocator), 10000).click()
    
    const table = await driver.findElement(By.css('tbody.products-table__body'))
    const buttons = await table.findElements(By.css('a.btn.buy-link'))
    let i = 0
    for(i = 0; i<buttons.length; i++){
        await buttons[i].click()
    }

    await driver.get(url+'/cart/')
    const text = await driver.findElement(By.css('#ui-id-4')).getText()

    console.log(text)
    console.log(text.endsWith(i))

    setTimeout(() => driver.quit(), 30000)
}

labiribt()
