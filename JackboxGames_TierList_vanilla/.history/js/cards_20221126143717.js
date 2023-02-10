const cards = document.querySelectorAll('.card');

const onDragStart = (event) => {
    console.log('dragging the element');
    event.dataTransfer.setData('id', event.target.id);
    setTimeout(() => {
        event.target.style.visibility = 'hidden';
    }, 50)
}

const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
    console.log('ended the drag');
}

cards.forEach((card) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;

    
})