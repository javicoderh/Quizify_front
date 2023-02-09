const {translations, initialLanguage} = require ("../components/contexts/translations")


describe ("translations", () => {
 it ("Language context english content", () => { 
 expect(translations.en.headerProduct).toEqual("Products");
 expect(translations.en.headerPricing).toEqual("Pricing");
 expect(translations.en.headerQuiz).toEqual("QuizGPT")
 expect(translations.en.flagURL).toEqual("./assets/EN")
 expect(translations.en.pageLanguage).toEqual("EN");
 expect(translations.en.headerButton).toEqual("Create Quizz");
 expect(translations.en.quizFormTittle).toEqual("QuizGPT: Quiz Generator");
 expect(translations.en.quizFormP).toEqual("This app allows you to generate a quiz on any topic and any difficulty level. It uses an advanced AI called GPT-3 to give you a unique result with each run!");
 expect(translations.en.quizTopic).toEqual("Quiz Topic:");
 expect(translations.en.quizTopicPlaceholder).toEqual("History of civil rights in the United States");
 expect(translations.en.questionsNumber).toEqual("Number of Questions");
 expect(translations.en.questionsLanguage).toEqual("Questions Language");
 expect(translations.en.questionLanguagePlaceholder).toEqual("English, USA");
 expect(translations.en.choicesNumber).toEqual("Number of Choices per Question");
 expect(translations.en.difficulty).toEqual("Difficulty");
 expect(translations.en.difficultyPlaceholder).toEqual("Elementary school");
 expect(translations.en.answerComments).toEqual("Answer Comments:");
 expect(translations.en.answerCommentsPlaceholder).toEqual("Activated");
 expect(translations.en.formButton).toEqual("Submit");
 expect(translations.en.screenTit).toEqual("Results:");
 expect(translations.en.screenText).toEqual("Submit your requirements to get your amazing quizzes!")
})
 });

 describe ("translations", () => {
 it ("Language context spanish content", () => { 
 expect(translations.es.headerProduct).toEqual("Productos");
 expect(translations.es.headerPricing).toEqual("Precios");
 expect(translations.es.headerQuiz).toEqual("QuizGPT")
 expect(translations.es.flagURL).toEqual("./assets/ES.png")
 expect(translations.es.pageLanguage).toEqual("ES");
 expect(translations.es.headerButton).toEqual("Generar Prueba");
 expect(translations.es.quizFormTittle).toEqual("QuizGPT: Generador de pruebas");
 expect(translations.es.quizFormP).toEqual("Esta app te permite generar una prueba sobre cualquier tema y cualquier nivel de dificultad. Esta basada en Inteligencia artificial avanzada llamada GPT-3 para darte un resultado unico con cada ejecución!");
 expect(translations.es.quizTopic).toEqual("Tema de la prueba:");
 expect(translations.es.quizTopicPlaceholder).toEqual("Historia de los derechos civiles en Estados Unidos");
 expect(translations.es.questionsNumber).toEqual("Número de preguntas");
 expect(translations.es.questionsLanguage).toEqual("Idioma preguntas");
 expect(translations.es.questionLanguagePlaceholder).toEqual("Ingles, USA");
 expect(translations.es.choicesNumber).toEqual("Número de alternativas por pregunta");
 expect(translations.es.difficulty).toEqual("Dificultad");
 expect(translations.es.difficultyPlaceholder).toEqual("Escuela primaria");
 expect(translations.es.answerComments).toEqual("Comentarios:");
 expect(translations.es.answerCommentsPlaceholder).toEqual("Activados");
 expect(translations.es.formButton).toEqual("Enviar");
 expect(translations.es.screenTit).toEqual("Resultados:");
 expect(translations.es.screenText).toEqual("¡Ingresa tus requerimientos para generar increibles pruebas!")
 })
  });

  describe ("Initial Language", () => {
   it ("test initial language value", () => { 
   expect(initialLanguage).toEqual('en')  })
   });