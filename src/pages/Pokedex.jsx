import { useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import InfoScreen from '../components/InfoScreen';


function Pokedex() {

  const [count, setCount] = useState(1); // Initialize count to 0

  const increment = () => {
    setCount(count + 1); // Update count by adding 1
  };

  const decrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  };

    return (
        <>
        <h1 className='title'>Pokedex</h1>
        <div className='top-container'>
                   <div className="dex-container">
            <div className="dex-container-inside">
                <div className="top-lights-container">
                        <div className="big-light"></div>
                    <div className="three-lights-container">
                        <div className="red-light small-lights"></div>
                        <div className="yellow-light small-lights"></div>
                        <div className="green-light small-lights"></div>
                    </div>
                </div>
                    <div className="right-box"></div>
                    <div className="bottom-container"></div>
            <div className="screen-container">
                <PokemonCard pokemonId={count}/>
                <div className='top-vents-container'>
                    <div className='red-button'></div>
                <div className='vents-container'>
                    <div className='vents'></div>
                    <div className='vents'></div>
                    <div className='vents'></div>
                </div>
                </div>
            </div>
            <div className="bottom-controls-container">
                <div className="btns">
                    <button className="black-btn"></button>
                    <button className="slender-btn" style={{background: 'red'}}></button>
                    <button className="slender-btn" style={{background: 'rgb(0, 255, 17)'}}></button>
                </div>
                <div className="d-pad-container">
                    <button className="d-pad-button up" onClick={increment}></button>
                    <div className="d-pad-button left"></ div>
                    <div className="d-pad-button center"></div>
                    <div className="d-pad-button right"></div>
                    <button className="d-pad-button down" onClick={decrement}></button>
                </div>
                <div className="screen-small">
                    <div className='pokemon-id' value={count}>
                        {count}
                    </div>
                    </div>
            </div>
            </div>
        </div>
            <div className='left-column'>
                <div className='column-box-1'></div>
                <div className='column-box-2'></div>
            </div>
        <div className='right-side-pokedex-container'>
            <div className='outer-slant'>
                <div className='slant-container'></div>
            </div>
            <div className='right-container-inside '>
                <InfoScreen pokemonId={count}/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Pokedex;