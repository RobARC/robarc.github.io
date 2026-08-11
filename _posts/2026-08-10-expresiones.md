---
layout: post
title: "Expresiones: Cuando los Operadores se Ponen a Trabajar Juntos"
date: 2026-08-10
description: "Descubre qué es una expresión, cómo se combinan variables, constantes y operadores para producir un resultado, y por qué el orden de evaluación (precedencia) puede cambiarlo todo."
---

¡Bienvenido/a de nuevo al blog! Ya tenemos variables y constantes para guardar datos, y operadores para combinarlos. El siguiente paso natural es juntar todo eso en una sola línea con sentido: eso es exactamente una **expresión**.

# 1. Concepto: ¿Qué es una Expresión?

Una expresión es cualquier combinación de valores, variables, constantes y operadores que el programa puede **evaluar** para producir un resultado. Ese resultado siempre tiene un valor y un tipo, así como cualquier variable.

`5 + 3` es una expresión que se evalúa a `8`. `edad >= 18` es una expresión que se evalúa a `verdadero` o `falso`. Incluso una variable sola, como `nombre`, es técnicamente una expresión: se evalúa al valor que esa variable contiene en ese momento.

# 2. Tipos de Expresiones

**Expresiones aritméticas:** combinan números y operadores aritméticos, y devuelven un número. Ejemplo: `precio * cantidad`.

**Expresiones relacionales:** comparan dos valores y devuelven un booleano. Ejemplo: `stock > 0`.

**Expresiones lógicas:** combinan valores booleanos (a veces el resultado de otras expresiones relacionales) para producir un booleano final. Estas las veremos a fondo con los operadores lógicos, pero ya puedes intuir cómo se ven: `edad >= 18 y tiene_cedula`.

**Expresiones de concatenación:** combinan texto. Ejemplo: `"Hola, " + nombre`.

# 3. Precedencia: El Orden Importa

Cuando una expresión tiene varios operadores, el programa no los evalúa de izquierda a derecha sin más: sigue un orden de prioridad llamado **precedencia**, muy similar al que aprendiste en matemáticas con la regla de "multiplicación antes que suma".

Por ejemplo, en `2 + 3 * 4`, el resultado es `14` y no `20`, porque la multiplicación se evalúa antes que la suma. Si de verdad quieres que la suma ocurra primero, necesitas paréntesis: `(2 + 3) * 4` sí da `20`.

Un orden típico de mayor a menor precedencia:

1. Paréntesis `()`
2. Multiplicación, división y módulo `* / %`
3. Suma y resta `+ -`
4. Operadores relacionales `> < >= <= == !=`
5. Operadores lógicos (los veremos más adelante)

# 4. Ejemplo: Expresiones en Distintos Lenguajes

```
// JavaScript
let total = 10 + 5 * 2;      // 20, no 30
let esValido = total > 15;   // true

# Python
total = 10 + 5 * 2
es_valido = total > 15

// C#
int total = 10 + 5 * 2;
bool esValido = total > 15;
```

En los tres casos el resultado es el mismo: el lenguaje respeta la precedencia matemática estándar, sin importar la sintaxis particular de cada uno.

# 5. Tabla Resumen

| Tipo de expresión | Ejemplo | Resultado |
|---|---|---|
| Aritmética | `precio * cantidad` | Un número |
| Relacional | `stock > 0` | Un booleano |
| Lógica | `activo y verificado` | Un booleano |
| Concatenación | `"Hola, " + nombre` | Un texto |

# 6. Conclusión

Una expresión es donde tus datos finalmente cobran vida: variables, constantes y operadores se combinan para producir un resultado concreto. Entender la precedencia es clave, porque un orden mal asumido puede generar un bug silencioso, difícil de detectar, que da un resultado "casi correcto" pero no exactamente el esperado.

En el próximo capítulo cerramos la Parte I de Fundamentos hablando de cómo un programa se comunica con el mundo exterior: la **entrada y salida de datos**.

By: RobARC

*Este artículo fue redactado con asistencia de IA y revisado por mí.*
