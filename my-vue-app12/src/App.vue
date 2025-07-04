<script setup>

const persons = [

  {
    id: 1,
    name: "Jane Doe",
    profilePhoto: "https://media.licdn.com/dms/image/C4E03AQHlRytl47CJBw/profile-displayphoto-shrink_800_800/0/1658797063848?e=2147483647&v=beta&t=qt9gHZH23mV6mHZCwyCCTvmYZbFlRQZYGssdv0GNubk",
    jobTitle: "CEO-Founder"
  },
  {
    id: 2,
    name: "Jone Doe",
    profilePhoto: "https://tse1.mm.bing.net/th/id/OIP.uyJY0Tj8HU5dTyfHGPjWeAAAAA?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    jobTitle: "Chief Technicl Officer"
  },
  {
    id: 3,
    name: "Jessy Doe",
    profilePhoto: "https://th.bing.com/th/id/R.d3c7d022764d7499d373468025732f5a?rik=HpwDT7ld2B8%2fFw&riu=http%3a%2f%2fdemos.ascendoor.com%2face-news%2fwp-content%2fuploads%2fsites%2f315%2f2023%2f08%2fperson-hair-portrait-model-professional-profession-1323792-pxhere.com_.jpg&ehk=foVupmqLVLMHOvEpdtDKmC6FZSEttC0QK6icne1brk0%3d&risl=&pid=ImgRaw&r=0",
    jobTitle: "Chief Technicl Officer"
  }

];

</script>

<template>
  <section class="container mx-auto">
    <h1 class="text-center text-3xl py-12">Loop</h1>
    <section class="flex flex-col items-center justify-center space-y-2 w-full mx-auto">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-center text-2xl text-gary-900 font-bold text-4xl">
          Team Members
        </h2>
        <p class="text-gray-600 w8/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          vero. Iure voluptatem at consectetur soluta eum exercitationem
          dignissimos eos inventore praesentium velit sed, ipsum et dolorem
          saepe aliquam ea adipisci.
        </p>
      </div>
      <div class="grid gap-2 items-center grid-cols-3">
        <div class="space-y-4 text-center" v-for="person in persons" :key="person.id">
          <img :src="person.profilePhoto" alt="" class="w-50 h-64 mx-auto rounded-xl w-50"
            :class="2 == person.id ? 'h-80' : 'h-64'" />
          <div class="">
            <h4 class="text-2xl">{{ person.name }}</h4>
            <span class="block text-sm text-gray-500">{{ person.jobTitle }}</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
