const opts_act = {
	descripcion: {
		demand: true,
		alias: 'd',
		desc: 'Descripcion de la tarea por hacer'
		},
	completado: {
			alias: 'c',
			default: true,
			desc: 'Marca como completado o pendiente la tarea'
		}


}

const opts_crea = {
	descripcion: {
		demand: true,
		alias: 'd',
		desc: 'Descripcion de la tarea por hacer'
		}


}

const argv = require('yargs')
	.command('crear', 'Crea un elemento por hacer', opts_crea)
	.command('actualizar', 'Actualiza el estado completado de una tarea por hacer', opts_act)
	.command('listar', 'Lista las tareas')
	.command('borrar', 'Borra una tarea', opts_crea)
	.help()	
	.argv;


	module.exports = {
		argv
	}