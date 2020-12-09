import "../App.css"
import React, { useEffect, useState } from "react"

function Information({ handleChange, handleStep, customerInformation }) {
  return (
    <form className="information" type="submit">
      <h2>Contact Information</h2>
      <input
        type="Email"
        placeholder="Email"
        id="email"
        onChange={handleChange}
        value={customerInformation?.email || ""}
      />
      <h2>Shipping address</h2>
      <div>
        <input
          type="text"
          placeholder="First Name"
          id="name"
          onChange={handleChange}
          value={customerInformation?.name || ""}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          onChange={handleChange}
          value={customerInformation?.lastName || ""}
        />
      </div>
      <input
        type="text"
        placeholder="Company (optional)"
        id="company"
        onChange={handleChange}
        value={customerInformation?.company || ""}
      />
      <input
        type="text"
        placeholder="Address"
        id="address"
        onChange={handleChange}
        value={customerInformation?.address || ""}
      />
      <input
        type="text"
        placeholder="Apartment, suide, etc. (optional)"
        id="apartment"
        onChange={handleChange}
        value={customerInformation?.apartment || ""}
      />
      <div>
        <input
          type="text"
          placeholder="Postal Code"
          id="postalCode"
          onChange={handleChange}
          value={customerInformation?.postalCode || ""}
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          onChange={handleChange}
          value={customerInformation?.city || ""}
        />
      </div>
      <input
        type="text"
        placeholder="Country/Region"
        id="country"
        onChange={handleChange}
        value={customerInformation?.country || ""}
      />
      <input
        type="text"
        placeholder="Phone (optional)"
        id="phoneNumber"
        onChange={handleChange}
        value={customerInformation?.phoneNumber || ""}
      />
      <div>
        <p></p>
        <button onClick={handleStep} id="Payment">
          Continue to Payment
        </button>
      </div>
    </form>
  )
}

export default Information
