import Message from "./Message.jsx";
import { useContext, useState } from "react";
import ChatContext from "./ChatContext.jsx";

const Chat = (props) => {

    const {currentPseudo} = props

    const chatContext = useContext(ChatContext)

    const [currentMessage, setCurrentMessage] = useState("");

    const handleCurrentMessage = (e) => {
        setCurrentMessage(e.target.value)
    }

    const handleBtnSend = () => {
        currentMessage && chatContext[1](currentMessage)
        setCurrentMessage("")
    }

    const messageTemplate = chatContext[0].map((item, index) => <Message key={index} itsCurrentUser={item.pseudo == currentPseudo ? true : false} pseudo={item.pseudo} message={item.message} date={item.date}/>);

    return (
        <div className="chat">
            <div className="responseArea">
                {messageTemplate}
            </div>
            <div className="currentUserArea">
                <label htmlFor="response">Me ({currentPseudo})</label>
                <div className="currentUserArea__container">
                <input name="response" className="currentUserArea__input" placeholder="Response" type="text" value={currentMessage} onChange={handleCurrentMessage} />
                <button onClick={handleBtnSend} className="button--dark">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat