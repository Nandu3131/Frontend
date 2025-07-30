
   const buttons = document.querySelectorAll('input[type="button"]');
    const display = document.querySelector('input[type="text"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });

