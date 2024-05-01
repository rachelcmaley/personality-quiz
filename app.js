let currentQuestionIndex = 0;

const quizQuestions = [
    { 
        question: "How do you react when you encounter a problem?", 
        answers: { 
            A: "I try to find a creative solution.", 
            B: "I may get a bit overwhelmed but try to deal with it logically.", 
            C: "I look for help from friends or experts.", 
            D: "I tackle it head-on with a lot of energy."
        } 
    },
    { 
        question: "How do you handle responsibilities?", 
        answers: {
            A: "I sometimes forget, but I always try to make up for it!", 
            B: "I keep a list and check things off meticulously.", 
            C: "I handle them as they come; no stress.", 
            D: "I'm pretty flexible and can juggle many things."
        } 
    },
    { 
        question: "What describes your eating habits?", 
        answers: {
            A: "I love trying out weird and wonderful new recipes.", 
            B: "I prefer a well-balanced, healthy meal.", 
            C: "I eat whatever I feel like, often snacks or whatever is easiest.", 
            D: "I enjoy a good meal, the heartier, the better!"
        } 
    },
    { 
        question: "How do you deal with conflicts?", 
        answers: {
            A: "I try to smooth things over, maybe make a joke or distract.", 
            B: "I think it through and speak my mind clearly and calmly.", 
            C: "I prefer to avoid conflicts and stay out of drama.", 
            D: "I can be a bit fiery and confrontational."
        } 

    },
    { 
        question: "What is your favorite type of movie?", 
        answers: {
            A:  "Anything animated or with a quirky twist.", 
            B: "I love a good mystery or something that makes me think.", 
            C: "Romantic movies or dramas, something with deep personal stories.", 
            D: "Action and adventure, something with a lot of excitement!"
        } 
    },
    { 
        question: "If you found a wallet on the street, what would you do?", 
        answers: { 
            A: "Take it to the police station.", 
            B: "Look for any identification so I can return it directly.", 
            C: "Probably leave it; someone else will handle it.", 
            D: "Take the money."
        } 
    },
    { 
        question: "Choose a pet:", 
        answers: {
            A: "A cute cat.", 
            B: "A dog - loyal and protective.", 
            C: "A small bird or fish that's low maintenance.", 
            D: "An exotic pet, like a reptile or something unusual."
        } 
    },
    { 
        question: "What's you approach when faced with a difficult decision?", answers: { 
            A: "I might act on impulse but I always stay true to my heart.", 
            B: "I keep my cool and weigh my options carefully.", 
            C: "I make decisions quickly, no fuss.", 
            D: "I try to be fair and consider everyone's happiness."
        } 
    },
    { 
        question: "Choose a hobby that appeals most to you:", 
        answers: {
            A: "Crafting, painting, other artistic activities.", 
            B: "Strategic games.", 
            C: "Anything physical or sports-related.", 
            D: "Social activities or hosting events."
        } 
    },
    { 
        question: "How do you express affection to those you care about?", 
        answers: { 
            A: "With lots of hugs and kind gestures, making sure they feel special.", 
            B: "It might be awkward, but I show care in my own way.", 
            C: "I prefer actions over words, like doing something nice for them.", 
            D: "I may tease them or poke fun, but they know I care."
        } 
    },
    { 
        question: "What is your biggest fear?", 
        answers: {
            A: "Being alone or unable to connect with others.", 
            B: "Being misunderstood or judged incorrectly.", 
            C: "Not being able to protect my loved ones.", 
            D: "Being perceived as weak or not tough enough.", 
            E: "Being ordinary or not standing out."
        } 
    },
    { 
        question: "What's the first thing you want to do at the theme park?", 
        answers: {
            A: "Ride the biggest, scariest rollercoaster!", 
            B: "I'll be in the fun house.", 
            C: "I'd rather just eat all the food.",
            D: "Try a game to win a big prize.", 
        }
    },
]

function initQuiz() {
    currentQuestionIndex = 0; 
    displayQuestion(quizQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');

    questionContainer.textContent = question.question;
    answersContainer.innerHTML = ''; 

    // Display all answers
    Object.keys(question.answers).forEach(key => {
        const answer = question.answers[key];
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = `${answer}`;
        button.onclick = function() { handleAnswer(key); }; // Set up click to handle answer
        listItem.appendChild(button);
        answersContainer.appendChild(listItem);
    });
}

function handleAnswer(answer) {
    updateScores(answer, currentQuestionIndex + 1); // Update scores according to the answer and current question
    nextQuestion();
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion(quizQuestions[currentQuestionIndex]);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    let topCharacter = getTopCharacter();
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Quiz Completed</h2>
    <p>Thanks for participating! The character you are most like is:</p>
    <p id ="character-name">${topCharacter.name}</p>
    <img src="${topCharacter.image}" alt="Image of ${topCharacter.name}" id = "character-image">
        <p>${topCharacter.description}</p>
    `;
}



// Initialize character scores
let characters = {
    Bee: { 
        score: 0, 
        description: "Bee is spacey-casey and impulsive, she often acts without thinking which leads to her getting into trouble. She is shown to be very kind and didn't hesitate to bring PuppyCat home when he first landed on her and used her money to buy Deckard a casserole after he bought her one. She doesn't give up easily; even though she has no skills or magic of her own, she does what she can to win fights and help her friends. She places her loyalty to those she considers friends very quickly. When PuppyCat is called a monster and grabbed by a tongue, Bee is quick to come to his defense, even after having only just met him the previous day. Bee has a somewhat gluttonous side to her, wishing she dreamed about food, and taking one of Cass's burgers. This may, however, be an extension of her not having enough money to buy food.", 
        image: "bee.jpg"
    },
    Puppycat: { 
        score: 0, 
        description: "PuppyCat has a strong tsundere personality. He is secretive and aloof and considers himself a figure of high status, once referring to a ladybug as his 'peon' and calling Deckard a peasant, ordering him to pick up his groceries. It's very important to him to be seen as 'cool' and not cute, which he expresses when buying a leather jacket and several weapons. He does not appear to be a bad person, since he has let Bee tag along on his Temp jobs in the first place and at least cares enough about her not to let her die during their jobs. Over time, it becomes clearer that he does care for other people and merely puts up a tough front.",
        image: "puppycat.jpg" 
    },
    Deckard: { 
        score: 0, 
        description: "Deckard is a quiet individual who seems passive when compared to the people around him. He tends to put others' needs before his own (exampled by skipping a day at work so he and Bee can cook together). Deckard gets flustered easily and may trip over his words often, avoid eye contact, and blush. He is caring and protective, at least towards Bee. He tends to look the other way or defend her when she does something others might find strange. His bedroom is filled with plants which is more evidence that he is a caring individual.",
        image: "deckard.png" 
    },
    Cas: { 
        score: 0, 
        description: "Cas is implied to have a laid-back attitude at her job. She could possibly be competitive as well, given her intensive professional wrestling training, she also gets in to playful fights with her siblings. She is shown to constantly worry about her younger twin brother Deckard. Despite her laid-back attitude, she shows a level of brutal honesty and, as a result, tends to speak her mind. She is somewhat tomboy with a bit of a girly streak. And although she presents herself as an adult with a put-together life, this seems to be a cover for her vulnerabilities, as it's often hinted that she questions whether she's really happy or has made the right choices.",
        image: "cas.png" 
    },
    Toast: { 
        score: 0, 
        description: "Toast is very brash and aggressive, especially toward Cas. She often appears in Cas' room by busting through her walls, leaving a person-shaped hole. She's obsessed with wrestling, and is constantly trying to entice Cas to fight her by antagonizing her in various ways. She seems to take pleasure in annoying her, but also went to the extreme of becoming pregnant just to ensure that Cas would never be rid of her, suggesting possible infatuation. Toast is quite eccentric, and makes bizarre claims such as her fetus being able to speak through her, a sacrifice of food earning her a demon's strength, and her birthday celebration involving a death by exhaustion. It's unclear whether she actually believes these things, or just has a bizarre sense of humor.",
        image: "toast.jpg" 
    },
    Wesley: { 
        score: 0, 
        description: "Wesley is very mysterious, effortlessly cool, and quiet, often communicating with gestures and body language. When he does speak it's usually short and to the point. But sometimes he likes to punctuate his deep and serious tone with cutesy humor, like a playful meow or baby talk. When he's not working as the chef in the cafe with his siblings, Wesley spends much of his time fishing and fostering ill and injured sea creatures. He spends just as much time at sea fishing up Bee's broken mechanisms that seem to cover the sea floor.",
        image: "wesley.png"
    },
    Cardamon: { 
        score: 0, 
        description: "Cardamon has a very straight and even business-like personality. He takes his job as Bee's landlord very seriously. He seems to be very mature for his age and takes full responsibility for Bee's home and has a distinctive professional sounding tone, which somewhat contradicts his childish voice. However, despite his unusually mature behavior, he still holds many childish beliefs such as believing in fairy tales. he is a Strickler for rules tattling on students who misbehave.",
        image: "cardamon.png"
    },
    PrettyPatrick: { 
        score: 0, 
        description: "Pretty Patrick is kind, patient, and forgiving. He doesn't even get angry when an old man swallows his wallet, nor when Puppycat subsequently steals his phone. He's nearly always smiling, and is generous with the amount of time and attention he gives to his many adoring fans.",
        image: "patrick.jpg"
    },
    Violet: { 
        score: 0, 
        description: "Violet is bold, outspoken, and somewhat impulsive. She yelled at and knocked out her schoolteacher for bullying her friend: the yet-to-be Space Outlaw. She then ran away on a whim. Though she can be a bit rude at times, she's also loyal to and protective of those she cares about.",
        image: "violet.png"
    },
    Crispin: { 
        score: 0, 
        description: "Crispin is generally grumpy and antisocial, even towards people he cares about. He tends to be a bit paranoid, as evident when he hears an unrecognized sound and comes out of his bedroom wielding a knife. Also, when he loses sight of a mouse, and makes fearful guesses about where it went. He's sometimes quick to anger, but it's also directed toward himself in the form of harsh self-criticism. He's happiest when making art.",
        image: "crispin.png"
    },
    Howell: { 
        score: 0, 
        description: "Handsome and a bit flamboyant, Howell takes great pride in his appearance. Tragically, he seems to worry to the point of existential dread about any signs of aging. Something made much worse by the lack of business in their family's cat cafe. Even more so when Bee was working there, due to her frequent shenanigans and habit of eating the food she was supposed to be serving.",
        image: "howell.png"
    }
};

const scoreMapping = {
    1: {
        'A': ['Bee', 'Crispin', 'Wesley'],
        'B': ['Deckard', 'Howell'],
        'C': ['Cas', 'Cardamon', 'PrettyPatrick'],
        'D': ['Toast', 'Puppycat', 'Violet']
    },
    2: {
        'A': ['Bee', 'Toast', 'Crispin'],
        'B': ['Howell', 'Deckard', 'Cardamon'],
        'C': ['Cas', 'PrettyPatrick', 'Wesley'],
        'D': ['Puppycat', 'Violet']
    },
    3: {
        'A': ['Deckard', 'PrettyPatrick'],
        'B': ['Howell', 'Cardamon'],
        'C': ['Crispin', 'Bee', 'Cas'],
        'D': ['Wesley', 'Violet', 'Puppycat', 'Toast']
    },
    4: {
        'A': ['Bee', 'Wesley'],
        'B': ['PrettyPatrick', 'Deckard', 'Cardamon'],
        'C': ['Cas', 'Crispin'],
        'D': ['Puppycat', 'Violet', 'Toast', 'Howell']
    },
    5: {
        'A': ['Bee', 'Deckard',  'Crispin'],
        'B': ['Cardamon', 'Wesley'],
        'C': ['Howell', 'Cas', 'PrettyPatrick'],
        'D': ['Puppycat', 'Toast', 'Violet']
    },
    6: {
        'A': ['Wesley', 'Cardamon', 'PrettyPatrick', 'Deckard'],
        'B': [ 'Cas', 'Bee', 'Violet'],
        'C': [ 'Crispin', 'Howell'],
        'D': ['Puppycat', 'Toast']
    },
    7: {
        'A': ['Bee','Howell'],
        'B': ['PrettyPatrick','Cardamon', 'Violet'],
        'C': ['Crispin', 'Wesley', 'Deckard'],
        'D': ['Toast', 'Puppycat', 'Cas']
    },
    8: {
        'A': ['Bee', 'Crispin'],
        'B': ['Puppycat', 'Howell', 'Cardamon', 'Wesley'],
        'C': ['Toast', 'Cas', 'Violet'],
        'D': ['Deckard', 'PrettyPatrick']
    },
    9: {
        'A': ['Bee', 'Deckard', 'Crispin', 'Wesley'],
        'B': ['Cardamon', 'Puppycat', 'Violet'],
        'C': ['Cas', 'Toast'],
        'D': ['PrettyPatrick', 'Howell']
    },
    10: {
        'A': ['Bee', 'Howell','PrettyPatrick'],
        'B': ['Crispin','Puppycat', 'Deckard'],
        'C': ['Cas', 'Wesley', 'Cardamon', 'Violet'],
        'D': ['Toast']
    },
    11: {
        'A': ['Bee', 'PrettyPatrick'],
        'B': [ 'Crispin', 'Wesley'],
        'C': ['Violet', 'Deckard', 'Cardamon'],
        'D': ['Puppycat', 'Cas'],
        'E': ['Howell', 'Toast']
    },
    12: {
        'A': ['Bee', 'Toast', 'Cas', 'Violet'],
        'B': ['Wesley',  'Cardamon'],
        'C': ['Crispin', 'Howell'],
        'D': ['Deckard', 'Puppycat', 'PrettyPatrick']
    },
}

// Function to update scores based on answer and question number
function updateScores(answer, questionNumber) {
    const charactersToUpdate = scoreMapping[questionNumber][answer];
    if (charactersToUpdate) {
        charactersToUpdate.forEach(character => {
            characters[character].score += 1;
        });
    } else {
        console.error("No character mapping found for this answer and question number");
    }
}

function getTopCharacter() {
    let maxScore = Math.max(...Object.values(characters).map(char => char.score)); 
    let topCharacter = Object.keys(characters).filter(key => characters[key].score === maxScore);

    return {
        name: topCharacter[0],
        description: characters[topCharacter[0]].description,
        image: characters[topCharacter[0]].image
    };
}


document.addEventListener('DOMContentLoaded', initQuiz);
