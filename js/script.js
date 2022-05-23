window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.add('hamburger_active');
        menu.classList.add('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        }
    });
        // modal 
    
        const  modalTrigger = document.querySelectorAll('[data-modal]'),
               modal = document.querySelector('.modal'),
               modalCloseBtn = document.querySelector('[data-close]');
    
        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
        }
    
        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });
    
        function closeModal(){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
        }
    
        modalCloseBtn.addEventListener('click', closeModal);
    
        // если тыкаешь на подложку то модальное окно закрывется
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        // закрывается модальное окно на кнопку event.code хороший сайт
        document.addEventListener('keydown', (e) => {
            if (e.code === "KeyQ" && modal.classList.contains('show')) {
                closeModal();
            }
        });
    });