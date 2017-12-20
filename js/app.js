var card = new Vue({
  el: '#app',
  data: {
      movies: []
  },
  mounted() {
      this.getData();
  },
  methods: {
      getData: function () {
        let card = this;
          axios.get('https://ghibliapi.herokuapp.com/films')
            .then(response => {
              card.movies = response.data;
          })
              .catch(error => {
                console.log(error);  
          });
      }
  },
  filters: {
    shortenText(text) {
      return text.substring(0, 250);
      },
      addEllipses(text) {
        return `${text}...`;
      }
  }
});
