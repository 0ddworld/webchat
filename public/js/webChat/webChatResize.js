var
  doc = document,
  ht = 300,
  wd = 200,
  main = document.querySelector("#divViewMessage"),
  x, y, dx, dy;

var startResize = function(evt) {
  x = evt.screenX;
  y = evt.screenY;
};

var resize = function(evt) {
  dx = evt.screenX - x;
  dy = evt.screenY - y;
  x = evt.screenX;
  y = evt.screenY;
  wd += dx*2;
  ht -= dy*2;
  main.style.width = wd + "px";
  main.style.height = ht + "px";
};

rsz.addEventListener("mousedown", function(evt) {
  startResize(evt);
  doc.body.addEventListener("mousemove", resize);
  doc.body.addEventListener("mouseup", function() {
    doc.body.removeEventListener("mousemove", resize);
  });
});