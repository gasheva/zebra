<script setup>
import LogoIcon from '@/components/icons/LogoIcon.vue';
import NewsView from '@/views/NewsView.vue';

</script>

<template>
  <header>
      <div :class="$style.wrapper">
          <logo-icon :class="$style.logo"/>
      </div>
      <div :class="$style.hero">
          <div :class="$style.wrapper">
              <span>Новости</span>
          </div>
      </div>
  </header>


    <main>
        <div :class="$style.wrapper">
            <news-view/>
        </div>
    </main>

    <footer :class="$style.footer">
        <div :class="$style.wrapper">
            <div :class="$style.footer_info">
                <logo-icon/>
                <span :class="$style.footer_copyright">© alpha, 2023</span>
            </div>
        </div>
    </footer>
</template>

<style module>
.wrapper {
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
}

.logo {
    margin-top: 40px;
    margin-bottom: 40px;
}
.hero {
    display: flex;
    align-items: end;
    height: 320px;
    padding-bottom: 48px;

    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    color: var(--color-black-90);

    background-image: url('src/assets/hero.svg');
    background-position: bottom;
}

.footer {
    padding: 64px 0;
    margin-top: 72px;
    background-color: var(--color-background-blue-pale);
}

.footer_copyright {
    margin-top: 16px;
}

.footer_info{
    display: flex;
    flex-direction: column;
    color: var(--color-black-40);
}
</style>
