const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('привет')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Здравствуй!!!';
            texts.appendChild(p);
        }
        if(text.includes('как тебя зовут')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Вопросно ответная система';
            texts.appendChild(p);
        }
        if(text.includes('где ты работаешь')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Вопросно ответная система';
            texts.appendChild(p);
            window.open('http://guiaidn.ru/');
        }
        p = document.createElement('p');
    }
    console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();


