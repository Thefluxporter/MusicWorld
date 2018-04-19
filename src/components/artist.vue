// // hacer la logica para nuestro componente de artista

// <template lang="pug">
//     // que queriamos mostrar? nombre e imagen del artista
//     // abre en una nueva pestaña --> _blank
//     // text nos devuelve la imagen en la api de los top artist, el 2 es el tamaño de la imagen
// li
//     h2: a(:href="artist.url" target="_blank") {{ artist.name }}
//     img(:src="artist.image[2]['#text']")
// </template>

// <script>
// export default {
//     name: 'artist',
//     props: [ 'artist' ]
// };
// </script>

// <style lang="stylus">
// li
//     display block 
//     margin 12px 0
// </style>

<template lang="pug">
  li.artist
    h2: a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>

<script>
export default {
  name: 'artist',
  props: [ 'artist' ]
}
</script>

<style lang="stylus" scoped>
// Usar scoped dentro del tag de estilos para evitar que el CSS pise los estilos de los componentes
li.artist
  display block
  margin 10px 0
</style>
