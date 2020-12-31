import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {Link} from 'react-router-dom'
import "./display_card.scss";
import Pagination from "../pagination/Pagination";
import Moment from "react-moment";

const allLunches = gql`
  query LaunchesQuery {
    launches {
      id
      name
      success
      date_local
      details
      links {
        patch{
          small
        }
        flickr {
          original
        }
      }
    }
  }
`;

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 15;
  const { loading, error, data} = useQuery(allLunches , {  
    // fetchPolicy:"cache-only"
  });

  if (!data && loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
// console.log(data)
  const items  = data.launches;
  const reversedArray = items
    .slice()
    .sort((a, b) => b.date_local - a.date_local);
  // console.log(reversedArray);
  // console.log(items);

  const indexOflastPost = currentPage * postPerpage;
  const indexOfFirstPost = indexOflastPost - postPerpage;
  const currentPosts = reversedArray.slice(indexOfFirstPost, indexOflastPost);

  const totalPages = Math.ceil(items.length / postPerpage);

  // console.log(currentPosts);
  // console.log(currentPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const pageinate = (num) => {
    setCurrentPage(num);
  };

  // const getMoreData = (id) => {
  //   history.push(`/details/:${id}`)
  //   // console.log("launch id :", id);
  // };


  return (
    <div className="main_container">
      <h4>List of satelite launches</h4>
      <div className="card_wrapper">
      {currentPosts.map((launch, i) => (
        <div
          key={launch.id}
          className="display_card"
        >
          <div className="first_row">
            <div className="mission_name">
              <p>Mission Name:</p>
              <h2> {launch.name}</h2>
              <h4
                style={{
                  color: launch.success ? "#05a005" : "#ff0066",
                  borderRadius:"8px",
                  // maxWidth:"50%"               
                }}
              >
                <span>&#8226;</span> {launch.success ? "Success" : "Failure"}
              </h4>
            </div>
            <div className="logo_size">
              {launch.links.patch.small ? <img src={launch.links.patch.small}  alt="rocket-logo"/>: <h4>No-Image</h4> }
            </div>
          </div>
          <p>Launch Date: <Moment format="MMMM-DD, YYYY HH:mm a, dddd">{launch.date_local}</Moment></p>
          <div className="more_details">
          <Link to={`/details/${launch.id}`} className="more_detail_button" >More details</Link>
          </div>
         
        </div>
      ))}
 </div>
      <Pagination
        paginate={pageinate}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
};
export default Card;
