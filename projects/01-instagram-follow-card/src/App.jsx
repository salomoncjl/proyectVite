import { InstagramFollowCard } from "./InstagramFollowCard";

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className="app-instagram">
            <InstagramFollowCard 
                formatUserName={format}
                isFollowing={false}
                userName='midudev'
                name="Miguel"
                />
            <InstagramFollowCard 
                formatUserName={format}
                isFollowing 
                userName='Goku' 
                name="goku"
                />
            <InstagramFollowCard 
                formatUserName={format}
                isFollowing 
                userName='german' 
                name="German"
                />
        </section>
    )
}