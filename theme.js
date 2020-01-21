import React, { useState, } from 'react'
import * as themes from 'mdx-deck/themes'

const names = Object.keys(themes)

const Provider = props => {
  const [name, _] = useState(names[0])

  const baseTheme = themes[name]
  const theme = typeof baseTheme === 'function' ? baseTheme({}) : baseTheme

  return (
    <div>
      {props.children}
      <div
        css={{
          color: theme.colors.text,
          position: 'fixed',
          right: 0,
          bottom: 0,
          margin: 16,
          fontSize: '20px'
        }}
      >
        <div>@bwplotka</div>
        <div>@kakkoyun</div>
      </div>
    </div>
  )
}

export default {
  Provider,
}
