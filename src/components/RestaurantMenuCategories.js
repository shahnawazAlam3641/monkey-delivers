import React, { useState } from "react";
import { claudinaryImgCDN } from "../utils/constants";

const RestaurantMenuCategories = ({ menuType }) => {
  // const [accordianOpen, setAccordianOpen] = useState(false);

  const [categoryAccordianOpen, setCategoryAccordianOpen] = useState({});

  // const handleAccordian = () => {
  //   console.log("clicked");
  //   setAccordianOpen(!accordianOpen);
  // };

  const handleCategoryAccordian = (itemTitle) => {
    console.log("clicked");
    setCategoryAccordianOpen((previousState) => {
      const newState = { ...previousState };
      newState[itemTitle] = !previousState[itemTitle];
      return newState;
    });
  };

  return (
    <>
      {/* <h1 className="bg-blue-300" onClick={handleAccordian}>
        {menuType?.card?.card?.title}
      </h1> */}
      <h1 className="bg-blue-300">{menuType?.card?.card?.title}</h1>
      {menuType?.card?.card?.categories.map((categoryItem) => {
        const categoryId = categoryItem?.title;
        const isOpen = categoryAccordianOpen[categoryId]; // Check if the accordion is open

        {
          /* const isOpen = categoryAccordianOpen[categoryItem.title]; */
        }
        return (
          <div key={categoryItem?.title} className={`bg-yellow-300`}>
            <h1
              onClick={() => {
                handleCategoryAccordian(categoryItem.title);
              }}
            >
              {categoryItem?.title}
            </h1>
            <div className={`${isOpen ? "block" : "hidden"}`}>
              {categoryItem?.itemCards.map((item) => {
                return (
                  <div key={item?.card?.info?.id}>
                    <div>
                      <p>{item?.card?.info?.name}</p>
                      <p>
                        ₹
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}
                      </p>
                      <p>{item?.card?.info?.description}</p>
                    </div>
                    <div>
                      <img
                        className="w-16"
                        src={claudinaryImgCDN + item?.card?.info?.imageId}
                      />
                      <button>add</button>
                      <div>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenuCategories;

// import React, { useState } from "react";
// import { claudinaryImgCDN } from "../utils/constants";

// const RestaurantMenuCategories = ({ menuType }) => {
//   // State to track the open/close state of each category accordion
//   const [categoryAccordianOpen, setCategoryAccordianOpen] = useState({});

//   // Function to handle clicking on a category accordion
//   const handleCategoryAccordian = (categoryItemId) => {
//     // Toggle the open/close state of the clicked category accordion
//     setCategoryAccordianOpen((prevState) => {
//       const updatedState = { ...prevState }; // Create a copy of the previous state
//       updatedState[categoryItemId] = !prevState[categoryItemId]; // Toggle the value for the specific category item
//       return updatedState; // Return the updated state
//     });
//   };

//   return (
//     <>
//       {/* Render each category accordion */}
//       {menuType?.card?.card?.categories.map((categoryItem) => {
//         const categoryId = categoryItem?.title;
//         const isOpen = categoryAccordianOpen[categoryId]; // Check if the accordion is open

//         return (
//           <div key={categoryId} className={`bg-yellow-300`}>
//             {/* Clickable title of the category accordion */}
//             <h1 onClick={() => handleCategoryAccordian(categoryId)}>
//               {categoryItem?.title}
//             </h1>
//             {/* Content of the category accordion */}
//             <div className={`${isOpen ? "flex" : "hidden"}`}>
//               {categoryItem?.itemCards.map((item) => {
//                 return (
//                   <div key={item?.card?.info?.id}>
//                     {/* Display item details */}
//                     <div>
//                       <p>{item?.card?.info?.name}</p>
//                       <p>
//                         ₹
//                         {item?.card?.info?.price / 100 ||
//                           item?.card?.info?.defaultPrice / 100}
//                       </p>
//                       <p>{item?.card?.info?.description}</p>
//                     </div>
//                     {/* Display item image and controls */}
//                     <div>
//                       <img
//                         className="w-16"
//                         src={claudinaryImgCDN + item?.card?.info?.imageId}
//                       />
//                       <button>add</button>
//                       <div>
//                         <button>-</button>
//                         <p>0</p>
//                         <button>+</button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default RestaurantMenuCategories;
