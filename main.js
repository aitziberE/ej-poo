// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), 
// que muestra por pantalla las propiedades de la persona.

class Person{ 
    constructor(name, age, genre) {
        this.name = name
        this.age = age
        this.genre = genre
    }
    obtDetails(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.age}, Género: ${this.genre}`)
    }
}

// Crear la clase Student, que hereda de Person, e incluye las propiedades course y 
// group y el método register(), que muestre por pantalla el resultado.

class Student extends Person{ 
    constructor(name, age, genre, course, group) {
        super(name, age, genre)
        this.course = course
        this.group = group
    }
    register() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.age}, Género: ${this.genre}, Curso: ${this.course}, Grupo: ${this.group}`)
    }
}

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y 
// level y el método assign(), que muestre por pantalla el resultado.
class Teacher extends Person{ 
    constructor(name, age, genre, asignatura, level) {
        super(name, age, genre)
        this.asignatura = asignatura
        this.level = level
    }
    assign() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.age}, Género: ${this.genre}, Asignatura: ${this.asignatura}, Nivel: ${this.level}`)
    }
}