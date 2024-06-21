import React, { useEffect, useState } from 'react';

const profileIcons = ['lion', 'crocodile', 'tiger', 'hamster', 'dog'];

const getRandomProfileIcon = () => {
  return profileIcons[Math.floor(Math.random() * profileIcons.length)];
};

const Profile = ({ username }: { username: string }) => {
  const [profilePic, setProfilePic] = useState<string>('');

  useEffect(() => {
    // Check if there's an existing profile picture in local storage
    const storedProfilePic = localStorage.getItem(`${username}-profilePic`);
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    } else {
      // Assign a new profile picture if none exists
      const profileIcon = getRandomProfileIcon();
      const profilePicPath = `/images/${profileIcon}.jpg`; // Assuming you have images in the public/images folder
      setProfilePic(profilePicPath);
      localStorage.setItem(`${username}-profilePic`, profilePicPath);
    }
  }, [username]);

  return (
    <div className="flex items-center space-x-4">
      <img src={profilePic} alt="Profile Picture" className="w-10 h-10 rounded-full" />
      <span>{username}</span>
    </div>
  );
};

export default Profile;
