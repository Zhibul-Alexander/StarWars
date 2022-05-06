import React, {useState, useCallback, useEffect} from "react";
import { debounce } from "lodash";
import {useParams} from "react-router"

const fetchItems = (type, search) => {
    console.log(type, search);
}

export const Items = () => {
    const [search, setSearch] = useState("")
    let type = useParams()
    
    const inputHandler = (({target}) => {
        setSearch(target.value)
    })
    
    const debounceFetchItems = useCallback(() => {
        debounce(fetchItems, 1000)
    })
    
    useEffect(() => {
        debounceFetchItems(type, search)
    }, [search, type])

    const items = [
        {name: "A"},
        {name: "B"},
    ]

    return (
        <dev>
            <input value={search} onChange={inputHandler} />
            <ol>
                {items.map((item) => {
                    <li>{item.name}</li>
                })}
            </ol>
        </dev>
    )
}