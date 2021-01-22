# jl-url2image

Convert websites into images
```
npm install jl-url2image -g
```
## demo
```
jl-url2image -u https://baidu.com
```
-u 输入链接 url

-f 输出文件 output file

-m 是否移动端 isMobile

### 注意事项

国内用户推荐使用cnpm或yarn下载，避免出现安装puppeteer时无法下载的情况

centos 安装依赖
```
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y
```
```
yum update nss -y
```
 




