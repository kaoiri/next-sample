import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/layout/Header';
import Wrap from '../components/slot/Wrap';
import Section from '../components/slot/Section';
import Section2 from '../components/slot/Section2';
import Card from '../components/card/Card';
import Columns from '../components/list/Columns';
import Column from '../components/list/Column';
import MainVisual from '../components/title/MainVisual';
import Square from '../components/common/Square';
import HK from '../components/sample/HK';
import HK2 from '../components/sample/HK2';

import { features } from '../data/features';

const items = [
  {
    heading: '<strong>結果</strong>への<strong>コミット</strong>',
    text: '文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。'
  },
  {
    heading: '見出し',
    text: '文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。'
  },
  {
    heading: '見出し',
    text: '文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。文章です。'
  }
];

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

        <Section>
          <Wrap>
            <HK kind="large"></HK>
            <HK2 size="2rem"></HK2>
          </Wrap>
        </Section>

        <Section image="/images/background.jpg">
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

        <Section kind="narrow" color="#efefef">
          <Wrap>
            <Columns>
              {items.map((i, index) => {
                return (
                  <Column items="3">
                    <Square order={index + 1} heading={i.heading} text={i.text} />
                  </Column>
                );
              })}
            </Columns>
          </Wrap>
        </Section>

        <Section2 image="/images/background.jpg">
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
        </Section2>

        <Section2 kind="narrow" color="#efefef">
          <Wrap>
            <Columns>
              {items.map((i, index) => {
                return (
                  <Column items="3">
                    <Square order={index + 1} heading={i.heading} text={i.text} />
                  </Column>
                );
              })}
            </Columns>
          </Wrap>
        </Section2>
      </Main>

      <MyFooter>フッター</MyFooter>
    </div>
  );
}

const HeaderArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
`;

const Main = styled.main``;

const MyFooter = styled.footer`
  padding: 3rem 0;
  background-color: #dfdfdf;
  text-align: center;
  font-size: 2rem;
`;
