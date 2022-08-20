import * as d3 from 'd3'

//All the scrolling function
//Will draw a new graph based on the index provided by the scroll

import scroller from "./scroller";

let scroll = scroller()
  .container(d3.select('#graphic'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){
  d3.selectAll('.step')
    .transition().duration(500)
    .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});

  activeIndex = index
  let sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
  let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
  scrolledSections.forEach(i => {
    activationFunctions[i]();
  })
  lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
  if (index === 2 && progress > 0.7){

  }
})
