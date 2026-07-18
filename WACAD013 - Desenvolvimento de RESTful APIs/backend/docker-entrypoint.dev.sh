#!/bin/sh

# 1. Aguarda o banco de dados (MySQL) subir completamente e aceitar conexões
echo "Aguardando o banco de dados inicializar..."

# 2. Roda as migrations para garantir que o banco do Docker tenha as tabelas mais recentes
echo "Executando Prisma Migrations..."
npx prisma migrate deploy

# 3. Gera o Prisma Client atualizado dentro do container
echo "Gerando Prisma Client..."
npx prisma generate

# 4. Roda o Seed para popular o banco (como ele comentou na aula)
echo "Executando Seeds..."
npx prisma db seed

# 5. Inicia a aplicação em modo de desenvolvimento (geralmente usando tsx, nodemon ou o script do package.json)
echo "Iniciando o servidor de desenvolvimento..."
npm run start