#!/usr/bin/env node

var argv = require('yargs')
  .option('u', {
    alias: 'url',
    demand: true,
    describe: 'link address',
    type: 'string'
  })
  .option('f', {
    alias: 'file',
    demand: true,
    describe: 'output file',
    type: 'string',
    default: "./jl-example.jpeg"
  })
  .option('m', {
    boolean:true,
    alias: 'mobile',
    demand: true,
    describe: 'isMobile',
    type: 'boolean',
    default: true
  })
  .usage('Usage: jl-url2image [options]')
  .example('jl-url2image -url https://www.baidu.com/', 'convert https://www.baidu.com/ to jl-example.jpeg')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2021')
  .argv;

const puppeteer = require('puppeteer');
async function url2Image(){
  console.time('time');
  const browser = await puppeteer.launch({
    headless: true
  });
  try {
    const page = await browser.newPage();
    if(argv.m){
      await page.emulate(puppeteer.devices['iPhone X'])
    }
    await page.goto(argv.u);
    await page.screenshot({
      path: argv.f,
      type: 'jpeg',
      quality: 100,
      fullPage: true
    });
    console.timeEnd('time');
  } catch (e) {
    console.error(e)
  }finally{
    await browser.close();
  }
}
url2Image();