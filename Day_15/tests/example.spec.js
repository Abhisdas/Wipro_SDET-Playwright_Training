// @ts-check
import { test, expect } from '@playwright/test';

// test('amazon razor products check', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   const txtBox = page.locator('#twotabsearchtextbox');
//   await txtBox.fill("gaming");
//   const subBtn = page.locator('#nav-search-submit-button');
//   await subBtn.click();

// });


test.skip('ok', ({page}) => {
  // fghjkjhg
}) 

test('test1', async ({page}) => {
  test.setTimeout(10);
  test.step('check if 2 is eq to 3', () => {
    test.fail();
    expect(2).toBe(3); // false. -> fail
  })

  test.step('check if 2 is eq to 2', () => {
    // test.fail();
    expect(2).toBe(2);
  })

  test.step('check if 5 is eq to 5', () => {
    // test.fail();
    expect(5).toBe(5);
  })
}) 

test.fixme('test', async ({ page }) => {
  // test.setTimeout(1000);
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.goto('https://www.amazon.com/s?k=gaming&crid=2G6R10NGAR9DY&sprefix=%2Caps%2C313&ref=nb_sb_noss');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Apply Razer filter to narrow' }).click();
  // await page.locator('.a-link-normal').first().click();
  // await page.goto('https://www.amazon.com/Razer-Viper-Wireless-Esports-Gaming/dp/B0GMLBSSTD/ref=sr_1_1?crid=2G6R10NGAR9DY&dib=eyJ2IjoiMSJ9.5xaPZtVT1hDMoUOJvsN1IQ3G2Hw-he0Zg2I-IbW5A267jtrSm50XJFHWcA9wMMNRkGIwsOrk9b0xnZGtEa4Rte3_ok4iO3kmctrFf2oQqLQCwKUkbKd6BaWXJE92rE7SnMx5q_WQgx3haqA6jTQc9tO_Gf2fPA78dnmC1grAskbGyLuac48NnY2Nur_cTFxfzT2KzVtPOB4HaZaIxv-R16Hg2Rvmr9DtAeXTYhC1Ons5CpGaguHWwk7oGYyUWLspxPYgort0sRf9BsTiBAUIVY9_tjohOO0iG3u_WXwDCnE.5Bi-h9Hi2uLD3gO-O16ivfnuyhH7Wbun_jgjYfMBEro&dib_tag=se&keywords=gaming&qid=1779076265&refinements=p_123%3A220854&rnid=85457740011&sprefix=%2Caps%2C313&sr=8-1&th=1');
  // await page.getByRole('heading', { name: 'Razer Viper V4 Pro Wireless' }).locator('#productTitle').click();
});


// test('test', async ({ page }) => {
//   await page.goto('https://www.amazon.in/');
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('gaming');
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
// });

// test.slow(); // triple the timeout 30 seconds