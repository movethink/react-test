import { Modal } from "antd";
const Item = (props) => {
  const { isModalOpen, handler } = props;
  const handleOk = () => {
    handler();
  };
  const handleCancel = () => {
    handler();
  };
  console.log("Item 渲染 ---");
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {" "}
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default Item;
