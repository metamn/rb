var filteredOut = [];

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
      filteredOut.push(attr);
    } else {
      this.classList.remove('list__item--inactive');
      this.classList.add('list__item--active');
      filteredOut.pop(attr);
    }

    doFilter();
  }


  function doFilter() {
    console.log(filteredOut);
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('thumb--inactive');

      for (var j = 0; j < filteredOut.length; j++) {
        if (items[i].classList.contains(filteredOut[j])) {
          items[i].classList.add('thumb--inactive');
        }
      }
    }
  }


}

filter('.works__techniques .list__item', '.works__thumbs .thumb');
filter('.works__years .list__item', '.works__thumbs .thumb');
