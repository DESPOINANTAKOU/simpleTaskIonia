import { FC, useEffect, useState } from 'react'
import fetchProducts, { TProduct } from '../actions/axiosCall'

export interface ITable {}

const Table: FC<ITable> = () => {
  const [data, setData] = useState<TProduct[]>([])
  const [toggled, setToggled] = useState(false)
  useEffect(() => {
    fetchProducts()
      .then(fetchedProduct => {
        setData([fetchedProduct])
      })
      .catch(error => console.log(error))
  }, [toggled])
  // useEffect(() => console.log(data), [data])
  return (
    <div>
      <button type="button" onClick={() => setToggled(!toggled)}>
        Toggle
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((tableItem: TProduct) => (
              <tr key={tableItem.id}>
                <td>{tableItem.id}</td>
                <td>{tableItem.todo}</td>
                {/* <td>{tableItem.title}</td>
                <td>{tableItem.description}</td>
                <td>{tableItem.price}</td>
                <td>{tableItem.discountPercentage}</td>
                <td>{tableItem.rating}</td>
                <td>{tableItem.stock}</td>
                <td>{tableItem.brand}</td>
                <td>{tableItem.category}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
