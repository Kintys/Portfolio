<script setup>
import MasterPage from '@/page/master-page/MasterPage.vue'
import WelcomeContainer from '@/page/home-page/welcome-section/WelcomeContainer.vue'
import BenefitsSection from '@/page/home-page/welcome-section/BenefitsSection.vue'
</script>

<template>
    <MasterPage><WelcomeContainer /><BenefitsSection /> </MasterPage>
</template>
<style lang="scss">
@import '@/assets/style/lib/mixins';
</style>
