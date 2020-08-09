import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
// const Container = styled.div`
//   ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
//   background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
// `;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-color: #669966
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-blue-200 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h2`
  ${tw`text-xl text-left sm:text-2xl lg:text-2xl xl:text-2xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#About">
        About
      </NavLink>
      <NavLink href="#Blog">
        Blog
      </NavLink>
      <NavLink href="#Locations">
        Locations
      </NavLink>
      <NavLink href="#Pricing">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <a name="About" style={{display:'none'}}></a>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            <p>一键平台聚集了众多经过平台认证的消费医疗领域的资深专家，在医学护肤，形体及体重管理，营养治疗等诸多消费医疗领域拥有最丰富的医学级健康内容。</p>
            <br />
            <p>一键平台有针对性的筛选最具科学循证支持的专业品牌，针对品牌方专业化精准化营销的需求，提供完整的内容营销多渠道推广解决方案。</p>
          <br />
          <p>没有各种低俗内容，没有明星八卦，一健平台致力于为消费者提供最纯净最专业的消费医疗知识内容分享，消费者与专家直接深度互动。一健点评，医学护肤，安全享瘦。</p>
          </Heading>
          {/* <PrimaryAction>Search Events Near Me</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
