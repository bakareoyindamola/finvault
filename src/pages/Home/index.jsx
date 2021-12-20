import React from 'react';
import { Wrapper, InnerWrapper, HeaderWrapper, SubText, HeaderText } from './Home';
import { Sidebar } from "../../components";
import TransactionsPage from "../Transactions";

function Home() {
  return (
    <Wrapper>
      <Sidebar />
      <InnerWrapper>
        <HeaderWrapper>
          <SubText>OVERVIEW</SubText>
          <HeaderText>Dashboard</HeaderText>
        </HeaderWrapper>

        <TransactionsPage />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Home;
