document.querySelectorAll('.c-select').forEach(element => {
  element.addEventListener('click', function() {
    this.classList.toggle('c-select--open');
  })
});

for (const option of document.querySelectorAll(".c-options__item")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('c-options__item--selected')) {
            this.parentNode.querySelector('.c-options__item.c-options__item--selected').classList.remove('c-options__item--selected');
            this.classList.add('c-options__item--selected');
            this.closest('.c-select').querySelector('.c-select__trigger span').textContent = this.textContent;
        }
    })
}
