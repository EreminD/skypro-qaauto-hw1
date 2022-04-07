const {Capabilities,By,Builder} = require('selenium-webdriver')
const faker = require('@faker-js/faker')

async function todoApp() {

    const browserName = Capabilities.chrome()
    let driver = await new Builder().withCapabilities(browserName).build();
    await driver.manage().setTimeouts({implicit: 4000})
    await driver.get('https://sky-todo-list.herokuapp.com')

    const text = faker.faker.company.catchPhrase()
    await driver.findElement(By.css('input.input')).sendKeys(text)
    await driver.findElement(By.css('button[type=submit]')).click()

    const rows = await driver.findElements(By.css('td'))

    const firstRow = rows[0]
    
    await firstRow.click()

    const lastRow = rows[rows.length - 1]
    await lastRow.findElement(By.css('svg[data-icon=trash]')).click()


    setTimeout(() => driver.quit(), 60000)
}

todoApp()