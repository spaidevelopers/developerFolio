import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import { useParams } from "react-router-dom";
import "./Main.scss";
import BlogDetails from "./blogs/BlogDetails";

const BlogsParent = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const params = useParams();

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if(isDark){
      document.body.style.backgroundColor = '#171c28';
    }else{
      document.body.style.backgroundColor = '';
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
            <Header />
            {params.blogKey ? 
            <BlogDetails />
            : 
            <Blogs />
            }
            <Footer />
      </StyleProvider>
    </div>
  );
};

export default BlogsParent;