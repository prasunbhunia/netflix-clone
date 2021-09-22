import React from 'react';
import Jumbodata from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';


function JumbotronContainer() {
    return (
        <div className='container'>
        {
          Jumbodata.map((items) => (
            <Jumbotron key={items.id} direction={items.direction}>
              <div className='pane'>
                <h1 className='title'>{items.title}</h1>
                <h2 className='subtitle'>{items.subTitle}</h2>
              </div>
              <div className='pane'>
                <img className='img' src={items.image} alt={items.alt} />
              </div>
            </Jumbotron>
          ))
        }
      </div>
    )
}

export default JumbotronContainer;
