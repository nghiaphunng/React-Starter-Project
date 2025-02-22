const TodoData = (props) => {
  // console.log(">>> check props: ", props);
  // const { data } = props;
  // console.log("check data: ", data);

  const { todoList } = props;

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className="todo-item" key={item.id}>
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
