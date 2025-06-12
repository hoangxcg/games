// Sample game data - replace with your actual games
const games = [
  {
    id: 1,
    title: "Space Invaders",
    description: "Classic arcade game where you defend Earth from alien invaders.",
    image: "/placeholder.svg?height=180&width=300",
    category: "Arcade",
    url: "#space-invaders",
  },
  {
    id: 2,
    title: "Puzzle Master",
    description: "Challenge your brain with increasingly difficult puzzles.",
    image: "/placeholder.svg?height=180&width=300",
    category: "Puzzle",
    url: "#puzzle-master",
  },
  {
    id: 3,
    title: "Racing Fever",
    description: "High-speed racing game with multiple tracks and vehicles.",
    image: "/placeholder.svg?height=180&width=300",
    category: "Racing",
    url: "#racing-fever",
  },
  {
    id: 4,
    title: "Zombie Survival",
    description: "Survive waves of zombies in this action-packed adventure.",
    image: "/placeholder.svg?height=180&width=300",
    category: "Action",
    url: "#zombie-survival",
  },
  {
    id: 5,
    title: "Word Connect",
    description: "Form words from letters to solve challenging word puzzles.",
    image: "/placeholder.svg?height=180&width=300",
    category: "Word",
    url: "#word-connect",
  },
  {
    id: 6,
    title: "Memory Match",
    description: "Test your memory by matching pairs of cards.",
    image: "/placeholder.svg?height=180&width=300",
    category: "Memory",
    url: "#memory-match",
  },
]

// Function to create game cards
function createGameCards() {
  const gamesGrid = document.getElementById("gamesGrid")

  games.forEach((game) => {
    // Create card element
    const card = document.createElement("div")
    card.className = "game-card"

    // Create card content
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" class="game-image">
      <div class="game-content">
        <h2 class="game-title">${game.title}</h2>
        <p class="game-description">${game.description}</p>
        <div class="game-meta">
          <span class="game-category">${game.category}</span>
          <button class="play-button" data-game-id="${game.id}">Play Now</button>
        </div>
      </div>
    `

    // Add card to grid
    gamesGrid.appendChild(card)
  })

  // Add event listeners to play buttons
  document.querySelectorAll(".play-button").forEach((button) => {
    button.addEventListener("click", function () {
      const gameId = this.getAttribute("data-game-id")
      const game = games.find((g) => g.id == gameId)
      if (game) {
        window.location.href = game.url
      }
    })
  })
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createGameCards()
})
