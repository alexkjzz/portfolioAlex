# Utiliser une image Nginx légère
FROM nginx:alpine

# Copier les fichiers du site dans le dossier web de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
