---
layout: post
title: "Diagramas de Flujo: Dibuja Tu Lógica Antes de Programarla"
date: 2025-06-09
description: "Descubre qué es un diagrama de flujo, sus símbolos estándar y por qué es la herramienta clave para diseñar tu lógica antes de escribir código."
---

¡Bienvenido/a de nuevo al blog! Ya hablamos del algoritmo como el corazón lógico de todo programa. Ahora vamos a ver una de las herramientas más antiguas y efectivas para diseñar esa lógica antes de escribir una sola línea de código: el diagrama de flujo.

Antes de traducir un algoritmo a Python, C# o cualquier otro lenguaje, conviene dibujarlo. Un diagrama de flujo nos deja ver, de un vistazo, si la lógica tiene sentido, si falta un paso o si hay un camino que nunca se recorre.

# 1. Concepto: ¿Qué es un Diagrama de Flujo?

Un diagrama de flujo es la representación gráfica de un algoritmo.

Utiliza símbolos estándar, conectados por flechas, para mostrar la secuencia de pasos que sigue un proceso, desde su inicio hasta su fin.

Cada símbolo representa un tipo de acción distinto: iniciar o terminar, procesar un dato, tomar una decisión, o mostrar una entrada o salida de información.

Piensa en un diagrama de flujo como el plano de una casa antes de construirla. El plano no es la casa, pero te permite detectar problemas de diseño mucho antes de poner el primer ladrillo. Con el algoritmo pasa lo mismo: el diagrama de flujo te permite detectar errores de lógica antes de escribir código.

# 2. Símbolos Estándar

Los diagramas de flujo usan un conjunto de símbolos reconocidos internacionalmente:

**Óvalo (Inicio/Fin):** marca el punto donde comienza o termina el proceso.

**Rectángulo (Proceso):** representa una acción o instrucción, como una operación matemática o una asignación de valor.

**Paralelogramo (Entrada/Salida):** representa la lectura de un dato (entrada) o la presentación de un resultado (salida).

**Rombo (Decisión):** representa un punto donde el flujo se bifurca según una condición, normalmente con dos salidas: sí/no o verdadero/falso.

**Flechas:** conectan los símbolos e indican la dirección en la que fluye el proceso.

![Símbolos estándar de un diagrama de flujo](/img/simbolos-diagrama-flujo.svg)

# 3. Características de un Buen Diagrama de Flujo

Al igual que el algoritmo que representa, un buen diagrama de flujo debe ser:

**Claro:** cada símbolo debe representar una única acción o decisión, sin ambigüedad.

**Secuencial:** el flujo debe poder seguirse de principio a fin sin saltos confusos.

**Completo:** debe contemplar todos los caminos posibles, incluyendo los casos donde una condición no se cumple.

**Consistente:** debe usar siempre el símbolo correcto para cada tipo de acción, respetando la simbología estándar.

# 4. Ejemplo: Determinar si un Número es Par o Impar

Tomemos un problema sencillo para ver el diagrama de flujo en acción:

1. **Inicio.**
2. **Entrada:** leer un número.
3. **Proceso:** calcular el residuo de dividir el número entre 2.
4. **Decisión:** ¿el residuo es igual a 0?
   - Si la respuesta es sí, seguimos a "el número es par".
   - Si la respuesta es no, seguimos a "el número es impar".
5. **Salida:** mostrar el resultado ("par" o "impar").
6. **Fin.**

![Diagrama de flujo: número par o impar](/img/diagrama-par-impar.svg)

Nota cómo el rombo de decisión genera dos caminos distintos, y ambos terminan reuniéndose antes del símbolo de salida. Esta es la esencia de representar condicionales de forma gráfica, algo que veremos con más detalle cuando lleguemos al capítulo de condicionales.

# 5. ¿Por Qué Usar Diagramas de Flujo?

- Permiten detectar errores de lógica antes de escribir código, cuando corregirlos es mucho más barato.
- Facilitan la comunicación de una idea entre personas que no necesariamente programan en el mismo lenguaje, o que no programan en absoluto.
- Sirven como documentación visual del funcionamiento de un proceso, útil para quien retome el proyecto meses después.
- Son independientes del lenguaje de programación, igual que el algoritmo que representan.

# 6. Conclusión

El diagrama de flujo no reemplaza al algoritmo, lo ilustra. Es una herramienta para pensar antes de programar, para validar que la lógica es sólida antes de traducirla a un lenguaje específico.

Dominar esta herramienta, junto con el pseudocódigo que veremos en el próximo capítulo, te prepara para diseñar soluciones claras y bien pensadas, sin importar en qué lenguaje termines escribiendo el código.

By: **RobARC**

Este artículo fue redactado con asistencia de IA y revisado por mí.

Fuentes: - Fundamentals-of-Computer-Programming-with-CSharp-Nakov-eBook-v2013
 - Programacion-Con-Visual-Basic-2008-McGraw-Hill
 - Programación en C, C++, Java y UML by Luis Joyanes Aguilar
 - Programming in C 3rd edition by Stephen G. Kochan
 - Aprenda a pensar como un programador con python by Allen Downey, Jeffrey Elkner, Chris Meyers
