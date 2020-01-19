import React from 'react'
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

export default ({data}) => {
  return (
    <div style={{ width: 700 }}>
      <BarChart
        data={data}
        colors={["#C32148"]}
      />
    </div>
  );
}
