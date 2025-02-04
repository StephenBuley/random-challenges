export function evaluatePostfix(postfix: string) {
  const stack: number[] = []
  for (const token of postfix) {
    if (/\d/.test(token)) {
      stack.push(parseInt(token))
    } else {
      const b = stack.pop()
      const a = stack.pop()
      if (a === undefined || b === undefined) {
        continue
      }
      switch (token) {
        case '+':
          stack.push(a + b)
          break
        case '-':
          stack.push(a - b)
          break
        case '*':
          stack.push(a * b)
          break
        case '/':
          stack.push(a / b)
          break
      }
    }
  }
  return stack.pop() || 0
}
