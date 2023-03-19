import Image from 'next/image'
import React from 'react'
import file_icon from '/public/images/file.svg'
import fileStyles from '../styles/components/File.module.scss'

interface FileProps {
  url: string
  name: string
}

export default function File({ url, name }: FileProps) {
  return (
    <a className={fileStyles.file} download href={url}>
      <Image
        className={fileStyles.fileIcon}
        src={file_icon}
        alt="file icon"
      />
      <p className={fileStyles.fileText}>{name}</p>
    </a>
  )
}
