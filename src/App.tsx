import { useState } from 'react'
import { mockPhotographers } from './data/mockData'
import { Photographer } from './types/Photographer'
import SwipeableCardsSimple from './components/SwipeableCardsSimple'
import './App.css'

function App() {
  const [likedPhotographers, setLikedPhotographers] = useState<Photographer[]>([])

  const handleSwipe = (photographer: Photographer, direction: 'left' | 'right') => {
    if (direction === 'right') {
      setLikedPhotographers(prev => [...prev, photographer])
      console.log('Liked:', photographer.name)
    } else {
      console.log('Rejected:', photographer.name)
    }
  }

  const handleEndOfDeck = () => {
    console.log('End of deck reached!')
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Find Your Frame</h1>
        <p>Discover amazing photographers for your perfect shot</p>
      </header>
      
      <main className="app-main">
        <SwipeableCardsSimple
          photographers={mockPhotographers}
          onSwipe={handleSwipe}
          onEndOfDeck={handleEndOfDeck}
        />
      </main>

      {likedPhotographers.length > 0 && (
        <div className="stats">
          <p>✓ Liked: {likedPhotographers.length} photographers</p>
        </div>
      )}
    </div>
  )
}

export default App