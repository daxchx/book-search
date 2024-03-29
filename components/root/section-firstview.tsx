'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function FirstView() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
      <div className="lg:mt-20 lg:px-14" ref={ref}>
        <div
          className="hidden justify-center lg:flex lg:w-full"
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1.7s',
          }}
        >
          <Image src="/icons/icon-logo.svg" alt="search-book-app" width={160} height={160} />
        </div>
        <h1
          className="mt-[40px] p-6 text-center text-[48px] font-extrabold leading-none tracking-tighter text-[#171717] lg:mt-[80px] lg:text-[60px]"
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          Book Search App using Google Books API
        </h1>
        <p
          className="px-8 py-10 text-center text-[18px] leading-[1.8] text-[#666]"
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .5s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          <br />
          repellendus sit! Reprehenderit, et nam necessitatibus fugiat nulla a quae deserunt. Porro
        </p>
        <div
          className="flex items-center justify-center gap-x-4"
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s, opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s',
          }}
        >
          <Link href="/search" className="font-meidum rounded-lg bg-[#171717] px-3.5 py-4 text-sm text-white">
            本を検索する
          </Link>
          <Link href="/library" className="font-meidum rounded-lg border border-[#ebebeb] px-3.5 py-4 text-sm text-[#171717]">
            マイライブラリを見る
          </Link>
        </div>
      </div>
    </>
  )
}
