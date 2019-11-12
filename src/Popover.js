import React from "react";

import Popover from "@salesforce/design-system-react/components/popover";
import Button from "@salesforce/design-system-react/components/button";

class Example extends React.Component {
  static displayName = "PopoverExample";

  render() {
    return (
      <div>
        <Popover
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          heading="Header Title"
          id="popover-heading"
        >
          <Button label="Trigger Popover" />
        </Popover>
      </div>
    );
  }
}

export default Example;
