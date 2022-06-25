import * as S from "./styles";
import { Divider, Input, Select, Space, Typography } from "antd";
import React, { useState } from "react";

const { Option } = Select;
const { TextArea } = Input;

let index = 0;

export default function LeituraDashboard() {
  const [items, setItems] = useState(["jack", "lucy"]);
  const [timers, setTimers] = useState(["1m", "5m"]);
  const [name, setName] = useState("");
  const [timer, setTimer] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onNameChangeTimer = (event) => {
    setTimer(event.target.value);
  };

  const addItemTimer = (e) => {
    e.preventDefault();
    setTimers([...timers, timer || `New timer ${index++}`]);
    setTimer("");
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
  };

  return (
    <S.Container>
      <Select
        style={{
          width: 300,
        }}
        placeholder="Categorias"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: "8px 0",
              }}
            />
            <Space
              align="center"
              style={{
                padding: "0 8px 4px",
              }}
            >
              <Input
                placeholder="Please enter item"
                value={name}
                onChange={onNameChange}
              />
              <Typography.Link
                onClick={addItem}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Add item
              </Typography.Link>
            </Space>
          </>
        )}
      >
        {items.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>

      <Input
        style={{
          width: 300,
        }}
        placeholder="Titulo"
        value={name}
        onChange={onNameChange}
      />

      <TextArea
        style={{
          width: 300,
        }}
        rows={4}
        placeholder="Description"
      />

      <Select
        style={{ width: 300 }}
        placeholder="Timer"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider
              style={{
                margin: "8px 0",
              }}
            />
            <Space
              align="center"
              style={{
                padding: "0 8px 4px",
              }}
            >
              <Input
                placeholder="Please enter item"
                value={timer}
                onChange={onNameChangeTimer}
              />
              <Typography.Link
                onClick={addItemTimer}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Add item
              </Typography.Link>
            </Space>
          </>
        )}
      >
        {timers.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    </S.Container>
  );
}
