import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/counter";
import { fetchTodos } from './redux/dataFetching';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
const { Meta } = Card;



function App() {
  const { count } = useSelector((state) => state.counter);
  const { data } = useSelector((state) => state.dataReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
     {/* hi  */}
     {count}
     <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
       <Card
       style={{
         width: 300,
       }}
       cover={
         <img
           alt="example"
           src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
         />
       }
       actions={[
         <SettingOutlined key="setting" />,
         <EditOutlined key="edit" onClick={showModal}/>,
         <EllipsisOutlined key="ellipsis" />,
       ]}
     >
       {data.map(e=>(
       <Meta
         avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
         title={e.jobtitle}
         description={e.joblocation}
       />
       ))}
     </Card>
   
     {/* <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button> */}
      <button onClick={() => dispatch(incrementByAmount(33))}> Increment by amount</button>
      <input  />
      <button onClick={() => dispatch(decrementByAmount(33))}>Decrement by amount</button>
      
      <button onClick={() => dispatch(fetchTodos())}>Data</button>
     
    </div>
  );
}

export default App;
