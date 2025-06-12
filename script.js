// Sample game data - replace with your actual games
const games = [
  {
    id: 1,
    title: "Don't Feed",
    description: "Endless runner game where you avoid feed the hungry monster while avoiding obstacles.",
    image: "./assets/dontfeed_cover.png",
    category: ["Arcade", "Casual", "Runner"],
    url: "https://dontfeed.netlify.app/",
  },
  {
    id: 2,
    title: "AI Tanks",
    description: "Battle against enemy tanks in this strategic game.",
    image: "",
    category: ["Strategy", "Idle"],
    url: "#ai-tanks",
  },
  {
    id: 3,
    title: "Picking Fever",
    description: "Pick leaves quickly in this fast-paced mini casual game.",
    image: "",
    category: ["Picking", "Casual"],
    url: "#picking-fever",
  },
  // {
  //   id: 4,
  //   title: "Zombie Survival",
  //   description: "Survive waves of zombies in this action-packed adventure.",
  //   image: "/placeholder.svg?height=180&width=300",
  //   category: ["Action"],
  //   url: "#zombie-survival",
  // },
  // {
  //   id: 5,
  //   title: "Word Connect",
  //   description: "Form words from letters to solve challenging word puzzles.",
  //   image: "/placeholder.svg?height=180&width=300",
  //   category: ["Word"],
  //   url: "#word-connect",
  // },
  // {
  //   id: 6,
  //   title: "Memory Match",
  //   description: "Test your memory by matching pairs of cards.",
  //   image: "/placeholder.svg?height=180&width=300",
  //   category: ["Memory"],
  //   url: "#memory-match",
  // },
]

// Function to create game cards
function createGameCards() {
  const gamesGrid = document.getElementById("gamesGrid")

  games.forEach((game) => {
    // Create card element
    const card = document.createElement("div")
    card.className = "game-card"

    // Create category tags HTML
    const categoryTags = game.category.map((cat) => `<span class="game-category">${cat}</span>`).join("")

    // Create card content
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" class="game-image">
      <div class="game-image-blank hide"></div>
      <div class="game-content">
      <h2 class="game-title">${game.title}</h2>
      <p class="game-description">${game.description}</p>
      <div class="game-meta">
        <div class="game-categories">
        ${categoryTags}
        </div>
        <a href="${game.url}" target="_blank" rel="noopener noreferrer" class="play-button">Play Now</a>
      </div>
      </div>
    `

    // Handle image and blank image visibility
    const gameImage = card.querySelector(".game-image")
    const blankImage = card.querySelector(".game-image-blank")
    if (game.image === "") {
      console.log(`No image for game: ${game.title}`)
      gameImage.classList.add("hide")
      if (blankImage.classList.contains("hide")) {
        blankImage.classList.remove("hide")
      }
      card.classList.add("disabled");
    } else {
      if (gameImage.classList.contains("hide")) {
        gameImage.classList.remove("hide")
      }
      blankImage.classList.add("hide")
    }

    // Add card to grid
    gamesGrid.appendChild(card)
  })
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createGameCards()
})
