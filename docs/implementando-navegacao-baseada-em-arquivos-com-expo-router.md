# 📚 Navegação Baseada em Arquivos com Expo Router no React Native

---

## 🧠 Introdução

Em aplicações mobile, a **navegação entre telas** é um dos pilares fundamentais para a experiência do usuário. No ecossistema **React Native**, tradicionalmente utilizamos o **React Navigation** para gerenciar rotas e transições entre telas.

Nesta aula, exploramos uma abordagem diferente: a **navegação baseada em arquivos**, utilizando o **Expo Router**.

O **Expo Router** é uma ferramenta que simplifica a criação de rotas ao usar a **estrutura de arquivos do projeto como definição automática de navegação**. Isso significa que, ao criar arquivos dentro de uma pasta específica, eles automaticamente se tornam **rotas acessíveis dentro do aplicativo**.

Neste material você aprenderá:

* O que é **navegação baseada em arquivos**
* Como o **Expo Router se relaciona com o React Navigation**
* Como **configurar o Expo Router em um projeto existente**
* Como **definir rotas automaticamente através da estrutura de arquivos**

---

## 📖 Conceitos Fundamentais

### React Navigation

O **React Navigation** é a biblioteca mais popular para navegação em aplicações React Native. Ele fornece estruturas como:

* **Stack Navigation**
* **Tab Navigation**
* **Drawer Navigation**

Essas estruturas permitem organizar telas e controlar a navegação entre elas.

---

### Expo Router

O **Expo Router** é uma solução que **simplifica a navegação** ao utilizar **file-based routing (roteamento baseado em arquivos)**.

Ele é **construído sobre o React Navigation**, o que significa que:

* continua usando a mesma base de navegação
* mantém compatibilidade com conceitos já aprendidos
* apenas adiciona uma forma **mais simples de definir rotas**

Ou seja:

> Tudo que você aprendeu de React Navigation continua válido.

---

### Navegação baseada em arquivos

Na navegação baseada em arquivos:

* **cada arquivo representa uma rota**
* a **estrutura de pastas define a hierarquia de navegação**

Por exemplo:

```
src/
 └── app/
      ├── index.tsx
      ├── profile.tsx
      └── settings.tsx
```

Nesse caso teremos automaticamente as rotas:

```
/          → index.tsx
/profile   → profile.tsx
/settings  → settings.tsx
```

Isso torna a configuração de rotas **muito mais simples e intuitiva**.

---

## 🔎 Explicação Detalhada

### 1️⃣ Instalando o Expo Router

Primeiro precisamos instalar todas as dependências necessárias para utilizar o **Expo Router**.

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Essas dependências incluem:

* **expo-router** → responsável pela navegação baseada em arquivos
* **react-native-safe-area-context** → lida com áreas seguras da tela
* **react-native-screens** → otimiza a navegação entre telas
* **expo-linking** → permite deep linking
* **expo-constants** → fornece informações do app
* **expo-status-bar** → controle da barra de status

---

### 2️⃣ Alterando o ponto de entrada da aplicação

Após a instalação, precisamos alterar o **entry point da aplicação**.

Abra o arquivo **package.json** e modifique a propriedade `main`.

Antes:

```json
{
  "main": "index.js"
}
```

Depois:

```json
{
  "main": "expo-router/entry"
}
```

Isso faz com que o **Expo Router assuma o controle da navegação da aplicação**.

---

### 3️⃣ Criando a pasta de rotas

Agora criamos a pasta **app** dentro de `src`.

```
src/
 └── app/
```

Tudo que for colocado dentro dessa pasta **pode se tornar uma rota automaticamente**.

---

### 4️⃣ Criando a rota inicial

Dentro da pasta **app**, criamos o arquivo:

```
index.tsx
```

Esse arquivo representa a **rota inicial da aplicação**.

Exemplo de implementação:

```tsx
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Olá Expo Router</Text>
    </View>
  );
}
```

Pontos importantes:

* O arquivo **precisa exportar um componente por padrão (`export default`)**
* O nome **index** representa a **rota raiz**

---

### 5️⃣ Removendo arquivos antigos

Depois de configurar o Expo Router, alguns arquivos deixam de ser necessários:

Podemos deletar:

```
app.tsx
index.js
metro.config.js (opcional)
```

Isso acontece porque agora o **Expo Router controla o fluxo da aplicação**.

---

### 6️⃣ Configurando o scheme no app.json

No arquivo **app.json**, precisamos adicionar a propriedade **scheme**.

```json
{
  "scheme": "your-app-scheme"
}
```

O **scheme** serve para identificar o aplicativo em situações como:

* deep linking
* redirecionamento para o app
* abertura do aplicativo a partir de links externos

---

### 7️⃣ Atualizando o código nativo

Após a configuração, precisamos atualizar a build do projeto.

Execute:

```bash
npx expo prebuild
```

Isso atualiza o **código nativo do projeto**.

---

### 8️⃣ Executando o projeto

Depois da atualização, execute o projeto novamente:

```bash
npx expo run:ios
```

Ou utilize outro comando compatível com seu ambiente.

Após isso, o aplicativo iniciará utilizando o **Expo Router como sistema de navegação**.

---

### 9️⃣ Como o Expo Router identifica rotas

O Expo Router segue três regras principais:

1️⃣ O arquivo precisa estar dentro da pasta **app**

2️⃣ O componente precisa ser **exportado por padrão**

```tsx
export default function Screen() {}
```

3️⃣ O nome do arquivo define a rota

Exemplo:

```
app/
 ├── index.tsx
 ├── profile.tsx
 └── settings.tsx
```

Rotas disponíveis:

```
/
/profile
/settings
```

Se o componente **não for exportado como default**, a rota **não será encontrada**.

---

## 💡 Exemplos práticos

### Criando uma nova rota

Se criarmos o arquivo:

```
app/about.tsx
```

Com o conteúdo:

```tsx
export default function About() {
  return <Text>Sobre o aplicativo</Text>;
}
```

Automaticamente teremos a rota:

```
/about
```

Sem precisar configurar manualmente.

---

### Estrutura mais avançada

Também podemos criar rotas aninhadas:

```
app/
 ├── index.tsx
 └── users/
      ├── index.tsx
      └── profile.tsx
```

Rotas geradas:

```
/
/users
/users/profile
```

---

## ⚠️ Pontos importantes

Alguns detalhes essenciais ao trabalhar com Expo Router:

* A pasta **app define as rotas da aplicação**
* Cada arquivo se torna **uma rota automaticamente**
* O componente precisa ser **exportado com `export default`**
* O arquivo **index** define a rota inicial
* O Expo Router **é baseado no React Navigation**

Isso significa que você pode trabalhar em projetos que usam:

* **React Navigation puro**
* **Expo Router**
* ou até **combinação de ambos**

---

## 📝 Resumo do conteúdo

Nesta aula aprendemos que:

* O **Expo Router** permite criar navegação baseada em arquivos.
* Ele é construído **sobre o React Navigation**.
* A estrutura de arquivos define automaticamente as rotas.
* A pasta **app** contém todas as telas da aplicação.
* O arquivo **index.tsx** representa a **rota inicial**.
* Componentes precisam ser **exportados por padrão** para serem reconhecidos como rotas.

Essa abordagem torna a navegação **mais simples e organizada**.

---

## 🎯 Perguntas para revisão

1. O que é navegação baseada em arquivos?
2. Qual a relação entre **Expo Router** e **React Navigation**?
3. Qual é a função da pasta **app** no Expo Router?
4. Por que precisamos usar **export default** nos componentes?
5. Qual é o papel da propriedade **scheme** no `app.json`?

---

## 📌 Conclusão

O **Expo Router** representa uma evolução na forma de implementar navegação em aplicações React Native. Ao utilizar **roteamento baseado em arquivos**, ele reduz significativamente a quantidade de configuração manual necessária para criar rotas.

Além disso, por ser construído sobre o **React Navigation**, ele mantém compatibilidade com todo o ecossistema existente, permitindo que desenvolvedores aproveitem conhecimentos já adquiridos.

Essa abordagem resulta em:

* **menos configuração**
* **estrutura mais organizada**
* **navegação mais intuitiva**

Com isso, o desenvolvimento de aplicações React Native se torna **mais rápido, escalável e fácil de manter**.
