import { useState } from "react";

const Home = (props) => {
    const {editCurrentPseudo} = props

    const [pseudo, setPseudo] = useState("") 

    const handlerPseudo = (e) => {
        setPseudo(e.target.value)
    }

    const onClickEnterBtn = (e) => {
        e.stopPropagation()
        e.preventDefault()
        editCurrentPseudo(pseudo)
    }

    return (
        <div className="home">
            <form action="" className="home__form">
                <label htmlFor="pseudo">Pseudo</label>
                <input onChange={handlerPseudo} name="pseudo" type="text" value={pseudo}/>
                <button onClick={onClickEnterBtn}>Enter</button>
            </form>
        </div>
    )
}

export default Home