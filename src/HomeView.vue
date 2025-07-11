<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import HomeSection from './sections/HomeSection.vue'
import AboutSection from './sections/AboutSection.vue'
import PortfolioSection from './sections/PortfolioSection.vue'
import DateSection from './sections/DateSection.vue'
</script>

<template>
  <div>
    <NavigationBar />
    <HomeSection />
    <DateSection />
    <AboutSection />
    <PortfolioSection />
    <FooterBar />
  </div>
</template>
