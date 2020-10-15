import React from "react";
// import Map from "./Maps";

const Posts = ({ posts, loading }) => {
  console.log(posts);
  if (loading) {
    return (
      // <h4>Circular Preloader</h4>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>

          <div className="gap-patch">
            <div className="circle"></div>
          </div>

          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="mainContent container">
      <div className="mainContent__div">
        {posts.map((post) => (
          <div className="row mainContent--row z-depth-2  ">
            <div className="col m4 s12 media-img center-align ">
              <div id="media-img">
                <img
                  title={post.title}
                  className=" site--img responsive-img hoverable z-depth-4"
                  src={post.img}
                  alt={post.size}
                />
              </div>
            </div>

            <div className="col m4 s12 center">
              <div className="description center">
                <h5 className="hoverable chip  description--item">
                  Title: {post.title}{" "}
                </h5>
                <h5 className="hoverable chip  description--item">
                  Nearby: {post.nearbyLocation}{" "}
                </h5>
                <h5 className="hoverable chip  description--item">
                  size:{post.size}{" "}
                </h5>
                <h5 className="hoverable chip  description--item">
                  price: {post.price}
                </h5>
              </div>
            </div>
            <div className="col m4 s12 sitemap center-align">
              <div className="invisible__small_screen">
                {/* <Map lat={post.lat} lng={post.lng}></Map> */}
              </div>
              <button className="waves-effect btn small_screen_button">
                Show Map
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div class="chip">HTML 5</div> */}
    </section>
  );
};

export default Posts;
