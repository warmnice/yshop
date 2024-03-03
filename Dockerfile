FROM nginx:1.15
COPY dist/* /etc/nginx/html
COPY conf/nginx.conf /etc/nginx