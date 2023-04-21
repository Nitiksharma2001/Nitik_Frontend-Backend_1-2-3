import { Button, Modal } from 'antd';
import { useState } from 'react';
const App = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
	  Basic Modal 
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        Name: <input type="text" value={user.name}/>
        Name: <input type="text" value={user.name}/>
        Name: <input type="text" value={user.name}/>
        Name: <input type="text" value={user.name}/>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default App;