const form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;


function calculate() {
    const moneyBefore = document.getElementById('money-before');
    const moneyAfter = document.getElementById('money-after');
    const heightAfter = document.getElementById('height-after');

    let initial = Number(form.money.value);
    
    if (!initial) return;
    
    let years = form.months.value / 12;

    if (!years) return;

    let interest = form.interest.value * 0.01;

    if (!interest) return;

    let result = Math.round(initial * (1 + interest) ** years);
    let height = `${result / form.money.value * 100}px`;

    console.log('height', {
        result,
        height
    });

    moneyBefore.innerHTML = initial;
    moneyAfter.innerHTML = result;
    heightAfter.style.height = `${height}`;
};

calculate();