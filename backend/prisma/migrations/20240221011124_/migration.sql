-- CreateTable
CREATE TABLE "aluno" (
    "id_aluno" SERIAL NOT NULL,
    "data_nasc" DATE NOT NULL,
    "altura" DECIMAL(3,2) NOT NULL,
    "xp" INTEGER NOT NULL,
    "nivel" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_admin" INTEGER NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id_aluno")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id_avaliacao" SERIAL NOT NULL,
    "descricao" VARCHAR(500),
    "id_admin" INTEGER NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    "peso" VARCHAR(8) NOT NULL,
    "medida_braco_dir_rlx" VARCHAR(6) NOT NULL,
    "medida_braco_esq_rlx" VARCHAR(6) NOT NULL,
    "medida_antebraco_esq" VARCHAR(6) NOT NULL,
    "medida_antebraco_dir" VARCHAR(6) NOT NULL,
    "medida_escapular" VARCHAR(6) NOT NULL,
    "medida_torax" VARCHAR(6) NOT NULL,
    "medida_cintura" VARCHAR(6) NOT NULL,
    "medida_abdomen" VARCHAR(6) NOT NULL,
    "medida_quadril" VARCHAR(6) NOT NULL,
    "medida_coxa_esq" VARCHAR(6) NOT NULL,
    "medida_coxa_dir" VARCHAR(6) NOT NULL,
    "medida_panturrilha_esq" VARCHAR(6) NOT NULL,
    "medida_panturrilha_dir" VARCHAR(6) NOT NULL,
    "dobras_triceps" VARCHAR(6) NOT NULL,
    "dobras_sub_escapular" VARCHAR(6) NOT NULL,
    "dobras_peitoral" VARCHAR(6) NOT NULL,
    "dobras_med_axilar" VARCHAR(6) NOT NULL,
    "dobras_supra_iliaca" VARCHAR(6) NOT NULL,
    "dobras_abdomen" VARCHAR(6) NOT NULL,
    "dobras_coxa" VARCHAR(6) NOT NULL,
    "data_avaliacao" DATE NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id_avaliacao")
);

-- CreateTable
CREATE TABLE "bairro" (
    "id_bairro" SERIAL NOT NULL,
    "id_cidade" INTEGER NOT NULL,
    "nome" VARCHAR(35) NOT NULL,

    CONSTRAINT "bairro_pkey" PRIMARY KEY ("id_bairro")
);

-- CreateTable
CREATE TABLE "cidade" (
    "id_cidade" SERIAL NOT NULL,
    "id_estado" INTEGER NOT NULL,
    "nome" VARCHAR(35) NOT NULL,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("id_cidade")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id_endereco" SERIAL NOT NULL,
    "cep" VARCHAR(12),
    "id_bairro" INTEGER NOT NULL,
    "endereco" VARCHAR(50),
    "numero" VARCHAR(5),
    "complemento" VARCHAR(50),

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id_endereco")
);

-- CreateTable
CREATE TABLE "estado" (
    "id_estado" SERIAL NOT NULL,
    "nome" VARCHAR(35) NOT NULL,
    "uf" VARCHAR(2) NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id_estado")
);

-- CreateTable
CREATE TABLE "exercicio" (
    "id_exercicio" SERIAL NOT NULL,
    "nome_exercicio" VARCHAR(50) NOT NULL,

    CONSTRAINT "exercicio_pkey" PRIMARY KEY ("id_exercicio")
);

-- CreateTable
CREATE TABLE "fatura" (
    "id_fatura" SERIAL NOT NULL,
    "id_plano" INTEGER NOT NULL,
    "valor" MONEY NOT NULL,
    "data_pagamento" DATE NOT NULL,
    "data_vencimento" DATE NOT NULL,

    CONSTRAINT "fatura_pkey" PRIMARY KEY ("id_fatura")
);

-- CreateTable
CREATE TABLE "plano" (
    "id_plano" SERIAL NOT NULL,
    "tipo_plano" VARCHAR(35) NOT NULL,
    "valor" MONEY NOT NULL,
    "id_admin" INTEGER NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    "data_inicio" DATE NOT NULL,
    "data_termino" DATE NOT NULL,
    "recursivo" BOOLEAN NOT NULL,
    "qtd_recursivo" VARCHAR(20),

    CONSTRAINT "plano_pkey" PRIMARY KEY ("id_plano")
);

-- CreateTable
CREATE TABLE "rotina" (
    "id_rotina" SERIAL NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "rotina_pkey" PRIMARY KEY ("id_rotina")
);

-- CreateTable
CREATE TABLE "rotina_treino" (
    "id_treino" INTEGER NOT NULL,
    "id_rotina" INTEGER NOT NULL,
    "sequencia_treino" VARCHAR(200),

    CONSTRAINT "rotina_treino_pkey" PRIMARY KEY ("id_treino","id_rotina")
);

-- CreateTable
CREATE TABLE "telefone" (
    "id_telefone" SERIAL NOT NULL,
    "ddd" DECIMAL(3,0) NOT NULL,
    "numero" VARCHAR(12) NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "telefone_pkey" PRIMARY KEY ("id_telefone")
);

-- CreateTable
CREATE TABLE "treino" (
    "id_treino" SERIAL NOT NULL,
    "nome" VARCHAR(35),

    CONSTRAINT "treino_pkey" PRIMARY KEY ("id_treino")
);

-- CreateTable
CREATE TABLE "treino_exercicio" (
    "id_exercicio" INTEGER NOT NULL,
    "id_treino" INTEGER NOT NULL,
    "qtd_serie" SMALLINT NOT NULL,
    "qtd_rep" SMALLINT NOT NULL,
    "qtd_carga" VARCHAR(30) NOT NULL,
    "comentario" VARCHAR(250),

    CONSTRAINT "treino_exercicio_pkey" PRIMARY KEY ("id_exercicio","id_treino")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "user_id" VARCHAR(35) NOT NULL,
    "tipo_user" BOOLEAN NOT NULL,
    "senha" VARCHAR(30) NOT NULL,
    "cpf" VARCHAR(20) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "id_endereco" INTEGER NOT NULL,
    "userimg" VARCHAR(255),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "admin" (
    "id_admin" SERIAL NOT NULL,
    "cref" VARCHAR(20),
    "cnpj" VARCHAR(25),
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateIndex
CREATE UNIQUE INDEX "type" ON "usuario"("cpf", "email", "user_id");

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "admin"("id_admin") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "admin"("id_admin") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id_aluno") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bairro" ADD CONSTRAINT "bairro_id_cidade_fkey" FOREIGN KEY ("id_cidade") REFERENCES "cidade"("id_cidade") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cidade" ADD CONSTRAINT "cidade_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "estado"("id_estado") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_bairro_fkey" FOREIGN KEY ("id_bairro") REFERENCES "bairro"("id_bairro") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fatura" ADD CONSTRAINT "fatura_id_plano_fkey" FOREIGN KEY ("id_plano") REFERENCES "plano"("id_plano") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plano" ADD CONSTRAINT "plano_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "admin"("id_admin") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plano" ADD CONSTRAINT "plano_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id_aluno") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rotina" ADD CONSTRAINT "rotina_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rotina_treino" ADD CONSTRAINT "rotina_treino_id_rotina_fkey" FOREIGN KEY ("id_rotina") REFERENCES "rotina"("id_rotina") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rotina_treino" ADD CONSTRAINT "rotina_treino_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "treino"("id_treino") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "treino_exercicio" ADD CONSTRAINT "treino_exercicio_id_exercicio_fkey" FOREIGN KEY ("id_exercicio") REFERENCES "exercicio"("id_exercicio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "treino_exercicio" ADD CONSTRAINT "treino_exercicio_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "treino"("id_treino") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id_endereco") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;
