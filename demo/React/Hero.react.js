import { IntroParallax, LogoParallax, SocialBar } from "@components";
import { mixins, styled } from "@styles";
import React, { useCallback } from "react";
import { config, useSpring } from "react-spring";
import tw from "twin.macro";

console.log("start");

const Logo = styled(LogoParallax)`
  ${tw`z-0 absolute right-0
     w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/3 xl:w-1/4
     mr-3 sm:mr-10 md:mr-24 lg:mr-40 xl:mr-64`}
`;

const Intro = styled(IntroParallax)`
  ${tw`z-10`}
`;

const Wrapper = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full`}
`;

const Container = styled.div`
  ${mixins.flexCenter}
  ${mixins.fillContainer}
  ${tw`flex-col`}
  ${SocialBar.SC} {
    ${tw`mt-24 sm:mt-16`}
  }
`;

const spring = () => ({
  xy: [-100, -100],
  config: config.gentle
});

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = delta => (x, y) => `translate3d(${x / delta}px,${y / delta}px,0)`;

const Hero = () => {
  const [{ xy }, set] = useSpring(spring);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) => set({ xy: calc(x, y) }),
    [set]
  );
  const transform = useCallback(delta => ({ transform: xy.to(trans(delta)) }), [
    xy
  ]);

  return (
    <Container onMouseMove={onMouseMove}>
      <Wrapper>
        <Intro transform={transform} />
        <Logo transform={transform} />
      </Wrapper>
      <SocialBar />
    </Container>
  );
};

export default Hero;
