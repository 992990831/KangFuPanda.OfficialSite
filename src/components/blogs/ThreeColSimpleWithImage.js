import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
// const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const FourColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/4`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
  'height: 40rem; width: 20rem',
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://www.kangfupanda.com/resources/specialist/specialist-1.png",
      category: "Event Tips",
      title: "Finding Amazing Events Near You - Fast, Cheap & Free",
      url: "http://app.kangfupanda.com/#/found"
    },
    {
      imageSrc:
        "https://www.kangfupanda.com/resources/specialist/specialist-2.png",
      category: "Reviews",
      title: "The Top Rated Musical Concerts Worldwide in 2019",
      url: "http://app.kangfupanda.com/#/found"
    },
    {
      imageSrc:
        "https://www.kangfupanda.com/resources/specialist/specialist-3.png",
      category: "Discover",
      title: "This female band is making buzz all over the world",
      url: "http://app.kangfupanda.com/#/found"
    },
    {
      imageSrc:
        "https://www.kangfupanda.com/resources/specialist/specialist-4.png",
      category: "Discover",
      title: "This female band is making buzz all over the world",
      url: "http://app.kangfupanda.com/#/found"
    }
  ];
  return (
    <Container>
      <Content>
        <a name="Specialist"></a>
        <HeadingInfoContainer>
          <HeadingTitle>特约专家</HeadingTitle>
          {/* <HeadingDescription>Some amazing blog posts that are written by even more amazing people.</HeadingDescription> */}
        </HeadingInfoContainer>
        <FourColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                {/* <Category>{post.category}</Category>
                <Title>{post.title}</Title> */}
                <Link href={post.url}>更多</Link>
              </Card>
            </Column>
          ))}
        </FourColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
