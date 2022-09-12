import React from "react";
import {useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { barConfig, cyan } from "../../utils/barcharConfig";
import "./index.css";

/**
 * Create body of card view. Use an useEffect to change the color of the current day.
 * @returns returns card's body. In the future it could receive the configuration parameters of the graph through an API.
 */
function Barchar() {
  useEffect(() => {
    // Getting current day to update parameter
    const d = new Date();
    let day = d.getDay() - 1 < 0 ? 6 : d.getDay() - 1;
    barConfig.series[0].data[day].color = cyan;
  }, []);

  return (
    
        <div>
          <div
            className="card-body py-3 mt-4 "
            id = "card-body"
          >
            <HighchartsReact
              className="card-img p-3 "
              highcharts={Highcharts}
              options={barConfig}
            />
            <hr></hr>
          </div>
        </div>
      
  );
}

export { Barchar };
