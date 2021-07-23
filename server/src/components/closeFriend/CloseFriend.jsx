import "./closeFriend.css"

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src={PF+user.profilePicture} alt="friend" />
                        <span className="sidebarFriendName">{user.username}</span>
                    </li>
    )
}
