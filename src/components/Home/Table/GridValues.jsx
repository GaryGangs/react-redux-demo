import * as React from "react"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import TableHead from "@mui/material/TableHead"
import { styled } from "@mui/material/styles"
import styles from "../Home.module.scss"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))
export default function GridValues(props) {
  const { regUSersData, rowsPerPage, page, emptyRows, tableHeader } = props
  const rows = regUSersData

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <div className={styles.customWidth}>
      <TableHead>
        <TableRow>
          {tableHeader.map(row => (
            <StyledTableCell align="left">{row}</StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map((row, index) => (
          <TableRow key={row[0]}>
            {row.map((cell, index1) => (
              <TableCell style={{ width: 160 }} align="left">
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}

        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    </div>
  )
}
