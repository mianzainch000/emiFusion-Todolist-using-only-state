import React, { useState } from "react";
import { DeleteItems } from "./DeleteItems";
export const ToDoList = () => {
  const [listItem, setListItem] = useState({
    listItem_1: "",
    listItem_2: "",
    id: "",
  });
  const [items, setItems] = useState([]);
  const changeList_1 = (event) => {
    setListItem({ ...listItem, listItem_1: event.target.value });
  };
  const changeList_2 = (event) => {
    setListItem({ ...listItem, listItem_2: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    if (listItem.id) {
      const updateListItems = items.map((updateObject) => {
        if (updateObject.id === listItem.id) {
          return listItem;
        } else {
          return updateObject;
        }
      });
      setItems(updateListItems);
      setListItem({
        listItem_1: "",
        listItem_2: "",
        id: "",
      });
    } else {
      const listOfObject = {
        ...listItem,
        id: Math.random(),
      };

      setItems((oldItem) => {
        return [...oldItem, listOfObject];
      });
      setListItem({
        listItem_1: "",
        listItem_2: "",
        id: "",
      });
    }
  };

  const delItems = (deleted_id) => {
    setItems((oldItem) => {
      return oldItem.filter((id) => {
        return id.id !== deleted_id;
      });
    });
  };

  const editItems = (id, listItem_1, listItem_2) => {
    setListItem({ listItem_1, listItem_2, id });
  };
  return (
    <div>
      <h1>ToDoList</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter item"
          onChange={changeList_1}
          value={listItem.listItem_1}
          required
        />
        <br />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter item"
          onChange={changeList_2}
          value={listItem.listItem_2}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <ol>
        {items.map((item) => {
          return (
            <DeleteItems
              key={item.id}
              id={item.id}
              text={item.listItem_1}
              texts={item.listItem_2}
              onDel={delItems}
              onEdit={editItems}
            />
          );
        })}
      </ol>
    </div>
  );
};
