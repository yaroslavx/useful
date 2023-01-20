import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import { values } from './data';

function App() {
  const [data, setData] = useState(values[0]);

  let count = useRef(0);
  useLayoutEffect(() => {
    const id = setInterval(() => {
      values[count.current] && setData(values[count.current]);
      count.current++;
    }, 1000);
    return () => clearInterval(id);
  }, []);
  console.log(count, data);

  return (
    <div className='App'>
      <Plot
        data={[
          {
            type: 'volume',
            flatshading: true,
            lighting: {
              facenormalsepsilon: 0,
            },
            colorbar: {
              title: 'Hi',
              // tickmode: 'auto',
            },
            colorscale: [
              [0.0, '#20FF0D'],
              [0.332, '#C0DE0B'],
              [0.333, '#F5C800'],
              [0.5, '#DE880B'],
              [0.666, '#FA4D0C'],
              [0.667, '#FA362A'],
              [1.0, '#A7362A'],
            ],
            reversescale: false,
            opacityscale: [
              [0.0, 1],
              [0.332, 1],
              [0.333, 1],
              [0.5, 1],
              [0.666, 1],
              [0.667, 1],
              [1.0, 1],
            ],
            opacity: 0.05,
            surface: { show: true, fill: 1.0, count: 64 },
            spaceframe: { show: true, fill: 1.0 },
            slices: {
              x: { show: false },
              y: { show: false },
              z: { show: false },
            },
            caps: {
              x: { show: true, fill: 1.0 },
              y: { show: true, fill: 1.0 },
              z: { show: true, fill: 1.0 },
            },
            // contour: {
            //   show: true,
            //   width: 4,
            // },
            value: data,
            x: [
              1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
              3, 4, 5,

              1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
              3, 4, 5,

              1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
              3, 4, 5,

              1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
              3, 4, 5,
            ],
            y: [
              1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
              5, 5, 5,

              1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
              5, 5, 5,

              1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
              5, 5, 5,

              1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
              5, 5, 5,
            ],
            z: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0,

              40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
              40, 40, 40, 40, 40, 40, 40, 40, 40,

              80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
              80, 80, 80, 80, 80, 80, 80, 80, 80,

              120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120,
              120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120,
            ],
          },
        ]}
        layout={{
          title: {
            text: '',
          },
          width: 1000,
          height: 750,

          scene: {
            aspectratio: {
              x: 2.4,
              y: 1.2,
              z: 1.2,
            },
            xaxis: { nticks: 12 },
            yaxis: { nticks: 12 },
            zaxis: { nticks: 12 },
            camera: {
              projection: { type: 'orthographic' },
              eye: {
                x: 0.6,
                y: 2.2,
                z: 0.4,
              },
            },
          },
        }}
        config={{
          displaylogo: false,
          displayModeBar: false,
        }}
      />
    </div>
  );
}

export default App;
