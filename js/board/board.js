const rows = document.querySelectorAll('.row');

rows.forEach((row, rowIndex) => {
  const cells = row.querySelectorAll('.cell');
  
  cells.forEach((cell, cellIndex) => {
    if ((rowIndex + cellIndex) % 2 === 0) {
      cell.classList.add('white');
    } else {
      cell.classList.add('black');
    }
  });
});
/* Test clicker to display cell ID's and Class */
document.addEventListener('click', function(event) {
    console.log('You clicked on element with data-cell-id: ' + event.target.dataset.cellId);
    console.log('The class of the clicked element is: ' + event.target.className);
});