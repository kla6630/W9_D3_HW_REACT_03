import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://www.google.com/">
          Claudio is trying to learn React...!
        </a>
      </div>
    </MDBFooter>
  );
}
