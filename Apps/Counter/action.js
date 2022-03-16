// using closure for state and related functions
function Counter() {
    let count = 0;

    let countElement = document.getElementById('count');
    function render() {
        countElement.innerText = count;
    }
    function alarmed() {
        countElement.style.color = 'red';
        window.setTimeout(() => { countElement.style.color = 'black';
}, 1000)
    }
    function add() {
        count += 1;
        render();
    }
    function subtract() {
        if (count != 0) {
            count -= 1;
            render();
        }
        else
            alarmed();
    }
    return [add, subtract];
}

function main() {
    let [add, subtract] = Counter();

    let minusButton = document.getElementById('minus-button'),
        plusButton = document.getElementById('plus-button');

    minusButton.addEventListener('click', subtract);
    plusButton.addEventListener('click', add);
}

main();
