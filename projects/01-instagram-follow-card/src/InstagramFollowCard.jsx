import { useState } from "react";

export function InstagramFollowCard({ formatUserName, userName, name}) {
    // console.log(isFollowing)
    const [isFollowing, setIsFollowing] = useState(false)

    // Las lineas estas con la linea 5 son equivalentes
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowwing = state[1]

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? ''
        : 'ig-followCard-Button'
    
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        <article>
        <header>
            <img 
                src={imageSrc}
                alt="Avatar Goku"/>
            <div>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}