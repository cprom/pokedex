import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';


const PokemonCard = ({pokemonId}) => {

  const [id, setId] = useState(pokemonId);
  // const [data, setData] = useState([]);

  console.log(id)

  useEffect(() => {
    setId(pokemonId)
  }, [pokemonId]);
 
    // useEffect(() => {
    //   console.log(id)
    //   const fetchData = async() => {
    //     try{
    //       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //       if(!res.ok){
    //         console.log(`There was an error fetching data: ${res.status}`)
    //       }
    //       const results = await res.json();
    //       setData(results)
    //     }
    //     catch(err){
    //       console.log(err)
    //     }
    //   }
    //   if(id){
    //     fetchData();
    //   } 
    // },[id]);

    
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
        <div className='poke-card'>
        {<img src={data?.sprites.other.showdown.front_default} className='poke-img'/>}
        </div>
    </>
  )
    

}


export default PokemonCard;