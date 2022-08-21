/*-------------- Sidebar ---------------*/

const menuItems = document.querySelectorAll('.menu-item');

/*-------------- Messages ---------------*/

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages')

// remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
         item.classList.remove('active');
    })
} 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display='none';
        }else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notification .notification-count').style.display='none';
        }
    })
})

/*-------------- Messages ---------------*/
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 0.5rem red';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


