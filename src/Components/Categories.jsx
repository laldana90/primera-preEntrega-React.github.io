import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TVimg from '../imgs/tvicon.png';
import Celularimg from '../imgs/celularicon.png';
import Refriimg from '../imgs/refriicon.png';
import Cocinaimg from '../imgs/cocinaicon.png';
import PCimg from '../imgs/computadoraicon.png';
import Consoleimg from '../imgs/consoleicon.png';

function BasicExample() {
  return (
    <div className='row categories-container'>
    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={TVimg} />
      <Card.Body>
        <Button className="categories-button" variant="primary">TV y Video</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Celularimg} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Celulares</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Refriimg} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Refrigeracion</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Cocinaimg} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Cocina</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={PCimg} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Computacion</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Consoleimg} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Videojuegos</Button>
      </Card.Body>
    </Card>
    </div>

  );
}

export default BasicExample;