    const popupbtns = document.querySelectorAll('.popupButton');

    popupbtns.forEach(button =>{
        button.addEventListener('click', e =>{
            const target = e.target.dataset.target;
            const popup_el = document.querySelector(target);
            if(popup_el != null){
                popup_el.classList.toggle('isActive')
            }
        });
    });

