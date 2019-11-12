import React from "react";
import Button from "@salesforce/design-system-react/components/button";

class Example extends React.Component {
  static displayName = "ButtonExample";

  render() {
    return (
      <div className="slds-x-small-buttons_horizontal">
        <Button label="Brand" variant="brand" />

        <Button
          disabled
          label="Disabled"
          onClick={() => {
            console.log("Disabled Button Clicked");
          }}
          variant="brand"
        />

        <Button label="Destructive" variant="destructive" />

        <Button label="Outline Brand" variant="outline-brand" />

        <div
          style={{
            backgroundColor: "#16325c",
            padding: "10px",
            marginLeft: "5px",
            display: "inline-block"
          }}
          className="-m-horizontal--small"
        >
          <Button inverse label="Inverse" variant="base" />
        </div>
      </div>
    );
  }
}

export default Example;
