import "./message.css"
import {format} from 'timeago.js'

export default function Message({message, own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
            <img className="messageImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
