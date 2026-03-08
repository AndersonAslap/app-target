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
