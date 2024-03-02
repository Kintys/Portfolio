<script setup>
import MasterPage from "@/page/master-page/MasterPage.vue";
import WelcomeContainer from "@/page/home-page/welcome-section/WelcomeContainer.vue";
import BenefitsContainer from "@/page/home-page/welcome-section/BenefitsContainer.vue";
import AboutUsContainer from "@/page/home-page/about-us-section/AboutUsContainer.vue";
import TestimonialsContainer from "@/page/home-page/testimonials-section/TestimonialsContainer.vue";
import PriceListContainer from "@/page/home-page/price-list-section/PriceListContainer.vue";
import ConsultationMailContainer from "@/page/home-page/sing-up-consultation-section/ConsultationMailContainer.vue";
import ContactsInfoContainer from "@/page/home-page/contacts-Info-section/ContactsInfoContainer.vue";
</script>

<template>
    <MasterPage
        ><WelcomeContainer /><BenefitsContainer />
        <AboutUsContainer id="about" /><TestimonialsContainer
            id="testimonials"
        /><PriceListContainer />
        <ConsultationMailContainer /><ContactsInfoContainer id="contacts" />
    </MasterPage>
</template>
<style lang="scss">
@import "@/assets/style/lib/mixins";
</style>
