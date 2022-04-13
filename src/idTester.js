const {Capabilities, By, Builder, until} = require('selenium-webdriver')

const url = "https://www.labirint.ru"
const browserName = Capabilities.chrome()

async function labiribt() {    
    setTimeout(() => driver.quit(), 25000)
    const driver = await new Builder().withCapabilities(browserName).build();
    driver.manage().setTimeouts({implicit: 4000})
    driver.manage().window().maximize()
    await driver.get(url)
    await driver.manage().addCookie({name:'cookie_policy', value: '1'})
    const searchForm = await driver.findElement(By.css('form#searchform'));
    await searchForm.findElement(By.css('input')).sendKeys('javascript')
    await searchForm.submit()

    
    await driver.wait(until.elementLocated(By.css('h1.index-top-title')), 5000)
    const btn1 = await driver.findElement(By.css('a.buy-link'))
    const id1 = await btn1.getId()
    const html1 = await btn1.getAttribute('outerHTML')
    console.log(html1) // строка вида <a data-idtov="779734" class="btn buy-link btn-primary" ... id="buy779734" href="#">
    console.log(id1) // строка вот такого вида f4ec90c8-f3bd-4389-ba86-392488976ac3

    
    await driver.wait(until.elementLocated(By.css('a[title="таблицей"]')), 5000).click()


    await driver.wait(until.elementLocated(By.css('table.products-table')), 5000)
    const btn2 = await driver.findElement(By.css('a.buy-link'))
    const id2 = await btn2.getId()
    const html2 = await btn2.getAttribute('outerHTML')
    console.log(html2);
    console.log(id2);


    console.log('Равенство HTML', html1 === html2);
    console.log('Равенство ID', id1 === id2);
}

labiribt()


