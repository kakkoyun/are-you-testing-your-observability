import React from 'react'

export const theme = {
  // Customize your presentation theme here.
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        color: '#9EFEFF',
        position: 'fixed',
        left: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      @bwplotka
    </div>
    <div
      css={{
        color: '#9EFEFF',
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      @kakkoyun
    </div>
  </div>
)

export default {
  Provider,
  // theme
}
