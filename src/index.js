const {Capabilities, By, Builder} = require('selenium-webdriver')

async function todoApp() {

    const browserName = Capabilities.safari()
    let driver = await new Builder().withCapabilities(browserName).build();


    await driver.get('https://sky-todo-list.herokuapp.com')
    await driver.findElement(By.css('input.input')).sendKeys(new Date().toISOString())
    await driver.findElement(By.css('button[type=submit]')).click()

    // про ожидания мы еще не говорили
    setTimeout(async () => {
        const rows = await driver.findElements(By.css('td'))
        const firstRow = rows[0]
        firstRow.click()

    }, 3000)
    
    setTimeout(async () => {
        const rows = await driver.findElements(By.css('td'))
        const lastRow = rows[rows.length-1]
        await lastRow.findElement(By.css('svg[data-icon=trash]')).click()
    }, 5000)
   
    setTimeout(() => driver.quit(), 60000)
}

todoApp()
