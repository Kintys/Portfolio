<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import WelcomeSection from '@/pages/home-page/welcome-section/WelcomeSection.vue'
import TodaysSection from '@/pages/home-page/todays-section/TodaysSection.vue'
import CategorySection from '@/pages/home-page/categories-section/CategorySection.vue'
import BestProductSection from '@/pages/home-page/best-product/BestProductSection.vue'
import SpecialOfferSection from '@/pages/home-page/special-offer/SpecialOfferSection.vue'
import OurProductSection from '@/pages/home-page/our-product/OurProductSection.vue'
import NewArrivalSection from '@/pages/home-page/new-arrival/NewArrivalSection.vue'
</script>

<template>
    <MainMasterPage>
        <WelcomeSection />
        <TodaysSection />
        <CategorySection />
        <BestProductSection />
        <BannerWrapper />
        <SpecialOfferSection />
        <OurProductSection />
        <NewArrivalSection />
    </MainMasterPage>
</template>

<style lang="scss">
@import '@/style/lib/variables';
.container {
    padding-top: 200px;
}
</style>
