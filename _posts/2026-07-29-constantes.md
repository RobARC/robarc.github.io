---
layout: post
title: "Constantes: El Valor Que Nunca Cambia"
date: 2026-07-29
description: "Descubre qué es una constante, en qué se diferencia de una variable, y cómo declararla correctamente en distintos lenguajes de programación."
---

¡Bienvenido/a de nuevo al blog! Ya conocemos las variables y los tipos de datos, esas piezas que nos permiten almacenar y clasificar la información con la que trabaja un programa. Pero no todo en un programa está destinado a cambiar. Hay valores que, por su propia naturaleza, deben mantenerse fijos del principio al fin: para eso existen las constantes.

# 1. Concepto: ¿Qué es una Constante?

Una constante es, como su nombre lo indica, un valor que se almacena en una zona de la memoria pero que **no puede modificarse** durante la ejecución del programa. Se declara una sola vez, se le asigna un valor, y ese valor queda fijo hasta que el programa termina.

Piénsalo así: si una variable es un vaso que puedes llenar y vaciar las veces que quieras, una constante es un vaso sellado de fábrica. Lo que tiene adentro es lo que tiene, y no hay forma de cambiarlo sin romper el vaso (o, en términos de programación, sin que el compilador te marque un error).

# 2. Características de las Constantes

**Valor fijo:** una vez asignado, el valor no puede reasignarse en ningún punto del programa.

**Se declaran e inicializan al mismo tiempo:** a diferencia de una variable, que puedes declarar y asignar después, una constante casi siempre exige que le des su valor en el mismo momento en que la declaras.

**Mejoran la legibilidad:** en lugar de escribir el número 3.1416 por todo tu código, escribes PI, y cualquiera que lea el código entiende de inmediato qué representa.

**Facilitan el mantenimiento:** si ese valor necesita cambiar algún día (por ejemplo, una tasa de impuesto), lo cambias en un solo lugar, no en cada rincón del programa donde aparecía escrito a mano.

**Convención de nombres:** es una práctica muy extendida escribir los nombres de las constantes en mayúsculas, separando palabras con guion bajo, por ejemplo: TASA_IMPUESTO, MAX_INTENTOS, PI.

# 3. Constantes vs. Variables

| | Variable | Constante |
|---|---|---|
| ¿Su valor puede cambiar? | Sí | No |
| ¿Cuándo se le asigna el valor? | En cualquier momento | Al declararla |
| Convención de nombre | camelCase o snake_case | MAYUSCULAS_CON_GUION |
| Ejemplo | edad = 25 | const PI = 3.1416 |

Ambas ocupan un espacio en memoria y ambas tienen un tipo de dato asociado. La única diferencia real, pero fundamental, es que una puede evolucionar durante la ejecución del programa y la otra está congelada desde el instante en que nace.

# 4. Ejemplo: Declaración de Constantes en Distintos Lenguajes

```
// JavaScript
const PI = 3.1416;

# Python (por convención, no hay palabra reservada)
PI = 3.1416

// C#
const double PI = 3.1416;

// Java
final double PI = 3.1416;
```

Nota algo interesante: en Python no existe una palabra reservada para declarar constantes de verdad — es una convención que los programadores respetan escribiendo el nombre en mayúsculas, confiando en que nadie reasignará ese valor. En cambio, lenguajes como JavaScript, C# y Java sí tienen una palabra clave (const o final) que impide, a nivel del propio lenguaje, que el valor sea modificado.

# 5. ¿Cuándo Usar una Constante?

Usa una constante cada vez que un valor:

- No debería cambiar bajo ninguna circunstancia durante la ejecución (como el número PI).
- Se repite varias veces a lo largo del programa (como un límite máximo de intentos de inicio de sesión).
- Representa una regla de negocio que podría necesitar ajustarse en el futuro, pero que mientras tanto debe permanecer fija (como una tasa de impuesto o un porcentaje de descuento).

# 6. Conclusión

Las constantes son pequeñas pero poderosas: nos dan seguridad (evitan que un valor se modifique por error), claridad (le ponen nombre a los números y textos que de otro modo serían crípticos) y facilidad de mantenimiento. Junto con las variables, completan el par de herramientas básicas para manejar datos en cualquier programa.

Con variables, tipos de datos y constantes ya en nuestro cinturón de herramientas, en el próximo capítulo entramos en los operadores: los símbolos que nos permiten combinar, comparar y transformar todos estos datos para que nuestro programa realmente *haga* algo.

By: RobARC

*Este artículo fue redactado con asistencia de IA y revisado por mí.*
