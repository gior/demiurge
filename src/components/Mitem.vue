<template>
  <div class="menu__item" role="tablist">
    <div>
      <span class="menu__item__title">
        <b-link :to="item.link" v-if="item.link">{{ item.title }}</b-link>
        <span v-else>{{ item.title }}</span>
      </span>
      <span v-if="!isLeaf(item)">
        <b-badge v-b-toggle="`sm-` + safeId(item)" class="when-opened" variant="light">-</b-badge>
        <b-badge v-b-toggle="`sm-` + safeId(item)" class="when-closed" variant="light">+</b-badge>
      </span>
    </div>
    <b-collapse :id="`sm-` + safeId(item)" role="tabpanel">
      <mitem class="child" v-for="(child, index) in item.items"
             :item="child" :key="index" :index="index">
      </mitem>
    </b-collapse>
  </div>
</template>

<script>
import Mitem from './Mitem.vue'
const mitem = {
  name: 'mitem',
  props: {
    'item': {
      type: Object,
      default: function () {
        return { title: 'menu item' }
      }
    },
    'index': {
      type: Number,
      default: () => { return Math.random() * 100000 % 100000 }
    }
  },
  components: { Mitem },
  methods: {
    isLeaf: (item) => {
      return !(item.items && item.items.length > 0)
    },
    isActive: (item) => {
      if (item.active === true) {
        if (!this.isLeaf(item)) {
          for (let i = 0; i < item.items.length; i++) {
            if (item.items[i].active === true) return true
          }
        } else return true
      }
      console.log(`${item.title} is inactive`)
      return true
      // return false
    },
    safeId: (item) => {
      return item.title ? item.title.replace(/\s/g, '') : 'notitle'
    }
  }
}
export default mitem
export { mitem as Mitem }
</script>

<style scoped lang="scss">
  .menu__item {
    .badge:hover { cursor: pointer; color: #60bbff }
    .child { margin-left: 1.5rem }
    .menu__item__title { &:hover { color: #607090 }}
  }

  .badge { position: relative; top: -.15rem; left: .15rem }

  .collapsed.when-opened,
  :not(.collapsed).when-closed {
    display: none;
  }
</style>
