const {Capabilities, By, Builder, until} = require('selenium-webdriver')

const url = "https://www.labirint.ru"
const browserName = Capabilities.chrome()
let driver

async function labiribt() {    
    setTimeout(() => driver.quit(), 30000)

    await openSite(true)
    await search('javascript')
    await switchToTableView()
    const countToBe = await addBooks()
    await openCart()

    await assertTextContains(countToBe+1)
}

labiribt()

async function openSite(setCookie){
    driver = await new Builder().withCapabilities(browserName).build();
    driver.manage().setTimeouts({implicit: 4000})
    driver.manage().window().maximize()
    
    await driver.get(url)
    if(setCookie) {
        await driver.manage().addCookie({name:'cookie_policy', value: '1'})
        await driver.navigate().refresh()
    } else {
        await driver.findElement(By.css('.cookie-policy__button')).click()
    }
}

async function search(term){
    const searchForm = await driver.findElement(By.css('form#searchform'));
    await searchForm.findElement(By.css('input')).sendKeys(term)
    await searchForm.submit()
}

async function switchToTableView(){
    const buttonLocator = By.css('a[title="таблицей"]')
    await driver.wait(until.elementLocated(buttonLocator), 10000).click()
}

async function addBooks(){
    const tableLocator= By.css('table.products-table')
    
    const buttons = await driver
        .wait(until.elementLocated(tableLocator), 10000)
        .findElements(By.css('a.btn.buy-link'))
    
    let counter = 0
    for(counter = 0; counter<buttons.length; counter++){
        await buttons[counter].click()
    }

    return counter
}

async function openCart(){
    await driver.get(url+'/cart/')
}

async function assertTextContains(textToBe){
    const textAsIs = await driver.findElement(By.css('#ui-id-4')).getText()
    
    const shouldBeTrue = textAsIs.endsWith(textToBe)

    if (shouldBeTrue){
        console.log('проверка успешна')
    } else {
        throw new Error(`Проверка не прошла. Текст "${textAsIs}" не содержит "${textToBe}"`)
    }
}