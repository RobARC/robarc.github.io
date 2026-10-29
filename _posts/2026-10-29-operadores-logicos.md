---
layout: post
title: "Operadores Lógicos: Cuando Una Sola Condición No Alcanza"
date: 2026-10-29
chapter: 12
redirect_from: /fundamentos-de-programacion/2026/10/29/operadores-logicos/
categories: [fundamentos-de-programacion]
tags: [operadores-logicos, control-de-flujo, pseudocodigo, javascript, python]
description: "Aprende a combinar varias condiciones con los operadores lógicos Y, O y NO, a leer tablas de verdad y a controlar el orden de evaluación."
---

¡Bienvenido/a de nuevo al blog! En el capítulo anterior le enseñamos a tu programa a decidir con los condicionales: si algo es verdad, haz esto; si no, haz aquello. Pero en la vida real las decisiones casi nunca dependen de una sola cosa. ¿Sales a correr? Depende de si no llueve **y** de si tienes tiempo. ¿Entras al cine? Si tienes boleta **o** te invitaron. Para eso existen los operadores lógicos.

## 1. Concepto: ¿Qué es un Operador Lógico?

Un operador lógico es una herramienta que **combina o transforma condiciones** para obtener un único resultado: verdadero o falso. Ya conoces los operadores de comparación (`>`, `<`, `==`...), que producen un valor verdadero o falso. Los operadores lógicos toman esos valores y los unen como piezas de lego.

Son tres, y los vas a usar toda tu vida como programador:

- **Y** (AND): verdadero solo si **todas** las condiciones son verdaderas.
- **O** (OR): verdadero si **al menos una** condición es verdadera.
- **NO** (NOT): invierte el valor; lo verdadero se vuelve falso y viceversa.

## 2. El Operador Y: Todas Deben Cumplirse

Piensa en una montaña rusa: para subir debes medir más de 1,40 m **y** tener más de 12 años. Si falla cualquiera de las dos, no subes.

```
Si estatura > 1.40 Y edad > 12 Entonces
    Escribir "¡Puedes subir!"
Sino
    Escribir "Lo siento, aún no"
Fin Si
```

## 3. El Operador O: Basta con Una

Para entrar gratis a un museo debes ser estudiante **o** mayor de 60 años. Con que se cumpla una, la puerta se abre.

```
Si esEstudiante O edad >= 60 Entonces
    Escribir "Entrada gratis"
Fin Si
```

## 4. El Operador NO: Dar la Vuelta

A veces es más natural preguntar por lo contrario. "Si **no** está lloviendo, salgo a jugar."

```
Si NO estaLloviendo Entonces
    Escribir "¡A jugar afuera!"
Fin Si
```

## 5. Las Tablas de Verdad

Una tabla de verdad muestra todas las combinaciones posibles. Son pequeñas, pero vale la pena memorizarlas:

| A | B | A Y B | A O B | NO A |
|---|---|-------|-------|------|
| V | V | V     | V     | F    |
| V | F | F     | V     | F    |
| F | V | F     | V     | V    |
| F | F | F     | F     | V    |

Un truco para recordarlo: **Y es exigente** (lo quiere todo), **O es generoso** (se conforma con poco) y **NO es llevado de la contraria**.

## 6. Combinando Operadores y el Orden de Evaluación

Puedes mezclar los tres en una misma condición, pero cuidado: igual que en matemáticas la multiplicación va antes que la suma, aquí **NO se evalúa primero, luego Y, y al final O**. Cuando tengas dudas, usa paréntesis: hacen tu intención clara para la computadora y para quien lea tu código.

```
Si (esFinDeSemana O esFestivo) Y NO estaLloviendo Entonces
    Escribir "Vamos a la playa"
Fin Si
```

Sin los paréntesis, el programa entendería otra cosa muy distinta. Haz la prueba mental con un festivo lluvioso.

## 7. Ejemplo en Distintos Lenguajes

Cada lenguaje escribe los operadores a su manera, pero la idea es la misma:

```javascript
// JavaScript
let edad = 15;
let tienePermiso = true;
if (edad >= 18 || tienePermiso) {
    console.log("Puedes ir a la excursión");
} else {
    console.log("Necesitas el permiso de tus padres");
}
```

```python
# Python
edad = 15
tiene_permiso = True
if edad >= 18 or tiene_permiso:
    print("Puedes ir a la excursión")
else:
    print("Necesitas el permiso de tus padres")
```

```csharp
// C#
int edad = 15;
bool tienePermiso = true;
if (edad >= 18 || tienePermiso)
{
    Console.WriteLine("Puedes ir a la excursión");
}
else
{
    Console.WriteLine("Necesitas el permiso de tus padres");
}
```

| Pseudocódigo | JavaScript / C# | Python |
|--------------|-----------------|--------|
| Y            | `&&`            | `and`  |
| O            | <code>&#124;&#124;</code> | `or`   |
| NO           | `!`             | `not`  |

Un detalle curioso: la mayoría de los lenguajes son "perezosos". En `A Y B`, si `A` ya es falso, ni siquiera miran `B`, porque el resultado no puede cambiar. A esto se le llama **evaluación en cortocircuito**, y más adelante verás lo útil que es.

## 8. Conclusión

Con los operadores lógicos tus programas ya no deciden mirando una sola cosa: pueden sopesar varias condiciones a la vez, igual que tú cuando decides si sales o te quedas en casa. Recuerda: Y lo exige todo, O se conforma con una y NO le da la vuelta a todo.

En el próximo capítulo veremos qué hacer cuando no hay solo dos caminos, sino muchos: la **selección múltiple**. ¡Nos vemos allí!

By: RobARC
