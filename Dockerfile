# 设置基础镜像
FROM nginx:1.15
# 将dist文件中的内容复制到 /app/dist 这个目录下面
COPY dist/  /app/dist
#用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf