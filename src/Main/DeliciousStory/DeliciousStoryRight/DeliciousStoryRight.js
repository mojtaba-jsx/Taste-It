import React from "react";
import "./DeliciousStoryRight.css";

import DeliciousStoryTitle from "./DeliciousStoryTitle/DeliciousStoryTitle";
import DeliciousStoryText from "./DeliciousStoryText/DeliciousStoryText";
import DeliciousStoryRightSign from "./DeliciousStoryRightSign/DeliciousStoryRightSign";

function DeliciousStoryRight() {
  return (
    <div className="deliciousStoryRight">
      <div className="deliciousStoryRight__top">
        <DeliciousStoryTitle title={'The Delicious Story'} />
        <DeliciousStoryText text={'The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.'} />
      </div>

      <div className="deliciousStoryRight__bottom">
        <div className="deliciousStoryRight__bottom-left">
        <DeliciousStoryTitle title={'2018'} />
        <DeliciousStoryText text={'Plan for this restaurant to deliver healthy food.'} />
        </div>

        <div className="deliciousStoryRight__bottom-right">
        <DeliciousStoryTitle title={'2022'} />
        <DeliciousStoryText text={'Happily in the fourth year by fulfill the motto.'} />
        </div>
      </div>
      <DeliciousStoryRightSign />
    </div>
  );
}

export default DeliciousStoryRight;
