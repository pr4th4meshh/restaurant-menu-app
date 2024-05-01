import { FileTextOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const Suggestions = () => {
  return (
    <div>
         <Input size="large" placeholder="Write suggestions to restaurant..." className='border-none' prefix={<FileTextOutlined />} />
    </div>
  )
}

export default Suggestions