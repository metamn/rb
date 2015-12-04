// Click on filtersID will filter itemsID
var filter = function(filtersID, itemsID) {
  var filters = document.querySelectorAll(filtersID);
  var items = document.querySelectorAll(itemsID);

  for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', clickFilter, false);
  }


  function clickFilter(event) {
    active = this.classList.contains('list__item--active');

    if (active) {
      this.classList.remove('list__item--active');
      this.classList.add('list__item--inactive');
    } else {
      this.classList.remove('list__item--inactive');
      this.classList.add('list__item--active');
    }
  }

}

filter('.works__techniques .list__item', '.works__thumbs .thumb');
filter('.works__years .list__item', '.works__thumbs .thumb');
