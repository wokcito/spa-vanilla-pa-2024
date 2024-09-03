import Header from "../templates/Header";
import getData from "../utils/getData"
import Character from "./Character"

const Home =  async () => {

    const characters = await getData();

    const view = `
        ${await Header()}
        <div class="Characters">
            ${characters
                .map(Character)
                .join('')
            }
        </div>
    `

    return view
}

export default Home