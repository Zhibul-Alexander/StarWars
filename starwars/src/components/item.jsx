import React, {useEffect} from "react";
import {useParams} from "react-router"

export const Item = () => {
    const {id, type} = useParams()

    useEffect(() => {
        console.log(`Вы зашли в ${type} с ${id}`);
    }, [])

    return (
        <span>Вы зашли в {type} с {id}</span>
    )
}

