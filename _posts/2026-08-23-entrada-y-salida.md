---
layout: post
title: "Entrada y Salida de Datos"
date: 2026-08-23
categories: fundamentos-programacion
---

# Entrada y Salida de Datos

Hasta ahora hemos hablado de variables, constantes, operadores y expresiones: las piezas que le dan a un programa su capacidad de "pensar". Pero un programa que solo piensa para sí mismo no sirve de mucho. Para que sea útil, necesita **comunicarse**: recibir información del mundo exterior y devolver resultados. A eso le llamamos Entrada y Salida de Datos (I/O, por sus siglas en inglés: *Input/Output*).

## ¿Qué es la entrada y qué es la salida?

- **Entrada (Input):** cualquier dato que el programa recibe desde afuera. Puede venir del teclado, de un archivo, de una base de datos o de una API.
- **Salida (Output):** cualquier dato que el programa entrega hacia afuera. Puede ser un mensaje en pantalla, un archivo generado o una respuesta enviada a otro sistema.

En esta primera parte de la serie nos enfocamos en la forma más básica: leer desde el teclado y mostrar en consola.

## Salida de datos

Mostrar información en pantalla es, casi siempre, lo primero que aprendemos a hacer en cualquier lenguaje.

**JavaScript**
```javascript
console.log("Hola, mundo!");
```

**Python**
```python
print("Hola, mundo!")
```

**C#**
```csharp
Console.WriteLine("Hola, mundo!");
```

**Java**
```java
System.out.println("Hola, mundo!");
```

## Entrada de datos

Leer lo que el usuario escribe requiere un paso más: el programa tiene que "pausar" y esperar esa información.

**JavaScript** (en Node.js, usando `readline-sync` o similar; en el navegador se usa `prompt()`)
```javascript
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre);
```

**Python**
```python
nombre = input("¿Cómo te llamas? ")
print("Hola,", nombre)
```

**C#**
```csharp
Console.Write("¿Cómo te llamas? ");
string nombre = Console.ReadLine();
Console.WriteLine("Hola, " + nombre);
```

**Java**
```java
Scanner sc = new Scanner(System.in);
System.out.print("¿Cómo te llamas? ");
String nombre = sc.nextLine();
System.out.println("Hola, " + nombre);
```

## Un detalle importante: todo entra como texto

Sin importar el lenguaje, lo que el usuario escribe llega casi siempre como **cadena de texto (string)**, incluso si esperas un número. Si necesitas hacer operaciones matemáticas con ese dato, tienes que convertirlo explícitamente:

```python
edad = int(input("¿Cuántos años tienes? "))
```

```javascript
let edad = Number(prompt("¿Cuántos años tienes?"));
```

Olvidar esta conversión es una de las fuentes de error más comunes para quien recién empieza: sumar "5" + "3" no da 8, da "53", porque el lenguaje está concatenando texto, no sumando números.

## ¿Por qué importa esto?

La entrada y salida es lo que convierte un programa de un ejercicio teórico en una herramienta real: una calculadora, un formulario, un chatbot, un sistema de citas. Todo empieza aquí: recibir un dato, procesarlo, y devolver un resultado.

En los próximos capítulos vamos a construir sobre esta base para armar programas que realmente interactúan con quien los usa.

---

*Este artículo pertenece a la serie "Fundamentos de Programación para Jóvenes". Contenido generado con apoyo de IA como herramienta de organización y redacción, sobre una base de conocimiento propia del autor.*
