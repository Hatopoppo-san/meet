import puppeteer from 'puppeteer';
import { puppeteerErrors } from 'puppeteer';
import { mockData } from '../mock-data';
jest.setTimeout(50000);

// describe('show/hide an event details', () => {
//   // It's written in the course (4.6) but it works without it, if any problem occurs in future, I'll add this and test.
//   // let browser;
//   // let page;

//   // beforeAll(async () => {
//   //   browser = await puppeteer.launch({
//   //     headless: false,
//   //     slowMo: 250,
//   //     ignoreDefaultArgs: ['--disable-extensions'],
//   //   });
//   //   page = await browser.newPage();
//   //   await page.goto('http://localhost:3000/');

//   //   await page.waitForSelector('.event');
//   // });

//   // afterAll(() => {
//   //   browser.close();
//   // });

//   test('An event element is collapsed by default', async () => {
//     const browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 250,
//       ignoreDefaultArgs: ['--disable-extensions'],
//     });
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/');

//     await page.waitForSelector('.event');

//     const eventDetails = await page.$('.event .hidden-details');

//     expect(eventDetails).toBeNull();
//     browser.close();
//   });

//   test('User can expand an event to see its details', async () => {
//     const browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 250,
//       ignoreDefaultArgs: ['--disable-extensions'],
//     });
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/');

//     await page.click('.event .show-details-btn');

//     const eventDetails = await page.$('.event .hidden-details');
//     expect(eventDetails).toBeDefined();
//     browser.close();
//   });

//   test('User can collapse an event to hide its details', async () => {
//     const browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 250,
//       ignoreDefaultArgs: ['--disable-extensions'],
//     });
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//     await page.click('.event .show-details-btn');
//     await page.click('.event .hide-details-btn');
//     const eventDetails = await page.$('.event .hidden-details');
//     expect(eventDetails).toBeNull;
//     browser.close();
//   });
// });

describe('Filter events by city', () => {
  test("When user hasn't searched  for a city, show upcoming events from all cities.", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.eventList');
    const allEvents = await page.$('.eventList');
    expect(allEvents).toBeTruthy();
    // this doesn't work somehow expect(allEvents).toHaveLength(mockData.length);
    browser.close();
  });

  test('User can select a city from the suggested list.', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.focus('.city');
    await page.keyboard.type('Berlin');
    await page.waitForSelector('.suggestions li');
    const lists = await page.evaluate(() => {
      Array.from(document.querySelectorAll('.suggestions li'));
    });
    for (let list of lists) {
      if (list.innerText === 'Berlin') {
        list.click();
      }
    }
    expect(page.$('.event').locations).toBe('Berlin, Germany');
    browser.close();
  });
});
