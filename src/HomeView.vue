<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import MainSection from './sections/MainSection.vue'
import AboutSection from './sections/AboutSection.vue'
import PortfolioSection from './sections/PortfolioSection.vue'
</script>

<template>
  <div>
    <NavigationBar />
    <MainSection />
    <AboutSection />
    <PortfolioSection />
    <FooterBar />
  </div>
</template>
