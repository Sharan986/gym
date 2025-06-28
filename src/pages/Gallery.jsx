import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Join from '../components/Join'


const Gallery = () => {

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        alt: "Person Lifting Weights",
        key: 1,
    },
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        alt: "Gym Equipment",
        key: 2,
    },
    {
        src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
        alt: "Fitness Motivation",
        key: 3,
    },
    {
        src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        alt: "Outdoor Workout",
        key: 4,
    },
    {
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        alt: "Strong Woman",
        key: 5,
    },
    {
        src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
        alt: "Man Running",
        key: 6,
    },
    {
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        alt: "Yoga Pose",
        key: 7,
    },
    {
        src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        alt: "Group Training",
        key: 8,
    },
    {
        src: "https://images.unsplash.com/photo-1468449032589-876ed4b3eafe?auto=format&fit=crop&w=400&q=80",
        alt: "Healthy Lifestyle",
        key: 9,
    },
    {
        src: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
        alt: "Gym Interior",
        key: 10,
    },
    {
        src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
        alt: "Dumbbells",
        key: 11,
    },
    {
        src: "https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80",
        alt: "Personal Trainer",
        key: 12,
    },
];

return (
    <>
        <div>
            <div className="relative overflow-hidden">
                <img
                    src="https://imgs.search.brave.com/V8jp-Wk9cTRojDuhoMlQpIMF5MEGiR17IfiLIcs_RvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vazU1UGky/YUtfQWJ4T1Q3M2RC/aFRrQ2M2cVA1MVNo/ZnJkdUdtdDVxQXYt/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5U/RTIvTmpBek5ETXdM/M0JvYjNSdi9MM1Jo/YTJsdVp5MXpkWEJ3/L2JHVnRaVzUwY3k1/cWNHY18vY3owMk1U/SjROakV5Sm5jOS9N/Q1pyUFRJd0ptTTlS/bWRYL1QxbzBNVk50/VDFCUmVWSTQvZFdV/dExXWXRkREJDY3pC/WC9WMGhpV21KaVpI/UllhMk5zL1RHZHpS/VDA"
                    alt="About Us Banner"
                    className="w-screen h-60 object-cover object-center scale-125"
                />
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    <h1 className="text-5xl font-One z-10">Gallery</h1>
                    <h1 className="font-One text-2xl mt-6">
                        <Link to="/"> HOME </Link>
                        <span className="text-yellow-300">/Gallery</span>
                    </h1>
                </div>
            </div>
        </div>

        <div>
            <div className="container mx-auto px-4 py-8 font-One">
                <h1 className="text-4xl text-center text-white font-bold mb-8">Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((img) => (
                        <div key={img.key} className="bg-white shadow-md overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Join />
        <Footer />
    </>
)
}

export default Gallery