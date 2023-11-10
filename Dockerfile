# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en la carpeta de la aplicación
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación React para producción
RUN npm run build

# Expone el puerto 80 para que se pueda acceder a la aplicación desde fuera del contenedor
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
