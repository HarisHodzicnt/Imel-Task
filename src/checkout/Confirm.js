import "../App.css"
import React, { useEffect, useState } from "react"

function Confirm({
  customerInformation,
  activeProvider,
  handleClearInformations,
}) {
  return (
    <div className="confirmTab">
      {Object.keys(customerInformation).length < 7 ? (
        <p className="fill-up-form">
          Please fill up the form in order to procceed. You don't have to fill{" "}
          <strong>(optional) </strong> fields.
        </p>
      ) : (
        <div className="confirm">
          <h2>Confirm</h2>
          {}
          <p>{customerInformation?.email}</p>
          <div>
            <p>
              <strong>
                {customerInformation?.name} {customerInformation?.lastName}
                {customerInformation?.company ? ( <span>({customerInformation?.company})</span>) : (
                  false
                )}
              </strong>
            </p>
            <p>
              {customerInformation?.address} {customerInformation?.apartment}
            </p>
            <p>
              {customerInformation?.postalCode} {customerInformation?.city}
            </p>
            <p>{customerInformation?.country}</p>
          </div>
          <p>{customerInformation?.phoneNumber}</p>
          <p>
            {activeProvider} {customerInformation?.email}
          </p>
          <div>
            <p></p>
            <button onClick={handleClearInformations}>Order</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Confirm
