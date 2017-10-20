<template>
  <div>
  <h1>add fact</h1>
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
  QPopover,
  QBtn,
  QIcon
} from 'quasar'

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
    QPopover,
    QBtn,
    QIcon
  },
  name: 'addFact',
  data: function () {
    return {
      factsFeed: {facts: []},
      message: ''
    }
  }
}
</script>
