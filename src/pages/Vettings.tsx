import React, { FC, useEffect, useState } from 'react'
import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import ReactPaginate from 'react-paginate'
import { fetchVettings } from '../actions/fetchFunctions'
import type { TVetting } from '../types/vetting'
import sortVettings from '../helpers/sortVettings'

const Vettings: FC = () => {
  const [vettings, setVettings] = useState<TVetting[]>([])
  const [orderDirection, setOrderDirection] = useState<'desc' | 'asc'>('desc')
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(50)
  const [totalRows, setTotalRows] = useState<number>(0)

  const handleSortChange = () => {
    setOrderDirection(orderDirection === 'desc' ? 'asc' : 'desc')
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1)
  }

  useEffect(() => {
    fetchVettings(page)
      .then(({ count, data: vettings }) => {
        setTotalRows(count)
        setVettings(sortVettings(vettings, orderDirection))
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [page])

  useEffect(() => {
    setVettings(sortVettings(vettings, orderDirection))
  }, [orderDirection])

  useEffect(() => {
    const totalPages = Math.ceil(totalRows / rowsPerPage)
    setTotalPages(totalPages)
  }, [rowsPerPage, totalRows])

  useEffect(() => {
    document.querySelectorAll('html,body').forEach(e => e.scroll({ top: 0, behavior: 'instant' }))
  }, [vettings])

  return (
    <Box>
      <table className="table">
        <thead>
          <tr>
            <th>Vetid</th>
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
          </tr>
        </thead>
        <tbody>
          {vettings.length > 0 ? (
            vettings.map(vetting => {
              return (
                <tr key={vetting.vetid}>
                  <td>
                    <Link
                      component={NavLink}
                      variant="button"
                      underline="hover"
                      color="inherit"
                      to={`/vettings/${vetting.vetid}`}>
                      {vetting.vetid}
                    </Link>
                  </td>
                  <td>{vetting.CarriedOutStatus}</td>
                  <td>{vetting.comments}</td>
                  <td>{vetting.companyrepresentativename}</td>
                  <td>{vetting.inspectiontypeid}</td>
                  <td>{vetting.inspectorname}</td>
                  <td>{vetting.inspectorsirname}</td>
                  <td>{vetting.majorid}</td>
                  <td>{vetting.port}</td>
                  <td>{vetting.portid}</td>
                  <td>{vetting.qid}</td>
                  <td>{vetting.vesselid}</td>
                  <td>{vetting.vesselname}</td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="sticky-bottom bg-white p-3">
        <ReactPaginate
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />{' '}
      </div>
    </Box>
  )
}

export default Vettings
