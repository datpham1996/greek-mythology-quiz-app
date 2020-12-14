/**
 * Example store structure
 */



const store = {
    // 5 or more questions are required
    questions: [
      {
        question: 'Who was zeus’s wife?',
        answers: [
          'Athena',
          'Artemis',
          'Hera',
          'Aphrodite'
        ],
        correctAnswer: 'Hera'
      },
      {
        question: 'Who was the god of war?',
        answers: [
          'Ares',
          'Hades',
          'Hephaestus',
          'Apollo'
        ],
        correctAnswer: 'Ares'
      },
      {
        question: 'Zeus and hades were brothers with which god?',
        answers: [
          'Apollo',
          'Poseidon',
          'Ares',
          'Hermes'
        ],
        correctAnswer: 'Poseidon'
      },
      {
        question: 'Apollo was the god of what?',
        answers: [
          'Music, poetry, and art.',
          'The heavens.',
          'Weapon and warfare',
          'Animal kingdom'
        ],
        correctAnswer: 'Music, poetry, and art.'
      },
      {
        question: 'Athena turned Medusa into a what?',
        answers: [
          'Gorgon',
          'Nymph',
          'Siren',
          'Mermaid'
        ],
        correctAnswer: 'Gorgon'
      },
      {
        question: 'Who was the leader of the greek gods?',
        answers: [
          'Zeus',
          'Hera',
          'Hades',
          'Poseidon'
        ],
        correctAnswer: 'Zeus'
      },
      {
        question: 'Who were the titans?',
        answers: [
          'The first greeks gods',
          'The parents of the Zeus',
          'Twelve gods that were overthrown by the olympians',
          'All of the above'
        ],
        correctAnswer: 'All of the above'
      },
      {
        question: 'Who rules the underworld??',
        answers: [
          'Zeus',
          'Apollo',
          'Poseidon',
          'Hades'
        ],
        correctAnswer: 'Hades'
      },
      {
        question: 'What married brother and sister were the king and queen of the olympian gods?',
        answers: [
          'Ares and Artemis',
          'Dionysus and Demeter',
          'Zeus and Hera',
          'Artemis and Apollo'
        ],
        correctAnswer: 'Zeus and Hera'
      },
      {
        question: 'Icarus flew too close to the what?',
        answers: [
          'Sun',
          'Sea',
          'Moon',
          'Sand'
        ],
        correctAnswer: 'Sun'
      },
    
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function renderStartMenu(){
    $("main").html(`
    <section class="menuScreen padding-top-medium">
    <h1>`)
  }


 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)