"use client"
import HomeBanner from './components/HomeBanner'
import { TopItem } from './components/TopItem'
import MainLayout from './layout/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout >
        <HomeBanner />
        <TopItem />
      </MainLayout>
    </>
  )
}
