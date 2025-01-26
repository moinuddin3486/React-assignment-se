// Create a React component that renders a list of items (e.g., a list of fruit names). Use
// the map() function to render each item in the list.
import React from 'react'

const List = () => {
    const fruit = ["Apple", "Banana", "Cherry", "Date", "Grapes"]
    return (
        <div>
            <h1>Fruits Name </h1>
            <ul>
                {
                    fruit.map((i, index) => {
                        return (
                            <li key={index}>{i}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default List
