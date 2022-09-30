import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { postData } from '../../../redux/actions/action'
import { toast, Toaster } from 'react-hot-toast'

function Add() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const onFinish = (values) => {
    form.resetFields()
    dispatch(postData(values))
    toast.success('customer created !')
  }

  const formStyle = {
    width: '40%',
    margin: 'auto',
  }
  const btnStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%)',
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Add order</h1>
      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <Form.Item name="companyName" label="companyName">
          <Input />
        </Form.Item>

        <Form.Item name="contactName" label="contactName">
          <Input />
        </Form.Item>

        <Form.Item name="contactTitle" label="contactTitle">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={btnStyle}>
            Add
          </Button>
        </Form.Item>
      </Form>
      <Toaster />
    </div>
  )
}
export default Add
