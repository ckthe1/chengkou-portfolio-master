import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl  pt-6 md:pt-12 text-align left`};
`
// text - justify   font-sans
const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl `};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Cheng-kou Tongkhuya (Ck).
        </BigTitle>
        <Subtitle>Creating noice pure gold experiences for the next generation.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Raf reading log"
            link="https://chengkou-solo-project.herokuapp.com/#/home"
            bg="linear-gradient(to right, #0364af 0%, #0bd8e2 100%)"
          >
            This App was created to help grade school kids to keep records of their daily readings, and help teachers view
            their students reading logs at a glance or in details if they wanted to.
          </ProjectCard>
          <ProjectCard
            title="the joker app"
            link="https://server-side-cal.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This App was one of the code challenge, I had to create while at Prime Digital Academy. Give it a try.
          </ProjectCard>
          <ProjectCard
            title="the App of ck"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            My other work App.
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #4402af 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Being a Full Stack Software Engineer has unified my professional background and educational 
            experiences into a new and greater level of understanding of technology, from the basic electronic and hardware components 
            to the highest level of software programing.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
             &nbsp; &nbsp; &nbsp; &nbsp;At the age of nine, I had the opportunity to be introduced to the world of computer programing 
            language through my older brother’s Oric Atmos computer, which used “Basic” as its primary language. 
            I used to help my brother  type basic codes to create video games so we could play,  it was very fun. 
            Now, my programing journey has come full circle, gaining new skills and knowledge each step of the way 
            from many different fields. It feels like my long life training is finally complete. &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          
            “Then I am a Jedi”, Luke Skywalker (Star Wars Episode V, The Empire Strikes Back, 1980) after returning to the Dagobah system
            to complete his training from master Yoda.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/chengkoutongkhuya">Linkedin</a> {' '}
            {/* <a href="https://www.instagram.com/lekoarts.de/">Instagram</a> */}
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Cheng-kou Tongkhuya.{' '}
          <a href="https://github.com/ckthe1">Github Repository</a>. Made by{' '}
          <a >CkArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
