const englishWords = [
  {
    id: 1,
    word: "ser",
    translation: "быть",
    category: "verbs",
    type: "глагол",
    popularity: 1,
    examples: {
      present: {
        yo: { es: "Yo soy estudiante", ru: "Я студент" },
        tú: { es: "Tú eres estudiante", ru: "Ты студент" },
        él: { es: "Él es estudiante", ru: "Он студент" },
        nosotros: { es: "Nosotros somos estudiantes", ru: "Мы студенты" },
        vosotros: { es: "Vosotros sois estudiantes", ru: "Вы студенты" },
        ellos: { es: "Ellos son estudiantes", ru: "Они студенты" }
      },
      past: {
        yo: { es: "Yo fui estudiante", ru: "Я был студентом" },
        tú: { es: "Tú fuiste estudiante", ru: "Ты был студентом" },
        él: { es: "Él fue estudiante", ru: "Он был студентом" },
        nosotros: { es: "Nosotros fuimos estudiantes", ru: "Мы были студентами" },
        vosotros: { es: "Vosotros fuisteis estudiantes", ru: "Вы были студентами" },
        ellos: { es: "Ellos fueron estudiantes", ru: "Они были студентами" }
      },
      future: {
        yo: { es: "Yo seré estudiante", ru: "Я буду студентом" },
        tú: { es: "Tú serás estudiante", ru: "Ты будешь студентом" },
        él: { es: "Él será estudiante", ru: "Он будет студентом" },
        nosotros: { es: "Nosotros seremos estudiantes", ru: "Мы будем студентами" },
        vosotros: { es: "Vosotros seréis estudiantes", ru: "Вы будете студентами" },
        ellos: { es: "Ellos serán estudiantes", ru: "Они будут студентами" }
      }
    }
  },
  {
    id: 2,
    word: "estar",
    translation: "находиться, быть",
    category: "verbs",
    type: "глагол",
    popularity: 2,
    examples: {
      present: {
        yo: { es: "Yo estoy en casa", ru: "Я дома" },
        tú: { es: "Tú estás en casa", ru: "Ты дома" },
        él: { es: "Él está en casa", ru: "Он дома" },
        nosotros: { es: "Nosotros estamos en casa", ru: "Мы дома" },
        vosotros: { es: "Vosotros estáis en casa", ru: "Вы дома" },
        ellos: { es: "Ellos están en casa", ru: "Они дома" }
      },
      past: {
        yo: { es: "Yo estuve en casa", ru: "Я был дома" },
        tú: { es: "Tú estuviste en casa", ru: "Ты был дома" },
        él: { es: "Él estuvo en casa", ru: "Он был дома" },
        nosotros: { es: "Nosotros estuvimos en casa", ru: "Мы были дома" },
        vosotros: { es: "Vosotros estuvisteis en casa", ru: "Вы были дома" },
        ellos: { es: "Ellos estuvieron en casa", ru: "Они были дома" }
      },
      future: {
        yo: { es: "Yo estaré en casa", ru: "Я буду дома" },
        tú: { es: "Tú estarás en casa", ru: "Ты будешь дома" },
        él: { es: "Él estará en casa", ru: "Он будет дома" },
        nosotros: { es: "Nosotros estaremos en casa", ru: "Мы будем дома" },
        vosotros: { es: "Vosotros estaréis en casa", ru: "Вы будете дома" },
        ellos: { es: "Ellos estarán en casa", ru: "Они будут дома" }
      }
    }
  },
  {
    id: 3,
    word: "tener",
    translation: "иметь",
    category: "verbs",
    type: "глагол",
    popularity: 3,
    examples: {
      present: {
        yo: { es: "Yo tengo un libro", ru: "У меня есть книга" },
        tú: { es: "Tú tienes un libro", ru: "У тебя есть книга" },
        él: { es: "Él tiene un libro", ru: "У него есть книга" },
        nosotros: { es: "Nosotros tenemos libros", ru: "У нас есть книги" },
        vosotros: { es: "Vosotros tenéis libros", ru: "У вас есть книги" },
        ellos: { es: "Ellos tienen libros", ru: "У них есть книги" }
      },
      past: {
        yo: { es: "Yo tuve un libro", ru: "У меня была книга" },
        tú: { es: "Tú tuviste un libro", ru: "У тебя была книга" },
        él: { es: "Él tuvo un libro", ru: "У него была книга" },
        nosotros: { es: "Nosotros tuvimos libros", ru: "У нас были книги" },
        vosotros: { es: "Vosotros tuvisteis libros", ru: "У вас были книги" },
        ellos: { es: "Ellos tuvieron libros", ru: "У них были книги" }
      },
      future: {
        yo: { es: "Yo tendré un libro", ru: "У меня будет книга" },
        tú: { es: "Tú tendrás un libro", ru: "У тебя будет книга" },
        él: { es: "Él tendrá un libro", ru: "У него будет книга" },
        nosotros: { es: "Nosotros tendremos libros", ru: "У нас будут книги" },
        vosotros: { es: "Vosotros tendréis libros", ru: "У вас будут книги" },
        ellos: { es: "Ellos tendrán libros", ru: "У них будут книги" }
      }
    }
  },
  {
    id: 4,
    word: "hacer",
    translation: "делать",
    category: "verbs",
    type: "глагол",
    popularity: 4,
    examples: {
      present: {
        yo: { es: "Yo hago mi tarea", ru: "Я делаю домашнее задание" },
        tú: { es: "Tú haces tu tarea", ru: "Ты делаешь домашнее задание" },
        él: { es: "Él hace su tarea", ru: "Он делает домашнее задание" },
        nosotros: { es: "Nosotros hacemos nuestra tarea", ru: "Мы делаем домашнее задание" },
        vosotros: { es: "Vosotros hacéis vuestra tarea", ru: "Вы делаете домашнее задание" },
        ellos: { es: "Ellos hacen su tarea", ru: "Они делают домашнее задание" }
      },
      past: {
        yo: { es: "Yo hice mi tarea", ru: "Я сделал домашнее задание" },
        tú: { es: "Tú hiciste tu tarea", ru: "Ты сделал домашнее задание" },
        él: { es: "Él hizo su tarea", ru: "Он сделал домашнее задание" },
        nosotros: { es: "Nosotros hicimos nuestra tarea", ru: "Мы сделали домашнее задание" },
        vosotros: { es: "Vosotros hicisteis vuestra tarea", ru: "Вы сделали домашнее задание" },
        ellos: { es: "Ellos hicieron su tarea", ru: "Они сделали домашнее задание" }
      },
      future: {
        yo: { es: "Yo haré mi tarea", ru: "Я сделаю домашнее задание" },
        tú: { es: "Tú harás tu tarea", ru: "Ты сделаешь домашнее задание" },
        él: { es: "Él hará su tarea", ru: "Он сделает домашнее задание" },
        nosotros: { es: "Nosotros haremos nuestra tarea", ru: "Мы сделаем домашнее задание" },
        vosotros: { es: "Vosotros haréis vuestra tarea", ru: "Вы сделаете домашнее задание" },
        ellos: { es: "Ellos harán su tarea", ru: "Они сделают домашнее задание" }
      }
    }
  },
  {
    id: 5,
    word: "ir",
    translation: "идти, ехать",
    category: "verbs",
    type: "глагол",
    popularity: 5,
    examples: {
      present: {
        yo: { es: "Yo voy al trabajo", ru: "Я иду на работу" },
        tú: { es: "Tú vas al trabajo", ru: "Ты идёшь на работу" },
        él: { es: "Él va al trabajo", ru: "Он идёт на работу" },
        nosotros: { es: "Nosotros vamos al trabajo", ru: "Мы идём на работу" },
        vosotros: { es: "Vosotros vais al trabajo", ru: "Вы идёте на работу" },
        ellos: { es: "Ellos van al trabajo", ru: "Они идут на работу" }
      },
      past: {
        yo: { es: "Yo fui al trabajo", ru: "Я пошёл на работу" },
        tú: { es: "Tú fuiste al trabajo", ru: "Ты пошёл на работу" },
        él: { es: "Él fue al trabajo", ru: "Он пошёл на работу" },
        nosotros: { es: "Nosotros fuimos al trabajo", ru: "Мы пошли на работу" },
        vosotros: { es: "Vosotros fuisteis al trabajo", ru: "Вы пошли на работу" },
        ellos: { es: "Ellos fueron al trabajo", ru: "Они пошли на работу" }
      },
      future: {
        yo: { es: "Yo iré al trabajo", ru: "Я пойду на работу" },
        tú: { es: "Tú irás al trabajo", ru: "Ты пойдёшь на работу" },
        él: { es: "Él irá al trabajo", ru: "Он пойдёт на работу" },
        nosotros: { es: "Nosotros iremos al trabajo", ru: "Мы пойдём на работу" },
        vosotros: { es: "Vosotros iréis al trabajo", ru: "Вы пойдёте на работу" },
        ellos: { es: "Ellos irán al trabajo", ru: "Они пойдут на работу" }
      }
    }
  },
  {
    id: 6,
    word: "poder",
    translation: "мочь",
    category: "verbs",
    type: "глагол",
    popularity: 6,
    examples: {
      present: {
        yo: { es: "Yo puedo ayudarte", ru: "Я могу помочь тебе" },
        tú: { es: "Tú puedes ayudarme", ru: "Ты можешь помочь мне" },
        él: { es: "Él puede ayudar", ru: "Он может помочь" },
        nosotros: { es: "Nosotros podemos ayudar", ru: "Мы можем помочь" },
        vosotros: { es: "Vosotros podéis ayudar", ru: "Вы можете помочь" },
        ellos: { es: "Ellos pueden ayudar", ru: "Они могут помочь" }
      },
      past: {
        yo: { es: "Yo pude ayudarte", ru: "Я мог помочь тебе" },
        tú: { es: "Tú pudiste ayudarme", ru: "Ты мог помочь мне" },
        él: { es: "Él pudo ayudar", ru: "Он мог помочь" },
        nosotros: { es: "Nosotros pudimos ayudar", ru: "Мы могли помочь" },
        vosotros: { es: "Vosotros pudisteis ayudar", ru: "Вы могли помочь" },
        ellos: { es: "Ellos pudieron ayudar", ru: "Они могли помочь" }
      },
      future: {
        yo: { es: "Yo podré ayudarte", ru: "Я смогу помочь тебе" },
        tú: { es: "Tú podrás ayudarme", ru: "Ты сможешь помочь мне" },
        él: { es: "Él podrá ayudar", ru: "Он сможет помочь" },
        nosotros: { es: "Nosotros podremos ayudar", ru: "Мы сможем помочь" },
        vosotros: { es: "Vosotros podréis ayudar", ru: "Вы сможете помочь" },
        ellos: { es: "Ellos podrán ayudar", ru: "Они смогут помочь" }
      }
    }
  },
  {
    id: 7,
    word: "decir",
    translation: "говорить, сказать",
    category: "verbs",
    type: "глагол",
    popularity: 7,
    examples: {
      present: {
        yo: { es: "Yo digo la verdad", ru: "Я говорю правду" },
        tú: { es: "Tú dices la verdad", ru: "Ты говоришь правду" },
        él: { es: "Él dice la verdad", ru: "Он говорит правду" },
        nosotros: { es: "Nosotros decimos la verdad", ru: "Мы говорим правду" },
        vosotros: { es: "Vosotros decís la verdad", ru: "Вы говорите правду" },
        ellos: { es: "Ellos dicen la verdad", ru: "Они говорят правду" }
      },
      past: {
        yo: { es: "Yo dije la verdad", ru: "Я сказал правду" },
        tú: { es: "Tú dijiste la verdad", ru: "Ты сказал правду" },
        él: { es: "Él dijo la verdad", ru: "Он сказал правду" },
        nosotros: { es: "Nosotros dijimos la verdad", ru: "Мы сказали правду" },
        vosotros: { es: "Vosotros dijisteis la verdad", ru: "Вы сказали правду" },
        ellos: { es: "Ellos dijeron la verdad", ru: "Они сказали правду" }
      },
      future: {
        yo: { es: "Yo diré la verdad", ru: "Я скажу правду" },
        tú: { es: "Tú dirás la verdad", ru: "Ты скажешь правду" },
        él: { es: "Él dirá la verdad", ru: "Он скажет правду" },
        nosotros: { es: "Nosotros diremos la verdad", ru: "Мы скажем правду" },
        vosotros: { es: "Vosotros diréis la verdad", ru: "Вы скажете правду" },
        ellos: { es: "Ellos dirán la verdad", ru: "Они скажут правду" }
      }
    }
  },
  {
    id: 8,
    word: "ver",
    translation: "видеть",
    category: "verbs",
    type: "глагол",
    popularity: 8,
    examples: {
      present: {
        yo: { es: "Yo veo la televisión", ru: "Я смотрю телевизор" },
        tú: { es: "Tú ves la televisión", ru: "Ты смотришь телевизор" },
        él: { es: "Él ve la televisión", ru: "Он смотрит телевизор" },
        nosotros: { es: "Nosotros vemos la televisión", ru: "Мы смотрим телевизор" },
        vosotros: { es: "Vosotros veis la televisión", ru: "Вы смотрите телевизор" },
        ellos: { es: "Ellos ven la televisión", ru: "Они смотрят телевизор" }
      },
      past: {
        yo: { es: "Yo vi la televisión", ru: "Я смотрел телевизор" },
        tú: { es: "Tú viste la televisión", ru: "Ты смотрел телевизор" },
        él: { es: "Él vio la televisión", ru: "Он смотрел телевизор" },
        nosotros: { es: "Nosotros vimos la televisión", ru: "Мы смотрели телевизор" },
        vosotros: { es: "Vosotros visteis la televisión", ru: "Вы смотрели телевизор" },
        ellos: { es: "Ellos vieron la televisión", ru: "Они смотрели телевизор" }
      },
      future: {
        yo: { es: "Yo veré la televisión", ru: "Я буду смотреть телевизор" },
        tú: { es: "Tú verás la televisión", ru: "Ты будешь смотреть телевизор" },
        él: { es: "Él verá la televisión", ru: "Он будет смотреть телевизор" },
        nosotros: { es: "Nosotros veremos la televisión", ru: "Мы будем смотреть телевизор" },
        vosotros: { es: "Vosotros veréis la televisión", ru: "Вы будете смотреть телевизор" },
        ellos: { es: "Ellos verán la televisión", ru: "Они будут смотреть телевизор" }
      }
    }
  },
  {
    id: 9,
    word: "dar",
    translation: "давать",
    category: "verbs",
    type: "глагол",
    popularity: 9,
    examples: {
      present: {
        yo: { es: "Yo doy un regalo", ru: "Я даю подарок" },
        tú: { es: "Tú das un regalo", ru: "Ты даёшь подарок" },
        él: { es: "Él da un regalo", ru: "Он даёт подарок" },
        nosotros: { es: "Nosotros damos regalos", ru: "Мы даём подарки" },
        vosotros: { es: "Vosotros dais regalos", ru: "Вы даёте подарки" },
        ellos: { es: "Ellos dan regalos", ru: "Они дают подарки" }
      },
      past: {
        yo: { es: "Yo di un regalo", ru: "Я дал подарок" },
        tú: { es: "Tú diste un regalo", ru: "Ты дал подарок" },
        él: { es: "Él dio un regalo", ru: "Он дал подарок" },
        nosotros: { es: "Nosotros dimos regalos", ru: "Мы дали подарки" },
        vosotros: { es: "Vosotros disteis regalos", ru: "Вы дали подарки" },
        ellos: { es: "Ellos dieron regalos", ru: "Они дали подарки" }
      },
      future: {
        yo: { es: "Yo daré un regalo", ru: "Я дам подарок" },
        tú: { es: "Tú darás un regalo", ru: "Ты дашь подарок" },
        él: { es: "Él dará un regalo", ru: "Он даст подарок" },
        nosotros: { es: "Nosotros daremos regalos", ru: "Мы дадим подарки" },
        vosotros: { es: "Vosotros daréis regalos", ru: "Вы дадите подарки" },
        ellos: { es: "Ellos darán regalos", ru: "Они дадут подарки" }
      }
    }
  },
  {
    id: 10,
    word: "saber",
    translation: "знать",
    category: "verbs",
    type: "глагол",
    popularity: 10,
    examples: {
      present: {
        yo: { es: "Yo sé español", ru: "Я знаю испанский" },
        tú: { es: "Tú sabes español", ru: "Ты знаешь испанский" },
        él: { es: "Él sabe español", ru: "Он знает испанский" },
        nosotros: { es: "Nosotros sabemos español", ru: "Мы знаем испанский" },
        vosotros: { es: "Vosotros sabéis español", ru: "Вы знаете испанский" },
        ellos: { es: "Ellos saben español", ru: "Они знают испанский" }
      },
      past: {
        yo: { es: "Yo supe español", ru: "Я знал испанский" },
        tú: { es: "Tú supiste español", ru: "Ты знал испанский" },
        él: { es: "Él supo español", ru: "Он знал испанский" },
        nosotros: { es: "Nosotros supimos español", ru: "Мы знали испанский" },
        vosotros: { es: "Vosotros supisteis español", ru: "Вы знали испанский" },
        ellos: { es: "Ellos supieron español", ru: "Они знали испанский" }
      },
      future: {
        yo: { es: "Yo sabré español", ru: "Я буду знать испанский" },
        tú: { es: "Tú sabrás español", ru: "Ты будешь знать испанский" },
        él: { es: "Él sabrá español", ru: "Он будет знать испанский" },
        nosotros: { es: "Nosotros sabremos español", ru: "Мы будем знать испанский" },
        vosotros: { es: "Vosotros sabréis español", ru: "Вы будете знать испанский" },
        ellos: { es: "Ellos sabrán español", ru: "Они будут знать испанский" }
      }
    }
  },
  {
    id: 11,
    word: "querer",
    translation: "хотеть, любить",
    category: "verbs",
    type: "глагол",
    popularity: 11,
    examples: {
      present: {
        yo: { es: "Yo quiero café", ru: "Я хочу кофе" },
        tú: { es: "Tú quieres café", ru: "Ты хочешь кофе" },
        él: { es: "Él quiere café", ru: "Он хочет кофе" },
        nosotros: { es: "Nosotros queremos café", ru: "Мы хотим кофе" },
        vosotros: { es: "Vosotros queréis café", ru: "Вы хотите кофе" },
        ellos: { es: "Ellos quieren café", ru: "Они хотят кофе" }
      },
      past: {
        yo: { es: "Yo quise café", ru: "Я хотел кофе" },
        tú: { es: "Tú quisiste café", ru: "Ты хотел кофе" },
        él: { es: "Él quiso café", ru: "Он хотел кофе" },
        nosotros: { es: "Nosotros quisimos café", ru: "Мы хотели кофе" },
        vosotros: { es: "Vosotros quisisteis café", ru: "Вы хотели кофе" },
        ellos: { es: "Ellos quisieron café", ru: "Они хотели кофе" }
      },
      future: {
        yo: { es: "Yo querré café", ru: "Я захочу кофе" },
        tú: { es: "Tú querrás café", ru: "Ты захочешь кофе" },
        él: { es: "Él querrá café", ru: "Он захочет кофе" },
        nosotros: { es: "Nosotros querremos café", ru: "Мы захотим кофе" },
        vosotros: { es: "Vosotros querréis café", ru: "Вы захотите кофе" },
        ellos: { es: "Ellos querrán café", ru: "Они захотят кофе" }
      }
    }
  },
  {
    id: 12,
    word: "llegar",
    translation: "приходить, прибывать",
    category: "verbs",
    type: "глагол",
    popularity: 12,
    examples: {
      present: {
        yo: { es: "Yo llego a tiempo", ru: "Я прихожу вовремя" },
        tú: { es: "Tú llegas a tiempo", ru: "Ты приходишь вовремя" },
        él: { es: "Él llega a tiempo", ru: "Он приходит вовремя" },
        nosotros: { es: "Nosotros llegamos a tiempo", ru: "Мы приходим вовремя" },
        vosotros: { es: "Vosotros llegáis a tiempo", ru: "Вы приходите вовремя" },
        ellos: { es: "Ellos llegan a tiempo", ru: "Они приходят вовремя" }
      },
      past: {
        yo: { es: "Yo llegué a tiempo", ru: "Я пришёл вовремя" },
        tú: { es: "Tú llegaste a tiempo", ru: "Ты пришёл вовремя" },
        él: { es: "Él llegó a tiempo", ru: "Он пришёл вовремя" },
        nosotros: { es: "Nosotros llegamos a tiempo", ru: "Мы пришли вовремя" },
        vosotros: { es: "Vosotros llegasteis a tiempo", ru: "Вы пришли вовремя" },
        ellos: { es: "Ellos llegaron a tiempo", ru: "Они пришли вовремя" }
      },
      future: {
        yo: { es: "Yo llegaré a tiempo", ru: "Я приду вовремя" },
        tú: { es: "Tú llegarás a tiempo", ru: "Ты придёшь вовремя" },
        él: { es: "Él llegará a tiempo", ru: "Он придёт вовремя" },
        nosotros: { es: "Nosotros llegaremos a tiempo", ru: "Мы придём вовремя" },
        vosotros: { es: "Vosotros llegaréis a tiempo", ru: "Вы придёте вовремя" },
        ellos: { es: "Ellos llegarán a tiempo", ru: "Они придут вовремя" }
      }
    }
  },
  {
    id: 13,
    word: "pasar",
    translation: "проходить, случаться",
    category: "verbs",
    type: "глагол",
    popularity: 13,
    examples: {
      present: {
        yo: { es: "Yo paso por aquí", ru: "Я прохожу здесь" },
        tú: { es: "Tú pasas por aquí", ru: "Ты проходишь здесь" },
        él: { es: "Él pasa por aquí", ru: "Он проходит здесь" },
        nosotros: { es: "Nosotros pasamos por aquí", ru: "Мы проходим здесь" },
        vosotros: { es: "Vosotros pasáis por aquí", ru: "Вы проходите здесь" },
        ellos: { es: "Ellos pasan por aquí", ru: "Они проходят здесь" }
      },
      past: {
        yo: { es: "Yo pasé por aquí", ru: "Я прошёл здесь" },
        tú: { es: "Tú pasaste por aquí", ru: "Ты прошёл здесь" },
        él: { es: "Él pasó por aquí", ru: "Он прошёл здесь" },
        nosotros: { es: "Nosotros pasamos por aquí", ru: "Мы прошли здесь" },
        vosotros: { es: "Vosotros pasasteis por aquí", ru: "Вы прошли здесь" },
        ellos: { es: "Ellos pasaron por aquí", ru: "Они прошли здесь" }
      },
      future: {
        yo: { es: "Yo pasaré por aquí", ru: "Я пройду здесь" },
        tú: { es: "Tú pasarás por aquí", ru: "Ты пройдёшь здесь" },
        él: { es: "Él pasará por aquí", ru: "Он пройдёт здесь" },
        nosotros: { es: "Nosotros pasaremos por aquí", ru: "Мы пройдём здесь" },
        vosotros: { es: "Vosotros pasaréis por aquí", ru: "Вы пройдёте здесь" },
        ellos: { es: "Ellos pasarán por aquí", ru: "Они пройдут здесь" }
      }
    }
  },
  {
    id: 14,
    word: "deber",
    translation: "быть должным",
    category: "verbs",
    type: "глагол",
    popularity: 14,
    examples: {
      present: {
        yo: { es: "Yo debo estudiar", ru: "Я должен учиться" },
        tú: { es: "Tú debes estudiar", ru: "Ты должен учиться" },
        él: { es: "Él debe estudiar", ru: "Он должен учиться" },
        nosotros: { es: "Nosotros debemos estudiar", ru: "Мы должны учиться" },
        vosotros: { es: "Vosotros debéis estudiar", ru: "Вы должны учиться" },
        ellos: { es: "Ellos deben estudiar", ru: "Они должны учиться" }
      },
      past: {
        yo: { es: "Yo debí estudiar", ru: "Я должен был учиться" },
        tú: { es: "Tú debiste estudiar", ru: "Ты должен был учиться" },
        él: { es: "Él debió estudiar", ru: "Он должен был учиться" },
        nosotros: { es: "Nosotros debimos estudiar", ru: "Мы должны были учиться" },
        vosotros: { es: "Vosotros debisteis estudiar", ru: "Вы должны были учиться" },
        ellos: { es: "Ellos debieron estudiar", ru: "Они должны были учиться" }
      },
      future: {
        yo: { es: "Yo deberé estudiar", ru: "Я должен буду учиться" },
        tú: { es: "Tú deberás estudiar", ru: "Ты должен будешь учиться" },
        él: { es: "Él deberá estudiar", ru: "Он должен будет учиться" },
        nosotros: { es: "Nosotros deberemos estudiar", ru: "Мы должны будем учиться" },
        vosotros: { es: "Vosotros deberéis estudiar", ru: "Вы должны будете учиться" },
        ellos: { es: "Ellos deberán estudiar", ru: "Они должны будут учиться" }
      }
    }
  },
  {
    id: 15,
    word: "poner",
    translation: "класть, ставить",
    category: "verbs",
    type: "глагол",
    popularity: 15,
    examples: {
      present: {
        yo: { es: "Yo pongo el libro", ru: "Я кладу книгу" },
        tú: { es: "Tú pones el libro", ru: "Ты кладёшь книгу" },
        él: { es: "Él pone el libro", ru: "Он кладёт книгу" },
        nosotros: { es: "Nosotros ponemos el libro", ru: "Мы кладём книгу" },
        vosotros: { es: "Vosotros ponéis el libro", ru: "Вы кладёте книгу" },
        ellos: { es: "Ellos ponen el libro", ru: "Они кладут книгу" }
      },
      past: {
        yo: { es: "Yo puse el libro", ru: "Я положил книгу" },
        tú: { es: "Tú pusiste el libro", ru: "Ты положил книгу" },
        él: { es: "Él puso el libro", ru: "Он положил книгу" },
        nosotros: { es: "Nosotros pusimos el libro", ru: "Мы положили книгу" },
        vosotros: { es: "Vosotros pusisteis el libro", ru: "Вы положили книгу" },
        ellos: { es: "Ellos pusieron el libro", ru: "Они положили книгу" }
      },
      future: {
        yo: { es: "Yo pondré el libro", ru: "Я положу книгу" },
        tú: { es: "Tú pondrás el libro", ru: "Ты положишь книгу" },
        él: { es: "Él pondrá el libro", ru: "Он положит книгу" },
        nosotros: { es: "Nosotros pondremos el libro", ru: "Мы положим книгу" },
        vosotros: { es: "Vosotros pondréis el libro", ru: "Вы положите книгу" },
        ellos: { es: "Ellos pondrán el libro", ru: "Они положат книгу" }
      }
    }
  },
  {
    id: 16,
    word: "parecer",
    translation: "казаться",
    category: "verbs",
    type: "глагол",
    popularity: 16,
    examples: {
      present: {
        yo: { es: "Yo parezco feliz", ru: "Я кажусь счастливым" },
        tú: { es: "Tú pareces feliz", ru: "Ты кажешься счастливым" },
        él: { es: "Él parece feliz", ru: "Он кажется счастливым" },
        nosotros: { es: "Nosotros parecemos felices", ru: "Мы кажемся счастливыми" },
        vosotros: { es: "Vosotros parecéis felices", ru: "Вы кажетесь счастливыми" },
        ellos: { es: "Ellos parecen felices", ru: "Они кажутся счастливыми" }
      },
      past: {
        yo: { es: "Yo parecí feliz", ru: "Я казался счастливым" },
        tú: { es: "Tú pareciste feliz", ru: "Ты казался счастливым" },
        él: { es: "Él pareció feliz", ru: "Он казался счастливым" },
        nosotros: { es: "Nosotros parecimos felices", ru: "Мы казались счастливыми" },
        vosotros: { es: "Vosotros parecisteis felices", ru: "Вы казались счастливыми" },
        ellos: { es: "Ellos parecieron felices", ru: "Они казались счастливыми" }
      },
      future: {
        yo: { es: "Yo pareceré feliz", ru: "Я буду казаться счастливым" },
        tú: { es: "Tú parecerás feliz", ru: "Ты будешь казаться счастливым" },
        él: { es: "Él parecerá feliz", ru: "Он будет казаться счастливым" },
        nosotros: { es: "Nosotros pareceremos felices", ru: "Мы будем казаться счастливыми" },
        vosotros: { es: "Vosotros pareceréis felices", ru: "Вы будете казаться счастливыми" },
        ellos: { es: "Ellos parecerán felices", ru: "Они будут казаться счастливыми" }
      }
    }
  },
  {
    id: 17,
    word: "quedar",
    translation: "оставаться",
    category: "verbs",
    type: "глагол",
    popularity: 17,
    examples: {
      present: {
        yo: { es: "Yo quedo en casa", ru: "Я остаюсь дома" },
        tú: { es: "Tú quedas en casa", ru: "Ты остаёшься дома" },
        él: { es: "Él queda en casa", ru: "Он остаётся дома" },
        nosotros: { es: "Nosotros quedamos en casa", ru: "Мы остаёмся дома" },
        vosotros: { es: "Vosotros quedáis en casa", ru: "Вы остаётесь дома" },
        ellos: { es: "Ellos quedan en casa", ru: "Они остаются дома" }
      },
      past: {
        yo: { es: "Yo quedé en casa", ru: "Я остался дома" },
        tú: { es: "Tú quedaste en casa", ru: "Ты остался дома" },
        él: { es: "Él quedó en casa", ru: "Он остался дома" },
        nosotros: { es: "Nosotros quedamos en casa", ru: "Мы остались дома" },
        vosotros: { es: "Vosotros quedasteis en casa", ru: "Вы остались дома" },
        ellos: { es: "Ellos quedaron en casa", ru: "Они остались дома" }
      },
      future: {
        yo: { es: "Yo quedaré en casa", ru: "Я останусь дома" },
        tú: { es: "Tú quedarás en casa", ru: "Ты останешься дома" },
        él: { es: "Él quedará en casa", ru: "Он останется дома" },
        nosotros: { es: "Nosotros quedaremos en casa", ru: "Мы останемся дома" },
        vosotros: { es: "Vosotros quedaréis en casa", ru: "Вы останетесь дома" },
        ellos: { es: "Ellos quedarán en casa", ru: "Они останутся дома" }
      }
    }
  },
  {
    id: 18,
    word: "creer",
    translation: "верить, думать",
    category: "verbs",
    type: "глагол",
    popularity: 18,
    examples: {
      present: {
        yo: { es: "Yo creo en ti", ru: "Я верю в тебя" },
        tú: { es: "Tú crees en mí", ru: "Ты веришь в меня" },
        él: { es: "Él cree en Dios", ru: "Он верит в Бога" },
        nosotros: { es: "Nosotros creemos en ti", ru: "Мы верим в тебя" },
        vosotros: { es: "Vosotros creéis en mí", ru: "Вы верите в меня" },
        ellos: { es: "Ellos creen en Dios", ru: "Они верят в Бога" }
      },
      past: {
        yo: { es: "Yo creí en ti", ru: "Я верил в тебя" },
        tú: { es: "Tú creíste en mí", ru: "Ты верил в меня" },
        él: { es: "Él creyó en Dios", ru: "Он верил в Бога" },
        nosotros: { es: "Nosotros creímos en ti", ru: "Мы верили в тебя" },
        vosotros: { es: "Vosotros creísteis en mí", ru: "Вы верили в меня" },
        ellos: { es: "Ellos creyeron en Dios", ru: "Они верили в Бога" }
      },
      future: {
        yo: { es: "Yo creeré en ti", ru: "Я буду верить в тебя" },
        tú: { es: "Tú creerás en mí", ru: "Ты будешь верить в меня" },
        él: { es: "Él creerá en Dios", ru: "Он будет верить в Бога" },
        nosotros: { es: "Nosotros creeremos en ti", ru: "Мы будем верить в тебя" },
        vosotros: { es: "Vosotros creeréis en mí", ru: "Вы будете верить в меня" },
        ellos: { es: "Ellos creerán en Dios", ru: "Они будут верить в Бога" }
      }
    }
  },
  {
    id: 19,
    word: "hablar",
    translation: "говорить",
    category: "verbs",
    type: "глагол",
    popularity: 19,
    examples: {
      present: {
        yo: { es: "Yo hablo español", ru: "Я говорю по-испански" },
        tú: { es: "Tú hablas español", ru: "Ты говоришь по-испански" },
        él: { es: "Él habla español", ru: "Он говорит по-испански" },
        nosotros: { es: "Nosotros hablamos español", ru: "Мы говорим по-испански" },
        vosotros: { es: "Vosotros habláis español", ru: "Вы говорите по-испански" },
        ellos: { es: "Ellos hablan español", ru: "Они говорят по-испански" }
      },
      past: {
        yo: { es: "Yo hablé español", ru: "Я говорил по-испански" },
        tú: { es: "Tú hablaste español", ru: "Ты говорил по-испански" },
        él: { es: "Él habló español", ru: "Он говорил по-испански" },
        nosotros: { es: "Nosotros hablamos español", ru: "Мы говорили по-испански" },
        vosotros: { es: "Vosotros hablasteis español", ru: "Вы говорили по-испански" },
        ellos: { es: "Ellos hablaron español", ru: "Они говорили по-испански" }
      },
      future: {
        yo: { es: "Yo hablaré español", ru: "Я буду говорить по-испански" },
        tú: { es: "Tú hablarás español", ru: "Ты будешь говорить по-испански" },
        él: { es: "Él hablará español", ru: "Он будет говорить по-испански" },
        nosotros: { es: "Nosotros hablaremos español", ru: "Мы будем говорить по-испански" },
        vosotros: { es: "Vosotros hablaréis español", ru: "Вы будете говорить по-испански" },
        ellos: { es: "Ellos hablarán español", ru: "Они будут говорить по-испански" }
      }
    }
  },
  {
    id: 20,
    word: "llevar",
    translation: "нести, носить",
    category: "verbs",
    type: "глагол",
    popularity: 20,
    examples: {
      present: {
        yo: { es: "Yo llevo una bolsa", ru: "Я несу сумку" },
        tú: { es: "Tú llevas una bolsa", ru: "Ты несёшь сумку" },
        él: { es: "Él lleva una bolsa", ru: "Он несёт сумку" },
        nosotros: { es: "Nosotros llevamos bolsas", ru: "Мы несём сумки" },
        vosotros: { es: "Vosotros lleváis bolsas", ru: "Вы несёте сумки" },
        ellos: { es: "Ellos llevan bolsas", ru: "Они несут сумки" }
      },
      past: {
        yo: { es: "Yo llevé una bolsa", ru: "Я нёс сумку" },
        tú: { es: "Tú llevaste una bolsa", ru: "Ты нёс сумку" },
        él: { es: "Él llevó una bolsa", ru: "Он нёс сумку" },
        nosotros: { es: "Nosotros llevamos bolsas", ru: "Мы несли сумки" },
        vosotros: { es: "Vosotros llevasteis bolsas", ru: "Вы несли сумки" },
        ellos: { es: "Ellos llevaron bolsas", ru: "Они несли сумки" }
      },
      future: {
        yo: { es: "Yo llevaré una bolsa", ru: "Я понесу сумку" },
        tú: { es: "Tú llevarás una bolsa", ru: "Ты понесёшь сумку" },
        él: { es: "Él llevará una bolsa", ru: "Он понесёт сумку" },
        nosotros: { es: "Nosotros llevaremos bolsas", ru: "Мы понесём сумки" },
        vosotros: { es: "Vosotros llevaréis bolsas", ru: "Вы понесёте сумки" },
        ellos: { es: "Ellos llevarán bolsas", ru: "Они понесут сумки" }
      }
    }
  },
  {
    id: 21,
    word: "dejar",
    translation: "оставлять, позволять",
    category: "verbs",
    type: "глагол",
    popularity: 21,
    examples: {
      present: {
        yo: { es: "Yo dejo las llaves", ru: "Я оставляю ключи" },
        tú: { es: "Tú dejas las llaves", ru: "Ты оставляешь ключи" },
        él: { es: "Él deja las llaves", ru: "Он оставляет ключи" },
        nosotros: { es: "Nosotros dejamos las llaves", ru: "Мы оставляем ключи" },
        vosotros: { es: "Vosotros dejáis las llaves", ru: "Вы оставляете ключи" },
        ellos: { es: "Ellos dejan las llaves", ru: "Они оставляют ключи" }
      },
      past: {
        yo: { es: "Yo dejé las llaves", ru: "Я оставил ключи" },
        tú: { es: "Tú dejaste las llaves", ru: "Ты оставил ключи" },
        él: { es: "Él dejó las llaves", ru: "Он оставил ключи" },
        nosotros: { es: "Nosotros dejamos las llaves", ru: "Мы оставили ключи" },
        vosotros: { es: "Vosotros dejasteis las llaves", ru: "Вы оставили ключи" },
        ellos: { es: "Ellos dejaron las llaves", ru: "Они оставили ключи" }
      },
      future: {
        yo: { es: "Yo dejaré las llaves", ru: "Я оставлю ключи" },
        tú: { es: "Tú dejarás las llaves", ru: "Ты оставишь ключи" },
        él: { es: "Él dejará las llaves", ru: "Он оставит ключи" },
        nosotros: { es: "Nosotros dejaremos las llaves", ru: "Мы оставим ключи" },
        vosotros: { es: "Vosotros dejaréis las llaves", ru: "Вы оставите ключи" },
        ellos: { es: "Ellos dejarán las llaves", ru: "Они оставят ключи" }
      }
    }
  },
  {
    id: 22,
    word: "seguir",
    translation: "следовать, продолжать",
    category: "verbs",
    type: "глагол",
    popularity: 22,
    examples: {
      present: {
        yo: { es: "Yo sigo adelante", ru: "Я продолжаю вперёд" },
        tú: { es: "Tú sigues adelante", ru: "Ты продолжаешь вперёд" },
        él: { es: "Él sigue adelante", ru: "Он продолжает вперёд" },
        nosotros: { es: "Nosotros seguimos adelante", ru: "Мы продолжаем вперёд" },
        vosotros: { es: "Vosotros seguís adelante", ru: "Вы продолжаете вперёд" },
        ellos: { es: "Ellos siguen adelante", ru: "Они продолжают вперёд" }
      },
      past: {
        yo: { es: "Yo seguí adelante", ru: "Я продолжил вперёд" },
        tú: { es: "Tú seguiste adelante", ru: "Ты продолжил вперёд" },
        él: { es: "Él siguió adelante", ru: "Он продолжил вперёд" },
        nosotros: { es: "Nosotros seguimos adelante", ru: "Мы продолжили вперёд" },
        vosotros: { es: "Vosotros seguisteis adelante", ru: "Вы продолжили вперёд" },
        ellos: { es: "Ellos siguieron adelante", ru: "Они продолжили вперёд" }
      },
      future: {
        yo: { es: "Yo seguiré adelante", ru: "Я продолжу вперёд" },
        tú: { es: "Tú seguirás adelante", ru: "Ты продолжишь вперёд" },
        él: { es: "Él seguirá adelante", ru: "Он продолжит вперёд" },
        nosotros: { es: "Nosotros seguiremos adelante", ru: "Мы продолжим вперёд" },
        vosotros: { es: "Vosotros seguiréis adelante", ru: "Вы продолжите вперёд" },
        ellos: { es: "Ellos seguirán adelante", ru: "Они продолжат вперёд" }
      }
    }
  },
  {
    id: 23,
    word: "encontrar",
    translation: "находить",
    category: "verbs",
    type: "глагол",
    popularity: 23,
    examples: {
      present: {
        yo: { es: "Yo encuentro la solución", ru: "Я нахожу решение" },
        tú: { es: "Tú encuentras la solución", ru: "Ты находишь решение" },
        él: { es: "Él encuentra la solución", ru: "Он находит решение" },
        nosotros: { es: "Nosotros encontramos la solución", ru: "Мы находим решение" },
        vosotros: { es: "Vosotros encontráis la solución", ru: "Вы находите решение" },
        ellos: { es: "Ellos encuentran la solución", ru: "Они находят решение" }
      },
      past: {
        yo: { es: "Yo encontré la solución", ru: "Я нашёл решение" },
        tú: { es: "Tú encontraste la solución", ru: "Ты нашёл решение" },
        él: { es: "Él encontró la solución", ru: "Он нашёл решение" },
        nosotros: { es: "Nosotros encontramos la solución", ru: "Мы нашли решение" },
        vosotros: { es: "Vosotros encontrasteis la solución", ru: "Вы нашли решение" },
        ellos: { es: "Ellos encontraron la solución", ru: "Они нашли решение" }
      },
      future: {
        yo: { es: "Yo encontraré la solución", ru: "Я найду решение" },
        tú: { es: "Tú encontrarás la solución", ru: "Ты найдёшь решение" },
        él: { es: "Él encontrará la solución", ru: "Он найдёт решение" },
        nosotros: { es: "Nosotros encontraremos la solución", ru: "Мы найдём решение" },
        vosotros: { es: "Vosotros encontraréis la solución", ru: "Вы найдёте решение" },
        ellos: { es: "Ellos encontrarán la solución", ru: "Они найдут решение" }
      }
    }
  },
  {
    id: 24,
    word: "llamar",
    translation: "звать, звонить",
    category: "verbs",
    type: "глагол",
    popularity: 24,
    examples: {
      present: {
        yo: { es: "Yo llamo a mi madre", ru: "Я звоню маме" },
        tú: { es: "Tú llamas a tu madre", ru: "Ты звонишь маме" },
        él: { es: "Él llama a su madre", ru: "Он звонит маме" },
        nosotros: { es: "Nosotros llamamos a nuestras madres", ru: "Мы звоним мамам" },
        vosotros: { es: "Vosotros llamáis a vuestras madres", ru: "Вы звоните мамам" },
        ellos: { es: "Ellos llaman a sus madres", ru: "Они звонят мамам" }
      },
      past: {
        yo: { es: "Yo llamé a mi madre", ru: "Я позвонил маме" },
        tú: { es: "Tú llamaste a tu madre", ru: "Ты позвонил маме" },
        él: { es: "Él llamó a su madre", ru: "Он позвонил маме" },
        nosotros: { es: "Nosotros llamamos a nuestras madres", ru: "Мы позвонили мамам" },
        vosotros: { es: "Vosotros llamasteis a vuestras madres", ru: "Вы позвонили мамам" },
        ellos: { es: "Ellos llamaron a sus madres", ru: "Они позвонили мамам" }
      },
      future: {
        yo: { es: "Yo llamaré a mi madre", ru: "Я позвоню маме" },
        tú: { es: "Tú llamarás a tu madre", ru: "Ты позвонишь маме" },
        él: { es: "Él llamará a su madre", ru: "Он позвонит маме" },
        nosotros: { es: "Nosotros llamaremos a nuestras madres", ru: "Мы позвоним мамам" },
        vosotros: { es: "Vosotros llamaréis a vuestras madres", ru: "Вы позвоните мамам" },
        ellos: { es: "Ellos llamarán a sus madres", ru: "Они позвонят мамам" }
      }
    }
  },
  {
    id: 25,
    word: "venir",
    translation: "приходить",
    category: "verbs",
    type: "глагол",
    popularity: 25,
    examples: {
      present: {
        yo: { es: "Yo vengo mañana", ru: "Я приду завтра" },
        tú: { es: "Tú vienes mañana", ru: "Ты придёшь завтра" },
        él: { es: "Él viene mañana", ru: "Он придёт завтра" },
        nosotros: { es: "Nosotros venimos mañana", ru: "Мы придём завтра" },
        vosotros: { es: "Vosotros venís mañana", ru: "Вы придёте завтра" },
        ellos: { es: "Ellos vienen mañana", ru: "Они придут завтра" }
      },
      past: {
        yo: { es: "Yo vine ayer", ru: "Я пришёл вчера" },
        tú: { es: "Tú viniste ayer", ru: "Ты пришёл вчера" },
        él: { es: "Él vino ayer", ru: "Он пришёл вчера" },
        nosotros: { es: "Nosotros vinimos ayer", ru: "Мы пришли вчера" },
        vosotros: { es: "Vosotros vinisteis ayer", ru: "Вы пришли вчера" },
        ellos: { es: "Ellos vinieron ayer", ru: "Они пришли вчера" }
      },
      future: {
        yo: { es: "Yo vendré mañana", ru: "Я приду завтра" },
        tú: { es: "Tú vendrás mañana", ru: "Ты придёшь завтра" },
        él: { es: "Él vendrá mañana", ru: "Он придёт завтра" },
        nosotros: { es: "Nosotros vendremos mañana", ru: "Мы придём завтра" },
        vosotros: { es: "Vosotros vendréis mañana", ru: "Вы придёте завтра" },
        ellos: { es: "Ellos vendrán mañana", ru: "Они придут завтра" }
      }
    }
  },
  {
    id: 26,
    word: "pensar",
    translation: "думать",
    category: "verbs",
    type: "глагол",
    popularity: 26,
    examples: {
      present: {
        yo: { es: "Yo pienso en ti", ru: "Я думаю о тебе" },
        tú: { es: "Tú piensas en mí", ru: "Ты думаешь обо мне" },
        él: { es: "Él piensa en ella", ru: "Он думает о ней" },
        nosotros: { es: "Nosotros pensamos en ti", ru: "Мы думаем о тебе" },
        vosotros: { es: "Vosotros pensáis en mí", ru: "Вы думаете обо мне" },
        ellos: { es: "Ellos piensan en nosotros", ru: "Они думают о нас" }
      },
      past: {
        yo: { es: "Yo pensé en ti", ru: "Я думал о тебе" },
        tú: { es: "Tú pensaste en mí", ru: "Ты думал обо мне" },
        él: { es: "Él pensó en ella", ru: "Он думал о ней" },
        nosotros: { es: "Nosotros pensamos en ti", ru: "Мы думали о тебе" },
        vosotros: { es: "Vosotros pensasteis en mí", ru: "Вы думали обо мне" },
        ellos: { es: "Ellos pensaron en nosotros", ru: "Они думали о нас" }
      },
      future: {
        yo: { es: "Yo pensaré en ti", ru: "Я буду думать о тебе" },
        tú: { es: "Tú pensarás en mí", ru: "Ты будешь думать обо мне" },
        él: { es: "Él pensará en ella", ru: "Он будет думать о ней" },
        nosotros: { es: "Nosotros pensaremos en ti", ru: "Мы будем думать о тебе" },
        vosotros: { es: "Vosotros pensaréis en mí", ru: "Вы будете думать обо мне" },
        ellos: { es: "Ellos pensarán en nosotros", ru: "Они будут думать о нас" }
      }
    }
  },
  {
    id: 27,
    word: "salir",
    translation: "выходить",
    category: "verbs",
    type: "глагол",
    popularity: 27,
    examples: {
      present: {
        yo: { es: "Yo salgo de casa", ru: "Я выхожу из дома" },
        tú: { es: "Tú sales de casa", ru: "Ты выходишь из дома" },
        él: { es: "Él sale de casa", ru: "Он выходит из дома" },
        nosotros: { es: "Nosotros salimos de casa", ru: "Мы выходим из дома" },
        vosotros: { es: "Vosotros salís de casa", ru: "Вы выходите из дома" },
        ellos: { es: "Ellos salen de casa", ru: "Они выходят из дома" }
      },
      past: {
        yo: { es: "Yo salí de casa", ru: "Я вышел из дома" },
        tú: { es: "Tú saliste de casa", ru: "Ты вышел из дома" },
        él: { es: "Él salió de casa", ru: "Он вышел из дома" },
        nosotros: { es: "Nosotros salimos de casa", ru: "Мы вышли из дома" },
        vosotros: { es: "Vosotros salisteis de casa", ru: "Вы вышли из дома" },
        ellos: { es: "Ellos salieron de casa", ru: "Они вышли из дома" }
      },
      future: {
        yo: { es: "Yo saldré de casa", ru: "Я выйду из дома" },
        tú: { es: "Tú saldrás de casa", ru: "Ты выйдешь из дома" },
        él: { es: "Él saldrá de casa", ru: "Он выйдет из дома" },
        nosotros: { es: "Nosotros saldremos de casa", ru: "Мы выйдем из дома" },
        vosotros: { es: "Vosotros saldréis de casa", ru: "Вы выйдете из дома" },
        ellos: { es: "Ellos saldrán de casa", ru: "Они выйдут из дома" }
      }
    }
  },
  {
    id: 28,
    word: "volver",
    translation: "возвращаться",
    category: "verbs",
    type: "глагол",
    popularity: 28,
    examples: {
      present: {
        yo: { es: "Yo vuelvo a casa", ru: "Я возвращаюсь домой" },
        tú: { es: "Tú vuelves a casa", ru: "Ты возвращаешься домой" },
        él: { es: "Él vuelve a casa", ru: "Он возвращается домой" },
        nosotros: { es: "Nosotros volvemos a casa", ru: "Мы возвращаемся домой" },
        vosotros: { es: "Vosotros volvéis a casa", ru: "Вы возвращаетесь домой" },
        ellos: { es: "Ellos vuelven a casa", ru: "Они возвращаются домой" }
      },
      past: {
        yo: { es: "Yo volví a casa", ru: "Я вернулся домой" },
        tú: { es: "Tú volviste a casa", ru: "Ты вернулся домой" },
        él: { es: "Él volvió a casa", ru: "Он вернулся домой" },
        nosotros: { es: "Nosotros volvimos a casa", ru: "Мы вернулись домой" },
        vosotros: { es: "Vosotros volvisteis a casa", ru: "Вы вернулись домой" },
        ellos: { es: "Ellos volvieron a casa", ru: "Они вернулись домой" }
      },
      future: {
        yo: { es: "Yo volveré a casa", ru: "Я вернусь домой" },
        tú: { es: "Tú volverás a casa", ru: "Ты вернёшься домой" },
        él: { es: "Él volverá a casa", ru: "Он вернётся домой" },
        nosotros: { es: "Nosotros volveremos a casa", ru: "Мы вернёмся домой" },
        vosotros: { es: "Vosotros volveréis a casa", ru: "Вы вернётесь домой" },
        ellos: { es: "Ellos volverán a casa", ru: "Они вернутся домой" }
      }
    }
  },
  {
    id: 29,
    word: "tomar",
    translation: "брать, принимать",
    category: "verbs",
    type: "глагол",
    popularity: 29,
    examples: {
      present: {
        yo: { es: "Yo tomo café", ru: "Я пью кофе" },
        tú: { es: "Tú tomas café", ru: "Ты пьёшь кофе" },
        él: { es: "Él toma café", ru: "Он пьёт кофе" },
        nosotros: { es: "Nosotros tomamos café", ru: "Мы пьём кофе" },
        vosotros: { es: "Vosotros tomáis café", ru: "Вы пьёте кофе" },
        ellos: { es: "Ellos toman café", ru: "Они пьют кофе" }
      },
      past: {
        yo: { es: "Yo tomé café", ru: "Я выпил кофе" },
        tú: { es: "Tú tomaste café", ru: "Ты выпил кофе" },
        él: { es: "Él tomó café", ru: "Он выпил кофе" },
        nosotros: { es: "Nosotros tomamos café", ru: "Мы выпили кофе" },
        vosotros: { es: "Vosotros tomasteis café", ru: "Вы выпили кофе" },
        ellos: { es: "Ellos tomaron café", ru: "Они выпили кофе" }
      },
      future: {
        yo: { es: "Yo tomaré café", ru: "Я выпью кофе" },
        tú: { es: "Tú tomarás café", ru: "Ты выпьешь кофе" },
        él: { es: "Él tomará café", ru: "Он выпьет кофе" },
        nosotros: { es: "Nosotros tomaremos café", ru: "Мы выпьем кофе" },
        vosotros: { es: "Vosotros tomaréis café", ru: "Вы выпьете кофе" },
        ellos: { es: "Ellos tomarán café", ru: "Они выпьют кофе" }
      }
    }
  },
  {
    id: 30,
    word: "conocer",
    translation: "знать, знакомиться",
    category: "verbs",
    type: "глагол",
    popularity: 30,
    examples: {
      present: {
        yo: { es: "Yo conozco Madrid", ru: "Я знаю Мадрид" },
        tú: { es: "Tú conoces Madrid", ru: "Ты знаешь Мадрид" },
        él: { es: "Él conoce Madrid", ru: "Он знает Мадрид" },
        nosotros: { es: "Nosotros conocemos Madrid", ru: "Мы знаем Мадрид" },
        vosotros: { es: "Vosotros conocéis Madrid", ru: "Вы знаете Мадрид" },
        ellos: { es: "Ellos conocen Madrid", ru: "Они знают Мадрид" }
      },
      past: {
        yo: { es: "Yo conocí Madrid", ru: "Я познакомился с Мадридом" },
        tú: { es: "Tú conociste Madrid", ru: "Ты познакомился с Мадридом" },
        él: { es: "Él conoció Madrid", ru: "Он познакомился с Мадридом" },
        nosotros: { es: "Nosotros conocimos Madrid", ru: "Мы познакомились с Мадридом" },
        vosotros: { es: "Vosotros conocisteis Madrid", ru: "Вы познакомились с Мадридом" },
        ellos: { es: "Ellos conocieron Madrid", ru: "Они познакомились с Мадридом" }
      },
      future: {
        yo: { es: "Yo conoceré Madrid", ru: "Я узнаю Мадрид" },
        tú: { es: "Tú conocerás Madrid", ru: "Ты узнаешь Мадрид" },
        él: { es: "Él conocerá Madrid", ru: "Он узнает Мадрид" },
        nosotros: { es: "Nosotros conoceremos Madrid", ru: "Мы узнаем Мадрид" },
        vosotros: { es: "Vosotros conoceréis Madrid", ru: "Вы узнаете Мадрид" },
        ellos: { es: "Ellos conocerán Madrid", ru: "Они узнают Мадрид" }
      }
    }
  },
  {
    id: 31,
    word: "yo",
    translation: "я",
    category: "pronouns",
    type: "местоимение",
    popularity: 31,
    examples: {
      present: { es: "Yo soy feliz", ru: "Я счастлив" },
      past: { es: "Yo era feliz", ru: "Я был счастлив" },
      future: { es: "Yo seré feliz", ru: "Я буду счастлив" }
    }
  },
  {
    id: 32,
    word: "tú",
    translation: "ты",
    category: "pronouns",
    type: "местоимение",
    popularity: 32,
    examples: {
      present: { es: "Tú eres amable", ru: "Ты добрый" },
      past: { es: "Tú eras amable", ru: "Ты был добрым" },
      future: { es: "Tú serás amable", ru: "Ты будешь добрым" }
    }
  },
  {
    id: 33,
    word: "él",
    translation: "он",
    category: "pronouns",
    type: "местоимение",
    popularity: 33,
    examples: {
      present: { es: "Él es mi amigo", ru: "Он мой друг" },
      past: { es: "Él era mi amigo", ru: "Он был моим другом" },
      future: { es: "Él será mi amigo", ru: "Он будет моим другом" }
    }
  },
  {
    id: 34,
    word: "ella",
    translation: "она",
    category: "pronouns",
    type: "местоимение",
    popularity: 34,
    examples: {
      present: { es: "Ella es profesora", ru: "Она учительница" },
      past: { es: "Ella era profesora", ru: "Она была учительницей" },
      future: { es: "Ella será profesora", ru: "Она будет учительницей" }
    }
  },
  {
    id: 35,
    word: "nosotros",
    translation: "мы",
    category: "pronouns",
    type: "местоимение",
    popularity: 35,
    examples: {
      present: { es: "Nosotros somos estudiantes", ru: "Мы студенты" },
      past: { es: "Nosotros éramos estudiantes", ru: "Мы были студентами" },
      future: { es: "Nosotros seremos estudiantes", ru: "Мы будем студентами" }
    }
  },
  {
    id: 36,
    word: "vosotros",
    translation: "вы (мн.ч.)",
    category: "pronouns",
    type: "местоимение",
    popularity: 36,
    examples: {
      present: { es: "Vosotros sois amigos", ru: "Вы друзья" },
      past: { es: "Vosotros erais amigos", ru: "Вы были друзьями" },
      future: { es: "Vosotros seréis amigos", ru: "Вы будете друзьями" }
    }
  },
  {
    id: 37,
    word: "ellos",
    translation: "они (м.р.)",
    category: "pronouns",
    type: "местоимение",
    popularity: 37,
    examples: {
      present: { es: "Ellos son hermanos", ru: "Они братья" },
      past: { es: "Ellos eran hermanos", ru: "Они были братьями" },
      future: { es: "Ellos serán hermanos", ru: "Они будут братьями" }
    }
  },
  {
    id: 38,
    word: "ellas",
    translation: "они (ж.р.)",
    category: "pronouns",
    type: "местоимение",
    popularity: 38,
    examples: {
      present: { es: "Ellas son hermanas", ru: "Они сёстры" },
      past: { es: "Ellas eran hermanas", ru: "Они были сёстрами" },
      future: { es: "Ellas serán hermanas", ru: "Они будут сёстрами" }
    }
  },
  {
    id: 39,
    word: "uno",
    translation: "один",
    category: "numbers",
    type: "числительное",
    popularity: 39,
    examples: {
      present: { es: "Tengo un libro", ru: "У меня одна книга" },
      past: { es: "Tuve un libro", ru: "У меня была одна книга" },
      future: { es: "Tendré un libro", ru: "У меня будет одна книга" }
    }
  },
  {
    id: 40,
    word: "dos",
    translation: "два",
    category: "numbers",
    type: "числительное",
    popularity: 40,
    examples: {
      present: { es: "Tengo dos hermanos", ru: "У меня два брата" },
      past: { es: "Tuve dos hermanos", ru: "У меня было два брата" },
      future: { es: "Tendré dos hermanos", ru: "У меня будет два брата" }
    }
  },
  {
    id: 41,
    word: "tres",
    translation: "три",
    category: "numbers",
    type: "числительное",
    popularity: 41,
    examples: {
      present: { es: "Hay tres manzanas", ru: "Есть три яблока" },
      past: { es: "Había tres manzanas", ru: "Было три яблока" },
      future: { es: "Habrá tres manzanas", ru: "Будет три яблока" }
    }
  },
  {
    id: 42,
    word: "cuatro",
    translation: "четыре",
    category: "numbers",
    type: "числительное",
    popularity: 42,
    examples: {
      present: { es: "Son las cuatro", ru: "Четыре часа" },
      past: { es: "Eran las cuatro", ru: "Было четыре часа" },
      future: { es: "Serán las cuatro", ru: "Будет четыре часа" }
    }
  },
  {
    id: 43,
    word: "cinco",
    translation: "пять",
    category: "numbers",
    type: "числительное",
    popularity: 43,
    examples: {
      present: { es: "Tengo cinco euros", ru: "У меня пять евро" },
      past: { es: "Tuve cinco euros", ru: "У меня было пять евро" },
      future: { es: "Tendré cinco euros", ru: "У меня будет пять евро" }
    }
  },
  {
    id: 44,
    word: "seis",
    translation: "шесть",
    category: "numbers",
    type: "числительное",
    popularity: 44,
    examples: {
      present: { es: "Trabajo seis días", ru: "Я работаю шесть дней" },
      past: { es: "Trabajé seis días", ru: "Я работал шесть дней" },
      future: { es: "Trabajaré seis días", ru: "Я буду работать шесть дней" }
    }
  },
  {
    id: 45,
    word: "siete",
    translation: "семь",
    category: "numbers",
    type: "числительное",
    popularity: 45,
    examples: {
      present: { es: "Son las siete", ru: "Семь часов" },
      past: { es: "Eran las siete", ru: "Было семь часов" },
      future: { es: "Serán las siete", ru: "Будет семь часов" }
    }
  },
  {
    id: 46,
    word: "ocho",
    translation: "восемь",
    category: "numbers",
    type: "числительное",
    popularity: 46,
    examples: {
      present: { es: "Tengo ocho años", ru: "Мне восемь лет" },
      past: { es: "Tenía ocho años", ru: "Мне было восемь лет" },
      future: { es: "Tendré ocho años", ru: "Мне будет восемь лет" }
    }
  },
  {
    id: 47,
    word: "nueve",
    translation: "девять",
    category: "numbers",
    type: "числительное",
    popularity: 47,
    examples: {
      present: { es: "Hay nueve personas", ru: "Есть девять человек" },
      past: { es: "Había nueve personas", ru: "Было девять человек" },
      future: { es: "Habrá nueve personas", ru: "Будет девять человек" }
    }
  },
  {
    id: 48,
    word: "diez",
    translation: "десять",
    category: "numbers",
    type: "числительное",
    popularity: 48,
    examples: {
      present: { es: "Cuesta diez euros", ru: "Стоит десять евро" },
      past: { es: "Costó diez euros", ru: "Стоило десять евро" },
      future: { es: "Costará diez euros", ru: "Будет стоить десять евро" }
    }
  },
  {
    id: 49,
    word: "día",
    translation: "день",
    category: "time",
    type: "существительное",
    popularity: 49,
    examples: {
      present: { es: "Hoy es un buen día", ru: "Сегодня хороший день" },
      past: { es: "Ayer fue un buen día", ru: "Вчера был хороший день" },
      future: { es: "Mañana será un buen día", ru: "Завтра будет хороший день" }
    }
  },
  {
    id: 50,
    word: "tiempo",
    translation: "время",
    category: "time",
    type: "существительное",
    popularity: 50,
    examples: {
      present: { es: "No tengo tiempo", ru: "У меня нет времени" },
      past: { es: "No tuve tiempo", ru: "У меня не было времени" },
      future: { es: "No tendré tiempo", ru: "У меня не будет времени" }
    }
  },
  {
    id: 51,
    word: "año",
    translation: "год",
    category: "time",
    type: "существительное",
    popularity: 51,
    examples: {
      present: { es: "Este año es especial", ru: "Этот год особенный" },
      past: { es: "El año pasado fue difícil", ru: "Прошлый год был трудным" },
      future: { es: "El próximo año será mejor", ru: "Следующий год будет лучше" }
    }
  },
  {
    id: 52,
    word: "hora",
    translation: "час",
    category: "time",
    type: "существительное",
    popularity: 52,
    examples: {
      present: { es: "Es la hora de comer", ru: "Время обедать" },
      past: { es: "Era la hora de dormir", ru: "Было время спать" },
      future: { es: "Será la hora de trabajar", ru: "Будет время работать" }
    }
  },
  {
    id: 53,
    word: "semana",
    translation: "неделя",
    category: "time",
    type: "существительное",
    popularity: 53,
    examples: {
      present: { es: "Esta semana trabajo mucho", ru: "На этой неделе я много работаю" },
      past: { es: "La semana pasada descansé", ru: "На прошлой неделе я отдыхал" },
      future: { es: "La próxima semana viajaré", ru: "На следующей неделе я поеду в путешествие" }
    }
  },
  {
    id: 54,
    word: "mes",
    translation: "месяц",
    category: "time",
    type: "существительное",
    popularity: 54,
    examples: {
      present: { es: "Este mes hace calor", ru: "В этом месяце жарко" },
      past: { es: "El mes pasado llovió", ru: "В прошлом месяце шёл дождь" },
      future: { es: "El próximo mes nevará", ru: "В следующем месяце будет снег" }
    }
  },
  {
    id: 55,
    word: "madre",
    translation: "мать",
    category: "family",
    type: "существительное",
    popularity: 55,
    examples: {
      present: { es: "Mi madre cocina bien", ru: "Моя мама хорошо готовит" },
      past: { es: "Mi madre trabajaba aquí", ru: "Моя мама работала здесь" },
      future: { es: "Mi madre vendrá mañana", ru: "Моя мама придёт завтра" }
    }
  },
  {
    id: 56,
    word: "padre",
    translation: "отец",
    category: "family",
    type: "существительное",
    popularity: 56,
    examples: {
      present: { es: "Mi padre es médico", ru: "Мой отец врач" },
      past: { es: "Mi padre era profesor", ru: "Мой отец был учителем" },
      future: { es: "Mi padre será feliz", ru: "Мой отец будет счастлив" }
    }
  },
  {
    id: 57,
    word: "hijo",
    translation: "сын",
    category: "family",
    type: "существительное",
    popularity: 57,
    examples: {
      present: { es: "Mi hijo estudia mucho", ru: "Мой сын много учится" },
      past: { es: "Mi hijo jugaba fútbol", ru: "Мой сын играл в футбол" },
      future: { es: "Mi hijo será ingeniero", ru: "Мой сын будет инженером" }
    }
  },
  {
    id: 58,
    word: "hija",
    translation: "дочь",
    category: "family",
    type: "существительное",
    popularity: 58,
    examples: {
      present: { es: "Mi hija es inteligente", ru: "Моя дочь умная" },
      past: { es: "Mi hija cantaba bien", ru: "Моя дочь хорошо пела" },
      future: { es: "Mi hija será doctora", ru: "Моя дочь будет доктором" }
    }
  },
  {
    id: 59,
    word: "hermano",
    translation: "брат",
    category: "family",
    type: "существительное",
    popularity: 59,
    examples: {
      present: { es: "Mi hermano vive en Madrid", ru: "Мой брат живёт в Мадриде" },
      past: { es: "Mi hermano vivía en Barcelona", ru: "Мой брат жил в Барселоне" },
      future: { es: "Mi hermano vivirá en Valencia", ru: "Мой брат будет жить в Валенсии" }
    }
  },
  {
    id: 60,
    word: "hermana",
    translation: "сестра",
    category: "family",
    type: "существительное",
    popularity: 60,
    examples: {
      present: { es: "Mi hermana es artista", ru: "Моя сестра художница" },
      past: { es: "Mi hermana era estudiante", ru: "Моя сестра была студенткой" },
      future: { es: "Mi hermana será famosa", ru: "Моя сестра будет знаменитой" }
    }
  },
  {
    id: 61,
    word: "casa",
    translation: "дом",
    category: "home",
    type: "существительное",
    popularity: 61,
    examples: {
      present: { es: "Mi casa es grande", ru: "Мой дом большой" },
      past: { es: "Mi casa era pequeña", ru: "Мой дом был маленьким" },
      future: { es: "Mi casa será moderna", ru: "Мой дом будет современным" }
    }
  },
  {
    id: 62,
    word: "habitación",
    translation: "комната",
    category: "home",
    type: "существительное",
    popularity: 62,
    examples: {
      present: { es: "La habitación está limpia", ru: "Комната чистая" },
      past: { es: "La habitación estaba sucia", ru: "Комната была грязной" },
      future: { es: "La habitación estará ordenada", ru: "Комната будет убранной" }
    }
  },
  {
    id: 63,
    word: "cocina",
    translation: "кухня",
    category: "home",
    type: "существительное",
    popularity: 63,
    examples: {
      present: { es: "La cocina es nueva", ru: "Кухня новая" },
      past: { es: "La cocina era vieja", ru: "Кухня была старой" },
      future: { es: "La cocina será moderna", ru: "Кухня будет современной" }
    }
  },
  {
    id: 64,
    word: "baño",
    translation: "ванная",
    category: "home",
    type: "существительное",
    popularity: 64,
    examples: {
      present: { es: "El baño está ocupado", ru: "Ванная занята" },
      past: { es: "El baño estaba libre", ru: "Ванная была свободна" },
      future: { es: "El baño estará limpio", ru: "Ванная будет чистой" }
    }
  },
  {
    id: 65,
    word: "puerta",
    translation: "дверь",
    category: "home",
    type: "существительное",
    popularity: 65,
    examples: {
      present: { es: "La puerta está abierta", ru: "Дверь открыта" },
      past: { es: "La puerta estaba cerrada", ru: "Дверь была закрыта" },
      future: { es: "La puerta estará rota", ru: "Дверь будет сломана" }
    }
  },
  {
    id: 66,
    word: "ventana",
    translation: "окно",
    category: "home",
    type: "существительное",
    popularity: 66,
    examples: {
      present: { es: "La ventana da al jardín", ru: "Окно выходит в сад" },
      past: { es: "La ventana daba a la calle", ru: "Окно выходило на улицу" },
      future: { es: "La ventana dará al mar", ru: "Окно будет выходить на море" }
    }
  },
  {
    id: 67,
    word: "calle",
    translation: "улица",
    category: "city",
    type: "существительное",
    popularity: 67,
    examples: {
      present: { es: "La calle es tranquila", ru: "Улица тихая" },
      past: { es: "La calle era ruidosa", ru: "Улица была шумной" },
      future: { es: "La calle será peatonal", ru: "Улица будет пешеходной" }
    }
  },
  {
    id: 68,
    word: "ciudad",
    translation: "город",
    category: "city",
    type: "существительное",
    popularity: 68,
    examples: {
      present: { es: "La ciudad es hermosa", ru: "Город красивый" },
      past: { es: "La ciudad era pequeña", ru: "Город был маленьким" },
      future: { es: "La ciudad será grande", ru: "Город будет большим" }
    }
  },
  {
    id: 69,
    word: "tienda",
    translation: "магазин",
    category: "city",
    type: "существительное",
    popularity: 69,
    examples: {
      present: { es: "La tienda está cerrada", ru: "Магазин закрыт" },
      past: { es: "La tienda estaba abierta", ru: "Магазин был открыт" },
      future: { es: "La tienda estará renovada", ru: "Магазин будет отремонтирован" }
    }
  },
  {
    id: 70,
    word: "restaurante",
    translation: "ресторан",
    category: "city",
    type: "существительное",
    popularity: 70,
    examples: {
      present: { es: "El restaurante es caro", ru: "Ресторан дорогой" },
      past: { es: "El restaurante era barato", ru: "Ресторан был дешёвым" },
      future: { es: "El restaurante será famoso", ru: "Ресторан будет знаменитым" }
    }
  },
  {
    id: 71,
    word: "comida",
    translation: "еда",
    category: "food",
    type: "существительное",
    popularity: 71,
    examples: {
      present: { es: "La comida está rica", ru: "Еда вкусная" },
      past: { es: "La comida estaba fría", ru: "Еда была холодной" },
      future: { es: "La comida estará caliente", ru: "Еда будет горячей" }
    }
  },
  {
    id: 72,
    word: "agua",
    translation: "вода",
    category: "food",
    type: "существительное",
    popularity: 72,
    examples: {
      present: { es: "El agua está fría", ru: "Вода холодная" },
      past: { es: "El agua estaba caliente", ru: "Вода была горячей" },
      future: { es: "El agua estará fresca", ru: "Вода будет свежей" }
    }
  },
  {
    id: 73,
    word: "pan",
    translation: "хлеб",
    category: "food",
    type: "существительное",
    popularity: 73,
    examples: {
      present: { es: "El pan está fresco", ru: "Хлеб свежий" },
      past: { es: "El pan estaba duro", ru: "Хлеб был чёрствым" },
      future: { es: "El pan estará listo", ru: "Хлеб будет готов" }
    }
  },
  {
    id: 74,
    word: "carne",
    translation: "мясо",
    category: "food",
    type: "существительное",
    popularity: 74,
    examples: {
      present: { es: "La carne está jugosa", ru: "Мясо сочное" },
      past: { es: "La carne estaba cruda", ru: "Мясо было сырым" },
      future: { es: "La carne estará asada", ru: "Мясо будет жареным" }
    }
  },
  {
    id: 75,
    word: "fruta",
    translation: "фрукт",
    category: "food",
    type: "существительное",
    popularity: 75,
    examples: {
      present: { es: "La fruta es dulce", ru: "Фрукт сладкий" },
      past: { es: "La fruta era ácida", ru: "Фрукт был кислым" },
      future: { es: "La fruta será madura", ru: "Фрукт будет спелым" }
    }
  },
  {
    id: 76,
    word: "sol",
    translation: "солнце",
    category: "nature",
    type: "существительное",
    popularity: 76,
    examples: {
      present: { es: "El sol brilla hoy", ru: "Солнце светит сегодня" },
      past: { es: "El sol brillaba ayer", ru: "Солнце светило вчера" },
      future: { es: "El sol brillará mañana", ru: "Солнце будет светить завтра" }
    }
  },
  {
    id: 77,
    word: "luna",
    translation: "луна",
    category: "nature",
    type: "существительное",
    popularity: 77,
    examples: {
      present: { es: "La luna es llena", ru: "Луна полная" },
      past: { es: "La luna era nueva", ru: "Луна была новой" },
      future: { es: "La luna será creciente", ru: "Луна будет растущей" }
    }
  },
  {
    id: 78,
    word: "árbol",
    translation: "дерево",
    category: "nature",
    type: "существительное",
    popularity: 78,
    examples: {
      present: { es: "El árbol es alto", ru: "Дерево высокое" },
      past: { es: "El árbol era pequeño", ru: "Дерево было маленьким" },
      future: { es: "El árbol será grande", ru: "Дерево будет большим" }
    }
  },
  {
    id: 79,
    word: "flor",
    translation: "цветок",
    category: "nature",
    type: "существительное",
    popularity: 79,
    examples: {
      present: { es: "La flor es bonita", ru: "Цветок красивый" },
      past: { es: "La flor era roja", ru: "Цветок был красным" },
      future: { es: "La flor será amarilla", ru: "Цветок будет жёлтым" }
    }
  },
  {
    id: 80,
    word: "rojo",
    translation: "красный",
    category: "colors",
    type: "прилагательное",
    popularity: 80,
    examples: {
      present: { es: "El coche es rojo", ru: "Машина красная" },
      past: { es: "El coche era rojo", ru: "Машина была красной" },
      future: { es: "El coche será rojo", ru: "Машина будет красной" }
    }
  },
  {
    id: 81,
    word: "azul",
    translation: "синий",
    category: "colors",
    type: "прилагательное",
    popularity: 81,
    examples: {
      present: { es: "El cielo es azul", ru: "Небо синее" },
      past: { es: "El cielo era azul", ru: "Небо было синим" },
      future: { es: "El cielo será azul", ru: "Небо будет синим" }
    }
  },
  {
    id: 82,
    word: "verde",
    translation: "зелёный",
    category: "colors",
    type: "прилагательное",
    popularity: 82,
    examples: {
      present: { es: "La hierba es verde", ru: "Трава зелёная" },
      past: { es: "La hierba era verde", ru: "Трава была зелёной" },
      future: { es: "La hierba será verde", ru: "Трава будет зелёной" }
    }
  },
  {
    id: 83,
    word: "amarillo",
    translation: "жёлтый",
    category: "colors",
    type: "прилагательное",
    popularity: 83,
    examples: {
      present: { es: "El sol es amarillo", ru: "Солнце жёлтое" },
      past: { es: "El sol era amarillo", ru: "Солнце было жёлтым" },
      future: { es: "El sol será amarillo", ru: "Солнце будет жёлтым" }
    }
  },
  {
    id: 84,
    word: "blanco",
    translation: "белый",
    category: "colors",
    type: "прилагательное",
    popularity: 84,
    examples: {
      present: { es: "La nieve es blanca", ru: "Снег белый" },
      past: { es: "La nieve era blanca", ru: "Снег был белым" },
      future: { es: "La nieve será blanca", ru: "Снег будет белым" }
    }
  },
  {
    id: 85,
    word: "negro",
    translation: "чёрный",
    category: "colors",
    type: "прилагательное",
    popularity: 85,
    examples: {
      present: { es: "El gato es negro", ru: "Кот чёрный" },
      past: { es: "El gato era negro", ru: "Кот был чёрным" },
      future: { es: "El gato será negro", ru: "Кот будет чёрным" }
    }
  },
  {
    id: 86,
    word: "feliz",
    translation: "счастливый",
    category: "emotions",
    type: "прилагательное",
    popularity: 86,
    examples: {
      present: { es: "Estoy feliz hoy", ru: "Я счастлив сегодня" },
      past: { es: "Estaba feliz ayer", ru: "Я был счастлив вчера" },
      future: { es: "Estaré feliz mañana", ru: "Я буду счастлив завтра" }
    }
  },
  {
    id: 87,
    word: "triste",
    translation: "грустный",
    category: "emotions",
    type: "прилагательное",
    popularity: 87,
    examples: {
      present: { es: "Estoy triste ahora", ru: "Я грустный сейчас" },
      past: { es: "Estaba triste antes", ru: "Я был грустным раньше" },
      future: { es: "No estaré triste", ru: "Я не буду грустным" }
    }
  },
  {
    id: 88,
    word: "cansado",
    translation: "уставший",
    category: "emotions",
    type: "прилагательное",
    popularity: 88,
    examples: {
      present: { es: "Estoy cansado", ru: "Я устал" },
      past: { es: "Estaba cansado", ru: "Я был уставшим" },
      future: { es: "Estaré cansado", ru: "Я буду уставшим" }
    }
  },
  {
    id: 89,
    word: "trabajo",
    translation: "работа",
    category: "work",
    type: "существительное",
    popularity: 89,
    examples: {
      present: { es: "Mi trabajo es difícil", ru: "Моя работа трудная" },
      past: { es: "Mi trabajo era fácil", ru: "Моя работа была лёгкой" },
      future: { es: "Mi trabajo será interesante", ru: "Моя работа будет интересной" }
    }
  },
  {
    id: 90,
    word: "dinero",
    translation: "деньги",
    category: "work",
    type: "существительное",
    popularity: 90,
    examples: {
      present: { es: "Necesito dinero", ru: "Мне нужны деньги" },
      past: { es: "Necesitaba dinero", ru: "Мне нужны были деньги" },
      future: { es: "Necesitaré dinero", ru: "Мне понадобятся деньги" }
    }
  },
  {
    id: 91,
    word: "grande",
    translation: "большой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 91,
    examples: {
      present: { es: "La casa es grande", ru: "Дом большой" },
      past: { es: "La casa era grande", ru: "Дом был большим" },
      future: { es: "La casa será grande", ru: "Дом будет большим" }
    }
  },
  {
    id: 92,
    word: "pequeño",
    translation: "маленький",
    category: "adjectives",
    type: "прилагательное",
    popularity: 92,
    examples: {
      present: { es: "El perro es pequeño", ru: "Собака маленькая" },
      past: { es: "El perro era pequeño", ru: "Собака была маленькой" },
      future: { es: "El perro será pequeño", ru: "Собака будет маленькой" }
    }
  },
  {
    id: 93,
    word: "bueno",
    translation: "хороший",
    category: "adjectives",
    type: "прилагательное",
    popularity: 93,
    examples: {
      present: { es: "Es un buen día", ru: "Это хороший день" },
      past: { es: "Era un buen día", ru: "Это был хороший день" },
      future: { es: "Será un buen día", ru: "Это будет хороший день" }
    }
  },
  {
    id: 94,
    word: "malo",
    translation: "плохой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 94,
    examples: {
      present: { es: "Es un mal momento", ru: "Это плохой момент" },
      past: { es: "Era un mal momento", ru: "Это был плохой момент" },
      future: { es: "Será un mal momento", ru: "Это будет плохой момент" }
    }
  },
  {
    id: 95,
    word: "nuevo",
    translation: "новый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 95,
    examples: {
      present: { es: "Tengo un coche nuevo", ru: "У меня новая машина" },
      past: { es: "Tenía un coche nuevo", ru: "У меня была новая машина" },
      future: { es: "Tendré un coche nuevo", ru: "У меня будет новая машина" }
    }
  },
  {
    id: 96,
    word: "viejo",
    translation: "старый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 96,
    examples: {
      present: { es: "Es un libro viejo", ru: "Это старая книга" },
      past: { es: "Era un libro viejo", ru: "Это была старая книга" },
      future: { es: "Será un libro viejo", ru: "Это будет старая книга" }
    }
  },
  {
    id: 97,
    word: "en",
    translation: "в",
    category: "prepositions",
    type: "предлог",
    popularity: 97,
    examples: {
      present: { es: "Estoy en casa", ru: "Я дома" },
      past: { es: "Estaba en casa", ru: "Я был дома" },
      future: { es: "Estaré en casa", ru: "Я буду дома" }
    }
  },
  {
    id: 98,
    word: "de",
    translation: "из, от",
    category: "prepositions",
    type: "предлог",
    popularity: 98,
    examples: {
      present: { es: "Soy de España", ru: "Я из Испании" },
      past: { es: "Era de España", ru: "Я был из Испании" },
      future: { es: "Seré de España", ru: "Я буду из Испании" }
    }
  },
  {
    id: 99,
    word: "a",
    translation: "к, в",
    category: "prepositions",
    type: "предлог",
    popularity: 99,
    examples: {
      present: { es: "Voy a Madrid", ru: "Я еду в Мадрид" },
      past: { es: "Fui a Madrid", ru: "Я ездил в Мадрид" },
      future: { es: "Iré a Madrid", ru: "Я поеду в Мадрид" }
    }
  },
  {
    id: 100,
    word: "con",
    translation: "с",
    category: "prepositions",
    type: "предлог",
    popularity: 100,
    examples: {
      present: { es: "Voy con mi amigo", ru: "Я иду с другом" },
      past: { es: "Fui con mi amigo", ru: "Я ходил с другом" },
      future: { es: "Iré con mi amigo", ru: "Я пойду с другом" }
    }
  },
  {
    id: 101,
    word: "por",
    translation: "по, за, из-за",
    category: "prepositions",
    type: "предлог",
    popularity: 101,
    examples: {
      present: { es: "Paso por el parque", ru: "Я прохожу через парк" },
      past: { es: "Pasé por el parque", ru: "Я прошёл через парк" },
      future: { es: "Pasaré por el parque", ru: "Я пройду через парк" }
    }
  },
  {
    id: 102,
    word: "para",
    translation: "для, чтобы",
    category: "prepositions",
    type: "предлог",
    popularity: 102,
    examples: {
      present: { es: "Esto es para ti", ru: "Это для тебя" },
      past: { es: "Esto era para ti", ru: "Это было для тебя" },
      future: { es: "Esto será para ti", ru: "Это будет для тебя" }
    }
  },
  {
    id: 103,
    word: "sin",
    translation: "без",
    category: "prepositions",
    type: "предлог",
    popularity: 103,
    examples: {
      present: { es: "Estoy sin dinero", ru: "Я без денег" },
      past: { es: "Estaba sin dinero", ru: "Я был без денег" },
      future: { es: "Estaré sin dinero", ru: "Я буду без денег" }
    }
  },
  {
    id: 104,
    word: "sobre",
    translation: "о, на, над",
    category: "prepositions",
    type: "предлог",
    popularity: 104,
    examples: {
      present: { es: "Hablo sobre el tema", ru: "Я говорю о теме" },
      past: { es: "Hablé sobre el tema", ru: "Я говорил о теме" },
      future: { es: "Hablaré sobre el tema", ru: "Я буду говорить о теме" }
    }
  },
  {
    id: 105,
    word: "y",
    translation: "и",
    category: "prepositions",
    type: "союз",
    popularity: 105,
    examples: {
      present: { es: "Tú y yo somos amigos", ru: "Ты и я друзья" },
      past: { es: "Tú y yo éramos amigos", ru: "Ты и я были друзьями" },
      future: { es: "Tú y yo seremos amigos", ru: "Ты и я будем друзьями" }
    }
  },
  {
    id: 106,
    word: "o",
    translation: "или",
    category: "prepositions",
    type: "союз",
    popularity: 106,
    examples: {
      present: { es: "Café o té", ru: "Кофе или чай" },
      past: { es: "Era café o té", ru: "Было кофе или чай" },
      future: { es: "Será café o té", ru: "Будет кофе или чай" }
    }
  },
  {
    id: 107,
    word: "pero",
    translation: "но",
    category: "prepositions",
    type: "союз",
    popularity: 107,
    examples: {
      present: { es: "Quiero ir, pero estoy cansado", ru: "Я хочу пойти, но я устал" },
      past: { es: "Quería ir, pero estaba cansado", ru: "Я хотел пойти, но был устал" },
      future: { es: "Querré ir, pero estaré cansado", ru: "Я захочу пойти, но буду устал" }
    }
  },
  {
    id: 108,
    word: "porque",
    translation: "потому что",
    category: "prepositions",
    type: "союз",
    popularity: 108,
    examples: {
      present: { es: "No voy porque llueve", ru: "Я не иду, потому что идёт дождь" },
      past: { es: "No fui porque llovía", ru: "Я не пошёл, потому что шёл дождь" },
      future: { es: "No iré porque lloverá", ru: "Я не пойду, потому что будет дождь" }
    }
  },
  {
    id: 109,
    word: "cuando",
    translation: "когда",
    category: "prepositions",
    type: "союз",
    popularity: 109,
    examples: {
      present: { es: "Cuando tengo tiempo, leo", ru: "Когда у меня есть время, я читаю" },
      past: { es: "Cuando tenía tiempo, leía", ru: "Когда у меня было время, я читал" },
      future: { es: "Cuando tenga tiempo, leeré", ru: "Когда у меня будет время, я буду читать" }
    }
  },
  {
    id: 110,
    word: "vivir",
    translation: "жить",
    category: "verbs",
    type: "глагол",
    popularity: 110,
    examples: {
      present: {
        yo: { es: "Yo vivo en Madrid", ru: "Я живу в Мадриде" },
        tú: { es: "Tú vives en Madrid", ru: "Ты живёшь в Мадриде" },
        él: { es: "Él vive en Madrid", ru: "Он живёт в Мадриде" },
        nosotros: { es: "Nosotros vivimos en Madrid", ru: "Мы живём в Мадриде" },
        vosotros: { es: "Vosotros vivís en Madrid", ru: "Вы живёте в Мадриде" },
        ellos: { es: "Ellos viven en Madrid", ru: "Они живут в Мадриде" }
      },
      past: {
        yo: { es: "Yo viví en Madrid", ru: "Я жил в Мадриде" },
        tú: { es: "Tú viviste en Madrid", ru: "Ты жил в Мадриде" },
        él: { es: "Él vivió en Madrid", ru: "Он жил в Мадриде" },
        nosotros: { es: "Nosotros vivimos en Madrid", ru: "Мы жили в Мадриде" },
        vosotros: { es: "Vosotros vivisteis en Madrid", ru: "Вы жили в Мадриде" },
        ellos: { es: "Ellos vivieron en Madrid", ru: "Они жили в Мадриде" }
      },
      future: {
        yo: { es: "Yo viviré en Madrid", ru: "Я буду жить в Мадриде" },
        tú: { es: "Tú vivirás en Madrid", ru: "Ты будешь жить в Мадриде" },
        él: { es: "Él vivirá en Madrid", ru: "Он будет жить в Мадриде" },
        nosotros: { es: "Nosotros viviremos en Madrid", ru: "Мы будем жить в Мадриде" },
        vosotros: { es: "Vosotros viviréis en Madrid", ru: "Вы будете жить в Мадриде" },
        ellos: { es: "Ellos vivirán en Madrid", ru: "Они будут жить в Мадриде" }
      }
    }
  },
  {
    id: 111,
    word: "sentir",
    translation: "чувствовать",
    category: "verbs",
    type: "глагол",
    popularity: 111,
    examples: {
      present: {
        yo: { es: "Yo siento alegría", ru: "Я чувствую радость" },
        tú: { es: "Tú sientes alegría", ru: "Ты чувствуешь радость" },
        él: { es: "Él siente alegría", ru: "Он чувствует радость" },
        nosotros: { es: "Nosotros sentimos alegría", ru: "Мы чувствуем радость" },
        vosotros: { es: "Vosotros sentís alegría", ru: "Вы чувствуете радость" },
        ellos: { es: "Ellos sienten alegría", ru: "Они чувствуют радость" }
      },
      past: {
        yo: { es: "Yo sentí alegría", ru: "Я чувствовал радость" },
        tú: { es: "Tú sentiste alegría", ru: "Ты чувствовал радость" },
        él: { es: "Él sintió alegría", ru: "Он чувствовал радость" },
        nosotros: { es: "Nosotros sentimos alegría", ru: "Мы чувствовали радость" },
        vosotros: { es: "Vosotros sentisteis alegría", ru: "Вы чувствовали радость" },
        ellos: { es: "Ellos sintieron alegría", ru: "Они чувствовали радость" }
      },
      future: {
        yo: { es: "Yo sentiré alegría", ru: "Я буду чувствовать радость" },
        tú: { es: "Tú sentirás alegría", ru: "Ты будешь чувствовать радость" },
        él: { es: "Él sentirá alegría", ru: "Он будет чувствовать радость" },
        nosotros: { es: "Nosotros sentiremos alegría", ru: "Мы будем чувствовать радость" },
        vosotros: { es: "Vosotros sentiréis alegría", ru: "Вы будете чувствовать радость" },
        ellos: { es: "Ellos sentirán alegría", ru: "Они будут чувствовать радость" }
      }
    }
  },
  {
    id: 112,
    word: "trabajar",
    translation: "работать",
    category: "verbs",
    type: "глагол",
    popularity: 112,
    examples: {
      present: {
        yo: { es: "Yo trabajo en una oficina", ru: "Я работаю в офисе" },
        tú: { es: "Tú trabajas en una oficina", ru: "Ты работаешь в офисе" },
        él: { es: "Él trabaja en una oficina", ru: "Он работает в офисе" },
        nosotros: { es: "Nosotros trabajamos en una oficina", ru: "Мы работаем в офисе" },
        vosotros: { es: "Vosotros trabajáis en una oficina", ru: "Вы работаете в офисе" },
        ellos: { es: "Ellos trabajan en una oficina", ru: "Они работают в офисе" }
      },
      past: {
        yo: { es: "Yo trabajé en una oficina", ru: "Я работал в офисе" },
        tú: { es: "Tú trabajaste en una oficina", ru: "Ты работал в офисе" },
        él: { es: "Él trabajó en una oficina", ru: "Он работал в офисе" },
        nosotros: { es: "Nosotros trabajamos en una oficina", ru: "Мы работали в офисе" },
        vosotros: { es: "Vosotros trabajasteis en una oficina", ru: "Вы работали в офисе" },
        ellos: { es: "Ellos trabajaron en una oficina", ru: "Они работали в офисе" }
      },
      future: {
        yo: { es: "Yo trabajaré en una oficina", ru: "Я буду работать в офисе" },
        tú: { es: "Tú trabajarás en una oficina", ru: "Ты будешь работать в офисе" },
        él: { es: "Él trabajará en una oficina", ru: "Он будет работать в офисе" },
        nosotros: { es: "Nosotros trabajaremos en una oficina", ru: "Мы будем работать в офисе" },
        vosotros: { es: "Vosotros trabajaréis en una oficina", ru: "Вы будете работать в офисе" },
        ellos: { es: "Ellos trabajarán en una oficina", ru: "Они будут работать в офисе" }
      }
    }
  },
  {
    id: 113,
    word: "estudiar",
    translation: "учиться",
    category: "verbs",
    type: "глагол",
    popularity: 113,
    examples: {
      present: {
        yo: { es: "Yo estudio español", ru: "Я учу испанский" },
        tú: { es: "Tú estudias español", ru: "Ты учишь испанский" },
        él: { es: "Él estudia español", ru: "Он учит испанский" },
        nosotros: { es: "Nosotros estudiamos español", ru: "Мы учим испанский" },
        vosotros: { es: "Vosotros estudiáis español", ru: "Вы учите испанский" },
        ellos: { es: "Ellos estudian español", ru: "Они учат испанский" }
      },
      past: {
        yo: { es: "Yo estudié español", ru: "Я учил испанский" },
        tú: { es: "Tú estudiaste español", ru: "Ты учил испанский" },
        él: { es: "Él estudió español", ru: "Он учил испанский" },
        nosotros: { es: "Nosotros estudiamos español", ru: "Мы учили испанский" },
        vosotros: { es: "Vosotros estudiasteis español", ru: "Вы учили испанский" },
        ellos: { es: "Ellos estudiaron español", ru: "Они учили испанский" }
      },
      future: {
        yo: { es: "Yo estudiaré español", ru: "Я буду учить испанский" },
        tú: { es: "Tú estudiarás español", ru: "Ты будешь учить испанский" },
        él: { es: "Él estudiará español", ru: "Он будет учить испанский" },
        nosotros: { es: "Nosotros estudiaremos español", ru: "Мы будем учить испанский" },
        vosotros: { es: "Vosotros estudiaréis español", ru: "Вы будете учить испанский" },
        ellos: { es: "Ellos estudiarán español", ru: "Они будут учить испанский" }
      }
    }
  },
  {
    id: 114,
    word: "comer",
    translation: "есть, кушать",
    category: "verbs",
    type: "глагол",
    popularity: 114,
    examples: {
      present: {
        yo: { es: "Yo como frutas", ru: "Я ем фрукты" },
        tú: { es: "Tú comes frutas", ru: "Ты ешь фрукты" },
        él: { es: "Él come frutas", ru: "Он ест фрукты" },
        nosotros: { es: "Nosotros comemos frutas", ru: "Мы едим фрукты" },
        vosotros: { es: "Vosotros coméis frutas", ru: "Вы едите фрукты" },
        ellos: { es: "Ellos comen frutas", ru: "Они едят фрукты" }
      },
      past: {
        yo: { es: "Yo comí frutas", ru: "Я ел фрукты" },
        tú: { es: "Tú comiste frutas", ru: "Ты ел фрукты" },
        él: { es: "Él comió frutas", ru: "Он ел фрукты" },
        nosotros: { es: "Nosotros comimos frutas", ru: "Мы ели фрукты" },
        vosotros: { es: "Vosotros comisteis frutas", ru: "Вы ели фрукты" },
        ellos: { es: "Ellos comieron frutas", ru: "Они ели фрукты" }
      },
      future: {
        yo: { es: "Yo comeré frutas", ru: "Я буду есть фрукты" },
        tú: { es: "Tú comerás frutas", ru: "Ты будешь есть фрукты" },
        él: { es: "Él comerá frutas", ru: "Он будет есть фрукты" },
        nosotros: { es: "Nosotros comeremos frutas", ru: "Мы будем есть фрукты" },
        vosotros: { es: "Vosotros comeréis frutas", ru: "Вы будете есть фрукты" },
        ellos: { es: "Ellos comerán frutas", ru: "Они будут есть фрукты" }
      }
    }
  },
  {
    id: 115,
    word: "beber",
    translation: "пить",
    category: "verbs",
    type: "глагол",
    popularity: 115,
    examples: {
      present: {
        yo: { es: "Yo bebo agua", ru: "Я пью воду" },
        tú: { es: "Tú bebes agua", ru: "Ты пьёшь воду" },
        él: { es: "Él bebe agua", ru: "Он пьёт воду" },
        nosotros: { es: "Nosotros bebemos agua", ru: "Мы пьём воду" },
        vosotros: { es: "Vosotros bebéis agua", ru: "Вы пьёте воду" },
        ellos: { es: "Ellos beben agua", ru: "Они пьют воду" }
      },
      past: {
        yo: { es: "Yo bebí agua", ru: "Я пил воду" },
        tú: { es: "Tú bebiste agua", ru: "Ты пил воду" },
        él: { es: "Él bebió agua", ru: "Он пил воду" },
        nosotros: { es: "Nosotros bebimos agua", ru: "Мы пили воду" },
        vosotros: { es: "Vosotros bebisteis agua", ru: "Вы пили воду" },
        ellos: { es: "Ellos bebieron agua", ru: "Они пили воду" }
      },
      future: {
        yo: { es: "Yo beberé agua", ru: "Я буду пить воду" },
        tú: { es: "Tú beberás agua", ru: "Ты будешь пить воду" },
        él: { es: "Él beberá agua", ru: "Он будет пить воду" },
        nosotros: { es: "Nosotros beberemos agua", ru: "Мы будем пить воду" },
        vosotros: { es: "Vosotros beberéis agua", ru: "Вы будете пить воду" },
        ellos: { es: "Ellos beberán agua", ru: "Они будут пить воду" }
      }
    }
  },
  {
    id: 116,
    word: "dormir",
    translation: "спать",
    category: "verbs",
    type: "глагол",
    popularity: 116,
    examples: {
      present: {
        yo: { es: "Yo duermo ocho horas", ru: "Я сплю восемь часов" },
        tú: { es: "Tú duermes ocho horas", ru: "Ты спишь восемь часов" },
        él: { es: "Él duerme ocho horas", ru: "Он спит восемь часов" },
        nosotros: { es: "Nosotros dormimos ocho horas", ru: "Мы спим восемь часов" },
        vosotros: { es: "Vosotros dormís ocho horas", ru: "Вы спите восемь часов" },
        ellos: { es: "Ellos duermen ocho horas", ru: "Они спят восемь часов" }
      },
      past: {
        yo: { es: "Yo dormí ocho horas", ru: "Я спал восемь часов" },
        tú: { es: "Tú dormiste ocho horas", ru: "Ты спал восемь часов" },
        él: { es: "Él durmió ocho horas", ru: "Он спал восемь часов" },
        nosotros: { es: "Nosotros dormimos ocho horas", ru: "Мы спали восемь часов" },
        vosotros: { es: "Vosotros dormisteis ocho horas", ru: "Вы спали восемь часов" },
        ellos: { es: "Ellos durmieron ocho horas", ru: "Они спали восемь часов" }
      },
      future: {
        yo: { es: "Yo dormiré ocho horas", ru: "Я буду спать восемь часов" },
        tú: { es: "Tú dormirás ocho horas", ru: "Ты будешь спать восемь часов" },
        él: { es: "Él dormirá ocho horas", ru: "Он будет спать восемь часов" },
        nosotros: { es: "Nosotros dormiremos ocho horas", ru: "Мы будем спать восемь часов" },
        vosotros: { es: "Vosotros dormiréis ocho horas", ru: "Вы будете спать восемь часов" },
        ellos: { es: "Ellos dormirán ocho horas", ru: "Они будут спать восемь часов" }
      }
    }
  },
  {
    id: 117,
    word: "leer",
    translation: "читать",
    category: "verbs",
    type: "глагол",
    popularity: 117,
    examples: {
      present: {
        yo: { es: "Yo leo un libro", ru: "Я читаю книгу" },
        tú: { es: "Tú lees un libro", ru: "Ты читаешь книгу" },
        él: { es: "Él lee un libro", ru: "Он читает книгу" },
        nosotros: { es: "Nosotros leemos un libro", ru: "Мы читаем книгу" },
        vosotros: { es: "Vosotros leéis un libro", ru: "Вы читаете книгу" },
        ellos: { es: "Ellos leen un libro", ru: "Они читают книгу" }
      },
      past: {
        yo: { es: "Yo leí un libro", ru: "Я читал книгу" },
        tú: { es: "Tú leíste un libro", ru: "Ты читал книгу" },
        él: { es: "Él leyó un libro", ru: "Он читал книгу" },
        nosotros: { es: "Nosotros leímos un libro", ru: "Мы читали книгу" },
        vosotros: { es: "Vosotros leísteis un libro", ru: "Вы читали книгу" },
        ellos: { es: "Ellos leyeron un libro", ru: "Они читали книгу" }
      },
      future: {
        yo: { es: "Yo leeré un libro", ru: "Я буду читать книгу" },
        tú: { es: "Tú leerás un libro", ru: "Ты будешь читать книгу" },
        él: { es: "Él leerá un libro", ru: "Он будет читать книгу" },
        nosotros: { es: "Nosotros leeremos un libro", ru: "Мы будем читать книгу" },
        vosotros: { es: "Vosotros leeréis un libro", ru: "Вы будете читать книгу" },
        ellos: { es: "Ellos leerán un libro", ru: "Они будут читать книгу" }
      }
    }
  },
  {
    id: 118,
    word: "escribir",
    translation: "писать",
    category: "verbs",
    type: "глагол",
    popularity: 118,
    examples: {
      present: {
        yo: { es: "Yo escribo una carta", ru: "Я пишу письмо" },
        tú: { es: "Tú escribes una carta", ru: "Ты пишешь письмо" },
        él: { es: "Él escribe una carta", ru: "Он пишет письмо" },
        nosotros: { es: "Nosotros escribimos una carta", ru: "Мы пишем письмо" },
        vosotros: { es: "Vosotros escribís una carta", ru: "Вы пишете письмо" },
        ellos: { es: "Ellos escriben una carta", ru: "Они пишут письмо" }
      },
      past: {
        yo: { es: "Yo escribí una carta", ru: "Я писал письмо" },
        tú: { es: "Tú escribiste una carta", ru: "Ты писал письмо" },
        él: { es: "Él escribió una carta", ru: "Он писал письмо" },
        nosotros: { es: "Nosotros escribimos una carta", ru: "Мы писали письмо" },
        vosotros: { es: "Vosotros escribisteis una carta", ru: "Вы писали письмо" },
        ellos: { es: "Ellos escribieron una carta", ru: "Они писали письмо" }
      },
      future: {
        yo: { es: "Yo escribiré una carta", ru: "Я буду писать письмо" },
        tú: { es: "Tú escribirás una carta", ru: "Ты будешь писать письмо" },
        él: { es: "Él escribirá una carta", ru: "Он будет писать письмо" },
        nosotros: { es: "Nosotros escribiremos una carta", ru: "Мы будем писать письмо" },
        vosotros: { es: "Vosotros escribiréis una carta", ru: "Вы будете писать письмо" },
        ellos: { es: "Ellos escribirán una carta", ru: "Они будут писать письмо" }
      }
    }
  },
  {
    id: 119,
    word: "abrir",
    translation: "открывать",
    category: "verbs",
    type: "глагол",
    popularity: 119,
    examples: {
      present: {
        yo: { es: "Yo abro la puerta", ru: "Я открываю дверь" },
        tú: { es: "Tú abres la puerta", ru: "Ты открываешь дверь" },
        él: { es: "Él abre la puerta", ru: "Он открывает дверь" },
        nosotros: { es: "Nosotros abrimos la puerta", ru: "Мы открываем дверь" },
        vosotros: { es: "Vosotros abrís la puerta", ru: "Вы открываете дверь" },
        ellos: { es: "Ellos abren la puerta", ru: "Они открывают дверь" }
      },
      past: {
        yo: { es: "Yo abrí la puerta", ru: "Я открыл дверь" },
        tú: { es: "Tú abriste la puerta", ru: "Ты открыл дверь" },
        él: { es: "Él abrió la puerta", ru: "Он открыл дверь" },
        nosotros: { es: "Nosotros abrimos la puerta", ru: "Мы открыли дверь" },
        vosotros: { es: "Vosotros abristeis la puerta", ru: "Вы открыли дверь" },
        ellos: { es: "Ellos abrieron la puerta", ru: "Они открыли дверь" }
      },
      future: {
        yo: { es: "Yo abriré la puerta", ru: "Я открою дверь" },
        tú: { es: "Tú abrirás la puerta", ru: "Ты откроешь дверь" },
        él: { es: "Él abrirá la puerta", ru: "Он откроет дверь" },
        nosotros: { es: "Nosotros abriremos la puerta", ru: "Мы откроем дверь" },
        vosotros: { es: "Vosotros abriréis la puerta", ru: "Вы откроете дверь" },
        ellos: { es: "Ellos abrirán la puerta", ru: "Они откроют дверь" }
      }
    }
  },
  {
    id: 120,
    word: "cerrar",
    translation: "закрывать",
    category: "verbs",
    type: "глагол",
    popularity: 120,
    examples: {
      present: {
        yo: { es: "Yo cierro la ventana", ru: "Я закрываю окно" },
        tú: { es: "Tú cierras la ventana", ru: "Ты закрываешь окно" },
        él: { es: "Él cierra la ventana", ru: "Он закрывает окно" },
        nosotros: { es: "Nosotros cerramos la ventana", ru: "Мы закрываем окно" },
        vosotros: { es: "Vosotros cerráis la ventana", ru: "Вы закрываете окно" },
        ellos: { es: "Ellos cierran la ventana", ru: "Они закрывают окно" }
      },
      past: {
        yo: { es: "Yo cerré la ventana", ru: "Я закрыл окно" },
        tú: { es: "Tú cerraste la ventana", ru: "Ты закрыл окно" },
        él: { es: "Él cerró la ventana", ru: "Он закрыл окно" },
        nosotros: { es: "Nosotros cerramos la ventana", ru: "Мы закрыли окно" },
        vosotros: { es: "Vosotros cerrasteis la ventana", ru: "Вы закрыли окно" },
        ellos: { es: "Ellos cerraron la ventana", ru: "Они закрыли окно" }
      },
      future: {
        yo: { es: "Yo cerraré la ventana", ru: "Я закрою окно" },
        tú: { es: "Tú cerrarás la ventana", ru: "Ты закроешь окно" },
        él: { es: "Él cerrará la ventana", ru: "Он закроет окно" },
        nosotros: { es: "Nosotros cerraremos la ventana", ru: "Мы закроем окно" },
        vosotros: { es: "Vosotros cerraréis la ventana", ru: "Вы закроете окно" },
        ellos: { es: "Ellos cerrarán la ventana", ru: "Они закроют окно" }
      }
    }
  },
  {
    id: 121,
    word: "comprar",
    translation: "покупать",
    category: "verbs",
    type: "глагол",
    popularity: 121,
    examples: {
      present: {
        yo: { es: "Yo compro comida", ru: "Я покупаю еду" },
        tu: { es: "Tú compras comida", ru: "Ты покупаешь еду" },
        el: { es: "Él compra comida", ru: "Он покупает еду" },
        nosotros: { es: "Nosotros compramos comida", ru: "Мы покупаем еду" },
        vosotros: { es: "Vosotros compráis comida", ru: "Вы покупаете еду" },
        ellos: { es: "Ellos compran comida", ru: "Они покупают еду" }
      },
      past: {
        yo: { es: "Yo compré comida", ru: "Я купил еду" },
        tu: { es: "Tú compraste comida", ru: "Ты купил еду" },
        el: { es: "Él compró comida", ru: "Он купил еду" },
        nosotros: { es: "Nosotros compramos comida", ru: "Мы купили еду" },
        vosotros: { es: "Vosotros comprasteis comida", ru: "Вы купили еду" },
        ellos: { es: "Ellos compraron comida", ru: "Они купили еду" }
      },
      future: {
        yo: { es: "Yo compraré comida", ru: "Я куплю еду" },
        tu: { es: "Tú comprarás comida", ru: "Ты купишь еду" },
        el: { es: "Él comprará comida", ru: "Он купит еду" },
        nosotros: { es: "Nosotros compraremos comida", ru: "Мы купим еду" },
        vosotros: { es: "Vosotros compraréis comida", ru: "Вы купите еду" },
        ellos: { es: "Ellos comprarán comida", ru: "Они купят еду" }
      }
    }
  },
  {
    id: 122,
    word: "vender",
    translation: "продавать",
    category: "verbs",
    type: "глагол",
    popularity: 122,
    examples: {
      present: {
        yo: { es: "Yo vendo mi coche", ru: "Я продаю свою машину" },
        tu: { es: "Tú vendes tu coche", ru: "Ты продаёшь свою машину" },
        el: { es: "Él vende su coche", ru: "Он продаёт свою машину" },
        nosotros: { es: "Nosotros vendemos nuestro coche", ru: "Мы продаём свою машину" },
        vosotros: { es: "Vosotros vendéis vuestro coche", ru: "Вы продаёте свою машину" },
        ellos: { es: "Ellos venden su coche", ru: "Они продают свою машину" }
      },
      past: {
        yo: { es: "Yo vendí mi coche", ru: "Я продал свою машину" },
        tu: { es: "Tú vendiste tu coche", ru: "Ты продал свою машину" },
        el: { es: "Él vendió su coche", ru: "Он продал свою машину" },
        nosotros: { es: "Nosotros vendimos nuestro coche", ru: "Мы продали свою машину" },
        vosotros: { es: "Vosotros vendisteis vuestro coche", ru: "Вы продали свою машину" },
        ellos: { es: "Ellos vendieron su coche", ru: "Они продали свою машину" }
      },
      future: {
        yo: { es: "Yo venderé mi coche", ru: "Я продам свою машину" },
        tu: { es: "Tú venderás tu coche", ru: "Ты продашь свою машину" },
        el: { es: "Él venderá su coche", ru: "Он продаст свою машину" },
        nosotros: { es: "Nosotros venderemos nuestro coche", ru: "Мы продадим свою машину" },
        vosotros: { es: "Vosotros venderéis vuestro coche", ru: "Вы продадите свою машину" },
        ellos: { es: "Ellos venderán su coche", ru: "Они продадут свою машину" }
      }
    }
  },
  {
    id: 123,
    word: "pagar",
    translation: "платить",
    category: "verbs",
    type: "глагол",
    popularity: 123,
    examples: {
      present: {
        yo: { es: "Yo pago la cuenta", ru: "Я плачу по счёту" },
        tu: { es: "Tú pagas la cuenta", ru: "Ты платишь по счёту" },
        el: { es: "Él paga la cuenta", ru: "Он платит по счёту" },
        nosotros: { es: "Nosotros pagamos la cuenta", ru: "Мы платим по счёту" },
        vosotros: { es: "Vosotros pagáis la cuenta", ru: "Вы платите по счёту" },
        ellos: { es: "Ellos pagan la cuenta", ru: "Они платят по счёту" }
      },
      past: {
        yo: { es: "Yo pagué la cuenta", ru: "Я заплатил по счёту" },
        tu: { es: "Tú pagaste la cuenta", ru: "Ты заплатил по счёту" },
        el: { es: "Él pagó la cuenta", ru: "Он заплатил по счёту" },
        nosotros: { es: "Nosotros pagamos la cuenta", ru: "Мы заплатили по счёту" },
        vosotros: { es: "Vosotros pagasteis la cuenta", ru: "Вы заплатили по счёту" },
        ellos: { es: "Ellos pagaron la cuenta", ru: "Они заплатили по счёту" }
      },
      future: {
        yo: { es: "Yo pagaré la cuenta", ru: "Я заплачу по счёту" },
        tu: { es: "Tú pagarás la cuenta", ru: "Ты заплатишь по счёту" },
        el: { es: "Él pagará la cuenta", ru: "Он заплатит по счёту" },
        nosotros: { es: "Nosotros pagaremos la cuenta", ru: "Мы заплатим по счёту" },
        vosotros: { es: "Vosotros pagaréis la cuenta", ru: "Вы заплатите по счёту" },
        ellos: { es: "Ellos pagarán la cuenta", ru: "Они заплатят по счёту" }
      }
    }
  },
  {
    id: 124,
    word: "esperar",
    translation: "ждать, надеяться",
    category: "verbs",
    type: "глагол",
    popularity: 124,
    examples: {
      present: {
        yo: { es: "Yo espero el autobús", ru: "Я жду автобус" },
        tu: { es: "Tú esperas el autobús", ru: "Ты ждёшь автобус" },
        el: { es: "Él espera el autobús", ru: "Он ждёт автобус" },
        nosotros: { es: "Nosotros esperamos el autobús", ru: "Мы ждём автобус" },
        vosotros: { es: "Vosotros esperáis el autobús", ru: "Вы ждёте автобус" },
        ellos: { es: "Ellos esperan el autobús", ru: "Они ждут автобус" }
      },
      past: {
        yo: { es: "Yo esperé el autobús", ru: "Я ждал автобус" },
        tu: { es: "Tú esperaste el autobús", ru: "Ты ждал автобус" },
        el: { es: "Él esperó el autobús", ru: "Он ждал автобус" },
        nosotros: { es: "Nosotros esperamos el autobús", ru: "Мы ждали автобус" },
        vosotros: { es: "Vosotros esperasteis el autobús", ru: "Вы ждали автобус" },
        ellos: { es: "Ellos esperaron el autobús", ru: "Они ждали автобус" }
      },
      future: {
        yo: { es: "Yo esperaré el autobús", ru: "Я буду ждать автобус" },
        tu: { es: "Tú esperarás el autobús", ru: "Ты будешь ждать автобус" },
        el: { es: "Él esperará el autobús", ru: "Он будет ждать автобус" },
        nosotros: { es: "Nosotros esperaremos el autobús", ru: "Мы будем ждать автобус" },
        vosotros: { es: "Vosotros esperaréis el autobús", ru: "Вы будете ждать автобус" },
        ellos: { es: "Ellos esperarán el autobús", ru: "Они будут ждать автобус" }
      }
    }
  },
  {
    id: 125,
    word: "buscar",
    translation: "искать",
    category: "verbs",
    type: "глагол",
    popularity: 125,
    examples: {
      present: {
        yo: { es: "Yo busco mis llaves", ru: "Я ищу свои ключи" },
        tú: { es: "Tú buscas tus llaves", ru: "Ты ищешь свои ключи" },
        él: { es: "Él busca sus llaves", ru: "Он ищет свои ключи" },
        nosotros: { es: "Nosotros buscamos nuestras llaves", ru: "Мы ищем свои ключи" },
        vosotros: { es: "Vosotros buscáis vuestras llaves", ru: "Вы ищете свои ключи" },
        ellos: { es: "Ellos buscan sus llaves", ru: "Они ищут свои ключи" }
      },
      past: {
        yo: { es: "Yo busqué mis llaves", ru: "Я искал свои ключи" },
        tú: { es: "Tú buscaste tus llaves", ru: "Ты искал свои ключи" },
        él: { es: "Él buscó sus llaves", ru: "Он искал свои ключи" },
        nosotros: { es: "Nosotros buscamos nuestras llaves", ru: "Мы искали свои ключи" },
        vosotros: { es: "Vosotros buscasteis vuestras llaves", ru: "Вы искали свои ключи" },
        ellos: { es: "Ellos buscaron sus llaves", ru: "Они искали свои ключи" }
      },
      future: {
        yo: { es: "Yo buscaré mis llaves", ru: "Я буду искать свои ключи" },
        tú: { es: "Tú buscarás tus llaves", ru: "Ты будешь искать свои ключи" },
        él: { es: "Él buscará sus llaves", ru: "Он будет искать свои ключи" },
        nosotros: { es: "Nosotros buscaremos nuestras llaves", ru: "Мы будем искать свои ключи" },
        vosotros: { es: "Vosotros buscaréis vuestras llaves", ru: "Вы будете искать свои ключи" },
        ellos: { es: "Ellos buscarán sus llaves", ru: "Они будут искать свои ключи" }
      }
    }
  },
  {
    id: 126,
    word: "mirar",
    translation: "смотреть",
    category: "verbs",
    type: "глагол",
    popularity: 126,
    examples: {
      present: {
        yo: { es: "Yo miro la televisión", ru: "Я смотрю телевизор" },
        tú: { es: "Tú miras la televisión", ru: "Ты смотришь телевизор" },
        él: { es: "Él mira la televisión", ru: "Он смотрит телевизор" },
        nosotros: { es: "Nosotros miramos la televisión", ru: "Мы смотрим телевизор" },
        vosotros: { es: "Vosotros miráis la televisión", ru: "Вы смотрите телевизор" },
        ellos: { es: "Ellos miran la televisión", ru: "Они смотрят телевизор" }
      },
      past: {
        yo: { es: "Yo miré la televisión", ru: "Я смотрел телевизор" },
        tú: { es: "Tú miraste la televisión", ru: "Ты смотрел телевизор" },
        él: { es: "Él miró la televisión", ru: "Он смотрел телевизор" },
        nosotros: { es: "Nosotros miramos la televisión", ru: "Мы смотрели телевизор" },
        vosotros: { es: "Vosotros mirasteis la televisión", ru: "Вы смотрели телевизор" },
        ellos: { es: "Ellos miraron la televisión", ru: "Они смотрели телевизор" }
      },
      future: {
        yo: { es: "Yo miraré la televisión", ru: "Я буду смотреть телевизор" },
        tú: { es: "Tú mirarás la televisión", ru: "Ты будешь смотреть телевизор" },
        él: { es: "Él mirará la televisión", ru: "Он будет смотреть телевизор" },
        nosotros: { es: "Nosotros miraremos la televisión", ru: "Мы будем смотреть телевизор" },
        vosotros: { es: "Vosotros miraréis la televisión", ru: "Вы будете смотреть телевизор" },
        ellos: { es: "Ellos mirarán la televisión", ru: "Они будут смотреть телевизор" }
      }
    }
  },
  {
    id: 127,
    word: "escuchar",
    translation: "слушать",
    category: "verbs",
    type: "глагол",
    popularity: 127,
    examples: {
      present: {
        yo: { es: "Yo escucho música", ru: "Я слушаю музыку" },
        tú: { es: "Tú escuchas música", ru: "Ты слушаешь музыку" },
        él: { es: "Él escucha música", ru: "Он слушает музыку" },
        nosotros: { es: "Nosotros escuchamos música", ru: "Мы слушаем музыку" },
        vosotros: { es: "Vosotros escucháis música", ru: "Вы слушаете музыку" },
        ellos: { es: "Ellos escuchan música", ru: "Они слушают музыку" }
      },
      past: {
        yo: { es: "Yo escuché música", ru: "Я слушал музыку" },
        tú: { es: "Tú escuchaste música", ru: "Ты слушал музыку" },
        él: { es: "Él escuchó música", ru: "Он слушал музыку" },
        nosotros: { es: "Nosotros escuchamos música", ru: "Мы слушали музыку" },
        vosotros: { es: "Vosotros escuchasteis música", ru: "Вы слушали музыку" },
        ellos: { es: "Ellos escucharon música", ru: "Они слушали музыку" }
      },
      future: {
        yo: { es: "Yo escucharé música", ru: "Я буду слушать музыку" },
        tú: { es: "Tú escucharás música", ru: "Ты будешь слушать музыку" },
        él: { es: "Él escuchará música", ru: "Он будет слушать музыку" },
        nosotros: { es: "Nosotros escucharemos música", ru: "Мы будем слушать музыку" },
        vosotros: { es: "Vosotros escucharéis música", ru: "Вы будете слушать музыку" },
        ellos: { es: "Ellos escucharán música", ru: "Они будут слушать музыку" }
      }
    }
  },
  {
    id: 128,
    word: "preguntar",
    translation: "спрашивать",
    category: "verbs",
    type: "глагол",
    popularity: 128,
    examples: {
      present: {
        yo: { es: "Yo pregunto por ti", ru: "Я спрашиваю о тебе" },
        tú: { es: "Tú preguntas por mí", ru: "Ты спрашиваешь обо мне" },
        él: { es: "Él pregunta por ella", ru: "Он спрашивает о ней" },
        nosotros: { es: "Nosotros preguntamos por vosotros", ru: "Мы спрашиваем о вас" },
        vosotros: { es: "Vosotros preguntáis por ellos", ru: "Вы спрашиваете о них" },
        ellos: { es: "Ellos preguntan por nosotros", ru: "Они спрашивают о нас" }
      },
      past: {
        yo: { es: "Yo pregunté por ti", ru: "Я спрашивал о тебе" },
        tú: { es: "Tú preguntaste por mí", ru: "Ты спрашивал обо мне" },
        él: { es: "Él preguntó por ella", ru: "Он спрашивал о ней" },
        nosotros: { es: "Nosotros preguntamos por vosotros", ru: "Мы спрашивали о вас" },
        vosotros: { es: "Vosotros preguntasteis por ellos", ru: "Вы спрашивали о них" },
        ellos: { es: "Ellos preguntaron por nosotros", ru: "Они спрашивали о нас" }
      },
      future: {
        yo: { es: "Yo preguntaré por ti", ru: "Я буду спрашивать о тебе" },
        tú: { es: "Tú preguntarás por mí", ru: "Ты будешь спрашивать обо мне" },
        él: { es: "Él preguntará por ella", ru: "Он будет спрашивать о ней" },
        nosotros: { es: "Nosotros preguntaremos por vosotros", ru: "Мы будем спрашивать о вас" },
        vosotros: { es: "Vosotros preguntaréis por ellos", ru: "Вы будете спрашивать о них" },
        ellos: { es: "Ellos preguntarán por nosotros", ru: "Они будут спрашивать о нас" }
      }
    }
  },
  {
    id: 129,
    word: "responder",
    translation: "отвечать",
    category: "verbs",
    type: "глагол",
    popularity: 129,
    examples: {
      present: {
        yo: { es: "Yo respondo la pregunta", ru: "Я отвечаю на вопрос" },
        tú: { es: "Tú respondes la pregunta", ru: "Ты отвечаешь на вопрос" },
        él: { es: "Él responde la pregunta", ru: "Он отвечает на вопрос" },
        nosotros: { es: "Nosotros respondemos la pregunta", ru: "Мы отвечаем на вопрос" },
        vosotros: { es: "Vosotros respondéis la pregunta", ru: "Вы отвечаете на вопрос" },
        ellos: { es: "Ellos responden la pregunta", ru: "Они отвечают на вопрос" }
      },
      past: {
        yo: { es: "Yo respondí la pregunta", ru: "Я ответил на вопрос" },
        tú: { es: "Tú respondiste la pregunta", ru: "Ты ответил на вопрос" },
        él: { es: "Él respondió la pregunta", ru: "Он ответил на вопрос" },
        nosotros: { es: "Nosotros respondimos la pregunta", ru: "Мы ответили на вопрос" },
        vosotros: { es: "Vosotros respondisteis la pregunta", ru: "Вы ответили на вопрос" },
        ellos: { es: "Ellos respondieron la pregunta", ru: "Они ответили на вопрос" }
      },
      future: {
        yo: { es: "Yo responderé la pregunta", ru: "Я отвечу на вопрос" },
        tú: { es: "Tú responderás la pregunta", ru: "Ты ответишь на вопрос" },
        él: { es: "Él responderá la pregunta", ru: "Он ответит на вопрос" },
        nosotros: { es: "Nosotros responderemos la pregunta", ru: "Мы ответим на вопрос" },
        vosotros: { es: "Vosotros responderéis la pregunta", ru: "Вы ответите на вопрос" },
        ellos: { es: "Ellos responderán la pregunta", ru: "Они ответят на вопрос" }
      }
    }
  },
  {
    id: 130,
    word: "entender",
    translation: "понимать",
    category: "verbs",
    type: "глагол",
    popularity: 130,
    examples: {
      present: {
        yo: { es: "Yo entiendo español", ru: "Я понимаю испанский" },
        tú: { es: "Tú entiendes español", ru: "Ты понимаешь испанский" },
        él: { es: "Él entiende español", ru: "Он понимает испанский" },
        nosotros: { es: "Nosotros entendemos español", ru: "Мы понимаем испанский" },
        vosotros: { es: "Vosotros entendéis español", ru: "Вы понимаете испанский" },
        ellos: { es: "Ellos entienden español", ru: "Они понимают испанский" }
      },
      past: {
        yo: { es: "Yo entendí español", ru: "Я понимал испанский" },
        tú: { es: "Tú entendiste español", ru: "Ты понимал испанский" },
        él: { es: "Él entendió español", ru: "Он понимал испанский" },
        nosotros: { es: "Nosotros entendimos español", ru: "Мы понимали испанский" },
        vosotros: { es: "Vosotros entendisteis español", ru: "Вы понимали испанский" },
        ellos: { es: "Ellos entendieron español", ru: "Они понимали испанский" }
      },
      future: {
        yo: { es: "Yo entenderé español", ru: "Я буду понимать испанский" },
        tú: { es: "Tú entenderás español", ru: "Ты будешь понимать испанский" },
        él: { es: "Él entenderá español", ru: "Он будет понимать испанский" },
        nosotros: { es: "Nosotros entenderemos español", ru: "Мы будем понимать испанский" },
        vosotros: { es: "Vosotros entenderéis español", ru: "Вы будете понимать испанский" },
        ellos: { es: "Ellos entenderán español", ru: "Они будут понимать испанский" }
      }
    }
  },
  {
    id: 131,
    word: "amar",
    translation: "любить",
    category: "verbs",
    type: "глагол",
    popularity: 131,
    examples: {
      present: {
        yo: { es: "Yo amo a mi familia", ru: "Я люблю свою семью" },
        tú: { es: "Tú amas a tu familia", ru: "Ты любишь свою семью" },
        él: { es: "Él ama a su familia", ru: "Он любит свою семью" },
        nosotros: { es: "Nosotros amamos a nuestra familia", ru: "Мы любим свою семью" },
        vosotros: { es: "Vosotros amáis a vuestra familia", ru: "Вы любите свою семью" },
        ellos: { es: "Ellos aman a su familia", ru: "Они любят свою семью" }
      },
      past: {
        yo: { es: "Yo amé a mi familia", ru: "Я любил свою семью" },
        tú: { es: "Tú amaste a tu familia", ru: "Ты любил свою семью" },
        él: { es: "Él amó a su familia", ru: "Он любил свою семью" },
        nosotros: { es: "Nosotros amamos a nuestra familia", ru: "Мы любили свою семью" },
        vosotros: { es: "Vosotros amasteis a vuestra familia", ru: "Вы любили свою семью" },
        ellos: { es: "Ellos amaron a su familia", ru: "Они любили свою семью" }
      },
      future: {
        yo: { es: "Yo amaré a mi familia", ru: "Я буду любить свою семью" },
        tú: { es: "Tú amarás a tu familia", ru: "Ты будешь любить свою семью" },
        él: { es: "Él amará a su familia", ru: "Он будет любить свою семью" },
        nosotros: { es: "Nosotros amaremos a nuestra familia", ru: "Мы будем любить свою семью" },
        vosotros: { es: "Vosotros amaréis a vuestra familia", ru: "Вы будете любить свою семью" },
        ellos: { es: "Ellos amarán a su familia", ru: "Они будут любить свою семью" }
      }
    }
  },
  {
    id: 132,
    word: "odiar",
    translation: "ненавидеть",
    category: "verbs",
    type: "глагол",
    popularity: 132,
    examples: {
      present: {
        yo: { es: "Yo odio el frío", ru: "Я ненавижу холод" },
        tú: { es: "Tú odias el frío", ru: "Ты ненавидишь холод" },
        él: { es: "Él odia el frío", ru: "Он ненавидит холод" },
        nosotros: { es: "Nosotros odiamos el frío", ru: "Мы ненавидим холод" },
        vosotros: { es: "Vosotros odiáis el frío", ru: "Вы ненавидите холод" },
        ellos: { es: "Ellos odian el frío", ru: "Они ненавидят холод" }
      },
      past: {
        yo: { es: "Yo odié el frío", ru: "Я ненавидел холод" },
        tú: { es: "Tú odiaste el frío", ru: "Ты ненавидел холод" },
        él: { es: "Él odió el frío", ru: "Он ненавидел холод" },
        nosotros: { es: "Nosotros odiamos el frío", ru: "Мы ненавидели холод" },
        vosotros: { es: "Vosotros odiasteis el frío", ru: "Вы ненавидели холод" },
        ellos: { es: "Ellos odiaron el frío", ru: "Они ненавидели холод" }
      },
      future: {
        yo: { es: "Yo odiaré el frío", ru: "Я буду ненавидеть холод" },
        tú: { es: "Tú odiarás el frío", ru: "Ты будешь ненавидеть холод" },
        él: { es: "Él odiará el frío", ru: "Он будет ненавидеть холод" },
        nosotros: { es: "Nosotros odiaremos el frío", ru: "Мы будем ненавидеть холод" },
        vosotros: { es: "Vosotros odiaréis el frío", ru: "Вы будете ненавидеть холод" },
        ellos: { es: "Ellos odiarán el frío", ru: "Они будут ненавидеть холод" }
      }
    }
  },
  {
    id: 133,
    word: "necesitar",
    translation: "нуждаться",
    category: "verbs",
    type: "глагол",
    popularity: 133,
    examples: {
      present: {
        yo: { es: "Yo necesito ayuda", ru: "Мне нужна помощь" },
        tú: { es: "Tú necesitas ayuda", ru: "Тебе нужна помощь" },
        él: { es: "Él necesita ayuda", ru: "Ему нужна помощь" },
        nosotros: { es: "Nosotros necesitamos ayuda", ru: "Нам нужна помощь" },
        vosotros: { es: "Vosotros necesitáis ayuda", ru: "Вам нужна помощь" },
        ellos: { es: "Ellos necesitan ayuda", ru: "Им нужна помощь" }
      },
      past: {
        yo: { es: "Yo necesité ayuda", ru: "Мне нужна была помощь" },
        tú: { es: "Tú necesitaste ayuda", ru: "Тебе нужна была помощь" },
        él: { es: "Él necesitó ayuda", ru: "Ему нужна была помощь" },
        nosotros: { es: "Nosotros necesitamos ayuda", ru: "Нам нужна была помощь" },
        vosotros: { es: "Vosotros necesitasteis ayuda", ru: "Вам нужна была помощь" },
        ellos: { es: "Ellos necesitaron ayuda", ru: "Им нужна была помощь" }
      },
      future: {
        yo: { es: "Yo necesitaré ayuda", ru: "Мне понадобится помощь" },
        tú: { es: "Tú necesitarás ayuda", ru: "Тебе понадобится помощь" },
        él: { es: "Él necesitará ayuda", ru: "Ему понадобится помощь" },
        nosotros: { es: "Nosotros necesitaremos ayuda", ru: "Нам понадобится помощь" },
        vosotros: { es: "Vosotros necesitaréis ayuda", ru: "Вам понадобится помощь" },
        ellos: { es: "Ellos necesitarán ayuda", ru: "Им понадобится помощь" }
      }
    }
  },
  {
    id: 134,
    word: "usar",
    translation: "использовать",
    category: "verbs",
    type: "глагол",
    popularity: 134,
    examples: {
      present: {
        yo: { es: "Yo uso el ordenador", ru: "Я использую компьютер" },
        tú: { es: "Tú usas el ordenador", ru: "Ты используешь компьютер" },
        él: { es: "Él usa el ordenador", ru: "Он использует компьютер" },
        nosotros: { es: "Nosotros usamos el ordenador", ru: "Мы используем компьютер" },
        vosotros: { es: "Vosotros usáis el ordenador", ru: "Вы используете компьютер" },
        ellos: { es: "Ellos usan el ordenador", ru: "Они используют компьютер" }
      },
      past: {
        yo: { es: "Yo usé el ordenador", ru: "Я использовал компьютер" },
        tú: { es: "Tú usaste el ordenador", ru: "Ты использовал компьютер" },
        él: { es: "Él usó el ordenador", ru: "Он использовал компьютер" },
        nosotros: { es: "Nosotros usamos el ordenador", ru: "Мы использовали компьютер" },
        vosotros: { es: "Vosotros usasteis el ordenador", ru: "Вы использовали компьютер" },
        ellos: { es: "Ellos usaron el ordenador", ru: "Они использовали компьютер" }
      },
      future: {
        yo: { es: "Yo usaré el ordenador", ru: "Я буду использовать компьютер" },
        tú: { es: "Tú usarás el ordenador", ru: "Ты будешь использовать компьютер" },
        él: { es: "Él usará el ordenador", ru: "Он будет использовать компьютер" },
        nosotros: { es: "Nosotros usaremos el ordenador", ru: "Мы будем использовать компьютер" },
        vosotros: { es: "Vosotros usaréis el ordenador", ru: "Вы будете использовать компьютер" },
        ellos: { es: "Ellos usarán el ordenador", ru: "Они будут использовать компьютер" }
      }
    }
  },
  {
    id: 135,
    word: "aprender",
    translation: "учить, изучать",
    category: "verbs",
    type: "глагол",
    popularity: 135,
    examples: {
      present: {
        yo: { es: "Yo aprendo idiomas", ru: "Я учу языки" },
        tú: { es: "Tú aprendes idiomas", ru: "Ты учишь языки" },
        él: { es: "Él aprende idiomas", ru: "Он учит языки" },
        nosotros: { es: "Nosotros aprendemos idiomas", ru: "Мы учим языки" },
        vosotros: { es: "Vosotros aprendéis idiomas", ru: "Вы учите языки" },
        ellos: { es: "Ellos aprenden idiomas", ru: "Они учат языки" }
      },
      past: {
        yo: { es: "Yo aprendí idiomas", ru: "Я учил языки" },
        tú: { es: "Tú aprendiste idiomas", ru: "Ты учил языки" },
        él: { es: "Él aprendió idiomas", ru: "Он учил языки" },
        nosotros: { es: "Nosotros aprendimos idiomas", ru: "Мы учили языки" },
        vosotros: { es: "Vosotros aprendisteis idiomas", ru: "Вы учили языки" },
        ellos: { es: "Ellos aprendieron idiomas", ru: "Они учили языки" }
      },
      future: {
        yo: { es: "Yo aprenderé idiomas", ru: "Я буду учить языки" },
        tú: { es: "Tú aprenderás idiomas", ru: "Ты будешь учить языки" },
        él: { es: "Él aprenderá idiomas", ru: "Он будет учить языки" },
        nosotros: { es: "Nosotros aprenderemos idiomas", ru: "Мы будем учить языки" },
        vosotros: { es: "Vosotros aprenderéis idiomas", ru: "Вы будете учить языки" },
        ellos: { es: "Ellos aprenderán idiomas", ru: "Они будут учить языки" }
      }
    }
  },
  {
    id: 136,
    word: "enseñar",
    translation: "учить, преподавать",
    category: "verbs",
    type: "глагол",
    popularity: 136,
    examples: {
      present: {
        yo: { es: "Yo enseño matemáticas", ru: "Я преподаю математику" },
        tú: { es: "Tú enseñas matemáticas", ru: "Ты преподаёшь математику" },
        él: { es: "Él enseña matemáticas", ru: "Он преподаёт математику" },
        nosotros: { es: "Nosotros enseñamos matemáticas", ru: "Мы преподаём математику" },
        vosotros: { es: "Vosotros enseñáis matemáticas", ru: "Вы преподаёте математику" },
        ellos: { es: "Ellos enseñan matemáticas", ru: "Они преподают математику" }
      },
      past: {
        yo: { es: "Yo enseñé matemáticas", ru: "Я преподавал математику" },
        tú: { es: "Tú enseñaste matemáticas", ru: "Ты преподавал математику" },
        él: { es: "Él enseñó matemáticas", ru: "Он преподавал математику" },
        nosotros: { es: "Nosotros enseñamos matemáticas", ru: "Мы преподавали математику" },
        vosotros: { es: "Vosotros enseñasteis matemáticas", ru: "Вы преподавали математику" },
        ellos: { es: "Ellos enseñaron matemáticas", ru: "Они преподавали математику" }
      },
      future: {
        yo: { es: "Yo enseñaré matemáticas", ru: "Я буду преподавать математику" },
        tú: { es: "Tú enseñarás matemáticas", ru: "Ты будешь преподавать математику" },
        él: { es: "Él enseñará matemáticas", ru: "Он будет преподавать математику" },
        nosotros: { es: "Nosotros enseñaremos matemáticas", ru: "Мы будем преподавать математику" },
        vosotros: { es: "Vosotros enseñaréis matemáticas", ru: "Вы будете преподавать математику" },
        ellos: { es: "Ellos enseñarán matemáticas", ru: "Они будут преподавать математику" }
      }
    }
  },
  {
    id: 137,
    word: "jugar",
    translation: "играть",
    category: "verbs",
    type: "глагол",
    popularity: 137,
    examples: {
      present: {
        yo: { es: "Yo juego fútbol", ru: "Я играю в футбол" },
        tú: { es: "Tú juegas fútbol", ru: "Ты играешь в футбол" },
        él: { es: "Él juega fútbol", ru: "Он играет в футбол" },
        nosotros: { es: "Nosotros jugamos fútbol", ru: "Мы играем в футбол" },
        vosotros: { es: "Vosotros jugáis fútbol", ru: "Вы играете в футбол" },
        ellos: { es: "Ellos juegan fútbol", ru: "Они играют в футбол" }
      },
      past: {
        yo: { es: "Yo jugué fútbol", ru: "Я играл в футбол" },
        tú: { es: "Tú jugaste fútbol", ru: "Ты играл в футбол" },
        él: { es: "Él jugó fútbol", ru: "Он играл в футбол" },
        nosotros: { es: "Nosotros jugamos fútbol", ru: "Мы играли в футбол" },
        vosotros: { es: "Vosotros jugasteis fútbol", ru: "Вы играли в футбол" },
        ellos: { es: "Ellos jugaron fútbol", ru: "Они играли в футбол" }
      },
      future: {
        yo: { es: "Yo jugaré fútbol", ru: "Я буду играть в футбол" },
        tú: { es: "Tú jugarás fútbol", ru: "Ты будешь играть в футбол" },
        él: { es: "Él jugará fútbol", ru: "Он будет играть в футбол" },
        nosotros: { es: "Nosotros jugaremos fútbol", ru: "Мы будем играть в футбол" },
        vosotros: { es: "Vosotros jugaréis fútbol", ru: "Вы будете играть в футбол" },
        ellos: { es: "Ellos jugarán fútbol", ru: "Они будут играть в футбол" }
      }
    }
  },
  {
    id: 138,
    word: "cantar",
    translation: "петь",
    category: "verbs",
    type: "глагол",
    popularity: 138,
    examples: {
      present: {
        yo: { es: "Yo canto una canción", ru: "Я пою песню" },
        tú: { es: "Tú cantas una canción", ru: "Ты поёшь песню" },
        él: { es: "Él canta una canción", ru: "Он поёт песню" },
        nosotros: { es: "Nosotros cantamos una canción", ru: "Мы поём песню" },
        vosotros: { es: "Vosotros cantáis una canción", ru: "Вы поёте песню" },
        ellos: { es: "Ellos cantan una canción", ru: "Они поют песню" }
      },
      past: {
        yo: { es: "Yo canté una canción", ru: "Я пел песню" },
        tú: { es: "Tú cantaste una canción", ru: "Ты пел песню" },
        él: { es: "Él cantó una canción", ru: "Он пел песню" },
        nosotros: { es: "Nosotros cantamos una canción", ru: "Мы пели песню" },
        vosotros: { es: "Vosotros cantasteis una canción", ru: "Вы пели песню" },
        ellos: { es: "Ellos cantaron una canción", ru: "Они пели песню" }
      },
      future: {
        yo: { es: "Yo cantaré una canción", ru: "Я буду петь песню" },
        tú: { es: "Tú cantarás una canción", ru: "Ты будешь петь песню" },
        él: { es: "Él cantará una canción", ru: "Он будет петь песню" },
        nosotros: { es: "Nosotros cantaremos una canción", ru: "Мы будем петь песню" },
        vosotros: { es: "Vosotros cantaréis una canción", ru: "Вы будете петь песню" },
        ellos: { es: "Ellos cantarán una canción", ru: "Они будут петь песню" }
      }
    }
  },
  {
    id: 139,
    word: "bailar",
    translation: "танцевать",
    category: "verbs",
    type: "глагол",
    popularity: 139,
    examples: {
      present: {
        yo: { es: "Yo bailo salsa", ru: "Я танцую сальсу" },
        tú: { es: "Tú bailas salsa", ru: "Ты танцуешь сальсу" },
        él: { es: "Él baila salsa", ru: "Он танцует сальсу" },
        nosotros: { es: "Nosotros bailamos salsa", ru: "Мы танцуем сальсу" },
        vosotros: { es: "Vosotros bailáis salsa", ru: "Вы танцуете сальсу" },
        ellos: { es: "Ellos bailan salsa", ru: "Они танцуют сальсу" }
      },
      past: {
        yo: { es: "Yo bailé salsa", ru: "Я танцевал сальсу" },
        tú: { es: "Tú bailaste salsa", ru: "Ты танцевал сальсу" },
        él: { es: "Él bailó salsa", ru: "Он танцевал сальсу" },
        nosotros: { es: "Nosotros bailamos salsa", ru: "Мы танцевали сальсу" },
        vosotros: { es: "Vosotros bailasteis salsa", ru: "Вы танцевали сальсу" },
        ellos: { es: "Ellos bailaron salsa", ru: "Они танцевали сальсу" }
      },
      future: {
        yo: { es: "Yo bailaré salsa", ru: "Я буду танцевать сальсу" },
        tú: { es: "Tú bailarás salsa", ru: "Ты будешь танцевать сальсу" },
        él: { es: "Él bailará salsa", ru: "Он будет танцевать сальсу" },
        nosotros: { es: "Nosotros bailaremos salsa", ru: "Мы будем танцевать сальсу" },
        vosotros: { es: "Vosotros bailaréis salsa", ru: "Вы будете танцевать сальсу" },
        ellos: { es: "Elios bailarán salsa", ru: "Они будут танцевать сальсу" }
      }
    }
  },
  {
    id: 140,
    word: "correr",
    translation: "бегать",
    category: "verbs",
    type: "глагол",
    popularity: 140,
    examples: {
      present: {
        yo: { es: "Yo corro en el parque", ru: "Я бегаю в парке" },
        tú: { es: "Tú corres en el parque", ru: "Ты бегаешь в парке" },
        él: { es: "Él corre en el parque", ru: "Он бегает в парке" },
        nosotros: { es: "Nosotros corremos en el parque", ru: "Мы бегаем в парке" },
        vosotros: { es: "Vosotros corréis en el parque", ru: "Вы бегаете в парке" },
        ellos: { es: "Ellos corren en el parque", ru: "Они бегают в парке" }
      },
      past: {
        yo: { es: "Yo corrí en el parque", ru: "Я бегал в парке" },
        tú: { es: "Tú corriste en el parque", ru: "Ты бегал в парке" },
        él: { es: "Él corrió en el parque", ru: "Он бегал в парке" },
        nosotros: { es: "Nosotros corrimos en el parque", ru: "Мы бегали в парке" },
        vosotros: { es: "Vosotros corristeis en el parque", ru: "Вы бегали в парке" },
        ellos: { es: "Ellos corrieron en el parque", ru: "Они бегали в парке" }
      },
      future: {
        yo: { es: "Yo correré en el parque", ru: "Я буду бегать в парке" },
        tú: { es: "Tú correrás en el parque", ru: "Ты будешь бегать в парке" },
        él: { es: "Él correrá en el parque", ru: "Он будет бегать в парке" },
        nosotros: { es: "Nosotros correremos en el parque", ru: "Мы будем бегать в парке" },
        vosotros: { es: "Vosotros correréis en el parque", ru: "Вы будете бегать в парке" },
        ellos: { es: "Ellos correrán en el parque", ru: "Они будут бегать в парке" }
      }
    }
  },
  {
    id: 141,
    word: "caminar",
    translation: "ходить, гулять",
    category: "verbs",
    type: "глагол",
    popularity: 141,
    examples: {
      present: {
        yo: { es: "Yo camino por la playa", ru: "Я гуляю по пляжу" },
        tú: { es: "Tú caminas por la playa", ru: "Ты гуляешь по пляжу" },
        él: { es: "Él camina por la playa", ru: "Он гуляет по пляжу" },
        nosotros: { es: "Nosotros caminamos por la playa", ru: "Мы гуляем по пляжу" },
        vosotros: { es: "Vosotros camináis por la playa", ru: "Вы гуляете по пляжу" },
        ellos: { es: "Ellos caminan por la playa", ru: "Они гуляют по пляжу" }
      },
      past: {
        yo: { es: "Yo caminé por la playa", ru: "Я гулял по пляжу" },
        tú: { es: "Tú caminaste por la playa", ru: "Ты гулял по пляжу" },
        él: { es: "Él caminó por la playa", ru: "Он гулял по пляжу" },
        nosotros: { es: "Nosotros caminamos por la playa", ru: "Мы гуляли по пляжу" },
        vosotros: { es: "Vosotros caminasteis por la playa", ru: "Вы гуляли по пляжу" },
        ellos: { es: "Ellos caminaron por la playa", ru: "Они гуляли по пляжу" }
      },
      future: {
        yo: { es: "Yo caminaré por la playa", ru: "Я буду гулять по пляжу" },
        tú: { es: "Tú caminarás por la playa", ru: "Ты будешь гулять по пляжу" },
        él: { es: "Él caminará por la playa", ru: "Он будет гулять по пляжу" },
        nosotros: { es: "Nosotros caminaremos por la playa", ru: "Мы будем гулять по пляжу" },
        vosotros: { es: "Vosotros caminaréis por la playa", ru: "Вы будете гулять по пляжу" },
        ellos: { es: "Ellos caminarán por la playa", ru: "Они будут гулять по пляжу" }
      }
    }
  },
  {
    id: 142,
    word: "nadar",
    translation: "плавать",
    category: "verbs",
    type: "глагол",
    popularity: 142,
    examples: {
      present: {
        yo: { es: "Yo nado en la piscina", ru: "Я плаваю в бассейне" },
        tú: { es: "Tú nadas en la piscina", ru: "Ты плаваешь в бассейне" },
        él: { es: "Él nada en la piscina", ru: "Он плавает в бассейне" },
        nosotros: { es: "Nosotros nadamos en la piscina", ru: "Мы плаваем в бассейне" },
        vosotros: { es: "Vosotros nadáis en la piscina", ru: "Вы плаваете в бассейне" },
        ellos: { es: "Ellos nadan en la piscina", ru: "Они плавают в бассейне" }
      },
      past: {
        yo: { es: "Yo nadé en la piscina", ru: "Я плавал в бассейне" },
        tú: { es: "Tú nadaste en la piscina", ru: "Ты плавал в бассейне" },
        él: { es: "Él nadó en la piscina", ru: "Он плавал в бассейне" },
        nosotros: { es: "Nosotros nadamos en la piscina", ru: "Мы плавали в бассейне" },
        vosotros: { es: "Vosotros nadasteis en la piscina", ru: "Вы плавали в бассейне" },
        ellos: { es: "Ellos nadaron en la piscina", ru: "Они плавали в бассейне" }
      },
      future: {
        yo: { es: "Yo nadaré en la piscina", ru: "Я буду плавать в бассейне" },
        tú: { es: "Tú nadarás en la piscina", ru: "Ты будешь плавать в бассейне" },
        él: { es: "Él nadará en la piscina", ru: "Он будет плавать в бассейне" },
        nosotros: { es: "Nosotros nadaremos en la piscina", ru: "Мы будем плавать в бассейне" },
        vosotros: { es: "Vosotros nadaréis en la piscina", ru: "Вы будете плавать в бассейне" },
        ellos: { es: "Ellos nadarán en la piscina", ru: "Они будут плавать в бассейне" }
      }
    }
  },
  {
    id: 143,
    word: "viajar",
    translation: "путешествовать",
    category: "travel",
    type: "глагол",
    popularity: 143,
    examples: {
      present: {
        yo: { es: "Yo viajo por Europa", ru: "Я путешествую по Европе" },
        tú: { es: "Tú viajas por Europa", ru: "Ты путешествуешь по Европе" },
        él: { es: "Él viaja por Europa", ru: "Он путешествует по Европе" },
        nosotros: { es: "Nosotros viajamos por Europa", ru: "Мы путешествуем по Европе" },
        vosotros: { es: "Vosotros viajáis por Europa", ru: "Вы путешествуете по Европе" },
        ellos: { es: "Ellos viajan por Europa", ru: "Они путешествуют по Европе" }
      },
      past: {
        yo: { es: "Yo viajé por Europa", ru: "Я путешествовал по Европе" },
        tú: { es: "Tú viajaste por Europa", ru: "Ты путешествовал по Европе" },
        él: { es: "Él viajó por Europa", ru: "Он путешествовал по Европе" },
        nosotros: { es: "Nosotros viajamos por Europa", ru: "Мы путешествовали по Европе" },
        vosotros: { es: "Vosotros viajasteis por Europa", ru: "Вы путешествовали по Европе" },
        ellos: { es: "Ellos viajaron por Europa", ru: "Они путешествовали по Европе" }
      },
      future: {
        yo: { es: "Yo viajaré por Europa", ru: "Я буду путешествовать по Европе" },
        tú: { es: "Tú viajarás por Europa", ru: "Ты будешь путешествовать по Европе" },
        él: { es: "Él viajará por Europa", ru: "Он будет путешествовать по Европе" },
        nosotros: { es: "Nosotros viajaremos por Europa", ru: "Мы будем путешествовать по Европе" },
        vosotros: { es: "Vosotros viajaréis por Europa", ru: "Вы будете путешествовать по Европе" },
        ellos: { es: "Ellos viajarán por Europa", ru: "Они будут путешествовать по Европе" }
      }
    }
  },
  {
    id: 144,
    word: "hotel",
    translation: "отель",
    category: "travel",
    type: "существительное",
    popularity: 144,
    examples: {
      present: { es: "El hotel es cómodo", ru: "Отель удобный" },
      past: { es: "El hotel era cómodo", ru: "Отель был удобным" },
      future: { es: "El hotel será cómodo", ru: "Отель будет удобным" }
    }
  },
  {
    id: 145,
    word: "avión",
    translation: "самолёт",
    category: "travel",
    type: "существительное",
    popularity: 145,
    examples: {
      present: { es: "El avión sale a las tres", ru: "Самолёт вылетает в три" },
      past: { es: "El avión salió a las tres", ru: "Самолёт вылетел в три" },
      future: { es: "El avión saldrá a las tres", ru: "Самолёт вылетит в три" }
    }
  },
  {
    id: 146,
    word: "tren",
    translation: "поезд",
    category: "travel",
    type: "существительное",
    popularity: 146,
    examples: {
      present: { es: "El tren es rápido", ru: "Поезд быстрый" },
      past: { es: "El tren era rápido", ru: "Поезд был быстрым" },
      future: { es: "El tren será rápido", ru: "Поезд будет быстрым" }
    }
  },
  {
    id: 147,
    word: "coche",
    translation: "машина",
    category: "travel",
    type: "существительное",
    popularity: 147,
    examples: {
      present: { es: "Mi coche es nuevo", ru: "Моя машина новая" },
      past: { es: "Mi coche era viejo", ru: "Моя машина была старой" },
      future: { es: "Mi coche será eléctrico", ru: "Моя машина будет электрической" }
    }
  },
  {
    id: 148,
    word: "autobús",
    translation: "автобус",
    category: "travel",
    type: "существительное",
    popularity: 148,
    examples: {
      present: { es: "El autobús llega tarde", ru: "Автобус опаздывает" },
      past: { es: "El autobús llegó tarde", ru: "Автобус опоздал" },
      future: { es: "El autobús llegará tarde", ru: "Автобус опоздает" }
    }
  },
  {
    id: 149,
    word: "abuelo",
    translation: "дедушка",
    category: "family",
    type: "существительное",
    popularity: 149,
    examples: {
      present: { es: "Mi abuelo es sabio", ru: "Мой дедушка мудрый" },
      past: { es: "Mi abuelo era sabio", ru: "Мой дедушка был мудрым" },
      future: { es: "Mi abuelo será feliz", ru: "Мой дедушка будет счастлив" }
    }
  },
  {
    id: 150,
    word: "abuela",
    translation: "бабушка",
    category: "family",
    type: "существительное",
    popularity: 150,
    examples: {
      present: { es: "Mi abuela cocina bien", ru: "Моя бабушка хорошо готовит" },
      past: { es: "Mi abuela cocinaba bien", ru: "Моя бабушка хорошо готовила" },
      future: { es: "Mi abuela cocinará bien", ru: "Моя бабушка будет хорошо готовить" }
    }
  },
  {
    id: 151,
    word: "tío",
    translation: "дядя",
    category: "family",
    type: "существительное",
    popularity: 151,
    examples: {
      present: { es: "Mi tío vive lejos", ru: "Мой дядя живёт далеко" },
      past: { es: "Mi tío vivía cerca", ru: "Мой дядя жил близко" },
      future: { es: "Mi tío vivirá aquí", ru: "Мой дядя будет жить здесь" }
    }
  },
  {
    id: 152,
    word: "tía",
    translation: "тётя",
    category: "family",
    type: "существительное",
    popularity: 152,
    examples: {
      present: { es: "Mi tía es amable", ru: "Моя тётя добрая" },
      past: { es: "Mi tía era amable", ru: "Моя тётя была доброй" },
      future: { es: "Mi tía será amable", ru: "Моя тётя будет доброй" }
    }
  },
  {
    id: 153,
    word: "primo",
    translation: "двоюродный брат",
    category: "family",
    type: "существительное",
    popularity: 153,
    examples: {
      present: { es: "Mi primo estudia medicina", ru: "Мой двоюродный брат изучает медицину" },
      past: { es: "Mi primo estudiaba derecho", ru: "Мой двоюродный брат изучал право" },
      future: { es: "Mi primo estudiará ingeniería", ru: "Мой двоюродный брат будет изучать инженерию" }
    }
  },
  {
    id: 154,
    word: "prima",
    translation: "двоюродная сестра",
    category: "family",
    type: "существительное",
    popularity: 154,
    examples: {
      present: { es: "Mi prima vive en París", ru: "Моя двоюродная сестра живёт в Париже" },
      past: { es: "Mi prima vivía en Londres", ru: "Моя двоюродная сестра жила в Лондоне" },
      future: { es: "Mi prima vivirá en Roma", ru: "Моя двоюродная сестра будет жить в Риме" }
    }
  },
  {
    id: 155,
    word: "esposo",
    translation: "муж",
    category: "family",
    type: "существительное",
    popularity: 155,
    examples: {
      present: { es: "Mi esposo trabaja mucho", ru: "Мой муж много работает" },
      past: { es: "Mi esposo trabajaba poco", ru: "Мой муж мало работал" },
      future: { es: "Mi esposo trabajará desde casa", ru: "Мой муж будет работать из дома" }
    }
  },
  {
    id: 156,
    word: "esposa",
    translation: "жена",
    category: "family",
    type: "существительное",
    popularity: 156,
    examples: {
      present: { es: "Mi esposa es doctora", ru: "Моя жена врач" },
      past: { es: "Mi esposa era enfermera", ru: "Моя жена была медсестрой" },
      future: { es: "Mi esposa será directora", ru: "Моя жена будет директором" }
    }
  },
  {
    id: 157,
    word: "mesa",
    translation: "стол",
    category: "home",
    type: "существительное",
    popularity: 157,
    examples: {
      present: { es: "La mesa es de madera", ru: "Стол деревянный" },
      past: { es: "La mesa era de metal", ru: "Стол был металлическим" },
      future: { es: "La mesa será de cristal", ru: "Стол будет стеклянным" }
    }
  },
  {
    id: 158,
    word: "silla",
    translation: "стул",
    category: "home",
    type: "существительное",
    popularity: 158,
    examples: {
      present: { es: "La silla es cómoda", ru: "Стул удобный" },
      past: { es: "La silla era incómoda", ru: "Стул был неудобным" },
      future: { es: "La silla será nueva", ru: "Стул будет новым" }
    }
  },
  {
    id: 159,
    word: "cama",
    translation: "кровать",
    category: "home",
    type: "существительное",
    popularity: 159,
    examples: {
      present: { es: "La cama es grande", ru: "Кровать большая" },
      past: { es: "La cama era pequeña", ru: "Кровать была маленькой" },
      future: { es: "La cama será doble", ru: "Кровать будет двуспальной" }
    }
  },
  {
    id: 160,
    word: "sofá",
    translation: "диван",
    category: "home",
    type: "существительное",
    popularity: 160,
    examples: {
      present: { es: "El sofá es suave", ru: "Диван мягкий" },
      past: { es: "El sofá era duro", ru: "Диван был жёстким" },
      future: { es: "El sofá será cómodo", ru: "Диван будет удобным" }
    }
  },
  {
    id: 161,
    word: "jardín",
    translation: "сад",
    category: "home",
    type: "существительное",
    popularity: 161,
    examples: {
      present: { es: "El jardín es hermoso", ru: "Сад красивый" },
      past: { es: "El jardín era descuidado", ru: "Сад был запущенным" },
      future: { es: "El jardín será verde", ru: "Сад будет зелёным" }
    }
  },
  {
    id: 162,
    word: "parque",
    translation: "парк",
    category: "city",
    type: "существительное",
    popularity: 162,
    examples: {
      present: { es: "El parque está lleno", ru: "Парк полон" },
      past: { es: "El parque estaba vacío", ru: "Парк был пустым" },
      future: { es: "El parque estará renovado", ru: "Парк будет отремонтирован" }
    }
  },
  {
    id: 163,
    word: "plaza",
    translation: "площадь",
    category: "city",
    type: "существительное",
    popularity: 163,
    examples: {
      present: { es: "La plaza es grande", ru: "Площадь большая" },
      past: { es: "La plaza era pequeña", ru: "Площадь была маленькой" },
      future: { es: "La plaza será moderna", ru: "Площадь будет современной" }
    }
  },
  {
    id: 164,
    word: "banco",
    translation: "банк, скамейка",
    category: "city",
    type: "существительное",
    popularity: 164,
    examples: {
      present: { es: "El banco está cerrado", ru: "Банк закрыт" },
      past: { es: "El banco estaba abierto", ru: "Банк был открыт" },
      future: { es: "El banco estará renovado", ru: "Банк будет отремонтирован" }
    }
  },
  {
    id: 165,
    word: "hospital",
    translation: "больница",
    category: "city",
    type: "существительное",
    popularity: 165,
    examples: {
      present: { es: "El hospital es nuevo", ru: "Больница новая" },
      past: { es: "El hospital era viejo", ru: "Больница была старой" },
      future: { es: "El hospital será moderno", ru: "Больница будет современной" }
    }
  },
  {
    id: 166,
    word: "escuela",
    translation: "школа",
    category: "city",
    type: "существительное",
    popularity: 166,
    examples: {
      present: { es: "La escuela es grande", ru: "Школа большая" },
      past: { es: "La escuela era pequeña", ru: "Школа была маленькой" },
      future: { es: "La escuela será digital", ru: "Школа будет цифровой" }
    }
  },
  {
    id: 167,
    word: "universidad",
    translation: "университет",
    category: "city",
    type: "существительное",
    popularity: 167,
    examples: {
      present: { es: "La universidad es prestigiosa", ru: "Университет престижный" },
      past: { es: "La universidad era antigua", ru: "Университет был старинным" },
      future: { es: "La universidad será famosa", ru: "Университет будет знаменитым" }
    }
  },
  {
    id: 168,
    word: "café",
    translation: "кофе, кафе",
    category: "food",
    type: "существительное",
    popularity: 168,
    examples: {
      present: { es: "El café está caliente", ru: "Кофе горячий" },
      past: { es: "El café estaba frío", ru: "Кофе был холодным" },
      future: { es: "El café estará listo", ru: "Кофе будет готов" }
    }
  },
  {
    id: 169,
    word: "té",
    translation: "чай",
    category: "food",
    type: "существительное",
    popularity: 169,
    examples: {
      present: { es: "El té es verde", ru: "Чай зелёный" },
      past: { es: "El té era negro", ru: "Чай был чёрным" },
      future: { es: "El té será de menta", ru: "Чай будет мятным" }
    }
  },
  {
    id: 170,
    word: "leche",
    translation: "молоко",
    category: "food",
    type: "существительное",
    popularity: 170,
    examples: {
      present: { es: "La leche está fresca", ru: "Молоко свежее" },
      past: { es: "La leche estaba agria", ru: "Молоко было кислым" },
      future: { es: "La leche estará fría", ru: "Молоко будет холодным" }
    }
  },
  {
    id: 171,
    word: "queso",
    translation: "сыр",
    category: "food",
    type: "существительное",
    popularity: 171,
    examples: {
      present: { es: "El queso es delicioso", ru: "Сыр вкусный" },
      past: { es: "El queso era suave", ru: "Сыр был мягким" },
      future: { es: "El queso será curado", ru: "Сыр будет выдержанным" }
    }
  },
  {
    id: 172,
    word: "huevo",
    translation: "яйцо",
    category: "food",
    type: "существительное",
    popularity: 172,
    examples: {
      present: { es: "El huevo está cocido", ru: "Яйцо варёное" },
      past: { es: "El huevo estaba crudo", ru: "Яйцо было сырым" },
      future: { es: "El huevo estará frito", ru: "Яйцо будет жареным" }
    }
  },
  {
    id: 173,
    word: "pescado",
    translation: "рыба",
    category: "food",
    type: "существительное",
    popularity: 173,
    examples: {
      present: { es: "El pescado es fresco", ru: "Рыба свежая" },
      past: { es: "El pescado era congelado", ru: "Рыба была замороженной" },
      future: { es: "El pescado será asado", ru: "Рыба будет жареной" }
    }
  },
  {
    id: 174,
    word: "pollo",
    translation: "курица",
    category: "food",
    type: "существительное",
    popularity: 174,
    examples: {
      present: { es: "El pollo está jugoso", ru: "Курица сочная" },
      past: { es: "El pollo estaba seco", ru: "Курица была сухой" },
      future: { es: "El pollo estará asado", ru: "Курица будет жареной" }
    }
  },
  {
    id: 175,
    word: "arroz",
    translation: "рис",
    category: "food",
    type: "существительное",
    popularity: 175,
    examples: {
      present: { es: "El arroz está cocido", ru: "Рис варёный" },
      past: { es: "El arroz estaba crudo", ru: "Рис был сырым" },
      future: { es: "El arroz estará listo", ru: "Рис будет готов" }
    }
  },
  {
    id: 176,
    word: "verdura",
    translation: "овощ",
    category: "food",
    type: "существительное",
    popularity: 176,
    examples: {
      present: { es: "La verdura es fresca", ru: "Овощ свежий" },
      past: { es: "La verdura era orgánica", ru: "Овощ был органическим" },
      future: { es: "La verdura será local", ru: "Овощ будет местным" }
    }
  },
  {
    id: 177,
    word: "manzana",
    translation: "яблоко",
    category: "food",
    type: "существительное",
    popularity: 177,
    examples: {
      present: { es: "La manzana es roja", ru: "Яблоко красное" },
      past: { es: "La manzana era verde", ru: "Яблоко было зелёным" },
      future: { es: "La manzana será dulce", ru: "Яблоко будет сладким" }
    }
  },
  {
    id: 178,
    word: "naranja",
    translation: "апельсин",
    category: "food",
    type: "существительное",
    popularity: 178,
    examples: {
      present: { es: "La naranja es jugosa", ru: "Апельсин сочный" },
      past: { es: "La naranja era ácida", ru: "Апельсин был кислым" },
      future: { es: "La naranja será dulce", ru: "Апельсин будет сладким" }
    }
  },
  {
    id: 179,
    word: "plátano",
    translation: "банан",
    category: "food",
    type: "существительное",
    popularity: 179,
    examples: {
      present: { es: "El plátano es maduro", ru: "Банан спелый" },
      past: { es: "El plátano era verde", ru: "Банан был зелёным" },
      future: { es: "El plátano será amarillo", ru: "Банан будет жёлтым" }
    }
  },
  {
    id: 180,
    word: "río",
    translation: "река",
    category: "nature",
    type: "существительное",
    popularity: 180,
    examples: {
      present: { es: "El río es profundo", ru: "Река глубокая" },
      past: { es: "El río era ancho", ru: "Река была широкой" },
      future: { es: "El río será limpio", ru: "Река будет чистой" }
    }
  },
  {
    id: 181,
    word: "mar",
    translation: "море",
    category: "nature",
    type: "существительное",
    popularity: 181,
    examples: {
      present: { es: "El mar está tranquilo", ru: "Море спокойное" },
      past: { es: "El mar estaba agitado", ru: "Море было бурным" },
      future: { es: "El mar estará azul", ru: "Море будет синим" }
    }
  },
  {
    id: 182,
    word: "montaña",
    translation: "гора",
    category: "nature",
    type: "существительное",
    popularity: 182,
    examples: {
      present: { es: "La montaña es alta", ru: "Гора высокая" },
      past: { es: "La montaña era nevada", ru: "Гора была снежной" },
      future: { es: "La montaña será verde", ru: "Гора будет зелёной" }
    }
  },
  {
    id: 183,
    word: "cielo",
    translation: "небо",
    category: "nature",
    type: "существительное",
    popularity: 183,
    examples: {
      present: { es: "El cielo está despejado", ru: "Небо ясное" },
      past: { es: "El cielo estaba nublado", ru: "Небо было облачным" },
      future: { es: "El cielo estará estrellado", ru: "Небо будет звёздным" }
    }
  },
  {
    id: 184,
    word: "tierra",
    translation: "земля",
    category: "nature",
    type: "существительное",
    popularity: 184,
    examples: {
      present: { es: "La tierra es fértil", ru: "Земля плодородная" },
      past: { es: "La tierra era seca", ru: "Земля была сухой" },
      future: { es: "La tierra será húmeda", ru: "Земля будет влажной" }
    }
  },
  {
    id: 185,
    word: "piedra",
    translation: "камень",
    category: "nature",
    type: "существительное",
    popularity: 185,
    examples: {
      present: { es: "La piedra es dura", ru: "Камень твёрдый" },
      past: { es: "La piedra era grande", ru: "Камень был большим" },
      future: { es: "La piedra será pulida", ru: "Камень будет отполированным" }
    }
  },
  {
    id: 186,
    word: "fuego",
    translation: "огонь",
    category: "nature",
    type: "существительное",
    popularity: 186,
    examples: {
      present: { es: "El fuego está caliente", ru: "Огонь горячий" },
      past: { es: "El fuego estaba apagado", ru: "Огонь был потушен" },
      future: { es: "El fuego estará encendido", ru: "Огонь будет зажжён" }
    }
  },
  {
    id: 187,
    word: "viento",
    translation: "ветер",
    category: "weather",
    type: "существительное",
    popularity: 187,
    examples: {
      present: { es: "El viento es fuerte", ru: "Ветер сильный" },
      past: { es: "El viento era suave", ru: "Ветер был лёгким" },
      future: { es: "El viento será frío", ru: "Ветер будет холодным" }
    }
  },
  {
    id: 188,
    word: "lluvia",
    translation: "дождь",
    category: "weather",
    type: "существительное",
    popularity: 188,
    examples: {
      present: { es: "La lluvia es intensa", ru: "Дождь сильный" },
      past: { es: "La lluvia era ligera", ru: "Дождь был лёгким" },
      future: { es: "La lluvia será torrencial", ru: "Дождь будет проливным" }
    }
  },
  {
    id: 189,
    word: "nieve",
    translation: "снег",
    category: "weather",
    type: "существительное",
    popularity: 189,
    examples: {
      present: { es: "La nieve cae suave", ru: "Снег падает мягко" },
      past: { es: "La nieve caía fuerte", ru: "Снег падал сильно" },
      future: { es: "La nieve caerá mañana", ru: "Снег выпадет завтра" }
    }
  },
  {
    id: 190,
    word: "calor",
    translation: "жара",
    category: "weather",
    type: "существительное",
    popularity: 190,
    examples: {
      present: { es: "Hace mucho calor", ru: "Очень жарко" },
      past: { es: "Hacía mucho calor", ru: "Было очень жарко" },
      future: { es: "Hará mucho calor", ru: "Будет очень жарко" }
    }
  },
  {
    id: 191,
    word: "frío",
    translation: "холод",
    category: "weather",
    type: "существительное",
    popularity: 191,
    examples: {
      present: { es: "Hace frío hoy", ru: "Сегодня холодно" },
      past: { es: "Hacía frío ayer", ru: "Вчера было холодно" },
      future: { es: "Hará frío mañana", ru: "Завтра будет холодно" }
    }
  },
  {
    id: 192,
    word: "cabeza",
    translation: "голова",
    category: "body",
    type: "существительное",
    popularity: 192,
    examples: {
      present: { es: "Me duele la cabeza", ru: "У меня болит голова" },
      past: { es: "Me dolía la cabeza", ru: "У меня болела голова" },
      future: { es: "Me dolerá la cabeza", ru: "У меня будет болеть голова" }
    }
  },
  {
    id: 193,
    word: "mano",
    translation: "рука (кисть)",
    category: "body",
    type: "существительное",
    popularity: 193,
    examples: {
      present: { es: "Mi mano está fría", ru: "Моя рука холодная" },
      past: { es: "Mi mano estaba caliente", ru: "Моя рука была тёплой" },
      future: { es: "Mi mano estará limpia", ru: "Моя рука будет чистой" }
    }
  },
  {
    id: 194,
    word: "pie",
    translation: "нога (ступня)",
    category: "body",
    type: "существительное",
    popularity: 194,
    examples: {
      present: { es: "Mi pie duele", ru: "Моя нога болит" },
      past: { es: "Mi pie dolía", ru: "Моя нога болела" },
      future: { es: "Mi pie dolerá", ru: "Моя нога будет болеть" }
    }
  },
  {
    id: 195,
    word: "ojo",
    translation: "глаз",
    category: "body",
    type: "существительное",
    popularity: 195,
    examples: {
      present: { es: "Mi ojo es azul", ru: "Мой глаз голубой" },
      past: { es: "Mi ojo era verde", ru: "Мой глаз был зелёным" },
      future: { es: "Mi ojo será sano", ru: "Мой глаз будет здоровым" }
    }
  },
  {
    id: 196,
    word: "boca",
    translation: "рот",
    category: "body",
    type: "существительное",
    popularity: 196,
    examples: {
      present: { es: "Mi boca está seca", ru: "Мой рот сухой" },
      past: { es: "Mi boca estaba húmeda", ru: "Мой рот был влажным" },
      future: { es: "Mi boca estará limpia", ru: "Мой рот будет чистым" }
    }
  },
  {
    id: 197,
    word: "corazón",
    translation: "сердце",
    category: "body",
    type: "существительное",
    popularity: 197,
    examples: {
      present: { es: "Mi corazón late rápido", ru: "Моё сердце бьётся быстро" },
      past: { es: "Mi corazón latía lento", ru: "Моё сердце билось медленно" },
      future: { es: "Mi corazón latirá fuerte", ru: "Моё сердце будет биться сильно" }
    }
  },
  {
    id: 198,
    word: "camisa",
    translation: "рубашка",
    category: "clothes",
    type: "существительное",
    popularity: 198,
    examples: {
      present: { es: "La camisa es blanca", ru: "Рубашка белая" },
      past: { es: "La camisa era azul", ru: "Рубашка была синей" },
      future: { es: "La camisa será nueva", ru: "Рубашка будет новой" }
    }
  },
  {
    id: 199,
    word: "pantalón",
    translation: "брюки",
    category: "clothes",
    type: "существительное",
    popularity: 199,
    examples: {
      present: { es: "El pantalón es negro", ru: "Брюки чёрные" },
      past: { es: "El pantalón era gris", ru: "Брюки были серыми" },
      future: { es: "El pantalón será azul", ru: "Брюки будут синими" }
    }
  },
  {
    id: 200,
    word: "zapato",
    translation: "туфля, ботинок",
    category: "clothes",
    type: "существительное",
    popularity: 200,
    examples: {
      present: { es: "El zapato es cómodo", ru: "Ботинок удобный" },
      past: { es: "El zapato era incómodo", ru: "Ботинок был неудобным" },
      future: { es: "El zapato será nuevo", ru: "Ботинок будет новым" }
    }
  },
  {
    id: 201,
    word: "vestido",
    translation: "платье",
    category: "clothes",
    type: "существительное",
    popularity: 201,
    examples: {
      present: { es: "El vestido es elegante", ru: "Платье элегантное" },
      past: { es: "El vestido era bonito", ru: "Платье было красивым" },
      future: { es: "El vestido será largo", ru: "Платье будет длинным" }
    }
  },
  {
    id: 202,
    word: "sombrero",
    translation: "шляпа",
    category: "clothes",
    type: "существительное",
    popularity: 202,
    examples: {
      present: { es: "El sombrero es grande", ru: "Шляпа большая" },
      past: { es: "El sombrero era pequeño", ru: "Шляпа была маленькой" },
      future: { es: "El sombrero será negro", ru: "Шляпа будет чёрной" }
    }
  },
  {
    id: 203,
    word: "chaqueta",
    translation: "куртка",
    category: "clothes",
    type: "существительное",
    popularity: 203,
    examples: {
      present: { es: "La chaqueta es caliente", ru: "Куртка тёплая" },
      past: { es: "La chaqueta era ligera", ru: "Куртка была лёгкой" },
      future: { es: "La chaqueta será impermeable", ru: "Куртка будет непромокаемой" }
    }
  },
  {
    id: 204,
    word: "falda",
    translation: "юбка",
    category: "clothes",
    type: "существительное",
    popularity: 204,
    examples: {
      present: { es: "La falda es corta", ru: "Юбка короткая" },
      past: { es: "La falda era larga", ru: "Юбка была длинной" },
      future: { es: "La falda será roja", ru: "Юбка будет красной" }
    }
  },
  {
    id: 205,
    word: "libro",
    translation: "книга",
    category: "work",
    type: "существительное",
    popularity: 205,
    examples: {
      present: { es: "El libro es interesante", ru: "Книга интересная" },
      past: { es: "El libro era aburrido", ru: "Книга была скучной" },
      future: { es: "El libro será famoso", ru: "Книга будет знаменитой" }
    }
  },
  {
    id: 206,
    word: "papel",
    translation: "бумага",
    category: "work",
    type: "существительное",
    popularity: 206,
    examples: {
      present: { es: "El papel es blanco", ru: "Бумага белая" },
      past: { es: "El papel era amarillo", ru: "Бумага была жёлтой" },
      future: { es: "El papel será reciclado", ru: "Бумага будет переработанной" }
    }
  },
  {
    id: 207,
    word: "lápiz",
    translation: "карандаш",
    category: "work",
    type: "существительное",
    popularity: 207,
    examples: {
      present: { es: "El lápiz es nuevo", ru: "Карандаш новый" },
      past: { es: "El lápiz era viejo", ru: "Карандаш был старым" },
      future: { es: "El lápiz será afilado", ru: "Карандаш будет заточенным" }
    }
  },
  {
    id: 208,
    word: "pluma",
    translation: "ручка",
    category: "work",
    type: "существительное",
    popularity: 208,
    examples: {
      present: { es: "La pluma escribe bien", ru: "Ручка хорошо пишет" },
      past: { es: "La pluma escribía mal", ru: "Ручка плохо писала" },
      future: { es: "La pluma escribirá suave", ru: "Ручка будет писать мягко" }
    }
  },
  {
    id: 209,
    word: "ordenador",
    translation: "компьютер",
    category: "work",
    type: "существительное",
    popularity: 209,
    examples: {
      present: { es: "El ordenador es rápido", ru: "Компьютер быстрый" },
      past: { es: "El ordenador era lento", ru: "Компьютер был медленным" },
      future: { es: "El ordenador será potente", ru: "Компьютер будет мощным" }
    }
  },
  {
    id: 210,
    word: "teléfono",
    translation: "телефон",
    category: "work",
    type: "существительное",
    popularity: 210,
    examples: {
      present: { es: "El teléfono suena", ru: "Телефон звонит" },
      past: { es: "El teléfono sonaba", ru: "Телефон звонил" },
      future: { es: "El teléfono sonará", ru: "Телефон будет звонить" }
    }
  },
  {
    id: 211,
    word: "música",
    translation: "музыка",
    category: "emotions",
    type: "существительное",
    popularity: 211,
    examples: {
      present: { es: "La música es hermosa", ru: "Музыка красивая" },
      past: { es: "La música era ruidosa", ru: "Музыка была громкой" },
      future: { es: "La música será clásica", ru: "Музыка будет классической" }
    }
  },
  {
    id: 212,
    word: "película",
    translation: "фильм",
    category: "emotions",
    type: "существительное",
    popularity: 212,
    examples: {
      present: { es: "La película es buena", ru: "Фильм хороший" },
      past: { es: "La película era mala", ru: "Фильм был плохим" },
      future: { es: "La película será emocionante", ru: "Фильм будет захватывающим" }
    }
  },
  {
    id: 213,
    word: "foto",
    translation: "фотография",
    category: "emotions",
    type: "существительное",
    popularity: 213,
    examples: {
      present: { es: "La foto es clara", ru: "Фотография чёткая" },
      past: { es: "La foto era borrosa", ru: "Фотография была размытой" },
      future: { es: "La foto será perfecta", ru: "Фотография будет идеальной" }
    }
  },
  {
    id: 214,
    word: "amigo",
    translation: "друг",
    category: "emotions",
    type: "существительное",
    popularity: 214,
    examples: {
      present: { es: "Mi amigo es leal", ru: "Мой друг верный" },
      past: { es: "Mi amigo era divertido", ru: "Мой друг был весёлым" },
      future: { es: "Mi amigo será exitoso", ru: "Мой друг будет успешным" }
    }
  },
  {
    id: 215,
    word: "amiga",
    translation: "подруга",
    category: "emotions",
    type: "существительное",
    popularity: 215,
    examples: {
      present: { es: "Mi amiga es simpática", ru: "Моя подруга милая" },
      past: { es: "Mi amiga era tímida", ru: "Моя подруга была застенчивой" },
      future: { es: "Mi amiga será famosa", ru: "Моя подруга будет знаменитой" }
    }
  },
  {
    id: 216,
    word: "persona",
    translation: "человек",
    category: "adjectives",
    type: "существительное",
    popularity: 216,
    examples: {
      present: { es: "Es una persona amable", ru: "Это добрый человек" },
      past: { es: "Era una persona seria", ru: "Это был серьёзный человек" },
      future: { es: "Será una persona importante", ru: "Это будет важный человек" }
    }
  },
  {
    id: 217,
    word: "gente",
    translation: "люди",
    category: "adjectives",
    type: "существительное",
    popularity: 217,
    examples: {
      present: { es: "La gente es amable", ru: "Люди добрые" },
      past: { es: "La gente era diferente", ru: "Люди были другими" },
      future: { es: "La gente será feliz", ru: "Люди будут счастливы" }
    }
  },
  {
    id: 218,
    word: "nombre",
    translation: "имя",
    category: "adjectives",
    type: "существительное",
    popularity: 218,
    examples: {
      present: { es: "Mi nombre es Juan", ru: "Моё имя Хуан" },
      past: { es: "Mi nombre era diferente", ru: "Моё имя было другим" },
      future: { es: "Mi nombre será conocido", ru: "Моё имя будет известным" }
    }
  },
  {
    id: 219,
    word: "vida",
    translation: "жизнь",
    category: "adjectives",
    type: "существительное",
    popularity: 219,
    examples: {
      present: { es: "La vida es bella", ru: "Жизнь прекрасна" },
      past: { es: "La vida era difícil", ru: "Жизнь была трудной" },
      future: { es: "La vida será mejor", ru: "Жизнь будет лучше" }
    }
  },
  {
    id: 220,
    word: "muerte",
    translation: "смерть",
    category: "adjectives",
    type: "существительное",
    popularity: 220,
    examples: {
      present: { es: "La muerte es inevitable", ru: "Смерть неизбежна" },
      past: { es: "La muerte era misteriosa", ru: "Смерть была таинственной" },
      future: { es: "La muerte será natural", ru: "Смерть будет естественной" }
    }
  },
  {
    id: 221,
    word: "mundo",
    translation: "мир",
    category: "adjectives",
    type: "существительное",
    popularity: 221,
    examples: {
      present: { es: "El mundo es grande", ru: "Мир большой" },
      past: { es: "El mundo era pequeño", ru: "Мир был маленьким" },
      future: { es: "El mundo será mejor", ru: "Мир будет лучше" }
    }
  },
  {
    id: 222,
    word: "país",
    translation: "страна",
    category: "travel",
    type: "существительное",
    popularity: 222,
    examples: {
      present: { es: "El país es hermoso", ru: "Страна красивая" },
      past: { es: "El país era pobre", ru: "Страна была бедной" },
      future: { es: "El país será rico", ru: "Страна будет богатой" }
    }
  },
  {
    id: 223,
    word: "lugar",
    translation: "место",
    category: "travel",
    type: "существительное",
    popularity: 223,
    examples: {
      present: { es: "Este lugar es bonito", ru: "Это место красивое" },
      past: { es: "Este lugar era tranquilo", ru: "Это место было тихим" },
      future: { es: "Este lugar será famoso", ru: "Это место будет знаменитым" }
    }
  },
  {
    id: 224,
    word: "parte",
    translation: "часть",
    category: "adjectives",
    type: "существительное",
    popularity: 224,
    examples: {
      present: { es: "Esta parte es importante", ru: "Эта часть важная" },
      past: { es: "Esta parte era difícil", ru: "Эта часть была трудной" },
      future: { es: "Esta parte será fácil", ru: "Эта часть будет лёгкой" }
    }
  },
  {
    id: 225,
    word: "momento",
    translation: "момент",
    category: "time",
    type: "существительное",
    popularity: 225,
    examples: {
      present: { es: "Este momento es especial", ru: "Этот момент особенный" },
      past: { es: "Ese momento era perfecto", ru: "Тот момент был идеальным" },
      future: { es: "El momento será único", ru: "Момент будет уникальным" }
    }
  },
  {
    id: 226,
    word: "vez",
    translation: "раз",
    category: "time",
    type: "существительное",
    popularity: 226,
    examples: {
      present: { es: "Esta vez es diferente", ru: "Этот раз другой" },
      past: { es: "Esa vez era igual", ru: "Тот раз был таким же" },
      future: { es: "La próxima vez será mejor", ru: "Следующий раз будет лучше" }
    }
  },
  {
    id: 227,
    word: "hoy",
    translation: "сегодня",
    category: "time",
    type: "наречие",
    popularity: 227,
    examples: {
      present: { es: "Hoy hace sol", ru: "Сегодня солнечно" },
      past: { es: "Hoy hizo frío", ru: "Сегодня было холодно" },
      future: { es: "Hoy hará calor", ru: "Сегодня будет жарко" }
    }
  },
  {
    id: 228,
    word: "ayer",
    translation: "вчера",
    category: "time",
    type: "наречие",
    popularity: 228,
    examples: {
      present: { es: "Ayer fue domingo", ru: "Вчера было воскресенье" },
      past: { es: "Ayer estaba cansado", ru: "Вчера я был уставшим" },
      future: { es: "Ayer será historia", ru: "Вчера станет историей" }
    }
  },
  {
    id: 229,
    word: "mañana",
    translation: "завтра, утро",
    category: "time",
    type: "наречие",
    popularity: 229,
    examples: {
      present: { es: "Mañana es lunes", ru: "Завтра понедельник" },
      past: { es: "Mañana era mi cumpleaños", ru: "Завтра был мой день рождения" },
      future: { es: "Mañana será mejor", ru: "Завтра будет лучше" }
    }
  },
  {
    id: 230,
    word: "noche",
    translation: "ночь",
    category: "time",
    type: "существительное",
    popularity: 230,
    examples: {
      present: { es: "La noche es oscura", ru: "Ночь тёмная" },
      past: { es: "La noche era clara", ru: "Ночь была ясной" },
      future: { es: "La noche será estrellada", ru: "Ночь будет звёздной" }
    }
  },
  {
    id: 231,
    word: "tarde",
    translation: "вечер, поздно",
    category: "time",
    type: "существительное",
    popularity: 231,
    examples: {
      present: { es: "La tarde es tranquila", ru: "Вечер спокойный" },
      past: { es: "La tarde era calurosa", ru: "Вечер был жарким" },
      future: { es: "La tarde será fresca", ru: "Вечер будет свежим" }
    }
  },
  {
    id: 232,
    word: "ahora",
    translation: "сейчас",
    category: "time",
    type: "наречие",
    popularity: 232,
    examples: {
      present: { es: "Ahora estoy ocupado", ru: "Сейчас я занят" },
      past: { es: "Ahora estaba libre", ru: "Сейчас я был свободен" },
      future: { es: "Ahora estaré listo", ru: "Сейчас я буду готов" }
    }
  },
  {
    id: 233,
    word: "siempre",
    translation: "всегда",
    category: "time",
    type: "наречие",
    popularity: 233,
    examples: {
      present: { es: "Siempre estoy aquí", ru: "Я всегда здесь" },
      past: { es: "Siempre estaba contigo", ru: "Я всегда был с тобой" },
      future: { es: "Siempre estaré contigo", ru: "Я всегда буду с тобой" }
    }
  },
  {
    id: 234,
    word: "nunca",
    translation: "никогда",
    category: "time",
    type: "наречие",
    popularity: 234,
    examples: {
      present: { es: "Nunca miento", ru: "Я никогда не вру" },
      past: { es: "Nunca mentí", ru: "Я никогда не врал" },
      future: { es: "Nunca mentiré", ru: "Я никогда не буду врать" }
    }
  },
  {
    id: 235,
    word: "mucho",
    translation: "много",
    category: "adjectives",
    type: "наречие",
    popularity: 235,
    examples: {
      present: { es: "Tengo mucho trabajo", ru: "У меня много работы" },
      past: { es: "Tenía mucho tiempo", ru: "У меня было много времени" },
      future: { es: "Tendré mucho dinero", ru: "У меня будет много денег" }
    }
  },
  {
    id: 236,
    word: "poco",
    translation: "мало",
    category: "adjectives",
    type: "наречие",
    popularity: 236,
    examples: {
      present: { es: "Tengo poco dinero", ru: "У меня мало денег" },
      past: { es: "Tenía poco tiempo", ru: "У меня было мало времени" },
      future: { es: "Tendré poco trabajo", ru: "У меня будет мало работы" }
    }
  },
  {
    id: 237,
    word: "muy",
    translation: "очень",
    category: "adjectives",
    type: "наречие",
    popularity: 237,
    examples: {
      present: { es: "Es muy bonito", ru: "Это очень красиво" },
      past: { es: "Era muy difícil", ru: "Это было очень трудно" },
      future: { es: "Será muy fácil", ru: "Это будет очень легко" }
    }
  },
  {
    id: 238,
    word: "bien",
    translation: "хорошо",
    category: "adjectives",
    type: "наречие",
    popularity: 238,
    examples: {
      present: { es: "Estoy bien", ru: "Я хорошо" },
      past: { es: "Estaba bien", ru: "Я был хорошо" },
      future: { es: "Estaré bien", ru: "Я буду хорошо" }
    }
  },
  {
    id: 239,
    word: "mal",
    translation: "плохо",
    category: "adjectives",
    type: "наречие",
    popularity: 239,
    examples: {
      present: { es: "Me siento mal", ru: "Я чувствую себя плохо" },
      past: { es: "Me sentía mal", ru: "Я чувствовал себя плохо" },
      future: { es: "Me sentiré mal", ru: "Я буду чувствовать себя плохо" }
    }
  },
  {
    id: 240,
    word: "mejor",
    translation: "лучше",
    category: "adjectives",
    type: "наречие",
    popularity: 240,
    examples: {
      present: { es: "Esto es mejor", ru: "Это лучше" },
      past: { es: "Eso era mejor", ru: "То было лучше" },
      future: { es: "Será mejor", ru: "Будет лучше" }
    }
  },
  {
    id: 241,
    word: "peor",
    translation: "хуже",
    category: "adjectives",
    type: "наречие",
    popularity: 241,
    examples: {
      present: { es: "Esto es peor", ru: "Это хуже" },
      past: { es: "Eso era peor", ru: "То было хуже" },
      future: { es: "Será peor", ru: "Будет хуже" }
    }
  },
  {
    id: 242,
    word: "más",
    translation: "больше",
    category: "adjectives",
    type: "наречие",
    popularity: 242,
    examples: {
      present: { es: "Quiero más", ru: "Я хочу больше" },
      past: { es: "Quería más", ru: "Я хотел больше" },
      future: { es: "Querré más", ru: "Я захочу больше" }
    }
  },
  {
    id: 243,
    word: "menos",
    translation: "меньше",
    category: "adjectives",
    type: "наречие",
    popularity: 243,
    examples: {
      present: { es: "Necesito menos", ru: "Мне нужно меньше" },
      past: { es: "Necesitaba menos", ru: "Мне нужно было меньше" },
      future: { es: "Necesitaré menos", ru: "Мне понадобится меньше" }
    }
  },
  {
    id: 244,
    word: "aquí",
    translation: "здесь",
    category: "prepositions",
    type: "наречие",
    popularity: 244,
    examples: {
      present: { es: "Estoy aquí", ru: "Я здесь" },
      past: { es: "Estaba aquí", ru: "Я был здесь" },
      future: { es: "Estaré aquí", ru: "Я буду здесь" }
    }
  },
  {
    id: 245,
    word: "allí",
    translation: "там",
    category: "prepositions",
    type: "наречие",
    popularity: 245,
    examples: {
      present: { es: "Está allí", ru: "Это там" },
      past: { es: "Estaba allí", ru: "Это было там" },
      future: { es: "Estará allí", ru: "Это будет там" }
    }
  },
  {
    id: 246,
    word: "donde",
    translation: "где",
    category: "prepositions",
    type: "наречие",
    popularity: 246,
    examples: {
      present: { es: "¿Dónde estás?", ru: "Где ты?" },
      past: { es: "¿Dónde estabas?", ru: "Где ты был?" },
      future: { es: "¿Dónde estarás?", ru: "Где ты будешь?" }
    }
  },
  {
    id: 247,
    word: "cómo",
    translation: "как",
    category: "prepositions",
    type: "наречие",
    popularity: 247,
    examples: {
      present: { es: "¿Cómo estás?", ru: "Как дела?" },
      past: { es: "¿Cómo estabas?", ru: "Как у тебя было?" },
      future: { es: "¿Cómo estarás?", ru: "Как у тебя будет?" }
    }
  },
  {
    id: 248,
    word: "qué",
    translation: "что",
    category: "prepositions",
    type: "местоимение",
    popularity: 248,
    examples: {
      present: { es: "¿Qué haces?", ru: "Что ты делаешь?" },
      past: { es: "¿Qué hiciste?", ru: "Что ты сделал?" },
      future: { es: "¿Qué harás?", ru: "Что ты будешь делать?" }
    }
  },
  {
    id: 249,
    word: "quién",
    translation: "кто",
    category: "prepositions",
    type: "местоимение",
    popularity: 249,
    examples: {
      present: { es: "¿Quién eres?", ru: "Кто ты?" },
      past: { es: "¿Quién eras?", ru: "Кем ты был?" },
      future: { es: "¿Quién serás?", ru: "Кем ты будешь?" }
    }
  },
  {
    id: 250,
    word: "cuál",
    translation: "какой",
    category: "prepositions",
    type: "местоимение",
    popularity: 250,
    examples: {
      present: { es: "¿Cuál prefieres?", ru: "Какой ты предпочитаешь?" },
      past: { es: "¿Cuál preferías?", ru: "Какой ты предпочитал?" },
      future: { es: "¿Cuál preferirás?", ru: "Какой ты будешь предпочитать?" }
    }
  },
  {
    id: 251,
    word: "cuánto",
    translation: "сколько",
    category: "prepositions",
    type: "местоимение",
    popularity: 251,
    examples: {
      present: { es: "¿Cuánto cuesta?", ru: "Сколько стоит?" },
      past: { es: "¿Cuánto costaba?", ru: "Сколько стоило?" },
      future: { es: "¿Cuánto costará?", ru: "Сколько будет стоить?" }
    }
  },
  {
    id: 252,
    word: "sí",
    translation: "да",
    category: "prepositions",
    type: "наречие",
    popularity: 252,
    examples: {
      present: { es: "Sí, quiero", ru: "Да, я хочу" },
      past: { es: "Sí, quería", ru: "Да, я хотел" },
      future: { es: "Sí, querré", ru: "Да, я захочу" }
    }
  },
  {
    id: 253,
    word: "no",
    translation: "нет",
    category: "prepositions",
    type: "наречие",
    popularity: 253,
    examples: {
      present: { es: "No quiero", ru: "Я не хочу" },
      past: { es: "No quería", ru: "Я не хотел" },
      future: { es: "No querré", ru: "Я не захочу" }
    }
  },
  {
    id: 254,
    word: "también",
    translation: "также",
    category: "prepositions",
    type: "наречие",
    popularity: 254,
    examples: {
      present: { es: "Yo también voy", ru: "Я тоже иду" },
      past: { es: "Yo también iba", ru: "Я тоже шёл" },
      future: { es: "Yo también iré", ru: "Я тоже пойду" }
    }
  },
  {
    id: 255,
    word: "tampoco",
    translation: "тоже нет",
    category: "prepositions",
    type: "наречие",
    popularity: 255,
    examples: {
      present: { es: "Yo tampoco voy", ru: "Я тоже не иду" },
      past: { es: "Yo tampoco iba", ru: "Я тоже не шёл" },
      future: { es: "Yo tampoco iré", ru: "Я тоже не пойду" }
    }
  },
  {
    id: 256,
    word: "algo",
    translation: "что-то",
    category: "prepositions",
    type: "местоимение",
    popularity: 256,
    examples: {
      present: { es: "Necesito algo", ru: "Мне нужно что-то" },
      past: { es: "Necesitaba algo", ru: "Мне нужно было что-то" },
      future: { es: "Necesitaré algo", ru: "Мне понадобится что-то" }
    }
  },
  {
    id: 257,
    word: "nada",
    translation: "ничего",
    category: "prepositions",
    type: "местоимение",
    popularity: 257,
    examples: {
      present: { es: "No tengo nada", ru: "У меня ничего нет" },
      past: { es: "No tenía nada", ru: "У меня ничего не было" },
      future: { es: "No tendré nada", ru: "У меня ничего не будет" }
    }
  },
  {
    id: 258,
    word: "todo",
    translation: "всё",
    category: "prepositions",
    type: "местоимение",
    popularity: 258,
    examples: {
      present: { es: "Tengo todo", ru: "У меня есть всё" },
      past: { es: "Tenía todo", ru: "У меня было всё" },
      future: { es: "Tendré todo", ru: "У меня будет всё" }
    }
  },
  {
    id: 259,
    word: "alguien",
    translation: "кто-то",
    category: "prepositions",
    type: "местоимение",
    popularity: 259,
    examples: {
      present: { es: "Alguien llama", ru: "Кто-то звонит" },
      past: { es: "Alguien llamaba", ru: "Кто-то звонил" },
      future: { es: "Alguien llamará", ru: "Кто-то позвонит" }
    }
  },
  {
    id: 260,
    word: "nadie",
    translation: "никто",
    category: "prepositions",
    type: "местоимение",
    popularity: 260,
    examples: {
      present: { es: "Nadie está aquí", ru: "Никого нет здесь" },
      past: { es: "Nadie estaba aquí", ru: "Никого не было здесь" },
      future: { es: "Nadie estará aquí", ru: "Никого не будет здесь" }
    }
  },
  {
    id: 261,
    word: "otro",
    translation: "другой",
    category: "adjectives",
    type: "местоимение",
    popularity: 261,
    examples: {
      present: { es: "Quiero otro", ru: "Я хочу другой" },
      past: { es: "Quería otro", ru: "Я хотел другой" },
      future: { es: "Querré otro", ru: "Я захочу другой" }
    }
  },
  {
    id: 262,
    word: "mismo",
    translation: "тот же самый",
    category: "adjectives",
    type: "местоимение",
    popularity: 262,
    examples: {
      present: { es: "Es el mismo", ru: "Это тот же самый" },
      past: { es: "Era el mismo", ru: "Это был тот же самый" },
      future: { es: "Será el mismo", ru: "Это будет тот же самый" }
    }
  },
  {
    id: 263,
    word: "cada",
    translation: "каждый",
    category: "adjectives",
    type: "местоимение",
    popularity: 263,
    examples: {
      present: { es: "Cada día es nuevo", ru: "Каждый день новый" },
      past: { es: "Cada día era igual", ru: "Каждый день был одинаковым" },
      future: { es: "Cada día será mejor", ru: "Каждый день будет лучше" }
    }
  },
  {
    id: 264,
    word: "varios",
    translation: "несколько",
    category: "adjectives",
    type: "местоимение",
    popularity: 264,
    examples: {
      present: { es: "Tengo varios libros", ru: "У меня несколько книг" },
      past: { es: "Tenía varios amigos", ru: "У меня было несколько друзей" },
      future: { es: "Tendré varios proyectos", ru: "У меня будет несколько проектов" }
    }
  },
  {
    id: 265,
    word: "algunos",
    translation: "некоторые",
    category: "adjectives",
    type: "местоимение",
    popularity: 265,
    examples: {
      present: { es: "Algunos son buenos", ru: "Некоторые хорошие" },
      past: { es: "Algunos eran malos", ru: "Некоторые были плохими" },
      future: { es: "Algunos serán mejores", ru: "Некоторые будут лучше" }
    }
  },
  {
    id: 266,
    word: "todos",
    translation: "все",
    category: "adjectives",
    type: "местоимение",
    popularity: 266,
    examples: {
      present: { es: "Todos están aquí", ru: "Все здесь" },
      past: { es: "Todos estaban allí", ru: "Все были там" },
      future: { es: "Todos estarán contentos", ru: "Все будут довольны" }
    }
  },
  {
    id: 267,
    word: "ninguno",
    translation: "никакой",
    category: "adjectives",
    type: "местоимение",
    popularity: 267,
    examples: {
      present: { es: "Ninguno es perfecto", ru: "Никакой не идеален" },
      past: { es: "Ninguno era bueno", ru: "Никакой не был хорошим" },
      future: { es: "Ninguno será suficiente", ru: "Никакой не будет достаточным" }
    }
  },
  {
    id: 268,
    word: "primero",
    translation: "первый",
    category: "numbers",
    type: "числительное",
    popularity: 268,
    examples: {
      present: { es: "Soy el primero", ru: "Я первый" },
      past: { es: "Era el primero", ru: "Я был первым" },
      future: { es: "Seré el primero", ru: "Я буду первым" }
    }
  },
  {
    id: 269,
    word: "último",
    translation: "последний",
    category: "numbers",
    type: "числительное",
    popularity: 269,
    examples: {
      present: { es: "Soy el último", ru: "Я последний" },
      past: { es: "Era el último", ru: "Я был последним" },
      future: { es: "Seré el último", ru: "Я буду последним" }
    }
  },
  {
    id: 270,
    word: "segundo",
    translation: "второй",
    category: "numbers",
    type: "числительное",
    popularity: 270,
    examples: {
      present: { es: "Es el segundo día", ru: "Это второй день" },
      past: { es: "Era el segundo intento", ru: "Это была вторая попытка" },
      future: { es: "Será el segundo año", ru: "Это будет второй год" }
    }
  },
  {
    id: 271,
    word: "tercero",
    translation: "третий",
    category: "numbers",
    type: "числительное",
    popularity: 271,
    examples: {
      present: { es: "Es el tercer piso", ru: "Это третий этаж" },
      past: { es: "Era el tercer día", ru: "Это был третий день" },
      future: { es: "Será el tercer mes", ru: "Это будет третий месяц" }
    }
  },
  {
    id: 272,
    word: "importante",
    translation: "важный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 272,
    examples: {
      present: { es: "Es importante estudiar", ru: "Важно учиться" },
      past: { es: "Era importante trabajar", ru: "Было важно работать" },
      future: { es: "Será importante aprender", ru: "Будет важно учиться" }
    }
  },
  {
    id: 273,
    word: "difícil",
    translation: "трудный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 273,
    examples: {
      present: { es: "Es difícil entender", ru: "Трудно понять" },
      past: { es: "Era difícil explicar", ru: "Было трудно объяснить" },
      future: { es: "Será difícil decidir", ru: "Будет трудно решить" }
    }
  },
  {
    id: 274,
    word: "fácil",
    translation: "лёгкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 274,
    examples: {
      present: { es: "Es fácil aprender", ru: "Легко учиться" },
      past: { es: "Era fácil hacer", ru: "Было легко делать" },
      future: { es: "Será fácil resolver", ru: "Будет легко решить" }
    }
  },
  {
    id: 275,
    word: "posible",
    translation: "возможный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 275,
    examples: {
      present: { es: "Es posible ganar", ru: "Возможно выиграть" },
      past: { es: "Era posible viajar", ru: "Было возможно путешествовать" },
      future: { es: "Será posible volar", ru: "Будет возможно летать" }
    }
  },
  {
    id: 276,
    word: "imposible",
    translation: "невозможный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 276,
    examples: {
      present: { es: "Es imposible olvidar", ru: "Невозможно забыть" },
      past: { es: "Era imposible creer", ru: "Было невозможно поверить" },
      future: { es: "Será imposible negar", ru: "Будет невозможно отрицать" }
    }
  },
  {
    id: 277,
    word: "necesario",
    translation: "необходимый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 277,
    examples: {
      present: { es: "Es necesario trabajar", ru: "Необходимо работать" },
      past: { es: "Era necesario estudiar", ru: "Было необходимо учиться" },
      future: { es: "Será necesario cambiar", ru: "Будет необходимо измениться" }
    }
  },
  {
    id: 278,
    word: "verdad",
    translation: "правда",
    category: "adjectives",
    type: "существительное",
    popularity: 278,
    examples: {
      present: { es: "Es la verdad", ru: "Это правда" },
      past: { es: "Era la verdad", ru: "Это была правда" },
      future: { es: "Será la verdad", ru: "Это будет правда" }
    }
  },
  {
    id: 279,
    word: "mentira",
    translation: "ложь",
    category: "adjectives",
    type: "существительное",
    popularity: 279,
    examples: {
      present: { es: "Es una mentira", ru: "Это ложь" },
      past: { es: "Era una mentira", ru: "Это была ложь" },
      future: { es: "Será una mentira", ru: "Это будет ложь" }
    }
  },
  {
    id: 280,
    word: "problema",
    translation: "проблема",
    category: "work",
    type: "существительное",
    popularity: 280,
    examples: {
      present: { es: "Tengo un problema", ru: "У меня проблема" },
      past: { es: "Tenía un problema", ru: "У меня была проблема" },
      future: { es: "Tendré un problema", ru: "У меня будет проблема" }
    }
  },
  {
    id: 281,
    word: "solución",
    translation: "решение",
    category: "work",
    type: "существительное",
    popularity: 281,
    examples: {
      present: { es: "Hay una solución", ru: "Есть решение" },
      past: { es: "Había una solución", ru: "Было решение" },
      future: { es: "Habrá una solución", ru: "Будет решение" }
    }
  },
  {
    id: 282,
    word: "pregunta",
    translation: "вопрос",
    category: "work",
    type: "существительное",
    popularity: 282,
    examples: {
      present: { es: "Tengo una pregunta", ru: "У меня вопрос" },
      past: { es: "Tenía una pregunta", ru: "У меня был вопрос" },
      future: { es: "Tendré una pregunta", ru: "У меня будет вопрос" }
    }
  },
  {
    id: 283,
    word: "respuesta",
    translation: "ответ",
    category: "work",
    type: "существительное",
    popularity: 283,
    examples: {
      present: { es: "Sé la respuesta", ru: "Я знаю ответ" },
      past: { es: "Sabía la respuesta", ru: "Я знал ответ" },
      future: { es: "Sabré la respuesta", ru: "Я буду знать ответ" }
    }
  },
  {
    id: 284,
    word: "razón",
    translation: "причина, разум",
    category: "adjectives",
    type: "существительное",
    popularity: 284,
    examples: {
      present: { es: "Tienes razón", ru: "Ты прав" },
      past: { es: "Tenías razón", ru: "Ты был прав" },
      future: { es: "Tendrás razón", ru: "Ты будешь прав" }
    }
  },
  {
    id: 285,
    word: "idea",
    translation: "идея",
    category: "work",
    type: "существительное",
    popularity: 285,
    examples: {
      present: { es: "Es una buena idea", ru: "Это хорошая идея" },
      past: { es: "Era una mala idea", ru: "Это была плохая идея" },
      future: { es: "Será una gran idea", ru: "Это будет отличная идея" }
    }
  },
  {
    id: 286,
    word: "forma",
    translation: "форма, способ",
    category: "adjectives",
    type: "существительное",
    popularity: 286,
    examples: {
      present: { es: "Es una forma diferente", ru: "Это другой способ" },
      past: { es: "Era una forma antigua", ru: "Это был старый способ" },
      future: { es: "Será una forma nueva", ru: "Это будет новый способ" }
    }
  },
  {
    id: 287,
    word: "manera",
    translation: "способ, манера",
    category: "adjectives",
    type: "существительное",
    popularity: 287,
    examples: {
      present: { es: "De esta manera", ru: "Таким способом" },
      past: { es: "De esa manera", ru: "Тем способом" },
      future: { es: "De otra manera", ru: "Другим способом" }
    }
  },
  {
    id: 288,
    word: "caso",
    translation: "случай",
    category: "adjectives",
    type: "существительное",
    popularity: 288,
    examples: {
      present: { es: "En este caso", ru: "В этом случае" },
      past: { es: "En ese caso", ru: "В том случае" },
      future: { es: "En cualquier caso", ru: "В любом случае" }
    }
  },
  {
    id: 289,
    word: "ejemplo",
    translation: "пример",
    category: "work",
    type: "существительное",
    popularity: 289,
    examples: {
      present: { es: "Por ejemplo", ru: "Например" },
      past: { es: "Era un ejemplo", ru: "Это был пример" },
      future: { es: "Será un ejemplo", ru: "Это будет пример" }
    }
  },
  {
    id: 290,
    word: "historia",
    translation: "история",
    category: "work",
    type: "существительное",
    popularity: 290,
    examples: {
      present: { es: "Es una historia larga", ru: "Это длинная история" },
      past: { es: "Era una historia corta", ru: "Это была короткая история" },
      future: { es: "Será una historia interesante", ru: "Это будет интересная история" }
    }
  },
  {
    id: 291,
    word: "palabra",
    translation: "слово",
    category: "work",
    type: "существительное",
    popularity: 291,
    examples: {
      present: { es: "Es una palabra difícil", ru: "Это трудное слово" },
      past: { es: "Era una palabra nueva", ru: "Это было новое слово" },
      future: { es: "Será una palabra importante", ru: "Это будет важное слово" }
    }
  },
  {
    id: 292,
    word: "lengua",
    translation: "язык",
    category: "work",
    type: "существительное",
    popularity: 292,
    examples: {
      present: { es: "Estudio la lengua española", ru: "Я изучаю испанский язык" },
      past: { es: "Estudiaba la lengua inglesa", ru: "Я изучал английский язык" },
      future: { es: "Estudiaré la lengua francesa", ru: "Я буду изучать французский язык" }
    }
  },
  {
    id: 293,
    word: "idioma",
    translation: "язык",
    category: "work",
    type: "существительное",
    popularity: 293,
    examples: {
      present: { es: "Hablo tres idiomas", ru: "Я говорю на трёх языках" },
      past: { es: "Hablaba dos idiomas", ru: "Я говорил на двух языках" },
      future: { es: "Hablaré cuatro idiomas", ru: "Я буду говорить на четырёх языках" }
    }
  },
  {
    id: 294,
    word: "voz",
    translation: "голос",
    category: "body",
    type: "существительное",
    popularity: 294,
    examples: {
      present: { es: "Tu voz es bonita", ru: "Твой голос красивый" },
      past: { es: "Tu voz era suave", ru: "Твой голос был мягким" },
      future: { es: "Tu voz será fuerte", ru: "Твой голос будет сильным" }
    }
  },
  {
    id: 295,
    word: "sonido",
    translation: "звук",
    category: "emotions",
    type: "существительное",
    popularity: 295,
    examples: {
      present: { es: "Escucho un sonido", ru: "Я слышу звук" },
      past: { es: "Escuchaba un sonido", ru: "Я слышал звук" },
      future: { es: "Escucharé un sonido", ru: "Я услышу звук" }
    }
  },
  {
    id: 296,
    word: "luz",
    translation: "свет",
    category: "home",
    type: "существительное",
    popularity: 296,
    examples: {
      present: { es: "La luz está encendida", ru: "Свет включён" },
      past: { es: "La luz estaba apagada", ru: "Свет был выключен" },
      future: { es: "La luz estará brillante", ru: "Свет будет ярким" }
    }
  },
  {
    id: 297,
    word: "color",
    translation: "цвет",
    category: "colors",
    type: "существительное",
    popularity: 297,
    examples: {
      present: { es: "Me gusta este color", ru: "Мне нравится этот цвет" },
      past: { es: "Me gustaba ese color", ru: "Мне нравился тот цвет" },
      future: { es: "Me gustará otro color", ru: "Мне понравится другой цвет" }
    }
  },
  {
    id: 298,
    word: "sabor",
    translation: "вкус",
    category: "food",
    type: "существительное",
    popularity: 298,
    examples: {
      present: { es: "Tiene buen sabor", ru: "Имеет хороший вкус" },
      past: { es: "Tenía mal sabor", ru: "Имел плохой вкус" },
      future: { es: "Tendrá sabor dulce", ru: "Будет иметь сладкий вкус" }
    }
  },
  {
    id: 299,
    word: "olor",
    translation: "запах",
    category: "food",
    type: "существительное",
    popularity: 299,
    examples: {
      present: { es: "Tiene buen olor", ru: "Имеет хороший запах" },
      past: { es: "Tenía mal olor", ru: "Имел плохой запах" },
      future: { es: "Tendrá olor fresco", ru: "Будет иметь свежий запах" }
    }
  },
  {
    id: 300,
    word: "sentido",
    translation: "смысл, чувство",
    category: "adjectives",
    type: "существительное",
    popularity: 300,
    examples: {
      present: { es: "Tiene sentido", ru: "Это имеет смысл" },
      past: { es: "Tenía sentido", ru: "Это имело смысл" },
      future: { es: "Tendrá sentido", ru: "Это будет иметь смысл" }
    }
  },
  {
    id: 301,
    word: "perro",
    translation: "собака",
    category: "nature",
    type: "существительное",
    popularity: 301,
    examples: {
      present: { es: "El perro es fiel", ru: "Собака верная" },
      past: { es: "El perro era grande", ru: "Собака была большой" },
      future: { es: "El perro será mi amigo", ru: "Собака будет моим другом" }
    }
  },
  {
    id: 302,
    word: "gato",
    translation: "кот",
    category: "nature",
    type: "существительное",
    popularity: 302,
    examples: {
      present: { es: "El gato duerme", ru: "Кот спит" },
      past: { es: "El gato dormía", ru: "Кот спал" },
      future: { es: "El gato dormirá", ru: "Кот будет спать" }
    }
  },
  {
    id: 303,
    word: "animal",
    translation: "животное",
    category: "nature",
    type: "существительное",
    popularity: 303,
    examples: {
      present: { es: "El animal es salvaje", ru: "Животное дикое" },
      past: { es: "El animal era doméstico", ru: "Животное было домашним" },
      future: { es: "El animal será libre", ru: "Животное будет свободным" }
    }
  },
  {
    id: 304,
    word: "pájaro",
    translation: "птица",
    category: "nature",
    type: "существительное",
    popularity: 304,
    examples: {
      present: { es: "El pájaro canta", ru: "Птица поёт" },
      past: { es: "El pájaro cantaba", ru: "Птица пела" },
      future: { es: "El pájaro cantará", ru: "Птица будет петь" }
    }
  },
  {
    id: 305,
    word: "pez",
    translation: "рыба (живая)",
    category: "nature",
    type: "существительное",
    popularity: 305,
    examples: {
      present: { es: "El pez nada", ru: "Рыба плавает" },
      past: { es: "El pez nadaba", ru: "Рыба плавала" },
      future: { es: "El pez nadará", ru: "Рыба будет плавать" }
    }
  },
  {
    id: 306,
    word: "insecto",
    translation: "насекомое",
    category: "nature",
    type: "существительное",
    popularity: 306,
    examples: {
      present: { es: "El insecto vuela", ru: "Насекомое летает" },
      past: { es: "El insecto volaba", ru: "Насекомое летало" },
      future: { es: "El insecto volará", ru: "Насекомое будет летать" }
    }
  },
  {
    id: 307,
    word: "planta",
    translation: "растение",
    category: "nature",
    type: "существительное",
    popularity: 307,
    examples: {
      present: { es: "La planta crece", ru: "Растение растёт" },
      past: { es: "La planta crecía", ru: "Растение росло" },
      future: { es: "La planta crecerá", ru: "Растение будет расти" }
    }
  },
  {
    id: 308,
    word: "hoja",
    translation: "лист",
    category: "nature",
    type: "существительное",
    popularity: 308,
    examples: {
      present: { es: "La hoja es verde", ru: "Лист зелёный" },
      past: { es: "La hoja era amarilla", ru: "Лист был жёлтым" },
      future: { es: "La hoja será marrón", ru: "Лист будет коричневым" }
    }
  },
  {
    id: 309,
    word: "raíz",
    translation: "корень",
    category: "nature",
    type: "существительное",
    popularity: 309,
    examples: {
      present: { es: "La raíz es profunda", ru: "Корень глубокий" },
      past: { es: "La raíz era fuerte", ru: "Корень был крепким" },
      future: { es: "La raíz será larga", ru: "Корень будет длинным" }
    }
  },
  {
    id: 310,
    word: "semilla",
    translation: "семя",
    category: "nature",
    type: "существительное",
    popularity: 310,
    examples: {
      present: { es: "La semilla germina", ru: "Семя прорастает" },
      past: { es: "La semilla germinaba", ru: "Семя прорастало" },
      future: { es: "La semilla germinará", ru: "Семя прорастёт" }
    }
  },
  {
    id: 311,
    word: "bosque",
    translation: "лес",
    category: "nature",
    type: "существительное",
    popularity: 311,
    examples: {
      present: { es: "El bosque es denso", ru: "Лес густой" },
      past: { es: "El bosque era verde", ru: "Лес был зелёным" },
      future: { es: "El bosque será protegido", ru: "Лес будет защищён" }
    }
  },
  {
    id: 312,
    word: "lago",
    translation: "озеро",
    category: "nature",
    type: "существительное",
    popularity: 312,
    examples: {
      present: { es: "El lago es tranquilo", ru: "Озеро спокойное" },
      past: { es: "El lago era cristalino", ru: "Озеро было кристальным" },
      future: { es: "El lago será limpio", ru: "Озеро будет чистым" }
    }
  },
  {
    id: 313,
    word: "isla",
    translation: "остров",
    category: "nature",
    type: "существительное",
    popularity: 313,
    examples: {
      present: { es: "La isla es pequeña", ru: "Остров маленький" },
      past: { es: "La isla era desierta", ru: "Остров был необитаемым" },
      future: { es: "La isla será turística", ru: "Остров будет туристическим" }
    }
  },
  {
    id: 314,
    word: "playa",
    translation: "пляж",
    category: "travel",
    type: "существительное",
    popularity: 314,
    examples: {
      present: { es: "La playa es hermosa", ru: "Пляж красивый" },
      past: { es: "La playa era limpia", ru: "Пляж был чистым" },
      future: { es: "La playa será popular", ru: "Пляж будет популярным" }
    }
  },
  {
    id: 315,
    word: "desierto",
    translation: "пустыня",
    category: "nature",
    type: "существительное",
    popularity: 315,
    examples: {
      present: { es: "El desierto es árido", ru: "Пустыня засушливая" },
      past: { es: "El desierto era caliente", ru: "Пустыня была жаркой" },
      future: { es: "El desierto será verde", ru: "Пустыня будет зелёной" }
    }
  },
  {
    id: 316,
    word: "valle",
    translation: "долина",
    category: "nature",
    type: "существительное",
    popularity: 316,
    examples: {
      present: { es: "El valle es fértil", ru: "Долина плодородная" },
      past: { es: "El valle era verde", ru: "Долина была зелёной" },
      future: { es: "El valle será cultivado", ru: "Долина будет обработанной" }
    }
  },
  {
    id: 317,
    word: "puente",
    translation: "мост",
    category: "city",
    type: "существительное",
    popularity: 317,
    examples: {
      present: { es: "El puente es largo", ru: "Мост длинный" },
      past: { es: "El puente era antiguo", ru: "Мост был старинным" },
      future: { es: "El puente será moderno", ru: "Мост будет современным" }
    }
  },
  {
    id: 318,
    word: "edificio",
    translation: "здание",
    category: "city",
    type: "существительное",
    popularity: 318,
    examples: {
      present: { es: "El edificio es alto", ru: "Здание высокое" },
      past: { es: "El edificio era bajo", ru: "Здание было низким" },
      future: { es: "El edificio será nuevo", ru: "Здание будет новым" }
    }
  },
  {
    id: 319,
    word: "torre",
    translation: "башня",
    category: "city",
    type: "существительное",
    popularity: 319,
    examples: {
      present: { es: "La torre es famosa", ru: "Башня знаменитая" },
      past: { es: "La torre era medieval", ru: "Башня была средневековой" },
      future: { es: "La torre será restaurada", ru: "Башня будет отреставрирована" }
    }
  },
  {
    id: 320,
    word: "museo",
    translation: "музей",
    category: "city",
    type: "существительное",
    popularity: 320,
    examples: {
      present: { es: "El museo es interesante", ru: "Музей интересный" },
      past: { es: "El museo era pequeño", ru: "Музей был маленьким" },
      future: { es: "El museo será grande", ru: "Музей будет большим" }
    }
  },
  {
    id: 321,
    word: "teatro",
    translation: "театр",
    category: "city",
    type: "существительное",
    popularity: 321,
    examples: {
      present: { es: "El teatro es elegante", ru: "Театр элегантный" },
      past: { es: "El teatro era clásico", ru: "Театр был классическим" },
      future: { es: "El teatro será renovado", ru: "Театр будет обновлён" }
    }
  },
  {
    id: 5,
    word: "ir",
    translation: "идти, ехать",
    category: "verbs",
    type: "глагол",
    popularity: 5,
    examples: {
      present: {
        yo: { es: "Yo voy al cine", ru: "Я иду в кино" },
        tú: { es: "Tú vas al cine", ru: "Ты идёшь в кино" },
        él: { es: "Él va al cine", ru: "Он идёт в кино" },
        nosotros: { es: "Nosotros vamos al cine", ru: "Мы идём в кино" },
        vosotros: { es: "Vosotros vais al cine", ru: "Вы идёте в кино" },
        ellos: { es: "Ellos van al cine", ru: "Они идут в кино" }
      },
      past: {
        yo: { es: "Yo fui al cine", ru: "Я ходил в кино" },
        tú: { es: "Tú fuiste al cine", ru: "Ты ходил в кино" },
        él: { es: "Él fue al cine", ru: "Он ходил в кино" },
        nosotros: { es: "Nosotros fuimos al cine", ru: "Мы ходили в кино" },
        vosotros: { es: "Vosotros fuisteis al cine", ru: "Вы ходили в кино" },
        ellos: { es: "Ellos fueron al cine", ru: "Они ходили в кино" }
      },
      future: {
        yo: { es: "Yo iré al cine", ru: "Я пойду в кино" },
        tú: { es: "Tú irás al cine", ru: "Ты пойдёшь в кино" },
        él: { es: "Él irá al cine", ru: "Он пойдёт в кино" },
        nosotros: { es: "Nosotros iremos al cine", ru: "Мы пойдём в кино" },
        vosotros: { es: "Vosotros iréis al cine", ru: "Вы пойдёте в кино" },
        ellos: { es: "Ellos irán al cine", ru: "Они пойдут в кино" }
      }
    }
  },
  {
    id: 322,
    word: "cine",
    translation: "кино, кинотеатр",
    category: "city",
    type: "существительное",
    popularity: 322,
    examples: {
      present: {
        yo: { es: "Voy al cine", ru: "Я иду в кино" },
        tú: { es: "Vas al cine", ru: "Ты идёшь в кино" },
        él: { es: "Va al cine", ru: "Он идёт в кино" },
        nosotros: { es: "Vamos al cine", ru: "Мы идём в кино" },
        vosotros: { es: "Vais al cine", ru: "Вы идёте в кино" },
        ellos: { es: "Van al cine", ru: "Они идут в кино" }
      },
      past: {
        yo: { es: "Iba al cine", ru: "Я ходил в кино" },
        tú: { es: "Ibas al cine", ru: "Ты ходил в кино" },
        él: { es: "Iba al cine", ru: "Он ходил в кино" },
        nosotros: { es: "Íbamos al cine", ru: "Мы ходили в кино" },
        vosotros: { es: "Íbais al cine", ru: "Вы ходили в кино" },
        ellos: { es: "Iban al cine", ru: "Они ходили в кино" }
      },
      future: {
        yo: { es: "Iré al cine", ru: "Я пойду в кино" },
        tú: { es: "Irás al cine", ru: "Ты пойдёшь в кино" },
        él: { es: "Irán al cine", ru: "Он пойдёт в кино" },
        nosotros: { es: "Iremos al cine", ru: "Мы пойдём в кино" },
        vosotros: { es: "Iréis al cine", ru: "Вы пойдёте в кино" },
        ellos: { es: "Irán al cine", ru: "Они пойдут в кино" }
      }
    }
  },
  {
    id: 323,
    word: "biblioteca",
    translation: "библиотека",
    category: "city",
    type: "существительное",
    popularity: 323,
    examples: {
      present: { es: "La biblioteca es grande", ru: "Библиотека большая" },
      past: { es: "La biblioteca era antigua", ru: "Библиотека была старинной" },
      future: { es: "La biblioteca será digital", ru: "Библиотека будет цифровой" }
    }
  },
  {
    id: 324,
    word: "mercado",
    translation: "рынок",
    category: "city",
    type: "существительное",
    popularity: 324,
    examples: {
      present: { es: "El mercado está abierto", ru: "Рынок открыт" },
      past: { es: "El mercado estaba lleno", ru: "Рынок был полон" },
      future: { es: "El mercado estará cerrado", ru: "Рынок будет закрыт" }
    }
  },
  {
    id: 325,
    word: "iglesia",
    translation: "церковь",
    category: "city",
    type: "существительное",
    popularity: 325,
    examples: {
      present: { es: "La iglesia es antigua", ru: "Церковь старинная" },
      past: { es: "La iglesia era gótica", ru: "Церковь была готической" },
      future: { es: "La iglesia será restaurada", ru: "Церковь будет отреставрирована" }
    }
  },
  {
    id: 326,
    word: "estación",
    translation: "станция, вокзал",
    category: "travel",
    type: "существительное",
    popularity: 326,
    examples: {
      present: { es: "La estación es moderna", ru: "Вокзал современный" },
      past: { es: "La estación era vieja", ru: "Вокзал был старым" },
      future: { es: "La estación será renovada", ru: "Вокзал будет обновлён" }
    }
  },
  {
    id: 327,
    word: "aeropuerto",
    translation: "аэропорт",
    category: "travel",
    type: "существительное",
    popularity: 327,
    examples: {
      present: { es: "El aeropuerto es grande", ru: "Аэропорт большой" },
      past: { es: "El aeropuerto era pequeño", ru: "Аэропорт был маленьким" },
      future: { es: "El aeropuerto será internacional", ru: "Аэропорт будет международным" }
    }
  },
  {
    id: 328,
    word: "puerto",
    translation: "порт",
    category: "travel",
    type: "существительное",
    popularity: 328,
    examples: {
      present: { es: "El puerto es activo", ru: "Порт активный" },
      past: { es: "El puerto era importante", ru: "Порт был важным" },
      future: { es: "El puerto será moderno", ru: "Порт будет современным" }
    }
  },
  {
    id: 329,
    word: "camino",
    translation: "дорога, путь",
    category: "travel",
    type: "существительное",
    popularity: 329,
    examples: {
      present: { es: "El camino es largo", ru: "Дорога длинная" },
      past: { es: "El camino era difícil", ru: "Дорога была трудной" },
      future: { es: "El camino será fácil", ru: "Дорога будет лёгкой" }
    }
  },
  {
    id: 330,
    word: "carretera",
    translation: "шоссе",
    category: "travel",
    type: "существительное",
    popularity: 330,
    examples: {
      present: { es: "La carretera es ancha", ru: "Шоссе широкое" },
      past: { es: "La carretera era estrecha", ru: "Шоссе было узким" },
      future: { es: "La carretera será nueva", ru: "Шоссе будет новым" }
    }
  },
  {
    id: 331,
    word: "esquina",
    translation: "угол (улицы)",
    category: "city",
    type: "существительное",
    popularity: 331,
    examples: {
      present: { es: "Espero en la esquina", ru: "Я жду на углу" },
      past: { es: "Esperaba en la esquina", ru: "Я ждал на углу" },
      future: { es: "Esperaré en la esquina", ru: "Я буду ждать на углу" }
    }
  },
  {
    id: 332,
    word: "barrio",
    translation: "район",
    category: "city",
    type: "существительное",
    popularity: 332,
    examples: {
      present: { es: "El barrio es tranquilo", ru: "Район тихий" },
      past: { es: "El barrio era peligroso", ru: "Район был опасным" },
      future: { es: "El barrio será seguro", ru: "Район будет безопасным" }
    }
  },
  {
    id: 333,
    word: "centro",
    translation: "центр",
    category: "city",
    type: "существительное",
    popularity: 333,
    examples: {
      present: { es: "El centro es moderno", ru: "Центр современный" },
      past: { es: "El centro era histórico", ru: "Центр был историческим" },
      future: { es: "El centro será renovado", ru: "Центр будет обновлён" }
    }
  },
  {
    id: 334,
    word: "oficina",
    translation: "офис",
    category: "work",
    type: "существительное",
    popularity: 334,
    examples: {
      present: { es: "La oficina es grande", ru: "Офис большой" },
      past: { es: "La oficina era pequeña", ru: "Офис был маленьким" },
      future: { es: "La oficina será moderna", ru: "Офис будет современным" }
    }
  },
  {
    id: 335,
    word: "fábrica",
    translation: "фабрика",
    category: "work",
    type: "существительное",
    popularity: 335,
    examples: {
      present: { es: "La fábrica produce coches", ru: "Фабрика производит машины" },
      past: { es: "La fábrica producía zapatos", ru: "Фабрика производила обувь" },
      future: { es: "La fábrica producirá robots", ru: "Фабрика будет производить роботов" }
    }
  },
  {
    id: 336,
    word: "empresa",
    translation: "компания",
    category: "work",
    type: "существительное",
    popularity: 336,
    examples: {
      present: { es: "La empresa es exitosa", ru: "Компания успешная" },
      past: { es: "La empresa era pequeña", ru: "Компания была маленькой" },
      future: { es: "La empresa será grande", ru: "Компания будет большой" }
    }
  },
  {
    id: 337,
    word: "negocio",
    translation: "бизнес",
    category: "work",
    type: "существительное",
    popularity: 337,
    examples: {
      present: { es: "El negocio va bien", ru: "Бизнес идёт хорошо" },
      past: { es: "El negocio iba mal", ru: "Бизнес шёл плохо" },
      future: { es: "El negocio irá mejor", ru: "Бизнес пойдёт лучше" }
    }
  },
  {
    id: 338,
    word: "jefe",
    translation: "начальник",
    category: "work",
    type: "существительное",
    popularity: 338,
    examples: {
      present: { es: "Mi jefe es estricto", ru: "Мой начальник строгий" },
      past: { es: "Mi jefe era amable", ru: "Мой начальник был добрым" },
      future: { es: "Mi jefe será comprensivo", ru: "Мой начальник будет понимающим" }
    }
  },
  {
    id: 339,
    word: "empleado",
    translation: "сотрудник",
    category: "work",
    type: "существительное",
    popularity: 339,
    examples: {
      present: { es: "El empleado es eficiente", ru: "Сотрудник эффективный" },
      past: { es: "El empleado era nuevo", ru: "Сотрудник был новым" },
      future: { es: "El empleado será promovido", ru: "Сотрудник будет повышен" }
    }
  },
  {
    id: 340,
    word: "cliente",
    translation: "клиент",
    category: "work",
    type: "существительное",
    popularity: 340,
    examples: {
      present: { es: "El cliente está satisfecho", ru: "Клиент доволен" },
      past: { es: "El cliente estaba molesto", ru: "Клиент был недоволен" },
      future: { es: "El cliente estará contento", ru: "Клиент будет доволен" }
    }
  },
  {
    id: 341,
    word: "precio",
    translation: "цена",
    category: "work",
    type: "существительное",
    popularity: 341,
    examples: {
      present: { es: "El precio es alto", ru: "Цена высокая" },
      past: { es: "El precio era bajo", ru: "Цена была низкой" },
      future: { es: "El precio será justo", ru: "Цена будет справедливой" }
    }
  },
  {
    id: 342,
    word: "valor",
    translation: "ценность, стоимость",
    category: "work",
    type: "существительное",
    popularity: 342,
    examples: {
      present: { es: "El valor es grande", ru: "Ценность большая" },
      past: { es: "El valor era pequeño", ru: "Ценность была маленькой" },
      future: { es: "El valor será mayor", ru: "Ценность будет больше" }
    }
  },
  {
    id: 343,
    word: "cuenta",
    translation: "счёт",
    category: "work",
    type: "существительное",
    popularity: 343,
    examples: {
      present: { es: "La cuenta es correcta", ru: "Счёт правильный" },
      past: { es: "La cuenta era incorrecta", ru: "Счёт был неправильным" },
      future: { es: "La cuenta será pagada", ru: "Счёт будет оплачен" }
    }
  },
  {
    id: 344,
    word: "número",
    translation: "номер, число",
    category: "numbers",
    type: "существительное",
    popularity: 344,
    examples: {
      present: { es: "El número es par", ru: "Число чётное" },
      past: { es: "El número era impar", ru: "Число было нечётным" },
      future: { es: "El número será grande", ru: "Число будет большим" }
    }
  },
  {
    id: 345,
    word: "cantidad",
    translation: "количество",
    category: "numbers",
    type: "существительное",
    popularity: 345,
    examples: {
      present: { es: "La cantidad es suficiente", ru: "Количество достаточное" },
      past: { es: "La cantidad era insuficiente", ru: "Количество было недостаточным" },
      future: { es: "La cantidad será mayor", ru: "Количество будет больше" }
    }
  },
  {
    id: 346,
    word: "mitad",
    translation: "половина",
    category: "numbers",
    type: "существительное",
    popularity: 346,
    examples: {
      present: { es: "Es la mitad del camino", ru: "Это половина пути" },
      past: { es: "Era la mitad del precio", ru: "Это была половина цены" },
      future: { es: "Será la mitad del tiempo", ru: "Это будет половина времени" }
    }
  },
  {
    id: 347,
    word: "doble",
    translation: "двойной",
    category: "numbers",
    type: "прилагательное",
    popularity: 347,
    examples: {
      present: { es: "Es el doble de grande", ru: "Это вдвое больше" },
      past: { es: "Era el doble de caro", ru: "Это было вдвое дороже" },
      future: { es: "Será el doble de rápido", ru: "Это будет вдвое быстрее" }
    }
  },
  {
    id: 348,
    word: "triple",
    translation: "тройной",
    category: "numbers",
    type: "прилагательное",
    popularity: 348,
    examples: {
      present: { es: "Es el triple de largo", ru: "Это втрое длиннее" },
      past: { es: "Era el triple de pesado", ru: "Это было втрое тяжелее" },
      future: { es: "Será el triple de fuerte", ru: "Это будет втрое сильнее" }
    }
  },
  {
    id: 349,
    word: "par",
    translation: "пара",
    category: "numbers",
    type: "существительное",
    popularity: 349,
    examples: {
      present: { es: "Necesito un par de zapatos", ru: "Мне нужна пара обуви" },
      past: { es: "Necesitaba un par de guantes", ru: "Мне нужна была пара перчаток" },
      future: { es: "Necesitaré un par de días", ru: "Мне понадобится пара дней" }
    }
  },
  {
    id: 350,
    word: "docena",
    translation: "дюжина",
    category: "numbers",
    type: "существительное",
    popularity: 350,
    examples: {
      present: { es: "Compro una docena de huevos", ru: "Я покупаю дюжину яиц" },
      past: { es: "Compré una docena de rosas", ru: "Я купил дюжину роз" },
      future: { es: "Compraré una docena de manzanas", ru: "Я куплю дюжину яблок" }
    }
  },
  {
    id: 351,
    word: "cien",
    translation: "сто",
    category: "numbers",
    type: "числительное",
    popularity: 351,
    examples: {
      present: { es: "Tengo cien euros", ru: "У меня сто евро" },
      past: { es: "Tenía cien dólares", ru: "У меня было сто долларов" },
      future: { es: "Tendré cien años", ru: "Мне будет сто лет" }
    }
  },
  {
    id: 352,
    word: "mil",
    translation: "тысяча",
    category: "numbers",
    type: "числительное",
    popularity: 352,
    examples: {
      present: { es: "Cuesta mil euros", ru: "Стоит тысячу евро" },
      past: { es: "Costaba mil dólares", ru: "Стоило тысячу долларов" },
      future: { es: "Costará mil pesos", ru: "Будет стоить тысячу песо" }
    }
  },
  {
    id: 353,
    word: "millón",
    translation: "миллион",
    category: "numbers",
    type: "числительное",
    popularity: 353,
    examples: {
      present: { es: "Vale un millón", ru: "Стоит миллион" },
      past: { es: "Valía un millón", ru: "Стоило миллион" },
      future: { es: "Valdrá un millón", ru: "Будет стоить миллион" }
    }
  },
  {
    id: 354,
    word: "edad",
    translation: "возраст",
    category: "time",
    type: "существительное",
    popularity: 354,
    examples: {
      present: { es: "¿Cuál es tu edad?", ru: "Какой твой возраст?" },
      past: { es: "¿Cuál era tu edad?", ru: "Какой был твой возраст?" },
      future: { es: "¿Cuál será tu edad?", ru: "Какой будет твой возраст?" }
    }
  },
  {
    id: 355,
    word: "joven",
    translation: "молодой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 355,
    examples: {
      present: { es: "Soy joven", ru: "Я молодой" },
      past: { es: "Era joven", ru: "Я был молодым" },
      future: { es: "Seré joven", ru: "Я буду молодым" }
    }
  },
  {
    id: 356,
    word: "viejo",
    translation: "старый (о человеке)",
    category: "adjectives",
    type: "прилагательное",
    popularity: 356,
    examples: {
      present: { es: "Es un hombre viejo", ru: "Это старый человек" },
      past: { es: "Era un hombre viejo", ru: "Это был старый человек" },
      future: { es: "Será un hombre viejo", ru: "Это будет старый человек" }
    }
  },
  {
    id: 357,
    word: "fuerte",
    translation: "сильный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 357,
    examples: {
      present: { es: "Es muy fuerte", ru: "Он очень сильный" },
      past: { es: "Era muy fuerte", ru: "Он был очень сильным" },
      future: { es: "Será muy fuerte", ru: "Он будет очень сильным" }
    }
  },
  {
    id: 358,
    word: "débil",
    translation: "слабый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 358,
    examples: {
      present: { es: "Me siento débil", ru: "Я чувствую себя слабым" },
      past: { es: "Me sentía débil", ru: "Я чувствовал себя слабым" },
      future: { es: "Me sentiré débil", ru: "Я буду чувствовать себя слабым" }
    }
  },
  {
    id: 359,
    word: "rápido",
    translation: "быстрый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 359,
    examples: {
      present: { es: "El coche es rápido", ru: "Машина быстрая" },
      past: { es: "El coche era rápido", ru: "Машина была быстрой" },
      future: { es: "El coche será rápido", ru: "Машина будет быстрой" }
    }
  },
  {
    id: 360,
    word: "lento",
    translation: "медленный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 360,
    examples: {
      present: { es: "El tren es lento", ru: "Поезд медленный" },
      past: { es: "El tren era lento", ru: "Поезд был медленным" },
      future: { es: "El tren será lento", ru: "Поезд будет медленным" }
    }
  },
  {
    id: 361,
    word: "alto",
    translation: "высокий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 361,
    examples: {
      present: { es: "El edificio es alto", ru: "Здание высокое" },
      past: { es: "El edificio era alto", ru: "Здание было высоким" },
      future: { es: "El edificio será alto", ru: "Здание будет высоким" }
    }
  },
  {
    id: 362,
    word: "bajo",
    translation: "низкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 362,
    examples: {
      present: { es: "El techo es bajo", ru: "Потолок низкий" },
      past: { es: "El techo era bajo", ru: "Потолок был низким" },
      future: { es: "El techo será bajo", ru: "Потолок будет низким" }
    }
  },
  {
    id: 363,
    word: "largo",
    translation: "длинный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 363,
    examples: {
      present: { es: "El río es largo", ru: "Река длинная" },
      past: { es: "El río era largo", ru: "Река была длинной" },
      future: { es: "El río será largo", ru: "Река будет длинной" }
    }
  },
  {
    id: 364,
    word: "corto",
    translation: "короткий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 364,
    examples: {
      present: { es: "El camino es corto", ru: "Путь короткий" },
      past: { es: "El camino era corto", ru: "Путь был коротким" },
      future: { es: "El camino será corto", ru: "Путь будет коротким" }
    }
  },
  {
    id: 365,
    word: "ancho",
    translation: "широкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 365,
    examples: {
      present: { es: "La calle es ancha", ru: "Улица широкая" },
      past: { es: "La calle era ancha", ru: "Улица была широкой" },
      future: { es: "La calle será ancha", ru: "Улица будет широкой" }
    }
  },
  {
    id: 366,
    word: "estrecho",
    translation: "узкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 366,
    examples: {
      present: { es: "El pasillo es estrecho", ru: "Коридор узкий" },
      past: { es: "El pasillo era estrecho", ru: "Коридор был узким" },
      future: { es: "El pasillo será estrecho", ru: "Коридор будет узким" }
    }
  },
  {
    id: 367,
    word: "gordo",
    translation: "толстый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 367,
    examples: {
      present: { es: "El libro es gordo", ru: "Книга толстая" },
      past: { es: "El libro era gordo", ru: "Книга была толстой" },
      future: { es: "El libro será gordo", ru: "Книга будет толстой" }
    }
  },
  {
    id: 368,
    word: "delgado",
    translation: "тонкий, худой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 368,
    examples: {
      present: { es: "Es muy delgado", ru: "Он очень худой" },
      past: { es: "Era muy delgado", ru: "Он был очень худым" },
      future: { es: "Será muy delgado", ru: "Он будет очень худым" }
    }
  },
  {
    id: 369,
    word: "pesado",
    translation: "тяжёлый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 369,
    examples: {
      present: { es: "La maleta es pesada", ru: "Чемодан тяжёлый" },
      past: { es: "La maleta era pesada", ru: "Чемодан был тяжёлым" },
      future: { es: "La maleta será pesada", ru: "Чемодан будет тяжёлым" }
    }
  },
  {
    id: 370,
    word: "ligero",
    translation: "лёгкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 370,
    examples: {
      present: { es: "La pluma es ligera", ru: "Перо лёгкое" },
      past: { es: "La pluma era ligera", ru: "Перо было лёгким" },
      future: { es: "La pluma será ligera", ru: "Перо будет лёгким" }
    }
  },
  {
    id: 371,
    word: "duro",
    translation: "твёрдый, жёсткий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 371,
    examples: {
      present: { es: "El pan es duro", ru: "Хлеб твёрдый" },
      past: { es: "El pan era duro", ru: "Хлеб был твёрдым" },
      future: { es: "El pan será duro", ru: "Хлеб будет твёрдым" }
    }
  },
  {
    id: 372,
    word: "blando",
    translation: "мягкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 372,
    examples: {
      present: { es: "El colchón es blando", ru: "Матрас мягкий" },
      past: { es: "El colchón era blando", ru: "Матрас был мягким" },
      future: { es: "El colchón será blando", ru: "Матрас будет мягким" }
    }
  },
  {
    id: 373,
    word: "caliente",
    translation: "горячий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 373,
    examples: {
      present: { es: "El café está caliente", ru: "Кофе горячий" },
      past: { es: "El café estaba caliente", ru: "Кофе был горячим" },
      future: { es: "El café estará caliente", ru: "Кофе будет горячим" }
    }
  },
  {
    id: 374,
    word: "frío",
    translation: "холодный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 374,
    examples: {
      present: { es: "El agua está fría", ru: "Вода холодная" },
      past: { es: "El agua estaba fría", ru: "Вода была холодной" },
      future: { es: "El agua estará fría", ru: "Вода будет холодной" }
    }
  },
  {
    id: 375,
    word: "tibio",
    translation: "тёплый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 375,
    examples: {
      present: { es: "El té está tibio", ru: "Чай тёплый" },
      past: { es: "El té estaba tibio", ru: "Чай был тёплым" },
      future: { es: "El té estará tibio", ru: "Чай будет тёплым" }
    }
  },
  {
    id: 376,
    word: "seco",
    translation: "сухой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 376,
    examples: {
      present: { es: "El clima es seco", ru: "Климат сухой" },
      past: { es: "El clima era seco", ru: "Климат был сухим" },
      future: { es: "El clima será seco", ru: "Климат будет сухим" }
    }
  },
  {
    id: 377,
    word: "húmedo",
    translation: "влажный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 377,
    examples: {
      present: { es: "El aire es húmedo", ru: "Воздух влажный" },
      past: { es: "El aire era húmedo", ru: "Воздух был влажным" },
      future: { es: "El aire será húmedo", ru: "Воздух будет влажным" }
    }
  },
  {
    id: 378,
    word: "limpio",
    translation: "чистый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 378,
    examples: {
      present: { es: "El cuarto está limpio", ru: "Комната чистая" },
      past: { es: "El cuarto estaba limpio", ru: "Комната была чистой" },
      future: { es: "El cuarto estará limpio", ru: "Комната будет чистой" }
    }
  },
  {
    id: 379,
    word: "sucio",
    translation: "грязный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 379,
    examples: {
      present: { es: "El piso está sucio", ru: "Пол грязный" },
      past: { es: "El piso estaba sucio", ru: "Пол был грязным" },
      future: { es: "El piso estará sucio", ru: "Пол будет грязным" }
    }
  },
  {
    id: 380,
    word: "claro",
    translation: "ясный, светлый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 380,
    examples: {
      present: { es: "El día es claro", ru: "День ясный" },
      past: { es: "El día era claro", ru: "День был ясным" },
      future: { es: "El día será claro", ru: "День будет ясным" }
    }
  },
  {
    id: 381,
    word: "oscuro",
    translation: "тёмный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 381,
    examples: {
      present: { es: "El cuarto es oscuro", ru: "Комната тёмная" },
      past: { es: "El cuarto era oscuro", ru: "Комната была тёмной" },
      future: { es: "El cuarto será oscuro", ru: "Комната будет тёмной" }
    }
  },
  {
    id: 382,
    word: "brillante",
    translation: "яркий, блестящий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 382,
    examples: {
      present: { es: "La estrella es brillante", ru: "Звезда яркая" },
      past: { es: "La estrella era brillante", ru: "Звезда была яркой" },
      future: { es: "La estrella será brillante", ru: "Звезда будет яркой" }
    }
  },
  {
    id: 383,
    word: "opaco",
    translation: "тусклый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 383,
    examples: {
      present: { es: "El metal es opaco", ru: "Металл тусклый" },
      past: { es: "El metal era opaco", ru: "Металл был тусклым" },
      future: { es: "El metal será opaco", ru: "Металл будет тусклым" }
    }
  },
  {
    id: 384,
    word: "suave",
    translation: "мягкий, нежный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 384,
    examples: {
      present: { es: "La piel es suave", ru: "Кожа мягкая" },
      past: { es: "La piel era suave", ru: "Кожа была мягкой" },
      future: { es: "La piel será suave", ru: "Кожа будет мягкой" }
    }
  },
  {
    id: 385,
    word: "áspero",
    translation: "грубый, шершавый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 385,
    examples: {
      present: { es: "La superficie es áspera", ru: "Поверхность шершавая" },
      past: { es: "La superficie era áspera", ru: "Поверхность была шершавой" },
      future: { es: "La superficie será áspera", ru: "Поверхность будет шершавой" }
    }
  },
  {
    id: 386,
    word: "liso",
    translation: "гладкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 386,
    examples: {
      present: { es: "El vidrio es liso", ru: "Стекло гладкое" },
      past: { es: "El vidrio era liso", ru: "Стекло было гладким" },
      future: { es: "El vidrio será liso", ru: "Стекло будет гладким" }
    }
  },
  {
    id: 387,
    word: "lleno",
    translation: "полный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 387,
    examples: {
      present: { es: "El vaso está lleno", ru: "Стакан полный" },
      past: { es: "El vaso estaba lleno", ru: "Стакан был полным" },
      future: { es: "El vaso estará lleno", ru: "Стакан будет полным" }
    }
  },
  {
    id: 388,
    word: "vacío",
    translation: "пустой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 388,
    examples: {
      present: { es: "El cuarto está vacío", ru: "Комната пустая" },
      past: { es: "El cuarto estaba vacío", ru: "Комната была пустой" },
      future: { es: "El cuarto estará vacío", ru: "Комната будет пустой" }
    }
  },
  {
    id: 389,
    word: "abierto",
    translation: "открытый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 389,
    examples: {
      present: { es: "La tienda está abierta", ru: "Магазин открыт" },
      past: { es: "La tienda estaba abierta", ru: "Магазин был открыт" },
      future: { es: "La tienda estará abierta", ru: "Магазин будет открыт" }
    }
  },
  {
    id: 390,
    word: "cerrado",
    translation: "закрытый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 390,
    examples: {
      present: { es: "El museo está cerrado", ru: "Музей закрыт" },
      past: { es: "El museo estaba cerrado", ru: "Музей был закрыт" },
      future: { es: "El museo estará cerrado", ru: "Музей будет закрыт" }
    }
  },
  {
    id: 391,
    word: "roto",
    translation: "сломанный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 391,
    examples: {
      present: { es: "El teléfono está roto", ru: "Телефон сломан" },
      past: { es: "El teléfono estaba roto", ru: "Телефон был сломан" },
      future: { es: "El teléfono estará roto", ru: "Телефон будет сломан" }
    }
  },
  {
    id: 392,
    word: "entero",
    translation: "целый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 392,
    examples: {
      present: { es: "El plato está entero", ru: "Тарелка целая" },
      past: { es: "El plato estaba entero", ru: "Тарелка была целой" },
      future: { es: "El plato estará entero", ru: "Тарелка будет целой" }
    }
  },
  {
    id: 393,
    word: "completo",
    translation: "полный, завершённый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 393,
    examples: {
      present: { es: "El trabajo está completo", ru: "Работа завершена" },
      past: { es: "El trabajo estaba completo", ru: "Работа была завершена" },
      future: { es: "El trabajo estará completo", ru: "Работа будет завершена" }
    }
  },
  {
    id: 394,
    word: "incompleto",
    translation: "неполный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 394,
    examples: {
      present: { es: "El proyecto está incompleto", ru: "Проект неполный" },
      past: { es: "El proyecto estaba incompleto", ru: "Проект был неполным" },
      future: { es: "El proyecto estará incompleto", ru: "Проект будет неполным" }
    }
  },
  {
    id: 395,
    word: "correcto",
    translation: "правильный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 395,
    examples: {
      present: { es: "La respuesta es correcta", ru: "Ответ правильный" },
      past: { es: "La respuesta era correcta", ru: "Ответ был правильным" },
      future: { es: "La respuesta será correcta", ru: "Ответ будет правильным" }
    }
  },
  {
    id: 396,
    word: "incorrecto",
    translation: "неправильный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 396,
    examples: {
      present: { es: "El cálculo es incorrecto", ru: "Расчёт неправильный" },
      past: { es: "El cálculo era incorrecto", ru: "Расчёт был неправильным" },
      future: { es: "El cálculo será incorrecto", ru: "Расчёт будет неправильным" }
    }
  },
  {
    id: 397,
    word: "seguro",
    translation: "безопасный, уверенный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 397,
    examples: {
      present: { es: "El lugar es seguro", ru: "Место безопасное" },
      past: { es: "El lugar era seguro", ru: "Место было безопасным" },
      future: { es: "El lugar será seguro", ru: "Место будет безопасным" }
    }
  },
  {
    id: 398,
    word: "peligroso",
    translation: "опасный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 398,
    examples: {
      present: { es: "El camino es peligroso", ru: "Дорога опасная" },
      past: { es: "El camino era peligroso", ru: "Дорога была опасной" },
      future: { es: "El camino será peligroso", ru: "Дорога будет опасной" }
    }
  },
  {
    id: 399,
    word: "tranquilo",
    translation: "спокойный",
    category: "emotions",
    type: "прилагательное",
    popularity: 399,
    examples: {
      present: { es: "Estoy tranquilo", ru: "Я спокоен" },
      past: { es: "Estaba tranquilo", ru: "Я был спокоен" },
      future: { es: "Estaré tranquilo", ru: "Я буду спокоен" }
    }
  },
  {
    id: 400,
    word: "nervioso",
    translation: "нервный",
    category: "emotions",
    type: "прилагательное",
    popularity: 400,
    examples: {
      present: { es: "Estoy nervioso", ru: "Я нервничаю" },
      past: { es: "Estaba nervioso", ru: "Я нервничал" },
      future: { es: "Estaré nervioso", ru: "Я буду нервничать" }
    }
  },
  {
    id: 401,
    word: "feliz",
    translation: "счастливый",
    category: "emotions",
    type: "прилагательное",
    popularity: 401,
    examples: {
      present: { es: "Soy feliz", ru: "Я счастлив" },
      past: { es: "Era feliz", ru: "Я был счастлив" },
      future: { es: "Seré feliz", ru: "Я буду счастлив" }
    }
  },
  {
    id: 402,
    word: "triste",
    translation: "грустный",
    category: "emotions",
    type: "прилагательное",
    popularity: 402,
    examples: {
      present: { es: "Estoy triste", ru: "Я грустный" },
      past: { es: "Estaba triste", ru: "Я был грустным" },
      future: { es: "Estaré triste", ru: "Я буду грустным" }
    }
  },
  {
    id: 403,
    word: "alegre",
    translation: "весёлый",
    category: "emotions",
    type: "прилагательное",
    popularity: 403,
    examples: {
      present: { es: "Es muy alegre", ru: "Он очень весёлый" },
      past: { es: "Era muy alegre", ru: "Он был очень весёлым" },
      future: { es: "Será muy alegre", ru: "Он будет очень весёлым" }
    }
  },
  {
    id: 404,
    word: "enojado",
    translation: "сердитый",
    category: "emotions",
    type: "прилагательное",
    popularity: 404,
    examples: {
      present: { es: "Estoy enojado", ru: "Я сердитый" },
      past: { es: "Estaba enojado", ru: "Я был сердитым" },
      future: { es: "Estaré enojado", ru: "Я буду сердитым" }
    }
  },
  {
    id: 405,
    word: "cansado",
    translation: "уставший",
    category: "emotions",
    type: "прилагательное",
    popularity: 405,
    examples: {
      present: { es: "Estoy cansado", ru: "Я устал" },
      past: { es: "Estaba cansado", ru: "Я был уставшим" },
      future: { es: "Estaré cansado", ru: "Я буду уставшим" }
    }
  },
  {
    id: 406,
    word: "aburrido",
    translation: "скучающий",
    category: "emotions",
    type: "прилагательное",
    popularity: 406,
    examples: {
      present: { es: "Estoy aburrido", ru: "Мне скучно" },
      past: { es: "Estaba aburrido", ru: "Мне было скучно" },
      future: { es: "Estaré aburrido", ru: "Мне будет скучно" }
    }
  },
  {
    id: 407,
    word: "interesado",
    translation: "заинтересованный",
    category: "emotions",
    type: "прилагательное",
    popularity: 407,
    examples: {
      present: { es: "Estoy interesado", ru: "Я заинтересован" },
      past: { es: "Estaba interesado", ru: "Я был заинтересован" },
      future: { es: "Estaré interesado", ru: "Я буду заинтересован" }
    }
  },
  {
    id: 408,
    word: "sorprendido",
    translation: "удивлённый",
    category: "emotions",
    type: "прилагательное",
    popularity: 408,
    examples: {
      present: { es: "Estoy sorprendido", ru: "Я удивлён" },
      past: { es: "Estaba sorprendido", ru: "Я был удивлён" },
      future: { es: "Estaré sorprendido", ru: "Я буду удивлён" }
    }
  },
  {
    id: 409,
    word: "asustado",
    translation: "испуганный",
    category: "emotions",
    type: "прилагательное",
    popularity: 409,
    examples: {
      present: { es: "Estoy asustado", ru: "Я испуган" },
      past: { es: "Estaba asustado", ru: "Я был испуган" },
      future: { es: "Estaré asustado", ru: "Я буду испуган" }
    }
  },
  {
    id: 410,
    word: "preocupado",
    translation: "обеспокоенный",
    category: "emotions",
    type: "прилагательное",
    popularity: 410,
    examples: {
      present: { es: "Estoy preocupado", ru: "Я обеспокоен" },
      past: { es: "Estaba preocupado", ru: "Я был обеспокоен" },
      future: { es: "Estaré preocupado", ru: "Я буду обеспокоен" }
    }
  },
  {
    id: 411,
    word: "emocionado",
    translation: "взволнованный",
    category: "emotions",
    type: "прилагательное",
    popularity: 411,
    examples: {
      present: { es: "Estoy emocionado", ru: "Я взволнован" },
      past: { es: "Estaba emocionado", ru: "Я был взволнован" },
      future: { es: "Estaré emocionado", ru: "Я буду взволнован" }
    }
  },
  {
    id: 412,
    word: "confundido",
    translation: "смущённый, запутанный",
    category: "emotions",
    type: "прилагательное",
    popularity: 412,
    examples: {
      present: { es: "Estoy confundido", ru: "Я смущён" },
      past: { es: "Estaba confundido", ru: "Я был смущён" },
      future: { es: "Estaré confundido", ru: "Я буду смущён" }
    }
  },
  {
    id: 413,
    word: "satisfecho",
    translation: "довольный",
    category: "emotions",
    type: "прилагательное",
    popularity: 413,
    examples: {
      present: { es: "Estoy satisfecho", ru: "Я доволен" },
      past: { es: "Estaba satisfecho", ru: "Я был доволен" },
      future: { es: "Estaré satisfecho", ru: "Я буду доволен" }
    }
  },
  {
    id: 414,
    word: "orgulloso",
    translation: "гордый",
    category: "emotions",
    type: "прилагательное",
    popularity: 414,
    examples: {
      present: { es: "Estoy orgulloso", ru: "Я горжусь" },
      past: { es: "Estaba orgulloso", ru: "Я гордился" },
      future: { es: "Estaré orgulloso", ru: "Я буду гордиться" }
    }
  },
  {
    id: 415,
    word: "enfermo",
    translation: "больной",
    category: "body",
    type: "прилагательное",
    popularity: 415,
    examples: {
      present: { es: "Estoy enfermo", ru: "Я болен" },
      past: { es: "Estaba enfermo", ru: "Я был болен" },
      future: { es: "Estaré enfermo", ru: "Я буду болен" }
    }
  },
  {
    id: 416,
    word: "sano",
    translation: "здоровый",
    category: "body",
    type: "прилагательное",
    popularity: 416,
    examples: {
      present: { es: "Estoy sano", ru: "Я здоров" },
      past: { es: "Estaba sano", ru: "Я был здоров" },
      future: { es: "Estaré sano", ru: "Я буду здоров" }
    }
  },
  {
    id: 417,
    word: "hambre",
    translation: "голод",
    category: "body",
    type: "существительное",
    popularity: 417,
    examples: {
      present: { es: "Tengo hambre", ru: "Я голоден" },
      past: { es: "Tenía hambre", ru: "Я был голоден" },
      future: { es: "Tendré hambre", ru: "Я буду голоден" }
    }
  },
  {
    id: 418,
    word: "sed",
    translation: "жажда",
    category: "body",
    type: "существительное",
    popularity: 418,
    examples: {
      present: { es: "Tengo sed", ru: "Я хочу пить" },
      past: { es: "Tenía sed", ru: "Я хотел пить" },
      future: { es: "Tendré sed", ru: "Я захочу пить" }
    }
  },
  {
    id: 419,
    word: "sueño",
    translation: "сон, сновидение",
    category: "body",
    type: "существительное",
    popularity: 419,
    examples: {
      present: { es: "Tengo sueño", ru: "Я хочу спать" },
      past: { es: "Tenía sueño", ru: "Я хотел спать" },
      future: { es: "Tendré sueño", ru: "Я захочу спать" }
    }
  },
  {
    id: 420,
    word: "miedo",
    translation: "страх",
    category: "emotions",
    type: "существительное",
    popularity: 420,
    examples: {
      present: { es: "Tengo miedo", ru: "Я боюсь" },
      past: { es: "Tenía miedo", ru: "Я боялся" },
      future: { es: "Tendré miedo", ru: "Я буду бояться" }
    }
  },
  {
    id: 421,
    word: "dolor",
    translation: "боль",
    category: "body",
    type: "существительное",
    popularity: 421,
    examples: {
      present: { es: "Tengo dolor", ru: "У меня боль" },
      past: { es: "Tenía dolor", ru: "У меня была боль" },
      future: { es: "Tendré dolor", ru: "У меня будет боль" }
    }
  },
  {
    id: 422,
    word: "salud",
    translation: "здоровье",
    category: "body",
    type: "существительное",
    popularity: 422,
    examples: {
      present: { es: "La salud es importante", ru: "Здоровье важно" },
      past: { es: "La salud era buena", ru: "Здоровье было хорошим" },
      future: { es: "La salud será mejor", ru: "Здоровье будет лучше" }
    }
  },
  {
    id: 423,
    word: "enfermedad",
    translation: "болезнь",
    category: "body",
    type: "существительное",
    popularity: 423,
    examples: {
      present: { es: "La enfermedad es grave", ru: "Болезнь серьёзная" },
      past: { es: "La enfermedad era leve", ru: "Болезнь была лёгкой" },
      future: { es: "La enfermedad será curada", ru: "Болезнь будет вылечена" }
    }
  },
  {
    id: 424,
    word: "medicina",
    translation: "медицина, лекарство",
    category: "body",
    type: "существительное",
    popularity: 424,
    examples: {
      present: { es: "Tomo medicina", ru: "Я принимаю лекарство" },
      past: { es: "Tomaba medicina", ru: "Я принимал лекарство" },
      future: { es: "Tomaré medicina", ru: "Я буду принимать лекарство" }
    }
  },
  {
    id: 425,
    word: "médico",
    translation: "врач",
    category: "body",
    type: "существительное",
    popularity: 425,
    examples: {
      present: { es: "El médico es bueno", ru: "Врач хороший" },
      past: { es: "El médico era joven", ru: "Врач был молодым" },
      future: { es: "El médico será famoso", ru: "Врач будет знаменитым" }
    }
  },
  {
    id: 426,
    word: "paciente",
    translation: "пациент",
    category: "body",
    type: "существительное",
    popularity: 426,
    examples: {
      present: { es: "El paciente está mejor", ru: "Пациент лучше" },
      past: { es: "El paciente estaba peor", ru: "Пациент был хуже" },
      future: { es: "El paciente estará sano", ru: "Пациент будет здоров" }
    }
  },
  {
    id: 427,
    word: "sangre",
    translation: "кровь",
    category: "body",
    type: "существительное",
    popularity: 427,
    examples: {
      present: { es: "La sangre es roja", ru: "Кровь красная" },
      past: { es: "La sangre era fresca", ru: "Кровь была свежей" },
      future: { es: "La sangre será analizada", ru: "Кровь будет проанализирована" }
    }
  },
  {
    id: 428,
    word: "hueso",
    translation: "кость",
    category: "body",
    type: "существительное",
    popularity: 428,
    examples: {
      present: { es: "El hueso es fuerte", ru: "Кость крепкая" },
      past: { es: "El hueso era débil", ru: "Кость была слабой" },
      future: { es: "El hueso será roto", ru: "Кость будет сломана" }
    }
  },
  {
    id: 429,
    word: "músculo",
    translation: "мышца",
    category: "body",
    type: "существительное",
    popularity: 429,
    examples: {
      present: { es: "El músculo duele", ru: "Мышца болит" },
      past: { es: "El músculo dolía", ru: "Мышца болела" },
      future: { es: "El músculo dolerá", ru: "Мышца будет болеть" }
    }
  },
  {
    id: 430,
    word: "piel",
    translation: "кожа",
    category: "body",
    type: "существительное",
    popularity: 430,
    examples: {
      present: { es: "La piel es suave", ru: "Кожа мягкая" },
      past: { es: "La piel era áspera", ru: "Кожа была грубой" },
      future: { es: "La piel será sana", ru: "Кожа будет здоровой" }
    }
  },
  {
    id: 431,
    word: "pelo",
    translation: "волосы",
    category: "body",
    type: "существительное",
    popularity: 431,
    examples: {
      present: { es: "El pelo es largo", ru: "Волосы длинные" },
      past: { es: "El pelo era corto", ru: "Волосы были короткими" },
      future: { es: "El pelo será rubio", ru: "Волосы будут светлыми" }
    }
  },
  {
    id: 432,
    word: "cara",
    translation: "лицо",
    category: "body",
    type: "существительное",
    popularity: 432,
    examples: {
      present: { es: "La cara es bonita", ru: "Лицо красивое" },
      past: { es: "La cara era triste", ru: "Лицо было грустным" },
      future: { es: "La cara será feliz", ru: "Лицо будет счастливым" }
    }
  },
  {
    id: 433,
    word: "nariz",
    translation: "нос",
    category: "body",
    type: "существительное",
    popularity: 433,
    examples: {
      present: { es: "La nariz es grande", ru: "Нос большой" },
      past: { es: "La nariz era pequeña", ru: "Нос был маленьким" },
      future: { es: "La nariz será operada", ru: "Нос будет прооперирован" }
    }
  },
  {
    id: 434,
    word: "oreja",
    translation: "ухо",
    category: "body",
    type: "существительное",
    popularity: 434,
    examples: {
      present: { es: "La oreja duele", ru: "Ухо болит" },
      past: { es: "La oreja dolía", ru: "Ухо болело" },
      future: { es: "La oreja dolerá", ru: "Ухо будет болеть" }
    }
  },
  {
    id: 435,
    word: "diente",
    translation: "зуб",
    category: "body",
    type: "существительное",
    popularity: 435,
    examples: {
      present: { es: "El diente duele", ru: "Зуб болит" },
      past: { es: "El diente dolía", ru: "Зуб болел" },
      future: { es: "El diente dolerá", ru: "Зуб будет болеть" }
    }
  },
  {
    id: 436,
    word: "lengua",
    translation: "язык (орган)",
    category: "body",
    type: "существительное",
    popularity: 436,
    examples: {
      present: { es: "La lengua es rosada", ru: "Язык розовый" },
      past: { es: "La lengua era blanca", ru: "Язык был белым" },
      future: { es: "La lengua será sana", ru: "Язык будет здоровым" }
    }
  },
  {
    id: 437,
    word: "labio",
    translation: "губа",
    category: "body",
    type: "существительное",
    popularity: 437,
    examples: {
      present: { es: "El labio está seco", ru: "Губа сухая" },
      past: { es: "El labio estaba húmedo", ru: "Губа была влажной" },
      future: { es: "El labio estará rojo", ru: "Губа будет красной" }
    }
  },
  {
    id: 438,
    word: "cuello",
    translation: "шея",
    category: "body",
    type: "существительное",
    popularity: 438,
    examples: {
      present: { es: "El cuello duele", ru: "Шея болит" },
      past: { es: "El cuello dolía", ru: "Шея болела" },
      future: { es: "El cuello dolerá", ru: "Шея будет болеть" }
    }
  },
  {
    id: 439,
    word: "hombro",
    translation: "плечо",
    category: "body",
    type: "существительное",
    popularity: 439,
    examples: {
      present: { es: "El hombro duele", ru: "Плечо болит" },
      past: { es: "El hombro dolía", ru: "Плечо болело" },
      future: { es: "El hombro dolerá", ru: "Плечо будет болеть" }
    }
  },
  {
    id: 440,
    word: "brazo",
    translation: "рука (от плеча)",
    category: "body",
    type: "существительное",
    popularity: 440,
    examples: {
      present: { es: "El brazo es fuerte", ru: "Рука сильная" },
      past: { es: "El brazo era débil", ru: "Рука была слабой" },
      future: { es: "El brazo será musculoso", ru: "Рука будет мускулистой" }
    }
  },
  {
    id: 441,
    word: "codo",
    translation: "локоть",
    category: "body",
    type: "существительное",
    popularity: 441,
    examples: {
      present: { es: "El codo duele", ru: "Локоть болит" },
      past: { es: "El codo dolía", ru: "Локоть болел" },
      future: { es: "El codo dolerá", ru: "Локоть будет болеть" }
    }
  },
  {
    id: 442,
    word: "dedo",
    translation: "палец",
    category: "body",
    type: "существительное",
    popularity: 442,
    examples: {
      present: { es: "El dedo es largo", ru: "Палец длинный" },
      past: { es: "El dedo era corto", ru: "Палец был коротким" },
      future: { es: "El dedo será roto", ru: "Палец будет сломан" }
    }
  },
  {
    id: 443,
    word: "uña",
    translation: "ноготь",
    category: "body",
    type: "существительное",
    popularity: 443,
    examples: {
      present: { es: "La uña es larga", ru: "Ноготь длинный" },
      past: { es: "La uña era corta", ru: "Ноготь был коротким" },
      future: { es: "La uña será pintada", ru: "Ноготь будет накрашен" }
    }
  },
  {
    id: 444,
    word: "espalda",
    translation: "спина",
    category: "body",
    type: "существительное",
    popularity: 444,
    examples: {
      present: { es: "La espalda duele", ru: "Спина болит" },
      past: { es: "La espalda dolía", ru: "Спина болела" },
      future: { es: "La espalda dolerá", ru: "Спина будет болеть" }
    }
  },
  {
    id: 445,
    word: "pecho",
    translation: "грудь",
    category: "body",
    type: "существительное",
    popularity: 445,
    examples: {
      present: { es: "El pecho duele", ru: "Грудь болит" },
      past: { es: "El pecho dolía", ru: "Грудь болела" },
      future: { es: "El pecho dolerá", ru: "Грудь будет болеть" }
    }
  },
  {
    id: 446,
    word: "estómago",
    translation: "желудок",
    category: "body",
    type: "существительное",
    popularity: 446,
    examples: {
      present: { es: "El estómago duele", ru: "Желудок болит" },
      past: { es: "El estómago dolía", ru: "Желудок болел" },
      future: { es: "El estómago dolerá", ru: "Желудок будет болеть" }
    }
  },
  {
    id: 447,
    word: "pierna",
    translation: "нога (от бедра)",
    category: "body",
    type: "существительное",
    popularity: 447,
    examples: {
      present: { es: "La pierna es larga", ru: "Нога длинная" },
      past: { es: "La pierna era corta", ru: "Нога была короткой" },
      future: { es: "La pierna será fuerte", ru: "Нога будет сильной" }
    }
  },
  {
    id: 448,
    word: "rodilla",
    translation: "колено",
    category: "body",
    type: "существительное",
    popularity: 448,
    examples: {
      present: { es: "La rodilla duele", ru: "Колено болит" },
      past: { es: "La rodilla dolía", ru: "Колено болело" },
      future: { es: "La rodilla dolerá", ru: "Колено будет болеть" }
    }
  },
  {
    id: 449,
    word: "tobillo",
    translation: "лодыжка",
    category: "body",
    type: "существительное",
    popularity: 449,
    examples: {
      present: { es: "El tobillo duele", ru: "Лодыжка болит" },
      past: { es: "El tobillo dolía", ru: "Лодыжка болела" },
      future: { es: "El tobillo dolerá", ru: "Лодыжка будет болеть" }
    }
  },
  {
    id: 450,
    word: "cerebro",
    translation: "мозг",
    category: "body",
    type: "существительное",
    popularity: 450,
    examples: {
      present: { es: "El cerebro es complejo", ru: "Мозг сложный" },
      past: { es: "El cerebro era activo", ru: "Мозг был активным" },
      future: { es: "El cerebro será estudiado", ru: "Мозг будет изучен" }
    }
  },
  {
    id: 451,
    word: "mente",
    translation: "разум, ум",
    category: "body",
    type: "существительное",
    popularity: 451,
    examples: {
      present: { es: "La mente es poderosa", ru: "Разум могущественный" },
      past: { es: "La mente era clara", ru: "Разум был ясным" },
      future: { es: "La mente será fuerte", ru: "Разум будет сильным" }
    }
  },
  {
    id: 452,
    word: "pensamiento",
    translation: "мысль",
    category: "emotions",
    type: "существительное",
    popularity: 452,
    examples: {
      present: { es: "El pensamiento es profundo", ru: "Мысль глубокая" },
      past: { es: "El pensamiento era simple", ru: "Мысль была простой" },
      future: { es: "El pensamiento será claro", ru: "Мысль будет ясной" }
    }
  },
  {
    id: 453,
    word: "memoria",
    translation: "память",
    category: "body",
    type: "существительное",
    popularity: 453,
    examples: {
      present: { es: "La memoria es buena", ru: "Память хорошая" },
      past: { es: "La memoria era mala", ru: "Память была плохой" },
      future: { es: "La memoria será mejor", ru: "Память будет лучше" }
    }
  },
  {
    id: 454,
    word: "atención",
    translation: "внимание",
    category: "emotions",
    type: "существительное",
    popularity: 454,
    examples: {
      present: { es: "Presto atención", ru: "Я обращаю внимание" },
      past: { es: "Prestaba atención", ru: "Я обращал внимание" },
      future: { es: "Prestaré atención", ru: "Я буду обращать внимание" }
    }
  },
  {
    id: 455,
    word: "inteligencia",
    translation: "интеллект",
    category: "adjectives",
    type: "существительное",
    popularity: 455,
    examples: {
      present: { es: "La inteligencia es alta", ru: "Интеллект высокий" },
      past: { es: "La inteligencia era baja", ru: "Интеллект был низким" },
      future: { es: "La inteligencia será desarrollada", ru: "Интеллект будет развит" }
    }
  },
  {
    id: 456,
    word: "inteligente",
    translation: "умный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 456,
    examples: {
      present: { es: "Es muy inteligente", ru: "Он очень умный" },
      past: { es: "Era muy inteligente", ru: "Он был очень умным" },
      future: { es: "Será muy inteligente", ru: "Он будет очень умным" }
    }
  },
  {
    id: 457,
    word: "tonto",
    translation: "глупый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 457,
    examples: {
      present: { es: "Es tonto", ru: "Он глупый" },
      past: { es: "Era tonto", ru: "Он был глупым" },
      future: { es: "Será tonto", ru: "Он будет глупым" }
    }
  },
  {
    id: 458,
    word: "sabio",
    translation: "мудрый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 458,
    examples: {
      present: { es: "Es un hombre sabio", ru: "Это мудрый человек" },
      past: { es: "Era un hombre sabio", ru: "Это был мудрый человек" },
      future: { es: "Será un hombre sabio", ru: "Это будет мудрый человек" }
    }
  },
  {
    id: 459,
    word: "loco",
    translation: "сумасшедший",
    category: "adjectives",
    type: "прилагательное",
    popularity: 459,
    examples: {
      present: { es: "Está loco", ru: "Он сумасшедший" },
      past: { es: "Estaba loco", ru: "Он был сумасшедшим" },
      future: { es: "Estará loco", ru: "Он будет сумасшедшим" }
    }
  },
  {
    id: 460,
    word: "rico",
    translation: "богатый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 460,
    examples: {
      present: { es: "Es rico", ru: "Он богатый" },
      past: { es: "Era rico", ru: "Он был богатым" },
      future: { es: "Será rico", ru: "Он будет богатым" }
    }
  },
  {
    id: 461,
    word: "pobre",
    translation: "бедный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 461,
    examples: {
      present: { es: "Es pobre", ru: "Он бедный" },
      past: { es: "Era pobre", ru: "Он был бедным" },
      future: { es: "Será pobre", ru: "Он будет бедным" }
    }
  },
  {
    id: 462,
    word: "famoso",
    translation: "знаменитый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 462,
    examples: {
      present: { es: "Es famoso", ru: "Он знаменитый" },
      past: { es: "Era famoso", ru: "Он был знаменитым" },
      future: { es: "Será famoso", ru: "Он будет знаменитым" }
    }
  },
  {
    id: 463,
    word: "desconocido",
    translation: "неизвестный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 463,
    examples: {
      present: { es: "Es desconocido", ru: "Он неизвестный" },
      past: { es: "Era desconocido", ru: "Он был неизвестным" },
      future: { es: "Será desconocido", ru: "Он будет неизвестным" }
    }
  },
  {
    id: 464,
    word: "popular",
    translation: "популярный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 464,
    examples: {
      present: { es: "Es popular", ru: "Он популярный" },
      past: { es: "Era popular", ru: "Он был популярным" },
      future: { es: "Será popular", ru: "Он будет популярным" }
    }
  },
  {
    id: 465,
    word: "extraño",
    translation: "странный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 465,
    examples: {
      present: { es: "Es extraño", ru: "Это странно" },
      past: { es: "Era extraño", ru: "Это было странно" },
      future: { es: "Será extraño", ru: "Это будет странно" }
    }
  },
  {
    id: 466,
    word: "normal",
    translation: "нормальный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 466,
    examples: {
      present: { es: "Es normal", ru: "Это нормально" },
      past: { es: "Era normal", ru: "Это было нормально" },
      future: { es: "Será normal", ru: "Это будет нормально" }
    }
  },
  {
    id: 467,
    word: "especial",
    translation: "особенный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 467,
    examples: {
      present: { es: "Es especial", ru: "Это особенное" },
      past: { es: "Era especial", ru: "Это было особенным" },
      future: { es: "Será especial", ru: "Это будет особенным" }
    }
  },
  {
    id: 468,
    word: "común",
    translation: "обычный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 468,
    examples: {
      present: { es: "Es común", ru: "Это обычно" },
      past: { es: "Era común", ru: "Это было обычно" },
      future: { es: "Será común", ru: "Это будет обычно" }
    }
  },
  {
    id: 469,
    word: "raro",
    translation: "редкий",
    category: "adjectives",
    type: "прилагательное",
    popularity: 469,
    examples: {
      present: { es: "Es raro", ru: "Это редко" },
      past: { es: "Era raro", ru: "Это было редко" },
      future: { es: "Será raro", ru: "Это будет редко" }
    }
  },
  {
    id: 470,
    word: "único",
    translation: "уникальный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 470,
    examples: {
      present: { es: "Es único", ru: "Это уникально" },
      past: { es: "Era único", ru: "Это было уникально" },
      future: { es: "Será único", ru: "Это будет уникально" }
    }
  },
  {
    id: 471,
    word: "simple",
    translation: "простой",
    category: "adjectives",
    type: "прилагательное",
    popularity: 471,
    examples: {
      present: { es: "Es simple", ru: "Это просто" },
      past: { es: "Era simple", ru: "Это было просто" },
      future: { es: "Será simple", ru: "Это будет просто" }
    }
  },
  {
    id: 472,
    word: "complicado",
    translation: "сложный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 472,
    examples: {
      present: { es: "Es complicado", ru: "Это сложно" },
      past: { es: "Era complicado", ru: "Это было сложно" },
      future: { es: "Será complicado", ru: "Это будет сложно" }
    }
  },
  {
    id: 473,
    word: "útil",
    translation: "полезный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 473,
    examples: {
      present: { es: "Es útil", ru: "Это полезно" },
      past: { es: "Era útil", ru: "Это было полезно" },
      future: { es: "Será útil", ru: "Это будет полезно" }
    }
  },
  {
    id: 474,
    word: "inútil",
    translation: "бесполезный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 474,
    examples: {
      present: { es: "Es inútil", ru: "Это бесполезно" },
      past: { es: "Era inútil", ru: "Это было бесполезно" },
      future: { es: "Será inútil", ru: "Это будет бесполезно" }
    }
  },
  {
    id: 475,
    word: "interesante",
    translation: "интересный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 475,
    examples: {
      present: { es: "Es interesante", ru: "Это интересно" },
      past: { es: "Era interesante", ru: "Это было интересно" },
      future: { es: "Será interesante", ru: "Это будет интересно" }
    }
  },
  {
    id: 476,
    word: "divertido",
    translation: "весёлый, забавный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 476,
    examples: {
      present: { es: "Es divertido", ru: "Это весело" },
      past: { es: "Era divertido", ru: "Это было весело" },
      future: { es: "Será divertido", ru: "Это будет весело" }
    }
  },
  {
    id: 477,
    word: "serio",
    translation: "серьёзный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 477,
    examples: {
      present: { es: "Es serio", ru: "Это серьёзно" },
      past: { es: "Era serio", ru: "Это было серьёзно" },
      future: { es: "Será serio", ru: "Это будет серьёзно" }
    }
  },
  {
    id: 478,
    word: "gracioso",
    translation: "смешной",
    category: "adjectives",
    type: "прилагательное",
    popularity: 478,
    examples: {
      present: { es: "Es gracioso", ru: "Это смешно" },
      past: { es: "Era gracioso", ru: "Это было смешно" },
      future: { es: "Será gracioso", ru: "Это будет смешно" }
    }
  },
  {
    id: 479,
    word: "hermoso",
    translation: "прекрасный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 479,
    examples: {
      present: { es: "Es hermoso", ru: "Это прекрасно" },
      past: { es: "Era hermoso", ru: "Это было прекрасно" },
      future: { es: "Será hermoso", ru: "Это будет прекрасно" }
    }
  },
  {
    id: 480,
    word: "feo",
    translation: "уродливый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 480,
    examples: {
      present: { es: "Es feo", ru: "Это уродливо" },
      past: { es: "Era feo", ru: "Это было уродливо" },
      future: { es: "Será feo", ru: "Это будет уродливо" }
    }
  },
  {
    id: 481,
    word: "guapo",
    translation: "красивый (о мужчине)",
    category: "adjectives",
    type: "прилагательное",
    popularity: 481,
    examples: {
      present: { es: "Es guapo", ru: "Он красивый" },
      past: { es: "Era guapo", ru: "Он был красивым" },
      future: { es: "Será guapo", ru: "Он будет красивым" }
    }
  },
  {
    id: 482,
    word: "linda",
    translation: "красивая (о женщине)",
    category: "adjectives",
    type: "прилагательное",
    popularity: 482,
    examples: {
      present: { es: "Es linda", ru: "Она красивая" },
      past: { es: "Era linda", ru: "Она была красивой" },
      future: { es: "Será linda", ru: "Она будет красивой" }
    }
  },
  {
    id: 483,
    word: "bonito",
    translation: "милый, красивый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 483,
    examples: {
      present: { es: "Es bonito", ru: "Это красиво" },
      past: { es: "Era bonito", ru: "Это было красиво" },
      future: { es: "Será bonito", ru: "Это будет красиво" }
    }
  },
  {
    id: 484,
    word: "lindo",
    translation: "милый",
    category: "adjectives",
    type: "прилагательное",
    popularity: 484,
    examples: {
      present: { es: "Es lindo", ru: "Это мило" },
      past: { es: "Era lindo", ru: "Это было мило" },
      future: { es: "Será lindo", ru: "Это будет мило" }
    }
  },
  {
    id: 485,
    word: "horrible",
    translation: "ужасный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 485,
    examples: {
      present: { es: "Es horrible", ru: "Это ужасно" },
      past: { es: "Era horrible", ru: "Это было ужасно" },
      future: { es: "Será horrible", ru: "Это будет ужасно" }
    }
  },
  {
    id: 486,
    word: "terrible",
    translation: "ужасный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 486,
    examples: {
      present: { es: "Es terrible", ru: "Это ужасно" },
      past: { es: "Era terrible", ru: "Это было ужасно" },
      future: { es: "Será terrible", ru: "Это будет ужасно" }
    }
  },
  {
    id: 487,
    word: "excelente",
    translation: "отличный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 487,
    examples: {
      present: { es: "Es excelente", ru: "Это отлично" },
      past: { es: "Era excelente", ru: "Это было отлично" },
      future: { es: "Será excelente", ru: "Это будет отлично" }
    }
  },
  {
    id: 488,
    word: "perfecto",
    translation: "идеальный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 488,
    examples: {
      present: { es: "Es perfecto", ru: "Это идеально" },
      past: { es: "Era perfecto", ru: "Это было идеально" },
      future: { es: "Será perfecto", ru: "Это будет идеально" }
    }
  },
  {
    id: 489,
    word: "maravilloso",
    translation: "чудесный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 489,
    examples: {
      present: { es: "Es maravilloso", ru: "Это чудесно" },
      past: { es: "Era maravilloso", ru: "Это было чудесно" },
      future: { es: "Será maravilloso", ru: "Это будет чудесно" }
    }
  },
  {
    id: 490,
    word: "fantástico",
    translation: "фантастический",
    category: "adjectives",
    type: "прилагательное",
    popularity: 490,
    examples: {
      present: { es: "Es fantástico", ru: "Это фантастично" },
      past: { es: "Era fantástico", ru: "Это было фантастично" },
      future: { es: "Será fantástico", ru: "Это будет фантастично" }
    }
  },
  {
    id: 491,
    word: "increíble",
    translation: "невероятный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 491,
    examples: {
      present: { es: "Es increíble", ru: "Это невероятно" },
      past: { es: "Era increíble", ru: "Это было невероятно" },
      future: { es: "Será increíble", ru: "Это будет невероятно" }
    }
  },
  {
    id: 492,
    word: "magnífico",
    translation: "великолепный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 492,
    examples: {
      present: { es: "Es magnífico", ru: "Это великолепно" },
      past: { es: "Era magnífico", ru: "Это было великолепно" },
      future: { es: "Será magnífico", ru: "Это будет великолепно" }
    }
  },
  {
    id: 493,
    word: "estupendo",
    translation: "замечательный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 493,
    examples: {
      present: { es: "Es estupendo", ru: "Это замечательно" },
      past: { es: "Era estupendo", ru: "Это было замечательно" },
      future: { es: "Será estupendo", ru: "Это будет замечательно" }
    }
  },
  {
    id: 494,
    word: "agradable",
    translation: "приятный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 494,
    examples: {
      present: { es: "Es agradable", ru: "Это приятно" },
      past: { es: "Era agradable", ru: "Это было приятно" },
      future: { es: "Será agradable", ru: "Это будет приятно" }
    }
  },
  {
    id: 495,
    word: "desagradable",
    translation: "неприятный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 495,
    examples: {
      present: { es: "Es desagradable", ru: "Это неприятно" },
      past: { es: "Era desagradable", ru: "Это было неприятно" },
      future: { es: "Será desagradable", ru: "Это будет неприятно" }
    }
  },
  {
    id: 496,
    word: "cómodo",
    translation: "удобный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 496,
    examples: {
      present: { es: "Es cómodo", ru: "Это удобно" },
      past: { es: "Era cómodo", ru: "Это было удобно" },
      future: { es: "Será cómodo", ru: "Это будет удобно" }
    }
  },
  {
    id: 497,
    word: "incómodo",
    translation: "неудобный",
    category: "adjectives",
    type: "прилагательное",
    popularity: 497,
    examples: {
      present: { es: "Es incómodo", ru: "Это неудобно" },
      past: { es: "Era incómodo", ru: "Это было неудобно" },
      future: { es: "Será incómodo", ru: "Это будет неудобно" }
    }
  },
  {
    id: 498,
    word: "barato",
    translation: "дешёвый",
    category: "work",
    type: "прилагательное",
    popularity: 498,
    examples: {
      present: { es: "Es barato", ru: "Это дёшево" },
      past: { es: "Era barato", ru: "Это было дёшево" },
      future: { es: "Será barato", ru: "Это будет дёшево" }
    }
  },
  {
    id: 499,
    word: "caro",
    translation: "дорогой",
    category: "work",
    type: "прилагательное",
    popularity: 499,
    examples: {
      present: { es: "Es caro", ru: "Это дорого" },
      past: { es: "Era caro", ru: "Это было дорого" },
      future: { es: "Será caro", ru: "Это будет дорого" }
    }
  },
  {
    id: 500,
    word: "gratis",
    translation: "бесплатный",
    category: "work",
    type: "прилагательное",
    popularity: 500,
    examples: {
      present: { es: "Es gratis", ru: "Это бесплатно" },
      past: { es: "Era gratis", ru: "Это было бесплатно" },
      future: { es: "Será gratis", ru: "Это будет бесплатно" }
    }
  },
  {
    id: 501,
    word: "comenzar",
    translation: "начинать",
    category: "verbs",
    type: "глагол",
    popularity: 501,
    examples: {
      present: {
        yo: { es: "Yo comienzo el trabajo", ru: "Я начинаю работу" },
        tú: { es: "Tú comienzas el trabajo", ru: "Ты начинаешь работу" },
        él: { es: "Él comienza el trabajo", ru: "Он начинает работу" },
        nosotros: { es: "Nosotros comenzamos el trabajo", ru: "Мы начинаем работу" },
        vosotros: { es: "Vosotros comenzáis el trabajo", ru: "Вы начинаете работу" },
        ellos: { es: "Ellos comienzan el trabajo", ru: "Они начинают работу" }
      },
      past: {
        yo: { es: "Yo comencé el trabajo", ru: "Я начал работу" },
        tú: { es: "Tú comenzaste el trabajo", ru: "Ты начал работу" },
        él: { es: "Él comenzó el trabajo", ru: "Он начал работу" },
        nosotros: { es: "Nosotros comenzamos el trabajo", ru: "Мы начали работу" },
        vosotros: { es: "Vosotros comenzasteis el trabajo", ru: "Вы начали работу" },
        ellos: { es: "Ellos comenzaron el trabajo", ru: "Они начали работу" }
      },
      future: {
        yo: { es: "Yo comenzaré el trabajo", ru: "Я начну работу" },
        tú: { es: "Tú comenzarás el trabajo", ru: "Ты начнёшь работу" },
        él: { es: "Él comenzará el trabajo", ru: "Он начнёт работу" },
        nosotros: { es: "Nosotros comenzaremos el trabajo", ru: "Мы начнём работу" },
        vosotros: { es: "Vosotros comenzaréis el trabajo", ru: "Вы начнёте работу" },
        ellos: { es: "Ellos comenzarán el trabajo", ru: "Они начнут работу" }
      }
    }
  },
  {
    id: 502,
    word: "terminar",
    translation: "заканчивать",
    category: "verbs",
    type: "глагол",
    popularity: 502,
    examples: {
      present: {
        yo: { es: "Yo termino el proyecto", ru: "Я заканчиваю проект" },
        tú: { es: "Tú terminas el proyecto", ru: "Ты заканчиваешь проект" },
        él: { es: "Él termina el proyecto", ru: "Он заканчивает проект" },
        nosotros: { es: "Nosotros terminamos el proyecto", ru: "Мы заканчиваем проект" },
        vosotros: { es: "Vosotros termináis el proyecto", ru: "Вы заканчиваете проект" },
        ellos: { es: "Ellos terminan el proyecto", ru: "Они заканчивают проект" }
      },
      past: {
        yo: { es: "Yo terminé el proyecto", ru: "Я закончил проект" },
        tú: { es: "Tú terminaste el proyecto", ru: "Ты закончил проект" },
        él: { es: "Él terminó el proyecto", ru: "Он закончил проект" },
        nosotros: { es: "Nosotros terminamos el proyecto", ru: "Мы закончили проект" },
        vosotros: { es: "Vosotros terminasteis el proyecto", ru: "Вы закончили проект" },
        ellos: { es: "Ellos terminaron el proyecto", ru: "Они закончили проект" }
      },
      future: {
        yo: { es: "Yo terminaré el proyecto", ru: "Я закончу проект" },
        tú: { es: "Tú terminarás el proyecto", ru: "Ты закончишь проект" },
        él: { es: "Él terminará el proyecto", ru: "Он закончит проект" },
        nosotros: { es: "Nosotros terminaremos el proyecto", ru: "Мы закончим проект" },
        vosotros: { es: "Vosotros terminaréis el proyecto", ru: "Вы закончите проект" },
        ellos: { es: "Ellos terminarán el proyecto", ru: "Они закончат проект" }
      }
    }
  },
  {
    id: 503,
    word: "continuar",
    translation: "продолжать",
    category: "verbs",
    type: "глагол",
    popularity: 503,
    examples: {
      present: {
        yo: { es: "Yo continúo estudiando", ru: "Я продолжаю учиться" },
        tú: { es: "Tú continúas estudiando", ru: "Ты продолжаешь учиться" },
        él: { es: "Él continúa estudiando", ru: "Он продолжает учиться" },
        nosotros: { es: "Nosotros continuamos estudiando", ru: "Мы продолжаем учиться" },
        vosotros: { es: "Vosotros continuáis estudiando", ru: "Вы продолжаете учиться" },
        ellos: { es: "Ellos continúan estudiando", ru: "Они продолжают учиться" }
      },
      past: {
        yo: { es: "Yo continué estudiando", ru: "Я продолжал учиться" },
        tú: { es: "Tú continuaste estudiando", ru: "Ты продолжал учиться" },
        él: { es: "Él continuó estudiando", ru: "Он продолжал учиться" },
        nosotros: { es: "Nosotros continuamos estudiando", ru: "Мы продолжали учиться" },
        vosotros: { es: "Vosotros continuasteis estudiando", ru: "Вы продолжали учиться" },
        ellos: { es: "Ellos continuaron estudiando", ru: "Они продолжали учиться" }
      },
      future: {
        yo: { es: "Yo continuaré estudiando", ru: "Я продолжу учиться" },
        tú: { es: "Tú continuarás estudiando", ru: "Ты продолжишь учиться" },
        él: { es: "Él continuará estudiando", ru: "Он продолжит учиться" },
        nosotros: { es: "Nosotros continuaremos estudiando", ru: "Мы продолжим учиться" },
        vosotros: { es: "Vosotros continuaréis estudiando", ru: "Вы продолжите учиться" },
        ellos: { es: "Ellos continuarán estudiando", ru: "Они продолжат учиться" }
      }
    }
  },
  {
    id: 504,
    word: "parar",
    translation: "останавливать",
    category: "verbs",
    type: "глагол",
    popularity: 504,
    examples: {
      present: {
        yo: { es: "Yo paro el coche", ru: "Я останавливаю машину" },
        tú: { es: "Tú paras el coche", ru: "Ты останавливаешь машину" },
        él: { es: "Él para el coche", ru: "Он останавливает машину" },
        nosotros: { es: "Nosotros paramos el coche", ru: "Мы останавливаем машину" },
        vosotros: { es: "Vosotros paráis el coche", ru: "Вы останавливаете машину" },
        ellos: { es: "Ellos paran el coche", ru: "Они останавливают машину" }
      },
      past: {
        yo: { es: "Yo paré el coche", ru: "Я остановил машину" },
        tú: { es: "Tú paraste el coche", ru: "Ты остановил машину" },
        él: { es: "Él paró el coche", ru: "Он остановил машину" },
        nosotros: { es: "Nosotros paramos el coche", ru: "Мы остановили машину" },
        vosotros: { es: "Vosotros parasteis el coche", ru: "Вы остановили машину" },
        ellos: { es: "Ellos pararon el coche", ru: "Они остановили машину" }
      },
      future: {
        yo: { es: "Yo pararé el coche", ru: "Я остановлю машину" },
        tú: { es: "Tú pararás el coche", ru: "Ты остановишь машину" },
        él: { es: "Él parará el coche", ru: "Он остановит машину" },
        nosotros: { es: "Nosotros pararemos el coche", ru: "Мы остановим машину" },
        vosotros: { es: "Vosotros pararéis el coche", ru: "Вы остановите машину" },
        ellos: { es: "Ellos pararán el coche", ru: "Они остановят машину" }
      }
    }
  },
  {
    id: 505,
    word: "seguir",
    translation: "следовать",
    category: "verbs",
    type: "глагол",
    popularity: 505,
    examples: {
      present: {
        yo: { es: "Yo sigo las instrucciones", ru: "Я следую инструкциям" },
        tú: { es: "Tú sigues las instrucciones", ru: "Ты следуешь инструкциям" },
        él: { es: "Él sigue las instrucciones", ru: "Он следует инструкциям" },
        nosotros: { es: "Nosotros seguimos las instrucciones", ru: "Мы следуем инструкциям" },
        vosotros: { es: "Vosotros seguís las instrucciones", ru: "Вы следуете инструкциям" },
        ellos: { es: "Ellos siguen las instrucciones", ru: "Они следуют инструкциям" }
      },
      past: {
        yo: { es: "Yo seguí las instrucciones", ru: "Я следовал инструкциям" },
        tú: { es: "Tú seguiste las instrucciones", ru: "Ты следовал инструкциям" },
        él: { es: "Él siguió las instrucciones", ru: "Он следовал инструкциям" },
        nosotros: { es: "Nosotros seguimos las instrucciones", ru: "Мы следовали инструкциям" },
        vosotros: { es: "Vosotros seguisteis las instrucciones", ru: "Вы следовали инструкциям" },
        ellos: { es: "Ellos siguieron las instrucciones", ru: "Они следовали инструкциям" }
      },
      future: {
        yo: { es: "Yo seguiré las instrucciones", ru: "Я буду следовать инструкциям" },
        tú: { es: "Tú seguirás las instrucciones", ru: "Ты будешь следовать инструкциям" },
        él: { es: "Él seguirá las instrucciones", ru: "Он будет следовать инструкциям" },
        nosotros: { es: "Nosotros seguiremos las instrucciones", ru: "Мы будем следовать инструкциям" },
        vosotros: { es: "Vosotros seguiréis las instrucciones", ru: "Вы будете следовать инструкциям" },
        ellos: { es: "Ellos seguirán las instrucciones", ru: "Они будут следовать инструкциям" }
      }
    }
  },
  {
    id: 506,
    word: "cambiar",
    translation: "менять",
    category: "verbs",
    type: "глагол",
    popularity: 506,
    examples: {
      present: {
        yo: { es: "Yo cambio de opinión", ru: "Я меняю мнение" },
        tú: { es: "Tú cambias de opinión", ru: "Ты меняешь мнение" },
        él: { es: "Él cambia de opinión", ru: "Он меняет мнение" },
        nosotros: { es: "Nosotros cambiamos de opinión", ru: "Мы меняем мнение" },
        vosotros: { es: "Vosotros cambiáis de opinión", ru: "Вы меняете мнение" },
        ellos: { es: "Ellos cambian de opinión", ru: "Они меняют мнение" }
      },
      past: {
        yo: { es: "Yo cambié de opinión", ru: "Я изменил мнение" },
        tú: { es: "Tú cambiaste de opinión", ru: "Ты изменил мнение" },
        él: { es: "Él cambió de opinión", ru: "Он изменил мнение" },
        nosotros: { es: "Nosotros cambiamos de opinión", ru: "Мы изменили мнение" },
        vosotros: { es: "Vosotros cambiasteis de opinión", ru: "Вы изменили мнение" },
        ellos: { es: "Ellos cambiaron de opinión", ru: "Они изменили мнение" }
      },
      future: {
        yo: { es: "Yo cambiaré de opinión", ru: "Я изменю мнение" },
        tú: { es: "Tú cambiarás de opinión", ru: "Ты изменишь мнение" },
        él: { es: "Él cambiará de opinión", ru: "Он изменит мнение" },
        nosotros: { es: "Nosotros cambiaremos de opinión", ru: "Мы изменим мнение" },
        vosotros: { es: "Vosotros cambiaréis de opinión", ru: "Вы измените мнение" },
        ellos: { es: "Ellos cambiarán de opinión", ru: "Они изменят мнение" }
      }
    }
  },
  {
    id: 507,
    word: "quedar",
    translation: "оставаться",
    category: "verbs",
    type: "глагол",
    popularity: 507,
    examples: {
      present: {
        yo: { es: "Yo me quedo en casa", ru: "Я остаюсь дома" },
        tú: { es: "Tú te quedas en casa", ru: "Ты остаёшься дома" },
        él: { es: "Él se queda en casa", ru: "Он остаётся дома" },
        nosotros: { es: "Nosotros nos quedamos en casa", ru: "Мы остаёмся дома" },
        vosotros: { es: "Vosotros os quedáis en casa", ru: "Вы остаётесь дома" },
        ellos: { es: "Ellos se quedan en casa", ru: "Они остаются дома" }
      },
      past: {
        yo: { es: "Yo me quedé en casa", ru: "Я остался дома" },
        tú: { es: "Tú te quedaste en casa", ru: "Ты остался дома" },
        él: { es: "Él se quedó en casa", ru: "Он остался дома" },
        nosotros: { es: "Nosotros nos quedamos en casa", ru: "Мы остались дома" },
        vosotros: { es: "Vosotros os quedasteis en casa", ru: "Вы остались дома" },
        ellos: { es: "Ellos se quedaron en casa", ru: "Они остались дома" }
      },
      future: {
        yo: { es: "Yo me quedaré en casa", ru: "Я останусь дома" },
        tú: { es: "Tú te quedarás en casa", ru: "Ты останешься дома" },
        él: { es: "Él se quedará en casa", ru: "Он останется дома" },
        nosotros: { es: "Nosotros nos quedaremos en casa", ru: "Мы останемся дома" },
        vosotros: { es: "Vosotros os quedaréis en casa", ru: "Вы останетесь дома" },
        ellos: { es: "Ellos se quedarán en casa", ru: "Они останутся дома" }
      }
    }
  },
  {
    id: 508,
    word: "llegar",
    translation: "прибывать",
    category: "verbs",
    type: "глагол",
    popularity: 508,
    examples: {
      present: {
        yo: { es: "Yo llego a tiempo", ru: "Я прибываю вовремя" },
        tú: { es: "Tú llegas a tiempo", ru: "Ты прибываешь вовремя" },
        él: { es: "Él llega a tiempo", ru: "Он прибывает вовремя" },
        nosotros: { es: "Nosotros llegamos a tiempo", ru: "Мы прибываем вовремя" },
        vosotros: { es: "Vosotros llegáis a tiempo", ru: "Вы прибываете вовремя" },
        ellos: { es: "Ellos llegan a tiempo", ru: "Они прибывают вовремя" }
      },
      past: {
        yo: { es: "Yo llegué a tiempo", ru: "Я прибыл вовремя" },
        tú: { es: "Tú llegaste a tiempo", ru: "Ты прибыл вовремя" },
        él: { es: "Él llegó a tiempo", ru: "Он прибыл вовремя" },
        nosotros: { es: "Nosotros llegamos a tiempo", ru: "Мы прибыли вовремя" },
        vosotros: { es: "Vosotros llegasteis a tiempo", ru: "Вы прибыли вовремя" },
        ellos: { es: "Ellos llegaron a tiempo", ru: "Они прибыли вовремя" }
      },
      future: {
        yo: { es: "Yo llegaré a tiempo", ru: "Я прибуду вовремя" },
        tú: { es: "Tú llegarás a tiempo", ru: "Ты прибудешь вовремя" },
        él: { es: "Él llegará a tiempo", ru: "Он прибудет вовремя" },
        nosotros: { es: "Nosotros llegaremos a tiempo", ru: "Мы прибудем вовремя" },
        vosotros: { es: "Vosotros llegaréis a tiempo", ru: "Вы прибудете вовремя" },
        ellos: { es: "Ellos llegarán a tiempo", ru: "Они прибудут вовремя" }
      }
    }
  },
  {
    id: 509,
    word: "salir",
    translation: "выходить",
    category: "verbs",
    type: "глагол",
    popularity: 509,
    examples: {
      present: { es: "Salgo de casa", ru: "Я выхожу из дома" },
      past: { es: "Salí de casa", ru: "Я вышел из дома" },
      future: { es: "Saldré de casa", ru: "Я выйду из дома" }
    }
  },
  {
    id: 510,
    word: "entrar",
    translation: "входить",
    category: "verbs",
    type: "глагол",
    popularity: 510,
    examples: {
      present: {
        yo: { es: "Yo entro en la habitación", ru: "Я вхожу в комнату" },
        tú: { es: "Tú entras en la habitación", ru: "Ты входишь в комнату" },
        él: { es: "Él entra en la habitación", ru: "Он входит в комнату" },
        nosotros: { es: "Nosotros entramos en la habitación", ru: "Мы входим в комнату" },
        vosotros: { es: "Vosotros entráis en la habitación", ru: "Вы входите в комнату" },
        ellos: { es: "Ellos entran en la habitación", ru: "Они входят в комнату" }
      },
      past: {
        yo: { es: "Yo entré en la habitación", ru: "Я вошёл в комнату" },
        tú: { es: "Tú entraste en la habitación", ru: "Ты вошёл в комнату" },
        él: { es: "Él entró en la habitación", ru: "Он вошёл в комнату" },
        nosotros: { es: "Nosotros entramos en la habitación", ru: "Мы вошли в комнату" },
        vosotros: { es: "Vosotros entrasteis en la habitación", ru: "Вы вошли в комнату" },
        ellos: { es: "Ellos entraron en la habitación", ru: "Они вошли в комнату" }
      },
      future: {
        yo: { es: "Yo entraré en la habitación", ru: "Я войду в комнату" },
        tú: { es: "Tú entrarás en la habitación", ru: "Ты войдёшь в комнату" },
        él: { es: "Él entrará en la habitación", ru: "Он войдёт в комнату" },
        nosotros: { es: "Nosotros entraremos en la habitación", ru: "Мы войдём в комнату" },
        vosotros: { es: "Vosotros entraréis en la habitación", ru: "Вы войдёте в комнату" },
        ellos: { es: "Ellos entrarán en la habitación", ru: "Они войдут в комнату" }
      }
    }
  },
  {
    id: 511,
    word: "subir",
    translation: "подниматься",
    category: "verbs",
    type: "глагол",
    popularity: 511,
    examples: {
      present: {
        yo: { es: "Yo subo las escaleras", ru: "Я поднимаюсь по лестнице" },
        tú: { es: "Tú subes las escaleras", ru: "Ты поднимаешься по лестнице" },
        él: { es: "Él sube las escaleras", ru: "Он поднимается по лестнице" },
        nosotros: { es: "Nosotros subimos las escaleras", ru: "Мы поднимаемся по лестнице" },
        vosotros: { es: "Vosotros subís las escaleras", ru: "Вы поднимаетесь по лестнице" },
        ellos: { es: "Ellos suben las escaleras", ru: "Они поднимаются по лестнице" }
      },
      past: {
        yo: { es: "Yo subí las escaleras", ru: "Я поднялся по лестнице" },
        tú: { es: "Tú subiste las escaleras", ru: "Ты поднялся по лестнице" },
        él: { es: "Él subió las escaleras", ru: "Он поднялся по лестнице" },
        nosotros: { es: "Nosotros subimos las escaleras", ru: "Мы поднялись по лестнице" },
        vosotros: { es: "Vosotros subisteis las escaleras", ru: "Вы поднялись по лестнице" },
        ellos: { es: "Ellos subieron las escaleras", ru: "Они поднялись по лестнице" }
      },
      future: {
        yo: { es: "Yo subiré las escaleras", ru: "Я поднимусь по лестнице" },
        tú: { es: "Tú subirás las escaleras", ru: "Ты поднимешься по лестнице" },
        él: { es: "Él subirá las escaleras", ru: "Он поднимется по лестнице" },
        nosotros: { es: "Nosotros subiremos las escaleras", ru: "Мы поднимемся по лестнице" },
        vosotros: { es: "Vosotros subiréis las escaleras", ru: "Вы подниметесь по лестнице" },
        ellos: { es: "Ellos subirán las escaleras", ru: "Они поднимутся по лестнице" }
      }
    }
  },
  {
    id: 512,
    word: "bajar",
    translation: "спускаться",
    category: "verbs",
    type: "глагол",
    popularity: 512,
    examples: {
      present: {
        yo: { es: "Yo bajo las escaleras", ru: "Я спускаюсь по лестнице" },
        tú: { es: "Tú bajas las escaleras", ru: "Ты спускаешься по лестнице" },
        él: { es: "Él baja las escaleras", ru: "Он спускается по лестнице" },
        nosotros: { es: "Nosotros bajamos las escaleras", ru: "Мы спускаемся по лестнице" },
        vosotros: { es: "Vosotros bajáis las escaleras", ru: "Вы спускаетесь по лестнице" },
        ellos: { es: "Ellos bajan las escaleras", ru: "Они спускаются по лестнице" }
      },
      past: {
        yo: { es: "Yo bajé las escaleras", ru: "Я спустился по лестнице" },
        tú: { es: "Tú bajaste las escaleras", ru: "Ты спустился по лестнице" },
        él: { es: "Él bajó las escaleras", ru: "Он спустился по лестнице" },
        nosotros: { es: "Nosotros bajamos las escaleras", ru: "Мы спустились по лестнице" },
        vosotros: { es: "Vosotros bajasteis las escaleras", ru: "Вы спустились по лестнице" },
        ellos: { es: "Ellos bajaron las escaleras", ru: "Они спустились по лестнице" }
      },
      future: {
        yo: { es: "Yo bajaré las escaleras", ru: "Я спущусь по лестнице" },
        tú: { es: "Tú bajarás las escaleras", ru: "Ты спустишься по лестнице" },
        él: { es: "Él bajará las escaleras", ru: "Он спустится по лестнице" },
        nosotros: { es: "Nosotros bajaremos las escaleras", ru: "Мы спустимся по лестнице" },
        vosotros: { es: "Vosotros bajaréis las escaleras", ru: "Вы спуститесь по лестнице" },
        ellos: { es: "Ellos bajarán las escaleras", ru: "Они спустятся по лестнице" }
      }
    }
  },
  {
    id: 513,
    word: "caer",
    translation: "падать",
    category: "verbs",
    type: "глагол",
    popularity: 513,
    examples: {
      present: { es: "Caigo al suelo", ru: "Я падаю на пол" },
      past: { es: "Caí al suelo", ru: "Я упал на пол" },
      future: { es: "Caeré al suelo", ru: "Я упаду на пол" }
    }
  },
  {
    id: 514,
    word: "levantar",
    translation: "поднимать",
    category: "verbs",
    type: "глагол",
    popularity: 514,
    examples: {
      present: {
        yo: { es: "Yo levanto la mano", ru: "Я поднимаю руку" },
        tú: { es: "Tú levantas la mano", ru: "Ты поднимаешь руку" },
        él: { es: "Él levanta la mano", ru: "Он поднимает руку" },
        nosotros: { es: "Nosotros levantamos la mano", ru: "Мы поднимаем руку" },
        vosotros: { es: "Vosotros levantáis la mano", ru: "Вы поднимаете руку" },
        ellos: { es: "Ellos levantan la mano", ru: "Они поднимают руку" }
      },
      past: {
        yo: { es: "Yo levanté la mano", ru: "Я поднял руку" },
        tú: { es: "Tú levantaste la mano", ru: "Ты поднял руку" },
        él: { es: "Él levantó la mano", ru: "Он поднял руку" },
        nosotros: { es: "Nosotros levantamos la mano", ru: "Мы подняли руку" },
        vosotros: { es: "Vosotros levantasteis la mano", ru: "Вы подняли руку" },
        ellos: { es: "Ellos levantaron la mano", ru: "Они подняли руку" }
      },
      future: {
        yo: { es: "Yo levantaré la mano", ru: "Я подниму руку" },
        tú: { es: "Tú levantarás la mano", ru: "Ты поднимешь руку" },
        él: { es: "Él levantará la mano", ru: "Он поднимет руку" },
        nosotros: { es: "Nosotros levantaremos la mano", ru: "Мы поднимем руку" },
        vosotros: { es: "Vosotros levantaréis la mano", ru: "Вы поднимете руку" },
        ellos: { es: "Ellos levantarán la mano", ru: "Они поднимут руку" }
      }
    }
  },
  {
    id: 515,
    word: "sentar",
    translation: "садить",
    category: "verbs",
    type: "глагол",
    popularity: 515,
    examples: {
      present: {
        yo: { es: "Yo me siento en la silla", ru: "Я сажусь на стул" },
        tú: { es: "Tú te sientas en la silla", ru: "Ты садишься на стул" },
        él: { es: "Él se sienta en la silla", ru: "Он садится на стул" },
        nosotros: { es: "Nosotros nos sentamos en la silla", ru: "Мы садимся на стул" },
        vosotros: { es: "Vosotros os sentáis en la silla", ru: "Вы садитесь на стул" },
        ellos: { es: "Ellos se sientan en la silla", ru: "Они садятся на стул" }
      },
      past: {
        yo: { es: "Yo me senté en la silla", ru: "Я сел на стул" },
        tú: { es: "Tú te sentaste en la silla", ru: "Ты сел на стул" },
        él: { es: "Él se sentó en la silla", ru: "Он сел на стул" },
        nosotros: { es: "Nosotros nos sentamos en la silla", ru: "Мы сели на стул" },
        vosotros: { es: "Vosotros os sentasteis en la silla", ru: "Вы сели на стул" },
        ellos: { es: "Ellos se sentaron en la silla", ru: "Они сели на стул" }
      },
      future: {
        yo: { es: "Yo me sentaré en la silla", ru: "Я сяду на стул" },
        tú: { es: "Tú te sentarás en la silla", ru: "Ты сядешь на стул" },
        él: { es: "Él se sentará en la silla", ru: "Он сядет на стул" },
        nosotros: { es: "Nosotros nos sentaremos en la silla", ru: "Мы сядем на стул" },
        vosotros: { es: "Vosotros os sentaréis en la silla", ru: "Вы сядете на стул" },
        ellos: { es: "Ellos se sentarán en la silla", ru: "Они сядут на стул" }
      }
    }
  },
  {
    id: 516,
    word: "acostar",
    translation: "укладывать",
    category: "verbs",
    type: "глагол",
    popularity: 516,
    examples: {
      present: {
        yo: { es: "Yo me acuesto temprano", ru: "Я ложусь рано" },
        tú: { es: "Tú te acuestas temprano", ru: "Ты ложишься рано" },
        él: { es: "Él se acuesta temprano", ru: "Он ложится рано" },
        nosotros: { es: "Nosotros nos acostamos temprano", ru: "Мы ложимся рано" },
        vosotros: { es: "Vosotros os acostáis temprano", ru: "Вы ложитесь рано" },
        ellos: { es: "Ellos se acuestan temprano", ru: "Они ложатся рано" }
      },
      past: {
        yo: { es: "Yo me acosté temprano", ru: "Я лёг рано" },
        tú: { es: "Tú te acostaste temprano", ru: "Ты лёг рано" },
        él: { es: "Él se acostó temprano", ru: "Он лёг рано" },
        nosotros: { es: "Nosotros nos acostamos temprano", ru: "Мы легли рано" },
        vosotros: { es: "Vosotros os acostasteis temprano", ru: "Вы легли рано" },
        ellos: { es: "Ellos se acostaron temprano", ru: "Они легли рано" }
      },
      future: {
        yo: { es: "Yo me acostaré temprano", ru: "Я лягу рано" },
        tú: { es: "Tú te acostarás temprano", ru: "Ты ляжешь рано" },
        él: { es: "Él se acostará temprano", ru: "Он ляжет рано" },
        nosotros: { es: "Nosotros nos acostaremos temprano", ru: "Мы ляжем рано" },
        vosotros: { es: "Vosotros os acostaréis temprano", ru: "Вы ляжете рано" },
        ellos: { es: "Ellos se acostarán temprano", ru: "Они лягут рано" }
      }
    }
  },
  {
    id: 517,
    word: "despertar",
    translation: "будить",
    category: "verbs",
    type: "глагол",
    popularity: 517,
    examples: {
      present: {
        yo: { es: "Yo me despierto a las siete", ru: "Я просыпаюсь в семь" },
        tú: { es: "Tú te despiertas a las siete", ru: "Ты просыпаешься в семь" },
        él: { es: "Él se despierta a las siete", ru: "Он просыпается в семь" },
        nosotros: { es: "Nosotros nos despertamos a las siete", ru: "Мы просыпаемся в семь" },
        vosotros: { es: "Vosotros os despertáis a las siete", ru: "Вы просыпаетесь в семь" },
        ellos: { es: "Ellos se despiertan a las siete", ru: "Они просыпаются в семь" }
      },
      past: {
        yo: { es: "Yo me desperté a las siete", ru: "Я проснулся в семь" },
        tú: { es: "Tú te despertaste a las siete", ru: "Ты проснулся в семь" },
        él: { es: "Él se despertó a las siete", ru: "Он проснулся в семь" },
        nosotros: { es: "Nosotros nos despertamos a las siete", ru: "Мы проснулись в семь" },
        vosotros: { es: "Vosotros os despertasteis a las siete", ru: "Вы проснулись в семь" },
        ellos: { es: "Ellos se despertaron a las siete", ru: "Они проснулись в семь" }
      },
      future: {
        yo: { es: "Yo me despertaré a las siete", ru: "Я проснусь в семь" },
        tú: { es: "Tú te despertarás a las siete", ru: "Ты проснёшься в семь" },
        él: { es: "Él se despertará a las siete", ru: "Он проснётся в семь" },
        nosotros: { es: "Nosotros nos despertaremos a las siete", ru: "Мы проснёмся в семь" },
        vosotros: { es: "Vosotros os despertaréis a las siete", ru: "Вы проснётесь в семь" },
        ellos: { es: "Ellos se despertarán a las siete", ru: "Они проснутся в семь" }
      }
    }
  },
  {
    id: 518,
    word: "vestir",
    translation: "одевать",
    category: "verbs",
    type: "глагол",
    popularity: 518,
    examples: {
      present: {
        yo: { es: "Yo me visto rápido", ru: "Я одеваюсь быстро" },
        tú: { es: "Tú te vistes rápido", ru: "Ты одеваешься быстро" },
        él: { es: "Él se viste rápido", ru: "Он одевается быстро" },
        nosotros: { es: "Nosotros nos vestimos rápido", ru: "Мы одеваемся быстро" },
        vosotros: { es: "Vosotros os vestís rápido", ru: "Вы одеваетесь быстро" },
        ellos: { es: "Ellos se visten rápido", ru: "Они одеваются быстро" }
      },
      past: {
        yo: { es: "Yo me vestí rápido", ru: "Я оделся быстро" },
        tú: { es: "Tú te vestiste rápido", ru: "Ты оделся быстро" },
        él: { es: "Él se vistió rápido", ru: "Он оделся быстро" },
        nosotros: { es: "Nosotros nos vestimos rápido", ru: "Мы оделись быстро" },
        vosotros: { es: "Vosotros os vestisteis rápido", ru: "Вы оделись быстро" },
        ellos: { es: "Ellos se vistieron rápido", ru: "Они оделись быстро" }
      },
      future: {
        yo: { es: "Yo me vestiré rápido", ru: "Я оденусь быстро" },
        tú: { es: "Tú te vestirás rápido", ru: "Ты оденешься быстро" },
        él: { es: "Él se vestirá rápido", ru: "Он оденется быстро" },
        nosotros: { es: "Nosotros nos vestiremos rápido", ru: "Мы оденемся быстро" },
        vosotros: { es: "Vosotros os vestiréis rápido", ru: "Вы оденетесь быстро" },
        ellos: { es: "Ellos se vestirán rápido", ru: "Они оденутся быстро" }
      }
    }
  },
  {
    id: 519,
    word: "lavar",
    translation: "мыть",
    category: "verbs",
    type: "глагол",
    popularity: 519,
    examples: {
      present: {
        yo: { es: "Yo me lavo las manos", ru: "Я мою руки" },
        tú: { es: "Tú te lavas las manos", ru: "Ты моешь руки" },
        él: { es: "Él se lava las manos", ru: "Он моет руки" },
        nosotros: { es: "Nosotros nos lavamos las manos", ru: "Мы моем руки" },
        vosotros: { es: "Vosotros os laváis las manos", ru: "Вы моете руки" },
        ellos: { es: "Ellos se lavan las manos", ru: "Они моют руки" }
      },
      past: {
        yo: { es: "Yo me lavé las manos", ru: "Я помыл руки" },
        tú: { es: "Tú te lavaste las manos", ru: "Ты помыл руки" },
        él: { es: "Él se lavó las manos", ru: "Он помыл руки" },
        nosotros: { es: "Nosotros nos lavamos las manos", ru: "Мы помыли руки" },
        vosotros: { es: "Vosotros os lavasteis las manos", ru: "Вы помыли руки" },
        ellos: { es: "Ellos se lavaron las manos", ru: "Они помыли руки" }
      },
      future: {
        yo: { es: "Yo me lavaré las manos", ru: "Я помою руки" },
        tú: { es: "Tú te lavarás las manos", ru: "Ты помоешь руки" },
        él: { es: "Él se lavará las manos", ru: "Он помоет руки" },
        nosotros: { es: "Nosotros nos lavaremos las manos", ru: "Мы помоем руки" },
        vosotros: { es: "Vosotros os lavaréis las manos", ru: "Вы помоете руки" },
        ellos: { es: "Ellos se lavarán las manos", ru: "Они помоют руки" }
      }
    }
  },
  {
    id: 520,
    word: "limpiar",
    translation: "чистить",
    category: "verbs",
    type: "глагол",
    popularity: 520,
    examples: {
      present: {
        yo: { es: "Yo limpio la casa", ru: "Я убираю дом" },
        tú: { es: "Tú limpias la casa", ru: "Ты убираешь дом" },
        él: { es: "Él limpia la casa", ru: "Он убирает дом" },
        nosotros: { es: "Nosotros limpiamos la casa", ru: "Мы убираем дом" },
        vosotros: { es: "Vosotros limpiáis la casa", ru: "Вы убираете дом" },
        ellos: { es: "Ellos limpian la casa", ru: "Они убирают дом" }
      },
      past: {
        yo: { es: "Yo limpié la casa", ru: "Я убрал дом" },
        tú: { es: "Tú limpiaste la casa", ru: "Ты убрал дом" },
        él: { es: "Él limpió la casa", ru: "Он убрал дом" },
        nosotros: { es: "Nosotros limpiamos la casa", ru: "Мы убрали дом" },
        vosotros: { es: "Vosotros limpiasteis la casa", ru: "Вы убрали дом" },
        ellos: { es: "Ellos limpiaron la casa", ru: "Они убрали дом" }
      },
      future: {
        yo: { es: "Yo limpiaré la casa", ru: "Я уберу дом" },
        tú: { es: "Tú limpiarás la casa", ru: "Ты уберёшь дом" },
        él: { es: "Él limpiará la casa", ru: "Он уберёт дом" },
        nosotros: { es: "Nosotros limpiaremos la casa", ru: "Мы уберём дом" },
        vosotros: { es: "Vosotros limpiaréis la casa", ru: "Вы уберёте дом" },
        ellos: { es: "Ellos limpiarán la casa", ru: "Они уберут дом" }
      }
    }
  },
  {
    id: 521,
    word: "cocinar",
    translation: "готовить",
    category: "verbs",
    type: "глагол",
    popularity: 521,
    examples: {
      present: {
        yo: { es: "Yo cocino la cena", ru: "Я готовлю ужин" },
        tú: { es: "Tú cocinas la cena", ru: "Ты готовишь ужин" },
        él: { es: "Él cocina la cena", ru: "Он готовит ужин" },
        nosotros: { es: "Nosotros cocinamos la cena", ru: "Мы готовим ужин" },
        vosotros: { es: "Vosotros cocináis la cena", ru: "Вы готовите ужин" },
        ellos: { es: "Ellos cocinan la cena", ru: "Они готовят ужин" }
      },
      past: {
        yo: { es: "Yo cociné la cena", ru: "Я приготовил ужин" },
        tú: { es: "Tú cocinaste la cena", ru: "Ты приготовил ужин" },
        él: { es: "Él cocinó la cena", ru: "Он приготовил ужин" },
        nosotros: { es: "Nosotros cocinamos la cena", ru: "Мы приготовили ужин" },
        vosotros: { es: "Vosotros cocinasteis la cena", ru: "Вы приготовили ужин" },
        ellos: { es: "Ellos cocinaron la cena", ru: "Они приготовили ужин" }
      },
      future: {
        yo: { es: "Yo cocinaré la cena", ru: "Я приготовлю ужин" },
        tú: { es: "Tú cocinarás la cena", ru: "Ты приготовишь ужин" },
        él: { es: "Él cocinará la cena", ru: "Он приготовит ужин" },
        nosotros: { es: "Nosotros cocinaremos la cena", ru: "Мы приготовим ужин" },
        vosotros: { es: "Vosotros cocinaréis la cena", ru: "Вы приготовите ужин" },
        ellos: { es: "Ellos cocinarán la cena", ru: "Они приготовят ужин" }
      }
    }
  },
  {
    id: 522,
    word: "preparar",
    translation: "подготавливать",
    category: "verbs",
    type: "глагол",
    popularity: 522,
    examples: {
      present: {
        yo: { es: "Yo preparo el desayuno", ru: "Я готовлю завтрак" },
        tú: { es: "Tú preparas el desayuno", ru: "Ты готовишь завтрак" },
        él: { es: "Él prepara el desayuno", ru: "Он готовит завтрак" },
        nosotros: { es: "Nosotros preparamos el desayuno", ru: "Мы готовим завтрак" },
        vosotros: { es: "Vosotros preparáis el desayuno", ru: "Вы готовите завтрак" },
        ellos: { es: "Ellos preparan el desayuno", ru: "Они готовят завтрак" }
      },
      past: {
        yo: { es: "Yo preparé el desayuno", ru: "Я приготовил завтрак" },
        tú: { es: "Tú preparaste el desayuno", ru: "Ты приготовил завтрак" },
        él: { es: "Él preparó el desayuno", ru: "Он приготовил завтрак" },
        nosotros: { es: "Nosotros preparamos el desayuno", ru: "Мы приготовили завтрак" },
        vosotros: { es: "Vosotros preparasteis el desayuno", ru: "Вы приготовили завтрак" },
        ellos: { es: "Ellos prepararon el desayuno", ru: "Они приготовили завтрак" }
      },
      future: {
        yo: { es: "Yo prepararé el desayuno", ru: "Я приготовлю завтрак" },
        tú: { es: "Tú prepararás el desayuno", ru: "Ты приготовишь завтрак" },
        él: { es: "Él preparará el desayuno", ru: "Он приготовит завтрак" },
        nosotros: { es: "Nosotros prepararemos el desayuno", ru: "Мы приготовим завтрак" },
        vosotros: { es: "Vosotros prepararéis el desayuno", ru: "Вы приготовите завтрак" },
        ellos: { es: "Ellos prepararán el desayuno", ru: "Они приготовят завтрак" }
      }
    }
  },
  {
    id: 523,
    word: "servir",
    translation: "подавать, служить",
    category: "verbs",
    type: "глагол",
    popularity: 523,
    examples: {
      present: {
        yo: { es: "Yo sirvo la comida", ru: "Я подаю еду" },
        tú: { es: "Tú sirves la comida", ru: "Ты подаёшь еду" },
        él: { es: "Él sirve la comida", ru: "Он подаёт еду" },
        nosotros: { es: "Nosotros servimos la comida", ru: "Мы подаём еду" },
        vosotros: { es: "Vosotros servís la comida", ru: "Вы подаёте еду" },
        ellos: { es: "Ellos sirven la comida", ru: "Они подают еду" }
      },
      past: {
        yo: { es: "Yo serví la comida", ru: "Я подал еду" },
        tú: { es: "Tú serviste la comida", ru: "Ты подал еду" },
        él: { es: "Él sirvió la comida", ru: "Он подал еду" },
        nosotros: { es: "Nosotros servimos la comida", ru: "Мы подали еду" },
        vosotros: { es: "Vosotros servisteis la comida", ru: "Вы подали еду" },
        ellos: { es: "Ellos sirvieron la comida", ru: "Они подали еду" }
      },
      future: {
        yo: { es: "Yo serviré la comida", ru: "Я подам еду" },
        tú: { es: "Tú servirás la comida", ru: "Ты подашь еду" },
        él: { es: "Él servirá la comida", ru: "Он подаст еду" },
        nosotros: { es: "Nosotros serviremos la comida", ru: "Мы подадим еду" },
        vosotros: { es: "Vosotros serviréis la comida", ru: "Вы подадите еду" },
        ellos: { es: "Ellos servirán la comida", ru: "Они подадут еду" }
      }
    }
  },
  {
    id: 524,
    word: "probar",
    translation: "пробовать",
    category: "verbs",
    type: "глагол",
    popularity: 524,
    examples: {
      present: {
        yo: { es: "Yo pruebo la sopa", ru: "Я пробую суп" },
        tú: { es: "Tú pruebas la sopa", ru: "Ты пробуешь суп" },
        él: { es: "Él prueba la sopa", ru: "Он пробует суп" },
        nosotros: { es: "Nosotros probamos la sopa", ru: "Мы пробуем суп" },
        vosotros: { es: "Vosotros probáis la sopa", ru: "Вы пробуете суп" },
        ellos: { es: "Ellos prueban la sopa", ru: "Они пробуют суп" }
      },
      past: {
        yo: { es: "Yo probé la sopa", ru: "Я попробовал суп" },
        tú: { es: "Tú probaste la sopa", ru: "Ты попробовал суп" },
        él: { es: "Él probó la sopa", ru: "Он попробовал суп" },
        nosotros: { es: "Nosotros probamos la sopa", ru: "Мы попробовали суп" },
        vosotros: { es: "Vosotros probasteis la sopa", ru: "Вы попробовали суп" },
        ellos: { es: "Ellos probaron la sopa", ru: "Они попробовали суп" }
      },
      future: {
        yo: { es: "Yo probaré la sopa", ru: "Я попробую суп" },
        tú: { es: "Tú probarás la sopa", ru: "Ты попробуешь суп" },
        él: { es: "Él probará la sopa", ru: "Он попробует суп" },
        nosotros: { es: "Nosotros probaremos la sopa", ru: "Мы попробуем суп" },
        vosotros: { es: "Vosotros probaréis la sopa", ru: "Вы попробуете суп" },
        ellos: { es: "Ellos probarán la sopa", ru: "Они попробуют суп" }
      }
    }
  },
  {
    id: 525,
    word: "tocar",
    translation: "трогать, играть",
    category: "verbs",
    type: "глагол",
    popularity: 525,
    examples: {
      present: {
        yo: { es: "Yo toco la guitarra", ru: "Я играю на гитаре" },
        tú: { es: "Tú tocas la guitarra", ru: "Ты играешь на гитаре" },
        él: { es: "Él toca la guitarra", ru: "Он играет на гитаре" },
        nosotros: { es: "Nosotros tocamos la guitarra", ru: "Мы играем на гитаре" },
        vosotros: { es: "Vosotros tocáis la guitarra", ru: "Вы играете на гитаре" },
        ellos: { es: "Ellos tocan la guitarra", ru: "Они играют на гитаре" }
      },
      past: {
        yo: { es: "Yo toqué la guitarra", ru: "Я играл на гитаре" },
        tú: { es: "Tú tocaste la guitarra", ru: "Ты играл на гитаре" },
        él: { es: "Él tocó la guitarra", ru: "Он играл на гитаре" },
        nosotros: { es: "Nosotros tocamos la guitarra", ru: "Мы играли на гитаре" },
        vosotros: { es: "Vosotros tocasteis la guitarra", ru: "Вы играли на гитаре" },
        ellos: { es: "Ellos tocaron la guitarra", ru: "Они играли на гитаре" }
      },
      future: {
        yo: { es: "Yo tocaré la guitarra", ru: "Я буду играть на гитаре" },
        tú: { es: "Tú tocarás la guitarra", ru: "Ты будешь играть на гитаре" },
        él: { es: "Él tocará la guitarra", ru: "Он будет играть на гитаре" },
        nosotros: { es: "Nosotros tocaremos la guitarra", ru: "Мы будем играть на гитаре" },
        vosotros: { es: "Vosotros tocaréis la guitarra", ru: "Вы будете играть на гитаре" },
        ellos: { es: "Ellos tocarán la guitarra", ru: "Они будут играть на гитаре" }
      }
    }
  },
  {
    id: 526,
    word: "sonar",
    translation: "звучать",
    category: "verbs",
    type: "глагол",
    popularity: 526,
    examples: {
      present: {
        yo: { es: "Yo sueno la campana", ru: "Я звоню в колокол" },
        tú: { es: "Tú suenas la campana", ru: "Ты звонишь в колокол" },
        él: { es: "Él suena la campana", ru: "Он звонит в колокол" },
        nosotros: { es: "Nosotros sonamos la campana", ru: "Мы звоним в колокол" },
        vosotros: { es: "Vosotros sonáis la campana", ru: "Вы звоните в колокол" },
        ellos: { es: "Ellos suenan la campana", ru: "Они звонят в колокол" }
      },
      past: {
        yo: { es: "Yo soné la campana", ru: "Я звонил в колокол" },
        tú: { es: "Tú sonaste la campana", ru: "Ты звонил в колокол" },
        él: { es: "Él sonó la campana", ru: "Он звонил в колокол" },
        nosotros: { es: "Nosotros sonamos la campana", ru: "Мы звонили в колокол" },
        vosotros: { es: "Vosotros sonasteis la campana", ru: "Вы звонили в колокол" },
        ellos: { es: "Ellos sonaron la campana", ru: "Они звонили в колокол" }
      },
      future: {
        yo: { es: "Yo sonaré la campana", ru: "Я позвоню в колокол" },
        tú: { es: "Tú sonarás la campana", ru: "Ты позвонишь в колокол" },
        él: { es: "Él sonará la campana", ru: "Он позвонит в колокол" },
        nosotros: { es: "Nosotros sonaremos la campana", ru: "Мы позвоним в колокол" },
        vosotros: { es: "Vosotros sonaréis la campana", ru: "Вы позвоните в колокол" },
        ellos: { es: "Ellos sonarán la campana", ru: "Они позвонят в колокол" }
      }
    }
  },
  {
    id: 527,
    word: "oír",
    translation: "слышать",
    category: "verbs",
    type: "глагол",
    popularity: 527,
    examples: {
      present: {
        yo: { es: "Yo oigo música", ru: "Я слышу музыку" },
        tú: { es: "Tú oyes música", ru: "Ты слышишь музыку" },
        él: { es: "Él oye música", ru: "Он слышит музыку" },
        nosotros: { es: "Nosotros oímos música", ru: "Мы слышим музыку" },
        vosotros: { es: "Vosotros oís música", ru: "Вы слышите музыку" },
        ellos: { es: "Ellos oyen música", ru: "Они слышат музыку" }
      },
      past: {
        yo: { es: "Yo oí música", ru: "Я слышал музыку" },
        tú: { es: "Tú oíste música", ru: "Ты слышал музыку" },
        él: { es: "Él oyó música", ru: "Он слышал музыку" },
        nosotros: { es: "Nosotros oímos música", ru: "Мы слышали музыку" },
        vosotros: { es: "Vosotros oísteis música", ru: "Вы слышали музыку" },
        ellos: { es: "Ellos oyeron música", ru: "Они слышали музыку" }
      },
      future: {
        yo: { es: "Yo oiré música", ru: "Я услышу музыку" },
        tú: { es: "Tú oirás música", ru: "Ты услышишь музыку" },
        él: { es: "Él oirá música", ru: "Он услышит музыку" },
        nosotros: { es: "Nosotros oiremos música", ru: "Мы услышим музыку" },
        vosotros: { es: "Vosotros oiréis música", ru: "Вы услышите музыку" },
        ellos: { es: "Ellos oirán música", ru: "Они услышат музыку" }
      }
    }
  },
  {
    id: 528,
    word: "ver",
    translation: "видеть",
    category: "verbs",
    type: "глагол",
    popularity: 528,
    examples: {
      present: {
        yo: { es: "Yo veo la televisión", ru: "Я смотрю телевизор" },
        tú: { es: "Tú ves la televisión", ru: "Ты смотришь телевизор" },
        él: { es: "Él ve la televisión", ru: "Он смотрит телевизор" },
        nosotros: { es: "Nosotros vemos la televisión", ru: "Мы смотрим телевизор" },
        vosotros: { es: "Vosotros veis la televisión", ru: "Вы смотрите телевизор" },
        ellos: { es: "Ellos ven la televisión", ru: "Они смотрят телевизор" }
      },
      past: {
        yo: { es: "Yo vi la televisión", ru: "Я смотрел телевизор" },
        tú: { es: "Tú viste la televisión", ru: "Ты смотрел телевизор" },
        él: { es: "Él vio la televisión", ru: "Он смотрел телевизор" },
        nosotros: { es: "Nosotros vimos la televisión", ru: "Мы смотрели телевизор" },
        vosotros: { es: "Vosotros visteis la televisión", ru: "Вы смотрели телевизор" },
        ellos: { es: "Ellos vieron la televisión", ru: "Они смотрели телевизор" }
      },
      future: {
        yo: { es: "Yo veré la televisión", ru: "Я буду смотреть телевизор" },
        tú: { es: "Tú verás la televisión", ru: "Ты будешь смотреть телевизор" },
        él: { es: "Él verá la televisión", ru: "Он будет смотреть телевизор" },
        nosotros: { es: "Nosotros veremos la televisión", ru: "Мы будем смотреть телевизор" },
        vosotros: { es: "Vosotros veréis la televisión", ru: "Вы будете смотреть телевизор" },
        ellos: { es: "Ellos verán la televisión", ru: "Они будут смотреть телевизор" }
      }
    }
  },
  {
    id: 529,
    word: "mostrar",
    translation: "показывать",
    category: "verbs",
    type: "глагол",
    popularity: 529,
    examples: {
      present: {
        yo: { es: "Yo muestro las fotos", ru: "Я показываю фотографии" },
        tú: { es: "Tú muestras las fotos", ru: "Ты показываешь фотографии" },
        él: { es: "Él muestra las fotos", ru: "Он показывает фотографии" },
        nosotros: { es: "Nosotros mostramos las fotos", ru: "Мы показываем фотографии" },
        vosotros: { es: "Vosotros mostráis las fotos", ru: "Вы показываете фотографии" },
        ellos: { es: "Ellos muestran las fotos", ru: "Они показывают фотографии" }
      },
      past: {
        yo: { es: "Yo mostré las fotos", ru: "Я показал фотографии" },
        tú: { es: "Tú mostraste las fotos", ru: "Ты показал фотографии" },
        él: { es: "Él mostró las fotos", ru: "Он показал фотографии" },
        nosotros: { es: "Nosotros mostramos las fotos", ru: "Мы показали фотографии" },
        vosotros: { es: "Vosotros mostrasteis las fotos", ru: "Вы показали фотографии" },
        ellos: { es: "Ellos mostraron las fotos", ru: "Они показали фотографии" }
      },
      future: {
        yo: { es: "Yo mostraré las fotos", ru: "Я покажу фотографии" },
        tú: { es: "Tú mostrarás las fotos", ru: "Ты покажешь фотографии" },
        él: { es: "Él mostrará las fotos", ru: "Он покажет фотографии" },
        nosotros: { es: "Nosotros mostraremos las fotos", ru: "Мы покажем фотографии" },
        vosotros: { es: "Vosotros mostraréis las fotos", ru: "Вы покажете фотографии" },
        ellos: { es: "Ellos mostrarán las fotos", ru: "Они покажут фотографии" }
      }
    }
  },
  {
    id: 530,
    word: "encontrar",
    translation: "находить",
    category: "verbs",
    type: "глагол",
    popularity: 530,
    examples: {
      present: {
        yo: { es: "Yo encuentro las llaves", ru: "Я нахожу ключи" },
        tú: { es: "Tú encuentras las llaves", ru: "Ты находишь ключи" },
        él: { es: "Él encuentra las llaves", ru: "Он находит ключи" },
        nosotros: { es: "Nosotros encontramos las llaves", ru: "Мы находим ключи" },
        vosotros: { es: "Vosotros encontráis las llaves", ru: "Вы находите ключи" },
        ellos: { es: "Ellos encuentran las llaves", ru: "Они находят ключи" }
      },
      past: {
        yo: { es: "Yo encontré las llaves", ru: "Я нашёл ключи" },
        tú: { es: "Tú encontraste las llaves", ru: "Ты нашёл ключи" },
        él: { es: "Él encontró las llaves", ru: "Он нашёл ключи" },
        nosotros: { es: "Nosotros encontramos las llaves", ru: "Мы нашли ключи" },
        vosotros: { es: "Vosotros encontrasteis las llaves", ru: "Вы нашли ключи" },
        ellos: { es: "Ellos encontraron las llaves", ru: "Они нашли ключи" }
      },
      future: {
        yo: { es: "Yo encontraré las llaves", ru: "Я найду ключи" },
        tú: { es: "Tú encontrarás las llaves", ru: "Ты найдёшь ключи" },
        él: { es: "Él encontrará las llaves", ru: "Он найдёт ключи" },
        nosotros: { es: "Nosotros encontraremos las llaves", ru: "Мы найдём ключи" },
        vosotros: { es: "Vosotros encontraréis las llaves", ru: "Вы найдёте ключи" },
        ellos: { es: "Ellos encontrarán las llaves", ru: "Они найдут ключи" }
      }
    }
  },
  {
    id: 531,
    word: "perder",
    translation: "терять",
    category: "verbs",
    type: "глагол",
    popularity: 531,
    examples: {
      present: {
        yo: { es: "Yo pierdo el tiempo", ru: "Я теряю время" },
        tú: { es: "Tú pierdes el tiempo", ru: "Ты теряешь время" },
        él: { es: "Él pierde el tiempo", ru: "Он теряет время" },
        nosotros: { es: "Nosotros perdemos el tiempo", ru: "Мы теряем время" },
        vosotros: { es: "Vosotros perdéis el tiempo", ru: "Вы теряете время" },
        ellos: { es: "Ellos pierden el tiempo", ru: "Они теряют время" }
      },
      past: {
        yo: { es: "Yo perdí el tiempo", ru: "Я потерял время" },
        tú: { es: "Tú perdiste el tiempo", ru: "Ты потерял время" },
        él: { es: "Él perdió el tiempo", ru: "Он потерял время" },
        nosotros: { es: "Nosotros perdimos el tiempo", ru: "Мы потеряли время" },
        vosotros: { es: "Vosotros perdisteis el tiempo", ru: "Вы потеряли время" },
        ellos: { es: "Ellos perdieron el tiempo", ru: "Они потеряли время" }
      },
      future: {
        yo: { es: "Yo perderé el tiempo", ru: "Я потеряю время" },
        tú: { es: "Tú perderás el tiempo", ru: "Ты потеряешь время" },
        él: { es: "Él perderá el tiempo", ru: "Он потеряет время" },
        nosotros: { es: "Nosotros perderemos el tiempo", ru: "Мы потеряем время" },
        vosotros: { es: "Vosotros perderéis el tiempo", ru: "Вы потеряете время" },
        ellos: { es: "Ellos perderán el tiempo", ru: "Они потеряют время" }
      }
    }
  },
  {
    id: 532,
    word: "ganar",
    translation: "выигрывать, зарабатывать",
    category: "verbs",
    type: "глагол",
    popularity: 532,
    examples: {
      present: {
        yo: { es: "Yo gano el partido", ru: "Я выигрываю матч" },
        tú: { es: "Tú ganas el partido", ru: "Ты выигрываешь матч" },
        él: { es: "Él gana el partido", ru: "Он выигрывает матч" },
        nosotros: { es: "Nosotros ganamos el partido", ru: "Мы выигрываем матч" },
        vosotros: { es: "Vosotros ganáis el partido", ru: "Вы выигрываете матч" },
        ellos: { es: "Ellos ganan el partido", ru: "Они выигрывают матч" }
      },
      past: {
        yo: { es: "Yo gané el partido", ru: "Я выиграл матч" },
        tú: { es: "Tú ganaste el partido", ru: "Ты выиграл матч" },
        él: { es: "Él ganó el partido", ru: "Он выиграл матч" },
        nosotros: { es: "Nosotros ganamos el partido", ru: "Мы выиграли матч" },
        vosotros: { es: "Vosotros ganasteis el partido", ru: "Вы выиграли матч" },
        ellos: { es: "Ellos ganaron el partido", ru: "Они выиграли матч" }
      },
      future: {
        yo: { es: "Yo ganaré el partido", ru: "Я выиграю матч" },
        tú: { es: "Tú ganarás el partido", ru: "Ты выиграешь матч" },
        él: { es: "Él ganará el partido", ru: "Он выиграет матч" },
        nosotros: { es: "Nosotros ganaremos el partido", ru: "Мы выиграем матч" },
        vosotros: { es: "Vosotros ganaréis el partido", ru: "Вы выиграете матч" },
        ellos: { es: "Ellos ganarán el partido", ru: "Они выиграют матч" }
      }
    }
  },
  {
    id: 533,
    word: "recibir",
    translation: "получать",
    category: "verbs",
    type: "глагол",
    popularity: 533,
    examples: {
      present: {
        yo: { es: "Yo recibo un regalo", ru: "Я получаю подарок" },
        tú: { es: "Tú recibes un regalo", ru: "Ты получаешь подарок" },
        él: { es: "Él recibe un regalo", ru: "Он получает подарок" },
        nosotros: { es: "Nosotros recibimos un regalo", ru: "Мы получаем подарок" },
        vosotros: { es: "Vosotros recibís un regalo", ru: "Вы получаете подарок" },
        ellos: { es: "Ellos reciben un regalo", ru: "Они получают подарок" }
      },
      past: {
        yo: { es: "Yo recibí un regalo", ru: "Я получил подарок" },
        tú: { es: "Tú recibiste un regalo", ru: "Ты получил подарок" },
        él: { es: "Él recibió un regalo", ru: "Он получил подарок" },
        nosotros: { es: "Nosotros recibimos un regalo", ru: "Мы получили подарок" },
        vosotros: { es: "Vosotros recibisteis un regalo", ru: "Вы получили подарок" },
        ellos: { es: "Ellos recibieron un regalo", ru: "Они получили подарок" }
      },
      future: {
        yo: { es: "Yo recibiré un regalo", ru: "Я получу подарок" },
        tú: { es: "Tú recibirás un regalo", ru: "Ты получишь подарок" },
        él: { es: "Él recibirá un regalo", ru: "Он получит подарок" },
        nosotros: { es: "Nosotros recibiremos un regalo", ru: "Мы получим подарок" },
        vosotros: { es: "Vosotros recibiréis un regalo", ru: "Вы получите подарок" },
        ellos: { es: "Ellos recibirán un regalo", ru: "Они получат подарок" }
      }
    }
  },
  {
    id: 534,
    word: "enviar",
    translation: "отправлять",
    category: "verbs",
    type: "глагол",
    popularity: 534,
    examples: {
      present: {
        yo: { es: "Yo envío un mensaje", ru: "Я отправляю сообщение" },
        tú: { es: "Tú envías un mensaje", ru: "Ты отправляешь сообщение" },
        él: { es: "Él envía un mensaje", ru: "Он отправляет сообщение" },
        nosotros: { es: "Nosotros enviamos un mensaje", ru: "Мы отправляем сообщение" },
        vosotros: { es: "Vosotros enviáis un mensaje", ru: "Вы отправляете сообщение" },
        ellos: { es: "Ellos envían un mensaje", ru: "Они отправляют сообщение" }
      },
      past: {
        yo: { es: "Yo envié un mensaje", ru: "Я отправил сообщение" },
        tú: { es: "Tú enviaste un mensaje", ru: "Ты отправил сообщение" },
        él: { es: "Él envió un mensaje", ru: "Он отправил сообщение" },
        nosotros: { es: "Nosotros enviamos un mensaje", ru: "Мы отправили сообщение" },
        vosotros: { es: "Vosotros enviasteis un mensaje", ru: "Вы отправили сообщение" },
        ellos: { es: "Ellos enviaron un mensaje", ru: "Они отправили сообщение" }
      },
      future: {
        yo: { es: "Yo enviaré un mensaje", ru: "Я отправлю сообщение" },
        tú: { es: "Tú enviarás un mensaje", ru: "Ты отправишь сообщение" },
        él: { es: "Él enviará un mensaje", ru: "Он отправит сообщение" },
        nosotros: { es: "Nosotros enviaremos un mensaje", ru: "Мы отправим сообщение" },
        vosotros: { es: "Vosotros enviaréis un mensaje", ru: "Вы отправите сообщение" },
        ellos: { es: "Ellos enviarán un mensaje", ru: "Они отправят сообщение" }
      }
    }
  },
  {
    id: 535,
    word: "mandar",
    translation: "посылать",
    category: "verbs",
    type: "глагол",
    popularity: 535,
    examples: {
      present: {
        yo: { es: "Yo mando una carta", ru: "Я посылаю письмо" },
        tú: { es: "Tú mandas una carta", ru: "Ты посылаешь письмо" },
        él: { es: "Él manda una carta", ru: "Он посылает письмо" },
        nosotros: { es: "Nosotros mandamos una carta", ru: "Мы посылаем письмо" },
        vosotros: { es: "Vosotros mandáis una carta", ru: "Вы посылаете письмо" },
        ellos: { es: "Ellos mandan una carta", ru: "Они посылают письмо" }
      },
      past: {
        yo: { es: "Yo mandé una carta", ru: "Я послал письмо" },
        tú: { es: "Tú mandaste una carta", ru: "Ты послал письмо" },
        él: { es: "Él mandó una carta", ru: "Он послал письмо" },
        nosotros: { es: "Nosotros mandamos una carta", ru: "Мы послали письмо" },
        vosotros: { es: "Vosotros mandasteis una carta", ru: "Вы послали письмо" },
        ellos: { es: "Ellos mandaron una carta", ru: "Они послали письмо" }
      },
      future: {
        yo: { es: "Yo mandaré una carta", ru: "Я пошлю письмо" },
        tú: { es: "Tú mandarás una carta", ru: "Ты пошлёшь письмо" },
        él: { es: "Él mandará una carta", ru: "Он пошлёт письмо" },
        nosotros: { es: "Nosotros mandaremos una carta", ru: "Мы пошлём письмо" },
        vosotros: { es: "Vosotros mandaréis una carta", ru: "Вы пошлёте письмо" },
        ellos: { es: "Ellos mandarán una carta", ru: "Они пошлют письмо" }
      }
    }
  },
  {
    id: 536,
    word: "traer",
    translation: "приносить",
    category: "verbs",
    type: "глагол",
    popularity: 536,
    examples: {
      present: {
        yo: { es: "Yo traigo el libro", ru: "Я приношу книгу" },
        tú: { es: "Tú traes el libro", ru: "Ты приносишь книгу" },
        él: { es: "Él trae el libro", ru: "Он приносит книгу" },
        nosotros: { es: "Nosotros traemos el libro", ru: "Мы приносим книгу" },
        vosotros: { es: "Vosotros traéis el libro", ru: "Вы приносите книгу" },
        ellos: { es: "Ellos traen el libro", ru: "Они приносят книгу" }
      },
      past: {
        yo: { es: "Yo traje el libro", ru: "Я принёс книгу" },
        tú: { es: "Tú trajiste el libro", ru: "Ты принёс книгу" },
        él: { es: "Él trajo el libro", ru: "Он принёс книгу" },
        nosotros: { es: "Nosotros trajimos el libro", ru: "Мы принесли книгу" },
        vosotros: { es: "Vosotros trajisteis el libro", ru: "Вы принесли книгу" },
        ellos: { es: "Ellos trajeron el libro", ru: "Они принесли книгу" }
      },
      future: {
        yo: { es: "Yo traeré el libro", ru: "Я принесу книгу" },
        tú: { es: "Tú traerás el libro", ru: "Ты принесёшь книгу" },
        él: { es: "Él traerá el libro", ru: "Он принесёт книгу" },
        nosotros: { es: "Nosotros traeremos el libro", ru: "Мы принесём книгу" },
        vosotros: { es: "Vosotros traeréis el libro", ru: "Вы принесёте книгу" },
        ellos: { es: "Ellos traerán el libro", ru: "Они принесут книгу" }
      }
    }
  },
  {
    id: 537,
    word: "llevar",
    translation: "нести, носить",
    category: "verbs",
    type: "глагол",
    popularity: 537,
    examples: {
      present: {
        yo: { es: "Yo llevo una maleta", ru: "Я несу чемодан" },
        tú: { es: "Tú llevas una maleta", ru: "Ты несёшь чемодан" },
        él: { es: "Él lleva una maleta", ru: "Он несёт чемодан" },
        nosotros: { es: "Nosotros llevamos una maleta", ru: "Мы несём чемодан" },
        vosotros: { es: "Vosotros lleváis una maleta", ru: "Вы несёте чемодан" },
        ellos: { es: "Ellos llevan una maleta", ru: "Они несут чемодан" }
      },
      past: {
        yo: { es: "Yo llevé una maleta", ru: "Я нёс чемодан" },
        tú: { es: "Tú llevaste una maleta", ru: "Ты нёс чемодан" },
        él: { es: "Él llevó una maleta", ru: "Он нёс чемодан" },
        nosotros: { es: "Nosotros llevamos una maleta", ru: "Мы несли чемодан" },
        vosotros: { es: "Vosotros llevasteis una maleta", ru: "Вы несли чемодан" },
        ellos: { es: "Ellos llevaron una maleta", ru: "Они несли чемодан" }
      },
      future: {
        yo: { es: "Yo llevaré una maleta", ru: "Я понесу чемодан" },
        tú: { es: "Tú llevarás una maleta", ru: "Ты понесёшь чемодан" },
        él: { es: "Él llevará una maleta", ru: "Он понесёт чемодан" },
        nosotros: { es: "Nosotros llevaremos una maleta", ru: "Мы понесём чемодан" },
        vosotros: { es: "Vosotros llevaréis una maleta", ru: "Вы понесёте чемодан" },
        ellos: { es: "Ellos llevarán una maleta", ru: "Они понесут чемодан" }
      }
    }
  },
  {
    id: 538,
    word: "coger",
    translation: "брать",
    category: "verbs",
    type: "глагол",
    popularity: 538,
    examples: {
      present: {
        yo: { es: "Yo cojo el autobús", ru: "Я беру автобус" },
        tú: { es: "Tú coges el autobús", ru: "Ты берёшь автобус" },
        él: { es: "Él coge el autobús", ru: "Он берёт автобус" },
        nosotros: { es: "Nosotros cogemos el autobús", ru: "Мы берём автобус" },
        vosotros: { es: "Vosotros cogéis el autobús", ru: "Вы берёте автобус" },
        ellos: { es: "Ellos cogen el autobús", ru: "Они берут автобус" }
      },
      past: {
        yo: { es: "Yo cogí el autobús", ru: "Я взял автобус" },
        tú: { es: "Tú cogiste el autobús", ru: "Ты взял автобус" },
        él: { es: "Él cogió el autobús", ru: "Он взял автобус" },
        nosotros: { es: "Nosotros cogimos el autobús", ru: "Мы взяли автобус" },
        vosotros: { es: "Vosotros cogisteis el autobús", ru: "Вы взяли автобус" },
        ellos: { es: "Ellos cogieron el autobús", ru: "Они взяли автобус" }
      },
      future: {
        yo: { es: "Yo cogeré el autobús", ru: "Я возьму автобус" },
        tú: { es: "Tú cogerás el autobús", ru: "Ты возьмёшь автобус" },
        él: { es: "Él cogerá el autobús", ru: "Он возьмёт автобус" },
        nosotros: { es: "Nosotros cogeremos el autobús", ru: "Мы возьмём автобус" },
        vosotros: { es: "Vosotros cogeréis el autobús", ru: "Вы возьмёте автобус" },
        ellos: { es: "Ellos cogerán el autobús", ru: "Они возьмут автобус" }
      }
    }
  },
  {
    id: 539,
    word: "dejar",
    translation: "оставлять",
    category: "verbs",
    type: "глагол",
    popularity: 539,
    examples: {
      present: {
        yo: { es: "Yo dejo las llaves aquí", ru: "Я оставляю ключи здесь" },
        tú: { es: "Tú dejas las llaves aquí", ru: "Ты оставляешь ключи здесь" },
        él: { es: "Él deja las llaves aquí", ru: "Он оставляет ключи здесь" },
        nosotros: { es: "Nosotros dejamos las llaves aquí", ru: "Мы оставляем ключи здесь" },
        vosotros: { es: "Vosotros dejáis las llaves aquí", ru: "Вы оставляете ключи здесь" },
        ellos: { es: "Ellos dejan las llaves aquí", ru: "Они оставляют ключи здесь" }
      },
      past: {
        yo: { es: "Yo dejé las llaves aquí", ru: "Я оставил ключи здесь" },
        tú: { es: "Tú dejaste las llaves aquí", ru: "Ты оставил ключи здесь" },
        él: { es: "Él dejó las llaves aquí", ru: "Он оставил ключи здесь" },
        nosotros: { es: "Nosotros dejamos las llaves aquí", ru: "Мы оставили ключи здесь" },
        vosotros: { es: "Vosotros dejasteis las llaves aquí", ru: "Вы оставили ключи здесь" },
        ellos: { es: "Ellos dejaron las llaves aquí", ru: "Они оставили ключи здесь" }
      },
      future: {
        yo: { es: "Yo dejaré las llaves aquí", ru: "Я оставлю ключи здесь" },
        tú: { es: "Tú dejarás las llaves aquí", ru: "Ты оставишь ключи здесь" },
        él: { es: "Él dejará las llaves aquí", ru: "Он оставит ключи здесь" },
        nosotros: { es: "Nosotros dejaremos las llaves aquí", ru: "Мы оставим ключи здесь" },
        vosotros: { es: "Vosotros dejaréis las llaves aquí", ru: "Вы оставите ключи здесь" },
        ellos: { es: "Ellos dejarán las llaves aquí", ru: "Они оставят ключи здесь" }
      }
    }
  },
  {
    id: 540,
    word: "poner",
    translation: "класть",
    category: "verbs",
    type: "глагол",
    popularity: 540,
    examples: {
      present: {
        yo: { es: "Yo pongo el libro en la mesa", ru: "Я кладу книгу на стол" },
        tú: { es: "Tú pones el libro en la mesa", ru: "Ты кладёшь книгу на стол" },
        él: { es: "Él pone el libro en la mesa", ru: "Он кладёт книгу на стол" },
        nosotros: { es: "Nosotros ponemos el libro en la mesa", ru: "Мы кладём книгу на стол" },
        vosotros: { es: "Vosotros ponéis el libro en la mesa", ru: "Вы кладёте книгу на стол" },
        ellos: { es: "Ellos ponen el libro en la mesa", ru: "Они кладут книгу на стол" }
      },
      past: {
        yo: { es: "Yo puse el libro en la mesa", ru: "Я положил книгу на стол" },
        tú: { es: "Tú pusiste el libro en la mesa", ru: "Ты положил книгу на стол" },
        él: { es: "Él puso el libro en la mesa", ru: "Он положил книгу на стол" },
        nosotros: { es: "Nosotros pusimos el libro en la mesa", ru: "Мы положили книгу на стол" },
        vosotros: { es: "Vosotros pusisteis el libro en la mesa", ru: "Вы положили книгу на стол" },
        ellos: { es: "Ellos pusieron el libro en la mesa", ru: "Они положили книгу на стол" }
      },
      future: {
        yo: { es: "Yo pondré el libro en la mesa", ru: "Я положу книгу на стол" },
        tú: { es: "Tú pondrás el libro en la mesa", ru: "Ты положишь книгу на стол" },
        él: { es: "Él pondrá el libro en la mesa", ru: "Он положит книгу на стол" },
        nosotros: { es: "Nosotros pondremos el libro en la mesa", ru: "Мы положим книгу на стол" },
        vosotros: { es: "Vosotros pondréis el libro en la mesa", ru: "Вы положите книгу на стол" },
        ellos: { es: "Ellos pondrán el libro en la mesa", ru: "Они положат книгу на стол" }
      }
    }
  },
  {
    id: 541,
    word: "sacar",
    translation: "вынимать",
    category: "verbs",
    type: "глагол",
    popularity: 541,
    examples: {
      present: {
        yo: { es: "Yo saco el dinero", ru: "Я вынимаю деньги" },
        tú: { es: "Tú sacas el dinero", ru: "Ты вынимаешь деньги" },
        él: { es: "Él saca el dinero", ru: "Он вынимает деньги" },
        nosotros: { es: "Nosotros sacamos el dinero", ru: "Мы вынимаем деньги" },
        vosotros: { es: "Vosotros sacáis el dinero", ru: "Вы вынимаете деньги" },
        ellos: { es: "Ellos sacan el dinero", ru: "Они вынимают деньги" }
      },
      past: {
        yo: { es: "Yo saqué el dinero", ru: "Я вынул деньги" },
        tú: { es: "Tú sacaste el dinero", ru: "Ты вынул деньги" },
        él: { es: "Él sacó el dinero", ru: "Он вынул деньги" },
        nosotros: { es: "Nosotros sacamos el dinero", ru: "Мы вынули деньги" },
        vosotros: { es: "Vosotros sacasteis el dinero", ru: "Вы вынули деньги" },
        ellos: { es: "Ellos sacaron el dinero", ru: "Они вынули деньги" }
      },
      future: {
        yo: { es: "Yo sacaré el dinero", ru: "Я выну деньги" },
        tú: { es: "Tú sacarás el dinero", ru: "Ты вынешь деньги" },
        él: { es: "Él sacará el dinero", ru: "Он вынет деньги" },
        nosotros: { es: "Nosotros sacaremos el dinero", ru: "Мы вынем деньги" },
        vosotros: { es: "Vosotros sacaréis el dinero", ru: "Вы вынете деньги" },
        ellos: { es: "Ellos sacarán el dinero", ru: "Они вынут деньги" }
      }
    }
  },
  {
    id: 542,
    word: "meter",
    translation: "вставлять",
    category: "verbs",
    type: "глагол",
    popularity: 542,
    examples: {
      present: {
        yo: { es: "Yo meto la llave", ru: "Я вставляю ключ" },
        tú: { es: "Tú metes la llave", ru: "Ты вставляешь ключ" },
        él: { es: "Él mete la llave", ru: "Он вставляет ключ" },
        nosotros: { es: "Nosotros metemos la llave", ru: "Мы вставляем ключ" },
        vosotros: { es: "Vosotros metéis la llave", ru: "Вы вставляете ключ" },
        ellos: { es: "Ellos meten la llave", ru: "Они вставляют ключ" }
      },
      past: {
        yo: { es: "Yo metí la llave", ru: "Я вставил ключ" },
        tú: { es: "Tú metiste la llave", ru: "Ты вставил ключ" },
        él: { es: "Él metió la llave", ru: "Он вставил ключ" },
        nosotros: { es: "Nosotros metemos la llave", ru: "Мы вставили ключ" },
        vosotros: { es: "Vosotros metisteis la llave", ru: "Вы вставили ключ" },
        ellos: { es: "Ellos metieron la llave", ru: "Они вставили ключ" }
      },
      future: {
        yo: { es: "Yo meteré la llave", ru: "Я вставлю ключ" },
        tú: { es: "Tú meterás la llave", ru: "Ты вставишь ключ" },
        él: { es: "Él meterá la llave", ru: "Он вставит ключ" },
        nosotros: { es: "Nosotros meteremos la llave", ru: "Мы вставим ключ" },
        vosotros: { es: "Vosotros meteréis la llave", ru: "Вы вставите ключ" },
        ellos: { es: "Ellos meterán la llave", ru: "Они вставят ключ" }
      }
    }
  },
  {
    id: 543,
    word: "tirar",
    translation: "бросать",
    category: "verbs",
    type: "глагол",
    popularity: 543,
    examples: {
      present: {
        yo: { es: "Yo tiro la pelota", ru: "Я бросаю мяч" },
        tú: { es: "Tú tiras la pelota", ru: "Ты бросаешь мяч" },
        él: { es: "Él tira la pelota", ru: "Он бросает мяч" },
        nosotros: { es: "Nosotros tiramos la pelota", ru: "Мы бросаем мяч" },
        vosotros: { es: "Vosotros tiráis la pelota", ru: "Вы бросаете мяч" },
        ellos: { es: "Ellos tiran la pelota", ru: "Они бросают мяч" }
      },
      past: {
        yo: { es: "Yo tiré la pelota", ru: "Я бросил мяч" },
        tú: { es: "Tú tiraste la pelota", ru: "Ты бросил мяч" },
        él: { es: "Él tiró la pelota", ru: "Он бросил мяч" },
        nosotros: { es: "Nosotros tiramos la pelota", ru: "Мы бросили мяч" },
        vosotros: { es: "Vosotros tirasteis la pelota", ru: "Вы бросили мяч" },
        ellos: { es: "Ellos tiraron la pelota", ru: "Они бросили мяч" }
      },
      future: {
        yo: { es: "Yo tiraré la pelota", ru: "Я брошу мяч" },
        tú: { es: "Tú tirarás la pelota", ru: "Ты бросишь мяч" },
        él: { es: "Él tirará la pelota", ru: "Он бросит мяч" },
        nosotros: { es: "Nosotros tiraremos la pelota", ru: "Мы бросим мяч" },
        vosotros: { es: "Vosotros tiraréis la pelota", ru: "Вы бросите мяч" },
        ellos: { es: "Ellos tirarán la pelota", ru: "Они бросят мяч" }
      }
    }
  },
  {
    id: 544,
    word: "empujar",
    translation: "толкать",
    category: "verbs",
    type: "глагол",
    popularity: 544,
    examples: {
      present: {
        yo: { es: "Yo empujo la puerta", ru: "Я толкаю дверь" },
        tú: { es: "Tú empujas la puerta", ru: "Ты толкаешь дверь" },
        él: { es: "Él empuja la puerta", ru: "Он толкает дверь" },
        nosotros: { es: "Nosotros empujamos la puerta", ru: "Мы толкаем дверь" },
        vosotros: { es: "Vosotros empujáis la puerta", ru: "Вы толкаете дверь" },
        ellos: { es: "Ellos empujan la puerta", ru: "Они толкают дверь" }
      },
      past: {
        yo: { es: "Yo empujé la puerta", ru: "Я толкнул дверь" },
        tú: { es: "Tú empujaste la puerta", ru: "Ты толкнул дверь" },
        él: { es: "Él empujó la puerta", ru: "Он толкнул дверь" },
        nosotros: { es: "Nosotros empujamos la puerta", ru: "Мы толкнули дверь" },
        vosotros: { es: "Vosotros empujasteis la puerta", ru: "Вы толкнули дверь" },
        ellos: { es: "Ellos empujaron la puerta", ru: "Они толкнули дверь" }
      },
      future: {
        yo: { es: "Yo empujaré la puerta", ru: "Я толкну дверь" },
        tú: { es: "Tú empujarás la puerta", ru: "Ты толкнёшь дверь" },
        él: { es: "Él empujará la puerta", ru: "Он толкнёт дверь" },
        nosotros: { es: "Nosotros empujaremos la puerta", ru: "Мы толкнём дверь" },
        vosotros: { es: "Vosotros empujaréis la puerta", ru: "Вы толкнёте дверь" },
        ellos: { es: "Ellos empujarán la puerta", ru: "Они толкнут дверь" }
      }
    }
  },
  {
    id: 545,
    word: "tienda",
    translation: "магазин",
    category: "city",
    type: "существительное",
    popularity: 545,
    examples: {
      present: { es: "La tienda está abierta", ru: "Магазин открыт" },
      past: { es: "La tienda estaba cerrada", ru: "Магазин был закрыт" },
      future: { es: "La tienda estará llena", ru: "Магазин будет полон" }
    }
  },
  {
    id: 546,
    word: "restaurante",
    translation: "ресторан",
    category: "city",
    type: "существительное",
    popularity: 546,
    examples: {
      present: { es: "El restaurante es caro", ru: "Ресторан дорогой" },
      past: { es: "El restaurante era barato", ru: "Ресторан был дешёвым" },
      future: { es: "El restaurante será famoso", ru: "Ресторан будет знаменитым" }
    }
  },
  {
    id: 547,
    word: "bar",
    translation: "бар",
    category: "city",
    type: "существительное",
    popularity: 547,
    examples: {
      present: { es: "El bar está lleno", ru: "Бар полон" },
      past: { es: "El bar estaba vacío", ru: "Бар был пуст" },
      future: { es: "El bar estará cerrado", ru: "Бар будет закрыт" }
    }
  },
  {
    id: 548,
    word: "café",
    translation: "кафе",
    category: "city",
    type: "существительное",
    popularity: 548,
    examples: {
      present: { es: "El café es acogedor", ru: "Кафе уютное" },
      past: { es: "El café era pequeño", ru: "Кафе было маленьким" },
      future: { es: "El café será popular", ru: "Кафе будет популярным" }
    }
  },
  {
    id: 549,
    word: "supermercado",
    translation: "супермаркет",
    category: "city",
    type: "существительное",
    popularity: 549,
    examples: {
      present: { es: "El supermercado es grande", ru: "Супермаркет большой" },
      past: { es: "El supermercado era nuevo", ru: "Супермаркет был новым" },
      future: { es: "El supermercado será moderno", ru: "Супермаркет будет современным" }
    }
  },
  {
    id: 550,
    word: "farmacia",
    translation: "аптека",
    category: "city",
    type: "существительное",
    popularity: 550,
    examples: {
      present: { es: "La farmacia está cerca", ru: "Аптека близко" },
      past: { es: "La farmacia estaba lejos", ru: "Аптека была далеко" },
      future: { es: "La farmacia estará abierta", ru: "Аптека будет открыта" }
    }
  },
  {
    id: 551,
    word: "correo",
    translation: "почта",
    category: "city",
    type: "существительное",
    popularity: 551,
    examples: {
      present: { es: "El correo llega tarde", ru: "Почта приходит поздно" },
      past: { es: "El correo llegaba temprano", ru: "Почта приходила рано" },
      future: { es: "El correo llegará mañana", ru: "Почта придёт завтра" }
    }
  },
  {
    id: 552,
    word: "carta",
    translation: "письмо",
    category: "work",
    type: "существительное",
    popularity: 552,
    examples: {
      present: { es: "Escribo una carta", ru: "Я пишу письмо" },
      past: { es: "Escribí una carta", ru: "Я написал письмо" },
      future: { es: "Escribiré una carta", ru: "Я напишу письмо" }
    }
  },
  {
    id: 553,
    word: "mensaje",
    translation: "сообщение",
    category: "work",
    type: "существительное",
    popularity: 553,
    examples: {
      present: { es: "Recibo un mensaje", ru: "Я получаю сообщение" },
      past: { es: "Recibí un mensaje", ru: "Я получил сообщение" },
      future: { es: "Recibiré un mensaje", ru: "Я получу сообщение" }
    }
  },
  {
    id: 554,
    word: "llamada",
    translation: "звонок",
    category: "work",
    type: "существительное",
    popularity: 554,
    examples: {
      present: { es: "Hago una llamada", ru: "Я делаю звонок" },
      past: { es: "Hice una llamada", ru: "Я сделал звонок" },
      future: { es: "Haré una llamada", ru: "Я сделаю звонок" }
    }
  },
  {
    id: 555,
    word: "reunión",
    translation: "встреча",
    category: "work",
    type: "существительное",
    popularity: 555,
    examples: {
      present: { es: "Tengo una reunión", ru: "У меня встреча" },
      past: { es: "Tenía una reunión", ru: "У меня была встреча" },
      future: { es: "Tendré una reunión", ru: "У меня будет встреча" }
    }
  },
  {
    id: 556,
    word: "cita",
    translation: "встреча, свидание",
    category: "work",
    type: "существительное",
    popularity: 556,
    examples: {
      present: { es: "Tengo una cita", ru: "У меня встреча" },
      past: { es: "Tenía una cita", ru: "У меня была встреча" },
      future: { es: "Tendré una cita", ru: "У меня будет встреча" }
    }
  },
  {
    id: 557,
    word: "fiesta",
    translation: "праздник, вечеринка",
    category: "emotions",
    type: "существительное",
    popularity: 557,
    examples: {
      present: { es: "Voy a la fiesta", ru: "Я иду на вечеринку" },
      past: { es: "Fui a la fiesta", ru: "Я ходил на вечеринку" },
      future: { es: "Iré a la fiesta", ru: "Я пойду на вечеринку" }
    }
  },
  {
    id: 558,
    word: "cumpleaños",
    translation: "день рождения",
    category: "emotions",
    type: "существительное",
    popularity: 558,
    examples: {
      present: { es: "Hoy es mi cumpleaños", ru: "Сегодня мой день рождения" },
      past: { es: "Ayer fue mi cumpleaños", ru: "Вчера был мой день рождения" },
      future: { es: "Mañana será mi cumpleaños", ru: "Завтра будет мой день рождения" }
    }
  },
  {
    id: 559,
    word: "regalo",
    translation: "подарок",
    category: "emotions",
    type: "существительное",
    popularity: 559,
    examples: {
      present: { es: "Compro un regalo", ru: "Я покупаю подарок" },
      past: { es: "Compré un regalo", ru: "Я купил подарок" },
      future: { es: "Compraré un regalo", ru: "Я куплю подарок" }
    }
  },
  {
    id: 560,
    word: "sorpresa",
    translation: "сюрприз",
    category: "emotions",
    type: "существительное",
    popularity: 560,
    examples: {
      present: { es: "Es una sorpresa", ru: "Это сюрприз" },
      past: { es: "Era una sorpresa", ru: "Это был сюрприз" },
      future: { es: "Será una sorpresa", ru: "Это будет сюрприз" }
    }
  },
  {
    id: 561,
    word: "boda",
    translation: "свадьба",
    category: "emotions",
    type: "существительное",
    popularity: 561,
    examples: {
      present: { es: "La boda es hermosa", ru: "Свадьба красивая" },
      past: { es: "La boda era elegante", ru: "Свадьба была элегантной" },
      future: { es: "La boda será grande", ru: "Свадьба будет большой" }
    }
  },
  {
    id: 562,
    word: "viaje",
    translation: "путешествие",
    category: "travel",
    type: "существительное",
    popularity: 562,
    examples: {
      present: { es: "El viaje es largo", ru: "Путешествие длинное" },
      past: { es: "El viaje era corto", ru: "Путешествие было коротким" },
      future: { es: "El viaje será interesante", ru: "Путешествие будет интересным" }
    }
  },
  {
    id: 563,
    word: "vacaciones",
    translation: "каникулы, отпуск",
    category: "travel",
    type: "существительное",
    popularity: 563,
    examples: {
      present: { es: "Estoy de vacaciones", ru: "Я в отпуске" },
      past: { es: "Estaba de vacaciones", ru: "Я был в отпуске" },
      future: { es: "Estaré de vacaciones", ru: "Я буду в отпуске" }
    }
  },
  {
    id: 564,
    word: "turista",
    translation: "турист",
    category: "travel",
    type: "существительное",
    popularity: 564,
    examples: {
      present: { es: "Soy turista", ru: "Я турист" },
      past: { es: "Era turista", ru: "Я был туристом" },
      future: { es: "Seré turista", ru: "Я буду туристом" }
    }
  },
  {
    id: 565,
    word: "guía",
    translation: "гид",
    category: "travel",
    type: "существительное",
    popularity: 565,
    examples: {
      present: { es: "El guía es experto", ru: "Гид опытный" },
      past: { es: "El guía era joven", ru: "Гид был молодым" },
      future: { es: "El guía será útil", ru: "Гид будет полезным" }
    }
  },
  {
    id: 566,
    word: "mapa",
    translation: "карта",
    category: "travel",
    type: "существительное",
    popularity: 566,
    examples: {
      present: { es: "Miro el mapa", ru: "Я смотрю на карту" },
      past: { es: "Miré el mapa", ru: "Я смотрел на карту" },
      future: { es: "Miraré el mapa", ru: "Я посмотрю на карту" }
    }
  },
  {
    id: 567,
    word: "boleto",
    translation: "билет",
    category: "travel",
    type: "существительное",
    popularity: 567,
    examples: {
      present: { es: "Compro un boleto", ru: "Я покупаю билет" },
      past: { es: "Compré un boleto", ru: "Я купил билет" },
      future: { es: "Compraré un boleto", ru: "Я куплю билет" }
    }
  },
  {
    id: 568,
    word: "pasaporte",
    translation: "паспорт",
    category: "travel",
    type: "существительное",
    popularity: 568,
    examples: {
      present: { es: "Necesito el pasaporte", ru: "Мне нужен паспорт" },
      past: { es: "Necesitaba el pasaporte", ru: "Мне нужен был паспорт" },
      future: { es: "Necesitaré el pasaporte", ru: "Мне понадобится паспорт" }
    }
  },
  {
    id: 569,
    word: "maleta",
    translation: "чемодан",
    category: "travel",
    type: "существительное",
    popularity: 569,
    examples: {
      present: { es: "Hago la maleta", ru: "Я собираю чемодан" },
      past: { es: "Hice la maleta", ru: "Я собрал чемодан" },
      future: { es: "Haré la maleta", ru: "Я соберу чемодан" }
    }
  },
  {
    id: 570,
    word: "equipaje",
    translation: "багаж",
    category: "travel",
    type: "существительное",
    popularity: 570,
    examples: {
      present: { es: "El equipaje es pesado", ru: "Багаж тяжёлый" },
      past: { es: "El equipaje era ligero", ru: "Багаж был лёгким" },
      future: { es: "El equipaje será revisado", ru: "Багаж будет проверен" }
    }
  },
  {
    id: 571,
    word: "aduana",
    translation: "таможня",
    category: "travel",
    type: "существительное",
    popularity: 571,
    examples: {
      present: { es: "Paso por la aduana", ru: "Я прохожу таможню" },
      past: { es: "Pasé por la aduana", ru: "Я прошёл таможню" },
      future: { es: "Pasaré por la aduana", ru: "Я пройду таможню" }
    }
  },
  {
    id: 572,
    word: "frontera",
    translation: "граница",
    category: "travel",
    type: "существительное",
    popularity: 572,
    examples: {
      present: { es: "Cruzo la frontera", ru: "Я пересекаю границу" },
      past: { es: "Crucé la frontera", ru: "Я пересёк границу" },
      future: { es: "Cruzaré la frontera", ru: "Я пересеку границу" }
    }
  },
  {
    id: 573,
    word: "idioma",
    translation: "язык",
    category: "work",
    type: "существительное",
    popularity: 573,
    examples: {
      present: { es: "Aprendo un idioma", ru: "Я учу язык" },
      past: { es: "Aprendí un idioma", ru: "Я выучил язык" },
      future: { es: "Aprenderé un idioma", ru: "Я выучу язык" }
    }
  },
  {
    id: 574,
    word: "cultura",
    translation: "культура",
    category: "work",
    type: "существительное",
    popularity: 574,
    examples: {
      present: { es: "La cultura es rica", ru: "Культура богатая" },
      past: { es: "La cultura era antigua", ru: "Культура была древней" },
      future: { es: "La cultura será preservada", ru: "Культура будет сохранена" }
    }
  },
  {
    id: 575,
    word: "tradición",
    translation: "традиция",
    category: "work",
    type: "существительное",
    popularity: 575,
    examples: {
      present: { es: "La tradición es importante", ru: "Традиция важная" },
      past: { es: "La tradición era vieja", ru: "Традиция была старой" },
      future: { es: "La tradición será respetada", ru: "Традиция будет уважаться" }
    }
  },
  {
    id: 576,
    word: "costumbre",
    translation: "обычай",
    category: "work",
    type: "существительное",
    popularity: 576,
    examples: {
      present: { es: "Es una costumbre local", ru: "Это местный обычай" },
      past: { es: "Era una costumbre antigua", ru: "Это был древний обычай" },
      future: { es: "Será una costumbre nueva", ru: "Это будет новый обычай" }
    }
  },
  {
    id: 577,
    word: "religión",
    translation: "религия",
    category: "work",
    type: "существительное",
    popularity: 577,
    examples: {
      present: { es: "La religión es personal", ru: "Религия личная" },
      past: { es: "La religión era importante", ru: "Религия была важной" },
      future: { es: "La religión será respetada", ru: "Религия будет уважаться" }
    }
  },
  {
    id: 578,
    word: "dios",
    translation: "бог",
    category: "work",
    type: "существительное",
    popularity: 578,
    examples: {
      present: { es: "Creo en Dios", ru: "Я верю в Бога" },
      past: { es: "Creía en Dios", ru: "Я верил в Бога" },
      future: { es: "Creeré en Dios", ru: "Я буду верить в Бога" }
    }
  },
  {
    id: 579,
    word: "fe",
    translation: "вера",
    category: "emotions",
    type: "существительное",
    popularity: 579,
    examples: {
      present: { es: "Tengo fe", ru: "У меня есть вера" },
      past: { es: "Tenía fe", ru: "У меня была вера" },
      future: { es: "Tendré fe", ru: "У меня будет вера" }
    }
  },
  {
    id: 580,
    word: "esperanza",
    translation: "надежда",
    category: "emotions",
    type: "существительное",
    popularity: 580,
    examples: {
      present: { es: "Tengo esperanza", ru: "У меня есть надежда" },
      past: { es: "Tenía esperanza", ru: "У меня была надежда" },
      future: { es: "Tendré esperanza", ru: "У меня будет надежда" }
    }
  },
  {
    id: 581,
    word: "paz",
    translation: "мир (покой)",
    category: "emotions",
    type: "существительное",
    popularity: 581,
    examples: {
      present: { es: "Quiero paz", ru: "Я хочу мира" },
      past: { es: "Quería paz", ru: "Я хотел мира" },
      future: { es: "Querré paz", ru: "Я захочу мира" }
    }
  },
  {
    id: 582,
    word: "guerra",
    translation: "война",
    category: "adjectives",
    type: "существительное",
    popularity: 582,
    examples: {
      present: { es: "La guerra es terrible", ru: "Война ужасна" },
      past: { es: "La guerra era larga", ru: "Война была долгой" },
      future: { es: "La guerra será evitada", ru: "Война будет предотвращена" }
    }
  },
  {
    id: 583,
    word: "soldado",
    translation: "солдат",
    category: "work",
    type: "существительное",
    popularity: 583,
    examples: {
      present: { es: "El soldado es valiente", ru: "Солдат храбрый" },
      past: { es: "El soldado era joven", ru: "Солдат был молодым" },
      future: { es: "El soldado será héroe", ru: "Солдат будет героем" }
    }
  },
  {
    id: 584,
    word: "policía",
    translation: "полиция",
    category: "city",
    type: "существительное",
    popularity: 584,
    examples: {
      present: { es: "La policía llega", ru: "Полиция прибывает" },
      past: { es: "La policía llegó", ru: "Полиция прибыла" },
      future: { es: "La policía llegará", ru: "Полиция прибудет" }
    }
  },
  {
    id: 585,
    word: "bombero",
    translation: "пожарный",
    category: "work",
    type: "существительное",
    popularity: 585,
    examples: {
      present: { es: "El bombero apaga el fuego", ru: "Пожарный тушит огонь" },
      past: { es: "El bombero apagó el fuego", ru: "Пожарный потушил огонь" },
      future: { es: "El bombero apagará el fuego", ru: "Пожарный потушит огонь" }
    }
  },
  {
    id: 586,
    word: "profesor",
    translation: "учитель",
    category: "work",
    type: "существительное",
    popularity: 586,
    examples: {
      present: { es: "El profesor enseña", ru: "Учитель преподаёт" },
      past: { es: "El profesor enseñaba", ru: "Учитель преподавал" },
      future: { es: "El profesor enseñará", ru: "Учитель будет преподавать" }
    }
  },
  {
    id: 587,
    word: "estudiante",
    translation: "студент",
    category: "work",
    type: "существительное",
    popularity: 587,
    examples: {
      present: { es: "El estudiante estudia", ru: "Студент учится" },
      past: { es: "El estudiante estudiaba", ru: "Студент учился" },
      future: { es: "El estudiante estudiará", ru: "Студент будет учиться" }
    }
  },
  {
    id: 588,
    word: "alumno",
    translation: "ученик",
    category: "work",
    type: "существительное",
    popularity: 588,
    examples: {
      present: { es: "El alumno aprende", ru: "Ученик учится" },
      past: { es: "El alumno aprendía", ru: "Ученик учился" },
      future: { es: "El alumno aprenderá", ru: "Ученик будет учиться" }
    }
  },
  {
    id: 589,
    word: "clase",
    translation: "класс, урок",
    category: "work",
    type: "существительное",
    popularity: 589,
    examples: {
      present: { es: "La clase es interesante", ru: "Урок интересный" },
      past: { es: "La clase era aburrida", ru: "Урок был скучным" },
      future: { es: "La clase será difícil", ru: "Урок будет трудным" }
    }
  },
  {
    id: 590,
    word: "lección",
    translation: "урок",
    category: "work",
    type: "существительное",
    popularity: 590,
    examples: {
      present: { es: "La lección es importante", ru: "Урок важный" },
      past: { es: "La lección era fácil", ru: "Урок был лёгким" },
      future: { es: "La lección será útil", ru: "Урок будет полезным" }
    }
  },
  {
    id: 591,
    word: "examen",
    translation: "экзамен",
    category: "work",
    type: "существительное",
    popularity: 591,
    examples: {
      present: { es: "El examen es difícil", ru: "Экзамен трудный" },
      past: { es: "El examen era fácil", ru: "Экзамен был лёгким" },
      future: { es: "El examen será mañana", ru: "Экзамен будет завтра" }
    }
  },
  {
    id: 592,
    word: "nota",
    translation: "оценка",
    category: "work",
    type: "существительное",
    popularity: 592,
    examples: {
      present: { es: "La nota es alta", ru: "Оценка высокая" },
      past: { es: "La nota era baja", ru: "Оценка была низкой" },
      future: { es: "La nota será buena", ru: "Оценка будет хорошей" }
    }
  },
  {
    id: 593,
    word: "tarea",
    translation: "задание",
    category: "work",
    type: "существительное",
    popularity: 593,
    examples: {
      present: { es: "Hago la tarea", ru: "Я делаю задание" },
      past: { es: "Hice la tarea", ru: "Я сделал задание" },
      future: { es: "Haré la tarea", ru: "Я сделаю задание" }
    }
  },
  {
    id: 594,
    word: "ejercicio",
    translation: "упражнение",
    category: "work",
    type: "существительное",
    popularity: 594,
    examples: {
      present: { es: "Hago ejercicio", ru: "Я делаю упражнение" },
      past: { es: "Hice ejercicio", ru: "Я сделал упражнение" },
      future: { es: "Haré ejercicio", ru: "Я сделаю упражнение" }
    }
  },
  {
    id: 595,
    word: "deporte",
    translation: "спорт",
    category: "emotions",
    type: "существительное",
    popularity: 595,
    examples: {
      present: { es: "Practico deporte", ru: "Я занимаюсь спортом" },
      past: { es: "Practicaba deporte", ru: "Я занимался спортом" },
      future: { es: "Practicaré deporte", ru: "Я буду заниматься спортом" }
    }
  },
  {
    id: 596,
    word: "equipo",
    translation: "команда",
    category: "emotions",
    type: "существительное",
    popularity: 596,
    examples: {
      present: { es: "El equipo gana", ru: "Команда выигрывает" },
      past: { es: "El equipo ganaba", ru: "Команда выигрывала" },
      future: { es: "El equipo ganará", ru: "Команда выиграет" }
    }
  },
  {
    id: 597,
    word: "partido",
    translation: "матч",
    category: "emotions",
    type: "существительное",
    popularity: 597,
    examples: {
      present: { es: "El partido es emocionante", ru: "Матч захватывающий" },
      past: { es: "El partido era aburrido", ru: "Матч был скучным" },
      future: { es: "El partido será importante", ru: "Матч будет важным" }
    }
  },
  {
    id: 598,
    word: "jugador",
    translation: "игрок",
    category: "emotions",
    type: "существительное",
    popularity: 598,
    examples: {
      present: { es: "El jugador es bueno", ru: "Игрок хороший" },
      past: { es: "El jugador era malo", ru: "Игрок был плохим" },
      future: { es: "El jugador será famoso", ru: "Игрок будет знаменитым" }
    }
  },
  {
    id: 599,
    word: "victoria",
    translation: "победа",
    category: "emotions",
    type: "существительное",
    popularity: 599,
    examples: {
      present: { es: "La victoria es nuestra", ru: "Победа наша" },
      past: { es: "La victoria era importante", ru: "Победа была важной" },
      future: { es: "La victoria será celebrada", ru: "Победа будет отпразднована" }
    }
  },
  {
    id: 600,
    word: "derrota",
    translation: "поражение",
    category: "emotions",
    type: "существительное",
    popularity: 600,
    examples: {
      present: { es: "La derrota es dura", ru: "Поражение тяжёлое" },
      past: { es: "La derrota era dolorosa", ru: "Поражение было болезненным" },
      future: { es: "La derrota será olvidada", ru: "Поражение будет забыто" }
    }
  },
  {
    id: 601,
    word: "yo",
    translation: "я",
    category: "verbs",
    type: "местоимение",
    popularity: 601,
    examples: {
      present: { es: "Yo soy estudiante", ru: "Я студент" },
      past: { es: "Yo era estudiante", ru: "Я был студентом" },
      future: { es: "Yo seré estudiante", ru: "Я буду студентом" }
    }
  },
  {
    id: 602,
    word: "tú",
    translation: "ты",
    category: "verbs",
    type: "местоимение",
    popularity: 602,
    examples: {
      present: { es: "Tú eres mi amigo", ru: "Ты мой друг" },
      past: { es: "Tú eras mi amigo", ru: "Ты был моим другом" },
      future: { es: "Tú serás mi amigo", ru: "Ты будешь моим другом" }
    }
  },
  {
    id: 603,
    word: "él",
    translation: "он",
    category: "verbs",
    type: "местоимение",
    popularity: 603,
    examples: {
      present: { es: "Él es doctor", ru: "Он врач" },
      past: { es: "Él era doctor", ru: "Он был врачом" },
      future: { es: "Él será doctor", ru: "Он будет врачом" }
    }
  },
  {
    id: 604,
    word: "ella",
    translation: "она",
    category: "verbs",
    type: "местоимение",
    popularity: 604,
    examples: {
      present: { es: "Ella es profesora", ru: "Она учительница" },
      past: { es: "Ella era profesora", ru: "Она была учительницей" },
      future: { es: "Ella será profesora", ru: "Она будет учительницей" }
    }
  },
  {
    id: 605,
    word: "nosotros",
    translation: "мы",
    category: "verbs",
    type: "местоимение",
    popularity: 605,
    examples: {
      present: { es: "Nosotros somos amigos", ru: "Мы друзья" },
      past: { es: "Nosotros éramos amigos", ru: "Мы были друзьями" },
      future: { es: "Nosotros seremos amigos", ru: "Мы будем друзьями" }
    }
  },
  {
    id: 606,
    word: "vosotros",
    translation: "вы (мн.ч.)",
    category: "verbs",
    type: "местоимение",
    popularity: 606,
    examples: {
      present: { es: "Vosotros sois españoles", ru: "Вы испанцы" },
      past: { es: "Vosotros erais españoles", ru: "Вы были испанцами" },
      future: { es: "Vosotros seréis españoles", ru: "Вы будете испанцами" }
    }
  },
  {
    id: 607,
    word: "ellos",
    translation: "они",
    category: "verbs",
    type: "местоимение",
    popularity: 607,
    examples: {
      present: { es: "Ellos son estudiantes", ru: "Они студенты" },
      past: { es: "Ellos eran estudiantes", ru: "Они были студентами" },
      future: { es: "Ellos serán estudiantes", ru: "Они будут студентами" }
    }
  },
  {
    id: 608,
    word: "ser",
    translation: "быть (постоянное)",
    category: "verbs",
    type: "глагол",
    popularity: 608,
    examples: {
      present: {
        yo: { es: "Yo soy feliz", ru: "Я счастлив" },
        tú: { es: "Tú eres feliz", ru: "Ты счастлив" },
        él: { es: "Él es feliz", ru: "Он счастлив" },
        nosotros: { es: "Nosotros somos felices", ru: "Мы счастливы" },
        vosotros: { es: "Vosotros sois felices", ru: "Вы счастливы" },
        ellos: { es: "Ellos son felices", ru: "Они счастливы" }
      },
      past: {
        yo: { es: "Yo era feliz", ru: "Я был счастлив" },
        tú: { es: "Tú eras feliz", ru: "Ты был счастлив" },
        él: { es: "Él era feliz", ru: "Он был счастлив" },
        nosotros: { es: "Nosotros éramos felices", ru: "Мы были счастливы" },
        vosotros: { es: "Vosotros erais felices", ru: "Вы были счастливы" },
        ellos: { es: "Ellos eran felices", ru: "Они были счастливы" }
      },
      future: {
        yo: { es: "Yo seré feliz", ru: "Я буду счастлив" },
        tú: { es: "Tú serás feliz", ru: "Ты будешь счастлив" },
        él: { es: "Él será feliz", ru: "Он будет счастлив" },
        nosotros: { es: "Nosotros seremos felices", ru: "Мы будем счастливы" },
        vosotros: { es: "Vosotros seréis felices", ru: "Вы будете счастливы" },
        ellos: { es: "Ellos serán felices", ru: "Они будут счастливы" }
      }
    }
  },
  {
    id: 609,
    word: "estar",
    translation: "быть (временное)",
    category: "verbs",
    type: "глагол",
    popularity: 609,
    examples: {
      present: {
        yo: { es: "Yo estoy cansado", ru: "Я устал" },
        tú: { es: "Tú estás cansado", ru: "Ты устал" },
        él: { es: "Él está cansado", ru: "Он устал" },
        nosotros: { es: "Nosotros estamos cansados", ru: "Мы устали" },
        vosotros: { es: "Vosotros estáis cansados", ru: "Вы устали" },
        ellos: { es: "Ellos están cansados", ru: "Они устали" }
      },
      past: {
        yo: { es: "Yo estaba cansado", ru: "Я был уставшим" },
        tú: { es: "Tú estabas cansado", ru: "Ты был уставшим" },
        él: { es: "Él estaba cansado", ru: "Он был уставшим" },
        nosotros: { es: "Nosotros estábamos cansados", ru: "Мы были уставшими" },
        vosotros: { es: "Vosotros estabais cansados", ru: "Вы были уставшими" },
        ellos: { es: "Ellos estaban cansados", ru: "Они были уставшими" }
      },
      future: {
        yo: { es: "Yo estaré cansado", ru: "Я буду уставшим" },
        tú: { es: "Tú estarás cansado", ru: "Ты будешь уставшим" },
        él: { es: "Él estará cansado", ru: "Он будет уставшим" },
        nosotros: { es: "Nosotros estaremos cansados", ru: "Мы будем уставшими" },
        vosotros: { es: "Vosotros estaréis cansados", ru: "Вы будете уставшими" },
        ellos: { es: "Ellos estarán cansados", ru: "Они будут уставшими" }
      }
    }
  },
  {
    id: 610,
    word: "hacer",
    translation: "делать",
    category: "verbs",
    type: "глагол",
    popularity: 610,
    examples: {
      present: {
        yo: { es: "Yo hago mi trabajo", ru: "Я делаю свою работу" },
        tú: { es: "Tú haces mi trabajo", ru: "Ты делаешь свою работу" },
        él: { es: "Él hace mi trabajo", ru: "Он делает свою работу" },
        nosotros: { es: "Nosotros hacemos mi trabajo", ru: "Мы делаем свою работу" },
        vosotros: { es: "Vosotros hacéis mi trabajo", ru: "Вы делаете свою работу" },
        ellos: { es: "Ellos hacen mi trabajo", ru: "Они делают свою работу" }
      },
      past: {
        yo: { es: "Yo hice mi trabajo", ru: "Я сделал свою работу" },
        tú: { es: "Tú hiciste mi trabajo", ru: "Ты сделал свою работу" },
        él: { es: "Él hizo mi trabajo", ru: "Он сделал свою работу" },
        nosotros: { es: "Nosotros hicimos mi trabajo", ru: "Мы сделали свою работу" },
        vosotros: { es: "Vosotros hicisteis mi trabajo", ru: "Вы сделали свою работу" },
        ellos: { es: "Ellos hicieron mi trabajo", ru: "Они сделали свою работу" }
      },
      future: {
        yo: { es: "Yo haré mi trabajo", ru: "Я сделаю свою работу" },
        tú: { es: "Tú harás mi trabajo", ru: "Ты сделаешь свою работу" },
        él: { es: "Él hará mi trabajo", ru: "Он сделает свою работу" },
        nosotros: { es: "Nosotros haremos mi trabajo", ru: "Мы сделаем свою работу" },
        vosotros: { es: "Vosotros haréis mi trabajo", ru: "Вы сделаете свою работу" },
        ellos: { es: "Ellos harán mi trabajo", ru: "Они сделают свою работу" }
      }
    }
  },
  {
    id: 611,
    word: "decir",
    translation: "говорить, сказать",
    category: "verbs",
    type: "глагол",
    popularity: 611,
    examples: {
      present: {
        yo: { es: "Yo digo la verdad", ru: "Я говорю правду" },
        tú: { es: "Tú dices la verdad", ru: "Ты говоришь правду" },
        él: { es: "Él dice la verdad", ru: "Он говорит правду" },
        nosotros: { es: "Nosotros decimos la verdad", ru: "Мы говорим правду" },
        vosotros: { es: "Vosotros decís la verdad", ru: "Вы говорите правду" },
        ellos: { es: "Ellos dicen la verdad", ru: "Они говорят правду" }
      },
      past: {
        yo: { es: "Yo dije la verdad", ru: "Я сказал правду" },
        tú: { es: "Tú dijiste la verdad", ru: "Ты сказал правду" },
        él: { es: "Él dijo la verdad", ru: "Он сказал правду" },
        nosotros: { es: "Nosotros dijimos la verdad", ru: "Мы сказали правду" },
        vosotros: { es: "Vosotros dijisteis la verdad", ru: "Вы сказали правду" },
        ellos: { es: "Ellos dijeron la verdad", ru: "Они сказали правду" }
      },
      future: {
        yo: { es: "Yo diré la verdad", ru: "Я скажу правду" },
        tú: { es: "Tú dirás la verdad", ru: "Ты скажешь правду" },
        él: { es: "Él dirá la verdad", ru: "Он скажет правду" },
        nosotros: { es: "Nosotros diremos la verdad", ru: "Мы скажем правду" },
        vosotros: { es: "Vosotros diréis la verdad", ru: "Вы скажете правду" },
        ellos: { es: "Ellos dirán la verdad", ru: "Они скажут правду" }
      }
    }
  },
  {
    id: 612,
    word: "poder",
    translation: "мочь",
    category: "verbs",
    type: "глагол",
    popularity: 612,
    examples: {
      present: {
        yo: { es: "Yo puedo ayudarte", ru: "Я могу помочь тебе" },
        tú: { es: "Tú puedes ayudarme", ru: "Ты можешь помочь мне" },
        él: { es: "Él puede ayudarte", ru: "Он может помочь тебе" },
        nosotros: { es: "Nosotros podemos ayudarte", ru: "Мы можем помочь тебе" },
        vosotros: { es: "Vosotros podéis ayudarte", ru: "Вы можете помочь тебе" },
        ellos: { es: "Ellos pueden ayudarte", ru: "Они могут помочь тебе" }
      },
      past: {
        yo: { es: "Yo pude ayudarte", ru: "Я мог помочь тебе" },
        tú: { es: "Tú pudiste ayudarme", ru: "Ты мог помочь мне" },
        él: { es: "Él pudo ayudarte", ru: "Он мог помочь тебе" },
        nosotros: { es: "Nosotros pudimos ayudarte", ru: "Мы могли помочь тебе" },
        vosotros: { es: "Vosotros pudisteis ayudarte", ru: "Вы могли помочь тебе" },
        ellos: { es: "Ellos pudieron ayudarte", ru: "Они могли помочь тебе" }
      },
      future: {
        yo: { es: "Yo podré ayudarte", ru: "Я смогу помочь тебе" },
        tú: { es: "Tú podrás ayudarme", ru: "Ты сможешь помочь мне" },
        él: { es: "Él podrá ayudarte", ru: "Он сможет помочь тебе" },
        nosotros: { es: "Nosotros podremos ayudarte", ru: "Мы сможем помочь тебе" },
        vosotros: { es: "Vosotros podréis ayudarte", ru: "Вы сможете помочь тебе" },
        ellos: { es: "Ellos podrán ayudarte", ru: "Они смогут помочь тебе" }
      }
    }
  },
  {
    id: 613,
    word: "dar",
    translation: "давать",
    category: "verbs",
    type: "глагол",
    popularity: 613,
    examples: {
      present: {
        yo: { es: "Yo doy un regalo", ru: "Я даю подарок" },
        tú: { es: "Tú das un regalo", ru: "Ты даёшь подарок" },
        él: { es: "Él da un regalo", ru: "Он даёт подарок" },
        nosotros: { es: "Nosotros damos un regalo", ru: "Мы даём подарок" },
        vosotros: { es: "Vosotros dais un regalo", ru: "Вы даёте подарок" },
        ellos: { es: "Ellos dan un regalo", ru: "Они дают подарок" }
      },
      past: {
        yo: { es: "Yo di un regalo", ru: "Я дал подарок" },
        tú: { es: "Tú diste un regalo", ru: "Ты дал подарок" },
        él: { es: "Él dio un regalo", ru: "Он дал подарок" },
        nosotros: { es: "Nosotros dimos un regalo", ru: "Мы дали подарок" },
        vosotros: { es: "Vosotros disteis un regalo", ru: "Вы дали подарок" },
        ellos: { es: "Ellos dieron un regalo", ru: "Они дали подарок" }
      },
      future: {
        yo: { es: "Yo daré un regalo", ru: "Я дам подарок" },
        tú: { es: "Tú darás un regalo", ru: "Ты дашь подарок" },
        él: { es: "Él dará un regalo", ru: "Он даст подарок" },
        nosotros: { es: "Nosotros daremos un regalo", ru: "Мы дадим подарок" },
        vosotros: { es: "Vosotros daréis un regalo", ru: "Вы дадите подарок" },
        ellos: { es: "Ellos darán un regalo", ru: "Они дадут подарок" }
      }
    }
  },
  {
    id: 614,
    word: "saber",
    translation: "знать",
    category: "verbs",
    type: "глагол",
    popularity: 614,
    examples: {
      present: {
        yo: { es: "Yo sé la respuesta", ru: "Я знаю ответ" },
        tú: { es: "Tú sabes la respuesta", ru: "Ты знаешь ответ" },
        él: { es: "Él sabe la respuesta", ru: "Он знает ответ" },
        nosotros: { es: "Nosotros sabemos la respuesta", ru: "Мы знаем ответ" },
        vosotros: { es: "Vosotros sabéis la respuesta", ru: "Вы знаете ответ" },
        ellos: { es: "Ellos saben la respuesta", ru: "Они знают ответ" }
      },
      past: {
        yo: { es: "Yo sabía la respuesta", ru: "Я знал ответ" },
        tú: { es: "Tú sabías la respuesta", ru: "Ты знал ответ" },
        él: { es: "Él sabía la respuesta", ru: "Он знал ответ" },
        nosotros: { es: "Nosotros sabíamos la respuesta", ru: "Мы знали ответ" },
        vosotros: { es: "Vosotros sabíais la respuesta", ru: "Вы знали ответ" },
        ellos: { es: "Ellos sabían la respuesta", ru: "Они знали ответ" }
      },
      future: {
        yo: { es: "Yo sabré la respuesta", ru: "Я буду знать ответ" },
        tú: { es: "Tú sabrás la respuesta", ru: "Ты будешь знать ответ" },
        él: { es: "Él sabrá la respuesta", ru: "Он будет знать ответ" },
        nosotros: { es: "Nosotros sabremos la respuesta", ru: "Мы будем знать ответ" },
        vosotros: { es: "Vosotros sabréis la respuesta", ru: "Вы будете знать ответ" },
        ellos: { es: "Ellos sabrán la respuesta", ru: "Они будут знать ответ" }
      }
    }
  },
  {
    id: 615,
    word: "deber",
    translation: "быть должным",
    category: "verbs",
    type: "глагол",
    popularity: 615,
    examples: {
      present: {
        yo: { es: "Yo debo estudiar", ru: "Я должен учиться" },
        tú: { es: "Tú debes estudiar", ru: "Ты должен учиться" },
        él: { es: "Él debe estudiar", ru: "Он должен учиться" },
        nosotros: { es: "Nosotros debemos estudiar", ru: "Мы должны учиться" },
        vosotros: { es: "Vosotros debéis estudiar", ru: "Вы должны учиться" },
        ellos: { es: "Ellos deben estudiar", ru: "Они должны учиться" }
      },
      past: {
        yo: { es: "Yo debía estudiar", ru: "Я должен был учиться" },
        tú: { es: "Tú debías estudiar", ru: "Ты должен был учиться" },
        él: { es: "Él debía estudiar", ru: "Он должен был учиться" },
        nosotros: { es: "Nosotros debíamos estudiar", ru: "Мы должны были учиться" },
        vosotros: { es: "Vosotros debíais estudiar", ru: "Вы должны были учиться" },
        ellos: { es: "Ellos debían estudiar", ru: "Они должны были учиться" }
      },
      future: {
        yo: { es: "Yo deberé estudiar", ru: "Я должен буду учиться" },
        tú: { es: "Tú deberás estudiar", ru: "Ты должен будешь учиться" },
        él: { es: "Él deberá estudiar", ru: "Он должен будет учиться" },
        nosotros: { es: "Nosotros deberemos estudiar", ru: "Мы должны будем учиться" },
        vosotros: { es: "Vosotros deberéis estudiar", ru: "Вы должны будете учиться" },
        ellos: { es: "Ellos deberán estudiar", ru: "Они должны будут учиться" }
      }
    }
  },
  {
    id: 616,
    word: "creer",
    translation: "верить",
    category: "verbs",
    type: "глагол",
    popularity: 616,
    examples: {
      present: {
        yo: { es: "Yo creo en ti", ru: "Я верю в тебя" },
        tú: { es: "Tú crees en mí", ru: "Ты веришь в меня" },
        él: { es: "Él cree en ti", ru: "Он верит в тебя" },
        nosotros: { es: "Nosotros creemos en ti", ru: "Мы верим в тебя" },
        vosotros: { es: "Vosotros creéis en ti", ru: "Вы верите в тебя" },
        ellos: { es: "Ellos creen en ti", ru: "Они верят в тебя" }
      },
      past: {
        yo: { es: "Yo creía en ti", ru: "Я верил в тебя" },
        tú: { es: "Tú creías en mí", ru: "Ты верил в меня" },
        él: { es: "Él creía en ti", ru: "Он верил в тебя" },
        nosotros: { es: "Nosotros creíamos en ti", ru: "Мы верили в тебя" },
        vosotros: { es: "Vosotros creíais en ti", ru: "Вы верили в тебя" },
        ellos: { es: "Ellos creían en ti", ru: "Они верили в тебя" }
      },
      future: {
        yo: { es: "Yo creeré en ti", ru: "Я буду верить в тебя" },
        tú: { es: "Tú creerás en mí", ru: "Ты будешь верить в меня" },
        él: { es: "Él creerá en ti", ru: "Он будет верить в тебя" },
        nosotros: { es: "Nosotros creeremos en ti", ru: "Мы будем верить в тебя" },
        vosotros: { es: "Vosotros creeréis en ti", ru: "Вы будете верить в тебя" },
        ellos: { es: "Ellos creerán en ti", ru: "Они будут верить в тебя" }
      }
    }
  },
  {
    id: 617,
    word: "venir",
    translation: "приходить",
    category: "verbs",
    type: "глагол",
    popularity: 617,
    examples: {
      present: {
        yo: { es: "Yo vengo a verte", ru: "Я прихожу к тебе" },
        tú: { es: "Tú vienes a verme", ru: "Ты приходишь ко мне" },
        él: { es: "Él viene a verte", ru: "Он приходит к тебе" },
        nosotros: { es: "Nosotros venimos a verte", ru: "Мы приходим к тебе" },
        vosotros: { es: "Vosotros venís a verte", ru: "Вы приходите к тебе" },
        ellos: { es: "Ellos vienen a verte", ru: "Они приходят к тебе" }
      },
      past: {
        yo: { es: "Yo vine a verte", ru: "Я пришёл к тебе" },
        tú: { es: "Tú viniste a verme", ru: "Ты пришёл ко мне" },
        él: { es: "Él vino a verte", ru: "Он пришёл к тебе" },
        nosotros: { es: "Nosotros vinimos a verte", ru: "Мы пришли к тебе" },
        vosotros: { es: "Vosotros vinisteis a verte", ru: "Вы пришли к тебе" },
        ellos: { es: "Ellos vinieron a verte", ru: "Они пришли к тебе" }
      },
      future: {
        yo: { es: "Yo vendré a verte", ru: "Я приду к тебе" },
        tú: { es: "Tú vendrás a verme", ru: "Ты придёшь ко мне" },
        él: { es: "Él vendrá a verte", ru: "Он придёт к тебе" },
        nosotros: { es: "Nosotros vendremos a verte", ru: "Мы придём к тебе" },
        vosotros: { es: "Vosotros vendréis a verte", ru: "Вы придёте к тебе" },
        ellos: { es: "Ellos vendrán a verte", ru: "Они придут к тебе" }
      }
    }
  },
  {
    id: 618,
    word: "pensar",
    translation: "думать",
    category: "verbs",
    type: "глагол",
    popularity: 618,
    examples: {
      present: {
        yo: { es: "Yo pienso en ti", ru: "Я думаю о тебе" },
        tú: { es: "Tú piensas en mí", ru: "Ты думаешь обо мне" },
        él: { es: "Él piensa en ti", ru: "Он думает о тебе" },
        nosotros: { es: "Nosotros pensamos en ti", ru: "Мы думаем о тебе" },
        vosotros: { es: "Vosotros pensáis en ti", ru: "Вы думаете о тебе" },
        ellos: { es: "Ellos piensan en ti", ru: "Они думают о тебе" }
      },
      past: {
        yo: { es: "Yo pensaba en ti", ru: "Я думал о тебе" },
        tú: { es: "Tú pensabas en mí", ru: "Ты думал обо мне" },
        él: { es: "Él pensaba en ti", ru: "Он думал о тебе" },
        nosotros: { es: "Nosotros pensábamos en ti", ru: "Мы думали о тебе" },
        vosotros: { es: "Vosotros pensabais en ti", ru: "Вы думали о тебе" },
        ellos: { es: "Ellos pensaban en ti", ru: "Они думали о тебе" }
      },
      future: {
        yo: { es: "Yo pensaré en ti", ru: "Я буду думать о тебе" },
        tú: { es: "Tú pensarás en mí", ru: "Ты будешь думать обо мне" },
        él: { es: "Él pensará en ti", ru: "Он будет думать о тебе" },
        nosotros: { es: "Nosotros pensaremos en ti", ru: "Мы будем думать о тебе" },
        vosotros: { es: "Vosotros pensaréis en ti", ru: "Вы будете думать о тебе" },
        ellos: { es: "Ellos pensarán en ti", ru: "Они будут думать о тебе" }
      }
    }
  },
  {
    id: 619,
    word: "volver",
    translation: "возвращаться",
    category: "verbs",
    type: "глагол",
    popularity: 619,
    examples: {
      present: {
        yo: { es: "Yo vuelvo a casa", ru: "Я возвращаюсь домой" },
        tú: { es: "Tú vuelves a casa", ru: "Ты возвращаешься домой" },
        él: { es: "Él vuelve a casa", ru: "Он возвращается домой" },
        nosotros: { es: "Nosotros volvemos a casa", ru: "Мы возвращаемся домой" },
        vosotros: { es: "Vosotros volvéis a casa", ru: "Вы возвращаетесь домой" },
        ellos: { es: "Ellos vuelven a casa", ru: "Они возвращаются домой" }
      },
      past: {
        yo: { es: "Yo volví a casa", ru: "Я вернулся домой" },
        tú: { es: "Tú volviste a casa", ru: "Ты вернулся домой" },
        él: { es: "Él volvió a casa", ru: "Он вернулся домой" },
        nosotros: { es: "Nosotros volvimos a casa", ru: "Мы вернулись домой" },
        vosotros: { es: "Vosotros volvisteis a casa", ru: "Вы вернулись домой" },
        ellos: { es: "Ellos volvieron a casa", ru: "Они вернулись домой" }
      },
      future: {
        yo: { es: "Yo volveré a casa", ru: "Я вернусь домой" },
        tú: { es: "Tú volverás a casa", ru: "Ты вернёшься домой" },
        él: { es: "Él volverá a casa", ru: "Он вернётся домой" },
        nosotros: { es: "Nosotros volveremos a casa", ru: "Мы вернёмся домой" },
        vosotros: { es: "Vosotros volveréis a casa", ru: "Вы вернётесь домой" },
        ellos: { es: "Ellos volverán a casa", ru: "Они вернутся домой" }
      }
    }
  },
  {
    id: 620,
    word: "tomar",
    translation: "брать, принимать",
    category: "verbs",
    type: "глагол",
    popularity: 620,
    examples: {
      present: {
        yo: { es: "Yo tomo café", ru: "Я пью кофе" },
        tú: { es: "Tú tomas café", ru: "Ты пьёшь кофе" },
        él: { es: "Él toma café", ru: "Он пьёт кофе" },
        nosotros: { es: "Nosotros tomamos café", ru: "Мы пьём кофе" },
        vosotros: { es: "Vosotros tomáis café", ru: "Вы пьёте кофе" },
        ellos: { es: "Ellos toman café", ru: "Они пьют кофе" }
      },
      past: {
        yo: { es: "Yo tomé café", ru: "Я выпил кофе" },
        tú: { es: "Tú tomaste café", ru: "Ты выпил кофе" },
        él: { es: "Él tomó café", ru: "Он выпил кофе" },
        nosotros: { es: "Nosotros tomamos café", ru: "Мы выпили кофе" },
        vosotros: { es: "Vosotros tomasteis café", ru: "Вы выпили кофе" },
        ellos: { es: "Ellos tomaron café", ru: "Они выпили кофе" }
      },
      future: {
        yo: { es: "Yo tomaré café", ru: "Я выпью кофе" },
        tú: { es: "Tú tomarás café", ru: "Ты выпьешь кофе" },
        él: { es: "Él tomará café", ru: "Он выпьет кофе" },
        nosotros: { es: "Nosotros tomaremos café", ru: "Мы выпьем кофе" },
        vosotros: { es: "Vosotros tomaréis café", ru: "Вы выпьете кофе" },
        ellos: { es: "Ellos tomarán café", ru: "Они выпьют кофе" }
      }
    }
  },
  {
    id: 621,
    word: "conocer",
    translation: "знать (быть знакомым)",
    category: "verbs",
    type: "глагол",
    popularity: 621,
    examples: {
      present: {
        yo: { es: "Yo conozco a María", ru: "Я знаю Марию" },
        tú: { es: "Tú conoces a María", ru: "Ты знаешь Марию" },
        él: { es: "Él conoce a María", ru: "Он знает Марию" },
        nosotros: { es: "Nosotros conocemos a María", ru: "Мы знаем Марию" },
        vosotros: { es: "Vosotros conocéis a María", ru: "Вы знаете Марию" },
        ellos: { es: "Ellos conocen a María", ru: "Они знают Марию" }
      },
      past: {
        yo: { es: "Yo conocía a María", ru: "Я знал Марию" },
        tú: { es: "Tú conocías a María", ru: "Ты знал Марию" },
        él: { es: "Él conocía a María", ru: "Он знал Марию" },
        nosotros: { es: "Nosotros conocíamos a María", ru: "Мы знали Марию" },
        vosotros: { es: "Vosotros conocíais a María", ru: "Вы знали Марию" },
        ellos: { es: "Ellos conocían a María", ru: "Они знали Марию" }
      },
      future: {
        yo: { es: "Yo conoceré a María", ru: "Я буду знать Марию" },
        tú: { es: "Tú conocerás a María", ru: "Ты будешь знать Марию" },
        él: { es: "Él conocerá a María", ru: "Он будет знать Марию" },
        nosotros: { es: "Nosotros conoceremos a María", ru: "Мы будем знать Марию" },
        vosotros: { es: "Vosotros conoceréis a María", ru: "Вы будете знать Марию" },
        ellos: { es: "Ellos conocerán a María", ru: "Они будут знать Марию" }
      }
    }
  },
  {
    id: 622,
    word: "tratar",
    translation: "пытаться, обращаться",
    category: "verbs",
    type: "глагол",
    popularity: 622,
    examples: {
      present: {
        yo: { es: "Yo trato de ayudar", ru: "Я пытаюсь помочь" },
        tú: { es: "Tú tratas de ayudar", ru: "Ты пытаешься помочь" },
        él: { es: "Él trata de ayudar", ru: "Он пытается помочь" },
        nosotros: { es: "Nosotros tratamos de ayudar", ru: "Мы пытаемся помочь" },
        vosotros: { es: "Vosotros tratáis de ayudar", ru: "Вы пытаетесь помочь" },
        ellos: { es: "Ellos tratan de ayudar", ru: "Они пытаются помочь" }
      },
      past: {
        yo: { es: "Yo traté de ayudar", ru: "Я пытался помочь" },
        tú: { es: "Tú trataste de ayudar", ru: "Ты пытался помочь" },
        él: { es: "Él trató de ayudar", ru: "Он пытался помочь" },
        nosotros: { es: "Nosotros tratamos de ayudar", ru: "Мы пытались помочь" },
        vosotros: { es: "Vosotros tratasteis de ayudar", ru: "Вы пытались помочь" },
        ellos: { es: "Ellos trataron de ayudar", ru: "Они пытались помочь" }
      },
      future: {
        yo: { es: "Yo trataré de ayudar", ru: "Я попытаюсь помочь" },
        tú: { es: "Tú tratarás de ayudar", ru: "Ты попытаешься помочь" },
        él: { es: "Él tratará de ayudar", ru: "Он попытается помочь" },
        nosotros: { es: "Nosotros trataremos de ayudar", ru: "Мы попытаемся помочь" },
        vosotros: { es: "Vosotros trataréis de ayudar", ru: "Вы попытаетесь помочь" },
        ellos: { es: "Ellos tratarán de ayudar", ru: "Они попытаются помочь" }
      }
    }
  },
  {
    id: 623,
    word: "existir",
    translation: "существовать",
    category: "verbs",
    type: "глагол",
    popularity: 623,
    examples: {
      present: {
        yo: { es: "Yo existo en este mundo", ru: "Я существую в этом мире" },
        tú: { es: "Tú existes en este mundo", ru: "Ты существуешь в этом мире" },
        él: { es: "Él existe en este mundo", ru: "Он существует в этом мире" },
        nosotros: { es: "Nosotros existimos en este mundo", ru: "Мы существуем в этом мире" },
        vosotros: { es: "Vosotros existís en este mundo", ru: "Вы существуйте в этом мире" },
        ellos: { es: "Ellos existen en este mundo", ru: "Они существуют в этом мире" }
      },
      past: {
        yo: { es: "Yo existía en este mundo", ru: "Я существовал в этом мире" },
        tú: { es: "Tú existías en este mundo", ru: "Ты существовал в этом мире" },
        él: { es: "Él existía en este mundo", ru: "Он существовал в этом мире" },
        nosotros: { es: "Nosotros existíamos en este mundo", ru: "Мы существовали в этом мире" },
        vosotros: { es: "Vosotros existíais en este mundo", ru: "Вы существовали в этом мире" },
        ellos: { es: "Ellos existían en este mundo", ru: "Они существовали в этом мире" }
      },
      future: {
        yo: { es: "Yo existiré en este mundo", ru: "Я буду существовать в этом мире" },
        tú: { es: "Tú existirás en este mundo", ru: "Ты будешь существовать в этом мире" },
        él: { es: "Él existirá en este mundo", ru: "Он будет существовать в этом мире" },
        nosotros: { es: "Nosotros existiremos en este mundo", ru: "Мы будем существовать в этом мире" },
        vosotros: { es: "Vosotros existiréis en este mundo", ru: "Вы будете существовать в этом мире" },
        ellos: { es: "Ellos existirán en este mundo", ru: "Они будут существовать в этом мире" }
      }
    }
  },
  {
    id: 624,
    word: "producir",
    translation: "производить",
    category: "verbs",
    type: "глагол",
    popularity: 624,
    examples: {
      present: {
        yo: { es: "Yo produzco energía", ru: "Я произвожу энергию" },
        tú: { es: "Tú produces energía", ru: "Ты производишь энергию" },
        él: { es: "Él produce energía", ru: "Он производит энергию" },
        nosotros: { es: "Nosotros producimos energía", ru: "Мы производим энергию" },
        vosotros: { es: "Vosotros producís energía", ru: "Вы производите энергию" },
        ellos: { es: "Ellos producen energía", ru: "Они производят энергию" }
      },
      past: {
        yo: { es: "Yo produje energía", ru: "Я произвёл энергию" },
        tú: { es: "Tú produjiste energía", ru: "Ты произвёл энергию" },
        él: { es: "Él produjo energía", ru: "Он произвёл энергию" },
        nosotros: { es: "Nosotros produjimos energía", ru: "Мы произвели энергию" },
        vosotros: { es: "Vosotros produjisteis energía", ru: "Вы произвели энергию" },
        ellos: { es: "Ellos produjeron energía", ru: "Они произвели энергию" }
      },
      future: {
        yo: { es: "Yo produciré energía", ru: "Я произведу энергию" },
        tú: { es: "Tú producirás energía", ru: "Ты произведёшь энергию" },
        él: { es: "Él producirá energía", ru: "Он произведёт энергию" },
        nosotros: { es: "Nosotros producirémos energía", ru: "Мы произведём энергию" },
        vosotros: { es: "Vosotros produciréis energía", ru: "Вы произведёте энергию" },
        ellos: { es: "Ellos producirán energía", ru: "Они произведут энергию" }
      }
    }
  },
  {
    id: 625,
    word: "ocurrir",
    translation: "происходить",
    category: "verbs",
    type: "глагол",
    popularity: 625,
    examples: {
      present: {
        yo: { es: "Yo ocurre un milagro", ru: "Я происходит чудо" },
        tú: { es: "Tú ocurre un milagro", ru: "Ты происходит чудо" },
        él: { es: "Él ocurre un milagro", ru: "Он происходит чудо" },
        nosotros: { es: "Nosotros ocurre un milagro", ru: "Мы происходит чудо" },
        vosotros: { es: "Vosotros ocurre un milagro", ru: "Вы происходит чудо" },
        ellos: { es: "Ellos ocurre un milagro", ru: "Они происходит чудо" }
      },
      past: {
        yo: { es: "Yo ocurrió un milagro", ru: "Я произошло чудо" },
        tú: { es: "Tú ocurriste un milagro", ru: "Ты произошло чудо" },
        él: { es: "Él ocurrió un milagro", ru: "Он произошло чудо" },
        nosotros: { es: "Nosotros ocurrimos un milagro", ru: "Мы произошло чудо" },
        vosotros: { es: "Vosotros ocurristeis un milagro", ru: "Вы произошло чудо" },
        ellos: { es: "Ellos ocurrieron un milagro", ru: "Они произошло чудо" }
      },
      future: {
        yo: { es: "Yo ocurriré un milagro", ru: "Я произойдёт чудо" },
        tú: { es: "Tú ocurrirás un milagro", ru: "Ты произойдёт чудо" },
        él: { es: "Él ocurrirá un milagro", ru: "Он произойдёт чудо" },
        nosotros: { es: "Nosotros ocurrirémos un milagro", ru: "Мы произойдёт чудо" },
        vosotros: { es: "Vosotros ocurriréis un milagro", ru: "Вы произойдёт чудо" },
        ellos: { es: "Ellos ocurrirán un milagro", ru: "Они произойдёт чудо" }
      }
    }
  },
  {
    id: 626,
    word: "pedir",
    translation: "просить",
    category: "verbs",
    type: "глагол",
    popularity: 626,
    examples: {
      present: {
        yo: { es: "Yo pido ayuda", ru: "Я прошу помощи" },
        tú: { es: "Tú pides ayuda", ru: "Ты просишь помощи" },
        él: { es: "Él pide ayuda", ru: "Он просит помощи" },
        nosotros: { es: "Nosotros pedimos ayuda", ru: "Мы просим помощи" },
        vosotros: { es: "Vosotros pedís ayuda", ru: "Вы просите помощи" },
        ellos: { es: "Ellos piden ayuda", ru: "Они просят помощи" }
      },
      past: {
        yo: { es: "Yo pedí ayuda", ru: "Я попросил помощи" },
        tú: { es: "Tú pediste ayuda", ru: "Ты попросил помощи" },
        él: { es: "Él pidió ayuda", ru: "Он попросил помощи" },
        nosotros: { es: "Nosotros pedimos ayuda", ru: "Мы попросили помощи" },
        vosotros: { es: "Vosotros pedisteis ayuda", ru: "Вы попросили помощи" },
        ellos: { es: "Ellos pidieron ayuda", ru: "Они попросили помощи" }
      },
      future: {
        yo: { es: "Yo pediré ayuda", ru: "Я попрошу помощи" },
        tú: { es: "Tú pedirás ayuda", ru: "Ты попросишь помощи" },
        él: { es: "Él pedirá ayuda", ru: "Он попросит помощи" },
        nosotros: { es: "Nosotros pediremos ayuda", ru: "Мы попросим помощи" },
        vosotros: { es: "Vosotros pediréis ayuda", ru: "Вы попросите помощи" },
        ellos: { es: "Ellos pedirán ayuda", ru: "Они попросят помощи" }
      }
    }
  },
  {
    id: 627,
    word: "permitir",
    translation: "позволять",
    category: "verbs",
    type: "глагол",
    popularity: 627,
    examples: {
      present: {
        yo: { es: "Yo permito el acceso", ru: "Я разрешаю доступ" },
        tú: { es: "Tú permites el acceso", ru: "Ты разрешаешь доступ" },
        él: { es: "Él permite el acceso", ru: "Он разрешает доступ" },
        nosotros: { es: "Nosotros permitimos el acceso", ru: "Мы разрешаем доступ" },
        vosotros: { es: "Vosotros permitís el acceso", ru: "Вы разрешаете доступ" },
        ellos: { es: "Ellos permiten el acceso", ru: "Они разрешают доступ" }
      },
      past: {
        yo: { es: "Yo permití el acceso", ru: "Я разрешил доступ" },
        tú: { es: "Tú permitiste el acceso", ru: "Ты разрешил доступ" },
        él: { es: "Él permitió el acceso", ru: "Он разрешил доступ" },
        nosotros: { es: "Nosotros permitimos el acceso", ru: "Мы разрешили доступ" },
        vosotros: { es: "Vosotros permitisteis el acceso", ru: "Вы разрешили доступ" },
        ellos: { es: "Ellos permitieron el acceso", ru: "Они разрешили доступ" }
      },
      future: {
        yo: { es: "Yo permitiré el acceso", ru: "Я разрешу доступ" },
        tú: { es: "Tú permitirás el acceso", ru: "Ты разрешишь доступ" },
        él: { es: "Él permitirá el acceso", ru: "Он разрешит доступ" },
        nosotros: { es: "Nosotros permitiremos el acceso", ru: "Мы разрешим доступ" },
        vosotros: { es: "Vosotros permitiréis el acceso", ru: "Вы разрешите доступ" },
        ellos: { es: "Ellos permitirán el acceso", ru: "Они разрешат доступ" }
      }
    }
  },
  {
    id: 628,
    word: "aparecer",
    translation: "появляться",
    category: "verbs",
    type: "глагол",
    popularity: 628,
    examples: {
      present: {
        yo: { es: "Yo aparezco en la foto", ru: "Я появляюсь на фото" },
        tú: { es: "Tú apareces en la foto", ru: "Ты появляешься на фото" },
        él: { es: "Él aparece en la foto", ru: "Он появляется на фото" },
        nosotros: { es: "Nosotros aparecemos en la foto", ru: "Мы появляемся на фото" },
        vosotros: { es: "Vosotros aparecéis en la foto", ru: "Вы появляетесь на фото" },
        ellos: { es: "Ellos aparecen en la foto", ru: "Они появляются на фото" }
      },
      past: {
        yo: { es: "Yo aparecí en la foto", ru: "Я появился на фото" },
        tú: { es: "Tú apareciste en la foto", ru: "Ты появился на фото" },
        él: { es: "Él apareció en la foto", ru: "Он появился на фото" },
        nosotros: { es: "Nosotros aparecimos en la foto", ru: "Мы появились на фото" },
        vosotros: { es: "Vosotros aparecisteis en la foto", ru: "Вы появились на фото" },
        ellos: { es: "Ellos aparecieron en la foto", ru: "Они появились на фото" }
      },
      future: {
        yo: { es: "Yo apareceré en la foto", ru: "Я появлюсь на фото" },
        tú: { es: "Tú aparecerás en la foto", ru: "Ты появишься на фото" },
        él: { es: "Él aparecerá en la foto", ru: "Он появится на фото" },
        nosotros: { es: "Nosotros apareceremos en la foto", ru: "Мы появимся на фото" },
        vosotros: { es: "Vosotros apareceréis en la foto", ru: "Вы появитесь на фото" },
        ellos: { es: "Ellos aparecerán en la foto", ru: "Они появятся на фото" }
      }
    }
  },
  {
    id: 629,
    word: "conseguir",
    translation: "получать, достигать",
    category: "verbs",
    type: "глагол",
    popularity: 629,
    examples: {
      present: {
        yo: { es: "Yo consigo el objetivo", ru: "Я достигаю цели" },
        tú: { es: "Tú consigues el objetivo", ru: "Ты достигаешь цели" },
        él: { es: "Él consigue el objetivo", ru: "Он достигает цели" },
        nosotros: { es: "Nosotros conseguimos el objetivo", ru: "Мы достигаем цели" },
        vosotros: { es: "Vosotros conseguís el objetivo", ru: "Вы достигаете цели" },
        ellos: { es: "Ellos consiguen el objetivo", ru: "Они достигают цели" }
      },
      past: {
        yo: { es: "Yo conseguí el objetivo", ru: "Я достиг цели" },
        tú: { es: "Tú conseguiste el objetivo", ru: "Ты достиг цели" },
        él: { es: "Él consiguió el objetivo", ru: "Он достиг цели" },
        nosotros: { es: "Nosotros conseguimos el objetivo", ru: "Мы достигли цели" },
        vosotros: { es: "Vosotros conseguisteis el objetivo", ru: "Вы достигли цели" },
        ellos: { es: "Ellos consiguieron el objetivo", ru: "Они достигли цели" }
      },
      future: {
        yo: { es: "Yo conseguiré el objetivo", ru: "Я достигну цели" },
        tú: { es: "Tú conseguirás el objetivo", ru: "Ты достигнешь цели" },
        él: { es: "Él conseguirá el objetivo", ru: "Он достигнет цели" },
        nosotros: { es: "Nosotros conseguiremos el objetivo", ru: "Мы достигнем цели" },
        vosotros: { es: "Vosotros conseguiréis el objetivo", ru: "Вы достигнете цели" },
        ellos: { es: "Ellos conseguirán el objetivo", ru: "Они достигнут цели" }
      }
    }
  },
  {
    id: 630,
    word: "mantener",
    translation: "поддерживать",
    category: "verbs",
    type: "глагол",
    popularity: 630,
    examples: {
      present: {
        yo: { es: "Yo mantengo la calma", ru: "Я сохраняю спокойствие" },
        tú: { es: "Tú mantienes la calma", ru: "Ты сохраняешь спокойствие" },
        él: { es: "Él mantiene la calma", ru: "Он сохраняет спокойствие" },
        nosotros: { es: "Nosotros mantenemos la calma", ru: "Мы сохраняем спокойствие" },
        vosotros: { es: "Vosotros mantenéis la calma", ru: "Вы сохраняете спокойствие" },
        ellos: { es: "Ellos mantienen la calma", ru: "Они сохраняют спокойствие" }
      },
      past: {
        yo: { es: "Yo mantuve la calma", ru: "Я сохранял спокойствие" },
        tú: { es: "Tú mantuviste la calma", ru: "Ты сохранял спокойствие" },
        él: { es: "Él mantuvo la calma", ru: "Он сохранял спокойствие" },
        nosotros: { es: "Nosotros mantuvimos la calma", ru: "Мы сохраняли спокойствие" },
        vosotros: { es: "Vosotros mantuvisteis la calma", ru: "Вы сохраняли спокойствие" },
        ellos: { es: "Ellos mantuvieron la calma", ru: "Они сохраняли спокойствие" }
      },
      future: {
        yo: { es: "Yo mantendré la calma", ru: "Я сохраню спокойствие" },
        tú: { es: "Tú mantendrás la calma", ru: "Ты сохранишь спокойствие" },
        él: { es: "Él mantendrá la calma", ru: "Он сохранит спокойствие" },
        nosotros: { es: "Nosotros mantendremos la calma", ru: "Мы сохраним спокойствие" },
        vosotros: { es: "Vosotros mantendréis la calma", ru: "Вы сохраните спокойствие" },
        ellos: { es: "Ellos mantendrán la calma", ru: "Они сохранят спокойствие" }
      }
    }
  },
  {
    id: 631,
    word: "resultar",
    translation: "получаться",
    category: "verbs",
    type: "глагол",
    popularity: 631,
    examples: {
      present: {
        yo: { es: "Yo resulto ser el ganador", ru: "Я получаюсь победителем" },
        tú: { es: "Tú resultas ser el ganador", ru: "Ты получаешься победителем" },
        él: { es: "Él resulta ser el ganador", ru: "Он получается победителем" },
        nosotros: { es: "Nosotros resultamos ser los ganadores", ru: "Мы получаемся победителями" },
        vosotros: { es: "Vosotros resultáis ser los ganadores", ru: "Вы получаетесь победителями" },
        ellos: { es: "Ellos resultan ser los ganadores", ru: "Они получаются победителями" }
      },
      past: {
        yo: { es: "Yo resulté ser el ganador", ru: "Я получился победителем" },
        tú: { es: "Tú resultaste ser el ganador", ru: "Ты получился победителем" },
        él: { es: "Él resultó ser el ganador", ru: "Он получился победителем" },
        nosotros: { es: "Nosotros resultamos ser los ganadores", ru: "Мы получились победителями" },
        vosotros: { es: "Vosotros resultasteis ser los ganadores", ru: "Вы получились победителями" },
        ellos: { es: "Ellos resultaron ser los ganadores", ru: "Они получились победителями" }
      },
      future: {
        yo: { es: "Yo resultaré ser el ganador", ru: "Я получусь победителем" },
        tú: { es: "Tú resultarás ser el ganador", ru: "Ты получишься победителем" },
        él: { es: "Él resultará ser el ganador", ru: "Он получится победителем" },
        nosotros: { es: "Nosotros resultaremos ser los ganadores", ru: "Мы получимся победителями" },
        vosotros: { es: "Vosotros resultaréis ser los ganadores", ru: "Вы получите победителями" },
        ellos: { es: "Ellos resultarán ser los ganadores", ru: "Они получатся победителями" }
      }
    }
  },
  {
    id: 632,
    word: "crear",
    translation: "создавать",
    category: "verbs",
    type: "глагол",
    popularity: 632,
    examples: {
      present: {
        yo: { es: "Yo creo arte", ru: "Я создаю искусство" },
        tú: { es: "Tú creas arte", ru: "Ты создаёшь искусство" },
        él: { es: "Él crea arte", ru: "Он создаёт искусство" },
        nosotros: { es: "Nosotros creamos arte", ru: "Мы создаём искусство" },
        vosotros: { es: "Vosotros creáis arte", ru: "Вы создаёте искусство" },
        ellos: { es: "Ellos crean arte", ru: "Они создают искусство" }
      },
      past: {
        yo: { es: "Yo creé arte", ru: "Я создал искусство" },
        tú: { es: "Tú creaste arte", ru: "Ты создал искусство" },
        él: { es: "Él creó arte", ru: "Он создал искусство" },
        nosotros: { es: "Nosotros creamos arte", ru: "Мы создали искусство" },
        vosotros: { es: "Vosotros creasteis arte", ru: "Вы создали искусство" },
        ellos: { es: "Ellos crearon arte", ru: "Они создали искусство" }
      },
      future: {
        yo: { es: "Yo crearé arte", ru: "Я создам искусство" },
        tú: { es: "Tú crearás arte", ru: "Ты создашь искусство" },
        él: { es: "Él creará arte", ru: "Он создаст искусство" },
        nosotros: { es: "Nosotros crearemos arte", ru: "Мы создадим искусство" },
        vosotros: { es: "Vosotros crearéis arte", ru: "Вы создадите искусство" },
        ellos: { es: "Ellos crearán arte", ru: "Они создадут искусство" }
      }
    }
  },
  {
    id: 633,
    word: "considerar",
    translation: "рассматривать",
    category: "verbs",
    type: "глагол",
    popularity: 633,
    examples: {
      present: {
        yo: { es: "Yo considero la opción", ru: "Я рассматриваю вариант" },
        tú: { es: "Tú consideras la opción", ru: "Ты рассматриваешь вариант" },
        él: { es: "Él considera la opción", ru: "Он рассматривает вариант" },
        nosotros: { es: "Nosotros consideramos la opción", ru: "Мы рассматриваем вариант" },
        vosotros: { es: "Vosotros consideráis la opción", ru: "Вы рассматриваете вариант" },
        ellos: { es: "Ellos consideran la opción", ru: "Они рассматривают вариант" }
      },
      past: {
        yo: { es: "Yo consideré la opción", ru: "Я рассматривал вариант" },
        tú: { es: "Tú consideraste la opción", ru: "Ты рассматривал вариант" },
        él: { es: "Él consideró la opción", ru: "Он рассматривал вариант" },
        nosotros: { es: "Nosotros consideramos la opción", ru: "Мы рассматривали вариант" },
        vosotros: { es: "Vosotros considerasteis la opción", ru: "Вы рассматривали вариант" },
        ellos: { es: "Ellos consideraron la opción", ru: "Они рассматривали вариант" }
      },
      future: {
        yo: { es: "Yo consideraré la opción", ru: "Я рассмотрю вариант" },
        tú: { es: "Tú considerarás la opción", ru: "Ты рассмотришь вариант" },
        él: { es: "Él considerará la opción", ru: "Он рассмотрит вариант" },
        nosotros: { es: "Nosotros consideraremos la opción", ru: "Мы рассмотрим вариант" },
        vosotros: { es: "Vosotros consideraréis la opción", ru: "Вы рассмотрите вариант" },
        ellos: { es: "Ellos considerarán la opción", ru: "Они рассмотрят вариант" }
      }
    }
  },
  {
    id: 634,
    word: "acabar",
    translation: "заканчивать",
    category: "verbs",
    type: "глагол",
    popularity: 634,
    examples: {
      present: {
        yo: { es: "Yo acabo el trabajo", ru: "Я заканчиваю работу" },
        tú: { es: "Tú acabas el trabajo", ru: "Ты заканчиваешь работу" },
        él: { es: "Él acaba el trabajo", ru: "Он заканчивает работу" },
        nosotros: { es: "Nosotros acabamos el trabajo", ru: "Мы заканчиваем работу" },
        vosotros: { es: "Vosotros acabáis el trabajo", ru: "Вы заканчиваете работу" },
        ellos: { es: "Ellos acaban el trabajo", ru: "Они заканчивают работу" }
      },
      past: {
        yo: { es: "Yo acabé el trabajo", ru: "Я закончил работу" },
        tú: { es: "Tú acabaste el trabajo", ru: "Ты закончил работу" },
        él: { es: "Él acabó el trabajo", ru: "Он закончил работу" },
        nosotros: { es: "Nosotros acabamos el trabajo", ru: "Мы закончили работу" },
        vosotros: { es: "Vosotros acabasteis el trabajo", ru: "Вы закончили работу" },
        ellos: { es: "Ellos acabaron el trabajo", ru: "Они закончили работу" }
      },
      future: {
        yo: { es: "Yo acabaré el trabajo", ru: "Я закончу работу" },
        tú: { es: "Tú acabarás el trabajo", ru: "Ты закончишь работу" },
        él: { es: "Él acabará el trabajo", ru: "Он закончит работу" },
        nosotros: { es: "Nosotros acabaremos el trabajo", ru: "Мы закончим работу" },
        vosotros: { es: "Vosotros acabaréis el trabajo", ru: "Вы закончите работу" },
        ellos: { es: "Ellos acabarán el trabajo", ru: "Они закончат работу" }
      }
    }
  },
  {
    id: 635,
    word: "convertir",
    translation: "превращать",
    category: "verbs",
    type: "глагол",
    popularity: 635,
    examples: {
      present: {
        yo: { es: "Yo convierto agua en hielo", ru: "Я превращаю воду в лёд" },
        tú: { es: "Tú conviertes agua en hielo", ru: "Ты превращаешь воду в лёд" },
        él: { es: "Él convierte agua en hielo", ru: "Он превращает воду в лёд" },
        nosotros: { es: "Nosotros convertimos agua en hielo", ru: "Мы превращаем воду в лёд" },
        vosotros: { es: "Vosotros convertís agua en hielo", ru: "Вы превращаете воду в лёд" },
        ellos: { es: "Ellos convierten agua en hielo", ru: "Они превращают воду в лёд" }
      },
      past: {
        yo: { es: "Yo convertí agua en hielo", ru: "Я превратил воду в лёд" },
        tú: { es: "Tú convertiste agua en hielo", ru: "Ты превратил воду в лёд" },
        él: { es: "Él convirtió agua en hielo", ru: "Он превратил воду в лёд" },
        nosotros: { es: "Nosotros convertimos agua en hielo", ru: "Мы превратили воду в лёд" },
        vosotros: { es: "Vosotros convertisteis agua en hielo", ru: "Вы превратили воду в лёд" },
        ellos: { es: "Ellos convirtieron agua en hielo", ru: "Они превратили воду в лёд" }
      },
      future: {
        yo: { es: "Yo convertiré agua en hielo", ru: "Я превращу воду в лёд" },
        tú: { es: "Tú convertirás agua en hielo", ru: "Ты превратишь воду в лёд" },
        él: { es: "Él convertirá agua en hielo", ru: "Он превратит воду в лёд" },
        nosotros: { es: "Nosotros convertiremos agua en hielo", ru: "Мы превратим воду в лёд" },
        vosotros: { es: "Vosotros convertiréis agua en hielo", ru: "Вы превратите воду в лёд" },
        ellos: { es: "Ellos convertirán agua en hielo", ru: "Они превратят воду в лёд" }
      }
    }
  },
  {
    id: 636,
    word: "formar",
    translation: "формировать",
    category: "verbs",
    type: "глагол",
    popularity: 636,
    examples: {
      present: {
        yo: { es: "Yo formo un equipo", ru: "Я формирую команду" },
        tú: { es: "Tú formas un equipo", ru: "Ты формируешь команду" },
        él: { es: "Él forma un equipo", ru: "Он формирует команду" },
        nosotros: { es: "Nosotros formamos un equipo", ru: "Мы формируем команду" },
        vosotros: { es: "Vosotros formáis un equipo", ru: "Вы формируете команду" },
        ellos: { es: "Ellos forman un equipo", ru: "Они формируют команду" }
      },
      past: {
        yo: { es: "Yo formé un equipo", ru: "Я сформировал команду" },
        tú: { es: "Tú formaste un equipo", ru: "Ты сформировал команду" },
        él: { es: "Él formó un equipo", ru: "Он сформировал команду" },
        nosotros: { es: "Nosotros formamos un equipo", ru: "Мы сформировали команду" },
        vosotros: { es: "Vosotros formasteis un equipo", ru: "Вы сформировали команду" },
        ellos: { es: "Ellos formaron un equipo", ru: "Они сформировали команду" }
      },
      future: {
        yo: { es: "Yo formaré un equipo", ru: "Я сформирую команду" },
        tú: { es: "Tú formarás un equipo", ru: "Ты сформируешь команду" },
        él: { es: "Él formará un equipo", ru: "Он сформирует команду" },
        nosotros: { es: "Nosotros formaremos un equipo", ru: "Мы сформируем команду" },
        vosotros: { es: "Vosotros formaréis un equipo", ru: "Вы сформируете команду" },
        ellos: { es: "Ellos formarán un equipo", ru: "Они сформируют команду" }
      }
    }
  },
  {
    id: 637,
    word: "partir",
    translation: "уезжать, делить",
    category: "verbs",
    type: "глагол",
    popularity: 637,
    examples: {
      present: {
        yo: { es: "Yo parto mañana", ru: "Я уезжаю завтра" },
        tú: { es: "Tú partes mañana", ru: "Ты уезжаешь завтра" },
        él: { es: "Él parte mañana", ru: "Он уезжает завтра" },
        nosotros: { es: "Nosotros partimos mañana", ru: "Мы уезжаем завтра" },
        vosotros: { es: "Vosotros partís mañana", ru: "Вы уезжаете завтра" },
        ellos: { es: "Ellos parten mañana", ru: "Они уезжают завтра" }
      },
      past: {
        yo: { es: "Yo partí ayer", ru: "Я уехал вчера" },
        tú: { es: "Tú partiste ayer", ru: "Ты уехал вчера" },
        él: { es: "Él partió ayer", ru: "Он уехал вчера" },
        nosotros: { es: "Nosotros partimos ayer", ru: "Мы уехали вчера" },
        vosotros: { es: "Vosotros partisteis ayer", ru: "Вы уехали вчера" },
        ellos: { es: "Ellos partieron ayer", ru: "Они уехали вчера" }
      },
      future: {
        yo: { es: "Yo partiré pronto", ru: "Я уеду скоро" },
        tú: { es: "Tú partirás pronto", ru: "Ты уедешь скоро" },
        él: { es: "Él partirá pronto", ru: "Он уедет скоро" },
        nosotros: { es: "Nosotros partiremos pronto", ru: "Мы уедем скоро" },
        vosotros: { es: "Vosotros partiréis pronto", ru: "Вы уедете скоро" },
        ellos: { es: "Elos partirán pronto", ru: "Они уедут скоро" }
      }
    }
  },
  {
    id: 638,
    word: "morir",
    translation: "умирать",
    category: "verbs",
    type: "глагол",
    popularity: 638,
    examples: {
      present: {
        yo: { es: "Yo muero de hambre", ru: "Я умираю от голода" },
        tú: { es: "Tú mueres de hambre", ru: "Ты умираешь от голода" },
        él: { es: "Él muere de hambre", ru: "Он умирает от голода" },
        nosotros: { es: "Nosotros morimos de hambre", ru: "Мы умираем от голода" },
        vosotros: { es: "Vosotros morís de hambre", ru: "Вы умираете от голода" },
        ellos: { es: "Ellos mueren de hambre", ru: "Они умирают от голода" }
      },
      past: {
        yo: { es: "Yo morí de hambre", ru: "Я умер от голода" },
        tú: { es: "Tú moriste de hambre", ru: "Ты умер от голода" },
        él: { es: "Él murió de hambre", ru: "Он умер от голода" },
        nosotros: { es: "Nosotros morimos de hambre", ru: "Мы умерли от голода" },
        vosotros: { es: "Vosotros moristeis de hambre", ru: "Вы умерли от голода" },
        ellos: { es: "Ellos murieron de hambre", ru: "Они умерли от голода" }
      },
      future: {
        yo: { es: "Yo moriré de hambre", ru: "Я умру от голода" },
        tú: { es: "Tú morirás de hambre", ru: "Ты умрёшь от голода" },
        él: { es: "Él morirá de hambre", ru: "Он умрёт от голода" },
        nosotros: { es: "Nosotros moriremos de hambre", ru: "Мы умрём от голода" },
        vosotros: { es: "Vosotros moriréis de hambre", ru: "Вы умрёте от голода" },
        ellos: { es: "Elos morirán de hambre", ru: "Они умрут от голода" }
      }
    }
  },
  {
    id: 639,
    word: "aceptar",
    translation: "принимать",
    category: "verbs",
    type: "глагол",
    popularity: 639,
    examples: {
      present: {
        yo: { es: "Yo acepto la oferta", ru: "Я принимаю предложение" },
        tú: { es: "Tú aceptas la oferta", ru: "Ты принимаешь предложение" },
        él: { es: "Él acepta la oferta", ru: "Он принимает предложение" },
        nosotros: { es: "Nosotros aceptamos la oferta", ru: "Мы принимаем предложение" },
        vosotros: { es: "Vosotros aceptáis la oferta", ru: "Вы принимаете предложение" },
        ellos: { es: "Ellos aceptan la oferta", ru: "Они принимают предложение" }
      },
      past: {
        yo: { es: "Yo acepté la oferta", ru: "Я принял предложение" },
        tú: { es: "Tú aceptaste la oferta", ru: "Ты принял предложение" },
        él: { es: "Él aceptó la oferta", ru: "Он принял предложение" },
        nosotros: { es: "Nosotros aceptamos la oferta", ru: "Мы приняли предложение" },
        vosotros: { es: "Vosotros aceptasteis la oferta", ru: "Вы приняли предложение" },
        ellos: { es: "Ellos aceptaron la oferta", ru: "Они приняли предложение" }
      },
      future: {
        yo: { es: "Yo aceptaré la oferta", ru: "Я приму предложение" },
        tú: { es: "Tú aceptarás la oferta", ru: "Ты примешь предложение" },
        él: { es: "Él aceptará la oferta", ru: "Он примет предложение" },
        nosotros: { es: "Nosotros aceptaremos la oferta", ru: "Мы примем предложение" },
        vosotros: { es: "Vosotros aceptaréis la oferta", ru: "Вы примете предложение" },
        ellos: { es: "Elos aceptarán la oferta", ru: "Они примут предложение" }
      }
    }
  },
  {
    id: 640,
    word: "realizar",
    translation: "осуществлять",
    category: "verbs",
    type: "глагол",
    popularity: 640,
    examples: {
      present: {
        yo: { es: "Yo realizo el proyecto", ru: "Я осуществляю проект" },
        tú: { es: "Tú realizas el proyecto", ru: "Ты осуществляешь проект" },
        él: { es: "Él realiza el proyecto", ru: "Он осуществляет проект" },
        nosotros: { es: "Nosotros realizamos el proyecto", ru: "Мы осуществляем проект" },
        vosotros: { es: "Vosotros realizáis el proyecto", ru: "Вы осуществляете проект" },
        ellos: { es: "Ellos realizan el proyecto", ru: "Они осуществляют проект" }
      },
      past: {
        yo: { es: "Yo realicé el proyecto", ru: "Я осуществил проект" },
        tú: { es: "Tú realizaste el proyecto", ru: "Ты осуществил проект" },
        él: { es: "Él realizó el proyecto", ru: "Он осуществил проект" },
        nosotros: { es: "Nosotros realizamos el proyecto", ru: "Мы осуществили проект" },
        vosotros: { es: "Vosotros realizasteis el proyecto", ru: "Вы осуществили проект" },
        ellos: { es: "Elos realizaron el proyecto", ru: "Они осуществили проект" }
      },
      future: {
        yo: { es: "Yo realizaré el proyecto", ru: "Я осуществлю проект" },
        tú: { es: "Tú realizarás el proyecto", ru: "Ты осуществишь проект" },
        él: { es: "Él realizará el proyecto", ru: "Он осуществит проект" },
        nosotros: { es: "Nosotros realizaremos el proyecto", ru: "Мы осуществим проект" },
        vosotros: { es: "Vosotros realizaréis el proyecto", ru: "Вы осуществите проект" },
        ellos: { es: "Elos realizarán el proyecto", ru: "Они осуществят проект" }
      }
    }
  },
  {
    id: 641,
    word: "suponer",
    translation: "предполагать",
    category: "verbs",
    type: "глагол",
    popularity: 641,
    examples: {
      present: {
        yo: { es: "Yo supongo que sí", ru: "Я предполагаю, что да" },
        tú: { es: "Tú supones que sí", ru: "Ты предполагаешь, что да" },
        él: { es: "Él supone que sí", ru: "Он предполагает, что да" },
        nosotros: { es: "Nosotros suponemos que sí", ru: "Мы предполагаем, что да" },
        vosotros: { es: "Vosotros suponéis que sí", ru: "Вы предполагаете, что да" },
        ellos: { es: "Ellos suponen que sí", ru: "Они предполагают, что да" }
      },
      past: {
        yo: { es: "Yo supuse que sí", ru: "Я предполагал, что да" },
        tú: { es: "Tú supusiste que sí", ru: "Ты предполагал, что да" },
        él: { es: "Él supuso que sí", ru: "Он предполагал, что да" },
        nosotros: { es: "Nosotros supusimos que sí", ru: "Мы предполагали, что да" },
        vosotros: { es: "Vosotros supusisteis que sí", ru: "Вы предполагали, что да" },
        ellos: { es: "Ellos supusieron que sí", ru: "Они предполагали, что да" }
      },
      future: {
        yo: { es: "Yo supondré que sí", ru: "Я буду предполагать, что да" },
        tú: { es: "Tú supondrás que sí", ru: "Ты будешь предполагать, что да" },
        él: { es: "Él supondrá que sí", ru: "Он будет предполагать, что да" },
        nosotros: { es: "Nosotros supondremos que sí", ru: "Мы будем предполагать, что да" },
        vosotros: { es: "Vosotros supondréis que sí", ru: "Вы будете предполагать, что да" },
        ellos: { es: "Ellos supondrán que sí", ru: "Они будут предполагать, что да" }
      }
    }
  },
  {
    id: 642,
    word: "comprender",
    translation: "понимать",
    category: "verbs",
    type: "глагол",
    popularity: 642,
    examples: {
      present: {
        yo: { es: "Yo comprendo el problema", ru: "Я понимаю проблему" },
        tú: { es: "Tú comprendes el problema", ru: "Ты понимаешь проблему" },
        él: { es: "Él comprende el problema", ru: "Он понимает проблему" },
        nosotros: { es: "Nosotros comprendemos el problema", ru: "Мы понимаем проблему" },
        vosotros: { es: "Vosotros comprendéis el problema", ru: "Вы понимаете проблему" },
        ellos: { es: "Ellos comprenden el problema", ru: "Они понимают проблему" }
      },
      past: {
        yo: { es: "Yo comprendí el problema", ru: "Я понял проблему" },
        tú: { es: "Tú comprendiste el problema", ru: "Ты понял проблему" },
        él: { es: "Él comprendió el problema", ru: "Он понял проблему" },
        nosotros: { es: "Nosotros comprendimos el problema", ru: "Мы поняли проблему" },
        vosotros: { es: "Vosotros comprendisteis el problema", ru: "Вы поняли проблему" },
        ellos: { es: "Ellos comprendieron el problema", ru: "Они поняли проблему" }
      },
      future: {
        yo: { es: "Yo comprenderé el problema", ru: "Я пойму проблему" },
        tú: { es: "Tú comprenderás el problema", ru: "Ты поймёшь проблему" },
        él: { es: "Él comprenderá el problema", ru: "Он поймёт проблему" },
        nosotros: { es: "Nosotros comprenderemos el problema", ru: "Мы поймём проблему" },
        vosotros: { es: "Vosotros comprenderéis el problema", ru: "Вы поймёте проблему" },
        ellos: { es: "Ellos comprenderán el problema", ru: "Они поймут проблему" }
      }
    }
  },
  {
    id: 643,
    word: "lograr",
    translation: "достигать",
    category: "verbs",
    type: "глагол",
    popularity: 643,
    examples: {
      present: {
        yo: { es: "Yo logro mi meta", ru: "Я достигаю своей цели" },
        tú: { es: "Tú logras tu meta", ru: "Ты достигаешь своей цели" },
        él: { es: "Él logra su meta", ru: "Он достигает своей цели" },
        nosotros: { es: "Nosotros logramos nuestras metas", ru: "Мы достигаем своих целей" },
        vosotros: { es: "Vosotros lográis vuestras metas", ru: "Вы достигаете своих целей" },
        ellos: { es: "Ellos logran sus metas", ru: "Они достигают своих целей" }
      },
      past: {
        yo: { es: "Yo logré mi meta", ru: "Я достиг своей цели" },
        tú: { es: "Tú lograste tu meta", ru: "Ты достиг своей цели" },
        él: { es: "Él logró su meta", ru: "Он достиг своей цели" },
        nosotros: { es: "Nosotros logramos nuestras metas", ru: "Мы достигли своих целей" },
        vosotros: { es: "Vosotros lograsteis vuestras metas", ru: "Вы достигли своих целей" },
        ellos: { es: "Ellos lograron sus metas", ru: "Они достигли своих целей" }
      },
      future: {
        yo: { es: "Yo lograré mi meta", ru: "Я достигну своей цели" },
        tú: { es: "Tú lograrás tu meta", ru: "Ты достигнешь своей цели" },
        él: { es: "Él logrará su meta", ru: "Он достигнет своей цели" },
        nosotros: { es: "Nosotros lograremos nuestras metas", ru: "Мы достигнем своих целей" },
        vosotros: { es: "Vosotros lograréis vuestras metas", ru: "Вы достигнете своих целей" },
        ellos: { es: "Elos lograrán sus metas", ru: "Они достигнут своих целей" }
      }
    }
  },
  {
    id: 644,
    word: "reconocer",
    translation: "узнавать",
    category: "verbs",
    type: "глагол",
    popularity: 644,
    examples: {
      present: {
        yo: { es: "Yo reconozco tu voz", ru: "Я узнаю твой голос" },
        tú: { es: "Tú reconoces mi voz", ru: "Ты узнаёшь мой голос" },
        él: { es: "Él reconoce su voz", ru: "Он узнаёт свой голос" },
        nosotros: { es: "Nosotros reconocemos vuestras voces", ru: "Мы узнаём ваши голоса" },
        vosotros: { es: "Vosotros reconocéis vuestras voces", ru: "Вы узнаёте ваши голоса" },
        ellos: { es: "Ellos reconocen sus voces", ru: "Они узнают свои голоса" }
      },
      past: {
        yo: { es: "Yo reconocí tu voz", ru: "Я узнал твой голос" },
        tú: { es: "Tú reconociste mi voz", ru: "Ты узнал мой голос" },
        él: { es: "Él reconoció su voz", ru: "Он узнал свой голос" },
        nosotros: { es: "Nosotros reconocimos vuestras voces", ru: "Мы узнали ваши голоса" },
        vosotros: { es: "Vosotros reconocisteis vuestras voces", ru: "Вы узнали ваши голоса" },
        ellos: { es: "Ellos reconocieron sus voces", ru: "Они узнали свои голоса" }
      },
      future: {
        yo: { es: "Yo reconoceré tu voz", ru: "Я узнаю твой голос" },
        tú: { es: "Tú reconocerás mi voz", ru: "Ты узнаешь мой голос" },
        él: { es: "Él reconocerá su voz", ru: "Он узнает свой голос" },
        nosotros: { es: "Nosotros reconoceremos vuestras voces", ru: "Мы узнаем ваши голоса" },
        vosotros: { es: "Vosotros reconoceréis vuestras voces", ru: "Вы узнаете ваши голоса" },
        ellos: { es: "Ellos reconocerán sus voces", ru: "Они узнают свои голоса" }
      }
    }
  },
  {
    id: 645,
    word: "alcanzar",
    translation: "достигать",
    category: "verbs",
    type: "глагол",
    popularity: 645,
    examples: {
      present: {
        yo: { es: "Yo alcanzo la cima", ru: "Я достигаю вершины" },
        tú: { es: "Tú alcanzas la cima", ru: "Ты достигаешь вершины" },
        él: { es: "Él alcanza la cima", ru: "Он достигает вершины" },
        nosotros: { es: "Nosotros alcanzamos la cima", ru: "Мы достигаем вершины" },
        vosotros: { es: "Vosotros alcanzáis la cima", ru: "Вы достигаете вершины" },
        ellos: { es: "Ellos alcanzan la cima", ru: "Они достигают вершины" }
      },
      past: {
        yo: { es: "Yo alcancé la cima", ru: "Я достиг вершины" },
        tú: { es: "Tú alcanzaste la cima", ru: "Ты достиг вершины" },
        él: { es: "Él alcanzó la cima", ru: "Он достиг вершины" },
        nosotros: { es: "Nosotros alcanzamos la cima", ru: "Мы достигли вершины" },
        vosotros: { es: "Vosotros alcanzasteis la cima", ru: "Вы достигли вершины" },
        ellos: { es: "Ellos alcanzaron la cima", ru: "Они достигли вершины" }
      },
      future: {
        yo: { es: "Yo alcanzaré la cima", ru: "Я достигну вершины" },
        tú: { es: "Tú alcanzarás la cima", ru: "Ты достигнешь вершины" },
        él: { es: "Él alcanzará la cima", ru: "Он достигнет вершины" },
        nosotros: { es: "Nosotros alcanzaremos la cima", ru: "Мы достигнем вершины" },
        vosotros: { es: "Vosotros alcanzaréis la cima", ru: "Вы достигнете вершины" },
        ellos: { es: "Elos alcanzarán la cima", ru: "Они достигнут вершины" }
      }
    }
  },
  {
    id: 646,
    word: "nacer",
    translation: "рождаться",
    category: "verbs",
    type: "глагол",
    popularity: 646,
    examples: {
      present: {
        yo: { es: "Yo nazco en España", ru: "Я рождаюсь в Испании" },
        tú: { es: "Tú naces en España", ru: "Ты рождаешься в Испании" },
        él: { es: "Él nace en España", ru: "Он рождается в Испании" },
        nosotros: { es: "Nosotros nacemos en España", ru: "Мы рождаемся в Испании" },
        vosotros: { es: "Vosotros nacéis en España", ru: "Вы рождаетесь в Испании" },
        ellos: { es: "Ellos nacen en España", ru: "Они рождаются в Испании" }
      },
      past: {
        yo: { es: "Yo nací en España", ru: "Я родился в Испании" },
        tú: { es: "Tú naciste en España", ru: "Ты родился в Испании" },
        él: { es: "Él nació en España", ru: "Он родился в Испании" },
        nosotros: { es: "Nosotros nacimos en España", ru: "Мы родились в Испании" },
        vosotros: { es: "Vosotros nacisteis en España", ru: "Вы родились в Испании" },
        ellos: { es: "Elos nacieron en España", ru: "Они родились в Испании" }
      },
      future: {
        yo: { es: "Yo naceré en España", ru: "Я рожусь в Испании" },
        tú: { es: "Tú nacerás en España", ru: "Ты родишься в Испании" },
        él: { es: "Él nacerá en España", ru: "Он родится в Испании" },
        nosotros: { es: "Nosotros naceremos en España", ru: "Мы родимся в Испании" },
        vosotros: { es: "Vosotros naceréis en España", ru: "Вы родитесь в Испании" },
        ellos: { es: "Elos nacerán en España", ru: "Они родятся в Испании" }
      }
    }
  },
  {
    id: 647,
    word: "dirigir",
    translation: "направлять, руководить",
    category: "verbs",
    type: "глагол",
    popularity: 647,
    examples: {
      present: {
        yo: { es: "Yo dirijo la empresa", ru: "Я руковожу компанией" },
        tú: { es: "Tú diriges la empresa", ru: "Ты руководишь компанией" },
        él: { es: "Él dirige la empresa", ru: "Он руководит компанией" },
        nosotros: { es: "Nosotros dirigimos la empresa", ru: "Мы руководим компанией" },
        vosotros: { es: "Vosotros dirigís la empresa", ru: "Вы руководите компанией" },
        ellos: { es: "Ellos dirigen la empresa", ru: "Они руководят компанией" }
      },
      past: {
        yo: { es: "Yo dirigí la empresa", ru: "Я руководил компанией" },
        tú: { es: "Tú dirigiste la empresa", ru: "Ты руководил компанией" },
        él: { es: "Él dirigió la empresa", ru: "Он руководил компанией" },
        nosotros: { es: "Nosotros dirigimos la empresa", ru: "Мы руководили компанией" },
        vosotros: { es: "Vosotros dirigisteis la empresa", ru: "Вы руководили компанией" },
        ellos: { es: "Ellos dirigieron la empresa", ru: "Они руководили компанией" }
      },
      future: {
        yo: { es: "Yo dirigiré la empresa", ru: "Я буду руководить компанией" },
        tú: { es: "Tú dirigirás la empresa", ru: "Ты будешь руководить компанией" },
        él: { es: "Él dirigirá la empresa", ru: "Он будет руководить компанией" },
        nosotros: { es: "Nosotros dirigiremos la empresa", ru: "Мы будем руководить компанией" },
        vosotros: { es: "Vosotros dirigiréis la empresa", ru: "Вы будете руководить компанией" },
        ellos: { es: "Elos dirigirán la empresa", ru: "Они будут руководить компанией" }
      }
    }
  },
  {
    id: 648,
    word: "correr",
    translation: "бежать",
    category: "verbs",
    type: "глагол",
    popularity: 648,
    examples: {
      present: {
        yo: { es: "Yo corro en el parque", ru: "Я бегаю в парке" },
        tú: { es: "Tú corres en el parque", ru: "Ты бегаешь в парке" },
        él: { es: "Él corre en el parque", ru: "Он бегает в парке" },
        nosotros: { es: "Nosotros corremos en el parque", ru: "Мы бегаем в парке" },
        vosotros: { es: "Vosotros corréis en el parque", ru: "Вы бегаете в парке" },
        ellos: { es: "Ellos corren en el parque", ru: "Они бегают в парке" }
      },
      past: {
        yo: { es: "Yo corrí en el parque", ru: "Я бегал в парке" },
        tú: { es: "Tú corriste en el parque", ru: "Ты бегал в парке" },
        él: { es: "Él corrió en el parque", ru: "Он бегал в парке" },
        nosotros: { es: "Nosotros corrimos en el parque", ru: "Мы бегали в парке" },
        vosotros: { es: "Vosotros corristeis en el parque", ru: "Вы бегали в парке" },
        ellos: { es: "Ellos corrieron en el parque", ru: "Они бегали в парке" }
      },
      future: {
        yo: { es: "Yo correré en el parque", ru: "Я буду бегать в парке" },
        tú: { es: "Tú correrás en el parque", ru: "Ты будешь бегать в парке" },
        él: { es: "Él correrá en el parque", ru: "Он будет бегать в парке" },
        nosotros: { es: "Nosotros correremos en el parque", ru: "Мы будем бегать в парке" },
        vosotros: { es: "Vosotros correréis en el parque", ru: "Вы будете бегать в парке" },
        ellos: { es: "Elos correrán en el parque", ru: "Они будут бегать в парке" }
      }
    }
  },
  {
    id: 649,
    word: "utilizar",
    translation: "использовать",
    category: "verbs",
    type: "глагол",
    popularity: 649,
    examples: {
      present: {
        yo: { es: "Yo utilizo el ordenador", ru: "Я использую компьютер" },
        tú: { es: "Tú utilizas el ordenador", ru: "Ты используешь компьютер" },
        él: { es: "Él utiliza el ordenador", ru: "Он использует компьютер" },
        nosotros: { es: "Nosotros utilizamos el ordenador", ru: "Мы используем компьютер" },
        vosotros: { es: "Vosotros utilizáis el ordenador", ru: "Вы используете компьютер" },
        ellos: { es: "Ellos utilizan el ordenador", ru: "Они используют компьютер" }
      },
      past: {
        yo: { es: "Yo utilicé el ordenador", ru: "Я использовал компьютер" },
        tú: { es: "Tú utilizaste el ordenador", ru: "Ты использовал компьютер" },
        él: { es: "Él utilizó el ordenador", ru: "Он использовал компьютер" },
        nosotros: { es: "Nosotros utilizamos el ordenador", ru: "Мы использовали компьютер" },
        vosotros: { es: "Vosotros utilizasteis el ordenador", ru: "Вы использовали компьютер" },
        ellos: { es: "Elos utilizaron el ordenador", ru: "Они использовали компьютер" }
      },
      future: {
        yo: { es: "Yo utilizaré el ordenador", ru: "Я буду использовать компьютер" },
        tú: { es: "Tú utilizarás el ordenador", ru: "Ты будешь использовать компьютер" },
        él: { es: "Él utilizará el ordenador", ru: "Он будет использовать компьютер" },
        nosotros: { es: "Nosotros utilizaremos el ordenador", ru: "Мы будем использовать компьютер" },
        vosotros: { es: "Vosotros utilizaréis el ordenador", ru: "Вы будете использовать компьютер" },
        ellos: { es: "Elos utilizarán el ordenador", ru: "Они будут использовать компьютер" }
      }
    }
  },
  {
    id: 650,
    word: "pagar",
    translation: "платить",
    category: "verbs",
    type: "глагол",
    popularity: 650,
    examples: {
      present: {
        yo: { es: "Yo pago la cuenta", ru: "Я плачу по счёту" },
        tú: { es: "Tú pagas la cuenta", ru: "Ты платишь по счёту" },
        él: { es: "Él paga la cuenta", ru: "Он платит по счёту" },
        nosotros: { es: "Nosotros pagamos la cuenta", ru: "Мы платим по счёту" },
        vosotros: { es: "Vosotros pagáis la cuenta", ru: "Вы платите по счёту" },
        ellos: { es: "Ellos pagan la cuenta", ru: "Они платят по счёту" }
      },
      past: {
        yo: { es: "Yo pagué la cuenta", ru: "Я заплатил по счёту" },
        tú: { es: "Tú pagaste la cuenta", ru: "Ты заплатил по счёту" },
        él: { es: "Él pagó la cuenta", ru: "Он заплатил по счёту" },
        nosotros: { es: "Nosotros pagamos la cuenta", ru: "Мы заплатили по счёту" },
        vosotros: { es: "Vosotros pagasteis la cuenta", ru: "Вы заплатили по счёту" },
        ellos: { es: "Elos pagaron la cuenta", ru: "Они заплатили по счёту" }
      },
      future: {
        yo: { es: "Yo pagaré la cuenta", ru: "Я заплачу по счёту" },
        tú: { es: "Tú pagarás la cuenta", ru: "Ты заплатишь по счёту" },
        él: { es: "Él pagará la cuenta", ru: "Он заплатит по счёту" },
        nosotros: { es: "Nosotros pagaremos la cuenta", ru: "Мы заплатим по счёту" },
        vosotros: { es: "Vosotros pagaréis la cuenta", ru: "Вы заплатите по счёту" },
        ellos: { es: "Elos pagarán la cuenta", ru: "Они заплатят по счёту" }
      }
    }
  },
  {
    id: 651,
    word: "ayudar",
    translation: "помогать",
    category: "verbs",
    type: "глагол",
    popularity: 651,
    examples: {
      present: {
        yo: { es: "Yo ayudo a mi madre", ru: "Я помогаю маме" },
        tú: { es: "Tú ayudas a tu madre", ru: "Ты помогаешь своей маме" },
        él: { es: "Él ayuda a su madre", ru: "Он помогает своей маме" },
        nosotros: { es: "Nosotros ayudamos a nuestras madres", ru: "Мы помогаем нашим мамам" },
        vosotros: { es: "Vosotros ayudáis a vuestras madres", ru: "Вы помогаете вашим мамам" },
        ellos: { es: "Elos ayudan a sus madres", ru: "Они помогают своим мамам" }
      },
      past: {
        yo: { es: "Yo ayudé a mi madre", ru: "Я помог маме" },
        tú: { es: "Tú ayudaste a tu madre", ru: "Ты помог своей маме" },
        él: { es: "Él ayudó a su madre", ru: "Он помог своей маме" },
        nosotros: { es: "Nosotros ayudamos a nuestras madres", ru: "Мы помогли нашим мамам" },
        vosotros: { es: "Vosotros ayudasteis a vuestras madres", ru: "Вы помогли вашим мамам" },
        ellos: { es: "Elos ayudaron a sus madres", ru: "Они помогли своим мамам" }
      },
      future: {
        yo: { es: "Yo ayudaré a mi madre", ru: "Я помогу маме" },
        tú: { es: "Tú ayudarás a tu madre", ru: "Ты поможешь своей маме" },
        él: { es: "Él ayudará a su madre", ru: "Он поможет своей маме" },
        nosotros: { es: "Nosotros ayudaremos a nuestras madres", ru: "Мы поможем нашим мамам" },
        vosotros: { es: "Vosotros ayudaréis a vuestras madres", ru: "Вы поможете вашим мамам" },
        ellos: { es: "Elos ayudarán a sus madres", ru: "Они помогут своим мамам" }
      }
    }
  },
  {
    id: 652,
    word: "gustar",
    translation: "нравиться",
    category: "verbs",
    type: "глагол",
    popularity: 652,
    examples: {
      present: {
        yo: { es: "A mí me gusta el chocolate", ru: "Мне нравится шоколад" },
        tú: { es: "A ti te gusta el chocolate", ru: "Тебе нравится шоколад" },
        él: { es: "A él le gusta el chocolate", ru: "Ему нравится шоколад" },
        nosotros: { es: "A nosostros nos gusta el chocolate", ru: "Нам нравится шоколад" },
        vosotros: { es: "A vosotros os gusta el chocolate", ru: "Вам нравится шоколад" },
        ellos: { es: "A ellos les gusta el chocolate", ru: "Им нравится шоколад" }
      },
      past: {
        yo: { es: "A mí me gustaba el chocolate", ru: "Мне нравился шоколад" },
        tú: { es: "A ti te gustaba el chocolate", ru: "Тебе нравился шоколад" },
        él: { es: "A él le gustaba el chocolate", ru: "Ему нравился шоколад" },
        nosotros: { es: "A nosostros nos gustaba el chocolate", ru: "Нам нравился шоколад" },
        vosotros: { es: "A vosotros os gustaba el chocolate", ru: "Вам нравился шоколад" },
        ellos: { es: "A ellos les gustaba el chocolate", ru: "Им нравился шоколад" }
      },
      future: {
        yo: { es: "A mí me gustará el chocolate", ru: "Мне понравится шоколад" },
        tú: { es: "A ti te gustará el chocolate", ru: "Тебе понравится шоколад" },
        él: { es: "A él le gustará el chocolate", ru: "Ему понравится шоколад" },
        nosotros: { es: "A nosostros nos gustará el chocolate", ru: "Нам понравится шоколад" },
        vosotros: { es: "A vosotros os gustará el chocolate", ru: "Вам понравится шоколад" },
        ellos: { es: "A ellos les gustará el chocolate", ru: "Им понравится шоколад" }
      }
    }
  },
  {
    id: 653,
    word: "jugar",
    translation: "играть",
    category: "verbs",
    type: "глагол",
    popularity: 653,
    examples: {
      present: {
        yo: { es: "Yo juego al fútbol", ru: "Я играю в футбол" },
        tú: { es: "Tú juegas al fútbol", ru: "Ты играешь в футбол" },
        él: { es: "Él juega al fútbol", ru: "Он играет в футбол" },
        nosotros: { es: "Nosotros jugamos al fútbol", ru: "Мы играем в футбол" },
        vosotros: { es: "Vosotros jugáis al fútbol", ru: "Вы играете в футбол" },
        ellos: { es: "Ellos juegan al fútbol", ru: "Они играют в футбол" }
      },
      past: {
        yo: { es: "Yo jugué al fútbol", ru: "Я играл в футбол" },
        tú: { es: "Tú jugaste al fútbol", ru: "Ты играл в футбол" },
        él: { es: "Él jugó al fútbol", ru: "Он играл в футбол" },
        nosotros: { es: "Nosotros jugamos al fútbol", ru: "Мы играли в футбол" },
        vosotros: { es: "Vosotros jugasteis al fútbol", ru: "Вы играли в футбол" },
        ellos: { es: "Ellos jugaron al fútbol", ru: "Они играли в футбол" }
      },
      future: {
        yo: { es: "Yo jugaré al fútbol", ru: "Я буду играть в футбол" },
        tú: { es: "Tú jugarás al fútbol", ru: "Ты будешь играть в футбол" },
        él: { es: "Él jugará al fútbol", ru: "Он будет играть в футбол" },
        nosotros: { es: "Nosotros jugaremos al fútbol", ru: "Мы будем играть в футбол" },
        vosotros: { es: "Vosotros jugaréis al fútbol", ru: "Вы будете играть в футбол" },
        ellos: { es: "Ellos jugarán al fútbol", ru: "Они будут играть в футбол" }
      }
    }
  },
  {
    id: 654,
    word: "cumplir",
    translation: "выполнять",
    category: "verbs",
    type: "глагол",
    popularity: 654,
    examples: {
      present: {
        yo: { es: "Yo cumplo mi promesa", ru: "Я выполняю обещание" },
        tú: { es: "Tú cumples tu promesa", ru: "Ты выполняешь своё обещание" },
        él: { es: "Él cumple su promesa", ru: "Он выполняет своё обещание" },
        nosotros: { es: "Nosotros cumplimos nuestras promesas", ru: "Мы выполняем наши обещания" },
        vosotros: { es: "Vosotros cumplís vuestras promesas", ru: "Вы выполняете ваши обещания" },
        ellos: { es: "Ellos cumplen sus promesas", ru: "Они выполняют свои обещания" }
      },
      past: {
        yo: { es: "Yo cumplí mi promesa", ru: "Я выполнил обещание" },
        tú: { es: "Tú cumpliste tu promesa", ru: "Ты выполнил своё обещание" },
        él: { es: "Él cumplió su promesa", ru: "Он выполнил своё обещание" },
        nosotros: { es: "Nosotros cumplimos nuestras promesas", ru: "Мы выполнили наши обещания" },
        vosotros: { es: "Vosotros cumplisteis vuestras promesas", ru: "Вы выполнили ваши обещания" },
        ellos: { es: "Ellos cumplieron sus promesas", ru: "Они выполнили свои обещания" }
      },
      future: {
        yo: { es: "Yo cumpliré mi promesa", ru: "Я выполню обещание" },
        tú: { es: "Tú cumplirás tu promesa", ru: "Ты выполнишь своё обещание" },
        él: { es: "Él cumplirá su promesa", ru: "Он выполнит своё обещание" },
        nosotros: { es: "Nosotros cumpliremos nuestras promesas", ru: "Мы выполним наши обещания" },
        vosotros: { es: "Vosotros cumpliréis vuestras promesas", ru: "Вы выполните ваши обещания" },
        ellos: { es: "Ellos cumplirán sus promesas", ru: "Они выполнят свои обещания" }
      }
    }
  },
  {
    id: 655,
    word: "ofrecer",
    translation: "предлагать",
    category: "verbs",
    type: "глагол",
    popularity: 655,
    examples: {
      present: {
        yo: { es: "Yo ofrezco mi ayuda", ru: "Я предлагаю свою помощь" },
        tú: { es: "Tú ofreces tu ayuda", ru: "Ты предлагаешь свою помощь" },
        él: { es: "Él ofrece su ayuda", ru: "Он предлагает свою помощь" },
        nosotros: { es: "Nosotros ofrecemos nuestra ayuda", ru: "Мы предлагаем нашу помощь" },
        vosotros: { es: "Vosotros ofrecéis vuestra ayuda", ru: "Вы предлагаете вашу помощь" },
        ellos: { es: "Ellos ofrecen su ayuda", ru: "Они предлагают свою помощь" }
      },
      past: {
        yo: { es: "Yo ofrecí mi ayuda", ru: "Я предложил свою помощь" },
        tú: { es: "Tú ofreciste tu ayuda", ru: "Ты предложил свою помощь" },
        él: { es: "Él ofreció su ayuda", ru: "Он предложил свою помощь" },
        nosotros: { es: "Nosotros ofrecimos nuestra ayuda", ru: "Мы предложили нашу помощь" },
        vosotros: { es: "Vosotros ofrecisteis vuestra ayuda", ru: "Вы предложили вашу помощь" },
        ellos: { es: "Ellos ofrecieron su ayuda", ru: "Они предложили свою помощь" }
      },
      future: {
        yo: { es: "Yo ofreceré mi ayuda", ru: "Я предложу свою помощь" },
        tú: { es: "Tú ofrecerás tu ayuda", ru: "Ты предложишь свою помощь" },
        él: { es: "Él ofrecerá su ayuda", ru: "Он предложит свою помощь" },
        nosotros: { es: "Nosotros ofreceremos nuestra ayuda", ru: "Мы предложим нашу помощь" },
        vosotros: { es: "Vosotros ofreceréis vuestra ayuda", ru: "Вы предложите вашу помощь" },
        ellos: { es: "Ellos ofrecerán su ayuda", ru: "Они предложат свою помощь" }
      }
    }
  },
  {
    id: 656,
    word: "descubrir",
    translation: "открывать, обнаруживать",
    category: "verbs",
    type: "глагол",
    popularity: 656,
    examples: {
      present: {
        yo: { es: "Yo descubro un secreto", ru: "Я открываю секрет" },
        tú: { es: "Tú descubres un secreto", ru: "Ты открываешь секрет" },
        él: { es: "Él descubre un secreto", ru: "Он открывает секрет" },
        nosotros: { es: "Nosotros descubrimos un secreto", ru: "Мы открываем секрет" },
        vosotros: { es: "Vosotros descubrís un secreto", ru: "Вы открываете секрет" },
        ellos: { es: "Ellos descubren un secreto", ru: "Они открывают секрет" }
      },
      past: {
        yo: { es: "Yo descubrí un secreto", ru: "Я открыл секрет" },
        tú: { es: "Tú descubriste un secreto", ru: "Ты открыл секрет" },
        él: { es: "Él descubrió un secreto", ru: "Он открыл секрет" },
        nosotros: { es: "Nosotros descubrimos un secreto", ru: "Мы открыли секрет" },
        vosotros: { es: "Vosotros descubristeis un secreto", ru: "Вы открыли секрет" },
        ellos: { es: "Ellos descubrieron un secreto", ru: "Они открыли секрет" }
      },
      future: {
        yo: { es: "Yo descubriré un secreto", ru: "Я открою секрет" },
        tú: { es: "Tú descubrirás un secreto", ru: "Ты откроешь секрет" },
        él: { es: "Él descubrirá un secreto", ru: "Он откроет секрет" },
        nosotros: { es: "Nosotros descubriremos un secreto", ru: "Мы откроем секрет" },
        vosotros: { es: "Vosotros descubriréis un secreto", ru: "Вы откроете секрет" },
        ellos: { es: "Ellos descubrirán un secreto", ru: "Они откроют секрет" }
      }
    }
  },
  {
    id: 657,
    word: "intentar",
    translation: "пытаться",
    category: "verbs",
    type: "глагол",
    popularity: 657,
    examples: {
      present: {
        yo: { es: "Yo intento resolver el problema", ru: "Я пытаюсь решить проблему" },
        tú: { es: "Tú intentas resolver el problema", ru: "Ты пытаешься решить проблему" },
        él: { es: "Él intenta resolver el problema", ru: "Он пытается решить проблему" },
        nosotros: { es: "Nosotros intentamos resolver el problema", ru: "Мы пытаемся решить проблему" },
        vosotros: { es: "Vosotros intentáis resolver el problema", ru: "Вы пытаетесь решить проблему" },
        ellos: { es: "Ellos intentan resolver el problema", ru: "Они пытаются решить проблему" }
      },
      past: {
        yo: { es: "Yo intenté resolver el problema", ru: "Я пытался решить проблему" },
        tú: { es: "Tú intentaste resolver el problema", ru: "Ты пытался решить проблему" },
        él: { es: "Él intentó resolver el problema", ru: "Он пытался решить проблему" },
        nosotros: { es: "Nosotros intentamos resolver el problema", ru: "Мы пытались решить проблему" },
        vosotros: { es: "Vosotros intentasteis resolver el problema", ru: "Вы пытались решить проблему" },
        ellos: { es: "Ellos intentaron resolver el problema", ru: "Они пытались решить проблему" }
      },
      future: {
        yo: { es: "Yo intentaré resolver el problema", ru: "Я попытаюсь решить проблему" },
        tú: { es: "Tú intentarás resolver el problema", ru: "Ты попытаешься решить проблему" },
        él: { es: "Él intentará resolver el problema", ru: "Он попытается решить проблему" },
        nosotros: { es: "Nosotros intentaremos resolver el problema", ru: "Мы попытаемся решить проблему" },
        vosotros: { es: "Vosotros intentaréis resolver el problema", ru: "Вы попытаетесь решить проблему" },
        ellos: { es: "Ellos intentarán resolver el problema", ru: "Они попытаются решить проблему" }
      }
    }
  },
  {
    id: 658,
    word: "usar",
    translation: "использовать",
    category: "verbs",
    type: "глагол",
    popularity: 658,
    examples: {
      present: {
        yo: { es: "Yo uso el teléfono", ru: "Я использую телефон" },
        tú: { es: "Tú usas el teléfono", ru: "Ты используешь телефон" },
        él: { es: "Él usa el teléfono", ru: "Он использует телефон" },
        nosotros: { es: "Nosotros usamos el teléfono", ru: "Мы используем телефон" },
        vosotros: { es: "Vosotros usáis el teléfono", ru: "Вы используете телефон" },
        ellos: { es: "Ellos usan el teléfono", ru: "Они используют телефон" }
      },
      past: {
        yo: { es: "Yo usé el teléfono", ru: "Я использовал телефон" },
        tú: { es: "Tú usaste el teléfono", ru: "Ты использовал телефон" },
        él: { es: "Él usó el teléfono", ru: "Он использовал телефон" },
        nosotros: { es: "Nosotros usamos el teléfono", ru: "Мы использовали телефон" },
        vosotros: { es: "Vosotros usasteis el teléfono", ru: "Вы использовали телефон" },
        ellos: { es: "Ellos usaron el teléfono", ru: "Они использовали телефон" }
      },
      future: {
        yo: { es: "Yo usaré el teléfono", ru: "Я буду использовать телефон" },
        tú: { es: "Tú usarás el teléfono", ru: "Ты будешь использовать телефон" },
        él: { es: "Él usará el teléfono", ru: "Он будет использовать телефон" },
        nosotros: { es: "Nosotros usaremos el teléfono", ru: "Мы будем использовать телефон" },
        vosotros: { es: "Vosotros usaréis el teléfono", ru: "Вы будете использовать телефон" },
        ellos: { es: "Ellos usarán el teléfono", ru: "Они будут использовать телефон" }
      }
    }
  },
  {
    id: 659,
    word: "decidir",
    translation: "решать",
    category: "verbs",
    type: "глагол",
    popularity: 659,
    examples: {
      present: {
        yo: { es: "Yo decido quedarme", ru: "Я решаю остаться" },
        tú: { es: "Tú decides quedarte", ru: "Ты решаешь остаться" },
        él: { es: "Él decide quedarse", ru: "Он решает остаться" },
        nosotros: { es: "Nosotros decidimos quedarnos", ru: "Мы решаем остаться" },
        vosotros: { es: "Vosotros decidís quedaros", ru: "Вы решаете остаться" },
        ellos: { es: "Ellos deciden quedarse", ru: "Они решают остаться" }
      },
      past: {
        yo: { es: "Yo decidí quedarme", ru: "Я решил остаться" },
        tú: { es: "Tú decidiste quedarte", ru: "Ты решил остаться" },
        él: { es: "Él decidió quedarse", ru: "Он решил остаться" },
        nosotros: { es: "Nosotros decidimos quedarnos", ru: "Мы решили остаться" },
        vosotros: { es: "Vosotros decidisteis quedaros", ru: "Вы решили остаться" },
        ellos: { es: "Ellos decidieron quedarse", ru: "Они решили остаться" }
      },
      future: {
        yo: { es: "Yo decidiré quedarme", ru: "Я решу остаться" },
        tú: { es: "Tú decidirás quedarte", ru: "Ты решишь остаться" },
        él: { es: "Él decidirá quedarse", ru: "Он решит остаться" },
        nosotros: { es: "Nosotros decidiremos quedarnos", ru: "Мы решим остаться" },
        vosotros: { es: "Vosotros decidiréis quedaros", ru: "Вы решите остаться" },
        ellos: { es: "Elos decidirán quedarse", ru: "Они решат остаться" }
      }
    }
  },
  {
    id: 660,
    word: "elegir",
    translation: "выбирать",
    category: "verbs",
    type: "глагол",
    popularity: 660,
    examples: {
      present: {
        yo: { es: "Yo elijo la opción A", ru: "Я выбираю вариант А" },
        tú: { es: "Tú eliges la opción A", ru: "Ты выбираешь вариант А" },
        él: { es: "Él elige la opción A", ru: "Он выбирает вариант А" },
        nosotros: { es: "Nosotros elegimos la opción A", ru: "Мы выбираем вариант А" },
        vosotros: { es: "Vosotros elegís la opción A", ru: "Вы выбираете вариант А" },
        ellos: { es: "Ellos eligen la opción A", ru: "Они выбирают вариант А" }
      },
      past: {
        yo: { es: "Yo elegí la opción A", ru: "Я выбрал вариант А" },
        tú: { es: "Tú elegiste la opción A", ru: "Ты выбрал вариант А" },
        él: { es: "Él eligió la opción A", ru: "Он выбрал вариант А" },
        nosotros: { es: "Nosotros elegimos la opción A", ru: "Мы выбрали вариант А" },
        vosotros: { es: "Vosotros elegisteis la opción A", ru: "Вы выбрали вариант А" },
        ellos: { es: "Ellos eligieron la opción A", ru: "Они выбрали вариант А" }
      },
      future: {
        yo: { es: "Yo elegiré la opción A", ru: "Я выберу вариант А" },
        tú: { es: "Tú elegirás la opción A", ru: "Ты выберешь вариант А" },
        él: { es: "Él elegirá la opción A", ru: "Он выберет вариант А" },
        nosotros: { es: "Nosotros elegiremos la opción A", ru: "Мы выберем вариант А" },
        vosotros: { es: "Vosotros elegiréis la opción A", ru: "Вы выберете вариант А" },
        ellos: { es: "Elios elegirán la opción A", ru: "Они выберут вариант А" }
      }
    }
  },
  {
    id: 661,
    word: "responder",
    translation: "отвечать",
    category: "verbs",
    type: "глагол",
    popularity: 661,
    examples: {
      present: {
        yo: { es: "Yo respondo la pregunta", ru: "Я отвечаю на вопрос" },
        tú: { es: "Tú respondes la pregunta", ru: "Ты отвечаешь на вопрос" },
        él: { es: "Él responde la pregunta", ru: "Он отвечает на вопрос" },
        nosotros: { es: "Nosotros respondemos la pregunta", ru: "Мы отвечаем на вопрос" },
        vosotros: { es: "Vosotros respondéis la pregunta", ru: "Вы отвечаете на вопрос" },
        ellos: { es: "Ellos responden la pregunta", ru: "Они отвечают на вопрос" }
      },
      past: {
        yo: { es: "Yo respondí la pregunta", ru: "Я ответил на вопрос" },
        tú: { es: "Tú respondiste la pregunta", ru: "Ты ответил на вопрос" },
        él: { es: "Él respondió la pregunta", ru: "Он ответил на вопрос" },
        nosotros: { es: "Nosotros respondimos la pregunta", ru: "Мы ответили на вопрос" },
        vosotros: { es: "Vosotros respondisteis la pregunta", ru: "Вы ответили на вопрос" },
        ellos: { es: "Elios respondieron la pregunta", ru: "Они ответили на вопрос" }
      },
      future: {
        yo: { es: "Yo responderé la pregunta", ru: "Я отвечу на вопрос" },
        tú: { es: "Tú responderás la pregunta", ru: "Ты ответишь на вопрос" },
        él: { es: "Él responderá la pregunta", ru: "Он ответит на вопрос" },
        nosotros: { es: "Nosotros responderemos la pregunta", ru: "Мы ответим на вопрос" },
        vosotros: { es: "Vosotros responderéis la pregunta", ru: "Вы ответите на вопрос" },
        ellos: { es: "Elios responderán la pregunta", ru: "Они ответят на вопрос" }
      }
    }
  },
  {
    id: 662,
    word: "añadir",
    translation: "добавлять",
    category: "verbs",
    type: "глагол",
    popularity: 662,
    examples: {
      present: {
        yo: { es: "Yo añado sal", ru: "Я добавляю соль" },
        tú: { es: "Tú añades sal", ru: "Ты добавляешь соль" },
        él: { es: "Él añade sal", ru: "Он добавляет соль" },
        nosotros: { es: "Nosotros añadimos sal", ru: "Мы добавляем соль" },
        vosotros: { es: "Vosotros añadís sal", ru: "Вы добавляете соль" },
        ellos: { es: "Elios añaden sal", ru: "Они добавляют соль" }
      },
      past: {
        yo: { es: "Yo añadí sal", ru: "Я добавил соль" },
        tú: { es: "Tú añadiste sal", ru: "Ты добавил соль" },
        él: { es: "Él añadió sal", ru: "Он добавил соль" },
        nosotros: { es: "Nosotros añadimos sal", ru: "Мы добавили соль" },
        vosotros: { es: "Vosotros añadisteis sal", ru: "Вы добавили соль" },
        ellos: { es: "Elios añadieron sal", ru: "Они добавили соль" }
      },
      future: {
        yo: { es: "Yo añadiré sal", ru: "Я добавлю соль" },
        tú: { es: "Tú añadirás sal", ru: "Ты добавишь соль" },
        él: { es: "Él añadirá sal", ru: "Он добавит соль" },
        nosotros: { es: "Nosotros añadiremos sal", ru: "Мы добавим соль" },
        vosotros: { es: "Vosotros añadiréis sal", ru: "Вы добавите соль" },
        ellos: { es: "Elios añadirán sal", ru: "Они добавят соль" }
      }
    }
  },
  {
    id: 663,
    word: "comprar",
    translation: "покупать",
    category: "verbs",
    type: "глагол",
    popularity: 663,
    examples: {
      present: {
        yo: { es: "Yo compro pan", ru: "Я покупаю хлеб" },
        tú: { es: "Tú compras pan", ru: "Ты покупаешь хлеб" },
        él: { es: "Él compra pan", ru: "Он покупает хлеб" },
        nosotros: { es: "Nosotros compramos pan", ru: "Мы покупаем хлеб" },
        vosotros: { es: "Vosotros compráis pan", ru: "Вы покупаете хлеб" },
        ellos: { es: "Elios compran pan", ru: "Они покупают хлеб" }
      },
      past: {
        yo: { es: "Yo compré pan", ru: "Я купил хлеб" },
        tú: { es: "Tú compraste pan", ru: "Ты купил хлеб" },
        él: { es: "Él compró pan", ru: "Он купил хлеб" },
        nosotros: { es: "Nosotros compramos pan", ru: "Мы купили хлеб" },
        vosotros: { es: "Vosotros comprasteis pan", ru: "Вы купили хлеб" },
        ellos: { es: "Elios compraron pan", ru: "Они купили хлеб" }
      },
      future: {
        yo: { es: "Yo compraré pan", ru: "Я куплю хлеб" },
        tú: { es: "Tú comprarás pan", ru: "Ты купишь хлеб" },
        él: { es: "Él comprará pan", ru: "Он купит хлеб" },
        nosotros: { es: "Nosotros compraremos pan", ru: "Мы купим хлеб" },
        vosotros: { es: "Vosotros compraréis pan", ru: "Вы купите хлеб" },
        ellos: { es: "Elios comprarán pan", ru: "Они купят хлеб" }
      }
    }
  },
  {
    id: 664,
    word: "construir",
    translation: "строить",
    category: "verbs",
    type: "глагол",
    popularity: 664,
    examples: {
      present: {
        yo: { es: "Yo construyo una casa", ru: "Я строю дом" },
        tú: { es: "Tú construyes una casa", ru: "Ты строишь дом" },
        él: { es: "Él construye una casa", ru: "Он строит дом" },
        nosotros: { es: "Nosotros construimos una casa", ru: "Мы строим дом" },
        vosotros: { es: "Vosotros construís una casa", ru: "Вы строите дом" },
        ellos: { es: "Elios construyen una casa", ru: "Они строят дом" }
      },
      past: {
        yo: { es: "Yo construí una casa", ru: "Я построил дом" },
        tú: { es: "Tú construiste una casa", ru: "Ты построил дом" },
        él: { es: "Él construyó una casa", ru: "Он построил дом" },
        nosotros: { es: "Nosotros construimos una casa", ru: "Мы построили дом" },
        vosotros: { es: "Vosotros construisteis una casa", ru: "Вы построили дом" },
        ellos: { es: "Elios construyeron una casa", ru: "Они построили дом" }
      },
      future: {
        yo: { es: "Yo construiré una casa", ru: "Я построю дом" },
        tú: { es: "Tú construirás una casa", ru: "Ты построишь дом" },
        él: { es: "Él construirá una casa", ru: "Он построит дом" },
        nosotros: { es: "Nosotros construiremos una casa", ru: "Мы построим дом" },
        vosotros: { es: "Vosotros construiréis una casa", ru: "Вы построите дом" },
        ellos: { es: "Elios construirán una casa", ru: "Они построят дом" }
      }
    }
  },
  {
    id: 665,
    word: "permanecer",
    translation: "оставаться",
    category: "verbs",
    type: "глагол",
    popularity: 665,
    examples: {
      present: {
        yo: { es: "Yo permanezco aquí", ru: "Я остаюсь здесь" },
        tú: { es: "Tú permaneces aquí", ru: "Ты остаёшься здесь" },
        él: { es: "Él permanece aquí", ru: "Он остаётся здесь" },
        nosotros: { es: "Nosotros permanecemos aquí", ru: "Мы остаёмся здесь" },
        vosotros: { es: "Vosotros permanecéis aquí", ru: "Вы остаётесь здесь" },
        ellos: { es: "Elios permanecen aquí", ru: "Они остаются здесь" }
      },
      past: {
        yo: { es: "Yo permanecí aquí", ru: "Я остался здесь" },
        tú: { es: "Tú permaneciste aquí", ru: "Ты остался здесь" },
        él: { es: "Él permaneció aquí", ru: "Он остался здесь" },
        nosotros: { es: "Nosotros permanecimos aquí", ru: "Мы остались здесь" },
        vosotros: { es: "Vosotros permanecisteis aquí", ru: "Вы остались здесь" },
        ellos: { es: "Elios permanecieron aquí", ru: "Они остались здесь" }
      },
      future: {
        yo: { es: "Yo permaneceré aquí", ru: "Я останусь здесь" },
        tú: { es: "Tú permanecerás aquí", ru: "Ты останешься здесь" },
        él: { es: "Él permanecerá aquí", ru: "Он останется здесь" },
        nosotros: { es: "Nosotros permaneceremos aquí", ru: "Мы останемся здесь" },
        vosotros: { es: "Vosotros permaneceréis aquí", ru: "Вы останетесь здесь" },
        ellos: { es: "Elios permanecerán aquí", ru: "Они останутся здесь" }
      }
    }
  },
  {
    id: 666,
    word: "afirmar",
    translation: "утверждать",
    category: "verbs",
    type: "глагол",
    popularity: 666,
    examples: {
      present: {
        yo: { es: "Yo afirmo que es verdad", ru: "Я утверждаю, что это правда" },
        tú: { es: "Tú afirmas que es verdad", ru: "Ты утверждаешь, что это правда" },
        él: { es: "Él afirma que es verdad", ru: "Он утверждает, что это правда" },
        nosotros: { es: "Nosotros afirmamos que es verdad", ru: "Мы утверждаем, что это правда" },
        vosotros: { es: "Vosotros afirmáis que es verdad", ru: "Вы утверждаете, что это правда" },
        ellos: { es: "Elios afirman que es verdad", ru: "Они утверждают, что это правда" }
      },
      past: {
        yo: { es: "Yo afirmé que es verdad", ru: "Я утверждал, что это правда" },
        tú: { es: "Tú afirmaste que es verdad", ru: "Ты утверждал, что это правда" },
        él: { es: "Él afirmó que es verdad", ru: "Он утверждал, что это правда" },
        nosotros: { es: "Nosotros afirmamos que es verdad", ru: "Мы утверждали, что это правда" },
        vosotros: { es: "Vosotros afirmasteis que es verdad", ru: "Вы утверждали, что это правда" },
        ellos: { es: "Elios afirmaron que es verdad", ru: "Они утверждали, что это правда" }
      },
      future: {
        yo: { es: "Yo afirmaré que es verdad", ru: "Я буду утверждать, что это правда" },
        tú: { es: "Tú afirmarás que es verdad", ru: "Ты будешь утверждать, что это правда" },
        él: { es: "Él afirmará que es verdad", ru: "Он будет утверждать, что это правда" },
        nosotros: { es: "Nosotros afirmaremos que es verdad", ru: "Мы будем утверждать, что это правда" },
        vosotros: { es: "Vosotros afirmaréis que es verdad", ru: "Вы будете утверждать, что это правда" },
        ellos: { es: "Elios afirmarán que es verdad", ru: "Они будут утверждать, что это правда" }
      }
    }
  },
  {
    id: 667,
    word: "caminar",
    translation: "ходить",
    category: "verbs",
    type: "глагол",
    popularity: 667,
    examples: {
      present: {
        yo: { es: "Yo camino por la calle", ru: "Я иду по улице" },
        tú: { es: "Tú caminas por la calle", ru: "Ты идёшь по улице" },
        él: { es: "Él camina por la calle", ru: "Он идёт по улице" },
        nosotros: { es: "Nosotros caminamos por la calle", ru: "Мы идём по улице" },
        vosotros: { es: "Vosotros camináis por la calle", ru: "Вы идёте по улице" },
        ellos: { es: "Elios caminan por la calle", ru: "Они идут по улице" }
      },
      past: {
        yo: { es: "Yo caminé por la calle", ru: "Я шёл по улице" },
        tú: { es: "Tú caminaste por la calle", ru: "Ты шёл по улице" },
        él: { es: "Él caminó por la calle", ru: "Он шёл по улице" },
        nosotros: { es: "Nosotros caminamos por la calle", ru: "Мы шли по улице" },
        vosotros: { es: "Vosotros caminasteis por la calle", ru: "Вы шли по улице" },
        ellos: { es: "Elios caminaron por la calle", ru: "Они шли по улице" }
      },
      future: {
        yo: { es: "Yo caminaré por la calle", ru: "Я пойду по улице" },
        tú: { es: "Tú caminarás por la calle", ru: "Ты пойдёшь по улице" },
        él: { es: "Él caminará por la calle", ru: "Он пойдёт по улице" },
        nosotros: { es: "Nosotros caminaremos por la calle", ru: "Мы пойдём по улице" },
        vosotros: { es: "Vosotros caminaréis por la calle", ru: "Вы пойдёте по улице" },
        ellos: { es: "Elios caminarán por la calle", ru: "Они пойдут по улице" }
      }
    }
  },
  {
    id: 668,
    word: "beber",
    translation: "пить",
    category: "verbs",
    type: "глагол",
    popularity: 668,
    examples: {
      present: {
        yo: { es: "Yo bebo agua", ru: "Я пью воду" },
        tú: { es: "Tú bebes agua", ru: "Ты пьёшь воду" },
        él: { es: "Él bebe agua", ru: "Он пьёт воду" },
        nosotros: { es: "Nosotros bebemos agua", ru: "Мы пьём воду" },
        vosotros: { es: "Vosotros bebéis agua", ru: "Вы пьёте воду" },
        ellos: { es: "Elios beben agua", ru: "Они пьют воду" }
      },
      past: {
        yo: { es: "Yo bebí agua", ru: "Я пил воду" },
        tú: { es: "Tú bebiste agua", ru: "Ты пил воду" },
        él: { es: "Él bebió agua", ru: "Он пил воду" },
        nosotros: { es: "Nosotros bebimos agua", ru: "Мы пили воду" },
        vosotros: { es: "Vosotros bebisteis agua", ru: "Вы пили воду" },
        ellos: { es: "Elios bebieron agua", ru: "Они пили воду" }
      },
      future: {
        yo: { es: "Yo beberé agua", ru: "Я буду пить воду" },
        tú: { es: "Tú beberás agua", ru: "Ты будешь пить воду" },
        él: { es: "Él beberá agua", ru: "Он будет пить воду" },
        nosotros: { es: "Nosotros beberemos agua", ru: "Мы будем пить воду" },
        vosotros: { es: "Vosotros beberéis agua", ru: "Вы будете пить воду" },
        ellos: { es: "Elios beberán agua", ru: "Они будут пить воду" }
      }
    }
  },
  {
    id: 669,
    word: "comer",
    translation: "есть",
    category: "verbs",
    type: "глагол",
    popularity: 669,
    examples: {
      present: {
        yo: { es: "Yo como frutas", ru: "Я ем фрукты" },
        tú: { es: "Tú comes frutas", ru: "Ты ешь фрукты" },
        él: { es: "Él come frutas", ru: "Он ест фрукты" },
        nosotros: { es: "Nosotros comemos frutas", ru: "Мы едим фрукты" },
        vosotros: { es: "Vosotros coméis frutas", ru: "Вы едите фрукты" },
        ellos: { es: "Elios comen frutas", ru: "Они едят фрукты" }
      },
      past: {
        yo: { es: "Yo comí frutas", ru: "Я ел фрукты" },
        tú: { es: "Tú comiste frutas", ru: "Ты ел фрукты" },
        él: { es: "Él comió frutas", ru: "Он ел фрукты" },
        nosotros: { es: "Nosotros comimos frutas", ru: "Мы ели фрукты" },
        vosotros: { es: "Vosotros comisteis frutas", ru: "Вы ели фрукты" },
        ellos: { es: "Elios comieron frutas", ru: "Они ели фрукты" }
      },
      future: {
        yo: { es: "Yo comeré frutas", ru: "Я буду есть фрукты" },
        tú: { es: "Tú comerás frutas", ru: "Ты будешь есть фрукты" },
        él: { es: "Él comerá frutas", ru: "Он будет есть фрукты" },
        nosotros: { es: "Nosotros comeremos frutas", ru: "Мы будем есть фрукты" },
        vosotros: { es: "Vosotros comeréis frutas", ru: "Вы будете есть фрукты" },
        ellos: { es: "Elios comerán frutas", ru: "Они будут есть фрукты" }
      }
    }
  },
  {
    id: 670,
    word: "reír",
    translation: "смеяться",
    category: "verbs",
    type: "глагол",
    popularity: 670,
    examples: {
      present: {
        yo: { es: "Yo río mucho", ru: "Я много смеюсь" },
        tú: { es: "Tú ríes mucho", ru: "Ты много смеёшься" },
        él: { es: "Él ríe mucho", ru: "Он много смеётся" },
        nosotros: { es: "Nosotros reímos mucho", ru: "Мы много смеёмся" },
        vosotros: { es: "Vosotros reís mucho", ru: "Вы много смеётесь" },
        ellos: { es: "Elios ríen mucho", ru: "Они много смеются" }
      },
      past: {
        yo: { es: "Yo reí mucho", ru: "Я много смеялся" },
        tú: { es: "Tú reíste mucho", ru: "Ты много смеялся" },
        él: { es: "Él rio mucho", ru: "Он много смеялся" },
        nosotros: { es: "Nosotros reímos mucho", ru: "Мы много смеялись" },
        vosotros: { es: "Vosotros reísteis mucho", ru: "Вы много смеялись" },
        ellos: { es: "Elios rieron mucho", ru: "Они много смеялись" }
      },
      future: {
        yo: { es: "Yo reiré mucho", ru: "Я буду много смеяться" },
        tú: { es: "Tú reirás mucho", ru: "Ты будешь много смеяться" },
        él: { es: "Él reirá mucho", ru: "Он будет много смеяться" },
        nosotros: { es: "Nosotros reiremos mucho", ru: "Мы будем много смеяться" },
        vosotros: { es: "Vosotros reiréis mucho", ru: "Вы будете много смеяться" },
        ellos: { es: "Elios reirán mucho", ru: "Они будут много смеяться" }
      }
    }
  },
  {
    id: 671,
    word: "llorar",
    translation: "плакать",
    category: "verbs",
    type: "глагол",
    popularity: 671,
    examples: {
      present: {
        yo: { es: "Yo lloro mucho", ru: "Я много плачу" },
        tú: { es: "Tú lloras mucho", ru: "Ты много плачешь" },
        él: { es: "Él llora mucho", ru: "Он много плачет" },
        nosotros: { es: "Nosotros lloramos mucho", ru: "Мы много плачем" },
        vosotros: { es: "Vosotros lloráis mucho", ru: "Вы много плачете" },
        ellos: { es: "Ellos lloran mucho", ru: "Они много плачут" }
      },
      past: {
        yo: { es: "Yo lloré mucho", ru: "Я много плакал" },
        tú: { es: "Tú lloraste mucho", ru: "Ты много плакал" },
        él: { es: "Él lloró mucho", ru: "Он много плакал" },
        nosotros: { es: "Nosotros lloramos mucho", ru: "Мы много плакали" },
        vosotros: { es: "Vosotros llorasteis mucho", ru: "Вы много плакали" },
        ellos: { es: "Ellos lloraron mucho", ru: "Они много плакали" }
      },
      future: {
        yo: { es: "Yo lloraré mucho", ru: "Я буду много плакать" },
        tú: { es: "Tú llorarás mucho", ru: "Ты будешь много плакать" },
        él: { es: "Él llorará mucho", ru: "Он будет много плакать" },
        nosotros: { es: "Nosotros lloraremos mucho", ru: "Мы будем много плакать" },
        vosotros: { es: "Vosotros lloraréis mucho", ru: "Вы будете много плакать" },
        ellos: { es: "Ellos llorarán mucho", ru: "Они будут много плакать" }
      }
    }
  },
  {
    id: 672,
    word: "amar",
    translation: "любить",
    category: "verbs",
    type: "глагол",
    popularity: 672,
    examples: {
      present: {
        yo: { es: "Yo amo a mi familia", ru: "Я люблю свою семью" },
        tú: { es: "Tú amas a tu familia", ru: "Ты любишь свою семью" },
        él: { es: "Él ama a su familia", ru: "Он любит свою семью" },
        nosotros: { es: "Nosotros amamos a nuestras familias", ru: "Мы любим наши семьи" },
        vosotros: { es: "Vosotros amáis a vuestras familias", ru: "Вы любите ваши семьи" },
        ellos: { es: "Ellos aman a sus familias", ru: "Они любят свои семьи" }
      },
      past: {
        yo: { es: "Yo amé a mi familia", ru: "Я любил свою семью" },
        tú: { es: "Tú amaste a tu familia", ru: "Ты любил свою семью" },
        él: { es: "Él amó a su familia", ru: "Он любил свою семью" },
        nosotros: { es: "Nosotros amamos a nuestras familias", ru: "Мы любили наши семьи" },
        vosotros: { es: "Vosotros amasteis a vuestras familias", ru: "Вы любили ваши семьи" },
        ellos: { es: "Ellos amaron a sus familias", ru: "Они любили свои семьи" }
      },
      future: {
        yo: { es: "Yo amaré a mi familia", ru: "Я буду любить свою семью" },
        tú: { es: "Tú amarás a tu familia", ru: "Ты будешь любить свою семью" },
        él: { es: "Él amará a su familia", ru: "Он будет любить свою семью" },
        nosotros: { es: "Nosotros amaremos a nuestras familias", ru: "Мы будем любить наши семьи" },
        vosotros: { es: "Vosotros amaréis a vuestras familias", ru: "Вы будете любить ваши семьи" },
        ellos: { es: "Ellos amarán a sus familias", ru: "Они будут любить свои семьи" }
      }
    }
  },
  {
    id: 673,
    word: "odiar",
    translation: "ненавидеть",
    category: "verbs",
    type: "глагол",
    popularity: 673,
    examples: {
      present: {
        yo: { es: "Yo odio la mentira", ru: "Я ненавижу ложь" },
        tú: { es: "Tú odias la mentira", ru: "Ты ненавидишь ложь" },
        él: { es: "Él odia la mentira", ru: "Он ненавидит ложь" },
        nosotros: { es: "Nosotros odiamos la mentira", ru: "Мы ненавидим ложь" },
        vosotros: { es: "Vosotros odiáis la mentira", ru: "Вы ненавидите ложь" },
        ellos: { es: "Ellos odian la mentira", ru: "Они ненавидят ложь" }
      },
      past: {
        yo: { es: "Yo odié la mentira", ru: "Я ненавидел ложь" },
        tú: { es: "Tú odiaste la mentira", ru: "Ты ненавидел ложь" },
        él: { es: "Él odió la mentira", ru: "Он ненавидел ложь" },
        nosotros: { es: "Nosotros odiamos la mentira", ru: "Мы ненавидели ложь" },
        vosotros: { es: "Vosotros odiasteis la mentira", ru: "Вы ненавидели ложь" },
        ellos: { es: "Elios odiaron la mentira", ru: "Они ненавидели ложь" }
      },
      future: {
        yo: { es: "Yo odiaré la mentira", ru: "Я буду ненавидеть ложь" },
        tú: { es: "Tú odiarás la mentira", ru: "Ты будешь ненавидеть ложь" },
        él: { es: "Él odiará la mentira", ru: "Он будет ненавидеть ложь" },
        nosotros: { es: "Nosotros odiaremos la mentira", ru: "Мы будем ненавидеть ложь" },
        vosotros: { es: "Vosotros odiaréis la mentira", ru: "Вы будете ненавидеть ложь" },
        ellos: { es: "Elios odiarán la mentira", ru: "Они будут ненавидеть ложь" }
      }
    }
  },
  {
    id: 674,
    word: "quedarse",
    translation: "оставаться",
    category: "verbs",
    type: "глагол",
    popularity: 674,
    examples: {
      present: {
        yo: { es: "Yo me quedo en casa", ru: "Я остаюсь дома" },
        tú: { es: "Tú te quedas en casa", ru: "Ты остаёшься дома" },
        él: { es: "Él se queda en casa", ru: "Он остаётся дома" },
        nosotros: { es: "Nosotros nos quedamos en casa", ru: "Мы остаёмся дома" },
        vosotros: { es: "Vosotros os quedáis en casa", ru: "Вы остаётесь дома" },
        ellos: { es: "Ellos se quedan en casa", ru: "Они остаются дома" }
      },
      past: {
        yo: { es: "Yo me quedé en casa", ru: "Я остался дома" },
        tú: { es: "Tú te quedaste en casa", ru: "Ты остался дома" },
        él: { es: "Él se quedó en casa", ru: "Он остался дома" },
        nosotros: { es: "Nosotros nos quedamos en casa", ru: "Мы остались дома" },
        vosotros: { es: "Vosotros os quedasteis en casa", ru: "Вы остались дома" },
        ellos: { es: "Elios se quedaron en casa", ru: "Они остались дома" }
      },
      future: {
        yo: { es: "Yo me quedaré en casa", ru: "Я останусь дома" },
        tú: { es: "Tú te quedarás en casa", ru: "Ты останешься дома" },
        él: { es: "Él se quedará en casa", ru: "Он останется дома" },
        nosotros: { es: "Nosotros nos quedaremos en casa", ru: "Мы останемся дома" },
        vosotros: { es: "Vosotros os quedaréis en casa", ru: "Вы останетесь дома" },
        ellos: { es: "Elios se quedarán en casa", ru: "Они останутся дома" }
      }
    }
  },
  {
    id: 675,
    word: "quitar",
    translation: "убирать",
    category: "verbs",
    type: "глагол",
    popularity: 675,
    examples: {
      present: {
        yo: { es: "Yo quito la mesa", ru: "Я убираю со стола" },
        tú: { es: "Tú quitas la mesa", ru: "Ты убираешь со стола" },
        él: { es: "Él quita la mesa", ru: "Он убирает со стола" },
        nosotros: { es: "Nosotros quitamos la mesa", ru: "Мы убираем со стола" },
        vosotros: { es: "Vosotros quitáis la mesa", ru: "Вы убираете со стола" },
        ellos: { es: "Elios quitan la mesa", ru: "Они убирают со стола" }
      },
      past: {
        yo: { es: "Yo quité la mesa", ru: "Я убрал со стола" },
        tú: { es: "Tú quitaste la mesa", ru: "Ты убрал со стола" },
        él: { es: "Él quitó la mesa", ru: "Он убрал со стола" },
        nosotros: { es: "Nosotros quitamos la mesa", ru: "Мы убрали со стола" },
        vosotros: { es: "Vosotros quitasteis la mesa", ru: "Вы убрали со стола" },
        ellos: { es: "Elios quitaron la mesa", ru: "Они убрали со стола" }
      },
      future: {
        yo: { es: "Yo quitaré la mesa", ru: "Я уберу со стола" },
        tú: { es: "Tú quitarás la mesa", ru: "Ты уберёшь со стола" },
        él: { es: "Él quitará la mesa", ru: "Он уберёт со стола" },
        nosotros: { es: "Nosotros quitaremos la mesa", ru: "Мы уберём со стола" },
        vosotros: { es: "Vosotros quitaréis la mesa", ru: "Вы уберёте со стола" },
        ellos: { es: "Elios quitarán la mesa", ru: "Они уберут со стола" }
      }
    }
  },
  {
    id: 676,
    word: "descansar",
    translation: "отдыхать",
    category: "verbs",
    type: "глагол",
    popularity: 676,
    examples: {
      present: {
        yo: { es: "Yo descanso un poco", ru: "Я немного отдыхаю" },
        tú: { es: "Tú descansas un poco", ru: "Ты немного отдыхаешь" },
        él: { es: "Él descansa un poco", ru: "Он немного отдыхает" },
        nosotros: { es: "Nosotros descansamos un poco", ru: "Мы немного отдыхаем" },
        vosotros: { es: "Vosotros descansáis un poco", ru: "Вы немного отдыхаете" },
        ellos: { es: "Elios descansan un poco", ru: "Они немного отдыхают" }
      },
      past: {
        yo: { es: "Yo descansé un poco", ru: "Я немного отдохнул" },
        tú: { es: "Tú descansaste un poco", ru: "Ты немного отдохнул" },
        él: { es: "Él descansó un poco", ru: "Он немного отдохнул" },
        nosotros: { es: "Nosotros descansamos un poco", ru: "Мы немного отдохнули" },
        vosotros: { es: "Vosotros descansasteis un poco", ru: "Вы немного отдохнули" },
        ellos: { es: "Elios descansaron un poco", ru: "Они немного отдохнули" }
      },
      future: {
        yo: { es: "Yo descansaré un poco", ru: "Я немного отдохну" },
        tú: { es: "Tú descansarás un poco", ru: "Ты немного отдохнешь" },
        él: { es: "Él descansará un poco", ru: "Он немного отдохнет" },
        nosotros: { es: "Nosotros descansaremos un poco", ru: "Мы немного отдохнём" },
        vosotros: { es: "Vosotros descansaréis un poco", ru: "Вы немного отдохнёте" },
        ellos: { es: "Elios descansarán un poco", ru: "Они немного отдохнут" }
      }
    }
  },
  {
    id: 677,
    word: "crecer",
    translation: "расти",
    category: "verbs",
    type: "глагол",
    popularity: 677,
    examples: {
      present: {
        yo: { es: "Yo crezco rápido", ru: "Я быстро расту" },
        tú: { es: "Tú creces rápido", ru: "Ты быстро растёшь" },
        él: { es: "Él crece rápido", ru: "Он быстро растёт" },
        nosotros: { es: "Nosotros crecemos rápido", ru: "Мы быстро растём" },
        vosotros: { es: "Vosotros crecéis rápido", ru: "Вы быстро растёте" },
        ellos: { es: "Elios crecen rápido", ru: "Они быстро растут" }
      },
      past: {
        yo: { es: "Yo crecí rápido", ru: "Я быстро рос" },
        tú: { es: "Tú creciste rápido", ru: "Ты быстро рос" },
        él: { es: "Él creció rápido", ru: "Он быстро рос" },
        nosotros: { es: "Nosotros crecimos rápido", ru: "Мы быстро росли" },
        vosotros: { es: "Vosotros crecisteis rápido", ru: "Вы быстро росли" },
        ellos: { es: "Elios crecieron rápido", ru: "Они быстро росли" }
      },
      future: {
        yo: { es: "Yo creceré rápido", ru: "Я быстро вырасту" },
        tú: { es: "Tú crecerás rápido", ru: "Ты быстро вырастешь" },
        él: { es: "Él crecerá rápido", ru: "Он быстро вырастет" },
        nosotros: { es: "Nosotros creceremos rápido", ru: "Мы быстро вырастем" },
        vosotros: { es: "Vosotros creceréis rápido", ru: "Вы быстро вырастете" },
        ellos: { es: "Elios crecerán rápido", ru: "Они быстро вырастут" }
      }
    }
  },
  {
    id: 678,
    word: "fallar",
    translation: "терпеть неудачу",
    category: "verbs",
    type: "глагол",
    popularity: 678,
    examples: {
      present: {
        yo: { es: "Yo fallo en el intento", ru: "Я терплю неудачу в попытке" },
        tú: { es: "Tú fallas en el intento", ru: "Ты терпишь неудачу в попытке" },
        él: { es: "Él falla en el intento", ru: "Он терпит неудачу в попытке" },
        nosotros: { es: "Nosotros fallamos en el intento", ru: "Мы терпим неудачу в попытке" },
        vosotros: { es: "Vosotros falláis en el intento", ru: "Вы терпите неудачу в попытке" },
        ellos: { es: "Elios fallan en el intento", ru: "Они терпят неудачу в попытке" }
      },
      past: {
        yo: { es: "Yo fallé en el intento", ru: "Я потерпел неудачу в попытке" },
        tú: { es: "Tú fallaste en el intento", ru: "Ты потерпел неудачу в попытке" },
        él: { es: "Él falló en el intento", ru: "Он потерпел неудачу в попытке" },
        nosotros: { es: "Nosotros fallamos en el intento", ru: "Мы потерпели неудачу в попытке" },
        vosotros: { es: "Vosotros fallasteis en el intento", ru: "Вы потерпели неудачу в попытке" },
        ellos: { es: "Elios fallaron en el intento", ru: "Они потерпели неудачу в попытке" }
      },
      future: {
        yo: { es: "Yo fallaré en el intento", ru: "Я потерплю неудачу в попытке" },
        tú: { es: "Tú fallarás en el intento", ru: "Ты потерпишь неудачу в попытке" },
        él: { es: "Él fallará en el intento", ru: "Он потерпит неудачу в попытке" },
        nosotros: { es: "Nosotros fallaremos en el intento", ru: "Мы потерпим неудачу в попытке" },
        vosotros: { es: "Vosotros fallaréis en el intento", ru: "Вы потерпите неудачу в попытке" },
        ellos: { es: "Elios fallarán en el intento", ru: "Они потерпят неудачу в попытке" }
      }
    }
  },
  {
    id: 679,
    word: "arreglar",
    translation: "чинить",
    category: "verbs",
    type: "глагол",
    popularity: 679,
    examples: {
      present: {
        yo: { es: "Yo arreglo el coche", ru: "Я чиню машину" },
        tú: { es: "Tú arreglas el coche", ru: "Ты чинишь машину" },
        él: { es: "Él arregla el coche", ru: "Он чинит машину" },
        nosotros: { es: "Nosotros arreglamos el coche", ru: "Мы чиним машину" },
        vosotros: { es: "Vosotros arregláis el coche", ru: "Вы чините машину" },
        ellos: { es: "Elios arreglan el coche", ru: "Они чинят машину" }
      },
      past: {
        yo: { es: "Yo arreglé el coche", ru: "Я починил машину" },
        tú: { es: "Tú arreglaste el coche", ru: "Ты починил машину" },
        él: { es: "Él arregló el coche", ru: "Он починил машину" },
        nosotros: { es: "Nosotros arreglamos el coche", ru: "Мы починили машину" },
        vosotros: { es: "Vosotros arreglasteis el coche", ru: "Вы починили машину" },
        ellos: { es: "Elios arreglaron el coche", ru: "Они починили машину" }
      },
      future: {
        yo: { es: "Yo arreglaré el coche", ru: "Я починю машину" },
        tú: { es: "Tú arreglarás el coche", ru: "Ты починишь машину" },
        él: { es: "Él arreglará el coche", ru: "Он починит машину" },
        nosotros: { es: "Nosotros arreglaremos el coche", ru: "Мы починим машину" },
        vosotros: { es: "Vosotros arreglaréis el coche", ru: "Вы почините машину" },
        ellos: { es: "Elios arreglarán el coche", ru: "Они починят машину" }
      }
    }
  },
  {
    id: 680,
    word: "establecer",
    translation: "устанавливать",
    category: "verbs",
    type: "глагол",
    popularity: 680,
    examples: {
      present: {
        yo: { es: "Yo establezco las reglas", ru: "Я устанавливаю правила" },
        tú: { es: "Tú estableces las reglas", ru: "Ты устанавливаешь правила" },
        él: { es: "Él establece las reglas", ru: "Он устанавливает правила" },
        nosotros: { es: "Nosotros establecemos las reglas", ru: "Мы устанавливаем правила" },
        vosotros: { es: "Vosotros establecéis las reglas", ru: "Вы устанавливаете правила" },
        ellos: { es: "Ellos establecen las reglas", ru: "Они устанавливают правила" }
      },
      past: {
        yo: { es: "Yo establecí las reglas", ru: "Я установил правила" },
        tú: { es: "Tú estableciste las reglas", ru: "Ты установил правила" },
        él: { es: "Él estableció las reglas", ru: "Он установил правила" },
        nosotros: { es: "Nosotros establecimos las reglas", ru: "Мы установили правила" },
        vosotros: { es: "Vosotros establecisteis las reglas", ru: "Вы установили правила" },
        ellos: { es: "Ellos establecieron las reglas", ru: "Они установили правила" }
      },
      future: {
        yo: { es: "Yo estableceré las reglas", ru: "Я установлю правила" },
        tú: { es: "Tú establecerás las reglas", ru: "Ты установишь правила" },
        él: { es: "Él establecerá las reglas", ru: "Он установит правила" },
        nosotros: { es: "Nosotros estableceremos las reglas", ru: "Мы установим правила" },
        vosotros: { es: "Vosotros estableceréis las reglas", ru: "Вы установите правила" },
        ellos: { es: "Elios establecerán las reglas", ru: "Они установят правила" }
      }
    }
  },
  {
    id: 681,
    word: "sufrir",
    translation: "страдать",
    category: "verbs",
    type: "глагол",
    popularity: 681,
    examples: {
      present: {
        yo: { es: "Yo sufro dolor", ru: "Я страдаю от боли" },
        tú: { es: "Tú sufres dolor", ru: "Ты страдаешь от боли" },
        él: { es: "Él sufre dolor", ru: "Он страдает от боли" },
        nosotros: { es: "Nosotros sufrimos dolor", ru: "Мы страдаем от боли" },
        vosotros: { es: "Vosotros sufrís dolor", ru: "Вы страдаете от боли" },
        ellos: { es: "Elios sufren dolor", ru: "Они страдают от боли" }
      },
      past: {
        yo: { es: "Yo sufrí dolor", ru: "Я страдал от боли" },
        tú: { es: "Tú sufriste dolor", ru: "Ты страдал от боли" },
        él: { es: "Él sufrió dolor", ru: "Он страдал от боли" },
        nosotros: { es: "Nosotros sufrimos dolor", ru: "Мы страдали от боли" },
        vosotros: { es: "Vosotros sufristeis dolor", ru: "Вы страдали от боли" },
        ellos: { es: "Elios sufrieron dolor", ru: "Они страдали от боли" }
      },
      future: {
        yo: { es: "Yo sufriré dolor", ru: "Я буду страдать от боли" },
        tú: { es: "Tú sufrirás dolor", ru: "Ты будешь страдать от боли" },
        él: { es: "Él sufrirá dolor", ru: "Он будет страдать от боли" },
        nosotros: { es: "Nosotros sufriremos dolor", ru: "Мы будем страдать от боли" },
        vosotros: { es: "Vosotros sufriréis dolor", ru: "Вы будете страдать от боли" },
        ellos: { es: "Elios sufrirán dolor", ru: "Они будут страдать от боли" }
      }
    }
  },
  {
    id: 682,
    word: "caso",
    translation: "случай",
    category: "work",
    type: "существительное",
    popularity: 682,
    examples: {
      present: { es: "Es un caso especial", ru: "Это особый случай" },
      past: { es: "Era un caso especial", ru: "Это был особый случай" },
      future: { es: "Será un caso especial", ru: "Это будет особый случай" }
    }
  },
  {
    id: 683,
    word: "semana",
    translation: "неделя",
    category: "time",
    type: "существительное",
    popularity: 683,
    examples: {
      present: { es: "Esta semana es importante", ru: "Эта неделя важная" },
      past: { es: "La semana pasada era importante", ru: "Прошлая неделя была важной" },
      future: { es: "La próxima semana será importante", ru: "Следующая неделя будет важной" }
    }
  },
  {
    id: 684,
    word: "sistema",
    translation: "система",
    category: "work",
    type: "существительное",
    popularity: 684,
    examples: {
      present: { es: "El sistema funciona", ru: "Система работает" },
      past: { es: "El sistema funcionaba", ru: "Система работала" },
      future: { es: "El sistema funcionará", ru: "Система будет работать" }
    }
  },
  {
    id: 685,
    word: "punto",
    translation: "точка",
    category: "work",
    type: "существительное",
    popularity: 685,
    examples: {
      present: { es: "Este es el punto clave", ru: "Это ключевой момент" },
      past: { es: "Este era el punto clave", ru: "Это был ключевой момент" },
      future: { es: "Este será el punto clave", ru: "Это будет ключевой момент" }
    }
  },
  {
    id: 686,
    word: "forma",
    translation: "форма",
    category: "adjectives",
    type: "существительное",
    popularity: 686,
    examples: {
      present: { es: "La forma es redonda", ru: "Форма круглая" },
      past: { es: "La forma era redonda", ru: "Форма была круглой" },
      future: { es: "La forma será redonda", ru: "Форма будет круглой" }
    }
  },
  {
    id: 687,
    word: "gobierno",
    translation: "правительство",
    category: "work",
    type: "существительное",
    popularity: 687,
    examples: {
      present: { es: "El gobierno decide", ru: "Правительство решает" },
      past: { es: "El gobierno decidía", ru: "Правительство решало" },
      future: { es: "El gobierno decidirá", ru: "Правительство будет решать" }
    }
  },
  {
    id: 688,
    word: "noche",
    translation: "ночь",
    category: "time",
    type: "существительное",
    popularity: 688,
    examples: {
      present: { es: "La noche es oscura", ru: "Ночь тёмная" },
      past: { es: "La noche era oscura", ru: "Ночь была тёмной" },
      future: { es: "La noche será oscura", ru: "Ночь будет тёмной" }
    }
  },
  {
    id: 689,
    word: "nivel",
    translation: "уровень",
    category: "work",
    type: "существительное",
    popularity: 689,
    examples: {
      present: { es: "El nivel es alto", ru: "Уровень высокий" },
      past: { es: "El nivel era alto", ru: "Уровень был высоким" },
      future: { es: "El nivel será alto", ru: "Уровень будет высоким" }
    }
  },
  {
    id: 690,
    word: "minuto",
    translation: "минута",
    category: "time",
    type: "существительное",
    popularity: 690,
    examples: {
      present: { es: "Espero un minuto", ru: "Я жду минуту" },
      past: { es: "Esperé un minuto", ru: "Я ждал минуту" },
      future: { es: "Esperaré un minuto", ru: "Я подожду минуту" }
    }
  },
  {
    id: 691,
    word: "juego",
    translation: "игра",
    category: "emotions",
    type: "существительное",
    popularity: 691,
    examples: {
      present: { es: "El juego es divertido", ru: "Игра весёлая" },
      past: { es: "El juego era divertido", ru: "Игра была весёлой" },
      future: { es: "El juego será divertido", ru: "Игра будет весёлой" }
    }
  },
  {
    id: 692,
    word: "línea",
    translation: "линия",
    category: "adjectives",
    type: "существительное",
    popularity: 692,
    examples: {
      present: { es: "La línea es recta", ru: "Линия прямая" },
      past: { es: "La línea era recta", ru: "Линия была прямой" },
      future: { es: "La línea será recta", ru: "Линия будет прямой" }
    }
  },
  {
    id: 693,
    word: "fin",
    translation: "конец",
    category: "time",
    type: "существительное",
    popularity: 693,
    examples: {
      present: { es: "Es el fin", ru: "Это конец" },
      past: { es: "Era el fin", ru: "Это был конец" },
      future: { es: "Será el fin", ru: "Это будет конец" }
    }
  },
  {
    id: 694,
    word: "relación",
    translation: "отношение",
    category: "emotions",
    type: "существительное",
    popularity: 694,
    examples: {
      present: { es: "La relación es buena", ru: "Отношения хорошие" },
      past: { es: "La relación era buena", ru: "Отношения были хорошими" },
      future: { es: "La relación será buena", ru: "Отношения будут хорошими" }
    }
  },
  {
    id: 695,
    word: "fuerza",
    translation: "сила",
    category: "body",
    type: "существительное",
    popularity: 695,
    examples: {
      present: { es: "Tengo fuerza", ru: "У меня есть сила" },
      past: { es: "Tenía fuerza", ru: "У меня была сила" },
      future: { es: "Tendré fuerza", ru: "У меня будет сила" }
    }
  },
  {
    id: 696,
    word: "sentido",
    translation: "смысл",
    category: "emotions",
    type: "существительное",
    popularity: 696,
    examples: {
      present: { es: "Tiene sentido", ru: "Это имеет смысл" },
      past: { es: "Tenía sentido", ru: "Это имело смысл" },
      future: { es: "Tendrá sentido", ru: "Это будет иметь смысл" }
    }
  },
  {
    id: 697,
    word: "imagen",
    translation: "изображение",
    category: "work",
    type: "существительное",
    popularity: 697,
    examples: {
      present: { es: "La imagen es clara", ru: "Изображение чёткое" },
      past: { es: "La imagen era clara", ru: "Изображение было чётким" },
      future: { es: "La imagen será clara", ru: "Изображение будет чётким" }
    }
  },
  {
    id: 698,
    word: "proceso",
    translation: "процесс",
    category: "work",
    type: "существительное",
    popularity: 698,
    examples: {
      present: { es: "El proceso es largo", ru: "Процесс долгий" },
      past: { es: "El proceso era largo", ru: "Процесс был долгим" },
      future: { es: "El proceso será largo", ru: "Процесс будет долгим" }
    }
  },
  {
    id: 699,
    word: "derecho",
    translation: "право",
    category: "work",
    type: "существительное",
    popularity: 699,
    examples: {
      present: { es: "Tengo derecho", ru: "У меня есть право" },
      past: { es: "Tenía derecho", ru: "У меня было право" },
      future: { es: "Tendré derecho", ru: "У меня будет право" }
    }
  },
  {
    id: 700,
    word: "calidad",
    translation: "качество",
    category: "work",
    type: "существительное",
    popularity: 700,
    examples: {
      present: { es: "La calidad es alta", ru: "Качество высокое" },
      past: { es: "La calidad era alta", ru: "Качество было высоким" },
      future: { es: "La calidad será alta", ru: "Качество будет высоким" }
    }
  }
];
