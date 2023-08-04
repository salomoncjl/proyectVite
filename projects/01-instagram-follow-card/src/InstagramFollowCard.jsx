export function InstagramFollowCard({ formatUserName ,userName, name, isFollowing}) {
    // console.log(isFollowing)
    
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
            <button>
                Seguir
            </button>
        </aside>
    </article>
    )
}