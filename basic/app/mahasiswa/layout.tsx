import React from 'react'
import "../globals.css"

export default function layout({ children }: LayoutProps<"/">) {
  return (
    <>
    <div>Header</div>
    <div>{children}</div>
    <div>Footer</div>
    </>
  )
}