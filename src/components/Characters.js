import React from 'react'
import CharacterItem from './CharacterItem'

const Characters = ({ items, isLoading }) => {
    return (
        <div>
            <section className="cards">
                {
                    items.map((item, i) => (
                        <CharacterItem key={i} item={item} />
                    ))
                }
            </section>

        </div>
    )
}

export default Characters
