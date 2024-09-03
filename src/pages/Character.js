

const Character = ({
    name,
    image,
    episode,
    status,
    gender,
    origin,
    location,
    species
}) => {

    const view = `
    <div class="Character-inner">
        <article class="Character-card">
            <img src="${image}" alt="name">
            <h2>${name}</h2>   
        </article>

        <article class="Character-card">
        <h3>Episodes:
            ${episode
                .map((url) => `<div>${url}</div>`)
                .join('')
            }
        </h3>
        <h3>Status: ${status}</h3>
        <h3>Species: ${species}</h3>
        <h3>Gender: ${gender}</h3>
        <h3>Origin: ${origin.name}</h3>
        <h3>Last Location: ${location.name}</h3>
        </article>
    </div>        
    `

    return view
}

export default Character