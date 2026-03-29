let currentVerb = null;
let selectedVerbElement = null;

const regularVerbsAR = [];
const regularVerbsER = [];
const regularVerbsIR = [];
const irregularVerbs = [
  {
    infinitive: 'ser',
    translation: 'быть (постоянное)',
    conjugations: {
      presente: {
        yo: 'soy',
        tu: 'eres',
        el: 'es',
        nosotros: 'somos',
        vosotros: 'sois',
        ellos: 'son'
      },
      preterito: {
        yo: 'fui',
        tu: 'fuiste',
        el: 'fue',
        nosotros: 'fuimos',
        vosotros: 'fuisteis',
        ellos: 'fueron'
      },
      futuro: {
        yo: 'seré',
        tu: 'serás',
        el: 'será',
        nosotros: 'seremos',
        vosotros: 'seréis',
        ellos: 'serán'
      }
    }
  },
  {
    infinitive: 'estar',
    translation: 'быть (временное)',
    conjugations: {
      presente: {
        yo: 'estoy',
        tu: 'estás',
        el: 'está',
        nosotros: 'estamos',
        vosotros: 'estáis',
        ellos: 'están'
      },
      preterito: {
        yo: 'estuve',
        tu: 'estuviste',
        el: 'estuvo',
        nosotros: 'estuvimos',
        vosotros: 'estuvisteis',
        ellos: 'estuvieron'
      },
      futuro: {
        yo: 'estaré',
        tu: 'estarás',
        el: 'estará',
        nosotros: 'estaremos',
        vosotros: 'estaréis',
        ellos: 'estarán'
      }
    }
  },
  {
    infinitive: 'tener',
    translation: 'иметь',
    conjugations: {
      presente: {
        yo: 'tengo',
        tu: 'tienes',
        el: 'tiene',
        nosotros: 'tenemos',
        vosotros: 'tenéis',
        ellos: 'tienen'
      },
      preterito: {
        yo: 'tuve',
        tu: 'tuviste',
        el: 'tuvo',
        nosotros: 'tuvimos',
        vosotros: 'tuvisteis',
        ellos: 'tuvieron'
      },
      futuro: {
        yo: 'tendré',
        tu: 'tendrás',
        el: 'tendrá',
        nosotros: 'tendremos',
        vosotros: 'tendréis',
        ellos: 'tendrán'
      }
    }
  },
  {
    infinitive: 'hacer',
    translation: 'делать',
    conjugations: {
      presente: {
        yo: 'hago',
        tu: 'haces',
        el: 'hace',
        nosotros: 'hacemos',
        vosotros: 'hacéis',
        ellos: 'hacen'
      },
      preterito: {
        yo: 'hice',
        tu: 'hiciste',
        el: 'hizo',
        nosotros: 'hicimos',
        vosotros: 'hicisteis',
        ellos: 'hicieron'
      },
      futuro: {
        yo: 'haré',
        tu: 'harás',
        el: 'hará',
        nosotros: 'haremos',
        vosotros: 'haréis',
        ellos: 'harán'
      }
    }
  },
  {
    infinitive: 'ir',
    translation: 'идти',
    conjugations: {
      presente: {
        yo: 'voy',
        tu: 'vas',
        el: 'va',
        nosotros: 'vamos',
        vosotros: 'vais',
        ellos: 'van'
      },
      preterito: {
        yo: 'fui',
        tu: 'fuiste',
        el: 'fue',
        nosotros: 'fuimos',
        vosotros: 'fuisteis',
        ellos: 'fueron'
      },
      futuro: {
        yo: 'iré',
        tu: 'irás',
        el: 'irá',
        nosotros: 'iremos',
        vosotros: 'iréis',
        ellos: 'irán'
      }
    }
  },
  {
    infinitive: 'poder',
    translation: 'мочь',
    conjugations: {
      presente: {
        yo: 'puedo',
        tu: 'puedes',
        el: 'puede',
        nosotros: 'podemos',
        vosotros: 'podéis',
        ellos: 'pueden'
      },
      preterito: {
        yo: 'pude',
        tu: 'pudiste',
        el: 'pudo',
        nosotros: 'pudimos',
        vosotros: 'pudisteis',
        ellos: 'pudieron'
      },
      futuro: {
        yo: 'podré',
        tu: 'podrás',
        el: 'podrá',
        nosotros: 'podremos',
        vosotros: 'podréis',
        ellos: 'podrán'
      }
    }
  },
  {
    infinitive: 'decir',
    translation: 'говорить, сказать',
    conjugations: {
      presente: {
        yo: 'digo',
        tu: 'dices',
        el: 'dice',
        nosotros: 'decimos',
        vosotros: 'decís',
        ellos: 'dicen'
      },
      preterito: {
        yo: 'dije',
        tu: 'dijiste',
        el: 'dijo',
        nosotros: 'dijimos',
        vosotros: 'dijisteis',
        ellos: 'dijeron'
      },
      futuro: {
        yo: 'diré',
        tu: 'dirás',
        el: 'dirá',
        nosotros: 'diremos',
        vosotros: 'diréis',
        ellos: 'dirán'
      }
    }
  },
  {
    infinitive: 'venir',
    translation: 'приходить',
    conjugations: {
      presente: {
        yo: 'vengo',
        tu: 'vienes',
        el: 'viene',
        nosotros: 'venimos',
        vosotros: 'venís',
        ellos: 'vienen'
      },
      preterito: {
        yo: 'vine',
        tu: 'viniste',
        el: 'vino',
        nosotros: 'vinimos',
        vosotros: 'vinisteis',
        ellos: 'vinieron'
      },
      futuro: {
        yo: 'vendré',
        tu: 'vendrás',
        el: 'vendrá',
        nosotros: 'vendremos',
        vosotros: 'vendréis',
        ellos: 'vendrán'
      }
    }
  },
  {
    infinitive: 'saber',
    translation: 'знать',
    conjugations: {
      presente: {
        yo: 'sé',
        tu: 'sabes',
        el: 'sabe',
        nosotros: 'sabemos',
        vosotros: 'sabéis',
        ellos: 'saben'
      },
      preterito: {
        yo: 'supe',
        tu: 'supiste',
        el: 'supo',
        nosotros: 'supimos',
        vosotros: 'supisteis',
        ellos: 'supieron'
      },
      futuro: {
        yo: 'sabré',
        tu: 'sabrás',
        el: 'sabrá',
        nosotros: 'sabremos',
        vosotros: 'sabréis',
        ellos: 'sabrán'
      }
    }
  },
  {
    infinitive: 'dar',
    translation: 'давать',
    conjugations: {
      presente: {
        yo: 'doy',
        tu: 'das',
        el: 'da',
        nosotros: 'damos',
        vosotros: 'dais',
        ellos: 'dan'
      },
      preterito: {
        yo: 'di',
        tu: 'diste',
        el: 'dio',
        nosotros: 'dimos',
        vosotros: 'disteis',
        ellos: 'dieron'
      },
      futuro: {
        yo: 'daré',
        tu: 'darás',
        el: 'dará',
        nosotros: 'daremos',
        vosotros: 'daréis',
        ellos: 'darán'
      }
    }
  },
  {
    infinitive: 'querer',
    translation: 'хотеть, любить',
    conjugations: {
      presente: {
        yo: 'quiero',
        tu: 'quieres',
        el: 'quiere',
        nosotros: 'queremos',
        vosotros: 'queréis',
        ellos: 'quieren'
      },
      preterito: {
        yo: 'quise',
        tu: 'quisiste',
        el: 'quiso',
        nosotros: 'quisimos',
        vosotros: 'quisisteis',
        ellos: 'quisieron'
      },
      futuro: {
        yo: 'querré',
        tu: 'querrás',
        el: 'querrá',
        nosotros: 'querremos',
        vosotros: 'querréis',
        ellos: 'querrán'
      }
    }
  },
  {
    infinitive: 'pensar',
    translation: 'думать',
    conjugations: {
      presente: {
        yo: 'pienso',
        tu: 'piensas',
        el: 'piensa',
        nosotros: 'pensamos',
        vosotros: 'pensáis',
        ellos: 'piensan'
      },
      preterito: {
        yo: 'pensé',
        tu: 'pensaste',
        el: 'pensó',
        nosotros: 'pensamos',
        vosotros: 'pensasteis',
        ellos: 'pensaron'
      },
      futuro: {
        yo: 'pensaré',
        tu: 'pensarás',
        el: 'pensará',
        nosotros: 'pensaremos',
        vosotros: 'pensaréis',
        ellos: 'pensarán'
      }
    }
  },
  {
    infinitive: 'dormir',
    translation: 'спать',
    conjugations: {
      presente: {
        yo: 'duermo',
        tu: 'duermes',
        el: 'duerme',
        nosotros: 'dormimos',
        vosotros: 'dormís',
        ellos: 'duermen'
      },
      preterito: {
        yo: 'dormí',
        tu: 'dormiste',
        el: 'durmió',
        nosotros: 'dormimos',
        vosotros: 'dormisteis',
        ellos: 'durmieron'
      },
      futuro: {
        yo: 'dormiré',
        tu: 'dormirás',
        el: 'dormirá',
        nosotros: 'dormiremos',
        vosotros: 'dormiréis',
        ellos: 'dormirán'
      }
    }
  },
  {
    infinitive: 'pedir',
    translation: 'просить',
    conjugations: {
      presente: {
        yo: 'pido',
        tu: 'pides',
        el: 'pide',
        nosotros: 'pedimos',
        vosotros: 'pedís',
        ellos: 'piden'
      },
      preterito: {
        yo: 'pedí',
        tu: 'pediste',
        el: 'pidió',
        nosotros: 'pedimos',
        vosotros: 'pedisteis',
        ellos: 'pidieron'
      },
      futuro: {
        yo: 'pediré',
        tu: 'pedirás',
        el: 'pedirá',
        nosotros: 'pediremos',
        vosotros: 'pediréis',
        ellos: 'pedirán'
      }
    }
  },
  {
    infinitive: 'conocer',
    translation: 'знать (быть знакомым)',
    conjugations: {
      presente: {
        yo: 'conozco',
        tu: 'conoces',
        el: 'conoce',
        nosotros: 'conocemos',
        vosotros: 'conocéis',
        ellos: 'conocen'
      },
      preterito: {
        yo: 'conocí',
        tu: 'conociste',
        el: 'conoció',
        nosotros: 'conocimos',
        vosotros: 'conocisteis',
        ellos: 'conocieron'
      },
      futuro: {
        yo: 'conoceré',
        tu: 'conocerás',
        el: 'conocerá',
        nosotros: 'conoceremos',
        vosotros: 'conoceréis',
        ellos: 'conocerán'
      }
    }
  },
  {
    infinitive: 'salir',
    translation: 'выходить',
    conjugations: {
      presente: {
        yo: 'salgo',
        tu: 'sales',
        el: 'sale',
        nosotros: 'salimos',
        vosotros: 'salís',
        ellos: 'salen'
      },
      preterito: {
        yo: 'salí',
        tu: 'saliste',
        el: 'salió',
        nosotros: 'salimos',
        vosotros: 'salisteis',
        ellos: 'salieron'
      },
      futuro: {
        yo: 'saldré',
        tu: 'saldrás',
        el: 'saldrá',
        nosotros: 'saldremos',
        vosotros: 'saldréis',
        ellos: 'saldrán'
      }
    }
  },
  {
    infinitive: 'traer',
    translation: 'приносить',
    conjugations: {
      presente: {
        yo: 'traigo',
        tu: 'traes',
        el: 'trae',
        nosotros: 'traemos',
        vosotros: 'traéis',
        ellos: 'traen'
      },
      preterito: {
        yo: 'traje',
        tu: 'trajiste',
        el: 'trajo',
        nosotros: 'trajimos',
        vosotros: 'trajisteis',
        ellos: 'trajeron'
      },
      futuro: {
        yo: 'traeré',
        tu: 'traerás',
        el: 'traerá',
        nosotros: 'traeremos',
        vosotros: 'traeréis',
        ellos: 'traerán'
      }
    }
  },
  {
    infinitive: 'ver',
    translation: 'видеть',
    conjugations: {
      presente: {
        yo: 'veo',
        tu: 'ves',
        el: 've',
        nosotros: 'vemos',
        vosotros: 'veis',
        ellos: 'ven'
      },
      preterito: {
        yo: 'vi',
        tu: 'viste',
        el: 'vio',
        nosotros: 'vimos',
        vosotros: 'visteis',
        ellos: 'vieron'
      },
      futuro: {
        yo: 'veré',
        tu: 'verás',
        el: 'verá',
        nosotros: 'veremos',
        vosotros: 'veréis',
        ellos: 'verán'
      }
    }
  },
  {
    infinitive: 'poner',
    translation: 'класть, ставить',
    conjugations: {
      presente: {
        yo: 'pongo',
        tu: 'pones',
        el: 'pone',
        nosotros: 'ponemos',
        vosotros: 'ponéis',
        ellos: 'ponen'
      },
      preterito: {
        yo: 'puse',
        tu: 'pusiste',
        el: 'puso',
        nosotros: 'pusimos',
        vosotros: 'pusisteis',
        ellos: 'pusieron'
      },
      futuro: {
        yo: 'pondré',
        tu: 'pondrás',
        el: 'pondrá',
        nosotros: 'pondremos',
        vosotros: 'pondréis',
        ellos: 'pondrán'
      }
    }
  },
  {
    infinitive: 'caer',
    translation: 'падать',
    conjugations: {
      presente: {
        yo: 'caigo',
        tu: 'caes',
        el: 'cae',
        nosotros: 'caemos',
        vosotros: 'caéis',
        ellos: 'caen'
      },
      preterito: {
        yo: 'caí',
        tu: 'caíste',
        el: 'cayó',
        nosotros: 'caímos',
        vosotros: 'caísteis',
        ellos: 'cayeron'
      },
      futuro: {
        yo: 'caeré',
        tu: 'caerás',
        el: 'caerá',
        nosotros: 'caeremos',
        vosotros: 'caeréis',
        ellos: 'caerán'
      }
    }
  },
  {
    infinitive: 'oír',
    translation: 'слышать',
    conjugations: {
      presente: {
        yo: 'oigo',
        tu: 'oyes',
        el: 'oye',
        nosotros: 'oímos',
        vosotros: 'oís',
        ellos: 'oyen'
      },
      preterito: {
        yo: 'oí',
        tu: 'oíste',
        el: 'oyó',
        nosotros: 'oímos',
        vosotros: 'oísteis',
        ellos: 'oyeron'
      },
      futuro: {
        yo: 'oiré',
        tu: 'oirás',
        el: 'oirá',
        nosotros: 'oiremos',
        vosotros: 'oiréis',
        ellos: 'oirán'
      }
    }
  },
  {
    infinitive: 'entender',
    translation: 'понимать',
    conjugations: {
      presente: {
        yo: 'entiendo',
        tu: 'entiendes',
        el: 'entiende',
        nosotros: 'entendemos',
        vosotros: 'entendéis',
        ellos: 'entienden'
      },
      preterito: {
        yo: 'entendí',
        tu: 'entendiste',
        el: 'entendió',
        nosotros: 'entendimos',
        vosotros: 'entendisteis',
        ellos: 'entendieron'
      },
      futuro: {
        yo: 'entenderé',
        tu: 'entenderás',
        el: 'entenderá',
        nosotros: 'entenderemos',
        vosotros: 'entenderéis',
        ellos: 'entenderán'
      }
    }
  },
  {
    infinitive: 'jugar',
    translation: 'играть',
    conjugations: {
      presente: {
        yo: 'juego',
        tu: 'juegas',
        el: 'juega',
        nosotros: 'jugamos',
        vosotros: 'jugáis',
        ellos: 'juegan'
      },
      preterito: {
        yo: 'jugué',
        tu: 'jugaste',
        el: 'jugó',
        nosotros: 'jugamos',
        vosotros: 'jugasteis',
        ellos: 'jugaron'
      },
      futuro: {
        yo: 'jugaré',
        tu: 'jugarás',
        el: 'jugará',
        nosotros: 'jugaremos',
        vosotros: 'jugaréis',
        ellos: 'jugarán'
      }
    }
  },
  {
    infinitive: 'comenzar',
    translation: 'начинать',
    conjugations: {
      presente: {
        yo: 'comienzo',
        tu: 'comienzas',
        el: 'comienza',
        nosotros: 'comenzamos',
        vosotros: 'comenzáis',
        ellos: 'comienzan'
      },
      preterito: {
        yo: 'comencé',
        tu: 'comenzaste',
        el: 'comenzó',
        nosotros: 'comenzamos',
        vosotros: 'comenzasteis',
        ellos: 'comenzaron'
      },
      futuro: {
        yo: 'comenzaré',
        tu: 'comenzarás',
        el: 'comenzará',
        nosotros: 'comenzaremos',
        vosotros: 'comenzaréis',
        ellos: 'comenzarán'
      }
    }
  },
  {
    infinitive: 'seguir',
    translation: 'следовать',
    conjugations: {
      presente: {
        yo: 'sigo',
        tu: 'sigues',
        el: 'sigue',
        nosotros: 'seguimos',
        vosotros: 'seguís',
        ellos: 'siguen'
      },
      preterito: {
        yo: 'seguí',
        tu: 'seguiste',
        el: 'siguió',
        nosotros: 'seguimos',
        vosotros: 'seguisteis',
        ellos: 'siguieron'
      },
      futuro: {
        yo: 'seguiré',
        tu: 'seguirás',
        el: 'seguirá',
        nosotros: 'seguiremos',
        vosotros: 'seguiréis',
        ellos: 'seguirán'
      }
    }
  },
  {
    infinitive: 'sentar',
    translation: 'садить',
    conjugations: {
      presente: {
        yo: 'siento',
        tu: 'sientas',
        el: 'sienta',
        nosotros: 'sentamos',
        vosotros: 'sentáis',
        ellos: 'sientan'
      },
      preterito: {
        yo: 'senté',
        tu: 'sentaste',
        el: 'sentó',
        nosotros: 'sentamos',
        vosotros: 'sentasteis',
        ellos: 'sentaron'
      },
      futuro: {
        yo: 'sentaré',
        tu: 'sentarás',
        el: 'sentará',
        nosotros: 'sentaremos',
        vosotros: 'sentaréis',
        ellos: 'sentarán'
      }
    }
  },
  {
    infinitive: 'acostar',
    translation: 'укладывать',
    conjugations: {
      presente: {
        yo: 'acuesto',
        tu: 'acuestas',
        el: 'acuesta',
        nosotros: 'acostamos',
        vosotros: 'acostáis',
        ellos: 'acuestan'
      },
      preterito: {
        yo: 'acosté',
        tu: 'acostaste',
        el: 'acostó',
        nosotros: 'acostamos',
        vosotros: 'acostasteis',
        ellos: 'acostaron'
      },
      futuro: {
        yo: 'acostaré',
        tu: 'acostarás',
        el: 'acostará',
        nosotros: 'acostaremos',
        vosotros: 'acostaréis',
        ellos: 'acostarán'
      }
    }
  },
  {
    infinitive: 'despertar',
    translation: 'будить',
    conjugations: {
      presente: {
        yo: 'despierto',
        tu: 'despiertas',
        el: 'despierta',
        nosotros: 'despertamos',
        vosotros: 'despertáis',
        ellos: 'despiertan'
      },
      preterito: {
        yo: 'desperté',
        tu: 'despertaste',
        el: 'despertó',
        nosotros: 'despertamos',
        vosotros: 'despertasteis',
        ellos: 'despertaron'
      },
      futuro: {
        yo: 'despertaré',
        tu: 'despertarás',
        el: 'despertará',
        nosotros: 'despertaremos',
        vosotros: 'despertaréis',
        ellos: 'despertarán'
      }
    }
  },
  {
    infinitive: 'vestir',
    translation: 'одевать',
    conjugations: {
      presente: {
        yo: 'visto',
        tu: 'vistes',
        el: 'viste',
        nosotros: 'vestimos',
        vosotros: 'vistís',
        ellos: 'visten'
      },
      preterito: {
        yo: 'vestí',
        tu: 'vestiste',
        el: 'vistió',
        nosotros: 'vestimos',
        vosotros: 'vestisteis',
        ellos: 'vistieron'
      },
      futuro: {
        yo: 'vestiré',
        tu: 'vestirás',
        el: 'vestirá',
        nosotros: 'vestiremos',
        vosotros: 'vestiréis',
        ellos: 'vestirán'
      }
    }
  },
  {
    infinitive: 'servir',
    translation: 'подавать, служить',
    conjugations: {
      presente: {
        yo: 'sirvo',
        tu: 'sirves',
        el: 'sirve',
        nosotros: 'servimos',
        vosotros: 'servís',
        ellos: 'sirven'
      },
      preterito: {
        yo: 'serví',
        tu: 'serviste',
        el: 'sirvió',
        nosotros: 'servimos',
        vosotros: 'servisteis',
        ellos: 'sirvieron'
      },
      futuro: {
        yo: 'serviré',
        tu: 'servirás',
        el: 'servirá',
        nosotros: 'serviremos',
        vosotros: 'serviréis',
        ellos: 'servirán'
      }
    }
  },
  {
    infinitive: 'probar',
    translation: 'пробовать',
    conjugations: {
      presente: {
        yo: 'pruebo',
        tu: 'pruebas',
        el: 'prueba',
        nosotros: 'probamos',
        vosotros: 'probáis',
        ellos: 'prueban'
      },
      preterito: {
        yo: 'probé',
        tu: 'probaste',
        el: 'probó',
        nosotros: 'probamos',
        vosotros: 'probasteis',
        ellos: 'probaron'
      },
      futuro: {
        yo: 'probaré',
        tu: 'probarás',
        el: 'probará',
        nosotros: 'probaremos',
        vosotros: 'probaréis',
        ellos: 'probarán'
      }
    }
  },
  {
    infinitive: 'encontrar',
    translation: 'находить',
    conjugations: {
      presente: {
        yo: 'encuentro',
        tu: 'encuentras',
        el: 'encuentra',
        nosotros: 'encontramos',
        vosotros: 'encontráis',
        ellos: 'encuentran'
      },
      preterito: {
        yo: 'encontré',
        tu: 'encontraste',
        el: 'encontró',
        nosotros: 'encontramos',
        vosotros: 'encontrasteis',
        ellos: 'encontraron'
      },
      futuro: {
        yo: 'encontraré',
        tu: 'encontrarás',
        el: 'encontrará',
        nosotros: 'encontraremos',
        vosotros: 'encontraréis',
        ellos: 'encontrarán'
      }
    }
  },
  {
    infinitive: 'sufrir',
    translation: 'страдать',
    conjugations: {
      presente: {
        yo: 'sufro',
        tu: 'sufres',
        el: 'sufre',
        nosotros: 'sufrimos',
        vosotros: 'sufrís',
        ellos: 'sufren'
      },
      preterito: {
        yo: 'sufrí',
        tu: 'sufriste',
        el: 'sufrió',
        nosotros: 'sufrimos',
        vosotros: 'sufristeis',
        ellos: 'sufrieron'
      },
      futuro: {
        yo: 'sufriré',
        tu: 'sufrirás',
        el: 'sufrirá',
        nosotros: 'sufriremos',
        vosotros: 'sufriréis',
        ellos: 'sufrirán'
      }
    }
  },
  {
    infinitive: 'establecer',
    translation: 'устанавливать',
    conjugations: {
      presente: {
        yo: 'establezco',
        tu: 'estableces',
        el: 'establece',
        nosotros: 'establecemos',
        vosotros: 'establecéis',
        ellos: 'establecen'
      },
      preterito: {
        yo: 'establecí',
        tu: 'estableciste',
        el: 'estableció',
        nosotros: 'establecimos',
        vosotros: 'establecisteis',
        ellos: 'establecieron'
      },
      futuro: {
        yo: 'estableceré',
        tu: 'establecerás',
        el: 'establecerá',
        nosotros: 'estableceremos',
        vosotros: 'estableceréis',
        ellos: 'establecerán'
      }
    }
  },
  {
    infinitive: 'conseguir',
    translation: 'получать, достигать',
    conjugations: {
      presente: {
        yo: 'consigo',
        tu: 'consigues',
        el: 'consigue',
        nosotros: 'conseguimos',
        vosotros: 'conseguís',
        ellos: 'consiguen'
      },
      preterito: {
        yo: 'conseguí',
        tu: 'conseguiste',
        el: 'consiguió',
        nosotros: 'conseguimos',
        vosotros: 'conseguisteis',
        ellos: 'consiguieron'
      },
      futuro: {
        yo: 'conseguiré',
        tu: 'conseguirás',
        el: 'conseguirá',
        nosotros: 'conseguiremos',
        vosotros: 'conseguiréis',
        ellos: 'conseguirán'
      }
    }
  },
  {
    infinitive: 'convertir',
    translation: 'превращать',
    conjugations: {
      presente: {
        yo: 'convierto',
        tu: 'conviertes',
        el: 'convierte',
        nosotros: 'convertimos',
        vosotros: 'convertís',
        ellos: 'convierten'
      },
      preterito: {
        yo: 'convertí',
        tu: 'convertiste',
        el: 'convirtió',
        nosotros: 'convertimos',
        vosotros: 'convertisteis',
        ellos: 'convirtieron'
      },
      futuro: {
        yo: 'convertiré',
        tu: 'convertirás',
        el: 'convertirá',
        nosotros: 'convertiremos',
        vosotros: 'convertiréis',
        ellos: 'convertirán'
      }
    }
  },
  {
    infinitive: 'suponer',
    translation: 'предполагать',
    conjugations: {
      presente: {
        yo: 'supongo',
        tu: 'supones',
        el: 'supone',
        nosotros: 'suponemos',
        vosotros: 'suponéis',
        ellos: 'suponen'
      },
      preterito: {
        yo: 'supuse',
        tu: 'supusiste',
        el: 'supuso',
        nosotros: 'supusimos',
        vosotros: 'supusisteis',
        ellos: 'supusieron'
      },
      futuro: {
        yo: 'supondré',
        tu: 'supondrás',
        el: 'supondrá',
        nosotros: 'supondremos',
        vosotros: 'supondréis',
        ellos: 'supondrán'
      }
    }
  },
  {
    infinitive: 'reconocer',
    translation: 'узнавать',
    conjugations: {
      presente: {
        yo: 'reconozco',
        tu: 'reconoces',
        el: 'reconoce',
        nosotros: 'reconocemos',
        vosotros: 'reconocéis',
        ellos: 'reconocen'
      },
      preterito: {
        yo: 'reconocí',
        tu: 'reconociste',
        el: 'reconoció',
        nosotros: 'reconocimos',
        vosotros: 'reconocisteis',
        ellos: 'reconocieron'
      },
      futuro: {
        yo: 'reconoceré',
        tu: 'reconocerás',
        el: 'reconocerá',
        nosotros: 'reconoceremos',
        vosotros: 'reconoceréis',
        ellos: 'reconocerán'
      }
    }
  },
  {
    infinitive: 'alcanzar',
    translation: 'достигать',
    conjugations: {
      presente: {
        yo: 'alcanzo',
        tu: 'alcanzas',
        el: 'alcanza',
        nosotros: 'alcanzamos',
        vosotros: 'alcanzáis',
        ellos: 'alcanzan'
      },
      preterito: {
        yo: 'alcancé',
        tu: 'alcanzaste',
        el: 'alcanzó',
        nosotros: 'alcanzamos',
        vosotros: 'alcanzasteis',
        ellos: 'alcanzaron'
      },
      futuro: {
        yo: 'alcanzaré',
        tu: 'alcanzarás',
        el: 'alcanzará',
        nosotros: 'alcanzaremos',
        vosotros: 'alcanzaréis',
        ellos: 'alcanzarán'
      }
    }
  },
  {
    infinitive: 'nacer',
    translation: 'рождаться',
    conjugations: {
      presente: {
        yo: 'nazco',
        tu: 'naces',
        el: 'nace',
        nosotros: 'nacemos',
        vosotros: 'nacéis',
        ellos: 'nacen'
      },
      preterito: {
        yo: 'nací',
        tu: 'naciste',
        el: 'nació',
        nosotros: 'nacimos',
        vosotros: 'nacisteis',
        ellos: 'nacieron'
      },
      futuro: {
        yo: 'naceré',
        tu: 'nacerás',
        el: 'nacerá',
        nosotros: 'naceremos',
        vosotros: 'naceréis',
        ellos: 'nacerán'
      }
    }
  },
  {
    infinitive: 'ofrecer',
    translation: 'предлагать',
    conjugations: {
      presente: {
        yo: 'ofrezco',
        tu: 'ofreces',
        el: 'ofrece',
        nosotros: 'ofrecemos',
        vosotros: 'ofrecéis',
        ellos: 'ofrecen'
      },
      preterito: {
        yo: 'ofrecí',
        tu: 'ofreciste',
        el: 'ofreció',
        nosotros: 'ofrecimos',
        vosotros: 'ofrecisteis',
        ellos: 'ofrecieron'
      },
      futuro: {
        yo: 'ofreceré',
        tu: 'ofrecerás',
        el: 'ofrecerá',
        nosotros: 'ofreceremos',
        vosotros: 'ofreceréis',
        ellos: 'ofrecerán'
      }
    }
  },
  {
    infinitive: 'elegir',
    translation: 'выбирать',
    conjugations: {
      presente: {
        yo: 'elijo',
        tu: 'eliges',
        el: 'elige',
        nosotros: 'elegimos',
        vosotros: 'elegís',
        ellos: 'eligen'
      },
      preterito: {
        yo: 'elegí',
        tu: 'elegiste',
        el: 'eligió',
        nosotros: 'elegimos',
        vosotros: 'elegisteis',
        ellos: 'eligieron'
      },
      futuro: {
        yo: 'elegiré',
        tu: 'elegirás',
        el: 'elegirá',
        nosotros: 'elegiremos',
        vosotros: 'elegiréis',
        ellos: 'elegirán'
      }
    }
  },
  {
    infinitive: 'construir',
    translation: 'строить',
    conjugations: {
      presente: {
        yo: 'construyo',
        tu: 'construyes',
        el: 'construye',
        nosotros: 'construimos',
        vosotros: 'construís',
        ellos: 'construyen'
      },
      preterito: {
        yo: 'construí',
        tu: 'construiste',
        el: 'construyó',
        nosotros: 'construimos',
        vosotros: 'construisteis',
        ellos: 'construyeron'
      },
      futuro: {
        yo: 'construiré',
        tu: 'construirás',
        el: 'construirá',
        nosotros: 'construiremos',
        vosotros: 'construiréis',
        ellos: 'construirán'
      }
    }
  },
  {
    infinitive: 'reír',
    translation: 'смеяться',
    conjugations: {
      presente: {
        yo: 'río',
        tu: 'ríes',
        el: 'ríe',
        nosotros: 'reímos',
        vosotros: 'reís',
        ellos: 'ríen'
      },
      preterito: {
        yo: 'reí',
        tu: 'reíste',
        el: 'rió',
        nosotros: 'reímos',
        vosotros: 'reísteis',
        ellos: 'rieron'
      },
      futuro: {
        yo: 'reiré',
        tu: 'reirás',
        el: 'reirá',
        nosotros: 'reiremos',
        vosotros: 'reiréis',
        ellos: 'reirán'
      }
    }
  },
  {
    infinitive: 'crecer',
    translation: 'расти',
    conjugations: {
      presente: {
        yo: 'crezco',
        tu: 'creces',
        el: 'crece',
        nosotros: 'crecemos',
        vosotros: 'crecéis',
        ellos: 'crecen'
      },
      preterito: {
        yo: 'crecí',
        tu: 'creciste',
        el: 'creció',
        nosotros: 'crecimos',
        vosotros: 'crecisteis',
        ellos: 'crecieron'
      },
      futuro: {
        yo: 'creceré',
        tu: 'crecerás',
        el: 'crecerá',
        nosotros: 'creceremos',
        vosotros: 'creceréis',
        ellos: 'crecerán'
      }
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const backToGrammarBtn = document.getElementById('backToGrammarBtn');
  
  backToGrammarBtn.addEventListener('click', () => {
    window.location.href = 'learn-es-grammar.html';
  });

  initTenseTabs();
  loadVerbs();
  displayVerbLists();
  checkVerbsInDictionary();
});

function initTenseTabs() {
  document.querySelectorAll('.verb-group__tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const group = tab.dataset.group;
      const tense = tab.dataset.tense;
      
      console.log('Tab clicked:', group, tense);
      
      document.querySelectorAll(`.verb-group__tab[data-group="${group}"]`).forEach(t => {
        t.classList.remove('verb-group__tab--active');
      });
      tab.classList.add('verb-group__tab--active');
      
      document.querySelectorAll(`.verb-group__endings-panel[data-group="${group}"]`).forEach(panel => {
        panel.classList.remove('verb-group__endings-panel--active');
      });
      
      const targetPanel = document.querySelector(`.verb-group__endings-panel[data-group="${group}"][data-tense="${tense}"]`);
      if (targetPanel) {
        targetPanel.classList.add('verb-group__endings-panel--active');
      }
    });
  });
}

function loadVerbs() {
  if (typeof spanishWords === 'undefined') return;
  
  const irregularVerbsList = irregularVerbs.map(v => v.infinitive);
  
  spanishWords.forEach(word => {
    if (word.type === 'глагол' || word.category === 'verbs') {
      if (irregularVerbsList.includes(word.word)) {
        return;
      }
      
      if (word.word.endsWith('ar')) {
        regularVerbsAR.push(word);
      } else if (word.word.endsWith('er')) {
        regularVerbsER.push(word);
      } else if (word.word.endsWith('ir')) {
        regularVerbsIR.push(word);
      }
    }
  });
}

function displayVerbLists() {
  displayVerbGroup('verbListAR', regularVerbsAR, 'regular', 'ar');
  displayVerbGroup('verbListER', regularVerbsER, 'regular', 'er');
  displayVerbGroup('verbListIR', regularVerbsIR, 'regular', 'ir');
  displayVerbGroup('verbListIrregular', irregularVerbs, 'irregular');
}

function displayVerbGroup(containerId, verbs, type, ending = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (verbs.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 14px;">Глаголы не найдены</p>';
    return;
  }
  
  container.innerHTML = verbs.map((verb, index) => {
    const infinitive = type === 'irregular' ? verb.infinitive : verb.word;
    const translation = type === 'irregular' ? verb.translation : verb.translation;
    const verbId = `${type}-${ending || 'irreg'}-${index}`;
    
    return `
      <div class="verb-item" data-verb-id="${verbId}" data-verb-type="${type}" data-ending="${ending || 'irregular'}">
        <div class="verb-item__text">
          <span class="verb-item__spanish">${infinitive}</span>
          <span class="verb-item__translation">${translation}</span>
        </div>
        <div class="verb-item__buttons">
          <button class="verb-item__play-btn" data-text="${infinitive}" data-lang="es">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <button class="verb-item__add-btn" data-text="${infinitive}" data-translation="${translation}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  container.querySelectorAll('.verb-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.verb-item__play-btn') || e.target.closest('.verb-item__add-btn')) {
        return;
      }
      
      const verbId = item.dataset.verbId;
      const verbType = item.dataset.verbType;
      const ending = item.dataset.ending;
      const [type, end, index] = verbId.split('-');
      const verbIndex = parseInt(index);
      
      if (selectedVerbElement) {
        selectedVerbElement.classList.remove('verb-item--active');
      }
      
      item.classList.add('verb-item--active');
      selectedVerbElement = item;
      
      if (verbType === 'irregular') {
        currentVerb = irregularVerbs[verbIndex];
        displayIrregularVerbConjugation(currentVerb);
      } else {
        let verb;
        if (ending === 'ar') verb = regularVerbsAR[verbIndex];
        else if (ending === 'er') verb = regularVerbsER[verbIndex];
        else if (ending === 'ir') verb = regularVerbsIR[verbIndex];
        
        if (verb) {
          currentVerb = verb;
          displayRegularVerbConjugation(verb, ending);
        }
      }
    });
  });
  
  container.querySelectorAll('.verb-item__play-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = button.dataset.text;
      const lang = button.dataset.lang;
      await playVerbAudio(text, lang, button);
    });
  });
  
  container.querySelectorAll('.verb-item__add-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = button.dataset.text;
      const translation = button.dataset.translation;
      await addVerbToHistory(text, translation, button);
    });
  });
}

function conjugateRegularVerb(infinitive, ending, tense) {
  const stem = infinitive.slice(0, -2);
  
  const endings = {
    ar: {
      presente: { yo: 'o', tu: 'as', el: 'a', nosotros: 'amos', vosotros: 'áis', ellos: 'an' },
      preterito: { yo: 'é', tu: 'aste', el: 'ó', nosotros: 'amos', vosotros: 'asteis', ellos: 'aron' },
      futuro: { yo: 'aré', tu: 'arás', el: 'ará', nosotros: 'aremos', vosotros: 'aréis', ellos: 'arán' }
    },
    er: {
      presente: { yo: 'o', tu: 'es', el: 'e', nosotros: 'emos', vosotros: 'éis', ellos: 'en' },
      preterito: { yo: 'í', tu: 'iste', el: 'ió', nosotros: 'imos', vosotros: 'isteis', ellos: 'ieron' },
      futuro: { yo: 'eré', tu: 'erás', el: 'erá', nosotros: 'eremos', vosotros: 'eréis', ellos: 'erán' }
    },
    ir: {
      presente: { yo: 'o', tu: 'es', el: 'e', nosotros: 'imos', vosotros: 'ís', ellos: 'en' },
      preterito: { yo: 'í', tu: 'iste', el: 'ió', nosotros: 'imos', vosotros: 'isteis', ellos: 'ieron' },
      futuro: { yo: 'iré', tu: 'irás', el: 'irá', nosotros: 'iremos', vosotros: 'iréis', ellos: 'irán' }
    }
  };
  
  const tenseEndings = endings[ending][tense];
  
  return {
    yo: stem + tenseEndings.yo,
    tu: stem + tenseEndings.tu,
    el: stem + tenseEndings.el,
    nosotros: stem + tenseEndings.nosotros,
    vosotros: stem + tenseEndings.vosotros,
    ellos: stem + tenseEndings.ellos
  };
}

function displayRegularVerbConjugation(verb, ending) {
  const container = document.getElementById('conjugationTableContainer');
  const titleElement = document.getElementById('currentVerbTitle');
  const translationElement = document.getElementById('currentVerbTranslation');
  
  titleElement.textContent = verb.word;
  translationElement.textContent = verb.translation;
  
  const presente = conjugateRegularVerb(verb.word, ending, 'presente');
  const preterito = conjugateRegularVerb(verb.word, ending, 'preterito');
  const futuro = conjugateRegularVerb(verb.word, ending, 'futuro');
  
  const examplesHTML = verb.examples ? generateExamplesSection(verb.examples) : '';
  
  container.innerHTML = `
    ${examplesHTML}
    
    <div class="tense-section">
      <h3 class="tense-section__title">
        <span class="tense-section__badge">Presente</span>
        Настоящее время
      </h3>
      ${generateConjugationTable(presente, verb.word, verb.translation)}
    </div>
    
    <div class="tense-section">
      <h3 class="tense-section__title">
        <span class="tense-section__badge">Pretérito</span>
        Прошедшее время
      </h3>
      ${generateConjugationTable(preterito, verb.word, verb.translation)}
    </div>
    
    <div class="tense-section">
      <h3 class="tense-section__title">
        <span class="tense-section__badge">Futuro</span>
        Будущее время
      </h3>
      ${generateConjugationTable(futuro, verb.word, verb.translation)}
    </div>
  `;
  
  attachConjugationEventListeners();
  attachExampleEventListeners();
}

function generateExamplesSection(examples) {
  if (!examples || (!examples.present && !examples.past && !examples.future)) {
    return '';
  }
  
  let examplesHTML = '<div class="verb-examples-section">';
  examplesHTML += '<h3 class="verb-examples-section__title">📝 Примеры использования</h3>';
  examplesHTML += '<div class="verb-examples-grid">';
  
  if (examples.present) {
    if (examples.present.yo) {
      examplesHTML += '<div class="verb-example-card">';
      examplesHTML += '<div class="verb-example-card__header">Настоящее время</div>';
      examplesHTML += '<div class="verb-example-card__content">';
      ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'].forEach(pronoun => {
        if (examples.present[pronoun]) {
          examplesHTML += `<div class="verb-example-item">`;
          examplesHTML += `<div class="verb-example-item__text">`;
          examplesHTML += `<span class="verb-example-item__es">${examples.present[pronoun].es}</span>`;
          examplesHTML += `<span class="verb-example-item__ru">${examples.present[pronoun].ru}</span>`;
          examplesHTML += `</div>`;
          examplesHTML += `<div class="verb-example-item__buttons">`;
          examplesHTML += `<button class="verb-example-item__play-btn" data-text="${examples.present[pronoun].es}" data-lang="es">`;
          examplesHTML += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
          examplesHTML += `</button>`;
          examplesHTML += `<button class="verb-example-item__add-btn" data-text="${examples.present[pronoun].es}" data-translation="${examples.present[pronoun].ru}">`;
          examplesHTML += `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
          examplesHTML += `</button>`;
          examplesHTML += `</div>`;
          examplesHTML += `</div>`;
        }
      });
      examplesHTML += '</div></div>';
    } else {
      examplesHTML += '<div class="verb-example-card">';
      examplesHTML += '<div class="verb-example-card__header">Настоящее время</div>';
      examplesHTML += '<div class="verb-example-card__content">';
      examplesHTML += `<div class="verb-example-item">`;
      examplesHTML += `<div class="verb-example-item__text">`;
      examplesHTML += `<span class="verb-example-item__es">${examples.present.es}</span>`;
      examplesHTML += `<span class="verb-example-item__ru">${examples.present.ru}</span>`;
      examplesHTML += `</div>`;
      examplesHTML += `<div class="verb-example-item__buttons">`;
      examplesHTML += `<button class="verb-example-item__play-btn" data-text="${examples.present.es}" data-lang="es">`;
      examplesHTML += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
      examplesHTML += `</button>`;
      examplesHTML += `<button class="verb-example-item__add-btn" data-text="${examples.present.es}" data-translation="${examples.present.ru}">`;
      examplesHTML += `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
      examplesHTML += `</button>`;
      examplesHTML += `</div>`;
      examplesHTML += `</div>`;
      examplesHTML += '</div></div>';
    }
  }
  
  if (examples.past) {
    if (examples.past.yo) {
      examplesHTML += '<div class="verb-example-card">';
      examplesHTML += '<div class="verb-example-card__header">Прошедшее время</div>';
      examplesHTML += '<div class="verb-example-card__content">';
      ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'].forEach(pronoun => {
        if (examples.past[pronoun]) {
          examplesHTML += `<div class="verb-example-item">`;
          examplesHTML += `<div class="verb-example-item__text">`;
          examplesHTML += `<span class="verb-example-item__es">${examples.past[pronoun].es}</span>`;
          examplesHTML += `<span class="verb-example-item__ru">${examples.past[pronoun].ru}</span>`;
          examplesHTML += `</div>`;
          examplesHTML += `<div class="verb-example-item__buttons">`;
          examplesHTML += `<button class="verb-example-item__play-btn" data-text="${examples.past[pronoun].es}" data-lang="es">`;
          examplesHTML += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
          examplesHTML += `</button>`;
          examplesHTML += `<button class="verb-example-item__add-btn" data-text="${examples.past[pronoun].es}" data-translation="${examples.past[pronoun].ru}">`;
          examplesHTML += `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
          examplesHTML += `</button>`;
          examplesHTML += `</div>`;
          examplesHTML += `</div>`;
        }
      });
      examplesHTML += '</div></div>';
    } else {
      examplesHTML += '<div class="verb-example-card">';
      examplesHTML += '<div class="verb-example-card__header">Прошедшее время</div>';
      examplesHTML += '<div class="verb-example-card__content">';
      examplesHTML += `<div class="verb-example-item">`;
      examplesHTML += `<div class="verb-example-item__text">`;
      examplesHTML += `<span class="verb-example-item__es">${examples.past.es}</span>`;
      examplesHTML += `<span class="verb-example-item__ru">${examples.past.ru}</span>`;
      examplesHTML += `</div>`;
      examplesHTML += `<div class="verb-example-item__buttons">`;
      examplesHTML += `<button class="verb-example-item__play-btn" data-text="${examples.past.es}" data-lang="es">`;
      examplesHTML += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
      examplesHTML += `</button>`;
      examplesHTML += `<button class="verb-example-item__add-btn" data-text="${examples.past.es}" data-translation="${examples.past.ru}">`;
      examplesHTML += `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
      examplesHTML += `</button>`;
      examplesHTML += `</div>`;
      examplesHTML += `</div>`;
      examplesHTML += '</div></div>';
    }
  }
  
  if (examples.future) {
    if (examples.future.yo) {
      examplesHTML += '<div class="verb-example-card">';
      examplesHTML += '<div class="verb-example-card__header">Будущее время</div>';
      examplesHTML += '<div class="verb-example-card__content">';
      ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'].forEach(pronoun => {
        if (examples.future[pronoun]) {
          examplesHTML += `<div class="verb-example-item">`;
          examplesHTML += `<div class="verb-example-item__text">`;
          examplesHTML += `<span class="verb-example-item__es">${examples.future[pronoun].es}</span>`;
          examplesHTML += `<span class="verb-example-item__ru">${examples.future[pronoun].ru}</span>`;
          examplesHTML += `</div>`;
          examplesHTML += `<div class="verb-example-item__buttons">`;
          examplesHTML += `<button class="verb-example-item__play-btn" data-text="${examples.future[pronoun].es}" data-lang="es">`;
          examplesHTML += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
          examplesHTML += `</button>`;
          examplesHTML += `<button class="verb-example-item__add-btn" data-text="${examples.future[pronoun].es}" data-translation="${examples.future[pronoun].ru}">`;
          examplesHTML += `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
          examplesHTML += `</button>`;
          examplesHTML += `</div>`;
          examplesHTML += `</div>`;
        }
      });
      examplesHTML += '</div></div>';
    } else {
      examplesHTML += '<div class="verb-example-card">';
      examplesHTML += '<div class="verb-example-card__header">Будущее время</div>';
      examplesHTML += '<div class="verb-example-card__content">';
      examplesHTML += `<div class="verb-example-item">`;
      examplesHTML += `<div class="verb-example-item__text">`;
      examplesHTML += `<span class="verb-example-item__es">${examples.future.es}</span>`;
      examplesHTML += `<span class="verb-example-item__ru">${examples.future.ru}</span>`;
      examplesHTML += `</div>`;
      examplesHTML += `<div class="verb-example-item__buttons">`;
      examplesHTML += `<button class="verb-example-item__play-btn" data-text="${examples.future.es}" data-lang="es">`;
      examplesHTML += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
      examplesHTML += `</button>`;
      examplesHTML += `<button class="verb-example-item__add-btn" data-text="${examples.future.es}" data-translation="${examples.future.ru}">`;
      examplesHTML += `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
      examplesHTML += `</button>`;
      examplesHTML += `</div>`;
      examplesHTML += `</div>`;
      examplesHTML += '</div></div>';
    }
  }
  
  examplesHTML += '</div></div>';
  return examplesHTML;
}

function displayIrregularVerbConjugation(verb) {
  const container = document.getElementById('conjugationTableContainer');
  const titleElement = document.getElementById('currentVerbTitle');
  const translationElement = document.getElementById('currentVerbTranslation');
  
  titleElement.textContent = verb.infinitive;
  translationElement.textContent = verb.translation;
  
  container.innerHTML = `
    <div class="irregular-verb-section">
      <h3 class="irregular-verb-section__title">⚠️ Неправильный глагол</h3>
      <p class="irregular-verb-section__description">
        Этот глагол не следует стандартным правилам спряжения. Формы нужно запомнить.
      </p>
    </div>
    
    <div class="tense-section">
      <h3 class="tense-section__title">
        <span class="tense-section__badge">Presente</span>
        Настоящее время
      </h3>
      ${generateConjugationTable(verb.conjugations.presente, verb.infinitive, verb.translation)}
    </div>
    
    <div class="tense-section">
      <h3 class="tense-section__title">
        <span class="tense-section__badge">Pretérito</span>
        Прошедшее время
      </h3>
      ${generateConjugationTable(verb.conjugations.preterito, verb.infinitive, verb.translation)}
    </div>
    
    <div class="tense-section">
      <h3 class="tense-section__title">
        <span class="tense-section__badge">Futuro</span>
        Будущее время
      </h3>
      ${generateConjugationTable(verb.conjugations.futuro, verb.infinitive, verb.translation)}
    </div>
  `;
  
  attachConjugationEventListeners();
  attachExampleEventListeners();
}

function generateConjugationTable(conjugations, infinitive, translation) {
  const pronouns = {
    yo: 'я',
    tu: 'ты',
    el: 'он/она',
    nosotros: 'мы',
    vosotros: 'вы',
    ellos: 'они'
  };
  
  return `
    <table class="conjugation-table">
      <thead>
        <tr>
          <th>Местоимение</th>
          <th>Форма глагола</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(conjugations).map(([pronoun, form]) => `
          <tr>
            <td>${pronoun}</td>
            <td>${form}</td>
            <td>${pronouns[pronoun]} ${translation}</td>
            <td>
              <div class="conjugation-table__actions">
                <button class="conjugation-table__play-btn" data-text="${form}" data-lang="es">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
                <button class="conjugation-table__add-btn" data-text="${form}" data-translation="${pronouns[pronoun]} ${translation}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function attachExampleEventListeners() {
  document.querySelectorAll('.verb-example-item__play-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.text;
      const lang = button.dataset.lang;
      await playVerbAudio(text, lang, button);
    });
  });
  
  document.querySelectorAll('.verb-example-item__add-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.text;
      const translation = button.dataset.translation;
      await addVerbToHistory(text, translation, button);
    });
  });
}

function attachConjugationEventListeners() {
  document.querySelectorAll('.conjugation-table__play-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.text;
      const lang = button.dataset.lang;
      await playVerbAudio(text, lang, button);
    });
  });
  
  document.querySelectorAll('.conjugation-table__add-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.text;
      const translation = button.dataset.translation;
      await addVerbToHistory(text, translation, button);
    });
  });
}

async function playVerbAudio(text, lang, button) {
  if (!text || !lang) return;
  
  const originalHTML = button.innerHTML;
  
  button.disabled = true;
  button.innerHTML = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'getAudio',
      text: text,
      lang: lang
    });
    
    if (response.success && response.audioData) {
      const audio = new Audio(response.audioData);
      
      audio.addEventListener('ended', () => {
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      audio.addEventListener('error', () => {
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      await audio.play();
    } else {
      button.disabled = false;
      button.innerHTML = originalHTML;
    }
  } catch (error) {
    console.error('Audio playback error:', error);
    button.disabled = false;
    button.innerHTML = originalHTML;
  }
}

async function addVerbToHistory(text, translation, button) {
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: text,
      translation: translation,
      sourceLang: 'es',
      targetLang: 'ru',
      category: 'ES-RU-L',
      source: 'verb-conjugation'
    });
    
    if (response.success) {
      const originalHTML = button.innerHTML;
      button.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      button.style.background = '#10b981';
      
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = '';
      }, 1500);
      
      const verbItem = button.closest('.verb-item');
      if (verbItem) {
        verbItem.classList.add('verb-item--in-dictionary');
      }
    }
  } catch (error) {
    console.error('Error adding to history:', error);
  }
}

async function checkVerbsInDictionary() {
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'getHistory'
    });
    
    if (response && response.historyByLang) {
      const esRuHistory = response.historyByLang['es-ru-l'] || [];
      const wordsInDictionary = new Set(esRuHistory.map(item => item.original.toLowerCase()));
      
      document.querySelectorAll('.verb-item').forEach(item => {
        const spanish = item.querySelector('.verb-item__spanish');
        if (spanish && wordsInDictionary.has(spanish.textContent.toLowerCase())) {
          item.classList.add('verb-item--in-dictionary');
        }
      });
    }
  } catch (error) {
    console.error('Error checking dictionary:', error);
  }
}
