import Agent from '@/components/agent'
import React from 'react'

const page = () => {
  return (
    <>
        <h3>Interiew Generation </h3>
         
         < Agent userName="you" userId="user1" type="generate" />
    </>
  )
}

export default page