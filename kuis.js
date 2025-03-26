document.addEventListener('DOMContentLoaded', function() {
    // Quiz variables
    const questions = [
        {
            image: "./src/kelinci/Tak berjudul108_20241211234724 1.svg", 
            question: "Siapa tokoh utama dalam cerita ini?",
            options: ["Bima", "Dito", "Raka", "Satria"],
            answer: "Bima"
        },
        {
            image: "./src/kelinci/Tak berjudul112 3.svg", 
            question: "Apa warna baju tokoh utama?",
            options: ["Merah", "Biru", "Hijau", "Kuning"],
            answer: "Biru"
        },
        {
            image: "./src/kelinci/Tak berjudul112 3.svg",
            question: "Dimana cerita ini terjadi?",
            options: ["Desa", "Kota", "Hutan", "Pantai"],
            answer: "Desa"
        },
        {
            image: "./src/kelinci/Tak berjudul112 3.svg", 
            question: "Apa pekerjaan tokoh utama?",
            options: ["Petani", "Guru", "Dokter", "Polisi"],
            answer: "Petani"
        },
        {
            image: "./src/kelinci/Tak berjudul112 3.svg", 
            question: "Apa nama teman tokoh utama?",
            options: ["Dito", "Raka", "Satria", "Arif"],
            answer: "Dito"
        }
    ];

    // DOM elements
    const questionImage = document.getElementById('question-image');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');
    const questionCountElement = document.getElementById('question-count');
    const progressBar = document.getElementById('progress-bar');
    const scoreContainer = document.getElementById('score-container');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-btn');
    const heartsContainer = document.getElementById('hearts');
    const closeButton = document.getElementById('close-btn');
    const confirmationDialog = document.getElementById('confirmation-dialog');
    const confirmExitButton = document.getElementById('confirm-exit');
    const cancelExitButton = document.getElementById('cancel-exit');

    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let lives = 3;
    let selectedOption = null;
    let quizCompleted = false;

    // Initialize hearts
    function initializeHearts() {
        heartsContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart' + (i >= lives ? ' lost' : '');
            heartsContainer.appendChild(heart);
        }
    }

    // Load question
    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            endQuiz();
            return;
        }

        const question = questions[currentQuestionIndex];
        
        // Set image (you would replace this with actual image loading)
        // Set image correctly
        questionImage.innerHTML = `<img src="${question.image}" alt="Question image" style="max-width: 100%; height: auto;">`;

        // In a real implementation, you would use:
        // questionImage.innerHTML = `<img src="${question.image}" alt="Question image">`;
        
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        // Shuffle options
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(option => {
            const button = document.createElement('div');
            button.className = 'option';
            button.textContent = option;
            button.addEventListener('click', () => selectOption(button, option));
            optionsElement.appendChild(button);
        });

        questionCountElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
        progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback';
        nextButton.disabled = true;
        selectedOption = null;
    }

    // Select option
    function selectOption(button, option) {
        if (quizCompleted) return;

        // Deselect all options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Select current option
        button.classList.add('selected');
        selectedOption = option;
        nextButton.disabled = false;
    }

    // Check answer
    function checkAnswer() {
        if (selectedOption === null || quizCompleted) return;

        const correctAnswer = questions[currentQuestionIndex].answer;
        const options = document.querySelectorAll('.option');

        options.forEach(option => {
            option.classList.remove('correct', 'wrong');
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            } else if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
                option.classList.add('wrong');
            }
        });

        if (selectedOption === correctAnswer) {
            feedbackElement.textContent = 'Correct! Well done!';
            feedbackElement.className = 'feedback correct-feedback';
            score++;
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer is "${correctAnswer}".`;
            feedbackElement.className = 'feedback wrong-feedback';
            lives--;
            initializeHearts();
        }

        nextButton.disabled = false;
    }

    // Next question
    function nextQuestion() {
        if (selectedOption === null && currentQuestionIndex > 0) return;

        if (selectedOption !== null) {
            checkAnswer();
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length && lives > 0) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }

    // End quiz
    function endQuiz() {
        quizCompleted = true;
        questionImage.style.display = 'none';
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreElement.textContent = score;
        progressBar.style.width = '100%';
    }

    // Restart quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;
        selectedOption = null;
        quizCompleted = false;
        nextButton.style.display = 'block';
        scoreContainer.style.display = 'none';
        questionImage.style.display = 'flex';
        initializeHearts();
        loadQuestion();
    }

    // Show confirmation dialog
    function showConfirmationDialog() {
        confirmationDialog.style.display = 'flex';
    }

    // Hide confirmation dialog
    function hideConfirmationDialog() {
        confirmationDialog.style.display = 'none';
    }

    // Return to homepage
    function returnToHomepage() {
        // Replace this with your actual homepage URL or navigation logic
        window.location.href = "index.html"; // or "/" for root
        // Alternatively, you could use history.back() to go back
    }

    // Event listeners
    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);
    closeButton.addEventListener('click', showConfirmationDialog);
    confirmExitButton.addEventListener('click', returnToHomepage);
    cancelExitButton.addEventListener('click', hideConfirmationDialog);

    // Start the quiz
    initializeHearts();
    loadQuestion();
});