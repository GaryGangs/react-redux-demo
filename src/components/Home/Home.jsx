import { React, useEffect, useState } from "react"
import { useDispatch, connect } from "react-redux"
import * as action from "../../redux/Home/actions"
import DataGrid from "./Table/DataGrid.jsx"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { withStyles } from "@material-ui/core/styles"

const AccordionSummaryMod = withStyles({
  root: {
    borderBottom: "1px solid black"
  }
})(AccordionSummary)

function Home(props) {
  const { allUSers, allProjs } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action.getRegisteredUsers())
    dispatch(action.getProjects())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const tableHeader = [
    "first Name",
    "last Name",
    "company",
    "country",
    "organization Type"
  ]
  const tableHeaderProj = ["id", "project Id", "userId"]
  const [expanded, setExpanded] = useState(false)
  let userData = allUSers.map(item => {
    let data = []
    data.push(
      item.firstName,
      item.lastName,
      item.company,
      item.country,
      item.organizationType
    )
    return data
  })

  let projData = allProjs.map(item => {
    let data = []
    data.push(item.id, item.projectId, item.userId)
    return data
  })
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummaryMod
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Registered Users
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            List of registered users
          </Typography>
        </AccordionSummaryMod>
        <AccordionDetails>
          <DataGrid regUSersData={userData} tableHeader={tableHeader} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummaryMod
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Project Memberships
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            List of projects
          </Typography>
        </AccordionSummaryMod>
        <AccordionDetails>
          <DataGrid regUSersData={projData} tableHeader={tableHeaderProj} />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    allUSers: state.getRegUsers.regUsers,
    allProjs: state.getRegUsers.regProjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: alert => dispatch(action.getRegisteredUsers()),
    getProj: alert => dispatch(action.getProjects())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
