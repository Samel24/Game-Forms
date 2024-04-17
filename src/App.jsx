import Navbar from "@/components/navbar"
import Header from "@/components/header"
import ReviewsGrid from "@/components/reviews"
import ContactForm from "@/components/contactform"
import ImageGallery from "@/components/gallery"

import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <ReviewsGrid/>
      <ContactForm/>
      <ImageGallery/>
    </div>
  )
}

export default App
