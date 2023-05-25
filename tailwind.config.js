/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'man-profile-picture': "url('/public/images/man-profile-picture.jpg')",
        'woman-profile-picture': "url('/public/images/woman-profile-picture.jpg')"
      }
    },
  },
  plugins: [],
}

