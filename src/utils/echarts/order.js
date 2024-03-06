const order = {
  title: {
    text: '本月订单数'
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
      data: [1, 2],
      type: 'line'
    }
  ]
}
export default order
