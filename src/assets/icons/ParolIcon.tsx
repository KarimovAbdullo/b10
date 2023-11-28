import * as React from 'react'
import { ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  color?: ColorValue
}

const ParolIcon = (props: IProps) => {
  const { color = 'black' } = props

  return (
    <Svg width="37" height="20" viewBox="0 0 37 20" fill="none">
      <Path
        d="M3.49996 16.574H33.5C34.4166 16.574 35.1666 17.324 35.1666 18.2407C35.1666 19.1573 34.4166 19.9073 33.5 19.9073H3.49996C2.58329 19.9073 1.83329 19.1573 1.83329 18.2407C1.83329 17.324 2.58329 16.574 3.49996 16.574ZM2.66663 9.19067C3.26663 9.54067 4.03329 9.32401 4.38329 8.72401L5.16663 7.35734L5.96663 8.74067C6.31663 9.34067 7.08329 9.54067 7.68329 9.20734C8.28329 8.85734 8.48329 8.10734 8.14996 7.50734L7.33329 6.10734H8.91663C9.59996 6.10734 10.1666 5.54067 10.1666 4.85734C10.1666 4.17401 9.59996 3.60734 8.91663 3.60734H7.33329L8.11663 2.24067C8.46663 1.64067 8.26663 0.874007 7.66663 0.524007C7.37619 0.362335 7.03405 0.320644 6.71328 0.407842C6.39252 0.495039 6.11857 0.704211 5.94996 0.990674L5.16663 2.35734L4.38329 0.990674C4.21468 0.704211 3.94073 0.495039 3.61997 0.407842C3.29921 0.320644 2.95706 0.362335 2.66663 0.524007C2.06663 0.874007 1.86663 1.64067 2.21663 2.24067L2.99996 3.60734H1.41663C0.733293 3.60734 0.166626 4.17401 0.166626 4.85734C0.166626 5.54067 0.733293 6.10734 1.41663 6.10734H2.99996L2.19996 7.49067C1.86663 8.09067 2.06663 8.85734 2.66663 9.19067ZM16 9.19067C16.6 9.54067 17.3666 9.32401 17.7166 8.72401L18.5 7.35734L19.3 8.74067C19.65 9.34067 20.4166 9.54067 21.0166 9.20734C21.6166 8.85734 21.8166 8.10734 21.4833 7.50734L20.6833 6.12401H22.2666C22.95 6.12401 23.5166 5.55734 23.5166 4.87401C23.5166 4.19067 22.95 3.62401 22.2666 3.62401H20.6666L21.45 2.25734C21.6148 1.96929 21.66 1.62806 21.5758 1.30703C21.4917 0.985997 21.2849 0.710817 21 0.540674C20.8588 0.458578 20.7028 0.405094 20.541 0.383279C20.3792 0.361464 20.2146 0.371744 20.0567 0.413532C19.8989 0.45532 19.7508 0.527797 19.6209 0.626824C19.4911 0.725851 19.382 0.849488 19.3 0.990674L18.5 2.35734L17.7166 0.990674C17.6352 0.84883 17.5265 0.724545 17.3967 0.625016C17.2669 0.525486 17.1187 0.452688 16.9606 0.410836C16.8024 0.368985 16.6376 0.358911 16.4756 0.381198C16.3136 0.403484 16.1576 0.457689 16.0166 0.540674C15.4166 0.890674 15.2166 1.65734 15.5666 2.25734L16.35 3.62401H14.75C14.5866 3.6218 14.4244 3.65207 14.2729 3.71306C14.1213 3.77405 13.9834 3.86455 13.8671 3.9793C13.7508 4.09404 13.6584 4.23075 13.5954 4.38148C13.5324 4.53221 13.4999 4.69396 13.5 4.85734C13.5 5.54067 14.0666 6.10734 14.75 6.10734H16.3333L15.5333 7.49067C15.2 8.09067 15.4 8.85734 16 9.19067ZM36.8333 4.85734C36.8333 4.17401 36.2666 3.60734 35.5833 3.60734H34L34.7833 2.24067C34.9481 1.95263 34.9933 1.61139 34.9092 1.29036C34.825 0.969331 34.6182 0.69415 34.3333 0.524007C34.1921 0.441911 34.0362 0.388428 33.8743 0.366613C33.7125 0.344798 33.5479 0.355077 33.3901 0.396865C33.2322 0.438653 33.0841 0.51113 32.9543 0.610157C32.8244 0.709184 32.7154 0.832821 32.6333 0.974007L31.8333 2.35734L31.05 0.990674C30.9685 0.84883 30.8598 0.724545 30.73 0.625016C30.6002 0.525486 30.452 0.452688 30.2939 0.410836C30.1358 0.368985 29.9709 0.358911 29.8089 0.381198C29.6469 0.403484 29.4909 0.457689 29.35 0.540674C28.75 0.890674 28.55 1.65734 28.9 2.25734L29.6833 3.62401H28.1C27.9354 3.62024 27.7717 3.64932 27.6185 3.70955C27.4653 3.76978 27.3257 3.85995 27.2077 3.97478C27.0898 4.08962 26.9959 4.22682 26.9316 4.37836C26.8673 4.52989 26.8339 4.69273 26.8333 4.85734C26.8333 5.54067 27.4 6.10734 28.0833 6.10734H29.6666L28.8666 7.49067C28.7839 7.63249 28.7303 7.78941 28.7089 7.95222C28.6876 8.11503 28.699 8.28046 28.7425 8.4388C28.786 8.59714 28.8606 8.74521 28.9621 8.87432C29.0635 9.00343 29.1897 9.11099 29.3333 9.19067C29.9333 9.54067 30.7 9.32401 31.05 8.72401L31.8333 7.35734L32.6333 8.74067C32.9833 9.34067 33.75 9.54067 34.35 9.20734C34.95 8.85734 35.15 8.10734 34.8166 7.50734L34.0166 6.12401H35.6C36.2666 6.10734 36.8333 5.54067 36.8333 4.85734Z"
        fill={color}
      />
    </Svg>
  )
}

export default ParolIcon


{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
"users":[
  {
    "name":"Kristin",
    "id":1
  }
],
 "foods":[
  {
    "id":1,
    "name":"Slicing with fruit",
    "title":"Easy to make slicng with friut and meet",
    "gr":650,
    "callory":799,
    "image":"https://github.com/AmirBayat0/Food-Mobile-App-UI-Flutter/blob/main/food_mobile_app_ui/assets/images/1.png"
  },
  {
    "id":2,
    "name":"Slicing with fruit",
    "title":"Easy to make slicng with friut and meet",
    "gr":650,
    "callory":799,
    "image":"https://github.com/AmirBayat0/Food-Mobile-App-UI-Flutter/blob/main/food_mobile_app_ui/assets/images/2.png"
  },
  {
    "id":3,
    "name":"Slicing with fruit",
    "title":"Easy to make slicng with friut and meet",
    "gr":650,
    "callory":799,
    "image":"https://github.com/AmirBayat0/Food-Mobile-App-UI-Flutter/blob/main/food_mobile_app_ui/assets/images/3.png"
  },
  {
    "id":4,
    "name":"Slicing with fruit",
    "title":"Easy to make slicng with friut and meet",
    "gr":650,
    "callory":799,
    "image":"https://github.com/AmirBayat0/Food-Mobile-App-UI-Flutter/blob/main/food_mobile_app_ui/assets/images/3.png"
  }
 ]
}