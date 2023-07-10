import {IFeedTypes} from "./feed.types.ts";
import chees from "../../assets/sprites/food/chees.png";
import juice from "../../assets/sprites/food/juice.png";
import chicken from "../../assets/sprites/food/chicken.png";
import "./feed.styles.css";

export function Feed({hungryStats, onFeedClick, goBackButton}: IFeedTypes) {


   function chickenClick() {
      if(hungryStats > 4){
         onFeedClick(+ 5);
      }

   }

   function cheeseClick() {
      if(hungryStats > 2){
         onFeedClick (+ 3);
      }
   }

   function juiceClick() {
      if(hungryStats > 0){
         onFeedClick (+ 1);
      }
   }


   return (
      <div className={"feedComponent"}>
         <div className={ "foodItems" }>
            <div className={ "imageContainer" } onClick={ chickenClick }>
               <img src={ chicken } alt={ "chicken" }/>
            </div>
            <div className={ "imageContainer" } onClick={ cheeseClick }>
               <img src={ chees } alt={ "chess" }/>
            </div>
            <div className={ "imageContainer" } onClick={ juiceClick }>
               <img src={ juice } alt={ "juice" }/>
            </div>
            <div>
               <button onClick={goBackButton}>GO BACK</button>
            </div>
         </div>
         <div className={ "hungryStats" }>
            <span>{ hungryStats }</span>
         </div>

      </div>
   );
}
