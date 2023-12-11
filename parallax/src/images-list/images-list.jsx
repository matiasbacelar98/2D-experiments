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
  'https://images.pexels.com/photos/5646986/pexels-photo-5646986.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18307242/pexels-photo-18307242/free-photo-of-madera-carretera-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/13135837/pexels-photo-13135837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/18272969/pexels-photo-18272969/free-photo-of-resfriado-nieve-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
];
