# API Project

## 🚀 Como Executar o Projeto

### 1. Configuração do Projeto

1. Abra o projeto no **VS Code**
2. Execute os seguintes comandos no terminal:
   ```bash
   npm i
   npm start
   ```

### 2. Inicialização do Banco de Dados (Docker)

Você pode iniciar o banco de dados MySQL/MariaDB de duas formas:

#### Opção 1: Interface Gráfica do Docker
1. Abra o **Docker Desktop**
2. Vá no menu **Containers**
3. Verifique se o container `mysql-mariadb` está rodando
4. Caso não esteja, inicie o container

#### Opção 2: Linha de Comando (PowerShell)
1. Abra o **PowerShell como Administrador**
2. Execute os comandos:
   ```powershell
   # Verificar containers em execução
   docker ps
   
   # Iniciar o container do MySQL/MariaDB
   docker start a70cf3a533b6
   
   # Verificar se o container está rodando
   docker ps
   ```

### 3. Testes da API

1. Abra o **Postman**
2. Importe as rotas da API (se disponível)
3. Execute os testes com as rotas configuradas

## Pré-requisitos

- Node.js
- Docker Desktop
- Postman (para testes)
- VS Code (recomendado)

## Estrutura do Projeto

```
├── src/
├── package.json
└── README.md
```

## Troubleshooting

- **Erro de conexão com BD**: Verifique se o container Docker está rodando
- **Porta em uso**: Verifique se não há outro serviço rodando na mesma porta
- **Dependências**: Execute `npm i` novamente se houver problemas com módulos