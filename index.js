// 

var clickedCard = null
let preventClick = false

var found = 0
var trails = 0

function onCardClick(e) {

    const target = e.currentTarget;

    if (target.className.includes('done') || preventClick) {return;}

    console.log('card clicked');
    // console.log(target.className);
    target.className = target.className.replace('hidden' , '').trim();
    target.className += ' done';


    // var clickedCard -> is the already selected card if any
    if(!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {
        if (
            clickedCard.getAttribute('pokemon') !== target.getAttribute('pokemon')
        ) {
            console.log('OOPS! cards don\'t match');
            preventClick = true;
            setTimeout( () => {
                clickedCard.className = clickedCard.className.replace ('done', '').trim() + ' hidden';
                target.className = target.className.replace ('done', '').trim() + ' hidden';
            clickedCard = null;
            preventClick = false;
            }, 500)
        }
        else {
            console.log('Hurray, cards match!')
            clickedCard.className += ' done';
            clickedCard = null
            found++
        }
    }
    trails++;

    if(found===8) {
        console.log(`Yay! ALL matches found!
        You've used ${trails/2} chances`)
        finish = document.getElementById('finish')
        finish.innerText = 'You WIN !!'
    }
}