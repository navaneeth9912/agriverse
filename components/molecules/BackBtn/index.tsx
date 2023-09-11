'use client'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Button } from '~/components/Atoms/Button'
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter()
  return (
        <Button variant='primary' typea='outlined' width='120px' height='35px' onClick={() => router.back()}>
           <BiArrowBack fontSize="18px" />  Back
        </Button>
  )
}

export default BackBtn