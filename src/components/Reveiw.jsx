import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewSection = () => {
  
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      reviewText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sagittis erat, non hendrerit risus. Nulla facilisi.',
      image: 'https://images.unsplash.com/photo-1565289144705-e1424ea05bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      name: 'Jane Smith',
      reviewText:
        'Vivamus ac tincidunt est. Quisque bibendum augue non est tristique, ut luctus libero scelerisque. Donec eu mi sit amet arcu sodales auctor ut sit amet ex.',
      image: 'https://images.unsplash.com/photo-1522790683078-0cca6ee71460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      reviewText:
        'Cras vestibulum arcu a mi facilisis, ut lacinia ante facilisis. Integer a risus nec metus iaculis dignissim.',
      image: 'https://images.unsplash.com/photo-1589985270928-9db7ad783a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
   
  ];

  return (
    <div className="bg-[#FFF5E1]  py-12">
      <div className="container mx-auto flex p-4 flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8 order-2 md:order-1">
          
          <img
            src="https://images.unsplash.com/photo-1580650487485-7f3a88a39499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNoZWZ8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
            alt="Reviewer"
            className="w-84 h-[400px] object-cover shadow-lg mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 p-4 order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-[#800020] mb-4">Customer Reviews</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={100}
            selectedItem={0}
          >
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#800020] p-8 rounded-lg shadow-md">
               
                <div className="flex items-center mt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-60 object-cover  shadow-md"
                  />
                  <div className="ml-2">
                  <p className="text-[#FFF5E1]">{review.reviewText}</p>
                    <p className="font-semibold text-[#FFD700]">{review.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
