import React from 'react'
import { Outlet } from 'react-router'
import RouterHeader from '../components/session25/RouterHeader'

export default function ReactRedux() {
  return (
    <>
      <RouterHeader />
      <Outlet />
    </>
  )
}
