import React from 'react'
import { getSession, useSession } from 'next-auth/react'
import Link from "next/link"

export default function Profile() {

  const { data: session } = useSession()

  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold mt-16'>Hello <span className='text-cyan-600'>{session?.user?.name}</span>, welcome to your Profile</h1>
      <Link href='/'><button className='bg-teal-500 px-5 py-2 rounded-md text-white mt-6'>Go Home</button></Link>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return { props: session }
}