#!/bin/sh

sudo chmod 777 /home/pi/Downloads/waterDNAdevices/
cd /home/pi/Downloads/waterDNAdevices
#git reset --hard HEAD
#git pull
sudo chmod 777 *
sleep 2
pm2 start waterapp.js 

pm2 logs 0
