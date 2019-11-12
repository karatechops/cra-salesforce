import React from "react";
import Datepicker from "@salesforce/design-system-react/components/date-picker";

class Example extends React.Component {
  static displayName = "DatepickerExample";

  render() {
    return (
      <Datepicker
        labels={{
          label: "Date"
        }}
        onChange={(event, data) => {
          if (this.props.action) {
            const dataAsArray = Object.keys(data).map(key => data[key]);
            this.props.action("onChange")(event, data, ...dataAsArray);
          } else if (console) {
            console.log("onChange", event, data);
          }
        }}
        onCalendarFocus={(event, data) => {
          if (this.props.action) {
            const dataAsArray = Object.keys(data).map(key => data[key]);
            this.props.action("onCalendarFocus")(event, data, ...dataAsArray);
          } else if (console) {
            console.log("onCalendarFocus", event, data);
          }
        }}
      />
    );
  }
}

export default Example;
