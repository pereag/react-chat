import moment from "moment";

const Message = (props) => {
    const {itsCurrentUser, pseudo, message, date} = props

    const getDateFormat = (date) => {
        return moment(date).add(3, 'days').calendar();
    }

    const currentUserStyle = itsCurrentUser ? "message message--current-user" :  "message"

    return (
        <div className={currentUserStyle} >
            <span className="message__pseudo">{pseudo}</span>
            <div className="message__bubble">
                {message}
            </div>
            <span className="message__date">{getDateFormat(date)}</span>
        </div>
    )
}

export default Message