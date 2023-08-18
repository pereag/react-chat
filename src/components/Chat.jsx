import Message from "./Message.jsx";
import moment from "moment";
import { useContext, useState } from "react";
import ChatContext from "react";

const Chat = (props) => {

    const {currentPseudo} = props

    const chatContext = useContext(ChatContext)

    const [currentMessage, setCurrentMessage] = useState("");

    const getDateFormat = (date) => {
        return moment(date).add(3, 'days').calendar();
    }

    const handleCurrentMessage = (e) => {
        setCurrentMessage(e.target.value)
        console.log(currentMessage)
    }

    console.log(getDateFormat(Date.now() ))

    return (
        <div className="chat">
            <div className="responseArea">
                <Message itsCurrentUser={false} pseudo={"valou"} message={"hello mec ça va ? "} date={getDateFormat(Date.now())}></Message>
                <Message itsCurrentUser={true} pseudo={"valou"} message={"hello mec ça va ? "} date={getDateFormat(Date.now())}></Message>
            </div>
            <div className="currentUserArea">
                <label htmlFor="response">Me ({currentPseudo})</label>
                <div className="currentUserArea__container">
                <input name="response" className="currentUserArea__input" placeholder="Response" type="text" value={currentMessage} onChange={handleCurrentMessage} />
                <button className="button--dark">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat