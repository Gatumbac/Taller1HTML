document.addEventListener('DOMContentLoaded', () => {
    console.log("HTML listo!");
    handleClickBg();
    handleTextInputListener();
});

function handleTextInputListener() {
    const btn = document.getElementById('name');
    btn.addEventListener('input', (e) => {
        console.log(e);
    });
}

function handleClickBg() {
    const input1 = document.getElementById('name');
    const input2 = document.getElementById('email');
    const select = document.getElementById('country');

    
    input1.addEventListener('click', () => {
        changeBodyBg();
    });
    
    select.addEventListener('change', (e) => {
        const country = e.target.value;
        
        switch(country) {
            case 'Ecuador':
                changeBodyCountrySelection('F5E027');
            break;
            
            case 'Colombia':
                changeBodyCountrySelection('27CFF5');
            break;
                
            case 'Peru':
                changeBodyCountrySelection('B33D22');
            break;
            
            default:
                changeBodyCountrySelection('FFFFFF');
            break;
        }
    });
}

function changeBodyBg() {
    const body = document.querySelector('body');
    
    if (!body.classList.contains('color')) {
        body.classList.add('color');
    } else {
        body.classList.remove('color');
    }
}

function changeBodyCountrySelection(color) {
    const body = document.querySelector('body');

    body.style.backgroundColor = `#${color}`;
}
