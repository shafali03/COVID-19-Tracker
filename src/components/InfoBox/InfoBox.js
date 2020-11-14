import React from 'react'
import './InfoBox.css'
import { Card, CardContent, Typography } from "@material-ui/core"

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className='infoBox'>
      <CardContent>
        <Typography color='textSecondary'>
          {title}
        </Typography>


        {/* number of cases */}
        <h2 className='infoBox__cases'>{cases}</h2>

        {/* total */}
        <Typography className='infoBox__total' color='textSecondary'>
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
