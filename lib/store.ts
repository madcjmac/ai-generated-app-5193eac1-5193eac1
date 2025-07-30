import { create } from 'zustand'

interface Song {
  id: string
  title: string
  artist: string
  url: string
  coverArt: string
}

interface PlayerState {
  currentSong: Song | null
  isPlaying: boolean
  playlist: Song[]
  setCurrentSong: (song: Song) => void
  togglePlayPause: () => void
  addToPlaylist: (song: Song) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,
  playlist: [],
  setCurrentSong: (song) => set({ currentSong: song }),
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
  addToPlaylist: (song) => 
    set((state) => ({ playlist: [...state.playlist, song] })),
}))