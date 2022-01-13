import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const Onchange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section className="search">
            <form >
                <input type="text"
                    value={text}
                    onChange={(e) => Onchange(e.target.value)}
                    className="form-control"
                    placeholder='Search characters'
                    autoFocus />
            </form>
        </section>
    )
}

export default Search
