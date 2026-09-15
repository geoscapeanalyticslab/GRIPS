const { getStore } = require('@netlify/blobs');

// A single shared store, namespaced by data type via key prefixes.
// Netlify provisions this automatically on deploy — no extra account/service needed.
function store(){
  return getStore('grips-data');
}

module.exports = { store };
