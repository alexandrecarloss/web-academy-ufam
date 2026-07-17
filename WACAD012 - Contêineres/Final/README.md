# Trabalho Final - Containers | Web Academy

Este projeto contém a infraestrutura conteinerizada utilizando Docker e Docker Compose para a aplicação de listagem de livros.

## Infraestrutura Utilizada
- **Backend:** Node.js + TypeScript (Porta externa: `4444`)
- **Frontend:** React + TypeScript via Nginx (Porta externa: `8000`)
- **Banco de Dados:** MySQL 8.0 (Porta externa: `3306`)
- **Gerenciador de Banco:** PHPMyAdmin (Porta externa: `8080`)

## Como Executar a Aplicação

### Pré-requisitos
Certifique-se de ter o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados em sua máquina.

### Passo a Passo

1. Suba todos os contêineres em modo desacoplado (background):
   ```bash
   docker compose up -d