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
    <PivotTableUI
      data={data}
      renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
      onChange={(s) => {
        setState(s);
      }}
      rows={['Spl']}
      cols={['Month']}
      vals={['Qty']}
      aggregatorName= {['Sum']}
      {...state}
    />
  );
}

export default App;
