<script setup>
import MasterPage from '@/page/master-page/MasterPage.vue'
import WelcomeContainer from '@/page/home-page/welcome-section/WelcomeContainer.vue'
import BenefitsContainer from '@/page/home-page/welcome-section/BenefitsContainer.vue'
import AboutUsContainer from '@/page/home-page/about-us-section/AboutUsContainer.vue'
</script>

<template>
    <MasterPage><WelcomeContainer /><BenefitsContainer /> <AboutUsContainer /> </MasterPage>
</template>
<style lang="scss">
@import '@/assets/style/lib/mixins';
</style>
