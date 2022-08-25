const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages')
const nav = document.querySelector('.container')
const post = document.querySelector('#create-post')

/*----------------- Theme Changer ------------------*/

function changeBG(color) {
    document.body.style.backgroundColor = color ;
    nav.style.backgroundColor = color ;  
    post.style.backgroundColor = color;
}




