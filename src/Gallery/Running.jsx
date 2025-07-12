import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Running = () => {

  const gymFacilities = [
    {
      id: 1,
      title: "Weight Training",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      description: "Professional weight equipment for all levels"
    },
    {
      id: 2,
      title: "Cardio Machines",
      imageUrl: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
      description: "Treadmills, ellipticals, and stationary bikes"
    },
    {
      id: 3,
      title: "Functional Zone",
      imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      description: "TRX, battle ropes, and plyometric boxes"
    },
    {
      id: 4,
      title: "Group Fitness",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c955c185d9f5",
      description: "Daily classes including yoga and HIIT"
    },
    {
      id: 5,
      title: "Locker Rooms",
      imageUrl: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
      description: "Spacious changing areas with amenities"
    },
    {
      id: 6,
      title: "Personal Training",
      imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      description: "Certified trainers for customized programs"
    },
    {
      id: 7,
      title: "Recovery Lounge",
      imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      description: "Massage guns and stretching areas"
    },
    {
      id: 8,
      title: "Boxing Area",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      description: "Heavy bags and boxing ring"
    },
    {
      id: 9,
      title: "Swimming Pool",
      imageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
      description: "25-meter lap pool for all members"
    },
    {
      id: 10,
      title: "Sauna & Steam",
      imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      description: "Relaxation and recovery spaces"
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG4I9ff8qPfIXCVjk5Ld1TthJUs.png?scale-down-to=2048"
          alt="About Us Banner"
          className="w-full h-60 object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-One">About Us</h1>
          <h1 className="font-One text-2xl mt-9">
            <Link to='/'>HOME</Link>
            <span className="text-yellow-300">/Contact Us</span>
          </h1>
        </div>
      </div>

      {/* Gym Facilities Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Fitness Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gymFacilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
                <p className="text-gray-600 mt-2">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Running