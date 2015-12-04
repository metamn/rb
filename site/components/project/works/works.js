var visibleItems = [];

// Click on filtersID will filter itemsID
var filter = function(type, filtersID, itemsID) {
  var filters = document.querySelectorAll(filtersID);
  var items = document.querySelectorAll(itemsID);

  for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', clickFilter, false);
  }

  function clickFilter(event) {
    // get current filter information
    attr = this.dataset.attr;

    // mark all filters inactive
    markAllInactive(filters, 'list__item--active');
    visibleItems = removeAllElements(visibleItems, type);

    // mark this filter active
    this.classList.add('list__item--active');
    visibleItems.push(attr);

    // do the filtering
    doFilter();
  }


  // Show / hide items
  function doFilter() {
    console.log(visibleItems);

    for (var i = 0; i < items.length; i++) {
      // show all
      items[i].classList.remove('thumb--inactive');

      // combine filters
      // - only those items will be displayed who satisfy all filter criterias
      var visible = true;

      for (var j = 0; j < visibleItems.length; j++) {
        visible = visible && items[i].classList.contains(visibleItems[j]);
      }

      if (!visible) {
        items[i].classList.add('thumb--inactive');
      }
    }
  }


  // Remove certain elements from an array
  function removeAllElements(array, type) {
    return array.filter(function(item) {
      return (item.indexOf(type) === -1);
    });
  }

  // Remove the active class from a series of DOM elements
  function markAllInactive(items, klass) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(klass);
    }
  }


}

filter('technique', '.works__techniques .list__item', '.works__thumbs .thumb');
filter('year', '.works__years .list__item', '.works__thumbs .thumb');
