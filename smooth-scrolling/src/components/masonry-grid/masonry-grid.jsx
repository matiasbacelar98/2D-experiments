import React from 'react';
import styles from './masonry-grid.module.css';

export default function MasonryGrid() {
  return (
    <React.Fragment>
      <div className={styles['spacer']} />

      <section className={styles['wrapper']}>
        <div className={styles['galery']}>
          <Column images={column1} />
          <Column images={column2} />
          <Column images={column3} />
        </div>
      </section>

      <div className={styles['spacer']} />
    </React.Fragment>
  );
}

function Column({ images }) {
  return (
    <div>
      {images.map((img, index) => (
        <img className={styles['img']} alt='cover' key={index} src={img} />
      ))}
    </div>
  );
}

const column1 = [
  'https://images.pexels.com/photos/18111091/pexels-photo-18111091/free-photo-of-ciudad-francia-punto-de-referencia-veleros.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-caspio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18307242/pexels-photo-18307242/free-photo-of-madera-carretera-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-montanas-divertido-ninos-valle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/17126918/pexels-photo-17126918/free-photo-of-mujer-ordenador-portatil-sentado-mesa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
];

const column2 = [
  'https://images.pexels.com/photos/18129514/pexels-photo-18129514/free-photo-of-mujer-en-pie-sonriente-rural.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/13135837/pexels-photo-13135837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18649961/pexels-photo-18649961/free-photo-of-mar-barca-lago-viaje.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/5646986/pexels-photo-5646986.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18879451/pexels-photo-18879451/free-photo-of-bosque-arboles-prado-parque.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
];

const column3 = [
  'https://images.pexels.com/photos/17668734/pexels-photo-17668734/free-photo-of-edificio-fachada-exterior-del-edificio-arquitectura-moderna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18272969/pexels-photo-18272969/free-photo-of-resfriado-nieve-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18655049/pexels-photo-18655049/free-photo-of-nieve-arte-oscuro-modelo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-resfriado-nieve-ciudad-hombre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
];
