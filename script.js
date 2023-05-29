function sozdanie(){
    window.location.href="./sozdanie.html"
}
function profile(){
    window.location.href="./index.html"
}
function vihod(){
    window.location.href="./vhod.html"
}
function myhabit(){
    window.location.href="./myhabit.html"
}
function achiev(){
    window.location.href="./achiev.html"
}
function registr(){
    window.location.href="./registration.html"
}
function vhod(){
    window.location.href="./vhod.html"
}


const modal = $.modal({
    closable: true,
    content: `
    <p class="headerk">Изменение профиля</p>
    <div class= modalvvod>
        <p>Введите новое имя пользователя:</p>
        <input type="text" id="habit" placeholder="Введите новое имя">
    </div>
    <div class=modalknop>
        <button onclick="profile()">Сохранить</button>
        <button data-close="true">Закрыть</button>
    </div>`,
    width: '400px',
})

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if(btnType === 'price'){
        modal.open()
    }
})


