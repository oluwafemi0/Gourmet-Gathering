import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MenuSection = () => {
  // Define an array of food items (you can replace these with your menu items)
  const menuItems = [
    { id: 1, name: 'Dish 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1528451635828-f28cd48439a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 2, name: 'Dish 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1589985270928-9db7ad783a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 3, name: 'Dish 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1584278859516-41e5af3920ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 4, name: 'Dish 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1522790683078-0cca6ee71460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 5, name: 'Dish 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1601316632290-bac930b9b48b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 6, name: 'Dish 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1565289144705-e1424ea05bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 7, name: 'Dish 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus ac tincidunt est.', image: 'https://images.unsplash.com/photo-1536974471655-0466120eff7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' },
    
  ];

  const renderMenuGroups = () => {
    const menuGroups = [];
    for (let i = 0; i < menuItems.length; i += 1) {
      const group = menuItems.slice(i, i + 1);
      menuGroups.push(
        <div key={i} className="flex justify-center items-center">
          {group.map((item) => (
            <div key={item.id} className="p-8">
              <img
                src={item.image}
                alt={item.name}
                className="w-72 h-84 object-cover rounded-lg"
              />
              <h3 className="text-lg text-[#FFD700] font-semibold mt-2">{item.name}</h3>
              <p className="text-[#FFF5E1]">{item.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return menuGroups;
  };

  return (
    <div className="bg-[#800020] py-16">
      <div className="container p- mx-auto">
        <h2 className="text-3xl font-semibold text-[#FFD700] mb-8 text-center">Our Menu</h2>
        <Carousel 
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={33.33}
          selectedItem={0}
          renderArrowPrev={(clickHandler) => (
            <button
              className="absolute left-0 top-1/2 cursor-pointer text-4xl ml-[-20px] transform -translate-y-1/2  text-[#FFD700] bg-transparent p-2 "
              onClick={clickHandler}
            >
              ||||
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button
              className="absolute right-0 top-1/2 cursor-pointer text-4xl mr-[-20px] rotate-180 transform -translate-y-1/2 bg-transparent  text-[#FFD700]  p-2 "
              onClick={clickHandler}
            >
              ||||
            </button>
          )}
        >
          {renderMenuGroups()}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuSection;
