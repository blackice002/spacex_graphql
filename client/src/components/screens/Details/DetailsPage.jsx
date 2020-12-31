import React from "react";
// import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./details.scss";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LUNCH_DETAILS = gql`
  query LUNCH_DETAILS($id: String!) {
    launch(id: $id) {
      id
      name
      details
      date_local
      success
      links {
        wikipedia
        patch {
          small
        }
        flickr {
          original
        }
      }
      getRocket {
        id
        name
        country
        company
        description
      }
    }
  }
`;

const DetailsPage = (props) => {
  const { id } = props.match.params;
  // console.log(id)
  const { loading, error, data } = useQuery(LUNCH_DETAILS || [], {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (!data & loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const item = data.launch;

  const tableRow = (text, data, textColor) => {
    return (
      <tr>
        <th>{text}</th>
        <td style={{ color: textColor }}> {data}</td>
      </tr>
    );
  };
  return (
    <div
      className="detail_main_container"
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(255,255,255, .8), rgb(255,255,255)), url(${item.links.flickr.original[0]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${item.links.flickr.original[0]}), #1c1c1c, cover, no-repeat`
      }}
    >
      <div className="row">
        <div className="img_col">
          <img src={item.links.patch.small} alt="rocket_image" />
        </div>
        <div className="info_col">
          <table>
            <tbody>

           
            {tableRow("Mission name :", item.name)}
            {tableRow(
              "Date :",
              <Moment format="MMMM-DD, YYYY HH:mm a, dddd">
                {item.date_local}
              </Moment>
            )}
            {tableRow(
              "Mission Status :",
              (item.success ? "Success" : "Failure"), 
              (item.success ? "#05a005" : "#ff0066")
            )}
            {tableRow("Wikipedia :", (<Link  style ={{color:"blue"}} to={{pathname:item.links.wikipedia}} target="_blank"> {item.links.wikipedia}</Link>))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <h2>Mission Details</h2>
        <p>{item.details}</p>
      </div>

      {/* <img src={item.links.flickr.original[0]} alt={item.name}/> */}
      <div className="rocket_details row">
        <h2>Rocket Details</h2>
        <table width="100%">
        {tableRow("Rocket name", item.getRocket.name)}
        {tableRow("Country", item.getRocket.country)}
        {tableRow("Company", item.getRocket.company)}
        {tableRow("Description", item.getRocket.description)}
        </table>
        
      </div>
    </div>
  );
};

export default DetailsPage;
