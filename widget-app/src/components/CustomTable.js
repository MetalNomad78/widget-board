import { AgGridReact } from 'ag-grid-react';
import "./ag-grid.css";
import "./ag-theme-quartz.css";
import { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const CustomTable = ({backgroundColor,footerColor,type}) => {
  const [rowData] = useState([
    { product: "Reusable", q1_23: 10, q2_24: 4 },
    { product: "Natural", q1_23: 2, q2_24: 11 },
    { product: "Compost", q1_23: 7, q2_24: 5 },
    { product: "Reusable..", q1_23: 3, q2_24: 4 },
    { product: "Total", q1_23: 8, q2_24: 12 },
  ]);

  const percentageData = rowData.map(item => ({
    product: item.product,
    q1_23: `${item.q1_23}%`,
    q2_24: `${item.q2_24}%`,
  }));

  const rowStyle = { borderBottom: 'none' };

  
  const getRowStyle = params => {
    if (params.node.rowIndex === 4) {
      return { color: footerColor, fontWeight: 'bold'};
    }
  
  };

  const [colDefs] = useState([
    { headerName: "PRODUCT", field: "product", width: 150 },
    { headerName: "Q1-23", field: "q1_23", width: 100, headerClass: 'header-cell', footerClass: 'total-cell' },
    { headerName: "Q2-24", field: "q2_24", width: 100, headerClass: 'header-cell', footerClass: 'total-cell' },
  ]);
  const [chartOptions] = useState({
    theme: "ag-default",
    
    data: [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 40000 },
      { asset: "Cash", amount: 7000 },
      { asset: "Real Estate", amount: 5000 },
      { asset: "Commodities", amount: 3000 },
    ],
    
    series: [
      {
          type: 'donut',
          calloutLabelKey: 'asset',
          angleKey: 'amount',
          innerRadiusRatio: 0.7,
          labelKey: '',
      },
  ],
  background: {
    fill: backgroundColor,
  },
  });

  const customGridWidth = '360px';
  if(type==='grid'){
    return (
      <div className={`ag-theme-quartz`} style={{ height: 200, width: customGridWidth, '--custom-background-color': backgroundColor }}>
        <AgGridReact rowStyle={rowStyle} getRowStyle={getRowStyle} rowData={percentageData} columnDefs={colDefs} />
      </div>
    );
  }
  else{
    return (
      <div className={`styles.css`} style={{height: 250, width: 300}}>
      <AgChartsReact options={chartOptions} />
      </div>
    );
  }
  
};

export default CustomTable;
