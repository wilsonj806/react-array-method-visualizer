# Things Learned

component mounting and lifecycle

The React property *Key* is internal and only accesible by React

Prefer to separate data analysis from React components
  - i.e if it's not rendering, a state var, or prop, it's probably better if its separate
    - i.e data analysis or processing type things

Prefer to render similar components using Array.prototype.map()
```js
// bad

render() {
  return(
    <Component
      key={1}
      prop1={prop1}
    />

    <Component
      key={2}
      prop1={prop1}
    />
    // etc
  )
}

// better
render() {
  const arr = [0,1,2,3]
  const renderList = arr.map((val) => {
    return (
      <Component
        key={val}
        prop1={prop1}
      />
    )
  })
  return (
    {renderList}
  )
}
```