const options = {
  title: {
    text: '商品分析'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 179,
          name: '广告印刷'
        },
        {
          value: 253,
          name: '打印复印'
        },
        {
          value: 0,
          name: '彩页'
        }
      ],
      radius: '50%'
    }
  ]
}
export default options
