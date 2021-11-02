# Ignite-RentX

## Definindo os requisitos da aplicação
**RF** - Requisitos Funcionais - Aqui definimos as funcionalidades que nossa aplicação deverá ter.
**RNF** - Requisitos Não Funcionais - Aqui definimos coiass que não estão diretamente ligadas com a regra da aplicação, por exemplo, ferramentas a serem utilizadas (database, bibliotecas, frameworks, etc.).
**RN** - Regras de Negócio - Definimos as regras por trás dos requisitos.

### Cadastro de Carros
**RF**
- Deve ser possível possível criar um novo carro;

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente;
- Novos carros devem ser cadastrados com disponibilidade true por padrão;
- Somente usuários administradores podem cadastrar novos carros.

### Listagem de carros
**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca
- Deve ser possível listar todos os carros disponíveis pelo nome do carro
**RN**
- O usuário não precisa estar logado no sistema para verificar disponibilidade.

### Cadastro de especificação no carro
**RF**
- Deve ser possível cadastra uma espeficicação para um carro;
- Deve ser possível listar todas as espeficiações;
- Deve ser possível listar todos as espeficifações.
**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
- Somente usuários administradores podem cadastrar novas especificações.

### Cadastro de imagens do carro
**RF**
- Deve ser possível cadastrar a imagem do carro;
- Deve ser possível listar todos os carros (para cadastro de imagem).
**RNF**
- Utilizar o multer para upload de arquivos;
**RN**
- O usuário poderá cadastrar mais de uma imagem para o mesmo carro;
- Somente usuários administradores podem cadastrar novas imagens.

### Aluguel de carro
**RF**
- Deve ser possível cadastrar um aluguel
**RN**
- O aluguel deve ter duração mínima de 24 horas;
- Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário;
- Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
