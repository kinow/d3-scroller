import './style.scss'
import * as d3 from 'd3'
import graphScroll from "./graph-scroll"

let oldWidth = 0
const render = () => {
  if (oldWidth === innerWidth) return
  oldWidth = innerWidth
  let width
  let height
  width = d3.select('#graph').node().offsetWidth
  height = width
  const r = 40

  if (innerWidth <= 925) {
    width = innerWidth
    height = innerHeight * .7
  }

  const svg = d3.select('#graph').html('')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const circle = svg
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', r)

  const colors = ['orange', 'purple', 'steelblue', 'pink', 'black']
  const positions = [
    {cx: width - r, cy: r},
    {cx: r, cy: r},
    {cx: width - r, cy: height - r},
    {cx: width / 2, cy: height / 2}
  ]
  const gs = graphScroll()
    .container(d3.select('.container-1'))
    .graph(d3.selectAll('.container-1 #graph'))
    .eventId('uniqueId1')  // namespace for scroll and resize events
    .sections(d3.selectAll('.container-1 #sections > div'))
    // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
    .on('active', function (i) {
      const position = positions[i]

      circle
        .transition()
        .duration(1000)
        .attr('cx', position['cx'])
        .attr('cy', position['cy'])
        .transition()
        .style('fill', colors[i])
    })

  d3
    .select('#source')
    .style('margin-bottom', `${window.innerHeight - 450}px`)
    .style('padding', `100px`)
}

d3
  .select(window)
  .on('resize', render)

render()

console.log('Hello!')
