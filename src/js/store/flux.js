const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas:[],
			vehiculos:[],
			params : [],
    		caracteristica:[],
    		description:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			

				getAPIName: ()=>{
					fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					//.then(data => console.log(data))
					.then(data =>{ 
						//console.log(data);
						setPersonaje(data.results)
					})
					.catch(err => console.error(err))
				},
				getPlanet:()=>{
					fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setPlanet(data.results)})
					.catch(err => console.error(err))
				},
				getVehicle:()=>{
					fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setVehicle(data.results)})
					.catch(err => console.error(err))
				},
				getAPIcaracteristicas:()=>{
					fetch("https://www.swapi.tech/api/vehicles/"+props.id)
					.then(res => res.json())
					.then(data =>{ 
						//console.log("esto es vehicles"+ data);
						setCaracteristica(data.result.properties)
					})
					.catch(err => console.error(err))
					},
				getAPIcaracteristicas:()=>{
						fetch("https://www.swapi.tech/api/people/"+props.id)
						.then(res => res.json())
						.then(data =>{ 
							//console.log("esto es"+ data);
							setCaracteristica(data.result.properties)
						})
						.catch(err => console.error(err))
				},
				getAPIcaracteristicas:()=>{
					fetch("https://www.swapi.tech/api/planets/"+props.id)
					.then(res => res.json())
					.then(data =>{ 
						//console.log("Planeta"+ data.result);
						setCaracteristica(data.result)
					})
					.catch(err => console.error(err))
					},
			}
		}
	}


export default getState;
