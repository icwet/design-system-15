import styles from './style.css';
import bemEngine from './template-engine';

const body = document.getElementById('app');
const markup = bemEngine({
  block: 'my-block',
  mix: [
    { block: 'other-block', mods: { 'mod-name': 'mod-value' } },
    { block: 'other-block', elem: 'second-elem', elemMods: { 'elem-mod-name': 'elem-mod-value' } }
  ]
});
body.innerHTML += '123';
