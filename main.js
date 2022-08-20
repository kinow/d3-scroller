import './style.css'
import * as d3 from 'd3'

d3.selectAll('td')
  .transition()
  .style('background-color', (elem, idx) => idx === 0 ? 'gray' : 'white')

console.log('Hello!')
