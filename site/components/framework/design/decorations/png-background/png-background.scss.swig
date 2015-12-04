@mixin png-background($image) {
  background: url({{ site.url }}{{ site.images }}#{$image});
}
