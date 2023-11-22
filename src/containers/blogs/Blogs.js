import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useSearchParams } from "react-router-dom";

export default function Blogs(pageParams) {
  const {isDark} = useContext(StyleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') ?? 1);
  const pageLength = 6;
  const totalPages = Math.ceil((blogSection.blogs.length) / pageLength);

  useEffect(()=>{
    if(currentPage>totalPages){
      setCurrentPage(totalPages);
    }
    if(currentPage<1){
      setCurrentPage(1);
    }
  },[currentPage, totalPages])

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`pagination-number ${!isDark && currentPage.toString() === i.toString() ? 'small-dark':''} ${currentPage.toString() === i.toString() ? 'active' : ''}`}
          onClick={() => {
            setCurrentPage(i);
            setSearchParams({
              page: i
            },{replace: true});
          }}>{i}</div>
      );
    }
    return pageNumbers;
  };

  const indexOfLastBlog = pageParams?.withoutPagination ? pageLength - 1 :  currentPage * pageLength;
  const indexOfFirstBlog = pageParams?.withoutPagination ? 0 : indexOfLastBlog - pageLength;
  const currentBlogs = blogSection.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  if (!blogSection.display) {
    return null;
  }

  return (
      <div className="main" style={{ marginTop: 0 }} id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p className={ isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle" }>
            {blogSection.subtitle}
          </p>
        </div>
        <Fade duration={2000} distance="20px" key={"BlogsContainer"+currentPage.toString()}>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {currentBlogs.map((blog, i) => {
              return (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    key: blog.key,
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
            { pageParams?.withoutPagination && 
            <BlogCard
              isDark={isDark}
              blog={{
                title: "Read More!",
                description: "Checkout all my articles, I would love to hear your feedback."
              }}
            /> }
          </div>
        </div>
        </Fade>
        { !pageParams?.withoutPagination &&
          <div className="blogs-pagination">
            {renderPageNumbers()}
          </div>
        }
      </div>
  );
}