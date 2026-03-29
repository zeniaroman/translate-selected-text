// Скрипт для генерации полных примеров спряжения глаголов
// Запустить: node generate-verb-examples.js

const verbs = [
  { id: 128, word: "preguntar", translation: "спрашивать", type: "ar", example: "por ti", exampleRu: "о тебе" },
  { id: 129, word: "responder", translation: "отвечать", type: "er", example: "la pregunta", exampleRu: "на вопрос" },
  { id: 131, word: "amar", translation: "любить", type: "ar", example: "a mi familia", exampleRu: "свою семью" },
  { id: 132, word: "odiar", translation: "ненавидеть", type: "ar", example: "el frío", exampleRu: "холод" },
  { id: 133, word: "necesitar", translation: "нуждаться", type: "ar", example: "ayuda", exampleRu: "помощь" },
  { id: 134, word: "usar", translation: "использовать", type: "ar", example: "el ordenador", exampleRu: "компьютер" },
  { id: 135, word: "aprender", translation: "учить, изучать", type: "er", example: "idiomas", exampleRu: "языки" },
  { id: 136, word: "enseñar", translation: "учить, преподавать", type: "ar", example: "matemáticas", exampleRu: "математику" },
  { id: 138, word: "cantar", translation: "петь", type: "ar", example: "una canción", exampleRu: "песню" },
  { id: 139, word: "bailar", translation: "танцевать", type: "ar", example: "salsa", exampleRu: "сальсу" },
  { id: 140, word: "correr", translation: "бегать", type: "er", example: "en el parque", exampleRu: "в парке" },
  { id: 141, word: "caminar", translation: "ходить, гулять", type: "ar", example: "por la playa", exampleRu: "по пляжу" },
  { id: 142, word: "nadar", translation: "плавать", type: "ar", example: "en la piscina", exampleRu: "в бассейне" },
  { id: 143, word: "viajar", translation: "путешествовать", type: "ar", example: "por Europa", exampleRu: "по Европе" }
];

const pronouns = {
  yo: { ru: "Я", ruPast: "Я", ruFuture: "Я буду" },
  tú: { ru: "Ты", ruPast: "Ты", ruFuture: "Ты будешь" },
  él: { ru: "Он", ruPast: "Он", ruFuture: "Он будет" },
  nosotros: { ru: "Мы", ruPast: "Мы", ruFuture: "Мы будем" },
  vosotros: { ru: "Вы", ruPast: "Вы", ruFuture: "Вы будете" },
  ellos: { ru: "Они", ruPast: "Они", ruFuture: "Они будут" }
};

const endings = {
  ar: {
    present: { yo: "o", tú: "as", él: "a", nosotros: "amos", vosotros: "áis", ellos: "an" },
    past: { yo: "é", tú: "aste", él: "ó", nosotros: "amos", vosotros: "asteis", ellos: "aron" },
    future: { yo: "aré", tú: "arás", él: "ará", nosotros: "aremos", vosotros: "aréis", ellos: "arán" }
  },
  er: {
    present: { yo: "o", tú: "es", él: "e", nosotros: "emos", vosotros: "éis", ellos: "en" },
    past: { yo: "í", tú: "iste", él: "ió", nosotros: "imos", vosotros: "isteis", ellos: "ieron" },
    future: { yo: "eré", tú: "erás", él: "erá", nosotros: "eremos", vosotros: "eréis", ellos: "erán" }
  },
  ir: {
    present: { yo: "o", tú: "es", él: "e", nosotros: "imos", vosotros: "ís", ellos: "en" },
    past: { yo: "í", tú: "iste", él: "ió", nosotros: "imos", vosotros: "isteis", ellos: "ieron" },
    future: { yo: "iré", tú: "irás", él: "irá", nosotros: "iremos", vosotros: "iréis", ellos: "irán" }
  }
};

const russianVerbs = {
  "preguntar": { present: "спрашиваю|спрашиваешь|спрашивает|спрашиваем|спрашиваете|спрашивают", past: "спрашивал", future: "спрашивать" },
  "responder": { present: "отвечаю|отвечаешь|отвечает|отвечаем|отвечаете|отвечают", past: "ответил", future: "отвечу|ответишь|ответит|ответим|ответите|ответят" },
  "amar": { present: "люблю|любишь|любит|любим|любите|любят", past: "любил", future: "любить" },
  "odiar": { present: "ненавижу|ненавидишь|ненавидит|ненавидим|ненавидите|ненавидят", past: "ненавидел", future: "ненавидеть" },
  "necesitar": { present: "нужна|нужна|нужна|нужна|нужна|нужна", past: "нужна была", future: "понадобится" },
  "usar": { present: "использую|используешь|использует|используем|используете|используют", past: "использовал", future: "использовать" },
  "aprender": { present: "учу|учишь|учит|учим|учите|учат", past: "учил", future: "учить" },
  "enseñar": { present: "преподаю|преподаёшь|преподаёт|преподаём|преподаёте|преподают", past: "преподавал", future: "преподавать" },
  "cantar": { present: "пою|поёшь|поёт|поём|поёте|поют", past: "пел", future: "петь" },
  "bailar": { present: "танцую|танцуешь|танцует|танцуем|танцуете|танцуют", past: "танцевал", future: "танцевать" },
  "correr": { present: "бегаю|бегаешь|бегает|бегаем|бегаете|бегают", past: "бегал", future: "бегать" },
  "caminar": { present: "гуляю|гуляешь|гуляет|гуляем|гуляете|гуляют", past: "гулял", future: "гулять" },
  "nadar": { present: "плаваю|плаваешь|плавает|плаваем|плаваете|плавают", past: "плавал", future: "плавать" },
  "viajar": { present: "путешествую|путешествуешь|путешествует|путешествуем|путешествуете|путешествуют", past: "путешествовал", future: "путешествовать" }
};

function conjugate(verb, type, tense, pronoun) {
  const stem = verb.slice(0, -2);
  const ending = endings[type][tense][pronoun];
  return stem + ending;
}

function generateExamples(verbData) {
  const { word, type, example, exampleRu } = verbData;
  const stem = word.slice(0, -2);
  
  const result = {
    present: {},
    past: {},
    future: {}
  };
  
  const ruVerbs = russianVerbs[word];
  const presentForms = ruVerbs.present.split('|');
  const futureForms = ruVerbs.future.includes('|') ? ruVerbs.future.split('|') : null;
  
  let idx = 0;
  for (const [pronoun, data] of Object.entries(pronouns)) {
    // Present
    const presentForm = conjugate(word, type, 'present', pronoun);
    const ruPresent = `${data.ru} ${presentForms[idx]} ${exampleRu}`;
    result.present[pronoun] = {
      es: `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${presentForm} ${example}`,
      ru: ruPresent
    };
    
    // Past
    const pastForm = conjugate(word, type, 'past', pronoun);
    const ruPast = `${data.ruPast} ${ruVerbs.past} ${exampleRu}`;
    result.past[pronoun] = {
      es: `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${pastForm} ${example}`,
      ru: ruPast
    };
    
    // Future
    const futureForm = conjugate(word, type, 'future', pronoun);
    let ruFuture;
    if (futureForms) {
      ruFuture = `${data.ru} ${futureForms[idx]} ${exampleRu}`;
    } else {
      ruFuture = `${data.ruFuture} ${ruVerbs.future} ${exampleRu}`;
    }
    result.future[pronoun] = {
      es: `${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} ${futureForm} ${example}`,
      ru: ruFuture
    };
    
    idx++;
  }
  
  return result;
}

// Generate for all verbs
verbs.forEach(verb => {
  console.log(`\n  {`);
  console.log(`    id: ${verb.id},`);
  console.log(`    word: "${verb.word}",`);
  console.log(`    translation: "${verb.translation}",`);
  console.log(`    category: "verbs",`);
  console.log(`    type: "глагол",`);
  console.log(`    popularity: ${verb.id},`);
  console.log(`    examples: ${JSON.stringify(generateExamples(verb), null, 6).replace(/"([^"]+)":/g, '$1:')}`);
  console.log(`  },`);
});
