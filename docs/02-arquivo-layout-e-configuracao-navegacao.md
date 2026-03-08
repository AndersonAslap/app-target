# 📚 Arquivo de Layout e Configuração de Navegação no Expo Router

---

## 🧠 Introdução

Ao desenvolver aplicações mobile com **React Native**, a navegação entre telas é um aspecto essencial para organizar o fluxo da aplicação. Quando utilizamos o **Expo Router**, essa navegação passa a ser baseada na **estrutura de arquivos do projeto**, o que simplifica bastante a configuração de rotas.

Dentro dessa abordagem, existe um arquivo especial chamado **`_layout.tsx`**, que é responsável por **definir como as rotas da aplicação serão organizadas e exibidas**.

Nesta aula, vamos entender o papel desse arquivo, como ele funciona e como ele pode ser utilizado para configurar a navegação da aplicação.

---

## 📖 Conceitos Fundamentais

### Arquivo `_layout.tsx`

O arquivo **`_layout.tsx`** é um **arquivo especial do Expo Router utilizado para configurar a navegação das rotas** dentro de uma pasta da aplicação.

Diferente dos demais arquivos da pasta `app`, ele **não representa uma rota acessível diretamente pelo usuário**. Em vez disso, ele funciona como um **arquivo de configuração**, responsável por definir como as telas serão renderizadas e organizadas.

O Expo Router identifica esse arquivo como especial porque **seu nome começa com um underline (`_`)**. Arquivos que seguem essa convenção são interpretados como **arquivos de configuração**, e não como rotas da aplicação.

---

### O papel do Layout na navegação

O `_layout.tsx` funciona como uma **camada intermediária na renderização das rotas**.

Quando a aplicação é executada, o fluxo acontece da seguinte forma:

1. O Expo Router carrega o **arquivo `_layout.tsx`**
2. As configurações de navegação são aplicadas
3. As rotas disponíveis dentro da pasta são carregadas

Isso significa que **todas as telas daquela pasta passam primeiro pelo layout** antes de serem exibidas.

Essa abordagem permite que o desenvolvedor **configure comportamentos globais**, como:

* tipo de navegação utilizado
* estilo padrão das telas
* lógica executada antes da renderização das rotas

---

## 🔎 Explicação Detalhada

### Criando o arquivo de layout

Dentro da pasta `app`, é possível criar um novo arquivo chamado:

```
_layout.tsx
```

O underline no início do nome é importante, pois é **assim que o Expo Router identifica que se trata de um arquivo de configuração**.

Estrutura de exemplo:

```
app/
 ├── _layout.tsx
 └── index.tsx
```

Nesse cenário:

* `_layout.tsx` → responsável por configurar a navegação
* `index.tsx` → representa a rota inicial da aplicação

---

### Utilizando o componente `Slot`

Para que as rotas sejam renderizadas dentro do layout, utilizamos o componente **`Slot`**, que é fornecido pelo próprio Expo Router.

O `Slot` funciona como um **ponto de renderização das rotas**, ou seja, ele recebe e exibe automaticamente as telas disponíveis dentro da pasta `app`.

Exemplo de implementação:

```tsx
import { Slot } from "expo-router";

export default function Layout() {
  return <Slot />;
}
```

Nesse exemplo:

* o `Slot` recebe todas as rotas da pasta `app`
* a navegação continua seguindo o fluxo padrão da aplicação

---

### Execução do Layout antes das rotas

Uma característica importante do `_layout.tsx` é que **ele sempre será executado antes das telas da aplicação**.

Isso permite, por exemplo:

* executar lógica antes de carregar a aplicação
* verificar autenticação do usuário
* aplicar configurações globais

Como o layout envolve todas as rotas da pasta, ele funciona como um **container principal da navegação**.

---

### Definindo o tipo de navegação

Dentro do `_layout.tsx`, também é possível definir **qual tipo de navegação será utilizada na aplicação**, como:

* **Stack Navigation**
* **Tabs Navigation**

Por exemplo, ao utilizar **Stack Navigation**, o layout passa a controlar o comportamento das telas empilhadas.

Essa configuração permite definir elementos como:

* cabeçalho das telas
* estilos globais
* comportamento da navegação

---

### Configuração de telas e propriedades

O layout também permite configurar propriedades específicas de cada tela, como:

* título da tela
* ícones
* estilos de navegação
* opções de cabeçalho

Essas propriedades são as **mesmas utilizadas no React Navigation**, já que o Expo Router é construído sobre ele.

---

### Layout por pasta

Outra característica importante é que **cada pasta pode possuir seu próprio arquivo `_layout.tsx`**.

Isso permite criar **diferentes estruturas de navegação para diferentes partes da aplicação**.

Exemplo:

```
app/
 ├── _layout.tsx
 ├── index.tsx
 ├── auth/
 │    ├── _layout.tsx
 │    └── login.tsx
 └── dashboard/
      ├── _layout.tsx
      └── index.tsx
```

Nesse caso:

* a pasta `auth` pode ter uma navegação específica
* a pasta `dashboard` pode utilizar outra estrutura de navegação

Essa flexibilidade torna a arquitetura do projeto **mais modular e organizada**.

---

## 💡 Exemplos práticos

### Layout simples com `Slot`

```tsx
import { Slot } from "expo-router";

export default function Layout() {
  return <Slot />;
}
```

Esse exemplo apenas **replica o fluxo padrão das rotas**, sem alterar a navegação.

---

### Layout definindo navegação Stack

```tsx
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
```

Nesse caso, todas as rotas da pasta passam a utilizar **navegação do tipo Stack**.

---

## ⚠️ Pontos importantes

Alguns detalhes importantes ao trabalhar com `_layout.tsx`:

* O arquivo **não representa uma rota da aplicação**
* Ele deve começar com **underline (`_`)**
* Ele é usado para **configurar a navegação**
* Todas as rotas da pasta **passam primeiro pelo layout**
* É possível ter **um layout diferente por pasta**

Essas características permitem criar aplicações com **estrutura de navegação mais organizada e escalável**.

---

## 📝 Resumo do conteúdo

Nesta aula aprendemos que:

* O arquivo **`_layout.tsx`** é utilizado para configurar a navegação no Expo Router.
* Ele não representa uma rota, mas sim **um arquivo de configuração**.
* Todas as rotas passam primeiro pelo layout antes de serem exibidas.
* O componente **`Slot`** é utilizado para renderizar as rotas dentro do layout.
* É possível definir diferentes estruturas de navegação dentro do layout.

Essa abordagem facilita a organização da navegação em aplicações React Native.

---

## 🎯 Perguntas para revisão

1. Qual é a função do arquivo `_layout.tsx` no Expo Router?
2. Por que o arquivo começa com um underline (`_`)?
3. Qual é o papel do componente `Slot`?
4. Em que momento o layout é executado no fluxo da aplicação?
5. É possível ter mais de um arquivo `_layout.tsx` em um projeto?

---

## 📌 Conclusão

O arquivo **`_layout.tsx`** é um dos elementos centrais da navegação no **Expo Router**. Ele permite definir a estrutura de navegação da aplicação e controlar como as rotas serão renderizadas.

Ao funcionar como uma camada intermediária entre as rotas e a renderização das telas, o layout oferece flexibilidade para configurar comportamentos globais, aplicar estilos e organizar a navegação de forma mais clara.

Com isso, o Expo Router proporciona uma forma **mais simples, modular e escalável** de gerenciar rotas em aplicações React Native.

---

**É possível utilizar Drawer Navigation com o Expo Router**. 

O **Expo Router é construído sobre o React Navigation**, então ele suporta os mesmos tipos de navegação, incluindo:

* **Stack**
* **Tabs**
* **Drawer**

Para utilizar **Drawer Navigation**, você configura o drawer dentro do arquivo **`_layout.tsx`**, que é responsável por definir a estrutura de navegação das rotas.

---

## Exemplo básico de Drawer com Expo Router

Primeiro, instale as dependências necessárias:

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

Depois, configure o `_layout.tsx`:

```tsx
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ title: "Home" }}
      />

      <Drawer.Screen
        name="profile"
        options={{ title: "Perfil" }}
      />
    </Drawer>
  );
}
```

---

## Estrutura de arquivos

```
app/
 ├── _layout.tsx
 ├── index.tsx
 └── profile.tsx
```

Nesse caso:

* `index.tsx` → tela **Home**
* `profile.tsx` → tela **Perfil**
* `_layout.tsx` → define que a navegação será **Drawer**

---

## Resultado

A aplicação terá um **menu lateral (drawer)** com as opções:

* Home
* Perfil

Cada opção abrirá a respectiva tela.

---

💡 **Dica:**
Em aplicações reais é comum usar uma combinação como:

* **Drawer → para navegação principal**
* **Tabs → dentro de uma seção**
* **Stack → para fluxo de telas**

Exemplo comum:

```
Drawer
 ├── Home (Tabs)
 ├── Profile (Stack)
 └── Settings
```
