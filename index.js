function showResult() {
    let score = 0;

    let firstAnswer = document.querySelector('input[name="question1"]:checked');
    if (firstAnswer && firstAnswer.value == "5") {
        score++;
    }

    let secondAnswer = document.querySelector('input[name="question2"]:checked');
    if (secondAnswer && secondAnswer.value == "5") {
        score++;
    }
    
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('output').style.display = 'block';
    document.getElementById('result').textContent = `You got ${score} out of 2 correct!`;
}
