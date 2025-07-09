export default function PokemonCard({pokemon}){
    return(
        <div className="bg-white shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <p>{pokemon.name}</p>
                <p> ID: {pokemon.id}</p>
            </div>
            <img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto"/>
            <div>
                {pokemon.stats.map(nStat =>(
                    <p key={nStat.stat.url}>{nStat.stat.name} = {nStat.base_stat}</p>
                ))}
            </div>
            <div><span>Types: </span>
                {pokemon.types.map(tipo =>(
                    <span key={tipo.slot}>{tipo.type.name} </span>
                ))}
            </div>
            
        </div>
    )
}