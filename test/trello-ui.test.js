const { WebDriver } = require('selenium-webdriver');
const {Capabilities, By, Builder, until} = require('selenium-webdriver')

describe('Логин в трелло', function() {

    const email = 'nlismlg917@tormails.com'
    const pass = 'sky123456'
    const loginUrl  = "https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3FreturnUrl%3D%252F%26display%3D%26aaOnboarding%3D%26updateEmail%3D%26traceId%3D625588c4678c66f0290b4e926a5132e0%26migrateGoogle%3D%26ssoVerified%3D&email=nlismlg917%40tormails.com&errorCode&login_hint=nlismlg917%40tormails.com"
    const url = 'https://trello.com' 

    let driver
    before(async function(){
        setTimeout(() => driver.quit(), 500000)
        
        const browserName = Capabilities.safari()
        driver = await new Builder().withCapabilities(browserName).build();

        driver.manage().setTimeouts({implicit: 4000})
        driver.manage().window().maximize()
        
        await auth()
    })


    it('Успешный логин', async function(){
        const createBoardButtonLocator = By.css('li[data-test-id="create-board-tile"]');

        console.log('1')
        await driver.wait(until.elementLocated(createBoardButtonLocator), 10000)

        console.log('2')
        const boards = await driver.findElements(By.css('div.boards-page-board-section-list-item'))

        console.log(boards.length) 
    })


    async function auth(){
        await driver.get(loginUrl)
        await driver.findElement(By.css('#login-submit')).click()
            
        await driver.wait(until.elementTextIs(await driver.findElement(By.css('#login-submit')), 'Войти'), 10000).click()
    
        await driver.findElement(By.css('#password')).sendKeys(pass)
        await driver.findElement(By.css('#login-submit')).click()     
    }
})


