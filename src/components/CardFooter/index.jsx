import React from 'react'
import "./index.css"
/**
 * Create footer of card view.
 * @returns returns card's footer. In the future it could receive the "Total month" parameter and "from last month" parameter.
 */
function CardFooter() {
  return (
    <div className = "card-footer border-0 pb-4" id="card-footer">
          <div className="row">
            <div className="col">
                <h6 className="opacity-50" > Total this month</h6>
                <h2><strong>$478.33</strong></h2>
            </div>
            <div className="col pt-3">
                <h6 className="text-end me-4 pt-3" id = "revenue-percentage" ><strong>+ 2.4%</strong> </h6>
                <h6 className="text-end me-4 opacity-50 pb"> from last month</h6>
            </div>
          </div>
        </div>
  )
}
export {CardFooter}
