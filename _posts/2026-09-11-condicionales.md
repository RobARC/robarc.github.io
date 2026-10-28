---
layout: post
title: "Condicionales: Enseñando a tu Programa a Decidir"
date: 2026-09-11
chapter: 11
redirect_from: /fundamentos-de-programacion/2026/09/11/condicionales/
categories: [fundamentos-de-programacion]
tags: [condicionales, control-de-flujo, pseudocodigo, javascript, python]
description: "Descubre cómo los condicionales le permiten a un programa tomar decisiones y ejecutar distintos caminos según se cumpla o no una condición."
---

¡Bienvenido/a de nuevo al blog! Hasta ahora nuestros programas han sido bastante obedientes: ejecutan instrucción tras instrucción, en orden, sin desviarse nunca. Pero la vida real no funciona así. Si llueve, llevas paraguas; si no, no lo llevas. Los programas necesitan ese mismo tipo de lógica, y para eso existen los condicionales.

## 1. Concepto: ¿Qué es un Condicional?

Un condicional es una estructura que le permite a un programa evaluar una expresión (que da como resultado verdadero o falso) y, según ese resultado, ejecutar un bloque de código u otro. Es la primera herramienta que rompe la ejecución lineal que hemos visto hasta ahora.

Piénsalo como una bifurcación en el camino: el programa llega a un punto, se pregunta "¿esto es cierto?", y toma un camino distinto según la respuesta.

## 2. La Estructura Básica: Si / Entonces

En pseudocódigo, la forma más simple es:

```
Si (condición) Entonces
    instrucción
Fin Si
```

Si la condición es verdadera, la instrucción se ejecuta. Si es falsa, el programa simplemente la salta y sigue de largo.

## 3. Agregando una Alternativa: Si / Sino

Casi siempre queremos cubrir también el caso contrario:

```
Si (condición) Entonces
    instrucción A
Sino
    instrucción B
Fin Si
```

Aquí solo uno de los dos caminos se ejecuta, nunca ambos.

## 4. Condicionales Anidados

Un condicional puede vivir dentro de otro, para evaluar condiciones más específicas dentro de un caso ya filtrado:

```
Si (condición 1) Entonces
    Si (condición 2) Entonces
        instrucción
    Fin Si
Fin Si
```

Esto es útil, pero si se anidan demasiados niveles el código se vuelve difícil de leer — en el próximo capítulo veremos los operadores lógicos, que suelen ser una alternativa más limpia.

## 5. Ejemplo en Distintos Lenguajes

```javascript
// JavaScript
let edad = 17;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

```python
# Python
edad = 17
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```

```csharp
// C#
int edad = 17;
if (edad >= 18)
{
    Console.WriteLine("Eres mayor de edad");
}
else
{
    Console.WriteLine("Eres menor de edad");
}
```

## 6. Conclusión

Los condicionales son el primer paso para que un programa deje de ser una simple lista de instrucciones y empiece a comportarse como algo inteligente: algo que reacciona según el contexto. En el próximo capítulo veremos los **operadores lógicos**, que nos permiten combinar varias condiciones en una sola decisión.

By: RobARC
