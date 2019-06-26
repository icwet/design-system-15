import styles from './style.css';
import bemEngine from './template-engine';

const payment = bemEngine({
  block: 'theme',
  mods: { color: 'project-default', size: 'default', space: 'default' },
  content: {
    block: 'layout',
    content: {
      block: 'layout',
      elem: 'container',
      elemMods: { size: 'm', align: 'center' },
      content: {
        block: 'grid',
        mods: { 'm-columns': '12' },
        content: {
          block: 'payment',
          mix: [{ block: 'form', mods: { border: 'all', view: 'default' } }],
          content: [
            {
              block: 'payment',
              elem: 'header',
              mix: [
                {
                  block: 'form',
                  elem: 'item',
                  elemMods: { 'space-v': 'l', 'space-h': 'xl', border: 'bottom' }
                }
              ],
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl' },
                  content: {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'l' }
                  }
                }
              ]
            },
            {
              block: 'payment',
              elem: 'content',
              mix: [
                {
                  block: 'form',
                  elem: 'item',
                  elemMods: { 'space-v': 'xxxl', 'space-h': 'xl', border: 'bottom' }
                }
              ],
              content: [
                {
                  block: 'form',
                  elem: 'item',
                  elemMods: {
                    'indent-b': 'xl',
                    distribute: 'between',
                    'vertical-align': 'center'
                  },
                  content: [
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'l' },
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: { width: 'l' }
                      }
                    },
                    {
                      block: 'form',
                      elem: 'label',
                      elemMods: { width: 'default' }
                    }
                  ]
                },
                {
                  block: 'form',
                  elem: 'item',
                  elemMods: {
                    'indent-b': 'xl',
                    distribute: 'between',
                    'vertical-align': 'center'
                  },
                  content: [
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'l' },
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: { width: 'l' }
                      }
                    },
                    {
                      block: 'form',
                      elem: 'label',
                      elemMods: { width: 'default' }
                    }
                  ]
                }
              ]
            },
            {
              block: 'payment',
              elem: 'footer',
              mix: [
                {
                  block: 'form',
                  elem: 'item',
                  elemMods: {
                    distribute: 'between',
                    border: 'bottom',
                    'vertical-align': 'center',
                    'space-v': 'l',
                    'space-h': 'xl'
                  }
                }
              ],
              content: [
                {
                  block: 'form',
                  elem: 'item',
                  elemMods: {
                    'indent-b': 'xl',
                    distribute: 'between',
                    'vertical-align': 'center'
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
});

let contentBlocks = document.getElementById('content-blocks');
contentBlocks.innerHTML += payment;
