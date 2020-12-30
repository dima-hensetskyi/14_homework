const table = document.getElementById("characters-table");
export const getCharacters = (episode) => fetch("https://swapi.dev/api/people")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const heroes = data.results.filter((character) =>
            character.films.includes(`http://swapi.dev/api/films/${episode}/`))
        heroes.map((character) => {
            table.innerHTML += `
            <tr>
                <td>${character.name}</td>
                <td>${character.birth_year}</td>
                <td>${character.gender}</td>
            </tr>`
        })
    })