import React, { useState, Fragment, useEffect } from 'react'

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=PXZH6jvs76tGyB9hnMBtze3aRK1MY1Jg&q=panda&limit=25&offset=0&rating=g&lang=en'

const Contador = () => {

    const [gifs, setGifs] = useState([])

    useEffect(function () {
        fetch(apiURL)
            .then(res => res.json)
            .then(response => {
                const { data } = response
                const { gifs } = data.map(image => images.image.downsized_medium.url)
                console.log(gifs)
            }, [])
    })


    return (
        {/* <Fragment>
            <p>Incrementando: {numero}</p>
            <button onClick={aumentar}>Incrementar!!</button>
            <img src={}></img>
        </Fragment> */}
    );
}

export default Contador;



