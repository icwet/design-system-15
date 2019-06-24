import styles from './style.css';
import bemEngine from './template-engine';

const payment = bemEngine({
  block: 'header'
});
document.body.innerHTML += markup;
