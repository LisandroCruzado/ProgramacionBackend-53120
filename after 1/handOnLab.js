class TicketManager {
    #precioBaseDeGanancia // Atributo privado
    constructor(){
        this.eventos = []
    }


    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha ){
        const evento = {
            id: this.#getId(),
            nombre,
            lugar,
            precio: precio + precio * 0.15,
            capacidad: typeof capacidad != 'undefined' ? capacidad : 50,
            fecha: typeof fecha != 'undefined' ? fecha: this.#nowDate(),
            participantes: []
        }
        this.eventos.push(evento)
    }

    agregarUsuario(eventoId, usuarioId) {
        let i = null;
        this.eventos.find(function (evento, indice) {
            if (evento.id === eventoId) i = indice
        })

        if (i !== null){
            this.eventos[i].participantes.push(usuarioId);
            return ('Usuario agregado')
        }
        return ('El evento no existe')
        // if (!this.eventoos.filter(evento => this.evento.id === eventoId).length === 0){
        //     return 'Evento no encontrado'
        // }
    }

    #nowDate() {
        const fecha = new Date()
        const dia = fecha.getDate().toString().padStart(2,'0')
        const mes = (fecha.getMonth() + 1).toString().padStart(2,'0')
        const anio = fecha.getFullYear()

        return `${dia}/${mes}/${anio}`
    }

    #getId(){
        if(this.eventos.length === 0) return 1
        return this.eventos[this.eventos.length - 1].id + 1
    }

    ponerEventoEnGira(eventoId, lugar, fecha){
        let i = null;
        this.eventos.find(function (evento, indice) {
            if (evento.id === eventoId) i = indice
        })

        if (i !== null){
            const nuevoEvento = {
                ...this.eventos[i]
            }
            nuevoEvento.id = this.#getId()
            nuevoEvento.lugar = lugar
            nuevoEvento.fecha = fecha
            nuevoEvento.participantes = []

            this.eventos.push(nuevoEvento)
            return 'Evento generado correctamente'
        }

    }

}   

const prueba = new TicketManager()
console.log(prueba.getEventos());

prueba.agregarEvento('Afaterclass', 'Remoto', 100)
prueba.agregarEvento('Cafe Coder', 'Caballito', 150, 100, '01/12/1990')

console.log(prueba.getEventos());
