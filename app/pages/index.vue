<script setup lang="ts">
import type { Contributions } from '~~/types'

const colorMode = useColorMode()

const { data: contributions } = await useFetch<Contributions>('/api/contributions')

if (!contributions.value) {
  throw createError('Could not load User activity')
}

const { user, prs } = contributions.value
const userUrl = `https://github.com/${user.username}`

useHead({
  link: [
    { rel: 'icon', href: '/favicon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'alternate', type: 'application/rss+xml', title: `${user.name}'s recent pull requests`, href: '/feed.xml' },
  ],
})

useSeoMeta({
  title: `${user.name} is Contributing`,
  description: `Discover ${user.name} recent pull requests on GitHub.`,
  ogTitle: `${user.name} is Contributing`,
  ogDescription: `Discover ${user.name} recent pull requests on GitHub.`,
  twitterCard: 'summary_large_image',
  // Feel free to change this image with your own once deployed to NuxtHub
  ogImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Bycy5hdGludXguY29tIiwiaWF0IjoxNzI0MTYwMTkxfQ.yYRD-Gs6EyYQSfg27fZVx1Kle7nq7QBSciDui-mbnnU.jpg?theme=light',
  twitterImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Bycy5hdGludXguY29tIiwiaWF0IjoxNzI0MTYwMTkxfQ.yYRD-Gs6EyYQSfg27fZVx1Kle7nq7QBSciDui-mbnnU.jpg?theme=light',
})
// TODO: OG Image
</script>

<template>
  <div class="mxa p-4 max-w-3xl lg:p-8 sm:p-6 lg:pt-10">
    <div class="flex flex-col gap-2 items-center">
      <a :href="userUrl" target="_blank">
        <NuxtImg
          :src="user.avatar"
          :alt="user.name"
          rounded-full size-16
        />
      </a>
      <h1 class="text-2xl text-center sm:text-3xl">
        <a :href="userUrl" target="_blank">
          {{ user.name }}
        </a>
        is <span class="animate-pulse">Contributing...</span>
      </h1>
      <p class="text-gray-500 text-center dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
        <NuxtLink :to="userUrl" target="_blank">
          {{ user.username }}'s recent pull requests on GitHub.
        </NuxtLink>
      </p>
      <div class="text-gray-700 flex gap-1 items-center justify-center dark:text-gray-300">
        <Icon
          :aria-label="`${user.name}'s GitHub profile`"
          :name="colorMode.value === 'dark' ? 'ph:moon-stars-duotone' : 'ph:sun-duotone'"
          @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
        />
        <Icon
          :to="userUrl"
          external
          target="_blank"
          :aria-label="`${user.name}'s GitHub profile`"
          name="ph:github-logo-duotone"
          color="neutral"
          variant="link"
        />
        <Icon
          to="/feed.xml"
          external
          target="_blank"
          aria-label="RSS Feed"
          name="ph:rss-simple-duotone"
          color="neutral"
          variant="link"
        />
      </div>
    </div>

    <div class="mt12 flex flex-col gap-6 sm:gap-10">
      <PullRequest v-for="pr of prs" :key="pr.url" :data="pr" />
    </div>
  </div>
</template>
