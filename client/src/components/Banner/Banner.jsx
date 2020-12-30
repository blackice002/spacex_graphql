import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const Banner = () => {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.nasa.gov/planetary/apod?api_key=BsLuuv59dAjQFwut1nCBjwCFlmXaXMBKUNiOJYQA"
      );
      setNasaData(result.data);
    };
    fetchData();
  }, []);

  console.log("nasaData", nasaData);

  return (
    <div>
      <h2>Nasa daily data</h2>
      {/* <p>{nasaData.explanation}</p> */}

      <ReactPlayer
        url={nasaData.url}
        playing="true"
        loop="true"
        config={{ youtube: { playerVars: { diablekd: 1 } } }}
      />
    </div>
  );
};

export default Banner;
