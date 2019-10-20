module.exports = (tree) => {
  const treeWalker = (trees) => {
    const stack = []
    trees.forEach(node => {
      buff.push(node.val)
      stack.push(...node.children)
    })
    if (stack.length) { treeWalker(stack) }
  }

  const buff = []
  treeWalker([tree])
  return buff
}