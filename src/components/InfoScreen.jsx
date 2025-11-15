import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

function InfoScreen({pokemonId}) {

          const [id, setId] = useState(pokemonId);
  // const [data, setData] = useState([]);

  console.log(id)

  useEffect(() => {
    setId(pokemonId)

  }, [pokemonId]);
        const { isPending, error, data } = useQuery({
      queryKey: ['apiCallData', id],
      queryFn: () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json(),
    ),
    
  })
  console.log(data)

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


    return (
        <>
        <div className='info-screen'>
            {<h1 className='info-text' style={{fontSize: 25}}>{data?.name.charAt(0).toUpperCase()+ data.name.slice(1)}</h1>}
            <div className='info-text-container'>
                <div>
                    <h3 className='info-text'>Abilities:</h3>
                    <div className=''>
                    {data?.abilities.map(ability => (   
                    <p key={ability.ability.name}>{ability.ability.name}</p>
                    ))}
                    </div>
                </div>
                <div >
                    <h3 className='info-text'>Height: </h3><p>{data?.height}</p>
                    <h3 className='info-text'>Weight:</h3><p>{data?.weight}</p>
                </div>
            </div>
        </div>
        <div className='blue-btns-container'>
            <button className='blue-btns'>1</button>
            <button className='blue-btns'>2</button>
            <button className='blue-btns'>3</button>
            <button className='blue-btns'>4</button>
            <button className='blue-btns'>5</button>
            <button className='blue-btns'>6</button>
            <button className='blue-btns'>7</button>
            <button className='blue-btns'>8</button>
            <button className='blue-btns'>9</button>
            <button className='blue-btns'>10</button>
        </div>
        <div className='small-btns-container'>
            <div>
                <button className='sm-round-button'  style={{background: 'rgb(10, 255, 17)'}}></button>
                <button className='sm-round-button'  style={{background: 'yellow'}}></button>
            </div>
            <div>
                <button className='slender-btn' style={{background: 'rgb(0, 255, 17)'}}></button>
                <button className='slender-btn' style={{background: 'red'}}></button>
            </div>
        </div>
        <div className='btn-container-3'>
            <div className="d-pad-container-right">
                    <div className="d-pad-button-grey left-grey" ></ div>
                    <div className="d-pad-button-grey right-grey" ></div>
            </div>
                <div className='round-yellow-btn'><p className='triangle'>◀</p></div>
        </div>
        <div className='black-btns-container'>
            <button className='black-btn-br'>1</button>
            <button className='black-btn-br'>2</button>
        </div>
        </>
    )
}


export default InfoScreen;