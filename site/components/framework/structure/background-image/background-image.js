// Read the `figure` element's responsive images and breakpoints
// - set as background image with `matchMedia` coming from `Picturefill`
// - example: setbackgroundImage('.slider .slides') => all .slides will have a background image set
var setBackgroundImage = function(elementID) {
  var elements = document.querySelectorAll(elementID);

  for (var i = 0; i < elements.length; i++) {
    responsiveImageURL(elements[i], setResponsiveBackgroundImage);
  }

  // Set a responsive background image using `mathcMedia`
  function setResponsiveBackgroundImage(element, image, breakpoint, retina) {
    var mediaQuery = "only screen and " + breakpoint;

    if (retina) {
      // This might not be cross platform compatible ....
      mediaQuery += " and (-webkit-min-device-pixel-ratio: 2)";
    }

    if (matchMedia(mediaQuery).matches) {
      element.style.backgroundImage = "url('" + image + "')";
    }
  }
};
