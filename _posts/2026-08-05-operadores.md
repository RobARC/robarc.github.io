---
layout: post
title: "Operadores: Los Símbolos que Hacen Trabajar tus Datos"
date: 2026-08-05
description: "Descubre qué son los operadores aritméticos, de asignación y relacionales, y cómo se combinan con las variables y constantes para que tu programa realmente haga algo."
---

¡Bienvenido/a de nuevo al blog! Ya tenemos variables para guardar datos, tipos de datos para clasificarlos y constantes para los valores que nunca cambian. Pero tener los datos ahí, quietos, no sirve de mucho por sí solo. Necesitamos algo que los combine, los compare y los transforme. Ahí es donde entran los operadores.

# 1. Concepto: ¿Qué es un Operador?

Un operador es un símbolo (o a veces una palabra reservada) que le indica al programa que realice una operación sobre uno o más valores, llamados **operandos**. El resultado de esa operación es, casi siempre, un nuevo valor.

Piénsalo como el verbo de una oración: si las variables y constantes son los sustantivos (los datos), los operadores son las acciones que se hacen con ellos. `edad + 1` no significa nada sin el `+`; es el operador el que convierte dos datos sueltos en una operación real.

# 2. Operadores Aritméticos

Son los que ya conoces de la matemática básica, aplicados a tu código:

- `+` suma
- `-` resta
- `*` multiplicación
- `/` división
- `%` módulo (el residuo de una división, por ejemplo `10 % 3` da `1`)

El módulo suele ser el que más sorprende a quien empieza, pero es muy útil: sirve para saber si un número es par (`n % 2 == 0`) o para repartir elementos en grupos.

# 3. Operadores de Asignación

Le dan un valor a una variable. El más básico es `=`, pero la mayoría de lenguajes ofrecen versiones abreviadas para actualizar un valor existente:

- `=` asigna
- `+=` suma y asigna (`total += 5` equivale a `total = total + 5`)
- `-=` resta y asigna
- `*=` multiplica y asigna
- `/=` divide y asigna

No son operadores distintos en esencia, son atajos que ahorran escritura cuando quieres modificar el valor que una variable ya tenía.

# 4. Operadores Relacionales (de Comparación)

Comparan dos valores y devuelven un resultado booleano: `verdadero` o `falso`.

- `==` igual a
- `!=` distinto de
- `>` mayor que
- `<` menor que
- `>=` mayor o igual que
- `<=` menor o igual que

Estos operadores son la base de todo lo que viene después en el libro: sin ellos no existirían los condicionales ni los ciclos, porque son los que le permiten al programa "decidir" comparando datos.

# 5. Tabla Resumen

| Tipo | Operadores | ¿Qué devuelve? |
|---|---|---|
| Aritméticos | `+ - * / %` | Un número |
| Asignación | `= += -= *= /=` | El nuevo valor asignado |
| Relacionales | `== != > < >= <=` | Un valor booleano |

# 6. Ejemplo: Operadores en Distintos Lenguajes

```
// JavaScript
let total = 10;
total += 5;        // total ahora es 15
console.log(total > 12); // true

# Python
total = 10
total += 5
print(total > 12)  # True

// C#
int total = 10;
total += 5;
Console.WriteLine(total > 12); // True
```

La sintaxis cambia un poco de lenguaje a lenguaje, pero el comportamiento de cada operador es prácticamente universal. Aprenderlos una vez te sirve en casi cualquier lenguaje que toques después.

# 7. Conclusión

Los operadores son el puente entre tener datos guardados y hacer algo útil con ellos: sumar un total, validar una edad, comparar una contraseña. Junto con las variables, los tipos de datos y las constantes, completan las piezas básicas para representar y manipular información.

En el próximo capítulo damos un paso más: veremos cómo se combinan varios operadores y operandos en una sola **expresión**, y cómo el orden en que se evalúan puede cambiar por completo el resultado.

By: RobARC

*Este artículo fue redactado con asistencia de IA y revisado por mí.*
