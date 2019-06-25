import styles from './style.css';
import bemEngine from './template-engine';

const payment = bemEngine({
  block: 'theme',
  mix: [{ block: 'theme', mods: { color: 'project-default' } }],
  content: {
    block: 'layout',
    content: {
      block: 'container',
      content: {
        block: 'grid',
        mix: [{ block: 'grid', mods: { 'm-columns': '12' } }],
        content: {
          block: 'form',
          mix: [{ block: 'form', mods: { border: 'all', view: 'default' } }],
          content: [
            {
              block: 'form',
              elem: 'item',
              content: {
                block: 'text',
                mix: [{ block: 'text', mods: { size: 'm' } }],
                content: {
                  block: 'text',
                  elem: 'word',
                  mix: [{ block: 'text', elem: 'word', elemMods: { width: 'm' } }]
                }
              }
            },
            {
              block: 'form',
              elem: 'item'
            },
            {
              block: 'form',
              elem: 'item'
            }
          ]
        }
      }
    }
  }
});

let contentBlocks = document.getElementById('content-blocks');
contentBlocks.innerHTML += payment;
