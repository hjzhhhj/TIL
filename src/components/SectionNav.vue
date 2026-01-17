<template>
  <Nav>
    <NavList>
      <NavItem v-for="section in sections" :key="section.id">
        <NavButton
          type="button"
          :aria-current="section.id === activeId ? 'true' : 'false'"
          :data-active="section.id === activeId"
          @click="handleClick(section.id)"
        >
          <NavDot :data-active="section.id === activeId" />
          <span>{{ section.title }}</span>
        </NavButton>
      </NavItem>
    </NavList>
  </Nav>
</template>

<script setup>
import styled from "vue3-styled-components";

defineProps({
  sections: {
    type: Array,
    required: true,
  },
  activeId: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["navigate"]);

const handleClick = (id) => {
  emit("navigate", id);
};

const Nav = styled("aside")`
  position: fixed;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(140, 170, 140, 0.35);
  border-radius: 16px;
  padding: 12px 8px;
  backdrop-filter: blur(10px);
  z-index: 2;

  @media (max-width: 900px) {
    position: static;
    transform: none;
    margin-top: 24px;
    width: fit-content;
  }
`;

const NavList = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled("li")`
  margin: 0;
`;

const NavButton = styled("button")`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  padding: 6px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #2f4a34;
  cursor: pointer;

  &[data-active='true'] {
    background: rgba(184, 220, 184, 0.55);
    color: #19301f;
  }
`;

const NavDot = styled("span")`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(47, 74, 52, 0.35);

  &[data-active='true'] {
    background: #1c6a2e;
  }
`;
</script>
