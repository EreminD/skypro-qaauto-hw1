import { Builder, By, Capabilities} from 'selenium-webdriver'

async function todoApp() {

    const browserName = Capabilities.chrome()
    let driver = await new Builder().withCapabilities(browserName).build();

    /** Ваш код ниже */
    // открыть https://sky-todo-list.herokuapp.com
    
    // добавить новый элемент в список


    // отметить 1й элемент в списке выполненным (клик по названию)

    // удалить последний элемент в списке
    

    /** Ваш код выше */
    setTimeout(() => driver.quit(), 60000)
}

todoApp()

