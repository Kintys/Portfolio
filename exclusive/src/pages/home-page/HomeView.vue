<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import WelcomeSection from '@/pages/home-page/welcome-section/WelcomeSection.vue'
import TodaysSection from '@/pages/home-page/todays-section/TodaysSection.vue'
import { useAuthStore } from '@/stores/auth.js'
const { loginWithGoogleAccount, logOut } = useAuthStore()
</script>

<template>
    <MainMasterPage>
        <WelcomeSection />
        <TodaysSection />
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
