FROM ubuntu:latest
MAINTAINER Fernando Ghinzelli
RUN apt update \
    && apt install -y curl php-cli \
    && cd ~ \
    && curl -sS https://getcomposer.org/installer -o composer-setup.php \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && mkdir /app