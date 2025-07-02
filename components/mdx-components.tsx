import React from 'react'

export const mdxComponents = {
  a: (props: any) => (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}