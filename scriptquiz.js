const questions = [{
        'que': 'The State tree of Karnataka is',
        'a': 'Sandalwood',
        'b': 'coconut',
        'c': 'Neem',
        'd': 'Banyan',
        'correct': 'a'
    },
    {
        'que': 'Which town is known as the Silk Town of Karnataka?',
        'a': 'Belgaum',
        'b': 'Rama Nagara',
        'c': 'Chikkaballapura',
        'd': 'Hasana',
        'correct': 'b'
    },

    {
        'que': 'Which historical district of Karnataka, known for ‘Gol Gumbaz’ is fascinatingly the land of 5 rivers as well.',
        'a': 'Kolar',
        'b': 'Chikkaballapura',
        'c': 'Bijapur',
        'd': 'Shivamogga',
        'correct': 'c'
    },
    {
        'que': 'Which sea is to the west of Karnataka?',
        'a': 'Labrador Sea',
        'b': 'Adriatic Sea ',
        'c': 'Caspian Sea',
        'd': 'Arabian Sea',
        'correct': 'd'
    }

];
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (index === total) {

        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;


            } else {
                console.log("no")
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementsByClassName("box")[0].innerHTML = `
       <div style="text-align: center">  <h3> thank u for playing </h3><h2> ${right}/${total} are correct </h2></div>`



}
loadQuestion();