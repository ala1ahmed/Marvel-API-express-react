

export default function Hero({name,description,thumbnail}) {
    return (
        <div className="hero">
            <h1>{name}</h1>
            <img className="hero-img" src={thumbnail.path+'.'+thumbnail.extension}></img>
            <p>{description}</p>
        </div>
    )
}
