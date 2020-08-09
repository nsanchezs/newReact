import React, { memo, useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../service/getGif";

export default memo(function ListOfGif({ params }) {

    const { keyword } = params;

    const [loading, setLoading] = useState(false);

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then((gifs) =>
                setGifs(gifs))
        setLoading(false)
    }, [keyword]);

    if (loading) return <i>Cargando @</i>

    return gifs.map(({ id, title, url }) => (
        <Gif
            key={id}
            title={title}
            id={id}
            url={url} />
    ));
});
