FROM wordpress:latest

# Copy your plugin files into the plugins directory
COPY ./film_simulator /var/www/html/wp-content/plugins/film_simulator

# Fix permissions
RUN chown -R www-data:www-data /var/www/html/wp-content/plugins/film_simulator

