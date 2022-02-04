import React from "react"
// react plugin used to create charts
// reactstrap components
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap"
// core components

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Welcome</p>
                      <CardTitle tag="p">Dashboard</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>{" "}
      </div>
    </>
  )
}

export default Dashboard
