import logo from "./logo.svg";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from "react-plotly.js";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";
import { data } from './data1';

import "./App.css";
import { useState } from "react";

function App() {
  const PlotlyRenderers = createPlotlyRenderers(Plot);
  const [state, setState] = useState([]);

  return (
    <div style={{ width: '100%', height: '80vh' }}> {/* Adjust width and height based on your needs */}
      <PivotTableUI
        data={data}
        renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
        onChange={(s) => {
          setState(s);
        }}
        rows={['Spl']}
        cols={['Month']}
        vals={['Qty']}
        aggregatorName={['Sum']}
        filters={[
          { name: 'Brand', type: 'dropdown' },
        ]}
        hiddenAttributes={['Status 2k', 'Status 5k']}
        {...state}
      />
    </div>
  );
}

export default App;
