import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer color="blue" fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Habit Challenge</h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> ToDoListers </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;