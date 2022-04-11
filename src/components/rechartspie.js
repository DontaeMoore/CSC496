import React, { Component } from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";


  
  
  

  

export default class rechartspie extends Component {

  

  state = {
    data: null

  };

  

  async componentDidMount(){
 
    const health = this.props.HP;
    const attack = this.props.ATTACK;
    const defend = this.props.DEFENSE;
    console.log("Current state values " + health + " " + attack + " " + defend)
    
    

    this.setState({
    
      data: [
        { name: "Attack", users: attack,  fill: 'red' },
        { name: "Defense", users: defend, fill: 'blue'},
        { name: "Health", users: health, fill: 'green'}
        
      ]
     
     })

     
    
     

      
     
  }



  render() {
    this.setState();
    

    return (
      
      <div>
       

        <PieChart width={200} height={200}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={this.state.data}
            cx={100}
            cy={100}
            outerRadius={40}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
          
      </div>
    )
  }
}
