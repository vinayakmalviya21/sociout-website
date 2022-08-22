/*-------------- Sidebar ---------------*/
const menuItems = document.querySelectorAll('.menu-item');

/*-------------- Messages ---------------*/

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages')
const nav = document.querySelector('.container')




/*-------------- Messages ---------------*/
messagesNotification.addEventListener('click', () => {
    messages.style.border = 'solid 5px red';
    setTimeout(() => {
        messages.style.border = 'none';
    }, 2000);
})


function changeBG(color) {
    document.body.style.backgroundColor = color ;
    nav.style.backgroundColor = color ;

    
}












// // Background-changes
// const theme = document.querySelector('#theme');
// const themeModal = document.querySelector('.customize-theme');
// var root = documnet.querySelector(':root');
// const Bg1 = document.querySelector('.bg-1');
// const Bg2 = document.querySelector('.bg-2');

// // Theme Background values
// let bgcolor;

// Bg1.addEventListener('click', () => {
//   // bgcolor = ;
//     // Bg2.classList.add('active');
//     // Bg1.classList.remove('active');
//     // changeBG();
// })

