const fs = require('fs');



let listadoPorHacer = [];


const guardarDB = ()=>{

	return new Promise((resolve, reject)=>{

	let data = JSON.stringify(listadoPorHacer);

//--------------------------------------------------------------------------
fs.writeFile(`db/data.json`, data, (err) => {
  if (err)
  	reject(console.log(err))
  else
  	resolve(console.log(`Tarea Guardada Exitosamente`))
});

//----------------------------------------------------------------------------

});
}


const cargarDB =()=>{
	try{
		listadoPorHacer = require('../db/data.json');
	}catch{
		listadoPorHacer = [];
	}

}



const getListado=()=>{
	cargarDB();
	return listadoPorHacer;


}

const actualizar =(descripcion, completado=true)=>{

	cargarDB();
	//CORRECCION DE ARGUMENTO QUE NO SE CONVIERTE EN BOOLEANO CORRECTAMENTE
	if (completado=='false') {
		completado=false;
	}
	//BUSQUEDA POR INDEX DESCRIPCION
	let index = listadoPorHacer.findIndex(tarea=>{
		return tarea.descripcion === descripcion;
		})

		if (index >= 0) {
			listadoPorHacer[index].completado= completado;
			//GUARDADO DB
			guardarDB();
			return true;
		}else{
			return false;
		}

}

const borrar = (descripcion)=>{

	cargarDB();

	let nuevoListado = listadoPorHacer.filter(tarea=>{
		return tarea.descripcion !== descripcion
	});

	if(listadoPorHacer.length === nuevoListado.length){

		return false;
	}else{

		listadoPorHacer=nuevoListado;

		guardarDB();

		return true;

	}
}

const crear = (descripcion) =>{
	cargarDB();
//creacion del objeto de nueva tarea
	let porHacer = {
		descripcion,
		completado: false
	};

//PUS DE NUEVO ELEMENTO
	listadoPorHacer.push(porHacer);

		guardarDB();
		

	return porHacer;

}






module.exports ={

	crear,
	getListado,
	actualizar,
	borrar
}
