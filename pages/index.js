import Head from 'next/head'
import styled from 'styled-components'
import Sitelogo from '../components/common/Sitelogo'
import Nav from '../components/navigation/Nav'
import Wrap from '../components/common/Wrap'
import Card from '../components/card/Card'
import Columns from '../components/list/Columns'
import Column from '../components/list/Column'

import { features } from '../data/features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrap>
        <MyHeader>
          <Sitelogo image="/vercel.svg"></Sitelogo>

          <Nav></Nav>
        </MyHeader>
      </Wrap>

      <Main>
        <Wrap>
          <Columns>
            {features.map((f) => {
              return (
                <Column items="3">
                  <Card name={f.name} message={f.message}></Card>
                </Column>
              )
            })}
          </Columns>
        </Wrap>
      </Main>

      <MyFooter>フッター</MyFooter>
    </div>
  )
}

const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
`

const Main = styled.main`
  padding: 60px 0;
`

const MyFooter = styled.footer`
  padding: 3rem 0;
  background-color: #dfdfdf;
  text-align: center;
  font-size: 2rem;
`
