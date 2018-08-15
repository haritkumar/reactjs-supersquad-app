import React,{Component} from "react";
import { connect } from 'react-redux';

class Stats extends Component{
    
    strength(){
        let strength = 0;
        this.props.heroes.forEach(hero =>  strength += hero.strength);
        return strength;
    }

    intelligence(){
        let intelligence = 0;
        this.props.heroes.forEach(hero =>  intelligence += hero.intelligence);
        return intelligence;
    }

    speed(){
        let speed = 0;
        this.props.heroes.forEach(hero =>  speed += hero.speed);
        return speed;
    }
    render(){
        return(
            <div>
                <h3>STATS</h3>
                <ul className='list-group'>
                <li className='list-group-item'>
                    <b className='list-item'>Overall Stength : {this.strength()}</b>
                 </li>
                 <li className='list-group-item'>
                    <b className='list-item'>Overall Speed : {this.speed()}</b>
                 </li>
                 <li className='list-group-item'>
                    <b className='list-item'>Overall Intelligence : {this.intelligence()}</b>
                 </li>
                </ul>
            </div>    
        )
    }
}
function mapStateToProps(state){
    return {
        heroes: state.heroes
    };
}
export default connect(mapStateToProps,null)(Stats);