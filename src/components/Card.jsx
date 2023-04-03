import React, { useEffect, useState } from "react";

function Card({ country, category }) {
  const [records, setrecords] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b2c5f0d17c514438bd770c946ebaf9c2`
    )
      .then((data) => data.json())
      .then((res) => setrecords(res.articles));
  }, [country, category]);
  const handlePage = (selectedPage) => {
    setPage(selectedPage);
  };
  console.log("@SN ", records);
  return (
    <div>
      <h3>{category} news</h3>
      {records.length && (
        <div
          className="card-deck1"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {records.slice(page * 5 - 5, page * 5).map((item, index) => {
            return (
              <div
                className="2"
                style={{ height: "400px", width: "300px", border: "2px solid" }}
                key={index}
              >
                <img
                  className="card-img-top"
                  src={item.urlToImage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {records.length > 0 &&
          [...Array(records.length / 5)].map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => handlePage(i + 1)}
                style={{ padding: "10px" }}
              >
                {i + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
