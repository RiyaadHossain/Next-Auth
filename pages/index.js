import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession, signOut, getSession } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session }) : Guest()}
    </div>
  )
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>

      <div className='flex justify-center'>
        <Link href={'/login'}><a className='mt-5 px-10 py-3 rounded-md bg-blue-500 text-gray-50'>Sign In</a></Link>
      </div>

      <div className='flex justify-center'>
        <Link href={'/profile'}><a className='mt-5 px-10 py-3 rounded-md bg-indigo-500 text-gray-50'>Profile Page</a></Link>
      </div>
    </main>
  )
}

// Authorize User
function User({ session }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

      <div className='details'>
        <h5>{session.user?.email}</h5>
        <h5>{session.user?.name}</h5>
      </div>

      <div className="flex justify-center">
        <button onClick={() => signOut()} className='mt-5 px-10 py-3 bg-red-400 text-gray-50 rounded-lg'>Sign Out</button>
      </div>

      <div className='flex justify-center'>
        <Link href={'/profile'}><a className='mt-5 px-10 py-3 rounded-md bg-indigo-500 text-gray-50'>Profile Page</a></Link>
      </div>
    </main>
  )
}
