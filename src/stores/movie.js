import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
	const showFullVideo = ref(false)
	const movie = ref(null)

	return { movie, showFullVideo }
})
