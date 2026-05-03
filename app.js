let timeLeft = 25 * 60; // 25 минут в секундах
let timerId = null;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // Добавляем ведущий ноль, если число меньше 10
    timeDisplay.textContent = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
}

function startTimer() {
    if (timerId === null) {
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerId);
                timerId = null;
                alert("Время вышло! Пора отдохнуть ☕");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    updateDisplay();
}

// Привязка кнопок к функциям
startBtn.addEventListener('click',
startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Инициализация отображения
updateDisplay();
