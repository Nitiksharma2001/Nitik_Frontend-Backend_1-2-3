import { DeleteOutlined, EditOutlined, GlobalOutlined, HeartFilled, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import {Card} from 'antd';
import Modal from "./Modal"
const { Meta } = Card;
const App = ({user, setUsers}) => (
  <Card
    style={{
      backgroundColor:"#f5f5f5"
    }}
    cover={
      <img style={{
        height: 200,
        width: 200,
      }} src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}/> 
    }
    actions={[
      user.like ? <HeartFilled style={{color:"red"}} /> : 
      <HeartOutlined key="setting" style={{color:"red"}} onClick={() => {
        setUsers(prev => {
          return prev.map(currentUser => {
            if(currentUser === user){
              return {...user, like:!user.like}
            }
            return currentUser;
          })
        })
      }}/>,
      <EditOutlined  key="edit" onclick={<Modal/>} />,
      <DeleteOutlined onClick={() => {
        setUsers(prev => {
          return prev.filter(delUser => user !== delUser)
        })
      }}/>
    ]}
  >
    
    <Meta
      title={user.name}
    />
    <Meta
      avatar={<MailOutlined />}
      description={user.email}
    />
    <Meta
      avatar={<PhoneOutlined />}
      description={user.phone}
    />
    <Meta
      avatar={<GlobalOutlined />}
      description={user.website}
    />
  </Card>
);
export default App;
