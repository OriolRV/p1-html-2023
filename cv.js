window.onscroll = function (e) {
  posY = this.scrollY;
  if (posY > 0) $("#header").addClass("partially_transparent");
  else $("#header").removeClass("partially_transparent");
};
