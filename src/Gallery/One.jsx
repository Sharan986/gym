
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const One = () => {
  // Array of gym image objects
  const gymFacilities = [
    {
      id: 1,
      title: "Weight Training Area",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "State-of-the-art weight equipment"
    },
    {
      id: 2,
      title: "Cardio Zone",
      imageUrl: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Latest treadmills and ellipticals"
    },
    {
      id: 3,
      title: "Functional Training",
      imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "TRX, kettlebells, and battle ropes"
    },

    {
      id: 5,
      title: "Locker Rooms",
      imageUrl: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Spacious and clean facilities"
    },
    {
      id: 6,
      title: "Personal Training",
      imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Certified trainers available"
    },
    {
      id: 7,
      title: "Recovery Area",
      imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Massage chairs and foam rollers"
    },
    {
      id: 8,
      title: "Boxing Ring",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Professional boxing equipment"
    },
    {
      id: 9,
      title: "Swimming Pool",
      imageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Olympic-sized pool"
    },
    {
      id: 10,
      title: "Sauna & Steam Room",
      imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Relaxation after workout"
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

      {/* Gym Facilities Gallery */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl text-white text-center font-One mb-8">Our Gym Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gymFacilities.map((facility) => (
            <div key={facility.id} className=" overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={facility.imageUrl} 
                alt={facility.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white font-One">
                <h3 className="text-2xl ">{facility.title}</h3>
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

export default One
