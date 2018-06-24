var card = new Vue({
  el: '#app',
  data() {
      return {
        query: '',
        movies: []
      }
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
  computed: {
    filteredMovies: function () {
      let self = this;
      if(!this.query) {
        return this.movies;
      }
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().indexOf(self.query.toLowerCase()) !== -1 || movie.release_date.indexOf(self.query.toString()) !== -1 || movie.director.toLowerCase().indexOf(self.query.toLowerCase()) !==-1;
      })
    }
  },
  filters: {
    shortenText(text) {
      return text.substring(0, 300);
      },
      addEllipses(text) {
        return `${text}...`;
      }
  }
});
