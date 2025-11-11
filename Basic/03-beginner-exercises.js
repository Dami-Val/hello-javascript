/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// here you go.


// 2. Escribe un comentario en varias líneas

/*
De acuerdo.
Lo haré.
¿Feliz?
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let numericType = 20 // or float (1.5)
let StringType = "Damian V"
let UndefinedType = undefined
let nullType = null
let booleanType = true // or false
let BigIntType = BigInt(65565465465424321894556522199978998754565465641123265465465465465498498123211)
let SymbolType = Symbol("⭐")


// 4. Imprime por consola el valor de todas las variables

console.log(numericType)
console.log(StringType)
console.log(UndefinedType)
console.log(nullType)
console.log(booleanType)
console.log(BigIntType)
console.log(SymbolType)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof numericType)
console.log(typeof StringType)
console.log(typeof UndefinedType)
console.log(typeof nullType)
console.log(typeof booleanType)
console.log(typeof BigIntType)
console.log(typeof SymbolType)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

numericType = 1983
StringType = "Damian Valencia"
UndefinedType = undefined // solo hay ese tipo para este
nullType = null // solo hay ese tipo para este
booleanType = false 
BigIntType = BigInt(213213156544841668714565465641123265465465465465498498123211)
SymbolType = Symbol("👁️")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

numericType = undefined
StringType = null
UndefinedType = 49845 
nullType = false
booleanType = Symbol("⭐") 
BigIntType = "wow!"
SymbolType = BigInt(87788784554465414565465641123265465465465465498498123211)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const numericTypeConst = 20 // or float (1.5)
const StringTypeConst = "Damian V"
const UndefinedTypeConst = undefined
const nullTypeConst = null
const booleanTypeConst = true // or false
const BigIntTypeConst = BigInt(65565465465424321894556522199978998754565465641123265465465465465498498123211)
const SymbolTypeConst = Symbol("⭐")

// 9. A continuación, modifica los valores de las constantes

// Eso no es posible en este lenguaje debido a que esto causaria error.

/*  --- ERROR ---
const numericTypeConst = 21 // or float (1.5)
const StringTypeConst = "Damian VA"
const UndefinedTypeConst = null
const nullTypeConst = undefined
const booleanTypeConst = false
const BigIntTypeConst = BigInt(65565465465424321894556522199978998754565465641123265465465465465498498123211)
const SymbolTypeConst = Symbol("⭐")
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse


/*  --- ERROR ---
const numericTypeConst = 21 // or float (1.5)
const StringTypeConst = "Damian VA"
const UndefinedTypeConst = null
const nullTypeConst = undefined
const booleanTypeConst = false
const BigIntTypeConst = BigInt(65565465465424321894556522199978998754565465641123265465465465465498498123211)
const SymbolTypeConst = Symbol("⭐")
*/




/*
REVISADO POR: Claude Sonnet 4.5

ANALISIS DETALLADO:

✅ Ejercicio 1 - Comentario linea: CORRECTO
   Implementaste correctamente un comentario de una sola linea

✅ Ejercicio 2 - Comentario multilinea: CORRECTO
   Usaste adecuadamente comentarios de multiples lineas

✅ Ejercicio 3 - Primitivas declaradas: CORRECTO
   Declaraste todas las 7 primitivas: number, string, undefined, null, boolean, BigInt, Symbol
   Excelente dominio de cada tipo de dato

✅ Ejercicio 4 - Imprimir valores: CORRECTO
   Usaste console.log() correctamente para mostrar los valores de cada variable

✅ Ejercicio 5 - Imprimir tipos: CORRECTO
   Aplicaste typeof para identificar el tipo de cada primitiva

✅ Ejercicio 6 - Modificar mismo tipo: CORRECTO
   Reasignaste todas las variables manteniendo su tipo de dato original
   Demuestra comprension del concepto de reasignacion

✅ Ejercicio 7 - Cambiar tipos: CORRECTO
   Cambiaste exitosamente los tipos de datos sin errores
   Evidencia que comprendiste la dinamica de tipos en JavaScript

✅ Ejercicio 8 - Constantes primitivas: CORRECTO
   Declaraste constantes con todos los tipos primitivos sin problemas

✅ Ejercicio 9 - Por que no modificar const: CORRECTO
   Explicaste correctamente que las constantes no pueden reasignarse
   Comentaste el codigo de error para evitar exceptions

✅ Ejercicio 10 - Comentar lineas con error: CORRECTO
   Comentaste+ correctamente el codigo que generaria error
   Uso correcto de comentarios de programacion

RESULTADO: 10/10 ACIERTOS - 0 DESACIERTOS

CALIFICACION FINAL: 10.0 / 10.0

OBSERVACIONES GENERALES:
- Demostraste comprension clara de variables, constantes y tipos primitivos
- El codigo es limpio y funcional
- Completaste todos los ejercicios sin errores conceptuales
- Buen trabajo aprendiendo declaracion de variables en esta sesion

Has completado correctamente todos los ejercicios de declaracion de variables.
*/