import { useDispatch, useSelector } from 'react-redux'
import { getData, removeData } from '../../redux/actions/action'
import { Table } from 'antd'
import { useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'
export const Customers = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  let state = useSelector((state) => state)
  const remove = (e) => {
    toast.success('Item Deleted !')
    dispatch(removeData(e))
  }
  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
    },
    {
      title: 'Contact title',
      dataIndex: 'contactTitle',
    },
    {
      render: (text, record) => (
        <button onClick={() => remove(record)}>{'Remove'}</button>
      ),
    },
  ]
  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <p>List</p>
      <Table dataSource={state} columns={columns} />
      <Toaster />
    </div>
  )
}
