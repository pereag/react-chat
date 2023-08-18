import {useEffect}  from "react"

const Header = (props) => {
    
    const {pseudo, removePseudoValue} = props
    const onClickLogoutBtn = () => {
        removePseudoValue()
    }


    const button = pseudo && <button onClick={onClickLogoutBtn} className="header__btn-logout">Logout</button>

    return (
        <header>
            <div className="header__logo">
                React-CHAT 
            </div>
            {button}
        </header>
    )
}

export default Header