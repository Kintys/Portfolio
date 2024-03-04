<template>
    <MasterPage
        ><HeadingContainer />
        <MasterTeamSection id="portfolio" /><ConsultationMailContainer />
        <ContactsInfoContainer /><BookPageSection
    /></MasterPage>
</template>

<script setup>
import MasterPage from "@/page/master-page/MasterPage.vue";
import HeadingContainer from "@/page/team-masters-page/headline-section/HeadingContainer.vue";
import MasterTeamSection from "@/page/team-masters-page/master-portfolio/MasterTeamSection.vue";
import ConsultationMailContainer from "@/page/home-page/sing-up-consultation-section/ConsultationMailContainer.vue";
import ContactsInfoContainer from "@/page/home-page/contacts-Info-section/ContactsInfoContainer.vue";
import BookPageSection from "@/page/book-page/BookPageSection.vue";
</script>

<style lang="scss" scoped></style>
