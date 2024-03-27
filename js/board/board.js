const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  const cellId = parseInt(cell.dataset.cellId, 10);
  if (cellId % 2 === 0) {
    cell.classList.add('even');
  } else {
    cell.classList.add('odd');
  }
});
/* Test clicker to display cell ID's and Class */
document.addEventListener('click', function(event) {
    console.log('You clicked on element with id: ' + event.target.id);
    console.log('The class of the clicked element is: ' + event.target.className);
  });