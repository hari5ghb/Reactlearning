import React from 'react'
import PropTypes from 'prop-types'

const Student = props => {
  return (
    <>
    <table>
      <tbody>
        <tr>
          <th>
    <p>Name</p>
          </th>
          <td>
    <p>{props.name}</p>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  )
}



export default Student