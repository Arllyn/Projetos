import React, { useState } from "react"
import { Flex, Box, Text, Image, Heading, Button, Link, AspectRatio, Input } from "@chakra-ui/react"
import guy from "../images/guy.png"
import Activity from "../icons/Activity.png"
import Video from "../icons/Video.png"
import Chart from "../icons/Chart.png"
import play from "../icons/play.png"
import mask from "../icons/Mask.png"
import mask1 from "../icons/mask1.png"
import mask2 from "../icons/mask2.png"
import mask3 from "../icons/mask3.png"
import dribbble from "../icons/dribbble.png"
import facebook from "../icons/facebook.png"
import twitter from "../icons/twitter.png"
import vanessa from "../icons/vanessa.png"
import irea from "../icons/irea.png"
import mason from "../icons/mason.png"
import group from "../icons/group.png"
import logo from "../icons/logo.png"
function Caixa3({ icon, desc, title, iconA, iconB, iconC }) {
  return (
    <Flex
      justifyContent="space-around"
      boxShadow="lg"
      border="1px solid #EBEAED"
      alignItems="center"
      flexDir="column"
      w="370px"
      h="370px"
      rounded="15px"
    >
      <Image w="120px" h="120px" src={icon} />
      <Text fontSize="22px" fontWeight="500" color="#1E0E62" mt="28px">
        {title}
      </Text>
      <Text fontFamily="DM Sans" color="#151439" fontWeight="700" fontSize="14px" opacity="50%" mt="16px">
        {desc}
      </Text>

      <Flex mt="35px">
        <Button w="123px" h="59px">
          <Image src={iconA} />
        </Button>
        <Button w="115px" h="59px">
          <Image src={iconB} />
        </Button>
        <Button w="115px" h="59px">
          <Image src={iconC} />
        </Button>
      </Flex>
    </Flex>
  )
}

function Caixa2({ icon, desc, desc1 }) {
  return (
    <Flex justifyContent="space-around" w="470px" h="237px">
      <Image w="70px" h="70px" src={icon} />
      <Flex w="300px" h="180px" flexDir="column" justifyContent="space-between">
        <Text fontWeight="500" fontSize="18px" color="#0B1B35">
          {desc1}
        </Text>
        <Text fontWeight="700" opacity="50%" fontFamily="DM Sans">
          {desc}
        </Text>
      </Flex>
    </Flex>
  )
}
function Caixa({ icon, desc, desc1, high }) {
  return (
    <Flex rounded="28px" alignItems="center" justifyContent="center" h="508px" w="352px" boxShadow="lg">
      <Flex w="270px" h="432px" justifyContent="space-between" flexDir="column" alignItems="center">
        <Image w="76px" h={high} src={icon} />
        <Heading fontSize="36px">{desc}</Heading>
        <Text textAlign="center" fontSize="18px">
          {desc1}
        </Text>
        <Button rounded="lg" w="162px" h="49px" color="white" bgColor="#FF6600">
          Learn More
        </Button>
      </Flex>
    </Flex>
  )
}
function Botao({ rd, desc, width, hight, fcolor = "black", fsize, bgc, vr = "outline" }) {
  return (
    <Button color={fcolor} fontSize={fsize} rounded={rd} bgColor={bgc} w={width} h={hight} variant={vr}>
      {desc}
    </Button>
  )
}
function Home() {
  return (
    <Box mx="auto" w="1280px">
      <Box>
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Flex justifyContent="space-between" flexDir="column" w="556px" h="459px">
            <Heading color="#0B1B35" fontSize="70px">
              We boost growth for your statup business
            </Heading>
            <Text fontSize="22px">
              Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment
            </Text>
            <Flex alignItems="center" justifyContent="space-between" w="369px">
              <Botao fcolor="white" fsize="18px" desc="Get Started" width="162px" hight="49px" bgc="#FF6600" rd="lg" />
              <Image w="50px" h="60px" src={play} />
              <Link fontSize="18px" style={{ fontWeight: "bold" }}>
                Learn More
              </Link>
            </Flex>
          </Flex>
          <Image w="606px" h="606px" src={guy} />
        </Flex>
      </Box>
      <Box mt="80px">
        <Flex mt="16px" alignItems="center" flexDir="column">
          <Text color="#8A898E" fontSize="14px">
            S E R V I C E
          </Text>
          <Heading color="#0B1B35" fontSize="52px">
            Our Vison & Our Goal
          </Heading>
        </Flex>
        <Flex justifyContent="center">
          <Flex alignItems="center" justifyContent="space-between" mt="100px" w="1280px">
            <Caixa
              icon={Activity}
              desc="Graphic Design"
              desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet."
              high="76px"
            />
            <Caixa
              icon={Video}
              desc="Graphic Design"
              desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet."
              high="57px"
            />
            <Caixa
              icon={Chart}
              desc="Graphic Design"
              desc1="Lorem ipsum dolor sit amet, consecteturadipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet."
              high="76px"
            />
          </Flex>
        </Flex>
      </Box>
      <Box mt="180px">
        <Flex justifyContent="space-between">
          <Flex w="323px" flexDir="column" justifyContent="space-between">
            <Heading color="#1E0E62" fontSize="22px">
              Many Blocks and Components
            </Heading>
            <Text fontSize="16px" color="gray">
              Startup Framework contains components and complex blocks which can easily be integrated into almost any
              design.
            </Text>
            <Botao width="132px" hight="48px" desc="explore" bgc="white" vr="outline" rd="full" fsize="16px" />
          </Flex>
          <Flex>
            <AspectRatio w="688px" h="385px" ratio={1}>
              <iframe src="https://cdn.akamai.steamstatic.com/steam/apps/256820167/movie480_vp9.webm?t=1611908085" />
            </AspectRatio>
          </Flex>
        </Flex>
      </Box>
      <Box mt="149px">
        <Flex justifyContent="center" flexWrap="wrap">
          <Flex flexDir="column">
            <Text textAlign="center" fontSize="14px" color="#8A898E">
              T E S T M O N I A L S
            </Text>
            <Heading color="#0B1B35">What Clients say about us</Heading>
          </Flex>
          <Flex alignItems="center" mt="98px" w="970px" flexWrap="wrap" justifyContent="space-between">
            <Caixa2
              icon={mask2}
              desc1="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support"
              desc="RAYHAN CURRAN"
            />
            <Caixa2
              icon={mask3}
              desc="GENE WHITFIELD"
              desc1="The most important part of the Startup Framework is the samples"
            />
            <Caixa2
              icon={mask}
              desc="KAYLEY FRAME"
              desc1="The most important part of the Startup Framework is the samples"
            />
            <Caixa2
              icon={mask1}
              desc="ALLAN KIM"
              desc1="I’ve built my website with Startup just in one day, and it was ready-to-go. "
            />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex alignItems="center" flexDir="column">
          <Text>OUR TEAM</Text>
          <Heading>Meet The Team</Heading>
        </Flex>
        <Flex>
          <Flex w="100%" justifyContent="space-between" alignItems="center" mt="53px">
            <Caixa3
              icon={vanessa}
              desc="UI DESIGNER"
              title="Vanessa Laid"
              iconA={twitter}
              iconB={facebook}
              iconC={dribbble}
            />
            <Caixa3
              icon={mason}
              desc="CLIENT MANAGER"
              title="Mason Campbell"
              iconA={twitter}
              iconB={facebook}
              iconC={dribbble}
            />
            <Caixa3 icon={irea} desc="UI DESIGNER" title="Irea" iconA={twitter} iconB={facebook} iconC={dribbble} />
          </Flex>
        </Flex>
      </Box>
      <Box mt="110px">
        <Flex flexDir="column" alignItems="center">
          <Text fontSize="14px" fontWeight="700" color="#8A898E" fontFamily="Ageo">
            OUR TEAM
          </Text>
          <Heading color="#0B1B35">Subscribe Our Newsleter</Heading>
        </Flex>
        <Flex justifyContent="space-between" mt="80px">
          <Image src={group} />
          <Flex justifyContent="space-between" flexDir="column" w="700px" h="278px">
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cupiditate voluptatem vel at? Nihil
              eaque saepe pariatur sit atque tenetur, id reiciendis quos sed? Omnis enim a voluptate distinctio quod.
            </Text>
            <Input size="lg" rounded="50px" boxShadow="lg" placeholder="Your E-mail here..." focusBorderColor="gray" />
            <Button color="white" bgColor="#FF6600">
              Subscribe Our Newsletter
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box mt="184px">
        <Flex justifyContent="space-between">
          <Flex justifyContent="space-between" w="527px" h="27px">
            <Image src={logo} />
            <Text fontSize="16px" color="#1E0E62">
              © 2020 Epixelab. All rights reserved.
            </Text>
          </Flex>
          <Flex w="455px" mb="108px" justifyContent="space-between">
            <Link fontSize="16px" color="#1E0E62">
              Portifólio
            </Link>
            <Link fontSize="16px" color="#1E0E62">
              How it Works
            </Link>
            <Link fontSize="16px" color="#1E0E62">
              Pricing
            </Link>
            <Link fontSize="16px" color="#1E0E62">
              Login
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
export default Home
