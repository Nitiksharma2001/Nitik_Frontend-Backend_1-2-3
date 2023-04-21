import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
const App = ({user, setUsers}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [website, setWebsite] = useState(user.website);
  const [phone, setPhone] = useState(user.phone);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
	setUsers(prev => {
		return prev.map(currentUser => {
			if(currentUser === user){
				return {...user, name, email, website, phone};
			}
			return currentUser;
		})
	})
	setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
		<EditOutlined  key="edit" onClick={showModal} />,
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <span>Name</span> <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <span>Email</span> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <span>Phone</span> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <span>Wesbite</span> <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
      </Modal>
    </>
  );
};
export default App;