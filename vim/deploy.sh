#!/bin/bash
rm -rf apache-tomcat-8.5.59*
wget https://downloads.apache.org/tomcat/tomcat-8/v8.5.59/bin/apache-tomcat-8.5.59.tar.gz
tar -xvf apache-tomcat-8.5.59.tar.gz
rm -rf apache-tomcat-8.5.59.tar.gz
mkdir ~/apache-tomcat-8.5.59/webapps/MyApp
mkdir ~/topcasafina/* ~/apache-tomcat-8.5.59/webapps/MyApp
~/apache-tomcat-8.5.59/bin/startup.sh

