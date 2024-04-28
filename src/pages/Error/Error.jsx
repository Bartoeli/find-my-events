import React from "react";
import { Page } from "../../components/Page/Page";
import { Alert, Button } from "react-bootstrap";

const Error = () => {
  return (
    <Page>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Alert variant="danger" className="text-center">
          <Alert.Heading>404</Alert.Heading>
          <p>The page you are looking for does not exist.</p>
          <hr />
          <p className="mb-0">Please go back to the homepage.</p>
          <Button
            href="/"
            className="mt-3"
            style={{ backgroundColor: "#4A6C6F" }}
          >
            Go back
          </Button>
        </Alert>
      </div>
    </Page>
  );
};

export default Error;
