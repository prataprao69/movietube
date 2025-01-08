import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './cards'
import Sdata from './sdata'

// function ncard(val){
//     return(
//         <Card 
//               id={val.key}
//               imgsrc={val.imgsrc}
//               title={val.title}
//               link={val.link}
//         />
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {/* <Card imgsrc= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\part1.jpg' title= 'Final Destination 1' link= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\movie1.mkv'/>
    <Card imgsrc= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\part2.jpg' title= 'Final Destination 2' link= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\movie2.mkv' />
    <Card imgsrc= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\part3.jpg' title= 'Final Destination 3' link= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\movie3.mkv' />
    <Card imgsrc= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\part4.jpg' title= 'Final Destination 4' link= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\movie4.mkv' />
    <Card imgsrc= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\part5.jpg' title= 'Final Destination 5' link= 'C:\Users\PRATAPRAO KALE\OneDrive\Desktop\ITvedant PS - 405\PS-405 REACT\movietube\src\final_destination\movie5.mkv' /> */}
    
    {/* <Card imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} link={Sdata[0].link} />
    <Card imgsrc={Sdata[1].imgsrc} title={Sdata[1].title} link={Sdata[1].link} />
    <Card imgsrc={Sdata[2].imgsrc} title={Sdata[2].title} link={Sdata[2].link} />
    <Card imgsrc={Sdata[3].imgsrc} title={Sdata[3].title} link={Sdata[3].link} />
    <Card imgsrc={Sdata[4].imgsrc} title={Sdata[4].title} link={Sdata[4].link} /> */}
    
    <>
        {
            Sdata.map((val)=>{
                return(
                    <Card 
                            key={val.id}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            link={val.link}
                            />
                )
            })
        }
    </>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();