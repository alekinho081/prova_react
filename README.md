## Login Padrão
    - email: aluno@gmail.com
    - senha: senai

## **📌 Visão Geral**  
Este projeto é um **Painel Web (Dashboard)** desenvolvido em **React** para a clínica veterinária fictícia **PetCare**. O sistema permite que funcionários façam login e acessem informações sobre os pets cadastrados, incluindo dados básicos e imagens reais de cachorros.  

---

## **✨ Funcionalidades**  
✅ **Autenticação de Usuário**  
- Tela de login para funcionários.  

✅ **Listagem de Pets**  
- Visualização dos pets cadastrados.  
- Exibição de informações básicas (nome, raça, idade, etc.).  
- Imagens reais de cachorros.  

✅ **Dashboard Interativo**  
- Layout responsivo e intuitivo.  
- Filtros e busca para facilitar a navegação.  

---

## **🛠️ Tecnologias Utilizadas**  
- **React** (Biblioteca principal)  
- **React Router** (Navegação entre páginas)  
- **Context API** (Gerenciamento de estado)  
- **Axios** (Requisições HTTP para API de imagens)  

---

## **🚀 Como Executar o Projeto**  

### **Pré-requisitos**  
- Node.js (v16+)  
- npm ou yarn  

### **Passos para Execução**  
1. **Clone o repositório**  
   ```bash
   git clone [URL_DO_REPOSITORIO]
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**  
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Acesse no navegador**  
   Abra [http://localhost:3000](http://localhost:3000)  

---

## **📂 Estrutura do Projeto**  
```
petcare-dashboard/  
├── public/  
├── src/  
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # Gerenciamento de estado
│   ├── hooks/              # Hooks customizados (ex: useAuth)  
│   ├── layout/             # Componentes de estrutura (Header, Footer)  
│   ├── pages/              # Telas (Login, Dashboard, Pets)  
│   ├── services/           # Chamadas à API  
│   └── App.js              # Rotas principais  
└── package.json  
```

---

## **📝 Licença**  
Este projeto é open-source, desenvolvido para fins educacionais/práticos.  

---

**🐶 PetCare Dashboard - Uma solução moderna para cuidar dos seus pets!** 🚀