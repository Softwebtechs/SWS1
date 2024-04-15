import React from "react";
import ShopCard from "./ShopCard";
import s8 from "./img/eight.jpg";
import s11 from "./img/eleven.jpg";
import s5 from "./img/five.jpg";
import s4 from "./img/four.jpg";
import s9 from "./img/nine.jpg";
import s1 from "./img/one.jpg";
import s7 from "./img/seven.jpg";
import s6 from "./img/six.jpg";
import s10 from "./img/ten.jpg";
import s3 from "./img/three.jpg";
import s12 from "./img/twelve.jpg";
import s2 from "./img/two.jpg";
import s13 from "./img/thirteen.jpg";
const Shop = () => {
  return (
    <>
      <div className="  flex  flex-wrap gap-7 items-center justify-center p-10">
        <ShopCard
          img={s1}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s2}
          title={"Car Broke Shoe"}
          price1={"85"}
          price2={"65"}
        />
        <ShopCard
          img={s3}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s4}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s5}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s6}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s7}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s8}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s9}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s10}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s11}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
        <ShopCard
          img={s12}
          title={"Automobile Engine"}
          price1={"60"}
          price2={"45"}
        />
      </div>
    </>
  );
};

export default Shop;
