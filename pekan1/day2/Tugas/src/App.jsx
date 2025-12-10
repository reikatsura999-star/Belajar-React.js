import React from "react";
import ProfileCard from "./components/ProfileCard";
import DiscountExample from "./components/DiscountExample";
import Greeting from "./components/Greeting";
import ConditionalStatus from "./components/ConditionalStatus";
import FruitsList from "./components/FruitsList";

export default function App() {
  const user = {
    name: "Alya Ramadhani",
    photo: "https://i.pinimg.com/236x/f7/94/52/f794521586e71c9554a071961e52359f.jpg",
    bio: "Maaf aku masih pemula, baru belajar React.js",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

  const price = 50000;
  const discountRate = 0.15;
  const isLoggedIn = true;
  const unreadCount = 3;
  const fruits = [
    { id: "f1", name: "Mangga", color: "Kuning" },
    { id: "f2", name: "Apel", color: "Merah" },
    { id: "f3", name: "Pisang", color: "Kuning" }
  ];

  return (
    <div>
      <ProfileCard {...user} />
      <DiscountExample price={price} discountRate={discountRate} />
      <Greeting user={user.name} />
      <ConditionalStatus isLoggedIn={isLoggedIn} unreadCount={unreadCount} />
      <FruitsList items={fruits} />
    </div>
  );
}
