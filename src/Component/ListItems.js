import React, { useState, useEffect } from 'react'
import { firestore } from '../index'
import 'bootstrap/dist/css/bootstrap.min.css';
import Diary from './Diary';

const ListItems = props => {


  const [armForms, setArmForm] = useState([{}])


  const retriveData = () => {

    firestore.collection("armForms").onSnapshot(snapshot => {

      console.log(snapshot);

      let myArmForm = snapshot.docs.map(d => {

        const { id, date,phy,comment, values } = d.data()
        console.log(id, date, phy,comment, values)
        return { id, date, phy,comment, values }

      })

      setArmForm(myArmForm)

    })
  }


  const renderArmForm = () => {

    console.log(armForms)

    if (armForms && armForms.length) {
      return armForms.map((armForms, index) => {
        return (
              <Diary armForms={armForms} index={index} />
        )
      })
    }
    
    else {
      return <li>No Result</li>
    }
  }

  useEffect(() => {
    retriveData()
  }, [])


  return (
    <div>
      <ul>{renderArmForm()}</ul>
    </div>
  );
}

export default ListItems;