import { InstagramFollowCard } from "./InstagramFollowCard";
import { useState } from "react"; // Hooks - permiten añadir cuerta funcionalidad a componentes de react, utilidades de react para dotar mas en puntos de renderizado.

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className="app-instagram">
            <InstagramFollowCard 
                formatUserName={format}
                // isFollowing={false}
                userName='midudev'
                name="Miguel"
                />
            <InstagramFollowCard 
                formatUserName={format}
                // isFollowing 
                userName='Goku' 
                name="goku"
                />
            <InstagramFollowCard 
                formatUserName={format}
                // isFollowing 
                userName='german' 
                name="German"
                />
        </section>
    )
}