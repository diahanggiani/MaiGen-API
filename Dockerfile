# Gunakan image Node.js sebagai basis
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port (sesuaikan dengan port yang digunakan aplikasi Anda)
EXPOSE 8080

# Start application
CMD [ "npm", "run", "start:dev" ]
