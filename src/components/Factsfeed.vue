<template>
  <div>
    <q-list highlight>
      <q-list-header>{{message}}</q-list-header>
      <q-item v-for="fact in factsFeed.facts" :key="fact.id">
        <q-item-side stamp>{{fact.id}}</q-item-side>
        <q-item-main>
          <q-item-tile label>{{fact.title}}</q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
  </div>
</template>

<script>

import {
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QChip,
  QPopover
} from 'quasar'

// import FactsfeedService from './FactsfeedService'
// const feedService = new FactsfeedService()
import MockFactsfeedService from './MockFactsfeedService'
const factsfeedService = new MockFactsfeedService()

export default {
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QChip,
    QPopover
  },
  name: 'factsfeed',
  data: function () {
    return {
      factsFeed: {facts: []},
      message: ''
    }
  },
  mounted: function () {
    var vm = this
    factsfeedService.loadFacts(vm)
  }
}
</script>
