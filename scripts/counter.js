 let currentNumber = 26835;
    const counter = document.getElementById('counter');

    function createDigitElement(digit) {
      const container = document.createElement('div');
      container.className = 'digit-container';

      const strip = document.createElement('div');
      strip.className = 'digit-strip';

      for (let i = 0; i <= 9; i++) {
        const d = document.createElement('div');
        d.textContent = i;
        strip.appendChild(d);
      }

      strip.style.transform = `translateY(-${digit * 60}px)`;

      container.appendChild(strip);
      return container;
    }

    function updateCounterDisplay(number) {
      const digits = number.toString().padStart(4, '0').split('');
      const digitContainers = counter.children;

      for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);
        const strip = digitContainers[i].firstChild;
        strip.style.transform = `translateY(-${digit * 60}px)`;
      }
    }

    function initializeCounter(number) {
      counter.innerHTML = '';
      const digits = number.toString().padStart(4, '0').split('');
      for (const d of digits) {
        const el = createDigitElement(parseInt(d));
        counter.appendChild(el);
      }
    }

    function randomIncrease() {
      const increment = Math.floor(Math.random() * 4) + 1; // 1–4
      const delay = Math.floor(Math.random() * 2000) + 2000; // 2000–4000 ms
      currentNumber += increment;
      updateCounterDisplay(currentNumber);
      setTimeout(randomIncrease, delay);
    }

    // Start
    initializeCounter(currentNumber);
    setTimeout(randomIncrease, 2000);