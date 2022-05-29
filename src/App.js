import { useState } from 'react';
import { data } from './data';
import { dataSouvenir } from './dataSouvenir';
import './App.css';

function App() {

  const [landmark, setLandmark] = useState(0);
  const {id, name, description, image, showMore} = data[landmark];

  const [showText, setShowText] = useState(false);
  
  const [souvenirs, setSouvenirs] = useState(dataSouvenir);

  const previousLandmark = () => {
    setLandmark((landmark => {
      landmark --;
      if(landmark < 0) {
        return data.length-1;
      }
      return landmark;
    }))
  }

  const nextLandmark = () => {
    setLandmark((landmark => {
      landmark ++;
      if(landmark > data.length-1) {
        landmark = 0;
      }
      return landmark;
    }))
  }

  const showTextClick = (data) => {
    data.showMore = !data.showMore;
    setShowText(!showText);
  }

  const removeSouvenir = (idSouvenir) => {
    let newMassivSouvenir = souvenirs.filter(souvenir => souvenir.idSouvenir !== idSouvenir);
    setSouvenirs(newMassivSouvenir);
  }

  return (
    <div>
        <div className='container'>
          <h2>Достопримечательности Лондона</h2>
        </div>

        <div className='container'>
          <h2>{id} - {name}</h2>
        </div>

        <div className='container'>
          <img src={image} width="300px" alt="foto"/>
        </div>

        <div className='container'>
          <h3>{showMore ? description : description.substring(0, 200) + "..."}
          <button onClick={() => showTextClick(data)}>{showMore ? "Показать меньше" : "Показать больше"}</button>
          </h3>
        </div>

        <div className='container'>
          <button onClick={previousLandmark}>Previous</button>
          <button onClick={nextLandmark}>Next</button>
        </div>


        
          {souvenirs.map((souvenir => {
            const {idSouvenir, nameSouvenir, imageSouvenir} = souvenir;

            return(
              <div key={id}>
                <div className='container'>
                  <h3>{idSouvenir} - {nameSouvenir}</h3>
                </div>

                <div className='container'>
                  <img src={imageSouvenir} width="200px" alt="souvenir" />
                </div>

                <div className='container'>
                  <button onClick={() => removeSouvenir(idSouvenir)}>Удалить</button>
                </div>
              </div>
            )
          }))}

          <div className='container'>
            <button onClick={() => setSouvenirs([])}>Удалить все</button>
          </div>
        


    </div>
  );
}

export default App;