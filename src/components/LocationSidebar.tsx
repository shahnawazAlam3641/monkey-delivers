import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../utils/locationSlice";
import { LOCATION_API, SWIGGY_COORDS_API } from "../utils/constants";
import { useApiUrls } from "../utils/useApiUrls";

const LocationSidebar = ({ locationSideBar, setLocationSideBar }) => {
  const [locationInput, setLocationInput] = useState("");
  const [locationData, setLocationData] = useState();

  const urls = useApiUrls();

  const getLocationSugg = async () => {
    try {
      const response = await fetch(LOCATION_API + locationInput);
      const data = await response.json();
      // console.log(data);
      setLocationData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCoords = async (placeId, address) => {
    try {
      const response = await fetch(SWIGGY_COORDS_API + placeId);
      const data = await response.json();
      console.log(data);

      const lat = data?.data[0]?.geometry?.location?.lat;
      const long = data?.data[0]?.geometry?.location?.lng;

      // console.log({ lat: lat, long: long, address: address });

      console.log(data?.data[0]);

      dispatch(
        setLocation({
          lat: lat,
          long: long,
          address: {
            main_text: data?.data[0]?.address_components[0]?.short_name,
            secondary_text: `${data?.data[0]?.address_components[1]?.short_name}, ${data?.data[0]?.address_components[2]?.short_name}`,
          },
        })
      );
      localStorage.setItem(
        "location",
        JSON.stringify({
          lat: lat,
          long: long,
          address: {
            main_text: data?.data[0]?.address_components[0]?.short_name,
            secondary_text: `${data?.data[0]?.address_components[1]?.short_name}, ${data?.data[0]?.address_components[2]?.short_name}`,
          },
        })
      );

      console.log(localStorage.getItem("location"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout;

    // console.log(locationInput.length > 1);
    if (locationInput.length > 1) {
      timeout = setTimeout(() => {
        getLocationSugg();
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [locationInput]);

  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`fixed z-10 top-0 h-screen w-[400px] max-w-full   bg-white transition-all duration-200 ${
          locationSideBar ? "left-0" : "-left-[150%]"
        }`}
      >
        <div className="relative pt-20 px-4 flex flex-col gap-5 ">
          <svg
            onClick={() => setLocationSideBar(false)}
            className="top-5 left-5 absolute w-4 cursor-pointer"
            fill="#313131"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>

          <input
            onChange={(e) => setLocationInput(e.target.value)}
            type="text"
            placeholder="Search for Area, Street Name..."
            className=" rounded-md p-4 border border-gray-300 w-full"
          />

          {locationData &&
            locationData.map((location) => {
              // console.log(location);
              return (
                <div
                  key={location?.place_id}
                  onClick={() => {
                    getCoords(location?.place_id, {
                      main_text: location?.structured_formatting?.main_text,
                      secondary_text:
                        location?.structured_formatting?.secondary_text,
                    });
                    setLocationSideBar(false);
                  }}
                >
                  <div className="flex flex-col gap-1 p-2   rounded-md group cursor-pointer">
                    <p className="text-md font-bold text-gray-700 group-hover:text-orange-400">
                      {location?.structured_formatting?.main_text}
                    </p>
                    <p className="text-sm  text-gray-400">
                      {location?.structured_formatting?.secondary_text}
                    </p>
                  </div>
                  <div className="h-[1px] bg-slate-300 w-full"></div>
                </div>
              );
            })}

          <div
            className="flex flex-col gap-1 p-5 border border-gray-300 rounded-md group cursor-pointer"
            onClick={() => {
              navigator.geolocation.getCurrentPosition(async (position) => {
                console.log(position);
                const { latitude, longitude } = position.coords;
                // console.log(latitude, longitude);

                try {
                  const response = await fetch(urls.LOCATION_INFO_API);
                  const data = await response.json();

                  dispatch(
                    setLocation({
                      lat: latitude,
                      long: longitude,
                      address: {
                        main_text:
                          data?.data[0]?.address_components[0]?.short_name,
                        secondary_text: `${data?.data[0]?.address_components[1]?.short_name}, ${data?.data[0]?.address_components[2]?.short_name}`,
                      },
                    })
                  );

                  localStorage.setItem(
                    "location",
                    JSON.stringify({
                      lat: latitude,
                      long: longitude,
                      address: {
                        main_text:
                          data?.data[0]?.address_components[0]?.short_name,
                        secondary_text: `${data?.data[0]?.address_components[1]?.short_name}, ${data?.data[0]?.address_components[2]?.short_name}`,
                      },
                    })
                  );

                  console.log(data);
                } catch (error) {
                  console.log(error);
                }

                console.log(localStorage.getItem("location"));

                setLocationSideBar(false);
              });
            }}
          >
            <p className="text-md font-bold text-gray-700 group-hover:text-orange-400">
              Get Current Location
            </p>
            <p className="text-sm  text-gray-400">Using GPS</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setLocationSideBar(false)}
        className={`fixed h-screen  top-0 left-0 right-0 bottom-0 bg-[#212121a6] ${
          locationSideBar ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default LocationSidebar;
