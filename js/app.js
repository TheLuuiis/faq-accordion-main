'used strict'
// <    >  =>

    const accordions = document.querySelectorAll('.contentBx');

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function() {
            this.classList.toggle('active');
        
            const content = this.querySelector('.content');
        
            if (this.classList.contains('active')) {
                content.style.height = content.scrollHeight + 'px';
            } else {
                content.style.height = '0';
            }
        });
    }