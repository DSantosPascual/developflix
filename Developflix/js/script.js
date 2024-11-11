import peliculas from './peliculas.js'


function mostrarPeliculasPorGenero(genreId, containerId) {
  const peliculasFiltradas = peliculas.filter(function(pelicula) {
    return pelicula.genre_ids.includes(genreId);
  });

  const contenedor = document.getElementById(containerId);

  contenedor.innerHTML = '';

  peliculasFiltradas.forEach(function(pelicula) {
    const peliculaDiv = document.createElement('div');
    peliculaDiv.classList.add('pelicula');

    peliculaDiv.innerHTML = '<img src="https://image.tmdb.org/t/p/w200' + pelicula.poster_path + '" alt="' + pelicula.title + '">' +
                            '<h3>' + pelicula.title + '</h3>';

    contenedor.appendChild(peliculaDiv);
  });
}
mostrarPeliculasPorGenero(28, 'genero-28'); 
mostrarPeliculasPorGenero(53, 'genero-53'); 
mostrarPeliculasPorGenero(12, 'genero-12'); 


