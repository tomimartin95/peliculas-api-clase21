

const Paginado = async () => {

    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=fa66f29448182002a076bdf6b5c6ff26&language=es-MX&page=${pagina}`)
        console.log(respuesta);


        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = "";
            datos.results.forEach(pelicula => {
                peliculas += `
                <div className="pelicula">
                    <img className="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
                    <h3 className="titulo">${pelicula.title}</h3>
                </div>
                `;
            });
        } else if (respuesta.status === 401) {
            console.log("Key incorrecta");
        } else if (respuesta.status === 404) {
            console.log("Lo buscado no se encuentra");
        } else {
            console.log("Error desconocido");
        }

    } catch (error) {
        console.log(error.message);
    }

    return (
        <div>

        </div>
    );
}

export default Paginado;
