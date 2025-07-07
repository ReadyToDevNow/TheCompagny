<template>
  <!-- Main section start -->
  <section class="h-screen px-12 lg:px-32 py-32 mb-8">
    <div class="w-full md:w-1/2 h-full flex flex-col md:justify-center">
      <div class=""></div>
      <!-- Main text start -->
      <h1 class="uppercase text-5xl xl:text-7xl mb-4 font-semibold">TOI FÉMININ ESSENTIELLE</h1>
      <p class="xl:w-1/2 text-stone-500">"Riche en émotion"</p>
      <p class="xl:w-1/2 text-stone-500">"Un retour à l'enfance"</p>
      <p class="xl:w-1/2 text-stone-500">"Tendre, dur et si vraie "</p>
      <p class="xl:w-1/2 text-stone-500">"N'oubliez pas vos petits mouchoirs"</p>

      <!-- Main text end -->

      <!-- Social links start -->
      <div class="flex mt-3 gap-8">
        <a href="#">
          <i class="fa-brands fa-instagram socialIcon"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-linkedin socialIcon"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-facebook socialIcon"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-dribbble socialIcon"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-pinterest socialIcon"></i>
        </a>
      </div>
      <!-- Social links end -->
    </div>

    <!-- Photographer image start -->
    <div class="absolute bottom-20 right-44 overflow-hidden h-2/5 sm:h-1/2 md:h-3/5 lg:h-4/6 -z-50">
      <img src="@/assets/tfe.jpg" alt="img" class="h-full rounded" />
    </div>

    <!-- Photographer image end -->

    <!-- Circle start -->
    <div
      class="hidden sm:block bg-neutral-300 h-64 w-64 rounded-full absolute top-38 left-20 mt-16 -z-20"
    ></div>
    <!-- Circle end -->

    <!-- "More" button start -->
    <div class="w-full h-20 flex justify-start md:justify-center items-center">
      <a href="#about-section">
        <i
          class="fa-solid fa-arrow-down transition text-stone-100 text-xl bg-stone-700 rounded-full shadow p-4 hover:-translate-y-2 hover:shadow-xl"
        ></i>
      </a>
    </div>
    <!-- "More" button end -->
  </section>
  <!-- Main section end -->
</template>

<script>
export default {}
</script>

<style></style>
