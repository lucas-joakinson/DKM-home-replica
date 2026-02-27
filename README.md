# DKM Home - Teste Técnico Frontend

Este projeto é uma aplicação mobile desenvolvida em React Native como parte de um teste técnico para a vaga de Desenvolvedor Frontend. A aplicação consiste em um fluxo de autenticação e uma interface principal responsiva.

## Objetivo
O objetivo deste teste foi avaliar habilidades em desenvolvimento mobile, integração com APIs, gerenciamento de estado de autenticação e construção de layouts adaptáveis a diferentes tamanhos de tela e configurações de acessibilidade do usuário.

## Tecnologias Utilizadas
- **React Native** (v0.81.5)
- **Expo** (v54.0.33)
- **TypeScript**
- **React Navigation** (Stack Navigation)
- **Async Storage** (Persistência do token)
- **Fetch API** (Comunicação com o backend)

## Pré-requisitos
Antes de começar, você precisará ter instalado:
- **Node.js** (Versão 18 ou superior recomendada)
- **npm** ou **yarn**
- **Expo Go** (instalado no seu dispositivo móvel ou emulador configurado)

## Instalação
1. Clone o repositório:
   ```bash
   git clone <https://github.com/lucas-joakinson/DKM-home-replica>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd dkm-home
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
   *Todas as dependências necessárias são instaladas automaticamente com este comando.*

## Como Executar
Inicie o servidor de desenvolvimento do Expo:
```bash
npm start
```
Após o carregamento, você pode:
- Escanear o código QR com o app **Expo Go** (Android).
- Usar a câmera do iPhone para escanear o QR e abrir no **Expo Go** (iOS).
- Pressionar `a` para abrir no emulador Android ou `i` para o simulador iOS.

## Estrutura de Pastas
```
src/
├── components/ # Componentes reutilizáveis (botões, textos, cards)
├── screens/    # Telas da aplicação (Login e Home)
├── services/   # Integração com API (chamadas fetch)
├── theme/      # Definições de cores e tipografia responsiva
App.tsx         # Configuração de navegação e entrada principal
```

## Funcionalidades Implementadas
- **Login:** Validação de credenciais via CPF e senha.
- **Autenticação:** Persistência de sessão utilizando token JWT via Async Storage.
- **Perfil do Usuário:** Busca de dados do usuário autenticado na tela principal.
- **Logout:** Limpeza de token e retorno à tela de login.
- **Responsividade:** Layout adaptável e fontes que respeitam o escalonamento do sistema.

## API e Fluxo de Autenticação
O projeto consome uma API de mock hospedada externamente. O fluxo segue o padrão:
1. **Login:** Envia `cpf` e `password` para `/auth/login`. A resposta retorna um `access_token`.
2. **Persistência:** O token é armazenado localmente para manter o usuário logado entre sessões.
3. **Identidade:** O endpoint `/auth/me` é utilizado para recuperar os dados do perfil utilizando o token no header `Authorization`.

## Responsividade
O projeto utiliza o hook `useWindowDimensions` e uma estratégia de escala de fontes customizada em `src/theme/typography.ts`. Isso garante que:
- O layout se adapte a diferentes larguras de tela.
- O tamanho das fontes responda dinamicamente às configurações de acessibilidade (tamanho de texto) definidas pelo usuário no sistema operacional (Android/iOS).
