// Defines the visual properties for each emotional state

export const emotionStyles = {
  happy: {
    orbColor: "#FFD700", // Gold
    auroraColors: ["#FFD700", "#FF4500"],
    quote: "Joy is a net of love by which you can catch souls.",
  },
  sad: {
    orbColor: "#4B0082", // Indigo
    auroraColors: ["#4B0082", "#6A5ACD"],
    quote: "Tears are words that need to be written.",
  },
  angry: {
    orbColor: "#DC143C", // Crimson
    auroraColors: ["#DC143C", "#8B0000"],
    quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
  },
  neutral: {
    orbColor: "#E5E7EB", // Gray-200
    auroraColors: ["#E5E7EB", "#9CA3AF"],
    quote: "The quieter you become, the more you are able to hear.",
  },
  calm: {
    orbColor: "#00BFFF", // Deep Sky Blue
    auroraColors: ["#00BFFF", "#008B8B"],
    quote: "Calmness is the cradle of power.",
  },
  surprise: {
    orbColor: "#FF69B4", // Hot Pink
    auroraColors: ["#FF69B4", "#DA70D6"],
    quote: "The invariable mark of wisdom is to see the miraculous in the common.",
  },
  fear: {
      orbColor: "#9370DB", // Medium Purple
      auroraColors: ["#9370DB", "#483D8B"],
      quote: "The brave man is not he who does not feel afraid, but he who conquers that fear."
  },
  disgust: {
      orbColor: "#3CB371", // Medium Sea Green
      auroraColors: ["#3CB371", "#2E8B57"],
      quote: "To be disgusted with oneself is a good thing."
  },
  default: {
    orbColor: "#E5E7EB",
    auroraColors: ["#E5E7EB", "#9CA3AF"],
    quote: "Welcome to MindMorph. Let's begin the journey.",
  },
};

export type Emotion = keyof typeof emotionStyles;
