import { Button } from "antd";
import Item from "./Item";
import { useState } from "react";

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handler = (value) => {
    setIsModalOpen(value);
  };
  const open = () => {
    setIsModalOpen(true);
  };
  console.log("List 渲染 +++");

  return (
    <div>
      <Button onClick={open}>click</Button>
      <Item isModalOpen={isModalOpen} handler={handler}></Item>
    </div>
  );
};

export default List;
