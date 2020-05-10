import React ,{Component} from 'react'
import '../../css/custom/customInput.css'

class CustomInput extends Component{
    state={
        inputValue:''
    }

    handleChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }

    render(){
        return (
            <div className="custom-input">
                <div className="custom-input-container">
                    <div className="label-container">
                        <label className="custom-label">{this.props.label}</label>
                    </div>
    
                    <div className="input-container">
                        <input 
                            type="text"
                            name="nic"
                            value={this.state.inputValue}
                            className="custom-input-field"
                            placeholder="Ex : 9740500v"
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
   
}

export default CustomInput
