## 🎨 Extrator de Cores de Imagem

Este é um projeto web simples e responsivo construído com **HTML**, **CSS** e **TypeScript** que permite aos usuários carregar uma imagem e extrair as 5 cores mais dominantes/principais presentes nela.

A extração de cores é feita inteiramente no lado do cliente (navegador) utilizando a biblioteca `ColorThief`.

-----

### 🚀 Funcionalidades

  * **Extração de Cores:** Identifica as 5 cores mais predominantes em qualquer imagem carregada.
  * **Visualização:** Exibe a imagem carregada para pré-visualização.
  * **Paleta:** Gera uma paleta visual dos círculos de cores extraídas.
  * **Detalhes da Cor:** Mostra o valor de cada cor extraída nos formatos **RGB** e **HEX**.
  * **Responsivo:** Design otimizado para visualização em desktops e dispositivos móveis.

-----

### ⚙️ Tecnologias Utilizadas

| Tecnologia | Função |
| :--- | :--- |
| **HTML5** | Estrutura da Interface. |
| **CSS3** | Estilização e Responsividade. |
| **TypeScript** | Lógica de Front-end e manipulação do DOM. |
| **`npm`** | Gerenciador de dependências. |
| **`ColorThief`** | Biblioteca JavaScript para análise e extração de cores de imagens. |

-----

### 💻 Como Executar o Projeto Localmente

Para rodar este projeto no seu computador, você precisa ter o **Node.js** e o **npm** instalados.

#### 1\. Clonar o Repositório

```bash
git clone SEU_URL_DO_REPOSITORIO
cd extrator-cores
```

#### 2\. Instalar Dependências

Instale todas as bibliotecas necessárias (incluindo `ColorThief` e os tipos do TypeScript):

```bash
npm install
```

#### 3\. Compilar o TypeScript

O TypeScript (`src/code.ts`) precisa ser compilado para JavaScript (`dist/code.js`) antes de ser executado pelo navegador.

```bash
npm run build
```

#### 4\. Iniciar o Servidor

Para visualizar e testar o projeto, use o VS Code com a extensão **Live Server** ou inicie o arquivo HTML diretamente no navegador.

  * **Opção Live Server:** Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**. (Lembre-se de adicionar `type="module"` no `<script>` do HTML para que o navegador execute o código).

-----

### 📐 Estrutura do Projeto

```
/EX_01_API
├── dist/                   # Arquivos de saída (JS compilado)
│   └── code.js
├── src/                    # Código fonte TypeScript
│   └── code.ts
├── node_modules/           # Dependências
├── .gitignore              # Ignora arquivos grandes/temporários
├── index.html              # Estrutura principal do site
├── styles.css              # Estilos do site
├── package.json            # Dependências e scripts de build
└── tsconfig.json           # Configuração do compilador TypeScript
```
