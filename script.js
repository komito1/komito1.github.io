const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-text');
const modalButtons = document.querySelectorAll('.modal-button');
const closeBtn = document.getElementsByClassName('close')[0];

modalButtons.forEach(button => {
  button.addEventListener('click', function() {
    modal.style.display = 'block';
    const color = this.getAttribute('data-color');
    // 내용 추가
    switch(color) {
      case 'red':
        modalContent.innerHTML = `
          <h2>Red</h2>
          <p>Red content here...</p>
        `;
        break;
      case 'orange':
        modalContent.innerHTML = `
          <h2>Orange</h2>
          <p>Orange content here...</p>
        `;
        break;
      // 다른 색상에 대한 내용 추가
      default:
        modalContent.innerHTML = '';
    }
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
