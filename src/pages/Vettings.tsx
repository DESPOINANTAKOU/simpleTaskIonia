import React, { FC, useEffect, useState } from 'react'
import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchVettings } from '../actions/fetchFunctions'
import type { TVetting } from '../types/vetting'
import ReactPaginate from 'react-paginate'

const sortVettings = (vettings: TVetting[], orderDirection: string) => {
  const sortedVettings = [...vettings]
  sortedVettings.sort((a, b) => (orderDirection === 'desc' ? b.vetid - a.vetid : a.vetid - b.vetid))
  return sortedVettings
}
type TPagination = {
  page: number
  rowsPerPage: number
  totalRows: number
}
const Vettings: FC = () => {
  const [vettings, setVettings] = useState<TVetting[]>([])

  const [orderDirection, setOrderDirection] = useState<'desc' | 'asc'>('desc')

  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(50)
  const [totalRows, setTotalRows] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  const handleSortChange = () => {
    setOrderDirection(orderDirection === 'desc' ? 'asc' : 'desc')
  }

  type PageClickEvent = {
    selected: number
  }

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected)
  }

  useEffect(() => {
    fetchVettings(page)
      .then(({ count, data: vettings }) => {
        setVettings(sortVettings(vettings, orderDirection))
        setTotalRows(count)
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
      />
    </Box>
  )
}

export default Vettings
