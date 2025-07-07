<script setup lang="ts">
import type { Contributions } from '~~/types'

defineProps<{
  data: Contributions['prs'][number]
}>()

function formatStars(stars: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(stars)
}
</script>

<template>
  <div class="flex gap-2 items-center sm:gap-4">
    <a
      :href="`https://github.com/${data.repo}`"
      target="_blank"
      relative
      class="border border-gray-200 shrink-0 size-10 shadow-sm overflow-hidden dark:border-gray-800 sm:size-12" :class="[data.type === 'Organization' ? 'rounded-lg' : 'rounded-full']"
    >
      <img :src="`https://github.com/${data.repo.split('/')[0]}.png`" :alt="data.repo" class="size-full">
    </a>

    <div class="flex flex-1 gap-2 min-w-0 justify-between lg:gap-4">
      <div class="flex flex-col gap-0.5 min-w-0 sm:gap-1">
        <a :href="data.url" target="_blank" class="text-sm text-gray-900 flex gap-0.5 items-center sm:text-base dark:text-white hover:underline sm:gap-1">
          <Icon
            name="ph:git-pull-request-duotone"
            :class="{
              'text-green-500 dark:text-green-400': data.state === 'open',
              'text-purple-500 dark:text-purple-400': data.state === 'merged',
            }"
            class="shrink-0 size-4 sm:size-5"
          />

          <span class="truncate">{{ data.title }}</span>
        </a>

        <div class="items-bottom flex gap-2">
          <a :href="`https://github.com/${data.repo}`" target="_blank" class="text-sm inline-flex gap-1 truncate sm:text-base hover:text-black dark:hover:text-white">
            <span class="opacity-75">{{ data.repo.split('/')[0] }}</span>
            <span class="opacity-50">/</span>
            <span class="truncate">{{ data.repo.split('/')[1] }}</span>
          </a>
          <a :href="`https://github.com/${data.repo}`" target="_blank" class="gap-0.5 hidden truncate items-center hover:text-black sm:inline-flex dark:hover:text-white">
            <Icon name="ph:star" class="shrink-0 size-3" />
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ formatStars(data.stars) }}</span>
          </a>
        </div>
      </div>

      <div class="text-right flex shrink-0 flex-col justify-between">
        <a :href="data.url" target="_blank" class="text-xs sm:text-sm hover:underline">
          #{{ data.number }}
        </a>

        <time :datatime="data.created_at" class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">{{ useTimeAgo(new Date(data.created_at)) }}</time>
      </div>
    </div>
  </div>
</template>
