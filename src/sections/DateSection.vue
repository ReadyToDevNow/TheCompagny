<template>
  <!-- Date section start -->
  <section id="date-section" class="px-12 lg:px-32 py-16 border-t border-stone-500 relative">
    <div class="uppercase text-5xl mb-4 font-semibold">Nos dates</div>

    <a href="https://www.theatredariusmilhaud.fr/">
      <br />
      <span class="text-lg">80 allée Darius Milhaud, 75019 Paris / 01 42 01 92 26</span>
    </a>

    <img @click="instagramLink" src="@/assets/tfe.jpg" alt="icon-instagram" class="shadow-xl/60" />

    <span
      class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg/60 transition duration-300"
      >Réservez ici : Théâtre Darius Milhaud
    </span>
  </section>
  <!-- Date section end-->
</template>

<script setup>
function instagramLink() {
  window.open(
    'https://www.instagram.com/toifemininessentielle.nanette?igsh=MXQ1cnZmYzBkeDdyOQ==',
    '_blank',
  )
}
</script>

<style></style>
