import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Button,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import guy from "../images/guy.png";
import Activity from "../icons/Activity.png";
import Video from "../icons/Video.png";
import Chart from "../icons/Chart.png";
import play from "../icons/play.png";
function Caixa({ icon, desc, desc1, high }) {
  return (
    <Flex
      rounded='28px'
      alignItems='center'
      justifyContent='center'
      h='508px'
      w='352px'
      boxShadow='lg'
    >
      <Flex
        w='270px'
        h='432px'
        justifyContent='space-between'
        flexDir='column'
        alignItems='center'
      >
        <Image w='76px' h={high} src={icon} />
        <Heading fontSize='36px'>{desc}</Heading>
        <Text textAlign='center' fontSize='18px'>
          {desc1}
        </Text>
        <Button rounded='lg' w='162px' h='49px' color='white' bgColor='#FF6600'>
          Learn More
        </Button>
      </Flex>
    </Flex>
  );
}
function Botao({ rd, desc, width, hight, fcolor, fsize, bgc, vr }) {
  return (
    <Button
      color={fcolor}
      fontSize={fsize}
      rounded={rd}
      bgColor={bgc}
      w={width}
      h={hight}
      variant={vr}
    >
      {desc}
    </Button>
  );
}
function Home() {
  return (
    <Box mx='auto' w='1280px'>
      <Box>
        <Flex justifyContent='center' alignItems='center' w='100%'>
          <Flex
            justifyContent='space-between'
            flexDir='column'
            w='556px'
            h='459px'
          >
            <Heading color='#0B1B35' fontSize='70px'>
              We boost growth for your statup business
            </Heading>
            <Text fontSize='22px'>
              Our goal is top at the heart of creativity services industry as a
              digital creator. In has a after comment
            </Text>
            <Flex alignItems='center' justifyContent='space-between' w='369px'>
              <Botao
                fcolor='white'
                fsize='18px'
                desc='Get Started'
                width='162px'
                hight='49px'
                bgc='#FF6600'
                rd='lg'
              />
              <Image w='50px' h='60px' src={play} />
              <Link fontSize='18px' style={{ fontWeight: "bold" }}>
                Learn More
              </Link>
            </Flex>
          </Flex>
          <Image w='606px' h='606px' src={guy} />
        </Flex>
      </Box>
      <Box mt='80px'>
        <Flex mt='16px' alignItems='center' flexDir='column'>
          <Text color='#8A898E' fontSize='14px'>
            S E R V I C E
          </Text>
          <Heading color='#0B1B35' fontSize='52px'>
            Our Vison & Our Goal
          </Heading>
        </Flex>
        <Flex justifyContent='center'>
          <Flex
            alignItems='center'
            justifyContent='space-between'
            mt='100px'
            w='1280px'
          >
            <Caixa
              icon={Activity}
              desc='Graphic Design'
              desc1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.'
              high='76px'
            />
            <Caixa
              icon={Video}
              desc='Graphic Design'
              desc1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.'
              high='57px'
            />
            <Caixa
              icon={Chart}
              desc='Graphic Design'
              desc1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.'
              high='76px'
            />
          </Flex>
        </Flex>
      </Box>
      <Box mt='180px'>
        <Flex justifyContent='space-between'>
          <Flex
            w='323px'
            h='343px'
            flexDir='column'
            justifyContent='space-between'
          >
            <Heading color='#1E0E62' fontSize='22px'>
              Many Blocks and Components
            </Heading>
            <Text fontSize='16px' color='gray'>
              Startup Framework contains components and complex blocks which can
              easily be integrated into almost any design.
            </Text>
            <Botao
              width='132px'
              hight='48px'
              desc='explore'
              bgc='white'
              vr='outline'
              rd='full'
              fsize='16px'
            />
          </Flex>
          <Flex>
            <AspectRatio w='688px' h='385px' ratio={1}>
              <iframe
                src='https://cdn.akamai.steamstatic.com/steam/apps/256820167/movie480_vp9.webm?t=1611908085'
                allowFullScreen
              />
            </AspectRatio>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
export default Home;
