<template lang="pug">
  #app
    img(src='https://thefluxporter.github.io/MusicWorld/dist/build.js/logo.png')
    h1 MusicWorld UwU
    h2 Aprendiendo lo basico de la libreria de JavaScript Vue.js
    p Single page app, la cual va a obtener una lista de los top 100 de artistas del momento de diferentes paises junto a enlaces c/u de ellos en la pagina last.fm
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid") 
      // en vez de li(v-for="artist in artists") {{ artist.name }}, ponemos un elemento artist, de la carpeta components
      // tenemos que decirle ahora el artista en cuestio para que este componente lo sepa utilizar  v-bind:artist="artist" )
</template>

<script>
import Artist from './components/Artist.vue'
import getArtists from './api'
import Spinner from './components/spinner.vue'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina'},  
        { name: 'España', value: 'spain'},
        { name: 'Francia', value: 'France'},
        { name: 'Brasil', value: 'Brazil'},
        { name: 'Noruega', value: 'Norway'},
        { name: 'Italia', value: 'Italy'},
        { name: 'Japon', value: 'Japan'},
        { name: 'Rusia', value: 'Russian Federation'}
      ],
      selectedCountry: 'argentina', //por defecto para inicializar
      loading: true
    }
  },
  components: { // utilzamos el omponente artista creado en components
    Artist,
    Spinner 
  },
  methods:{
    refresArtist() {  // al utilizarse el mismo metodo cuando se carga la pagina y se cambia el pais, se lo pone en un metodo
      const self = this;  // self va a hacer referencia al this, que es el componente. si no lo hacemos el this va a hacer referencia al objeto globlal
      this.loading = true// cada vez que llamemos al refresh artist el loading va a ser tru o spinner va a aparecer
      this.artists = [] //cuando esta haciendo el request artistas va a volver a ser un array vacio, para que cuando se cambie el pais, se borren los anteriores
    getArtists(this.selectedCountry) // para obtener los artistas de ese pais
      .then(function(artists) { // metodo then que nos va a devolver todos los artistas
          self.loading = false;// una vez que lleguen los artistas nuevos el loading va a volver a ser false
          self.artists = artists;
          
      })
    }
  },
  mounted() {
    this.refresArtist();
  },
  watch: { //objeto que se fija cuando haya cambios
    selectedCountry() { // fijate cada vez que cambie el select
      this.refresArtist();
    }
  }
};
</script>

<style lang="stylus"> 

#app
  font-family "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1,
h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
