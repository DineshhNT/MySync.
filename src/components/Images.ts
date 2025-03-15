import Heroimage from "../../images/My/Heroimage.jpg";

import cv from "../../assests/DINESH N T CV.pdf";

import HTML from "../../images/Skills/Front-End/html.png";
import CSS from "../../images/Skills/Front-End/CSS.png";
import JS from "../../images/Skills/Front-End/js.png";
import ReactImg from "../../images/Skills/Front-End/REACT.png"; 
import Tailwind from "../../images/Skills/Front-End/Tailwind.png";
import Vite from "../../images/Skills/Front-End/Vite.png";

import Python from "../../images/Skills/Back-End/python.png";
import FireBase from "../../images/Skills/Back-End/FireBase.png";
import Flask from "../../images/Skills/Back-End/Flask.png";
import MongoDB from "../../images/Skills/Back-End/MongoDB.png";
import MySql from "../../images/Skills/Back-End/MySql.png";
import NodeJS from "../../images/Skills/Back-End/NodeJS.png";

import Algorithms from "../../images/Skills/AIML/Algorithms.png";
import Numpy from "../../images/Skills/AIML/Numpy.png";
import Pandas from "../../images/Skills/AIML/Pandas.png";
import PyTorch from "../../images/Skills/AIML/PyTorch.png";
import TensorFlow from "../../images/Skills/AIML/TensorFlow.png";
import Scikitlearn from "../../images/Skills/AIML/Scikitlearn.png";

import Canva from "../../images/Skills/Others/Canva.png";
import Figma from "../../images/Skills/Others/Figma.png";
import GitHub from "../../images/Skills/Others/GitHub.png";
import Photoshop from "../../images/Skills/Others/Photoshop.png";
import VSCode from "../../images/Skills/Others/VS Code.png";
import Git from "../../images/Skills/Others/Git.png";


import College from "../../images/Institutionlogo/college_logo.png";
import School from "../../images/Institutionlogo/school_logo.png";
import Izet from "../../images/Institutionlogo/izet_logo.jpeg";
import Internpe from "../../images/Institutionlogo/internpe_logo.jpeg";

import AI_Med_Assist from "../../images/ProjectThumb/AI-Med Assist.jpg";
import MySync from "../../images/ProjectThumb/My Sync.jpg";
import DeepSight from "../../images/ProjectThumb/Deep sight.jpg";
import Mushroom_Classifier from "../../images/ProjectThumb/Mushroom Classifier.jpg";
import SentimentX from "../../images/ProjectThumb/Sentiment X.jpg";
import ED from "../../images/ProjectThumb/E&D.jpg";

import Hero_image from "../../images/My/Hero_image.jpg";
import member2 from "../../images/Teammembers/Deena.jpeg";
import member3 from "../../images/Teammembers/Priyanka.jpg";

import Dlogo from "../../images/My/D_logo.png";

interface ImageCategory {
  [key: string]: string;
}

interface ImagesType {
  Heroimage: string;
  cv: string;
  FrontEnd: ImageCategory;
  BackEnd: ImageCategory;
  AIML: ImageCategory;
  Others: ImageCategory;
  InstitutionLogos: ImageCategory;
  ProjectThumbs: ImageCategory;
  Teammembers: ImageCategory;
  Dlogo: string;
}

const Images: ImagesType = {
  Heroimage,

  cv,

  FrontEnd: { HTML, CSS, JS, React: ReactImg, Tailwind, Vite },

  BackEnd: { Python, FireBase, Flask, MongoDB, MySql, NodeJS },

  AIML: { Algorithms, Numpy, Pandas, PyTorch, TensorFlow , Scikitlearn},

  Others: { Canva, Figma, GitHub, Photoshop, VSCode , Git},

  InstitutionLogos: { College, School, Izet, Internpe },

  ProjectThumbs: {
    AI_Med_Assist,
    MySync,
    DeepSight,
    Mushroom_Classifier,
    SentimentX,
    ED,
  },

  Teammembers: { Hero_image, member2, member3},

  Dlogo,
};

export default Images;
