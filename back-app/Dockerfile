# Dockerfile para auth-service

# Usar una imagen base de PHP con Apache
FROM php:8.2-apache

# Instalar extensiones de PHP necesarias
RUN docker-php-ext-install pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar los archivos del proyecto al contenedor
COPY . /var/www/html

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Instalar dependencias de Composer
RUN composer install

# Exponer el puerto 8000
EXPOSE 8000

# Iniciar el servidor de desarrollo de Lumen
CMD php -S 0.0.0.0:8000 -t public
