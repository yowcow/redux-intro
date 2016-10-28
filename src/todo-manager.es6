const _mod = {
  toggleTodo(item) {
    return Object.assign(
      {},
      item,
      { completed: !item.completed }
    )
  }
}

export default _mod
