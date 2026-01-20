<template>
  <Content>
    <Section
      v-for="section in sections"
      :key="section.id"
      :id="section.id"
      :ref="setSectionRef(section.id)"
      :data-section-id="section.id"
    >
      <SectionHeader>
        <SectionTitle>{{ section.title }}</SectionTitle>
      </SectionHeader>
      <CardGrid>
        <Card v-for="item in section.items" :key="item.q">
          <CardTitle>{{ item.q }}</CardTitle>
          <Points>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </Points>
          <Note v-if="item.note">{{ item.note }}</Note>
        </Card>
      </CardGrid>
    </Section>
  </Content>
</template>

<script setup>
import styled from "vue3-styled-components";
import { onBeforeUnmount, onMounted, ref } from "vue";

defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["active-change"]);
const sectionElements = ref({});
const observer = ref(null);

const setSectionRef = (id) => (el) => {
  if (el) {
    sectionElements.value[id] = el;
  }
};

const updateActiveSection = (entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .map((entry) => ({
      id: entry.target.dataset.sectionId,
      top: entry.boundingClientRect.top,
    }))
    .sort((a, b) => a.top - b.top);

  if (visible.length > 0) {
    emit("active-change", visible[0].id);
  }
};

onMounted(() => {
  observer.value = new IntersectionObserver(updateActiveSection, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: [0, 0.2, 0.6],
  });

  Object.values(sectionElements.value).forEach((el) => {
    observer.value.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: fadeUp 0.7s ease both;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SectionHeader = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

const SectionTitle = styled("h2")`
  font-family: "Paperlogy", serif;
  font-size: 24px;
  margin: 0;
  color: #1f3b25;
`;

const CardGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const Card = styled("article")`
  background: rgba(255, 255, 255, 0.82);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 24px rgba(29, 32, 36, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardTitle = styled("h3")`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #1f3b25;
`;

const Points = styled("ul")`
  margin: 0;
  padding-left: 18px;
  line-height: 1.6;
  color: #2d4633;
  font-size: 14px;

  li {
    white-space: pre-line;
  }
`;

const Note = styled("p")`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #2f5a36;
  background: #e6f5e4;
  padding: 10px 12px;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  &::before {
    content: "🍀";
    line-height: 1.2;
    font-size: 14px;
    margin-top: 1px;
  }
`;
</script>
