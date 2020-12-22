import React from 'react'

export default function Hero({name,description,thumbnail}) {
    return (
        <div>
            <h1>{name}</h1>
            <img className="hero-img" src={thumbnail.path+'.'+thumbnail.extension}></img>
            <p>{description}</p>
        </div>
    )
}
