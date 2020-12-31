import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./banner.scss";

const Banner = () => {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://api.nasa.gov/planetary/apod?api_key=BsLuuv59dAjQFwut1nCBjwCFlmXaXMBKUNiOJYQA"
      );
      setNasaData(result.data);
    };
    fetchData();
  }, []);

  console.log(nasaData);

  console.log(nasaData.url);
  return (
    <div
      className="banner_container"
      style={{
        backgroundImage: `url(${nasaData.url})`,
      }}
    >
      {/* <ReactPlayer url={nasaData.url} /> */}
      {nasaData.media_type === "video" ? (
        <ReactPlayer
          url={nasaData.url}
          loop="true"
          width="100%"
          playing="true"
          config={{ youtube: { playerVars: { disablekb: 1} } }}
        />
      ) : (
        <img src={nasaData.url} alt={nasaData.copyright} />
      )}
      <div className="banner_row">
        <h4>{nasaData.title}</h4>
        <p className="date_para">
          {nasaData.date} &#169; {nasaData.copyright}{" "}
        </p>
      </div>
      <p className="nasaData_explanation">{nasaData.explanation}</p>
    </div>
  );
};

export default Banner;
