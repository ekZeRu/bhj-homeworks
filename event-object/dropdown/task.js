
'use strict'
const dropdown__value = document.getElementsByClassName('dropdown__value')[0]
const dropdown__list = document.getElementsByClassName('dropdown__list')[0]
const dropdown__link = document.getElementsByClassName('dropdown__link')

dropdown__value.addEventListener('click', function () {
    dropdown__list.classList.toggle('dropdown__list_active')
})

for (let i = 0; i < dropdown__link.length; i++) {
    dropdown__link[i].addEventListener('click', function (item) {
    dropdown__value.textContent = this.textContent
    item.preventDefault()
    dropdown__list.classList.remove('dropdown__list_active')
  })
}
