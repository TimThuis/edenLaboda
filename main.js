var height = window.innerHeight;
var bottom = document.body.clientHeight + height;
var introTl = new TimelineMax();
var detailsTl = new TimelineMax({
  paused: true,
});


introTl.fromTo('.page-intro h1', 6, {
  scale: 1,
  opacity: 0 ,
}, {
  scale: 1.2,
  opacity: 1,
}, 'start').staggerFromTo('.page-intro .pink', 1, {
  marginTop: 0,
}, {
  marginTop:'-43px',
}, 1, 'start')
.from('.page-intro p', 0.5, {
  opacity: 0,
}, 'start+=5')
.to(window , 1, {
  scrollTo: {
    y: height
  }
}, 'start+=7');

function moveToOutro() {
  console.log('s');
  TweenMax.to(window , 1, {
    scrollTo: {
      y: bottom,
    }
  });
}
