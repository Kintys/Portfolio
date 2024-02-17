<template>
    <header class="header">
        <div class="container">
            <RouterLink :to="{ name: 'home' }" class="logo">
                <v-img width="42" max-height="44" aspect-ratio="1" cover :src="logoImg"></v-img>
                <h2>Cool Barber</h2>
            </RouterLink>
            <NavBar class="nav-bar" />
            <div class="contacts">
                <div class="address">
                    <a href="302 W 50th St, NY, NY 10019" class="address-text">302 W 50th St, NY, NY 10019</a>
                    <v-img width="42" max-height="44" :src="localImg"></v-img>
                </div>
                <div class="phone">
                    <a href="8 (800) 000-00-00" class="phone-text"
                        >8 (800) 000-00-00
                        <sub>Daily from 9 to 20</sub>
                    </a>
                    <v-img width="42" max-height="44" :src="phoneImg"></v-img>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import NavBar from '@/page/master-page/header/NavBar.vue'
import logoImg from '@/assets/img/header/logo/logo.svg'
import localImg from '@/assets/img/header/icon/local.svg'
import phoneImg from '@/assets/img/header/icon/phone.svg'
</script>

<style lang="scss" scoped>
@import '@/assets/style/lib/mixins';
.header {
    // max-height: toRem(120);
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: $mainColor;
    color: white;
}
.container {
    font-family: Fira Sans;
    @include adaptiveValue('padding-top', 50, 30);
    @include adaptiveValue('padding-bottom', 50, 30);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    @include adaptiveValue('column-gap', 10, 8);
}
.logo {
    display: flex;
    @include adaptiveValue('column-gap', 15, 10);
    align-items: center;
    @include adaptiveValue('margin-right', 30, 10);
}
.nav-bar {
}
.contacts {
    display: flex;
    align-items: center;
    @include adaptiveValue('column-gap', 54, 20);
}
.address,
.phone {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    column-gap: toRem(10);
}

.address-text {
    max-width: toRem(102);
}
.phone-text {
    display: grid;
    justify-items: end;
    row-gap: toRem(8);
}
</style>
