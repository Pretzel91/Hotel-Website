import room1 from '../assets/room1.png'
import room2 from '../assets/room2.jpg'
import room3 from '../assets/room3.jpg'
import room4 from '../assets/room4.jpg'
import img1 from '../assets/img01.jpg'
import img2 from '../assets/img02.jpg'
import img3 from '../assets/img03.jpg'
import james from '../assets/james.jpg'
import harry from '../assets/harry.jpeg'
import michael from '../assets/mk.jpeg'
import { MdRoomService, MdFreeBreakfast, MdPool } from "react-icons/md";
import { FaWifi, FaHome, FaIdBadge, FaHeart, FaMountain } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";



export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",

];

export const exclusiveOffers = [
    {_id:1, 
    title: "Summer Escape Package", 
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25, 
    expiryDate: "Aug 31", 
    image: img1
    },
    {_id:2, 
    title: "Romantic Gateway", 
    description: "Special couples packages including spa treatment",
    priceOff: 20, 
    expiryDate: "Oct 10", 
    image: img2
    },
    {_id:3, 
    title: "Luxury Retreat", 
    description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide",
    priceOff: 30, 
    expiryDate: "Sep 20", 
    image: img3
    }
]

export const testimonials =[
    {
        id:1, name:"James Bond", address: "Barcelona, Spain", image:james, rating: 4,
        review: "I've used many booking platforms before, but none can compare to the personalizes experience and attention to detail that GetSetGo provides. Their curated selection of hotels is unmatched."
    },
    {
        id:1, name:"Harry Poter", address: "Liverpool, United Kingdom", image:harry, rating: 4.5,
        review: "GetSetGo exceeded my expectation. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!."
    },
    {
        id:1, name:"Michael Jackson", address: "New York, USA", image:michael, rating: 4,
        review: "Amazing service! I always find the best luxury accomodations through GetSetGo. Their recommendations never disappoint!."
    },
]

export const BoutiqueHotelData= {
    "_id": "123456789",
    "name": "Boutique Hotel",
    "city": "Helsinki",
    "address": " Mannerheimintie 2 A, 00160, Helsinki",
}
export const roomsDummyData = [
    {
        "_id" : "1",
        "hotel": BoutiqueHotelData,
        "roomType": "Double Bed",
        "pricePerNight" : 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [room1, room2, room3, room4],
        "isAvailable": true,
        "createdAt": "10-10-2025",
        "updatedAt": "10-10-2025",
        "__v": 0
    },
    {
        "_id" : "2",
        "hotel": BoutiqueHotelData,
        "roomType": "Double Bed",
        "pricePerNight" : 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [room2, room3, room4, room1],
        "isAvailable": true,
        "createdAt": "10-10-2025",
        "updatedAt": "10-10-2025",
        "__v": 0
    },
    {
        "_id" : "3",
        "hotel": BoutiqueHotelData,
        "roomType": "Double Bed",
        "pricePerNight" : 249,
        "amenities": ["Room Service", "Free Wifi", "Free Breakfast"],
        "images": [room3, room4, room1, room2],
        "isAvailable": true,
        "createdAt": "10-10-2025",
        "updatedAt": "10-10-2025",
        "__v": 0
    },
    {
        "_id" : "4",
        "hotel": BoutiqueHotelData,
        "roomType": "Double Bed",
        "pricePerNight" : 199,
        "amenities": ["Room Service", "Free Wifi", "Pool Access"],
        "images": [room1, room2, room3, room4],
        "isAvailable": true,
        "createdAt": "10-10-2025",
        "updatedAt": "10-10-2025",
        "__v": 0
    },
]
export const facilityIcons ={
    "Free Wifi": FaWifi ,
    "Mountain View" : FaMountain,
    "Free Breakfast": MdFreeBreakfast,
    "Room Service": MdRoomService ,
    "Pool Access": MdPool ,
};

export const roomCommonData = [
    {
        icon: FaHome, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you."
    },
    {
        icon: FaIdBadge, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards."
    },
    {
        icon:TbLocationFilled, title: "Excellent Location", description: "90% of guests rated the location 5 stars."
    },
    {
        icon:FaHeart, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating."
    },
]

export const userBookingsDummyData = [
    {
        "id": "234234",
        "user": "Saluja Prajapati",
        "room": roomsDummyData[1],
        "hotel": BoutiqueHotelData,
        "checkInDate": "05-10-2025",
        "checkOutDate": "10-10-2025",
        "totalPrice": 299,
        "guests": "pending",
        "paymentMethod" : "Stripe",
        "isPaid": true,
        "createdAt": "02-10-2025",
        "updatedAt": "02-10-2025",
        "__v": 0
    }
]