window.onload = ()=>{
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.nav-links');
    console.log(anchors);

    setTimeout(()=>{
        transition_el.classList.remove('active');
    }, 500);

    for (let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            transition_el.classList.add('active');
            setTimeout(()=>{
                window.location.href =target;
            }, 500)
        });
    }
}


