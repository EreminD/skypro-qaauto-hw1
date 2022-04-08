const {Capabilities,By,Builder} = require('selenium-webdriver')

//нужно вынести драйвер наверх, чтобы другие функции про него тоже знали
let driver

//запускаем главную функцию
run()

async function run() {
    //сразу запускаем таймер на 10 секунд
    setTimeout(() => driver.quit(), 10*1000)

    await openToDoApp()
    await createNewTask(`очень длинная строка для теста ${new Date()}`)

    const tasks = await getTaskList()
    await setTaskCompleted(tasks[0])
    await deleteLastTask(tasks[tasks.length-1])
}

async function openToDoApp(){
    const browserName = Capabilities.chrome()
    driver = await new Builder().withCapabilities(browserName).build();
    
    await driver.manage().setTimeouts({implicit: 4000})
    await driver.manage().window().maximize()
    
    await driver.get('https://sky-todo-list.herokuapp.com')
}

async function createNewTask(text){
    await driver.findElement(By.css('input.input')).sendKeys(text)
    await driver.findElement(By.css('button[type=submit]')).click()
}

async function getTaskList(){
    const rows = await driver.findElements(By.css('td'))
    return rows
}

async function setTaskCompleted(webElement){
    await webElement.click()
}

async function deleteLastTask(webElement){
    await webElement.findElement(By.css('svg[data-icon=trash]')).click()
}