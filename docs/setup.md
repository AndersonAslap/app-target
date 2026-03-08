> comando de criar o projeto

```bash
npx create-expo-app@latest --template
template: blank (bare)
name: app-target
```

- Ao alterar o arquivo app.json é importante executar um pré-build para levar essas configurações para os códigos nativos.

```bash
npx expo prebuild
```

> Configurando o expo router

- link: https://docs.expo.dev/router/introduction/

- instalar todas as dependências necessárias 

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

- precisamos mudar o ponto de entrada da aplicação, então para isso iremos acessar o package.json e trocar o valor que está na chave main,
com isso automaticamente ele vai apontar para tudo que estiver dentro da pasta app desde que esteja exportado por padrão se torna uma rota 
na aplicação.

```json
{
    "main": "index.js"
}
```

para

```json
{
    "main": "expo-router/entry"
}
```

- No arquivo app.json precisamos adicionar o scheme da aplicação, esse schema é utilizado 
para identificar o aplicativo quanto tem um redirecionamento para o app, quando precisa abrir ele 
e etc.

```json
{
    "scheme": "your-app-scheme",
}
```

**obs**: pode deletar os arquivos
app.tsx
index.ts
metro.config.js

- após as configurações executar os comandos

```bash
npx expo prebuild
```

> Instalando fonts personalizadas

- acesse o site (https://fonts.google.com/) e (expo google fonts)

- Instale o expo google fonts

```bash
npx expo install expo-font @expo-google-fonts/inter
```
- em seguida realizar um pré-build

```bash
npx expo prebuild
```


# Erros

# Correção de Erro de Build no Android (Expo / React Native)

## ❌ Erro encontrado

Durante a execução do comando para rodar o aplicativo Android, ocorreu um erro de compilação no Gradle semelhante ao seguinte:

```

error: package com.apptarget does not exist

````

Esse erro aconteceu após a alteração do **package name** do aplicativo no arquivo `app.json`.  
O Gradle continuava tentando utilizar referências antigas geradas anteriormente no build.

Isso geralmente ocorre quando **arquivos de cache ou builds anteriores ainda estão presentes**, causando inconsistência entre o novo package e os arquivos gerados.

---

## ✅ Solução aplicada

A solução foi **limpar completamente os arquivos gerados e reinstalar as dependências**.

### 1️⃣ Remover caches e builds antigos

```bash
rm -rf node_modules
rm -rf android/.gradle
rm -rf android/build
````

---

### 2️⃣ Reinstalar as dependências

```bash
npm install
```

---

### 3️⃣ Rodar o projeto novamente

```bash
npx expo run:android
```

---

## 💡 Observação

Limpar o `node_modules` e as pastas de build do Android é uma prática comum para resolver problemas de compilação no React Native ou Expo, especialmente após:

* alteração do **package name**
* atualização de dependências
* mudanças na configuração do Android


# Correção de Conflito de Dependências (ERESOLVE) no NPM

## ❌ Problema

Ao tentar instalar a biblioteca de fontes com o comando:

```bash
npx expo install @expo-google-fonts/inter expo-font
````

ocorreu o seguinte erro:

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
```

O erro indicava um **conflito de dependências entre as versões do React e React DOM**.

Trecho relevante do erro:

```
Found: react@19.2.0
Could not resolve dependency:
peer react@"^19.2.4" from react-dom@19.2.4
```

Isso significa que:

* O projeto estava utilizando **React 19.2.0**
* Uma dependência exigia **React 19.2.4**

Como o **NPM não conseguiu resolver automaticamente esse conflito**, a instalação do pacote foi interrompida.

---

# ✅ Solução Aplicada

A solução foi **atualizar o React e o React DOM para a versão compatível exigida pelas dependências**.

Foi executado o seguinte comando:

```bash
npm install react@19.2.4 react-dom@19.2.4
```

Após a atualização das dependências, o conflito foi resolvido e a instalação das demais bibliotecas pôde ser realizada normalmente.

---

# 💡 Observação

Conflitos de dependência como esse podem ocorrer quando:

* versões diferentes de bibliotecas exigem **versões específicas do React**
* há **atualizações recentes em dependências do projeto**
* bibliotecas utilizam **peerDependencies** com versões específicas

Nesses casos, alinhar manualmente as versões das dependências geralmente resolve o problema.

