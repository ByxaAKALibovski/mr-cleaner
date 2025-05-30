function openPopup(){
    document.addEventListener('click', function(element){
        if(element.target.hasAttribute('data-popup')){
            element.preventDefault();
            document.querySelector(`.popup[data-popup="${element.target.getAttribute('data-popup')}"]`).classList.add('active');
            return false;
        }
    })
} openPopup();
function closePopup(){
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('over') 
            && e.target.parentNode.classList.contains('popup')){
                e.target.parentNode.classList.remove('active');
        }
    });
} closePopup();

function faqSwicth(){
    document.addEventListener('click', function(e){
        if(
            e.target.classList.contains('faq_acardion__item')
            ||
            e.target.parentNode.classList.contains('faq_acardion__item')
            ||
            e.target.parentNode.parentNode.classList.contains('faq_acardion__item')
        ){
            let faqItem = e.target.classList.contains('faq_acardion__item') ? e.target : '';
            faqItem = e.target.parentNode.classList.contains('faq_acardion__item') ? e.target.parentNode: faqItem;
            faqItem = e.target.parentNode.parentNode.classList.contains('faq_acardion__item') ? e.target.parentNode.parentNode: faqItem;
        
            if(faqItem.classList.contains('active')) return faqItem.classList.remove('active'); 
            return faqItem.classList.add('active');
        }
    });
} faqSwicth();