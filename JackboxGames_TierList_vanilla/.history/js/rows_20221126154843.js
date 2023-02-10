const rows = document.querySelectorAll('.row');
const colorRanks = [rgb(255, 127, 127), rgb(255, 191, 127), rgb(255, 223, 127) , rgb(191, 255, 127)];

const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {
   event.preventDefault();
   const draggedCardId = event.dataTransfer.getData('id');
   const draggedCard = document.getElementById(draggedCardId);
   event.target.appendChild(draggedCard);
   console.log('dropped the element');
}

rows.forEach((row, index) => {
    const label = row.querySelector('.label');
    label.style.backgroundColor = colorRanks[index];
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
})
