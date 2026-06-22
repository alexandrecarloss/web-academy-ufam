-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` VARCHAR(11) NOT NULL,
    `nome` VARCHAR(150) NOT NULL,
    `celular` VARCHAR(20) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `data_nasc` DATE NOT NULL,

    UNIQUE INDEX `Cliente_email_key`(`email`),
    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logradouro` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(10) NOT NULL,
    `estado` CHAR(2) NOT NULL,
    `cep` VARCHAR(10) NOT NULL,
    `bairro` VARCHAR(150) NOT NULL,
    `cidade` VARCHAR(150) NOT NULL,
    `cliente_cpf` VARCHAR(11) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `forma_pagamento` ENUM('BOLETO', 'CARTAO_CREDITO', 'PIX') NOT NULL,
    `data_hora` DATETIME(3) NOT NULL,
    `desconto` DOUBLE NOT NULL DEFAULT 0,
    `total` DOUBLE NOT NULL,
    `cliente_cpf` VARCHAR(11) NOT NULL,
    `endereco_codigo` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `codigo_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `preco` DOUBLE NOT NULL,
    `fabricante` VARCHAR(150) NOT NULL,
    `modelo` VARCHAR(150) NOT NULL,
    `subcategoria_codigo` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProdutoSerie` (
    `numero_serie` VARCHAR(100) NOT NULL,
    `produto_codigo` INTEGER NOT NULL,

    PRIMARY KEY (`numero_serie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CompraProduto` (
    `compra_codigo` INTEGER NOT NULL,
    `produto_codigo` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`compra_codigo`, `produto_codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cliente_cpf_fkey` FOREIGN KEY (`cliente_cpf`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_cliente_cpf_fkey` FOREIGN KEY (`cliente_cpf`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_endereco_codigo_fkey` FOREIGN KEY (`endereco_codigo`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_codigo_categoria_fkey` FOREIGN KEY (`codigo_categoria`) REFERENCES `Categoria`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_subcategoria_codigo_fkey` FOREIGN KEY (`subcategoria_codigo`) REFERENCES `Subcategoria`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutoSerie` ADD CONSTRAINT `ProdutoSerie_produto_codigo_fkey` FOREIGN KEY (`produto_codigo`) REFERENCES `Produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompraProduto` ADD CONSTRAINT `CompraProduto_compra_codigo_fkey` FOREIGN KEY (`compra_codigo`) REFERENCES `Compra`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompraProduto` ADD CONSTRAINT `CompraProduto_produto_codigo_fkey` FOREIGN KEY (`produto_codigo`) REFERENCES `Produto`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
