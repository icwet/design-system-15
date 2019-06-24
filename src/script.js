import styles from './style.css';
import bemEngine from './template-engine';

const markup = bemEngine({
  block: 'my-block',
  mix: [{ block: 'my-block', mods: { 'mod-name': 'mod-value' } }],
  content: {
    block: 'my-block',
    elem: 'my-block-element'
  }
});
document.body.innerHTML += markup;
