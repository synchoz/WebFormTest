const puppeteer = require('puppeteer');
let screenshot = 'test.png'

try { //a good test run with good populated fields
    ( async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto('http://contractorsinsurancereview.com/ExampleForm/')
      await page.type('#name', 'random name')
      await page.type('#email', 'random@name')
      await page.type('#phone', '05478999')
      await page.type('#company', 'star labs')
      await page.select("select#employees", "51-500")
      await page.screenshot({ path: 'Goodtest.png' })
      await page.click('button')
      await page.waitForSelector('.text-center')
      await browser.close()
      console.log('good test')
    })()
  } catch (err) {
    console.error(err)
  }

  try { //a bad validation test run with wrong filled fields and still gets to pass 
    (async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto('http://contractorsinsurancereview.com/ExampleForm/')
      await page.type('#name', '%12312312%')
      await page.type('#email', '##@#')
      await page.type('#phone', 'XXXXX')
      await page.type('#company', '$$$$$$')
      await page.select("select#employees", "51-500")
      await page.screenshot({ path: 'Badtest.png' })
      await page.click('button')
      await page.waitForSelector('.text-center')
      await browser.close()
      console.log('bad test')
    })()
  } catch (err) {
    console.error(err)
  }

  try { //testing for required fields if leaving the empty and trying to submit with out filling 
    (async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 800 })
      await page.goto('http://contractorsinsurancereview.com/ExampleForm/')
      await page.click('button') 
      await page.keyboard.type('Hello');
      await page.click('button')
      await page.keyboard.type('random@as')
      await page.click('button')
      await page.keyboard.type('0547877777')
      await page.click('button')
      await page.keyboard.type('star labs')
      await page.select("select#employees", "51-500")
      await page.screenshot({ path: 'requiredtest.png' })
      await page.click('button')
      await browser.close()
      console.log('goodtest') //every time i click submit the TYPE keyboard is actually typing on the place where the field box is selected on because of the required attribute
    })()
  } catch (err) {
    console.error(err)
  }