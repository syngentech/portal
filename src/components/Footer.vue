<i18n>
en:
  phone: 010-80767988
  email: service@syngen.tech
  address: Room 601, Building 1, No. 9 Medical Science Road, Life Science Park, Changping District, Beijing
  copyright: >
    All rights reserved © Beijing Syngentech Co., LTD. ·
    <a href="http://beian.miit.gov.cn" target="_blank">京ICP备14043945号-1</a>
zh:
  phone: 010-80767988
  email: service@syngen.tech
  address: 北京市昌平区生命科学园医科路9号院1号楼601室
  copyright: >
    版权所有 © 北京合生基因科技有限公司 ·
    <a href="http://beian.miit.gov.cn" target="_blank">京ICP备14043945号-1</a>
</i18n>

<template>
  <div :class="['footer', mode]">
    <div class="content">
      <hr v-if="mode === 'default'">
      <div>
        <span class="el-icon-guide" />
        <a href="#" @click="setLocale('zh')">简体中文</a>
        <span>|</span>
        <a href="#" @click="setLocale('en')">English</a>
      </div>
      <div v-if="mode === 'default'">
        <span class="el-icon-phone-outline"> {{ $t('phone') }}</span>
        <span class="el-icon-message"> {{ $t('email') }}</span>
        <span class="el-icon-place"> {{ $t('address') }}</span>
      </div>
      <div v-html="$t('copyright')"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  computed: {
    mode () {
      return this.index === 'home' || this.index === 'blank' ? 'simple' : 'default'
    }
  },
  methods: {
    setLocale (locale) {
      window.location = this.$route.params.locale
        ? this.$route.fullPath.replace(this.$route.params.locale, locale)
        : `/${locale}` + this.$route.fullPath
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding: 0.5em;

  color: #888;
  font-size: 0.8rem;
  text-align: center;

  &.simple {
    position: fixed;
    bottom: 0;
    width: 100%;

    color: #aaa;
  }

  hr {
    border: 0;
    height: 1px;
    background-color: #888;
  }

  // Override
  div { padding: 1px; }
  span { margin: 5px; }

  ::v-deep a           { color: #888; }
  &.simple  ::v-deep a { color: #aaa; }
}
</style>
