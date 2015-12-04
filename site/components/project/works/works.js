// Click on filtersID will filter itemsID
var filter = function(filtersID, itemsID) {
  var filters = document.querySelectorAll(filtersID);
  var items = document.querySelectorAll(itemsID);

  for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', clickFilter, false);
  }


  function clickFilter(event) {
    active = this.classList.contains('list__item--active');
    attr = this.dataset.attr;

    if (active) {
      this.classList.remove('list__item--active');
      this.classList.add('list__item--inactive');
      doFilter(attr, 'remove');
    } else {
      this.classList.remove('list__item--inactive');
      this.classList.add('list__item--active');
      doFilter(attr, 'show');
    }

    doFilter();
  }


  function doFilter(attr, action) {
    console.log('filtering ...');

    for (var j = 0; j < items.length; j++) {
      if (items[j].classList.contains(attr)) {
        console.log('found:' + j);

        if (action == 'show') {
          items[j].classList.remove('thumb--inactive');
        } else {
          items[j].classList.add('thumb--inactive');
        }
      }
    }
  }


}

filter('.works__techniques .list__item', '.works__thumbs .thumb');
filter('.works__years .list__item', '.works__thumbs .thumb');
