import React from 'react'
import Card from '../components/dashboard/card/card'
import Transactions from '../components/dashboard/transactions/Transactions'
import Chart from '../components/dashboard/chart/Chart'

const Dashboard = () => {
  return (
    <div>
      <div className='flex gap-4'>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
      <Transactions />
      </div>
      <div>
      <Chart />
      </div>
 </div>
  )
}

export default Dashboard