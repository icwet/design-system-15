import css from '../style.css';
import bemEngine from '../template-engine';

const blocks = bemEngine({
  block: 'theme',
  mods: { color: 'project-default', size: 'default', space: 'default', gap: 'small' },
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
                        mods: { size: 'xl', view: 'primary' },
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
                        mods: { size: 'm', view: 'primary' },
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
                            elemMods: { 'vertical-align': 'center' }
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
                  },
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
                            elemMods: { 'vertical-align': 'center' }
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
                                          name: 'kcell',
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
                  },
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
                            elemMods: { 'vertical-align': 'center' }
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
                                          name: 'megafon',
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
                  },
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
                            elemMods: { 'vertical-align': 'center' }
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
                                          name: 'mts',
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
          },
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '3' },
            content: [
              {
                block: 'commercial',
                mix: [
                  {
                    block: 'card',
                    mods: {
                      view: 'default'
                    }
                  },
                  {
                    block: 'theme',
                    mods: {
                      color: 'project-brand'
                    }
                  }
                ],
                content: [
                  {
                    block: 'commercial',
                    elem: 'pic',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xxl'
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
                    block: 'commercial',
                    elem: 'info',
                    mix: [
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'xxl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'text',
                        mods: {
                          view: 'primary',
                          size: 's'
                        },
                        content: [
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
                              width: 'l'
                            }
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
                              width: 's'
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
                              width: 'l'
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
                        block: 'navigation',
                        content: [
                          {
                            block: 'page-button'
                          },
                          {
                            block: 'page-button'
                          },
                          {
                            block: 'page-button'
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
            elemMods: { 'm-col': '3' },
            content: [
              {
                block: 'cover',
                mix: [
                  {
                    block: 'card',
                    mods: {
                      view: 'default'
                    }
                  },
                  {
                    block: 'theme',
                    mods: {
                      color: 'project-brand'
                    }
                  }
                ],
                content: [
                  {
                    block: 'cover',
                    elem: 'info',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xxl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'image'
                      },
                      {
                        block: 'cover',
                        elem: 'preview',
                        mix: [
                          {
                            block: 'theme',
                            mods: {
                              color: 'project-brand'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'xxl'
                            },
                            content: [
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            ]
                          },
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'xxl'
                            },
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
                        block: 'cover',
                        elem: 'footer',
                        mix: [
                          {
                            block: 'card',
                            elem: 'footer',
                            elemMods: {
                              'space-a': 'xxl'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'button',
                            mods: {
                              size: 'l'
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
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '8' },
            content: [
              {
                block: 'header',
                content: [
                  {
                    block: 'header',
                    elem: 'content',
                    content: [
                      {
                        block: 'header',
                        elem: 'logo'
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
                block: 'collect',
                mix: [
                  {
                    block: 'card',
                    mods: {
                      view: 'default',
                      border: 'all'
                    }
                  },
                  {
                    block: 'theme',
                    mods: {
                      color: 'project-inverse'
                    }
                  }
                ],
                content: [
                  {
                    block: 'collect',
                    elem: 'image',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content'
                      }
                    ],
                    content: [
                      {
                        block: 'image'
                      }
                    ]
                  },
                  {
                    block: 'collect',
                    elem: 'progress',
                    content: [
                      {
                        block: 'collect',
                        elem: 'done'
                      }
                    ]
                  },
                  {
                    block: 'collect',
                    elem: 'footer',
                    mix: [
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'l'
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
                          }
                        ]
                      },
                      {
                        block: 'text',
                        mods: {
                          size: 'm',
                          view: 'secondary'
                        },
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
                              width: 's'
                            }
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
                              width: 'l'
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
                              width: 's'
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
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '4' },
            content: [
              {
                block: 'articles',
                mix: [
                  {
                    block: 'list',
                    mods: {
                      view: 'default'
                    }
                  }
                ],
                content: [
                  {
                    block: 'articles',
                    elem: 'article',
                    mix: [
                      {
                        block: 'list',
                        elem: 'item',
                        elemMods: {
                          'indent-b': 'xl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'articles',
                        elem: 'unit',
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
                            block: 'articles',
                            elem: 'pic',
                            mix: [
                              {
                                block: 'theme',
                                mods: {
                                  color: 'project-inverse'
                                }
                              },
                              {
                                block: 'icon-plus',
                                elem: 'icon',
                                elemMods: {
                                  'indent-r': 'm'
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
                            block: 'articles',
                            elem: 'content',
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
                                  view: 'secondary',
                                  size: 'l'
                                },
                                content: [
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
                                mods: {
                                  view: 'primary',
                                  size: 'l'
                                },
                                content: [
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
                                  }
                                ]
                              },
                              {
                                block: 'text',
                                mods: {
                                  view: 'link',
                                  size: 'm'
                                },
                                content: [
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
            elemMods: { 'm-col': '3' },
            content: [
              {
                block: 'offer',
                mix: [
                  {
                    block: 'theme',
                    mods: {
                      color: 'megafon-brand'
                    }
                  },
                  {
                    block: 'card',
                    mods: {
                      view: 'default'
                    }
                  }
                ],
                content: [
                  {
                    block: 'offer',
                    elem: 'partner',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'brand-logo',
                        mods: {
                          name: 'megafon',
                          size: 'm'
                        }
                      },
                      {
                        block: 'offer',
                        elem: 'name',
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'ghost',
                              size: 's'
                            },
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
                        block: 'offer',
                        elem: 'sale',
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'xxl'
                            },
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
                      }
                    ]
                  },
                  {
                    block: 'offer',
                    elem: 'footer',
                    mix: [
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'text',
                        mods: {
                          view: 'secondary',
                          size: 'm'
                        },
                        content: [
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
                              width: 's'
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
                              width: 'l'
                            }
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
                              width: 'l'
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
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '3' },
            content: [
              {
                block: 'subscription',
                mix: [
                  {
                    block: 'card',
                    mods: {
                      view: 'default'
                    }
                  },
                  {
                    block: 'theme',
                    mods: {
                      color: 'project-brand'
                    }
                  }
                ],
                content: [
                  {
                    block: 'subscription',
                    elem: 'info',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'subscription',
                        elem: 'title',
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'xxl'
                            },
                            content: [
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'subscription',
                    elem: 'advantages',
                    mix: [
                      {
                        block: 'list'
                      }
                    ],
                    content: [
                      {
                        block: 'subscription',
                        elem: 'advantage',
                        mix: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'space-b': 's'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'l'
                            },
                            content: [
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
                                  width: 's'
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        block: 'subscription',
                        elem: 'advantage',
                        mix: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'space-b': 's'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'l'
                            },
                            content: [
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
                                  width: 's'
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
                        block: 'subscription',
                        elem: 'advantage',
                        mix: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'space-b': 's'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'l'
                            },
                            content: [
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
                        block: 'subscription',
                        elem: 'advantage',
                        mix: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'space-b': 's'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'l'
                            },
                            content: [
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
                                  width: 's'
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
                        block: 'subscription',
                        elem: 'advantage',
                        mix: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'space-b': 's'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'l'
                            },
                            content: [
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
                      }
                    ]
                  },
                  {
                    block: 'subscription',
                    elem: 'footer',
                    mix: [
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'space-a': 'xl'
                        }
                      },
                      {
                        block: 'list'
                      }
                    ],
                    content: [
                      {
                        block: 'subscription',
                        elem: 'control',
                        mix: [
                          {
                            block: 'list',
                            elem: 'item',
                            elemMods: {
                              'space-b': 's'
                            }
                          }
                        ],
                        content: [
                          {
                            block: 'input',
                            mods: {
                              size: 'l'
                            }
                          }
                        ]
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
            elemMods: { 'm-col': '5' },
            content: [
              {
                block: 'event',
                mix: [
                  {
                    block: 'card',
                    mods: {
                      view: 'default'
                    }
                  },
                  {
                    block: 'theme',
                    mods: {
                      color: 'project-inverse'
                    }
                  }
                ],
                content: [
                  {
                    block: 'event',
                    elem: 'content',
                    mix: [
                      {
                        block: 'card',
                        elem: 'content',
                        elemMods: {
                          'vertical-align': 'center',
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'event',
                        elem: 'preview',
                        content: [
                          {
                            block: 'event',
                            elem: 'speaker',
                            content: [
                              {
                                block: 'avatar',
                                mods: {
                                  size: 'm'
                                }
                              }
                            ]
                          },
                          {
                            block: 'brand-logo',
                            mods: {
                              name: 'mts',
                              size: 'm'
                            }
                          }
                        ]
                      },
                      {
                        block: 'event',
                        elem: 'title',
                        content: [
                          {
                            block: 'text',
                            mods: {
                              view: 'primary',
                              size: 'xxl',
                              align: 'center'
                            },
                            content: [
                              {
                                block: 'text',
                                elem: 'word',
                                elemMods: {
                                  width: 'l'
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        block: 'event',
                        elem: 'description',
                        content: [
                          {
                            block: 'text',
                            mods: {
                              size: 'l',
                              align: 'center',
                              view: 'primary'
                            },
                            content: [
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
                                  width: 'l'
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
                                  width: 'l'
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
                                  width: 'l'
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
                                  width: 'l'
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'event',
                    elem: 'footer',
                    mix: [
                      {
                        block: 'card',
                        elem: 'footer',
                        elemMods: {
                          'vertical-align': 'center',
                          distribute: 'center',
                          'space-a': 'xxl'
                        }
                      }
                    ],
                    content: [
                      {
                        block: 'text',
                        mods: {
                          size: 'xl',
                          view: 'link',
                          align: 'center'
                        },
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
                              width: 's'
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
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '1' },
            content: [
              {
                block: 'onoffswitch',
                content: [
                  {
                    block: 'onoffswitch',
                    elem: 'button'
                  }
                ]
              }
            ]
          },
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '8' },
            content: [
              {
                block: 'footer',
                content: [
                  {
                    block: 'footer',
                    elem: 'content',
                    content: [
                      {
                        block: 'text',
                        mods: {
                          view: 'primary',
                          size: 'l'
                        },
                        content: [
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
                              width: 's'
                            }
                          }
                        ]
                      },
                      {
                        block: 'text',
                        mods: {
                          view: 'primary',
                          size: 'l'
                        },
                        content: [
                          {
                            block: 'text',
                            elem: 'word',
                            elemMods: {
                              width: 'l'
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
        ]
      }
    }
  }
});

const index = bemEngine({
  block: 'theme',
  mods: { color: 'project-default', size: 'default', space: 'default' },
  content: [
    {
      block: 'layout',
      content: [
        {
          block: 'header',
          mix: [
            {
              block: 'theme'
            }
          ],
          content: [
            {
              block: 'header',
              elem: 'content',
              content: [
                {
                  block: 'header',
                  elem: 'logo'
                },
                {
                  block: 'onoffswitch',
                  content: [
                    {
                      block: 'onoffswitch',
                      elem: 'button'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center',
            'indent-b': 'xxl'
          },
          content: [
            {
              block: 'grid',
              mods: { 'm-columns': '10', 'col-gap': 'full' },
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
                      mix: [{ block: 'form', mods: { border: 'all' } }],
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
                  elemMods: {
                    'm-col': '5'
                  },
                  content: [
                    {
                      block: 'warning',
                      mix: [{ block: 'informer', mods: { view: 'default', border: 'all' } }],
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
                              mods: { view: 'primary', size: 'm' }
                            },
                            {
                              block: 'text',
                              mods: { size: 'xl', view: 'primary', align: 'center' },
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
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center',
            'indent-b': 'xxl'
          },
          content: [
            {
              block: 'grid',
              mods: {
                'm-columns': '10',
                'col-gap': 'half'
              },
              content: [
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: {
                    'm-col': '2'
                  },
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
                              mods: { size: 'm', view: 'primary' },
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
                  elemMods: {
                    'm-col': '2'
                  },
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
                              mods: { size: 'm', view: 'primary' },
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
                  elemMods: {
                    'm-col': '2'
                  },
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
                              mods: { size: 'm', view: 'primary' },
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
                  elemMods: {
                    'm-col': '2'
                  },
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
                              mods: { size: 'm', view: 'primary' },
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
                  elemMods: {
                    'm-col': '2'
                  },
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
                              mods: { size: 'm', view: 'primary' },
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
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center',
            'indent-b': 'xxl'
          },
          content: [
            {
              block: 'grid',
              mods: {
                'm-columns': '12',
                'col-gap': 'full'
              },
              content: [
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: {
                    'm-col': '8'
                  },
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
                                  elemMods: { 'vertical-align': 'center' }
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
                        },
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
                                  elemMods: { 'vertical-align': 'center' }
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
                                                name: 'kcell',
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
                        },
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
                                  elemMods: { 'vertical-align': 'center' }
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
                                                name: 'megafon',
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
                        },
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
                                  elemMods: { 'vertical-align': 'center' }
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
                                                name: 'mts',
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
                },
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: {
                    'm-col': '4'
                  },
                  content: [
                    {
                      block: 'commercial',
                      mix: [
                        {
                          block: 'card',
                          mods: {
                            view: 'default'
                          }
                        },
                        {
                          block: 'theme',
                          mods: {
                            color: 'project-brand'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'commercial',
                          elem: 'pic',
                          mix: [
                            {
                              block: 'card',
                              elem: 'content',
                              elemMods: {
                                'space-a': 'xxl'
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
                          block: 'commercial',
                          elem: 'info',
                          mix: [
                            {
                              block: 'card',
                              elem: 'footer',
                              elemMods: {
                                'space-a': 'xxl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              mods: {
                                view: 'primary',
                                size: 's'
                              },
                              content: [
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
                                    width: 'l'
                                  }
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
                                    width: 's'
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
                                    width: 'l'
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
                              block: 'navigation',
                              content: [
                                {
                                  block: 'page-button'
                                },
                                {
                                  block: 'page-button'
                                },
                                {
                                  block: 'page-button'
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
        },
        {
          block: 'footer',
          mix: [
            {
              block: 'theme'
            }
          ],
          content: [
            {
              block: 'footer',
              elem: 'content',
              content: [
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
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
                        width: 's'
                      }
                    }
                  ]
                },
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
                    {
                      block: 'text',
                      elem: 'word',
                      elemMods: {
                        width: 'l'
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
  ]
});

const product = bemEngine({
  block: 'theme',
  mods: { color: 'project-default', size: 'default', space: 'default' },
  content: [
    {
      block: 'layout',
      content: [
        {
          block: 'header',
          mix: [
            {
              block: 'theme'
            }
          ],
          content: [
            {
              block: 'header',
              elem: 'content',
              content: [
                {
                  block: 'header',
                  elem: 'logo'
                },
                {
                  block: 'onoffswitch',
                  content: [
                    {
                      block: 'onoffswitch',
                      elem: 'button'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center',
            'indent-b': 'xxxxl'
          },
          content: [
            {
              block: 'grid',
              mods: { 'm-columns': '12', 'col-gap': 'full' },
              content: [
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: {
                    'm-col': '8'
                  },
                  content: [
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'xxl', type: 'h1' },
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
                      mods: { view: 'primary', size: 'm' },
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
                        },
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 's' }
                        },
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
                        },
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'm' }
                        }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'xxl', type: 'h2' },
                      content: [
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: {
                            width: 'l'
                          }
                        }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'm' },
                      content: [
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
                          elemMods: { width: 'l' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
                        },
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
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 'l' }
                        },
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
                          elemMods: { width: 'm' }
                        },
                        {
                          block: 'text',
                          elem: 'word',
                          elemMods: { width: 's' }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: { 'm-col': '4' },
                  content: [
                    {
                      block: 'cover',
                      mix: [
                        {
                          block: 'card',
                          mods: {
                            view: 'default'
                          }
                        },
                        {
                          block: 'theme',
                          mods: {
                            color: 'project-brand'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'cover',
                          elem: 'info',
                          mix: [
                            {
                              block: 'card',
                              elem: 'content',
                              elemMods: {
                                'space-a': 'xxl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'image'
                            },
                            {
                              block: 'cover',
                              elem: 'preview',
                              mix: [
                                {
                                  block: 'theme',
                                  mods: {
                                    color: 'project-brand'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'xxl'
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'xxl'
                                  },
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
                              block: 'cover',
                              elem: 'footer',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'footer',
                                  elemMods: {
                                    'space-a': 'xxl'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'button',
                                  mods: {
                                    size: 'l'
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
              ]
            }
          ]
        },
        {
          block: 'theme',
          mods: {
            color: 'project-inverse',
            gap: 'small'
          },
          content: [
            {
              block: 'layout',
              elem: 'container',
              elemMods: {
                size: 'm',
                align: 'center',
                'indent-b': 'xxxxl'
              },
              content: [
                {
                  block: 'text',
                  mods: {
                    size: 'xxl',
                    view: 'primary',
                    type: 'h2'
                  },
                  content: [
                    {
                      block: 'text',
                      elem: 'word',
                      elemMods: {
                        width: 'l'
                      }
                    }
                  ]
                },
                {
                  block: 'grid',
                  mods: { 'm-columns': '12', 'col-gap': 'full' },
                  content: [
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
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: { size: 'm', view: 'primary' },
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
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: { size: 'm', view: 'primary' },
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
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: { size: 'm', view: 'primary' },
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
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: { size: 'm', view: 'primary' },
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
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'footer',
          mix: [
            {
              block: 'theme'
            }
          ],
          content: [
            {
              block: 'footer',
              elem: 'content',
              content: [
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
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
                        width: 's'
                      }
                    }
                  ]
                },
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
                    {
                      block: 'text',
                      elem: 'word',
                      elemMods: {
                        width: 'l'
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
  ]
});

const collect = bemEngine({
  block: 'theme',
  mods: { color: 'project-default', size: 'default', space: 'default' },
  content: [
    {
      block: 'layout',
      content: [
        {
          block: 'header',
          content: [
            {
              block: 'header',
              elem: 'content',
              content: [
                {
                  block: 'header',
                  elem: 'logo'
                },
                {
                  block: 'onoffswitch',
                  content: [
                    {
                      block: 'onoffswitch',
                      elem: 'button'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'theme',
          mods: {
            color: 'project-inverse',
            size: 'default',
            space: 'default'
          },
          content: [
            {
              block: 'layout',
              elem: 'container',
              elemMods: {
                size: 'm',
                align: 'center',
                'space-v': 'xxxxxl'
              },
              content: [
                {
                  block: 'grid',
                  mods: {
                    'm-columns': '12',
                    'col-gap': 'full'
                  },
                  content: [
                    {
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                      content: [
                        {
                          block: 'collect',
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
                              block: 'collect',
                              elem: 'image',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'content'
                                }
                              ],
                              content: [
                                {
                                  block: 'image'
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'progress',
                              content: [
                                {
                                  block: 'collect',
                                  elem: 'done',
                                  elemMods: {
                                    size: 'two-third'
                                  }
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'footer',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'footer',
                                  elemMods: {
                                    'space-a': 'l'
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
                                    }
                                  ]
                                },
                                {
                                  block: 'text',
                                  mods: {
                                    size: 'm',
                                    view: 'secondary'
                                  },
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
                                        width: 's'
                                      }
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
                                        width: 'l'
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
                                        width: 's'
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
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                      content: [
                        {
                          block: 'collect',
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
                              block: 'collect',
                              elem: 'image',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'content'
                                }
                              ],
                              content: [
                                {
                                  block: 'image'
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'progress',
                              content: [
                                {
                                  block: 'collect',
                                  elem: 'done',
                                  elemMods: {
                                    size: 'one-third'
                                  }
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'footer',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'footer',
                                  elemMods: {
                                    'space-a': 'l'
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
                                    }
                                  ]
                                },
                                {
                                  block: 'text',
                                  mods: {
                                    size: 'm',
                                    view: 'secondary'
                                  },
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
                                        width: 's'
                                      }
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
                                        width: 'l'
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
                                        width: 's'
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
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                      content: [
                        {
                          block: 'collect',
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
                              block: 'collect',
                              elem: 'image',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'content'
                                }
                              ],
                              content: [
                                {
                                  block: 'image'
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'progress',
                              content: [
                                {
                                  block: 'collect',
                                  elem: 'done',
                                  elemMods: {
                                    size: 'half'
                                  }
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'footer',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'footer',
                                  elemMods: {
                                    'space-a': 'l'
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
                                    }
                                  ]
                                },
                                {
                                  block: 'text',
                                  mods: {
                                    size: 'm',
                                    view: 'secondary'
                                  },
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
                                        width: 's'
                                      }
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
                                        width: 'l'
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
                                        width: 's'
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
                      block: 'grid',
                      elem: 'fraction',
                      elemMods: { 'm-col': '3' },
                      content: [
                        {
                          block: 'collect',
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
                              block: 'collect',
                              elem: 'image',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'content'
                                }
                              ],
                              content: [
                                {
                                  block: 'image'
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'progress',
                              content: [
                                {
                                  block: 'collect',
                                  elem: 'done',
                                  elemMods: {
                                    size: 'two-third'
                                  }
                                }
                              ]
                            },
                            {
                              block: 'collect',
                              elem: 'footer',
                              mix: [
                                {
                                  block: 'card',
                                  elem: 'footer',
                                  elemMods: {
                                    'space-a': 'l'
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
                                    }
                                  ]
                                },
                                {
                                  block: 'text',
                                  mods: {
                                    size: 'm',
                                    view: 'secondary'
                                  },
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
                                        width: 's'
                                      }
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
                                        width: 'l'
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
                                        width: 's'
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
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center',
            'space-v': 'xxxxl'
          },
          content: [
            {
              block: 'grid',
              mods: {
                'm-columns': '12',
                'col-gap': 'full'
              },
              content: [
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: { 'm-col': '5' },
                  content: [
                    {
                      block: 'articles',
                      mix: [
                        {
                          block: 'list',
                          mods: {
                            view: 'default'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'articles',
                          elem: 'article',
                          mix: [
                            {
                              block: 'list',
                              elem: 'item',
                              elemMods: {
                                'indent-b': 'xl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'articles',
                              elem: 'unit',
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
                                  block: 'articles',
                                  elem: 'pic',
                                  mix: [
                                    {
                                      block: 'theme',
                                      mods: {
                                        color: 'project-inverse'
                                      }
                                    },
                                    {
                                      block: 'icon-plus',
                                      elem: 'icon',
                                      elemMods: {
                                        'indent-r': 'm'
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
                                  block: 'articles',
                                  elem: 'content',
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
                                        view: 'secondary',
                                        size: 'l'
                                      },
                                      content: [
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
                                      mods: {
                                        view: 'primary',
                                        size: 'l'
                                      },
                                      content: [
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
                                        }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: {
                                        view: 'link',
                                        size: 'm'
                                      },
                                      content: [
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
                                }
                              ]
                            },
                            {
                              block: 'articles',
                              elem: 'unit',
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
                                  block: 'articles',
                                  elem: 'pic',
                                  mix: [
                                    {
                                      block: 'theme',
                                      mods: {
                                        color: 'project-inverse'
                                      }
                                    },
                                    {
                                      block: 'icon-plus',
                                      elem: 'icon',
                                      elemMods: {
                                        'indent-r': 'm'
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
                                  block: 'articles',
                                  elem: 'content',
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
                                        view: 'secondary',
                                        size: 'l'
                                      },
                                      content: [
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
                                      mods: {
                                        view: 'primary',
                                        size: 'l'
                                      },
                                      content: [
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
                                        }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: {
                                        view: 'link',
                                        size: 'm'
                                      },
                                      content: [
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
                                }
                              ]
                            },
                            {
                              block: 'articles',
                              elem: 'unit',
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
                                  block: 'articles',
                                  elem: 'pic',
                                  mix: [
                                    {
                                      block: 'theme',
                                      mods: {
                                        color: 'project-inverse'
                                      }
                                    },
                                    {
                                      block: 'icon-plus',
                                      elem: 'icon',
                                      elemMods: {
                                        'indent-r': 'm'
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
                                  block: 'articles',
                                  elem: 'content',
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
                                        view: 'secondary',
                                        size: 'l'
                                      },
                                      content: [
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
                                      mods: {
                                        view: 'primary',
                                        size: 'l'
                                      },
                                      content: [
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
                                        }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: {
                                        view: 'link',
                                        size: 'm'
                                      },
                                      content: [
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
                  elemMods: { 'm-col': '3' },
                  content: [
                    {
                      block: 'offer',
                      mix: [
                        {
                          block: 'theme',
                          mods: {
                            color: 'megafon-brand'
                          }
                        },
                        {
                          block: 'card',
                          mods: {
                            view: 'default'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'offer',
                          elem: 'partner',
                          mix: [
                            {
                              block: 'card',
                              elem: 'content',
                              elemMods: {
                                'space-a': 'xl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'brand-logo',
                              mods: {
                                name: 'megafon',
                                size: 'm'
                              }
                            },
                            {
                              block: 'offer',
                              elem: 'name',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'ghost',
                                    size: 's'
                                  },
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
                              block: 'offer',
                              elem: 'sale',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'xxl'
                                  },
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
                            }
                          ]
                        },
                        {
                          block: 'offer',
                          elem: 'footer',
                          mix: [
                            {
                              block: 'card',
                              elem: 'footer',
                              elemMods: {
                                'space-a': 'xl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              mods: {
                                view: 'secondary',
                                size: 'm'
                              },
                              content: [
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
                                    width: 's'
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
                                    width: 'l'
                                  }
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
                                    width: 'l'
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
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: { 'm-col': '4' },
                  content: [
                    {
                      block: 'subscription',
                      mix: [
                        {
                          block: 'card',
                          mods: {
                            view: 'default'
                          }
                        },
                        {
                          block: 'theme',
                          mods: {
                            color: 'project-brand'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'subscription',
                          elem: 'info',
                          mix: [
                            {
                              block: 'card',
                              elem: 'content',
                              elemMods: {
                                'space-a': 'xl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'subscription',
                              elem: 'title',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'xxl'
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'subscription',
                          elem: 'advantages',
                          mix: [
                            {
                              block: 'list'
                            }
                          ],
                          content: [
                            {
                              block: 'subscription',
                              elem: 'advantage',
                              mix: [
                                {
                                  block: 'list',
                                  elem: 'item',
                                  elemMods: {
                                    'space-b': 's'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'l'
                                  },
                                  content: [
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
                                        width: 's'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'subscription',
                              elem: 'advantage',
                              mix: [
                                {
                                  block: 'list',
                                  elem: 'item',
                                  elemMods: {
                                    'space-b': 's'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'l'
                                  },
                                  content: [
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
                                        width: 's'
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
                              block: 'subscription',
                              elem: 'advantage',
                              mix: [
                                {
                                  block: 'list',
                                  elem: 'item',
                                  elemMods: {
                                    'space-b': 's'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'l'
                                  },
                                  content: [
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
                              block: 'subscription',
                              elem: 'advantage',
                              mix: [
                                {
                                  block: 'list',
                                  elem: 'item',
                                  elemMods: {
                                    'space-b': 's'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'l'
                                  },
                                  content: [
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
                                        width: 's'
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
                              block: 'subscription',
                              elem: 'advantage',
                              mix: [
                                {
                                  block: 'list',
                                  elem: 'item',
                                  elemMods: {
                                    'space-b': 's'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'l'
                                  },
                                  content: [
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
                            }
                          ]
                        },
                        {
                          block: 'subscription',
                          elem: 'footer',
                          mix: [
                            {
                              block: 'card',
                              elem: 'footer',
                              elemMods: {
                                'space-a': 'xl'
                              }
                            },
                            {
                              block: 'list'
                            }
                          ],
                          content: [
                            {
                              block: 'subscription',
                              elem: 'control',
                              mix: [
                                {
                                  block: 'list',
                                  elem: 'item',
                                  elemMods: {
                                    'space-b': 's'
                                  }
                                }
                              ],
                              content: [
                                {
                                  block: 'input',
                                  mods: {
                                    size: 'l'
                                  }
                                }
                              ]
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
                }
              ]
            }
          ]
        },
        {
          block: 'footer',
          content: [
            {
              block: 'footer',
              elem: 'content',
              content: [
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
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
                        width: 's'
                      }
                    }
                  ]
                },
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
                    {
                      block: 'text',
                      elem: 'word',
                      elemMods: {
                        width: 'l'
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
  ]
});

const content = bemEngine({
  block: 'theme',
  mods: { color: 'project-default', size: 'default', space: 'default' },
  content: [
    {
      block: 'layout',
      content: [
        {
          block: 'header',
          content: [
            {
              block: 'header',
              elem: 'content',
              content: [
                {
                  block: 'header',
                  elem: 'logo'
                },
                {
                  block: 'onoffswitch',
                  content: [
                    {
                      block: 'onoffswitch',
                      elem: 'button'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 's',
            align: 'center',
            'indent-b': 'xxxxl'
          },
          content: [
            {
              block: 'text',
              mods: {
                size: 'xxl',
                view: 'primary',
                type: 'h1'
              },
              content: [
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
                    width: 'l'
                  }
                }
              ]
            },
            {
              block: 'text',
              mods: {
                size: 'l',
                view: 'primary',
                type: 'p'
              },
              content: [
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
                    width: 'l'
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
                    width: 's'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
                  }
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
                    width: 'l'
                  }
                }
              ]
            },
            {
              block: 'text',
              mods: {
                size: 'l',
                view: 'primary',
                type: 'p'
              },
              content: [
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
                    width: 'l'
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
                    width: 's'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
                  }
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
                    width: 'l'
                  }
                }
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 'm',
            align: 'center'
          },
          content: [
            {
              block: 'grid',
              mods: {
                'm-columns': '10',
                'col-gap': 'full'
              },
              content: [
                {
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: { 'm-col': '5' },
                  content: [
                    {
                      block: 'event',
                      mix: [
                        {
                          block: 'card',
                          mods: {
                            view: 'default'
                          }
                        },
                        {
                          block: 'theme',
                          mods: {
                            color: 'project-inverse'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'event',
                          elem: 'content',
                          mix: [
                            {
                              block: 'card',
                              elem: 'content',
                              elemMods: {
                                'vertical-align': 'center',
                                distribute: 'center',
                                'space-a': 'xxl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'event',
                              elem: 'preview',
                              content: [
                                {
                                  block: 'event',
                                  elem: 'speaker',
                                  content: [
                                    {
                                      block: 'avatar',
                                      mods: {
                                        size: 'm'
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'brand-logo',
                                  mods: {
                                    name: 'mts',
                                    size: 'm'
                                  }
                                }
                              ]
                            },
                            {
                              block: 'event',
                              elem: 'title',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'xxl',
                                    align: 'center'
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'event',
                              elem: 'description',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    size: 'l',
                                    align: 'center',
                                    view: 'primary'
                                  },
                                  content: [
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
                                        width: 'l'
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
                                        width: 'l'
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
                                        width: 'l'
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
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'event',
                          elem: 'footer',
                          mix: [
                            {
                              block: 'card',
                              elem: 'footer',
                              elemMods: {
                                'vertical-align': 'center',
                                distribute: 'center',
                                'space-a': 'xxl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              mods: {
                                size: 'xl',
                                view: 'link',
                                align: 'center'
                              },
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
                                    width: 's'
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
                  block: 'grid',
                  elem: 'fraction',
                  elemMods: { 'm-col': '5' },
                  content: [
                    {
                      block: 'event',
                      mix: [
                        {
                          block: 'card',
                          mods: {
                            view: 'default'
                          }
                        },
                        {
                          block: 'theme',
                          mods: {
                            color: 'project-inverse'
                          }
                        }
                      ],
                      content: [
                        {
                          block: 'event',
                          elem: 'content',
                          mix: [
                            {
                              block: 'card',
                              elem: 'content',
                              elemMods: {
                                'vertical-align': 'center',
                                distribute: 'center',
                                'space-a': 'xxl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'event',
                              elem: 'preview',
                              content: [
                                {
                                  block: 'event',
                                  elem: 'speaker',
                                  content: [
                                    {
                                      block: 'avatar',
                                      mods: {
                                        size: 'm'
                                      }
                                    }
                                  ]
                                },
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
                              block: 'event',
                              elem: 'title',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    view: 'primary',
                                    size: 'xxl',
                                    align: 'center'
                                  },
                                  content: [
                                    {
                                      block: 'text',
                                      elem: 'word',
                                      elemMods: {
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'event',
                              elem: 'description',
                              content: [
                                {
                                  block: 'text',
                                  mods: {
                                    size: 'l',
                                    align: 'center',
                                    view: 'primary'
                                  },
                                  content: [
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
                                        width: 'l'
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
                                        width: 'l'
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
                                        width: 'l'
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
                                        width: 'l'
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'event',
                          elem: 'footer',
                          mix: [
                            {
                              block: 'card',
                              elem: 'footer',
                              elemMods: {
                                'vertical-align': 'center',
                                distribute: 'center',
                                'space-a': 'xxl'
                              }
                            }
                          ],
                          content: [
                            {
                              block: 'text',
                              mods: {
                                size: 'xl',
                                view: 'link',
                                align: 'center'
                              },
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
                                    width: 's'
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
              ]
            }
          ]
        },
        {
          block: 'layout',
          elem: 'container',
          elemMods: {
            size: 's',
            align: 'center'
          },
          content: [
            {
              block: 'text',
              mods: {
                size: 'xxl',
                view: 'primary',
                type: 'h2'
              },
              content: [
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
                }
              ]
            },
            {
              block: 'text',
              mods: {
                size: 'l',
                view: 'primary',
                type: 'p'
              },
              content: [
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
                    width: 's'
                  }
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
                  }
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
                  }
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
                    width: 'l'
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
                    width: 's'
                  }
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
                    width: 'm'
                  }
                }
              ]
            },
            {
              block: 'text',
              mods: {
                size: 'xxl',
                view: 'primary',
                type: 'h3'
              },
              content: [
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
                    width: 'l'
                  }
                }
              ]
            },
            {
              block: 'text',
              mods: {
                size: 'l',
                view: 'primary',
                type: 'p'
              },
              content: [
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
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
                    width: 'l'
                  }
                },
                {
                  block: 'text',
                  elem: 'word',
                  elemMods: {
                    width: 'l'
                  }
                }
              ]
            }
          ]
        },
        {
          block: 'footer',
          content: [
            {
              block: 'footer',
              elem: 'content',
              content: [
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
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
                        width: 's'
                      }
                    }
                  ]
                },
                {
                  block: 'text',
                  mods: {
                    view: 'primary',
                    size: 'l'
                  },
                  content: [
                    {
                      block: 'text',
                      elem: 'word',
                      elemMods: {
                        width: 'l'
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
  ]
});

const contentBlocks = document.getElementById('content-blocks');
if (contentBlocks) {
  contentBlocks.innerHTML += blocks;
}

const indexPage = document.getElementById('index');
if (indexPage) {
  indexPage.innerHTML += index;
}

const productPage = document.getElementById('product');
if (productPage) {
  productPage.innerHTML += product;
}

const collectPage = document.getElementById('collect');
if (collectPage) {
  collectPage.innerHTML += collect;
}

const contentPage = document.getElementById('content');
if (contentPage) {
  contentPage.innerHTML += content;
}
