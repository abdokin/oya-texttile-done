#!/bin/bash
cd /project/oya-texttile-done
git pull origin master
yarn
yarn export
cp -r out /home/admin/web/oyatextile.com/public_html
cd /home/admin/web/oyatextile.com/public_html
rm -r 404/ about/ images/ locales/ blog/ contact/  _next/ career/ inspiration/ products/ /test
cd out/
mv * ../
cd ..
rm -r out