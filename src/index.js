const {Capabilities, By, Builder} = require('selenium-webdriver')

async function todoApp() {

    const browserName = Capabilities.safari()
    let driver = await new Builder().withCapabilities(browserName).build();


    await driver.get('https://sky-todo-list.herokuapp.com')
    await driver.findElement(By.css('input.input')).sendKeys("очень длинная строка для теста")
    await driver.findElement(By.css('button[type=submit]')).click()


    setTimeout(async function() {
        const rows = await driver.findElements(By.css('td'))
        const firstRow = rows[0]
        firstRow.click()
    }, 30000)
    
    setTimeout(async function() {
        const rows = await driver.findElements(By.css('td'))
        const lastRow = rows[rows.length-1]
        await lastRow.findElement(By.css('svg[data-icon=trash]')).click()
    }, 40000)
   
    setTimeout(() => driver.quit(), 60*1000)
}

todoApp()
