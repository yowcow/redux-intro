const module = {
  toggleTodo(item) {
    return Object.assign(
      {},
      item,
      { completed: !item.completed }
    )
  }
}

export default module
