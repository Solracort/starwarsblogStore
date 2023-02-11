const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listaFavs:[],
			personajes: [],
			planetas:[],
			vehiculos:[],
			caracteristicaPersonaje:{},
			caracteristicaVehiculo:[],
    		caracteristicaPlaneta:[],
    		
		},
		actions: {
			// Use getActions to call a function within a fuction
				getAPIName: ()=>{
					fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data =>{ 
						//console.log(data);
						setStore({
							personajes:data.results
						})
					})
					.catch(err => console.error(err))
				},
				getPlanet:()=>{
					fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
							setStore({
							planetas: data.results
						})
					})	
					.catch(err => console.error(err))
				},
				getVehicle:()=>{
					fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						//console.log(data)
						setStore({
							vehiculos: data.results})
						})
					.catch(err => console.error(err))
				},
				getAPIcaracteristicasVehicles:(id)=>{
					fetch("https://www.swapi.tech/api/vehicles/"+id)
					.then(res => res.json())
					.then(data =>{ 
						//console.log("esto es vehicles"+ data);
						setStore({
							caracteristicaVehiculo:	data.result.properties
						})
					})
					.catch(err => console.error(err))
					},
				getAPIcaracteristicasPeople:(id)=>{
					
						fetch("https://www.swapi.tech/api/people/"+id)
						.then(res => res.json())
						.then(data =>{ 
								setStore({
								caracteristicaPersonaje:data.result.properties
							})
						})
						.catch(err => console.error(err))
				},
				getAPIcaracteristicasPlanets:(id)=>{
					fetch("https://www.swapi.tech/api/planets/"+id)
					.then(res => res.json())
					.then(data =>{ 
						console.log("Este Planeta"+ data.result);
						setStore({
							caracteristicaPlaneta:data.result
						})
					})
					.catch(err => console.error(err))
				},
				addFav: (valorFav, indexfav)=>{
					setStore({
						listaFavs: [...getStore().listaFavs, valorFav]
						})
						console.log(getStore().listaFavs)
				},	
				deleteFav: (index)=> {
					
					let borrar = (getStore().listaFavs[index])
					setStore({
						listaFavs: getStore().listaFavs.filter((item) => item!=borrar)
				})
				}
			}
		}
	}
export default getState;
