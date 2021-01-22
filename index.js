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
  .option('mt', {
    boolean:true,
    alias: 'mobile-type',
    demand: true,
    describe: 'mobile type(iPhone 8,iPhone 5,iPad,iPhone X)',
    type: 'string',
    default: 'iPhone 8'
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
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  try {
    const page = await browser.newPage();
    if(argv.m){
      await page.emulate(puppeteer.devices[argv.mt])
    }
    await page.goto(argv.u,{"waitUntil" : "networkidle0"});
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
