//your JS code here. If required.

const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            if (idx < codes.length - 1) {
                codes[idx + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value.length === 0 && idx > 0) {
            codes[idx - 1].focus();
        }
    });
});
