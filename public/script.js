(function(){
  var tl1 = new TimelineMax();
  tl1.from('#h_one', 4, { x: 1000 })
  .from('#h_three', 4, { x: -1000 }, 'h_one-=2')
  .from('#h_two', 1.9, { x: 1000 }, 'h_one+=1');
}());
