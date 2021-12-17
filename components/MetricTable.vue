<template>
  <v-card>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      class="m-3"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="metrics"
      :search="search"
      show-expand
      item-key="name"
      :custom-filter="searchFilter"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="m-2">
          <div class="text-center">
            <vue-mathjax
              class="text-lg m-3"
              :formula="'$$ ' + item.eq + ' $$'"
            ></vue-mathjax>
            <v-list class="m-2" v-if="item.symbols">
              <v-list-item class="text-center align-center justify-center" v-for="symbol in item.symbols" :key="symbol">
                <vue-mathjax :formula="'$$ ' + symbol + ' $$'"></vue-mathjax>: {{symbols[symbol].desc? symbols[symbol].desc : symbols[symbol]}}
              </v-list-item>
            </v-list>
          </div>
        </td>
      </template>
      <template v-slot:item.cite="{ item }">
        <v-icon v-if="item.cite" @click="copyToClipboard(item.cite)"
          >mdi-content-copy</v-icon
        >
      </template>
      <template v-slot:item.impl="{ item }">
        <v-icon v-if="item.impl" @click="copyToClipboard(item.impl)"
          >mdi-content-copy</v-icon
        >
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import metrics from 'js-yaml-loader!../data/graph_metrics.yaml'
import symbols from 'js-yaml-loader!../data/graph_symbols.yaml'
import { VueMathjax } from 'vue-mathjax'

var processed_metrics = []
for (var key in metrics) {
  var obj = metrics[key]
  obj.name = key
  obj.symbols = []
  for (var symbol in symbols) {
    if (symbols[symbol].re) {
      if (obj.eq.match(symbols[symbol].re)) {
        obj.symbols.push(symbol)
      }
    } else if(obj.eq.includes(symbol)) {
      obj.symbols.push(symbol)
    }
  }
  processed_metrics.push(obj)
}

const headers = [
  {
    text: 'Metric',
    value: 'name',
  },
  {
    text: 'Type',
    value: 'type',
  },
  {
    text: 'Description',
    value: 'desc',
  },
  {
    text: 'Citation',
    value: 'cite',
  },
  {
    text: 'Implementation',
    value: 'impl',
  },
]

export default {
  data: function () {
    return {
      metrics: processed_metrics,
      symbols: symbols,
      headers: headers,
      search: '',
    }
  },
  components: {
    'vue-mathjax': VueMathjax,
  },
  methods: {
    copyToClipboard: function (text) {
      navigator.clipboard.writeText(text)
    },
    searchFilter: function(value, search, item){
      if(!search || search === ""){
        return true
      }

      const searchArray = search.split(";")

      for (var term of searchArray) {

        term = term.trim().toLocaleLowerCase()
        if(item.name.toLocaleLowerCase().includes(term)) {
          return true
        }
      }

      return false
    }
  },
}
</script>
