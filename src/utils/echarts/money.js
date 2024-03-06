const money = {
  title: {
    text: '本月成交额'
  },
  xAxis: {
    type: 'category',
    data: ['03-01', '03-04']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [29, 4],
      type: 'line'
    }
  ]
}
export default money
