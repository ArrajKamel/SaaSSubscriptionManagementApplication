import React from 'react'
import CircularButton from '../../Components/CircularButton/CircularButton';

type Props = {}

const subPage = (props: Props) => {
    const onClink = () => console.log("form premium page, cancel button");

  return (
    <div>this is the premium page
        <CircularButton onClick={onClink}/>
    </div>


  )
}

export default subPage