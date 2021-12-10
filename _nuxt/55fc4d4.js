(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{427:function(e,t){const n=[{"Average Degree":{desc:"Average degree of all vertices",eq:"2|E|/|V|",type:"graph based",impl:null,cite:null},Diameter:{desc:"Length of longest shortest path",eq:"max_{v,u \\epsilon V}(d(v,u))",type:"graph based",impl:null,cite:null},"Minimum Degree":{desc:"Minimum number of neighbors",eq:"min_{i \\epsilon V}{|N(i)|}",type:"graph based",impl:null,cite:null},"Maximum Degree":{desc:"Maximum number of neighbors",eq:"max_{i \\epsilon V}{|N(i)|}",type:"graph based",impl:null,cite:null},"Degree Centrality":{desc:"Number of neighbors of a vertex",eq:"C_{deg}(i) = |N(i)| = d(i)",type:"vertex based",impl:null,cite:"R. A. Hanneman and M. Riddle. 2005. Introduction to social network methods. University of California, Riverside, Chapter Chapter 10: Centrality and power."},"In/Out Degree Centralities":{desc:"Number of neighbors of a vertex",eq:"C_{indeg}(i) = d_{in}(i), C_{outdeg}(i) = d_{out}(i)",type:"vertex based",impl:null,cite:"S. Wasserman and K. Faust. 1994. Social network analysis: methods and applications. Vol. 8. Cambridge U. press"},"Betweenness Centrality":{desc:"Centrality measure based on the percentage of shortest paths passing through the node",eq:"C_{btw}(i) = \\sum_{s,t \\epsilon V} \\sigma(s,t | i) / \\sigma(s,t)",type:"vertex based",impl:null,cite:"L. Freeman. A Set of Measures of Centrality Based Upon Betweenness. In Sociometry 40, p. 35-41, 1977"},"K-Betweenness Centrality":{desc:"Approximation of betweenness centrality using only paths of length k or less",eq:"C_{k-btw}(i) = \\sum_{s,t \\epsilon V, d(s,t) < k} \\sigma(s,t | i) / \\sigma(s,t)",type:"vertex based",impl:null,cite:"M. Ercsey-Ravasz and Z. Toroczkai. 2010. Centrality scaling in large networks. Phy. Rev. Lett. 105, 3 (2010), 038701."},"Closeness Centrality":{desc:"The reciprocal of farness, or the inverse proportion of the average distance to all other nodes in the network",eq:"C_{cls}(i) = 1/\\sum_{j \\epsilon V} d(i,j)",type:"vertex based",impl:null,cite:"A. Bavelas. 1950. Communication patterns in task-oriented groups. The Journal of the Acoustical Society of America 22, 6 (1950), 725–730."},"K-Closeness Centrality":{desc:"Approximation of closeness centrality using only paths of length k or less",eq:"C_{k-cls}(i) = 1/\\sum_{j \\epsilon V, d(i,j)<k} d(i,j)",type:"vertex based",impl:null,cite:null},"Eigenvector Centrality":{desc:"Each node has proportional value to the sum of the score its neighbors.",eq:"C_{eig}(i) = \\lambda^{-1} \\sum_{j \\epsilon V} A_{ij} \\upsilon_j",type:"vertex based",impl:null,cite:"P.  Bonacich,  P.  Llyod.  Eigenvector-like  Measure  of  Centrality  for  Asymmetric  Relations.  In  Social Networks Vol. 23, Issue 3, p. 191-201, July 2001"},"Katz Centrality":{desc:"Each node has given small amount of centrality “for free” regardless of its position in the network",eq:"C_{katz}(i) = \\alpha \\sum_{j \\epsilon V} (A_{ij} \\upsilon_j) + \\beta",type:"vertex based",impl:null,cite:"M.E.J. Newman. Network:  An  Introduction.  University of Michigan and Santa Fe Institute. Oxford  University Press, 2010"},"PageRank Centrality":{desc:"Each node has given the rank based on network neighbors proportional to their centrality divided by their out-degree",eq:"C_{pagerank}(i) = \\alpha \\sum_{j \\epsilon V} (A_{ij} \\upsilon_j / d_{out}(i)) + \\beta",type:"vertex based",impl:null,cite:"S. Brin, L. Rage, The Anatomy of Large Scale Hypertextual (Web) Search Engine. In Procedding of  The Seventh International Conferenceon the World Wide Web, 1998"},"Sum of Degrees":{desc:"Sum of the degrees of the two vertices at either end of the edge",eq:"|N(i)| + |N(j)|",type:"edge based",impl:null,cite:null},"Hubs & Authority":{desc:"Authority is a node that contain useful information on topic of interest, while Hub is a node that tells us where the best authority to be found.",eq:"M_{hub}(i) = \\alpha \\sum_j A_{ij} M_{auth}(j), M_{auth}(i) = \\beta \\sum_j A_{ij} M_{hub}(j)",type:"vertex based",impl:"https://networkx.org/documentation/stable/_modules/networkx/algorithms/link_analysis/hits_alg.html#hits",cite:"Jon M. K. 1999. Authoritative sources in a hyperlinked environment. J. ACM 46, 5 (Sep. 1999), 604–632."},"Volume Centrality":{desc:"Centrality based on the degrees of neighbors within a certain reach (say k)",eq:"C_{volume}(i) = \\sum_{j \\epsilon N(i), d(i,j)<k} d(j)",type:"vertex based",impl:null,cite:"H. Kim and E. Yoneki. 2012. Influential neighbours selection for information diffusion in online social networks. In 2012 21st International Conference on Computer Communications and Networks (ICCCN). 1–7."}}];e.exports=n.length<=1?n[0]:n},428:function(e,t){const n=[{E:"set of edges",V:"set of vertices",A:"adjacency matrix","\\alpha":"constant","\\beta":"constant","\\upsilon":"leading eigenvector","d(x,y)":{desc:"shortest path distance from vertices x to y",re:"d\\(.,.\\)"},"\\sigma(x,y)":{desc:"number of shortest paths from vertices x to y",re:"\\\\sigma(.,.)"},"\\sigma(x,y|z)":{desc:"number of shortest paths from vertices x to y that pass through that pass through z",re:"\\\\sigma(.,.|.)"},"N(x)":{desc:"neighborhood of vertex x",re:"N(.)"},"d(x)":{desc:"degree of x (number of neighbors of x)",re:"d(.)"},"d_{out}(x)":{desc:"out degree of x (number of outgoing edges of x)",re:"d_{out}(.)"},"d_{in}(x)":{desc:"in degree of x (number of incomming edges of x)",re:"d_{in}(.)"}}];e.exports=n.length<=1?n[0]:n},433:function(e,t,n){"use strict";n.r(t);n(31),n(25),n(161),n(40),n(59),n(67),n(85),n(47),n(5),n(54),n(41),n(11),n(62),n(66),n(53);var r=n(427),o=n.n(r),l=n(428),c=n.n(l),d=n(434);function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var f=[];for(var y in o.a){var v=o.a[y];for(var symbol in v.name=y,v.symbols=[],c.a)c.a[symbol].re&&(v.eq.match(c.a[symbol].re)||v.eq.includes(symbol))&&v.symbols.push(symbol);f.push(v)}var x=[{text:"Metric",value:"name"},{text:"Type",value:"type"},{text:"Description",value:"desc"},{text:"Citation",value:"cite"},{text:"Implementation",value:"impl"}],_={data:function(){return{metrics:f,symbols:c.a,headers:x,search:""}},components:{"vue-mathjax":d.VueMathjax},methods:{copyToClipboard:function(text){navigator.clipboard.writeText(text)},searchFilter:function(e,t,n){if(!t||""===t)return!0;var r,o=m(t.split(";"));try{for(o.s();!(r=o.n()).done;){var l=r.value;if(l=l.trim().toLocaleLowerCase(),n.name.toLocaleLowerCase().includes(l))return!0}}catch(e){o.e(e)}finally{o.f()}return!1}}},C=n(94),k=n(125),w=n.n(k),j=n(435),A=n(474),V=n(185),S=n(387),I=n(385),M=n(391),component=Object(C.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-text-field",{staticClass:"m-3",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-data-table",{attrs:{headers:e.headers,items:e.metrics,search:e.search,"show-expand":"","item-key":"name","custom-filter":e.searchFilter},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var r=t.headers,o=t.item;return[n("td",{staticClass:"m-2",attrs:{colspan:r.length}},[n("div",{staticClass:"text-center"},[n("vue-mathjax",{staticClass:"text-lg m-3",attrs:{formula:"$$ "+o.eq+" $$"}}),e._v(" "),o.symbols?n("v-list",{staticClass:"m-2"},e._l(o.symbols,(function(symbol){return n("v-list-item",{key:symbol,staticClass:"text-center align-center justify-center"},[n("vue-mathjax",{attrs:{formula:"$$ "+symbol+" $$"}}),e._v(": "+e._s(e.symbols[symbol].desc)+"\n            ")],1)})),1):e._e()],1)])]}},{key:"item.cite",fn:function(t){var r=t.item;return[r.cite?n("v-icon",{on:{click:function(t){return e.copyToClipboard(r.cite)}}},[e._v("mdi-content-copy")]):e._e()]}},{key:"item.impl",fn:function(t){var r=t.item;return[r.impl?n("v-icon",{on:{click:function(t){return e.copyToClipboard(r.impl)}}},[e._v("mdi-content-copy")]):e._e()]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VCard:j.a,VDataTable:A.a,VIcon:V.a,VList:S.a,VListItem:I.a,VTextField:M.a})}}]);