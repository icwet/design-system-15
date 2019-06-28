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
        mods: { 'm-columns': '10' },
        content: [
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: {
              'm-col': '5'
            },
            content: [
              {
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
                        elemMods: { 'space-v': 's', 'space-h': 'xl', border: 'bottom' }
                      }
                    ],
                    content: [
                      {
                        block: 'text',
                        mods: { view: 'primary', size: 'xxl', type: 'h1' },
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
                            block: 'form',
                            elem: 'label',
                            elemMods: { width: 'default' },
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'l' }
                                }
                              }
                            ]
                          },
                          {
                            block: 'form',
                            elem: 'control',
                            content: {
                              block: 'input',
                              mix: [{ block: 'payment', elem: 'input' }],
                              mods: { size: 'l' }
                            }
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
                            block: 'form',
                            elem: 'label',
                            elemMods: { width: 'default' },
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: {
                                  block: 'text',
                                  elem: 'word',
                                  elemMods: { width: 'l' }
                                }
                              }
                            ]
                          },
                          {
                            block: 'form',
                            elem: 'control',
                            content: {
                              block: 'input',
                              mix: [{ block: 'payment', elem: 'input' }],
                              mods: { size: 'l' }
                            }
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
                        block: 'text',
                        mods: { view: 'primary', size: 'l' },
                        content: {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
                        }
                      },
                      {
                        block: 'button',
                        mods: {
                          size: 'l',
                          width: 'full'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': 5 },
            content: [
              {
                block: 'warning',
                mix: [
                  { block: 'informer' },
                  { block: 'theme', mods: { color: 'project-warning' } }
                ],
                content: [
                  {
                    block: 'warning',
                    elem: 'content',
                    mix: [
                      {
                        block: 'informer',
                        elem: 'content',
                        elemMods: { distribute: 'center', 'space-a': 'xxl' }
                      }
                    ],
                    content: [
                      {
                        block: 'placeholder',
                        mods: { size: 'm' },
                        mix: [
                          {
                            block: 'warning',
                            elem: 'placeholder'
                          }
                        ]
                      },
                      {
                        block: 'text',
                        mods: { size: 'xl', view: 'primary', type: 'h1' },
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 's' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'l' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'm' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'm' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 's' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'm' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'l' }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          }
                        ]
                      },
                      {
                        block: 'text',
                        mods: { size: 'xl', view: 'primary' },
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'm'
                            }
                          },
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 's'
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'warning',
                    elem: 'button-wrapper',
                    mix: [
                      {
                        block: 'informer',
                        elem: 'action',
                        elemMods: { distribute: 'center', 'space-a': 'xl' }
                      }
                    ],
                    content: [
                      {
                        block: 'button',
                        mods: { size: 'l', width: 'full' }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '3' },
            content: [
              {
                block: 'product',
                mix: [
                  {
                    block: 'card',
                    mods: {
                      view: 'default',
                      border: 'all'
                    }
                  }
                ],
                content: [
                  {
                    block: 'product',
                    elem: 'content',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'm'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'image'
                      }
                    ]
                  },
                  {
                    block: 'product',
                    elem: 'footer',
                    mix: [
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'm'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
});

let contentBlocks = document.getElementById('content-blocks');
contentBlocks.innerHTML += payment;
