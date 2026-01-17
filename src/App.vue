<template>
  <Page>
    <HeroSection />
    <SectionList :sections="sections" @active-change="handleActiveChange" />
    <SectionNav :sections="sections" :active-id="activeId" @navigate="scrollToSection" />
  </Page>
</template>

<script setup>
import styled from "vue3-styled-components";
import { ref } from "vue";
import HeroSection from "./components/HeroSection.vue";
import SectionList from "./components/SectionList.vue";
import SectionNav from "./components/SectionNav.vue";
import { sections } from "./data/sections";

const activeId = ref(sections[0]?.id ?? "");

const handleActiveChange = (id) => {
  activeId.value = id;
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Page = styled("main")`
  min-height: 100vh;
  background: radial-gradient(circle at 15% 20%, #e8f6e6 0%, transparent 48%),
    radial-gradient(circle at 85% 10%, #f2fbef 0%, transparent 45%),
    linear-gradient(140deg, #eef8ea 0%, #f6fbf2 45%, #e9f5e5 100%);
  color: #1b1b1f;
  font-family: "Pretendard", sans-serif;
  padding: 40px 84px 64px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -120px;
    right: -120px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(170, 220, 170, 0.5), transparent 70%);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -150px;
    left: -120px;
    width: 300px;
    height: 300px;
    border-radius: 40% 60% 60% 40%;
    background: radial-gradient(circle, rgba(198, 230, 198, 0.4), transparent 70%);
    z-index: 0;
  }

  @media (max-width: 900px) {
    padding: 36px 20px 56px;
  }
`;
</script>
