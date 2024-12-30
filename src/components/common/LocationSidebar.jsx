import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../utils/locationSlice";
import { LOCATION_API, SWIGGY_COORDS_API } from "../../utils/constants";
import { useApiUrls } from "../../utils/useApiUrls";
import Cross from "../svg/Cross";
const BYPASS_CORS = import.meta.env.VITE_BYPASS_CORS_URL;

const LocationSidebar = ({ locationSideBar, setLocationSideBar }) => {
  const [locationInput, setLocationInput] = useState("");
  const [locationData, setLocationData] = useState();

  const urls = useApiUrls();

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch(BYPASS_CORS, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: urls.LOCATION_INFO_API }),
        });
        const data = await response.json();

        dispatch(
          setLocation({
            lat: latitude,
            long: longitude,
            address: {
              main_text: data?.data[0]?.address_components[0]?.short_name,
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
              main_text: data?.data[0]?.address_components[0]?.short_name,
              secondary_text: `${data?.data[0]?.address_components[1]?.short_name}, ${data?.data[0]?.address_components[2]?.short_name}`,
            },
          })
        );
      } catch (error) {
        console.log(error);
      }

      setLocationSideBar(false);
    });
  };

  const getLocationSugg = async () => {
    try {
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: LOCATION_API + locationInput }),
      });
      const data = await response.json();
      setLocationData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCoords = async (placeId) => {
    try {
      const response = await fetch(BYPASS_CORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: SWIGGY_COORDS_API + placeId }),
      });
      const data = await response.json();

      const lat = data?.data[0]?.geometry?.location?.lat;
      const long = data?.data[0]?.geometry?.location?.lng;

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout;

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
          <Cross onPress={() => setLocationSideBar(false)} />

          <input
            onChange={(e) => setLocationInput(e.target.value)}
            type="text"
            placeholder="Search for Area, Street Name..."
            className=" rounded-md p-4 border border-gray-300 w-full"
          />

          {locationData &&
            locationData.map((location) => {
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
            onClick={getCurrentPosition}
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
