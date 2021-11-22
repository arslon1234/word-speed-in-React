import React, { useState, useEffect, useRef } from "react";
import "../../app.scss";
import { Link } from "react-router-dom";

const getCloud = () => `olloh salom telefon ruchka maktab eshik juda muhim dengiz sariq davlat hisob kitob ilm dastur mana do'st chap ilon barmoq oyoq tom uzun va dunyo bosh mexanika olma stol banan ko'rmoq orol yuz muvaffaqiyatsizlik tuxum ekran aytmoq bormoq bermoq malumot qarz dars bilimdon faqat shu`.split(' ')
const getCloud1 = () => `submit java back internship kotlin wood smooth ocean sometimes Uzbekistan earth book is javaScript to mackbook see elon noutbook person windows ios an world header apple banana melon phone table sea face fale success tesla said go bring take info data version say any how`.split(' ')
const getCloud2 = () => `принять дать мир стажировка дерево гладкий иногда человек аголовок яблоко информацию иди дыня как скажи это песня а также много Почему со тот noutbook над сам или мой об Талия банан лицо один Вы язык улучшать при тении место желании наши русские формате слов чтобы`.split(' ')

function Word (props){
  const {text, active, correct} = props

  if(correct === true){
    return  <span className="correct" >{text} </span>
  }
  if(correct === false){
    return  <span className="incorrect" >{text} </span>
  }
  if(active){
    return  <span className="active" >{text} </span>
  }
  return <span>{text} </span>

}

function Timer(props){
  const {correctWords, startCounting} = props
  const [timeEllapsed, setTimeEllapsed] = useState(0)
  useEffect(() => {
     let id 
      if(startCounting){
      id =  setInterval(() => {
          setTimeEllapsed(oldTime => oldTime + 1)
        }, 1000);
      }
      return ()=>{
        clearInterval(id)
      }
  }, [startCounting])
  const minutes = timeEllapsed/60
  return  <div>
      <p className="time">Time: {timeEllapsed}</p>
      <p className="speed"> Correct Word Speed: {((correctWords/minutes) || 0).toFixed(2)} WPM </p>
     </div>
  
}
export default function Body() {
  const [userInput, setUserInput] = useState('')
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [activeWordIndex1, setActiveWordIndex1] = useState(0)
  const [activeWordIndex2, setActiveWordIndex2] = useState(0)
  const [correctWordArray, setCorrectWordArray] = useState([]) 
  const [correctWordArray1, setCorrectWordArray1] = useState([]) 
  const [correctWordArray2, setCorrectWordArray2] = useState([]) 
  const [startCounting, setStartCounting] = useState(false)
  const [startCounting1, setStartCounting1] = useState(false)
  const [startCounting2, setStartCounting2] = useState(false)
  const [openSelect, setOpenSelect] = useState(false)
  const [select, setSelect] = useState('')
  const cloud = useRef(getCloud())
  const cloud1 = useRef(getCloud1())
  const cloud2 = useRef(getCloud2())
  
  function processInput(value){


    if(activeWordIndex === cloud.current.length){
      return
    }
    if(activeWordIndex1 === cloud1.current.length){
      return
    }
    if(activeWordIndex2 === cloud2.current.length){
      return
    }

    if(!startCounting){
      setStartCounting(true)
    }
    if(!startCounting1){
      setStartCounting1(true)
    }
    if(!startCounting2){
      setStartCounting2(true)
    }
    if(value.endsWith(' ')) {

      // the user has finished this word 
      if(activeWordIndex === cloud.current.length-1){
        setStartCounting(false)
        setUserInput('Completed')
      } else {
      setUserInput('')
      }
      if(activeWordIndex1 === cloud1.current.length-1){
        setStartCounting1(false)
        setUserInput('Completed')
      }else{
      setUserInput('')
      }
      if(activeWordIndex2 === cloud2.current.length-1){
        setStartCounting2(false)
        setUserInput('Completed')
      }else{
      setUserInput('')
      }
      
      setActiveWordIndex(index => index + 1)
      setActiveWordIndex1(index => index + 1)
      setActiveWordIndex2(index => index + 1)


      // correct word
      setCorrectWordArray(data=>{
        const word = value.trim()
        const newResult = [...data]
        newResult[activeWordIndex] = word === cloud.current[activeWordIndex]
        return newResult
      })
      setCorrectWordArray1(data=>{
        const word = value.trim()
        const newResult = [...data]
        newResult[activeWordIndex1] = word === cloud1.current[activeWordIndex1]
        return newResult
      })
      setCorrectWordArray2(data=>{
        const word = value.trim()
        const newResult = [...data]
        newResult[activeWordIndex2] = word === cloud2.current[activeWordIndex2]
        return newResult
      })
    }
    else{
      setUserInput(value)
    }
  }
  return (
  
    <div className="app"> 
        <div className="typing">
        <h1>Typing Test</h1>
        <div className="desc">
        <Link to={'/login'}>
        <button>Login</button>
        </Link>
          <select  className="optionItem" value={select} onChange={(e)=>setSelect(e.target.value)}>
            <option value="english">English</option>
            <option value="uzbek">Uzbek</option>
            <option value="russion">Russion</option>
          </select>
          <span>Switch Typing Test language</span>
        </div>
        {
          select === "uzbek" ?
          <Timer
        startCounting={startCounting}
        correctWords={correctWordArray.filter(Boolean).length}
        /> :
        select === "english" ? 
        <Timer
        startCounting={startCounting1}
        correctWords={correctWordArray1.filter(Boolean).length}
        /> : 
        select === "russion" ? 
        <Timer
        startCounting={startCounting2}
        correctWords={correctWordArray2.filter(Boolean).length}
        /> : ""
        }
       
        <p className="data">
        {
          select === "english" ? 
          cloud1.current.map((word, index)=>{
         return <Word 
         text={word}
         active={index === activeWordIndex1}
         correct={correctWordArray1[index]}
         />})
           :
           select === "uzbek" ?
          cloud.current.map((word, index)=>{
         return <Word 
         text={word}
         active={index === activeWordIndex}
         correct={correctWordArray[index]}
         />}) :
         select === "russion" ?
         cloud2.current.map((word, index)=>{
         return <Word 
         text={word}
         active={index === activeWordIndex2}
         correct={correctWordArray2[index]}
         />}) : "Please select your language"
         }
         </p>
        <div className="inputBtn">
        <input type="text" placeholder="Enter your words" value={userInput} onChange={(e)=>processInput(e.target.value)} />
        </div> 
        <p className="result1">
        Number of words: 
        {
          select === "uzbek" ?
       cloud.current.length :
        select === "english" ? 
        cloud1.current.length : 
        select === "russion" ? 
        cloud2.current.length : "0"


        }
        
        </p>
        <p className="result2"> 
        Correct Words: 
        { select === "uzbek" ?
          correctWordArray.filter(Boolean).length :
          select === "english" ? 
          correctWordArray1.filter(Boolean).length :
          select === "russion" ?
          correctWordArray2.filter(Boolean).length :"0"
          }
        </p>

        <p className="result3">
        Incorrect Words: 
        { select === "uzbek" ?
          (cloud.current.length) - (correctWordArray.filter(Boolean).length)
          : 
          select === "english" ?
          (cloud1.current.length) - (correctWordArray1.filter(Boolean).length) :
          select === "russion" ?
          (cloud2.current.length) - (correctWordArray2.filter(Boolean).length) :
          "0"
          }
          </p>
        
        </div>
    </div>
  );
}

// {
//   count===1 ? <Invoice1/> : count===2 ? <Invoice2/> : count===3 ? <Invoice3/> : count===4 ? <Invoice4/> : ' '
//       }
