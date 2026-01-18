<template>
  <Hero>
    <HeroText>
      <Title>Today I Learned</Title>
      <Subtitle>기초부터 차근차근 쌓아가는 개발 기록 🍀</Subtitle>
    </HeroText>
  </Hero>
</template>

<script setup>
import styled from "vue3-styled-components";

const Hero = styled("section")`
  margin: 20px auto 60px;
  max-width: 1200px;
  position: relative;
  z-index: 1;
  animation: slideIn 0.4s ease-out both;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroText = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled("h1")`
  font-family: "Paperlogy", serif;
  font-weight: 900;
  font-size: clamp(28px, 4.6vw, 48px);
  line-height: 1.05;
  margin: 0;
`;

const Subtitle = styled("p")`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  color: #35543a;
  max-width: 320px;
`;
</script>
