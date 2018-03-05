new Vue ({
  el: '#vue-app',
  data: {
    name: 'Chris',
    job: 'Coding Ninja'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
