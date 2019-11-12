import React from "react";
import Alert from "@salesforce/design-system-react/components/alert";
import AlertContainer from "@salesforce/design-system-react/components/alert/container";
import Icon from "@salesforce/design-system-react/components/icon";

class Example extends React.Component {
  render() {
    return (
      <AlertContainer>
        <Alert
          icon={<Icon category="utility" name="user" />}
          labels={{
            heading: "Logged in as John Smith (johnsmith@acme.com).",
            headingLink: "Log out"
          }}
          onClickHeadingLink={() => {
            console.log("Link clicked.");
          }}
        />
      </AlertContainer>
    );
  }
}

export default Example;
