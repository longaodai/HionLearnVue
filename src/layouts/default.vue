<template>
  <!-- START NAVIGATION -->
  <nav class="sm:container mx-auto px-5">
    <div class="max-w-screen-lg mx-auto w-full flex flex-row h-20 justify-between mt-4">
      <div>
        <a href="#">
          <img src="../assets/images/logo.png" alt="" class="w-20 h-20" />
        </a>
      </div>
      <div>
        <ul class="flex flex-row h-full leading-20 space-x-10 font-bold">
          <li>Trang chủ</li>
          <li>Giới thiệu</li>
          <li>Bài viết</li>
          <li>Liên hệ</li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END NAVIGATION -->

  <!-- START HEADER -->
  <header class="sm:container mx-auto px-5">
    <div
      class="max-w-screen-lg w-full h-auto mx-auto flex sm:flex-row sp:flex-col items-center relative mt-10"
    >
      <div class="sm:w-128 sm:h-128 sp:w-80 sp:h-80">
        <img src="../assets/images/banner.jpeg" alt="" class="w-full h-full rounded-full" />
      </div>
      <div class="sm:w-3/4 sp:w-full h-80 sm:absolute sm:right-0 sp:text-center">
        <div class="font-bold text-5xl rounded-l-[999px] p-10 bg-white sp:text-center">
          <h1>Chia sẻ và học tập kiến thức.</h1>
        </div>
        <div class="sm:w-2/3 h-auto sm:absolute sm:right-0 rounded-l-[999px] sm:p-5 bg-white">
          <p>OHION Code là một blog cá nhân chuyên viết về lập trình và những thứ linh tinh.</p>
        </div>
      </div>
    </div>
  </header>
  <!-- END HEADER -->

  <!-- START CONTENT -->
  <div class="sm:container mx-auto">
    <div class="max-w-screen-lg mx-auto grid lg:grid-cols-2 sm:mt-40 sm:grid-cols-1 gap-4">
      <div
        class="flex sm:flex-row sp:flex-col justify-center items-center my-5 sp:text-center sm:text-start"
      >
        <div class="w-[200px] h-[200px]">
          <img src="../assets/images/banner.jpeg" alt="" class="w-full h-full rounded-full" />
        </div>
        <div class="w-1/2 flex flex-col ml-4">
          <h4 class="font-bold text-2xl">Time text to so legs screen step experiments term a</h4>
          <p>
            The due be to warp room he have place a problem offer, of just of screen there sitting.
          </p>
        </div>
      </div>

      <div
        class="flex sm:flex-row sp:flex-col justify-center items-center my-5 sp:text-center sm:text-start"
      >
        <div class="w-[200px] h-[200px]">
          <img src="../assets/images/banner.jpeg" alt="" class="w-full h-full rounded-full" />
        </div>
        <div class="w-1/2 flex flex-col ml-4">
          <h4 class="font-bold text-2xl">Time text to so legs screen step experiments term a</h4>
          <p>
            The due be to warp room he have place a problem offer, of just of screen there sitting.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- END CONTENT -->
  <div class="container mx-auto align-middle">
    <div class="w-full h-36 flex justify-center items-center">
      <button class="w-44 h-12 rounded-full bg-slate-100 hover:bg-slate-200 font-bold">
        Xem thêm
      </button>
    </div>
  </div>

  <!-- START FOOTER  -->
  <div class="w-full mx-auto p-4">
    <div class="max-w-screen-lg mx-auto flex flex-row justify-between">
      <div>
        <a href="#">
          <img src="../assets/images/logo.png" alt="" class="w-20 h-20" />
        </a>
      </div>
      <div>
        <ul class="flex flex-row h-full leading-20 space-x-10 font-bold">
          <li>Trang chủ</li>
          <li>Giới thiệu</li>
          <li>Bài viết</li>
          <li>Liên hệ</li>
        </ul>
      </div>
      <div>
        <ul class="flex flex-row h-full leading-20 space-x-10 font-bold">
          <li>
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </li>
          <li><i class="fab fa-google"></i></li>
          <li><i class="fab fa-twitter"></i></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- END FOOTER  -->
</template>
