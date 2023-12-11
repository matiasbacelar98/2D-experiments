import ParallaxImage from '../parallax-image';
import styles from './images-list.module.css';

export default function ImagesList() {
  return (
    <section className={styles['wrapper']}>
      {images.map(img => (
        <ParallaxImage key={img} url={img} />
      ))}
    </section>
  );
}

const images = [
  'https://images.pexels.com/photos/18111091/pexels-photo-18111091/free-photo-of-ciudad-francia-punto-de-referencia-veleros.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-caspio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18307242/pexels-photo-18307242/free-photo-of-madera-carretera-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-montanas-divertido-ninos-valle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/17126918/pexels-photo-17126918/free-photo-of-mujer-ordenador-portatil-sentado-mesa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
];
