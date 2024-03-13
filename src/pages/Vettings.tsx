import React, { FC, useEffect, useState } from 'react'
import fetchProducts, { TProduct } from '../actions/axiosCall'
// import Vetting from './Vetting'

const Table: FC = () => {
  const [data, setData] = useState<TProduct[]>([])

  useEffect(() => {
    fetchProducts()
      .then(vettings => {
        setData(vettings)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>CarriedOutStatus</th>
            <th>Comments</th>
            <th>Company Representativename</th>
            <th>Inspectiontype id</th>
            <th>Inspectorname</th>
            <th>Inspectorsirname</th>
            <th>Majorid</th>
            <th>Port</th>
            <th>Portid</th>
            <th>Qid</th>
            <th>Vesselid</th>
            <th>Vesselname</th>
            <th>Vetid</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(vettings => (
              <tr key={vettings.vetid}>
                <td>{vettings.CarriedOutStatus}</td>
                <td>{vettings.comments}</td>
                <td>{vettings.companyrepresentativename}</td>
                <td>{vettings.inspectiontypeid}</td>
                <td>{vettings.inspectorname}</td>
                <td>{vettings.inspectorsirname}</td>
                <td>{vettings.majorid}</td>
                <td>{vettings.port}</td>
                <td>{vettings.portid}</td>
                <td>{vettings.qid}</td>
                <td>{vettings.vesselid}</td>
                <td>{vettings.vesselname}</td>
                <td>{vettings.vetid}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={13}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
