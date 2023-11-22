import React, {useState, useEffect} from "react";
import "./Blog.scss";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogDetails() {
  const [blogData, setBlogData] = useState({});
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if(params.blogKey){
      const targetBlog = blogSection.blogs.find(blog => blog.key === params.blogKey);
      if (targetBlog) {
        setBlogData(targetBlog);
      } else {
        navigation('/blogs', { replace: true });
      }
    }
  }, [navigation, params]);

  return (
      <div className="main" style={{ marginTop: 0 }} id="blogs">
        <div className="blog-image-div">
          <img alt={blogData.heading} src={blogData.image} />
        </div>
        <div className="blog-header">
          <h1 className="blog-header-text">{blogData.heading}</h1>
        </div>
        <Fade duration={2000} distance="20px">
          <div className="blog-main-div">
            <div dangerouslySetInnerHTML={{ __html: blogData.data }} />
          </div>
        </Fade>
      </div>
  );
}