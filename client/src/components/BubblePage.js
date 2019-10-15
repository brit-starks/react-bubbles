import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
// import colors from '../../../server';
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => 
      setColorList(res.data)
      // console.log(res)
      )
    .catch(err => console.log('Something went wrong Brit', err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
