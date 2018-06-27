var card = new Vue({
  el: '#app',
  data() {
      return {
        query: '',
        movies: []
      }
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
  mounted() {
      this.getData();
  },
  filters: {
    truncateText(text, limit) {
      if (!limit) return;
      let content = text.trim();
      content = content.split(' ').slice(0, limit);
      content = `${content.join(' ')}...`
      return content;
    }
  }
});
