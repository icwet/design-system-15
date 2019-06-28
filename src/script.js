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
            elemMods: { 'm-col': '2' },
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
                    ],
                    content: [
                      {
                        block: 'text',
                        mods: { size: 'm', view: 'primary', type: 'p' },
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'l' }
                          }
                        ]
                      },
                      {
                        block: 'text',
                        mods: { size: 's', view: 'primary' },
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: { width: 'm' }
                          }
                        ]
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
            elemMods: { 'm-col': '5' },
            content: [
              {
                block: 'history',
                mix: [
                  {
                    block: 'list',
                    mods: {
                      view: 'default',
                      border: 'all'
                    }
                  }
                ],
                content: [
                  {
                    block: 'history',
                    elem: 'transaction',
                    mix: [
                      {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                          border: 'bottom',
                          'space-a': 'l'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'history',
                        elem: 'show',
                        mix: [
                          {
                            block: 'e-accordion',
                            elem: 'short'
                          },
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: { 'vertical-align': 'center', 'indent-t': 'm' }
                          }
                        ],
                        content: [
                          {
                            block: 'history',
                            elem: 'details',
                            content: [
                              {
                                block: 'history',
                                elem: 'time',
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'ghost', size: 's' },
                                    content: [
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
                                    mods: { view: 'ghost', size: 's' },
                                    content: [
                                      {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                          width: 'm'
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'history',
                                elem: 'destination',
                                mix: [
                                  {
                                    block: 'icon-plus',
                                    mods: {
                                      'vertical-align': 'center'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'history',
                                    elem: 'pic',
                                    mix: [
                                      {
                                        block: 'icon-plus',
                                        elem: 'icon',
                                        elemMods: {
                                          'indent-r': 's',
                                          'indent-l': 'l'
                                        }
                                      }
                                    ],
                                    content: [
                                      {
                                        block: 'brand-logo',
                                        mods: {
                                          name: 'yota',
                                          size: 'm'
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    block: 'history',
                                    elem: 'label',
                                    mix: [
                                      {
                                        block: 'icon-plus',
                                        elem: 'block'
                                      }
                                    ],
                                    content: [
                                      {
                                        block: 'text',
                                        mods: {
                                          view: 'primary',
                                          size: 'l'
                                        },
                                        content: {
                                          block: 'text',
                                          elem: 'word',
                                          elemMods: {
                                            width: 'l'
                                          }
                                        }
                                      },
                                      {
                                        block: 'text',
                                        mods: {
                                          view: 'primary',
                                          size: 'l'
                                        },
                                        content: {
                                          block: 'text',
                                          elem: 'word',
                                          elemMods: {
                                            width: 'm'
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        block: 'history',
                        elem: 'hide',
                        mix: [
                          {
                            block: 'e-accordion',
                            elem: 'more',
                            elemMods: {
                              view: 'default'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'indent-t': 'm'
                            },
                            content: [
                              {
                                block: 'history',
                                elem: 'description',
                                mix: [
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: {
                                      'indent-b': 'm'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: {
                                      size: 'l',
                                      view: 'primary'
                                    },
                                    content: [
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
                                        elemMods: { width: 'l' }
                                      }
                                    ]
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      size: 'l',
                                      view: 'primary'
                                    },
                                    content: [
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
                                        elemMods: { width: 'l' }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'history',
                                elem: 'actions',
                                mix: [
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: {
                                      distribute: 'between',
                                      'indent-b': 'l'
                                    }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: {
                                      size: 'l',
                                      view: 'primary'
                                    },
                                    content: [
                                      {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: { width: 'l' }
                                      }
                                    ]
                                  },
                                  {
                                    block: 'text',
                                    mods: {
                                      size: 'l',
                                      view: 'primary'
                                    },
                                    content: [
                                      {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: { width: 'm' }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
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
