<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import WelcomeSection from '@/pages/home-page/welcome-section/WelcomeSection.vue'
import TodaysSection from '@/pages/home-page/todays-section/TodaysSection.vue'
import { useAuthStore } from '@/stores/auth.js'
import CategorySection from '@/pages/home-page/categories-section/CategorySection.vue'
import BestProductSection from '@/pages/home-page/best-product/BestProductSection.vue'
import SpecialOfferSection from '@/pages/home-page/special-offer/SpecialOfferSection.vue'
import OurProductSection from '@/pages/home-page/our-product/OurProductSection.vue'
const { loginWithGoogleAccount, logOut } = useAuthStore()
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
        <div class="container">
            <v-btn type="button" @click="loginWithGoogleAccount">google</v-btn>
            <v-btn type="button" @click="logOut">logout</v-btn>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi
            deserunt praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ut dolor nulla reiciendis autem non quasi modi deserunt
            praesentium, minima esse, laborum delectus aut quod corrupti eaque quo earum, incidunt labore?
        </div></MainMasterPage
    >
</template>

<style lang="scss">
@import '@/style/lib/variables';
.container {
    padding-top: 200px;
}
</style>
