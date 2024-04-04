<template>
    <div class="support">
        <h4 class="support__title">Support</h4>
        <ul class="support__list">
            <li class="support__item">
                <a
                    href="https://www.google.com/maps/place/111+Bijoy+Sarani,+Dhaka+1215,+%D0%91%D0%B0%D0%BD%D2%91%D0%BB%D0%B0%D0%B4%D0%B5%D1%88/@23.7643021,90.3864755,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c75f3558cf2d:0xba6a27e259f39a41!8m2!3d23.7642972!4d90.3890504?entry=ttu"
                    class="support__link"
                    >111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a
                >
            </li>
            <li class="support__item"><a href="exclusive@gmail.com" class="support__link">exclusive@gmail.com</a></li>
            <li class="support__item"><a href="tel:+88015-88888-9999" class="support__link">+88015-88888-9999</a></li>
        </ul>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/style/lib/adaptive';
.support {
    // .support__title

    &__title {
        font-size: toRem(20);
        font-weight: 500;
        line-height: toRem(28); /* 140% */
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .support__list

    &__list {
    }

    // .support__item

    &__item {
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .support__link

    &__link {
        line-height: 150%; /* 150% */
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
