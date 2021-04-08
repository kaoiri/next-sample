import Head from 'next/head'
import styled from 'styled-components'
import Header from '../components/layout/Header'
import Wrap from '../components/slot/Wrap'
import Section from '../components/slot/Section'
import Card from '../components/card/Card'
import Columns from '../components/list/Columns'
import Column from '../components/list/Column'
import MainVisual from '../components/title/MainVisual'
import Square from '../components/common/Square'

import { features } from '../data/features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderArea>
        <Wrap>
          <Header></Header>
        </Wrap>
      </HeaderArea>

      <Main>
        <MainVisual></MainVisual>

        <Section kind="top">
          <Wrap>
            <Columns>
              {features.map((f) => {
                return (
                  <Column items="3">
                    <Card name={f.name} message={f.message}></Card>
                  </Column>
                );
              })}
            </Columns>
          </Wrap>
        </Section>

        <Section kind="normal">
          <Wrap>
            <Columns>
              <Column items="3">
                <Square heading="見出し" text="文章です。"></Square>
              </Column>

              <Column items="3">
                <Square heading="見出し" text="文章です。"></Square>
              </Column>

              <Column items="3">
                <Square heading="見出し" text="文章です。"></Square>
              </Column>
            </Columns>
          </Wrap>
        </Section>
      </Main>

      <MyFooter>フッター</MyFooter>
    </div>
  )
}

const HeaderArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
`

const Main = styled.main`
`

const MyFooter = styled.footer`
  padding: 3rem 0;
  background-color: #dfdfdf;
  text-align: center;
  font-size: 2rem;
`
