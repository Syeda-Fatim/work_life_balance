function update(value) {
  var stretch = ['ultra-condensed','extra-condensed','condensed','semi-condensed','normal','semi-expanded','expanded','extra-expanded  ','ultra-expanded'];
 document.getElementById("work").style.fontWeight=value*100;
  document.getElementById("work").style.fontStretch=stretch[value-1];
  document.getElementById("life").style.fontWeight=(1000-value*100);
  document.getElementById("life").style.fontStretch=stretch[9-value];
}

update();