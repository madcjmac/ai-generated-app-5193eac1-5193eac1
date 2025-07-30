'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { usePlayerStore } from '@/lib/store'

export function Player() {
  const [progress, setProgress] = useState(0)
  const { currentSong, isPlaying, togglePlayPause } = usePlayerStore()

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-16 left-0 right-0 bg-background/80 backdrop-blur-lg border-t p-4"
    >
      {currentSong && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={currentSong.coverArt}
              alt={currentSong.title}
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h3 className="font-medium">{currentSong.title}</h3>
              <p className="text-sm text-muted-foreground">
                {currentSong.artist}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <Button size="icon" variant="ghost">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
      
      <Slider
        value={[progress]}
        onValueChange={(value) => setProgress(value[0])}
        max={100}
        step={1}
        className="mt-4"
      />
    </motion.div>
  )
}