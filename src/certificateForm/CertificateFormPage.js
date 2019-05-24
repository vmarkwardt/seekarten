import React from 'react'
import { H2 } from '../commons/headings'
import FormCertificate from './FormCertificate'

export default function ChartPage({ title, categoryList, onProgressChange }) {
  return (
    <main>
      <H2 title={'Zertifikat eintragen'} />
      <FormCertificate />
    </main>
  )
}
